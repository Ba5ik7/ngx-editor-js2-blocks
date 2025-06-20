(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[1570],{

/***/ 1019:
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/data-source-D34wiQZj.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ DataSource),
/* harmony export */   i: () => (/* binding */ isDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44866);

class DataSource {}
/** Checks whether an object is a data source. */
function isDataSource(value) {
  // Check if the value is a DataSource by observing if it has a connect function. Cannot
  // be checked as an `instanceof DataSource` since people could create their own sources
  // that match the interface, but don't extend DataSource. We also can't use `isObservable`
  // here, because of some internal apps.
  return value && typeof value.connect === 'function' && !(value instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.ConnectableObservable);
}


/***/ }),

/***/ 5758:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/keycodes-CpHkExLC.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ FF_EQUALS),
/* harmony export */   A: () => (/* binding */ A),
/* harmony export */   B: () => (/* binding */ BACKSPACE),
/* harmony export */   C: () => (/* binding */ CONTROL),
/* harmony export */   D: () => (/* binding */ DOWN_ARROW),
/* harmony export */   E: () => (/* binding */ END),
/* harmony export */   F: () => (/* binding */ F1),
/* harmony export */   G: () => (/* binding */ PRINT_SCREEN),
/* harmony export */   H: () => (/* binding */ HOME),
/* harmony export */   I: () => (/* binding */ INSERT),
/* harmony export */   J: () => (/* binding */ TWO),
/* harmony export */   K: () => (/* binding */ THREE),
/* harmony export */   L: () => (/* binding */ LEFT_ARROW),
/* harmony export */   M: () => (/* binding */ MAC_META),
/* harmony export */   N: () => (/* binding */ NINE),
/* harmony export */   O: () => (/* binding */ ONE),
/* harmony export */   P: () => (/* binding */ PAGE_DOWN),
/* harmony export */   Q: () => (/* binding */ FOUR),
/* harmony export */   R: () => (/* binding */ RIGHT_ARROW),
/* harmony export */   S: () => (/* binding */ SPACE),
/* harmony export */   T: () => (/* binding */ TAB),
/* harmony export */   U: () => (/* binding */ UP_ARROW),
/* harmony export */   V: () => (/* binding */ FIVE),
/* harmony export */   W: () => (/* binding */ SIX),
/* harmony export */   X: () => (/* binding */ SEVEN),
/* harmony export */   Y: () => (/* binding */ EIGHT),
/* harmony export */   Z: () => (/* binding */ Z),
/* harmony export */   _: () => (/* binding */ FF_SEMICOLON),
/* harmony export */   a: () => (/* binding */ PAGE_UP),
/* harmony export */   a$: () => (/* binding */ CLOSE_SQUARE_BRACKET),
/* harmony export */   a0: () => (/* binding */ QUESTION_MARK),
/* harmony export */   a1: () => (/* binding */ AT_SIGN),
/* harmony export */   a2: () => (/* binding */ B),
/* harmony export */   a3: () => (/* binding */ C),
/* harmony export */   a4: () => (/* binding */ D),
/* harmony export */   a5: () => (/* binding */ E),
/* harmony export */   a6: () => (/* binding */ F),
/* harmony export */   a7: () => (/* binding */ G),
/* harmony export */   a8: () => (/* binding */ H),
/* harmony export */   a9: () => (/* binding */ I),
/* harmony export */   aA: () => (/* binding */ NUMPAD_SEVEN),
/* harmony export */   aB: () => (/* binding */ NUMPAD_EIGHT),
/* harmony export */   aC: () => (/* binding */ NUMPAD_NINE),
/* harmony export */   aD: () => (/* binding */ NUMPAD_MULTIPLY),
/* harmony export */   aE: () => (/* binding */ NUMPAD_PLUS),
/* harmony export */   aF: () => (/* binding */ NUMPAD_MINUS),
/* harmony export */   aG: () => (/* binding */ NUMPAD_PERIOD),
/* harmony export */   aH: () => (/* binding */ NUMPAD_DIVIDE),
/* harmony export */   aI: () => (/* binding */ NUM_LOCK),
/* harmony export */   aJ: () => (/* binding */ SCROLL_LOCK),
/* harmony export */   aK: () => (/* binding */ FIRST_MEDIA),
/* harmony export */   aL: () => (/* binding */ FF_MINUS),
/* harmony export */   aM: () => (/* binding */ MUTE),
/* harmony export */   aN: () => (/* binding */ VOLUME_DOWN),
/* harmony export */   aO: () => (/* binding */ VOLUME_UP),
/* harmony export */   aP: () => (/* binding */ FF_MUTE),
/* harmony export */   aQ: () => (/* binding */ FF_VOLUME_DOWN),
/* harmony export */   aR: () => (/* binding */ LAST_MEDIA),
/* harmony export */   aS: () => (/* binding */ FF_VOLUME_UP),
/* harmony export */   aT: () => (/* binding */ SEMICOLON),
/* harmony export */   aU: () => (/* binding */ EQUALS),
/* harmony export */   aV: () => (/* binding */ DASH),
/* harmony export */   aW: () => (/* binding */ SLASH),
/* harmony export */   aX: () => (/* binding */ APOSTROPHE),
/* harmony export */   aY: () => (/* binding */ TILDE),
/* harmony export */   aZ: () => (/* binding */ OPEN_SQUARE_BRACKET),
/* harmony export */   a_: () => (/* binding */ BACKSLASH),
/* harmony export */   aa: () => (/* binding */ J),
/* harmony export */   ab: () => (/* binding */ K),
/* harmony export */   ac: () => (/* binding */ L),
/* harmony export */   ad: () => (/* binding */ M),
/* harmony export */   ae: () => (/* binding */ N),
/* harmony export */   af: () => (/* binding */ O),
/* harmony export */   ag: () => (/* binding */ P),
/* harmony export */   ah: () => (/* binding */ Q),
/* harmony export */   ai: () => (/* binding */ R),
/* harmony export */   aj: () => (/* binding */ S),
/* harmony export */   ak: () => (/* binding */ T),
/* harmony export */   al: () => (/* binding */ U),
/* harmony export */   am: () => (/* binding */ V),
/* harmony export */   an: () => (/* binding */ W),
/* harmony export */   ao: () => (/* binding */ X),
/* harmony export */   ap: () => (/* binding */ Y),
/* harmony export */   aq: () => (/* binding */ MAC_WK_CMD_LEFT),
/* harmony export */   ar: () => (/* binding */ MAC_WK_CMD_RIGHT),
/* harmony export */   as: () => (/* binding */ CONTEXT_MENU),
/* harmony export */   at: () => (/* binding */ NUMPAD_ZERO),
/* harmony export */   au: () => (/* binding */ NUMPAD_ONE),
/* harmony export */   av: () => (/* binding */ NUMPAD_TWO),
/* harmony export */   aw: () => (/* binding */ NUMPAD_THREE),
/* harmony export */   ax: () => (/* binding */ NUMPAD_FOUR),
/* harmony export */   ay: () => (/* binding */ NUMPAD_FIVE),
/* harmony export */   az: () => (/* binding */ NUMPAD_SIX),
/* harmony export */   b: () => (/* binding */ ZERO),
/* harmony export */   b0: () => (/* binding */ SINGLE_QUOTE),
/* harmony export */   c: () => (/* binding */ ENTER),
/* harmony export */   d: () => (/* binding */ ALT),
/* harmony export */   e: () => (/* binding */ META),
/* harmony export */   f: () => (/* binding */ SHIFT),
/* harmony export */   g: () => (/* binding */ ESCAPE),
/* harmony export */   h: () => (/* binding */ PERIOD),
/* harmony export */   i: () => (/* binding */ DELETE),
/* harmony export */   j: () => (/* binding */ F2),
/* harmony export */   k: () => (/* binding */ F3),
/* harmony export */   l: () => (/* binding */ F4),
/* harmony export */   m: () => (/* binding */ F5),
/* harmony export */   n: () => (/* binding */ F6),
/* harmony export */   o: () => (/* binding */ F7),
/* harmony export */   p: () => (/* binding */ F8),
/* harmony export */   q: () => (/* binding */ F9),
/* harmony export */   r: () => (/* binding */ F10),
/* harmony export */   s: () => (/* binding */ F11),
/* harmony export */   t: () => (/* binding */ F12),
/* harmony export */   u: () => (/* binding */ COMMA),
/* harmony export */   v: () => (/* binding */ MAC_ENTER),
/* harmony export */   w: () => (/* binding */ NUM_CENTER),
/* harmony export */   x: () => (/* binding */ PAUSE),
/* harmony export */   y: () => (/* binding */ CAPS_LOCK),
/* harmony export */   z: () => (/* binding */ PLUS_SIGN)
/* harmony export */ });
const MAC_ENTER = 3;
const BACKSPACE = 8;
const TAB = 9;
const NUM_CENTER = 12;
const ENTER = 13;
const SHIFT = 16;
const CONTROL = 17;
const ALT = 18;
const PAUSE = 19;
const CAPS_LOCK = 20;
const ESCAPE = 27;
const SPACE = 32;
const PAGE_UP = 33;
const PAGE_DOWN = 34;
const END = 35;
const HOME = 36;
const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const PLUS_SIGN = 43;
const PRINT_SCREEN = 44;
const INSERT = 45;
const DELETE = 46;
const ZERO = 48;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const FIVE = 53;
const SIX = 54;
const SEVEN = 55;
const EIGHT = 56;
const NINE = 57;
const FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186
const FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187
const QUESTION_MARK = 63;
const AT_SIGN = 64;
const A = 65;
const B = 66;
const C = 67;
const D = 68;
const E = 69;
const F = 70;
const G = 71;
const H = 72;
const I = 73;
const J = 74;
const K = 75;
const L = 76;
const M = 77;
const N = 78;
const O = 79;
const P = 80;
const Q = 81;
const R = 82;
const S = 83;
const T = 84;
const U = 85;
const V = 86;
const W = 87;
const X = 88;
const Y = 89;
const Z = 90;
const META = 91; // WIN_KEY_LEFT
const MAC_WK_CMD_LEFT = 91;
const MAC_WK_CMD_RIGHT = 93;
const CONTEXT_MENU = 93;
const NUMPAD_ZERO = 96;
const NUMPAD_ONE = 97;
const NUMPAD_TWO = 98;
const NUMPAD_THREE = 99;
const NUMPAD_FOUR = 100;
const NUMPAD_FIVE = 101;
const NUMPAD_SIX = 102;
const NUMPAD_SEVEN = 103;
const NUMPAD_EIGHT = 104;
const NUMPAD_NINE = 105;
const NUMPAD_MULTIPLY = 106;
const NUMPAD_PLUS = 107;
const NUMPAD_MINUS = 109;
const NUMPAD_PERIOD = 110;
const NUMPAD_DIVIDE = 111;
const F1 = 112;
const F2 = 113;
const F3 = 114;
const F4 = 115;
const F5 = 116;
const F6 = 117;
const F7 = 118;
const F8 = 119;
const F9 = 120;
const F10 = 121;
const F11 = 122;
const F12 = 123;
const NUM_LOCK = 144;
const SCROLL_LOCK = 145;
const FIRST_MEDIA = 166;
const FF_MINUS = 173;
const MUTE = 173; // Firefox (Gecko) fires 181 for MUTE
const VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN
const VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP
const FF_MUTE = 181;
const FF_VOLUME_DOWN = 182;
const LAST_MEDIA = 183;
const FF_VOLUME_UP = 183;
const SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON
const EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS
const COMMA = 188;
const DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS
const PERIOD = 190;
const SLASH = 191;
const APOSTROPHE = 192;
const TILDE = 192;
const OPEN_SQUARE_BRACKET = 219;
const BACKSLASH = 220;
const CLOSE_SQUARE_BRACKET = 221;
const SINGLE_QUOTE = 222;
const MAC_META = 224;


/***/ }),

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

/***/ 6883:
/*!************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/overlay-module-Bd2UplUU.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ BlockScrollStrategy),
/* harmony export */   C: () => (/* binding */ CdkOverlayOrigin),
/* harmony export */   F: () => (/* binding */ FlexibleConnectedPositionStrategy),
/* harmony export */   G: () => (/* binding */ GlobalPositionStrategy),
/* harmony export */   N: () => (/* binding */ NoopScrollStrategy),
/* harmony export */   O: () => (/* binding */ OverlayContainer),
/* harmony export */   R: () => (/* binding */ RepositionScrollStrategy),
/* harmony export */   S: () => (/* binding */ STANDARD_DROPDOWN_ADJACENT_POSITIONS),
/* harmony export */   a: () => (/* binding */ Overlay),
/* harmony export */   b: () => (/* binding */ CdkConnectedOverlay),
/* harmony export */   c: () => (/* binding */ createOverlayRef),
/* harmony export */   d: () => (/* binding */ OverlayRef),
/* harmony export */   e: () => (/* binding */ OverlayPositionBuilder),
/* harmony export */   f: () => (/* binding */ createGlobalPositionStrategy),
/* harmony export */   g: () => (/* binding */ STANDARD_DROPDOWN_BELOW_POSITIONS),
/* harmony export */   h: () => (/* binding */ createFlexibleConnectedPositionStrategy),
/* harmony export */   i: () => (/* binding */ OverlayConfig),
/* harmony export */   j: () => (/* binding */ ConnectionPositionPair),
/* harmony export */   k: () => (/* binding */ ScrollingVisibility),
/* harmony export */   l: () => (/* binding */ ConnectedOverlayPositionChange),
/* harmony export */   m: () => (/* binding */ validateHorizontalPosition),
/* harmony export */   n: () => (/* binding */ ScrollStrategyOptions),
/* harmony export */   o: () => (/* binding */ createRepositionScrollStrategy),
/* harmony export */   p: () => (/* binding */ CloseScrollStrategy),
/* harmony export */   q: () => (/* binding */ createCloseScrollStrategy),
/* harmony export */   r: () => (/* binding */ createNoopScrollStrategy),
/* harmony export */   s: () => (/* binding */ createBlockScrollStrategy),
/* harmony export */   t: () => (/* binding */ OverlayModule),
/* harmony export */   u: () => (/* binding */ OverlayOutsideClickDispatcher),
/* harmony export */   v: () => (/* binding */ validateVerticalPosition),
/* harmony export */   w: () => (/* binding */ OverlayKeyboardDispatcher)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 85914);
/* harmony import */ var _platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./platform-DNDzkVcI.mjs */ 6427);
/* harmony import */ var _shadow_dom_B0oHn41l_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shadow-dom-B0oHn41l.mjs */ 66488);
/* harmony import */ var _test_environment_CT0XxPyp_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./test-environment-CT0XxPyp.mjs */ 65757);
/* harmony import */ var _style_loader_B2sGQXxD_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style-loader-B2sGQXxD.mjs */ 82981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css-pixel-value-C_HEqLhI.mjs */ 78916);
/* harmony import */ var _array_I1yfCXUO_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array-I1yfCXUO.mjs */ 97184);
/* harmony import */ var _scrolling_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrolling.mjs */ 79975);
/* harmony import */ var _portal_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./portal.mjs */ 9168);
/* harmony import */ var _scrolling_BkvA05C8_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrolling-BkvA05C8.mjs */ 59566);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _id_generator_LuoRZSid_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./id-generator-LuoRZSid.mjs */ 51590);
/* harmony import */ var _directionality_CChdj3az_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directionality-CChdj3az.mjs */ 32373);
/* harmony import */ var _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./keycodes-CpHkExLC.mjs */ 5758);
/* harmony import */ var _keycodes_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./keycodes.mjs */ 74879);
/* harmony import */ var _bidi_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bidi.mjs */ 63680);



















const scrollBehaviorSupported = /*#__PURE__*/(0,_scrolling_BkvA05C8_mjs__WEBPACK_IMPORTED_MODULE_4__.s)();
/**
 * Creates a scroll strategy that prevents the user from scrolling while the overlay is open.
 * @param injector Injector used to resolve dependencies of the scroll strategy.
 * @param config Configuration options for the scroll strategy.
 */
function createBlockScrollStrategy(injector) {
  return new BlockScrollStrategy(injector.get(_scrolling_mjs__WEBPACK_IMPORTED_MODULE_5__.ViewportRuler), injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
}
/**
 * Strategy that will prevent the user from scrolling while the overlay is visible.
 */
class BlockScrollStrategy {
  _viewportRuler;
  _previousHTMLStyles = {
    top: '',
    left: ''
  };
  _previousScrollPosition;
  _isEnabled = false;
  _document;
  constructor(_viewportRuler, document) {
    this._viewportRuler = _viewportRuler;
    this._document = document;
  }
  /** Attaches this scroll strategy to an overlay. */
  attach() {}
  /** Blocks page-level scroll while the attached overlay is open. */
  enable() {
    if (this._canBeEnabled()) {
      const root = this._document.documentElement;
      this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
      // Cache the previous inline styles in case the user had set them.
      this._previousHTMLStyles.left = root.style.left || '';
      this._previousHTMLStyles.top = root.style.top || '';
      // Note: we're using the `html` node, instead of the `body`, because the `body` may
      // have the user agent margin, whereas the `html` is guaranteed not to have one.
      root.style.left = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(-this._previousScrollPosition.left);
      root.style.top = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(-this._previousScrollPosition.top);
      root.classList.add('cdk-global-scrollblock');
      this._isEnabled = true;
    }
  }
  /** Unblocks page-level scroll while the attached overlay is open. */
  disable() {
    if (this._isEnabled) {
      const html = this._document.documentElement;
      const body = this._document.body;
      const htmlStyle = html.style;
      const bodyStyle = body.style;
      const previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
      const previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
      this._isEnabled = false;
      htmlStyle.left = this._previousHTMLStyles.left;
      htmlStyle.top = this._previousHTMLStyles.top;
      html.classList.remove('cdk-global-scrollblock');
      // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
      // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
      // Note that we don't mutate the property if the browser doesn't support `scroll-behavior`,
      // because it can throw off feature detections in `supportsScrollBehavior` which
      // checks for `'scrollBehavior' in documentElement.style`.
      if (scrollBehaviorSupported) {
        htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
      }
      window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
      if (scrollBehaviorSupported) {
        htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
        bodyStyle.scrollBehavior = previousBodyScrollBehavior;
      }
    }
  }
  _canBeEnabled() {
    // Since the scroll strategies can't be singletons, we have to use a global CSS class
    // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
    // scrolling multiple times.
    const html = this._document.documentElement;
    if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
      return false;
    }
    const rootElement = this._document.documentElement;
    const viewport = this._viewportRuler.getViewportSize();
    return rootElement.scrollHeight > viewport.height || rootElement.scrollWidth > viewport.width;
  }
}

/**
 * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
 */
function getMatScrollStrategyAlreadyAttachedError() {
  return Error(`Scroll strategy has already been attached.`);
}

/**
 * Creates a scroll strategy that closes the overlay when the user starts to scroll.
 * @param injector Injector used to resolve dependencies of the scroll strategy.
 * @param config Configuration options for the scroll strategy.
 */
function createCloseScrollStrategy(injector, config) {
  return new CloseScrollStrategy(injector.get(_scrolling_mjs__WEBPACK_IMPORTED_MODULE_5__.ScrollDispatcher), injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), injector.get(_scrolling_mjs__WEBPACK_IMPORTED_MODULE_5__.ViewportRuler), config);
}
/**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
class CloseScrollStrategy {
  _scrollDispatcher;
  _ngZone;
  _viewportRuler;
  _config;
  _scrollSubscription = null;
  _overlayRef;
  _initialScrollPosition;
  constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
    this._scrollDispatcher = _scrollDispatcher;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._config = _config;
  }
  /** Attaches this scroll strategy to an overlay. */
  attach(overlayRef) {
    if (this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatScrollStrategyAlreadyAttachedError();
    }
    this._overlayRef = overlayRef;
  }
  /** Enables the closing of the attached overlay on scroll. */
  enable() {
    if (this._scrollSubscription) {
      return;
    }
    const stream = this._scrollDispatcher.scrolled(0).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(scrollable => {
      return !scrollable || !this._overlayRef.overlayElement.contains(scrollable.getElementRef().nativeElement);
    }));
    if (this._config && this._config.threshold && this._config.threshold > 1) {
      this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
      this._scrollSubscription = stream.subscribe(() => {
        const scrollPosition = this._viewportRuler.getViewportScrollPosition().top;
        if (Math.abs(scrollPosition - this._initialScrollPosition) > this._config.threshold) {
          this._detach();
        } else {
          this._overlayRef.updatePosition();
        }
      });
    } else {
      this._scrollSubscription = stream.subscribe(this._detach);
    }
  }
  /** Disables the closing the attached overlay on scroll. */
  disable() {
    if (this._scrollSubscription) {
      this._scrollSubscription.unsubscribe();
      this._scrollSubscription = null;
    }
  }
  detach() {
    this.disable();
    this._overlayRef = null;
  }
  /** Detaches the overlay ref and disables the scroll strategy. */
  _detach = () => {
    this.disable();
    if (this._overlayRef.hasAttached()) {
      this._ngZone.run(() => this._overlayRef.detach());
    }
  };
}

/** Creates a scroll strategy that does nothing. */
function createNoopScrollStrategy() {
  return new NoopScrollStrategy();
}
/** Scroll strategy that doesn't do anything. */
class NoopScrollStrategy {
  /** Does nothing, as this scroll strategy is a no-op. */
  enable() {}
  /** Does nothing, as this scroll strategy is a no-op. */
  disable() {}
  /** Does nothing, as this scroll strategy is a no-op. */
  attach() {}
}

/**
 * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
 * @param element Dimensions of the element (from getBoundingClientRect)
 * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @returns Whether the element is scrolled out of view
 * @docs-private
 */
function isElementScrolledOutsideView(element, scrollContainers) {
  return scrollContainers.some(containerBounds => {
    const outsideAbove = element.bottom < containerBounds.top;
    const outsideBelow = element.top > containerBounds.bottom;
    const outsideLeft = element.right < containerBounds.left;
    const outsideRight = element.left > containerBounds.right;
    return outsideAbove || outsideBelow || outsideLeft || outsideRight;
  });
}
/**
 * Gets whether an element is clipped by any of its scrolling containers.
 * @param element Dimensions of the element (from getBoundingClientRect)
 * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @returns Whether the element is clipped
 * @docs-private
 */
function isElementClippedByScrolling(element, scrollContainers) {
  return scrollContainers.some(scrollContainerRect => {
    const clippedAbove = element.top < scrollContainerRect.top;
    const clippedBelow = element.bottom > scrollContainerRect.bottom;
    const clippedLeft = element.left < scrollContainerRect.left;
    const clippedRight = element.right > scrollContainerRect.right;
    return clippedAbove || clippedBelow || clippedLeft || clippedRight;
  });
}

/**
 * Creates a scroll strategy that updates the overlay's position when the user scrolls.
 * @param injector Injector used to resolve dependencies of the scroll strategy.
 * @param config Configuration options for the scroll strategy.
 */
function createRepositionScrollStrategy(injector, config) {
  return new RepositionScrollStrategy(injector.get(_scrolling_mjs__WEBPACK_IMPORTED_MODULE_5__.ScrollDispatcher), injector.get(_scrolling_mjs__WEBPACK_IMPORTED_MODULE_5__.ViewportRuler), injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), config);
}
/**
 * Strategy that will update the element position as the user is scrolling.
 */
class RepositionScrollStrategy {
  _scrollDispatcher;
  _viewportRuler;
  _ngZone;
  _config;
  _scrollSubscription = null;
  _overlayRef;
  constructor(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
    this._scrollDispatcher = _scrollDispatcher;
    this._viewportRuler = _viewportRuler;
    this._ngZone = _ngZone;
    this._config = _config;
  }
  /** Attaches this scroll strategy to an overlay. */
  attach(overlayRef) {
    if (this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatScrollStrategyAlreadyAttachedError();
    }
    this._overlayRef = overlayRef;
  }
  /** Enables repositioning of the attached overlay on scroll. */
  enable() {
    if (!this._scrollSubscription) {
      const throttle = this._config ? this._config.scrollThrottle : 0;
      this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(() => {
        this._overlayRef.updatePosition();
        // TODO(crisbeto): make `close` on by default once all components can handle it.
        if (this._config && this._config.autoClose) {
          const overlayRect = this._overlayRef.overlayElement.getBoundingClientRect();
          const {
            width,
            height
          } = this._viewportRuler.getViewportSize();
          // TODO(crisbeto): include all ancestor scroll containers here once
          // we have a way of exposing the trigger element to the scroll strategy.
          const parentRects = [{
            width,
            height,
            bottom: height,
            right: width,
            top: 0,
            left: 0
          }];
          if (isElementScrolledOutsideView(overlayRect, parentRects)) {
            this.disable();
            this._ngZone.run(() => this._overlayRef.detach());
          }
        }
      });
    }
  }
  /** Disables repositioning of the attached overlay on scroll. */
  disable() {
    if (this._scrollSubscription) {
      this._scrollSubscription.unsubscribe();
      this._scrollSubscription = null;
    }
  }
  detach() {
    this.disable();
    this._overlayRef = null;
  }
}

/**
 * Options for how an overlay will handle scrolling.
 *
 * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
 * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
 */
let ScrollStrategyOptions = /*#__PURE__*/(() => {
  class ScrollStrategyOptions {
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    constructor() {}
    /** Do nothing on scroll. */
    noop = () => new NoopScrollStrategy();
    /**
     * Close the overlay as soon as the user scrolls.
     * @param config Configuration to be used inside the scroll strategy.
     */
    close = config => createCloseScrollStrategy(this._injector, config);
    /** Block scrolling. */
    block = () => createBlockScrollStrategy(this._injector);
    /**
     * Update the overlay's position on scroll.
     * @param config Configuration to be used inside the scroll strategy.
     * Allows debouncing the reposition calls.
     */
    reposition = config => createRepositionScrollStrategy(this._injector, config);
    static ɵfac = function ScrollStrategyOptions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ScrollStrategyOptions)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ScrollStrategyOptions,
      factory: ScrollStrategyOptions.ɵfac,
      providedIn: 'root'
    });
  }
  return ScrollStrategyOptions;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Initial configuration used when creating an overlay. */
class OverlayConfig {
  /** Strategy with which to position the overlay. */
  positionStrategy;
  /** Strategy to be used when handling scroll events while the overlay is open. */
  scrollStrategy = /*#__PURE__*/new NoopScrollStrategy();
  /** Custom class to add to the overlay pane. */
  panelClass = '';
  /** Whether the overlay has a backdrop. */
  hasBackdrop = false;
  /** Custom class to add to the backdrop */
  backdropClass = 'cdk-overlay-dark-backdrop';
  /** Whether to disable any built-in animations. */
  disableAnimations;
  /** The width of the overlay panel. If a number is provided, pixel units are assumed. */
  width;
  /** The height of the overlay panel. If a number is provided, pixel units are assumed. */
  height;
  /** The min-width of the overlay panel. If a number is provided, pixel units are assumed. */
  minWidth;
  /** The min-height of the overlay panel. If a number is provided, pixel units are assumed. */
  minHeight;
  /** The max-width of the overlay panel. If a number is provided, pixel units are assumed. */
  maxWidth;
  /** The max-height of the overlay panel. If a number is provided, pixel units are assumed. */
  maxHeight;
  /**
   * Direction of the text in the overlay panel. If a `Directionality` instance
   * is passed in, the overlay will handle changes to its value automatically.
   */
  direction;
  /**
   * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
   * Note that this usually doesn't include clicking on links (unless the user is using
   * the `HashLocationStrategy`).
   */
  disposeOnNavigation = false;
  constructor(config) {
    if (config) {
      // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
      // loses the array generic type in the `for of`. But we *also* have to use `Array` because
      // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
      const configKeys = Object.keys(config);
      for (const key of configKeys) {
        if (config[key] !== undefined) {
          // TypeScript, as of version 3.5, sees the left-hand-side of this expression
          // as "I don't know *which* key this is, so the only valid value is the intersection
          // of all the possible values." In this case, that happens to be `undefined`. TypeScript
          // is not smart enough to see that the right-hand-side is actually an access of the same
          // exact type with the same exact key, meaning that the value type must be identical.
          // So we use `any` to work around this.
          this[key] = config[key];
        }
      }
    }
  }
}

/** The points of the origin element and the overlay element to connect. */
class ConnectionPositionPair {
  offsetX;
  offsetY;
  panelClass;
  /** X-axis attachment point for connected overlay origin. Can be 'start', 'end', or 'center'. */
  originX;
  /** Y-axis attachment point for connected overlay origin. Can be 'top', 'bottom', or 'center'. */
  originY;
  /** X-axis attachment point for connected overlay. Can be 'start', 'end', or 'center'. */
  overlayX;
  /** Y-axis attachment point for connected overlay. Can be 'top', 'bottom', or 'center'. */
  overlayY;
  constructor(origin, overlay, /** Offset along the X axis. */
  offsetX, /** Offset along the Y axis. */
  offsetY, /** Class(es) to be applied to the panel while this position is active. */
  panelClass) {
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.panelClass = panelClass;
    this.originX = origin.originX;
    this.originY = origin.originY;
    this.overlayX = overlay.overlayX;
    this.overlayY = overlay.overlayY;
  }
}
/**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 *
 *  @docs-private
 */
class ScrollingVisibility {
  isOriginClipped;
  isOriginOutsideView;
  isOverlayClipped;
  isOverlayOutsideView;
}
/** The change event emitted by the strategy when a fallback position is used. */
class ConnectedOverlayPositionChange {
  connectionPair;
  scrollableViewProperties;
  constructor(/** The position used as a result of this change. */
  connectionPair, /** @docs-private */
  scrollableViewProperties) {
    this.connectionPair = connectionPair;
    this.scrollableViewProperties = scrollableViewProperties;
  }
}
/**
 * Validates whether a vertical position property matches the expected values.
 * @param property Name of the property being validated.
 * @param value Value of the property being validated.
 * @docs-private
 */
function validateVerticalPosition(property, value) {
  if (value !== 'top' && value !== 'bottom' && value !== 'center') {
    throw Error(`ConnectedPosition: Invalid ${property} "${value}". ` + `Expected "top", "bottom" or "center".`);
  }
}
/**
 * Validates whether a horizontal position property matches the expected values.
 * @param property Name of the property being validated.
 * @param value Value of the property being validated.
 * @docs-private
 */
function validateHorizontalPosition(property, value) {
  if (value !== 'start' && value !== 'end' && value !== 'center') {
    throw Error(`ConnectedPosition: Invalid ${property} "${value}". ` + `Expected "start", "end" or "center".`);
  }
}

/**
 * Service for dispatching events that land on the body to appropriate overlay ref,
 * if any. It maintains a list of attached overlays to determine best suited overlay based
 * on event target and order of overlay opens.
 */
let BaseOverlayDispatcher = /*#__PURE__*/(() => {
  class BaseOverlayDispatcher {
    /** Currently attached overlays in the order they were attached. */
    _attachedOverlays = [];
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _isAttached;
    constructor() {}
    ngOnDestroy() {
      this.detach();
    }
    /** Add a new overlay to the list of attached overlay refs. */
    add(overlayRef) {
      // Ensure that we don't get the same overlay multiple times.
      this.remove(overlayRef);
      this._attachedOverlays.push(overlayRef);
    }
    /** Remove an overlay from the list of attached overlay refs. */
    remove(overlayRef) {
      const index = this._attachedOverlays.indexOf(overlayRef);
      if (index > -1) {
        this._attachedOverlays.splice(index, 1);
      }
      // Remove the global listener once there are no more overlays.
      if (this._attachedOverlays.length === 0) {
        this.detach();
      }
    }
    static ɵfac = function BaseOverlayDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BaseOverlayDispatcher)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BaseOverlayDispatcher,
      factory: BaseOverlayDispatcher.ɵfac,
      providedIn: 'root'
    });
  }
  return BaseOverlayDispatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
 * if any. It maintains a list of attached overlays to determine best suited overlay based
 * on event target and order of overlay opens.
 */
let OverlayKeyboardDispatcher = /*#__PURE__*/(() => {
  class OverlayKeyboardDispatcher extends BaseOverlayDispatcher {
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
    _cleanupKeydown;
    /** Add a new overlay to the list of attached overlay refs. */
    add(overlayRef) {
      super.add(overlayRef);
      // Lazily start dispatcher once first overlay is added
      if (!this._isAttached) {
        this._ngZone.runOutsideAngular(() => {
          this._cleanupKeydown = this._renderer.listen('body', 'keydown', this._keydownListener);
        });
        this._isAttached = true;
      }
    }
    /** Detaches the global keyboard event listener. */
    detach() {
      if (this._isAttached) {
        this._cleanupKeydown?.();
        this._isAttached = false;
      }
    }
    /** Keyboard event listener that will be attached to the body. */
    _keydownListener = event => {
      const overlays = this._attachedOverlays;
      for (let i = overlays.length - 1; i > -1; i--) {
        // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
        // We want to target the most recent overlay, rather than trying to match where the event came
        // from, because some components might open an overlay, but keep focus on a trigger element
        // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
        // because we don't want overlays that don't handle keyboard events to block the ones below
        // them that do.
        if (overlays[i]._keydownEvents.observers.length > 0) {
          this._ngZone.run(() => overlays[i]._keydownEvents.next(event));
          break;
        }
      }
    };
    static ɵfac = /* @__PURE__ */(() => {
      let ɵOverlayKeyboardDispatcher_BaseFactory;
      return function OverlayKeyboardDispatcher_Factory(__ngFactoryType__) {
        return (ɵOverlayKeyboardDispatcher_BaseFactory || (ɵOverlayKeyboardDispatcher_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](OverlayKeyboardDispatcher)))(__ngFactoryType__ || OverlayKeyboardDispatcher);
      };
    })();
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OverlayKeyboardDispatcher,
      factory: OverlayKeyboardDispatcher.ɵfac,
      providedIn: 'root'
    });
  }
  return OverlayKeyboardDispatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Service for dispatching mouse click events that land on the body to appropriate overlay ref,
 * if any. It maintains a list of attached overlays to determine best suited overlay based
 * on event target and order of overlay opens.
 */
let OverlayOutsideClickDispatcher = /*#__PURE__*/(() => {
  class OverlayOutsideClickDispatcher extends BaseOverlayDispatcher {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_7__.P);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
    _cursorOriginalValue;
    _cursorStyleIsSet = false;
    _pointerDownEventTarget;
    _cleanups;
    /** Add a new overlay to the list of attached overlay refs. */
    add(overlayRef) {
      super.add(overlayRef);
      // Safari on iOS does not generate click events for non-interactive
      // elements. However, we want to receive a click for any element outside
      // the overlay. We can force a "clickable" state by setting
      // `cursor: pointer` on the document body. See:
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile
      // https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html
      if (!this._isAttached) {
        const body = this._document.body;
        const eventOptions = {
          capture: true
        };
        const renderer = this._renderer;
        this._cleanups = this._ngZone.runOutsideAngular(() => [renderer.listen(body, 'pointerdown', this._pointerDownListener, eventOptions), renderer.listen(body, 'click', this._clickListener, eventOptions), renderer.listen(body, 'auxclick', this._clickListener, eventOptions), renderer.listen(body, 'contextmenu', this._clickListener, eventOptions)]);
        // click event is not fired on iOS. To make element "clickable" we are
        // setting the cursor to pointer
        if (this._platform.IOS && !this._cursorStyleIsSet) {
          this._cursorOriginalValue = body.style.cursor;
          body.style.cursor = 'pointer';
          this._cursorStyleIsSet = true;
        }
        this._isAttached = true;
      }
    }
    /** Detaches the global keyboard event listener. */
    detach() {
      if (this._isAttached) {
        this._cleanups?.forEach(cleanup => cleanup());
        this._cleanups = undefined;
        if (this._platform.IOS && this._cursorStyleIsSet) {
          this._document.body.style.cursor = this._cursorOriginalValue;
          this._cursorStyleIsSet = false;
        }
        this._isAttached = false;
      }
    }
    /** Store pointerdown event target to track origin of click. */
    _pointerDownListener = event => {
      this._pointerDownEventTarget = (0,_shadow_dom_B0oHn41l_mjs__WEBPACK_IMPORTED_MODULE_8__._)(event);
    };
    /** Click event listener that will be attached to the body propagate phase. */
    _clickListener = event => {
      const target = (0,_shadow_dom_B0oHn41l_mjs__WEBPACK_IMPORTED_MODULE_8__._)(event);
      // In case of a click event, we want to check the origin of the click
      // (e.g. in case where a user starts a click inside the overlay and
      // releases the click outside of it).
      // This is done by using the event target of the preceding pointerdown event.
      // Every click event caused by a pointer device has a preceding pointerdown
      // event, unless the click was programmatically triggered (e.g. in a unit test).
      const origin = event.type === 'click' && this._pointerDownEventTarget ? this._pointerDownEventTarget : target;
      // Reset the stored pointerdown event target, to avoid having it interfere
      // in subsequent events.
      this._pointerDownEventTarget = null;
      // We copy the array because the original may be modified asynchronously if the
      // outsidePointerEvents listener decides to detach overlays resulting in index errors inside
      // the for loop.
      const overlays = this._attachedOverlays.slice();
      // Dispatch the mouse event to the top overlay which has subscribers to its mouse events.
      // We want to target all overlays for which the click could be considered as outside click.
      // As soon as we reach an overlay for which the click is not outside click we break off
      // the loop.
      for (let i = overlays.length - 1; i > -1; i--) {
        const overlayRef = overlays[i];
        if (overlayRef._outsidePointerEvents.observers.length < 1 || !overlayRef.hasAttached()) {
          continue;
        }
        // If it's a click inside the overlay, just break - we should do nothing
        // If it's an outside click (both origin and target of the click) dispatch the mouse event,
        // and proceed with the next overlay
        if (containsPierceShadowDom(overlayRef.overlayElement, target) || containsPierceShadowDom(overlayRef.overlayElement, origin)) {
          break;
        }
        const outsidePointerEvents = overlayRef._outsidePointerEvents;
        /** @breaking-change 14.0.0 _ngZone will be required. */
        if (this._ngZone) {
          this._ngZone.run(() => outsidePointerEvents.next(event));
        } else {
          outsidePointerEvents.next(event);
        }
      }
    };
    static ɵfac = /* @__PURE__ */(() => {
      let ɵOverlayOutsideClickDispatcher_BaseFactory;
      return function OverlayOutsideClickDispatcher_Factory(__ngFactoryType__) {
        return (ɵOverlayOutsideClickDispatcher_BaseFactory || (ɵOverlayOutsideClickDispatcher_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](OverlayOutsideClickDispatcher)))(__ngFactoryType__ || OverlayOutsideClickDispatcher);
      };
    })();
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OverlayOutsideClickDispatcher,
      factory: OverlayOutsideClickDispatcher.ɵfac,
      providedIn: 'root'
    });
  }
  return OverlayOutsideClickDispatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Version of `Element.contains` that transcends shadow DOM boundaries. */
function containsPierceShadowDom(parent, child) {
  const supportsShadowRoot = typeof ShadowRoot !== 'undefined' && ShadowRoot;
  let current = child;
  while (current) {
    if (current === parent) {
      return true;
    }
    current = supportsShadowRoot && current instanceof ShadowRoot ? current.host : current.parentNode;
  }
  return false;
}
let _CdkOverlayStyleLoader = /*#__PURE__*/(() => {
  class _CdkOverlayStyleLoader {
    static ɵfac = function _CdkOverlayStyleLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkOverlayStyleLoader)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: _CdkOverlayStyleLoader,
      selectors: [["ng-component"]],
      hostAttrs: ["cdk-overlay-style-loader", ""],
      decls: 0,
      vars: 0,
      template: function _CdkOverlayStyleLoader_Template(rf, ctx) {},
      styles: [".cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0;touch-action:manipulation}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}@media(prefers-reduced-motion){.cdk-overlay-backdrop{transition-duration:1ms}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return _CdkOverlayStyleLoader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Container inside which all overlays will render. */
let OverlayContainer = /*#__PURE__*/(() => {
  class OverlayContainer {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_7__.P);
    _containerElement;
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _styleLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_style_loader_B2sGQXxD_mjs__WEBPACK_IMPORTED_MODULE_9__._);
    constructor() {}
    ngOnDestroy() {
      this._containerElement?.remove();
    }
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    getContainerElement() {
      this._loadStyles();
      if (!this._containerElement) {
        this._createContainer();
      }
      return this._containerElement;
    }
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    _createContainer() {
      const containerClass = 'cdk-overlay-container';
      // TODO(crisbeto): remove the testing check once we have an overlay testing
      // module or Angular starts tearing down the testing `NgModule`. See:
      // https://github.com/angular/angular/issues/18831
      if (this._platform.isBrowser || (0,_test_environment_CT0XxPyp_mjs__WEBPACK_IMPORTED_MODULE_10__._)()) {
        const oppositePlatformContainers = this._document.querySelectorAll(`.${containerClass}[platform="server"], ` + `.${containerClass}[platform="test"]`);
        // Remove any old containers from the opposite platform.
        // This can happen when transitioning from the server to the client.
        for (let i = 0; i < oppositePlatformContainers.length; i++) {
          oppositePlatformContainers[i].remove();
        }
      }
      const container = this._document.createElement('div');
      container.classList.add(containerClass);
      // A long time ago we kept adding new overlay containers whenever a new app was instantiated,
      // but at some point we added logic which clears the duplicate ones in order to avoid leaks.
      // The new logic was a little too aggressive since it was breaking some legitimate use cases.
      // To mitigate the problem we made it so that only containers from a different platform are
      // cleared, but the side-effect was that people started depending on the overly-aggressive
      // logic to clean up their tests for them. Until we can introduce an overlay-specific testing
      // module which does the cleanup, we try to detect that we're in a test environment and we
      // always clear the container. See #17006.
      // TODO(crisbeto): remove the test environment check once we have an overlay testing module.
      if ((0,_test_environment_CT0XxPyp_mjs__WEBPACK_IMPORTED_MODULE_10__._)()) {
        container.setAttribute('platform', 'test');
      } else if (!this._platform.isBrowser) {
        container.setAttribute('platform', 'server');
      }
      this._document.body.appendChild(container);
      this._containerElement = container;
    }
    /** Loads the structural styles necessary for the overlay to work. */
    _loadStyles() {
      this._styleLoader.load(_CdkOverlayStyleLoader);
    }
    static ɵfac = function OverlayContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OverlayContainer)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OverlayContainer,
      factory: OverlayContainer.ɵfac,
      providedIn: 'root'
    });
  }
  return OverlayContainer;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Encapsulates the logic for attaching and detaching a backdrop. */
class BackdropRef {
  _renderer;
  _ngZone;
  element;
  _cleanupClick;
  _cleanupTransitionEnd;
  _fallbackTimeout;
  constructor(document, _renderer, _ngZone, onClick) {
    this._renderer = _renderer;
    this._ngZone = _ngZone;
    this.element = document.createElement('div');
    this.element.classList.add('cdk-overlay-backdrop');
    this._cleanupClick = _renderer.listen(this.element, 'click', onClick);
  }
  detach() {
    this._ngZone.runOutsideAngular(() => {
      const element = this.element;
      clearTimeout(this._fallbackTimeout);
      this._cleanupTransitionEnd?.();
      this._cleanupTransitionEnd = this._renderer.listen(element, 'transitionend', this.dispose);
      this._fallbackTimeout = setTimeout(this.dispose, 500);
      // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
      // In this case we make it unclickable and we try to remove it after a delay.
      element.style.pointerEvents = 'none';
      element.classList.remove('cdk-overlay-backdrop-showing');
    });
  }
  dispose = () => {
    clearTimeout(this._fallbackTimeout);
    this._cleanupClick?.();
    this._cleanupTransitionEnd?.();
    this._cleanupClick = this._cleanupTransitionEnd = this._fallbackTimeout = undefined;
    this.element.remove();
  };
}

/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
class OverlayRef {
  _portalOutlet;
  _host;
  _pane;
  _config;
  _ngZone;
  _keyboardDispatcher;
  _document;
  _location;
  _outsideClickDispatcher;
  _animationsDisabled;
  _injector;
  _renderer;
  _backdropClick = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  _attachments = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  _detachments = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  _positionStrategy;
  _scrollStrategy;
  _locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
  _backdropRef = null;
  _detachContentMutationObserver;
  _detachContentAfterRenderRef;
  /**
   * Reference to the parent of the `_host` at the time it was detached. Used to restore
   * the `_host` to its original position in the DOM when it gets re-attached.
   */
  _previousHostParent;
  /** Stream of keydown events dispatched to this overlay. */
  _keydownEvents = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  /** Stream of mouse outside events dispatched to this overlay. */
  _outsidePointerEvents = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  /** Reference to the currently-running `afterNextRender` call. */
  _afterNextRenderRef;
  constructor(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location, _outsideClickDispatcher, _animationsDisabled = false, _injector, _renderer) {
    this._portalOutlet = _portalOutlet;
    this._host = _host;
    this._pane = _pane;
    this._config = _config;
    this._ngZone = _ngZone;
    this._keyboardDispatcher = _keyboardDispatcher;
    this._document = _document;
    this._location = _location;
    this._outsideClickDispatcher = _outsideClickDispatcher;
    this._animationsDisabled = _animationsDisabled;
    this._injector = _injector;
    this._renderer = _renderer;
    if (_config.scrollStrategy) {
      this._scrollStrategy = _config.scrollStrategy;
      this._scrollStrategy.attach(this);
    }
    this._positionStrategy = _config.positionStrategy;
  }
  /** The overlay's HTML element */
  get overlayElement() {
    return this._pane;
  }
  /** The overlay's backdrop HTML element. */
  get backdropElement() {
    return this._backdropRef?.element || null;
  }
  /**
   * Wrapper around the panel element. Can be used for advanced
   * positioning where a wrapper with specific styling is
   * required around the overlay pane.
   */
  get hostElement() {
    return this._host;
  }
  /**
   * Attaches content, given via a Portal, to the overlay.
   * If the overlay is configured to have a backdrop, it will be created.
   *
   * @param portal Portal instance to which to attach the overlay.
   * @returns The portal attachment result.
   */
  attach(portal) {
    // Insert the host into the DOM before attaching the portal, otherwise
    // the animations module will skip animations on repeat attachments.
    if (!this._host.parentElement && this._previousHostParent) {
      this._previousHostParent.appendChild(this._host);
    }
    const attachResult = this._portalOutlet.attach(portal);
    if (this._positionStrategy) {
      this._positionStrategy.attach(this);
    }
    this._updateStackingOrder();
    this._updateElementSize();
    this._updateElementDirection();
    if (this._scrollStrategy) {
      this._scrollStrategy.enable();
    }
    // We need to clean this up ourselves, because we're passing in an
    // `EnvironmentInjector` below which won't ever be destroyed.
    // Otherwise it causes some callbacks to be retained (see #29696).
    this._afterNextRenderRef?.destroy();
    // Update the position once the overlay is fully rendered before attempting to position it,
    // as the position may depend on the size of the rendered content.
    this._afterNextRenderRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
      // The overlay could've been detached before the callback executed.
      if (this.hasAttached()) {
        this.updatePosition();
      }
    }, {
      injector: this._injector
    });
    // Enable pointer events for the overlay pane element.
    this._togglePointerEvents(true);
    if (this._config.hasBackdrop) {
      this._attachBackdrop();
    }
    if (this._config.panelClass) {
      this._toggleClasses(this._pane, this._config.panelClass, true);
    }
    // Only emit the `attachments` event once all other setup is done.
    this._attachments.next();
    this._completeDetachContent();
    // Track this overlay by the keyboard dispatcher
    this._keyboardDispatcher.add(this);
    if (this._config.disposeOnNavigation) {
      this._locationChanges = this._location.subscribe(() => this.dispose());
    }
    this._outsideClickDispatcher.add(this);
    // TODO(crisbeto): the null check is here, because the portal outlet returns `any`.
    // We should be guaranteed for the result to be `ComponentRef | EmbeddedViewRef`, but
    // `instanceof EmbeddedViewRef` doesn't appear to work at the moment.
    if (typeof attachResult?.onDestroy === 'function') {
      // In most cases we control the portal and we know when it is being detached so that
      // we can finish the disposal process. The exception is if the user passes in a custom
      // `ViewContainerRef` that isn't destroyed through the overlay API. Note that we use
      // `detach` here instead of `dispose`, because we don't know if the user intends to
      // reattach the overlay at a later point. It also has the advantage of waiting for animations.
      attachResult.onDestroy(() => {
        if (this.hasAttached()) {
          // We have to delay the `detach` call, because detaching immediately prevents
          // other destroy hooks from running. This is likely a framework bug similar to
          // https://github.com/angular/angular/issues/46119
          this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()));
        }
      });
    }
    return attachResult;
  }
  /**
   * Detaches an overlay from a portal.
   * @returns The portal detachment result.
   */
  detach() {
    if (!this.hasAttached()) {
      return;
    }
    this.detachBackdrop();
    // When the overlay is detached, the pane element should disable pointer events.
    // This is necessary because otherwise the pane element will cover the page and disable
    // pointer events therefore. Depends on the position strategy and the applied pane boundaries.
    this._togglePointerEvents(false);
    if (this._positionStrategy && this._positionStrategy.detach) {
      this._positionStrategy.detach();
    }
    if (this._scrollStrategy) {
      this._scrollStrategy.disable();
    }
    const detachmentResult = this._portalOutlet.detach();
    // Only emit after everything is detached.
    this._detachments.next();
    this._completeDetachContent();
    // Remove this overlay from keyboard dispatcher tracking.
    this._keyboardDispatcher.remove(this);
    // Keeping the host element in the DOM can cause scroll jank, because it still gets
    // rendered, even though it's transparent and unclickable which is why we remove it.
    this._detachContentWhenEmpty();
    this._locationChanges.unsubscribe();
    this._outsideClickDispatcher.remove(this);
    return detachmentResult;
  }
  /** Cleans up the overlay from the DOM. */
  dispose() {
    const isAttached = this.hasAttached();
    if (this._positionStrategy) {
      this._positionStrategy.dispose();
    }
    this._disposeScrollStrategy();
    this._backdropRef?.dispose();
    this._locationChanges.unsubscribe();
    this._keyboardDispatcher.remove(this);
    this._portalOutlet.dispose();
    this._attachments.complete();
    this._backdropClick.complete();
    this._keydownEvents.complete();
    this._outsidePointerEvents.complete();
    this._outsideClickDispatcher.remove(this);
    this._host?.remove();
    this._afterNextRenderRef?.destroy();
    this._previousHostParent = this._pane = this._host = this._backdropRef = null;
    if (isAttached) {
      this._detachments.next();
    }
    this._detachments.complete();
    this._completeDetachContent();
  }
  /** Whether the overlay has attached content. */
  hasAttached() {
    return this._portalOutlet.hasAttached();
  }
  /** Gets an observable that emits when the backdrop has been clicked. */
  backdropClick() {
    return this._backdropClick;
  }
  /** Gets an observable that emits when the overlay has been attached. */
  attachments() {
    return this._attachments;
  }
  /** Gets an observable that emits when the overlay has been detached. */
  detachments() {
    return this._detachments;
  }
  /** Gets an observable of keydown events targeted to this overlay. */
  keydownEvents() {
    return this._keydownEvents;
  }
  /** Gets an observable of pointer events targeted outside this overlay. */
  outsidePointerEvents() {
    return this._outsidePointerEvents;
  }
  /** Gets the current overlay configuration, which is immutable. */
  getConfig() {
    return this._config;
  }
  /** Updates the position of the overlay based on the position strategy. */
  updatePosition() {
    if (this._positionStrategy) {
      this._positionStrategy.apply();
    }
  }
  /** Switches to a new position strategy and updates the overlay position. */
  updatePositionStrategy(strategy) {
    if (strategy === this._positionStrategy) {
      return;
    }
    if (this._positionStrategy) {
      this._positionStrategy.dispose();
    }
    this._positionStrategy = strategy;
    if (this.hasAttached()) {
      strategy.attach(this);
      this.updatePosition();
    }
  }
  /** Update the size properties of the overlay. */
  updateSize(sizeConfig) {
    this._config = {
      ...this._config,
      ...sizeConfig
    };
    this._updateElementSize();
  }
  /** Sets the LTR/RTL direction for the overlay. */
  setDirection(dir) {
    this._config = {
      ...this._config,
      direction: dir
    };
    this._updateElementDirection();
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    if (this._pane) {
      this._toggleClasses(this._pane, classes, true);
    }
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    if (this._pane) {
      this._toggleClasses(this._pane, classes, false);
    }
  }
  /**
   * Returns the layout direction of the overlay panel.
   */
  getDirection() {
    const direction = this._config.direction;
    if (!direction) {
      return 'ltr';
    }
    return typeof direction === 'string' ? direction : direction.value;
  }
  /** Switches to a new scroll strategy. */
  updateScrollStrategy(strategy) {
    if (strategy === this._scrollStrategy) {
      return;
    }
    this._disposeScrollStrategy();
    this._scrollStrategy = strategy;
    if (this.hasAttached()) {
      strategy.attach(this);
      strategy.enable();
    }
  }
  /** Updates the text direction of the overlay panel. */
  _updateElementDirection() {
    this._host.setAttribute('dir', this.getDirection());
  }
  /** Updates the size of the overlay element based on the overlay config. */
  _updateElementSize() {
    if (!this._pane) {
      return;
    }
    const style = this._pane.style;
    style.width = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(this._config.width);
    style.height = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(this._config.height);
    style.minWidth = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(this._config.minWidth);
    style.minHeight = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(this._config.minHeight);
    style.maxWidth = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(this._config.maxWidth);
    style.maxHeight = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(this._config.maxHeight);
  }
  /** Toggles the pointer events for the overlay pane element. */
  _togglePointerEvents(enablePointer) {
    this._pane.style.pointerEvents = enablePointer ? '' : 'none';
  }
  /** Attaches a backdrop for this overlay. */
  _attachBackdrop() {
    const showingClass = 'cdk-overlay-backdrop-showing';
    this._backdropRef?.dispose();
    this._backdropRef = new BackdropRef(this._document, this._renderer, this._ngZone, event => {
      this._backdropClick.next(event);
    });
    if (this._animationsDisabled) {
      this._backdropRef.element.classList.add('cdk-overlay-backdrop-noop-animation');
    }
    if (this._config.backdropClass) {
      this._toggleClasses(this._backdropRef.element, this._config.backdropClass, true);
    }
    // Insert the backdrop before the pane in the DOM order,
    // in order to handle stacked overlays properly.
    this._host.parentElement.insertBefore(this._backdropRef.element, this._host);
    // Add class to fade-in the backdrop after one frame.
    if (!this._animationsDisabled && typeof requestAnimationFrame !== 'undefined') {
      this._ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => this._backdropRef?.element.classList.add(showingClass));
      });
    } else {
      this._backdropRef.element.classList.add(showingClass);
    }
  }
  /**
   * Updates the stacking order of the element, moving it to the top if necessary.
   * This is required in cases where one overlay was detached, while another one,
   * that should be behind it, was destroyed. The next time both of them are opened,
   * the stacking will be wrong, because the detached element's pane will still be
   * in its original DOM position.
   */
  _updateStackingOrder() {
    if (this._host.nextSibling) {
      this._host.parentNode.appendChild(this._host);
    }
  }
  /** Detaches the backdrop (if any) associated with the overlay. */
  detachBackdrop() {
    if (this._animationsDisabled) {
      this._backdropRef?.dispose();
      this._backdropRef = null;
    } else {
      this._backdropRef?.detach();
    }
  }
  /** Toggles a single CSS class or an array of classes on an element. */
  _toggleClasses(element, cssClasses, isAdd) {
    const classes = (0,_array_I1yfCXUO_mjs__WEBPACK_IMPORTED_MODULE_11__.c)(cssClasses || []).filter(c => !!c);
    if (classes.length) {
      isAdd ? element.classList.add(...classes) : element.classList.remove(...classes);
    }
  }
  /** Detaches the overlay once the content finishes animating and is removed from the DOM. */
  _detachContentWhenEmpty() {
    let rethrow = false;
    // Attempt to detach on the next render.
    try {
      this._detachContentAfterRenderRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
        // Rethrow if we encounter an actual error detaching.
        rethrow = true;
        this._detachContent();
      }, {
        injector: this._injector
      });
    } catch (e) {
      if (rethrow) {
        throw e;
      }
      // afterNextRender throws if the EnvironmentInjector is has already been destroyed.
      // This may happen in tests that don't properly flush all async work.
      // In order to avoid breaking those tests, we just detach immediately in this case.
      this._detachContent();
    }
    // Otherwise wait until the content finishes animating out and detach.
    if (globalThis.MutationObserver && this._pane) {
      this._detachContentMutationObserver ||= new globalThis.MutationObserver(() => {
        this._detachContent();
      });
      this._detachContentMutationObserver.observe(this._pane, {
        childList: true
      });
    }
  }
  _detachContent() {
    // Needs a couple of checks for the pane and host, because
    // they may have been removed by the time the zone stabilizes.
    if (!this._pane || !this._host || this._pane.children.length === 0) {
      if (this._pane && this._config.panelClass) {
        this._toggleClasses(this._pane, this._config.panelClass, false);
      }
      if (this._host && this._host.parentElement) {
        this._previousHostParent = this._host.parentElement;
        this._host.remove();
      }
      this._completeDetachContent();
    }
  }
  _completeDetachContent() {
    this._detachContentAfterRenderRef?.destroy();
    this._detachContentAfterRenderRef = undefined;
    this._detachContentMutationObserver?.disconnect();
  }
  /** Disposes of a scroll strategy. */
  _disposeScrollStrategy() {
    const scrollStrategy = this._scrollStrategy;
    scrollStrategy?.disable();
    scrollStrategy?.detach?.();
  }
}

// TODO: refactor clipping detection into a separate thing (part of scrolling module)
// TODO: doesn't handle both flexible width and height when it has to scroll along both axis.
/** Class to be added to the overlay bounding box. */
const boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
/** Regex used to split a string on its CSS units. */
const cssUnitPattern = /([A-Za-z%]+)$/;
/**
 * Creates a flexible position strategy.
 * @param injector Injector used to resolve dependnecies for the position strategy.
 * @param origin Origin relative to which to position the overlay.
 */
function createFlexibleConnectedPositionStrategy(injector, origin) {
  return new FlexibleConnectedPositionStrategy(origin, injector.get(_scrolling_mjs__WEBPACK_IMPORTED_MODULE_5__.ViewportRuler), injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT), injector.get(_platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_7__.P), injector.get(OverlayContainer));
}
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
class FlexibleConnectedPositionStrategy {
  _viewportRuler;
  _document;
  _platform;
  _overlayContainer;
  /** The overlay to which this strategy is attached. */
  _overlayRef;
  /** Whether we're performing the very first positioning of the overlay. */
  _isInitialRender;
  /** Last size used for the bounding box. Used to avoid resizing the overlay after open. */
  _lastBoundingBoxSize = {
    width: 0,
    height: 0
  };
  /** Whether the overlay was pushed in a previous positioning. */
  _isPushed = false;
  /** Whether the overlay can be pushed on-screen on the initial open. */
  _canPush = true;
  /** Whether the overlay can grow via flexible width/height after the initial open. */
  _growAfterOpen = false;
  /** Whether the overlay's width and height can be constrained to fit within the viewport. */
  _hasFlexibleDimensions = true;
  /** Whether the overlay position is locked. */
  _positionLocked = false;
  /** Cached origin dimensions */
  _originRect;
  /** Cached overlay dimensions */
  _overlayRect;
  /** Cached viewport dimensions */
  _viewportRect;
  /** Cached container dimensions */
  _containerRect;
  /** Amount of space that must be maintained between the overlay and the edge of the viewport. */
  _viewportMargin = 0;
  /** The Scrollable containers used to check scrollable view properties on position change. */
  _scrollables = [];
  /** Ordered list of preferred positions, from most to least desirable. */
  _preferredPositions = [];
  /** The origin element against which the overlay will be positioned. */
  _origin;
  /** The overlay pane element. */
  _pane;
  /** Whether the strategy has been disposed of already. */
  _isDisposed;
  /**
   * Parent element for the overlay panel used to constrain the overlay panel's size to fit
   * within the viewport.
   */
  _boundingBox;
  /** The last position to have been calculated as the best fit position. */
  _lastPosition;
  /** The last calculated scroll visibility. Only tracked  */
  _lastScrollVisibility;
  /** Subject that emits whenever the position changes. */
  _positionChanges = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  /** Subscription to viewport size changes. */
  _resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
  /** Default offset for the overlay along the x axis. */
  _offsetX = 0;
  /** Default offset for the overlay along the y axis. */
  _offsetY = 0;
  /** Selector to be used when finding the elements on which to set the transform origin. */
  _transformOriginSelector;
  /** Keeps track of the CSS classes that the position strategy has applied on the overlay panel. */
  _appliedPanelClasses = [];
  /** Amount by which the overlay was pushed in each axis during the last time it was positioned. */
  _previousPushAmount;
  /** Observable sequence of position changes. */
  positionChanges = this._positionChanges;
  /** Ordered list of preferred positions, from most to least desirable. */
  get positions() {
    return this._preferredPositions;
  }
  constructor(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
    this._viewportRuler = _viewportRuler;
    this._document = _document;
    this._platform = _platform;
    this._overlayContainer = _overlayContainer;
    this.setOrigin(connectedTo);
  }
  /** Attaches this position strategy to an overlay. */
  attach(overlayRef) {
    if (this._overlayRef && overlayRef !== this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('This position strategy is already attached to an overlay');
    }
    this._validatePositions();
    overlayRef.hostElement.classList.add(boundingBoxClass);
    this._overlayRef = overlayRef;
    this._boundingBox = overlayRef.hostElement;
    this._pane = overlayRef.overlayElement;
    this._isDisposed = false;
    this._isInitialRender = true;
    this._lastPosition = null;
    this._resizeSubscription.unsubscribe();
    this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
      // When the window is resized, we want to trigger the next reposition as if it
      // was an initial render, in order for the strategy to pick a new optimal position,
      // otherwise position locking will cause it to stay at the old one.
      this._isInitialRender = true;
      this.apply();
    });
  }
  /**
   * Updates the position of the overlay element, using whichever preferred position relative
   * to the origin best fits on-screen.
   *
   * The selection of a position goes as follows:
   *  - If any positions fit completely within the viewport as-is,
   *      choose the first position that does so.
   *  - If flexible dimensions are enabled and at least one satisfies the given minimum width/height,
   *      choose the position with the greatest available size modified by the positions' weight.
   *  - If pushing is enabled, take the position that went off-screen the least and push it
   *      on-screen.
   *  - If none of the previous criteria were met, use the position that goes off-screen the least.
   * @docs-private
   */
  apply() {
    // We shouldn't do anything if the strategy was disposed or we're on the server.
    if (this._isDisposed || !this._platform.isBrowser) {
      return;
    }
    // If the position has been applied already (e.g. when the overlay was opened) and the
    // consumer opted into locking in the position, re-use the old position, in order to
    // prevent the overlay from jumping around.
    if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
      this.reapplyLastPosition();
      return;
    }
    this._clearPanelClasses();
    this._resetOverlayElementStyles();
    this._resetBoundingBoxStyles();
    // We need the bounding rects for the origin, the overlay and the container to determine how to position
    // the overlay relative to the origin.
    // We use the viewport rect to determine whether a position would go off-screen.
    this._viewportRect = this._getNarrowedViewportRect();
    this._originRect = this._getOriginRect();
    this._overlayRect = this._pane.getBoundingClientRect();
    this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
    const originRect = this._originRect;
    const overlayRect = this._overlayRect;
    const viewportRect = this._viewportRect;
    const containerRect = this._containerRect;
    // Positions where the overlay will fit with flexible dimensions.
    const flexibleFits = [];
    // Fallback if none of the preferred positions fit within the viewport.
    let fallback;
    // Go through each of the preferred positions looking for a good fit.
    // If a good fit is found, it will be applied immediately.
    for (let pos of this._preferredPositions) {
      // Get the exact (x, y) coordinate for the point-of-origin on the origin element.
      let originPoint = this._getOriginPoint(originRect, containerRect, pos);
      // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
      // overlay in this position. We use the top-left corner for calculations and later translate
      // this into an appropriate (top, left, bottom, right) style.
      let overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
      // Calculate how well the overlay would fit into the viewport with this point.
      let overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
      // If the overlay, without any further work, fits into the viewport, use this position.
      if (overlayFit.isCompletelyWithinViewport) {
        this._isPushed = false;
        this._applyPosition(pos, originPoint);
        return;
      }
      // If the overlay has flexible dimensions, we can use this position
      // so long as there's enough space for the minimum dimensions.
      if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
        // Save positions where the overlay will fit with flexible dimensions. We will use these
        // if none of the positions fit *without* flexible dimensions.
        flexibleFits.push({
          position: pos,
          origin: originPoint,
          overlayRect,
          boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
        });
        continue;
      }
      // If the current preferred position does not fit on the screen, remember the position
      // if it has more visible area on-screen than we've seen and move onto the next preferred
      // position.
      if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
        fallback = {
          overlayFit,
          overlayPoint,
          originPoint,
          position: pos,
          overlayRect
        };
      }
    }
    // If there are any positions where the overlay would fit with flexible dimensions, choose the
    // one that has the greatest area available modified by the position's weight
    if (flexibleFits.length) {
      let bestFit = null;
      let bestScore = -1;
      for (const fit of flexibleFits) {
        const score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
        if (score > bestScore) {
          bestScore = score;
          bestFit = fit;
        }
      }
      this._isPushed = false;
      this._applyPosition(bestFit.position, bestFit.origin);
      return;
    }
    // When none of the preferred positions fit within the viewport, take the position
    // that went off-screen the least and attempt to push it on-screen.
    if (this._canPush) {
      // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
      this._isPushed = true;
      this._applyPosition(fallback.position, fallback.originPoint);
      return;
    }
    // All options for getting the overlay within the viewport have been exhausted, so go with the
    // position that went off-screen the least.
    this._applyPosition(fallback.position, fallback.originPoint);
  }
  detach() {
    this._clearPanelClasses();
    this._lastPosition = null;
    this._previousPushAmount = null;
    this._resizeSubscription.unsubscribe();
  }
  /** Cleanup after the element gets destroyed. */
  dispose() {
    if (this._isDisposed) {
      return;
    }
    // We can't use `_resetBoundingBoxStyles` here, because it resets
    // some properties to zero, rather than removing them.
    if (this._boundingBox) {
      extendStyles(this._boundingBox.style, {
        top: '',
        left: '',
        right: '',
        bottom: '',
        height: '',
        width: '',
        alignItems: '',
        justifyContent: ''
      });
    }
    if (this._pane) {
      this._resetOverlayElementStyles();
    }
    if (this._overlayRef) {
      this._overlayRef.hostElement.classList.remove(boundingBoxClass);
    }
    this.detach();
    this._positionChanges.complete();
    this._overlayRef = this._boundingBox = null;
    this._isDisposed = true;
  }
  /**
   * This re-aligns the overlay element with the trigger in its last calculated position,
   * even if a position higher in the "preferred positions" list would now fit. This
   * allows one to re-align the panel without changing the orientation of the panel.
   */
  reapplyLastPosition() {
    if (this._isDisposed || !this._platform.isBrowser) {
      return;
    }
    const lastPosition = this._lastPosition;
    if (lastPosition) {
      this._originRect = this._getOriginRect();
      this._overlayRect = this._pane.getBoundingClientRect();
      this._viewportRect = this._getNarrowedViewportRect();
      this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
      const originPoint = this._getOriginPoint(this._originRect, this._containerRect, lastPosition);
      this._applyPosition(lastPosition, originPoint);
    } else {
      this.apply();
    }
  }
  /**
   * Sets the list of Scrollable containers that host the origin element so that
   * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
   * Scrollable must be an ancestor element of the strategy's origin element.
   */
  withScrollableContainers(scrollables) {
    this._scrollables = scrollables;
    return this;
  }
  /**
   * Adds new preferred positions.
   * @param positions List of positions options for this overlay.
   */
  withPositions(positions) {
    this._preferredPositions = positions;
    // If the last calculated position object isn't part of the positions anymore, clear
    // it in order to avoid it being picked up if the consumer tries to re-apply.
    if (positions.indexOf(this._lastPosition) === -1) {
      this._lastPosition = null;
    }
    this._validatePositions();
    return this;
  }
  /**
   * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
   * @param margin Required margin between the overlay and the viewport edge in pixels.
   */
  withViewportMargin(margin) {
    this._viewportMargin = margin;
    return this;
  }
  /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */
  withFlexibleDimensions(flexibleDimensions = true) {
    this._hasFlexibleDimensions = flexibleDimensions;
    return this;
  }
  /** Sets whether the overlay can grow after the initial open via flexible width/height. */
  withGrowAfterOpen(growAfterOpen = true) {
    this._growAfterOpen = growAfterOpen;
    return this;
  }
  /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */
  withPush(canPush = true) {
    this._canPush = canPush;
    return this;
  }
  /**
   * Sets whether the overlay's position should be locked in after it is positioned
   * initially. When an overlay is locked in, it won't attempt to reposition itself
   * when the position is re-applied (e.g. when the user scrolls away).
   * @param isLocked Whether the overlay should locked in.
   */
  withLockedPosition(isLocked = true) {
    this._positionLocked = isLocked;
    return this;
  }
  /**
   * Sets the origin, relative to which to position the overlay.
   * Using an element origin is useful for building components that need to be positioned
   * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
   * used for cases like contextual menus which open relative to the user's pointer.
   * @param origin Reference to the new origin.
   */
  setOrigin(origin) {
    this._origin = origin;
    return this;
  }
  /**
   * Sets the default offset for the overlay's connection point on the x-axis.
   * @param offset New offset in the X axis.
   */
  withDefaultOffsetX(offset) {
    this._offsetX = offset;
    return this;
  }
  /**
   * Sets the default offset for the overlay's connection point on the y-axis.
   * @param offset New offset in the Y axis.
   */
  withDefaultOffsetY(offset) {
    this._offsetY = offset;
    return this;
  }
  /**
   * Configures that the position strategy should set a `transform-origin` on some elements
   * inside the overlay, depending on the current position that is being applied. This is
   * useful for the cases where the origin of an animation can change depending on the
   * alignment of the overlay.
   * @param selector CSS selector that will be used to find the target
   *    elements onto which to set the transform origin.
   */
  withTransformOriginOn(selector) {
    this._transformOriginSelector = selector;
    return this;
  }
  /**
   * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
   */
  _getOriginPoint(originRect, containerRect, pos) {
    let x;
    if (pos.originX == 'center') {
      // Note: when centering we should always use the `left`
      // offset, otherwise the position will be wrong in RTL.
      x = originRect.left + originRect.width / 2;
    } else {
      const startX = this._isRtl() ? originRect.right : originRect.left;
      const endX = this._isRtl() ? originRect.left : originRect.right;
      x = pos.originX == 'start' ? startX : endX;
    }
    // When zooming in Safari the container rectangle contains negative values for the position
    // and we need to re-add them to the calculated coordinates.
    if (containerRect.left < 0) {
      x -= containerRect.left;
    }
    let y;
    if (pos.originY == 'center') {
      y = originRect.top + originRect.height / 2;
    } else {
      y = pos.originY == 'top' ? originRect.top : originRect.bottom;
    }
    // Normally the containerRect's top value would be zero, however when the overlay is attached to an input
    // (e.g. in an autocomplete), mobile browsers will shift everything in order to put the input in the middle
    // of the screen and to make space for the virtual keyboard. We need to account for this offset,
    // otherwise our positioning will be thrown off.
    // Additionally, when zooming in Safari this fixes the vertical position.
    if (containerRect.top < 0) {
      y -= containerRect.top;
    }
    return {
      x,
      y
    };
  }
  /**
   * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
   * origin point to which the overlay should be connected.
   */
  _getOverlayPoint(originPoint, overlayRect, pos) {
    // Calculate the (overlayStartX, overlayStartY), the start of the
    // potential overlay position relative to the origin point.
    let overlayStartX;
    if (pos.overlayX == 'center') {
      overlayStartX = -overlayRect.width / 2;
    } else if (pos.overlayX === 'start') {
      overlayStartX = this._isRtl() ? -overlayRect.width : 0;
    } else {
      overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
    }
    let overlayStartY;
    if (pos.overlayY == 'center') {
      overlayStartY = -overlayRect.height / 2;
    } else {
      overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
    }
    // The (x, y) coordinates of the overlay.
    return {
      x: originPoint.x + overlayStartX,
      y: originPoint.y + overlayStartY
    };
  }
  /** Gets how well an overlay at the given point will fit within the viewport. */
  _getOverlayFit(point, rawOverlayRect, viewport, position) {
    // Round the overlay rect when comparing against the
    // viewport, because the viewport is always rounded.
    const overlay = getRoundedBoundingClientRect(rawOverlayRect);
    let {
      x,
      y
    } = point;
    let offsetX = this._getOffset(position, 'x');
    let offsetY = this._getOffset(position, 'y');
    // Account for the offsets since they could push the overlay out of the viewport.
    if (offsetX) {
      x += offsetX;
    }
    if (offsetY) {
      y += offsetY;
    }
    // How much the overlay would overflow at this position, on each side.
    let leftOverflow = 0 - x;
    let rightOverflow = x + overlay.width - viewport.width;
    let topOverflow = 0 - y;
    let bottomOverflow = y + overlay.height - viewport.height;
    // Visible parts of the element on each axis.
    let visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
    let visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
    let visibleArea = visibleWidth * visibleHeight;
    return {
      visibleArea,
      isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
      fitsInViewportVertically: visibleHeight === overlay.height,
      fitsInViewportHorizontally: visibleWidth == overlay.width
    };
  }
  /**
   * Whether the overlay can fit within the viewport when it may resize either its width or height.
   * @param fit How well the overlay fits in the viewport at some position.
   * @param point The (x, y) coordinates of the overlay at some position.
   * @param viewport The geometry of the viewport.
   */
  _canFitWithFlexibleDimensions(fit, point, viewport) {
    if (this._hasFlexibleDimensions) {
      const availableHeight = viewport.bottom - point.y;
      const availableWidth = viewport.right - point.x;
      const minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
      const minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
      const verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
      const horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
      return verticalFit && horizontalFit;
    }
    return false;
  }
  /**
   * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
   * the viewport, the top-left corner will be pushed on-screen (with overflow occurring on the
   * right and bottom).
   *
   * @param start Starting point from which the overlay is pushed.
   * @param rawOverlayRect Dimensions of the overlay.
   * @param scrollPosition Current viewport scroll position.
   * @returns The point at which to position the overlay after pushing. This is effectively a new
   *     originPoint.
   */
  _pushOverlayOnScreen(start, rawOverlayRect, scrollPosition) {
    // If the position is locked and we've pushed the overlay already, reuse the previous push
    // amount, rather than pushing it again. If we were to continue pushing, the element would
    // remain in the viewport, which goes against the expectations when position locking is enabled.
    if (this._previousPushAmount && this._positionLocked) {
      return {
        x: start.x + this._previousPushAmount.x,
        y: start.y + this._previousPushAmount.y
      };
    }
    // Round the overlay rect when comparing against the
    // viewport, because the viewport is always rounded.
    const overlay = getRoundedBoundingClientRect(rawOverlayRect);
    const viewport = this._viewportRect;
    // Determine how much the overlay goes outside the viewport on each
    // side, which we'll use to decide which direction to push it.
    const overflowRight = Math.max(start.x + overlay.width - viewport.width, 0);
    const overflowBottom = Math.max(start.y + overlay.height - viewport.height, 0);
    const overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
    const overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
    // Amount by which to push the overlay in each axis such that it remains on-screen.
    let pushX = 0;
    let pushY = 0;
    // If the overlay fits completely within the bounds of the viewport, push it from whichever
    // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
    // viewport and allow for the trailing end of the overlay to go out of bounds.
    if (overlay.width <= viewport.width) {
      pushX = overflowLeft || -overflowRight;
    } else {
      pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
    }
    if (overlay.height <= viewport.height) {
      pushY = overflowTop || -overflowBottom;
    } else {
      pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
    }
    this._previousPushAmount = {
      x: pushX,
      y: pushY
    };
    return {
      x: start.x + pushX,
      y: start.y + pushY
    };
  }
  /**
   * Applies a computed position to the overlay and emits a position change.
   * @param position The position preference
   * @param originPoint The point on the origin element where the overlay is connected.
   */
  _applyPosition(position, originPoint) {
    this._setTransformOrigin(position);
    this._setOverlayElementStyles(originPoint, position);
    this._setBoundingBoxStyles(originPoint, position);
    if (position.panelClass) {
      this._addPanelClasses(position.panelClass);
    }
    // Notify that the position has been changed along with its change properties.
    // We only emit if we've got any subscriptions, because the scroll visibility
    // calculations can be somewhat expensive.
    if (this._positionChanges.observers.length) {
      const scrollVisibility = this._getScrollVisibility();
      // We're recalculating on scroll, but we only want to emit if anything
      // changed since downstream code might be hitting the `NgZone`.
      if (position !== this._lastPosition || !this._lastScrollVisibility || !compareScrollVisibility(this._lastScrollVisibility, scrollVisibility)) {
        const changeEvent = new ConnectedOverlayPositionChange(position, scrollVisibility);
        this._positionChanges.next(changeEvent);
      }
      this._lastScrollVisibility = scrollVisibility;
    }
    // Save the last connected position in case the position needs to be re-calculated.
    this._lastPosition = position;
    this._isInitialRender = false;
  }
  /** Sets the transform origin based on the configured selector and the passed-in position.  */
  _setTransformOrigin(position) {
    if (!this._transformOriginSelector) {
      return;
    }
    const elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);
    let xOrigin;
    let yOrigin = position.overlayY;
    if (position.overlayX === 'center') {
      xOrigin = 'center';
    } else if (this._isRtl()) {
      xOrigin = position.overlayX === 'start' ? 'right' : 'left';
    } else {
      xOrigin = position.overlayX === 'start' ? 'left' : 'right';
    }
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.transformOrigin = `${xOrigin} ${yOrigin}`;
    }
  }
  /**
   * Gets the position and size of the overlay's sizing container.
   *
   * This method does no measuring and applies no styles so that we can cheaply compute the
   * bounds for all positions and choose the best fit based on these results.
   */
  _calculateBoundingBoxRect(origin, position) {
    const viewport = this._viewportRect;
    const isRtl = this._isRtl();
    let height, top, bottom;
    if (position.overlayY === 'top') {
      // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
      top = origin.y;
      height = viewport.height - top + this._viewportMargin;
    } else if (position.overlayY === 'bottom') {
      // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
      // the viewport margin back in, because the viewport rect is narrowed down to remove the
      // margin, whereas the `origin` position is calculated based on its `DOMRect`.
      bottom = viewport.height - origin.y + this._viewportMargin * 2;
      height = viewport.height - bottom + this._viewportMargin;
    } else {
      // If neither top nor bottom, it means that the overlay is vertically centered on the
      // origin point. Note that we want the position relative to the viewport, rather than
      // the page, which is why we don't use something like `viewport.bottom - origin.y` and
      // `origin.y - viewport.top`.
      const smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
      const previousHeight = this._lastBoundingBoxSize.height;
      height = smallestDistanceToViewportEdge * 2;
      top = origin.y - smallestDistanceToViewportEdge;
      if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
        top = origin.y - previousHeight / 2;
      }
    }
    // The overlay is opening 'right-ward' (the content flows to the right).
    const isBoundedByRightViewportEdge = position.overlayX === 'start' && !isRtl || position.overlayX === 'end' && isRtl;
    // The overlay is opening 'left-ward' (the content flows to the left).
    const isBoundedByLeftViewportEdge = position.overlayX === 'end' && !isRtl || position.overlayX === 'start' && isRtl;
    let width, left, right;
    if (isBoundedByLeftViewportEdge) {
      right = viewport.width - origin.x + this._viewportMargin * 2;
      width = origin.x - this._viewportMargin;
    } else if (isBoundedByRightViewportEdge) {
      left = origin.x;
      width = viewport.right - origin.x;
    } else {
      // If neither start nor end, it means that the overlay is horizontally centered on the
      // origin point. Note that we want the position relative to the viewport, rather than
      // the page, which is why we don't use something like `viewport.right - origin.x` and
      // `origin.x - viewport.left`.
      const smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
      const previousWidth = this._lastBoundingBoxSize.width;
      width = smallestDistanceToViewportEdge * 2;
      left = origin.x - smallestDistanceToViewportEdge;
      if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
        left = origin.x - previousWidth / 2;
      }
    }
    return {
      top: top,
      left: left,
      bottom: bottom,
      right: right,
      width,
      height
    };
  }
  /**
   * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
   * origin's connection point and stretches to the bounds of the viewport.
   *
   * @param origin The point on the origin element where the overlay is connected.
   * @param position The position preference
   */
  _setBoundingBoxStyles(origin, position) {
    const boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
    // It's weird if the overlay *grows* while scrolling, so we take the last size into account
    // when applying a new size.
    if (!this._isInitialRender && !this._growAfterOpen) {
      boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
      boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
    }
    const styles = {};
    if (this._hasExactPosition()) {
      styles.top = styles.left = '0';
      styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = '';
      styles.width = styles.height = '100%';
    } else {
      const maxHeight = this._overlayRef.getConfig().maxHeight;
      const maxWidth = this._overlayRef.getConfig().maxWidth;
      styles.height = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(boundingBoxRect.height);
      styles.top = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(boundingBoxRect.top);
      styles.bottom = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(boundingBoxRect.bottom);
      styles.width = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(boundingBoxRect.width);
      styles.left = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(boundingBoxRect.left);
      styles.right = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(boundingBoxRect.right);
      // Push the pane content towards the proper direction.
      if (position.overlayX === 'center') {
        styles.alignItems = 'center';
      } else {
        styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
      }
      if (position.overlayY === 'center') {
        styles.justifyContent = 'center';
      } else {
        styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
      }
      if (maxHeight) {
        styles.maxHeight = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(maxHeight);
      }
      if (maxWidth) {
        styles.maxWidth = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(maxWidth);
      }
    }
    this._lastBoundingBoxSize = boundingBoxRect;
    extendStyles(this._boundingBox.style, styles);
  }
  /** Resets the styles for the bounding box so that a new positioning can be computed. */
  _resetBoundingBoxStyles() {
    extendStyles(this._boundingBox.style, {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      height: '',
      width: '',
      alignItems: '',
      justifyContent: ''
    });
  }
  /** Resets the styles for the overlay pane so that a new positioning can be computed. */
  _resetOverlayElementStyles() {
    extendStyles(this._pane.style, {
      top: '',
      left: '',
      bottom: '',
      right: '',
      position: '',
      transform: ''
    });
  }
  /** Sets positioning styles to the overlay element. */
  _setOverlayElementStyles(originPoint, position) {
    const styles = {};
    const hasExactPosition = this._hasExactPosition();
    const hasFlexibleDimensions = this._hasFlexibleDimensions;
    const config = this._overlayRef.getConfig();
    if (hasExactPosition) {
      const scrollPosition = this._viewportRuler.getViewportScrollPosition();
      extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
      extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
    } else {
      styles.position = 'static';
    }
    // Use a transform to apply the offsets. We do this because the `center` positions rely on
    // being in the normal flex flow and setting a `top` / `left` at all will completely throw
    // off the position. We also can't use margins, because they won't have an effect in some
    // cases where the element doesn't have anything to "push off of". Finally, this works
    // better both with flexible and non-flexible positioning.
    let transformString = '';
    let offsetX = this._getOffset(position, 'x');
    let offsetY = this._getOffset(position, 'y');
    if (offsetX) {
      transformString += `translateX(${offsetX}px) `;
    }
    if (offsetY) {
      transformString += `translateY(${offsetY}px)`;
    }
    styles.transform = transformString.trim();
    // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
    // we need these values to both be set to "100%" for the automatic flexible sizing to work.
    // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
    // Note that this doesn't apply when we have an exact position, in which case we do want to
    // apply them because they'll be cleared from the bounding box.
    if (config.maxHeight) {
      if (hasExactPosition) {
        styles.maxHeight = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(config.maxHeight);
      } else if (hasFlexibleDimensions) {
        styles.maxHeight = '';
      }
    }
    if (config.maxWidth) {
      if (hasExactPosition) {
        styles.maxWidth = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(config.maxWidth);
      } else if (hasFlexibleDimensions) {
        styles.maxWidth = '';
      }
    }
    extendStyles(this._pane.style, styles);
  }
  /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */
  _getExactOverlayY(position, originPoint, scrollPosition) {
    // Reset any existing styles. This is necessary in case the
    // preferred position has changed since the last `apply`.
    let styles = {
      top: '',
      bottom: ''
    };
    let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
    if (this._isPushed) {
      overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
    }
    // We want to set either `top` or `bottom` based on whether the overlay wants to appear
    // above or below the origin and the direction in which the element will expand.
    if (position.overlayY === 'bottom') {
      // When using `bottom`, we adjust the y position such that it is the distance
      // from the bottom of the viewport rather than the top.
      const documentHeight = this._document.documentElement.clientHeight;
      styles.bottom = `${documentHeight - (overlayPoint.y + this._overlayRect.height)}px`;
    } else {
      styles.top = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(overlayPoint.y);
    }
    return styles;
  }
  /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */
  _getExactOverlayX(position, originPoint, scrollPosition) {
    // Reset any existing styles. This is necessary in case the preferred position has
    // changed since the last `apply`.
    let styles = {
      left: '',
      right: ''
    };
    let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
    if (this._isPushed) {
      overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
    }
    // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
    // or "after" the origin, which determines the direction in which the element will expand.
    // For the horizontal axis, the meaning of "before" and "after" change based on whether the
    // page is in RTL or LTR.
    let horizontalStyleProperty;
    if (this._isRtl()) {
      horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
    } else {
      horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
    }
    // When we're setting `right`, we adjust the x position such that it is the distance
    // from the right edge of the viewport rather than the left edge.
    if (horizontalStyleProperty === 'right') {
      const documentWidth = this._document.documentElement.clientWidth;
      styles.right = `${documentWidth - (overlayPoint.x + this._overlayRect.width)}px`;
    } else {
      styles.left = (0,_css_pixel_value_C_HEqLhI_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(overlayPoint.x);
    }
    return styles;
  }
  /**
   * Gets the view properties of the trigger and overlay, including whether they are clipped
   * or completely outside the view of any of the strategy's scrollables.
   */
  _getScrollVisibility() {
    // Note: needs fresh rects since the position could've changed.
    const originBounds = this._getOriginRect();
    const overlayBounds = this._pane.getBoundingClientRect();
    // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
    // every time, we should be able to use the scrollTop of the containers if the size of those
    // containers hasn't changed.
    const scrollContainerBounds = this._scrollables.map(scrollable => {
      return scrollable.getElementRef().nativeElement.getBoundingClientRect();
    });
    return {
      isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
      isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
      isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
      isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
    };
  }
  /** Subtracts the amount that an element is overflowing on an axis from its length. */
  _subtractOverflows(length, ...overflows) {
    return overflows.reduce((currentValue, currentOverflow) => {
      return currentValue - Math.max(currentOverflow, 0);
    }, length);
  }
  /** Narrows the given viewport rect by the current _viewportMargin. */
  _getNarrowedViewportRect() {
    // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
    // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
    // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
    // and `innerHeight` that do. This is necessary, because the overlay container uses
    // 100% `width` and `height` which don't include the scrollbar either.
    const width = this._document.documentElement.clientWidth;
    const height = this._document.documentElement.clientHeight;
    const scrollPosition = this._viewportRuler.getViewportScrollPosition();
    return {
      top: scrollPosition.top + this._viewportMargin,
      left: scrollPosition.left + this._viewportMargin,
      right: scrollPosition.left + width - this._viewportMargin,
      bottom: scrollPosition.top + height - this._viewportMargin,
      width: width - 2 * this._viewportMargin,
      height: height - 2 * this._viewportMargin
    };
  }
  /** Whether the we're dealing with an RTL context */
  _isRtl() {
    return this._overlayRef.getDirection() === 'rtl';
  }
  /** Determines whether the overlay uses exact or flexible positioning. */
  _hasExactPosition() {
    return !this._hasFlexibleDimensions || this._isPushed;
  }
  /** Retrieves the offset of a position along the x or y axis. */
  _getOffset(position, axis) {
    if (axis === 'x') {
      // We don't do something like `position['offset' + axis]` in
      // order to avoid breaking minifiers that rename properties.
      return position.offsetX == null ? this._offsetX : position.offsetX;
    }
    return position.offsetY == null ? this._offsetY : position.offsetY;
  }
  /** Validates that the current position match the expected values. */
  _validatePositions() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._preferredPositions.length) {
        throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
      }
      // TODO(crisbeto): remove these once Angular's template type
      // checking is advanced enough to catch these cases.
      this._preferredPositions.forEach(pair => {
        validateHorizontalPosition('originX', pair.originX);
        validateVerticalPosition('originY', pair.originY);
        validateHorizontalPosition('overlayX', pair.overlayX);
        validateVerticalPosition('overlayY', pair.overlayY);
      });
    }
  }
  /** Adds a single CSS class or an array of classes on the overlay panel. */
  _addPanelClasses(cssClasses) {
    if (this._pane) {
      (0,_array_I1yfCXUO_mjs__WEBPACK_IMPORTED_MODULE_11__.c)(cssClasses).forEach(cssClass => {
        if (cssClass !== '' && this._appliedPanelClasses.indexOf(cssClass) === -1) {
          this._appliedPanelClasses.push(cssClass);
          this._pane.classList.add(cssClass);
        }
      });
    }
  }
  /** Clears the classes that the position strategy has applied from the overlay panel. */
  _clearPanelClasses() {
    if (this._pane) {
      this._appliedPanelClasses.forEach(cssClass => {
        this._pane.classList.remove(cssClass);
      });
      this._appliedPanelClasses = [];
    }
  }
  /** Returns the DOMRect of the current origin. */
  _getOriginRect() {
    const origin = this._origin;
    if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef) {
      return origin.nativeElement.getBoundingClientRect();
    }
    // Check for Element so SVG elements are also supported.
    if (origin instanceof Element) {
      return origin.getBoundingClientRect();
    }
    const width = origin.width || 0;
    const height = origin.height || 0;
    // If the origin is a point, return a client rect as if it was a 0x0 element at the point.
    return {
      top: origin.y,
      bottom: origin.y + height,
      left: origin.x,
      right: origin.x + width,
      height,
      width
    };
  }
}
/** Shallow-extends a stylesheet object with another stylesheet object. */
function extendStyles(destination, source) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      destination[key] = source[key];
    }
  }
  return destination;
}
/**
 * Extracts the pixel value as a number from a value, if it's a number
 * or a CSS pixel string (e.g. `1337px`). Otherwise returns null.
 */
function getPixelValue(input) {
  if (typeof input !== 'number' && input != null) {
    const [value, units] = input.split(cssUnitPattern);
    return !units || units === 'px' ? parseFloat(value) : null;
  }
  return input || null;
}
/**
 * Gets a version of an element's bounding `DOMRect` where all the values are rounded down to
 * the nearest pixel. This allows us to account for the cases where there may be sub-pixel
 * deviations in the `DOMRect` returned by the browser (e.g. when zoomed in with a percentage
 * size, see #21350).
 */
function getRoundedBoundingClientRect(clientRect) {
  return {
    top: Math.floor(clientRect.top),
    right: Math.floor(clientRect.right),
    bottom: Math.floor(clientRect.bottom),
    left: Math.floor(clientRect.left),
    width: Math.floor(clientRect.width),
    height: Math.floor(clientRect.height)
  };
}
/** Returns whether two `ScrollingVisibility` objects are identical. */
function compareScrollVisibility(a, b) {
  if (a === b) {
    return true;
  }
  return a.isOriginClipped === b.isOriginClipped && a.isOriginOutsideView === b.isOriginOutsideView && a.isOverlayClipped === b.isOverlayClipped && a.isOverlayOutsideView === b.isOverlayOutsideView;
}
const STANDARD_DROPDOWN_BELOW_POSITIONS = [{
  originX: 'start',
  originY: 'bottom',
  overlayX: 'start',
  overlayY: 'top'
}, {
  originX: 'start',
  originY: 'top',
  overlayX: 'start',
  overlayY: 'bottom'
}, {
  originX: 'end',
  originY: 'bottom',
  overlayX: 'end',
  overlayY: 'top'
}, {
  originX: 'end',
  originY: 'top',
  overlayX: 'end',
  overlayY: 'bottom'
}];
const STANDARD_DROPDOWN_ADJACENT_POSITIONS = [{
  originX: 'end',
  originY: 'top',
  overlayX: 'start',
  overlayY: 'top'
}, {
  originX: 'end',
  originY: 'bottom',
  overlayX: 'start',
  overlayY: 'bottom'
}, {
  originX: 'start',
  originY: 'top',
  overlayX: 'end',
  overlayY: 'top'
}, {
  originX: 'start',
  originY: 'bottom',
  overlayX: 'end',
  overlayY: 'bottom'
}];

/** Class to be added to the overlay pane wrapper. */
const wrapperClass = 'cdk-global-overlay-wrapper';
/**
 * Creates a global position strategy.
 * @param injector Injector used to resolve dependencies for the strategy.
 */
function createGlobalPositionStrategy(_injector) {
  // Note: `injector` is unused, but we may need it in
  // the future which would introduce a breaking change.
  return new GlobalPositionStrategy();
}
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
class GlobalPositionStrategy {
  /** The overlay to which this strategy is attached. */
  _overlayRef;
  _cssPosition = 'static';
  _topOffset = '';
  _bottomOffset = '';
  _alignItems = '';
  _xPosition = '';
  _xOffset = '';
  _width = '';
  _height = '';
  _isDisposed = false;
  attach(overlayRef) {
    const config = overlayRef.getConfig();
    this._overlayRef = overlayRef;
    if (this._width && !config.width) {
      overlayRef.updateSize({
        width: this._width
      });
    }
    if (this._height && !config.height) {
      overlayRef.updateSize({
        height: this._height
      });
    }
    overlayRef.hostElement.classList.add(wrapperClass);
    this._isDisposed = false;
  }
  /**
   * Sets the top position of the overlay. Clears any previously set vertical position.
   * @param value New top offset.
   */
  top(value = '') {
    this._bottomOffset = '';
    this._topOffset = value;
    this._alignItems = 'flex-start';
    return this;
  }
  /**
   * Sets the left position of the overlay. Clears any previously set horizontal position.
   * @param value New left offset.
   */
  left(value = '') {
    this._xOffset = value;
    this._xPosition = 'left';
    return this;
  }
  /**
   * Sets the bottom position of the overlay. Clears any previously set vertical position.
   * @param value New bottom offset.
   */
  bottom(value = '') {
    this._topOffset = '';
    this._bottomOffset = value;
    this._alignItems = 'flex-end';
    return this;
  }
  /**
   * Sets the right position of the overlay. Clears any previously set horizontal position.
   * @param value New right offset.
   */
  right(value = '') {
    this._xOffset = value;
    this._xPosition = 'right';
    return this;
  }
  /**
   * Sets the overlay to the start of the viewport, depending on the overlay direction.
   * This will be to the left in LTR layouts and to the right in RTL.
   * @param offset Offset from the edge of the screen.
   */
  start(value = '') {
    this._xOffset = value;
    this._xPosition = 'start';
    return this;
  }
  /**
   * Sets the overlay to the end of the viewport, depending on the overlay direction.
   * This will be to the right in LTR layouts and to the left in RTL.
   * @param offset Offset from the edge of the screen.
   */
  end(value = '') {
    this._xOffset = value;
    this._xPosition = 'end';
    return this;
  }
  /**
   * Sets the overlay width and clears any previously set width.
   * @param value New width for the overlay
   * @deprecated Pass the `width` through the `OverlayConfig`.
   * @breaking-change 8.0.0
   */
  width(value = '') {
    if (this._overlayRef) {
      this._overlayRef.updateSize({
        width: value
      });
    } else {
      this._width = value;
    }
    return this;
  }
  /**
   * Sets the overlay height and clears any previously set height.
   * @param value New height for the overlay
   * @deprecated Pass the `height` through the `OverlayConfig`.
   * @breaking-change 8.0.0
   */
  height(value = '') {
    if (this._overlayRef) {
      this._overlayRef.updateSize({
        height: value
      });
    } else {
      this._height = value;
    }
    return this;
  }
  /**
   * Centers the overlay horizontally with an optional offset.
   * Clears any previously set horizontal position.
   *
   * @param offset Overlay offset from the horizontal center.
   */
  centerHorizontally(offset = '') {
    this.left(offset);
    this._xPosition = 'center';
    return this;
  }
  /**
   * Centers the overlay vertically with an optional offset.
   * Clears any previously set vertical position.
   *
   * @param offset Overlay offset from the vertical center.
   */
  centerVertically(offset = '') {
    this.top(offset);
    this._alignItems = 'center';
    return this;
  }
  /**
   * Apply the position to the element.
   * @docs-private
   */
  apply() {
    // Since the overlay ref applies the strategy asynchronously, it could
    // have been disposed before it ends up being applied. If that is the
    // case, we shouldn't do anything.
    if (!this._overlayRef || !this._overlayRef.hasAttached()) {
      return;
    }
    const styles = this._overlayRef.overlayElement.style;
    const parentStyles = this._overlayRef.hostElement.style;
    const config = this._overlayRef.getConfig();
    const {
      width,
      height,
      maxWidth,
      maxHeight
    } = config;
    const shouldBeFlushHorizontally = (width === '100%' || width === '100vw') && (!maxWidth || maxWidth === '100%' || maxWidth === '100vw');
    const shouldBeFlushVertically = (height === '100%' || height === '100vh') && (!maxHeight || maxHeight === '100%' || maxHeight === '100vh');
    const xPosition = this._xPosition;
    const xOffset = this._xOffset;
    const isRtl = this._overlayRef.getConfig().direction === 'rtl';
    let marginLeft = '';
    let marginRight = '';
    let justifyContent = '';
    if (shouldBeFlushHorizontally) {
      justifyContent = 'flex-start';
    } else if (xPosition === 'center') {
      justifyContent = 'center';
      if (isRtl) {
        marginRight = xOffset;
      } else {
        marginLeft = xOffset;
      }
    } else if (isRtl) {
      if (xPosition === 'left' || xPosition === 'end') {
        justifyContent = 'flex-end';
        marginLeft = xOffset;
      } else if (xPosition === 'right' || xPosition === 'start') {
        justifyContent = 'flex-start';
        marginRight = xOffset;
      }
    } else if (xPosition === 'left' || xPosition === 'start') {
      justifyContent = 'flex-start';
      marginLeft = xOffset;
    } else if (xPosition === 'right' || xPosition === 'end') {
      justifyContent = 'flex-end';
      marginRight = xOffset;
    }
    styles.position = this._cssPosition;
    styles.marginLeft = shouldBeFlushHorizontally ? '0' : marginLeft;
    styles.marginTop = shouldBeFlushVertically ? '0' : this._topOffset;
    styles.marginBottom = this._bottomOffset;
    styles.marginRight = shouldBeFlushHorizontally ? '0' : marginRight;
    parentStyles.justifyContent = justifyContent;
    parentStyles.alignItems = shouldBeFlushVertically ? 'flex-start' : this._alignItems;
  }
  /**
   * Cleans up the DOM changes from the position strategy.
   * @docs-private
   */
  dispose() {
    if (this._isDisposed || !this._overlayRef) {
      return;
    }
    const styles = this._overlayRef.overlayElement.style;
    const parent = this._overlayRef.hostElement;
    const parentStyles = parent.style;
    parent.classList.remove(wrapperClass);
    parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
    this._overlayRef = null;
    this._isDisposed = true;
  }
}

/** Builder for overlay position strategy. */
let OverlayPositionBuilder = /*#__PURE__*/(() => {
  class OverlayPositionBuilder {
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    constructor() {}
    /**
     * Creates a global position strategy.
     */
    global() {
      return createGlobalPositionStrategy();
    }
    /**
     * Creates a flexible position strategy.
     * @param origin Origin relative to which to position the overlay.
     */
    flexibleConnectedTo(origin) {
      return createFlexibleConnectedPositionStrategy(this._injector, origin);
    }
    static ɵfac = function OverlayPositionBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OverlayPositionBuilder)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OverlayPositionBuilder,
      factory: OverlayPositionBuilder.ɵfac,
      providedIn: 'root'
    });
  }
  return OverlayPositionBuilder;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Creates an overlay.
 * @param injector Injector to use when resolving the overlay's dependencies.
 * @param config Configuration applied to the overlay.
 * @returns Reference to the created overlay.
 */
function createOverlayRef(injector, config) {
  // This is done in the overlay container as well, but we have it here
  // since it's common to mock out the overlay container in tests.
  injector.get(_style_loader_B2sGQXxD_mjs__WEBPACK_IMPORTED_MODULE_9__._).load(_CdkOverlayStyleLoader);
  const overlayContainer = injector.get(OverlayContainer);
  const doc = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
  const idGenerator = injector.get(_id_generator_LuoRZSid_mjs__WEBPACK_IMPORTED_MODULE_12__._);
  const appRef = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
  const directionality = injector.get(_directionality_CChdj3az_mjs__WEBPACK_IMPORTED_MODULE_13__.D);
  const host = doc.createElement('div');
  const pane = doc.createElement('div');
  pane.id = idGenerator.getId('cdk-overlay-');
  pane.classList.add('cdk-overlay-pane');
  host.appendChild(pane);
  overlayContainer.getContainerElement().appendChild(host);
  const portalOutlet = new _portal_mjs__WEBPACK_IMPORTED_MODULE_14__.DomPortalOutlet(pane, appRef, injector);
  const overlayConfig = new OverlayConfig(config);
  const renderer = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2, null, {
    optional: true
  }) || injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
  overlayConfig.direction = overlayConfig.direction || directionality.value;
  return new OverlayRef(portalOutlet, host, pane, overlayConfig, injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), injector.get(OverlayKeyboardDispatcher), doc, injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_1__.Location), injector.get(OverlayOutsideClickDispatcher), config?.disableAnimations ?? injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, null, {
    optional: true
  }) === 'NoopAnimations', injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.EnvironmentInjector), renderer);
}
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
 */
let Overlay = /*#__PURE__*/(() => {
  class Overlay {
    scrollStrategies = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ScrollStrategyOptions);
    _positionBuilder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(OverlayPositionBuilder);
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    constructor() {}
    /**
     * Creates an overlay.
     * @param config Configuration applied to the overlay.
     * @returns Reference to the created overlay.
     */
    create(config) {
      return createOverlayRef(this._injector, config);
    }
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @returns An overlay position builder.
     */
    position() {
      return this._positionBuilder;
    }
    static ɵfac = function Overlay_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Overlay)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Overlay,
      factory: Overlay.ɵfac,
      providedIn: 'root'
    });
  }
  return Overlay;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Default set of positions for the overlay. Follows the behavior of a dropdown. */
const defaultPositionList = [{
  originX: 'start',
  originY: 'bottom',
  overlayX: 'start',
  overlayY: 'top'
}, {
  originX: 'start',
  originY: 'top',
  overlayX: 'start',
  overlayY: 'bottom'
}, {
  originX: 'end',
  originY: 'top',
  overlayX: 'end',
  overlayY: 'bottom'
}, {
  originX: 'end',
  originY: 'bottom',
  overlayX: 'end',
  overlayY: 'top'
}];
/** Injection token that determines the scroll handling while the connected overlay is open. */
const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-connected-overlay-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    const injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
let CdkOverlayOrigin = /*#__PURE__*/(() => {
  class CdkOverlayOrigin {
    elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    constructor() {}
    static ɵfac = function CdkOverlayOrigin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkOverlayOrigin)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkOverlayOrigin,
      selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
      exportAs: ["cdkOverlayOrigin"]
    });
  }
  return CdkOverlayOrigin;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive to facilitate declarative creation of an
 * Overlay using a FlexibleConnectedPositionStrategy.
 */
let CdkConnectedOverlay = /*#__PURE__*/(() => {
  class CdkConnectedOverlay {
    _dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_directionality_CChdj3az_mjs__WEBPACK_IMPORTED_MODULE_13__.D, {
      optional: true
    });
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    _overlayRef;
    _templatePortal;
    _backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    _attachSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    _detachSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    _positionSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    _offsetX;
    _offsetY;
    _position;
    _scrollStrategyFactory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY);
    _disposeOnNavigation = false;
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    /** Origin for the connected overlay. */
    origin;
    /** Registered connected position pairs. */
    positions;
    /**
     * This input overrides the positions input if specified. It lets users pass
     * in arbitrary positioning strategies.
     */
    positionStrategy;
    /** The offset in pixels for the overlay connection point on the x-axis */
    get offsetX() {
      return this._offsetX;
    }
    set offsetX(offsetX) {
      this._offsetX = offsetX;
      if (this._position) {
        this._updatePositionStrategy(this._position);
      }
    }
    /** The offset in pixels for the overlay connection point on the y-axis */
    get offsetY() {
      return this._offsetY;
    }
    set offsetY(offsetY) {
      this._offsetY = offsetY;
      if (this._position) {
        this._updatePositionStrategy(this._position);
      }
    }
    /** The width of the overlay panel. */
    width;
    /** The height of the overlay panel. */
    height;
    /** The min width of the overlay panel. */
    minWidth;
    /** The min height of the overlay panel. */
    minHeight;
    /** The custom class to be set on the backdrop element. */
    backdropClass;
    /** The custom class to add to the overlay pane element. */
    panelClass;
    /** Margin between the overlay and the viewport edges. */
    viewportMargin = 0;
    /** Strategy to be used when handling scroll events while the overlay is open. */
    scrollStrategy;
    /** Whether the overlay is open. */
    open = false;
    /** Whether the overlay can be closed by user interaction. */
    disableClose = false;
    /** CSS selector which to set the transform origin. */
    transformOriginSelector;
    /** Whether or not the overlay should attach a backdrop. */
    hasBackdrop = false;
    /** Whether or not the overlay should be locked when scrolling. */
    lockPosition = false;
    /** Whether the overlay's width and height can be constrained to fit within the viewport. */
    flexibleDimensions = false;
    /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */
    growAfterOpen = false;
    /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */
    push = false;
    /** Whether the overlay should be disposed of when the user goes backwards/forwards in history. */
    get disposeOnNavigation() {
      return this._disposeOnNavigation;
    }
    set disposeOnNavigation(value) {
      this._disposeOnNavigation = value;
    }
    /** Event emitted when the backdrop is clicked. */
    backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the position has changed. */
    positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the overlay has been attached. */
    attach = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the overlay has been detached. */
    detach = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when there are keyboard events that are targeted at the overlay. */
    overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when there are mouse outside click events that are targeted at the overlay. */
    overlayOutsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
    constructor() {
      const templateRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      const viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
      this._templatePortal = new _portal_mjs__WEBPACK_IMPORTED_MODULE_14__.TemplatePortal(templateRef, viewContainerRef);
      this.scrollStrategy = this._scrollStrategyFactory();
    }
    /** The associated overlay reference. */
    get overlayRef() {
      return this._overlayRef;
    }
    /** The element's layout direction. */
    get dir() {
      return this._dir ? this._dir.value : 'ltr';
    }
    ngOnDestroy() {
      this._attachSubscription.unsubscribe();
      this._detachSubscription.unsubscribe();
      this._backdropSubscription.unsubscribe();
      this._positionSubscription.unsubscribe();
      this._overlayRef?.dispose();
    }
    ngOnChanges(changes) {
      if (this._position) {
        this._updatePositionStrategy(this._position);
        this._overlayRef?.updateSize({
          width: this.width,
          minWidth: this.minWidth,
          height: this.height,
          minHeight: this.minHeight
        });
        if (changes['origin'] && this.open) {
          this._position.apply();
        }
      }
      if (changes['open']) {
        this.open ? this.attachOverlay() : this.detachOverlay();
      }
    }
    /** Creates an overlay */
    _createOverlay() {
      if (!this.positions || !this.positions.length) {
        this.positions = defaultPositionList;
      }
      const overlayRef = this._overlayRef = createOverlayRef(this._injector, this._buildConfig());
      this._attachSubscription = overlayRef.attachments().subscribe(() => this.attach.emit());
      this._detachSubscription = overlayRef.detachments().subscribe(() => this.detach.emit());
      overlayRef.keydownEvents().subscribe(event => {
        this.overlayKeydown.next(event);
        if (event.keyCode === _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_15__.g && !this.disableClose && !(0,_keycodes_mjs__WEBPACK_IMPORTED_MODULE_16__.hasModifierKey)(event)) {
          event.preventDefault();
          this.detachOverlay();
        }
      });
      this._overlayRef.outsidePointerEvents().subscribe(event => {
        const origin = this._getOriginElement();
        const target = (0,_shadow_dom_B0oHn41l_mjs__WEBPACK_IMPORTED_MODULE_8__._)(event);
        if (!origin || origin !== target && !origin.contains(target)) {
          this.overlayOutsideClick.next(event);
        }
      });
    }
    /** Builds the overlay config based on the directive's inputs */
    _buildConfig() {
      const positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();
      const overlayConfig = new OverlayConfig({
        direction: this._dir || 'ltr',
        positionStrategy,
        scrollStrategy: this.scrollStrategy,
        hasBackdrop: this.hasBackdrop,
        disposeOnNavigation: this.disposeOnNavigation
      });
      if (this.width || this.width === 0) {
        overlayConfig.width = this.width;
      }
      if (this.height || this.height === 0) {
        overlayConfig.height = this.height;
      }
      if (this.minWidth || this.minWidth === 0) {
        overlayConfig.minWidth = this.minWidth;
      }
      if (this.minHeight || this.minHeight === 0) {
        overlayConfig.minHeight = this.minHeight;
      }
      if (this.backdropClass) {
        overlayConfig.backdropClass = this.backdropClass;
      }
      if (this.panelClass) {
        overlayConfig.panelClass = this.panelClass;
      }
      return overlayConfig;
    }
    /** Updates the state of a position strategy, based on the values of the directive inputs. */
    _updatePositionStrategy(positionStrategy) {
      const positions = this.positions.map(currentPosition => ({
        originX: currentPosition.originX,
        originY: currentPosition.originY,
        overlayX: currentPosition.overlayX,
        overlayY: currentPosition.overlayY,
        offsetX: currentPosition.offsetX || this.offsetX,
        offsetY: currentPosition.offsetY || this.offsetY,
        panelClass: currentPosition.panelClass || undefined
      }));
      return positionStrategy.setOrigin(this._getOrigin()).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector);
    }
    /** Returns the position strategy of the overlay to be set on the overlay config */
    _createPositionStrategy() {
      const strategy = createFlexibleConnectedPositionStrategy(this._injector, this._getOrigin());
      this._updatePositionStrategy(strategy);
      return strategy;
    }
    _getOrigin() {
      if (this.origin instanceof CdkOverlayOrigin) {
        return this.origin.elementRef;
      } else {
        return this.origin;
      }
    }
    _getOriginElement() {
      if (this.origin instanceof CdkOverlayOrigin) {
        return this.origin.elementRef.nativeElement;
      }
      if (this.origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef) {
        return this.origin.nativeElement;
      }
      if (typeof Element !== 'undefined' && this.origin instanceof Element) {
        return this.origin;
      }
      return null;
    }
    /** Attaches the overlay. */
    attachOverlay() {
      if (!this._overlayRef) {
        this._createOverlay();
      } else {
        // Update the overlay size, in case the directive's inputs have changed
        this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
      }
      if (!this._overlayRef.hasAttached()) {
        this._overlayRef.attach(this._templatePortal);
      }
      if (this.hasBackdrop) {
        this._backdropSubscription = this._overlayRef.backdropClick().subscribe(event => {
          this.backdropClick.emit(event);
        });
      } else {
        this._backdropSubscription.unsubscribe();
      }
      this._positionSubscription.unsubscribe();
      // Only subscribe to `positionChanges` if requested, because putting
      // together all the information for it can be expensive.
      if (this.positionChange.observers.length > 0) {
        this._positionSubscription = this._position.positionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeWhile)(() => this.positionChange.observers.length > 0)).subscribe(position => {
          this._ngZone.run(() => this.positionChange.emit(position));
          if (this.positionChange.observers.length === 0) {
            this._positionSubscription.unsubscribe();
          }
        });
      }
      this.open = true;
    }
    /** Detaches the overlay. */
    detachOverlay() {
      this._overlayRef?.detach();
      this._backdropSubscription.unsubscribe();
      this._positionSubscription.unsubscribe();
      this.open = false;
    }
    static ɵfac = function CdkConnectedOverlay_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkConnectedOverlay)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkConnectedOverlay,
      selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]],
      inputs: {
        origin: [0, "cdkConnectedOverlayOrigin", "origin"],
        positions: [0, "cdkConnectedOverlayPositions", "positions"],
        positionStrategy: [0, "cdkConnectedOverlayPositionStrategy", "positionStrategy"],
        offsetX: [0, "cdkConnectedOverlayOffsetX", "offsetX"],
        offsetY: [0, "cdkConnectedOverlayOffsetY", "offsetY"],
        width: [0, "cdkConnectedOverlayWidth", "width"],
        height: [0, "cdkConnectedOverlayHeight", "height"],
        minWidth: [0, "cdkConnectedOverlayMinWidth", "minWidth"],
        minHeight: [0, "cdkConnectedOverlayMinHeight", "minHeight"],
        backdropClass: [0, "cdkConnectedOverlayBackdropClass", "backdropClass"],
        panelClass: [0, "cdkConnectedOverlayPanelClass", "panelClass"],
        viewportMargin: [0, "cdkConnectedOverlayViewportMargin", "viewportMargin"],
        scrollStrategy: [0, "cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
        open: [0, "cdkConnectedOverlayOpen", "open"],
        disableClose: [0, "cdkConnectedOverlayDisableClose", "disableClose"],
        transformOriginSelector: [0, "cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"],
        hasBackdrop: [2, "cdkConnectedOverlayHasBackdrop", "hasBackdrop", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        lockPosition: [2, "cdkConnectedOverlayLockPosition", "lockPosition", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        flexibleDimensions: [2, "cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        growAfterOpen: [2, "cdkConnectedOverlayGrowAfterOpen", "growAfterOpen", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        push: [2, "cdkConnectedOverlayPush", "push", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        disposeOnNavigation: [2, "cdkConnectedOverlayDisposeOnNavigation", "disposeOnNavigation", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      outputs: {
        backdropClick: "backdropClick",
        positionChange: "positionChange",
        attach: "attach",
        detach: "detach",
        overlayKeydown: "overlayKeydown",
        overlayOutsideClick: "overlayOutsideClick"
      },
      exportAs: ["cdkConnectedOverlay"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
  return CdkConnectedOverlay;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  const injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
  return () => createRepositionScrollStrategy(injector);
}
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
  provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
  useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
};
let OverlayModule = /*#__PURE__*/(() => {
  class OverlayModule {
    static ɵfac = function OverlayModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OverlayModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OverlayModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER],
      imports: [_bidi_mjs__WEBPACK_IMPORTED_MODULE_17__.BidiModule, _portal_mjs__WEBPACK_IMPORTED_MODULE_14__.PortalModule, _scrolling_mjs__WEBPACK_IMPORTED_MODULE_5__.ScrollingModule, _scrolling_mjs__WEBPACK_IMPORTED_MODULE_5__.ScrollingModule]
    });
  }
  return OverlayModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 9168:
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/portal.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasePortalOutlet: () => (/* binding */ BasePortalOutlet),
/* harmony export */   CdkPortal: () => (/* binding */ CdkPortal),
/* harmony export */   CdkPortalOutlet: () => (/* binding */ CdkPortalOutlet),
/* harmony export */   ComponentPortal: () => (/* binding */ ComponentPortal),
/* harmony export */   DomPortal: () => (/* binding */ DomPortal),
/* harmony export */   DomPortalOutlet: () => (/* binding */ DomPortalOutlet),
/* harmony export */   Portal: () => (/* binding */ Portal),
/* harmony export */   PortalHostDirective: () => (/* binding */ PortalHostDirective),
/* harmony export */   PortalModule: () => (/* binding */ PortalModule),
/* harmony export */   TemplatePortal: () => (/* binding */ TemplatePortal),
/* harmony export */   TemplatePortalDirective: () => (/* binding */ TemplatePortalDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);



/**
 * Throws an exception when attempting to attach a null portal to a host.
 * @docs-private
 */
function throwNullPortalError() {
  throw Error('Must provide a portal to attach');
}
/**
 * Throws an exception when attempting to attach a portal to a host that is already attached.
 * @docs-private
 */
function throwPortalAlreadyAttachedError() {
  throw Error('Host already has a portal attached');
}
/**
 * Throws an exception when attempting to attach a portal to an already-disposed host.
 * @docs-private
 */
function throwPortalOutletAlreadyDisposedError() {
  throw Error('This PortalOutlet has already been disposed');
}
/**
 * Throws an exception when attempting to attach an unknown portal type.
 * @docs-private
 */
function throwUnknownPortalTypeError() {
  throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' + 'a ComponentPortal or a TemplatePortal.');
}
/**
 * Throws an exception when attempting to attach a portal to a null host.
 * @docs-private
 */
function throwNullPortalOutletError() {
  throw Error('Attempting to attach a portal to a null PortalOutlet');
}
/**
 * Throws an exception when attempting to detach a portal that is not attached.
 * @docs-private
 */
function throwNoPortalAttachedError() {
  throw Error('Attempting to detach a portal that is not attached to a host');
}

/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalOutlet`.
 */
class Portal {
  _attachedHost;
  /** Attach this portal to a host. */
  attach(host) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (host == null) {
        throwNullPortalOutletError();
      }
      if (host.hasAttached()) {
        throwPortalAlreadyAttachedError();
      }
    }
    this._attachedHost = host;
    return host.attach(this);
  }
  /** Detach this portal from its host */
  detach() {
    let host = this._attachedHost;
    if (host != null) {
      this._attachedHost = null;
      host.detach();
    } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
      throwNoPortalAttachedError();
    }
  }
  /** Whether this portal is attached to a host. */
  get isAttached() {
    return this._attachedHost != null;
  }
  /**
   * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
   * the PortalOutlet when it is performing an `attach()` or `detach()`.
   */
  setAttachedHost(host) {
    this._attachedHost = host;
  }
}
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
class ComponentPortal extends Portal {
  /** The type of the component that will be instantiated for attachment. */
  component;
  /**
   * Where the attached component should live in Angular's *logical* component tree.
   * This is different from where the component *renders*, which is determined by the PortalOutlet.
   * The origin is necessary when the host is outside of the Angular application context.
   */
  viewContainerRef;
  /** Injector used for the instantiation of the component. */
  injector;
  /**
   * List of DOM nodes that should be projected through `<ng-content>` of the attached component.
   */
  projectableNodes;
  constructor(component, viewContainerRef, injector, projectableNodes) {
    super();
    this.component = component;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.projectableNodes = projectableNodes;
  }
}
/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 */
class TemplatePortal extends Portal {
  templateRef;
  viewContainerRef;
  context;
  injector;
  constructor(/** The embedded template that will be used to instantiate an embedded View in the host. */
  templateRef, /** Reference to the ViewContainer into which the template will be stamped out. */
  viewContainerRef, /** Contextual data to be passed in to the embedded view. */
  context, /** The injector to use for the embedded view. */
  injector) {
    super();
    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
    this.context = context;
    this.injector = injector;
  }
  get origin() {
    return this.templateRef.elementRef;
  }
  /**
   * Attach the portal to the provided `PortalOutlet`.
   * When a context is provided it will override the `context` property of the `TemplatePortal`
   * instance.
   */
  attach(host, context = this.context) {
    this.context = context;
    return super.attach(host);
  }
  detach() {
    this.context = undefined;
    return super.detach();
  }
}
/**
 * A `DomPortal` is a portal whose DOM element will be taken from its current position
 * in the DOM and moved into a portal outlet, when it is attached. On detach, the content
 * will be restored to its original position.
 */
class DomPortal extends Portal {
  /** DOM node hosting the portal's content. */
  element;
  constructor(element) {
    super();
    this.element = element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? element.nativeElement : element;
  }
}
/**
 * Partial implementation of PortalOutlet that handles attaching
 * ComponentPortal and TemplatePortal.
 */
class BasePortalOutlet {
  /** The portal currently attached to the host. */
  _attachedPortal;
  /** A function that will permanently dispose this host. */
  _disposeFn;
  /** Whether this host has already been permanently disposed. */
  _isDisposed = false;
  /** Whether this host has an attached portal. */
  hasAttached() {
    return !!this._attachedPortal;
  }
  /** Attaches a portal. */
  attach(portal) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!portal) {
        throwNullPortalError();
      }
      if (this.hasAttached()) {
        throwPortalAlreadyAttachedError();
      }
      if (this._isDisposed) {
        throwPortalOutletAlreadyDisposedError();
      }
    }
    if (portal instanceof ComponentPortal) {
      this._attachedPortal = portal;
      return this.attachComponentPortal(portal);
    } else if (portal instanceof TemplatePortal) {
      this._attachedPortal = portal;
      return this.attachTemplatePortal(portal);
      // @breaking-change 10.0.0 remove null check for `this.attachDomPortal`.
    } else if (this.attachDomPortal && portal instanceof DomPortal) {
      this._attachedPortal = portal;
      return this.attachDomPortal(portal);
    }
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      throwUnknownPortalTypeError();
    }
  }
  // @breaking-change 10.0.0 `attachDomPortal` to become a required abstract method.
  attachDomPortal = null;
  /** Detaches a previously attached portal. */
  detach() {
    if (this._attachedPortal) {
      this._attachedPortal.setAttachedHost(null);
      this._attachedPortal = null;
    }
    this._invokeDisposeFn();
  }
  /** Permanently dispose of this portal host. */
  dispose() {
    if (this.hasAttached()) {
      this.detach();
    }
    this._invokeDisposeFn();
    this._isDisposed = true;
  }
  /** @docs-private */
  setDisposeFn(fn) {
    this._disposeFn = fn;
  }
  _invokeDisposeFn() {
    if (this._disposeFn) {
      this._disposeFn();
      this._disposeFn = null;
    }
  }
}

/**
 * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 */
class DomPortalOutlet extends BasePortalOutlet {
  outletElement;
  _appRef;
  _defaultInjector;
  /**
   * @param outletElement Element into which the content is projected.
   * @param _appRef Reference to the application. Only used in component portals when there
   *   is no `ViewContainerRef` available.
   * @param _defaultInjector Injector to use as a fallback when the portal being attached doesn't
   *   have one. Only used for component portals.
   */
  constructor(/** Element into which the content is projected. */
  outletElement, _appRef, _defaultInjector) {
    super();
    this.outletElement = outletElement;
    this._appRef = _appRef;
    this._defaultInjector = _defaultInjector;
  }
  /**
   * Attach the given ComponentPortal to DOM element.
   * @param portal Portal to be attached
   * @returns Reference to the created component.
   */
  attachComponentPortal(portal) {
    let componentRef;
    // If the portal specifies a ViewContainerRef, we will use that as the attachment point
    // for the component (in terms of Angular's component tree, not rendering).
    // When the ViewContainerRef is missing, we use the factory to create the component directly
    // and then manually attach the view to the application.
    if (portal.viewContainerRef) {
      const injector = portal.injector || portal.viewContainerRef.injector;
      const ngModuleRef = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModuleRef, null, {
        optional: true
      }) || undefined;
      componentRef = portal.viewContainerRef.createComponent(portal.component, {
        index: portal.viewContainerRef.length,
        injector,
        ngModuleRef,
        projectableNodes: portal.projectableNodes || undefined
      });
      this.setDisposeFn(() => componentRef.destroy());
    } else {
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !this._appRef) {
        throw Error('Cannot attach component portal to outlet without an ApplicationRef.');
      }
      const appRef = this._appRef;
      const elementInjector = portal.injector || this._defaultInjector || _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.NULL;
      const environmentInjector = elementInjector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.EnvironmentInjector, appRef.injector);
      componentRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.createComponent)(portal.component, {
        elementInjector,
        environmentInjector,
        projectableNodes: portal.projectableNodes || undefined
      });
      appRef.attachView(componentRef.hostView);
      this.setDisposeFn(() => {
        // Verify that the ApplicationRef has registered views before trying to detach a host view.
        // This check also protects the `detachView` from being called on a destroyed ApplicationRef.
        if (appRef.viewCount > 0) {
          appRef.detachView(componentRef.hostView);
        }
        componentRef.destroy();
      });
    }
    // At this point the component has been instantiated, so we move it to the location in the DOM
    // where we want it to be rendered.
    this.outletElement.appendChild(this._getComponentRootNode(componentRef));
    this._attachedPortal = portal;
    return componentRef;
  }
  /**
   * Attaches a template portal to the DOM as an embedded view.
   * @param portal Portal to be attached.
   * @returns Reference to the created embedded view.
   */
  attachTemplatePortal(portal) {
    let viewContainer = portal.viewContainerRef;
    let viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context, {
      injector: portal.injector
    });
    // The method `createEmbeddedView` will add the view as a child of the viewContainer.
    // But for the DomPortalOutlet the view can be added everywhere in the DOM
    // (e.g Overlay Container) To move the view to the specified host element. We just
    // re-append the existing root nodes.
    viewRef.rootNodes.forEach(rootNode => this.outletElement.appendChild(rootNode));
    // Note that we want to detect changes after the nodes have been moved so that
    // any directives inside the portal that are looking at the DOM inside a lifecycle
    // hook won't be invoked too early.
    viewRef.detectChanges();
    this.setDisposeFn(() => {
      let index = viewContainer.indexOf(viewRef);
      if (index !== -1) {
        viewContainer.remove(index);
      }
    });
    this._attachedPortal = portal;
    // TODO(jelbourn): Return locals from view.
    return viewRef;
  }
  /**
   * Attaches a DOM portal by transferring its content into the outlet.
   * @param portal Portal to be attached.
   * @deprecated To be turned into a method.
   * @breaking-change 10.0.0
   */
  attachDomPortal = portal => {
    const element = portal.element;
    if (!element.parentNode && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('DOM portal content must be attached to a parent node.');
    }
    // Anchor used to save the element's previous position so
    // that we can restore it when the portal is detached.
    const anchorNode = this.outletElement.ownerDocument.createComment('dom-portal');
    element.parentNode.insertBefore(anchorNode, element);
    this.outletElement.appendChild(element);
    this._attachedPortal = portal;
    super.setDisposeFn(() => {
      // We can't use `replaceWith` here because IE doesn't support it.
      if (anchorNode.parentNode) {
        anchorNode.parentNode.replaceChild(element, anchorNode);
      }
    });
  };
  /**
   * Clears out a portal from the DOM.
   */
  dispose() {
    super.dispose();
    this.outletElement.remove();
  }
  /** Gets the root HTMLElement for an instantiated component. */
  _getComponentRootNode(componentRef) {
    return componentRef.hostView.rootNodes[0];
  }
}

/**
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 */
let CdkPortal = /*#__PURE__*/(() => {
  class CdkPortal extends TemplatePortal {
    constructor() {
      const templateRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      const viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
      super(templateRef, viewContainerRef);
    }
    static ɵfac = function CdkPortal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkPortal)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkPortal,
      selectors: [["", "cdkPortal", ""]],
      exportAs: ["cdkPortal"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return CdkPortal;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @deprecated Use `CdkPortal` instead.
 * @breaking-change 9.0.0
 */
let TemplatePortalDirective = /*#__PURE__*/(() => {
  class TemplatePortalDirective extends CdkPortal {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵTemplatePortalDirective_BaseFactory;
      return function TemplatePortalDirective_Factory(__ngFactoryType__) {
        return (ɵTemplatePortalDirective_BaseFactory || (ɵTemplatePortalDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TemplatePortalDirective)))(__ngFactoryType__ || TemplatePortalDirective);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TemplatePortalDirective,
      selectors: [["", "cdk-portal", ""], ["", "portal", ""]],
      exportAs: ["cdkPortal"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CdkPortal,
        useExisting: TemplatePortalDirective
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return TemplatePortalDirective;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
 */
let CdkPortalOutlet = /*#__PURE__*/(() => {
  class CdkPortalOutlet extends BasePortalOutlet {
    _moduleRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModuleRef, {
      optional: true
    });
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    /** Whether the portal component is initialized. */
    _isInitialized = false;
    /** Reference to the currently-attached component/view ref. */
    _attachedRef;
    constructor() {
      super();
    }
    /** Portal associated with the Portal outlet. */
    get portal() {
      return this._attachedPortal;
    }
    set portal(portal) {
      // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
      // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
      // and attach a portal programmatically in the parent component. When Angular does the first CD
      // round, it will fire the setter with empty string, causing the user's content to be cleared.
      if (this.hasAttached() && !portal && !this._isInitialized) {
        return;
      }
      if (this.hasAttached()) {
        super.detach();
      }
      if (portal) {
        super.attach(portal);
      }
      this._attachedPortal = portal || null;
    }
    /** Emits when a portal is attached to the outlet. */
    attached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Component or view reference that is attached to the portal. */
    get attachedRef() {
      return this._attachedRef;
    }
    ngOnInit() {
      this._isInitialized = true;
    }
    ngOnDestroy() {
      super.dispose();
      this._attachedRef = this._attachedPortal = null;
    }
    /**
     * Attach the given ComponentPortal to this PortalOutlet.
     *
     * @param portal Portal to be attached to the portal outlet.
     * @returns Reference to the created component.
     */
    attachComponentPortal(portal) {
      portal.setAttachedHost(this);
      // If the portal specifies an origin, use that as the logical location of the component
      // in the application tree. Otherwise use the location of this PortalOutlet.
      const viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
      const ref = viewContainerRef.createComponent(portal.component, {
        index: viewContainerRef.length,
        injector: portal.injector || viewContainerRef.injector,
        projectableNodes: portal.projectableNodes || undefined,
        ngModuleRef: this._moduleRef || undefined
      });
      // If we're using a view container that's different from the injected one (e.g. when the portal
      // specifies its own) we need to move the component into the outlet, otherwise it'll be rendered
      // inside of the alternate view container.
      if (viewContainerRef !== this._viewContainerRef) {
        this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
      }
      super.setDisposeFn(() => ref.destroy());
      this._attachedPortal = portal;
      this._attachedRef = ref;
      this.attached.emit(ref);
      return ref;
    }
    /**
     * Attach the given TemplatePortal to this PortalHost as an embedded View.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    attachTemplatePortal(portal) {
      portal.setAttachedHost(this);
      const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context, {
        injector: portal.injector
      });
      super.setDisposeFn(() => this._viewContainerRef.clear());
      this._attachedPortal = portal;
      this._attachedRef = viewRef;
      this.attached.emit(viewRef);
      return viewRef;
    }
    /**
     * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
     * @param portal Portal to be attached.
     * @deprecated To be turned into a method.
     * @breaking-change 10.0.0
     */
    attachDomPortal = portal => {
      const element = portal.element;
      if (!element.parentNode && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('DOM portal content must be attached to a parent node.');
      }
      // Anchor used to save the element's previous position so
      // that we can restore it when the portal is detached.
      const anchorNode = this._document.createComment('dom-portal');
      portal.setAttachedHost(this);
      element.parentNode.insertBefore(anchorNode, element);
      this._getRootNode().appendChild(element);
      this._attachedPortal = portal;
      super.setDisposeFn(() => {
        if (anchorNode.parentNode) {
          anchorNode.parentNode.replaceChild(element, anchorNode);
        }
      });
    };
    /** Gets the root node of the portal outlet. */
    _getRootNode() {
      const nativeElement = this._viewContainerRef.element.nativeElement;
      // The directive could be set on a template which will result in a comment
      // node being the root. Use the comment's parent node if that is the case.
      return nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement : nativeElement.parentNode;
    }
    static ɵfac = function CdkPortalOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkPortalOutlet)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkPortalOutlet,
      selectors: [["", "cdkPortalOutlet", ""]],
      inputs: {
        portal: [0, "cdkPortalOutlet", "portal"]
      },
      outputs: {
        attached: "attached"
      },
      exportAs: ["cdkPortalOutlet"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return CdkPortalOutlet;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @deprecated Use `CdkPortalOutlet` instead.
 * @breaking-change 9.0.0
 */
let PortalHostDirective = /*#__PURE__*/(() => {
  class PortalHostDirective extends CdkPortalOutlet {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵPortalHostDirective_BaseFactory;
      return function PortalHostDirective_Factory(__ngFactoryType__) {
        return (ɵPortalHostDirective_BaseFactory || (ɵPortalHostDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PortalHostDirective)))(__ngFactoryType__ || PortalHostDirective);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: PortalHostDirective,
      selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]],
      inputs: {
        portal: [0, "cdkPortalHost", "portal"]
      },
      exportAs: ["cdkPortalHost"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CdkPortalOutlet,
        useExisting: PortalHostDirective
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return PortalHostDirective;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let PortalModule = /*#__PURE__*/(() => {
  class PortalModule {
    static ɵfac = function PortalModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PortalModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PortalModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  }
  return PortalModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 32373:
/*!************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/directionality-CChdj3az.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ Directionality),
/* harmony export */   _: () => (/* binding */ _resolveDirectionality),
/* harmony export */   a: () => (/* binding */ DIR_DOCUMENT)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);



/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-browser because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * @docs-private
 */
const DIR_DOCUMENT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-dir-doc', {
  providedIn: 'root',
  factory: DIR_DOCUMENT_FACTORY
});
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
function DIR_DOCUMENT_FACTORY() {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
}

/** Regex that matches locales with an RTL script. Taken from `goog.i18n.bidi.isRtlLanguage`. */
const RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
/** Resolves a string value to a specific direction. */
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || '';
  if (value === 'auto' && typeof navigator !== 'undefined' && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? 'rtl' : 'ltr';
  }
  return value === 'rtl' ? 'rtl' : 'ltr';
}
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
let Directionality = /*#__PURE__*/(() => {
  class Directionality {
    /** The current 'ltr' or 'rtl' value. */
    get value() {
      return this.valueSignal();
    }
    /**
     * The current 'ltr' or 'rtl' value.
     */
    valueSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('ltr');
    /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
    change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    constructor() {
      const _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(DIR_DOCUMENT, {
        optional: true
      });
      if (_document) {
        const bodyDir = _document.body ? _document.body.dir : null;
        const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
        this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || 'ltr'));
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
    static ɵfac = function Directionality_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Directionality)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Directionality,
      factory: Directionality.ɵfac,
      providedIn: 'root'
    });
  }
  return Directionality;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 51590:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/id-generator-LuoRZSid.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _IdGenerator)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);



/**
 * Keeps track of the ID count per prefix. This helps us make the IDs a bit more deterministic
 * like they were before the service was introduced. Note that ideally we wouldn't have to do
 * this, but there are some internal tests that rely on the IDs.
 */
const counters = {};
/** Service that generates unique IDs for DOM nodes. */
let _IdGenerator = /*#__PURE__*/(() => {
  class _IdGenerator {
    _appId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID);
    /**
     * Generates a unique ID with a specific prefix.
     * @param prefix Prefix to add to the ID.
     */
    getId(prefix) {
      // Omit the app ID if it's the default `ng`. Since the vast majority of pages have one
      // Angular app on them, we can reduce the amount of breakages by not adding it.
      if (this._appId !== 'ng') {
        prefix += this._appId;
      }
      if (!counters.hasOwnProperty(prefix)) {
        counters[prefix] = 0;
      }
      return `${prefix}${counters[prefix]++}`;
    }
    static ɵfac = function _IdGenerator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IdGenerator)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: _IdGenerator,
      factory: _IdGenerator.ɵfac,
      providedIn: 'root'
    });
  }
  return _IdGenerator;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 59566:
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/scrolling-BkvA05C8.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ RtlScrollAxisType),
/* harmony export */   g: () => (/* binding */ getRtlScrollAxisType),
/* harmony export */   s: () => (/* binding */ supportsScrollBehavior)
/* harmony export */ });
/** The possible ways the browser may handle the horizontal scroll axis in RTL languages. */
var RtlScrollAxisType = /*#__PURE__*/function (RtlScrollAxisType) {
  /**
   * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
   * all the way right.
   */
  RtlScrollAxisType[RtlScrollAxisType["NORMAL"] = 0] = "NORMAL";
  /**
   * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
   * all the way right.
   */
  RtlScrollAxisType[RtlScrollAxisType["NEGATED"] = 1] = "NEGATED";
  /**
   * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
   * all the way right.
   */
  RtlScrollAxisType[RtlScrollAxisType["INVERTED"] = 2] = "INVERTED";
  return RtlScrollAxisType;
}(RtlScrollAxisType || {});
/** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */
let rtlScrollAxisType;
/** Cached result of the check that indicates whether the browser supports scroll behaviors. */
let scrollBehaviorSupported;
/** Check whether the browser supports scroll behaviors. */
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    // If we're not in the browser, it can't be supported. Also check for `Element`, because
    // some projects stub out the global `document` during SSR which can throw us off.
    if (typeof document !== 'object' || !document || typeof Element !== 'function' || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    // If the element can have a `scrollBehavior` style, we can be sure that it's supported.
    if ('scrollBehavior' in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      // At this point we have 3 possibilities: `scrollTo` isn't supported at all, it's
      // supported but it doesn't handle scroll behavior, or it has been polyfilled.
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        // We can detect if the function has been polyfilled by calling `toString` on it. Native
        // functions are obfuscated using `[native code]`, whereas if it was overwritten we'd get
        // the actual function source. Via https://davidwalsh.name/detect-native-function. Consider
        // polyfilled functions as supporting scroll behavior.
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 */
function getRtlScrollAxisType() {
  // We can't check unless we're on the browser. Just assume 'normal' if we're not.
  if (typeof document !== 'object' || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    // Create a 1px wide scrolling container and a 2px wide content element.
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
    // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
    // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
    // dealing with one of the other two types of browsers.
    if (scrollContainer.scrollLeft === 0) {
      // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
      // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
      // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
      // return 0 when we read it again.
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}


/***/ }),

/***/ 63680:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/bidi.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiModule: () => (/* binding */ BidiModule),
/* harmony export */   DIR_DOCUMENT: () => (/* reexport safe */ _directionality_CChdj3az_mjs__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   Dir: () => (/* binding */ Dir),
/* harmony export */   Directionality: () => (/* reexport safe */ _directionality_CChdj3az_mjs__WEBPACK_IMPORTED_MODULE_0__.D)
/* harmony export */ });
/* harmony import */ var _directionality_CChdj3az_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directionality-CChdj3az.mjs */ 32373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27940);





/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
let Dir = /*#__PURE__*/(() => {
  class Dir {
    /** Whether the `value` has been set to its initial value. */
    _isInitialized = false;
    /** Direction as passed in by the consumer. */
    _rawDir;
    /** Event emitted when the direction changes. */
    change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** @docs-private */
    get dir() {
      return this.valueSignal();
    }
    set dir(value) {
      const previousValue = this.valueSignal();
      // Note: `_resolveDirectionality` resolves the language based on the browser's language,
      // whereas the browser does it based on the content of the element. Since doing so based
      // on the content can be expensive, for now we're doing the simpler matching.
      this.valueSignal.set((0,_directionality_CChdj3az_mjs__WEBPACK_IMPORTED_MODULE_0__._)(value));
      this._rawDir = value;
      if (previousValue !== this.valueSignal() && this._isInitialized) {
        this.change.emit(this.valueSignal());
      }
    }
    /** Current layout direction of the element. */
    get value() {
      return this.dir;
    }
    valueSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('ltr');
    /** Initialize once default value has been set. */
    ngAfterContentInit() {
      this._isInitialized = true;
    }
    ngOnDestroy() {
      this.change.complete();
    }
    static ɵfac = function Dir_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Dir)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: Dir,
      selectors: [["", "dir", ""]],
      hostVars: 1,
      hostBindings: function Dir_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("dir", ctx._rawDir);
        }
      },
      inputs: {
        dir: "dir"
      },
      outputs: {
        change: "dirChange"
      },
      exportAs: ["dir"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _directionality_CChdj3az_mjs__WEBPACK_IMPORTED_MODULE_0__.D,
        useExisting: Dir
      }])]
    });
  }
  return Dir;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let BidiModule = /*#__PURE__*/(() => {
  class BidiModule {
    static ɵfac = function BidiModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BidiModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: BidiModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  }
  return BidiModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 65757:
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/test-environment-CT0XxPyp.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _isTestEnvironment)
/* harmony export */ });
/** Gets whether the code is currently running in a test environment. */
function _isTestEnvironment() {
  // We can't use `declare const` because it causes conflicts inside Google with the real typings
  // for these symbols and we can't read them off the global object, because they don't appear to
  // be attached there for some runners like Jest.
  // (see: https://github.com/angular/components/issues/23365#issuecomment-938146643)
  return (
    // @ts-ignore
    typeof __karma__ !== 'undefined' && !!__karma__ ||
    // @ts-ignore
    typeof jasmine !== 'undefined' && !!jasmine ||
    // @ts-ignore
    typeof jest !== 'undefined' && !!jest ||
    // @ts-ignore
    typeof Mocha !== 'undefined' && !!Mocha
  );
}


/***/ }),

/***/ 66488:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/shadow-dom-B0oHn41l.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _getEventTarget),
/* harmony export */   a: () => (/* binding */ _getShadowRoot),
/* harmony export */   b: () => (/* binding */ _supportsShadowDom),
/* harmony export */   c: () => (/* binding */ _getFocusedElementPierceShadowDom)
/* harmony export */ });
let shadowDomIsSupported;
/** Checks whether the user's browser support Shadow DOM. */
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== 'undefined' ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
/** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    // Note that this should be caught by `_supportsShadowDom`, but some
    // teams have been able to hit this code path on unsupported browsers.
    if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
/**
 * Gets the currently-focused element on the page while
 * also piercing through Shadow DOM boundaries.
 */
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
/** Gets the target of an event while accounting for Shadow DOM. */
function _getEventTarget(event) {
  // If an event is bound outside the Shadow DOM, the `event.target` will
  // point to the shadow root so we have to use `composedPath` instead.
  return event.composedPath ? event.composedPath()[0] : event.target;
}


/***/ }),

/***/ 74879:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/keycodes.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   ALT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   APOSTROPHE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aX),
/* harmony export */   AT_SIGN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a1),
/* harmony export */   B: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a2),
/* harmony export */   BACKSLASH: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a_),
/* harmony export */   BACKSPACE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   C: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a3),
/* harmony export */   CAPS_LOCK: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.y),
/* harmony export */   CLOSE_SQUARE_BRACKET: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a$),
/* harmony export */   COMMA: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   CONTEXT_MENU: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.as),
/* harmony export */   CONTROL: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   D: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a4),
/* harmony export */   DASH: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aV),
/* harmony export */   DELETE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   DOWN_ARROW: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   E: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a5),
/* harmony export */   EIGHT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.Y),
/* harmony export */   END: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   ENTER: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   EQUALS: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aU),
/* harmony export */   ESCAPE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   F: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a6),
/* harmony export */   F1: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   F10: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   F11: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   F12: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.t),
/* harmony export */   F2: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   F3: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   F4: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.l),
/* harmony export */   F5: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   F6: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.n),
/* harmony export */   F7: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.o),
/* harmony export */   F8: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.p),
/* harmony export */   F9: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   FF_EQUALS: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.$),
/* harmony export */   FF_MINUS: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aL),
/* harmony export */   FF_MUTE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aP),
/* harmony export */   FF_SEMICOLON: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__._),
/* harmony export */   FF_VOLUME_DOWN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aQ),
/* harmony export */   FF_VOLUME_UP: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aS),
/* harmony export */   FIRST_MEDIA: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aK),
/* harmony export */   FIVE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   FOUR: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.Q),
/* harmony export */   G: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a7),
/* harmony export */   H: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a8),
/* harmony export */   HOME: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   I: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a9),
/* harmony export */   INSERT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   J: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aa),
/* harmony export */   K: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ab),
/* harmony export */   L: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ac),
/* harmony export */   LAST_MEDIA: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aR),
/* harmony export */   LEFT_ARROW: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   M: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ad),
/* harmony export */   MAC_ENTER: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.v),
/* harmony export */   MAC_META: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   MAC_WK_CMD_LEFT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aq),
/* harmony export */   MAC_WK_CMD_RIGHT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ar),
/* harmony export */   META: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.e),
/* harmony export */   MUTE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aM),
/* harmony export */   N: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ae),
/* harmony export */   NINE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   NUMPAD_DIVIDE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aH),
/* harmony export */   NUMPAD_EIGHT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aB),
/* harmony export */   NUMPAD_FIVE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ay),
/* harmony export */   NUMPAD_FOUR: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ax),
/* harmony export */   NUMPAD_MINUS: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aF),
/* harmony export */   NUMPAD_MULTIPLY: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aD),
/* harmony export */   NUMPAD_NINE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aC),
/* harmony export */   NUMPAD_ONE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.au),
/* harmony export */   NUMPAD_PERIOD: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aG),
/* harmony export */   NUMPAD_PLUS: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aE),
/* harmony export */   NUMPAD_SEVEN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aA),
/* harmony export */   NUMPAD_SIX: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.az),
/* harmony export */   NUMPAD_THREE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aw),
/* harmony export */   NUMPAD_TWO: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.av),
/* harmony export */   NUMPAD_ZERO: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.at),
/* harmony export */   NUM_CENTER: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   NUM_LOCK: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aI),
/* harmony export */   O: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.af),
/* harmony export */   ONE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   OPEN_SQUARE_BRACKET: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aZ),
/* harmony export */   P: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ag),
/* harmony export */   PAGE_DOWN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   PAGE_UP: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   PAUSE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.x),
/* harmony export */   PERIOD: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   PLUS_SIGN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.z),
/* harmony export */   PRINT_SCREEN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   Q: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ah),
/* harmony export */   QUESTION_MARK: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.a0),
/* harmony export */   R: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ai),
/* harmony export */   RIGHT_ARROW: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   S: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aj),
/* harmony export */   SCROLL_LOCK: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aJ),
/* harmony export */   SEMICOLON: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aT),
/* harmony export */   SEVEN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.X),
/* harmony export */   SHIFT: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   SINGLE_QUOTE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.b0),
/* harmony export */   SIX: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   SLASH: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aW),
/* harmony export */   SPACE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   T: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ak),
/* harmony export */   TAB: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.T),
/* harmony export */   THREE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   TILDE: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aY),
/* harmony export */   TWO: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   U: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.al),
/* harmony export */   UP_ARROW: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   V: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.am),
/* harmony export */   VOLUME_DOWN: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aN),
/* harmony export */   VOLUME_UP: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.aO),
/* harmony export */   W: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.an),
/* harmony export */   X: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ao),
/* harmony export */   Y: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.ap),
/* harmony export */   Z: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   ZERO: () => (/* reexport safe */ _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   hasModifierKey: () => (/* binding */ hasModifierKey)
/* harmony export */ });
/* harmony import */ var _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keycodes-CpHkExLC.mjs */ 5758);


/**
 * Checks whether a modifier key is pressed.
 * @param event Event to be checked.
 */
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some(modifier => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}


/***/ }),

/***/ 76194:
/*!****************************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/recycle-view-repeater-strategy-SfuyU210.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrayDataSource),
/* harmony export */   _: () => (/* binding */ _RecycleViewRepeaterStrategy),
/* harmony export */   a: () => (/* binding */ _ViewRepeaterOperation),
/* harmony export */   b: () => (/* binding */ _VIEW_REPEATER_STRATEGY)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _data_source_D34wiQZj_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-source-D34wiQZj.mjs */ 1019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27940);




/** DataSource wrapper for a native array. */
class ArrayDataSource extends _data_source_D34wiQZj_mjs__WEBPACK_IMPORTED_MODULE_2__.D {
  _data;
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.isObservable)(this._data) ? this._data : (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this._data);
  }
  disconnect() {}
}

/** Indicates how a view was changed by a `_ViewRepeater`. */
var _ViewRepeaterOperation = /*#__PURE__*/function (_ViewRepeaterOperation) {
  /** The content of an existing view was replaced with another item. */
  _ViewRepeaterOperation[_ViewRepeaterOperation["REPLACED"] = 0] = "REPLACED";
  /** A new view was created with `createEmbeddedView`. */
  _ViewRepeaterOperation[_ViewRepeaterOperation["INSERTED"] = 1] = "INSERTED";
  /** The position of a view changed, but the content remains the same. */
  _ViewRepeaterOperation[_ViewRepeaterOperation["MOVED"] = 2] = "MOVED";
  /** A view was detached from the view container. */
  _ViewRepeaterOperation[_ViewRepeaterOperation["REMOVED"] = 3] = "REMOVED";
  return _ViewRepeaterOperation;
}(_ViewRepeaterOperation || {});
/**
 * Injection token for `_ViewRepeater`. This token is for use by Angular Material only.
 * @docs-private
 */
const _VIEW_REPEATER_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('_ViewRepeater');

/**
 * A repeater that caches views when they are removed from a
 * `ViewContainerRef`. When new items are inserted into the container,
 * the repeater will reuse one of the cached views instead of creating a new
 * embedded view. Recycling cached views reduces the quantity of expensive DOM
 * inserts.
 *
 * @template T The type for the embedded view's $implicit property.
 * @template R The type for the item in each IterableDiffer change record.
 * @template C The type for the context passed to each embedded view.
 */
class _RecycleViewRepeaterStrategy {
  /**
   * The size of the cache used to store unused views.
   * Setting the cache size to `0` will disable caching. Defaults to 20 views.
   */
  viewCacheSize = 20;
  /**
   * View cache that stores embedded view instances that have been previously stamped out,
   * but don't are not currently rendered. The view repeater will reuse these views rather than
   * creating brand new ones.
   *
   * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
   */
  _viewCache = [];
  /** Apply changes to the DOM. */
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    // Rearrange the views to put them in the right location.
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        // Item added.
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        // Item removed.
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        // Item moved.
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  /**
   * Inserts a view for a new item, either from the cache or by creating a new
   * one. Returns `undefined` if the item was inserted into a cached view.
   */
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return undefined;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  /** Detaches the view at the given index and inserts into the view cache. */
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  /** Moves view at the previous index to the current index. */
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  /**
   * Cache the given detached view. If the cache is full, the view will be
   * destroyed.
   */
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      // The host component could remove views from the container outside of
      // the view repeater. It's unlikely this will occur, but just in case,
      // destroy the view on its own, otherwise destroy it through the
      // container to ensure that all the references are removed.
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  /** Inserts a recycled view from the cache at the given index. */
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
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

/***/ 79975:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/scrolling.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdkFixedSizeVirtualScroll: () => (/* binding */ CdkFixedSizeVirtualScroll),
/* harmony export */   CdkScrollable: () => (/* binding */ CdkScrollable),
/* harmony export */   CdkScrollableModule: () => (/* binding */ CdkScrollableModule),
/* harmony export */   CdkVirtualForOf: () => (/* binding */ CdkVirtualForOf),
/* harmony export */   CdkVirtualScrollViewport: () => (/* binding */ CdkVirtualScrollViewport),
/* harmony export */   CdkVirtualScrollable: () => (/* binding */ CdkVirtualScrollable),
/* harmony export */   CdkVirtualScrollableElement: () => (/* binding */ CdkVirtualScrollableElement),
/* harmony export */   CdkVirtualScrollableWindow: () => (/* binding */ CdkVirtualScrollableWindow),
/* harmony export */   DEFAULT_RESIZE_TIME: () => (/* binding */ DEFAULT_RESIZE_TIME),
/* harmony export */   DEFAULT_SCROLL_TIME: () => (/* binding */ DEFAULT_SCROLL_TIME),
/* harmony export */   FixedSizeVirtualScrollStrategy: () => (/* binding */ FixedSizeVirtualScrollStrategy),
/* harmony export */   ScrollDispatcher: () => (/* binding */ ScrollDispatcher),
/* harmony export */   ScrollingModule: () => (/* binding */ ScrollingModule),
/* harmony export */   VIRTUAL_SCROLLABLE: () => (/* binding */ VIRTUAL_SCROLLABLE),
/* harmony export */   VIRTUAL_SCROLL_STRATEGY: () => (/* binding */ VIRTUAL_SCROLL_STRATEGY),
/* harmony export */   ViewportRuler: () => (/* binding */ ViewportRuler),
/* harmony export */   _fixedSizeVirtualScrollStrategyFactory: () => (/* binding */ _fixedSizeVirtualScrollStrategyFactory),
/* harmony export */   "ɵɵDir": () => (/* reexport safe */ _bidi_mjs__WEBPACK_IMPORTED_MODULE_3__.Dir)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element-x4z00URv.mjs */ 94724);
/* harmony import */ var _platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./platform-DNDzkVcI.mjs */ 6427);
/* harmony import */ var _directionality_CChdj3az_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directionality-CChdj3az.mjs */ 32373);
/* harmony import */ var _scrolling_BkvA05C8_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scrolling-BkvA05C8.mjs */ 59566);
/* harmony import */ var _bidi_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bidi.mjs */ 63680);
/* harmony import */ var _recycle_view_repeater_strategy_SfuyU210_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recycle-view-repeater-strategy-SfuyU210.mjs */ 76194);
/* harmony import */ var _data_source_D34wiQZj_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data-source-D34wiQZj.mjs */ 1019);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 85914);









const _c0 = ["contentWrapper"];
const _c1 = ["*"];





/** The injection token used to specify the virtual scrolling strategy. */
const VIRTUAL_SCROLL_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('VIRTUAL_SCROLL_STRATEGY');

/** Virtual scrolling strategy for lists with items of known fixed size. */
class FixedSizeVirtualScrollStrategy {
  _scrolledIndexChange = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  scrolledIndexChange = /*#__PURE__*/this._scrolledIndexChange.pipe(/*#__PURE__*/(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)());
  /** The attached viewport. */
  _viewport = null;
  /** The size of the items in the virtually scrolling list. */
  _itemSize;
  /** The minimum amount of buffer rendered beyond the viewport (in pixels). */
  _minBufferPx;
  /** The number of buffer items to render beyond the edge of the viewport (in pixels). */
  _maxBufferPx;
  /**
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  /**
   * Attaches this scroll strategy to a viewport.
   * @param viewport The viewport to attach this strategy to.
   */
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** Detaches this scroll strategy from the currently attached viewport. */
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  /**
   * Update the item size and buffer size.
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentScrolled() {
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentRendered() {
    /* no-op */
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onRenderedOffsetChanged() {
    /* no-op */
  }
  /**
   * Scroll to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling.
   */
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  /** Update the viewport's total content size. */
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  /** Update the viewport's rendered range. */
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    // Prevent NaN as result when dividing by zero.
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    // If user scrolls to the bottom of the list and data changes to a smaller list
    if (newRange.end > dataLength) {
      // We have to recalculate the first visible index based on new data length and viewport size.
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      // If first visible index changed we must update scroll offset to handle start/end buffers
      // Current range must also be adjusted to cover the new position (bottom of new list).
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
}
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 */
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
/** A virtual scroll strategy that supports fixed-size items. */
let CdkFixedSizeVirtualScroll = /*#__PURE__*/(() => {
  class CdkFixedSizeVirtualScroll {
    /** The size of the items in the list (in pixels). */
    get itemSize() {
      return this._itemSize;
    }
    set itemSize(value) {
      this._itemSize = (0,_element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_5__.c)(value);
    }
    _itemSize = 20;
    /**
     * The minimum amount of buffer rendered beyond the viewport (in pixels).
     * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
     */
    get minBufferPx() {
      return this._minBufferPx;
    }
    set minBufferPx(value) {
      this._minBufferPx = (0,_element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_5__.c)(value);
    }
    _minBufferPx = 100;
    /**
     * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
     */
    get maxBufferPx() {
      return this._maxBufferPx;
    }
    set maxBufferPx(value) {
      this._maxBufferPx = (0,_element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_5__.c)(value);
    }
    _maxBufferPx = 200;
    /** The scroll strategy used by this directive. */
    _scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
    ngOnChanges() {
      this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
    }
    static ɵfac = function CdkFixedSizeVirtualScroll_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkFixedSizeVirtualScroll)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkFixedSizeVirtualScroll,
      selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
      inputs: {
        itemSize: "itemSize",
        minBufferPx: "minBufferPx",
        maxBufferPx: "maxBufferPx"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CdkFixedSizeVirtualScroll)]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
  return CdkFixedSizeVirtualScroll;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Time in ms to throttle the scrolling events by default. */
const DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
let ScrollDispatcher = /*#__PURE__*/(() => {
  class ScrollDispatcher {
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_6__.P);
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
    _cleanupGlobalListener;
    constructor() {}
    /** Subject for notifying that a registered scrollable reference element has been scrolled. */
    _scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
    _scrolledCount = 0;
    /**
     * Map of all the scrollable references that are registered with the service and their
     * scroll event subscriptions.
     */
    scrollContainers = new Map();
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param scrollable Scrollable instance to be registered.
     */
    register(scrollable) {
      if (!this.scrollContainers.has(scrollable)) {
        this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
      }
    }
    /**
     * De-registers a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */
    deregister(scrollable) {
      const scrollableReference = this.scrollContainers.get(scrollable);
      if (scrollableReference) {
        scrollableReference.unsubscribe();
        this.scrollContainers.delete(scrollable);
      }
    }
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     */
    scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
      if (!this._platform.isBrowser) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)();
      }
      return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
        if (!this._cleanupGlobalListener) {
          this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen('document', 'scroll', () => this._scrolled.next()));
        }
        // In the case of a 0ms delay, use an observable without auditTime
        // since it does add a perceptible delay in processing overhead.
        const subscription = auditTimeInMs > 0 ? this._scrolled.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.auditTime)(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
        this._scrolledCount++;
        return () => {
          subscription.unsubscribe();
          this._scrolledCount--;
          if (!this._scrolledCount) {
            this._cleanupGlobalListener?.();
            this._cleanupGlobalListener = undefined;
          }
        };
      });
    }
    ngOnDestroy() {
      this._cleanupGlobalListener?.();
      this._cleanupGlobalListener = undefined;
      this.scrollContainers.forEach((_, container) => this.deregister(container));
      this._scrolled.complete();
    }
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param elementOrElementRef Element whose ancestors to listen for.
     * @param auditTimeInMs Time to throttle the scroll events.
     */
    ancestorScrolled(elementOrElementRef, auditTimeInMs) {
      const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
      return this.scrolled(auditTimeInMs).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(target => !target || ancestors.indexOf(target) > -1));
    }
    /** Returns all registered Scrollables that contain the provided element. */
    getAncestorScrollContainers(elementOrElementRef) {
      const scrollingContainers = [];
      this.scrollContainers.forEach((_subscription, scrollable) => {
        if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
          scrollingContainers.push(scrollable);
        }
      });
      return scrollingContainers;
    }
    /** Returns true if the element is contained within the provided Scrollable. */
    _scrollableContainsElement(scrollable, elementOrElementRef) {
      let element = (0,_element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_5__.a)(elementOrElementRef);
      let scrollableElement = scrollable.getElementRef().nativeElement;
      // Traverse through the element parents until we reach null, checking if any of the elements
      // are the scrollable's element.
      do {
        if (element == scrollableElement) {
          return true;
        }
      } while (element = element.parentElement);
      return false;
    }
    static ɵfac = function ScrollDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ScrollDispatcher)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ScrollDispatcher,
      factory: ScrollDispatcher.ɵfac,
      providedIn: 'root'
    });
  }
  return ScrollDispatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
let CdkScrollable = /*#__PURE__*/(() => {
  class CdkScrollable {
    elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    scrollDispatcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ScrollDispatcher);
    ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_directionality_CChdj3az_mjs__WEBPACK_IMPORTED_MODULE_7__.D, {
      optional: true
    });
    _scrollElement = this.elementRef.nativeElement;
    _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2);
    _cleanupScroll;
    _elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    constructor() {}
    ngOnInit() {
      this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, 'scroll', event => this._elementScrolled.next(event)));
      this.scrollDispatcher.register(this);
    }
    ngOnDestroy() {
      this._cleanupScroll?.();
      this._elementScrolled.complete();
      this.scrollDispatcher.deregister(this);
      this._destroyed.next();
      this._destroyed.complete();
    }
    /** Returns observable that emits when a scroll event is fired on the host element. */
    elementScrolled() {
      return this._elementScrolled;
    }
    /** Gets the ElementRef for the viewport. */
    getElementRef() {
      return this.elementRef;
    }
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param options specified the offsets to scroll to.
     */
    scrollTo(options) {
      const el = this.elementRef.nativeElement;
      const isRtl = this.dir && this.dir.value == 'rtl';
      // Rewrite start & end offsets as right or left offsets.
      if (options.left == null) {
        options.left = isRtl ? options.end : options.start;
      }
      if (options.right == null) {
        options.right = isRtl ? options.start : options.end;
      }
      // Rewrite the bottom offset as a top offset.
      if (options.bottom != null) {
        options.top = el.scrollHeight - el.clientHeight - options.bottom;
      }
      // Rewrite the right offset as a left offset.
      if (isRtl && (0,_scrolling_BkvA05C8_mjs__WEBPACK_IMPORTED_MODULE_8__.g)() != _scrolling_BkvA05C8_mjs__WEBPACK_IMPORTED_MODULE_8__.R.NORMAL) {
        if (options.left != null) {
          options.right = el.scrollWidth - el.clientWidth - options.left;
        }
        if ((0,_scrolling_BkvA05C8_mjs__WEBPACK_IMPORTED_MODULE_8__.g)() == _scrolling_BkvA05C8_mjs__WEBPACK_IMPORTED_MODULE_8__.R.INVERTED) {
          options.left = options.right;
        } else if ((0,_scrolling_BkvA05C8_mjs__WEBPACK_IMPORTED_MODULE_8__.g)() == _scrolling_BkvA05C8_mjs__WEBPACK_IMPORTED_MODULE_8__.R.NEGATED) {
          options.left = options.right ? -options.right : options.right;
        }
      } else {
        if (options.right != null) {
          options.left = el.scrollWidth - el.clientWidth - options.right;
        }
      }
      this._applyScrollToOptions(options);
    }
    _applyScrollToOptions(options) {
      const el = this.elementRef.nativeElement;
      if ((0,_scrolling_BkvA05C8_mjs__WEBPACK_IMPORTED_MODULE_8__.s)()) {
        el.scrollTo(options);
      } else {
        if (options.top != null) {
          el.scrollTop = options.top;
        }
        if (options.left != null) {
          el.scrollLeft = options.left;
        }
      }
    }
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param from The edge to measure from.
     */
    measureScrollOffset(from) {
      const LEFT = 'left';
      const RIGHT = 'right';
      const el = this.elementRef.nativeElement;
      if (from == 'top') {
        return el.scrollTop;
      }
      if (from == 'bottom') {
        return el.scrollHeight - el.clientHeight - el.scrollTop;
      }
      // Rewrite start & end as left or right offsets.
      const isRtl = this.dir && this.dir.value == 'rtl';
      if (from == 'start') {
        from = isRtl ? RIGHT : LEFT;
      } else if (from == 'end') {
        from = isRtl ? LEFT : RIGHT;
      }
      if (isRtl && (0,_scrolling_BkvA05C8_mjs__WEBPACK_IMPORTED_MODULE_8__.g)() == _scrolling_BkvA05C8_mjs__WEBPACK_IMPORTED_MODULE_8__.R.INVERTED) {
        // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
        // 0 when scrolled all the way right.
        if (from == LEFT) {
          return el.scrollWidth - el.clientWidth - el.scrollLeft;
        } else {
          return el.scrollLeft;
        }
      } else if (isRtl && (0,_scrolling_BkvA05C8_mjs__WEBPACK_IMPORTED_MODULE_8__.g)() == _scrolling_BkvA05C8_mjs__WEBPACK_IMPORTED_MODULE_8__.R.NEGATED) {
        // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
        // 0 when scrolled all the way right.
        if (from == LEFT) {
          return el.scrollLeft + el.scrollWidth - el.clientWidth;
        } else {
          return -el.scrollLeft;
        }
      } else {
        // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
        // (scrollWidth - clientWidth) when scrolled all the way right.
        if (from == LEFT) {
          return el.scrollLeft;
        } else {
          return el.scrollWidth - el.clientWidth - el.scrollLeft;
        }
      }
    }
    static ɵfac = function CdkScrollable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkScrollable)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkScrollable,
      selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
    });
  }
  return CdkScrollable;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Time in ms to throttle the resize events by default. */
const DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * @docs-private
 */
let ViewportRuler = /*#__PURE__*/(() => {
  class ViewportRuler {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_6__.P);
    _listeners;
    /** Cached viewport dimensions. */
    _viewportSize;
    /** Stream of viewport change events. */
    _change = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Used to reference correct document/window */
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, {
      optional: true
    });
    constructor() {
      const ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
      const renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
      ngZone.runOutsideAngular(() => {
        if (this._platform.isBrowser) {
          const changeListener = event => this._change.next(event);
          this._listeners = [renderer.listen('window', 'resize', changeListener), renderer.listen('window', 'orientationchange', changeListener)];
        }
        // Clear the cached position so that the viewport is re-measured next time it is required.
        // We don't need to keep track of the subscription, because it is completed on destroy.
        this.change().subscribe(() => this._viewportSize = null);
      });
    }
    ngOnDestroy() {
      this._listeners?.forEach(cleanup => cleanup());
      this._change.complete();
    }
    /** Returns the viewport's width and height. */
    getViewportSize() {
      if (!this._viewportSize) {
        this._updateViewportSize();
      }
      const output = {
        width: this._viewportSize.width,
        height: this._viewportSize.height
      };
      // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
      if (!this._platform.isBrowser) {
        this._viewportSize = null;
      }
      return output;
    }
    /** Gets a DOMRect for the viewport's bounds. */
    getViewportRect() {
      // Use the document element's bounding rect rather than the window scroll properties
      // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
      // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
      // conceptual viewports. Under most circumstances these viewports are equivalent, but they
      // can disagree when the page is pinch-zoomed (on devices that support touch).
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
      // We use the documentElement instead of the body because, by default (without a css reset)
      // browsers typically give the document body an 8px margin, which is not included in
      // getBoundingClientRect().
      const scrollPosition = this.getViewportScrollPosition();
      const {
        width,
        height
      } = this.getViewportSize();
      return {
        top: scrollPosition.top,
        left: scrollPosition.left,
        bottom: scrollPosition.top + height,
        right: scrollPosition.left + width,
        height,
        width
      };
    }
    /** Gets the (top, left) scroll position of the viewport. */
    getViewportScrollPosition() {
      // While we can get a reference to the fake document
      // during SSR, it doesn't have getBoundingClientRect.
      if (!this._platform.isBrowser) {
        return {
          top: 0,
          left: 0
        };
      }
      // The top-left-corner of the viewport is determined by the scroll position of the document
      // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
      // whether `document.body` or `document.documentElement` is the scrolled element, so reading
      // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
      // `document.documentElement` works consistently, where the `top` and `left` values will
      // equal negative the scroll position.
      const document = this._document;
      const window = this._getWindow();
      const documentElement = document.documentElement;
      const documentRect = documentElement.getBoundingClientRect();
      const top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
      const left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
      return {
        top,
        left
      };
    }
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * This stream emits outside of the Angular zone.
     * @param throttleTime Time in milliseconds to throttle the stream.
     */
    change(throttleTime = DEFAULT_RESIZE_TIME) {
      return throttleTime > 0 ? this._change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.auditTime)(throttleTime)) : this._change;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
      return this._document.defaultView || window;
    }
    /** Updates the cached viewport size. */
    _updateViewportSize() {
      const window = this._getWindow();
      this._viewportSize = this._platform.isBrowser ? {
        width: window.innerWidth,
        height: window.innerHeight
      } : {
        width: 0,
        height: 0
      };
    }
    static ɵfac = function ViewportRuler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ViewportRuler)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ViewportRuler,
      factory: ViewportRuler.ɵfac,
      providedIn: 'root'
    });
  }
  return ViewportRuler;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const VIRTUAL_SCROLLABLE = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('VIRTUAL_SCROLLABLE');
/**
 * Extending the `CdkScrollable` to be used as scrolling container for virtual scrolling.
 */
let CdkVirtualScrollable = /*#__PURE__*/(() => {
  class CdkVirtualScrollable extends CdkScrollable {
    constructor() {
      super();
    }
    /**
     * Measure the viewport size for the provided orientation.
     *
     * @param orientation The orientation to measure the size from.
     */
    measureViewportSize(orientation) {
      const viewportEl = this.elementRef.nativeElement;
      return orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
    }
    static ɵfac = function CdkVirtualScrollable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkVirtualScrollable)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkVirtualScrollable,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return CdkVirtualScrollable;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Checks if the given ranges are equal. */
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
/**
 * Scheduler to be used for scroll events. Needs to fall back to
 * something that doesn't rely on requestAnimationFrame on environments
 * that don't support it (e.g. server-side rendering).
 */
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_1__.animationFrameScheduler : rxjs__WEBPACK_IMPORTED_MODULE_1__.asapScheduler;
/** A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`. */
let CdkVirtualScrollViewport = /*#__PURE__*/(() => {
  class CdkVirtualScrollViewport extends CdkVirtualScrollable {
    elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    _scrollStrategy = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(VIRTUAL_SCROLL_STRATEGY, {
      optional: true
    });
    scrollable = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(VIRTUAL_SCROLLABLE, {
      optional: true
    });
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_6__.P);
    /** Emits when the viewport is detached from a CdkVirtualForOf. */
    _detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the rendered range changes. */
    _renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** The direction the viewport scrolls. */
    get orientation() {
      return this._orientation;
    }
    set orientation(orientation) {
      if (this._orientation !== orientation) {
        this._orientation = orientation;
        this._calculateSpacerSize();
      }
    }
    _orientation = 'vertical';
    /**
     * Whether rendered items should persist in the DOM after scrolling out of view. By default, items
     * will be removed.
     */
    appendOnly = false;
    // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
    // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
    // depending on how the strategy calculates the scrolled index, it may come at a cost to
    // performance.
    /** Emits when the index of the first element visible in the viewport changes. */
    scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => this._scrollStrategy.scrolledIndexChange.subscribe(index => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
    /** The element that wraps the rendered content. */
    _contentWrapper;
    /** A stream that emits whenever the rendered range changes. */
    renderedRangeStream = this._renderedRangeSubject;
    /**
     * The total size of all content (in pixels), including content that is not currently rendered.
     */
    _totalContentSize = 0;
    /** A string representing the `style.width` property value to be used for the spacer element. */
    _totalContentWidth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('');
    /** A string representing the `style.height` property value to be used for the spacer element. */
    _totalContentHeight = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('');
    /**
     * The CSS transform applied to the rendered subset of items so that they appear within the bounds
     * of the visible viewport.
     */
    _renderedContentTransform;
    /** The currently rendered range of indices. */
    _renderedRange = {
      start: 0,
      end: 0
    };
    /** The length of the data bound to this viewport (in number of items). */
    _dataLength = 0;
    /** The size of the viewport (in pixels). */
    _viewportSize = 0;
    /** the currently attached CdkVirtualScrollRepeater. */
    _forOf;
    /** The last rendered content offset that was set. */
    _renderedContentOffset = 0;
    /**
     * Whether the last rendered content offset was to the end of the content (and therefore needs to
     * be rewritten as an offset to the start of the content).
     */
    _renderedContentOffsetNeedsRewrite = false;
    /** Whether there is a pending change detection cycle. */
    _isChangeDetectionPending = false;
    /** A list of functions to run after the next change detection cycle. */
    _runAfterChangeDetection = [];
    /** Subscription to changes in the viewport size. */
    _viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    _isDestroyed = false;
    constructor() {
      super();
      const viewportRuler = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ViewportRuler);
      if (!this._scrollStrategy && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
      }
      this._viewportChanges = viewportRuler.change().subscribe(() => {
        this.checkViewportSize();
      });
      if (!this.scrollable) {
        // No scrollable is provided, so the virtual-scroll-viewport needs to become a scrollable
        this.elementRef.nativeElement.classList.add('cdk-virtual-scrollable');
        this.scrollable = this;
      }
    }
    ngOnInit() {
      // Scrolling depends on the element dimensions which we can't get during SSR.
      if (!this._platform.isBrowser) {
        return;
      }
      if (this.scrollable === this) {
        super.ngOnInit();
      }
      // It's still too early to measure the viewport at this point. Deferring with a promise allows
      // the Viewport to be rendered with the correct size before we measure. We run this outside the
      // zone to avoid causing more change detection cycles. We handle the change detection loop
      // ourselves instead.
      this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
        this._measureViewportSize();
        this._scrollStrategy.attach(this);
        this.scrollable.elementScrolled().pipe(
        // Start off with a fake scroll event so we properly detect our initial position.
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(null),
        // Collect multiple events into one until the next animation frame. This way if
        // there are multiple scroll events in the same frame we only need to recheck
        // our layout once.
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.auditTime)(0, SCROLL_SCHEDULER),
        // Usually `elementScrolled` is completed when the scrollable is destroyed, but
        // that may not be the case if a `CdkVirtualScrollableElement` is used so we have
        // to unsubscribe here just in case.
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this._destroyed)).subscribe(() => this._scrollStrategy.onContentScrolled());
        this._markChangeDetectionNeeded();
      }));
    }
    ngOnDestroy() {
      this.detach();
      this._scrollStrategy.detach();
      // Complete all subjects
      this._renderedRangeSubject.complete();
      this._detachedSubject.complete();
      this._viewportChanges.unsubscribe();
      this._isDestroyed = true;
      super.ngOnDestroy();
    }
    /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
    attach(forOf) {
      if (this._forOf && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('CdkVirtualScrollViewport is already attached.');
      }
      // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
      // changes. Run outside the zone to avoid triggering change detection, since we're managing the
      // change detection loop ourselves.
      this.ngZone.runOutsideAngular(() => {
        this._forOf = forOf;
        this._forOf.dataStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this._detachedSubject)).subscribe(data => {
          const newLength = data.length;
          if (newLength !== this._dataLength) {
            this._dataLength = newLength;
            this._scrollStrategy.onDataLengthChanged();
          }
          this._doChangeDetection();
        });
      });
    }
    /** Detaches the current `CdkVirtualForOf`. */
    detach() {
      this._forOf = null;
      this._detachedSubject.next();
    }
    /** Gets the length of the data bound to this viewport (in number of items). */
    getDataLength() {
      return this._dataLength;
    }
    /** Gets the size of the viewport (in pixels). */
    getViewportSize() {
      return this._viewportSize;
    }
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /** Get the current rendered range of items. */
    getRenderedRange() {
      return this._renderedRange;
    }
    measureBoundingClientRectWithScrollOffset(from) {
      return this.getElementRef().nativeElement.getBoundingClientRect()[from];
    }
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     */
    setTotalContentSize(size) {
      if (this._totalContentSize !== size) {
        this._totalContentSize = size;
        this._calculateSpacerSize();
        this._markChangeDetectionNeeded();
      }
    }
    /** Sets the currently rendered range of indices. */
    setRenderedRange(range) {
      if (!rangesEqual(this._renderedRange, range)) {
        if (this.appendOnly) {
          range = {
            start: 0,
            end: Math.max(this._renderedRange.end, range.end)
          };
        }
        this._renderedRangeSubject.next(this._renderedRange = range);
        this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
      }
    }
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     */
    getOffsetToRenderedContentStart() {
      return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
    }
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     */
    setRenderedContentOffset(offset, to = 'to-start') {
      // In appendOnly, we always start from the top
      offset = this.appendOnly && to === 'to-start' ? 0 : offset;
      // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
      // in the negative direction.
      const isRtl = this.dir && this.dir.value == 'rtl';
      const isHorizontal = this.orientation == 'horizontal';
      const axis = isHorizontal ? 'X' : 'Y';
      const axisDirection = isHorizontal && isRtl ? -1 : 1;
      let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
      this._renderedContentOffset = offset;
      if (to === 'to-end') {
        transform += ` translate${axis}(-100%)`;
        // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
        // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
        // expand upward).
        this._renderedContentOffsetNeedsRewrite = true;
      }
      if (this._renderedContentTransform != transform) {
        // We know this value is safe because we parse `offset` with `Number()` before passing it
        // into the string.
        this._renderedContentTransform = transform;
        this._markChangeDetectionNeeded(() => {
          if (this._renderedContentOffsetNeedsRewrite) {
            this._renderedContentOffset -= this.measureRenderedContentSize();
            this._renderedContentOffsetNeedsRewrite = false;
            this.setRenderedContentOffset(this._renderedContentOffset);
          } else {
            this._scrollStrategy.onRenderedOffsetChanged();
          }
        });
      }
    }
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param offset The offset to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    scrollToOffset(offset, behavior = 'auto') {
      const options = {
        behavior
      };
      if (this.orientation === 'horizontal') {
        options.start = offset;
      } else {
        options.top = offset;
      }
      this.scrollable.scrollTo(options);
    }
    /**
     * Scrolls to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    scrollToIndex(index, behavior = 'auto') {
      this._scrollStrategy.scrollToIndex(index, behavior);
    }
    /**
     * Gets the current scroll offset from the start of the scrollable (in pixels).
     * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     */
    measureScrollOffset(from) {
      // This is to break the call cycle
      let measureScrollOffset;
      if (this.scrollable == this) {
        measureScrollOffset = _from => super.measureScrollOffset(_from);
      } else {
        measureScrollOffset = _from => this.scrollable.measureScrollOffset(_from);
      }
      return Math.max(0, measureScrollOffset(from ?? (this.orientation === 'horizontal' ? 'start' : 'top')) - this.measureViewportOffset());
    }
    /**
     * Measures the offset of the viewport from the scrolling container
     * @param from The edge to measure from.
     */
    measureViewportOffset(from) {
      let fromRect;
      const LEFT = 'left';
      const RIGHT = 'right';
      const isRtl = this.dir?.value == 'rtl';
      if (from == 'start') {
        fromRect = isRtl ? RIGHT : LEFT;
      } else if (from == 'end') {
        fromRect = isRtl ? LEFT : RIGHT;
      } else if (from) {
        fromRect = from;
      } else {
        fromRect = this.orientation === 'horizontal' ? 'left' : 'top';
      }
      const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
      const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
      return viewportClientRect - scrollerClientRect;
    }
    /** Measure the combined size of all of the rendered items. */
    measureRenderedContentSize() {
      const contentEl = this._contentWrapper.nativeElement;
      return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
    }
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     */
    measureRangeSize(range) {
      if (!this._forOf) {
        return 0;
      }
      return this._forOf.measureRangeSize(range, this.orientation);
    }
    /** Update the viewport dimensions and re-render. */
    checkViewportSize() {
      // TODO: Cleanup later when add logic for handling content resize
      this._measureViewportSize();
      this._scrollStrategy.onDataLengthChanged();
    }
    /** Measure the viewport size. */
    _measureViewportSize() {
      this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
    }
    /** Queue up change detection to run. */
    _markChangeDetectionNeeded(runAfter) {
      if (runAfter) {
        this._runAfterChangeDetection.push(runAfter);
      }
      // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
      // properties sequentially we only have to run `_doChangeDetection` once at the end.
      if (!this._isChangeDetectionPending) {
        this._isChangeDetectionPending = true;
        this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
          this._doChangeDetection();
        }));
      }
    }
    /** Run change detection. */
    _doChangeDetection() {
      if (this._isDestroyed) {
        return;
      }
      this.ngZone.run(() => {
        // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
        // from the root, since the repeated items are content projected in. Calling `detectChanges`
        // instead does not properly check the projected content.
        this._changeDetectorRef.markForCheck();
        // Apply the content transform. The transform can't be set via an Angular binding because
        // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
        // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
        // the `Number` function first to coerce it to a numeric value.
        this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
          this._isChangeDetectionPending = false;
          const runAfterChangeDetection = this._runAfterChangeDetection;
          this._runAfterChangeDetection = [];
          for (const fn of runAfterChangeDetection) {
            fn();
          }
        }, {
          injector: this._injector
        });
      });
    }
    /** Calculates the `style.width` and `style.height` for the spacer element. */
    _calculateSpacerSize() {
      this._totalContentHeight.set(this.orientation === 'horizontal' ? '' : `${this._totalContentSize}px`);
      this._totalContentWidth.set(this.orientation === 'horizontal' ? `${this._totalContentSize}px` : '');
    }
    static ɵfac = function CdkVirtualScrollViewport_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkVirtualScrollViewport)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CdkVirtualScrollViewport,
      selectors: [["cdk-virtual-scroll-viewport"]],
      viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
        }
      },
      hostAttrs: [1, "cdk-virtual-scroll-viewport"],
      hostVars: 4,
      hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
        }
      },
      inputs: {
        orientation: "orientation",
        appendOnly: [2, "appendOnly", "appendOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      outputs: {
        scrolledIndexChange: "scrolledIndexChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CdkScrollable,
        useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 4,
      consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
      template: function CdkVirtualScrollViewport_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx._totalContentWidth())("height", ctx._totalContentHeight());
        }
      },
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return CdkVirtualScrollViewport;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Helper to extract the offset of a DOM Node in a certain direction. */
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === 'horizontal') {
    return direction === 'start' ? rect.left : rect.right;
  }
  return direction === 'start' ? rect.top : rect.bottom;
}
/**
 * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
 * container.
 */
let CdkVirtualForOf = /*#__PURE__*/(() => {
  class CdkVirtualForOf {
    _viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    _template = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    _differs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers);
    _viewRepeater = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_recycle_view_repeater_strategy_SfuyU210_mjs__WEBPACK_IMPORTED_MODULE_9__.b);
    _viewport = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CdkVirtualScrollViewport, {
      skipSelf: true
    });
    /** Emits when the rendered view of the data changes. */
    viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subject that emits when a new DataSource instance is given. */
    _dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** The DataSource to display. */
    get cdkVirtualForOf() {
      return this._cdkVirtualForOf;
    }
    set cdkVirtualForOf(value) {
      this._cdkVirtualForOf = value;
      if ((0,_data_source_D34wiQZj_mjs__WEBPACK_IMPORTED_MODULE_10__.i)(value)) {
        this._dataSourceChanges.next(value);
      } else {
        // If value is an an NgIterable, convert it to an array.
        this._dataSourceChanges.next(new _recycle_view_repeater_strategy_SfuyU210_mjs__WEBPACK_IMPORTED_MODULE_9__.A((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(value) ? value : Array.from(value || [])));
      }
    }
    _cdkVirtualForOf;
    /**
     * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
     * the item and produces a value to be used as the item's identity when tracking changes.
     */
    get cdkVirtualForTrackBy() {
      return this._cdkVirtualForTrackBy;
    }
    set cdkVirtualForTrackBy(fn) {
      this._needsUpdate = true;
      this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : undefined;
    }
    _cdkVirtualForTrackBy;
    /** The template used to stamp out new elements. */
    set cdkVirtualForTemplate(value) {
      if (value) {
        this._needsUpdate = true;
        this._template = value;
      }
    }
    /**
     * The size of the cache used to store templates that are not being used for re-use later.
     * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
     */
    get cdkVirtualForTemplateCacheSize() {
      return this._viewRepeater.viewCacheSize;
    }
    set cdkVirtualForTemplateCacheSize(size) {
      this._viewRepeater.viewCacheSize = (0,_element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_5__.c)(size);
    }
    /** Emits whenever the data in the current DataSource changes. */
    dataStream = this._dataSourceChanges.pipe(
    // Start off with null `DataSource`.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(null),
    // Bundle up the previous and current data sources so we can work with both.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.pairwise)(),
    // Use `_changeDataSource` to disconnect from the previous data source and connect to the
    // new one, passing back a stream of data changes which we run through `switchMap` to give
    // us a data stream that emits the latest data from whatever the current `DataSource` is.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(([prev, cur]) => this._changeDataSource(prev, cur)),
    // Replay the last emitted data when someone subscribes.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.shareReplay)(1));
    /** The differ used to calculate changes to the data. */
    _differ = null;
    /** The most recent data emitted from the DataSource. */
    _data;
    /** The currently rendered items. */
    _renderedItems;
    /** The currently rendered range of indices. */
    _renderedRange;
    /** Whether the rendered data should be updated during the next ngDoCheck cycle. */
    _needsUpdate = false;
    _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    constructor() {
      const ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
      this.dataStream.subscribe(data => {
        this._data = data;
        this._onRenderedDataChange();
      });
      this._viewport.renderedRangeStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this._destroyed)).subscribe(range => {
        this._renderedRange = range;
        if (this.viewChange.observers.length) {
          ngZone.run(() => this.viewChange.next(this._renderedRange));
        }
        this._onRenderedDataChange();
      });
      this._viewport.attach(this);
    }
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     */
    measureRangeSize(range, orientation) {
      if (range.start >= range.end) {
        return 0;
      }
      if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error(`Error: attempted to measure an item that isn't rendered.`);
      }
      // The index into the list of rendered views for the first item in the range.
      const renderedStartIndex = range.start - this._renderedRange.start;
      // The length of the range we're measuring.
      const rangeLen = range.end - range.start;
      // Loop over all the views, find the first and land node and compute the size by subtracting
      // the top of the first node from the bottom of the last one.
      let firstNode;
      let lastNode;
      // Find the first node by starting from the beginning and going forwards.
      for (let i = 0; i < rangeLen; i++) {
        const view = this._viewContainerRef.get(i + renderedStartIndex);
        if (view && view.rootNodes.length) {
          firstNode = lastNode = view.rootNodes[0];
          break;
        }
      }
      // Find the last node by starting from the end and going backwards.
      for (let i = rangeLen - 1; i > -1; i--) {
        const view = this._viewContainerRef.get(i + renderedStartIndex);
        if (view && view.rootNodes.length) {
          lastNode = view.rootNodes[view.rootNodes.length - 1];
          break;
        }
      }
      return firstNode && lastNode ? getOffset(orientation, 'end', lastNode) - getOffset(orientation, 'start', firstNode) : 0;
    }
    ngDoCheck() {
      if (this._differ && this._needsUpdate) {
        // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
        // this list being rendered (can use simpler algorithm) vs needs update due to data actually
        // changing (need to do this diff).
        const changes = this._differ.diff(this._renderedItems);
        if (!changes) {
          this._updateContext();
        } else {
          this._applyChanges(changes);
        }
        this._needsUpdate = false;
      }
    }
    ngOnDestroy() {
      this._viewport.detach();
      this._dataSourceChanges.next(undefined);
      this._dataSourceChanges.complete();
      this.viewChange.complete();
      this._destroyed.next();
      this._destroyed.complete();
      this._viewRepeater.detach();
    }
    /** React to scroll state changes in the viewport. */
    _onRenderedDataChange() {
      if (!this._renderedRange) {
        return;
      }
      this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
      if (!this._differ) {
        // Use a wrapper function for the `trackBy` so any new values are
        // picked up automatically without having to recreate the differ.
        this._differ = this._differs.find(this._renderedItems).create((index, item) => {
          return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
        });
      }
      this._needsUpdate = true;
    }
    /** Swap out one `DataSource` for another. */
    _changeDataSource(oldDs, newDs) {
      if (oldDs) {
        oldDs.disconnect(this);
      }
      this._needsUpdate = true;
      return newDs ? newDs.connect(this) : (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)();
    }
    /** Update the `CdkVirtualForOfContext` for all views. */
    _updateContext() {
      const count = this._data.length;
      let i = this._viewContainerRef.length;
      while (i--) {
        const view = this._viewContainerRef.get(i);
        view.context.index = this._renderedRange.start + i;
        view.context.count = count;
        this._updateComputedContextProperties(view.context);
        view.detectChanges();
      }
    }
    /** Apply changes to the DOM. */
    _applyChanges(changes) {
      this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), record => record.item);
      // Update $implicit for any items that had an identity change.
      changes.forEachIdentityChange(record => {
        const view = this._viewContainerRef.get(record.currentIndex);
        view.context.$implicit = record.item;
      });
      // Update the context variables on all items.
      const count = this._data.length;
      let i = this._viewContainerRef.length;
      while (i--) {
        const view = this._viewContainerRef.get(i);
        view.context.index = this._renderedRange.start + i;
        view.context.count = count;
        this._updateComputedContextProperties(view.context);
      }
    }
    /** Update the computed properties on the `CdkVirtualForOfContext`. */
    _updateComputedContextProperties(context) {
      context.first = context.index === 0;
      context.last = context.index === context.count - 1;
      context.even = context.index % 2 === 0;
      context.odd = !context.even;
    }
    _getEmbeddedViewArgs(record, index) {
      // Note that it's important that we insert the item directly at the proper index,
      // rather than inserting it and the moving it in place, because if there's a directive
      // on the same node that injects the `ViewContainerRef`, Angular will insert another
      // comment node which can throw off the move when it's being repeated for all items.
      return {
        templateRef: this._template,
        context: {
          $implicit: record.item,
          // It's guaranteed that the iterable is not "undefined" or "null" because we only
          // generate views for elements if the "cdkVirtualForOf" iterable has elements.
          cdkVirtualForOf: this._cdkVirtualForOf,
          index: -1,
          count: -1,
          first: false,
          last: false,
          odd: false,
          even: false
        },
        index
      };
    }
    static ngTemplateContextGuard(directive, context) {
      return true;
    }
    static ɵfac = function CdkVirtualForOf_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkVirtualForOf)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkVirtualForOf,
      selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
      inputs: {
        cdkVirtualForOf: "cdkVirtualForOf",
        cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
        cdkVirtualForTemplate: "cdkVirtualForTemplate",
        cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _recycle_view_repeater_strategy_SfuyU210_mjs__WEBPACK_IMPORTED_MODULE_9__.b,
        useClass: _recycle_view_repeater_strategy_SfuyU210_mjs__WEBPACK_IMPORTED_MODULE_9__._
      }])]
    });
  }
  return CdkVirtualForOf;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Provides a virtual scrollable for the element it is attached to.
 */
let CdkVirtualScrollableElement = /*#__PURE__*/(() => {
  class CdkVirtualScrollableElement extends CdkVirtualScrollable {
    constructor() {
      super();
    }
    measureBoundingClientRectWithScrollOffset(from) {
      return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
    }
    static ɵfac = function CdkVirtualScrollableElement_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkVirtualScrollableElement)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkVirtualScrollableElement,
      selectors: [["", "cdkVirtualScrollingElement", ""]],
      hostAttrs: [1, "cdk-virtual-scrollable"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return CdkVirtualScrollableElement;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Provides as virtual scrollable for the global / window scrollbar.
 */
let CdkVirtualScrollableWindow = /*#__PURE__*/(() => {
  class CdkVirtualScrollableWindow extends CdkVirtualScrollable {
    constructor() {
      super();
      const document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
      this.elementRef = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef(document.documentElement);
      this._scrollElement = document;
    }
    measureBoundingClientRectWithScrollOffset(from) {
      return this.getElementRef().nativeElement.getBoundingClientRect()[from];
    }
    static ɵfac = function CdkVirtualScrollableWindow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkVirtualScrollableWindow)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkVirtualScrollableWindow,
      selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return CdkVirtualScrollableWindow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CdkScrollableModule = /*#__PURE__*/(() => {
  class CdkScrollableModule {
    static ɵfac = function CdkScrollableModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkScrollableModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CdkScrollableModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  }
  return CdkScrollableModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @docs-primary-export
 */
let ScrollingModule = /*#__PURE__*/(() => {
  class ScrollingModule {
    static ɵfac = function ScrollingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ScrollingModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ScrollingModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_bidi_mjs__WEBPACK_IMPORTED_MODULE_3__.BidiModule, CdkScrollableModule, _bidi_mjs__WEBPACK_IMPORTED_MODULE_3__.BidiModule, CdkScrollableModule]
    });
  }
  return ScrollingModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 81570:
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/overlay.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockScrollStrategy: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   CdkConnectedOverlay: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   CdkOverlayOrigin: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   CdkScrollable: () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable),
/* harmony export */   CloseScrollStrategy: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.p),
/* harmony export */   ConnectedOverlayPositionChange: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.l),
/* harmony export */   ConnectionPositionPair: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   FlexibleConnectedPositionStrategy: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   FullscreenOverlayContainer: () => (/* binding */ FullscreenOverlayContainer),
/* harmony export */   GlobalPositionStrategy: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   NoopScrollStrategy: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   Overlay: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   OverlayConfig: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   OverlayContainer: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   OverlayKeyboardDispatcher: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   OverlayModule: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.t),
/* harmony export */   OverlayOutsideClickDispatcher: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   OverlayPositionBuilder: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.e),
/* harmony export */   OverlayRef: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   RepositionScrollStrategy: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   STANDARD_DROPDOWN_ADJACENT_POSITIONS: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   STANDARD_DROPDOWN_BELOW_POSITIONS: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   ScrollDispatcher: () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__.ScrollDispatcher),
/* harmony export */   ScrollStrategyOptions: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.n),
/* harmony export */   ScrollingVisibility: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   ViewportRuler: () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__.ViewportRuler),
/* harmony export */   createBlockScrollStrategy: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   createCloseScrollStrategy: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   createFlexibleConnectedPositionStrategy: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   createGlobalPositionStrategy: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   createNoopScrollStrategy: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   createOverlayRef: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   createRepositionScrollStrategy: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.o),
/* harmony export */   validateHorizontalPosition: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   validateVerticalPosition: () => (/* reexport safe */ _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.v),
/* harmony export */   "ɵɵCdkFixedSizeVirtualScroll": () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__.CdkFixedSizeVirtualScroll),
/* harmony export */   "ɵɵCdkScrollableModule": () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__.CdkScrollableModule),
/* harmony export */   "ɵɵCdkVirtualForOf": () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__.CdkVirtualForOf),
/* harmony export */   "ɵɵCdkVirtualScrollViewport": () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__.CdkVirtualScrollViewport),
/* harmony export */   "ɵɵCdkVirtualScrollableElement": () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__.CdkVirtualScrollableElement),
/* harmony export */   "ɵɵCdkVirtualScrollableWindow": () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__.CdkVirtualScrollableWindow),
/* harmony export */   "ɵɵDir": () => (/* reexport safe */ _bidi_mjs__WEBPACK_IMPORTED_MODULE_3__.Dir)
/* harmony export */ });
/* harmony import */ var _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlay-module-Bd2UplUU.mjs */ 6883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrolling.mjs */ 79975);
/* harmony import */ var _bidi_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bidi.mjs */ 63680);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 85914);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 32778);

























/**
 * Alternative to OverlayContainer that supports correct displaying of overlay elements in
 * Fullscreen mode
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
 *
 * Should be provided in the root component.
 */
let FullscreenOverlayContainer = /*#__PURE__*/(() => {
  class FullscreenOverlayContainer extends _overlay_module_Bd2UplUU_mjs__WEBPACK_IMPORTED_MODULE_0__.O {
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2).createRenderer(null, null);
    _fullScreenEventName;
    _cleanupFullScreenListener;
    constructor() {
      super();
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this._cleanupFullScreenListener?.();
    }
    _createContainer() {
      const eventName = this._getEventName();
      super._createContainer();
      this._adjustParentForFullscreenChange();
      if (eventName) {
        this._cleanupFullScreenListener?.();
        this._cleanupFullScreenListener = this._renderer.listen('document', eventName, () => {
          this._adjustParentForFullscreenChange();
        });
      }
    }
    _adjustParentForFullscreenChange() {
      if (this._containerElement) {
        const fullscreenElement = this.getFullscreenElement();
        const parent = fullscreenElement || this._document.body;
        parent.appendChild(this._containerElement);
      }
    }
    _getEventName() {
      if (!this._fullScreenEventName) {
        const _document = this._document;
        if (_document.fullscreenEnabled) {
          this._fullScreenEventName = 'fullscreenchange';
        } else if (_document.webkitFullscreenEnabled) {
          this._fullScreenEventName = 'webkitfullscreenchange';
        } else if (_document.mozFullScreenEnabled) {
          this._fullScreenEventName = 'mozfullscreenchange';
        } else if (_document.msFullscreenEnabled) {
          this._fullScreenEventName = 'MSFullscreenChange';
        }
      }
      return this._fullScreenEventName;
    }
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     */
    getFullscreenElement() {
      const _document = this._document;
      return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
    }
    static ɵfac = function FullscreenOverlayContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FullscreenOverlayContainer)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FullscreenOverlayContainer,
      factory: FullscreenOverlayContainer.ɵfac,
      providedIn: 'root'
    });
  }
  return FullscreenOverlayContainer;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 82981:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/style-loader-B2sGQXxD.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _CdkPrivateStyleLoader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);



/** Apps in which we've loaded styles. */
const appsWithLoaders = /*#__PURE__*/new WeakMap();
/**
 * Service that loads structural styles dynamically
 * and ensures that they're only loaded once per app.
 */
let _CdkPrivateStyleLoader = /*#__PURE__*/(() => {
  class _CdkPrivateStyleLoader {
    _appRef;
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    _environmentInjector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.EnvironmentInjector);
    /**
     * Loads a set of styles.
     * @param loader Component which will be instantiated to load the styles.
     */
    load(loader) {
      // Resolve the app ref lazily to avoid circular dependency errors if this is called too early.
      const appRef = this._appRef = this._appRef || this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
      let data = appsWithLoaders.get(appRef);
      // If we haven't loaded for this app before, we have to initialize it.
      if (!data) {
        data = {
          loaders: new Set(),
          refs: []
        };
        appsWithLoaders.set(appRef, data);
        // When the app is destroyed, we need to clean up all the related loaders.
        appRef.onDestroy(() => {
          appsWithLoaders.get(appRef)?.refs.forEach(ref => ref.destroy());
          appsWithLoaders.delete(appRef);
        });
      }
      // If the loader hasn't been loaded before, we need to instatiate it.
      if (!data.loaders.has(loader)) {
        data.loaders.add(loader);
        data.refs.push((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.createComponent)(loader, {
          environmentInjector: this._environmentInjector
        }));
      }
    }
    static ɵfac = function _CdkPrivateStyleLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkPrivateStyleLoader)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: _CdkPrivateStyleLoader,
      factory: _CdkPrivateStyleLoader.ɵfac,
      providedIn: 'root'
    });
  }
  return _CdkPrivateStyleLoader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


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
//# sourceMappingURL=1570.js.map