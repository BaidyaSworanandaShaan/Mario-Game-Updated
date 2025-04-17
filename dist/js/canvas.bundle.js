/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/base.js":
/*!************************!*\
  !*** ./src/js/base.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CANVAS_HEIGHT: () => (/* binding */ CANVAS_HEIGHT),
/* harmony export */   CANVAS_WIDTH: () => (/* binding */ CANVAS_WIDTH),
/* harmony export */   MAP: () => (/* binding */ MAP)
/* harmony export */ });
var CANVAS_HEIGHT = 480;
var CANVAS_WIDTH = 1280;
var MAP = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 12, 0, 0, 12, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 2, 3, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 3, 2, 2, 2, 2, 0, 0, 0, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 10, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 10, 0, 0, 0, 0, 0, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 0, 0, 0, 0, 0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 10, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 12, 0, 0, 0, 0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];


/***/ }),

/***/ "./src/js/constant.js":
/*!****************************!*\
  !*** ./src/js/constant.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tileSize: () => (/* binding */ tileSize)
/* harmony export */ });
var tileSize = 32;

/***/ }),

/***/ "./src/js/element.js":
/*!***************************!*\
  !*** ./src/js/element.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Element: () => (/* binding */ Element)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _dist_images_elements_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dist/images/elements.png */ "./dist/images/elements.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var elementImage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createImage)(_dist_images_elements_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var Element = /*#__PURE__*/function () {
  function Element(_ref) {
    var x = _ref.x,
      y = _ref.y,
      type = _ref.type;
    _classCallCheck(this, Element);
    this.x = x;
    this.y = y;
    this.type = type;
    this.width = 32;
    this.height = 32;
    this.sY = 0;
  }
  _createClass(Element, [{
    key: "draw",
    value: function draw(ctx) {
      this.sX = (this.type - 1) * this.width;
      ctx.drawImage(elementImage, this.sX, this.sY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
  }]);
  return Element;
}();

/***/ }),

/***/ "./src/js/goombas.js":
/*!***************************!*\
  !*** ./src/js/goombas.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Goomba: () => (/* binding */ Goomba)
/* harmony export */ });
/* harmony import */ var _dist_images_goomba_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/images/goomba.png */ "./dist/images/goomba.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var goombaImage = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_dist_images_goomba_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var Goomba = /*#__PURE__*/function () {
  function Goomba(_ref) {
    var x = _ref.x,
      y = _ref.y;
    _classCallCheck(this, Goomba);
    this.x = x;
    this.y = y;
    this.sX = 0;
    this.sY = 0;
    this.width = 32;
    this.height = 32;
    this.speed = 1;
    this.dx = this.speed;
    this.dy = 2;
    this.type = 12;
    this.state = "alive";
    this.frames = 0;
    this.maxTick = 10;
    this.tick = 0;
  }
  _createClass(Goomba, [{
    key: "draw",
    value: function draw(ctx) {
      this.sX = this.frames * this.width;
      ctx.drawImage(goombaImage, this.sX, this.sY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.state === "alive") {
        this.x += this.dx;
        this.tick++;
        if (this.tick > this.maxTick) {
          this.tick = 0;
          this.frames === 0 ? this.frames = 1 : this.frames = 0;
        }
        return;
      }
      if (this.state === "dead") {
        this.tick++;
        this.frames = 2;
        if (this.tick > 45) {
          this.frames = 4;
        }
        return;
      }
    }
  }]);
  return Goomba;
}();

/***/ }),

/***/ "./src/js/htmlElements.js":
/*!********************************!*\
  !*** ./src/js/htmlElements.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainScreenContainer: () => (/* binding */ mainScreenContainer),
/* harmony export */   menuScreenContainer: () => (/* binding */ menuScreenContainer),
/* harmony export */   startGameBtn: () => (/* binding */ startGameBtn)
/* harmony export */ });
var menuScreenContainer = document.querySelector(".menu-screen-container");
var startGameBtn = document.querySelector(".start-game-btn");
var mainScreenContainer = document.querySelector(".main-screen-container");

/***/ }),

/***/ "./src/js/initCanvas.js":
/*!******************************!*\
  !*** ./src/js/initCanvas.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCanvas: () => (/* binding */ initCanvas)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/js/base.js");

function initCanvas() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.height = _base__WEBPACK_IMPORTED_MODULE_0__.CANVAS_HEIGHT;
  canvas.width = _base__WEBPACK_IMPORTED_MODULE_0__.CANVAS_WIDTH;
  return {
    canvas: canvas,
    ctx: ctx
  };
}

/***/ }),

/***/ "./src/js/mario.js":
/*!*************************!*\
  !*** ./src/js/mario.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mario: () => (/* binding */ Mario)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _dist_images_mario_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dist/images/mario.png */ "./dist/images/mario.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var marioSprite = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createImage)(_dist_images_mario_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var Mario = /*#__PURE__*/function () {
  function Mario(_ref) {
    var x = _ref.x,
      y = _ref.y;
    _classCallCheck(this, Mario);
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 44;
    this.sX = 0;
    this.sY = 4;
    this.dx = 0;
    this.dy = 0;
    this.speed = 4;
    this.isInvulnerable = false;
    this.category = "small";
    this.isJumping = false;
    this.isOnGround = false;
    this.frames = 0;
    this.tick = 0;
    this.maxTick = 25;
  }
  _createClass(Mario, [{
    key: "draw",
    value: function draw(ctx) {
      if (!marioSprite.complete) return;
      var roundedY = this.y | 0;
      this.sX = this.frames * this.width;
      ctx.drawImage(marioSprite, this.sX, this.sY, this.width, this.height, this.x, roundedY, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.dx;
      this.y += this.dy;
    }
  }, {
    key: "updateSprite",
    value: function updateSprite() {
      if (this.category === "small") {
        this.height = 44;
        if (this.isInvulnerable) {
          this.sY = 222;
          return;
        }
        this.sY = 4;
        return;
      }
      this.height = 60;
      if (this.category === "big") {
        if (this.isInvulnerable) {
          this.sY = 276;
          return;
        }
        this.sY = 90;
        return;
      }

      // Super source Y
      this.sY = 152;
    }
  }]);
  return Mario;
}();

/***/ }),

/***/ "./src/js/screen.js":
/*!**************************!*\
  !*** ./src/js/screen.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showMenuScreen: () => (/* binding */ showMenuScreen)
/* harmony export */ });
/* harmony import */ var _dist_images_mario_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/images/mario-logo.png */ "./dist/images/mario-logo.png");
/* harmony import */ var _htmlElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlElements */ "./src/js/htmlElements.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");



function showMenuScreen() {
  var marioLogo = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_dist_images_mario_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  _htmlElements__WEBPACK_IMPORTED_MODULE_1__.menuScreenContainer.appendChild(marioLogo);
  marioLogo.height = 300;
}

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createImage: () => (/* binding */ createImage),
/* harmony export */   getCollisionDirection: () => (/* binding */ getCollisionDirection)
/* harmony export */ });
function createImage(src) {
  var image = new Image();
  image.src = src;
  return image;
}
function getCollisionDirection(elementA, elementB) {
  if (elementA.x + elementA.width >= elementB.x && elementA.x <= elementB.x + elementB.width && elementA.y + elementA.height >= elementB.y && elementA.y <= elementB.y + elementB.width) {
    var topDiff = elementB.y + elementB.height - elementA.y;
    var bottomDiff = elementA.y + elementA.height - elementB.y;
    var leftDiff = elementB.x + elementB.width - elementA.x;
    var rightDiff = elementA.x + elementA.width - elementB.x;
    var offset = Math.min(bottomDiff, topDiff, leftDiff, rightDiff);
    return {
      bottom: bottomDiff === offset,
      right: rightDiff === offset,
      left: leftDiff === offset,
      top: topDiff === offset,
      offset: offset
    };
  }
  return null;
}

/***/ }),

/***/ "./src/js/world.js":
/*!*************************!*\
  !*** ./src/js/world.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   World: () => (/* binding */ World)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/js/base.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./src/js/constant.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element */ "./src/js/element.js");
/* harmony import */ var _goombas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goombas */ "./src/js/goombas.js");
/* harmony import */ var _initCanvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initCanvas */ "./src/js/initCanvas.js");
/* harmony import */ var _mario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mario */ "./src/js/mario.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var maxMapWidth = _base__WEBPACK_IMPORTED_MODULE_0__.MAP[0].length * _constant__WEBPACK_IMPORTED_MODULE_1__.tileSize;
var gravity = 0.8;
var blocks = [2, 3, 4];
var flags = [5, 6];
var pipes = [7, 8, 9, 10];
var World = /*#__PURE__*/function () {
  function World() {
    _classCallCheck(this, World);
    this.init();
  }
  _createClass(World, [{
    key: "init",
    value: function init() {
      var _initCanvas = (0,_initCanvas__WEBPACK_IMPORTED_MODULE_4__.initCanvas)(),
        canvas = _initCanvas.canvas,
        ctx = _initCanvas.ctx;
      this.canvas = canvas;
      this.ctx = ctx;
      this.keys = {};
      this.mario = new _mario__WEBPACK_IMPORTED_MODULE_5__.Mario({
        x: 50,
        y: 100
      });
      this.score = 0;
      this.elements = {
        platforms: [],
        pipes: [],
        blocks: [],
        flags: []
      };
      this.goombas = [];
      this.powerUps = [];
      this.coins = [];
      this.bullets = [];
      this.centerPos = 0;
      this.coinCount = 0;
      this.scrollOffset = 0;
      this.setUpEventListener();
      this.renderMap();
      this.lastKey = "right";
      this.isGameActive = true;
      this.levelComplete = false;
      this.marioDeadFromGoomba = false;
      this.gameAnimationFrame;
    }
  }, {
    key: "setUpEventListener",
    value: function setUpEventListener() {
      var _this = this;
      addEventListener("keydown", function (e) {
        console.log(!_this.keys.space, !_this.mario.isJumping, _this.mario.isOnGround);
        if (e.code === "KeyA") {
          console.log("A");
          _this.keys.left = true;
          _this.lastKey = "left";
          return;
        }
        if (e.code === "KeyD") {
          console.log("D");
          _this.keys.right = true;
          _this.lastKey = "right";
          return;
        }
        if (e.code === "Space" && !_this.keys.space && !_this.mario.isJumping && _this.mario.isOnGround) {
          _this.keys.space = true;
          _this.mario.dy -= 13;
          return;
        }
      });
      addEventListener("keyup", function (e) {
        if (e.code === "KeyA") {
          console.log("A");
          _this.keys.left = false;
          return;
        }
        if (e.code === "KeyD") {
          console.log("D");
          _this.keys.right = false;
          return;
        }
        if (e.code === "Space") {
          _this.keys.space = false;
          console.log("Space");
          return;
        }
        if (e.code === "ControlLeft") {
          _this.keys.ctrl = false;
          return;
        }
      });
    }
  }, {
    key: "renderMap",
    value: function renderMap() {
      var _this2 = this;
      _base__WEBPACK_IMPORTED_MODULE_0__.MAP.forEach(function (row, rIndex) {
        row.forEach(function (column, cIndex) {
          if (column === 0) {
            return;
          }

          // Platform
          if (column === 1) {
            _this2.elements["platforms"].push(new _element__WEBPACK_IMPORTED_MODULE_2__.Element({
              x: cIndex * _constant__WEBPACK_IMPORTED_MODULE_1__.tileSize,
              y: rIndex * _constant__WEBPACK_IMPORTED_MODULE_1__.tileSize,
              type: column
            }));
            return;
          }

          // 2, 3, 4 ( Blocks )
          if (blocks.includes(column)) {
            _this2.elements["blocks"].push(new _element__WEBPACK_IMPORTED_MODULE_2__.Element({
              x: cIndex * _constant__WEBPACK_IMPORTED_MODULE_1__.tileSize,
              y: rIndex * _constant__WEBPACK_IMPORTED_MODULE_1__.tileSize,
              type: column
            }));
          }

          // 5, 6 ( FlagPole & Flag )
          if (flags.includes(column)) {
            _this2.elements["flags"].push(new _element__WEBPACK_IMPORTED_MODULE_2__.Element({
              x: cIndex * _constant__WEBPACK_IMPORTED_MODULE_1__.tileSize,
              y: rIndex * _constant__WEBPACK_IMPORTED_MODULE_1__.tileSize,
              type: column
            }));
          }

          // 7, 8, 9, 10 ( Pipes )
          if (pipes.includes(column)) {
            _this2.elements["pipes"].push(new _element__WEBPACK_IMPORTED_MODULE_2__.Element({
              x: cIndex * _constant__WEBPACK_IMPORTED_MODULE_1__.tileSize,
              y: rIndex * _constant__WEBPACK_IMPORTED_MODULE_1__.tileSize,
              type: column
            }));
            return;
          }

          // 12 ( Goomba )
          if (column === 12) {
            _this2.goombas.push(new _goombas__WEBPACK_IMPORTED_MODULE_3__.Goomba({
              x: cIndex * _constant__WEBPACK_IMPORTED_MODULE_1__.tileSize,
              y: rIndex * _constant__WEBPACK_IMPORTED_MODULE_1__.tileSize
            }));
          }
        });
      });
      console.log(this.goombas);
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this3 = this;
      this.gameAnimationFrame = requestAnimationFrame(function () {
        return _this3.animate();
      });
      this.renderLoop();
    }
  }, {
    key: "renderLoop",
    value: function renderLoop() {
      var _this4 = this;
      this.ctx.clearRect(this.scrollOffset, 0, _base__WEBPACK_IMPORTED_MODULE_0__.CANVAS_WIDTH, this.canvas.height);
      for (var elem in this.elements) {
        var element = this.elements[elem];
        element.forEach(function (item) {
          item.draw(_this4.ctx);
        });
      }
      this.goombas.forEach(function (goomba) {
        return goomba.draw(_this4.ctx);
      });
      this.mario.draw(this.ctx);
    }
  }, {
    key: "startGameUpdateInterval",
    value: function startGameUpdateInterval() {
      var _this5 = this;
      this.interval = setInterval(function () {
        _this5.gameLoop();
        _this5.checkMarioPlatformCollision();
        _this5.checkMarioGoombaCollision();
        _this5.checkMarioElementCollision(_this5.elements["blocks"]);
        _this5.checkMarioElementCollision(_this5.elements["pipes"]);
        _this5.checkGoombaElementCollision(_this5.elements["pipes"]);
        _this5.checkMarioFlagCollision();
      }, 15);
    }
  }, {
    key: "gameLoop",
    value: function gameLoop() {
      var _this6 = this;
      this.centerPos = this.scrollOffset + Math.floor(_base__WEBPACK_IMPORTED_MODULE_0__.CANVAS_WIDTH / 2) - 120;
      this.mario.update();
      this.moveMario();
      this.goombas.forEach(function (goomba, gIndex) {
        goomba.update();
        if (goomba.y > _base__WEBPACK_IMPORTED_MODULE_0__.CANVAS_HEIGHT) {
          _this6.goombas.splice(gIndex, 1);
        }
      });
      this.marioInGround = this.mario.isOnGround;
      if (this.mario.y + this.mario.height + this.mario.dy < _base__WEBPACK_IMPORTED_MODULE_0__.CANVAS_HEIGHT) {
        this.mario.dy += gravity;
        this.mario.isOnGround = false;
      } else if (this.mario.y - 32 > _base__WEBPACK_IMPORTED_MODULE_0__.CANVAS_HEIGHT) {
        this.isGameActive = false;
        clearInterval(this.interval);
        cancelAnimationFrame(this.gameAnimationFrame);
        setTimeout(function () {
          return _this6.restart();
        }, 2500);
      }
    }
  }, {
    key: "moveMario",
    value: function moveMario() {
      if (this.keys.left && this.keys.right) {
        this.mario.dx = 0;
        return;
      }
      if (this.keys.left) {
        // If Mario is not near left edge, just move left
        if (this.mario.x > this.centerPos || this.scrollOffset <= 0) {
          this.mario.dx = -this.mario.speed;
          return;
        }

        // Scroll screen right
        if (this.scrollOffset > 0) {
          this.scrollOffset -= this.mario.speed;
          this.ctx.translate(this.mario.speed, 0);
          this.mario.dx = 0;
          return;
        }
      }
      if (this.keys.right && this.mario.x < this.centerPos) {
        this.mario.dx = this.mario.speed;
        return;
      }
      this.mario.dx = 0;
      if (this.keys.right) {
        // Stop Mario if he reaches the end of the map
        if (this.mario.x >= maxMapWidth - 75) return;

        // Scroll screen left
        if (this.mario.x < maxMapWidth - _base__WEBPACK_IMPORTED_MODULE_0__.CANVAS_WIDTH / 2 - 160) {
          this.scrollOffset += this.mario.speed;
          this.ctx.translate(-this.mario.speed, 0); // Shift canvas left
          return;
        }

        // Move Mario forward when near end of map
        if (this.mario.x > maxMapWidth - this.centerPos) {
          this.mario.dx = this.mario.speed;
          return;
        }
      }
      return;
    }
  }, {
    key: "checkMarioPlatformCollision",
    value: function checkMarioPlatformCollision() {
      var _this7 = this;
      var platforms = this.elements.platforms;
      platforms.forEach(function (platform) {
        if (_this7.mario.x + _this7.mario.width > platform.x && _this7.mario.x < platform.x + platform.width && _this7.mario.y + _this7.mario.height + _this7.mario.dy >= platform.y) {
          _this7.mario.isJumping = false;
          _this7.mario.isOnGround = true;
          _this7.mario.dy = 0;
        }
      });
    }
  }, {
    key: "checkMarioGoombaCollision",
    value: function checkMarioGoombaCollision() {
      var _this8 = this;
      this.goombas.forEach(function (goomba, index) {
        if (goomba.state === "dead") {
          return;
        }
        if (_this8.mario.isInvulnerable) return;
        var dir = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getCollisionDirection)(_this8.mario, goomba);
        if (!dir) return;
        var _dir = dir,
          left = _dir.left,
          right = _dir.right,
          bottom = _dir.bottom,
          offset = _dir.offset;
        if (bottom) {
          goomba.state = "dead";
          _this8.mario.dy = -8;
          _this8.score += 80;
          setTimeout(function () {
            _this8.goombas.splice(index, 1);
          }, 800);
          return;
        }
        if ((left || right) && offset > 4) {
          if (_this8.mario.category === "small") {
            _this8.mario.frames = 13;
            _this8.marioDeadFromGoomba = true;
            _this8.isGameActive = false;
            clearInterval(_this8.interval);
            cancelAnimationFrame(_this8.gameAnimationFrame);
            setTimeout(function () {
              return _this8.restart();
            }, 2500);
            return;
          }
          dir = null;
          goomba.dx = -goomba.dx;
          _this8.mario.isInvulnerable = true;
          setTimeout(function () {
            _this8.mario.isInvulnerable = false;
          }, 1000);
          if (_this8.mario.category === "big") {
            _this8.mario.category = "small";
            return;
          }
          if (_this8.mario.category === "super") {
            _this8.mario.category = "big";
            return;
          }
        }
      });
    }
  }, {
    key: "checkMarioElementCollision",
    value: function checkMarioElementCollision(elementArray) {
      var _this9 = this;
      elementArray.forEach(function (element) {
        var dir = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getCollisionDirection)(_this9.mario, element);
        if (!dir) return;
        var left = dir.left,
          right = dir.right,
          top = dir.top,
          bottom = dir.bottom,
          offset = dir.offset;
        if (top) {
          if (blocks.includes(element.type)) {
            console.log(offset);
            _this9.mario.y += offset * 1.2;
            _this9.mario.dy = -_this9.mario.dy;
            if (element.type === 4) return;
            element.type = 4;
            return;
          }
          return;
        }
        if (bottom) {
          if (element.type === 7 || element.type === 8) return;
          _this9.mario.isJumping = false;
          _this9.mario.isOnGround = true;
          _this9.mario.y -= offset;
          _this9.mario.dy = 0;
          return;
        }
        if (left) {
          _this9.mario.x += offset;
          if (_this9.lastKey === "left") _this9.mario.dx = 0;
          return;
        }
        if (right) {
          _this9.mario.x -= offset;
          if (_this9.lastKey === "right") _this9.mario.dx = 0;
          return;
        }
      });
    }
  }, {
    key: "checkGoombaElementCollision",
    value: function checkGoombaElementCollision(elementArray) {
      var _this10 = this;
      elementArray.forEach(function (element) {
        _this10.goombas.forEach(function (goomba) {
          if (goomba.state === "dead") return;
          var dir = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getCollisionDirection)(goomba, element);
          if (!dir) return;
          if (dir.left || dir.right) {
            goomba.dx = -goomba.dx;
            return;
          }
        });
      });
    }
  }, {
    key: "checkMarioFlagCollision",
    value: function checkMarioFlagCollision() {
      var _this11 = this;
      var flags = this.elements.flags;
      flags.forEach(function (flag) {
        var dir = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getCollisionDirection)(_this11.mario, flag);
        if (!dir) return;
        var left = dir.left,
          right = dir.right;
        _this11.levelComplete = true;
        _this11.mario.dx = 0;
        _this11.mario.dy = 2;
        if (left) {
          _this11.mario.frames = 10;
        }
        if (right) {
          _this11.mario.frames = 11;
        }
        if (_this11.marioInGround) {
          _this11.mario.tick++;
          if (_this11.mario.tick > _this11.mario.maxTick) {
            _this11.mario.x += 10;
            _this11.mario.frames = 12;
            _this11.isGameActive = false;
            setTimeout(function () {
              return cancelAnimationFrame(_this11.gameAnimationFrame);
            }, 100);
          }
        }
      });
    }
  }, {
    key: "restart",
    value: function restart() {
      this.init();
      this.animate();
      this.startGameUpdateInterval();
    }
  }]);
  return World;
}();

/***/ }),

/***/ "./dist/images/elements.png":
/*!**********************************!*\
  !*** ./dist/images/elements.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d63369674c43eaa60cfe1abbf5df81b0.png");

/***/ }),

/***/ "./dist/images/goomba.png":
/*!********************************!*\
  !*** ./dist/images/goomba.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "caa028a1522c73c6ae659c81239ab34b.png");

/***/ }),

/***/ "./dist/images/mario-logo.png":
/*!************************************!*\
  !*** ./dist/images/mario-logo.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "1a508b11d3fd3fc5a3afc1885d84dfb9.png");

/***/ }),

/***/ "./dist/images/mario.png":
/*!*******************************!*\
  !*** ./dist/images/mario.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "483f685b1f0725a415f90d0f56502009.png");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _htmlElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElements */ "./src/js/htmlElements.js");
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen */ "./src/js/screen.js");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world */ "./src/js/world.js");



(0,_screen__WEBPACK_IMPORTED_MODULE_1__.showMenuScreen)();
_htmlElements__WEBPACK_IMPORTED_MODULE_0__.startGameBtn.addEventListener("click", function () {
  _htmlElements__WEBPACK_IMPORTED_MODULE_0__.menuScreenContainer.style.display = "none";
  _htmlElements__WEBPACK_IMPORTED_MODULE_0__.mainScreenContainer.style.display = "block";
  var world = new _world__WEBPACK_IMPORTED_MODULE_2__.World();
  world.animate();
  world.startGameUpdateInterval();
});
/******/ })()
;
//# sourceMappingURL=canvas.bundle.js.map