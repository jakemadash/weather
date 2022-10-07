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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/logic.js */ \"./src/modules/logic.js\");\n/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom.js */ \"./src/modules/dom.js\");\n\n\nconst search = document.querySelector(\"input[type='search']\");\nconst submit = document.querySelector(\"button\");\nsearch.addEventListener(\"keydown\", event => {\n  if (event.keyCode === 13) weather();\n});\nsubmit.addEventListener(\"click\", weather);\n\nasync function weather() {\n  const location = search.value;\n  const data = await _modules_logic_js__WEBPACK_IMPORTED_MODULE_0__.Logic.getWeather(location);\n  _modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.DOM.showWeather(data);\n}\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOM\": () => (/* binding */ DOM)\n/* harmony export */ });\nconst DOM = (() => {\n  function showWeather(data) {\n    const error = document.querySelector(\"p\");\n    const divs = document.querySelectorAll(\".weather > div\");\n\n    if (!Array.isArray(data)) {\n      error.textContent = data;\n      divs.forEach(div => {\n        div.textContent = \"\";\n      });\n    } else error.textContent = \"\";\n\n    divs.forEach((div, index) => {\n      div.textContent = data[index];\n    });\n  }\n\n  return {\n    showWeather\n  };\n})();\n\n\n\n//# sourceURL=webpack://weather/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Logic\": () => (/* binding */ Logic)\n/* harmony export */ });\nconst Logic = (() => {\n  async function getData(location) {\n    try {\n      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=854a38f309013f91912348c4a71610bb&units=imperial\n      `, {\n        mode: \"cors\"\n      });\n\n      if (response.ok) {\n        const weatherData = await response.json();\n        return weatherData;\n      } else throw new Error(\"try again.\");\n    } catch (error) {\n      console.log(typeof error);\n      return error;\n    }\n  }\n\n  async function getWeather(place) {\n    const data = await getData(place);\n\n    if (data instanceof Error) {\n      return data;\n    } else {\n      const location = data.name;\n      const currentTemp = `${Math.round(data.main.temp)}°F`;\n      const lowTemp = `Low: ${Math.round(data.main.temp_min)}°F`;\n      const highTemp = `High: ${Math.round(data.main.temp_max)}°F`;\n      const humidity = `Humidity: ${data.main.humidity}%`;\n      const wind = `Wind: ${data.wind.speed} mph`;\n      const feelsLike = `Feels like ${Math.round(data.main.feels_like)}°F`;\n      const conditions = [location, currentTemp, lowTemp, highTemp, humidity, wind, feelsLike];\n      return conditions;\n    }\n  }\n\n  return {\n    getWeather\n  };\n})();\n\n\n\n//# sourceURL=webpack://weather/./src/modules/logic.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;