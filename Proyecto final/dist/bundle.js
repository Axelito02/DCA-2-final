/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/banner/style.css":
/*!*****************************************!*\
  !*** ./src/components/banner/style.css ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".banner {\\r\\n    display: flex;\\r\\n    width: 100%;\\r\\n}\\r\\n  \\r\\n.banner img {\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n    .banner {\\r\\n        height: 300px; \\r\\n    }\\r\\n    .banner img {\\r\\n        height: 100%;\\r\\n        width: 100%;\\r\\n        object-fit: cover; \\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 767px) {\\r\\n    .banner {\\r\\n        height: auto;\\r\\n    }\\r\\n    .banner img {\\r\\n        max-width: 100%;\\r\\n        height: auto;\\r\\n        object-fit: unset;\\r\\n        min-width: 100%; \\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://taller2/./src/components/banner/style.css?");

/***/ }),

/***/ "./src/components/card/style.css":
/*!***************************************!*\
  !*** ./src/components/card/style.css ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\r\\n  background-color: rgba(14, 15, 56, 1);\\r\\n  color: white;\\r\\n  font-family: sans-serif;\\r\\n  \\r\\n}\\r\\n\\r\\ndiv::-webkit-scrollbar {\\r\\ndisplay: none;\\r\\n}\\r\\n\\r\\n#carousel-container {\\r\\npadding: 1rem;\\r\\nposition: sticky;\\r\\nwidth: 100%;\\r\\noverflow-x: scroll;\\r\\nwhite-space: nowrap;\\r\\noverflow-y: hidden;\\r\\nscroll-snap-type: x mandatory;\\r\\n}\\r\\n\\r\\n#app {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  width: 100%;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n#carousel {\\r\\n  width: 90%;\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\n#carousel:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.juego-card {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  border-radius: 5px;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.juego-card:hover {\\r\\n  background-color: rgb(21, 22, 74);\\r\\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\n.juego-card img {\\r\\n  width: 200px;\\r\\n  height: 200px;\\r\\n  object-fit: cover;\\r\\n}\\r\\n\\r\\n.juego-card h2 {\\r\\n  margin: 8px 0;\\r\\n  font-size: 24px;\\r\\n  font-weight: 700;\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n.juego-card h3 {\\r\\n  background-color: transparent;\\r\\n  margin: 10px;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 1280px) {\\r\\n\\r\\n  .juego-card h3{\\r\\n    display: none;\\r\\n  }\\r\\n  .juego-card h2{\\r\\n    display: none;\\r\\n  }\\r\\n  .juego-card .name{\\r\\n    display: block;\\r\\n  }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://taller2/./src/components/card/style.css?");

/***/ }),

/***/ "./src/components/gameweek/style.css":
/*!*******************************************!*\
  !*** ./src/components/gameweek/style.css ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":host{\\r\\n    display: flex;\\r\\n    width: 96%;\\r\\n}\\r\\n\\r\\n.card-platform{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: 100%;\\r\\n    column-gap: 1.5rem;\\r\\n}\\r\\n\\r\\n.card-platform img{\\r\\n    width: 3rem;\\r\\n    margin-bottom: 0.9rem;\\r\\n}\\r\\n\\r\\n.card-platform img:hover{\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.carContainer{\\r\\n    display: flex;\\r\\n    padding: 0 20px;\\r\\n    margin: 0;\\r\\n    background-color: #252848;\\r\\n    justify-content: center;\\r\\n    border-radius: 20px 20px 0px 0px;\\r\\n}\\r\\n\\r\\n.card{\\r\\n    margin: 0;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.card-body{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.card img{\\r\\n   border-radius: 8px;\\r\\n}\\r\\n\\r\\n.name{\\r\\n    display: flex;\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    margin-bottom: 19px;\\r\\n}\\r\\n\\r\\np{\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    justify-content: center;\\r\\n    align-content: center;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 900px) {\\r\\n\\r\\n    .card-body{\\r\\n        width: 100%;\\r\\n    }\\r\\n\\r\\n    .name{\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .carContainer{\\r\\n        padding: 0 12px;\\r\\n    }\\r\\n\\r\\n    .contImg{\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n        width: 100%;\\r\\n    }\\r\\n\\r\\n    .contImg img{\\r\\n        width: 100%;\\r\\n    }\\r\\n\\r\\n    .contImg{\\r\\n        display: flex;\\r\\n        width: 100%;\\r\\n    }\\r\\n\\r\\n    :host{\\r\\n        display: flex;\\r\\n        width: 100%;\\r\\n    }\\r\\n\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://taller2/./src/components/gameweek/style.css?");

/***/ }),

/***/ "./src/components/nav/style.css":
/*!**************************************!*\
  !*** ./src/components/nav/style.css ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".cont-nav {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    margin: 0;\\r\\n    width: 100%;\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\n.col{\\r\\n    padding: 0.5rem;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    margin: 0;\\r\\n    background-color: #252848;\\r\\n    border-left: solid;\\r\\n    border-bottom: solid;\\r\\n    border-width: 1px;\\r\\n}\\r\\n\\r\\n.col:hover{\\r\\n    cursor: pointer;\\r\\n    background-color: #2f3257;\\r\\n}\\r\\n\\r\\n.col:focus{\\r\\n    border-bottom: none;\\r\\n    background-color: #0E0F38;\\r\\n}\\r\\n\\r\\n.uno {\\r\\n    border-left: none ;\\r\\n}\\r\\n\\r\\n@media (min-width: 900px) {\\r\\n    .tres{\\r\\n        display: none;\\r\\n    }\\r\\n    \\r\\n}\\r\\n\\r\\n@media (max-width: 900px) {\\r\\n.tres-log{\\r\\n    display: none;\\r\\n}\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://taller2/./src/components/nav/style.css?");

/***/ }),

/***/ "./src/components/post/comment/style.css":
/*!***********************************************!*\
  !*** ./src/components/post/comment/style.css ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":host{\\r\\n    padding: 12px 0;\\r\\n}\\r\\n\\r\\n.contInput{\\r\\n    display: flex;\\r\\n    width: 100%;\\r\\n    height: 2.5rem;\\r\\n    gap: 16px;\\r\\n}\\r\\n\\r\\n.contInput input{\\r\\n    color: #FEFEFE;\\r\\n    background-color: #363B7A;\\r\\n    border: none;\\r\\n    border-radius: 12px;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    padding: 0 16px;\\r\\n}\\r\\n\\r\\n.contInput input::placeholder {\\r\\n    color: #FEFEFE; \\r\\n}\\r\\n\\r\\n.btnSend{\\r\\n    padding: 0 12px;\\r\\n    background-color: #666BA5;\\r\\n    color: #FEFEFE;\\r\\n    border-radius: 8px;\\r\\n    border: none;\\r\\n}\\r\\n\\r\\n.btnSend:hover{\\r\\n    padding: 0 12px;\\r\\n    background-color: #555a8d;\\r\\n    color: #FEFEFE;\\r\\n    border-radius: 8px;\\r\\n    border: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://taller2/./src/components/post/comment/style.css?");

/***/ }),

/***/ "./src/components/post/comments/style.css":
/*!************************************************!*\
  !*** ./src/components/post/comments/style.css ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":host{\\r\\n    padding: 12px 0;\\r\\n}\\r\\n\\r\\n.card-posts{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    background-color: #4C4F78;\\r\\n    padding: 1rem;\\r\\n    border-radius: 10px;\\r\\n}\\r\\n\\r\\n.hastag{\\r\\n    display: flex;\\r\\n    padding: 0;\\r\\n    padding-bottom: 18px;\\r\\n    justify-content: flex-start;\\r\\n}\\r\\n\\r\\n.content{\\r\\n    display: flex;\\r\\n    padding: 0;\\r\\n    padding-bottom: 18px;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://taller2/./src/components/post/comments/style.css?");

/***/ }),

/***/ "./src/components/post/style.css":
/*!***************************************!*\
  !*** ./src/components/post/style.css ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":host{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    width: 96%;\\r\\n}\\r\\n\\r\\n.title{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.contTop{\\r\\n    display: flex;\\r\\n    gap: 24px;\\r\\n    box-sizing: border-box;\\r\\n    justify-content: space-between;\\r\\n    padding: 12px 0;\\r\\n}\\r\\n\\r\\n.contTop h2{\\r\\n    margin: 0;\\r\\n}\\r\\n\\r\\n.card-platform{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: 100%;\\r\\n    column-gap: 1.5rem;\\r\\n}\\r\\n\\r\\n.card-platform img{\\r\\n    width: 3rem;\\r\\n    margin-bottom: 0.9rem;\\r\\n}\\r\\n\\r\\n.card-platform img:hover{\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.carContainer{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding: 0 20px;\\r\\n    margin: 0;\\r\\n    background-color: #252848;\\r\\n    justify-content: center;\\r\\n    border-radius: 20px 20px 0px 0px;\\r\\n}\\r\\n\\r\\n.card{\\r\\n    margin: 0;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 900px) {\\r\\n\\r\\n    :host{\\r\\n        display: flex;\\r\\n        width: 100%;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://taller2/./src/components/post/style.css?");

/***/ }),

/***/ "./src/components/post/user/style.css":
/*!********************************************!*\
  !*** ./src/components/post/user/style.css ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":host{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.user{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.user img{\\r\\n    border-radius: 8rem;\\r\\n    display: flex;\\r\\n    width: 3rem;\\r\\n}\\r\\n\\r\\n.username{\\r\\n    margin: 0;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://taller2/./src/components/post/user/style.css?");

/***/ }),

/***/ "./src/components/search/bar/style.css":
/*!*********************************************!*\
  !*** ./src/components/search/bar/style.css ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".bar-search{\\r\\n    background-color: #F8F8F8;\\r\\n    padding: 0.5rem;\\r\\n    border-radius: 0.7rem;\\r\\n    border: none;\\r\\n    width: 100%;\\r\\n    opacity: 0.7;\\r\\n}\\r\\n\\r\\n.btn{\\r\\n    display: none;\\r\\n    background-color: #252848;\\r\\n    color: #F8F8F8;\\r\\n    border-radius: 0.5rem;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    padding: 8px;\\r\\n    width: 10rem;\\r\\n    border-color: #C7C7C7;\\r\\n    border: 1px solid;\\r\\n}\\r\\n\\r\\n.btn:hover{\\r\\n    cursor: pointer;\\r\\n    background-color: #232445;\\r\\n    border-color: #a6a5a5;\\r\\n}\\r\\n\\r\\n.col{\\r\\n    display: flex;\\r\\n    width: 100%;\\r\\n    gap: 12px;\\r\\n    justify-content: flex-end;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 900px) {\\r\\n    .btn{\\r\\n        display: flex;\\r\\n    }\\r\\n\\r\\n    .bar-search{\\r\\n        width: 32%;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://taller2/./src/components/search/bar/style.css?");

/***/ }),

/***/ "./src/components/search/style.css":
/*!*****************************************!*\
  !*** ./src/components/search/style.css ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".row{\\r\\n    display: flex;\\r\\n    margin: 1rem 0px;\\r\\n    position: absolute;\\r\\n    width: 100%;\\r\\n    font-family: sans-serif;\\r\\n}\\r\\n\\r\\n.header{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    width: 100%;\\r\\n    margin: 0 1rem;\\r\\n    height: 3rem;\\r\\n    gap: 1rem;\\r\\n}\\r\\n\\r\\n.header img{\\r\\n    height: 100%;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://taller2/./src/components/search/style.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://taller2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://taller2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/account/account.ts":
/*!*******************************************!*\
  !*** ./src/components/account/account.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Account)\n/* harmony export */ });\nclass Account extends HTMLElement {\n    static get observedAttributes() {\n        return [\"text_btn\", \"text\"];\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        console.log(propName, newValue);\n        this.render();\n    }\n    constructor() {\n        super();\n        this.text_btn = \"\";\n        this.text = \"\";\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        const text = this.ownerDocument.createElement(\"p\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(text);\n        text.textContent = this.text;\n        const button = this.ownerDocument.createElement(\"button\");\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(button);\n        button.textContent = this.text_btn;\n    }\n}\ncustomElements.define('comp-account', Account);\n\n\n//# sourceURL=webpack://taller2/./src/components/account/account.ts?");

/***/ }),

/***/ "./src/components/banner/banner.ts":
/*!*****************************************!*\
  !*** ./src/components/banner/banner.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Banner)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/components/banner/style.css\");\n/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/styles */ \"./src/utils/styles.ts\");\n\n\nclass Banner extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        (0,_utils_styles__WEBPACK_IMPORTED_MODULE_1__.loadCss)(this, _style_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n        const banner = this.ownerDocument.createElement(\"div\");\n        banner.classList.add(\"banner\");\n        const img = this.ownerDocument.createElement(\"img\");\n        img.setAttribute(\"src\", \"../dist/image/Valorant.png\");\n        img.setAttribute(\"alt\", \"Valorant\");\n        banner.appendChild(img);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(banner);\n    }\n}\ncustomElements.define('comp-banner', Banner);\n\n\n//# sourceURL=webpack://taller2/./src/components/banner/banner.ts?");

/***/ }),

/***/ "./src/components/card/card.ts":
/*!*************************************!*\
  !*** ./src/components/card/card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/components/card/style.css\");\n/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/styles */ \"./src/utils/styles.ts\");\n\n\nclass Card extends HTMLElement {\n    static get observedAttributes() {\n        return [\"name\", \"thumbnail\", \"publisher\", \"releaseyear\"];\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        this.render();\n    }\n    constructor() {\n        super();\n        this.name = \"\";\n        this.thumbnail = \"\";\n        this.publisher = \"\";\n        this.releaseyear = \"\";\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        (0,_utils_styles__WEBPACK_IMPORTED_MODULE_1__.loadCss)(this, _style_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n        const mainContainer = this.ownerDocument.createElement(\"div\");\n        mainContainer.setAttribute(\"id\", \"carousel-container\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(mainContainer);\n        const app = this.ownerDocument.createElement(\"div\");\n        app.setAttribute(\"id\", \"app\");\n        const carousel = this.ownerDocument.createElement(\"div\");\n        carousel.setAttribute(\"id\", \"carousel\");\n        const figure = this.ownerDocument.createElement(\"figure\");\n        figure.classList.add(\"juego-card\");\n        const img = this.ownerDocument.createElement(\"img\");\n        img.setAttribute(\"src\", `${this.thumbnail}`);\n        const text1 = this.ownerDocument.createElement(\"h2\");\n        text1.textContent = `${this.name}`;\n        const text2 = this.ownerDocument.createElement(\"h2\");\n        text2.textContent = `${this.releaseyear}`;\n        const text3 = this.ownerDocument.createElement(\"h3\");\n        text3.textContent = `${this.publisher}`;\n        mainContainer.appendChild(app);\n        app.appendChild(carousel);\n        carousel.appendChild(figure);\n        figure.appendChild(img);\n        figure.appendChild(text1);\n        figure.appendChild(text2);\n        figure.appendChild(text3);\n    }\n}\ncustomElements.define('comp-card', Card);\n\n\n//# sourceURL=webpack://taller2/./src/components/card/card.ts?");

/***/ }),

/***/ "./src/components/card/data.ts":
/*!*************************************!*\
  !*** ./src/components/card/data.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n    {\n        name: \"Zelda BOTW\",\n        thumbnail: \"https://cdn02.plentymarkets.com/qozbgypaugq8/item/images/1613/full/PSTR-ZELDA005.jpg\",\n        publisher: \"Nintendo\",\n        releaseyear: \"2017\",\n    },\n    {\n        name: \"Super Mario Bros\",\n        thumbnail: \"https://images.nintendolife.com/games/nes/super_mario_bros/cover_large.jpg\",\n        publisher: \"Nintendo\",\n        releaseyear: \"1985\",\n    },\n    {\n        name: \"Sonic the hedgehog\",\n        thumbnail: \"https://i.pinimg.com/originals/79/b7/63/79b7630b97c337d5aadb8a6dca7a59d1.jpg\",\n        publisher: \"SEGA\",\n        releaseyear: \"1992\",\n    },\n    {\n        name: \"Doom Eternal\",\n        thumbnail: \"https://upload.wikimedia.org/wikipedia/en/9/9d/Cover_Art_of_Doom_Eternal.png\",\n        publisher: \"ID software\",\n        releaseyear: \"2020\",\n    },\n    {\n        name: \"Animal Crossing\",\n        thumbnail: \"https://external-preview.redd.it/XmYU1C6KD9q1m9qY1hnedMhwYbwdWf3J2F-BcDpiav0.png?format=pjpg&auto=webp&s=cbf386c9e839022b6ca98520faafa98a4aa59783\",\n        publisher: \"Nintendo\",\n        releaseyear: \"2020\",\n    },\n    {\n        name: \"Omori\",\n        thumbnail: \"https://i1.sndcdn.com/artworks-Xb7DjesUtk53E0KI-GpZdgg-t500x500.jpg\",\n        publisher: \"Omocat\",\n        releaseyear: \"2021\",\n    },\n]);\n\n\n//# sourceURL=webpack://taller2/./src/components/card/data.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Account\": () => (/* reexport safe */ _account_account__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"Banner\": () => (/* reexport safe */ _banner_banner__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"Bar\": () => (/* reexport safe */ _search_bar_bar__WEBPACK_IMPORTED_MODULE_13__[\"default\"]),\n/* harmony export */   \"Card\": () => (/* reexport safe */ _card_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"Comment\": () => (/* reexport safe */ _post_comment_comment__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"Comments\": () => (/* reexport safe */ _post_comments_comments__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"Favorites\": () => (/* reexport safe */ _favorites_favorites__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"Friend\": () => (/* reexport safe */ _friends_friends__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   \"GameWeek\": () => (/* reexport safe */ _gameweek_gameweek__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   \"Nav\": () => (/* reexport safe */ _nav_nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Notification\": () => (/* reexport safe */ _notification_notification__WEBPACK_IMPORTED_MODULE_9__[\"default\"]),\n/* harmony export */   \"Post\": () => (/* reexport safe */ _post_post__WEBPACK_IMPORTED_MODULE_14__[\"default\"]),\n/* harmony export */   \"Profile\": () => (/* reexport safe */ _profile_profile__WEBPACK_IMPORTED_MODULE_10__[\"default\"]),\n/* harmony export */   \"Search\": () => (/* reexport safe */ _search_search__WEBPACK_IMPORTED_MODULE_11__[\"default\"]),\n/* harmony export */   \"Settings\": () => (/* reexport safe */ _settings_settings__WEBPACK_IMPORTED_MODULE_12__[\"default\"]),\n/* harmony export */   \"User\": () => (/* reexport safe */ _post_user_user__WEBPACK_IMPORTED_MODULE_15__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card */ \"./src/components/card/card.ts\");\n/* harmony import */ var _nav_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav */ \"./src/components/nav/nav.ts\");\n/* harmony import */ var _account_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account/account */ \"./src/components/account/account.ts\");\n/* harmony import */ var _banner_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner/banner */ \"./src/components/banner/banner.ts\");\n/* harmony import */ var _post_comment_comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post/comment/comment */ \"./src/components/post/comment/comment.ts\");\n/* harmony import */ var _post_comments_comments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post/comments/comments */ \"./src/components/post/comments/comments.ts\");\n/* harmony import */ var _favorites_favorites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorites/favorites */ \"./src/components/favorites/favorites.ts\");\n/* harmony import */ var _friends_friends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./friends/friends */ \"./src/components/friends/friends.ts\");\n/* harmony import */ var _gameweek_gameweek__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gameweek/gameweek */ \"./src/components/gameweek/gameweek.ts\");\n/* harmony import */ var _notification_notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notification/notification */ \"./src/components/notification/notification.ts\");\n/* harmony import */ var _profile_profile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile */ \"./src/components/profile/profile.ts\");\n/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search/search */ \"./src/components/search/search.ts\");\n/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/settings */ \"./src/components/settings/settings.ts\");\n/* harmony import */ var _search_bar_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search/bar/bar */ \"./src/components/search/bar/bar.ts\");\n/* harmony import */ var _post_post__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post/post */ \"./src/components/post/post.ts\");\n/* harmony import */ var _post_user_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./post/user/user */ \"./src/components/post/user/user.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://taller2/./src/components/export.ts?");

/***/ }),

/***/ "./src/components/favorites/favorites.ts":
/*!***********************************************!*\
  !*** ./src/components/favorites/favorites.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Favorites)\n/* harmony export */ });\nclass Favorites extends HTMLElement {\n    static get observedAttributes() {\n        return [\"text_btn\", \"text\"];\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        console.log(propName, newValue);\n        this.render();\n    }\n    constructor() {\n        super();\n        this.text_btn = \"\";\n        this.text = \"\";\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        const text = this.ownerDocument.createElement(\"p\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(text);\n        text.textContent = this.text;\n        const button = this.ownerDocument.createElement(\"button\");\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(button);\n        button.textContent = this.text_btn;\n    }\n}\ncustomElements.define('comp-favorite', Favorites);\n\n\n//# sourceURL=webpack://taller2/./src/components/favorites/favorites.ts?");

/***/ }),

/***/ "./src/components/friends/friends.ts":
/*!*******************************************!*\
  !*** ./src/components/friends/friends.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Friend)\n/* harmony export */ });\nclass Friend extends HTMLElement {\n    static get observedAttributes() {\n        return [\"text_btn\", \"text\"];\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        console.log(propName, newValue);\n        this.render();\n    }\n    constructor() {\n        super();\n        this.text_btn = \"\";\n        this.text = \"\";\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        const text = this.ownerDocument.createElement(\"p\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(text);\n        text.textContent = this.text;\n        const button = this.ownerDocument.createElement(\"button\");\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(button);\n        button.textContent = this.text_btn;\n    }\n}\ncustomElements.define('comp-friends', Friend);\n\n\n//# sourceURL=webpack://taller2/./src/components/friends/friends.ts?");

/***/ }),

/***/ "./src/components/gameweek/gameweek.ts":
/*!*********************************************!*\
  !*** ./src/components/gameweek/gameweek.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameWeek)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/components/gameweek/style.css\");\n/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/styles */ \"./src/utils/styles.ts\");\n\n\nclass GameWeek extends HTMLElement {\n    static get observedAttributes() {\n        return [\"name\", \"thumbnail\", \"description\", \"alt\"];\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        this.render();\n    }\n    constructor() {\n        super();\n        this.name = \"\";\n        this.thumbnail = \"\";\n        this.description = \"\";\n        this.alt = \"\";\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        (0,_utils_styles__WEBPACK_IMPORTED_MODULE_1__.loadCss)(this, _style_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n        const container = this.ownerDocument.createElement(\"div\");\n        container.classList.add(\"carContainer\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(container);\n        const card = this.ownerDocument.createElement(\"div\");\n        card.classList.add(\"card\");\n        const cardBody = this.ownerDocument.createElement(\"div\");\n        cardBody.classList.add(\"card-body\");\n        const contPlatform = this.ownerDocument.createElement(\"div\");\n        contPlatform.classList.add(\"card-platform\");\n        const title = this.ownerDocument.createElement(\"div\");\n        title.classList.add(\"title\");\n        const title2 = this.ownerDocument.createElement(\"div\");\n        title2.classList.add(\"nameGame\");\n        const contImg = this.ownerDocument.createElement(\"div\");\n        contImg.classList.add(\"contImg\");\n        const text = this.ownerDocument.createElement(\"h1\");\n        text.textContent = (\"Game The Week\");\n        const nameGame = this.ownerDocument.createElement(\"h2\");\n        nameGame.classList.add(\"name\");\n        nameGame.textContent = (`Terraria`);\n        const text2 = this.ownerDocument.createElement(\"p\");\n        text2.classList.add(\"description\");\n        text2.textContent = (`Terraria es un videojuego de acción, aventura y de sandbox producido de forma independiente por el estudio Re-Logic. Tiene características tales como la exploración, la artesanía, la construcción de estructuras y el combate.`);\n        const img = this.ownerDocument.createElement(\"img\");\n        img.setAttribute(\"src\", `../dist/image/Terraria.jpg`);\n        img.setAttribute(\"alt\", `${this.alt}`);\n        const steam = this.ownerDocument.createElement(\"img\");\n        steam.setAttribute(\"src\", `../dist/image/Steam-logo.png`);\n        steam.setAttribute(\"alt\", \"logo Steam\");\n        const epic = this.ownerDocument.createElement(\"img\");\n        epic.setAttribute(\"src\", `../dist/image/Epic_Games_logo.png`);\n        epic.setAttribute(\"alt\", \"logo Epic Games\");\n        container.appendChild(card);\n        card.appendChild(title);\n        card.appendChild(title2);\n        card.appendChild(contImg);\n        card.appendChild(nameGame);\n        card.appendChild(cardBody);\n        card.appendChild(contPlatform);\n        contPlatform.appendChild(steam);\n        contPlatform.appendChild(epic);\n        cardBody.appendChild(text2);\n        title.appendChild(text);\n        title2.appendChild(nameGame);\n        contImg.appendChild(img);\n    }\n}\ncustomElements.define('comp-gameweek', GameWeek);\n\n\n//# sourceURL=webpack://taller2/./src/components/gameweek/gameweek.ts?");

/***/ }),

/***/ "./src/components/nav/nav.ts":
/*!***********************************!*\
  !*** ./src/components/nav/nav.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Nav)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/components/nav/style.css\");\n/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/styles */ \"./src/utils/styles.ts\");\n\n\nclass Nav extends HTMLElement {\n    static get observedAttributes() {\n        return [\"text_btn\", \"text\"];\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        console.log(propName, newValue);\n        this.render();\n    }\n    constructor() {\n        super();\n        this.text_btn = \"\";\n        this.text = \"\";\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        (0,_utils_styles__WEBPACK_IMPORTED_MODULE_1__.loadCss)(this, _style_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n        const bootstrap = this.ownerDocument.createElement(\"link\");\n        bootstrap.setAttribute(\"rel\", \"stylesheet\");\n        bootstrap.setAttribute(\"href\", \"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(bootstrap);\n        const main = this.ownerDocument.createElement(\"nav\");\n        main.classList.add(\"cont-nav\");\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(main);\n        const col1 = this.ownerDocument.createElement(\"div\");\n        col1.classList.add(\"col\");\n        col1.classList.add(\"uno\");\n        col1.setAttribute(\"tabindex\", \"0\");\n        col1.textContent = (\"News\");\n        const col2 = this.ownerDocument.createElement(\"div\");\n        col2.classList.add(\"col\");\n        col2.classList.add(\"dos\");\n        col2.setAttribute(\"tabindex\", \"0\");\n        col2.textContent = (\"Comunities\");\n        const col3 = this.ownerDocument.createElement(\"div\");\n        col3.classList.add(\"col\");\n        col3.classList.add(\"tres\");\n        col3.setAttribute(\"tabindex\", \"0\");\n        col3.textContent = (\"Login\");\n        main.appendChild(col1);\n        main.appendChild(col2);\n        main.appendChild(col3);\n    }\n}\ncustomElements.define('comp-nav', Nav);\n\n\n//# sourceURL=webpack://taller2/./src/components/nav/nav.ts?");

/***/ }),

/***/ "./src/components/notification/notification.ts":
/*!*****************************************************!*\
  !*** ./src/components/notification/notification.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Notification)\n/* harmony export */ });\nclass Notification extends HTMLElement {\n    static get observedAttributes() {\n        return [\"text_btn\", \"text\"];\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        console.log(propName, newValue);\n        this.render();\n    }\n    constructor() {\n        super();\n        this.text_btn = \"\";\n        this.text = \"\";\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        const text = this.ownerDocument.createElement(\"p\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(text);\n        text.textContent = this.text;\n        const button = this.ownerDocument.createElement(\"button\");\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(button);\n        button.textContent = this.text_btn;\n    }\n}\ncustomElements.define('comp-notification', Notification);\n\n\n//# sourceURL=webpack://taller2/./src/components/notification/notification.ts?");

/***/ }),

/***/ "./src/components/post/comment/comment.ts":
/*!************************************************!*\
  !*** ./src/components/post/comment/comment.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Comment)\n/* harmony export */ });\n/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/styles */ \"./src/utils/styles.ts\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/components/post/comment/style.css\");\n\n\nclass Comment extends HTMLElement {\n    static get observedAttributes() {\n        return [\"username\", \"thumbnail\", \"hastag\", \"comment\"];\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        console.log(propName, newValue);\n        this.render();\n    }\n    constructor() {\n        super();\n        this.comment = \"\";\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        (0,_utils_styles__WEBPACK_IMPORTED_MODULE_0__.loadCss)(this, _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        const contInput = this.ownerDocument.createElement(\"div\");\n        contInput.classList.add(\"contInput\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(contInput);\n        const input = this.ownerDocument.createElement(\"input\");\n        input.setAttribute(\"type\", \"text\");\n        input.setAttribute(\"placeholder\", \"Say something...\");\n        const button = this.ownerDocument.createElement(\"button\");\n        button.classList.add(\"btnSend\");\n        button.textContent = \"Send\";\n        contInput.appendChild(input);\n        contInput.appendChild(button);\n    }\n}\ncustomElements.define('comp-comment', Comment);\n\n\n//# sourceURL=webpack://taller2/./src/components/post/comment/comment.ts?");

/***/ }),

/***/ "./src/components/post/comments/comments.ts":
/*!**************************************************!*\
  !*** ./src/components/post/comments/comments.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Comments)\n/* harmony export */ });\n/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/styles */ \"./src/utils/styles.ts\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/components/post/comments/style.css\");\n\n\nclass Comments extends HTMLElement {\n    static get observedAttributes() {\n        return [\"username\", \"thumbnail\", \"hastag\", \"comment\"];\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        console.log(propName, newValue);\n        this.render();\n    }\n    constructor() {\n        super();\n        this.username = \"\";\n        this.thumbnail = \"\";\n        this.hastag = \"\";\n        this.comment = \"\";\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        (0,_utils_styles__WEBPACK_IMPORTED_MODULE_0__.loadCss)(this, _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        const cardPost = this.ownerDocument.createElement(\"section\");\n        cardPost.classList.add(\"card-posts\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(cardPost);\n        const title = this.ownerDocument.createElement(\"div\");\n        title.classList.add(\"hastag\");\n        title.textContent = \"#hashtag genre of the game\";\n        const post = this.ownerDocument.createElement(\"div\");\n        post.classList.add(\"content\");\n        post.textContent = \"Post of someone in the community you follow; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.\";\n        cardPost.appendChild(title);\n        cardPost.appendChild(post);\n    }\n}\ncustomElements.define('comp-comments', Comments);\n\n\n//# sourceURL=webpack://taller2/./src/components/post/comments/comments.ts?");

/***/ }),

/***/ "./src/components/post/post.ts":
/*!*************************************!*\
  !*** ./src/components/post/post.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/components/post/style.css\");\n/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/styles */ \"./src/utils/styles.ts\");\n\n\nclass Post extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        (0,_utils_styles__WEBPACK_IMPORTED_MODULE_1__.loadCss)(this, _style_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n        const appComment = this.ownerDocument.createElement(\"comp-comment\");\n        const appComments = this.ownerDocument.createElement(\"comp-comments\");\n        const appUser = this.ownerDocument.createElement(\"comp-user\");\n        appUser.classList.add(\"user\");\n        const container = this.ownerDocument.createElement(\"div\");\n        container.classList.add(\"carContainer\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(container);\n        const card = this.ownerDocument.createElement(\"div\");\n        card.classList.add(\"card\");\n        const title = this.ownerDocument.createElement(\"div\");\n        title.classList.add(\"title\");\n        const top = this.ownerDocument.createElement(\"div\");\n        top.classList.add(\"contTop\");\n        const text = this.ownerDocument.createElement(\"h2\");\n        text.textContent = (\"Communities you follow\");\n        const contPlatform = this.ownerDocument.createElement(\"div\");\n        contPlatform.classList.add(\"card-platform\");\n        const steam = this.ownerDocument.createElement(\"img\");\n        steam.setAttribute(\"src\", `../dist/image/Steam-logo.png`);\n        steam.setAttribute(\"alt\", \"logo Steam\");\n        const epic = this.ownerDocument.createElement(\"img\");\n        epic.setAttribute(\"src\", `../dist/image/Epic_Games_logo.png`);\n        epic.setAttribute(\"alt\", \"logo Epic Games\");\n        container.appendChild(card);\n        card.appendChild(top);\n        card.appendChild(appComments);\n        card.appendChild(appComment);\n        card.appendChild(contPlatform);\n        top.appendChild(title);\n        top.appendChild(appUser);\n        contPlatform.appendChild(steam);\n        contPlatform.appendChild(epic);\n        title.appendChild(text);\n    }\n}\ncustomElements.define('comp-post', Post);\n\n\n//# sourceURL=webpack://taller2/./src/components/post/post.ts?");

/***/ }),

/***/ "./src/components/post/user/user.ts":
/*!******************************************!*\
  !*** ./src/components/post/user/user.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/styles */ \"./src/utils/styles.ts\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/components/post/user/style.css\");\n\n\nclass User extends HTMLElement {\n    static get observedAttributes() {\n        return [\"name\", \"thumbnail\", \"publisher\", \"releaseyear\"];\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        this.render();\n    }\n    constructor() {\n        super();\n        this.username = \"\";\n        this.thumbnail = \"\";\n        this.hastag = \"\";\n        this.comment = \"\";\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        (0,_utils_styles__WEBPACK_IMPORTED_MODULE_0__.loadCss)(this, _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        const user = this.ownerDocument.createElement(\"div\");\n        user.classList.add(\"user\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(user);\n        const username = this.ownerDocument.createElement(\"h5\");\n        username.classList.add(\"username\");\n        username.textContent = \"Axelito\";\n        const icon = this.ownerDocument.createElement(\"img\");\n        icon.setAttribute(\"src\", \"../dist/image/iconProfile.jpeg\");\n        // icon.setAttribute(\"src\",`${this.thumbnail}`)\n        icon.textContent = (\"Profile\");\n        user.appendChild(icon);\n        user.appendChild(username);\n    }\n}\ncustomElements.define('comp-user', User);\n\n\n//# sourceURL=webpack://taller2/./src/components/post/user/user.ts?");

/***/ }),

/***/ "./src/components/profile/profile.ts":
/*!*******************************************!*\
  !*** ./src/components/profile/profile.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Profile)\n/* harmony export */ });\nclass Profile extends HTMLElement {\n    static get observedAttributes() {\n        return [\"text_btn\", \"text\"];\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        console.log(propName, newValue);\n        this.render();\n    }\n    constructor() {\n        super();\n        this.username = \"\";\n        this.thumbnail = \"\";\n        this.name = \"\";\n        this.email = \"\";\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        const text = this.ownerDocument.createElement(\"p\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(text);\n        text.textContent = this.name;\n        const button = this.ownerDocument.createElement(\"button\");\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(button);\n        button.textContent = this.thumbnail;\n    }\n}\ncustomElements.define('comp-profile', Profile);\n\n\n//# sourceURL=webpack://taller2/./src/components/profile/profile.ts?");

/***/ }),

/***/ "./src/components/search/bar/bar.ts":
/*!******************************************!*\
  !*** ./src/components/search/bar/bar.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bar)\n/* harmony export */ });\n/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/styles */ \"./src/utils/styles.ts\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/components/search/bar/style.css\");\n\n\nclass Bar extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        (0,_utils_styles__WEBPACK_IMPORTED_MODULE_0__.loadCss)(this, _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        const col = this.ownerDocument.createElement(\"div\");\n        col.classList.add(\"col\");\n        const btn1 = this.ownerDocument.createElement(\"button\");\n        btn1.classList.add(\"btn\");\n        btn1.textContent = (\"Sing in\");\n        const btn2 = this.ownerDocument.createElement(\"button\");\n        btn2.classList.add(\"btn\");\n        btn2.textContent = (\"Sing up\");\n        const barsearch = this.ownerDocument.createElement(\"input\");\n        barsearch.classList.add(\"bar-search\");\n        barsearch.setAttribute(\"placeholder\", \"Search\");\n        col.appendChild(barsearch);\n        col.appendChild(btn1);\n        col.appendChild(btn2);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(col);\n    }\n}\ncustomElements.define('comp-bar', Bar);\n\n\n//# sourceURL=webpack://taller2/./src/components/search/bar/bar.ts?");

/***/ }),

/***/ "./src/components/search/search.ts":
/*!*****************************************!*\
  !*** ./src/components/search/search.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Search)\n/* harmony export */ });\n/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/styles */ \"./src/utils/styles.ts\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/components/search/style.css\");\n\n\nclass Search extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        (0,_utils_styles__WEBPACK_IMPORTED_MODULE_0__.loadCss)(this, _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        const bar = this.ownerDocument.createElement(\"comp-bar\");\n        const main = this.ownerDocument.createElement(\"div\");\n        const header = this.ownerDocument.createElement(\"div\");\n        const logo = this.ownerDocument.createElement(\"img\");\n        logo.setAttribute(\"src\", \"../dist/image/Playconnect-Logo.png\");\n        main.classList.add(\"row\");\n        header.classList.add(\"header\");\n        main.appendChild(header);\n        header.appendChild(logo);\n        header.appendChild(bar);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(main);\n    }\n}\ncustomElements.define('comp-search', Search);\n\n\n//# sourceURL=webpack://taller2/./src/components/search/search.ts?");

/***/ }),

/***/ "./src/components/settings/settings.ts":
/*!*********************************************!*\
  !*** ./src/components/settings/settings.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Settings)\n/* harmony export */ });\nclass Settings extends HTMLElement {\n    static get observedAttributes() {\n        return [\"text_btn\", \"text\"];\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        console.log(propName, newValue);\n        this.render();\n    }\n    constructor() {\n        super();\n        this.text_btn = \"\";\n        this.text = \"\";\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        const text = this.ownerDocument.createElement(\"p\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(text);\n        text.textContent = this.text;\n        const button = this.ownerDocument.createElement(\"button\");\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(button);\n        button.textContent = this.text_btn;\n    }\n}\ncustomElements.define('comp-settings', Settings);\n\n\n//# sourceURL=webpack://taller2/./src/components/settings/settings.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _screens_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/export */ \"./src/screens/export.ts\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n\n\nclass App extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c, _d;\n        const css = this.ownerDocument.createElement(\"link\");\n        css.setAttribute(\"rel\", \"stylesheet\");\n        css.setAttribute(\"href\", \"../dist/style/main.css\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n        const dashboard = this.ownerDocument.createElement(\"comp-dashboard\");\n        const login = this.ownerDocument.createElement(\"comp-login\");\n        const register = this.ownerDocument.createElement(\"comp-register\");\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(dashboard);\n        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(login);\n        (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(register);\n    }\n}\ncustomElements.define('comp-container', App);\n\n\n//# sourceURL=webpack://taller2/./src/index.ts?");

/***/ }),

/***/ "./src/screens/Dashboard/dashboard.ts":
/*!********************************************!*\
  !*** ./src/screens/Dashboard/dashboard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dashboard)\n/* harmony export */ });\n/* harmony import */ var _components_card_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/card/data */ \"./src/components/card/data.ts\");\n/* harmony import */ var _utils_attributtes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/attributtes */ \"./src/utils/attributtes.ts\");\n\n\nclass Dashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        const css = this.ownerDocument.createElement(\"link\");\n        css.setAttribute(\"rel\", \"stylesheet\");\n        css.setAttribute(\"href\", \"./style/main.css\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n        const main = this.ownerDocument.createElement(\"section\");\n        main.setAttribute(\"id\", \"main_container\");\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(main);\n        const content = this.ownerDocument.createElement(\"main\");\n        content.setAttribute(\"id\", \"content\");\n        const appSearch = this.ownerDocument.createElement(\"comp-search\");\n        const appBanner = this.ownerDocument.createElement(\"comp-banner\");\n        const appNav = this.ownerDocument.createElement(\"comp-nav\");\n        const appGame = this.ownerDocument.createElement(\"comp-gameweek\");\n        const appPost = this.ownerDocument.createElement(\"comp-post\");\n        // const cardProps: AttrCards = {\n        //     name: \"zelda\",\n        //     thumbnail: \"https://i1.sndcdn.com/artworks-Xb7DjesUtk53E0KI-GpZdgg-t500x500.jpg\",\n        //     publisher: \"hola3\",\n        //     releaseyear: \"hola4\",\n        // }\n        // setAttributes<AttrCards>(cardProps, appCard)\n        // this.shadowRoot?.appendChild(appCard)\n        _components_card_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(({ name, thumbnail, publisher, releaseyear }) => {\n            const appCard = this.ownerDocument.createElement(\"comp-card\");\n            const cardProps = {\n                name: `${name}`,\n                thumbnail: `${thumbnail}`,\n                publisher: `${publisher}`,\n                releaseyear: `${releaseyear}`,\n            };\n            (0,_utils_attributtes__WEBPACK_IMPORTED_MODULE_1__.setAttributes)(cardProps, appCard);\n            // appCard.setAttribute(\"name\",`${name}`);\n            // appCard.setAttribute(\"thumbnail\",`${thumbnail}`);\n            // appCard.setAttribute(\"publisher\",`${publisher}`);\n            // appCard.setAttribute(\"releaseyear\",`${releaseyear}`);\n            content.appendChild(appCard);\n        });\n        const header = this.ownerDocument.createElement(\"header\");\n        header.setAttribute(\"id\", \"header\");\n        const nav = this.ownerDocument.createElement(\"nav\");\n        nav.setAttribute(\"id\", \"bar_nav\");\n        const title = this.ownerDocument.createElement(\"section\");\n        const text = this.ownerDocument.createElement(\"h3\");\n        text.textContent = (\"You’d also like...\");\n        title.setAttribute(\"id\", \"title\");\n        const bottom = this.ownerDocument.createElement(\"section\");\n        bottom.setAttribute(\"id\", \"bottom\");\n        main.appendChild(header);\n        main.appendChild(nav);\n        main.appendChild(title);\n        main.appendChild(content);\n        main.appendChild(bottom);\n        nav.appendChild(appNav);\n        header.appendChild(appSearch);\n        header.appendChild(appBanner);\n        title.appendChild(text);\n        bottom.appendChild(appGame);\n        bottom.appendChild(appPost);\n    }\n}\ncustomElements.define('comp-dashboard', Dashboard);\n\n\n//# sourceURL=webpack://taller2/./src/screens/Dashboard/dashboard.ts?");

/***/ }),

/***/ "./src/screens/Login/login.ts":
/*!************************************!*\
  !*** ./src/screens/Login/login.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\nclass Login extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        const css = this.ownerDocument.createElement(\"link\");\n        css.setAttribute(\"rel\", \"stylesheet\");\n        css.setAttribute(\"href\", \"./style/main.css\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n    }\n}\ncustomElements.define('comp-login', Login);\n\n\n//# sourceURL=webpack://taller2/./src/screens/Login/login.ts?");

/***/ }),

/***/ "./src/screens/Register/register.ts":
/*!******************************************!*\
  !*** ./src/screens/Register/register.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Register)\n/* harmony export */ });\nclass Register extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        const css = this.ownerDocument.createElement(\"link\");\n        css.setAttribute(\"rel\", \"stylesheet\");\n        css.setAttribute(\"href\", \"./style/main.css\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n        const main = this.ownerDocument.createElement('section');\n        main.setAttribute(\"id\", \"registerContainer\");\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(main);\n    }\n}\ncustomElements.define('comp-register', Register);\n\n\n//# sourceURL=webpack://taller2/./src/screens/Register/register.ts?");

/***/ }),

/***/ "./src/screens/export.ts":
/*!*******************************!*\
  !*** ./src/screens/export.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dashboard\": () => (/* reexport safe */ _Dashboard_dashboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"Login\": () => (/* reexport safe */ _Login_login__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Register\": () => (/* reexport safe */ _Register_register__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Dashboard_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard/dashboard */ \"./src/screens/Dashboard/dashboard.ts\");\n/* harmony import */ var _Login_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login/login */ \"./src/screens/Login/login.ts\");\n/* harmony import */ var _Register_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register/register */ \"./src/screens/Register/register.ts\");\n\n\n\n\n\n//# sourceURL=webpack://taller2/./src/screens/export.ts?");

/***/ }),

/***/ "./src/utils/attributtes.ts":
/*!**********************************!*\
  !*** ./src/utils/attributtes.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setAttributes\": () => (/* binding */ setAttributes)\n/* harmony export */ });\nconst setAttributes = (objProps, elementRef) => {\n    Object.entries(objProps).forEach(([propName, newValue]) => elementRef.setAttribute(propName, newValue));\n};\n\n\n//# sourceURL=webpack://taller2/./src/utils/attributtes.ts?");

/***/ }),

/***/ "./src/utils/styles.ts":
/*!*****************************!*\
  !*** ./src/utils/styles.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadCss\": () => (/* binding */ loadCss)\n/* harmony export */ });\nconst loadCss = (elRef, style) => {\n    var _a;\n    const css = elRef.ownerDocument.createElement(\"style\");\n    css.innerHTML = style;\n    (_a = elRef.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n};\n\n\n//# sourceURL=webpack://taller2/./src/utils/styles.ts?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;