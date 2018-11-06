/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MouseTracker_js__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Swively = function () {
    function Swively(container, inner, options) {
        _classCallCheck(this, Swively);

        this.mouse = new __WEBPACK_IMPORTED_MODULE_0__MouseTracker_js__["a" /* default */]();
        this.container = container;
        this.inner = inner;
        this.mouse.setOrigin(this.container);
        this.setPerspective(options.perspective);
        this.setTransition(options.transition);
        this.setTransformOrigin();
        this.setEvents();
    }

    _createClass(Swively, [{
        key: 'setEvents',
        value: function setEvents() {
            var _this = this;

            this.container.addEventListener('mouseenter', function (e) {
                return _this.update(e);
            });
            this.container.addEventListener('mouseleave', function (e) {
                return _this.reset();
            });
            this.container.addEventListener('mousemove', function (e) {
                return _this.update(e);
            });
        }
    }, {
        key: 'setPerspective',
        value: function setPerspective(amount) {
            this.container.style.perspective = amount + 'px';
        }
    }, {
        key: 'setTransformOrigin',
        value: function setTransformOrigin() {
            var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'center center';

            this.inner.style.transformOrigin = position;
        }
    }, {
        key: 'setTransition',
        value: function setTransition(duration) {
            this.inner.style.transition = 'transform ' + duration + 'ms';
        }
    }, {
        key: 'update',
        value: function update(e) {
            this.mouse.updatePosition(e);
            var x = (this.mouse.y / inner.offsetHeight / 2).toFixed(2);
            var y = (this.mouse.x / inner.offsetWidth / 2).toFixed(2);
            this.setTransform(x, y);
        }
    }, {
        key: 'setTransform',
        value: function setTransform(x, y) {
            var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
            inner.style.transform = style;
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.inner.style.transform = null;
        }
    }]);

    return Swively;
}();

/* harmony default export */ __webpack_exports__["default"] = (Swively);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MouseTracker = function () {
    function MouseTracker() {
        _classCallCheck(this, MouseTracker);

        this._x = 0;
        this._y = 0;
        this.x = 0;
        this.y = 0;
    }

    _createClass(MouseTracker, [{
        key: "updatePosition",
        value: function updatePosition(e) {
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        }
    }, {
        key: "setOrigin",
        value: function setOrigin(container) {
            this._x = container.offsetLeft + Math.floor(container.offsetWidth / 2);
            this._y = container.offsetTop + Math.floor(container.offsetHeight / 2);
        }
    }]);

    return MouseTracker;
}();

/* harmony default export */ __webpack_exports__["a"] = (MouseTracker);

/***/ })
/******/ ]);