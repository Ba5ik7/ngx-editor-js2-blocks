(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[2814],{

/***/ 2814:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/coercion.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _isNumberValue: () => (/* reexport safe */ _element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_0__._),
/* harmony export */   coerceArray: () => (/* reexport safe */ _array_I1yfCXUO_mjs__WEBPACK_IMPORTED_MODULE_1__.c),
/* harmony export */   coerceBooleanProperty: () => (/* binding */ coerceBooleanProperty),
/* harmony export */   coerceCssPixelValue: () => (/* reexport safe */ _css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_2__.c),
/* harmony export */   coerceElement: () => (/* reexport safe */ _element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   coerceNumberProperty: () => (/* reexport safe */ _element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   coerceStringArray: () => (/* binding */ coerceStringArray)
/* harmony export */ });
/* harmony import */ var _element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-x4z00URv.mjs */ 94724);
/* harmony import */ var _array_I1yfCXUO_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array-I1yfCXUO.mjs */ 97184);
/* harmony import */ var _css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-pixel-value-C_HEqLhI.mjs */ 78916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 27940);





/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== 'false';
}

/**
 * Coerces a value to an array of trimmed non-empty strings.
 * Any input that is not an array, `null` or `undefined` will be turned into a string
 * via `toString()` and subsequently split with the given separator.
 * `null` and `undefined` will result in an empty array.
 * This results in the following outcomes:
 * - `null` -&gt; `[]`
 * - `[null]` -&gt; `["null"]`
 * - `["a", "b ", " "]` -&gt; `["a", "b"]`
 * - `[1, [2, 3]]` -&gt; `["1", "2,3"]`
 * - `[{ a: 0 }]` -&gt; `["[object Object]"]`
 * - `{ a: 0 }` -&gt; `["[object", "Object]"]`
 *
 * Useful for defining CSS classes or table columns.
 * @param value the value to coerce into an array of strings
 * @param separator split-separator if value isn't an array
 */
function coerceStringArray(value, separator = /\s+/) {
  const result = [];
  if (value != null) {
    const sourceValues = Array.isArray(value) ? value : `${value}`.split(separator);
    for (const sourceValue of sourceValues) {
      const trimmedString = `${sourceValue}`.trim();
      if (trimmedString) {
        result.push(trimmedString);
      }
    }
  }
  return result;
}


/***/ }),

/***/ 78916:
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/css-pixel-value-C_HEqLhI.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ coerceCssPixelValue)
/* harmony export */ });
/** Coerces a value to a CSS pixel value. */
function coerceCssPixelValue(value) {
  if (value == null) {
    return '';
  }
  return typeof value === 'string' ? value : `${value}px`;
}


/***/ }),

/***/ 94724:
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/element-x4z00URv.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _isNumberValue),
/* harmony export */   a: () => (/* binding */ coerceElement),
/* harmony export */   c: () => (/* binding */ coerceNumberProperty)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);

function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
function _isNumberValue(value) {
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}

/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 */
function coerceElement(elementOrRef) {
  return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? elementOrRef.nativeElement : elementOrRef;
}


/***/ }),

/***/ 97184:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/array-I1yfCXUO.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ coerceArray)
/* harmony export */ });
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}


/***/ })

}])
//# sourceMappingURL=2814.js.map