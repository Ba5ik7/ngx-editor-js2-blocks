(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[429],{

/***/ 22810:
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/coercion/private.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coerceObservable: () => (/* binding */ coerceObservable)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44866);


/**
 * Given either an Observable or non-Observable value, returns either the original
 * Observable, or wraps it in an Observable that emits the non-Observable value.
 */
function coerceObservable(data) {
  if (!(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.isObservable)(data)) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(data);
  }
  return data;
}

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=429.js.map