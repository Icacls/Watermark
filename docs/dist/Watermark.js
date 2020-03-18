(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Watermark"] = factory();
	else
		root["Watermark"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// eslint-disable-next-line arrow-body-style

/**
 * check if is HTML element dom node
 * @return {Boolean}
 */
var isNode = function isNode(el) {
  return typeof HTMLElement === 'function' ? el instanceof HTMLElement : el && _typeof(el) === 'object' && el.nodeType === 1 && typeof el.nodeName === 'string';
};
/**
 * check if is string
 * @param {*} el
 * @return {Boolean}
 */


var isString = function isString(el) {
  return typeof el === 'string';
};
/**
 * check if is null
 * @param {*} object
 * @return {Boolean}
 */


var isNull = function isNull(object) {
  return object === null;
};
/**
 * get string length by font scale
 * @param {String} string
 * @param {*} scale font scale
 * @return {Number}
 *
 * @example length('Hello, 世界'， 0.5)
 * // 5.5
 */


var utils_length = function length(string, scale) {
  var l = 0;

  if (typeof string === 'string') {
    for (var i = 0; i < string.length; i++) {
      l += string.charCodeAt(i) < 128 ? scale : 1;
    }
  }

  return l;
};

var getNowFormatDate = function getNowFormatDate() {
  var char = '';
  var nowDate = new Date();
  var day = nowDate.getDate();
  var month = nowDate.getMonth() + 1; // 注意月份需要+1

  var year = nowDate.getFullYear(); // 补全0，并拼接

  var currentdate = year + char + (month < 10 ? '0' + month : month) + char + (day < 10 ? '0' + day : day);
  return currentdate;
};

/* harmony default export */ var utils = ({
  isNode: isNode,
  isString: isString,
  isNull: isNull,
  length: utils_length,
  getNowFormatDate: getNowFormatDate
});
// CONCATENATED MODULE: ./src/Watermark.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Watermark_Watermark =
/*#__PURE__*/
function () {
  function Watermark(employee) {
    _classCallCheck(this, Watermark);

    if (employee === undefined) {
      this.set();
    } else {
      this.set(employee);
    }

    this.mount();
    this.canvas = null;
    this.background = '';
  }
  /**
   * [calculate ctx -> draw canvs -> render]
   * @return {[type]} [description]
   */


  _createClass(Watermark, [{
    key: "draw",
    value: function draw() {
      if (utils.isNode(this.$el) && !utils.isNull(this.options)) {
        this.init();
        this.drawCanvas();

        if (this.options.auto) {
          this.render();
        }

        if (this.options.observe) {
          this.observe();
        }
      }

      return this;
    }
    /**
     * whitch element will display watermark
     * @param {String | HTMLElement} el
     * @return this
     */

  }, {
    key: "mount",
    value: function mount() {
      this.$el = document.querySelector('body');
      return this;
    }
    /**
     * unmount element
     */

  }, {
    key: "unMount",
    value: function unMount() {
      this.$el = null;
      return this;
    }
    /**
     * set watermark style
     * @param {Object} options
     * @return this
     */

  }, {
    key: "set",
    value: function set() {
      var employee = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // eslint-disable-next-line no-param-reassign
      var dateStr = utils.getNowFormatDate();
      var mark = "ID: ".concat(employee.id || '100034', "/").concat(employee.name || 'Example', "/").concat(dateStr);
      var options = {
        textArray: ['example'],
        textInfo: mark,
        fontSize: 15,
        fontFamily: 'serif',
        padding: 25,
        lineHeight: -1,
        rotate: 25,
        fontScale: 1,
        color: 'rgba(0, 0, 0, 0.2)',
        auto: true,
        observe: true
      };
      this.options = options;
      return this;
    }
    /**
     * initialize watermark style
     */

  }, {
    key: "init",
    value: function init() {
      this.initFont(); // 必须先初始化字体

      this.initSize(); // 然后计算画布大小
    }
    /**
     * 初始化字体，计算行高
     */

  }, {
    key: "initFont",
    value: function initFont() {
      var options = this.options;
      this.options.font = "".concat(options.fontSize, "px ").concat(options.fontFamily);

      if (options.lineHeight === -1) {
        this.options.lineHeight = 2.5 * options.fontSize;
      }
    }
    /**
     * 计算画布大小
     */

  }, {
    key: "initSize",
    value: function initSize() {
      var options = this.options; // max length of text array

      /* const maxLength = options.textArray.reduce((max, current) => {
        const currentLength = U.length(current, options.fontScale);
        return currentLength > max ? currentLength : max;
      }, 0); */

      var maxLength = utils.length(options.textInfo, options.fontScale); // 内容宽高

      var W = maxLength * options.fontSize + options.padding * 2;
      var H = options.lineHeight + options.padding * 2;
      var a = Math.abs(options.rotate); // 角度
      // 画布宽高context width => cW, context height => cH

      var ctxW = H * Math.sin(a) + W * Math.cos(a);
      var ctxH = H * Math.cos(a) + W * Math.sin(a);
      this.contentWidth = W;
      this.contentHeight = H;
      this.ctxWidth = 300 || false;
      this.ctxHeight = 300 || false;
    }
  }, {
    key: "drawCanvas",
    value: function drawCanvas() {
      var canvas = document.createElement('canvas');
      canvas.width = this.ctxWidth;
      canvas.height = this.ctxHeight;

      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var options = this.options; // ctx.translate(...this.origin(options.rotate));
        // ctx.rotate(options.rotate);

        ctx.rotate(-30 * Math.PI / 180);
        ctx.textAlign = 'left';
        ctx.textBaseline = 'Middle';
        ctx.font = options.font;
        ctx.fillStyle = options.color;
        var H = this.contentHeight; // 内容高度

        var a = Math.abs(options.rotate); // 旋转角度

        var offsetX = H * Math.cos(a) * Math.sin(a);
        /**
         * 第四象限
         * offsetY = H * Math.sin(a) * Math.sin(a)
         *
         * 第一象限
         * offsetX = H * Math.cos(a) * Math.cos(a)
         *
         * 因此，当 -PI/2 < rotate < PI/2 时
         * (PI/2 + rotate) % PI/2 的值计算正弦值，刚好符合上式
         * 例如，roate = 30, (90 + 30) % 90 = 30, sin(30) = 1/2
         * rotate = -30, (90 + (-30)) % 30 = 60, cos(60) = sin(30)
         */

        var halfPI = Math.PI / 2;
        var tmp = (halfPI + options.rotate) % halfPI;
        var offsetY = H * Math.sin(tmp) * Math.sin(tmp);
        /* options.textArray.forEach((text, i) => {
          const x = offsetX + options.padding;
          const y = i * options.lineHeight + offsetY + options.padding;
          ctx.fillText(text, x, y);
        }); */

        var x = offsetX + options.padding;
        var y = options.lineHeight + offsetY + options.padding;
        ctx.fillText(options.textInfo, x, y);
        this.canvas = canvas;
      }
    }
    /**
     * 获取坐标原点
     * @param {*} rotate 设置的水印旋转角度
     */

  }, {
    key: "origin",
    value: function origin(rotate) {
      var origin = [0, 0]; // 第四象限，定义左上角为坐标原点

      if (rotate < 0 && rotate > -Math.PI / 2) {
        // 第一象限，定义左下角为坐标原点
        origin = [0, this.ctxHeight];
      }

      return origin;
    }
    /**
     * 绘制。添加背景到指定节点上
     */

  }, {
    key: "render",
    value: function render() {
      var dataUrl = this.canvas.toDataURL();

      if (dataUrl) {
        this.$el.style.background = "url(".concat(dataUrl, ")");
      } else {
        this.$el.style.background = '';
      }

      this.background = this.$el.style.background;
      return this;
    }
    /**
     * 检测节点背景是否发生变化。
     */

  }, {
    key: "observe",
    value: function observe() {
      var _this = this;

      if (this.observer) {
        // remove observer
        this.observer.disconnect();
      }

      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          var target = mutation.target; // 检测背景是否与设置的水印相同

          if (target.style.background !== _this.background) {
            target.style.background = _this.background;
          }
        });
      });
      observer.observe(this.$el, {
        attributes: true,
        childList: false,
        attributeFilter: ['style']
      });
      this.observer = observer;
      return this;
    }
    /**
     * clear watermark
     */

  }, {
    key: "destory",
    value: function destory() {
      if (utils.isNode(this.$el)) {
        this.$el.style.background = '';
      }

      if (this.observer) {
        this.observer.disconnect();
      }

      this.observer = null;
      this.unMount();
      this.set();
    }
  }]);

  return Watermark;
}();

/* harmony default export */ var src_Watermark = __webpack_exports__["default"] = (Watermark_Watermark);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=Watermark.js.map