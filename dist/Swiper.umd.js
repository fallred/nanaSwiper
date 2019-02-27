!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define("Swiper",["react","prop-types"],t):"object"==typeof exports?exports.Swiper=t(require("react"),require("prop-types")):e.Swiper=t(e.React,e["prop-types"])}(window,function(n,i){return function(n){var i={};function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}return r.m=n,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=n},function(e,t){e.exports=i},,function(e,t,n){"use strict";n.r(t);var f=n(0),h=n.n(f),i=n(1),r=n.n(i);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==a.return||a.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(e){function o(e){var t,n,i;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),n=this,i=c(o).call(this,e),d(l(t=!i||"object"!==s(i)&&"function"!=typeof i?l(n):i),"canvasWidth",0),d(l(t),"canvasHeight",0),d(l(t),"image",new Image),d(l(t),"refs",null),d(l(t),"loadImagePromise",null),d(l(t),"row",0),d(l(t),"col",0),d(l(t),"fpsWidth",0),d(l(t),"fpsHeight",0),d(l(t),"currentRow",0),d(l(t),"currentCol",0),d(l(t),"fps",0),d(l(t),"stop",!0),d(l(t),"loaded",!1),d(l(t),"animationTimeout",null),d(l(t),"animating",!1),d(l(t),"time",0),d(l(t),"endtime",0),d(l(t),"animationTimer",null),t.canvasWidth=2*e.width,t.canvasHeight=2*e.height,t.speed=e.speed||1,t.image.src=e.spriteImg,t.loadImagePromise=t.loadImg(),t.props.spriteConf&&4===t.props.spriteConf.length){var r=a(t.props.spriteConf,4);t.row=r[0],t.col=r[1],t.fpsWidth=r[2],t.fpsHeight=r[3]}return t.canvas=function(e){e&&(t.refs=e,t.context=e.getContext("2d"))},t}var t,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(o,f["Component"]),t=o,(n=[{key:"shouldComponentUpdate",value:function(e){return console.log("shouldComponentUpdate",e.isMoving),0===e.isMoving||!(this.stop=!0)}},{key:"componentDidUpdate",value:function(){window.cancelAnimationFrame(this.animationTimer),this.context=this.refs.getContext("2d"),this.stop=!1,this.animating=!1,console.log("did update",this.animating),this.animate()}},{key:"componentDidMount",value:function(){var e=this;this.currentRow=0,this.currentCol=0,this.stop=!1,this.loaded?this.animate():this.loadImagePromise.then(function(){e.animate(),e.loaded=!0},function(e){return console.log(e)})}},{key:"componentWillUnmount",value:function(){this.stop=!0,this.context.clearRect&&this.context.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.image=null}},{key:"animate",value:function(){var i=this;i.animating||(i.animating=!0,function e(){if(i.fps>=i.speed){i.fps=0;var t=i.currentRow,n=i.currentCol;t===i.row?(i.currentRow=0,i.currentCol++):i.currentRow++,n>i.col&&(i.currentCol=0),i.drawSpirt()}i.fps++;!i.stop&&i.context&&(i.animationTimer=window.requestAnimationFrame(e))}())}},{key:"drawSpirt",value:function(){if(!this.stop){var e=this.currentRow,t=this.currentCol;"drawImage"in this.context&&this.context.drawImage(this.image,e*this.fpsWidth,t*this.fpsHeight,this.fpsWidth,this.fpsHeight,0,0,this.canvasWidth,this.canvasHeight)}}},{key:"loadImg",value:function(){var n=this;return new Promise(function(e,t){n.image.onload=e,n.image.onerror=t})}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.width;return h.a.createElement("canvas",{width:this.canvasWidth,height:this.canvasHeight,style:{width:n,height:t},ref:this.canvas})}}])&&u(t.prototype,n),i&&u(t,i),o}();o.propTypes={width:r.a.number.isRequired,height:r.a.number.isRequired,speed:r.a.number,spriteImg:r.a.string.isRequired,spriteConf:r.a.node.isRequired};var v,m,y=o,b=(v="Swiper",(m=Object(f.createContext)()).Provider.displayName="".concat(v,".Provider"),m.Consumer.displayName="".concat(v,".Consumer"),m);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function S(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j="ontouchstart"in window,T=function(e){function r(e){var t,n,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),n=this,M(O(t=!(i=x(r).call(this,e))||"object"!==w(i)&&"function"!=typeof i?O(n):i),"startPoint",0),M(O(t),"movePoint",0),M(O(t),"endPoint",0),M(O(t),"moveingStart",!1),M(O(t),"isMoving",0),M(O(t),"swiperWidth",0),M(O(t),"swiperHeight",0),M(O(t),"initMovex",0),M(O(t),"currentSliderIndex",0),M(O(t),"sensitive",.5),M(O(t),"isFreeMode",!1),M(O(t),"isLoop",!1),M(O(t),"slideType",""),M(O(t),"sliders",[]),M(O(t),"bounds",{}),M(O(t),"boundsMove",{}),M(O(t),"SwiperWrapper","SwiperWrapper"),M(O(t),"SwiperSlider","SwiperSlider"),M(O(t),"SwiperActive","SwiperActive"),M(O(t),"SwiperSliderNav","SwiperSliderNav"),M(O(t),"SwiperItemNav","SwiperItemNav"),M(O(t),"SwiperNavActive","SwiperNavActive"),t.slideType=e.slideType||t.slideType,t.isFreeMode=e.isFreeMode||t.isFreeMode,t.sensitive=e.sensitive||t.sensitive,t.sliders=e.children,t.isLoop=1<t.sliders.length&&e.isLoop||t.isLoop,t.currentSliderIndex=e.initSliderIndex||0,t.initMovex=e.initMovex||t.initMovex,t.initMovex=t.initMovex<1?t.initMovex*t.props.width:t.initMovex,t.swiperWidth=t.props.width||window.innerWidth,t.swiperHeight=t.props.height||300,t.init(),t.state={moveX:t.initMovex-t.currentSliderIndex*t.swiperWidth,isMoving:0,isTransition:!1,isLoaded:!0},t}var t,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(r,f["Component"]),t=r,(n=[{key:"init",value:function(){this.isLoop?(this.sliders=[h.a.cloneElement(this.sliders.slice(-1)[0],{key:"SwiperFirst",index:0})].concat(g(this.sliders.map(function(e,t){return h.a.cloneElement(e,{key:"Swiper"+(t+1),index:t+1})})),[h.a.cloneElement(this.sliders.slice(0,1)[0],{key:"SwiperLast",index:this.sliders.length+1})]),this.bounds={min:1,max:this.sliders.length-1},this.currentSliderIndex++):(this.sliders=this.sliders.map(function(e,t){return h.a.cloneElement(e,{key:"Swiper"+t,index:t})}),this.bounds={min:0,max:this.sliders.length-1}),this.boundsMove={min:-this.bounds.max*this.swiperWidth-this.initMovex,max:this.initMovex}}},{key:"componentDidMount",value:function(){}},{key:"getPointX",value:function(e){return j?e.touches[0].clientX:e.clientX}},{key:"touchstart",value:function(e){("mousedown"===e.type&&!j||"touchstart"===e.type&&j)&&(this.startPoint=this.getPointX(e),this.movePoint=this.startPoint,this.endPoint=this.startPoint,this.moveingStart=!0)}},{key:"touchmove",value:function(e){if(this.moveingStart&&("mousemove"===e.type&&!j||"touchmove"===e.type&&j)){e.preventDefault(),this.endPoint=this.getPointX(e);var t=this.endPoint-this.movePoint+this.state.moveX;this.movePoint=this.endPoint,this.isMoving=0<this.movePoint-this.startPoint?-1:1,this.setState({isTransition:!1,moveX:t})}}},{key:"touchend",value:function(e){(("mouseleave"===e.type||"mouseup"===e.type)&&!j||"touchend"===e.type&&j)&&(this.moveingStart=!1,this.startPoint!==this.endPoint?(e.preventDefault(),this.slideTo(this.calculateSlider())):this.isMoving=0)}},{key:"calculateSlider",value:function(){var e=this.bounds,t=e.min,n=e.max,i=Math.abs(this.state.moveX/this.swiperWidth),r=this.currentSliderIndex,o=i-r;return 1===this.isMoving&&o>this.sensitive?r=1<(r=Math.ceil(i))-this.currentSliderIndex?r-1:r:-1===this.isMoving&&o<-this.sensitive&&(r=(r=Math.floor(i))-this.currentSliderIndex<-1?r+1:r),r=r<t?0:n<r?n:r}},{key:"fixLoop",value:function(){if(this.isLoop){var e=this.bounds,t=e.min,n=e.max;this.currentSliderIndex<t&&(this.currentSliderIndex=n-1,this.setState({isTransition:!1,moveX:-this.currentSliderIndex*this.swiperWidth+this.initMovex})),this.currentSliderIndex>=n&&(this.currentSliderIndex=1,this.setState({isTransition:!1,moveX:-this.swiperWidth+this.initMovex}))}}},{key:"slideTo",value:function(e,t){if(!this.moveingStart&&0!==this.isMoving){var n=this.boundsMove,i=n.min,r=n.max;this.currentSliderIndex=e,t||!this.isFreeMode||this.state.moveX<i||this.state.moveX>r?this.setState({isTransition:!0,moveX:-e*this.swiperWidth+this.initMovex}):this.currentSliderIndex=e}}},{key:"clickSlideTo",value:function(e){this.isMoving=1,this.slideTo(e,!0)}},{key:"transitionend",value:function(){this.isMoving=0,this.setState({isTransition:!1}),this.fixLoop()}},{key:"render",value:function(){var n=this;if(this.sliders.length<1||!this.state.isLoaded)return h.a.createElement("div",null);var e=this.state,t=e.moveX,i=e.isTransition?"300ms":"0ms",r="translate3d(".concat(t,"px, 0px, 0px)"),o=this.SwiperWrapper,s=this.SwiperSlider,a=this.SwiperActive,u=this.SwiperSliderNav,c=this.SwiperItemNav,l=this.SwiperNavActive,p=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(e){M(t,e,n[e])})}return t}({},this.state,{isMoving:this.isMoving,currentSliderIndex:this.currentSliderIndex,SwiperSlider:s,SwiperActive:a});return h.a.createElement(f.Fragment,null,h.a.createElement("div",{className:o,onTouchStart:function(e){n.touchstart(e)},onTouchMove:function(e){n.touchmove(e)},onTouchEnd:function(e){n.touchend(e)},onMouseDown:function(e){n.touchstart(e)},onMouseMove:function(e){n.touchmove(e)},onMouseUp:function(e){n.touchend(e)},onMouseLeave:function(e){n.touchend(e)},onTransitionEnd:function(e){n.transitionend()},style:{WebkitTransitionDuration:i,transitionDuration:i,WebkitTransform:r,transform:r,height:this.swiperHeight}},h.a.createElement(b.Provider,{value:p,children:this.sliders||null})),h.a.createElement("div",{className:u},this.sliders.map(function(e,t){return h.a.createElement(f.Fragment,{key:"nav_".concat(t)},!n.isLoop||0!==t&&t!==n.bounds.max?h.a.createElement("div",{className:"".concat(c," ").concat(n.currentSliderIndex===t?l:""),onClickCapture:function(){n.clickSlideTo(t)}}):"")})))}}])&&S(t.prototype,n),i&&S(t,i),r}();T.propTypes={children:r.a.node.isRequired};var k=T;function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function E(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,C(t).apply(this,arguments))}var n,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(t,f["Component"]),n=t,(i=[{key:"render",value:function(){var c=this;return h.a.createElement(b.Consumer,null,function(e){var t=e.currentSliderIndex,n=e.isMoving,i=e.SwiperSlider,r=e.SwiperActive,o=c.props,s=o.index,a=o.width,u=o.height;return h.a.createElement("div",{style:{width:a||"100%",height:u||"300px"},className:"".concat(i," ").concat(t===s?r:"")},c.props.render(function(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(e){var t,n,i;t=r,i=o[n=e],n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i})}return r}({},c.props,{isMoving:n,isActive:t===s})))})}}])&&_(n.prototype,i),r&&_(n,r),t}();A.propTypes={render:r.a.func.isRequired,index:r.a.number};var R=A;n.d(t,"Sprite",function(){return y}),n.d(t,"SwiperSlider",function(){return R});t.default=k}])});