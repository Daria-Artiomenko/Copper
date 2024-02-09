/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const slider = (slides, next, prev, pagination, paginationActive) => {
  let slideIndex = 1;
  const items = document.querySelectorAll(slides),
    nextBtn = document.querySelector(next),
    prevBtn = document.querySelector(prev),
    paginationItems = document.querySelectorAll(pagination);
  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }
    items.forEach(item => {
      item.style.display = 'none';
      item.classList.add('animated');
    });
    paginationItems.forEach(item => {
      item.classList.remove(paginationActive);
    });
    paginationItems[slideIndex - 1].classList.add(paginationActive);
    items[slideIndex - 1].style.display = 'flex';
  }
  showSlides(slideIndex);
  function plusSlide(n) {
    showSlides(slideIndex += n);
  }
  nextBtn.addEventListener('click', () => {
    plusSlide(1);
    items[slideIndex - 1].classList.remove('slideInLeft');
    items[slideIndex - 1].classList.add('slideInRight');
  });
  prevBtn.addEventListener('click', () => {
    plusSlide(-1);
    items[slideIndex - 1].classList.remove('slideInRight');
    items[slideIndex - 1].classList.add('slideInLeft');
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])('.best-slide', '.best-next', '.best-prev', '.best__pagination-item', 'slider__pagination-active'); //best
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])('.new-slide', '.new-next', '.new-prev', '.new__pagination-item', 'slider__pagination-active'); //new
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])('.recommend-slide', '.recommend-next', '.recommend-prev', '.recommend__pagination-item', 'slider__pagination-active'); //recommend
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])('.sale-slide', '.sale-next', '.sale-prev', '.sale__pagination-item', 'slider__pagination-active'); //sale
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map