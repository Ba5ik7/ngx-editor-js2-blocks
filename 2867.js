(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[2867],{

/***/ 52867:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/primitives/di.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NOT_FOUND: () => (/* reexport safe */ _not_found_mjs__WEBPACK_IMPORTED_MODULE_0__.NOT_FOUND),
/* harmony export */   NotFoundError: () => (/* reexport safe */ _not_found_mjs__WEBPACK_IMPORTED_MODULE_0__.NotFoundError),
/* harmony export */   defineInjectable: () => (/* binding */ defineInjectable),
/* harmony export */   getCurrentInjector: () => (/* reexport safe */ _not_found_mjs__WEBPACK_IMPORTED_MODULE_0__.getCurrentInjector),
/* harmony export */   inject: () => (/* reexport safe */ _not_found_mjs__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   isNotFound: () => (/* reexport safe */ _not_found_mjs__WEBPACK_IMPORTED_MODULE_0__.isNotFound),
/* harmony export */   registerInjectable: () => (/* binding */ registerInjectable),
/* harmony export */   setCurrentInjector: () => (/* reexport safe */ _not_found_mjs__WEBPACK_IMPORTED_MODULE_0__.setCurrentInjector)
/* harmony export */ });
/* harmony import */ var _not_found_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../not_found.mjs */ 57773);
/**
 * @license Angular v20.1.0
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */


function defineInjectable(opts) {
  return {
    token: opts.token,
    providedIn: opts.providedIn || null,
    factory: opts.factory,
    value: undefined
  };
}
function registerInjectable(ctor, declaration) {
  ctor.ɵprov = declaration;
  return ctor;
}


/***/ })

}])
//# sourceMappingURL=2867.js.map