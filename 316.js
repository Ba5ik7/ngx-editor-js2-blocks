(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[316],{

/***/ 8963
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/common/fesm2022/_platform_location-chunk.mjs ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserPlatformLocation: () => (/* binding */ BrowserPlatformLocation),
/* harmony export */   DomAdapter: () => (/* binding */ DomAdapter),
/* harmony export */   LOCATION_INITIALIZED: () => (/* binding */ LOCATION_INITIALIZED),
/* harmony export */   PlatformLocation: () => (/* binding */ PlatformLocation),
/* harmony export */   getDOM: () => (/* binding */ getDOM),
/* harmony export */   setRootDomAdapter: () => (/* binding */ setRootDomAdapter)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/**
 * @license Angular v21.1.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */



let _DOM = null;
function getDOM() {
  return _DOM;
}
function setRootDomAdapter(adapter) {
  _DOM ??= adapter;
}
class DomAdapter {}
let PlatformLocation = /*#__PURE__*/(() => {
  class PlatformLocation {
    historyGo(relativePosition) {
      throw new Error(ngDevMode ? 'Not implemented' : '');
    }
    static ɵfac = function PlatformLocation_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PlatformLocation)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PlatformLocation,
      factory: () => (() => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(BrowserPlatformLocation))(),
      providedIn: 'platform'
    });
  }
  return PlatformLocation;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const LOCATION_INITIALIZED = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'Location Initialized' : '');
let BrowserPlatformLocation = /*#__PURE__*/(() => {
  class BrowserPlatformLocation extends PlatformLocation {
    _location;
    _history;
    _doc = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    constructor() {
      super();
      this._location = window.location;
      this._history = window.history;
    }
    getBaseHrefFromDOM() {
      return getDOM().getBaseHref(this._doc);
    }
    onPopState(fn) {
      const window = getDOM().getGlobalEventTarget(this._doc, 'window');
      window.addEventListener('popstate', fn, false);
      return () => window.removeEventListener('popstate', fn);
    }
    onHashChange(fn) {
      const window = getDOM().getGlobalEventTarget(this._doc, 'window');
      window.addEventListener('hashchange', fn, false);
      return () => window.removeEventListener('hashchange', fn);
    }
    get href() {
      return this._location.href;
    }
    get protocol() {
      return this._location.protocol;
    }
    get hostname() {
      return this._location.hostname;
    }
    get port() {
      return this._location.port;
    }
    get pathname() {
      return this._location.pathname;
    }
    get search() {
      return this._location.search;
    }
    get hash() {
      return this._location.hash;
    }
    set pathname(newPath) {
      this._location.pathname = newPath;
    }
    pushState(state, title, url) {
      this._history.pushState(state, title, url);
    }
    replaceState(state, title, url) {
      this._history.replaceState(state, title, url);
    }
    forward() {
      this._history.forward();
    }
    back() {
      this._history.back();
    }
    historyGo(relativePosition = 0) {
      this._history.go(relativePosition);
    }
    getState() {
      return this._history.state;
    }
    static ɵfac = function BrowserPlatformLocation_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BrowserPlatformLocation)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BrowserPlatformLocation,
      factory: () => (() => new BrowserPlatformLocation())(),
      providedIn: 'platform'
    });
  }
  return BrowserPlatformLocation;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 9044
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/common/fesm2022/_platform_navigation-chunk.mjs ***!
  \******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRECOMMIT_HANDLER_SUPPORTED: () => (/* binding */ PRECOMMIT_HANDLER_SUPPORTED),
/* harmony export */   PlatformNavigation: () => (/* binding */ PlatformNavigation)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/**
 * @license Angular v21.1.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */



const PRECOMMIT_HANDLER_SUPPORTED = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('', {
  factory: () => {
    return typeof window !== 'undefined' && typeof window.NavigationPrecommitController !== 'undefined';
  }
});
let PlatformNavigation = /*#__PURE__*/(() => {
  class PlatformNavigation {
    static ɵfac = function PlatformNavigation_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PlatformNavigation)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PlatformNavigation,
      factory: () => (() => window.navigation)(),
      providedIn: 'platform'
    });
  }
  return PlatformNavigation;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 60316
/*!**********************************************************!*\
  !*** ./node_modules/@angular/common/fesm2022/common.mjs ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_BASE_HREF: () => (/* reexport safe */ _location_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.APP_BASE_HREF),
/* harmony export */   AsyncPipe: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe),
/* harmony export */   BrowserPlatformLocation: () => (/* reexport safe */ _platform_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.BrowserPlatformLocation),
/* harmony export */   CommonModule: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.CommonModule),
/* harmony export */   CurrencyPipe: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.CurrencyPipe),
/* harmony export */   DATE_PIPE_DEFAULT_OPTIONS: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.DATE_PIPE_DEFAULT_OPTIONS),
/* harmony export */   DATE_PIPE_DEFAULT_TIMEZONE: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.DATE_PIPE_DEFAULT_TIMEZONE),
/* harmony export */   DOCUMENT: () => (/* reexport safe */ _angular_core__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT),
/* harmony export */   DatePipe: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.DatePipe),
/* harmony export */   DecimalPipe: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe),
/* harmony export */   FormStyle: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.FormStyle),
/* harmony export */   FormatWidth: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.FormatWidth),
/* harmony export */   HashLocationStrategy: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.HashLocationStrategy),
/* harmony export */   I18nPluralPipe: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.I18nPluralPipe),
/* harmony export */   I18nSelectPipe: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.I18nSelectPipe),
/* harmony export */   IMAGE_CONFIG: () => (/* reexport safe */ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵIMAGE_CONFIG"]),
/* harmony export */   IMAGE_LOADER: () => (/* binding */ IMAGE_LOADER),
/* harmony export */   JsonPipe: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.JsonPipe),
/* harmony export */   KeyValuePipe: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.KeyValuePipe),
/* harmony export */   LOCATION_INITIALIZED: () => (/* reexport safe */ _platform_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.LOCATION_INITIALIZED),
/* harmony export */   Location: () => (/* reexport safe */ _location_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.Location),
/* harmony export */   LocationStrategy: () => (/* reexport safe */ _location_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.LocationStrategy),
/* harmony export */   LowerCasePipe: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.LowerCasePipe),
/* harmony export */   NgClass: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.NgClass),
/* harmony export */   NgComponentOutlet: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.NgComponentOutlet),
/* harmony export */   NgFor: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.NgForOf),
/* harmony export */   NgForOf: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.NgForOf),
/* harmony export */   NgForOfContext: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.NgForOfContext),
/* harmony export */   NgIf: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.NgIf),
/* harmony export */   NgIfContext: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.NgIfContext),
/* harmony export */   NgLocaleLocalization: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.NgLocaleLocalization),
/* harmony export */   NgLocalization: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.NgLocalization),
/* harmony export */   NgOptimizedImage: () => (/* binding */ NgOptimizedImage),
/* harmony export */   NgPlural: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.NgPlural),
/* harmony export */   NgPluralCase: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.NgPluralCase),
/* harmony export */   NgStyle: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.NgStyle),
/* harmony export */   NgSwitch: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.NgSwitch),
/* harmony export */   NgSwitchCase: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.NgSwitchCase),
/* harmony export */   NgSwitchDefault: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.NgSwitchDefault),
/* harmony export */   NgTemplateOutlet: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet),
/* harmony export */   NumberFormatStyle: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.NumberFormatStyle),
/* harmony export */   NumberSymbol: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.NumberSymbol),
/* harmony export */   PRECONNECT_CHECK_BLOCKLIST: () => (/* binding */ PRECONNECT_CHECK_BLOCKLIST),
/* harmony export */   PathLocationStrategy: () => (/* reexport safe */ _location_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.PathLocationStrategy),
/* harmony export */   PercentPipe: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.PercentPipe),
/* harmony export */   PlatformLocation: () => (/* reexport safe */ _platform_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.PlatformLocation),
/* harmony export */   PlatformNavigation: () => (/* reexport safe */ _platform_navigation_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.PlatformNavigation),
/* harmony export */   Plural: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.Plural),
/* harmony export */   SlicePipe: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.SlicePipe),
/* harmony export */   TitleCasePipe: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe),
/* harmony export */   TranslationWidth: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.TranslationWidth),
/* harmony export */   UpperCasePipe: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.UpperCasePipe),
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   ViewportScroller: () => (/* binding */ ViewportScroller),
/* harmony export */   WeekDay: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.WeekDay),
/* harmony export */   XhrFactory: () => (/* reexport safe */ _xhr_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.XhrFactory),
/* harmony export */   formatCurrency: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.formatCurrency),
/* harmony export */   formatDate: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.formatDate),
/* harmony export */   formatNumber: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.formatNumber),
/* harmony export */   formatPercent: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.formatPercent),
/* harmony export */   getCurrencySymbol: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getCurrencySymbol),
/* harmony export */   getLocaleCurrencyCode: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocaleCurrencyCode),
/* harmony export */   getLocaleCurrencyName: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocaleCurrencyName),
/* harmony export */   getLocaleCurrencySymbol: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocaleCurrencySymbol),
/* harmony export */   getLocaleDateFormat: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocaleDateFormat),
/* harmony export */   getLocaleDateTimeFormat: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocaleDateTimeFormat),
/* harmony export */   getLocaleDayNames: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocaleDayNames),
/* harmony export */   getLocaleDayPeriods: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocaleDayPeriods),
/* harmony export */   getLocaleDirection: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocaleDirection),
/* harmony export */   getLocaleEraNames: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocaleEraNames),
/* harmony export */   getLocaleExtraDayPeriodRules: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocaleExtraDayPeriodRules),
/* harmony export */   getLocaleExtraDayPeriods: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocaleExtraDayPeriods),
/* harmony export */   getLocaleFirstDayOfWeek: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocaleFirstDayOfWeek),
/* harmony export */   getLocaleId: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocaleId),
/* harmony export */   getLocaleMonthNames: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocaleMonthNames),
/* harmony export */   getLocaleNumberFormat: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocaleNumberFormat),
/* harmony export */   getLocaleNumberSymbol: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocaleNumberSymbol),
/* harmony export */   getLocalePluralCase: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocalePluralCase),
/* harmony export */   getLocaleTimeFormat: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocaleTimeFormat),
/* harmony export */   getLocaleWeekEndRange: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocaleWeekEndRange),
/* harmony export */   getNumberOfCurrencyDigits: () => (/* reexport safe */ _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.getNumberOfCurrencyDigits),
/* harmony export */   isPlatformBrowser: () => (/* binding */ isPlatformBrowser),
/* harmony export */   isPlatformServer: () => (/* binding */ isPlatformServer),
/* harmony export */   provideCloudflareLoader: () => (/* binding */ provideCloudflareLoader),
/* harmony export */   provideCloudinaryLoader: () => (/* binding */ provideCloudinaryLoader),
/* harmony export */   provideImageKitLoader: () => (/* binding */ provideImageKitLoader),
/* harmony export */   provideImgixLoader: () => (/* binding */ provideImgixLoader),
/* harmony export */   provideNetlifyLoader: () => (/* binding */ provideNetlifyLoader),
/* harmony export */   registerLocaleData: () => (/* binding */ registerLocaleData),
/* harmony export */   "ɵDomAdapter": () => (/* reexport safe */ _platform_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.DomAdapter),
/* harmony export */   "ɵNavigationAdapterForLocation": () => (/* binding */ NavigationAdapterForLocation),
/* harmony export */   "ɵNullViewportScroller": () => (/* binding */ NullViewportScroller),
/* harmony export */   "ɵPLATFORM_BROWSER_ID": () => (/* binding */ PLATFORM_BROWSER_ID),
/* harmony export */   "ɵPLATFORM_SERVER_ID": () => (/* binding */ PLATFORM_SERVER_ID),
/* harmony export */   "ɵPRECOMMIT_HANDLER_SUPPORTED": () => (/* reexport safe */ _platform_navigation_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.PRECOMMIT_HANDLER_SUPPORTED),
/* harmony export */   "ɵgetDOM": () => (/* reexport safe */ _platform_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.getDOM),
/* harmony export */   "ɵnormalizeQueryParams": () => (/* reexport safe */ _location_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.normalizeQueryParams),
/* harmony export */   "ɵparseCookieValue": () => (/* reexport safe */ _xhr_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.parseCookieValue),
/* harmony export */   "ɵsetRootDomAdapter": () => (/* reexport safe */ _platform_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.setRootDomAdapter)
/* harmony export */ });
/* harmony import */ var _Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _common_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_common_module-chunk.mjs */ 79748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _platform_navigation_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_platform_navigation-chunk.mjs */ 9044);
/* harmony import */ var _xhr_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_xhr-chunk.mjs */ 97516);
/* harmony import */ var _location_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_location-chunk.mjs */ 66223);
/* harmony import */ var _platform_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_platform_location-chunk.mjs */ 8963);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 44866);

/**
 * @license Angular v21.1.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */












let NavigationAdapterForLocation = /*#__PURE__*/(() => {
  class NavigationAdapterForLocation extends _location_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.Location {
    navigation = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_platform_navigation_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.PlatformNavigation);
    destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.DestroyRef);
    constructor() {
      super((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.LocationStrategy));
      this.registerNavigationListeners();
    }
    registerNavigationListeners() {
      const currentEntryChangeListener = () => {
        this._notifyUrlChangeListeners(this.path(true), this.getState());
      };
      this.navigation.addEventListener('currententrychange', currentEntryChangeListener);
      this.destroyRef.onDestroy(() => {
        this.navigation.removeEventListener('currententrychange', currentEntryChangeListener);
      });
    }
    getState() {
      return this.navigation.currentEntry?.getState();
    }
    replaceState(path, query = '', state = null) {
      const url = this.prepareExternalUrl(path + (0,_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.normalizeQueryParams)(query));
      this.navigation.navigate(url, {
        state,
        history: 'replace'
      });
    }
    go(path, query = '', state = null) {
      const url = this.prepareExternalUrl(path + (0,_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.normalizeQueryParams)(query));
      this.navigation.navigate(url, {
        state,
        history: 'push'
      });
    }
    back() {
      this.navigation.back();
    }
    forward() {
      this.navigation.forward();
    }
    onUrlChange(fn) {
      this._urlChangeListeners.push(fn);
      return () => {
        const fnIndex = this._urlChangeListeners.indexOf(fn);
        this._urlChangeListeners.splice(fnIndex, 1);
      };
    }
    static ɵfac = function NavigationAdapterForLocation_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavigationAdapterForLocation)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: NavigationAdapterForLocation,
      factory: NavigationAdapterForLocation.ɵfac
    });
  }
  return NavigationAdapterForLocation;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function registerLocaleData(data, localeId, extraData) {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵregisterLocaleData"])(data, localeId, extraData);
}
const PLATFORM_BROWSER_ID = 'browser';
const PLATFORM_SERVER_ID = 'server';
function isPlatformBrowser(platformId) {
  return platformId === PLATFORM_BROWSER_ID;
}
function isPlatformServer(platformId) {
  return platformId === PLATFORM_SERVER_ID;
}
const VERSION = /* @__PURE__ */new _angular_core__WEBPACK_IMPORTED_MODULE_2__.Version('21.1.1');
let ViewportScroller = /*#__PURE__*/(() => {
  class ViewportScroller {
    static ɵprov = /* @__PURE__ */
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
      token: ViewportScroller,
      providedIn: 'root',
      factory: () => typeof ngServerMode !== 'undefined' && ngServerMode ? new NullViewportScroller() : new BrowserViewportScroller((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), window)
    });
  }
  return ViewportScroller;
})();
class BrowserViewportScroller {
  document;
  window;
  offset = () => [0, 0];
  constructor(document, window) {
    this.document = document;
    this.window = window;
  }
  setOffset(offset) {
    if (Array.isArray(offset)) {
      this.offset = () => offset;
    } else {
      this.offset = offset;
    }
  }
  getScrollPosition() {
    return [this.window.scrollX, this.window.scrollY];
  }
  scrollToPosition(position, options) {
    this.window.scrollTo({
      ...options,
      left: position[0],
      top: position[1]
    });
  }
  scrollToAnchor(target, options) {
    const elSelected = findAnchorFromDocument(this.document, target);
    if (elSelected) {
      this.scrollToElement(elSelected, options);
      elSelected.focus();
    }
  }
  setHistoryScrollRestoration(scrollRestoration) {
    try {
      this.window.history.scrollRestoration = scrollRestoration;
    } catch {
      console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵformatRuntimeError"])(2400, ngDevMode && 'Failed to set `window.history.scrollRestoration`. ' + 'This may occur when:\n' + '• The script is running inside a sandboxed iframe\n' + '• The window is partially navigated or inactive\n' + '• The script is executed in an untrusted or special context (e.g., test runners, browser extensions, or content previews)\n' + 'Scroll position may not be preserved across navigation.'));
    }
  }
  scrollToElement(el, options) {
    const rect = el.getBoundingClientRect();
    const left = rect.left + this.window.pageXOffset;
    const top = rect.top + this.window.pageYOffset;
    const offset = this.offset();
    this.window.scrollTo({
      ...options,
      left: left - offset[0],
      top: top - offset[1]
    });
  }
}
function findAnchorFromDocument(document, target) {
  const documentResult = document.getElementById(target) || document.getElementsByName(target)[0];
  if (documentResult) {
    return documentResult;
  }
  if (typeof document.createTreeWalker === 'function' && document.body && typeof document.body.attachShadow === 'function') {
    const treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
    let currentNode = treeWalker.currentNode;
    while (currentNode) {
      const shadowRoot = currentNode.shadowRoot;
      if (shadowRoot) {
        const result = shadowRoot.getElementById(target) || shadowRoot.querySelector(`[name="${target}"]`);
        if (result) {
          return result;
        }
      }
      currentNode = treeWalker.nextNode();
    }
  }
  return null;
}
class NullViewportScroller {
  setOffset(offset) {}
  getScrollPosition() {
    return [0, 0];
  }
  scrollToPosition(position) {}
  scrollToAnchor(anchor) {}
  setHistoryScrollRestoration(scrollRestoration) {}
}
const PLACEHOLDER_QUALITY = '20';
function getUrl(src, win) {
  return isAbsoluteUrl(src) ? new URL(src) : new URL(src, win.location.href);
}
function isAbsoluteUrl(src) {
  return /^https?:\/\//.test(src);
}
function extractHostname(url) {
  return isAbsoluteUrl(url) ? new URL(url).hostname : url;
}
function isValidPath(path) {
  const isString = typeof path === 'string';
  if (!isString || path.trim() === '') {
    return false;
  }
  try {
    const url = new URL(path);
    return true;
  } catch {
    return false;
  }
}
function normalizePath(path) {
  return path.endsWith('/') ? path.slice(0, -1) : path;
}
function normalizeSrc(src) {
  return src.startsWith('/') ? src.slice(1) : src;
}
const noopImageLoader = config => config.src;
const IMAGE_LOADER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'ImageLoader' : '', {
  factory: () => noopImageLoader
});
function createImageLoader(buildUrlFn, exampleUrls) {
  return function provideImageLoader(path) {
    if (!isValidPath(path)) {
      throwInvalidPathError(path, exampleUrls || []);
    }
    path = normalizePath(path);
    const loaderFn = config => {
      if (isAbsoluteUrl(config.src)) {
        throwUnexpectedAbsoluteUrlError(path, config.src);
      }
      return buildUrlFn(path, {
        ...config,
        src: normalizeSrc(config.src)
      });
    };
    const providers = [{
      provide: IMAGE_LOADER,
      useValue: loaderFn
    }];
    return providers;
  };
}
function throwInvalidPathError(path, exampleUrls) {
  throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2959, ngDevMode && `Image loader has detected an invalid path (\`${path}\`). ` + `To fix this, supply a path using one of the following formats: ${exampleUrls.join(' or ')}`);
}
function throwUnexpectedAbsoluteUrlError(path, url) {
  throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2959, ngDevMode && `Image loader has detected a \`<img>\` tag with an invalid \`ngSrc\` attribute: ${url}. ` + `This image loader expects \`ngSrc\` to be a relative URL - ` + `however the provided value is an absolute URL. ` + `To fix this, provide \`ngSrc\` as a path relative to the base URL ` + `configured for this loader (\`${path}\`).`);
}
function normalizeLoaderTransform(transform, separator) {
  if (typeof transform === 'string') {
    return transform;
  }
  return Object.entries(transform).map(([key, value]) => `${key}${separator}${value}`).join(',');
}
const provideCloudflareLoader = /*#__PURE__*/createImageLoader(createCloudflareUrl, ngDevMode ? ['https://<ZONE>/cdn-cgi/image/<OPTIONS>/<SOURCE-IMAGE>'] : undefined);
function createCloudflareUrl(path, config) {
  let params = `format=auto`;
  if (config.width) {
    params += `,width=${config.width}`;
  }
  if (config.isPlaceholder) {
    params += `,quality=${PLACEHOLDER_QUALITY}`;
  }
  if (config.loaderParams?.['transform']) {
    const transformStr = normalizeLoaderTransform(config.loaderParams['transform'], '=');
    params += `,${transformStr}`;
  }
  return `${path}/cdn-cgi/image/${params}/${config.src}`;
}
const cloudinaryLoaderInfo = {
  name: 'Cloudinary',
  testUrl: isCloudinaryUrl
};
const CLOUDINARY_LOADER_REGEX = /https?\:\/\/[^\/]+\.cloudinary\.com\/.+/;
function isCloudinaryUrl(url) {
  return CLOUDINARY_LOADER_REGEX.test(url);
}
const provideCloudinaryLoader = /*#__PURE__*/createImageLoader(createCloudinaryUrl, ngDevMode ? ['https://res.cloudinary.com/mysite', 'https://mysite.cloudinary.com', 'https://subdomain.mysite.com'] : undefined);
function createCloudinaryUrl(path, config) {
  const quality = config.isPlaceholder ? 'q_auto:low' : 'q_auto';
  let params = `f_auto,${quality}`;
  if (config.width) {
    params += `,w_${config.width}`;
  }
  if (config.loaderParams?.['rounded']) {
    params += `,r_max`;
  }
  if (config.loaderParams?.['transform']) {
    const transformStr = normalizeLoaderTransform(config.loaderParams['transform'], '_');
    params += `,${transformStr}`;
  }
  return `${path}/image/upload/${params}/${config.src}`;
}
const imageKitLoaderInfo = {
  name: 'ImageKit',
  testUrl: isImageKitUrl
};
const IMAGE_KIT_LOADER_REGEX = /https?\:\/\/[^\/]+\.imagekit\.io\/.+/;
function isImageKitUrl(url) {
  return IMAGE_KIT_LOADER_REGEX.test(url);
}
const provideImageKitLoader = /*#__PURE__*/createImageLoader(createImagekitUrl, ngDevMode ? ['https://ik.imagekit.io/mysite', 'https://subdomain.mysite.com'] : undefined);
function createImagekitUrl(path, config) {
  const {
    src,
    width
  } = config;
  const params = [];
  if (width) {
    params.push(`w-${width}`);
  }
  if (config.isPlaceholder) {
    params.push(`q-${PLACEHOLDER_QUALITY}`);
  }
  if (config.loaderParams?.['transform']) {
    const transformStr = normalizeLoaderTransform(config.loaderParams['transform'], '-');
    params.push(transformStr);
  }
  const urlSegments = params.length ? [path, `tr:${params.join(',')}`, src] : [path, src];
  const url = new URL(urlSegments.join('/'));
  return url.href;
}
const imgixLoaderInfo = {
  name: 'Imgix',
  testUrl: isImgixUrl
};
const IMGIX_LOADER_REGEX = /https?\:\/\/[^\/]+\.imgix\.net\/.+/;
function isImgixUrl(url) {
  return IMGIX_LOADER_REGEX.test(url);
}
const provideImgixLoader = /*#__PURE__*/createImageLoader(createImgixUrl, ngDevMode ? ['https://somepath.imgix.net/'] : undefined);
function createImgixUrl(path, config) {
  const params = [];
  params.push('auto=format');
  if (config.width) {
    params.push(`w=${config.width}`);
  }
  if (config.isPlaceholder) {
    params.push(`q=${PLACEHOLDER_QUALITY}`);
  }
  if (config.loaderParams?.['transform']) {
    const transform = normalizeLoaderTransform(config.loaderParams['transform'], '=').split(',');
    params.push(...transform);
  }
  const url = new URL(`${path}/${config.src}`);
  url.search = params.join('&');
  return url.href;
}
const netlifyLoaderInfo = {
  name: 'Netlify',
  testUrl: isNetlifyUrl
};
const NETLIFY_LOADER_REGEX = /https?\:\/\/[^\/]+\.netlify\.app\/.+/;
function isNetlifyUrl(url) {
  return NETLIFY_LOADER_REGEX.test(url);
}
function provideNetlifyLoader(path) {
  if (path && !isValidPath(path)) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2959, ngDevMode && `Image loader has detected an invalid path (\`${path}\`). ` + `To fix this, supply either the full URL to the Netlify site, or leave it empty to use the current site.`);
  }
  if (path) {
    const url = new URL(path);
    path = url.origin;
  }
  const loaderFn = config => {
    return createNetlifyUrl(config, path);
  };
  const providers = [{
    provide: IMAGE_LOADER,
    useValue: loaderFn
  }];
  return providers;
}
const validParams = /*#__PURE__*/new Map([['height', 'h'], ['fit', 'fit'], ['quality', 'q'], ['q', 'q'], ['position', 'position']]);
function createNetlifyUrl(config, path) {
  const url = new URL(path ?? 'https://a/');
  url.pathname = '/.netlify/images';
  if (!isAbsoluteUrl(config.src) && !config.src.startsWith('/')) {
    config.src = '/' + config.src;
  }
  url.searchParams.set('url', config.src);
  if (config.width) {
    url.searchParams.set('w', config.width.toString());
  }
  const configQuality = config.loaderParams?.['quality'] ?? config.loaderParams?.['q'];
  if (config.isPlaceholder && !configQuality) {
    url.searchParams.set('q', PLACEHOLDER_QUALITY);
  }
  for (const [param, value] of Object.entries(config.loaderParams ?? {})) {
    if (validParams.has(param)) {
      url.searchParams.set(validParams.get(param), value.toString());
    } else {
      if (ngDevMode) {
        console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵformatRuntimeError"])(2959, `The Netlify image loader has detected an \`<img>\` tag with the unsupported attribute "\`${param}\`".`));
      }
    }
  }
  return url.hostname === 'a' ? url.href.replace(url.origin, '') : url.href;
}
function imgDirectiveDetails(ngSrc, includeNgSrc = true) {
  const ngSrcInfo = includeNgSrc ? `(activated on an <img> element with the \`ngSrc="${ngSrc}"\`) ` : '';
  return `The NgOptimizedImage directive ${ngSrcInfo}has detected that`;
}
function assertDevMode(checkName) {
  if (!ngDevMode) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2958, `Unexpected invocation of the ${checkName} in the prod mode. ` + `Please make sure that the prod mode is enabled for production builds.`);
  }
}
let LCPImageObserver = /*#__PURE__*/(() => {
  class LCPImageObserver {
    images = new Map();
    window = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT).defaultView;
    observer = null;
    constructor() {
      assertDevMode('LCP checker');
      if ((typeof ngServerMode === 'undefined' || !ngServerMode) && typeof PerformanceObserver !== 'undefined') {
        this.observer = this.initPerformanceObserver();
      }
    }
    initPerformanceObserver() {
      const observer = new PerformanceObserver(entryList => {
        const entries = entryList.getEntries();
        if (entries.length === 0) return;
        const lcpElement = entries[entries.length - 1];
        const imgSrc = lcpElement.element?.src ?? '';
        if (imgSrc.startsWith('data:') || imgSrc.startsWith('blob:')) return;
        const img = this.images.get(imgSrc);
        if (!img) return;
        if (!img.priority && !img.alreadyWarnedPriority) {
          img.alreadyWarnedPriority = true;
          logMissingPriorityError(imgSrc);
        }
        if (img.modified && !img.alreadyWarnedModified) {
          img.alreadyWarnedModified = true;
          logModifiedWarning(imgSrc);
        }
      });
      observer.observe({
        type: 'largest-contentful-paint',
        buffered: true
      });
      return observer;
    }
    registerImage(rewrittenSrc, originalNgSrc, isPriority) {
      if (!this.observer) return;
      const newObservedImageState = {
        priority: isPriority,
        modified: false,
        alreadyWarnedModified: false,
        alreadyWarnedPriority: false
      };
      this.images.set(getUrl(rewrittenSrc, this.window).href, newObservedImageState);
    }
    unregisterImage(rewrittenSrc) {
      if (!this.observer) return;
      this.images.delete(getUrl(rewrittenSrc, this.window).href);
    }
    updateImage(originalSrc, newSrc) {
      if (!this.observer) return;
      const originalUrl = getUrl(originalSrc, this.window).href;
      const img = this.images.get(originalUrl);
      if (img) {
        img.modified = true;
        this.images.set(getUrl(newSrc, this.window).href, img);
        this.images.delete(originalUrl);
      }
    }
    ngOnDestroy() {
      if (!this.observer) return;
      this.observer.disconnect();
      this.images.clear();
    }
    static ɵfac = function LCPImageObserver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LCPImageObserver)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: LCPImageObserver,
      factory: LCPImageObserver.ɵfac,
      providedIn: 'root'
    });
  }
  return LCPImageObserver;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function logMissingPriorityError(ngSrc) {
  const directiveDetails = imgDirectiveDetails(ngSrc);
  console.error((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵformatRuntimeError"])(2955, `${directiveDetails} this image is the Largest Contentful Paint (LCP) ` + `element but was not marked "priority". This image should be marked ` + `"priority" in order to prioritize its loading. ` + `To fix this, add the "priority" attribute.`));
}
function logModifiedWarning(ngSrc) {
  const directiveDetails = imgDirectiveDetails(ngSrc);
  console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵformatRuntimeError"])(2964, `${directiveDetails} this image is the Largest Contentful Paint (LCP) ` + `element and has had its "ngSrc" attribute modified. This can cause ` + `slower loading performance. It is recommended not to modify the "ngSrc" ` + `property on any image which could be the LCP element.`));
}
const INTERNAL_PRECONNECT_CHECK_BLOCKLIST = /*#__PURE__*/new Set(['localhost', '127.0.0.1', '0.0.0.0', '[::1]']);
const PRECONNECT_CHECK_BLOCKLIST = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'PRECONNECT_CHECK_BLOCKLIST' : '');
let PreconnectLinkChecker = /*#__PURE__*/(() => {
  class PreconnectLinkChecker {
    document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT);
    preconnectLinks = null;
    alreadySeen = new Set();
    window = this.document.defaultView;
    blocklist = new Set(INTERNAL_PRECONNECT_CHECK_BLOCKLIST);
    constructor() {
      assertDevMode('preconnect link checker');
      const blocklist = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(PRECONNECT_CHECK_BLOCKLIST, {
        optional: true
      });
      if (blocklist) {
        this.populateBlocklist(blocklist);
      }
    }
    populateBlocklist(origins) {
      if (Array.isArray(origins)) {
        deepForEach(origins, origin => {
          this.blocklist.add(extractHostname(origin));
        });
      } else {
        this.blocklist.add(extractHostname(origins));
      }
    }
    assertPreconnect(rewrittenSrc, originalNgSrc) {
      if (typeof ngServerMode !== 'undefined' && ngServerMode) return;
      const imgUrl = getUrl(rewrittenSrc, this.window);
      if (this.blocklist.has(imgUrl.hostname) || this.alreadySeen.has(imgUrl.origin)) return;
      this.alreadySeen.add(imgUrl.origin);
      this.preconnectLinks ??= this.queryPreconnectLinks();
      if (!this.preconnectLinks.has(imgUrl.origin)) {
        console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵformatRuntimeError"])(2956, `${imgDirectiveDetails(originalNgSrc)} there is no preconnect tag present for this ` + `image. Preconnecting to the origin(s) that serve priority images ensures that these ` + `images are delivered as soon as possible. To fix this, please add the following ` + `element into the <head> of the document:\n` + `  <link rel="preconnect" href="${imgUrl.origin}">`));
      }
    }
    queryPreconnectLinks() {
      const preconnectUrls = new Set();
      const links = this.document.querySelectorAll('link[rel=preconnect]');
      for (const link of links) {
        const url = getUrl(link.href, this.window);
        preconnectUrls.add(url.origin);
      }
      return preconnectUrls;
    }
    ngOnDestroy() {
      this.preconnectLinks?.clear();
      this.alreadySeen.clear();
    }
    static ɵfac = function PreconnectLinkChecker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PreconnectLinkChecker)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: PreconnectLinkChecker,
      factory: PreconnectLinkChecker.ɵfac,
      providedIn: 'root'
    });
  }
  return PreconnectLinkChecker;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function deepForEach(input, fn) {
  for (let value of input) {
    Array.isArray(value) ? deepForEach(value, fn) : fn(value);
  }
}
const DEFAULT_PRELOADED_IMAGES_LIMIT = 5;
const PRELOADED_IMAGES = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'NG_OPTIMIZED_PRELOADED_IMAGES' : '', {
  factory: () => new Set()
});
let PreloadLinkCreator = /*#__PURE__*/(() => {
  class PreloadLinkCreator {
    preloadedImages = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(PRELOADED_IMAGES);
    document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT);
    errorShown = false;
    createPreloadLinkTag(renderer, src, srcset, sizes) {
      if (ngDevMode && !this.errorShown && this.preloadedImages.size >= DEFAULT_PRELOADED_IMAGES_LIMIT) {
        this.errorShown = true;
        console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵformatRuntimeError"])(2961, `The \`NgOptimizedImage\` directive has detected that more than ` + `${DEFAULT_PRELOADED_IMAGES_LIMIT} images were marked as priority. ` + `This might negatively affect an overall performance of the page. ` + `To fix this, remove the "priority" attribute from images with less priority.`));
      }
      if (this.preloadedImages.has(src)) {
        return;
      }
      this.preloadedImages.add(src);
      const preload = renderer.createElement('link');
      renderer.setAttribute(preload, 'as', 'image');
      renderer.setAttribute(preload, 'href', src);
      renderer.setAttribute(preload, 'rel', 'preload');
      renderer.setAttribute(preload, 'fetchpriority', 'high');
      if (sizes) {
        renderer.setAttribute(preload, 'imageSizes', sizes);
      }
      if (srcset) {
        renderer.setAttribute(preload, 'imageSrcset', srcset);
      }
      renderer.appendChild(this.document.head, preload);
    }
    static ɵfac = function PreloadLinkCreator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PreloadLinkCreator)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: PreloadLinkCreator,
      factory: PreloadLinkCreator.ɵfac,
      providedIn: 'root'
    });
  }
  return PreloadLinkCreator;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const BASE64_IMG_MAX_LENGTH_IN_ERROR = 50;
const VALID_WIDTH_DESCRIPTOR_SRCSET = /^((\s*\d+w\s*(,|$)){1,})$/;
const VALID_DENSITY_DESCRIPTOR_SRCSET = /^((\s*\d+(\.\d+)?x\s*(,|$)){1,})$/;
const ABSOLUTE_SRCSET_DENSITY_CAP = 3;
const RECOMMENDED_SRCSET_DENSITY_CAP = 2;
const DENSITY_SRCSET_MULTIPLIERS = [1, 2];
const VIEWPORT_BREAKPOINT_CUTOFF = 640;
const ASPECT_RATIO_TOLERANCE = 0.1;
const OVERSIZED_IMAGE_TOLERANCE = 1000;
const FIXED_SRCSET_WIDTH_LIMIT = 1920;
const FIXED_SRCSET_HEIGHT_LIMIT = 1080;
const PLACEHOLDER_DIMENSION_LIMIT = 1000;
const DATA_URL_WARN_LIMIT = 4000;
const DATA_URL_ERROR_LIMIT = 10000;
const BUILT_IN_LOADERS = [imgixLoaderInfo, imageKitLoaderInfo, cloudinaryLoaderInfo, netlifyLoaderInfo];
const PRIORITY_COUNT_THRESHOLD = 10;
let IMGS_WITH_PRIORITY_ATTR_COUNT = 0;
let NgOptimizedImage = /*#__PURE__*/(() => {
  class NgOptimizedImage {
    imageLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(IMAGE_LOADER);
    config = processConfig((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵIMAGE_CONFIG"]));
    renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2);
    imgElement = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef).nativeElement;
    injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector);
    destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.DestroyRef);
    lcpObserver;
    _renderedSrc = null;
    ngSrc;
    ngSrcset;
    sizes;
    width;
    height;
    decoding;
    loading;
    priority = false;
    loaderParams;
    disableOptimizedSrcset = false;
    fill = false;
    placeholder;
    placeholderConfig;
    src;
    srcset;
    constructor() {
      if (ngDevMode) {
        this.lcpObserver = this.injector.get(LCPImageObserver);
        this.destroyRef.onDestroy(() => {
          if (!this.priority && this._renderedSrc !== null) {
            this.lcpObserver.unregisterImage(this._renderedSrc);
          }
        });
      }
    }
    ngOnInit() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵperformanceMarkFeature"])('NgOptimizedImage');
      if (ngDevMode) {
        const ngZone = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone);
        assertNonEmptyInput(this, 'ngSrc', this.ngSrc);
        assertValidNgSrcset(this, this.ngSrcset);
        assertNoConflictingSrc(this);
        if (this.ngSrcset) {
          assertNoConflictingSrcset(this);
        }
        assertNotBase64Image(this);
        assertNotBlobUrl(this);
        if (this.fill) {
          assertEmptyWidthAndHeight(this);
          ngZone.runOutsideAngular(() => assertNonZeroRenderedHeight(this, this.imgElement, this.renderer, this.destroyRef));
        } else {
          assertNonEmptyWidthAndHeight(this);
          if (this.height !== undefined) {
            assertGreaterThanZero(this, this.height, 'height');
          }
          if (this.width !== undefined) {
            assertGreaterThanZero(this, this.width, 'width');
          }
          ngZone.runOutsideAngular(() => assertNoImageDistortion(this, this.imgElement, this.renderer, this.destroyRef));
        }
        assertValidLoadingInput(this);
        assertValidDecodingInput(this);
        if (!this.ngSrcset) {
          assertNoComplexSizes(this);
        }
        assertValidPlaceholder(this, this.imageLoader);
        assertNotMissingBuiltInLoader(this.ngSrc, this.imageLoader);
        assertNoNgSrcsetWithoutLoader(this, this.imageLoader);
        assertNoLoaderParamsWithoutLoader(this, this.imageLoader);
        ngZone.runOutsideAngular(() => {
          this.lcpObserver.registerImage(this.getRewrittenSrc(), this.ngSrc, this.priority);
        });
        if (this.priority) {
          const checker = this.injector.get(PreconnectLinkChecker);
          checker.assertPreconnect(this.getRewrittenSrc(), this.ngSrc);
          if (typeof ngServerMode !== 'undefined' && !ngServerMode) {
            const applicationRef = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ApplicationRef);
            assetPriorityCountBelowThreshold(applicationRef);
          }
        }
      }
      if (this.placeholder) {
        this.removePlaceholderOnLoad(this.imgElement);
      }
      this.setHostAttributes();
    }
    setHostAttributes() {
      if (this.fill) {
        this.sizes ||= '100vw';
      } else {
        this.setHostAttribute('width', this.width.toString());
        this.setHostAttribute('height', this.height.toString());
      }
      this.setHostAttribute('loading', this.getLoadingBehavior());
      this.setHostAttribute('fetchpriority', this.getFetchPriority());
      this.setHostAttribute('decoding', this.getDecoding());
      this.setHostAttribute('ng-img', 'true');
      const rewrittenSrcset = this.updateSrcAndSrcset();
      if (this.sizes) {
        if (this.getLoadingBehavior() === 'lazy') {
          this.setHostAttribute('sizes', 'auto, ' + this.sizes);
        } else {
          this.setHostAttribute('sizes', this.sizes);
        }
      } else {
        if (this.ngSrcset && VALID_WIDTH_DESCRIPTOR_SRCSET.test(this.ngSrcset) && this.getLoadingBehavior() === 'lazy') {
          this.setHostAttribute('sizes', 'auto, 100vw');
        }
      }
      if (typeof ngServerMode !== 'undefined' && ngServerMode && this.priority) {
        const preloadLinkCreator = this.injector.get(PreloadLinkCreator);
        preloadLinkCreator.createPreloadLinkTag(this.renderer, this.getRewrittenSrc(), rewrittenSrcset, this.sizes);
      }
    }
    ngOnChanges(changes) {
      if (ngDevMode) {
        assertNoPostInitInputChange(this, changes, ['ngSrcset', 'width', 'height', 'priority', 'fill', 'loading', 'sizes', 'loaderParams', 'disableOptimizedSrcset']);
      }
      if (changes['ngSrc'] && !changes['ngSrc'].isFirstChange()) {
        const oldSrc = this._renderedSrc;
        this.updateSrcAndSrcset(true);
        if (ngDevMode) {
          const newSrc = this._renderedSrc;
          if (oldSrc && newSrc && oldSrc !== newSrc) {
            const ngZone = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone);
            ngZone.runOutsideAngular(() => {
              this.lcpObserver.updateImage(oldSrc, newSrc);
            });
          }
        }
      }
      if (ngDevMode && changes['placeholder']?.currentValue && typeof ngServerMode !== 'undefined' && !ngServerMode) {
        assertPlaceholderDimensions(this, this.imgElement);
      }
    }
    callImageLoader(configWithoutCustomParams) {
      let augmentedConfig = configWithoutCustomParams;
      if (this.loaderParams) {
        augmentedConfig.loaderParams = this.loaderParams;
      }
      return this.imageLoader(augmentedConfig);
    }
    getLoadingBehavior() {
      if (!this.priority && this.loading !== undefined) {
        return this.loading;
      }
      return this.priority ? 'eager' : 'lazy';
    }
    getFetchPriority() {
      return this.priority ? 'high' : 'auto';
    }
    getDecoding() {
      if (this.priority) {
        return 'sync';
      }
      return this.decoding ?? 'auto';
    }
    getRewrittenSrc() {
      if (!this._renderedSrc) {
        const imgConfig = {
          src: this.ngSrc
        };
        this._renderedSrc = this.callImageLoader(imgConfig);
      }
      return this._renderedSrc;
    }
    getRewrittenSrcset() {
      const widthSrcSet = VALID_WIDTH_DESCRIPTOR_SRCSET.test(this.ngSrcset);
      const finalSrcs = this.ngSrcset.split(',').filter(src => src !== '').map(srcStr => {
        srcStr = srcStr.trim();
        const width = widthSrcSet ? parseFloat(srcStr) : parseFloat(srcStr) * this.width;
        return `${this.callImageLoader({
          src: this.ngSrc,
          width
        })} ${srcStr}`;
      });
      return finalSrcs.join(', ');
    }
    getAutomaticSrcset() {
      if (this.sizes) {
        return this.getResponsiveSrcset();
      } else {
        return this.getFixedSrcset();
      }
    }
    getResponsiveSrcset() {
      const {
        breakpoints
      } = this.config;
      let filteredBreakpoints = breakpoints;
      if (this.sizes?.trim() === '100vw') {
        filteredBreakpoints = breakpoints.filter(bp => bp >= VIEWPORT_BREAKPOINT_CUTOFF);
      }
      const finalSrcs = filteredBreakpoints.map(bp => `${this.callImageLoader({
        src: this.ngSrc,
        width: bp
      })} ${bp}w`);
      return finalSrcs.join(', ');
    }
    updateSrcAndSrcset(forceSrcRecalc = false) {
      if (forceSrcRecalc) {
        this._renderedSrc = null;
      }
      const rewrittenSrc = this.getRewrittenSrc();
      this.setHostAttribute('src', rewrittenSrc);
      let rewrittenSrcset = undefined;
      if (this.ngSrcset) {
        rewrittenSrcset = this.getRewrittenSrcset();
      } else if (this.shouldGenerateAutomaticSrcset()) {
        rewrittenSrcset = this.getAutomaticSrcset();
      }
      if (rewrittenSrcset) {
        this.setHostAttribute('srcset', rewrittenSrcset);
      }
      return rewrittenSrcset;
    }
    getFixedSrcset() {
      const finalSrcs = DENSITY_SRCSET_MULTIPLIERS.map(multiplier => `${this.callImageLoader({
        src: this.ngSrc,
        width: this.width * multiplier
      })} ${multiplier}x`);
      return finalSrcs.join(', ');
    }
    shouldGenerateAutomaticSrcset() {
      let oversizedImage = false;
      if (!this.sizes) {
        oversizedImage = this.width > FIXED_SRCSET_WIDTH_LIMIT || this.height > FIXED_SRCSET_HEIGHT_LIMIT;
      }
      return !this.disableOptimizedSrcset && !this.srcset && this.imageLoader !== noopImageLoader && !oversizedImage;
    }
    generatePlaceholder(placeholderInput) {
      const {
        placeholderResolution
      } = this.config;
      if (placeholderInput === true) {
        return `url(${this.callImageLoader({
          src: this.ngSrc,
          width: placeholderResolution,
          isPlaceholder: true
        })})`;
      } else if (typeof placeholderInput === 'string') {
        return `url(${placeholderInput})`;
      }
      return null;
    }
    shouldBlurPlaceholder(placeholderConfig) {
      if (!placeholderConfig || !placeholderConfig.hasOwnProperty('blur')) {
        return true;
      }
      return Boolean(placeholderConfig.blur);
    }
    removePlaceholderOnLoad(img) {
      const callback = () => {
        const changeDetectorRef = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
        removeLoadListenerFn();
        removeErrorListenerFn();
        this.placeholder = false;
        changeDetectorRef.markForCheck();
      };
      const removeLoadListenerFn = this.renderer.listen(img, 'load', callback);
      const removeErrorListenerFn = this.renderer.listen(img, 'error', callback);
      this.destroyRef.onDestroy(() => {
        removeLoadListenerFn();
        removeErrorListenerFn();
      });
      callOnLoadIfImageIsLoaded(img, callback);
    }
    setHostAttribute(name, value) {
      this.renderer.setAttribute(this.imgElement, name, value);
    }
    static ɵfac = function NgOptimizedImage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgOptimizedImage)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: NgOptimizedImage,
      selectors: [["img", "ngSrc", ""]],
      hostVars: 18,
      hostBindings: function NgOptimizedImage_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("position", ctx.fill ? "absolute" : null)("width", ctx.fill ? "100%" : null)("height", ctx.fill ? "100%" : null)("inset", ctx.fill ? "0" : null)("background-size", ctx.placeholder ? "cover" : null)("background-position", ctx.placeholder ? "50% 50%" : null)("background-repeat", ctx.placeholder ? "no-repeat" : null)("background-image", ctx.placeholder ? ctx.generatePlaceholder(ctx.placeholder) : null)("filter", ctx.placeholder && ctx.shouldBlurPlaceholder(ctx.placeholderConfig) ? "blur(15px)" : null);
        }
      },
      inputs: {
        ngSrc: [2, "ngSrc", "ngSrc", unwrapSafeUrl],
        ngSrcset: "ngSrcset",
        sizes: "sizes",
        width: [2, "width", "width", _angular_core__WEBPACK_IMPORTED_MODULE_2__.numberAttribute],
        height: [2, "height", "height", _angular_core__WEBPACK_IMPORTED_MODULE_2__.numberAttribute],
        decoding: "decoding",
        loading: "loading",
        priority: [2, "priority", "priority", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
        loaderParams: "loaderParams",
        disableOptimizedSrcset: [2, "disableOptimizedSrcset", "disableOptimizedSrcset", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
        fill: [2, "fill", "fill", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
        placeholder: [2, "placeholder", "placeholder", booleanOrUrlAttribute],
        placeholderConfig: "placeholderConfig",
        src: "src",
        srcset: "srcset"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
    });
  }
  return NgOptimizedImage;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function processConfig(config) {
  let sortedBreakpoints = {};
  if (config.breakpoints) {
    sortedBreakpoints.breakpoints = config.breakpoints.sort((a, b) => a - b);
  }
  return Object.assign({}, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵIMAGE_CONFIG_DEFAULTS"], config, sortedBreakpoints);
}
function assertNoConflictingSrc(dir) {
  if (dir.src) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2950, `${imgDirectiveDetails(dir.ngSrc)} both \`src\` and \`ngSrc\` have been set. ` + `Supplying both of these attributes breaks lazy loading. ` + `The NgOptimizedImage directive sets \`src\` itself based on the value of \`ngSrc\`. ` + `To fix this, please remove the \`src\` attribute.`);
  }
}
function assertNoConflictingSrcset(dir) {
  if (dir.srcset) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2951, `${imgDirectiveDetails(dir.ngSrc)} both \`srcset\` and \`ngSrcset\` have been set. ` + `Supplying both of these attributes breaks lazy loading. ` + `The NgOptimizedImage directive sets \`srcset\` itself based on the value of ` + `\`ngSrcset\`. To fix this, please remove the \`srcset\` attribute.`);
  }
}
function assertNotBase64Image(dir) {
  let ngSrc = dir.ngSrc.trim();
  if (ngSrc.startsWith('data:')) {
    if (ngSrc.length > BASE64_IMG_MAX_LENGTH_IN_ERROR) {
      ngSrc = ngSrc.substring(0, BASE64_IMG_MAX_LENGTH_IN_ERROR) + '...';
    }
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2952, `${imgDirectiveDetails(dir.ngSrc, false)} \`ngSrc\` is a Base64-encoded string ` + `(${ngSrc}). NgOptimizedImage does not support Base64-encoded strings. ` + `To fix this, disable the NgOptimizedImage directive for this element ` + `by removing \`ngSrc\` and using a standard \`src\` attribute instead.`);
  }
}
function assertNoComplexSizes(dir) {
  let sizes = dir.sizes;
  if (sizes?.match(/((\)|,)\s|^)\d+px/)) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2952, `${imgDirectiveDetails(dir.ngSrc, false)} \`sizes\` was set to a string including ` + `pixel values. For automatic \`srcset\` generation, \`sizes\` must only include responsive ` + `values, such as \`sizes="50vw"\` or \`sizes="(min-width: 768px) 50vw, 100vw"\`. ` + `To fix this, modify the \`sizes\` attribute, or provide your own \`ngSrcset\` value directly.`);
  }
}
function assertValidPlaceholder(dir, imageLoader) {
  assertNoPlaceholderConfigWithoutPlaceholder(dir);
  assertNoRelativePlaceholderWithoutLoader(dir, imageLoader);
  assertNoOversizedDataUrl(dir);
}
function assertNoPlaceholderConfigWithoutPlaceholder(dir) {
  if (dir.placeholderConfig && !dir.placeholder) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2952, `${imgDirectiveDetails(dir.ngSrc, false)} \`placeholderConfig\` options were provided for an ` + `image that does not use the \`placeholder\` attribute, and will have no effect.`);
  }
}
function assertNoRelativePlaceholderWithoutLoader(dir, imageLoader) {
  if (dir.placeholder === true && imageLoader === noopImageLoader) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2963, `${imgDirectiveDetails(dir.ngSrc)} the \`placeholder\` attribute is set to true but ` + `no image loader is configured (i.e. the default one is being used), ` + `which would result in the same image being used for the primary image and its placeholder. ` + `To fix this, provide a loader or remove the \`placeholder\` attribute from the image.`);
  }
}
function assertNoOversizedDataUrl(dir) {
  if (dir.placeholder && typeof dir.placeholder === 'string' && dir.placeholder.startsWith('data:')) {
    if (dir.placeholder.length > DATA_URL_ERROR_LIMIT) {
      throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2965, `${imgDirectiveDetails(dir.ngSrc)} the \`placeholder\` attribute is set to a data URL which is longer ` + `than ${DATA_URL_ERROR_LIMIT} characters. This is strongly discouraged, as large inline placeholders ` + `directly increase the bundle size of Angular and hurt page load performance. To fix this, generate ` + `a smaller data URL placeholder.`);
    }
    if (dir.placeholder.length > DATA_URL_WARN_LIMIT) {
      console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵformatRuntimeError"])(2965, `${imgDirectiveDetails(dir.ngSrc)} the \`placeholder\` attribute is set to a data URL which is longer ` + `than ${DATA_URL_WARN_LIMIT} characters. This is discouraged, as large inline placeholders ` + `directly increase the bundle size of Angular and hurt page load performance. For better loading performance, ` + `generate a smaller data URL placeholder.`));
    }
  }
}
function assertNotBlobUrl(dir) {
  const ngSrc = dir.ngSrc.trim();
  if (ngSrc.startsWith('blob:')) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2952, `${imgDirectiveDetails(dir.ngSrc)} \`ngSrc\` was set to a blob URL (${ngSrc}). ` + `Blob URLs are not supported by the NgOptimizedImage directive. ` + `To fix this, disable the NgOptimizedImage directive for this element ` + `by removing \`ngSrc\` and using a regular \`src\` attribute instead.`);
  }
}
function assertNonEmptyInput(dir, name, value) {
  const isString = typeof value === 'string';
  const isEmptyString = isString && value.trim() === '';
  if (!isString || isEmptyString) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2952, `${imgDirectiveDetails(dir.ngSrc)} \`${name}\` has an invalid value ` + `(\`${value}\`). To fix this, change the value to a non-empty string.`);
  }
}
function assertValidNgSrcset(dir, value) {
  if (value == null) return;
  assertNonEmptyInput(dir, 'ngSrcset', value);
  const stringVal = value;
  const isValidWidthDescriptor = VALID_WIDTH_DESCRIPTOR_SRCSET.test(stringVal);
  const isValidDensityDescriptor = VALID_DENSITY_DESCRIPTOR_SRCSET.test(stringVal);
  if (isValidDensityDescriptor) {
    assertUnderDensityCap(dir, stringVal);
  }
  const isValidSrcset = isValidWidthDescriptor || isValidDensityDescriptor;
  if (!isValidSrcset) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2952, `${imgDirectiveDetails(dir.ngSrc)} \`ngSrcset\` has an invalid value (\`${value}\`). ` + `To fix this, supply \`ngSrcset\` using a comma-separated list of one or more width ` + `descriptors (e.g. "100w, 200w") or density descriptors (e.g. "1x, 2x").`);
  }
}
function assertUnderDensityCap(dir, value) {
  const underDensityCap = value.split(',').every(num => num === '' || parseFloat(num) <= ABSOLUTE_SRCSET_DENSITY_CAP);
  if (!underDensityCap) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2952, `${imgDirectiveDetails(dir.ngSrc)} the \`ngSrcset\` contains an unsupported image density:` + `\`${value}\`. NgOptimizedImage generally recommends a max image density of ` + `${RECOMMENDED_SRCSET_DENSITY_CAP}x but supports image densities up to ` + `${ABSOLUTE_SRCSET_DENSITY_CAP}x. The human eye cannot distinguish between image densities ` + `greater than ${RECOMMENDED_SRCSET_DENSITY_CAP}x - which makes them unnecessary for ` + `most use cases. Images that will be pinch-zoomed are typically the primary use case for ` + `${ABSOLUTE_SRCSET_DENSITY_CAP}x images. Please remove the high density descriptor and try again.`);
  }
}
function postInitInputChangeError(dir, inputName) {
  let reason;
  if (inputName === 'width' || inputName === 'height') {
    reason = `Changing \`${inputName}\` may result in different attribute value ` + `applied to the underlying image element and cause layout shifts on a page.`;
  } else {
    reason = `Changing the \`${inputName}\` would have no effect on the underlying ` + `image element, because the resource loading has already occurred.`;
  }
  return new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2953, `${imgDirectiveDetails(dir.ngSrc)} \`${inputName}\` was updated after initialization. ` + `The NgOptimizedImage directive will not react to this input change. ${reason} ` + `To fix this, either switch \`${inputName}\` to a static value ` + `or wrap the image element in an @if that is gated on the necessary value.`);
}
function assertNoPostInitInputChange(dir, changes, inputs) {
  inputs.forEach(input => {
    const isUpdated = changes.hasOwnProperty(input);
    if (isUpdated && !changes[input].isFirstChange()) {
      if (input === 'ngSrc') {
        dir = {
          ngSrc: changes[input].previousValue
        };
      }
      throw postInitInputChangeError(dir, input);
    }
  });
}
function assertGreaterThanZero(dir, inputValue, inputName) {
  const validNumber = typeof inputValue === 'number' && inputValue > 0;
  const validString = typeof inputValue === 'string' && /^\d+$/.test(inputValue.trim()) && parseInt(inputValue) > 0;
  if (!validNumber && !validString) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2952, `${imgDirectiveDetails(dir.ngSrc)} \`${inputName}\` has an invalid value. ` + `To fix this, provide \`${inputName}\` as a number greater than 0.`);
  }
}
function assertNoImageDistortion(dir, img, renderer, destroyRef) {
  const callback = () => {
    removeLoadListenerFn();
    removeErrorListenerFn();
    const computedStyle = window.getComputedStyle(img);
    let renderedWidth = parseFloat(computedStyle.getPropertyValue('width'));
    let renderedHeight = parseFloat(computedStyle.getPropertyValue('height'));
    const boxSizing = computedStyle.getPropertyValue('box-sizing');
    if (boxSizing === 'border-box') {
      const paddingTop = computedStyle.getPropertyValue('padding-top');
      const paddingRight = computedStyle.getPropertyValue('padding-right');
      const paddingBottom = computedStyle.getPropertyValue('padding-bottom');
      const paddingLeft = computedStyle.getPropertyValue('padding-left');
      renderedWidth -= parseFloat(paddingRight) + parseFloat(paddingLeft);
      renderedHeight -= parseFloat(paddingTop) + parseFloat(paddingBottom);
    }
    const renderedAspectRatio = renderedWidth / renderedHeight;
    const nonZeroRenderedDimensions = renderedWidth !== 0 && renderedHeight !== 0;
    const intrinsicWidth = img.naturalWidth;
    const intrinsicHeight = img.naturalHeight;
    const intrinsicAspectRatio = intrinsicWidth / intrinsicHeight;
    const suppliedWidth = dir.width;
    const suppliedHeight = dir.height;
    const suppliedAspectRatio = suppliedWidth / suppliedHeight;
    const inaccurateDimensions = Math.abs(suppliedAspectRatio - intrinsicAspectRatio) > ASPECT_RATIO_TOLERANCE;
    const stylingDistortion = nonZeroRenderedDimensions && Math.abs(intrinsicAspectRatio - renderedAspectRatio) > ASPECT_RATIO_TOLERANCE;
    if (inaccurateDimensions) {
      console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵformatRuntimeError"])(2952, `${imgDirectiveDetails(dir.ngSrc)} the aspect ratio of the image does not match ` + `the aspect ratio indicated by the width and height attributes. ` + `\nIntrinsic image size: ${intrinsicWidth}w x ${intrinsicHeight}h ` + `(aspect-ratio: ${round(intrinsicAspectRatio)}). \nSupplied width and height attributes: ` + `${suppliedWidth}w x ${suppliedHeight}h (aspect-ratio: ${round(suppliedAspectRatio)}). ` + `\nTo fix this, update the width and height attributes.`));
    } else if (stylingDistortion) {
      console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵformatRuntimeError"])(2952, `${imgDirectiveDetails(dir.ngSrc)} the aspect ratio of the rendered image ` + `does not match the image's intrinsic aspect ratio. ` + `\nIntrinsic image size: ${intrinsicWidth}w x ${intrinsicHeight}h ` + `(aspect-ratio: ${round(intrinsicAspectRatio)}). \nRendered image size: ` + `${renderedWidth}w x ${renderedHeight}h (aspect-ratio: ` + `${round(renderedAspectRatio)}). \nThis issue can occur if "width" and "height" ` + `attributes are added to an image without updating the corresponding ` + `image styling. To fix this, adjust image styling. In most cases, ` + `adding "height: auto" or "width: auto" to the image styling will fix ` + `this issue.`));
    } else if (!dir.ngSrcset && nonZeroRenderedDimensions) {
      const recommendedWidth = RECOMMENDED_SRCSET_DENSITY_CAP * renderedWidth;
      const recommendedHeight = RECOMMENDED_SRCSET_DENSITY_CAP * renderedHeight;
      const oversizedWidth = intrinsicWidth - recommendedWidth >= OVERSIZED_IMAGE_TOLERANCE;
      const oversizedHeight = intrinsicHeight - recommendedHeight >= OVERSIZED_IMAGE_TOLERANCE;
      if (oversizedWidth || oversizedHeight) {
        console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵformatRuntimeError"])(2960, `${imgDirectiveDetails(dir.ngSrc)} the intrinsic image is significantly ` + `larger than necessary. ` + `\nRendered image size: ${renderedWidth}w x ${renderedHeight}h. ` + `\nIntrinsic image size: ${intrinsicWidth}w x ${intrinsicHeight}h. ` + `\nRecommended intrinsic image size: ${recommendedWidth}w x ${recommendedHeight}h. ` + `\nNote: Recommended intrinsic image size is calculated assuming a maximum DPR of ` + `${RECOMMENDED_SRCSET_DENSITY_CAP}. To improve loading time, resize the image ` + `or consider using the "ngSrcset" and "sizes" attributes.`));
      }
    }
  };
  const removeLoadListenerFn = renderer.listen(img, 'load', callback);
  const removeErrorListenerFn = renderer.listen(img, 'error', () => {
    removeLoadListenerFn();
    removeErrorListenerFn();
  });
  destroyRef.onDestroy(() => {
    removeLoadListenerFn();
    removeErrorListenerFn();
  });
  callOnLoadIfImageIsLoaded(img, callback);
}
function assertNonEmptyWidthAndHeight(dir) {
  let missingAttributes = [];
  if (dir.width === undefined) missingAttributes.push('width');
  if (dir.height === undefined) missingAttributes.push('height');
  if (missingAttributes.length > 0) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2954, `${imgDirectiveDetails(dir.ngSrc)} these required attributes ` + `are missing: ${missingAttributes.map(attr => `"${attr}"`).join(', ')}. ` + `Including "width" and "height" attributes will prevent image-related layout shifts. ` + `To fix this, include "width" and "height" attributes on the image tag or turn on ` + `"fill" mode with the \`fill\` attribute.`);
  }
}
function assertEmptyWidthAndHeight(dir) {
  if (dir.width || dir.height) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2952, `${imgDirectiveDetails(dir.ngSrc)} the attributes \`height\` and/or \`width\` are present ` + `along with the \`fill\` attribute. Because \`fill\` mode causes an image to fill its containing ` + `element, the size attributes have no effect and should be removed.`);
  }
}
function assertNonZeroRenderedHeight(dir, img, renderer, destroyRef) {
  const callback = () => {
    removeLoadListenerFn();
    removeErrorListenerFn();
    const renderedHeight = img.clientHeight;
    if (dir.fill && renderedHeight === 0) {
      console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵformatRuntimeError"])(2952, `${imgDirectiveDetails(dir.ngSrc)} the height of the fill-mode image is zero. ` + `This is likely because the containing element does not have the CSS 'position' ` + `property set to one of the following: "relative", "fixed", or "absolute". ` + `To fix this problem, make sure the container element has the CSS 'position' ` + `property defined and the height of the element is not zero.`));
    }
  };
  const removeLoadListenerFn = renderer.listen(img, 'load', callback);
  const removeErrorListenerFn = renderer.listen(img, 'error', () => {
    removeLoadListenerFn();
    removeErrorListenerFn();
  });
  destroyRef.onDestroy(() => {
    removeLoadListenerFn();
    removeErrorListenerFn();
  });
  callOnLoadIfImageIsLoaded(img, callback);
}
function assertValidLoadingInput(dir) {
  if (dir.loading && dir.priority) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2952, `${imgDirectiveDetails(dir.ngSrc)} the \`loading\` attribute ` + `was used on an image that was marked "priority". ` + `Setting \`loading\` on priority images is not allowed ` + `because these images will always be eagerly loaded. ` + `To fix this, remove the “loading” attribute from the priority image.`);
  }
  const validInputs = ['auto', 'eager', 'lazy'];
  if (typeof dir.loading === 'string' && !validInputs.includes(dir.loading)) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2952, `${imgDirectiveDetails(dir.ngSrc)} the \`loading\` attribute ` + `has an invalid value (\`${dir.loading}\`). ` + `To fix this, provide a valid value ("lazy", "eager", or "auto").`);
  }
}
function assertValidDecodingInput(dir) {
  const validInputs = ['sync', 'async', 'auto'];
  if (typeof dir.decoding === 'string' && !validInputs.includes(dir.decoding)) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](2952, `${imgDirectiveDetails(dir.ngSrc)} the \`decoding\` attribute ` + `has an invalid value (\`${dir.decoding}\`). ` + `To fix this, provide a valid value ("sync", "async", or "auto").`);
  }
}
function assertNotMissingBuiltInLoader(ngSrc, imageLoader) {
  if (imageLoader === noopImageLoader) {
    let builtInLoaderName = '';
    for (const loader of BUILT_IN_LOADERS) {
      if (loader.testUrl(ngSrc)) {
        builtInLoaderName = loader.name;
        break;
      }
    }
    if (builtInLoaderName) {
      console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵformatRuntimeError"])(2962, `NgOptimizedImage: It looks like your images may be hosted on the ` + `${builtInLoaderName} CDN, but your app is not using Angular's ` + `built-in loader for that CDN. We recommend switching to use ` + `the built-in by calling \`provide${builtInLoaderName}Loader()\` ` + `in your \`providers\` and passing it your instance's base URL. ` + `If you don't want to use the built-in loader, define a custom ` + `loader function using IMAGE_LOADER to silence this warning.`));
    }
  }
}
function assertNoNgSrcsetWithoutLoader(dir, imageLoader) {
  if (dir.ngSrcset && imageLoader === noopImageLoader) {
    console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵformatRuntimeError"])(2963, `${imgDirectiveDetails(dir.ngSrc)} the \`ngSrcset\` attribute is present but ` + `no image loader is configured (i.e. the default one is being used), ` + `which would result in the same image being used for all configured sizes. ` + `To fix this, provide a loader or remove the \`ngSrcset\` attribute from the image.`));
  }
}
function assertNoLoaderParamsWithoutLoader(dir, imageLoader) {
  if (dir.loaderParams && imageLoader === noopImageLoader) {
    console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵformatRuntimeError"])(2963, `${imgDirectiveDetails(dir.ngSrc)} the \`loaderParams\` attribute is present but ` + `no image loader is configured (i.e. the default one is being used), ` + `which means that the loaderParams data will not be consumed and will not affect the URL. ` + `To fix this, provide a custom loader or remove the \`loaderParams\` attribute from the image.`));
  }
}
function assetPriorityCountBelowThreshold(_x) {
  return _assetPriorityCountBelowThreshold.apply(this, arguments);
}
function _assetPriorityCountBelowThreshold() {
  _assetPriorityCountBelowThreshold = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (appRef) {
    if (IMGS_WITH_PRIORITY_ATTR_COUNT === 0) {
      IMGS_WITH_PRIORITY_ATTR_COUNT++;
      yield appRef.whenStable();
      if (IMGS_WITH_PRIORITY_ATTR_COUNT > PRIORITY_COUNT_THRESHOLD) {
        console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵformatRuntimeError"])(2966, `NgOptimizedImage: The "priority" attribute is set to true more than ${PRIORITY_COUNT_THRESHOLD} times (${IMGS_WITH_PRIORITY_ATTR_COUNT} times). ` + `Marking too many images as "high" priority can hurt your application's LCP (https://web.dev/lcp). ` + `"Priority" should only be set on the image expected to be the page's LCP element.`));
      }
    } else {
      IMGS_WITH_PRIORITY_ATTR_COUNT++;
    }
  });
  return _assetPriorityCountBelowThreshold.apply(this, arguments);
}
function assertPlaceholderDimensions(dir, imgElement) {
  const computedStyle = window.getComputedStyle(imgElement);
  let renderedWidth = parseFloat(computedStyle.getPropertyValue('width'));
  let renderedHeight = parseFloat(computedStyle.getPropertyValue('height'));
  if (renderedWidth > PLACEHOLDER_DIMENSION_LIMIT || renderedHeight > PLACEHOLDER_DIMENSION_LIMIT) {
    console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵformatRuntimeError"])(2967, `${imgDirectiveDetails(dir.ngSrc)} it uses a placeholder image, but at least one ` + `of the dimensions attribute (height or width) exceeds the limit of ${PLACEHOLDER_DIMENSION_LIMIT}px. ` + `To fix this, use a smaller image as a placeholder.`));
  }
}
function callOnLoadIfImageIsLoaded(img, callback) {
  if (img.complete && img.naturalWidth) {
    callback();
  }
}
function round(input) {
  return Number.isInteger(input) ? input : input.toFixed(2);
}
function unwrapSafeUrl(value) {
  if (typeof value === 'string') {
    return value;
  }
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵunwrapSafeValue"])(value);
}
function booleanOrUrlAttribute(value) {
  if (typeof value === 'string' && value !== 'true' && value !== 'false' && value !== '') {
    return value;
  }
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute)(value);
}


/***/ },

/***/ 66223
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/common/fesm2022/_location-chunk.mjs ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_BASE_HREF: () => (/* binding */ APP_BASE_HREF),
/* harmony export */   Location: () => (/* binding */ Location),
/* harmony export */   LocationStrategy: () => (/* binding */ LocationStrategy),
/* harmony export */   PathLocationStrategy: () => (/* binding */ PathLocationStrategy),
/* harmony export */   joinWithSlash: () => (/* binding */ joinWithSlash),
/* harmony export */   normalizeQueryParams: () => (/* binding */ normalizeQueryParams)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _platform_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_platform_location-chunk.mjs */ 8963);
/**
 * @license Angular v21.1.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */





function joinWithSlash(start, end) {
  if (!start) return end;
  if (!end) return start;
  if (start.endsWith('/')) {
    return end.startsWith('/') ? start + end.slice(1) : start + end;
  }
  return end.startsWith('/') ? start + end : `${start}/${end}`;
}
function stripTrailingSlash(url) {
  const pathEndIdx = url.search(/#|\?|$/);
  return url[pathEndIdx - 1] === '/' ? url.slice(0, pathEndIdx - 1) + url.slice(pathEndIdx) : url;
}
function normalizeQueryParams(params) {
  return params && params[0] !== '?' ? `?${params}` : params;
}
let LocationStrategy = /*#__PURE__*/(() => {
  class LocationStrategy {
    historyGo(relativePosition) {
      throw new Error(ngDevMode ? 'Not implemented' : '');
    }
    static ɵfac = function LocationStrategy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LocationStrategy)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LocationStrategy,
      factory: () => (() => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(PathLocationStrategy))(),
      providedIn: 'root'
    });
  }
  return LocationStrategy;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const APP_BASE_HREF = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'appBaseHref' : '');
let PathLocationStrategy = /*#__PURE__*/(() => {
  class PathLocationStrategy extends LocationStrategy {
    _platformLocation;
    _baseHref;
    _removeListenerFns = [];
    constructor(_platformLocation, href) {
      super();
      this._platformLocation = _platformLocation;
      this._baseHref = href ?? this._platformLocation.getBaseHrefFromDOM() ?? (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT).location?.origin ?? '';
    }
    ngOnDestroy() {
      while (this._removeListenerFns.length) {
        this._removeListenerFns.pop()();
      }
    }
    onPopState(fn) {
      this._removeListenerFns.push(this._platformLocation.onPopState(fn), this._platformLocation.onHashChange(fn));
    }
    getBaseHref() {
      return this._baseHref;
    }
    prepareExternalUrl(internal) {
      return joinWithSlash(this._baseHref, internal);
    }
    path(includeHash = false) {
      const pathname = this._platformLocation.pathname + normalizeQueryParams(this._platformLocation.search);
      const hash = this._platformLocation.hash;
      return hash && includeHash ? `${pathname}${hash}` : pathname;
    }
    pushState(state, title, url, queryParams) {
      const externalUrl = this.prepareExternalUrl(url + normalizeQueryParams(queryParams));
      this._platformLocation.pushState(state, title, externalUrl);
    }
    replaceState(state, title, url, queryParams) {
      const externalUrl = this.prepareExternalUrl(url + normalizeQueryParams(queryParams));
      this._platformLocation.replaceState(state, title, externalUrl);
    }
    forward() {
      this._platformLocation.forward();
    }
    back() {
      this._platformLocation.back();
    }
    getState() {
      return this._platformLocation.getState();
    }
    historyGo(relativePosition = 0) {
      this._platformLocation.historyGo?.(relativePosition);
    }
    static ɵfac = function PathLocationStrategy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PathLocationStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_platform_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.PlatformLocation), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](APP_BASE_HREF, 8));
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PathLocationStrategy,
      factory: PathLocationStrategy.ɵfac,
      providedIn: 'root'
    });
  }
  return PathLocationStrategy;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let Location = /*#__PURE__*/(() => {
  class Location {
    _subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    _basePath;
    _locationStrategy;
    _urlChangeListeners = [];
    _urlChangeSubscription = null;
    constructor(locationStrategy) {
      this._locationStrategy = locationStrategy;
      const baseHref = this._locationStrategy.getBaseHref();
      this._basePath = _stripOrigin(stripTrailingSlash(_stripIndexHtml(baseHref)));
      this._locationStrategy.onPopState(ev => {
        this._subject.next({
          'url': this.path(true),
          'pop': true,
          'state': ev.state,
          'type': ev.type
        });
      });
    }
    ngOnDestroy() {
      this._urlChangeSubscription?.unsubscribe();
      this._urlChangeListeners = [];
    }
    path(includeHash = false) {
      return this.normalize(this._locationStrategy.path(includeHash));
    }
    getState() {
      return this._locationStrategy.getState();
    }
    isCurrentPathEqualTo(path, query = '') {
      return this.path() == this.normalize(path + normalizeQueryParams(query));
    }
    normalize(url) {
      return Location.stripTrailingSlash(_stripBasePath(this._basePath, _stripIndexHtml(url)));
    }
    prepareExternalUrl(url) {
      if (url && url[0] !== '/') {
        url = '/' + url;
      }
      return this._locationStrategy.prepareExternalUrl(url);
    }
    go(path, query = '', state = null) {
      this._locationStrategy.pushState(state, '', path, query);
      this._notifyUrlChangeListeners(this.prepareExternalUrl(path + normalizeQueryParams(query)), state);
    }
    replaceState(path, query = '', state = null) {
      this._locationStrategy.replaceState(state, '', path, query);
      this._notifyUrlChangeListeners(this.prepareExternalUrl(path + normalizeQueryParams(query)), state);
    }
    forward() {
      this._locationStrategy.forward();
    }
    back() {
      this._locationStrategy.back();
    }
    historyGo(relativePosition = 0) {
      this._locationStrategy.historyGo?.(relativePosition);
    }
    onUrlChange(fn) {
      this._urlChangeListeners.push(fn);
      this._urlChangeSubscription ??= this.subscribe(v => {
        this._notifyUrlChangeListeners(v.url, v.state);
      });
      return () => {
        const fnIndex = this._urlChangeListeners.indexOf(fn);
        this._urlChangeListeners.splice(fnIndex, 1);
        if (this._urlChangeListeners.length === 0) {
          this._urlChangeSubscription?.unsubscribe();
          this._urlChangeSubscription = null;
        }
      };
    }
    _notifyUrlChangeListeners(url = '', state) {
      this._urlChangeListeners.forEach(fn => fn(url, state));
    }
    subscribe(onNext, onThrow, onReturn) {
      return this._subject.subscribe({
        next: onNext,
        error: onThrow ?? undefined,
        complete: onReturn ?? undefined
      });
    }
    static normalizeQueryParams = normalizeQueryParams;
    static joinWithSlash = joinWithSlash;
    static stripTrailingSlash = stripTrailingSlash;
    static ɵfac = function Location_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Location)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LocationStrategy));
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Location,
      factory: () => createLocation(),
      providedIn: 'root'
    });
  }
  return Location;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function createLocation() {
  return new Location((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LocationStrategy));
}
function _stripBasePath(basePath, url) {
  if (!basePath || !url.startsWith(basePath)) {
    return url;
  }
  const strippedUrl = url.substring(basePath.length);
  if (strippedUrl === '' || ['/', ';', '?', '#'].includes(strippedUrl[0])) {
    return strippedUrl;
  }
  return url;
}
function _stripIndexHtml(url) {
  return url.replace(/\/index.html$/, '');
}
function _stripOrigin(baseHref) {
  const isAbsoluteUrl = new RegExp('^(https?:)?//').test(baseHref);
  if (isAbsoluteUrl) {
    const [, pathname] = baseHref.split(/\/\/[^\/]+/);
    return pathname;
  }
  return baseHref;
}


/***/ },

/***/ 79748
/*!************************************************************************!*\
  !*** ./node_modules/@angular/common/fesm2022/_common_module-chunk.mjs ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncPipe: () => (/* binding */ AsyncPipe),
/* harmony export */   CommonModule: () => (/* binding */ CommonModule),
/* harmony export */   CurrencyPipe: () => (/* binding */ CurrencyPipe),
/* harmony export */   DATE_PIPE_DEFAULT_OPTIONS: () => (/* binding */ DATE_PIPE_DEFAULT_OPTIONS),
/* harmony export */   DATE_PIPE_DEFAULT_TIMEZONE: () => (/* binding */ DATE_PIPE_DEFAULT_TIMEZONE),
/* harmony export */   DatePipe: () => (/* binding */ DatePipe),
/* harmony export */   DecimalPipe: () => (/* binding */ DecimalPipe),
/* harmony export */   FormStyle: () => (/* binding */ FormStyle),
/* harmony export */   FormatWidth: () => (/* binding */ FormatWidth),
/* harmony export */   HashLocationStrategy: () => (/* binding */ HashLocationStrategy),
/* harmony export */   I18nPluralPipe: () => (/* binding */ I18nPluralPipe),
/* harmony export */   I18nSelectPipe: () => (/* binding */ I18nSelectPipe),
/* harmony export */   JsonPipe: () => (/* binding */ JsonPipe),
/* harmony export */   KeyValuePipe: () => (/* binding */ KeyValuePipe),
/* harmony export */   LowerCasePipe: () => (/* binding */ LowerCasePipe),
/* harmony export */   NgClass: () => (/* binding */ NgClass),
/* harmony export */   NgComponentOutlet: () => (/* binding */ NgComponentOutlet),
/* harmony export */   NgForOf: () => (/* binding */ NgForOf),
/* harmony export */   NgForOfContext: () => (/* binding */ NgForOfContext),
/* harmony export */   NgIf: () => (/* binding */ NgIf),
/* harmony export */   NgIfContext: () => (/* binding */ NgIfContext),
/* harmony export */   NgLocaleLocalization: () => (/* binding */ NgLocaleLocalization),
/* harmony export */   NgLocalization: () => (/* binding */ NgLocalization),
/* harmony export */   NgPlural: () => (/* binding */ NgPlural),
/* harmony export */   NgPluralCase: () => (/* binding */ NgPluralCase),
/* harmony export */   NgStyle: () => (/* binding */ NgStyle),
/* harmony export */   NgSwitch: () => (/* binding */ NgSwitch),
/* harmony export */   NgSwitchCase: () => (/* binding */ NgSwitchCase),
/* harmony export */   NgSwitchDefault: () => (/* binding */ NgSwitchDefault),
/* harmony export */   NgTemplateOutlet: () => (/* binding */ NgTemplateOutlet),
/* harmony export */   NumberFormatStyle: () => (/* binding */ NumberFormatStyle),
/* harmony export */   NumberSymbol: () => (/* binding */ NumberSymbol),
/* harmony export */   PercentPipe: () => (/* binding */ PercentPipe),
/* harmony export */   Plural: () => (/* binding */ Plural),
/* harmony export */   SlicePipe: () => (/* binding */ SlicePipe),
/* harmony export */   TitleCasePipe: () => (/* binding */ TitleCasePipe),
/* harmony export */   TranslationWidth: () => (/* binding */ TranslationWidth),
/* harmony export */   UpperCasePipe: () => (/* binding */ UpperCasePipe),
/* harmony export */   WeekDay: () => (/* binding */ WeekDay),
/* harmony export */   formatCurrency: () => (/* binding */ formatCurrency),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   formatNumber: () => (/* binding */ formatNumber),
/* harmony export */   formatPercent: () => (/* binding */ formatPercent),
/* harmony export */   getCurrencySymbol: () => (/* binding */ getCurrencySymbol),
/* harmony export */   getLocaleCurrencyCode: () => (/* binding */ getLocaleCurrencyCode),
/* harmony export */   getLocaleCurrencyName: () => (/* binding */ getLocaleCurrencyName),
/* harmony export */   getLocaleCurrencySymbol: () => (/* binding */ getLocaleCurrencySymbol),
/* harmony export */   getLocaleDateFormat: () => (/* binding */ getLocaleDateFormat),
/* harmony export */   getLocaleDateTimeFormat: () => (/* binding */ getLocaleDateTimeFormat),
/* harmony export */   getLocaleDayNames: () => (/* binding */ getLocaleDayNames),
/* harmony export */   getLocaleDayPeriods: () => (/* binding */ getLocaleDayPeriods),
/* harmony export */   getLocaleDirection: () => (/* binding */ getLocaleDirection),
/* harmony export */   getLocaleEraNames: () => (/* binding */ getLocaleEraNames),
/* harmony export */   getLocaleExtraDayPeriodRules: () => (/* binding */ getLocaleExtraDayPeriodRules),
/* harmony export */   getLocaleExtraDayPeriods: () => (/* binding */ getLocaleExtraDayPeriods),
/* harmony export */   getLocaleFirstDayOfWeek: () => (/* binding */ getLocaleFirstDayOfWeek),
/* harmony export */   getLocaleId: () => (/* binding */ getLocaleId),
/* harmony export */   getLocaleMonthNames: () => (/* binding */ getLocaleMonthNames),
/* harmony export */   getLocaleNumberFormat: () => (/* binding */ getLocaleNumberFormat),
/* harmony export */   getLocaleNumberSymbol: () => (/* binding */ getLocaleNumberSymbol),
/* harmony export */   getLocalePluralCase: () => (/* binding */ getLocalePluralCase),
/* harmony export */   getLocaleTimeFormat: () => (/* binding */ getLocaleTimeFormat),
/* harmony export */   getLocaleWeekEndRange: () => (/* binding */ getLocaleWeekEndRange),
/* harmony export */   getNumberOfCurrencyDigits: () => (/* binding */ getNumberOfCurrencyDigits)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _location_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_location-chunk.mjs */ 66223);
/* harmony import */ var _platform_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_platform_location-chunk.mjs */ 8963);
/**
 * @license Angular v21.1.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */





let HashLocationStrategy = /*#__PURE__*/(() => {
  class HashLocationStrategy extends _location_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.LocationStrategy {
    _platformLocation;
    _baseHref = '';
    _removeListenerFns = [];
    constructor(_platformLocation, _baseHref) {
      super();
      this._platformLocation = _platformLocation;
      if (_baseHref != null) {
        this._baseHref = _baseHref;
      }
    }
    ngOnDestroy() {
      while (this._removeListenerFns.length) {
        this._removeListenerFns.pop()();
      }
    }
    onPopState(fn) {
      this._removeListenerFns.push(this._platformLocation.onPopState(fn), this._platformLocation.onHashChange(fn));
    }
    getBaseHref() {
      return this._baseHref;
    }
    path(includeHash = false) {
      const path = this._platformLocation.hash ?? '#';
      return path.length > 0 ? path.substring(1) : path;
    }
    prepareExternalUrl(internal) {
      const url = (0,_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.joinWithSlash)(this._baseHref, internal);
      return url.length > 0 ? '#' + url : url;
    }
    pushState(state, title, path, queryParams) {
      const url = this.prepareExternalUrl(path + (0,_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.normalizeQueryParams)(queryParams)) || this._platformLocation.pathname;
      this._platformLocation.pushState(state, title, url);
    }
    replaceState(state, title, path, queryParams) {
      const url = this.prepareExternalUrl(path + (0,_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.normalizeQueryParams)(queryParams)) || this._platformLocation.pathname;
      this._platformLocation.replaceState(state, title, url);
    }
    forward() {
      this._platformLocation.forward();
    }
    back() {
      this._platformLocation.back();
    }
    getState() {
      return this._platformLocation.getState();
    }
    historyGo(relativePosition = 0) {
      this._platformLocation.historyGo?.(relativePosition);
    }
    static ɵfac = function HashLocationStrategy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HashLocationStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_platform_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.PlatformLocation), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.APP_BASE_HREF, 8));
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HashLocationStrategy,
      factory: HashLocationStrategy.ɵfac
    });
  }
  return HashLocationStrategy;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const CURRENCIES_EN = {
  "ADP": [undefined, undefined, 0],
  "AFN": [undefined, "؋", 0],
  "ALL": [undefined, undefined, 0],
  "AMD": [undefined, "֏", 2],
  "AOA": [undefined, "Kz"],
  "ARS": [undefined, "$"],
  "AUD": ["A$", "$"],
  "AZN": [undefined, "₼"],
  "BAM": [undefined, "KM"],
  "BBD": [undefined, "$"],
  "BDT": [undefined, "৳"],
  "BHD": [undefined, undefined, 3],
  "BIF": [undefined, undefined, 0],
  "BMD": [undefined, "$"],
  "BND": [undefined, "$"],
  "BOB": [undefined, "Bs"],
  "BRL": ["R$"],
  "BSD": [undefined, "$"],
  "BWP": [undefined, "P"],
  "BYN": [undefined, undefined, 2],
  "BYR": [undefined, undefined, 0],
  "BZD": [undefined, "$"],
  "CAD": ["CA$", "$", 2],
  "CHF": [undefined, undefined, 2],
  "CLF": [undefined, undefined, 4],
  "CLP": [undefined, "$", 0],
  "CNY": ["CN¥", "¥"],
  "COP": [undefined, "$", 2],
  "CRC": [undefined, "₡", 2],
  "CUC": [undefined, "$"],
  "CUP": [undefined, "$"],
  "CZK": [undefined, "Kč", 2],
  "DJF": [undefined, undefined, 0],
  "DKK": [undefined, "kr", 2],
  "DOP": [undefined, "$"],
  "EGP": [undefined, "E£"],
  "ESP": [undefined, "₧", 0],
  "EUR": ["€"],
  "FJD": [undefined, "$"],
  "FKP": [undefined, "£"],
  "GBP": ["£"],
  "GEL": [undefined, "₾"],
  "GHS": [undefined, "GH₵"],
  "GIP": [undefined, "£"],
  "GNF": [undefined, "FG", 0],
  "GTQ": [undefined, "Q"],
  "GYD": [undefined, "$", 2],
  "HKD": ["HK$", "$"],
  "HNL": [undefined, "L"],
  "HRK": [undefined, "kn"],
  "HUF": [undefined, "Ft", 2],
  "IDR": [undefined, "Rp", 2],
  "ILS": ["₪"],
  "INR": ["₹"],
  "IQD": [undefined, undefined, 0],
  "IRR": [undefined, undefined, 0],
  "ISK": [undefined, "kr", 0],
  "ITL": [undefined, undefined, 0],
  "JMD": [undefined, "$"],
  "JOD": [undefined, undefined, 3],
  "JPY": ["¥", undefined, 0],
  "KGS": [undefined, "⃀"],
  "KHR": [undefined, "៛"],
  "KMF": [undefined, "CF", 0],
  "KPW": [undefined, "₩", 0],
  "KRW": ["₩", undefined, 0],
  "KWD": [undefined, undefined, 3],
  "KYD": [undefined, "$"],
  "KZT": [undefined, "₸"],
  "LAK": [undefined, "₭", 0],
  "LBP": [undefined, "L£", 0],
  "LKR": [undefined, "Rs"],
  "LRD": [undefined, "$"],
  "LTL": [undefined, "Lt"],
  "LUF": [undefined, undefined, 0],
  "LVL": [undefined, "Ls"],
  "LYD": [undefined, undefined, 3],
  "MGA": [undefined, "Ar", 0],
  "MGF": [undefined, undefined, 0],
  "MMK": [undefined, "K", 0],
  "MNT": [undefined, "₮", 2],
  "MRO": [undefined, undefined, 0],
  "MUR": [undefined, "Rs", 2],
  "MXN": ["MX$", "$"],
  "MYR": [undefined, "RM"],
  "NAD": [undefined, "$"],
  "NGN": [undefined, "₦"],
  "NIO": [undefined, "C$"],
  "NOK": [undefined, "kr", 2],
  "NPR": [undefined, "Rs"],
  "NZD": ["NZ$", "$"],
  "OMR": [undefined, undefined, 3],
  "PHP": ["₱"],
  "PKR": [undefined, "Rs", 2],
  "PLN": [undefined, "zł"],
  "PYG": [undefined, "₲", 0],
  "RON": [undefined, "lei"],
  "RSD": [undefined, undefined, 0],
  "RUB": [undefined, "₽"],
  "RWF": [undefined, "RF", 0],
  "SBD": [undefined, "$"],
  "SEK": [undefined, "kr", 2],
  "SGD": [undefined, "$"],
  "SHP": [undefined, "£"],
  "SLE": [undefined, undefined, 2],
  "SLL": [undefined, undefined, 0],
  "SOS": [undefined, undefined, 0],
  "SRD": [undefined, "$"],
  "SSP": [undefined, "£"],
  "STD": [undefined, undefined, 0],
  "STN": [undefined, "Db"],
  "SYP": [undefined, "£", 0],
  "THB": [undefined, "฿"],
  "TMM": [undefined, undefined, 0],
  "TND": [undefined, undefined, 3],
  "TOP": [undefined, "T$"],
  "TRL": [undefined, undefined, 0],
  "TRY": [undefined, "₺"],
  "TTD": [undefined, "$"],
  "TWD": ["NT$", "$", 2],
  "TZS": [undefined, undefined, 2],
  "UAH": [undefined, "₴"],
  "UGX": [undefined, undefined, 0],
  "USD": ["$"],
  "UYI": [undefined, undefined, 0],
  "UYU": [undefined, "$"],
  "UYW": [undefined, undefined, 4],
  "UZS": [undefined, undefined, 2],
  "VEF": [undefined, "Bs", 2],
  "VND": ["₫", undefined, 0],
  "VUV": [undefined, undefined, 0],
  "XAF": ["FCFA", undefined, 0],
  "XCD": ["EC$", "$"],
  "XCG": ["Cg."],
  "XOF": ["F CFA", undefined, 0],
  "XPF": ["CFPF", undefined, 0],
  "XXX": ["¤"],
  "YER": [undefined, undefined, 0],
  "ZAR": [undefined, "R"],
  "ZMK": [undefined, undefined, 0],
  "ZMW": [undefined, "ZK"],
  "ZWD": [undefined, undefined, 0]
};
var NumberFormatStyle = /*#__PURE__*/function (NumberFormatStyle) {
  NumberFormatStyle[NumberFormatStyle["Decimal"] = 0] = "Decimal";
  NumberFormatStyle[NumberFormatStyle["Percent"] = 1] = "Percent";
  NumberFormatStyle[NumberFormatStyle["Currency"] = 2] = "Currency";
  NumberFormatStyle[NumberFormatStyle["Scientific"] = 3] = "Scientific";
  return NumberFormatStyle;
}(NumberFormatStyle || {});
var Plural = /*#__PURE__*/function (Plural) {
  Plural[Plural["Zero"] = 0] = "Zero";
  Plural[Plural["One"] = 1] = "One";
  Plural[Plural["Two"] = 2] = "Two";
  Plural[Plural["Few"] = 3] = "Few";
  Plural[Plural["Many"] = 4] = "Many";
  Plural[Plural["Other"] = 5] = "Other";
  return Plural;
}(Plural || {});
var FormStyle = /*#__PURE__*/function (FormStyle) {
  FormStyle[FormStyle["Format"] = 0] = "Format";
  FormStyle[FormStyle["Standalone"] = 1] = "Standalone";
  return FormStyle;
}(FormStyle || {});
var TranslationWidth = /*#__PURE__*/function (TranslationWidth) {
  TranslationWidth[TranslationWidth["Narrow"] = 0] = "Narrow";
  TranslationWidth[TranslationWidth["Abbreviated"] = 1] = "Abbreviated";
  TranslationWidth[TranslationWidth["Wide"] = 2] = "Wide";
  TranslationWidth[TranslationWidth["Short"] = 3] = "Short";
  return TranslationWidth;
}(TranslationWidth || {});
var FormatWidth = /*#__PURE__*/function (FormatWidth) {
  FormatWidth[FormatWidth["Short"] = 0] = "Short";
  FormatWidth[FormatWidth["Medium"] = 1] = "Medium";
  FormatWidth[FormatWidth["Long"] = 2] = "Long";
  FormatWidth[FormatWidth["Full"] = 3] = "Full";
  return FormatWidth;
}(FormatWidth || {});
const NumberSymbol = {
  Decimal: 0,
  Group: 1,
  List: 2,
  PercentSign: 3,
  PlusSign: 4,
  MinusSign: 5,
  Exponential: 6,
  SuperscriptingExponent: 7,
  PerMille: 8,
  Infinity: 9,
  NaN: 10,
  TimeSeparator: 11,
  CurrencyDecimal: 12,
  CurrencyGroup: 13
};
var WeekDay = /*#__PURE__*/function (WeekDay) {
  WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
  WeekDay[WeekDay["Monday"] = 1] = "Monday";
  WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
  WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
  WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
  WeekDay[WeekDay["Friday"] = 5] = "Friday";
  WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
  return WeekDay;
}(WeekDay || {});
function getLocaleId(locale) {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale)[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].LocaleId];
}
function getLocaleDayPeriods(locale, formStyle, width) {
  const data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
  const amPmData = [data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].DayPeriodsFormat], data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].DayPeriodsStandalone]];
  const amPm = getLastDefinedValue(amPmData, formStyle);
  return getLastDefinedValue(amPm, width);
}
function getLocaleDayNames(locale, formStyle, width) {
  const data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
  const daysData = [data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].DaysFormat], data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].DaysStandalone]];
  const days = getLastDefinedValue(daysData, formStyle);
  return getLastDefinedValue(days, width);
}
function getLocaleMonthNames(locale, formStyle, width) {
  const data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
  const monthsData = [data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].MonthsFormat], data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].MonthsStandalone]];
  const months = getLastDefinedValue(monthsData, formStyle);
  return getLastDefinedValue(months, width);
}
function getLocaleEraNames(locale, width) {
  const data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
  const erasData = data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].Eras];
  return getLastDefinedValue(erasData, width);
}
function getLocaleFirstDayOfWeek(locale) {
  const data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
  return data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].FirstDayOfWeek];
}
function getLocaleWeekEndRange(locale) {
  const data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
  return data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].WeekendRange];
}
function getLocaleDateFormat(locale, width) {
  const data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
  return getLastDefinedValue(data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].DateFormat], width);
}
function getLocaleTimeFormat(locale, width) {
  const data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
  return getLastDefinedValue(data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].TimeFormat], width);
}
function getLocaleDateTimeFormat(locale, width) {
  const data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
  const dateTimeFormatData = data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].DateTimeFormat];
  return getLastDefinedValue(dateTimeFormatData, width);
}
function getLocaleNumberSymbol(locale, symbol) {
  const data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
  const res = data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].NumberSymbols][symbol];
  if (typeof res === 'undefined') {
    if (symbol === NumberSymbol.CurrencyDecimal) {
      return data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].NumberSymbols][NumberSymbol.Decimal];
    } else if (symbol === NumberSymbol.CurrencyGroup) {
      return data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].NumberSymbols][NumberSymbol.Group];
    }
  }
  return res;
}
function getLocaleNumberFormat(locale, type) {
  const data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
  return data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].NumberFormats][type];
}
function getLocaleCurrencySymbol(locale) {
  const data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
  return data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].CurrencySymbol] || null;
}
function getLocaleCurrencyName(locale) {
  const data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
  return data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].CurrencyName] || null;
}
function getLocaleCurrencyCode(locale) {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵgetLocaleCurrencyCode"])(locale);
}
function getLocaleCurrencies(locale) {
  const data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
  return data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].Currencies];
}
const getLocalePluralCase = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵgetLocalePluralCase"];
function checkFullData(data) {
  if (!data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].ExtraData]) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](2303, ngDevMode && `Missing extra locale data for the locale "${data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`);
  }
}
function getLocaleExtraDayPeriodRules(locale) {
  const data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
  checkFullData(data);
  const rules = data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].ExtraData][2] || [];
  return rules.map(rule => {
    if (typeof rule === 'string') {
      return extractTime(rule);
    }
    return [extractTime(rule[0]), extractTime(rule[1])];
  });
}
function getLocaleExtraDayPeriods(locale, formStyle, width) {
  const data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
  checkFullData(data);
  const dayPeriodsData = [data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].ExtraData][0], data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].ExtraData][1]];
  const dayPeriods = getLastDefinedValue(dayPeriodsData, formStyle) || [];
  return getLastDefinedValue(dayPeriods, width) || [];
}
function getLocaleDirection(locale) {
  const data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
  return data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].Directionality];
}
function getLastDefinedValue(data, index) {
  for (let i = index; i > -1; i--) {
    if (typeof data[i] !== 'undefined') {
      return data[i];
    }
  }
  throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](2304, ngDevMode && 'Locale data API: locale data undefined');
}
function extractTime(time) {
  const [h, m] = time.split(':');
  return {
    hours: +h,
    minutes: +m
  };
}
function getCurrencySymbol(code, format, locale = 'en') {
  const currency = getLocaleCurrencies(locale)[code] || CURRENCIES_EN[code] || [];
  const symbolNarrow = currency[1];
  if (format === 'narrow' && typeof symbolNarrow === 'string') {
    return symbolNarrow;
  }
  return currency[0] || code;
}
const DEFAULT_NB_OF_CURRENCY_DIGITS = 2;
function getNumberOfCurrencyDigits(code) {
  let digits;
  const currency = CURRENCIES_EN[code];
  if (currency) {
    digits = currency[2];
  }
  return typeof digits === 'number' ? digits : DEFAULT_NB_OF_CURRENCY_DIGITS;
}
const ISO8601_DATE_REGEX = /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
const NAMED_FORMATS = {};
const DATE_FORMATS_SPLIT = /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
function formatDate(value, format, locale, timezone) {
  let date = toDate(value);
  const namedFormat = getNamedFormat(locale, format);
  format = namedFormat || format;
  let parts = [];
  let match;
  while (format) {
    match = DATE_FORMATS_SPLIT.exec(format);
    if (match) {
      parts = parts.concat(match.slice(1));
      const part = parts.pop();
      if (!part) {
        break;
      }
      format = part;
    } else {
      parts.push(format);
      break;
    }
  }
  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    assertValidDateFormat(parts);
  }
  let dateTimezoneOffset = date.getTimezoneOffset();
  if (timezone) {
    dateTimezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
    date = convertTimezoneToLocal(date, timezone);
  }
  let text = '';
  parts.forEach(value => {
    const dateFormatter = getDateFormatter(value);
    text += dateFormatter ? dateFormatter(date, locale, dateTimezoneOffset) : value === "''" ? "'" : value.replace(/(^'|'$)/g, '').replace(/''/g, "'");
  });
  return text;
}
function assertValidDateFormat(parts) {
  if (parts.some(part => /^Y+$/.test(part)) && !parts.some(part => /^w+$/.test(part))) {
    const message = `Suspicious use of week-based year "Y" in date pattern "${parts.join('')}". Did you mean to use calendar year "y" instead?`;
    if (parts.length === 1) {
      console.error((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵformatRuntimeError"])(2300, message));
    } else {
      throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](2300, message);
    }
  }
}
function createDate(year, month, date) {
  const newDate = new Date(0);
  newDate.setFullYear(year, month, date);
  newDate.setHours(0, 0, 0);
  return newDate;
}
function getNamedFormat(locale, format) {
  const localeId = getLocaleId(locale);
  NAMED_FORMATS[localeId] ??= {};
  if (NAMED_FORMATS[localeId][format]) {
    return NAMED_FORMATS[localeId][format];
  }
  let formatValue = '';
  switch (format) {
    case 'shortDate':
      formatValue = getLocaleDateFormat(locale, FormatWidth.Short);
      break;
    case 'mediumDate':
      formatValue = getLocaleDateFormat(locale, FormatWidth.Medium);
      break;
    case 'longDate':
      formatValue = getLocaleDateFormat(locale, FormatWidth.Long);
      break;
    case 'fullDate':
      formatValue = getLocaleDateFormat(locale, FormatWidth.Full);
      break;
    case 'shortTime':
      formatValue = getLocaleTimeFormat(locale, FormatWidth.Short);
      break;
    case 'mediumTime':
      formatValue = getLocaleTimeFormat(locale, FormatWidth.Medium);
      break;
    case 'longTime':
      formatValue = getLocaleTimeFormat(locale, FormatWidth.Long);
      break;
    case 'fullTime':
      formatValue = getLocaleTimeFormat(locale, FormatWidth.Full);
      break;
    case 'short':
      const shortTime = getNamedFormat(locale, 'shortTime');
      const shortDate = getNamedFormat(locale, 'shortDate');
      formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Short), [shortTime, shortDate]);
      break;
    case 'medium':
      const mediumTime = getNamedFormat(locale, 'mediumTime');
      const mediumDate = getNamedFormat(locale, 'mediumDate');
      formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Medium), [mediumTime, mediumDate]);
      break;
    case 'long':
      const longTime = getNamedFormat(locale, 'longTime');
      const longDate = getNamedFormat(locale, 'longDate');
      formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Long), [longTime, longDate]);
      break;
    case 'full':
      const fullTime = getNamedFormat(locale, 'fullTime');
      const fullDate = getNamedFormat(locale, 'fullDate');
      formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Full), [fullTime, fullDate]);
      break;
  }
  if (formatValue) {
    NAMED_FORMATS[localeId][format] = formatValue;
  }
  return formatValue;
}
function formatDateTime(str, opt_values) {
  if (opt_values) {
    str = str.replace(/\{([^}]+)}/g, function (match, key) {
      return opt_values != null && key in opt_values ? opt_values[key] : match;
    });
  }
  return str;
}
function padNumber(num, digits, minusSign = '-', trim, negWrap) {
  let neg = '';
  if (num < 0 || negWrap && num <= 0) {
    if (negWrap) {
      num = -num + 1;
    } else {
      num = -num;
      neg = minusSign;
    }
  }
  let strNum = String(num);
  while (strNum.length < digits) {
    strNum = '0' + strNum;
  }
  if (trim) {
    strNum = strNum.slice(strNum.length - digits);
  }
  return neg + strNum;
}
function formatFractionalSeconds(milliseconds, digits) {
  const strMs = padNumber(milliseconds, 3);
  return strMs.substring(0, digits);
}
function dateGetter(name, size, offset = 0, trim = false, negWrap = false) {
  return function (date, locale) {
    let part = getDatePart(name, date);
    if (offset > 0 || part > -offset) {
      part += offset;
    }
    if (name === 3) {
      if (part === 0 && offset === -12) {
        part = 12;
      }
    } else if (name === 6) {
      return formatFractionalSeconds(part, size);
    }
    const localeMinus = getLocaleNumberSymbol(locale, NumberSymbol.MinusSign);
    return padNumber(part, size, localeMinus, trim, negWrap);
  };
}
function getDatePart(part, date) {
  switch (part) {
    case 0:
      return date.getFullYear();
    case 1:
      return date.getMonth();
    case 2:
      return date.getDate();
    case 3:
      return date.getHours();
    case 4:
      return date.getMinutes();
    case 5:
      return date.getSeconds();
    case 6:
      return date.getMilliseconds();
    case 7:
      return date.getDay();
    default:
      throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](2301, ngDevMode && `Unknown DateType value "${part}".`);
  }
}
function dateStrGetter(name, width, form = FormStyle.Format, extended = false) {
  return function (date, locale) {
    return getDateTranslation(date, locale, name, width, form, extended);
  };
}
function getDateTranslation(date, locale, name, width, form, extended) {
  switch (name) {
    case 2:
      return getLocaleMonthNames(locale, form, width)[date.getMonth()];
    case 1:
      return getLocaleDayNames(locale, form, width)[date.getDay()];
    case 0:
      const currentHours = date.getHours();
      const currentMinutes = date.getMinutes();
      if (extended) {
        const rules = getLocaleExtraDayPeriodRules(locale);
        const dayPeriods = getLocaleExtraDayPeriods(locale, form, width);
        const index = rules.findIndex(rule => {
          if (Array.isArray(rule)) {
            const [from, to] = rule;
            const afterFrom = currentHours >= from.hours && currentMinutes >= from.minutes;
            const beforeTo = currentHours < to.hours || currentHours === to.hours && currentMinutes < to.minutes;
            if (from.hours < to.hours) {
              if (afterFrom && beforeTo) {
                return true;
              }
            } else if (afterFrom || beforeTo) {
              return true;
            }
          } else {
            if (rule.hours === currentHours && rule.minutes === currentMinutes) {
              return true;
            }
          }
          return false;
        });
        if (index !== -1) {
          return dayPeriods[index];
        }
      }
      return getLocaleDayPeriods(locale, form, width)[currentHours < 12 ? 0 : 1];
    case 3:
      return getLocaleEraNames(locale, width)[date.getFullYear() <= 0 ? 0 : 1];
    default:
      const unexpected = name;
      throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](2302, ngDevMode && `unexpected translation type ${unexpected}`);
  }
}
function timeZoneGetter(width) {
  return function (date, locale, offset) {
    const zone = -1 * offset;
    const minusSign = getLocaleNumberSymbol(locale, NumberSymbol.MinusSign);
    const hours = zone > 0 ? Math.floor(zone / 60) : Math.ceil(zone / 60);
    switch (width) {
      case 0:
        return (zone >= 0 ? '+' : '') + padNumber(hours, 2, minusSign) + padNumber(Math.abs(zone % 60), 2, minusSign);
      case 1:
        return 'GMT' + (zone >= 0 ? '+' : '') + padNumber(hours, 1, minusSign);
      case 2:
        return 'GMT' + (zone >= 0 ? '+' : '') + padNumber(hours, 2, minusSign) + ':' + padNumber(Math.abs(zone % 60), 2, minusSign);
      case 3:
        if (offset === 0) {
          return 'Z';
        } else {
          return (zone >= 0 ? '+' : '') + padNumber(hours, 2, minusSign) + ':' + padNumber(Math.abs(zone % 60), 2, minusSign);
        }
      default:
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](2310, ngDevMode && `Unknown zone width "${width}"`);
    }
  };
}
const JANUARY = 0;
const THURSDAY = 4;
function getFirstThursdayOfYear(year) {
  const firstDayOfYear = createDate(year, JANUARY, 1).getDay();
  return createDate(year, 0, 1 + (firstDayOfYear <= THURSDAY ? THURSDAY : THURSDAY + 7) - firstDayOfYear);
}
function getThursdayThisIsoWeek(datetime) {
  const currentDay = datetime.getDay();
  const deltaToThursday = currentDay === 0 ? -3 : THURSDAY - currentDay;
  return createDate(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + deltaToThursday);
}
function weekGetter(size, monthBased = false) {
  return function (date, locale) {
    let result;
    if (monthBased) {
      const nbDaysBefore1stDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
      const today = date.getDate();
      result = 1 + Math.floor((today + nbDaysBefore1stDayOfMonth) / 7);
    } else {
      const thisThurs = getThursdayThisIsoWeek(date);
      const firstThurs = getFirstThursdayOfYear(thisThurs.getFullYear());
      const diff = thisThurs.getTime() - firstThurs.getTime();
      result = 1 + Math.round(diff / 6.048e8);
    }
    return padNumber(result, size, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
  };
}
function weekNumberingYearGetter(size, trim = false) {
  return function (date, locale) {
    const thisThurs = getThursdayThisIsoWeek(date);
    const weekNumberingYear = thisThurs.getFullYear();
    return padNumber(weekNumberingYear, size, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign), trim);
  };
}
const DATE_FORMATS = {};
function getDateFormatter(format) {
  if (DATE_FORMATS[format]) {
    return DATE_FORMATS[format];
  }
  let formatter;
  switch (format) {
    case 'G':
    case 'GG':
    case 'GGG':
      formatter = dateStrGetter(3, TranslationWidth.Abbreviated);
      break;
    case 'GGGG':
      formatter = dateStrGetter(3, TranslationWidth.Wide);
      break;
    case 'GGGGG':
      formatter = dateStrGetter(3, TranslationWidth.Narrow);
      break;
    case 'y':
      formatter = dateGetter(0, 1, 0, false, true);
      break;
    case 'yy':
      formatter = dateGetter(0, 2, 0, true, true);
      break;
    case 'yyy':
      formatter = dateGetter(0, 3, 0, false, true);
      break;
    case 'yyyy':
      formatter = dateGetter(0, 4, 0, false, true);
      break;
    case 'Y':
      formatter = weekNumberingYearGetter(1);
      break;
    case 'YY':
      formatter = weekNumberingYearGetter(2, true);
      break;
    case 'YYY':
      formatter = weekNumberingYearGetter(3);
      break;
    case 'YYYY':
      formatter = weekNumberingYearGetter(4);
      break;
    case 'M':
    case 'L':
      formatter = dateGetter(1, 1, 1);
      break;
    case 'MM':
    case 'LL':
      formatter = dateGetter(1, 2, 1);
      break;
    case 'MMM':
      formatter = dateStrGetter(2, TranslationWidth.Abbreviated);
      break;
    case 'MMMM':
      formatter = dateStrGetter(2, TranslationWidth.Wide);
      break;
    case 'MMMMM':
      formatter = dateStrGetter(2, TranslationWidth.Narrow);
      break;
    case 'LLL':
      formatter = dateStrGetter(2, TranslationWidth.Abbreviated, FormStyle.Standalone);
      break;
    case 'LLLL':
      formatter = dateStrGetter(2, TranslationWidth.Wide, FormStyle.Standalone);
      break;
    case 'LLLLL':
      formatter = dateStrGetter(2, TranslationWidth.Narrow, FormStyle.Standalone);
      break;
    case 'w':
      formatter = weekGetter(1);
      break;
    case 'ww':
      formatter = weekGetter(2);
      break;
    case 'W':
      formatter = weekGetter(1, true);
      break;
    case 'd':
      formatter = dateGetter(2, 1);
      break;
    case 'dd':
      formatter = dateGetter(2, 2);
      break;
    case 'c':
    case 'cc':
      formatter = dateGetter(7, 1);
      break;
    case 'ccc':
      formatter = dateStrGetter(1, TranslationWidth.Abbreviated, FormStyle.Standalone);
      break;
    case 'cccc':
      formatter = dateStrGetter(1, TranslationWidth.Wide, FormStyle.Standalone);
      break;
    case 'ccccc':
      formatter = dateStrGetter(1, TranslationWidth.Narrow, FormStyle.Standalone);
      break;
    case 'cccccc':
      formatter = dateStrGetter(1, TranslationWidth.Short, FormStyle.Standalone);
      break;
    case 'E':
    case 'EE':
    case 'EEE':
      formatter = dateStrGetter(1, TranslationWidth.Abbreviated);
      break;
    case 'EEEE':
      formatter = dateStrGetter(1, TranslationWidth.Wide);
      break;
    case 'EEEEE':
      formatter = dateStrGetter(1, TranslationWidth.Narrow);
      break;
    case 'EEEEEE':
      formatter = dateStrGetter(1, TranslationWidth.Short);
      break;
    case 'a':
    case 'aa':
    case 'aaa':
      formatter = dateStrGetter(0, TranslationWidth.Abbreviated);
      break;
    case 'aaaa':
      formatter = dateStrGetter(0, TranslationWidth.Wide);
      break;
    case 'aaaaa':
      formatter = dateStrGetter(0, TranslationWidth.Narrow);
      break;
    case 'b':
    case 'bb':
    case 'bbb':
      formatter = dateStrGetter(0, TranslationWidth.Abbreviated, FormStyle.Standalone, true);
      break;
    case 'bbbb':
      formatter = dateStrGetter(0, TranslationWidth.Wide, FormStyle.Standalone, true);
      break;
    case 'bbbbb':
      formatter = dateStrGetter(0, TranslationWidth.Narrow, FormStyle.Standalone, true);
      break;
    case 'B':
    case 'BB':
    case 'BBB':
      formatter = dateStrGetter(0, TranslationWidth.Abbreviated, FormStyle.Format, true);
      break;
    case 'BBBB':
      formatter = dateStrGetter(0, TranslationWidth.Wide, FormStyle.Format, true);
      break;
    case 'BBBBB':
      formatter = dateStrGetter(0, TranslationWidth.Narrow, FormStyle.Format, true);
      break;
    case 'h':
      formatter = dateGetter(3, 1, -12);
      break;
    case 'hh':
      formatter = dateGetter(3, 2, -12);
      break;
    case 'H':
      formatter = dateGetter(3, 1);
      break;
    case 'HH':
      formatter = dateGetter(3, 2);
      break;
    case 'm':
      formatter = dateGetter(4, 1);
      break;
    case 'mm':
      formatter = dateGetter(4, 2);
      break;
    case 's':
      formatter = dateGetter(5, 1);
      break;
    case 'ss':
      formatter = dateGetter(5, 2);
      break;
    case 'S':
      formatter = dateGetter(6, 1);
      break;
    case 'SS':
      formatter = dateGetter(6, 2);
      break;
    case 'SSS':
      formatter = dateGetter(6, 3);
      break;
    case 'Z':
    case 'ZZ':
    case 'ZZZ':
      formatter = timeZoneGetter(0);
      break;
    case 'ZZZZZ':
      formatter = timeZoneGetter(3);
      break;
    case 'O':
    case 'OO':
    case 'OOO':
    case 'z':
    case 'zz':
    case 'zzz':
      formatter = timeZoneGetter(1);
      break;
    case 'OOOO':
    case 'ZZZZ':
    case 'zzzz':
      formatter = timeZoneGetter(2);
      break;
    default:
      return null;
  }
  DATE_FORMATS[format] = formatter;
  return formatter;
}
function timezoneToOffset(timezone, fallback) {
  timezone = timezone.replace(/:/g, '');
  const requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
  return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
}
function addDateMinutes(date, minutes) {
  date = new Date(date.getTime());
  date.setMinutes(date.getMinutes() + minutes);
  return date;
}
function convertTimezoneToLocal(date, timezone, reverse) {
  const reverseValue = -1;
  const dateTimezoneOffset = date.getTimezoneOffset();
  const timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
  return addDateMinutes(date, reverseValue * (timezoneOffset - dateTimezoneOffset));
}
function toDate(value) {
  if (isDate(value)) {
    return value;
  }
  if (typeof value === 'number' && !isNaN(value)) {
    return new Date(value);
  }
  if (typeof value === 'string') {
    value = value.trim();
    if (/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(value)) {
      const [y, m = 1, d = 1] = value.split('-').map(val => +val);
      return createDate(y, m - 1, d);
    }
    const parsedNb = parseFloat(value);
    if (!isNaN(value - parsedNb)) {
      return new Date(parsedNb);
    }
    let match;
    if (match = value.match(ISO8601_DATE_REGEX)) {
      return isoStringToDate(match);
    }
  }
  const date = new Date(value);
  if (!isDate(date)) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](2311, ngDevMode && `Unable to convert "${value}" into a date`);
  }
  return date;
}
function isoStringToDate(match) {
  const date = new Date(0);
  let tzHour = 0;
  let tzMin = 0;
  const dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear;
  const timeSetter = match[8] ? date.setUTCHours : date.setHours;
  if (match[9]) {
    tzHour = Number(match[9] + match[10]);
    tzMin = Number(match[9] + match[11]);
  }
  dateSetter.call(date, Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  const h = Number(match[4] || 0) - tzHour;
  const m = Number(match[5] || 0) - tzMin;
  const s = Number(match[6] || 0);
  const ms = Math.floor(parseFloat('0.' + (match[7] || 0)) * 1000);
  timeSetter.call(date, h, m, s, ms);
  return date;
}
function isDate(value) {
  return value instanceof Date && !isNaN(value.valueOf());
}
const NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
const MAX_DIGITS = 22;
const DECIMAL_SEP = '.';
const ZERO_CHAR = '0';
const PATTERN_SEP = ';';
const GROUP_SEP = ',';
const DIGIT_CHAR = '#';
const CURRENCY_CHAR = '¤';
const PERCENT_CHAR = '%';
function formatNumberToLocaleString(value, pattern, locale, groupSymbol, decimalSymbol, digitsInfo, isPercent = false) {
  let formattedText = '';
  let isZero = false;
  if (!isFinite(value)) {
    formattedText = getLocaleNumberSymbol(locale, NumberSymbol.Infinity);
  } else {
    let parsedNumber = parseNumber(value);
    if (isPercent) {
      parsedNumber = toPercent(parsedNumber);
    }
    let minInt = pattern.minInt;
    let minFraction = pattern.minFrac;
    let maxFraction = pattern.maxFrac;
    if (digitsInfo) {
      const parts = digitsInfo.match(NUMBER_FORMAT_REGEXP);
      if (parts === null) {
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](2306, ngDevMode && `${digitsInfo} is not a valid digit info`);
      }
      const minIntPart = parts[1];
      const minFractionPart = parts[3];
      const maxFractionPart = parts[5];
      if (minIntPart != null) {
        minInt = parseIntAutoRadix(minIntPart);
      }
      if (minFractionPart != null) {
        minFraction = parseIntAutoRadix(minFractionPart);
      }
      if (maxFractionPart != null) {
        maxFraction = parseIntAutoRadix(maxFractionPart);
      } else if (minFractionPart != null && minFraction > maxFraction) {
        maxFraction = minFraction;
      }
    }
    roundNumber(parsedNumber, minFraction, maxFraction);
    let digits = parsedNumber.digits;
    let integerLen = parsedNumber.integerLen;
    const exponent = parsedNumber.exponent;
    let decimals = [];
    isZero = digits.every(d => !d);
    for (; integerLen < minInt; integerLen++) {
      digits.unshift(0);
    }
    for (; integerLen < 0; integerLen++) {
      digits.unshift(0);
    }
    if (integerLen > 0) {
      decimals = digits.splice(integerLen, digits.length);
    } else {
      decimals = digits;
      digits = [0];
    }
    const groups = [];
    if (digits.length >= pattern.lgSize) {
      groups.unshift(digits.splice(-pattern.lgSize, digits.length).join(''));
    }
    while (digits.length > pattern.gSize) {
      groups.unshift(digits.splice(-pattern.gSize, digits.length).join(''));
    }
    if (digits.length) {
      groups.unshift(digits.join(''));
    }
    formattedText = groups.join(getLocaleNumberSymbol(locale, groupSymbol));
    if (decimals.length) {
      formattedText += getLocaleNumberSymbol(locale, decimalSymbol) + decimals.join('');
    }
    if (exponent) {
      formattedText += getLocaleNumberSymbol(locale, NumberSymbol.Exponential) + '+' + exponent;
    }
  }
  if (value < 0 && !isZero) {
    formattedText = pattern.negPre + formattedText + pattern.negSuf;
  } else {
    formattedText = pattern.posPre + formattedText + pattern.posSuf;
  }
  return formattedText;
}
function formatCurrency(value, locale, currency, currencyCode, digitsInfo) {
  const format = getLocaleNumberFormat(locale, NumberFormatStyle.Currency);
  const pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
  pattern.minFrac = getNumberOfCurrencyDigits(currencyCode);
  pattern.maxFrac = pattern.minFrac;
  const res = formatNumberToLocaleString(value, pattern, locale, NumberSymbol.CurrencyGroup, NumberSymbol.CurrencyDecimal, digitsInfo);
  return res.replace(CURRENCY_CHAR, currency).replace(CURRENCY_CHAR, '').trim();
}
function formatPercent(value, locale, digitsInfo) {
  const format = getLocaleNumberFormat(locale, NumberFormatStyle.Percent);
  const pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
  const res = formatNumberToLocaleString(value, pattern, locale, NumberSymbol.Group, NumberSymbol.Decimal, digitsInfo, true);
  return res.replace(new RegExp(PERCENT_CHAR, 'g'), getLocaleNumberSymbol(locale, NumberSymbol.PercentSign));
}
function formatNumber(value, locale, digitsInfo) {
  const format = getLocaleNumberFormat(locale, NumberFormatStyle.Decimal);
  const pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
  return formatNumberToLocaleString(value, pattern, locale, NumberSymbol.Group, NumberSymbol.Decimal, digitsInfo);
}
function parseNumberFormat(format, minusSign = '-') {
  const p = {
    minInt: 1,
    minFrac: 0,
    maxFrac: 0,
    posPre: '',
    posSuf: '',
    negPre: '',
    negSuf: '',
    gSize: 0,
    lgSize: 0
  };
  const patternParts = format.split(PATTERN_SEP);
  const positive = patternParts[0];
  const negative = patternParts[1];
  const positiveParts = positive.indexOf(DECIMAL_SEP) !== -1 ? positive.split(DECIMAL_SEP) : [positive.substring(0, positive.lastIndexOf(ZERO_CHAR) + 1), positive.substring(positive.lastIndexOf(ZERO_CHAR) + 1)],
    integer = positiveParts[0],
    fraction = positiveParts[1] || '';
  p.posPre = integer.substring(0, integer.indexOf(DIGIT_CHAR));
  for (let i = 0; i < fraction.length; i++) {
    const ch = fraction.charAt(i);
    if (ch === ZERO_CHAR) {
      p.minFrac = p.maxFrac = i + 1;
    } else if (ch === DIGIT_CHAR) {
      p.maxFrac = i + 1;
    } else {
      p.posSuf += ch;
    }
  }
  const groups = integer.split(GROUP_SEP);
  p.gSize = groups[1] ? groups[1].length : 0;
  p.lgSize = groups[2] || groups[1] ? (groups[2] || groups[1]).length : 0;
  if (negative) {
    const trunkLen = positive.length - p.posPre.length - p.posSuf.length,
      pos = negative.indexOf(DIGIT_CHAR);
    p.negPre = negative.substring(0, pos).replace(/'/g, '');
    p.negSuf = negative.slice(pos + trunkLen).replace(/'/g, '');
  } else {
    p.negPre = minusSign + p.posPre;
    p.negSuf = p.posSuf;
  }
  return p;
}
function toPercent(parsedNumber) {
  if (parsedNumber.digits[0] === 0) {
    return parsedNumber;
  }
  const fractionLen = parsedNumber.digits.length - parsedNumber.integerLen;
  if (parsedNumber.exponent) {
    parsedNumber.exponent += 2;
  } else {
    if (fractionLen === 0) {
      parsedNumber.digits.push(0, 0);
    } else if (fractionLen === 1) {
      parsedNumber.digits.push(0);
    }
    parsedNumber.integerLen += 2;
  }
  return parsedNumber;
}
function parseNumber(num) {
  let numStr = Math.abs(num) + '';
  let exponent = 0,
    digits,
    integerLen;
  let i, j, zeros;
  if ((integerLen = numStr.indexOf(DECIMAL_SEP)) > -1) {
    numStr = numStr.replace(DECIMAL_SEP, '');
  }
  if ((i = numStr.search(/e/i)) > 0) {
    if (integerLen < 0) integerLen = i;
    integerLen += +numStr.slice(i + 1);
    numStr = numStr.substring(0, i);
  } else if (integerLen < 0) {
    integerLen = numStr.length;
  }
  for (i = 0; numStr.charAt(i) === ZERO_CHAR; i++) {}
  if (i === (zeros = numStr.length)) {
    digits = [0];
    integerLen = 1;
  } else {
    zeros--;
    while (numStr.charAt(zeros) === ZERO_CHAR) zeros--;
    integerLen -= i;
    digits = [];
    for (j = 0; i <= zeros; i++, j++) {
      digits[j] = Number(numStr.charAt(i));
    }
  }
  if (integerLen > MAX_DIGITS) {
    digits = digits.splice(0, MAX_DIGITS - 1);
    exponent = integerLen - 1;
    integerLen = 1;
  }
  return {
    digits,
    exponent,
    integerLen
  };
}
function roundNumber(parsedNumber, minFrac, maxFrac) {
  if (minFrac > maxFrac) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](2307, ngDevMode && `The minimum number of digits after fraction (${minFrac}) is higher than the maximum (${maxFrac}).`);
  }
  let digits = parsedNumber.digits;
  let fractionLen = digits.length - parsedNumber.integerLen;
  const fractionSize = Math.min(Math.max(minFrac, fractionLen), maxFrac);
  let roundAt = fractionSize + parsedNumber.integerLen;
  let digit = digits[roundAt];
  if (roundAt > 0) {
    digits.splice(Math.max(parsedNumber.integerLen, roundAt));
    for (let j = roundAt; j < digits.length; j++) {
      digits[j] = 0;
    }
  } else {
    fractionLen = Math.max(0, fractionLen);
    parsedNumber.integerLen = 1;
    digits.length = Math.max(1, roundAt = fractionSize + 1);
    digits[0] = 0;
    for (let i = 1; i < roundAt; i++) digits[i] = 0;
  }
  if (digit >= 5) {
    if (roundAt - 1 < 0) {
      for (let k = 0; k > roundAt; k--) {
        digits.unshift(0);
        parsedNumber.integerLen++;
      }
      digits.unshift(1);
      parsedNumber.integerLen++;
    } else {
      digits[roundAt - 1]++;
    }
  }
  for (; fractionLen < Math.max(0, fractionSize); fractionLen++) digits.push(0);
  let dropTrailingZeros = fractionSize !== 0;
  const minLen = minFrac + parsedNumber.integerLen;
  const carry = digits.reduceRight(function (carry, d, i, digits) {
    d = d + carry;
    digits[i] = d < 10 ? d : d - 10;
    if (dropTrailingZeros) {
      if (digits[i] === 0 && i >= minLen) {
        digits.pop();
      } else {
        dropTrailingZeros = false;
      }
    }
    return d >= 10 ? 1 : 0;
  }, 0);
  if (carry) {
    digits.unshift(carry);
    parsedNumber.integerLen++;
  }
}
function parseIntAutoRadix(text) {
  const result = parseInt(text);
  if (isNaN(result)) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](2305, ngDevMode && 'Invalid integer literal when parsing ' + text);
  }
  return result;
}
let NgLocalization = /*#__PURE__*/(() => {
  class NgLocalization {
    static ɵfac = function NgLocalization_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgLocalization)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgLocalization,
      factory: () => (() => new NgLocaleLocalization((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID)))(),
      providedIn: 'root'
    });
  }
  return NgLocalization;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function getPluralCategory(value, cases, ngLocalization, locale) {
  let key = `=${value}`;
  if (cases.indexOf(key) > -1) {
    return key;
  }
  key = ngLocalization.getPluralCategory(value, locale);
  if (cases.indexOf(key) > -1) {
    return key;
  }
  if (cases.indexOf('other') > -1) {
    return 'other';
  }
  throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](2308, ngDevMode && `No plural message found for value "${value}"`);
}
let NgLocaleLocalization = /*#__PURE__*/(() => {
  class NgLocaleLocalization extends NgLocalization {
    locale;
    constructor(locale) {
      super();
      this.locale = locale;
    }
    getPluralCategory(value, locale) {
      const plural = getLocalePluralCase(locale || this.locale)(value);
      switch (plural) {
        case Plural.Zero:
          return 'zero';
        case Plural.One:
          return 'one';
        case Plural.Two:
          return 'two';
        case Plural.Few:
          return 'few';
        case Plural.Many:
          return 'many';
        default:
          return 'other';
      }
    }
    static ɵfac = function NgLocaleLocalization_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgLocaleLocalization)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID));
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgLocaleLocalization,
      factory: NgLocaleLocalization.ɵfac
    });
  }
  return NgLocaleLocalization;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const WS_REGEXP = /\s+/;
const EMPTY_ARRAY = [];
let NgClass = /*#__PURE__*/(() => {
  class NgClass {
    _ngEl;
    _renderer;
    initialClasses = EMPTY_ARRAY;
    rawClass;
    stateMap = new Map();
    constructor(_ngEl, _renderer) {
      this._ngEl = _ngEl;
      this._renderer = _renderer;
    }
    set klass(value) {
      this.initialClasses = value != null ? value.trim().split(WS_REGEXP) : EMPTY_ARRAY;
    }
    set ngClass(value) {
      this.rawClass = typeof value === 'string' ? value.trim().split(WS_REGEXP) : value;
    }
    ngDoCheck() {
      for (const klass of this.initialClasses) {
        this._updateState(klass, true);
      }
      const rawClass = this.rawClass;
      if (Array.isArray(rawClass) || rawClass instanceof Set) {
        for (const klass of rawClass) {
          this._updateState(klass, true);
        }
      } else if (rawClass != null) {
        for (const klass of Object.keys(rawClass)) {
          this._updateState(klass, Boolean(rawClass[klass]));
        }
      }
      this._applyStateDiff();
    }
    _updateState(klass, nextEnabled) {
      const state = this.stateMap.get(klass);
      if (state !== undefined) {
        if (state.enabled !== nextEnabled) {
          state.changed = true;
          state.enabled = nextEnabled;
        }
        state.touched = true;
      } else {
        this.stateMap.set(klass, {
          enabled: nextEnabled,
          changed: true,
          touched: true
        });
      }
    }
    _applyStateDiff() {
      for (const stateEntry of this.stateMap) {
        const klass = stateEntry[0];
        const state = stateEntry[1];
        if (state.changed) {
          this._toggleClass(klass, state.enabled);
          state.changed = false;
        } else if (!state.touched) {
          if (state.enabled) {
            this._toggleClass(klass, false);
          }
          this.stateMap.delete(klass);
        }
        state.touched = false;
      }
    }
    _toggleClass(klass, enabled) {
      if (ngDevMode) {
        if (typeof klass !== 'string') {
          throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵstringify"])(klass)}`);
        }
      }
      klass = klass.trim();
      if (klass.length > 0) {
        klass.split(WS_REGEXP).forEach(klass => {
          if (enabled) {
            this._renderer.addClass(this._ngEl.nativeElement, klass);
          } else {
            this._renderer.removeClass(this._ngEl.nativeElement, klass);
          }
        });
      }
    }
    static ɵfac = function NgClass_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgClass)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgClass,
      selectors: [["", "ngClass", ""]],
      inputs: {
        klass: [0, "class", "klass"],
        ngClass: "ngClass"
      }
    });
  }
  return NgClass;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NgComponentOutlet = /*#__PURE__*/(() => {
  class NgComponentOutlet {
    _viewContainerRef;
    ngComponentOutlet = null;
    ngComponentOutletInputs;
    ngComponentOutletInjector;
    ngComponentOutletEnvironmentInjector;
    ngComponentOutletContent;
    ngComponentOutletNgModule;
    _componentRef;
    _moduleRef;
    _inputsUsed = new Map();
    get componentInstance() {
      return this._componentRef?.instance ?? null;
    }
    constructor(_viewContainerRef) {
      this._viewContainerRef = _viewContainerRef;
    }
    _needToReCreateNgModuleInstance(changes) {
      return changes['ngComponentOutletNgModule'] !== undefined;
    }
    _needToReCreateComponentInstance(changes) {
      return changes['ngComponentOutlet'] !== undefined || changes['ngComponentOutletContent'] !== undefined || changes['ngComponentOutletInjector'] !== undefined || changes['ngComponentOutletEnvironmentInjector'] !== undefined || this._needToReCreateNgModuleInstance(changes);
    }
    ngOnChanges(changes) {
      if (this._needToReCreateComponentInstance(changes)) {
        this._viewContainerRef.clear();
        this._inputsUsed.clear();
        this._componentRef = undefined;
        if (this.ngComponentOutlet) {
          const injector = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;
          if (this._needToReCreateNgModuleInstance(changes)) {
            this._moduleRef?.destroy();
            if (this.ngComponentOutletNgModule) {
              this._moduleRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.createNgModule)(this.ngComponentOutletNgModule, getParentInjector(injector));
            } else {
              this._moduleRef = undefined;
            }
          }
          this._componentRef = this._viewContainerRef.createComponent(this.ngComponentOutlet, {
            injector,
            ngModuleRef: this._moduleRef,
            projectableNodes: this.ngComponentOutletContent,
            environmentInjector: this.ngComponentOutletEnvironmentInjector
          });
        }
      }
    }
    ngDoCheck() {
      if (this._componentRef) {
        if (this.ngComponentOutletInputs) {
          for (const inputName of Object.keys(this.ngComponentOutletInputs)) {
            this._inputsUsed.set(inputName, true);
          }
        }
        this._applyInputStateDiff(this._componentRef);
      }
    }
    ngOnDestroy() {
      this._moduleRef?.destroy();
    }
    _applyInputStateDiff(componentRef) {
      for (const [inputName, touched] of this._inputsUsed) {
        if (!touched) {
          componentRef.setInput(inputName, undefined);
          this._inputsUsed.delete(inputName);
        } else {
          componentRef.setInput(inputName, this.ngComponentOutletInputs[inputName]);
          this._inputsUsed.set(inputName, false);
        }
      }
    }
    static ɵfac = function NgComponentOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgComponentOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgComponentOutlet,
      selectors: [["", "ngComponentOutlet", ""]],
      inputs: {
        ngComponentOutlet: "ngComponentOutlet",
        ngComponentOutletInputs: "ngComponentOutletInputs",
        ngComponentOutletInjector: "ngComponentOutletInjector",
        ngComponentOutletEnvironmentInjector: "ngComponentOutletEnvironmentInjector",
        ngComponentOutletContent: "ngComponentOutletContent",
        ngComponentOutletNgModule: "ngComponentOutletNgModule"
      },
      exportAs: ["ngComponentOutlet"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
  return NgComponentOutlet;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function getParentInjector(injector) {
  const parentNgModule = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModuleRef);
  return parentNgModule.injector;
}
class NgForOfContext {
  $implicit;
  ngForOf;
  index;
  count;
  constructor($implicit, ngForOf, index, count) {
    this.$implicit = $implicit;
    this.ngForOf = ngForOf;
    this.index = index;
    this.count = count;
  }
  get first() {
    return this.index === 0;
  }
  get last() {
    return this.index === this.count - 1;
  }
  get even() {
    return this.index % 2 === 0;
  }
  get odd() {
    return !this.even;
  }
}
let NgForOf = /*#__PURE__*/(() => {
  class NgForOf {
    _viewContainer;
    _template;
    _differs;
    set ngForOf(ngForOf) {
      this._ngForOf = ngForOf;
      this._ngForOfDirty = true;
    }
    set ngForTrackBy(fn) {
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && fn != null && typeof fn !== 'function') {
        console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}. ` + `See https://angular.dev/api/common/NgForOf#change-propagation for more information.`);
      }
      this._trackByFn = fn;
    }
    get ngForTrackBy() {
      return this._trackByFn;
    }
    _ngForOf = null;
    _ngForOfDirty = true;
    _differ = null;
    _trackByFn;
    constructor(_viewContainer, _template, _differs) {
      this._viewContainer = _viewContainer;
      this._template = _template;
      this._differs = _differs;
    }
    set ngForTemplate(value) {
      if (value) {
        this._template = value;
      }
    }
    ngDoCheck() {
      if (this._ngForOfDirty) {
        this._ngForOfDirty = false;
        const value = this._ngForOf;
        if (!this._differ && value) {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            try {
              this._differ = this._differs.find(value).create(this.ngForTrackBy);
            } catch {
              let errorMessage = `Cannot find a differ supporting object '${value}' of type '` + `${getTypeName(value)}'. NgFor only supports binding to Iterables, such as Arrays.`;
              if (typeof value === 'object') {
                errorMessage += ' Did you mean to use the keyvalue pipe?';
              }
              throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](-2200, errorMessage);
            }
          } else {
            this._differ = this._differs.find(value).create(this.ngForTrackBy);
          }
        }
      }
      if (this._differ) {
        const changes = this._differ.diff(this._ngForOf);
        if (changes) this._applyChanges(changes);
      }
    }
    _applyChanges(changes) {
      const viewContainer = this._viewContainer;
      changes.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
        if (item.previousIndex == null) {
          viewContainer.createEmbeddedView(this._template, new NgForOfContext(item.item, this._ngForOf, -1, -1), currentIndex === null ? undefined : currentIndex);
        } else if (currentIndex == null) {
          viewContainer.remove(adjustedPreviousIndex === null ? undefined : adjustedPreviousIndex);
        } else if (adjustedPreviousIndex !== null) {
          const view = viewContainer.get(adjustedPreviousIndex);
          viewContainer.move(view, currentIndex);
          applyViewChange(view, item);
        }
      });
      for (let i = 0, ilen = viewContainer.length; i < ilen; i++) {
        const viewRef = viewContainer.get(i);
        const context = viewRef.context;
        context.index = i;
        context.count = ilen;
        context.ngForOf = this._ngForOf;
      }
      changes.forEachIdentityChange(record => {
        const viewRef = viewContainer.get(record.currentIndex);
        applyViewChange(viewRef, record);
      });
    }
    static ngTemplateContextGuard(dir, ctx) {
      return true;
    }
    static ɵfac = function NgForOf_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgForOf,
      selectors: [["", "ngFor", "", "ngForOf", ""]],
      inputs: {
        ngForOf: "ngForOf",
        ngForTrackBy: "ngForTrackBy",
        ngForTemplate: "ngForTemplate"
      }
    });
  }
  return NgForOf;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function applyViewChange(view, record) {
  view.context.$implicit = record.item;
}
function getTypeName(type) {
  return type['name'] || typeof type;
}
let NgIf = /*#__PURE__*/(() => {
  class NgIf {
    _viewContainer;
    _context = new NgIfContext();
    _thenTemplateRef = null;
    _elseTemplateRef = null;
    _thenViewRef = null;
    _elseViewRef = null;
    constructor(_viewContainer, templateRef) {
      this._viewContainer = _viewContainer;
      this._thenTemplateRef = templateRef;
    }
    set ngIf(condition) {
      this._context.$implicit = this._context.ngIf = condition;
      this._updateView();
    }
    set ngIfThen(templateRef) {
      assertTemplate(templateRef, (typeof ngDevMode === 'undefined' || ngDevMode) && 'ngIfThen');
      this._thenTemplateRef = templateRef;
      this._thenViewRef = null;
      this._updateView();
    }
    set ngIfElse(templateRef) {
      assertTemplate(templateRef, (typeof ngDevMode === 'undefined' || ngDevMode) && 'ngIfElse');
      this._elseTemplateRef = templateRef;
      this._elseViewRef = null;
      this._updateView();
    }
    _updateView() {
      if (this._context.$implicit) {
        if (!this._thenViewRef) {
          this._viewContainer.clear();
          this._elseViewRef = null;
          if (this._thenTemplateRef) {
            this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
          }
        }
      } else {
        if (!this._elseViewRef) {
          this._viewContainer.clear();
          this._thenViewRef = null;
          if (this._elseTemplateRef) {
            this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
          }
        }
      }
    }
    static ngIfUseIfTypeGuard;
    static ngTemplateGuard_ngIf;
    static ngTemplateContextGuard(dir, ctx) {
      return true;
    }
    static ɵfac = function NgIf_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgIf)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgIf,
      selectors: [["", "ngIf", ""]],
      inputs: {
        ngIf: "ngIf",
        ngIfThen: "ngIfThen",
        ngIfElse: "ngIfElse"
      }
    });
  }
  return NgIf;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class NgIfContext {
  $implicit = null;
  ngIf = null;
}
function assertTemplate(templateRef, property) {
  if (templateRef && !templateRef.createEmbeddedView) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](2020, (typeof ngDevMode === 'undefined' || ngDevMode) && `${property} must be a TemplateRef, but received '${(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵstringify"])(templateRef)}'.`);
  }
}
class SwitchView {
  _viewContainerRef;
  _templateRef;
  _created = false;
  constructor(_viewContainerRef, _templateRef) {
    this._viewContainerRef = _viewContainerRef;
    this._templateRef = _templateRef;
  }
  create() {
    this._created = true;
    this._viewContainerRef.createEmbeddedView(this._templateRef);
  }
  destroy() {
    this._created = false;
    this._viewContainerRef.clear();
  }
  enforceState(created) {
    if (created && !this._created) {
      this.create();
    } else if (!created && this._created) {
      this.destroy();
    }
  }
}
let NgSwitch = /*#__PURE__*/(() => {
  class NgSwitch {
    _defaultViews = [];
    _defaultUsed = false;
    _caseCount = 0;
    _lastCaseCheckIndex = 0;
    _lastCasesMatched = false;
    _ngSwitch;
    set ngSwitch(newValue) {
      this._ngSwitch = newValue;
      if (this._caseCount === 0) {
        this._updateDefaultCases(true);
      }
    }
    _addCase() {
      return this._caseCount++;
    }
    _addDefault(view) {
      this._defaultViews.push(view);
    }
    _matchCase(value) {
      const matched = value === this._ngSwitch;
      this._lastCasesMatched ||= matched;
      this._lastCaseCheckIndex++;
      if (this._lastCaseCheckIndex === this._caseCount) {
        this._updateDefaultCases(!this._lastCasesMatched);
        this._lastCaseCheckIndex = 0;
        this._lastCasesMatched = false;
      }
      return matched;
    }
    _updateDefaultCases(useDefault) {
      if (this._defaultViews.length > 0 && useDefault !== this._defaultUsed) {
        this._defaultUsed = useDefault;
        for (const defaultView of this._defaultViews) {
          defaultView.enforceState(useDefault);
        }
      }
    }
    static ɵfac = function NgSwitch_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgSwitch)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgSwitch,
      selectors: [["", "ngSwitch", ""]],
      inputs: {
        ngSwitch: "ngSwitch"
      }
    });
  }
  return NgSwitch;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NgSwitchCase = /*#__PURE__*/(() => {
  class NgSwitchCase {
    ngSwitch;
    _view;
    ngSwitchCase;
    constructor(viewContainer, templateRef, ngSwitch) {
      this.ngSwitch = ngSwitch;
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !ngSwitch) {
        throwNgSwitchProviderNotFoundError('ngSwitchCase', 'NgSwitchCase');
      }
      ngSwitch._addCase();
      this._view = new SwitchView(viewContainer, templateRef);
    }
    ngDoCheck() {
      this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
    }
    static ɵfac = function NgSwitchCase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgSwitchCase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgSwitch, 9));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgSwitchCase,
      selectors: [["", "ngSwitchCase", ""]],
      inputs: {
        ngSwitchCase: "ngSwitchCase"
      }
    });
  }
  return NgSwitchCase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NgSwitchDefault = /*#__PURE__*/(() => {
  class NgSwitchDefault {
    constructor(viewContainer, templateRef, ngSwitch) {
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !ngSwitch) {
        throwNgSwitchProviderNotFoundError('ngSwitchDefault', 'NgSwitchDefault');
      }
      ngSwitch._addDefault(new SwitchView(viewContainer, templateRef));
    }
    static ɵfac = function NgSwitchDefault_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgSwitchDefault)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgSwitch, 9));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgSwitchDefault,
      selectors: [["", "ngSwitchDefault", ""]]
    });
  }
  return NgSwitchDefault;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function throwNgSwitchProviderNotFoundError(attrName, directiveName) {
  throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](2000, `An element with the "${attrName}" attribute ` + `(matching the "${directiveName}" directive) must be located inside an element with the "ngSwitch" attribute ` + `(matching "NgSwitch" directive)`);
}
let NgPlural = /*#__PURE__*/(() => {
  class NgPlural {
    _localization;
    _activeView;
    _caseViews = {};
    constructor(_localization) {
      this._localization = _localization;
    }
    set ngPlural(value) {
      this._updateView(value);
    }
    addCase(value, switchView) {
      this._caseViews[value] = switchView;
    }
    _updateView(switchValue) {
      this._clearViews();
      const cases = Object.keys(this._caseViews);
      const key = getPluralCategory(switchValue, cases, this._localization);
      this._activateView(this._caseViews[key]);
    }
    _clearViews() {
      if (this._activeView) this._activeView.destroy();
    }
    _activateView(view) {
      if (view) {
        this._activeView = view;
        this._activeView.create();
      }
    }
    static ɵfac = function NgPlural_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgPlural)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgLocalization));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgPlural,
      selectors: [["", "ngPlural", ""]],
      inputs: {
        ngPlural: "ngPlural"
      }
    });
  }
  return NgPlural;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NgPluralCase = /*#__PURE__*/(() => {
  class NgPluralCase {
    value;
    constructor(value, template, viewContainer, ngPlural) {
      this.value = value;
      const isANumber = !isNaN(Number(value));
      ngPlural.addCase(isANumber ? `=${value}` : value, new SwitchView(viewContainer, template));
    }
    static ɵfac = function NgPluralCase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgPluralCase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('ngPluralCase'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgPlural, 1));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgPluralCase,
      selectors: [["", "ngPluralCase", ""]]
    });
  }
  return NgPluralCase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NgStyle = /*#__PURE__*/(() => {
  class NgStyle {
    _ngEl;
    _differs;
    _renderer;
    _ngStyle = null;
    _differ = null;
    constructor(_ngEl, _differs, _renderer) {
      this._ngEl = _ngEl;
      this._differs = _differs;
      this._renderer = _renderer;
    }
    set ngStyle(values) {
      this._ngStyle = values;
      if (!this._differ && values) {
        this._differ = this._differs.find(values).create();
      }
    }
    ngDoCheck() {
      if (this._differ) {
        const changes = this._differ.diff(this._ngStyle);
        if (changes) {
          this._applyChanges(changes);
        }
      }
    }
    _setStyle(nameAndUnit, value) {
      const [name, unit] = nameAndUnit.split('.');
      const flags = name.indexOf('-') === -1 ? undefined : _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.DashCase;
      if (value != null) {
        this._renderer.setStyle(this._ngEl.nativeElement, name, unit ? `${value}${unit}` : value, flags);
      } else {
        this._renderer.removeStyle(this._ngEl.nativeElement, name, flags);
      }
    }
    _applyChanges(changes) {
      changes.forEachRemovedItem(record => this._setStyle(record.key, null));
      changes.forEachAddedItem(record => this._setStyle(record.key, record.currentValue));
      changes.forEachChangedItem(record => this._setStyle(record.key, record.currentValue));
    }
    static ɵfac = function NgStyle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgStyle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgStyle,
      selectors: [["", "ngStyle", ""]],
      inputs: {
        ngStyle: "ngStyle"
      }
    });
  }
  return NgStyle;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NgTemplateOutlet = /*#__PURE__*/(() => {
  class NgTemplateOutlet {
    _viewContainerRef;
    _viewRef = null;
    ngTemplateOutletContext = null;
    ngTemplateOutlet = null;
    ngTemplateOutletInjector = null;
    constructor(_viewContainerRef) {
      this._viewContainerRef = _viewContainerRef;
    }
    ngOnChanges(changes) {
      if (this._shouldRecreateView(changes)) {
        const viewContainerRef = this._viewContainerRef;
        if (this._viewRef) {
          viewContainerRef.remove(viewContainerRef.indexOf(this._viewRef));
        }
        if (!this.ngTemplateOutlet) {
          this._viewRef = null;
          return;
        }
        const viewContext = this._createContextForwardProxy();
        this._viewRef = viewContainerRef.createEmbeddedView(this.ngTemplateOutlet, viewContext, {
          injector: this.ngTemplateOutletInjector ?? undefined
        });
      }
    }
    _shouldRecreateView(changes) {
      return !!changes['ngTemplateOutlet'] || !!changes['ngTemplateOutletInjector'];
    }
    _createContextForwardProxy() {
      return new Proxy({}, {
        set: (_target, prop, newValue) => {
          if (!this.ngTemplateOutletContext) {
            return false;
          }
          return Reflect.set(this.ngTemplateOutletContext, prop, newValue);
        },
        get: (_target, prop, receiver) => {
          if (!this.ngTemplateOutletContext) {
            return undefined;
          }
          return Reflect.get(this.ngTemplateOutletContext, prop, receiver);
        }
      });
    }
    static ɵfac = function NgTemplateOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgTemplateOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgTemplateOutlet,
      selectors: [["", "ngTemplateOutlet", ""]],
      inputs: {
        ngTemplateOutletContext: "ngTemplateOutletContext",
        ngTemplateOutlet: "ngTemplateOutlet",
        ngTemplateOutletInjector: "ngTemplateOutletInjector"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
  return NgTemplateOutlet;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const COMMON_DIRECTIVES = [NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase];
function invalidPipeArgumentError(type, value) {
  return new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](2100, ngDevMode && `InvalidPipeArgument: '${value}' for pipe '${(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵstringify"])(type)}'`);
}
class SubscribableStrategy {
  createSubscription(async, updateLatestValue, onError) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => async.subscribe({
      next: updateLatestValue,
      error: onError
    }));
  }
  dispose(subscription) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => subscription.unsubscribe());
  }
}
class PromiseStrategy {
  createSubscription(async, updateLatestValue, onError) {
    async.then(v => updateLatestValue?.(v), e => onError?.(e));
    return {
      unsubscribe: () => {
        updateLatestValue = null;
        onError = null;
      }
    };
  }
  dispose(subscription) {
    subscription.unsubscribe();
  }
}
const _promiseStrategy = /*#__PURE__*/new PromiseStrategy();
const _subscribableStrategy = /*#__PURE__*/new SubscribableStrategy();
let AsyncPipe = /*#__PURE__*/(() => {
  class AsyncPipe {
    _ref;
    _latestValue = null;
    markForCheckOnValueUpdate = true;
    _subscription = null;
    _obj = null;
    _strategy = null;
    applicationErrorHandler = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINTERNAL_APPLICATION_ERROR_HANDLER"]);
    constructor(ref) {
      this._ref = ref;
    }
    ngOnDestroy() {
      if (this._subscription) {
        this._dispose();
      }
      this._ref = null;
    }
    transform(obj) {
      if (!this._obj) {
        if (obj) {
          try {
            this.markForCheckOnValueUpdate = false;
            this._subscribe(obj);
          } finally {
            this.markForCheckOnValueUpdate = true;
          }
        }
        return this._latestValue;
      }
      if (obj !== this._obj) {
        this._dispose();
        return this.transform(obj);
      }
      return this._latestValue;
    }
    _subscribe(obj) {
      this._obj = obj;
      this._strategy = this._selectStrategy(obj);
      this._subscription = this._strategy.createSubscription(obj, value => this._updateLatestValue(obj, value), e => this.applicationErrorHandler(e));
    }
    _selectStrategy(obj) {
      if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(obj)) {
        return _promiseStrategy;
      }
      if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisSubscribable"])(obj)) {
        return _subscribableStrategy;
      }
      throw invalidPipeArgumentError(AsyncPipe, obj);
    }
    _dispose() {
      this._strategy.dispose(this._subscription);
      this._latestValue = null;
      this._subscription = null;
      this._obj = null;
    }
    _updateLatestValue(async, value) {
      if (async === this._obj) {
        this._latestValue = value;
        if (this.markForCheckOnValueUpdate) {
          this._ref?.markForCheck();
        }
      }
    }
    static ɵfac = function AsyncPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AsyncPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef, 16));
    };
    static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "async",
      type: AsyncPipe,
      pure: false
    });
  }
  return AsyncPipe;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let LowerCasePipe = /*#__PURE__*/(() => {
  class LowerCasePipe {
    transform(value) {
      if (value == null) return null;
      if (typeof value !== 'string') {
        throw invalidPipeArgumentError(LowerCasePipe, value);
      }
      return value.toLowerCase();
    }
    static ɵfac = function LowerCasePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LowerCasePipe)();
    };
    static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "lowercase",
      type: LowerCasePipe,
      pure: true
    });
  }
  return LowerCasePipe;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const unicodeWordMatch = /(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;
let TitleCasePipe = /*#__PURE__*/(() => {
  class TitleCasePipe {
    transform(value) {
      if (value == null) return null;
      if (typeof value !== 'string') {
        throw invalidPipeArgumentError(TitleCasePipe, value);
      }
      return value.replace(unicodeWordMatch, txt => txt[0].toUpperCase() + txt.slice(1).toLowerCase());
    }
    static ɵfac = function TitleCasePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TitleCasePipe)();
    };
    static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "titlecase",
      type: TitleCasePipe,
      pure: true
    });
  }
  return TitleCasePipe;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let UpperCasePipe = /*#__PURE__*/(() => {
  class UpperCasePipe {
    transform(value) {
      if (value == null) return null;
      if (typeof value !== 'string') {
        throw invalidPipeArgumentError(UpperCasePipe, value);
      }
      return value.toUpperCase();
    }
    static ɵfac = function UpperCasePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UpperCasePipe)();
    };
    static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "uppercase",
      type: UpperCasePipe,
      pure: true
    });
  }
  return UpperCasePipe;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const DEFAULT_DATE_FORMAT = 'mediumDate';
const DATE_PIPE_DEFAULT_TIMEZONE = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'DATE_PIPE_DEFAULT_TIMEZONE' : '');
const DATE_PIPE_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'DATE_PIPE_DEFAULT_OPTIONS' : '');
let DatePipe = /*#__PURE__*/(() => {
  class DatePipe {
    locale;
    defaultTimezone;
    defaultOptions;
    constructor(locale, defaultTimezone, defaultOptions) {
      this.locale = locale;
      this.defaultTimezone = defaultTimezone;
      this.defaultOptions = defaultOptions;
    }
    transform(value, format, timezone, locale) {
      if (value == null || value === '' || value !== value) return null;
      try {
        const _format = format ?? this.defaultOptions?.dateFormat ?? DEFAULT_DATE_FORMAT;
        const _timezone = timezone ?? this.defaultOptions?.timezone ?? this.defaultTimezone ?? undefined;
        return formatDate(value, _format, locale || this.locale, _timezone);
      } catch (error) {
        throw invalidPipeArgumentError(DatePipe, error.message);
      }
    }
    static ɵfac = function DatePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID, 16), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DATE_PIPE_DEFAULT_TIMEZONE, 24), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DATE_PIPE_DEFAULT_OPTIONS, 24));
    };
    static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "date",
      type: DatePipe,
      pure: true
    });
  }
  return DatePipe;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const _INTERPOLATION_REGEXP = /#/g;
let I18nPluralPipe = /*#__PURE__*/(() => {
  class I18nPluralPipe {
    _localization;
    constructor(_localization) {
      this._localization = _localization;
    }
    transform(value, pluralMap, locale) {
      if (value == null) return '';
      if (typeof pluralMap !== 'object' || pluralMap === null) {
        throw invalidPipeArgumentError(I18nPluralPipe, pluralMap);
      }
      const key = getPluralCategory(value, Object.keys(pluralMap), this._localization, locale);
      return pluralMap[key].replace(_INTERPOLATION_REGEXP, value.toString());
    }
    static ɵfac = function I18nPluralPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || I18nPluralPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgLocalization, 16));
    };
    static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "i18nPlural",
      type: I18nPluralPipe,
      pure: true
    });
  }
  return I18nPluralPipe;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let I18nSelectPipe = /*#__PURE__*/(() => {
  class I18nSelectPipe {
    transform(value, mapping) {
      if (value == null) return '';
      if (typeof mapping !== 'object' || typeof value !== 'string') {
        throw invalidPipeArgumentError(I18nSelectPipe, mapping);
      }
      if (mapping.hasOwnProperty(value)) {
        return mapping[value];
      }
      if (mapping.hasOwnProperty('other')) {
        return mapping['other'];
      }
      return '';
    }
    static ɵfac = function I18nSelectPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || I18nSelectPipe)();
    };
    static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "i18nSelect",
      type: I18nSelectPipe,
      pure: true
    });
  }
  return I18nSelectPipe;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let JsonPipe = /*#__PURE__*/(() => {
  class JsonPipe {
    transform(value) {
      return JSON.stringify(value, null, 2);
    }
    static ɵfac = function JsonPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || JsonPipe)();
    };
    static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "json",
      type: JsonPipe,
      pure: false
    });
  }
  return JsonPipe;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function makeKeyValuePair(key, value) {
  return {
    key: key,
    value: value
  };
}
let KeyValuePipe = /*#__PURE__*/(() => {
  class KeyValuePipe {
    differs;
    constructor(differs) {
      this.differs = differs;
    }
    differ;
    keyValues = [];
    compareFn = defaultComparator;
    transform(input, compareFn = defaultComparator) {
      if (!input || !(input instanceof Map) && typeof input !== 'object') {
        return null;
      }
      this.differ ??= this.differs.find(input).create();
      const differChanges = this.differ.diff(input);
      const compareFnChanged = compareFn !== this.compareFn;
      if (differChanges) {
        this.keyValues = [];
        differChanges.forEachItem(r => {
          this.keyValues.push(makeKeyValuePair(r.key, r.currentValue));
        });
      }
      if (differChanges || compareFnChanged) {
        if (compareFn) {
          this.keyValues.sort(compareFn);
        }
        this.compareFn = compareFn;
      }
      return this.keyValues;
    }
    static ɵfac = function KeyValuePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || KeyValuePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers, 16));
    };
    static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "keyvalue",
      type: KeyValuePipe,
      pure: false
    });
  }
  return KeyValuePipe;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function defaultComparator(keyValueA, keyValueB) {
  const a = keyValueA.key;
  const b = keyValueB.key;
  if (a === b) return 0;
  if (a == null) return 1;
  if (b == null) return -1;
  if (typeof a == 'string' && typeof b == 'string') {
    return a < b ? -1 : 1;
  }
  if (typeof a == 'number' && typeof b == 'number') {
    return a - b;
  }
  if (typeof a == 'boolean' && typeof b == 'boolean') {
    return a < b ? -1 : 1;
  }
  const aString = String(a);
  const bString = String(b);
  return aString == bString ? 0 : aString < bString ? -1 : 1;
}
let DecimalPipe = /*#__PURE__*/(() => {
  class DecimalPipe {
    _locale;
    constructor(_locale) {
      this._locale = _locale;
    }
    transform(value, digitsInfo, locale) {
      if (!isValue(value)) return null;
      locale ||= this._locale;
      try {
        const num = strToNumber(value);
        return formatNumber(num, locale, digitsInfo);
      } catch (error) {
        throw invalidPipeArgumentError(DecimalPipe, error.message);
      }
    }
    static ɵfac = function DecimalPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DecimalPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID, 16));
    };
    static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "number",
      type: DecimalPipe,
      pure: true
    });
  }
  return DecimalPipe;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let PercentPipe = /*#__PURE__*/(() => {
  class PercentPipe {
    _locale;
    constructor(_locale) {
      this._locale = _locale;
    }
    transform(value, digitsInfo, locale) {
      if (!isValue(value)) return null;
      locale ||= this._locale;
      try {
        const num = strToNumber(value);
        return formatPercent(num, locale, digitsInfo);
      } catch (error) {
        throw invalidPipeArgumentError(PercentPipe, error.message);
      }
    }
    static ɵfac = function PercentPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PercentPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID, 16));
    };
    static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "percent",
      type: PercentPipe,
      pure: true
    });
  }
  return PercentPipe;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CurrencyPipe = /*#__PURE__*/(() => {
  class CurrencyPipe {
    _locale;
    _defaultCurrencyCode;
    constructor(_locale, _defaultCurrencyCode = 'USD') {
      this._locale = _locale;
      this._defaultCurrencyCode = _defaultCurrencyCode;
    }
    transform(value, currencyCode = this._defaultCurrencyCode, display = 'symbol', digitsInfo, locale) {
      if (!isValue(value)) return null;
      locale ||= this._locale;
      if (typeof display === 'boolean') {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          console.warn(`Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".`);
        }
        display = display ? 'symbol' : 'code';
      }
      let currency = currencyCode || this._defaultCurrencyCode;
      if (display !== 'code') {
        if (display === 'symbol' || display === 'symbol-narrow') {
          currency = getCurrencySymbol(currency, display === 'symbol' ? 'wide' : 'narrow', locale);
        } else {
          currency = display;
        }
      }
      try {
        const num = strToNumber(value);
        return formatCurrency(num, locale, currency, currencyCode, digitsInfo);
      } catch (error) {
        throw invalidPipeArgumentError(CurrencyPipe, error.message);
      }
    }
    static ɵfac = function CurrencyPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CurrencyPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID, 16), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CURRENCY_CODE, 16));
    };
    static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "currency",
      type: CurrencyPipe,
      pure: true
    });
  }
  return CurrencyPipe;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function isValue(value) {
  return !(value == null || value === '' || value !== value);
}
function strToNumber(value) {
  if (typeof value === 'string' && !isNaN(Number(value) - parseFloat(value))) {
    return Number(value);
  }
  if (typeof value !== 'number') {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](2309, ngDevMode && `${value} is not a number`);
  }
  return value;
}
let SlicePipe = /*#__PURE__*/(() => {
  class SlicePipe {
    transform(value, start, end) {
      if (value == null) return null;
      const supports = typeof value === 'string' || Array.isArray(value);
      if (!supports) {
        throw invalidPipeArgumentError(SlicePipe, value);
      }
      return value.slice(start, end);
    }
    static ɵfac = function SlicePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SlicePipe)();
    };
    static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "slice",
      type: SlicePipe,
      pure: false
    });
  }
  return SlicePipe;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const COMMON_PIPES = [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe];
let CommonModule = /*#__PURE__*/(() => {
  class CommonModule {
    static ɵfac = function CommonModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CommonModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CommonModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  }
  return CommonModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 89204
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ },

/***/ 97516
/*!**************************************************************!*\
  !*** ./node_modules/@angular/common/fesm2022/_xhr-chunk.mjs ***!
  \**************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XhrFactory: () => (/* binding */ XhrFactory),
/* harmony export */   parseCookieValue: () => (/* binding */ parseCookieValue)
/* harmony export */ });
/**
 * @license Angular v21.1.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */

function parseCookieValue(cookieStr, name) {
  name = encodeURIComponent(name);
  for (const cookie of cookieStr.split(';')) {
    const eqIndex = cookie.indexOf('=');
    const [cookieName, cookieValue] = eqIndex == -1 ? [cookie, ''] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)];
    if (cookieName.trim() === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}
class XhrFactory {}


/***/ }

}])
//# sourceMappingURL=316.js.map