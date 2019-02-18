const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.demo.js');
const compiler = webpack(config);


// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler,{
  log: false,
  path: "/__what",
  heartbeat: 2000
}));
//Serve the files on port 8080.
app.listen(8080, function () {
  console.log('Example app listening on port 8080!\n');
});