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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_narrator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/narrator.js */ \"./src/modules/narrator.js\");\n\n(0,_modules_narrator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modules/narrator.js":
/*!*********************************!*\
  !*** ./src/modules/narrator.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ speechReader)\n/* harmony export */ });\nvar d = document,\n    w = window;\nfunction speechReader() {\n  var $speechSelect = d.getElementById(\"speech-selection\"),\n      $speechTextarea = d.getElementById(\"speech-text\"),\n      $speechBtn = d.getElementById(\"speech-btn\"),\n      speechMessage = new SpeechSynthesisUtterance();\n  var voices = [];\n  d.addEventListener(\"DOMContentLoaded\", function (e) {\n    w.speechSynthesis.addEventListener(\"voiceschanged\", function (e) {\n      if (typeof speechSynthesis === \"undefined\") {\n        return;\n      } else if (typeof speechSynthesis !== \"undefined\" && speechSynthesis.onvoiceschanged !== \"undefined\") {\n        speechSynthesis.onvoiceschanged = speechReader();\n      }\n\n      voices = w.speechSynthesis.getVoices();\n      voices.forEach(function (voice) {\n        var $option = d.createElement(\"option\");\n        $option.value = voice.name;\n        $option.textContent = \"\".concat(voice.name, \" - \").concat(voice.lang);\n        $speechSelect.appendChild($option);\n      });\n    });\n  });\n  d.addEventListener(\"change\", function (e) {\n    if (e.target === $speechSelect) {\n      speechMessage.voice = voices.find(function (voice) {\n        return voice.name === e.target.value;\n      });\n    }\n  });\n  d.addEventListener(\"click\", function (e) {\n    if (e.target === $speechBtn) {\n      speechMessage.text = $speechTextarea.value;\n      w.speechSynthesis.speak(speechMessage);\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/modules/narrator.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;