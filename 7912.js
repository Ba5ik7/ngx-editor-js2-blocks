(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[7912],{

/***/ 6427:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/platform-DNDzkVcI.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ Platform)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 85914);




// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
let hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
  hasV8BreakIterator = typeof Intl !== 'undefined' && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
let Platform = /*#__PURE__*/(() => {
  class Platform {
    _platformId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID);
    // We want to use the Angular platform check because if the Document is shimmed
    // without the navigator, the following checks will fail. This is preferred because
    // sometimes the Document may be shimmed without the user's knowledge or intention
    /** Whether the Angular application is being rendered in the browser. */
    isBrowser = this._platformId ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this._platformId) : typeof document === 'object' && !!document;
    /** Whether the current browser is Microsoft Edge. */
    EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    /** Whether the current rendering engine is Microsoft Trident. */
    TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
    /** Whether the current rendering engine is Blink. */
    BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT;
    // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
    // ensure that Webkit runs standalone and is not used as another engine's base.
    /** Whether the current rendering engine is WebKit. */
    WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    /** Whether the current platform is Apple iOS. */
    IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
    // It's difficult to detect the plain Gecko engine, because most of the browsers identify
    // them self as Gecko-like browsers and modify the userAgent's according to that.
    // Since we only cover one explicit Firefox case, we can simply check for Firefox
    // instead of having an unstable check for Gecko.
    /** Whether the current browser is Firefox. */
    FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    /** Whether the current platform is Android. */
    // Trident on mobile adds the android platform to the userAgent to trick detections.
    ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
    // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
    // Safari browser should also use Webkit as its layout engine.
    /** Whether the current browser is Safari. */
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


/***/ }),

/***/ 82195:
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/breakpoints-observer-QutrMj4x.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ BreakpointObserver),
/* harmony export */   M: () => (/* binding */ MediaMatcher)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./platform-DNDzkVcI.mjs */ 6427);
/* harmony import */ var _array_I1yfCXUO_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array-I1yfCXUO.mjs */ 97184);







/** Global registry for all dynamically-created, injected media queries. */
const mediaQueriesForWebkitCompatibility = /*#__PURE__*/new Set();
/** Style tag that holds all of the dynamically-created media queries. */
let mediaQueryStyleNode;
/** A utility for calling matchMedia queries. */
let MediaMatcher = /*#__PURE__*/(() => {
  class MediaMatcher {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_3__.P);
    _nonce = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE, {
      optional: true
    });
    /** The internal matchMedia method to return back a MediaQueryList like object. */
    _matchMedia;
    constructor() {
      this._matchMedia = this._platform.isBrowser && window.matchMedia ?
      // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
      // call it from a different scope.
      window.matchMedia.bind(window) : noopMatchMedia;
    }
    /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     */
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
/**
 * Creates an empty stylesheet that is used to work around browser inconsistencies related to
 * `matchMedia`. At the time of writing, it handles the following cases:
 * 1. On WebKit browsers, a media query has to have at least one rule in order for `matchMedia`
 * to fire. We work around it by declaring a dummy stylesheet with a `@media` declaration.
 * 2. In some cases Blink browsers will stop firing the `matchMedia` listener if none of the rules
 * inside the `@media` match existing elements on the page. We work around it by having one rule
 * targeting the `body`. See https://github.com/angular/components/issues/23546.
 */
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
/** No-op matchMedia replacement for non-browser platforms. */
function noopMatchMedia(query) {
  // Use `as any` here to avoid adding additional necessary properties for
  // the noop matcher.
  return {
    matches: query === 'all' || query === '',
    media: query,
    addListener: () => {},
    removeListener: () => {}
  };
}

/** Utility for checking the matching state of `@media` queries. */
let BreakpointObserver = /*#__PURE__*/(() => {
  class BreakpointObserver {
    _mediaMatcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MediaMatcher);
    _zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    /**  A map of all media queries currently being listened for. */
    _queries = new Map();
    /** A subject for all other observables to takeUntil based on. */
    _destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    constructor() {}
    /** Completes the active subject, signalling to all other observables to complete. */
    ngOnDestroy() {
      this._destroySubject.next();
      this._destroySubject.complete();
    }
    /**
     * Whether one or more media queries match the current viewport size.
     * @param value One or more media queries to check.
     * @returns Whether any of the media queries match.
     */
    isMatched(value) {
      const queries = splitQueries((0,_array_I1yfCXUO_mjs__WEBPACK_IMPORTED_MODULE_4__.c)(value));
      return queries.some(mediaQuery => this._registerQuery(mediaQuery).mql.matches);
    }
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param value One or more media queries to check.
     * @returns A stream of matches for the given queries.
     */
    observe(value) {
      const queries = splitQueries((0,_array_I1yfCXUO_mjs__WEBPACK_IMPORTED_MODULE_4__.c)(value));
      const observables = queries.map(query => this._registerQuery(query).observable);
      let stateObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)(observables);
      // Emit the first state immediately, and then debounce the subsequent emissions.
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
    /** Registers a specific query to be listened for. */
    _registerQuery(query) {
      // Only set up a new MediaQueryList if it is not already being listened for.
      if (this._queries.has(query)) {
        return this._queries.get(query);
      }
      const mql = this._mediaMatcher.matchMedia(query);
      // Create callback for match changes and add it is as a listener.
      const queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
        // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
        // back into the zone because matchMedia is only included in Zone.js by loading the
        // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
        // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
        // patches it.
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
      // Add the MediaQueryList to the set of queries.
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
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 */
function splitQueries(queries) {
  return queries.map(query => query.split(',')).reduce((a1, a2) => a1.concat(a2)).map(query => query.trim());
}


/***/ }),

/***/ 87912:
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/layout.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakpointObserver: () => (/* reexport safe */ _breakpoints_observer_QutrMj4x_mjs__WEBPACK_IMPORTED_MODULE_1__.B),
/* harmony export */   Breakpoints: () => (/* binding */ Breakpoints),
/* harmony export */   LayoutModule: () => (/* binding */ LayoutModule),
/* harmony export */   MediaMatcher: () => (/* reexport safe */ _breakpoints_observer_QutrMj4x_mjs__WEBPACK_IMPORTED_MODULE_1__.M)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _breakpoints_observer_QutrMj4x_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoints-observer-QutrMj4x.mjs */ 82195);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 85914);








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

// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name
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
//# sourceMappingURL=7912.js.map