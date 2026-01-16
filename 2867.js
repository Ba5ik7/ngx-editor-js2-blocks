(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[2867],{

/***/ 52867:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/primitives/di.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NOT_FOUND: () => (/* binding */ NOT_FOUND),
/* harmony export */   NotFoundError: () => (/* binding */ NotFoundError),
/* harmony export */   getCurrentInjector: () => (/* binding */ getCurrentInjector),
/* harmony export */   isNotFound: () => (/* binding */ isNotFound),
/* harmony export */   setCurrentInjector: () => (/* binding */ setCurrentInjector)
/* harmony export */ });
/**
 * @license Angular v20.0.4
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */

/**
 * Current injector value used by `inject`.
 * - `undefined`: it is an error to call `inject`
 * - `null`: `inject` can be called but there is no injector (limp-mode).
 * - Injector instance: Use the injector for resolution.
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

/**
 * Value returned if the key-value pair couldn't be found in the context
 * hierarchy.
 */
const NOT_FOUND = /*#__PURE__*/Symbol('NotFound');
/**
 * Error thrown when the key-value pair couldn't be found in the context
 * hierarchy. Context can be attached below.
 */
class NotFoundError extends Error {
  name = 'ɵNotFound';
  constructor(message) {
    super(message);
  }
}
/**
 * Type guard for checking if an unknown value is a NotFound.
 */
function isNotFound(e) {
  return e === NOT_FOUND || e?.name === 'ɵNotFound';
}


/***/ })

}])
//# sourceMappingURL=2867.js.map