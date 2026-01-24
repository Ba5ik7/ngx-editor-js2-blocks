(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[894],{

/***/ 8513
/*!***************************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/primitives-di.mjs ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NOT_FOUND: () => (/* reexport safe */ _not_found_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NOT_FOUND),
/* harmony export */   NotFoundError: () => (/* reexport safe */ _not_found_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NotFoundError),
/* harmony export */   defineInjectable: () => (/* binding */ defineInjectable),
/* harmony export */   getCurrentInjector: () => (/* reexport safe */ _not_found_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.getCurrentInjector),
/* harmony export */   inject: () => (/* reexport safe */ _not_found_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   isNotFound: () => (/* reexport safe */ _not_found_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.isNotFound),
/* harmony export */   registerInjectable: () => (/* binding */ registerInjectable),
/* harmony export */   setCurrentInjector: () => (/* reexport safe */ _not_found_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.setCurrentInjector)
/* harmony export */ });
/* harmony import */ var _not_found_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_not_found-chunk.mjs */ 78330);
/**
 * @license Angular v21.1.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
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


/***/ },

/***/ 78330
/*!******************************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/_not_found-chunk.mjs ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NOT_FOUND: () => (/* binding */ NOT_FOUND),
/* harmony export */   NotFoundError: () => (/* binding */ NotFoundError),
/* harmony export */   getCurrentInjector: () => (/* binding */ getCurrentInjector),
/* harmony export */   inject: () => (/* binding */ inject),
/* harmony export */   isNotFound: () => (/* binding */ isNotFound),
/* harmony export */   setCurrentInjector: () => (/* binding */ setCurrentInjector)
/* harmony export */ });
/**
 * @license Angular v21.1.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */

let _currentInjector = undefined;
function getCurrentInjector() {
  return _currentInjector;
}
function setCurrentInjector(injector) {
  const former = _currentInjector;
  _currentInjector = injector;
  return former;
}
function inject(token, options) {
  const currentInjector = getCurrentInjector();
  if (!currentInjector) {
    throw new Error('Current injector is not set.');
  }
  if (!token.ɵprov) {
    throw new Error('Token is not an injectable');
  }
  return currentInjector.retrieve(token, options);
}
const NOT_FOUND = /*#__PURE__*/Symbol('NotFound');
class NotFoundError extends Error {
  name = 'ɵNotFound';
  constructor(message) {
    super(message);
  }
}
function isNotFound(e) {
  return e === NOT_FOUND || e?.name === 'ɵNotFound';
}


/***/ }

}])
//# sourceMappingURL=894.js.map