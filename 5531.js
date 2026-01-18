(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[5531],{

/***/ 38438
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_breakpoints-observer-chunk.mjs ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakpointObserver: () => (/* binding */ BreakpointObserver),
/* harmony export */   MediaMatcher: () => (/* binding */ MediaMatcher)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_platform-chunk.mjs */ 98508);
/* harmony import */ var _array_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_array-chunk.mjs */ 61440);






const mediaQueriesForWebkitCompatibility = /*#__PURE__*/new Set();
let mediaQueryStyleNode;
let MediaMatcher = /*#__PURE__*/(() => {
  class MediaMatcher {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.Platform);
    _nonce = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE, {
      optional: true
    });
    _matchMedia;
    constructor() {
      this._matchMedia = this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : noopMatchMedia;
    }
    matchMedia(query) {
      if (this._platform.WEBKIT || this._platform.BLINK) {
        createEmptyStyleRule(query, this._nonce);
      }
      return this._matchMedia(query);
    }
    static ɵfac = function MediaMatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MediaMatcher)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MediaMatcher,
      factory: MediaMatcher.ɵfac,
      providedIn: 'root'
    });
  }
  return MediaMatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function createEmptyStyleRule(query, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement('style');
      if (nonce) {
        mediaQueryStyleNode.setAttribute('nonce', nonce);
      }
      mediaQueryStyleNode.setAttribute('type', 'text/css');
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
function noopMatchMedia(query) {
  return {
    matches: query === 'all' || query === '',
    media: query,
    addListener: () => {},
    removeListener: () => {}
  };
}
let BreakpointObserver = /*#__PURE__*/(() => {
  class BreakpointObserver {
    _mediaMatcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MediaMatcher);
    _zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _queries = new Map();
    _destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    constructor() {}
    ngOnDestroy() {
      this._destroySubject.next();
      this._destroySubject.complete();
    }
    isMatched(value) {
      const queries = splitQueries((0,_array_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.coerceArray)(value));
      return queries.some(mediaQuery => this._registerQuery(mediaQuery).mql.matches);
    }
    observe(value) {
      const queries = splitQueries((0,_array_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.coerceArray)(value));
      const observables = queries.map(query => this._registerQuery(query).observable);
      let stateObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)(observables);
      stateObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.concat)(stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)), stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(0)));
      return stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(breakpointStates => {
        const response = {
          matches: false,
          breakpoints: {}
        };
        breakpointStates.forEach(({
          matches,
          query
        }) => {
          response.matches = response.matches || matches;
          response.breakpoints[query] = matches;
        });
        return response;
      }));
    }
    _registerQuery(query) {
      if (this._queries.has(query)) {
        return this._queries.get(query);
      }
      const mql = this._mediaMatcher.matchMedia(query);
      const queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
        const handler = e => this._zone.run(() => observer.next(e));
        mql.addListener(handler);
        return () => {
          mql.removeListener(handler);
        };
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(mql), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
        matches
      }) => ({
        query,
        matches
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this._destroySubject));
      const output = {
        observable: queryObservable,
        mql
      };
      this._queries.set(query, output);
      return output;
    }
    static ɵfac = function BreakpointObserver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BreakpointObserver)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BreakpointObserver,
      factory: BreakpointObserver.ɵfac,
      providedIn: 'root'
    });
  }
  return BreakpointObserver;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function splitQueries(queries) {
  return queries.map(query => query.split(',')).reduce((a1, a2) => a1.concat(a2)).map(query => query.trim());
}


/***/ },

/***/ 61440
/*!*************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_array-chunk.mjs ***!
  \*************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coerceArray: () => (/* binding */ coerceArray)
/* harmony export */ });
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}


/***/ },

/***/ 87912
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/layout.mjs ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakpointObserver: () => (/* reexport safe */ _breakpoints_observer_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver),
/* harmony export */   Breakpoints: () => (/* binding */ Breakpoints),
/* harmony export */   LayoutModule: () => (/* binding */ LayoutModule),
/* harmony export */   MediaMatcher: () => (/* reexport safe */ _breakpoints_observer_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.MediaMatcher)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _breakpoints_observer_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_breakpoints-observer-chunk.mjs */ 38438);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 11674);








let LayoutModule = /*#__PURE__*/(() => {
  class LayoutModule {
    static ɵfac = function LayoutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LayoutModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LayoutModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  }
  return LayoutModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const Breakpoints = {
  XSmall: '(max-width: 599.98px)',
  Small: '(min-width: 600px) and (max-width: 959.98px)',
  Medium: '(min-width: 960px) and (max-width: 1279.98px)',
  Large: '(min-width: 1280px) and (max-width: 1919.98px)',
  XLarge: '(min-width: 1920px)',
  Handset: '(max-width: 599.98px) and (orientation: portrait), ' + '(max-width: 959.98px) and (orientation: landscape)',
  Tablet: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), ' + '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
  Web: '(min-width: 840px) and (orientation: portrait), ' + '(min-width: 1280px) and (orientation: landscape)',
  HandsetPortrait: '(max-width: 599.98px) and (orientation: portrait)',
  TabletPortrait: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)',
  WebPortrait: '(min-width: 840px) and (orientation: portrait)',
  HandsetLandscape: '(max-width: 959.98px) and (orientation: landscape)',
  TabletLandscape: '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
  WebLandscape: '(min-width: 1280px) and (orientation: landscape)'
};


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


/***/ }

}])
//# sourceMappingURL=5531.js.map