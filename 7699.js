(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[7699],{

/***/ 17699
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/platform.mjs ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Platform: () => (/* reexport safe */ _platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.Platform),
/* harmony export */   PlatformModule: () => (/* binding */ PlatformModule),
/* harmony export */   RtlScrollAxisType: () => (/* reexport safe */ _scrolling_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.RtlScrollAxisType),
/* harmony export */   _getEventTarget: () => (/* reexport safe */ _shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__._getEventTarget),
/* harmony export */   _getFocusedElementPierceShadowDom: () => (/* reexport safe */ _shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__._getFocusedElementPierceShadowDom),
/* harmony export */   _getShadowRoot: () => (/* reexport safe */ _shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__._getShadowRoot),
/* harmony export */   _isTestEnvironment: () => (/* reexport safe */ _test_environment_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__._isTestEnvironment),
/* harmony export */   _supportsShadowDom: () => (/* reexport safe */ _shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__._supportsShadowDom),
/* harmony export */   getRtlScrollAxisType: () => (/* reexport safe */ _scrolling_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.getRtlScrollAxisType),
/* harmony export */   getSupportedInputTypes: () => (/* binding */ getSupportedInputTypes),
/* harmony export */   normalizePassiveListenerOptions: () => (/* reexport safe */ _passive_listeners_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions),
/* harmony export */   supportsPassiveEventListeners: () => (/* reexport safe */ _passive_listeners_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.supportsPassiveEventListeners),
/* harmony export */   supportsScrollBehavior: () => (/* reexport safe */ _scrolling_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.supportsScrollBehavior)
/* harmony export */ });
/* harmony import */ var _platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_platform-chunk.mjs */ 98508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _passive_listeners_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_passive-listeners-chunk.mjs */ 82548);
/* harmony import */ var _scrolling_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_scrolling-chunk.mjs */ 86186);
/* harmony import */ var _shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_shadow-dom-chunk.mjs */ 68310);
/* harmony import */ var _test_environment_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_test-environment-chunk.mjs */ 99737);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 11674);








let PlatformModule = /*#__PURE__*/(() => {
  class PlatformModule {
    static ɵfac = function PlatformModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PlatformModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PlatformModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  }
  return PlatformModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let supportedInputTypes;
const candidateInputTypes = ['color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
function getSupportedInputTypes() {
  if (supportedInputTypes) {
    return supportedInputTypes;
  }
  if (typeof document !== 'object' || !document) {
    supportedInputTypes = new Set(candidateInputTypes);
    return supportedInputTypes;
  }
  let featureTestInput = document.createElement('input');
  supportedInputTypes = new Set(candidateInputTypes.filter(value => {
    featureTestInput.setAttribute('type', value);
    return featureTestInput.type === value;
  }));
  return supportedInputTypes;
}


/***/ },

/***/ 68310
/*!******************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_shadow-dom-chunk.mjs ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _getEventTarget: () => (/* binding */ _getEventTarget),
/* harmony export */   _getFocusedElementPierceShadowDom: () => (/* binding */ _getFocusedElementPierceShadowDom),
/* harmony export */   _getShadowRoot: () => (/* binding */ _getShadowRoot),
/* harmony export */   _supportsShadowDom: () => (/* binding */ _supportsShadowDom)
/* harmony export */ });
let shadowDomIsSupported;
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== 'undefined' ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== 'undefined' && document ? document.activeElement : null;
  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }
  return activeElement;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}


/***/ },

/***/ 82548
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_passive-listeners-chunk.mjs ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizePassiveListenerOptions: () => (/* binding */ normalizePassiveListenerOptions),
/* harmony export */   supportsPassiveEventListeners: () => (/* binding */ supportsPassiveEventListeners)
/* harmony export */ });
let supportsPassiveEvents;
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== 'undefined') {
    try {
      window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}


/***/ },

/***/ 86186
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_scrolling-chunk.mjs ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RtlScrollAxisType: () => (/* binding */ RtlScrollAxisType),
/* harmony export */   getRtlScrollAxisType: () => (/* binding */ getRtlScrollAxisType),
/* harmony export */   supportsScrollBehavior: () => (/* binding */ supportsScrollBehavior)
/* harmony export */ });
var RtlScrollAxisType = /*#__PURE__*/function (RtlScrollAxisType) {
  RtlScrollAxisType[RtlScrollAxisType["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType[RtlScrollAxisType["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType[RtlScrollAxisType["INVERTED"] = 2] = "INVERTED";
  return RtlScrollAxisType;
}(RtlScrollAxisType || {});
let rtlScrollAxisType;
let scrollBehaviorSupported;
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== 'object' || !document || typeof Element !== 'function' || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if (document.documentElement?.style && 'scrollBehavior' in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== 'object' || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement('div');
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = 'rtl';
    containerStyle.width = '1px';
    containerStyle.overflow = 'auto';
    containerStyle.visibility = 'hidden';
    containerStyle.pointerEvents = 'none';
    containerStyle.position = 'absolute';
    const content = document.createElement('div');
    const contentStyle = content.style;
    contentStyle.width = '2px';
    contentStyle.height = '1px';
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}


/***/ },

/***/ 98508
/*!****************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_platform-chunk.mjs ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Platform: () => (/* binding */ Platform)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 11674);



let hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== 'undefined' && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
let Platform = /*#__PURE__*/(() => {
  class Platform {
    _platformId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID);
    isBrowser = this._platformId ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this._platformId) : typeof document === 'object' && !!document;
    EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT;
    WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
    FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    constructor() {}
    static ɵfac = function Platform_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Platform)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Platform,
      factory: Platform.ɵfac,
      providedIn: 'root'
    });
  }
  return Platform;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 99737
/*!************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_test-environment-chunk.mjs ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _isTestEnvironment: () => (/* binding */ _isTestEnvironment)
/* harmony export */ });
function _isTestEnvironment() {
  return typeof __karma__ !== 'undefined' && !!__karma__ || typeof jasmine !== 'undefined' && !!jasmine || typeof jest !== 'undefined' && !!jest || typeof Mocha !== 'undefined' && !!Mocha;
}


/***/ }

}])
//# sourceMappingURL=7699.js.map