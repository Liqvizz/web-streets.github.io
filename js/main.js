/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/functions/header.js":
/*!************************************!*\
  !*** ./src/js/functions/header.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const btn = document.querySelector('.dropdown__btn');
const dropdownMenu = document.querySelector('.dropdown__menu');
const arrow = document.querySelector('.dropdown__pic');
const onOpen = () => {
  dropdownMenu.classList.add('active');
  arrow.classList.add('active');
};
const onClose = () => {
  dropdownMenu.classList.remove('active');
  arrow.classList.remove('active');
};
btn.addEventListener('click', () => {
  if (!dropdownMenu.classList.contains('active')) onOpen();else onClose();
});
window.addEventListener('click', e => {
  if (!e.target.closest('.dropdown__menu') && !e.target.closest('.dropdown__btn') && dropdownMenu.classList.contains('active')) onClose();
});
window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && dropdownMenu.classList.contains('active')) onClose();
});

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/header.js */ "./src/js/functions/header.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map