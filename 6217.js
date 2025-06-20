(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[6217],{

/***/ 630:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseToString.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 9091);
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_arrayMap.js */ 7786);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ 19247);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSymbol.js */ 31200);





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
  symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value, baseToString) + '';
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseToString);

/***/ }),

/***/ 2397:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_isFlattenable.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 9091);
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArguments.js */ 38826);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ 19247);




/** Built-in value references. */
var spreadableSymbol = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFlattenable);

/***/ }),

/***/ 3365:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_setToArray.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
    result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setToArray);

/***/ }),

/***/ 3474:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseFlatten.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ 59126);
/* harmony import */ var _isFlattenable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isFlattenable.js */ 2397);



/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
    length = array.length;
  predicate || (predicate = _isFlattenable_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseFlatten);

/***/ }),

/***/ 7744:
/*!********************************************************!*\
  !*** ./node_modules/lodash-es/_baseMatchesProperty.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsEqual_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_baseIsEqual.js */ 54676);
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get.js */ 45442);
/* harmony import */ var _hasIn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hasIn.js */ 76449);
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKey.js */ 61604);
/* harmony import */ var _isStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isStrictComparable.js */ 22362);
/* harmony import */ var _matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_matchesStrictComparable.js */ 96923);
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toKey.js */ 71487);








/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if ((0,_isKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path) && (0,_isStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(srcValue)) {
    return (0,_matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_toKey_js__WEBPACK_IMPORTED_MODULE_3__["default"])(path), srcValue);
  }
  return function (object) {
    var objValue = (0,_get_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object, path);
    return objValue === undefined && objValue === srcValue ? (0,_hasIn_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object, path) : (0,_baseIsEqual_js__WEBPACK_IMPORTED_MODULE_6__["default"])(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMatchesProperty);

/***/ }),

/***/ 7786:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_arrayMap.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length,
    result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayMap);

/***/ }),

/***/ 9175:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_mapToArray.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
    result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapToArray);

/***/ }),

/***/ 9412:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/forEach.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayEach_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayEach.js */ 45839);
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseEach.js */ 14583);
/* harmony import */ var _castFunction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_castFunction.js */ 39492);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 19247);





/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? _arrayEach_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _baseEach_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  return func(collection, (0,_castFunction_js__WEBPACK_IMPORTED_MODULE_3__["default"])(iteratee));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forEach);

/***/ }),

/***/ 9873:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_copySymbols.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ 61893);
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbols.js */ 27482);



/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_getSymbols_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copySymbols);

/***/ }),

/***/ 11186:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/isSet.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsSet.js */ 78392);
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ 45583);
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ 64695);




/* Node.js helper references. */
var nodeIsSet = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsSet) : _baseIsSet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSet);

/***/ }),

/***/ 12394:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_setCacheAdd.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setCacheAdd);

/***/ }),

/***/ 13130:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isUndefined.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isUndefined);

/***/ }),

/***/ 13529:
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_basePropertyDeep.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGet.js */ 59484);


/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function (object) {
    return (0,_baseGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basePropertyDeep);

/***/ }),

/***/ 14183:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseProperty.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseProperty);

/***/ }),

/***/ 14583:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseEach.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseForOwn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseForOwn.js */ 50127);
/* harmony import */ var _createBaseEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createBaseEach.js */ 40139);



/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = (0,_createBaseEach_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_baseForOwn_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseEach);

/***/ }),

/***/ 14681:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_baseFindIndex.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
    index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseFindIndex);

/***/ }),

/***/ 14924:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hasPath.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castPath.js */ 41015);
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isArguments.js */ 38826);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isArray.js */ 19247);
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isIndex.js */ 60123);
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLength.js */ 26872);
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toKey.js */ 71487);







/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = (0,_castPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path, object);
  var index = -1,
    length = path.length,
    result = false;
  while (++index < length) {
    var key = (0,_toKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_2__["default"])(length) && (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_3__["default"])(key, length) && ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasPath);

/***/ }),

/***/ 15147:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneArray.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
    result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneArray);

/***/ }),

/***/ 16749:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsNaN.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsNaN);

/***/ }),

/***/ 16941:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneByTag.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ 62279);
/* harmony import */ var _cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cloneDataView.js */ 33823);
/* harmony import */ var _cloneRegExp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_cloneRegExp.js */ 52591);
/* harmony import */ var _cloneSymbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_cloneSymbol.js */ 40610);
/* harmony import */ var _cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cloneTypedArray.js */ 28295);






/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
    case boolTag:
    case dateTag:
      return new Ctor(+object);
    case dataViewTag:
      return (0,_cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, isDeep);
    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
      return (0,_cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object, isDeep);
    case mapTag:
      return new Ctor();
    case numberTag:
    case stringTag:
      return new Ctor(object);
    case regexpTag:
      return (0,_cloneRegExp_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object);
    case setTag:
      return new Ctor();
    case symbolTag:
      return (0,_cloneSymbol_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneByTag);

/***/ }),

/***/ 17991:
/*!********************************************************!*\
  !*** ./node_modules/dagre-d3-es/src/graphlib/graph.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Graph: () => (/* binding */ Graph)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ 34712);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ 68104);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ 29892);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ 93362);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ 93551);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ 9412);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ 13130);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ 85321);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ 59990);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ 53578);

var DEFAULT_EDGE_NAME = '\x00';
var GRAPH_NODE = '\x00';
var EDGE_KEY_DELIM = '\x01';

// Implementation notes:
//
//  * Node id query functions should return string ids for the nodes
//  * Edge id query functions should return an "edgeObj", edge object, that is
//    composed of enough information to uniquely identify an edge: {v, w, name}.
//  * Internally we use an "edgeId", a stringified form of the edgeObj, to
//    reference edges. This is because we need a performant way to look these
//    edges up and, object properties, which have string keys, are the closest
//    we're going to get to a performant hashtable in JavaScript.

// Implementation notes:
//
//  * Node id query functions should return string ids for the nodes
//  * Edge id query functions should return an "edgeObj", edge object, that is
//    composed of enough information to uniquely identify an edge: {v, w, name}.
//  * Internally we use an "edgeId", a stringified form of the edgeObj, to
//    reference edges. This is because we need a performant way to look these
//    edges up and, object properties, which have string keys, are the closest
//    we're going to get to a performant hashtable in JavaScript.
class Graph {
  constructor(opts = {}) {
    this._isDirected = Object.prototype.hasOwnProperty.call(opts, 'directed') ? opts.directed : true;
    this._isMultigraph = Object.prototype.hasOwnProperty.call(opts, 'multigraph') ? opts.multigraph : false;
    this._isCompound = Object.prototype.hasOwnProperty.call(opts, 'compound') ? opts.compound : false;

    // Label for the graph itself
    this._label = undefined;

    // Defaults to be set when creating a new node
    this._defaultNodeLabelFn = lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"](undefined);

    // Defaults to be set when creating a new edge
    this._defaultEdgeLabelFn = lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"](undefined);

    // v -> label
    this._nodes = {};
    if (this._isCompound) {
      // v -> parent
      this._parent = {};

      // v -> children
      this._children = {};
      this._children[GRAPH_NODE] = {};
    }

    // v -> edgeObj
    this._in = {};

    // u -> v -> Number
    this._preds = {};

    // v -> edgeObj
    this._out = {};

    // v -> w -> Number
    this._sucs = {};

    // e -> edgeObj
    this._edgeObjs = {};

    // e -> label
    this._edgeLabels = {};
  }
  /* === Graph functions ========= */
  isDirected() {
    return this._isDirected;
  }
  isMultigraph() {
    return this._isMultigraph;
  }
  isCompound() {
    return this._isCompound;
  }
  setGraph(label) {
    this._label = label;
    return this;
  }
  graph() {
    return this._label;
  }
  /* === Node functions ========== */
  setDefaultNodeLabel(newDefault) {
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](newDefault)) {
      newDefault = lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"](newDefault);
    }
    this._defaultNodeLabelFn = newDefault;
    return this;
  }
  nodeCount() {
    return this._nodeCount;
  }
  nodes() {
    return lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](this._nodes);
  }
  sources() {
    var self = this;
    return lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](this.nodes(), function (v) {
      return lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"](self._in[v]);
    });
  }
  sinks() {
    var self = this;
    return lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](this.nodes(), function (v) {
      return lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"](self._out[v]);
    });
  }
  setNodes(vs, value) {
    var args = arguments;
    var self = this;
    lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](vs, function (v) {
      if (args.length > 1) {
        self.setNode(v, value);
      } else {
        self.setNode(v);
      }
    });
    return this;
  }
  setNode(v, value) {
    if (Object.prototype.hasOwnProperty.call(this._nodes, v)) {
      if (arguments.length > 1) {
        this._nodes[v] = value;
      }
      return this;
    }

    // @ts-expect-error
    this._nodes[v] = arguments.length > 1 ? value : this._defaultNodeLabelFn(v);
    if (this._isCompound) {
      this._parent[v] = GRAPH_NODE;
      this._children[v] = {};
      this._children[GRAPH_NODE][v] = true;
    }
    this._in[v] = {};
    this._preds[v] = {};
    this._out[v] = {};
    this._sucs[v] = {};
    ++this._nodeCount;
    return this;
  }
  node(v) {
    return this._nodes[v];
  }
  hasNode(v) {
    return Object.prototype.hasOwnProperty.call(this._nodes, v);
  }
  removeNode(v) {
    if (Object.prototype.hasOwnProperty.call(this._nodes, v)) {
      var removeEdge = e => this.removeEdge(this._edgeObjs[e]);
      delete this._nodes[v];
      if (this._isCompound) {
        this._removeFromParentsChildList(v);
        delete this._parent[v];
        lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](this.children(v), child => {
          this.setParent(child);
        });
        delete this._children[v];
      }
      lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](this._in[v]), removeEdge);
      delete this._in[v];
      delete this._preds[v];
      lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](this._out[v]), removeEdge);
      delete this._out[v];
      delete this._sucs[v];
      --this._nodeCount;
    }
    return this;
  }
  setParent(v, parent) {
    if (!this._isCompound) {
      throw new Error('Cannot set parent in a non-compound graph');
    }
    if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](parent)) {
      parent = GRAPH_NODE;
    } else {
      // Coerce parent to string
      parent += '';
      for (var ancestor = parent; !lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](ancestor); ancestor = this.parent(ancestor)) {
        if (ancestor === v) {
          throw new Error('Setting ' + parent + ' as parent of ' + v + ' would create a cycle');
        }
      }
      this.setNode(parent);
    }
    this.setNode(v);
    this._removeFromParentsChildList(v);
    this._parent[v] = parent;
    this._children[parent][v] = true;
    return this;
  }
  _removeFromParentsChildList(v) {
    delete this._children[this._parent[v]][v];
  }
  parent(v) {
    if (this._isCompound) {
      var parent = this._parent[v];
      if (parent !== GRAPH_NODE) {
        return parent;
      }
    }
  }
  children(v) {
    if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](v)) {
      v = GRAPH_NODE;
    }
    if (this._isCompound) {
      var children = this._children[v];
      if (children) {
        return lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](children);
      }
    } else if (v === GRAPH_NODE) {
      return this.nodes();
    } else if (this.hasNode(v)) {
      return [];
    }
  }
  predecessors(v) {
    var predsV = this._preds[v];
    if (predsV) {
      return lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](predsV);
    }
  }
  successors(v) {
    var sucsV = this._sucs[v];
    if (sucsV) {
      return lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](sucsV);
    }
  }
  neighbors(v) {
    var preds = this.predecessors(v);
    if (preds) {
      return lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"](preds, this.successors(v));
    }
  }
  isLeaf(v) {
    var neighbors;
    if (this.isDirected()) {
      neighbors = this.successors(v);
    } else {
      neighbors = this.neighbors(v);
    }
    return neighbors.length === 0;
  }
  filterNodes(filter) {
    // @ts-expect-error
    var copy = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });
    copy.setGraph(this.graph());
    var self = this;
    lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](this._nodes, function (value, v) {
      if (filter(v)) {
        copy.setNode(v, value);
      }
    });
    lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](this._edgeObjs, function (e) {
      // @ts-expect-error
      if (copy.hasNode(e.v) && copy.hasNode(e.w)) {
        copy.setEdge(e, self.edge(e));
      }
    });
    var parents = {};
    function findParent(v) {
      var parent = self.parent(v);
      if (parent === undefined || copy.hasNode(parent)) {
        parents[v] = parent;
        return parent;
      } else if (parent in parents) {
        return parents[parent];
      } else {
        return findParent(parent);
      }
    }
    if (this._isCompound) {
      lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](copy.nodes(), function (v) {
        copy.setParent(v, findParent(v));
      });
    }
    return copy;
  }
  /* === Edge functions ========== */
  setDefaultEdgeLabel(newDefault) {
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](newDefault)) {
      newDefault = lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"](newDefault);
    }
    this._defaultEdgeLabelFn = newDefault;
    return this;
  }
  edgeCount() {
    return this._edgeCount;
  }
  edges() {
    return lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"](this._edgeObjs);
  }
  setPath(vs, value) {
    var self = this;
    var args = arguments;
    lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"](vs, function (v, w) {
      if (args.length > 1) {
        self.setEdge(v, w, value);
      } else {
        self.setEdge(v, w);
      }
      return w;
    });
    return this;
  }
  /*
   * setEdge(v, w, [value, [name]])
   * setEdge({ v, w, [name] }, [value])
   */
  setEdge() {
    var v, w, name, value;
    var valueSpecified = false;
    var arg0 = arguments[0];
    if (typeof arg0 === 'object' && arg0 !== null && 'v' in arg0) {
      v = arg0.v;
      w = arg0.w;
      name = arg0.name;
      if (arguments.length === 2) {
        value = arguments[1];
        valueSpecified = true;
      }
    } else {
      v = arg0;
      w = arguments[1];
      name = arguments[3];
      if (arguments.length > 2) {
        value = arguments[2];
        valueSpecified = true;
      }
    }
    v = '' + v;
    w = '' + w;
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](name)) {
      name = '' + name;
    }
    var e = edgeArgsToId(this._isDirected, v, w, name);
    if (Object.prototype.hasOwnProperty.call(this._edgeLabels, e)) {
      if (valueSpecified) {
        this._edgeLabels[e] = value;
      }
      return this;
    }
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](name) && !this._isMultigraph) {
      throw new Error('Cannot set a named edge when isMultigraph = false');
    }

    // It didn't exist, so we need to create it.
    // First ensure the nodes exist.
    this.setNode(v);
    this.setNode(w);

    // @ts-expect-error
    this._edgeLabels[e] = valueSpecified ? value : this._defaultEdgeLabelFn(v, w, name);
    var edgeObj = edgeArgsToObj(this._isDirected, v, w, name);
    // Ensure we add undirected edges in a consistent way.
    v = edgeObj.v;
    w = edgeObj.w;
    Object.freeze(edgeObj);
    this._edgeObjs[e] = edgeObj;
    incrementOrInitEntry(this._preds[w], v);
    incrementOrInitEntry(this._sucs[v], w);
    this._in[w][e] = edgeObj;
    this._out[v][e] = edgeObj;
    this._edgeCount++;
    return this;
  }
  edge(v, w, name) {
    var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
    return this._edgeLabels[e];
  }
  hasEdge(v, w, name) {
    var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
    return Object.prototype.hasOwnProperty.call(this._edgeLabels, e);
  }
  removeEdge(v, w, name) {
    var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
    var edge = this._edgeObjs[e];
    if (edge) {
      v = edge.v;
      w = edge.w;
      delete this._edgeLabels[e];
      delete this._edgeObjs[e];
      decrementOrRemoveEntry(this._preds[w], v);
      decrementOrRemoveEntry(this._sucs[v], w);
      delete this._in[w][e];
      delete this._out[v][e];
      this._edgeCount--;
    }
    return this;
  }
  inEdges(v, u) {
    var inV = this._in[v];
    if (inV) {
      var edges = lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"](inV);
      if (!u) {
        return edges;
      }
      return lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](edges, function (edge) {
        return edge.v === u;
      });
    }
  }
  outEdges(v, w) {
    var outV = this._out[v];
    if (outV) {
      var edges = lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"](outV);
      if (!w) {
        return edges;
      }
      return lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](edges, function (edge) {
        return edge.w === w;
      });
    }
  }
  nodeEdges(v, w) {
    var inEdges = this.inEdges(v, w);
    if (inEdges) {
      return inEdges.concat(this.outEdges(v, w));
    }
  }
}

/* Number of nodes in the graph. Should only be changed by the implementation. */
Graph.prototype._nodeCount = 0;

/* Number of edges in the graph. Should only be changed by the implementation. */
Graph.prototype._edgeCount = 0;
function incrementOrInitEntry(map, k) {
  if (map[k]) {
    map[k]++;
  } else {
    map[k] = 1;
  }
}
function decrementOrRemoveEntry(map, k) {
  if (! --map[k]) {
    delete map[k];
  }
}
function edgeArgsToId(isDirected, v_, w_, name) {
  var v = '' + v_;
  var w = '' + w_;
  if (!isDirected && v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM + (lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](name) ? DEFAULT_EDGE_NAME : name);
}
function edgeArgsToObj(isDirected, v_, w_, name) {
  var v = '' + v_;
  var w = '' + w_;
  if (!isDirected && v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  var edgeObj = {
    v: v,
    w: w
  };
  if (name) {
    edgeObj.name = name;
  }
  return edgeObj;
}
function edgeObjToId(isDirected, edgeObj) {
  return edgeArgsToId(isDirected, edgeObj.v, edgeObj.w, edgeObj.name);
}

/***/ }),

/***/ 20658:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arraySome.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arraySome);

/***/ }),

/***/ 21708:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseFilter.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseEach.js */ 14583);


/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  (0,_baseEach_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection, function (value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseFilter);

/***/ }),

/***/ 22362:
/*!*******************************************************!*\
  !*** ./node_modules/lodash-es/_isStrictComparable.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 23151);


/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isStrictComparable);

/***/ }),

/***/ 24433:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/property.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseProperty.js */ 14183);
/* harmony import */ var _basePropertyDeep_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_basePropertyDeep.js */ 13529);
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKey.js */ 61604);
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_toKey.js */ 71487);





/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return (0,_isKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path) ? (0,_baseProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_toKey_js__WEBPACK_IMPORTED_MODULE_2__["default"])(path)) : (0,_basePropertyDeep_js__WEBPACK_IMPORTED_MODULE_3__["default"])(path);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (property);

/***/ }),

/***/ 27482:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getSymbols.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayFilter.js */ 84948);
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stubArray.js */ 71971);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return (0,_arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSymbols);

/***/ }),

/***/ 29281:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseIndexOf.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseFindIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseFindIndex.js */ 14681);
/* harmony import */ var _baseIsNaN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsNaN.js */ 16749);
/* harmony import */ var _strictIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_strictIndexOf.js */ 92905);




/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value ? (0,_strictIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, value, fromIndex) : (0,_baseFindIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, _baseIsNaN_js__WEBPACK_IMPORTED_MODULE_2__["default"], fromIndex);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIndexOf);

/***/ }),

/***/ 29892:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/keys.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ 58165);
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseKeys.js */ 43934);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ 38200);




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) : (0,_baseKeys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);

/***/ }),

/***/ 31200:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isSymbol.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 14478);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 85528);



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == symbolTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSymbol);

/***/ }),

/***/ 33307:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_arrayIncludes.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIndexOf.js */ 29281);


/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && (0,_baseIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, value, 0) > -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayIncludes);

/***/ }),

/***/ 33823:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_cloneDataView.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ 62279);


/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneDataView);

/***/ }),

/***/ 34463:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseUniq.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SetCache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_SetCache.js */ 82133);
/* harmony import */ var _arrayIncludes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayIncludes.js */ 33307);
/* harmony import */ var _arrayIncludesWith_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayIncludesWith.js */ 49267);
/* harmony import */ var _cacheHas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_cacheHas.js */ 64989);
/* harmony import */ var _createSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_createSet.js */ 46899);
/* harmony import */ var _setToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_setToArray.js */ 3365);







/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
    includes = _arrayIncludes_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    length = array.length,
    isCommon = true,
    result = [],
    seen = result;
  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  } else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : (0,_createSet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array);
    if (set) {
      return (0,_setToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(set);
    }
    isCommon = false;
    includes = _cacheHas_js__WEBPACK_IMPORTED_MODULE_4__["default"];
    seen = new _SetCache_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
  } else {
    seen = iteratee ? [] : result;
  }
  outer: while (++index < length) {
    var value = array[index],
      computed = iteratee ? iteratee(value) : value;
    value = comparator || value !== 0 ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    } else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUniq);

/***/ }),

/***/ 34736:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toString.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseToString.js */ 630);


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : (0,_baseToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toString);

/***/ }),

/***/ 39115:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/clone.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseClone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseClone.js */ 95365);


/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return (0,_baseClone_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, CLONE_SYMBOLS_FLAG);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clone);

/***/ }),

/***/ 39492:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_castFunction.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ 45618);


/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (castFunction);

/***/ }),

/***/ 40139:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_createBaseEach.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ 38200);


/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!(0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
      index = fromRight ? length : -1,
      iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBaseEach);

/***/ }),

/***/ 40610:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneSymbol.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 9091);


/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
  symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneSymbol);

/***/ }),

/***/ 40896:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/noop.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (noop);

/***/ }),

/***/ 41015:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_castPath.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 19247);
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isKey.js */ 61604);
/* harmony import */ var _stringToPath_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stringToPath.js */ 43516);
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toString.js */ 34736);





/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  return (0,_isKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, object) ? [value] : (0,_stringToPath_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_toString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (castPath);

/***/ }),

/***/ 43144:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/isMap.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsMap.js */ 99842);
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ 45583);
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ 64695);




/* Node.js helper references. */
var nodeIsMap = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsMap) : _baseIsMap_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMap);

/***/ }),

/***/ 43516:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_stringToPath.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_memoizeCapped.js */ 56862);


/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = (0,_memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringToPath);

/***/ }),

/***/ 43751:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseHasIn.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseHasIn);

/***/ }),

/***/ 45442:
/*!***************************************!*\
  !*** ./node_modules/lodash-es/get.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGet.js */ 59484);


/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : (0,_baseGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path);
  return result === undefined ? defaultValue : result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (get);

/***/ }),

/***/ 45839:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayEach.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayEach);

/***/ }),

/***/ 46899:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_createSet.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Set.js */ 50679);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noop.js */ 40896);
/* harmony import */ var _setToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setToArray.js */ 3365);




/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(_Set_js__WEBPACK_IMPORTED_MODULE_0__["default"] && 1 / (0,_setToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new _Set_js__WEBPACK_IMPORTED_MODULE_0__["default"]([, -0]))[1] == INFINITY) ? _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"] : function (values) {
  return new _Set_js__WEBPACK_IMPORTED_MODULE_0__["default"](values);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSet);

/***/ }),

/***/ 47390:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getMatchData.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isStrictComparable.js */ 22362);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ 29892);



/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = (0,_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object),
    length = result.length;
  while (length--) {
    var key = result[length],
      value = object[key];
    result[length] = [key, value, (0,_isStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)];
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMatchData);

/***/ }),

/***/ 49267:
/*!******************************************************!*\
  !*** ./node_modules/lodash-es/_arrayIncludesWith.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayIncludesWith);

/***/ }),

/***/ 50127:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseForOwn.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseFor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseFor.js */ 50940);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ 29892);



/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && (0,_baseFor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, iteratee, _keys_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseForOwn);

/***/ }),

/***/ 51066:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsEqualDeep.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Stack.js */ 72359);
/* harmony import */ var _equalArrays_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_equalArrays.js */ 98741);
/* harmony import */ var _equalByTag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_equalByTag.js */ 79331);
/* harmony import */ var _equalObjects_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_equalObjects.js */ 68635);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getTag.js */ 11139);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 19247);
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isBuffer.js */ 47618);
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTypedArray.js */ 18449);









/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object),
    othIsArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other),
    objTag = objIsArr ? arrayTag : (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object),
    othTag = othIsArr ? arrayTag : (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
    othIsObj = othTag == objectTag,
    isSameTag = objTag == othTag;
  if (isSameTag && (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object)) {
    if (!(0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
    return objIsArr || (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object) ? (0,_equalArrays_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object, other, bitmask, customizer, equalFunc, stack) : (0,_equalByTag_js__WEBPACK_IMPORTED_MODULE_6__["default"])(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
      othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
        othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
  return (0,_equalObjects_js__WEBPACK_IMPORTED_MODULE_7__["default"])(object, other, bitmask, customizer, equalFunc, stack);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsEqualDeep);

/***/ }),

/***/ 52591:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneRegExp.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneRegExp);

/***/ }),

/***/ 52888:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseValues.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayMap.js */ 7786);


/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(props, function (key) {
    return object[key];
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseValues);

/***/ }),

/***/ 53578:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/reduce.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayReduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayReduce.js */ 56212);
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseEach.js */ 14583);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseIteratee.js */ 65679);
/* harmony import */ var _baseReduce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseReduce.js */ 94092);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 19247);






/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? _arrayReduce_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _baseReduce_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    initAccum = arguments.length < 3;
  return func(collection, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__["default"])(iteratee, 4), accumulator, initAccum, _baseEach_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reduce);

/***/ }),

/***/ 53969:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseMatches.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsMatch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsMatch.js */ 89169);
/* harmony import */ var _getMatchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMatchData.js */ 47390);
/* harmony import */ var _matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_matchesStrictComparable.js */ 96923);




/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = (0,_getMatchData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return (0,_matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(matchData[0][0], matchData[0][1]);
  }
  return function (object) {
    return object === source || (0,_baseIsMatch_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object, source, matchData);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMatches);

/***/ }),

/***/ 54676:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsEqual.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsEqualDeep_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsEqualDeep.js */ 51066);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 85528);



/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && !(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other)) {
    return value !== value && other !== other;
  }
  return (0,_baseIsEqualDeep_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, other, bitmask, customizer, baseIsEqual, stack);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsEqual);

/***/ }),

/***/ 56212:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_arrayReduce.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
    length = array == null ? 0 : array.length;
  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayReduce);

/***/ }),

/***/ 56408:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ 61893);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ 75243);



/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssignIn);

/***/ }),

/***/ 56862:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_memoizeCapped.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _memoize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memoize.js */ 37674);


/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = (0,_memoize_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeCapped);

/***/ }),

/***/ 58705:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_baseGetAllKeys.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ 59126);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 19247);



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? result : (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, symbolsFunc(object));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetAllKeys);

/***/ }),

/***/ 59126:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayPush.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
    length = values.length,
    offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayPush);

/***/ }),

/***/ 59484:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseGet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castPath.js */ 41015);
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toKey.js */ 71487);



/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = (0,_castPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path, object);
  var index = 0,
    length = path.length;
  while (object != null && index < length) {
    object = object[(0,_toKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path[index++])];
  }
  return index && index == length ? object : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGet);

/***/ }),

/***/ 59990:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/values.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseValues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseValues.js */ 52888);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ 29892);



/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : (0,_baseValues_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (values);

/***/ }),

/***/ 61187:
/*!*****************************************************!*\
  !*** ./node_modules/khroma/dist/methods/channel.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ 16191);
/* harmony import */ var _color_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color/index.js */ 79537);
/* IMPORT */


/* MAIN */
const channel = (color, channel) => {
  return _utils_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].lang.round(_color_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].parse(color)[channel]);
};
/* EXPORT */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (channel);

/***/ }),

/***/ 61604:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_isKey.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 19247);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSymbol.js */ 31200);



/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isKey);

/***/ }),

/***/ 61823:
/*!********************************************************!*\
  !*** ./node_modules/dagre-d3-es/src/graphlib/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Graph: () => (/* reexport safe */ _graph_js__WEBPACK_IMPORTED_MODULE_0__.Graph),
/* harmony export */   version: () => (/* binding */ version)
/* harmony export */ });
/* harmony import */ var _graph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph.js */ 17991);
// Includes only the "core" of graphlib


const version = '2.1.9-pre';


/***/ }),

/***/ 63147:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeysIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ 58705);
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbolsIn.js */ 89309);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ 75243);




/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return (0,_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"], _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllKeysIn);

/***/ }),

/***/ 64989:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_cacheHas.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cacheHas);

/***/ }),

/***/ 65679:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseIteratee.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseMatches_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseMatches.js */ 53969);
/* harmony import */ var _baseMatchesProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseMatchesProperty.js */ 7744);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ 45618);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ 19247);
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./property.js */ 24433);






/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
  if (typeof value == 'object') {
    return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) ? (0,_baseMatchesProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value[0], value[1]) : (0,_baseMatches_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value);
  }
  return (0,_property_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIteratee);

/***/ }),

/***/ 67467:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseAssign.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ 61893);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ 29892);



/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssign);

/***/ }),

/***/ 68635:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_equalObjects.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getAllKeys.js */ 86340);


/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
    objProps = (0,_getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object),
    objLength = objProps.length,
    othProps = (0,_getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other),
    othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
      othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
      othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equalObjects);

/***/ }),

/***/ 71157:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_setCacheHas.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setCacheHas);

/***/ }),

/***/ 71487:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_toKey.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ 31200);


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toKey);

/***/ }),

/***/ 71971:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubArray.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubArray);

/***/ }),

/***/ 76449:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/hasIn.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseHasIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseHasIn.js */ 43751);
/* harmony import */ var _hasPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hasPath.js */ 14924);



/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && (0,_hasPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path, _baseHasIn_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasIn);

/***/ }),

/***/ 78392:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsSet.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getTag.js */ 11139);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 85528);



/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == setTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsSet);

/***/ }),

/***/ 79331:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_equalByTag.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 9091);
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Uint8Array.js */ 66270);
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eq.js */ 97622);
/* harmony import */ var _equalArrays_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_equalArrays.js */ 98741);
/* harmony import */ var _mapToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapToArray.js */ 9175);
/* harmony import */ var _setToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_setToArray.js */ 3365);







/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
  symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__["default"](object), new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__["default"](other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return (0,_eq_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';
    case mapTag:
      var convert = _mapToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = _setToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = (0,_equalArrays_js__WEBPACK_IMPORTED_MODULE_5__["default"])(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equalByTag);

/***/ }),

/***/ 82133:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_SetCache.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MapCache.js */ 7531);
/* harmony import */ var _setCacheAdd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setCacheAdd.js */ 12394);
/* harmony import */ var _setCacheHas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setCacheHas.js */ 71157);




/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
    length = values == null ? 0 : values.length;
  this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd_js__WEBPACK_IMPORTED_MODULE_1__["default"];
SetCache.prototype.has = _setCacheHas_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetCache);

/***/ }),

/***/ 84948:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_arrayFilter.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayFilter);

/***/ }),

/***/ 85321:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/union.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseFlatten_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseFlatten.js */ 3474);
/* harmony import */ var _baseRest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseRest.js */ 46124);
/* harmony import */ var _baseUniq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUniq.js */ 34463);
/* harmony import */ var _isArrayLikeObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArrayLikeObject.js */ 92031);





/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = (0,_baseRest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (arrays) {
  return (0,_baseUniq_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_baseFlatten_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arrays, 1, _isArrayLikeObject_js__WEBPACK_IMPORTED_MODULE_3__["default"], true));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (union);

/***/ }),

/***/ 86217:
/*!*********************************************************************************!*\
  !*** ./node_modules/mermaid/dist/chunks/mermaid.core/blockDiagram-JOT3LUYC.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   diagram: () => (/* binding */ diagram)
/* harmony export */ });
/* harmony import */ var _Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _chunk_VV3M67IP_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-VV3M67IP.mjs */ 22593);
/* harmony import */ var _chunk_K557N5IZ_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-K557N5IZ.mjs */ 17601);
/* harmony import */ var _chunk_C3MQ5ANM_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-C3MQ5ANM.mjs */ 73482);
/* harmony import */ var _chunk_O4NI6UNU_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chunk-O4NI6UNU.mjs */ 3105);
/* harmony import */ var _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chunk-YTJNT7DU.mjs */ 10990);
/* harmony import */ var lodash_es_clone_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es/clone.js */ 39115);
/* harmony import */ var khroma__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! khroma */ 61187);
/* harmony import */ var khroma__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! khroma */ 85404);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3 */ 40622);
/* harmony import */ var dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dagre-d3-es/src/graphlib/index.js */ 61823);







// src/diagrams/block/parser/block.jison
var parser = function () {
  var o = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function (k, v, o2, l) {
      for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v);
      return o2;
    }, "o"),
    $V0 = [1, 7],
    $V1 = [1, 13],
    $V2 = [1, 14],
    $V3 = [1, 15],
    $V4 = [1, 19],
    $V5 = [1, 16],
    $V6 = [1, 17],
    $V7 = [1, 18],
    $V8 = [8, 30],
    $V9 = [8, 21, 28, 29, 30, 31, 32, 40, 44, 47],
    $Va = [1, 23],
    $Vb = [1, 24],
    $Vc = [8, 15, 16, 21, 28, 29, 30, 31, 32, 40, 44, 47],
    $Vd = [8, 15, 16, 21, 27, 28, 29, 30, 31, 32, 40, 44, 47],
    $Ve = [1, 49];
  var parser2 = {
    trace: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function trace() {}, "trace"),
    yy: {},
    symbols_: {
      "error": 2,
      "spaceLines": 3,
      "SPACELINE": 4,
      "NL": 5,
      "separator": 6,
      "SPACE": 7,
      "EOF": 8,
      "start": 9,
      "BLOCK_DIAGRAM_KEY": 10,
      "document": 11,
      "stop": 12,
      "statement": 13,
      "link": 14,
      "LINK": 15,
      "START_LINK": 16,
      "LINK_LABEL": 17,
      "STR": 18,
      "nodeStatement": 19,
      "columnsStatement": 20,
      "SPACE_BLOCK": 21,
      "blockStatement": 22,
      "classDefStatement": 23,
      "cssClassStatement": 24,
      "styleStatement": 25,
      "node": 26,
      "SIZE": 27,
      "COLUMNS": 28,
      "id-block": 29,
      "end": 30,
      "block": 31,
      "NODE_ID": 32,
      "nodeShapeNLabel": 33,
      "dirList": 34,
      "DIR": 35,
      "NODE_DSTART": 36,
      "NODE_DEND": 37,
      "BLOCK_ARROW_START": 38,
      "BLOCK_ARROW_END": 39,
      "classDef": 40,
      "CLASSDEF_ID": 41,
      "CLASSDEF_STYLEOPTS": 42,
      "DEFAULT": 43,
      "class": 44,
      "CLASSENTITY_IDS": 45,
      "STYLECLASS": 46,
      "style": 47,
      "STYLE_ENTITY_IDS": 48,
      "STYLE_DEFINITION_DATA": 49,
      "$accept": 0,
      "$end": 1
    },
    terminals_: {
      2: "error",
      4: "SPACELINE",
      5: "NL",
      7: "SPACE",
      8: "EOF",
      10: "BLOCK_DIAGRAM_KEY",
      15: "LINK",
      16: "START_LINK",
      17: "LINK_LABEL",
      18: "STR",
      21: "SPACE_BLOCK",
      27: "SIZE",
      28: "COLUMNS",
      29: "id-block",
      30: "end",
      31: "block",
      32: "NODE_ID",
      35: "DIR",
      36: "NODE_DSTART",
      37: "NODE_DEND",
      38: "BLOCK_ARROW_START",
      39: "BLOCK_ARROW_END",
      40: "classDef",
      41: "CLASSDEF_ID",
      42: "CLASSDEF_STYLEOPTS",
      43: "DEFAULT",
      44: "class",
      45: "CLASSENTITY_IDS",
      46: "STYLECLASS",
      47: "style",
      48: "STYLE_ENTITY_IDS",
      49: "STYLE_DEFINITION_DATA"
    },
    productions_: [0, [3, 1], [3, 2], [3, 2], [6, 1], [6, 1], [6, 1], [9, 3], [12, 1], [12, 1], [12, 2], [12, 2], [11, 1], [11, 2], [14, 1], [14, 4], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [19, 3], [19, 2], [19, 1], [20, 1], [22, 4], [22, 3], [26, 1], [26, 2], [34, 1], [34, 2], [33, 3], [33, 4], [23, 3], [23, 3], [24, 3], [25, 3]],
    performAction: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 4:
          yy.getLogger().debug("Rule: separator (NL) ");
          break;
        case 5:
          yy.getLogger().debug("Rule: separator (Space) ");
          break;
        case 6:
          yy.getLogger().debug("Rule: separator (EOF) ");
          break;
        case 7:
          yy.getLogger().debug("Rule: hierarchy: ", $$[$0 - 1]);
          yy.setHierarchy($$[$0 - 1]);
          break;
        case 8:
          yy.getLogger().debug("Stop NL ");
          break;
        case 9:
          yy.getLogger().debug("Stop EOF ");
          break;
        case 10:
          yy.getLogger().debug("Stop NL2 ");
          break;
        case 11:
          yy.getLogger().debug("Stop EOF2 ");
          break;
        case 12:
          yy.getLogger().debug("Rule: statement: ", $$[$0]);
          typeof $$[$0].length === "number" ? this.$ = $$[$0] : this.$ = [$$[$0]];
          break;
        case 13:
          yy.getLogger().debug("Rule: statement #2: ", $$[$0 - 1]);
          this.$ = [$$[$0 - 1]].concat($$[$0]);
          break;
        case 14:
          yy.getLogger().debug("Rule: link: ", $$[$0], yytext);
          this.$ = {
            edgeTypeStr: $$[$0],
            label: ""
          };
          break;
        case 15:
          yy.getLogger().debug("Rule: LABEL link: ", $$[$0 - 3], $$[$0 - 1], $$[$0]);
          this.$ = {
            edgeTypeStr: $$[$0],
            label: $$[$0 - 1]
          };
          break;
        case 18:
          const num = parseInt($$[$0]);
          const spaceId = yy.generateId();
          this.$ = {
            id: spaceId,
            type: "space",
            label: "",
            width: num,
            children: []
          };
          break;
        case 23:
          yy.getLogger().debug("Rule: (nodeStatement link node) ", $$[$0 - 2], $$[$0 - 1], $$[$0], " typestr: ", $$[$0 - 1].edgeTypeStr);
          const edgeData = yy.edgeStrToEdgeData($$[$0 - 1].edgeTypeStr);
          this.$ = [{
            id: $$[$0 - 2].id,
            label: $$[$0 - 2].label,
            type: $$[$0 - 2].type,
            directions: $$[$0 - 2].directions
          }, {
            id: $$[$0 - 2].id + "-" + $$[$0].id,
            start: $$[$0 - 2].id,
            end: $$[$0].id,
            label: $$[$0 - 1].label,
            type: "edge",
            directions: $$[$0].directions,
            arrowTypeEnd: edgeData,
            arrowTypeStart: "arrow_open"
          }, {
            id: $$[$0].id,
            label: $$[$0].label,
            type: yy.typeStr2Type($$[$0].typeStr),
            directions: $$[$0].directions
          }];
          break;
        case 24:
          yy.getLogger().debug("Rule: nodeStatement (abc88 node size) ", $$[$0 - 1], $$[$0]);
          this.$ = {
            id: $$[$0 - 1].id,
            label: $$[$0 - 1].label,
            type: yy.typeStr2Type($$[$0 - 1].typeStr),
            directions: $$[$0 - 1].directions,
            widthInColumns: parseInt($$[$0], 10)
          };
          break;
        case 25:
          yy.getLogger().debug("Rule: nodeStatement (node) ", $$[$0]);
          this.$ = {
            id: $$[$0].id,
            label: $$[$0].label,
            type: yy.typeStr2Type($$[$0].typeStr),
            directions: $$[$0].directions,
            widthInColumns: 1
          };
          break;
        case 26:
          yy.getLogger().debug("APA123", this ? this : "na");
          yy.getLogger().debug("COLUMNS: ", $$[$0]);
          this.$ = {
            type: "column-setting",
            columns: $$[$0] === "auto" ? -1 : parseInt($$[$0])
          };
          break;
        case 27:
          yy.getLogger().debug("Rule: id-block statement : ", $$[$0 - 2], $$[$0 - 1]);
          const id2 = yy.generateId();
          this.$ = {
            ...$$[$0 - 2],
            type: "composite",
            children: $$[$0 - 1]
          };
          break;
        case 28:
          yy.getLogger().debug("Rule: blockStatement : ", $$[$0 - 2], $$[$0 - 1], $$[$0]);
          const id = yy.generateId();
          this.$ = {
            id,
            type: "composite",
            label: "",
            children: $$[$0 - 1]
          };
          break;
        case 29:
          yy.getLogger().debug("Rule: node (NODE_ID separator): ", $$[$0]);
          this.$ = {
            id: $$[$0]
          };
          break;
        case 30:
          yy.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ", $$[$0 - 1], $$[$0]);
          this.$ = {
            id: $$[$0 - 1],
            label: $$[$0].label,
            typeStr: $$[$0].typeStr,
            directions: $$[$0].directions
          };
          break;
        case 31:
          yy.getLogger().debug("Rule: dirList: ", $$[$0]);
          this.$ = [$$[$0]];
          break;
        case 32:
          yy.getLogger().debug("Rule: dirList: ", $$[$0 - 1], $$[$0]);
          this.$ = [$$[$0 - 1]].concat($$[$0]);
          break;
        case 33:
          yy.getLogger().debug("Rule: nodeShapeNLabel: ", $$[$0 - 2], $$[$0 - 1], $$[$0]);
          this.$ = {
            typeStr: $$[$0 - 2] + $$[$0],
            label: $$[$0 - 1]
          };
          break;
        case 34:
          yy.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ", $$[$0 - 3], $$[$0 - 2], " #3:", $$[$0 - 1], $$[$0]);
          this.$ = {
            typeStr: $$[$0 - 3] + $$[$0],
            label: $$[$0 - 2],
            directions: $$[$0 - 1]
          };
          break;
        case 35:
        case 36:
          this.$ = {
            type: "classDef",
            id: $$[$0 - 1].trim(),
            css: $$[$0].trim()
          };
          break;
        case 37:
          this.$ = {
            type: "applyClass",
            id: $$[$0 - 1].trim(),
            styleClass: $$[$0].trim()
          };
          break;
        case 38:
          this.$ = {
            type: "applyStyles",
            id: $$[$0 - 1].trim(),
            stylesStr: $$[$0].trim()
          };
          break;
      }
    }, "anonymous"),
    table: [{
      9: 1,
      10: [1, 2]
    }, {
      1: [3]
    }, {
      11: 3,
      13: 4,
      19: 5,
      20: 6,
      21: $V0,
      22: 8,
      23: 9,
      24: 10,
      25: 11,
      26: 12,
      28: $V1,
      29: $V2,
      31: $V3,
      32: $V4,
      40: $V5,
      44: $V6,
      47: $V7
    }, {
      8: [1, 20]
    }, o($V8, [2, 12], {
      13: 4,
      19: 5,
      20: 6,
      22: 8,
      23: 9,
      24: 10,
      25: 11,
      26: 12,
      11: 21,
      21: $V0,
      28: $V1,
      29: $V2,
      31: $V3,
      32: $V4,
      40: $V5,
      44: $V6,
      47: $V7
    }), o($V9, [2, 16], {
      14: 22,
      15: $Va,
      16: $Vb
    }), o($V9, [2, 17]), o($V9, [2, 18]), o($V9, [2, 19]), o($V9, [2, 20]), o($V9, [2, 21]), o($V9, [2, 22]), o($Vc, [2, 25], {
      27: [1, 25]
    }), o($V9, [2, 26]), {
      19: 26,
      26: 12,
      32: $V4
    }, {
      11: 27,
      13: 4,
      19: 5,
      20: 6,
      21: $V0,
      22: 8,
      23: 9,
      24: 10,
      25: 11,
      26: 12,
      28: $V1,
      29: $V2,
      31: $V3,
      32: $V4,
      40: $V5,
      44: $V6,
      47: $V7
    }, {
      41: [1, 28],
      43: [1, 29]
    }, {
      45: [1, 30]
    }, {
      48: [1, 31]
    }, o($Vd, [2, 29], {
      33: 32,
      36: [1, 33],
      38: [1, 34]
    }), {
      1: [2, 7]
    }, o($V8, [2, 13]), {
      26: 35,
      32: $V4
    }, {
      32: [2, 14]
    }, {
      17: [1, 36]
    }, o($Vc, [2, 24]), {
      11: 37,
      13: 4,
      14: 22,
      15: $Va,
      16: $Vb,
      19: 5,
      20: 6,
      21: $V0,
      22: 8,
      23: 9,
      24: 10,
      25: 11,
      26: 12,
      28: $V1,
      29: $V2,
      31: $V3,
      32: $V4,
      40: $V5,
      44: $V6,
      47: $V7
    }, {
      30: [1, 38]
    }, {
      42: [1, 39]
    }, {
      42: [1, 40]
    }, {
      46: [1, 41]
    }, {
      49: [1, 42]
    }, o($Vd, [2, 30]), {
      18: [1, 43]
    }, {
      18: [1, 44]
    }, o($Vc, [2, 23]), {
      18: [1, 45]
    }, {
      30: [1, 46]
    }, o($V9, [2, 28]), o($V9, [2, 35]), o($V9, [2, 36]), o($V9, [2, 37]), o($V9, [2, 38]), {
      37: [1, 47]
    }, {
      34: 48,
      35: $Ve
    }, {
      15: [1, 50]
    }, o($V9, [2, 27]), o($Vd, [2, 33]), {
      39: [1, 51]
    }, {
      34: 52,
      35: $Ve,
      39: [2, 31]
    }, {
      32: [2, 15]
    }, o($Vd, [2, 34]), {
      39: [2, 32]
    }],
    defaultActions: {
      20: [2, 7],
      23: [2, 14],
      50: [2, 15],
      52: [2, 32]
    },
    parseError: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function parseError(str, hash) {
      if (hash.recoverable) {
        this.trace(str);
      } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
      }
    }, "parseError"),
    parse: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function parse(input) {
      var self = this,
        stack = [0],
        tstack = [],
        vstack = [null],
        lstack = [],
        table = this.table,
        yytext = "",
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;
      var args = lstack.slice.call(arguments, 1);
      var lexer2 = Object.create(this.lexer);
      var sharedState = {
        yy: {}
      };
      for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
          sharedState.yy[k] = this.yy[k];
        }
      }
      lexer2.setInput(input, sharedState.yy);
      sharedState.yy.lexer = lexer2;
      sharedState.yy.parser = this;
      if (typeof lexer2.yylloc == "undefined") {
        lexer2.yylloc = {};
      }
      var yyloc = lexer2.yylloc;
      lstack.push(yyloc);
      var ranges = lexer2.options && lexer2.options.ranges;
      if (typeof sharedState.yy.parseError === "function") {
        this.parseError = sharedState.yy.parseError;
      } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
      }
      function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
      }
      (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(popStack, "popStack");
      function lex() {
        var token;
        token = tstack.pop() || lexer2.lex() || EOF;
        if (typeof token !== "number") {
          if (token instanceof Array) {
            tstack = token;
            token = tstack.pop();
          }
          token = self.symbols_[token] || token;
        }
        return token;
      }
      (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(lex, "lex");
      var symbol,
        preErrorSymbol,
        state,
        action,
        a,
        r,
        yyval = {},
        p,
        len,
        newState,
        expected;
      while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
          action = this.defaultActions[state];
        } else {
          if (symbol === null || typeof symbol == "undefined") {
            symbol = lex();
          }
          action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
          var errStr = "";
          expected = [];
          for (p in table[state]) {
            if (this.terminals_[p] && p > TERROR) {
              expected.push("'" + this.terminals_[p] + "'");
            }
          }
          if (lexer2.showPosition) {
            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
          } else {
            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
          }
          this.parseError(errStr, {
            text: lexer2.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer2.yylineno,
            loc: yyloc,
            expected
          });
        }
        if (action[0] instanceof Array && action.length > 1) {
          throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
          case 1:
            stack.push(symbol);
            vstack.push(lexer2.yytext);
            lstack.push(lexer2.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
              yyleng = lexer2.yyleng;
              yytext = lexer2.yytext;
              yylineno = lexer2.yylineno;
              yyloc = lexer2.yylloc;
              if (recovering > 0) {
                recovering--;
              }
            } else {
              symbol = preErrorSymbol;
              preErrorSymbol = null;
            }
            break;
          case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
              yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));
            if (typeof r !== "undefined") {
              return r;
            }
            if (len) {
              stack = stack.slice(0, -1 * len * 2);
              vstack = vstack.slice(0, -1 * len);
              lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  };
  var lexer = /* @__PURE__ */function () {
    var lexer2 = {
      EOF: 1,
      parseError: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function parseError(str, hash) {
        if (this.yy.parser) {
          this.yy.parser.parseError(str, hash);
        } else {
          throw new Error(str);
        }
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = "";
        this.conditionStack = ["INITIAL"];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        };
        if (this.options.ranges) {
          this.yylloc.range = [0, 0];
        }
        this.offset = 0;
        return this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return ch;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);
        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (lines.length - 1) {
          this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
        };
        if (this.options.ranges) {
          this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
      }, "unput"),
      // When called from action, caches matched text and appends it on next action
      more: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function () {
        this._more = true;
        return this;
      }, "more"),
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function () {
        if (this.options.backtrack_lexer) {
          this._backtrack = true;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
        return this;
      }, "reject"),
      // retain first n characters of the match
      less: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function (n) {
        this.unput(this.match.slice(n));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function () {
        var next = this.match;
        if (next.length < 20) {
          next += this._input.substr(0, 20 - next.length);
        }
        return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function (match, indexed_rule) {
        var token, lines, backup;
        if (this.options.backtrack_lexer) {
          backup = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          };
          if (this.options.ranges) {
            backup.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno += lines.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (token) {
          return token;
        } else if (this._backtrack) {
          for (var k in backup) {
            this[k] = backup[k];
          }
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function () {
        if (this.done) {
          return this.EOF;
        }
        if (!this._input) {
          this.done = true;
        }
        var token, match, tempMatch, index;
        if (!this._more) {
          this.yytext = "";
          this.match = "";
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
          tempMatch = this._input.match(this.rules[rules[i]]);
          if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch;
            index = i;
            if (this.options.backtrack_lexer) {
              token = this.test_match(tempMatch, rules[i]);
              if (token !== false) {
                return token;
              } else if (this._backtrack) {
                match = false;
                continue;
              } else {
                return false;
              }
            } else if (!this.options.flex) {
              break;
            }
          }
        }
        if (match) {
          token = this.test_match(match, rules[index]);
          if (token !== false) {
            return token;
          }
          return false;
        }
        if (this._input === "") {
          return this.EOF;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function lex() {
        var r = this.next();
        if (r) {
          return r;
        } else {
          return this.lex();
        }
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function begin(condition) {
        this.conditionStack.push(condition);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
          return this.conditions["INITIAL"].rules;
        }
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
          return this.conditionStack[n];
        } else {
          return "INITIAL";
        }
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function pushState(condition) {
        this.begin(condition);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function stateStackSize() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {},
      performAction: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
        var YYSTATE = YY_START;
        switch ($avoiding_name_collisions) {
          case 0:
            return 10;
            break;
          case 1:
            yy.getLogger().debug("Found space-block");
            return 31;
            break;
          case 2:
            yy.getLogger().debug("Found nl-block");
            return 31;
            break;
          case 3:
            yy.getLogger().debug("Found space-block");
            return 29;
            break;
          case 4:
            yy.getLogger().debug(".", yy_.yytext);
            break;
          case 5:
            yy.getLogger().debug("_", yy_.yytext);
            break;
          case 6:
            return 5;
            break;
          case 7:
            yy_.yytext = -1;
            return 28;
            break;
          case 8:
            yy_.yytext = yy_.yytext.replace(/columns\s+/, "");
            yy.getLogger().debug("COLUMNS (LEX)", yy_.yytext);
            return 28;
            break;
          case 9:
            this.pushState("md_string");
            break;
          case 10:
            return "MD_STR";
            break;
          case 11:
            this.popState();
            break;
          case 12:
            this.pushState("string");
            break;
          case 13:
            yy.getLogger().debug("LEX: POPPING STR:", yy_.yytext);
            this.popState();
            break;
          case 14:
            yy.getLogger().debug("LEX: STR end:", yy_.yytext);
            return "STR";
            break;
          case 15:
            yy_.yytext = yy_.yytext.replace(/space\:/, "");
            yy.getLogger().debug("SPACE NUM (LEX)", yy_.yytext);
            return 21;
            break;
          case 16:
            yy_.yytext = "1";
            yy.getLogger().debug("COLUMNS (LEX)", yy_.yytext);
            return 21;
            break;
          case 17:
            return 43;
            break;
          case 18:
            return "LINKSTYLE";
            break;
          case 19:
            return "INTERPOLATE";
            break;
          case 20:
            this.pushState("CLASSDEF");
            return 40;
            break;
          case 21:
            this.popState();
            this.pushState("CLASSDEFID");
            return "DEFAULT_CLASSDEF_ID";
            break;
          case 22:
            this.popState();
            this.pushState("CLASSDEFID");
            return 41;
            break;
          case 23:
            this.popState();
            return 42;
            break;
          case 24:
            this.pushState("CLASS");
            return 44;
            break;
          case 25:
            this.popState();
            this.pushState("CLASS_STYLE");
            return 45;
            break;
          case 26:
            this.popState();
            return 46;
            break;
          case 27:
            this.pushState("STYLE_STMNT");
            return 47;
            break;
          case 28:
            this.popState();
            this.pushState("STYLE_DEFINITION");
            return 48;
            break;
          case 29:
            this.popState();
            return 49;
            break;
          case 30:
            this.pushState("acc_title");
            return "acc_title";
            break;
          case 31:
            this.popState();
            return "acc_title_value";
            break;
          case 32:
            this.pushState("acc_descr");
            return "acc_descr";
            break;
          case 33:
            this.popState();
            return "acc_descr_value";
            break;
          case 34:
            this.pushState("acc_descr_multiline");
            break;
          case 35:
            this.popState();
            break;
          case 36:
            return "acc_descr_multiline_value";
            break;
          case 37:
            return 30;
            break;
          case 38:
            this.popState();
            yy.getLogger().debug("Lex: ((");
            return "NODE_DEND";
            break;
          case 39:
            this.popState();
            yy.getLogger().debug("Lex: ((");
            return "NODE_DEND";
            break;
          case 40:
            this.popState();
            yy.getLogger().debug("Lex: ))");
            return "NODE_DEND";
            break;
          case 41:
            this.popState();
            yy.getLogger().debug("Lex: ((");
            return "NODE_DEND";
            break;
          case 42:
            this.popState();
            yy.getLogger().debug("Lex: ((");
            return "NODE_DEND";
            break;
          case 43:
            this.popState();
            yy.getLogger().debug("Lex: (-");
            return "NODE_DEND";
            break;
          case 44:
            this.popState();
            yy.getLogger().debug("Lex: -)");
            return "NODE_DEND";
            break;
          case 45:
            this.popState();
            yy.getLogger().debug("Lex: ((");
            return "NODE_DEND";
            break;
          case 46:
            this.popState();
            yy.getLogger().debug("Lex: ]]");
            return "NODE_DEND";
            break;
          case 47:
            this.popState();
            yy.getLogger().debug("Lex: (");
            return "NODE_DEND";
            break;
          case 48:
            this.popState();
            yy.getLogger().debug("Lex: ])");
            return "NODE_DEND";
            break;
          case 49:
            this.popState();
            yy.getLogger().debug("Lex: /]");
            return "NODE_DEND";
            break;
          case 50:
            this.popState();
            yy.getLogger().debug("Lex: /]");
            return "NODE_DEND";
            break;
          case 51:
            this.popState();
            yy.getLogger().debug("Lex: )]");
            return "NODE_DEND";
            break;
          case 52:
            this.popState();
            yy.getLogger().debug("Lex: )");
            return "NODE_DEND";
            break;
          case 53:
            this.popState();
            yy.getLogger().debug("Lex: ]>");
            return "NODE_DEND";
            break;
          case 54:
            this.popState();
            yy.getLogger().debug("Lex: ]");
            return "NODE_DEND";
            break;
          case 55:
            yy.getLogger().debug("Lexa: -)");
            this.pushState("NODE");
            return 36;
            break;
          case 56:
            yy.getLogger().debug("Lexa: (-");
            this.pushState("NODE");
            return 36;
            break;
          case 57:
            yy.getLogger().debug("Lexa: ))");
            this.pushState("NODE");
            return 36;
            break;
          case 58:
            yy.getLogger().debug("Lexa: )");
            this.pushState("NODE");
            return 36;
            break;
          case 59:
            yy.getLogger().debug("Lex: (((");
            this.pushState("NODE");
            return 36;
            break;
          case 60:
            yy.getLogger().debug("Lexa: )");
            this.pushState("NODE");
            return 36;
            break;
          case 61:
            yy.getLogger().debug("Lexa: )");
            this.pushState("NODE");
            return 36;
            break;
          case 62:
            yy.getLogger().debug("Lexa: )");
            this.pushState("NODE");
            return 36;
            break;
          case 63:
            yy.getLogger().debug("Lexc: >");
            this.pushState("NODE");
            return 36;
            break;
          case 64:
            yy.getLogger().debug("Lexa: ([");
            this.pushState("NODE");
            return 36;
            break;
          case 65:
            yy.getLogger().debug("Lexa: )");
            this.pushState("NODE");
            return 36;
            break;
          case 66:
            this.pushState("NODE");
            return 36;
            break;
          case 67:
            this.pushState("NODE");
            return 36;
            break;
          case 68:
            this.pushState("NODE");
            return 36;
            break;
          case 69:
            this.pushState("NODE");
            return 36;
            break;
          case 70:
            this.pushState("NODE");
            return 36;
            break;
          case 71:
            this.pushState("NODE");
            return 36;
            break;
          case 72:
            this.pushState("NODE");
            return 36;
            break;
          case 73:
            yy.getLogger().debug("Lexa: [");
            this.pushState("NODE");
            return 36;
            break;
          case 74:
            this.pushState("BLOCK_ARROW");
            yy.getLogger().debug("LEX ARR START");
            return 38;
            break;
          case 75:
            yy.getLogger().debug("Lex: NODE_ID", yy_.yytext);
            return 32;
            break;
          case 76:
            yy.getLogger().debug("Lex: EOF", yy_.yytext);
            return 8;
            break;
          case 77:
            this.pushState("md_string");
            break;
          case 78:
            this.pushState("md_string");
            break;
          case 79:
            return "NODE_DESCR";
            break;
          case 80:
            this.popState();
            break;
          case 81:
            yy.getLogger().debug("Lex: Starting string");
            this.pushState("string");
            break;
          case 82:
            yy.getLogger().debug("LEX ARR: Starting string");
            this.pushState("string");
            break;
          case 83:
            yy.getLogger().debug("LEX: NODE_DESCR:", yy_.yytext);
            return "NODE_DESCR";
            break;
          case 84:
            yy.getLogger().debug("LEX POPPING");
            this.popState();
            break;
          case 85:
            yy.getLogger().debug("Lex: =>BAE");
            this.pushState("ARROW_DIR");
            break;
          case 86:
            yy_.yytext = yy_.yytext.replace(/^,\s*/, "");
            yy.getLogger().debug("Lex (right): dir:", yy_.yytext);
            return "DIR";
            break;
          case 87:
            yy_.yytext = yy_.yytext.replace(/^,\s*/, "");
            yy.getLogger().debug("Lex (left):", yy_.yytext);
            return "DIR";
            break;
          case 88:
            yy_.yytext = yy_.yytext.replace(/^,\s*/, "");
            yy.getLogger().debug("Lex (x):", yy_.yytext);
            return "DIR";
            break;
          case 89:
            yy_.yytext = yy_.yytext.replace(/^,\s*/, "");
            yy.getLogger().debug("Lex (y):", yy_.yytext);
            return "DIR";
            break;
          case 90:
            yy_.yytext = yy_.yytext.replace(/^,\s*/, "");
            yy.getLogger().debug("Lex (up):", yy_.yytext);
            return "DIR";
            break;
          case 91:
            yy_.yytext = yy_.yytext.replace(/^,\s*/, "");
            yy.getLogger().debug("Lex (down):", yy_.yytext);
            return "DIR";
            break;
          case 92:
            yy_.yytext = "]>";
            yy.getLogger().debug("Lex (ARROW_DIR end):", yy_.yytext);
            this.popState();
            this.popState();
            return "BLOCK_ARROW_END";
            break;
          case 93:
            yy.getLogger().debug("Lex: LINK", "#" + yy_.yytext + "#");
            return 15;
            break;
          case 94:
            yy.getLogger().debug("Lex: LINK", yy_.yytext);
            return 15;
            break;
          case 95:
            yy.getLogger().debug("Lex: LINK", yy_.yytext);
            return 15;
            break;
          case 96:
            yy.getLogger().debug("Lex: LINK", yy_.yytext);
            return 15;
            break;
          case 97:
            yy.getLogger().debug("Lex: START_LINK", yy_.yytext);
            this.pushState("LLABEL");
            return 16;
            break;
          case 98:
            yy.getLogger().debug("Lex: START_LINK", yy_.yytext);
            this.pushState("LLABEL");
            return 16;
            break;
          case 99:
            yy.getLogger().debug("Lex: START_LINK", yy_.yytext);
            this.pushState("LLABEL");
            return 16;
            break;
          case 100:
            this.pushState("md_string");
            break;
          case 101:
            yy.getLogger().debug("Lex: Starting string");
            this.pushState("string");
            return "LINK_LABEL";
            break;
          case 102:
            this.popState();
            yy.getLogger().debug("Lex: LINK", "#" + yy_.yytext + "#");
            return 15;
            break;
          case 103:
            this.popState();
            yy.getLogger().debug("Lex: LINK", yy_.yytext);
            return 15;
            break;
          case 104:
            this.popState();
            yy.getLogger().debug("Lex: LINK", yy_.yytext);
            return 15;
            break;
          case 105:
            yy.getLogger().debug("Lex: COLON", yy_.yytext);
            yy_.yytext = yy_.yytext.slice(1);
            return 27;
            break;
        }
      }, "anonymous"),
      rules: [/^(?:block-beta\b)/, /^(?:block\s+)/, /^(?:block\n+)/, /^(?:block:)/, /^(?:[\s]+)/, /^(?:[\n]+)/, /^(?:((\u000D\u000A)|(\u000A)))/, /^(?:columns\s+auto\b)/, /^(?:columns\s+[\d]+)/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]*)/, /^(?:space[:]\d+)/, /^(?:space\b)/, /^(?:default\b)/, /^(?:linkStyle\b)/, /^(?:interpolate\b)/, /^(?:classDef\s+)/, /^(?:DEFAULT\s+)/, /^(?:\w+\s+)/, /^(?:[^\n]*)/, /^(?:class\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:style\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:end\b\s*)/, /^(?:\(\(\()/, /^(?:\)\)\))/, /^(?:[\)]\))/, /^(?:\}\})/, /^(?:\})/, /^(?:\(-)/, /^(?:-\))/, /^(?:\(\()/, /^(?:\]\])/, /^(?:\()/, /^(?:\]\))/, /^(?:\\\])/, /^(?:\/\])/, /^(?:\)\])/, /^(?:[\)])/, /^(?:\]>)/, /^(?:[\]])/, /^(?:-\))/, /^(?:\(-)/, /^(?:\)\))/, /^(?:\))/, /^(?:\(\(\()/, /^(?:\(\()/, /^(?:\{\{)/, /^(?:\{)/, /^(?:>)/, /^(?:\(\[)/, /^(?:\()/, /^(?:\[\[)/, /^(?:\[\|)/, /^(?:\[\()/, /^(?:\)\)\))/, /^(?:\[\\)/, /^(?:\[\/)/, /^(?:\[\\)/, /^(?:\[)/, /^(?:<\[)/, /^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/, /^(?:$)/, /^(?:["][`])/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]+)/, /^(?:["])/, /^(?:\]>\s*\()/, /^(?:,?\s*right\s*)/, /^(?:,?\s*left\s*)/, /^(?:,?\s*x\s*)/, /^(?:,?\s*y\s*)/, /^(?:,?\s*up\s*)/, /^(?:,?\s*down\s*)/, /^(?:\)\s*)/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?:\s*~~[\~]+\s*)/, /^(?:\s*[xo<]?--\s*)/, /^(?:\s*[xo<]?==\s*)/, /^(?:\s*[xo<]?-\.\s*)/, /^(?:["][`])/, /^(?:["])/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?::\d+)/],
      conditions: {
        "STYLE_DEFINITION": {
          "rules": [29],
          "inclusive": false
        },
        "STYLE_STMNT": {
          "rules": [28],
          "inclusive": false
        },
        "CLASSDEFID": {
          "rules": [23],
          "inclusive": false
        },
        "CLASSDEF": {
          "rules": [21, 22],
          "inclusive": false
        },
        "CLASS_STYLE": {
          "rules": [26],
          "inclusive": false
        },
        "CLASS": {
          "rules": [25],
          "inclusive": false
        },
        "LLABEL": {
          "rules": [100, 101, 102, 103, 104],
          "inclusive": false
        },
        "ARROW_DIR": {
          "rules": [86, 87, 88, 89, 90, 91, 92],
          "inclusive": false
        },
        "BLOCK_ARROW": {
          "rules": [77, 82, 85],
          "inclusive": false
        },
        "NODE": {
          "rules": [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 78, 81],
          "inclusive": false
        },
        "md_string": {
          "rules": [10, 11, 79, 80],
          "inclusive": false
        },
        "space": {
          "rules": [],
          "inclusive": false
        },
        "string": {
          "rules": [13, 14, 83, 84],
          "inclusive": false
        },
        "acc_descr_multiline": {
          "rules": [35, 36],
          "inclusive": false
        },
        "acc_descr": {
          "rules": [33],
          "inclusive": false
        },
        "acc_title": {
          "rules": [31],
          "inclusive": false
        },
        "INITIAL": {
          "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 17, 18, 19, 20, 24, 27, 30, 32, 34, 37, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 93, 94, 95, 96, 97, 98, 99, 105],
          "inclusive": true
        }
      }
    };
    return lexer2;
  }();
  parser2.lexer = lexer;
  function Parser() {
    this.yy = {};
  }
  (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(Parser, "Parser");
  Parser.prototype = parser2;
  parser2.Parser = Parser;
  return new Parser();
}();
parser.parser = parser;
var block_default = parser;

// src/diagrams/block/blockDB.ts

var blockDatabase = /* @__PURE__ */new Map();
var edgeList = [];
var edgeCount = /* @__PURE__ */new Map();
var COLOR_KEYWORD = "color";
var FILL_KEYWORD = "fill";
var BG_FILL = "bgFill";
var STYLECLASS_SEP = ",";
var config = (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)();
var classes = /* @__PURE__ */new Map();
var sanitizeText2 = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(txt => _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.common_default.sanitizeText(txt, config), "sanitizeText");
var addStyleClass = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function (id, styleAttributes = "") {
  let foundClass = classes.get(id);
  if (!foundClass) {
    foundClass = {
      id,
      styles: [],
      textStyles: []
    };
    classes.set(id, foundClass);
  }
  if (styleAttributes !== void 0 && styleAttributes !== null) {
    styleAttributes.split(STYLECLASS_SEP).forEach(attrib => {
      const fixedAttrib = attrib.replace(/([^;]*);/, "$1").trim();
      if (RegExp(COLOR_KEYWORD).exec(attrib)) {
        const newStyle1 = fixedAttrib.replace(FILL_KEYWORD, BG_FILL);
        const newStyle2 = newStyle1.replace(COLOR_KEYWORD, FILL_KEYWORD);
        foundClass.textStyles.push(newStyle2);
      }
      foundClass.styles.push(fixedAttrib);
    });
  }
}, "addStyleClass");
var addStyle2Node = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function (id, styles = "") {
  const foundBlock = blockDatabase.get(id);
  if (styles !== void 0 && styles !== null) {
    foundBlock.styles = styles.split(STYLECLASS_SEP);
  }
}, "addStyle2Node");
var setCssClass = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function (itemIds, cssClassName) {
  itemIds.split(",").forEach(function (id) {
    let foundBlock = blockDatabase.get(id);
    if (foundBlock === void 0) {
      const trimmedId = id.trim();
      foundBlock = {
        id: trimmedId,
        type: "na",
        children: []
      };
      blockDatabase.set(trimmedId, foundBlock);
    }
    if (!foundBlock.classes) {
      foundBlock.classes = [];
    }
    foundBlock.classes.push(cssClassName);
  });
}, "setCssClass");
var populateBlockDatabase = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((_blockList, parent) => {
  const blockList = _blockList.flat();
  const children = [];
  for (const block of blockList) {
    if (block.label) {
      block.label = sanitizeText2(block.label);
    }
    if (block.type === "classDef") {
      addStyleClass(block.id, block.css);
      continue;
    }
    if (block.type === "applyClass") {
      setCssClass(block.id, block?.styleClass ?? "");
      continue;
    }
    if (block.type === "applyStyles") {
      if (block?.stylesStr) {
        addStyle2Node(block.id, block?.stylesStr);
      }
      continue;
    }
    if (block.type === "column-setting") {
      parent.columns = block.columns ?? -1;
    } else if (block.type === "edge") {
      const count = (edgeCount.get(block.id) ?? 0) + 1;
      edgeCount.set(block.id, count);
      block.id = count + "-" + block.id;
      edgeList.push(block);
    } else {
      if (!block.label) {
        if (block.type === "composite") {
          block.label = "";
        } else {
          block.label = block.id;
        }
      }
      const existingBlock = blockDatabase.get(block.id);
      if (existingBlock === void 0) {
        blockDatabase.set(block.id, block);
      } else {
        if (block.type !== "na") {
          existingBlock.type = block.type;
        }
        if (block.label !== block.id) {
          existingBlock.label = block.label;
        }
      }
      if (block.children) {
        populateBlockDatabase(block.children, block);
      }
      if (block.type === "space") {
        const w = block.width ?? 1;
        for (let j = 0; j < w; j++) {
          const newBlock = (0,lodash_es_clone_js__WEBPACK_IMPORTED_MODULE_6__["default"])(block);
          newBlock.id = newBlock.id + "-" + j;
          blockDatabase.set(newBlock.id, newBlock);
          children.push(newBlock);
        }
      } else if (existingBlock === void 0) {
        children.push(block);
      }
    }
  }
  parent.children = children;
}, "populateBlockDatabase");
var blocks = [];
var rootBlock = {
  id: "root",
  type: "composite",
  children: [],
  columns: -1
};
var clear2 = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(() => {
  _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("Clear called");
  (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.clear)();
  rootBlock = {
    id: "root",
    type: "composite",
    children: [],
    columns: -1
  };
  blockDatabase = /* @__PURE__ */new Map([["root", rootBlock]]);
  blocks = [];
  classes = /* @__PURE__ */new Map();
  edgeList = [];
  edgeCount = /* @__PURE__ */new Map();
}, "clear");
function typeStr2Type(typeStr) {
  _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("typeStr2Type", typeStr);
  switch (typeStr) {
    case "[]":
      return "square";
    case "()":
      _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("we have a round");
      return "round";
    case "(())":
      return "circle";
    case ">]":
      return "rect_left_inv_arrow";
    case "{}":
      return "diamond";
    case "{{}}":
      return "hexagon";
    case "([])":
      return "stadium";
    case "[[]]":
      return "subroutine";
    case "[()]":
      return "cylinder";
    case "((()))":
      return "doublecircle";
    case "[//]":
      return "lean_right";
    case "[\\\\]":
      return "lean_left";
    case "[/\\]":
      return "trapezoid";
    case "[\\/]":
      return "inv_trapezoid";
    case "<[]>":
      return "block_arrow";
    default:
      return "na";
  }
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(typeStr2Type, "typeStr2Type");
function edgeTypeStr2Type(typeStr) {
  _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("typeStr2Type", typeStr);
  switch (typeStr) {
    case "==":
      return "thick";
    default:
      return "normal";
  }
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(edgeTypeStr2Type, "edgeTypeStr2Type");
function edgeStrToEdgeData(typeStr) {
  switch (typeStr.trim()) {
    case "--x":
      return "arrow_cross";
    case "--o":
      return "arrow_circle";
    default:
      return "arrow_point";
  }
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(edgeStrToEdgeData, "edgeStrToEdgeData");
var cnt = 0;
var generateId = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(() => {
  cnt++;
  return "id-" + Math.random().toString(36).substr(2, 12) + "-" + cnt;
}, "generateId");
var setHierarchy = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(block => {
  rootBlock.children = block;
  populateBlockDatabase(block, rootBlock);
  blocks = rootBlock.children;
}, "setHierarchy");
var getColumns = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(blockId => {
  const block = blockDatabase.get(blockId);
  if (!block) {
    return -1;
  }
  if (block.columns) {
    return block.columns;
  }
  if (!block.children) {
    return -1;
  }
  return block.children.length;
}, "getColumns");
var getBlocksFlat = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(() => {
  return [...blockDatabase.values()];
}, "getBlocksFlat");
var getBlocks = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(() => {
  return blocks || [];
}, "getBlocks");
var getEdges = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(() => {
  return edgeList;
}, "getEdges");
var getBlock = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(id => {
  return blockDatabase.get(id);
}, "getBlock");
var setBlock = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(block => {
  blockDatabase.set(block.id, block);
}, "setBlock");
var getLogger = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(() => console, "getLogger");
var getClasses = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function () {
  return classes;
}, "getClasses");
var db = {
  getConfig: /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(() => (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig)().block, "getConfig"),
  typeStr2Type,
  edgeTypeStr2Type,
  edgeStrToEdgeData,
  getLogger,
  getBlocksFlat,
  getBlocks,
  getEdges,
  setHierarchy,
  getBlock,
  setBlock,
  getColumns,
  getClasses,
  clear: clear2,
  generateId
};
var blockDB_default = db;

// src/diagrams/block/styles.ts

var fade = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((color, opacity) => {
  const channel2 = khroma__WEBPACK_IMPORTED_MODULE_7__["default"];
  const r = channel2(color, "r");
  const g = channel2(color, "g");
  const b = channel2(color, "b");
  return khroma__WEBPACK_IMPORTED_MODULE_8__["default"](r, g, b, opacity);
}, "fade");
var getStyles = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(options => `.label {
    font-family: ${options.fontFamily};
    color: ${options.nodeTextColor || options.textColor};
  }
  .cluster-label text {
    fill: ${options.titleColor};
  }
  .cluster-label span,p {
    color: ${options.titleColor};
  }



  .label text,span,p {
    fill: ${options.nodeTextColor || options.textColor};
    color: ${options.nodeTextColor || options.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${options.mainBkg};
    stroke: ${options.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${options.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${options.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${options.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${options.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${options.edgeLabelBackground};
      fill: ${options.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${fade(options.edgeLabelBackground, 0.5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${fade(options.mainBkg, 0.5)};
    fill: ${fade(options.clusterBkg, 0.5)};
    stroke: ${fade(options.clusterBorder, 0.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${options.titleColor};
  }

  .cluster span,p {
    color: ${options.titleColor};
  }
  /* .cluster div {
    color: ${options.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${options.fontFamily};
    font-size: 12px;
    background: ${options.tertiaryColor};
    border: 1px solid ${options.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${options.textColor};
  }
`, "getStyles");
var styles_default = getStyles;

// src/diagrams/block/blockRenderer.ts


// src/dagre-wrapper/markers.js
var insertMarkers = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((elem, markerArray, type, id) => {
  markerArray.forEach(markerName => {
    markers[markerName](elem, type, id);
  });
}, "insertMarkers");
var extension = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((elem, type, id) => {
  _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.trace("Making markers for ", id);
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-extensionStart").attr("class", "marker extension " + type).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z");
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-extensionEnd").attr("class", "marker extension " + type).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
}, "extension");
var composition = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((elem, type, id) => {
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-compositionStart").attr("class", "marker composition " + type).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-compositionEnd").attr("class", "marker composition " + type).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition");
var aggregation = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((elem, type, id) => {
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-aggregationStart").attr("class", "marker aggregation " + type).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-aggregationEnd").attr("class", "marker aggregation " + type).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation");
var dependency = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((elem, type, id) => {
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-dependencyStart").attr("class", "marker dependency " + type).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-dependencyEnd").attr("class", "marker dependency " + type).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency");
var lollipop = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((elem, type, id) => {
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-lollipopStart").attr("class", "marker lollipop " + type).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-lollipopEnd").attr("class", "marker lollipop " + type).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
}, "lollipop");
var point = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((elem, type, id) => {
  elem.append("marker").attr("id", id + "_" + type + "-pointEnd").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", 6).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  elem.append("marker").attr("id", id + "_" + type + "-pointStart").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "point");
var circle = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((elem, type, id) => {
  elem.append("marker").attr("id", id + "_" + type + "-circleEnd").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  elem.append("marker").attr("id", id + "_" + type + "-circleStart").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "circle");
var cross = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((elem, type, id) => {
  elem.append("marker").attr("id", id + "_" + type + "-crossEnd").attr("class", "marker cross " + type).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
  elem.append("marker").attr("id", id + "_" + type + "-crossStart").attr("class", "marker cross " + type).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
}, "cross");
var barb = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((elem, type, id) => {
  elem.append("defs").append("marker").attr("id", id + "_" + type + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb");
var markers = {
  extension,
  composition,
  aggregation,
  dependency,
  lollipop,
  point,
  circle,
  cross,
  barb
};
var markers_default = insertMarkers;

// src/diagrams/block/layout.ts
var padding = (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)()?.block?.padding ?? 8;
function calculateBlockPosition(columns, position) {
  if (columns === 0 || !Number.isInteger(columns)) {
    throw new Error("Columns must be an integer !== 0.");
  }
  if (position < 0 || !Number.isInteger(position)) {
    throw new Error("Position must be a non-negative integer." + position);
  }
  if (columns < 0) {
    return {
      px: position,
      py: 0
    };
  }
  if (columns === 1) {
    return {
      px: 0,
      py: position
    };
  }
  const px = position % columns;
  const py = Math.floor(position / columns);
  return {
    px,
    py
  };
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(calculateBlockPosition, "calculateBlockPosition");
var getMaxChildSize = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(block => {
  let maxWidth = 0;
  let maxHeight = 0;
  for (const child of block.children) {
    const {
      width,
      height,
      x,
      y
    } = child.size ?? {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    };
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("getMaxChildSize abc95 child:", child.id, "width:", width, "height:", height, "x:", x, "y:", y, child.type);
    if (child.type === "space") {
      continue;
    }
    if (width > maxWidth) {
      maxWidth = width / (block.widthInColumns ?? 1);
    }
    if (height > maxHeight) {
      maxHeight = height;
    }
  }
  return {
    width: maxWidth,
    height: maxHeight
  };
}, "getMaxChildSize");
function setBlockSizes(block, db2, siblingWidth = 0, siblingHeight = 0) {
  _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("setBlockSizes abc95 (start)", block.id, block?.size?.x, "block width =", block?.size, "sieblingWidth", siblingWidth);
  if (!block?.size?.width) {
    block.size = {
      width: siblingWidth,
      height: siblingHeight,
      x: 0,
      y: 0
    };
  }
  let maxWidth = 0;
  let maxHeight = 0;
  if (block.children?.length > 0) {
    for (const child of block.children) {
      setBlockSizes(child, db2);
    }
    const childSize = getMaxChildSize(block);
    maxWidth = childSize.width;
    maxHeight = childSize.height;
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("setBlockSizes abc95 maxWidth of", block.id, ":s children is ", maxWidth, maxHeight);
    for (const child of block.children) {
      if (child.size) {
        _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug(`abc95 Setting size of children of ${block.id} id=${child.id} ${maxWidth} ${maxHeight} ${JSON.stringify(child.size)}`);
        child.size.width = maxWidth * (child.widthInColumns ?? 1) + padding * ((child.widthInColumns ?? 1) - 1);
        child.size.height = maxHeight;
        child.size.x = 0;
        child.size.y = 0;
        _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug(`abc95 updating size of ${block.id} children child:${child.id} maxWidth:${maxWidth} maxHeight:${maxHeight}`);
      }
    }
    for (const child of block.children) {
      setBlockSizes(child, db2, maxWidth, maxHeight);
    }
    const columns = block.columns ?? -1;
    let numItems = 0;
    for (const child of block.children) {
      numItems += child.widthInColumns ?? 1;
    }
    let xSize = block.children.length;
    if (columns > 0 && columns < numItems) {
      xSize = columns;
    }
    const ySize = Math.ceil(numItems / xSize);
    let width = xSize * (maxWidth + padding) + padding;
    let height = ySize * (maxHeight + padding) + padding;
    if (width < siblingWidth) {
      _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug(`Detected to small siebling: abc95 ${block.id} sieblingWidth ${siblingWidth} sieblingHeight ${siblingHeight} width ${width}`);
      width = siblingWidth;
      height = siblingHeight;
      const childWidth = (siblingWidth - xSize * padding - padding) / xSize;
      const childHeight = (siblingHeight - ySize * padding - padding) / ySize;
      _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("Size indata abc88", block.id, "childWidth", childWidth, "maxWidth", maxWidth);
      _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("Size indata abc88", block.id, "childHeight", childHeight, "maxHeight", maxHeight);
      _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("Size indata abc88 xSize", xSize, "padding", padding);
      for (const child of block.children) {
        if (child.size) {
          child.size.width = childWidth;
          child.size.height = childHeight;
          child.size.x = 0;
          child.size.y = 0;
        }
      }
    }
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug(`abc95 (finale calc) ${block.id} xSize ${xSize} ySize ${ySize} columns ${columns}${block.children.length} width=${Math.max(width, block.size?.width || 0)}`);
    if (width < (block?.size?.width || 0)) {
      width = block?.size?.width || 0;
      const num = columns > 0 ? Math.min(block.children.length, columns) : block.children.length;
      if (num > 0) {
        const childWidth = (width - num * padding - padding) / num;
        _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("abc95 (growing to fit) width", block.id, width, block.size?.width, childWidth);
        for (const child of block.children) {
          if (child.size) {
            child.size.width = childWidth;
          }
        }
      }
    }
    block.size = {
      width,
      height,
      x: 0,
      y: 0
    };
  }
  _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("setBlockSizes abc94 (done)", block.id, block?.size?.x, block?.size?.width, block?.size?.y, block?.size?.height);
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(setBlockSizes, "setBlockSizes");
function layoutBlocks(block, db2) {
  _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug(`abc85 layout blocks (=>layoutBlocks) ${block.id} x: ${block?.size?.x} y: ${block?.size?.y} width: ${block?.size?.width}`);
  const columns = block.columns ?? -1;
  _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("layoutBlocks columns abc95", block.id, "=>", columns, block);
  if (block.children &&
  // find max width of children
  block.children.length > 0) {
    const width = block?.children[0]?.size?.width ?? 0;
    const widthOfChildren = block.children.length * width + (block.children.length - 1) * padding;
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("widthOfChildren 88", widthOfChildren, "posX");
    let columnPos = 0;
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("abc91 block?.size?.x", block.id, block?.size?.x);
    let startingPosX = block?.size?.x ? block?.size?.x + (-block?.size?.width / 2 || 0) : -padding;
    let rowPos = 0;
    for (const child of block.children) {
      const parent = block;
      if (!child.size) {
        continue;
      }
      const {
        width: width2,
        height
      } = child.size;
      const {
        px,
        py
      } = calculateBlockPosition(columns, columnPos);
      if (py != rowPos) {
        rowPos = py;
        startingPosX = block?.size?.x ? block?.size?.x + (-block?.size?.width / 2 || 0) : -padding;
        _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("New row in layout for block", block.id, " and child ", child.id, rowPos);
      }
      _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug(`abc89 layout blocks (child) id: ${child.id} Pos: ${columnPos} (px, py) ${px},${py} (${parent?.size?.x},${parent?.size?.y}) parent: ${parent.id} width: ${width2}${padding}`);
      if (parent.size) {
        const halfWidth = width2 / 2;
        child.size.x = startingPosX + padding + halfWidth;
        _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug(`abc91 layout blocks (calc) px, pyid:${child.id} startingPos=X${startingPosX} new startingPosX${child.size.x} ${halfWidth} padding=${padding} width=${width2} halfWidth=${halfWidth} => x:${child.size.x} y:${child.size.y} ${child.widthInColumns} (width * (child?.w || 1)) / 2 ${width2 * (child?.widthInColumns ?? 1) / 2}`);
        startingPosX = child.size.x + halfWidth;
        child.size.y = parent.size.y - parent.size.height / 2 + py * (height + padding) + height / 2 + padding;
        _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug(`abc88 layout blocks (calc) px, pyid:${child.id}startingPosX${startingPosX}${padding}${halfWidth}=>x:${child.size.x}y:${child.size.y}${child.widthInColumns}(width * (child?.w || 1)) / 2${width2 * (child?.widthInColumns ?? 1) / 2}`);
      }
      if (child.children) {
        layoutBlocks(child, db2);
      }
      columnPos += child?.widthInColumns ?? 1;
      _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("abc88 columnsPos", child, columnPos);
    }
  }
  _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug(`layout blocks (<==layoutBlocks) ${block.id} x: ${block?.size?.x} y: ${block?.size?.y} width: ${block?.size?.width}`);
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(layoutBlocks, "layoutBlocks");
function findBounds(block, {
  minX,
  minY,
  maxX,
  maxY
} = {
  minX: 0,
  minY: 0,
  maxX: 0,
  maxY: 0
}) {
  if (block.size && block.id !== "root") {
    const {
      x,
      y,
      width,
      height
    } = block.size;
    if (x - width / 2 < minX) {
      minX = x - width / 2;
    }
    if (y - height / 2 < minY) {
      minY = y - height / 2;
    }
    if (x + width / 2 > maxX) {
      maxX = x + width / 2;
    }
    if (y + height / 2 > maxY) {
      maxY = y + height / 2;
    }
  }
  if (block.children) {
    for (const child of block.children) {
      ({
        minX,
        minY,
        maxX,
        maxY
      } = findBounds(child, {
        minX,
        minY,
        maxX,
        maxY
      }));
    }
  }
  return {
    minX,
    minY,
    maxX,
    maxY
  };
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(findBounds, "findBounds");
function layout(db2) {
  const root = db2.getBlock("root");
  if (!root) {
    return;
  }
  setBlockSizes(root, db2, 0, 0);
  layoutBlocks(root, db2);
  _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("getBlocks", JSON.stringify(root, null, 2));
  const {
    minX,
    minY,
    maxX,
    maxY
  } = findBounds(root);
  const height = maxY - minY;
  const width = maxX - minX;
  return {
    x: minX,
    y: minY,
    width,
    height
  };
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(layout, "layout");

// src/diagrams/block/renderHelpers.ts


// src/dagre-wrapper/createLabel.js

function applyStyle(dom, styleFn) {
  if (styleFn) {
    dom.attr("style", styleFn);
  }
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(applyStyle, "applyStyle");
function addHtmlLabel(node) {
  const fo = (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"));
  const div = fo.append("xhtml:div");
  const label = node.label;
  const labelClass = node.isNode ? "nodeLabel" : "edgeLabel";
  const span = div.append("span");
  span.html(label);
  applyStyle(span, node.labelStyle);
  span.attr("class", labelClass);
  applyStyle(div, node.labelStyle);
  div.style("display", "inline-block");
  div.style("white-space", "nowrap");
  div.attr("xmlns", "http://www.w3.org/1999/xhtml");
  return fo.node();
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(addHtmlLabel, "addHtmlLabel");
var createLabel = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((_vertexText, style, isTitle, isNode) => {
  let vertexText = _vertexText || "";
  if (typeof vertexText === "object") {
    vertexText = vertexText[0];
  }
  if ((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.evaluate)((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)().flowchart.htmlLabels)) {
    vertexText = vertexText.replace(/\\n|\n/g, "<br />");
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("vertexText" + vertexText);
    const node = {
      isNode,
      label: (0,_chunk_C3MQ5ANM_mjs__WEBPACK_IMPORTED_MODULE_3__.replaceIconSubstring)((0,_chunk_O4NI6UNU_mjs__WEBPACK_IMPORTED_MODULE_4__.decodeEntities)(vertexText)),
      labelStyle: style.replace("fill:", "color:")
    };
    let vertexNode = addHtmlLabel(node);
    return vertexNode;
  } else {
    const svgLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    svgLabel.setAttribute("style", style.replace("color:", "fill:"));
    let rows = [];
    if (typeof vertexText === "string") {
      rows = vertexText.split(/\\n|\n|<br\s*\/?>/gi);
    } else if (Array.isArray(vertexText)) {
      rows = vertexText;
    } else {
      rows = [];
    }
    for (const row of rows) {
      const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
      tspan.setAttribute("dy", "1em");
      tspan.setAttribute("x", "0");
      if (isTitle) {
        tspan.setAttribute("class", "title-row");
      } else {
        tspan.setAttribute("class", "row");
      }
      tspan.textContent = row.trim();
      svgLabel.appendChild(tspan);
    }
    return svgLabel;
  }
}, "createLabel");
var createLabel_default = createLabel;

// src/dagre-wrapper/edges.js


// src/dagre-wrapper/edgeMarker.ts
var addEdgeMarkers = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((svgPath, edge, url, id, diagramType) => {
  if (edge.arrowTypeStart) {
    addEdgeMarker(svgPath, "start", edge.arrowTypeStart, url, id, diagramType);
  }
  if (edge.arrowTypeEnd) {
    addEdgeMarker(svgPath, "end", edge.arrowTypeEnd, url, id, diagramType);
  }
}, "addEdgeMarkers");
var arrowTypesMap = {
  arrow_cross: "cross",
  arrow_point: "point",
  arrow_barb: "barb",
  arrow_circle: "circle",
  aggregation: "aggregation",
  extension: "extension",
  composition: "composition",
  dependency: "dependency",
  lollipop: "lollipop"
};
var addEdgeMarker = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((svgPath, position, arrowType, url, id, diagramType) => {
  const endMarkerType = arrowTypesMap[arrowType];
  if (!endMarkerType) {
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.warn(`Unknown arrow type: ${arrowType}`);
    return;
  }
  const suffix = position === "start" ? "Start" : "End";
  svgPath.attr(`marker-${position}`, `url(${url}#${id}_${diagramType}-${endMarkerType}${suffix})`);
}, "addEdgeMarker");

// src/dagre-wrapper/edges.js
var edgeLabels = {};
var terminalLabels = {};
var insertEdgeLabel = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((elem, edge) => {
  const config2 = (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)();
  const useHtmlLabels = (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.evaluate)(config2.flowchart.htmlLabels);
  const labelElement = edge.labelType === "markdown" ? (0,_chunk_C3MQ5ANM_mjs__WEBPACK_IMPORTED_MODULE_3__.createText)(elem, edge.label, {
    style: edge.labelStyle,
    useHtmlLabels,
    addSvgBackground: true
  }, config2) : createLabel_default(edge.label, edge.labelStyle);
  const edgeLabel = elem.insert("g").attr("class", "edgeLabel");
  const label = edgeLabel.insert("g").attr("class", "label");
  label.node().appendChild(labelElement);
  let bbox = labelElement.getBBox();
  if (useHtmlLabels) {
    const div = labelElement.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)(labelElement);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  label.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
  edgeLabels[edge.id] = edgeLabel;
  edge.width = bbox.width;
  edge.height = bbox.height;
  let fo;
  if (edge.startLabelLeft) {
    const startLabelElement = createLabel_default(edge.startLabelLeft, edge.labelStyle);
    const startEdgeLabelLeft = elem.insert("g").attr("class", "edgeTerminals");
    const inner = startEdgeLabelLeft.insert("g").attr("class", "inner");
    fo = inner.node().appendChild(startLabelElement);
    const slBox = startLabelElement.getBBox();
    inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
    if (!terminalLabels[edge.id]) {
      terminalLabels[edge.id] = {};
    }
    terminalLabels[edge.id].startLeft = startEdgeLabelLeft;
    setTerminalWidth(fo, edge.startLabelLeft);
  }
  if (edge.startLabelRight) {
    const startLabelElement = createLabel_default(edge.startLabelRight, edge.labelStyle);
    const startEdgeLabelRight = elem.insert("g").attr("class", "edgeTerminals");
    const inner = startEdgeLabelRight.insert("g").attr("class", "inner");
    fo = startEdgeLabelRight.node().appendChild(startLabelElement);
    inner.node().appendChild(startLabelElement);
    const slBox = startLabelElement.getBBox();
    inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
    if (!terminalLabels[edge.id]) {
      terminalLabels[edge.id] = {};
    }
    terminalLabels[edge.id].startRight = startEdgeLabelRight;
    setTerminalWidth(fo, edge.startLabelRight);
  }
  if (edge.endLabelLeft) {
    const endLabelElement = createLabel_default(edge.endLabelLeft, edge.labelStyle);
    const endEdgeLabelLeft = elem.insert("g").attr("class", "edgeTerminals");
    const inner = endEdgeLabelLeft.insert("g").attr("class", "inner");
    fo = inner.node().appendChild(endLabelElement);
    const slBox = endLabelElement.getBBox();
    inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
    endEdgeLabelLeft.node().appendChild(endLabelElement);
    if (!terminalLabels[edge.id]) {
      terminalLabels[edge.id] = {};
    }
    terminalLabels[edge.id].endLeft = endEdgeLabelLeft;
    setTerminalWidth(fo, edge.endLabelLeft);
  }
  if (edge.endLabelRight) {
    const endLabelElement = createLabel_default(edge.endLabelRight, edge.labelStyle);
    const endEdgeLabelRight = elem.insert("g").attr("class", "edgeTerminals");
    const inner = endEdgeLabelRight.insert("g").attr("class", "inner");
    fo = inner.node().appendChild(endLabelElement);
    const slBox = endLabelElement.getBBox();
    inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
    endEdgeLabelRight.node().appendChild(endLabelElement);
    if (!terminalLabels[edge.id]) {
      terminalLabels[edge.id] = {};
    }
    terminalLabels[edge.id].endRight = endEdgeLabelRight;
    setTerminalWidth(fo, edge.endLabelRight);
  }
  return labelElement;
}, "insertEdgeLabel");
function setTerminalWidth(fo, value) {
  if ((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)().flowchart.htmlLabels && fo) {
    fo.style.width = value.length * 9 + "px";
    fo.style.height = "12px";
  }
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(setTerminalWidth, "setTerminalWidth");
var positionEdgeLabel = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((edge, paths) => {
  _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("Moving label abc88 ", edge.id, edge.label, edgeLabels[edge.id], paths);
  let path = paths.updatedPath ? paths.updatedPath : paths.originalPath;
  const siteConfig = (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)();
  const {
    subGraphTitleTotalMargin
  } = (0,_chunk_K557N5IZ_mjs__WEBPACK_IMPORTED_MODULE_2__.getSubGraphTitleMargins)(siteConfig);
  if (edge.label) {
    const el = edgeLabels[edge.id];
    let x = edge.x;
    let y = edge.y;
    if (path) {
      const pos = _chunk_O4NI6UNU_mjs__WEBPACK_IMPORTED_MODULE_4__.utils_default.calcLabelPosition(path);
      _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("Moving label " + edge.label + " from (", x, ",", y, ") to (", pos.x, ",", pos.y, ") abc88");
      if (paths.updatedPath) {
        x = pos.x;
        y = pos.y;
      }
    }
    el.attr("transform", `translate(${x}, ${y + subGraphTitleTotalMargin / 2})`);
  }
  if (edge.startLabelLeft) {
    const el = terminalLabels[edge.id].startLeft;
    let x = edge.x;
    let y = edge.y;
    if (path) {
      const pos = _chunk_O4NI6UNU_mjs__WEBPACK_IMPORTED_MODULE_4__.utils_default.calcTerminalLabelPosition(edge.arrowTypeStart ? 10 : 0, "start_left", path);
      x = pos.x;
      y = pos.y;
    }
    el.attr("transform", `translate(${x}, ${y})`);
  }
  if (edge.startLabelRight) {
    const el = terminalLabels[edge.id].startRight;
    let x = edge.x;
    let y = edge.y;
    if (path) {
      const pos = _chunk_O4NI6UNU_mjs__WEBPACK_IMPORTED_MODULE_4__.utils_default.calcTerminalLabelPosition(edge.arrowTypeStart ? 10 : 0, "start_right", path);
      x = pos.x;
      y = pos.y;
    }
    el.attr("transform", `translate(${x}, ${y})`);
  }
  if (edge.endLabelLeft) {
    const el = terminalLabels[edge.id].endLeft;
    let x = edge.x;
    let y = edge.y;
    if (path) {
      const pos = _chunk_O4NI6UNU_mjs__WEBPACK_IMPORTED_MODULE_4__.utils_default.calcTerminalLabelPosition(edge.arrowTypeEnd ? 10 : 0, "end_left", path);
      x = pos.x;
      y = pos.y;
    }
    el.attr("transform", `translate(${x}, ${y})`);
  }
  if (edge.endLabelRight) {
    const el = terminalLabels[edge.id].endRight;
    let x = edge.x;
    let y = edge.y;
    if (path) {
      const pos = _chunk_O4NI6UNU_mjs__WEBPACK_IMPORTED_MODULE_4__.utils_default.calcTerminalLabelPosition(edge.arrowTypeEnd ? 10 : 0, "end_right", path);
      x = pos.x;
      y = pos.y;
    }
    el.attr("transform", `translate(${x}, ${y})`);
  }
}, "positionEdgeLabel");
var outsideNode = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((node, point2) => {
  const x = node.x;
  const y = node.y;
  const dx = Math.abs(point2.x - x);
  const dy = Math.abs(point2.y - y);
  const w = node.width / 2;
  const h = node.height / 2;
  if (dx >= w || dy >= h) {
    return true;
  }
  return false;
}, "outsideNode");
var intersection = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((node, outsidePoint, insidePoint) => {
  _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(outsidePoint)}
  insidePoint : ${JSON.stringify(insidePoint)}
  node        : x:${node.x} y:${node.y} w:${node.width} h:${node.height}`);
  const x = node.x;
  const y = node.y;
  const dx = Math.abs(x - insidePoint.x);
  const w = node.width / 2;
  let r = insidePoint.x < outsidePoint.x ? w - dx : w + dx;
  const h = node.height / 2;
  const Q = Math.abs(outsidePoint.y - insidePoint.y);
  const R = Math.abs(outsidePoint.x - insidePoint.x);
  if (Math.abs(y - outsidePoint.y) * w > Math.abs(x - outsidePoint.x) * h) {
    let q = insidePoint.y < outsidePoint.y ? outsidePoint.y - h - y : y - h - outsidePoint.y;
    r = R * q / Q;
    const res = {
      x: insidePoint.x < outsidePoint.x ? insidePoint.x + r : insidePoint.x - R + r,
      y: insidePoint.y < outsidePoint.y ? insidePoint.y + Q - q : insidePoint.y - Q + q
    };
    if (r === 0) {
      res.x = outsidePoint.x;
      res.y = outsidePoint.y;
    }
    if (R === 0) {
      res.x = outsidePoint.x;
    }
    if (Q === 0) {
      res.y = outsidePoint.y;
    }
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug(`abc89 topp/bott calc, Q ${Q}, q ${q}, R ${R}, r ${r}`, res);
    return res;
  } else {
    if (insidePoint.x < outsidePoint.x) {
      r = outsidePoint.x - w - x;
    } else {
      r = x - w - outsidePoint.x;
    }
    let q = Q * r / R;
    let _x = insidePoint.x < outsidePoint.x ? insidePoint.x + R - r : insidePoint.x - R + r;
    let _y = insidePoint.y < outsidePoint.y ? insidePoint.y + q : insidePoint.y - q;
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug(`sides calc abc89, Q ${Q}, q ${q}, R ${R}, r ${r}`, {
      _x,
      _y
    });
    if (r === 0) {
      _x = outsidePoint.x;
      _y = outsidePoint.y;
    }
    if (R === 0) {
      _x = outsidePoint.x;
    }
    if (Q === 0) {
      _y = outsidePoint.y;
    }
    return {
      x: _x,
      y: _y
    };
  }
}, "intersection");
var cutPathAtIntersect = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((_points, boundaryNode) => {
  _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("abc88 cutPathAtIntersect", _points, boundaryNode);
  let points = [];
  let lastPointOutside = _points[0];
  let isInside = false;
  _points.forEach(point2 => {
    if (!outsideNode(boundaryNode, point2) && !isInside) {
      const inter = intersection(boundaryNode, lastPointOutside, point2);
      let pointPresent = false;
      points.forEach(p => {
        pointPresent = pointPresent || p.x === inter.x && p.y === inter.y;
      });
      if (!points.some(e => e.x === inter.x && e.y === inter.y)) {
        points.push(inter);
      }
      isInside = true;
    } else {
      lastPointOutside = point2;
      if (!isInside) {
        points.push(point2);
      }
    }
  });
  return points;
}, "cutPathAtIntersect");
var insertEdge = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function (elem, e, edge, clusterDb, diagramType, graph, id) {
  let points = edge.points;
  _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("abc88 InsertEdge: edge=", edge, "e=", e);
  let pointsHasChanged = false;
  const tail = graph.node(e.v);
  var head = graph.node(e.w);
  if (head?.intersect && tail?.intersect) {
    points = points.slice(1, edge.points.length - 1);
    points.unshift(tail.intersect(points[0]));
    points.push(head.intersect(points[points.length - 1]));
  }
  if (edge.toCluster) {
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("to cluster abc88", clusterDb[edge.toCluster]);
    points = cutPathAtIntersect(edge.points, clusterDb[edge.toCluster].node);
    pointsHasChanged = true;
  }
  if (edge.fromCluster) {
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("from cluster abc88", clusterDb[edge.fromCluster]);
    points = cutPathAtIntersect(points.reverse(), clusterDb[edge.fromCluster].node).reverse();
    pointsHasChanged = true;
  }
  const lineData = points.filter(p => !Number.isNaN(p.y));
  let curve = d3__WEBPACK_IMPORTED_MODULE_9__.curveBasis;
  if (edge.curve && (diagramType === "graph" || diagramType === "flowchart")) {
    curve = edge.curve;
  }
  const {
    x,
    y
  } = (0,_chunk_VV3M67IP_mjs__WEBPACK_IMPORTED_MODULE_1__.getLineFunctionsWithOffset)(edge);
  const lineFunction = (0,d3__WEBPACK_IMPORTED_MODULE_9__.line)().x(x).y(y).curve(curve);
  let strokeClasses;
  switch (edge.thickness) {
    case "normal":
      strokeClasses = "edge-thickness-normal";
      break;
    case "thick":
      strokeClasses = "edge-thickness-thick";
      break;
    case "invisible":
      strokeClasses = "edge-thickness-thick";
      break;
    default:
      strokeClasses = "";
  }
  switch (edge.pattern) {
    case "solid":
      strokeClasses += " edge-pattern-solid";
      break;
    case "dotted":
      strokeClasses += " edge-pattern-dotted";
      break;
    case "dashed":
      strokeClasses += " edge-pattern-dashed";
      break;
  }
  const svgPath = elem.append("path").attr("d", lineFunction(lineData)).attr("id", edge.id).attr("class", " " + strokeClasses + (edge.classes ? " " + edge.classes : "")).attr("style", edge.style);
  let url = "";
  if ((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)().flowchart.arrowMarkerAbsolute || (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)().state.arrowMarkerAbsolute) {
    url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
    url = url.replace(/\(/g, "\\(");
    url = url.replace(/\)/g, "\\)");
  }
  addEdgeMarkers(svgPath, edge, url, id, diagramType);
  let paths = {};
  if (pointsHasChanged) {
    paths.updatedPath = points;
  }
  paths.originalPath = edge.points;
  return paths;
}, "insertEdge");

// src/dagre-wrapper/nodes.js


// src/dagre-wrapper/blockArrowHelper.ts
var expandAndDeduplicateDirections = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(directions => {
  const uniqueDirections = /* @__PURE__ */new Set();
  for (const direction of directions) {
    switch (direction) {
      case "x":
        uniqueDirections.add("right");
        uniqueDirections.add("left");
        break;
      case "y":
        uniqueDirections.add("up");
        uniqueDirections.add("down");
        break;
      default:
        uniqueDirections.add(direction);
        break;
    }
  }
  return uniqueDirections;
}, "expandAndDeduplicateDirections");
var getArrowPoints = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((duplicatedDirections, bbox, node) => {
  const directions = expandAndDeduplicateDirections(duplicatedDirections);
  const f = 2;
  const height = bbox.height + 2 * node.padding;
  const midpoint = height / f;
  const width = bbox.width + 2 * midpoint + node.padding;
  const padding2 = node.padding / 2;
  if (directions.has("right") && directions.has("left") && directions.has("up") && directions.has("down")) {
    return [
    // Bottom
    {
      x: 0,
      y: 0
    }, {
      x: midpoint,
      y: 0
    }, {
      x: width / 2,
      y: 2 * padding2
    }, {
      x: width - midpoint,
      y: 0
    }, {
      x: width,
      y: 0
    },
    // Right
    {
      x: width,
      y: -height / 3
    }, {
      x: width + 2 * padding2,
      y: -height / 2
    }, {
      x: width,
      y: -2 * height / 3
    }, {
      x: width,
      y: -height
    },
    // Top
    {
      x: width - midpoint,
      y: -height
    }, {
      x: width / 2,
      y: -height - 2 * padding2
    }, {
      x: midpoint,
      y: -height
    },
    // Left
    {
      x: 0,
      y: -height
    }, {
      x: 0,
      y: -2 * height / 3
    }, {
      x: -2 * padding2,
      y: -height / 2
    }, {
      x: 0,
      y: -height / 3
    }];
  }
  if (directions.has("right") && directions.has("left") && directions.has("up")) {
    return [{
      x: midpoint,
      y: 0
    }, {
      x: width - midpoint,
      y: 0
    }, {
      x: width,
      y: -height / 2
    }, {
      x: width - midpoint,
      y: -height
    }, {
      x: midpoint,
      y: -height
    }, {
      x: 0,
      y: -height / 2
    }];
  }
  if (directions.has("right") && directions.has("left") && directions.has("down")) {
    return [{
      x: 0,
      y: 0
    }, {
      x: midpoint,
      y: -height
    }, {
      x: width - midpoint,
      y: -height
    }, {
      x: width,
      y: 0
    }];
  }
  if (directions.has("right") && directions.has("up") && directions.has("down")) {
    return [{
      x: 0,
      y: 0
    }, {
      x: width,
      y: -midpoint
    }, {
      x: width,
      y: -height + midpoint
    }, {
      x: 0,
      y: -height
    }];
  }
  if (directions.has("left") && directions.has("up") && directions.has("down")) {
    return [{
      x: width,
      y: 0
    }, {
      x: 0,
      y: -midpoint
    }, {
      x: 0,
      y: -height + midpoint
    }, {
      x: width,
      y: -height
    }];
  }
  if (directions.has("right") && directions.has("left")) {
    return [{
      x: midpoint,
      y: 0
    }, {
      x: midpoint,
      y: -padding2
    }, {
      x: width - midpoint,
      y: -padding2
    }, {
      x: width - midpoint,
      y: 0
    }, {
      x: width,
      y: -height / 2
    }, {
      x: width - midpoint,
      y: -height
    }, {
      x: width - midpoint,
      y: -height + padding2
    }, {
      x: midpoint,
      y: -height + padding2
    }, {
      x: midpoint,
      y: -height
    }, {
      x: 0,
      y: -height / 2
    }];
  }
  if (directions.has("up") && directions.has("down")) {
    return [
    // Bottom center
    {
      x: width / 2,
      y: 0
    },
    // Left pont of bottom arrow
    {
      x: 0,
      y: -padding2
    }, {
      x: midpoint,
      y: -padding2
    },
    // Left top over vertical section
    {
      x: midpoint,
      y: -height + padding2
    }, {
      x: 0,
      y: -height + padding2
    },
    // Top of arrow
    {
      x: width / 2,
      y: -height
    }, {
      x: width,
      y: -height + padding2
    },
    // Top of right vertical bar
    {
      x: width - midpoint,
      y: -height + padding2
    }, {
      x: width - midpoint,
      y: -padding2
    }, {
      x: width,
      y: -padding2
    }];
  }
  if (directions.has("right") && directions.has("up")) {
    return [{
      x: 0,
      y: 0
    }, {
      x: width,
      y: -midpoint
    }, {
      x: 0,
      y: -height
    }];
  }
  if (directions.has("right") && directions.has("down")) {
    return [{
      x: 0,
      y: 0
    }, {
      x: width,
      y: 0
    }, {
      x: 0,
      y: -height
    }];
  }
  if (directions.has("left") && directions.has("up")) {
    return [{
      x: width,
      y: 0
    }, {
      x: 0,
      y: -midpoint
    }, {
      x: width,
      y: -height
    }];
  }
  if (directions.has("left") && directions.has("down")) {
    return [{
      x: width,
      y: 0
    }, {
      x: 0,
      y: 0
    }, {
      x: width,
      y: -height
    }];
  }
  if (directions.has("right")) {
    return [{
      x: midpoint,
      y: -padding2
    }, {
      x: midpoint,
      y: -padding2
    }, {
      x: width - midpoint,
      y: -padding2
    }, {
      x: width - midpoint,
      y: 0
    }, {
      x: width,
      y: -height / 2
    }, {
      x: width - midpoint,
      y: -height
    }, {
      x: width - midpoint,
      y: -height + padding2
    },
    // top left corner of arrow
    {
      x: midpoint,
      y: -height + padding2
    }, {
      x: midpoint,
      y: -height + padding2
    }];
  }
  if (directions.has("left")) {
    return [{
      x: midpoint,
      y: 0
    }, {
      x: midpoint,
      y: -padding2
    },
    // Two points, the right corners
    {
      x: width - midpoint,
      y: -padding2
    }, {
      x: width - midpoint,
      y: -height + padding2
    }, {
      x: midpoint,
      y: -height + padding2
    }, {
      x: midpoint,
      y: -height
    }, {
      x: 0,
      y: -height / 2
    }];
  }
  if (directions.has("up")) {
    return [
    // Bottom center
    {
      x: midpoint,
      y: -padding2
    },
    // Left top over vertical section
    {
      x: midpoint,
      y: -height + padding2
    }, {
      x: 0,
      y: -height + padding2
    },
    // Top of arrow
    {
      x: width / 2,
      y: -height
    }, {
      x: width,
      y: -height + padding2
    },
    // Top of right vertical bar
    {
      x: width - midpoint,
      y: -height + padding2
    }, {
      x: width - midpoint,
      y: -padding2
    }];
  }
  if (directions.has("down")) {
    return [
    // Bottom center
    {
      x: width / 2,
      y: 0
    },
    // Left pont of bottom arrow
    {
      x: 0,
      y: -padding2
    }, {
      x: midpoint,
      y: -padding2
    },
    // Left top over vertical section
    {
      x: midpoint,
      y: -height + padding2
    }, {
      x: width - midpoint,
      y: -height + padding2
    }, {
      x: width - midpoint,
      y: -padding2
    }, {
      x: width,
      y: -padding2
    }];
  }
  return [{
    x: 0,
    y: 0
  }];
}, "getArrowPoints");

// src/dagre-wrapper/intersect/intersect-node.js
function intersectNode(node, point2) {
  return node.intersect(point2);
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(intersectNode, "intersectNode");
var intersect_node_default = intersectNode;

// src/dagre-wrapper/intersect/intersect-ellipse.js
function intersectEllipse(node, rx, ry, point2) {
  var cx = node.x;
  var cy = node.y;
  var px = cx - point2.x;
  var py = cy - point2.y;
  var det = Math.sqrt(rx * rx * py * py + ry * ry * px * px);
  var dx = Math.abs(rx * ry * px / det);
  if (point2.x < cx) {
    dx = -dx;
  }
  var dy = Math.abs(rx * ry * py / det);
  if (point2.y < cy) {
    dy = -dy;
  }
  return {
    x: cx + dx,
    y: cy + dy
  };
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(intersectEllipse, "intersectEllipse");
var intersect_ellipse_default = intersectEllipse;

// src/dagre-wrapper/intersect/intersect-circle.js
function intersectCircle(node, rx, point2) {
  return intersect_ellipse_default(node, rx, rx, point2);
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(intersectCircle, "intersectCircle");
var intersect_circle_default = intersectCircle;

// src/dagre-wrapper/intersect/intersect-line.js
function intersectLine(p1, p2, q1, q2) {
  var a1, a2, b1, b2, c1, c2;
  var r1, r2, r3, r4;
  var denom, offset, num;
  var x, y;
  a1 = p2.y - p1.y;
  b1 = p1.x - p2.x;
  c1 = p2.x * p1.y - p1.x * p2.y;
  r3 = a1 * q1.x + b1 * q1.y + c1;
  r4 = a1 * q2.x + b1 * q2.y + c1;
  if (r3 !== 0 && r4 !== 0 && sameSign(r3, r4)) {
    return;
  }
  a2 = q2.y - q1.y;
  b2 = q1.x - q2.x;
  c2 = q2.x * q1.y - q1.x * q2.y;
  r1 = a2 * p1.x + b2 * p1.y + c2;
  r2 = a2 * p2.x + b2 * p2.y + c2;
  if (r1 !== 0 && r2 !== 0 && sameSign(r1, r2)) {
    return;
  }
  denom = a1 * b2 - a2 * b1;
  if (denom === 0) {
    return;
  }
  offset = Math.abs(denom / 2);
  num = b1 * c2 - b2 * c1;
  x = num < 0 ? (num - offset) / denom : (num + offset) / denom;
  num = a2 * c1 - a1 * c2;
  y = num < 0 ? (num - offset) / denom : (num + offset) / denom;
  return {
    x,
    y
  };
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(intersectLine, "intersectLine");
function sameSign(r1, r2) {
  return r1 * r2 > 0;
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(sameSign, "sameSign");
var intersect_line_default = intersectLine;

// src/dagre-wrapper/intersect/intersect-polygon.js
var intersect_polygon_default = intersectPolygon;
function intersectPolygon(node, polyPoints, point2) {
  var x1 = node.x;
  var y1 = node.y;
  var intersections = [];
  var minX = Number.POSITIVE_INFINITY;
  var minY = Number.POSITIVE_INFINITY;
  if (typeof polyPoints.forEach === "function") {
    polyPoints.forEach(function (entry) {
      minX = Math.min(minX, entry.x);
      minY = Math.min(minY, entry.y);
    });
  } else {
    minX = Math.min(minX, polyPoints.x);
    minY = Math.min(minY, polyPoints.y);
  }
  var left = x1 - node.width / 2 - minX;
  var top = y1 - node.height / 2 - minY;
  for (var i = 0; i < polyPoints.length; i++) {
    var p1 = polyPoints[i];
    var p2 = polyPoints[i < polyPoints.length - 1 ? i + 1 : 0];
    var intersect = intersect_line_default(node, point2, {
      x: left + p1.x,
      y: top + p1.y
    }, {
      x: left + p2.x,
      y: top + p2.y
    });
    if (intersect) {
      intersections.push(intersect);
    }
  }
  if (!intersections.length) {
    return node;
  }
  if (intersections.length > 1) {
    intersections.sort(function (p, q) {
      var pdx = p.x - point2.x;
      var pdy = p.y - point2.y;
      var distp = Math.sqrt(pdx * pdx + pdy * pdy);
      var qdx = q.x - point2.x;
      var qdy = q.y - point2.y;
      var distq = Math.sqrt(qdx * qdx + qdy * qdy);
      return distp < distq ? -1 : distp === distq ? 0 : 1;
    });
  }
  return intersections[0];
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(intersectPolygon, "intersectPolygon");

// src/dagre-wrapper/intersect/intersect-rect.js
var intersectRect = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((node, point2) => {
  var x = node.x;
  var y = node.y;
  var dx = point2.x - x;
  var dy = point2.y - y;
  var w = node.width / 2;
  var h = node.height / 2;
  var sx, sy;
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    if (dy < 0) {
      h = -h;
    }
    sx = dy === 0 ? 0 : h * dx / dy;
    sy = h;
  } else {
    if (dx < 0) {
      w = -w;
    }
    sx = w;
    sy = dx === 0 ? 0 : w * dy / dx;
  }
  return {
    x: x + sx,
    y: y + sy
  };
}, "intersectRect");
var intersect_rect_default = intersectRect;

// src/dagre-wrapper/intersect/index.js
var intersect_default = {
  node: intersect_node_default,
  circle: intersect_circle_default,
  ellipse: intersect_ellipse_default,
  polygon: intersect_polygon_default,
  rect: intersect_rect_default
};

// src/dagre-wrapper/shapes/util.js

var labelHelper = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node, _classes, isNode) {
    const config2 = (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)();
    let classes2;
    const useHtmlLabels = node.useHtmlLabels || (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.evaluate)(config2.flowchart.htmlLabels);
    if (!_classes) {
      classes2 = "node default";
    } else {
      classes2 = _classes;
    }
    const shapeSvg = parent.insert("g").attr("class", classes2).attr("id", node.domId || node.id);
    const label = shapeSvg.insert("g").attr("class", "label").attr("style", node.labelStyle);
    let labelText;
    if (node.labelText === void 0) {
      labelText = "";
    } else {
      labelText = typeof node.labelText === "string" ? node.labelText : node.labelText[0];
    }
    const textNode = label.node();
    let text;
    if (node.labelType === "markdown") {
      text = (0,_chunk_C3MQ5ANM_mjs__WEBPACK_IMPORTED_MODULE_3__.createText)(label, (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.sanitizeText)((0,_chunk_O4NI6UNU_mjs__WEBPACK_IMPORTED_MODULE_4__.decodeEntities)(labelText), config2), {
        useHtmlLabels,
        width: node.width || config2.flowchart.wrappingWidth,
        classes: "markdown-node-label"
      }, config2);
    } else {
      text = textNode.appendChild(createLabel_default((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.sanitizeText)((0,_chunk_O4NI6UNU_mjs__WEBPACK_IMPORTED_MODULE_4__.decodeEntities)(labelText), config2), node.labelStyle, false, isNode));
    }
    let bbox = text.getBBox();
    const halfPadding = node.padding / 2;
    if ((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.evaluate)(config2.flowchart.htmlLabels)) {
      const div = text.children[0];
      const dv = (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)(text);
      const images = div.getElementsByTagName("img");
      if (images) {
        const noImgText = labelText.replace(/<img[^>]*>/g, "").trim() === "";
        yield Promise.all([...images].map(img => new Promise(res => {
          function setupImage() {
            img.style.display = "flex";
            img.style.flexDirection = "column";
            if (noImgText) {
              const bodyFontSize = config2.fontSize ? config2.fontSize : window.getComputedStyle(document.body).fontSize;
              const enlargingFactor = 5;
              const width = parseInt(bodyFontSize, 10) * enlargingFactor + "px";
              img.style.minWidth = width;
              img.style.maxWidth = width;
            } else {
              img.style.width = "100%";
            }
            res(img);
          }
          (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(setupImage, "setupImage");
          setTimeout(() => {
            if (img.complete) {
              setupImage();
            }
          });
          img.addEventListener("error", setupImage);
          img.addEventListener("load", setupImage);
        })));
      }
      bbox = div.getBoundingClientRect();
      dv.attr("width", bbox.width);
      dv.attr("height", bbox.height);
    }
    if (useHtmlLabels) {
      label.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
    } else {
      label.attr("transform", "translate(0, " + -bbox.height / 2 + ")");
    }
    if (node.centerLabel) {
      label.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
    }
    label.insert("rect", ":first-child");
    return {
      shapeSvg,
      bbox,
      halfPadding,
      label
    };
  });
  return function (_x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}(), "labelHelper");
var updateNodeBounds = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((node, element) => {
  const bbox = element.node().getBBox();
  node.width = bbox.width;
  node.height = bbox.height;
}, "updateNodeBounds");
function insertPolygonShape(parent, w, h, points) {
  return parent.insert("polygon", ":first-child").attr("points", points.map(function (d) {
    return d.x + "," + d.y;
  }).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -w / 2 + "," + h / 2 + ")");
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(insertPolygonShape, "insertPolygonShape");

// src/dagre-wrapper/shapes/note.js
var note = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref2 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node) {
    const useHtmlLabels = node.useHtmlLabels || (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)().flowchart.htmlLabels;
    if (!useHtmlLabels) {
      node.centerLabel = true;
    }
    const {
      shapeSvg,
      bbox,
      halfPadding
    } = yield labelHelper(parent, node, "node " + node.classes, true);
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.info("Classes = ", node.classes);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    rect2.attr("rx", node.rx).attr("ry", node.ry).attr("x", -bbox.width / 2 - halfPadding).attr("y", -bbox.height / 2 - halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
    updateNodeBounds(node, rect2);
    node.intersect = function (point2) {
      return intersect_default.rect(node, point2);
    };
    return shapeSvg;
  });
  return function (_x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}(), "note");
var note_default = note;

// src/dagre-wrapper/nodes.js
var formatClass = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(str => {
  if (str) {
    return " " + str;
  }
  return "";
}, "formatClass");
var getClassesFromNode = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((node, otherClasses) => {
  return `${otherClasses ? otherClasses : "node default"}${formatClass(node.classes)} ${formatClass(node.class)}`;
}, "getClassesFromNode");
var question = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref3 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node) {
    const {
      shapeSvg,
      bbox
    } = yield labelHelper(parent, node, getClassesFromNode(node, void 0), true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const s = w + h;
    const points = [{
      x: s / 2,
      y: 0
    }, {
      x: s,
      y: -s / 2
    }, {
      x: s / 2,
      y: -s
    }, {
      x: 0,
      y: -s / 2
    }];
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.info("Question main (Circle)");
    const questionElem = insertPolygonShape(shapeSvg, s, s, points);
    questionElem.attr("style", node.style);
    updateNodeBounds(node, questionElem);
    node.intersect = function (point2) {
      _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.warn("Intersect called");
      return intersect_default.polygon(node, points, point2);
    };
    return shapeSvg;
  });
  return function (_x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}(), "question");
var choice = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
  const s = 28;
  const points = [{
    x: 0,
    y: s / 2
  }, {
    x: s / 2,
    y: 0
  }, {
    x: 0,
    y: -s / 2
  }, {
    x: -s / 2,
    y: 0
  }];
  const choice2 = shapeSvg.insert("polygon", ":first-child").attr("points", points.map(function (d) {
    return d.x + "," + d.y;
  }).join(" "));
  choice2.attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28);
  node.width = 28;
  node.height = 28;
  node.intersect = function (point2) {
    return intersect_default.circle(node, 14, point2);
  };
  return shapeSvg;
}, "choice");
var hexagon = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref4 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node) {
    const {
      shapeSvg,
      bbox
    } = yield labelHelper(parent, node, getClassesFromNode(node, void 0), true);
    const f = 4;
    const h = bbox.height + node.padding;
    const m = h / f;
    const w = bbox.width + 2 * m + node.padding;
    const points = [{
      x: m,
      y: 0
    }, {
      x: w - m,
      y: 0
    }, {
      x: w,
      y: -h / 2
    }, {
      x: w - m,
      y: -h
    }, {
      x: m,
      y: -h
    }, {
      x: 0,
      y: -h / 2
    }];
    const hex = insertPolygonShape(shapeSvg, w, h, points);
    hex.attr("style", node.style);
    updateNodeBounds(node, hex);
    node.intersect = function (point2) {
      return intersect_default.polygon(node, points, point2);
    };
    return shapeSvg;
  });
  return function (_x0, _x1) {
    return _ref4.apply(this, arguments);
  };
}(), "hexagon");
var block_arrow = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref5 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node) {
    const {
      shapeSvg,
      bbox
    } = yield labelHelper(parent, node, void 0, true);
    const f = 2;
    const h = bbox.height + 2 * node.padding;
    const m = h / f;
    const w = bbox.width + 2 * m + node.padding;
    const points = getArrowPoints(node.directions, bbox, node);
    const blockArrow = insertPolygonShape(shapeSvg, w, h, points);
    blockArrow.attr("style", node.style);
    updateNodeBounds(node, blockArrow);
    node.intersect = function (point2) {
      return intersect_default.polygon(node, points, point2);
    };
    return shapeSvg;
  });
  return function (_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}(), "block_arrow");
var rect_left_inv_arrow = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref6 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node) {
    const {
      shapeSvg,
      bbox
    } = yield labelHelper(parent, node, getClassesFromNode(node, void 0), true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [{
      x: -h / 2,
      y: 0
    }, {
      x: w,
      y: 0
    }, {
      x: w,
      y: -h
    }, {
      x: -h / 2,
      y: -h
    }, {
      x: 0,
      y: -h / 2
    }];
    const el = insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    node.width = w + h;
    node.height = h;
    node.intersect = function (point2) {
      return intersect_default.polygon(node, points, point2);
    };
    return shapeSvg;
  });
  return function (_x12, _x13) {
    return _ref6.apply(this, arguments);
  };
}(), "rect_left_inv_arrow");
var lean_right = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref7 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node) {
    const {
      shapeSvg,
      bbox
    } = yield labelHelper(parent, node, getClassesFromNode(node), true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [{
      x: -2 * h / 6,
      y: 0
    }, {
      x: w - h / 6,
      y: 0
    }, {
      x: w + 2 * h / 6,
      y: -h
    }, {
      x: h / 6,
      y: -h
    }];
    const el = insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    updateNodeBounds(node, el);
    node.intersect = function (point2) {
      return intersect_default.polygon(node, points, point2);
    };
    return shapeSvg;
  });
  return function (_x14, _x15) {
    return _ref7.apply(this, arguments);
  };
}(), "lean_right");
var lean_left = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref8 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node) {
    const {
      shapeSvg,
      bbox
    } = yield labelHelper(parent, node, getClassesFromNode(node, void 0), true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [{
      x: 2 * h / 6,
      y: 0
    }, {
      x: w + h / 6,
      y: 0
    }, {
      x: w - 2 * h / 6,
      y: -h
    }, {
      x: -h / 6,
      y: -h
    }];
    const el = insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    updateNodeBounds(node, el);
    node.intersect = function (point2) {
      return intersect_default.polygon(node, points, point2);
    };
    return shapeSvg;
  });
  return function (_x16, _x17) {
    return _ref8.apply(this, arguments);
  };
}(), "lean_left");
var trapezoid = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref9 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node) {
    const {
      shapeSvg,
      bbox
    } = yield labelHelper(parent, node, getClassesFromNode(node, void 0), true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [{
      x: -2 * h / 6,
      y: 0
    }, {
      x: w + 2 * h / 6,
      y: 0
    }, {
      x: w - h / 6,
      y: -h
    }, {
      x: h / 6,
      y: -h
    }];
    const el = insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    updateNodeBounds(node, el);
    node.intersect = function (point2) {
      return intersect_default.polygon(node, points, point2);
    };
    return shapeSvg;
  });
  return function (_x18, _x19) {
    return _ref9.apply(this, arguments);
  };
}(), "trapezoid");
var inv_trapezoid = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref0 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node) {
    const {
      shapeSvg,
      bbox
    } = yield labelHelper(parent, node, getClassesFromNode(node, void 0), true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [{
      x: h / 6,
      y: 0
    }, {
      x: w - h / 6,
      y: 0
    }, {
      x: w + 2 * h / 6,
      y: -h
    }, {
      x: -2 * h / 6,
      y: -h
    }];
    const el = insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    updateNodeBounds(node, el);
    node.intersect = function (point2) {
      return intersect_default.polygon(node, points, point2);
    };
    return shapeSvg;
  });
  return function (_x20, _x21) {
    return _ref0.apply(this, arguments);
  };
}(), "inv_trapezoid");
var rect_right_inv_arrow = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref1 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node) {
    const {
      shapeSvg,
      bbox
    } = yield labelHelper(parent, node, getClassesFromNode(node, void 0), true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [{
      x: 0,
      y: 0
    }, {
      x: w + h / 2,
      y: 0
    }, {
      x: w,
      y: -h / 2
    }, {
      x: w + h / 2,
      y: -h
    }, {
      x: 0,
      y: -h
    }];
    const el = insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    updateNodeBounds(node, el);
    node.intersect = function (point2) {
      return intersect_default.polygon(node, points, point2);
    };
    return shapeSvg;
  });
  return function (_x22, _x23) {
    return _ref1.apply(this, arguments);
  };
}(), "rect_right_inv_arrow");
var cylinder = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref10 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node) {
    const {
      shapeSvg,
      bbox
    } = yield labelHelper(parent, node, getClassesFromNode(node, void 0), true);
    const w = bbox.width + node.padding;
    const rx = w / 2;
    const ry = rx / (2.5 + w / 50);
    const h = bbox.height + ry + node.padding;
    const shape = "M 0," + ry + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 a " + rx + "," + ry + " 0,0,0 " + -w + " 0 l 0," + h + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 l 0," + -h;
    const el = shapeSvg.attr("label-offset-y", ry).insert("path", ":first-child").attr("style", node.style).attr("d", shape).attr("transform", "translate(" + -w / 2 + "," + -(h / 2 + ry) + ")");
    updateNodeBounds(node, el);
    node.intersect = function (point2) {
      const pos = intersect_default.rect(node, point2);
      const x = pos.x - node.x;
      if (rx != 0 && (Math.abs(x) < node.width / 2 || Math.abs(x) == node.width / 2 && Math.abs(pos.y - node.y) > node.height / 2 - ry)) {
        let y = ry * ry * (1 - x * x / (rx * rx));
        if (y != 0) {
          y = Math.sqrt(y);
        }
        y = ry - y;
        if (point2.y - node.y > 0) {
          y = -y;
        }
        pos.y += y;
      }
      return pos;
    };
    return shapeSvg;
  });
  return function (_x24, _x25) {
    return _ref10.apply(this, arguments);
  };
}(), "cylinder");
var rect = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref11 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node) {
    const {
      shapeSvg,
      bbox,
      halfPadding
    } = yield labelHelper(parent, node, "node " + node.classes + " " + node.class, true);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const totalWidth = node.positioned ? node.width : bbox.width + node.padding;
    const totalHeight = node.positioned ? node.height : bbox.height + node.padding;
    const x = node.positioned ? -totalWidth / 2 : -bbox.width / 2 - halfPadding;
    const y = node.positioned ? -totalHeight / 2 : -bbox.height / 2 - halfPadding;
    rect2.attr("class", "basic label-container").attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("x", x).attr("y", y).attr("width", totalWidth).attr("height", totalHeight);
    if (node.props) {
      const propKeys = new Set(Object.keys(node.props));
      if (node.props.borders) {
        applyNodePropertyBorders(rect2, node.props.borders, totalWidth, totalHeight);
        propKeys.delete("borders");
      }
      propKeys.forEach(propKey => {
        _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.warn(`Unknown node property ${propKey}`);
      });
    }
    updateNodeBounds(node, rect2);
    node.intersect = function (point2) {
      return intersect_default.rect(node, point2);
    };
    return shapeSvg;
  });
  return function (_x26, _x27) {
    return _ref11.apply(this, arguments);
  };
}(), "rect");
var composite = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref12 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node) {
    const {
      shapeSvg,
      bbox,
      halfPadding
    } = yield labelHelper(parent, node, "node " + node.classes, true);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const totalWidth = node.positioned ? node.width : bbox.width + node.padding;
    const totalHeight = node.positioned ? node.height : bbox.height + node.padding;
    const x = node.positioned ? -totalWidth / 2 : -bbox.width / 2 - halfPadding;
    const y = node.positioned ? -totalHeight / 2 : -bbox.height / 2 - halfPadding;
    rect2.attr("class", "basic cluster composite label-container").attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("x", x).attr("y", y).attr("width", totalWidth).attr("height", totalHeight);
    if (node.props) {
      const propKeys = new Set(Object.keys(node.props));
      if (node.props.borders) {
        applyNodePropertyBorders(rect2, node.props.borders, totalWidth, totalHeight);
        propKeys.delete("borders");
      }
      propKeys.forEach(propKey => {
        _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.warn(`Unknown node property ${propKey}`);
      });
    }
    updateNodeBounds(node, rect2);
    node.intersect = function (point2) {
      return intersect_default.rect(node, point2);
    };
    return shapeSvg;
  });
  return function (_x28, _x29) {
    return _ref12.apply(this, arguments);
  };
}(), "composite");
var labelRect = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref13 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node) {
    const {
      shapeSvg
    } = yield labelHelper(parent, node, "label", true);
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.trace("Classes = ", node.class);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const totalWidth = 0;
    const totalHeight = 0;
    rect2.attr("width", totalWidth).attr("height", totalHeight);
    shapeSvg.attr("class", "label edgeLabel");
    if (node.props) {
      const propKeys = new Set(Object.keys(node.props));
      if (node.props.borders) {
        applyNodePropertyBorders(rect2, node.props.borders, totalWidth, totalHeight);
        propKeys.delete("borders");
      }
      propKeys.forEach(propKey => {
        _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.warn(`Unknown node property ${propKey}`);
      });
    }
    updateNodeBounds(node, rect2);
    node.intersect = function (point2) {
      return intersect_default.rect(node, point2);
    };
    return shapeSvg;
  });
  return function (_x30, _x31) {
    return _ref13.apply(this, arguments);
  };
}(), "labelRect");
function applyNodePropertyBorders(rect2, borders, totalWidth, totalHeight) {
  const strokeDashArray = [];
  const addBorder = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(length => {
    strokeDashArray.push(length, 0);
  }, "addBorder");
  const skipBorder = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(length => {
    strokeDashArray.push(0, length);
  }, "skipBorder");
  if (borders.includes("t")) {
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("add top border");
    addBorder(totalWidth);
  } else {
    skipBorder(totalWidth);
  }
  if (borders.includes("r")) {
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("add right border");
    addBorder(totalHeight);
  } else {
    skipBorder(totalHeight);
  }
  if (borders.includes("b")) {
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("add bottom border");
    addBorder(totalWidth);
  } else {
    skipBorder(totalWidth);
  }
  if (borders.includes("l")) {
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("add left border");
    addBorder(totalHeight);
  } else {
    skipBorder(totalHeight);
  }
  rect2.attr("stroke-dasharray", strokeDashArray.join(" "));
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(applyNodePropertyBorders, "applyNodePropertyBorders");
var rectWithTitle = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((parent, node) => {
  let classes2;
  if (!node.classes) {
    classes2 = "node default";
  } else {
    classes2 = "node " + node.classes;
  }
  const shapeSvg = parent.insert("g").attr("class", classes2).attr("id", node.domId || node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const innerLine = shapeSvg.insert("line");
  const label = shapeSvg.insert("g").attr("class", "label");
  const text2 = node.labelText.flat ? node.labelText.flat() : node.labelText;
  let title = "";
  if (typeof text2 === "object") {
    title = text2[0];
  } else {
    title = text2;
  }
  _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.info("Label text abc79", title, text2, typeof text2 === "object");
  const text = label.node().appendChild(createLabel_default(title, node.labelStyle, true, true));
  let bbox = {
    width: 0,
    height: 0
  };
  if ((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.evaluate)((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)().flowchart.htmlLabels)) {
    const div = text.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)(text);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.info("Text 2", text2);
  const textRows = text2.slice(1, text2.length);
  let titleBox = text.getBBox();
  const descr = label.node().appendChild(createLabel_default(textRows.join ? textRows.join("<br/>") : textRows, node.labelStyle, true, true));
  if ((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.evaluate)((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)().flowchart.htmlLabels)) {
    const div = descr.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)(descr);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  const halfPadding = node.padding / 2;
  (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)(descr).attr("transform", "translate( " + (
  // (titleBox.width - bbox.width) / 2 +
  bbox.width > titleBox.width ? 0 : (titleBox.width - bbox.width) / 2) + ", " + (titleBox.height + halfPadding + 5) + ")");
  (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)(text).attr("transform", "translate( " + (
  // (titleBox.width - bbox.width) / 2 +
  bbox.width < titleBox.width ? 0 : -(titleBox.width - bbox.width) / 2) + ", 0)");
  bbox = label.node().getBBox();
  label.attr("transform", "translate(" + -bbox.width / 2 + ", " + (-bbox.height / 2 - halfPadding + 3) + ")");
  rect2.attr("class", "outer title-state").attr("x", -bbox.width / 2 - halfPadding).attr("y", -bbox.height / 2 - halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
  innerLine.attr("class", "divider").attr("x1", -bbox.width / 2 - halfPadding).attr("x2", bbox.width / 2 + halfPadding).attr("y1", -bbox.height / 2 - halfPadding + titleBox.height + halfPadding).attr("y2", -bbox.height / 2 - halfPadding + titleBox.height + halfPadding);
  updateNodeBounds(node, rect2);
  node.intersect = function (point2) {
    return intersect_default.rect(node, point2);
  };
  return shapeSvg;
}, "rectWithTitle");
var stadium = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref14 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node) {
    const {
      shapeSvg,
      bbox
    } = yield labelHelper(parent, node, getClassesFromNode(node, void 0), true);
    const h = bbox.height + node.padding;
    const w = bbox.width + h / 4 + node.padding;
    const rect2 = shapeSvg.insert("rect", ":first-child").attr("style", node.style).attr("rx", h / 2).attr("ry", h / 2).attr("x", -w / 2).attr("y", -h / 2).attr("width", w).attr("height", h);
    updateNodeBounds(node, rect2);
    node.intersect = function (point2) {
      return intersect_default.rect(node, point2);
    };
    return shapeSvg;
  });
  return function (_x32, _x33) {
    return _ref14.apply(this, arguments);
  };
}(), "stadium");
var circle2 = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref15 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node) {
    const {
      shapeSvg,
      bbox,
      halfPadding
    } = yield labelHelper(parent, node, getClassesFromNode(node, void 0), true);
    const circle3 = shapeSvg.insert("circle", ":first-child");
    circle3.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("r", bbox.width / 2 + halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.info("Circle main");
    updateNodeBounds(node, circle3);
    node.intersect = function (point2) {
      _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.info("Circle intersect", node, bbox.width / 2 + halfPadding, point2);
      return intersect_default.circle(node, bbox.width / 2 + halfPadding, point2);
    };
    return shapeSvg;
  });
  return function (_x34, _x35) {
    return _ref15.apply(this, arguments);
  };
}(), "circle");
var doublecircle = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref16 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node) {
    const {
      shapeSvg,
      bbox,
      halfPadding
    } = yield labelHelper(parent, node, getClassesFromNode(node, void 0), true);
    const gap = 5;
    const circleGroup = shapeSvg.insert("g", ":first-child");
    const outerCircle = circleGroup.insert("circle");
    const innerCircle = circleGroup.insert("circle");
    circleGroup.attr("class", node.class);
    outerCircle.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("r", bbox.width / 2 + halfPadding + gap).attr("width", bbox.width + node.padding + gap * 2).attr("height", bbox.height + node.padding + gap * 2);
    innerCircle.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("r", bbox.width / 2 + halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.info("DoubleCircle main");
    updateNodeBounds(node, outerCircle);
    node.intersect = function (point2) {
      _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.info("DoubleCircle intersect", node, bbox.width / 2 + halfPadding + gap, point2);
      return intersect_default.circle(node, bbox.width / 2 + halfPadding + gap, point2);
    };
    return shapeSvg;
  });
  return function (_x36, _x37) {
    return _ref16.apply(this, arguments);
  };
}(), "doublecircle");
var subroutine = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref17 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parent, node) {
    const {
      shapeSvg,
      bbox
    } = yield labelHelper(parent, node, getClassesFromNode(node, void 0), true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [{
      x: 0,
      y: 0
    }, {
      x: w,
      y: 0
    }, {
      x: w,
      y: -h
    }, {
      x: 0,
      y: -h
    }, {
      x: 0,
      y: 0
    }, {
      x: -8,
      y: 0
    }, {
      x: w + 8,
      y: 0
    }, {
      x: w + 8,
      y: -h
    }, {
      x: -8,
      y: -h
    }, {
      x: -8,
      y: 0
    }];
    const el = insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    updateNodeBounds(node, el);
    node.intersect = function (point2) {
      return intersect_default.polygon(node, points, point2);
    };
    return shapeSvg;
  });
  return function (_x38, _x39) {
    return _ref17.apply(this, arguments);
  };
}(), "subroutine");
var start = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
  const circle3 = shapeSvg.insert("circle", ":first-child");
  circle3.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  updateNodeBounds(node, circle3);
  node.intersect = function (point2) {
    return intersect_default.circle(node, 7, point2);
  };
  return shapeSvg;
}, "start");
var forkJoin = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((parent, node, dir) => {
  const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
  let width = 70;
  let height = 10;
  if (dir === "LR") {
    width = 10;
    height = 70;
  }
  const shape = shapeSvg.append("rect").attr("x", -1 * width / 2).attr("y", -1 * height / 2).attr("width", width).attr("height", height).attr("class", "fork-join");
  updateNodeBounds(node, shape);
  node.height = node.height + node.padding / 2;
  node.width = node.width + node.padding / 2;
  node.intersect = function (point2) {
    return intersect_default.rect(node, point2);
  };
  return shapeSvg;
}, "forkJoin");
var end = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
  const innerCircle = shapeSvg.insert("circle", ":first-child");
  const circle3 = shapeSvg.insert("circle", ":first-child");
  circle3.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  innerCircle.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10);
  updateNodeBounds(node, circle3);
  node.intersect = function (point2) {
    return intersect_default.circle(node, 7, point2);
  };
  return shapeSvg;
}, "end");
var class_box = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)((parent, node) => {
  const halfPadding = node.padding / 2;
  const rowPadding = 4;
  const lineHeight = 8;
  let classes2;
  if (!node.classes) {
    classes2 = "node default";
  } else {
    classes2 = "node " + node.classes;
  }
  const shapeSvg = parent.insert("g").attr("class", classes2).attr("id", node.domId || node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const topLine = shapeSvg.insert("line");
  const bottomLine = shapeSvg.insert("line");
  let maxWidth = 0;
  let maxHeight = rowPadding;
  const labelContainer = shapeSvg.insert("g").attr("class", "label");
  let verticalPos = 0;
  const hasInterface = node.classData.annotations?.[0];
  const interfaceLabelText = node.classData.annotations[0] ? "\xAB" + node.classData.annotations[0] + "\xBB" : "";
  const interfaceLabel = labelContainer.node().appendChild(createLabel_default(interfaceLabelText, node.labelStyle, true, true));
  let interfaceBBox = interfaceLabel.getBBox();
  if ((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.evaluate)((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)().flowchart.htmlLabels)) {
    const div = interfaceLabel.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)(interfaceLabel);
    interfaceBBox = div.getBoundingClientRect();
    dv.attr("width", interfaceBBox.width);
    dv.attr("height", interfaceBBox.height);
  }
  if (node.classData.annotations[0]) {
    maxHeight += interfaceBBox.height + rowPadding;
    maxWidth += interfaceBBox.width;
  }
  let classTitleString = node.classData.label;
  if (node.classData.type !== void 0 && node.classData.type !== "") {
    if ((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)().flowchart.htmlLabels) {
      classTitleString += "&lt;" + node.classData.type + "&gt;";
    } else {
      classTitleString += "<" + node.classData.type + ">";
    }
  }
  const classTitleLabel = labelContainer.node().appendChild(createLabel_default(classTitleString, node.labelStyle, true, true));
  (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)(classTitleLabel).attr("class", "classTitle");
  let classTitleBBox = classTitleLabel.getBBox();
  if ((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.evaluate)((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)().flowchart.htmlLabels)) {
    const div = classTitleLabel.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)(classTitleLabel);
    classTitleBBox = div.getBoundingClientRect();
    dv.attr("width", classTitleBBox.width);
    dv.attr("height", classTitleBBox.height);
  }
  maxHeight += classTitleBBox.height + rowPadding;
  if (classTitleBBox.width > maxWidth) {
    maxWidth = classTitleBBox.width;
  }
  const classAttributes = [];
  node.classData.members.forEach(member => {
    const parsedInfo = member.getDisplayDetails();
    let parsedText = parsedInfo.displayText;
    if ((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)().flowchart.htmlLabels) {
      parsedText = parsedText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    const lbl = labelContainer.node().appendChild(createLabel_default(parsedText, parsedInfo.cssStyle ? parsedInfo.cssStyle : node.labelStyle, true, true));
    let bbox = lbl.getBBox();
    if ((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.evaluate)((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)().flowchart.htmlLabels)) {
      const div = lbl.children[0];
      const dv = (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)(lbl);
      bbox = div.getBoundingClientRect();
      dv.attr("width", bbox.width);
      dv.attr("height", bbox.height);
    }
    if (bbox.width > maxWidth) {
      maxWidth = bbox.width;
    }
    maxHeight += bbox.height + rowPadding;
    classAttributes.push(lbl);
  });
  maxHeight += lineHeight;
  const classMethods = [];
  node.classData.methods.forEach(member => {
    const parsedInfo = member.getDisplayDetails();
    let displayText = parsedInfo.displayText;
    if ((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)().flowchart.htmlLabels) {
      displayText = displayText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    const lbl = labelContainer.node().appendChild(createLabel_default(displayText, parsedInfo.cssStyle ? parsedInfo.cssStyle : node.labelStyle, true, true));
    let bbox = lbl.getBBox();
    if ((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.evaluate)((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)().flowchart.htmlLabels)) {
      const div = lbl.children[0];
      const dv = (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)(lbl);
      bbox = div.getBoundingClientRect();
      dv.attr("width", bbox.width);
      dv.attr("height", bbox.height);
    }
    if (bbox.width > maxWidth) {
      maxWidth = bbox.width;
    }
    maxHeight += bbox.height + rowPadding;
    classMethods.push(lbl);
  });
  maxHeight += lineHeight;
  if (hasInterface) {
    let diffX2 = (maxWidth - interfaceBBox.width) / 2;
    (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)(interfaceLabel).attr("transform", "translate( " + (-1 * maxWidth / 2 + diffX2) + ", " + -1 * maxHeight / 2 + ")");
    verticalPos = interfaceBBox.height + rowPadding;
  }
  let diffX = (maxWidth - classTitleBBox.width) / 2;
  (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)(classTitleLabel).attr("transform", "translate( " + (-1 * maxWidth / 2 + diffX) + ", " + (-1 * maxHeight / 2 + verticalPos) + ")");
  verticalPos += classTitleBBox.height + rowPadding;
  topLine.attr("class", "divider").attr("x1", -maxWidth / 2 - halfPadding).attr("x2", maxWidth / 2 + halfPadding).attr("y1", -maxHeight / 2 - halfPadding + lineHeight + verticalPos).attr("y2", -maxHeight / 2 - halfPadding + lineHeight + verticalPos);
  verticalPos += lineHeight;
  classAttributes.forEach(lbl => {
    (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)(lbl).attr("transform", "translate( " + -maxWidth / 2 + ", " + (-1 * maxHeight / 2 + verticalPos + lineHeight / 2) + ")");
    const memberBBox = lbl?.getBBox();
    verticalPos += (memberBBox?.height ?? 0) + rowPadding;
  });
  verticalPos += lineHeight;
  bottomLine.attr("class", "divider").attr("x1", -maxWidth / 2 - halfPadding).attr("x2", maxWidth / 2 + halfPadding).attr("y1", -maxHeight / 2 - halfPadding + lineHeight + verticalPos).attr("y2", -maxHeight / 2 - halfPadding + lineHeight + verticalPos);
  verticalPos += lineHeight;
  classMethods.forEach(lbl => {
    (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)(lbl).attr("transform", "translate( " + -maxWidth / 2 + ", " + (-1 * maxHeight / 2 + verticalPos) + ")");
    const memberBBox = lbl?.getBBox();
    verticalPos += (memberBBox?.height ?? 0) + rowPadding;
  });
  rect2.attr("style", node.style).attr("class", "outer title-state").attr("x", -maxWidth / 2 - halfPadding).attr("y", -(maxHeight / 2) - halfPadding).attr("width", maxWidth + node.padding).attr("height", maxHeight + node.padding);
  updateNodeBounds(node, rect2);
  node.intersect = function (point2) {
    return intersect_default.rect(node, point2);
  };
  return shapeSvg;
}, "class_box");
var shapes = {
  rhombus: question,
  composite,
  question,
  rect,
  labelRect,
  rectWithTitle,
  choice,
  circle: circle2,
  doublecircle,
  stadium,
  hexagon,
  block_arrow,
  rect_left_inv_arrow,
  lean_right,
  lean_left,
  trapezoid,
  inv_trapezoid,
  rect_right_inv_arrow,
  cylinder,
  start,
  end,
  note: note_default,
  subroutine,
  fork: forkJoin,
  join: forkJoin,
  class_box
};
var nodeElems = {};
var insertNode = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref18 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (elem, node, renderOptions) {
    let newEl;
    let el;
    if (node.link) {
      let target;
      if ((0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig2)().securityLevel === "sandbox") {
        target = "_top";
      } else if (node.linkTarget) {
        target = node.linkTarget || "_blank";
      }
      newEl = elem.insert("svg:a").attr("xlink:href", node.link).attr("target", target);
      el = yield shapes[node.shape](newEl, node, renderOptions);
    } else {
      el = yield shapes[node.shape](elem, node, renderOptions);
      newEl = el;
    }
    if (node.tooltip) {
      el.attr("title", node.tooltip);
    }
    if (node.class) {
      el.attr("class", "node default " + node.class);
    }
    nodeElems[node.id] = newEl;
    if (node.haveCallback) {
      nodeElems[node.id].attr("class", nodeElems[node.id].attr("class") + " clickable");
    }
    return newEl;
  });
  return function (_x40, _x41, _x42) {
    return _ref18.apply(this, arguments);
  };
}(), "insertNode");
var positionNode = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(node => {
  const el = nodeElems[node.id];
  _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.trace("Transforming node", node.diff, node, "translate(" + (node.x - node.width / 2 - 5) + ", " + node.width / 2 + ")");
  const padding2 = 8;
  const diff = node.diff || 0;
  if (node.clusterNode) {
    el.attr("transform", "translate(" + (node.x + diff - node.width / 2) + ", " + (node.y - node.height / 2 - padding2) + ")");
  } else {
    el.attr("transform", "translate(" + node.x + ", " + node.y + ")");
  }
  return diff;
}, "positionNode");

// src/diagrams/block/renderHelpers.ts
function getNodeFromBlock(block, db2, positioned = false) {
  const vertex = block;
  let classStr = "default";
  if ((vertex?.classes?.length || 0) > 0) {
    classStr = (vertex?.classes ?? []).join(" ");
  }
  classStr = classStr + " flowchart-label";
  let radius = 0;
  let shape = "";
  let padding2;
  switch (vertex.type) {
    case "round":
      radius = 5;
      shape = "rect";
      break;
    case "composite":
      radius = 0;
      shape = "composite";
      padding2 = 0;
      break;
    case "square":
      shape = "rect";
      break;
    case "diamond":
      shape = "question";
      break;
    case "hexagon":
      shape = "hexagon";
      break;
    case "block_arrow":
      shape = "block_arrow";
      break;
    case "odd":
      shape = "rect_left_inv_arrow";
      break;
    case "lean_right":
      shape = "lean_right";
      break;
    case "lean_left":
      shape = "lean_left";
      break;
    case "trapezoid":
      shape = "trapezoid";
      break;
    case "inv_trapezoid":
      shape = "inv_trapezoid";
      break;
    case "rect_left_inv_arrow":
      shape = "rect_left_inv_arrow";
      break;
    case "circle":
      shape = "circle";
      break;
    case "ellipse":
      shape = "ellipse";
      break;
    case "stadium":
      shape = "stadium";
      break;
    case "subroutine":
      shape = "subroutine";
      break;
    case "cylinder":
      shape = "cylinder";
      break;
    case "group":
      shape = "rect";
      break;
    case "doublecircle":
      shape = "doublecircle";
      break;
    default:
      shape = "rect";
  }
  const styles = (0,_chunk_O4NI6UNU_mjs__WEBPACK_IMPORTED_MODULE_4__.getStylesFromArray)(vertex?.styles ?? []);
  const vertexText = vertex.label;
  const bounds = vertex.size ?? {
    width: 0,
    height: 0,
    x: 0,
    y: 0
  };
  const node = {
    labelStyle: styles.labelStyle,
    shape,
    labelText: vertexText,
    rx: radius,
    ry: radius,
    class: classStr,
    style: styles.style,
    id: vertex.id,
    directions: vertex.directions,
    width: bounds.width,
    height: bounds.height,
    x: bounds.x,
    y: bounds.y,
    positioned,
    intersect: void 0,
    type: vertex.type,
    padding: padding2 ?? (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig)()?.block?.padding ?? 0
  };
  return node;
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(getNodeFromBlock, "getNodeFromBlock");
function calculateBlockSize(_x43, _x44, _x45) {
  return _calculateBlockSize.apply(this, arguments);
}
function _calculateBlockSize() {
  _calculateBlockSize = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (elem, block, db2) {
    const node = getNodeFromBlock(block, db2, false);
    if (node.type === "group") {
      return;
    }
    const config2 = (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig)();
    const nodeEl = yield insertNode(elem, node, {
      config: config2
    });
    const boundingBox = nodeEl.node().getBBox();
    const obj = db2.getBlock(node.id);
    obj.size = {
      width: boundingBox.width,
      height: boundingBox.height,
      x: 0,
      y: 0,
      node: nodeEl
    };
    db2.setBlock(obj);
    nodeEl.remove();
  });
  return _calculateBlockSize.apply(this, arguments);
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(calculateBlockSize, "calculateBlockSize");
function insertBlockPositioned(_x46, _x47, _x48) {
  return _insertBlockPositioned.apply(this, arguments);
}
function _insertBlockPositioned() {
  _insertBlockPositioned = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (elem, block, db2) {
    const node = getNodeFromBlock(block, db2, true);
    const obj = db2.getBlock(node.id);
    if (obj.type !== "space") {
      const config2 = (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig)();
      yield insertNode(elem, node, {
        config: config2
      });
      block.intersect = node?.intersect;
      positionNode(node);
    }
  });
  return _insertBlockPositioned.apply(this, arguments);
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(insertBlockPositioned, "insertBlockPositioned");
function performOperations(_x49, _x50, _x51, _x52) {
  return _performOperations.apply(this, arguments);
}
function _performOperations() {
  _performOperations = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (elem, blocks2, db2, operation) {
    for (const block of blocks2) {
      yield operation(elem, block, db2);
      if (block.children) {
        yield performOperations(elem, block.children, db2, operation);
      }
    }
  });
  return _performOperations.apply(this, arguments);
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(performOperations, "performOperations");
function calculateBlockSizes(_x53, _x54, _x55) {
  return _calculateBlockSizes.apply(this, arguments);
}
function _calculateBlockSizes() {
  _calculateBlockSizes = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (elem, blocks2, db2) {
    yield performOperations(elem, blocks2, db2, calculateBlockSize);
  });
  return _calculateBlockSizes.apply(this, arguments);
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(calculateBlockSizes, "calculateBlockSizes");
function insertBlocks(_x56, _x57, _x58) {
  return _insertBlocks.apply(this, arguments);
}
function _insertBlocks() {
  _insertBlocks = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (elem, blocks2, db2) {
    yield performOperations(elem, blocks2, db2, insertBlockPositioned);
  });
  return _insertBlocks.apply(this, arguments);
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(insertBlocks, "insertBlocks");
function insertEdges(_x59, _x60, _x61, _x62, _x63) {
  return _insertEdges.apply(this, arguments);
}
function _insertEdges() {
  _insertEdges = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (elem, edges, blocks2, db2, id) {
    const g = new dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_10__.Graph({
      multigraph: true,
      compound: true
    });
    g.setGraph({
      rankdir: "TB",
      nodesep: 10,
      ranksep: 10,
      marginx: 8,
      marginy: 8
    });
    for (const block of blocks2) {
      if (block.size) {
        g.setNode(block.id, {
          width: block.size.width,
          height: block.size.height,
          intersect: block.intersect
        });
      }
    }
    for (const edge of edges) {
      if (edge.start && edge.end) {
        const startBlock = db2.getBlock(edge.start);
        const endBlock = db2.getBlock(edge.end);
        if (startBlock?.size && endBlock?.size) {
          const start2 = startBlock.size;
          const end2 = endBlock.size;
          const points = [{
            x: start2.x,
            y: start2.y
          }, {
            x: start2.x + (end2.x - start2.x) / 2,
            y: start2.y + (end2.y - start2.y) / 2
          }, {
            x: end2.x,
            y: end2.y
          }];
          insertEdge(elem, {
            v: edge.start,
            w: edge.end,
            name: edge.id
          }, {
            ...edge,
            arrowTypeEnd: edge.arrowTypeEnd,
            arrowTypeStart: edge.arrowTypeStart,
            points,
            classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
          }, void 0, "block", g, id);
          if (edge.label) {
            yield insertEdgeLabel(elem, {
              ...edge,
              label: edge.label,
              labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
              arrowTypeEnd: edge.arrowTypeEnd,
              arrowTypeStart: edge.arrowTypeStart,
              points,
              classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
            });
            positionEdgeLabel({
              ...edge,
              x: points[1].x,
              y: points[1].y
            }, {
              originalPath: points
            });
          }
        }
      }
    }
  });
  return _insertEdges.apply(this, arguments);
}
(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(insertEdges, "insertEdges");

// src/diagrams/block/blockRenderer.ts
var getClasses2 = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(function (text, diagObj) {
  return diagObj.db.getClasses();
}, "getClasses");
var draw = /* @__PURE__ */(0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.__name)(/*#__PURE__*/function () {
  var _ref19 = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (text, id, _version, diagObj) {
    const {
      securityLevel,
      block: conf
    } = (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.getConfig)();
    const db2 = diagObj.db;
    let sandboxElement;
    if (securityLevel === "sandbox") {
      sandboxElement = (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)("#i" + id);
    }
    const root = securityLevel === "sandbox" ? (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)(sandboxElement.nodes()[0].contentDocument.body) : (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)("body");
    const svg = securityLevel === "sandbox" ? root.select(`[id="${id}"]`) : (0,d3__WEBPACK_IMPORTED_MODULE_9__.select)(`[id="${id}"]`);
    const markers2 = ["point", "circle", "cross"];
    markers_default(svg, markers2, diagObj.type, id);
    const bl = db2.getBlocks();
    const blArr = db2.getBlocksFlat();
    const edges = db2.getEdges();
    const nodes = svg.insert("g").attr("class", "block");
    yield calculateBlockSizes(nodes, bl, db2);
    const bounds = layout(db2);
    yield insertBlocks(nodes, bl, db2);
    yield insertEdges(nodes, edges, blArr, db2, id);
    if (bounds) {
      const bounds2 = bounds;
      const magicFactor = Math.max(1, Math.round(0.125 * (bounds2.width / bounds2.height)));
      const height = bounds2.height + magicFactor + 10;
      const width = bounds2.width + 10;
      const {
        useMaxWidth
      } = conf;
      (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.configureSvgSize)(svg, height, width, !!useMaxWidth);
      _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_5__.log.debug("Here Bounds", bounds, bounds2);
      svg.attr("viewBox", `${bounds2.x - 5} ${bounds2.y - 5} ${bounds2.width + 10} ${bounds2.height + 10}`);
    }
  });
  return function (_x64, _x65, _x66, _x67) {
    return _ref19.apply(this, arguments);
  };
}(), "draw");
var blockRenderer_default = {
  draw,
  getClasses: getClasses2
};

// src/diagrams/block/blockDiagram.ts
var diagram = {
  parser: block_default,
  db: blockDB_default,
  renderer: blockRenderer_default,
  styles: styles_default
};


/***/ }),

/***/ 86340:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ 58705);
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ 27482);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ 29892);




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return (0,_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keys_js__WEBPACK_IMPORTED_MODULE_1__["default"], _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllKeys);

/***/ }),

/***/ 89169:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsMatch.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Stack.js */ 72359);
/* harmony import */ var _baseIsEqual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsEqual.js */ 54676);



/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
    length = index,
    noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
      objValue = object[key],
      srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined ? (0,_baseIsEqual_js__WEBPACK_IMPORTED_MODULE_1__["default"])(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsMatch);

/***/ }),

/***/ 89309:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getSymbolsIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ 59126);
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_getPrototype.js */ 32549);
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ 27482);
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stubArray.js */ 71971);





/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function (object) {
  var result = [];
  while (object) {
    (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, (0,_getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object));
    object = (0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object);
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSymbolsIn);

/***/ }),

/***/ 92905:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_strictIndexOf.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
    length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (strictIndexOf);

/***/ }),

/***/ 93362:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/filter.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayFilter.js */ 84948);
/* harmony import */ var _baseFilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseFilter.js */ 21708);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseIteratee.js */ 65679);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 19247);





/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? _arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _baseFilter_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  return func(collection, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__["default"])(predicate, 3));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ }),

/***/ 94092:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseReduce.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function (value, index, collection) {
    accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseReduce);

/***/ }),

/***/ 95130:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_copySymbolsIn.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ 61893);
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbolsIn.js */ 89309);



/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copySymbolsIn);

/***/ }),

/***/ 95365:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseClone.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_Stack.js */ 72359);
/* harmony import */ var _arrayEach_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_arrayEach.js */ 45839);
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_assignValue.js */ 16545);
/* harmony import */ var _baseAssign_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_baseAssign.js */ 67467);
/* harmony import */ var _baseAssignIn_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_baseAssignIn.js */ 56408);
/* harmony import */ var _cloneBuffer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_cloneBuffer.js */ 99424);
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_copyArray.js */ 80905);
/* harmony import */ var _copySymbols_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_copySymbols.js */ 9873);
/* harmony import */ var _copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_copySymbolsIn.js */ 95130);
/* harmony import */ var _getAllKeys_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_getAllKeys.js */ 86340);
/* harmony import */ var _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_getAllKeysIn.js */ 63147);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_getTag.js */ 11139);
/* harmony import */ var _initCloneArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_initCloneArray.js */ 15147);
/* harmony import */ var _initCloneByTag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_initCloneByTag.js */ 16941);
/* harmony import */ var _initCloneObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_initCloneObject.js */ 13195);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ 19247);
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isBuffer.js */ 47618);
/* harmony import */ var _isMap_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isMap.js */ 43144);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 23151);
/* harmony import */ var _isSet_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./isSet.js */ 11186);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./keys.js */ 29892);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./keysIn.js */ 75243);























/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
  CLONE_FLAT_FLAG = 2,
  CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]',
  weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
    isDeep = bitmask & CLONE_DEEP_FLAG,
    isFlat = bitmask & CLONE_FLAT_FLAG,
    isFull = bitmask & CLONE_SYMBOLS_FLAG;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  if (isArr) {
    result = (0,_initCloneArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
    if (!isDeep) {
      return (0,_copyArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value, result);
    }
  } else {
    var tag = (0,_getTag_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value),
      isFunc = tag == funcTag || tag == genTag;
    if ((0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value)) {
      return (0,_cloneBuffer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : (0,_initCloneObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(value);
      if (!isDeep) {
        return isFlat ? (0,_copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__["default"])(value, (0,_baseAssignIn_js__WEBPACK_IMPORTED_MODULE_9__["default"])(result, value)) : (0,_copySymbols_js__WEBPACK_IMPORTED_MODULE_10__["default"])(value, (0,_baseAssign_js__WEBPACK_IMPORTED_MODULE_11__["default"])(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = (0,_initCloneByTag_js__WEBPACK_IMPORTED_MODULE_12__["default"])(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_13__["default"]());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if ((0,_isSet_js__WEBPACK_IMPORTED_MODULE_14__["default"])(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if ((0,_isMap_js__WEBPACK_IMPORTED_MODULE_15__["default"])(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_16__["default"] : _getAllKeys_js__WEBPACK_IMPORTED_MODULE_17__["default"] : isFlat ? _keysIn_js__WEBPACK_IMPORTED_MODULE_18__["default"] : _keys_js__WEBPACK_IMPORTED_MODULE_19__["default"];
  var props = isArr ? undefined : keysFunc(value);
  (0,_arrayEach_js__WEBPACK_IMPORTED_MODULE_20__["default"])(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    (0,_assignValue_js__WEBPACK_IMPORTED_MODULE_21__["default"])(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseClone);

/***/ }),

/***/ 96923:
/*!************************************************************!*\
  !*** ./node_modules/lodash-es/_matchesStrictComparable.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (matchesStrictComparable);

/***/ }),

/***/ 98741:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_equalArrays.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SetCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_SetCache.js */ 82133);
/* harmony import */ var _arraySome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arraySome.js */ 20658);
/* harmony import */ var _cacheHas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cacheHas.js */ 64989);




/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
    arrLength = array.length,
    othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
    result = true,
    seen = bitmask & COMPARE_UNORDERED_FLAG ? new _SetCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]() : undefined;
  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
      othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!(0,_arraySome_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other, function (othValue, othIndex) {
        if (!(0,_cacheHas_js__WEBPACK_IMPORTED_MODULE_2__["default"])(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equalArrays);

/***/ }),

/***/ 99842:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsMap.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getTag.js */ 11139);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 85528);



/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == mapTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsMap);

/***/ })

}])
//# sourceMappingURL=6217.js.map