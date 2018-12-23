const path = require('path');
const webpack = require('webpack');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const getCacheIdentifier = require('react-dev-utils/getCacheIdentifier');


// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

// common function to get style loaders
const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebook/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            // autoprefixer: {
            //   flexbox: 'no-2009',
            // },
            // stage: 3,
            browsers: 'last 8 versions'
          }),
        ],
      },
    },
  ];
  if (preProcessor) {
    loaders.push(require.resolve(preProcessor));
  }
  return loaders;
};

const config = {
  context: __dirname,
  mode: 'development',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    path.join(__dirname, 'demo/index.js')
  ],
  output: {
    path: path.join(__dirname, 'demo/dist'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization:{
    minimize:true,
    splitChunks: {
      chunks: 'all',
      name: false,
    },
    runtimeChunk: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, '/demo/tpl/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: require.resolve('react-dev-utils/eslintFormatter'),
              eslintPath: require.resolve('eslint'),
              // @remove-on-eject-begin
              // TODO: consider separate config for production,
              // e.g. to enable no-console and no-debugger only in production.
              baseConfig: {
                extends: [require.resolve('eslint-config-react-app')],
                settings: { react: { version: '999.999.999' } },
              },
              ignore: false,
              useEslintrc: false,
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: path.join(__dirname, 'demo/'),
      },
      {
        oneOf: [
          {
            test: /\.(js|mjs|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          // "postcss" loader applies autoprefixer to our CSS.
          // "css" loader resolves paths in CSS and adds assets as dependencies.
          // "style" loader turns CSS into JS modules that inject <style> tags.
          // In production, we use a plugin to extract that CSS to a file, but
          // in development "style" loader enables hot editing of CSS.
          // By default we support CSS Modules with the extension .module.css
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            use: getStyleLoaders({
              importLoaders: 1,
            }),
          },
          // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
          // using the extension .module.css
          {
            test: cssModuleRegex,
            use: getStyleLoaders({
              importLoaders: 1,
              modules: true,
              getLocalIdent: getCSSModuleLocalIdent,
            }),
          },
          // Opt-in support for SASS (using .scss or .sass extensions).
          // Chains the sass-loader with the css-loader and the style-loader
          // to immediately apply all styles to the DOM.
          // By default we support SASS Modules with the
          // extensions .module.scss or .module.sass
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: getStyleLoaders({ importLoaders: 2 }, 'sass-loader'),
          },
          // Adds support for CSS Modules, but using SASS
          // using the extension .module.scss or .module.sass
          {
            test: sassModuleRegex,
            use: getStyleLoaders(
              {
                importLoaders: 2,
                modules: true,
                getLocalIdent: getCSSModuleLocalIdent,
              },
              'sass-loader'
            ),
          },
          //pictures
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          }]
      }
    ]
  }
};

module.exports = config;