(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[2102],{

/***/ 513:
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/fake-event-detection-DWOdFTFz.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ isFakeTouchstartFromScreenReader),
/* harmony export */   i: () => (/* binding */ isFakeMousedownFromScreenReader)
/* harmony export */ });
/** Gets whether an event could be a faked `mousedown` event dispatched by a screen reader. */
function isFakeMousedownFromScreenReader(event) {
  // Some screen readers will dispatch a fake `mousedown` event when pressing enter or space on
  // a clickable element. We can distinguish these events when `event.buttons` is zero, or
  // `event.detail` is zero depending on the browser:
  // - `event.buttons` works on Firefox, but fails on Chrome.
  // - `detail` works on Chrome, but fails on Firefox.
  return event.buttons === 0 || event.detail === 0;
}
/** Gets whether an event could be a faked `touchstart` event dispatched by a screen reader. */
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  // A fake `touchstart` can be distinguished from a real one by looking at the `identifier`
  // which is typically >= 0 on a real device versus -1 from a screen reader. Just to be safe,
  // we can also look at `radiusX` and `radiusY`. This behavior was observed against a Windows 10
  // device with a touch screen running NVDA v2020.4 and Firefox 85 or Chrome 88.
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
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

/***/ 9227:
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/private.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _CdkPrivateStyleLoader: () => (/* reexport safe */ _style_loader_B2sGQXxD_mjs__WEBPACK_IMPORTED_MODULE_0__._),
/* harmony export */   _VisuallyHiddenLoader: () => (/* binding */ _VisuallyHiddenLoader)
/* harmony export */ });
/* harmony import */ var _style_loader_B2sGQXxD_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style-loader-B2sGQXxD.mjs */ 82981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27940);




/**
 * Component used to load the .cdk-visually-hidden styles.
 * @docs-private
 */
let _VisuallyHiddenLoader = /*#__PURE__*/(() => {
  class _VisuallyHiddenLoader {
    static ɵfac = function _VisuallyHiddenLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisuallyHiddenLoader)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: _VisuallyHiddenLoader,
      selectors: [["ng-component"]],
      exportAs: ["cdkVisuallyHidden"],
      decls: 0,
      vars: 0,
      template: function _VisuallyHiddenLoader_Template(rf, ctx) {},
      styles: [".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return _VisuallyHiddenLoader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 17355:
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/list-key-manager-C7tp3RbG.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ ListKeyManager)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _typeahead_9ZW4Dtsf_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typeahead-9ZW4Dtsf.mjs */ 67097);
/* harmony import */ var _keycodes_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keycodes.mjs */ 74879);
/* harmony import */ var _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keycodes-CpHkExLC.mjs */ 5758);






/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */
class ListKeyManager {
  _items;
  _activeItemIndex = /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(-1);
  _activeItem = /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
  _wrap = false;
  _typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
  _itemChangesSubscription;
  _vertical = true;
  _horizontal;
  _allowedModifierKeys = [];
  _homeAndEnd = false;
  _pageUpAndDown = {
    enabled: false,
    delta: 10
  };
  _effectRef;
  _typeahead;
  /**
   * Predicate function that can be used to check whether an item should be skipped
   * by the key manager. By default, disabled items are skipped.
   */
  _skipPredicateFn = item => item.disabled;
  constructor(_items, injector) {
    this._items = _items;
    // We allow for the items to be an array because, in some cases, the consumer may
    // not have access to a QueryList of the items they want to manage (e.g. when the
    // items aren't being collected via `ViewChildren` or `ContentChildren`).
    if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList) {
      this._itemChangesSubscription = _items.changes.subscribe(newItems => this._itemsChanged(newItems.toArray()));
    } else if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isSignal)(_items)) {
      if (!injector && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw new Error('ListKeyManager constructed with a signal must receive an injector');
      }
      this._effectRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => this._itemsChanged(_items()), {
        injector
      });
    }
  }
  /**
   * Stream that emits any time the TAB key is pressed, so components can react
   * when focus is shifted off of the list.
   */
  tabOut = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  /** Stream that emits whenever the active item of the list manager changes. */
  change = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  /**
   * Sets the predicate function that determines which items should be skipped by the
   * list key manager.
   * @param predicate Function that determines whether the given item should be skipped.
   */
  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  /**
   * Configures wrapping mode, which determines whether the active item will wrap to
   * the other end of list when there are no more items in the given direction.
   * @param shouldWrap Whether the list should wrap when reaching the end.
   */
  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  /**
   * Configures whether the key manager should be able to move the selection vertically.
   * @param enabled Whether vertical selection should be enabled.
   */
  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  /**
   * Configures the key manager to move the selection horizontally.
   * Passing in `null` will disable horizontal movement.
   * @param direction Direction in which the selection can be moved.
   */
  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  /**
   * Modifier keys which are allowed to be held down and whose default actions will be prevented
   * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
   */
  withAllowedModifierKeys(keys) {
    this._allowedModifierKeys = keys;
    return this;
  }
  /**
   * Turns on typeahead mode which allows users to set the active item by typing.
   * @param debounceInterval Time to wait after the last keystroke before setting the active item.
   */
  withTypeAhead(debounceInterval = 200) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      const items = this._getItemsArray();
      if (items.length > 0 && items.some(item => typeof item.getLabel !== 'function')) {
        throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
      }
    }
    this._typeaheadSubscription.unsubscribe();
    const items = this._getItemsArray();
    this._typeahead = new _typeahead_9ZW4Dtsf_mjs__WEBPACK_IMPORTED_MODULE_2__.T(items, {
      debounceInterval: typeof debounceInterval === 'number' ? debounceInterval : undefined,
      skipPredicate: item => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(item => {
      this.setActiveItem(item);
    });
    return this;
  }
  /** Cancels the current typeahead sequence. */
  cancelTypeahead() {
    this._typeahead?.reset();
    return this;
  }
  /**
   * Configures the key manager to activate the first and last items
   * respectively when the Home or End key is pressed.
   * @param enabled Whether pressing the Home or End key activates the first/last item.
   */
  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }
  /**
   * Configures the key manager to activate every 10th, configured or first/last element in up/down direction
   * respectively when the Page-Up or Page-Down key is pressed.
   * @param enabled Whether pressing the Page-Up or Page-Down key activates the first/last item.
   * @param delta Whether pressing the Home or End key activates the first/last item.
   */
  withPageUpDown(enabled = true, delta = 10) {
    this._pageUpAndDown = {
      enabled,
      delta
    };
    return this;
  }
  setActiveItem(item) {
    const previousActiveItem = this._activeItem();
    this.updateActiveItem(item);
    if (this._activeItem() !== previousActiveItem) {
      this.change.next(this._activeItemIndex());
    }
  }
  /**
   * Sets the active item depending on the key event passed in.
   * @param event Keyboard event to be used for determining which element should be active.
   */
  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
    const isModifierAllowed = modifiers.every(modifier => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });
    switch (keyCode) {
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_3__.T:
        this.tabOut.next();
        return;
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_3__.D:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_3__.U:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_3__.R:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_3__.L:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_3__.H:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_3__.E:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_3__.a:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex() - this._pageUpAndDown.delta;
          this._setActiveItemByIndex(targetIndex > 0 ? targetIndex : 0, 1);
          break;
        } else {
          return;
        }
      case _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_3__.P:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex() + this._pageUpAndDown.delta;
          const itemsLength = this._getItemsArray().length;
          this._setActiveItemByIndex(targetIndex < itemsLength ? targetIndex : itemsLength - 1, -1);
          break;
        } else {
          return;
        }
      default:
        if (isModifierAllowed || (0,_keycodes_mjs__WEBPACK_IMPORTED_MODULE_4__.hasModifierKey)(event, 'shiftKey')) {
          this._typeahead?.handleKey(event);
        }
        // Note that we return here, in order to avoid preventing
        // the default action of non-navigational keys.
        return;
    }
    this._typeahead?.reset();
    event.preventDefault();
  }
  /** Index of the currently active item. */
  get activeItemIndex() {
    return this._activeItemIndex();
  }
  /** The active item. */
  get activeItem() {
    return this._activeItem();
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */
  isTyping() {
    return !!this._typeahead && this._typeahead.isTyping();
  }
  /** Sets the active item to the first enabled item in the list. */
  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  /** Sets the active item to the last enabled item in the list. */
  setLastItemActive() {
    this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
  }
  /** Sets the active item to the next enabled item in the list. */
  setNextItemActive() {
    this._activeItemIndex() < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  /** Sets the active item to a previous enabled item in the list. */
  setPreviousItemActive() {
    this._activeItemIndex() < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }
  updateActiveItem(item) {
    const itemArray = this._getItemsArray();
    const index = typeof item === 'number' ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index];
    // Explicitly check for `null` and `undefined` because other falsy values are valid.
    this._activeItem.set(activeItem == null ? null : activeItem);
    this._activeItemIndex.set(index);
    this._typeahead?.setCurrentSelectedItemIndex(index);
  }
  /** Cleans up the key manager. */
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._itemChangesSubscription?.unsubscribe();
    this._effectRef?.destroy();
    this._typeahead?.destroy();
    this.tabOut.complete();
    this.change.complete();
  }
  /**
   * This method sets the active item, given a list of items and the delta between the
   * currently active item and the new active item. It will calculate differently
   * depending on whether wrap mode is turned on.
   */
  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
  /**
   * Sets the active item properly given "wrap" mode. In other words, it will continue to move
   * down the list until it finds an item that is not disabled, and it will wrap if it
   * encounters either end of the list.
   */
  _setActiveInWrapMode(delta) {
    const items = this._getItemsArray();
    for (let i = 1; i <= items.length; i++) {
      const index = (this._activeItemIndex() + delta * i + items.length) % items.length;
      const item = items[index];
      if (!this._skipPredicateFn(item)) {
        this.setActiveItem(index);
        return;
      }
    }
  }
  /**
   * Sets the active item properly given the default mode. In other words, it will
   * continue to move down the list until it finds an item that is not disabled. If
   * it encounters either end of the list, it will stop and not wrap.
   */
  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex() + delta, delta);
  }
  /**
   * Sets the active item to the first enabled item starting at the index specified. If the
   * item is disabled, it will move in the fallbackDelta direction until it either
   * finds an enabled item or encounters the end of the list.
   */
  _setActiveItemByIndex(index, fallbackDelta) {
    const items = this._getItemsArray();
    if (!items[index]) {
      return;
    }
    while (this._skipPredicateFn(items[index])) {
      index += fallbackDelta;
      if (!items[index]) {
        return;
      }
    }
    this.setActiveItem(index);
  }
  /** Returns the items as an array. */
  _getItemsArray() {
    if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isSignal)(this._items)) {
      return this._items();
    }
    return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList ? this._items.toArray() : this._items;
  }
  /** Callback for when the items have changed. */
  _itemsChanged(newItems) {
    this._typeahead?.setItems(newItems);
    const activeItem = this._activeItem();
    if (activeItem) {
      const newIndex = newItems.indexOf(activeItem);
      if (newIndex > -1 && newIndex !== this._activeItemIndex()) {
        this._activeItemIndex.set(newIndex);
        this._typeahead?.setCurrentSelectedItemIndex(newIndex);
      }
    }
  }
}


/***/ }),

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


/***/ }),

/***/ 25662:
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/focus-monitor-DLjkiju1.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CdkMonitorFocus),
/* harmony export */   F: () => (/* binding */ FocusMonitor),
/* harmony export */   I: () => (/* binding */ InputModalityDetector),
/* harmony export */   a: () => (/* binding */ INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS),
/* harmony export */   b: () => (/* binding */ INPUT_MODALITY_DETECTOR_OPTIONS),
/* harmony export */   c: () => (/* binding */ FocusMonitorDetectionMode),
/* harmony export */   d: () => (/* binding */ FOCUS_MONITOR_DEFAULT_OPTIONS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _fake_event_detection_DWOdFTFz_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fake-event-detection-DWOdFTFz.mjs */ 513);
/* harmony import */ var _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keycodes-CpHkExLC.mjs */ 5758);
/* harmony import */ var _shadow_dom_B0oHn41l_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shadow-dom-B0oHn41l.mjs */ 66488);
/* harmony import */ var _platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./platform-DNDzkVcI.mjs */ 6427);
/* harmony import */ var _passive_listeners_esHZRgIN_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./passive-listeners-esHZRgIN.mjs */ 92516);
/* harmony import */ var _element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./element-x4z00URv.mjs */ 94724);











/**
 * Injectable options for the InputModalityDetector. These are shallowly merged with the default
 * options.
 */
const INPUT_MODALITY_DETECTOR_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-input-modality-detector-options');
/**
 * Default options for the InputModalityDetector.
 *
 * Modifier keys are ignored by default (i.e. when pressed won't cause the service to detect
 * keyboard input modality) for two reasons:
 *
 * 1. Modifier keys are commonly used with mouse to perform actions such as 'right click' or 'open
 *    in new tab', and are thus less representative of actual keyboard interaction.
 * 2. VoiceOver triggers some keyboard events when linearly navigating with Control + Option (but
 *    confusingly not with Caps Lock). Thus, to have parity with other screen readers, we ignore
 *    these keys so as to not update the input modality.
 *
 * Note that we do not by default ignore the right Meta key on Safari because it has the same key
 * code as the ContextMenu key on other browsers. When we switch to using event.key, we can
 * distinguish between the two.
 */
const INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [_keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_3__.d, _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_3__.C, _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_3__.M, _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_3__.e, _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_3__.f]
};
/**
 * The amount of time needed to pass after a touchstart event in order for a subsequent mousedown
 * event to be attributed as mouse and not touch.
 *
 * This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
 * that a value of around 650ms seems appropriate.
 */
const TOUCH_BUFFER_MS = 650;
/**
 * Event listener options that enable capturing and also mark the listener as passive if the browser
 * supports it.
 */
const modalityEventListenerOptions = {
  passive: true,
  capture: true
};
/**
 * Service that detects the user's input modality.
 *
 * This service does not update the input modality when a user navigates with a screen reader
 * (e.g. linear navigation with VoiceOver, object navigation / browse mode with NVDA, virtual PC
 * cursor mode with JAWS). This is in part due to technical limitations (i.e. keyboard events do not
 * fire as expected in these modes) but is also arguably the correct behavior. Navigating with a
 * screen reader is akin to visually scanning a page, and should not be interpreted as actual user
 * input interaction.
 *
 * When a user is not navigating but *interacting* with a screen reader, this service attempts to
 * update the input modality to keyboard, but in general this service's behavior is largely
 * undefined.
 */
let InputModalityDetector = /*#__PURE__*/(() => {
  class InputModalityDetector {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_4__.P);
    _listenerCleanups;
    /** Emits whenever an input modality is detected. */
    modalityDetected;
    /** Emits when the input modality changes. */
    modalityChanged;
    /** The most recently detected input modality. */
    get mostRecentModality() {
      return this._modality.value;
    }
    /**
     * The most recently detected input modality event target. Is null if no input modality has been
     * detected or if the associated event target is null for some unknown reason.
     */
    _mostRecentTarget = null;
    /** The underlying BehaviorSubject that emits whenever an input modality is detected. */
    _modality = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    /** Options for this InputModalityDetector. */
    _options;
    /**
     * The timestamp of the last touch input modality. Used to determine whether mousedown events
     * should be attributed to mouse or touch.
     */
    _lastTouchMs = 0;
    /**
     * Handles keydown events. Must be an arrow function in order to preserve the context when it gets
     * bound.
     */
    _onKeydown = event => {
      // If this is one of the keys we should ignore, then ignore it and don't update the input
      // modality to keyboard.
      if (this._options?.ignoreKeys?.some(keyCode => keyCode === event.keyCode)) {
        return;
      }
      this._modality.next('keyboard');
      this._mostRecentTarget = (0,_shadow_dom_B0oHn41l_mjs__WEBPACK_IMPORTED_MODULE_5__._)(event);
    };
    /**
     * Handles mousedown events. Must be an arrow function in order to preserve the context when it
     * gets bound.
     */
    _onMousedown = event => {
      // Touches trigger both touch and mouse events, so we need to distinguish between mouse events
      // that were triggered via mouse vs touch. To do so, check if the mouse event occurs closely
      // after the previous touch event.
      if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
        return;
      }
      // Fake mousedown events are fired by some screen readers when controls are activated by the
      // screen reader. Attribute them to keyboard input modality.
      this._modality.next((0,_fake_event_detection_DWOdFTFz_mjs__WEBPACK_IMPORTED_MODULE_6__.i)(event) ? 'keyboard' : 'mouse');
      this._mostRecentTarget = (0,_shadow_dom_B0oHn41l_mjs__WEBPACK_IMPORTED_MODULE_5__._)(event);
    };
    /**
     * Handles touchstart events. Must be an arrow function in order to preserve the context when it
     * gets bound.
     */
    _onTouchstart = event => {
      // Same scenario as mentioned in _onMousedown, but on touch screen devices, fake touchstart
      // events are fired. Again, attribute to keyboard input modality.
      if ((0,_fake_event_detection_DWOdFTFz_mjs__WEBPACK_IMPORTED_MODULE_6__.a)(event)) {
        this._modality.next('keyboard');
        return;
      }
      // Store the timestamp of this touch event, as it's used to distinguish between mouse events
      // triggered via mouse vs touch.
      this._lastTouchMs = Date.now();
      this._modality.next('touch');
      this._mostRecentTarget = (0,_shadow_dom_B0oHn41l_mjs__WEBPACK_IMPORTED_MODULE_5__._)(event);
    };
    constructor() {
      const ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
      const document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
      const options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(INPUT_MODALITY_DETECTOR_OPTIONS, {
        optional: true
      });
      this._options = {
        ...INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS,
        ...options
      };
      // Skip the first emission as it's null.
      this.modalityDetected = this._modality.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.skip)(1));
      this.modalityChanged = this.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)());
      // If we're not in a browser, this service should do nothing, as there's no relevant input
      // modality to detect.
      if (this._platform.isBrowser) {
        const renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
        this._listenerCleanups = ngZone.runOutsideAngular(() => {
          return [renderer.listen(document, 'keydown', this._onKeydown, modalityEventListenerOptions), renderer.listen(document, 'mousedown', this._onMousedown, modalityEventListenerOptions), renderer.listen(document, 'touchstart', this._onTouchstart, modalityEventListenerOptions)];
        });
      }
    }
    ngOnDestroy() {
      this._modality.complete();
      this._listenerCleanups?.forEach(cleanup => cleanup());
    }
    static ɵfac = function InputModalityDetector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InputModalityDetector)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InputModalityDetector,
      factory: InputModalityDetector.ɵfac,
      providedIn: 'root'
    });
  }
  return InputModalityDetector;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Detection mode used for attributing the origin of a focus event. */
var FocusMonitorDetectionMode = /*#__PURE__*/function (FocusMonitorDetectionMode) {
  /**
   * Any mousedown, keydown, or touchstart event that happened in the previous
   * tick or the current tick will be used to assign a focus event's origin (to
   * either mouse, keyboard, or touch). This is the default option.
   */
  FocusMonitorDetectionMode[FocusMonitorDetectionMode["IMMEDIATE"] = 0] = "IMMEDIATE";
  /**
   * A focus event's origin is always attributed to the last corresponding
   * mousedown, keydown, or touchstart event, no matter how long ago it occurred.
   */
  FocusMonitorDetectionMode[FocusMonitorDetectionMode["EVENTUAL"] = 1] = "EVENTUAL";
  return FocusMonitorDetectionMode;
}(FocusMonitorDetectionMode || {});
/** InjectionToken for FocusMonitorOptions. */
const FOCUS_MONITOR_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-focus-monitor-default-options');
/**
 * Event listener options that enable capturing and also
 * mark the listener as passive if the browser supports it.
 */
const captureEventListenerOptions = /*#__PURE__*/(0,_passive_listeners_esHZRgIN_mjs__WEBPACK_IMPORTED_MODULE_7__.n)({
  passive: true,
  capture: true
});
/** Monitors mouse and keyboard events to determine the cause of focus events. */
let FocusMonitor = /*#__PURE__*/(() => {
  class FocusMonitor {
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_4__.P);
    _inputModalityDetector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(InputModalityDetector);
    /** The focus origin that the next focus event is a result of. */
    _origin = null;
    /** The FocusOrigin of the last focus event tracked by the FocusMonitor. */
    _lastFocusOrigin;
    /** Whether the window has just been focused. */
    _windowFocused = false;
    /** The timeout id of the window focus timeout. */
    _windowFocusTimeoutId;
    /** The timeout id of the origin clearing timeout. */
    _originTimeoutId;
    /**
     * Whether the origin was determined via a touch interaction. Necessary as properly attributing
     * focus events to touch interactions requires special logic.
     */
    _originFromTouchInteraction = false;
    /** Map of elements being monitored to their info. */
    _elementInfo = new Map();
    /** The number of elements currently being monitored. */
    _monitoredElementCount = 0;
    /**
     * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
     * as well as the number of monitored elements that they contain. We have to treat focus/blur
     * handlers differently from the rest of the events, because the browser won't emit events
     * to the document when focus moves inside of a shadow root.
     */
    _rootNodeFocusListenerCount = new Map();
    /**
     * The specified detection mode, used for attributing the origin of a focus
     * event.
     */
    _detectionMode;
    /**
     * Event listener for `focus` events on the window.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */
    _windowFocusListener = () => {
      // Make a note of when the window regains focus, so we can
      // restore the origin info for the focused element.
      this._windowFocused = true;
      this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = false);
    };
    /** Used to reference correct document/window */
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, {
      optional: true
    });
    /** Subject for stopping our InputModalityDetector subscription. */
    _stopInputModalityDetector = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    constructor() {
      const options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(FOCUS_MONITOR_DEFAULT_OPTIONS, {
        optional: true
      });
      this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
    }
    /**
     * Event listener for `focus` and 'blur' events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */
    _rootNodeFocusAndBlurListener = event => {
      const target = (0,_shadow_dom_B0oHn41l_mjs__WEBPACK_IMPORTED_MODULE_5__._)(event);
      // We need to walk up the ancestor chain in order to support `checkChildren`.
      for (let element = target; element; element = element.parentElement) {
        if (event.type === 'focus') {
          this._onFocus(event, element);
        } else {
          this._onBlur(event, element);
        }
      }
    };
    monitor(element, checkChildren = false) {
      const nativeElement = (0,_element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_8__.a)(element);
      // Do nothing if we're not on the browser platform or the passed in node isn't an element.
      if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
        // Note: we don't want the observable to emit at all so we don't pass any parameters.
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)();
      }
      // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
      // the shadow root, rather than the `document`, because the browser won't emit focus events
      // to the `document`, if focus is moving within the same shadow root.
      const rootNode = (0,_shadow_dom_B0oHn41l_mjs__WEBPACK_IMPORTED_MODULE_5__.a)(nativeElement) || this._getDocument();
      const cachedInfo = this._elementInfo.get(nativeElement);
      // Check if we're already monitoring this element.
      if (cachedInfo) {
        if (checkChildren) {
          // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
          // observers into ones that behave as if `checkChildren` was turned on. We need a more
          // robust solution.
          cachedInfo.checkChildren = true;
        }
        return cachedInfo.subject;
      }
      // Create monitored element info.
      const info = {
        checkChildren: checkChildren,
        subject: new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject(),
        rootNode
      };
      this._elementInfo.set(nativeElement, info);
      this._registerGlobalListeners(info);
      return info.subject;
    }
    stopMonitoring(element) {
      const nativeElement = (0,_element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_8__.a)(element);
      const elementInfo = this._elementInfo.get(nativeElement);
      if (elementInfo) {
        elementInfo.subject.complete();
        this._setClasses(nativeElement);
        this._elementInfo.delete(nativeElement);
        this._removeGlobalListeners(elementInfo);
      }
    }
    focusVia(element, origin, options) {
      const nativeElement = (0,_element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_8__.a)(element);
      const focusedElement = this._getDocument().activeElement;
      // If the element is focused already, calling `focus` again won't trigger the event listener
      // which means that the focus classes won't be updated. If that's the case, update the classes
      // directly without waiting for an event.
      if (nativeElement === focusedElement) {
        this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
      } else {
        this._setOrigin(origin);
        // `focus` isn't available on the server
        if (typeof nativeElement.focus === 'function') {
          nativeElement.focus(options);
        }
      }
    }
    ngOnDestroy() {
      this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
    }
    /** Access injected document if available or fallback to global document reference */
    _getDocument() {
      return this._document || document;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
      const doc = this._getDocument();
      return doc.defaultView || window;
    }
    _getFocusOrigin(focusEventTarget) {
      if (this._origin) {
        // If the origin was realized via a touch interaction, we need to perform additional checks
        // to determine whether the focus origin should be attributed to touch or program.
        if (this._originFromTouchInteraction) {
          return this._shouldBeAttributedToTouch(focusEventTarget) ? 'touch' : 'program';
        } else {
          return this._origin;
        }
      }
      // If the window has just regained focus, we can restore the most recent origin from before the
      // window blurred. Otherwise, we've reached the point where we can't identify the source of the
      // focus. This typically means one of two things happened:
      //
      // 1) The element was programmatically focused, or
      // 2) The element was focused via screen reader navigation (which generally doesn't fire
      //    events).
      //
      // Because we can't distinguish between these two cases, we default to setting `program`.
      if (this._windowFocused && this._lastFocusOrigin) {
        return this._lastFocusOrigin;
      }
      // If the interaction is coming from an input label, we consider it a mouse interactions.
      // This is a special case where focus moves on `click`, rather than `mousedown` which breaks
      // our detection, because all our assumptions are for `mousedown`. We need to handle this
      // special case, because it's very common for checkboxes and radio buttons.
      if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
        return 'mouse';
      }
      return 'program';
    }
    /**
     * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
     * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
     * handle a focus event following a touch interaction, we need to determine whether (1) the focus
     * event was directly caused by the touch interaction or (2) the focus event was caused by a
     * subsequent programmatic focus call triggered by the touch interaction.
     * @param focusEventTarget The target of the focus event under examination.
     */
    _shouldBeAttributedToTouch(focusEventTarget) {
      // Please note that this check is not perfect. Consider the following edge case:
      //
      // <div #parent tabindex="0">
      //   <div #child tabindex="0" (click)="#parent.focus()"></div>
      // </div>
      //
      // Suppose there is a FocusMonitor in IMMEDIATE mode attached to #parent. When the user touches
      // #child, #parent is programmatically focused. This code will attribute the focus to touch
      // instead of program. This is a relatively minor edge-case that can be worked around by using
      // focusVia(parent, 'program') to focus #parent.
      return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
    }
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param element The element to update the classes on.
     * @param origin The focus origin.
     */
    _setClasses(element, origin) {
      element.classList.toggle('cdk-focused', !!origin);
      element.classList.toggle('cdk-touch-focused', origin === 'touch');
      element.classList.toggle('cdk-keyboard-focused', origin === 'keyboard');
      element.classList.toggle('cdk-mouse-focused', origin === 'mouse');
      element.classList.toggle('cdk-program-focused', origin === 'program');
    }
    /**
     * Updates the focus origin. If we're using immediate detection mode, we schedule an async
     * function to clear the origin at the end of a timeout. The duration of the timeout depends on
     * the origin being set.
     * @param origin The origin to set.
     * @param isFromInteraction Whether we are setting the origin from an interaction event.
     */
    _setOrigin(origin, isFromInteraction = false) {
      this._ngZone.runOutsideAngular(() => {
        this._origin = origin;
        this._originFromTouchInteraction = origin === 'touch' && isFromInteraction;
        // If we're in IMMEDIATE mode, reset the origin at the next tick (or in `TOUCH_BUFFER_MS` ms
        // for a touch event). We reset the origin at the next tick because Firefox focuses one tick
        // after the interaction event. We wait `TOUCH_BUFFER_MS` ms before resetting the origin for
        // a touch event because when a touch event is fired, the associated focus event isn't yet in
        // the event queue. Before doing so, clear any pending timeouts.
        if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
          clearTimeout(this._originTimeoutId);
          const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
          this._originTimeoutId = setTimeout(() => this._origin = null, ms);
        }
      });
    }
    /**
     * Handles focus events on a registered element.
     * @param event The focus event.
     * @param element The monitored element.
     */
    _onFocus(event, element) {
      // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
      // focus event affecting the monitored element. If we want to use the origin of the first event
      // instead we should check for the cdk-focused class here and return if the element already has
      // it. (This only matters for elements that have includesChildren = true).
      // If we are not counting child-element-focus as focused, make sure that the event target is the
      // monitored element itself.
      const elementInfo = this._elementInfo.get(element);
      const focusEventTarget = (0,_shadow_dom_B0oHn41l_mjs__WEBPACK_IMPORTED_MODULE_5__._)(event);
      if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
        return;
      }
      this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
    }
    /**
     * Handles blur events on a registered element.
     * @param event The blur event.
     * @param element The monitored element.
     */
    _onBlur(event, element) {
      // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
      // order to focus another child of the monitored element.
      const elementInfo = this._elementInfo.get(element);
      if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
        return;
      }
      this._setClasses(element);
      this._emitOrigin(elementInfo, null);
    }
    _emitOrigin(info, origin) {
      if (info.subject.observers.length) {
        this._ngZone.run(() => info.subject.next(origin));
      }
    }
    _registerGlobalListeners(elementInfo) {
      if (!this._platform.isBrowser) {
        return;
      }
      const rootNode = elementInfo.rootNode;
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
      if (!rootNodeFocusListeners) {
        this._ngZone.runOutsideAngular(() => {
          rootNode.addEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          rootNode.addEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        });
      }
      this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
      // Register global listeners when first element is monitored.
      if (++this._monitoredElementCount === 1) {
        // Note: we listen to events in the capture phase so we
        // can detect them even if the user stops propagation.
        this._ngZone.runOutsideAngular(() => {
          const window = this._getWindow();
          window.addEventListener('focus', this._windowFocusListener);
        });
        // The InputModalityDetector is also just a collection of global listeners.
        this._inputModalityDetector.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this._stopInputModalityDetector)).subscribe(modality => {
          this._setOrigin(modality, true /* isFromInteraction */);
        });
      }
    }
    _removeGlobalListeners(elementInfo) {
      const rootNode = elementInfo.rootNode;
      if (this._rootNodeFocusListenerCount.has(rootNode)) {
        const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
        if (rootNodeFocusListeners > 1) {
          this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
        } else {
          rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          this._rootNodeFocusListenerCount.delete(rootNode);
        }
      }
      // Unregister global listeners when last element is unmonitored.
      if (! --this._monitoredElementCount) {
        const window = this._getWindow();
        window.removeEventListener('focus', this._windowFocusListener);
        // Equivalently, stop our InputModalityDetector subscription.
        this._stopInputModalityDetector.next();
        // Clear timeouts for all potentially pending timeouts to prevent the leaks.
        clearTimeout(this._windowFocusTimeoutId);
        clearTimeout(this._originTimeoutId);
      }
    }
    /** Updates all the state on an element once its focus origin has changed. */
    _originChanged(element, origin, elementInfo) {
      this._setClasses(element, origin);
      this._emitOrigin(elementInfo, origin);
      this._lastFocusOrigin = origin;
    }
    /**
     * Collects the `MonitoredElementInfo` of a particular element and
     * all of its ancestors that have enabled `checkChildren`.
     * @param element Element from which to start the search.
     */
    _getClosestElementsInfo(element) {
      const results = [];
      this._elementInfo.forEach((info, currentElement) => {
        if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
          results.push([currentElement, info]);
        }
      });
      return results;
    }
    /**
     * Returns whether an interaction is likely to have come from the user clicking the `label` of
     * an `input` or `textarea` in order to focus it.
     * @param focusEventTarget Target currently receiving focus.
     */
    _isLastInteractionFromInputLabel(focusEventTarget) {
      const {
        _mostRecentTarget: mostRecentTarget,
        mostRecentModality
      } = this._inputModalityDetector;
      // If the last interaction used the mouse on an element contained by one of the labels
      // of an `input`/`textarea` that is currently focused, it is very likely that the
      // user redirected focus using the label.
      if (mostRecentModality !== 'mouse' || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== 'INPUT' && focusEventTarget.nodeName !== 'TEXTAREA' || focusEventTarget.disabled) {
        return false;
      }
      const labels = focusEventTarget.labels;
      if (labels) {
        for (let i = 0; i < labels.length; i++) {
          if (labels[i].contains(mostRecentTarget)) {
            return true;
          }
        }
      }
      return false;
    }
    static ɵfac = function FocusMonitor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FocusMonitor)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FocusMonitor,
      factory: FocusMonitor.ɵfac,
      providedIn: 'root'
    });
  }
  return FocusMonitor;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */
let CdkMonitorFocus = /*#__PURE__*/(() => {
  class CdkMonitorFocus {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _focusMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(FocusMonitor);
    _monitorSubscription;
    _focusOrigin = null;
    cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    constructor() {}
    get focusOrigin() {
      return this._focusOrigin;
    }
    ngAfterViewInit() {
      const element = this._elementRef.nativeElement;
      this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(origin => {
        this._focusOrigin = origin;
        this.cdkFocusChange.emit(origin);
      });
    }
    ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this._elementRef);
      if (this._monitorSubscription) {
        this._monitorSubscription.unsubscribe();
      }
    }
    static ɵfac = function CdkMonitorFocus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkMonitorFocus)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkMonitorFocus,
      selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
      outputs: {
        cdkFocusChange: "cdkFocusChange"
      },
      exportAs: ["cdkMonitorFocus"]
    });
  }
  return CdkMonitorFocus;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 39539:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/observers.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdkObserveContent: () => (/* binding */ CdkObserveContent),
/* harmony export */   ContentObserver: () => (/* binding */ ContentObserver),
/* harmony export */   MutationObserverFactory: () => (/* binding */ MutationObserverFactory),
/* harmony export */   ObserversModule: () => (/* binding */ ObserversModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element-x4z00URv.mjs */ 94724);






// Angular may add, remove, or edit comment nodes during change detection. We don't care about
// these changes because they don't affect the user-preceived content, and worse it can cause
// infinite change detection cycles where the change detection updates a comment, triggering the
// MutationObserver, triggering another change detection and kicking the cycle off again.
function shouldIgnoreRecord(record) {
  // Ignore changes to comment text.
  if (record.type === 'characterData' && record.target instanceof Comment) {
    return true;
  }
  // Ignore addition / removal of comments.
  if (record.type === 'childList') {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  // Observe everything else.
  return false;
}
/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */
let MutationObserverFactory = /*#__PURE__*/(() => {
  class MutationObserverFactory {
    create(callback) {
      return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    }
    static ɵfac = function MutationObserverFactory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MutationObserverFactory)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MutationObserverFactory,
      factory: MutationObserverFactory.ɵfac,
      providedIn: 'root'
    });
  }
  return MutationObserverFactory;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** An injectable service that allows watching elements for changes to their content. */
let ContentObserver = /*#__PURE__*/(() => {
  class ContentObserver {
    _mutationObserverFactory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MutationObserverFactory);
    /** Keeps track of the existing MutationObservers so they can be reused. */
    _observedElements = new Map();
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    constructor() {}
    ngOnDestroy() {
      this._observedElements.forEach((_, element) => this._cleanupObserver(element));
    }
    observe(elementOrRef) {
      const element = (0,_element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_3__.a)(elementOrRef);
      return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
        const stream = this._observeElement(element);
        const subscription = stream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(records => records.filter(record => !shouldIgnoreRecord(record))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(records => !!records.length)).subscribe(records => {
          this._ngZone.run(() => {
            observer.next(records);
          });
        });
        return () => {
          subscription.unsubscribe();
          this._unobserveElement(element);
        };
      });
    }
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     */
    _observeElement(element) {
      return this._ngZone.runOutsideAngular(() => {
        if (!this._observedElements.has(element)) {
          const stream = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          const observer = this._mutationObserverFactory.create(mutations => stream.next(mutations));
          if (observer) {
            observer.observe(element, {
              characterData: true,
              childList: true,
              subtree: true
            });
          }
          this._observedElements.set(element, {
            observer,
            stream,
            count: 1
          });
        } else {
          this._observedElements.get(element).count++;
        }
        return this._observedElements.get(element).stream;
      });
    }
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     */
    _unobserveElement(element) {
      if (this._observedElements.has(element)) {
        this._observedElements.get(element).count--;
        if (!this._observedElements.get(element).count) {
          this._cleanupObserver(element);
        }
      }
    }
    /** Clean up the underlying MutationObserver for the specified element. */
    _cleanupObserver(element) {
      if (this._observedElements.has(element)) {
        const {
          observer,
          stream
        } = this._observedElements.get(element);
        if (observer) {
          observer.disconnect();
        }
        stream.complete();
        this._observedElements.delete(element);
      }
    }
    static ɵfac = function ContentObserver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ContentObserver)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContentObserver,
      factory: ContentObserver.ɵfac,
      providedIn: 'root'
    });
  }
  return ContentObserver;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
let CdkObserveContent = /*#__PURE__*/(() => {
  class CdkObserveContent {
    _contentObserver = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ContentObserver);
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    /** Event emitted for each change in the element's content. */
    event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Whether observing content is disabled. This option can be used
     * to disconnect the underlying MutationObserver until it is needed.
     */
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
      this._disabled ? this._unsubscribe() : this._subscribe();
    }
    _disabled = false;
    /** Debounce interval for emitting the changes. */
    get debounce() {
      return this._debounce;
    }
    set debounce(value) {
      this._debounce = (0,_element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_3__.c)(value);
      this._subscribe();
    }
    _debounce;
    _currentSubscription = null;
    constructor() {}
    ngAfterContentInit() {
      if (!this._currentSubscription && !this.disabled) {
        this._subscribe();
      }
    }
    ngOnDestroy() {
      this._unsubscribe();
    }
    _subscribe() {
      this._unsubscribe();
      const stream = this._contentObserver.observe(this._elementRef);
      this._currentSubscription = (this.debounce ? stream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(this.debounce)) : stream).subscribe(this.event);
    }
    _unsubscribe() {
      this._currentSubscription?.unsubscribe();
    }
    static ɵfac = function CdkObserveContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkObserveContent)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkObserveContent,
      selectors: [["", "cdkObserveContent", ""]],
      inputs: {
        disabled: [2, "cdkObserveContentDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        debounce: "debounce"
      },
      outputs: {
        event: "cdkObserveContent"
      },
      exportAs: ["cdkObserveContent"]
    });
  }
  return CdkObserveContent;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ObserversModule = /*#__PURE__*/(() => {
  class ObserversModule {
    static ɵfac = function ObserversModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ObserversModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ObserversModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      providers: [MutationObserverFactory]
    });
  }
  return ObserversModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 49390:
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/focus-key-manager-CPmlyB_c.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ FocusKeyManager)
/* harmony export */ });
/* harmony import */ var _list_key_manager_C7tp3RbG_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-key-manager-C7tp3RbG.mjs */ 17355);

class FocusKeyManager extends _list_key_manager_C7tp3RbG_mjs__WEBPACK_IMPORTED_MODULE_0__.L {
  _origin = 'program';
  /**
   * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
   * @param origin Focus origin to be used when focusing items.
   */
  setFocusOrigin(origin) {
    this._origin = origin;
    return this;
  }
  setActiveItem(item) {
    super.setActiveItem(item);
    if (this.activeItem) {
      this.activeItem.focus(this._origin);
    }
  }
}


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

/***/ 53524:
/*!**************************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/activedescendant-key-manager-CZAE5aFC.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ActiveDescendantKeyManager)
/* harmony export */ });
/* harmony import */ var _list_key_manager_C7tp3RbG_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-key-manager-C7tp3RbG.mjs */ 17355);

class ActiveDescendantKeyManager extends _list_key_manager_C7tp3RbG_mjs__WEBPACK_IMPORTED_MODULE_0__.L {
  setActiveItem(index) {
    if (this.activeItem) {
      this.activeItem.setInactiveStyles();
    }
    super.setActiveItem(index);
    if (this.activeItem) {
      this.activeItem.setActiveStyles();
    }
  }
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

/***/ 67097:
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/typeahead-9ZW4Dtsf.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ Typeahead)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keycodes-CpHkExLC.mjs */ 5758);



const DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS = 200;
/**
 * Selects items based on keyboard inputs. Implements the typeahead functionality of
 * `role="listbox"` or `role="tree"` and other related roles.
 */
class Typeahead {
  _letterKeyStream = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  _items = [];
  _selectedItemIndex = -1;
  /** Buffer for the letters that the user has pressed */
  _pressedLetters = [];
  _skipPredicateFn;
  _selectedItem = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  selectedItem = this._selectedItem;
  constructor(initialItems, config) {
    const typeAheadInterval = typeof config?.debounceInterval === 'number' ? config.debounceInterval : DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS;
    if (config?.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && initialItems.length && initialItems.some(item => typeof item.getLabel !== 'function')) {
      throw new Error('KeyManager items in typeahead mode must implement the `getLabel` method.');
    }
    this.setItems(initialItems);
    this._setupKeyHandler(typeAheadInterval);
  }
  destroy() {
    this._pressedLetters = [];
    this._letterKeyStream.complete();
    this._selectedItem.complete();
  }
  setCurrentSelectedItemIndex(index) {
    this._selectedItemIndex = index;
  }
  setItems(items) {
    this._items = items;
  }
  handleKey(event) {
    const keyCode = event.keyCode;
    // Attempt to use the `event.key` which also maps it to the user's keyboard language,
    // otherwise fall back to resolving alphanumeric characters via the keyCode.
    if (event.key && event.key.length === 1) {
      this._letterKeyStream.next(event.key.toLocaleUpperCase());
    } else if (keyCode >= _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_2__.A && keyCode <= _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_2__.Z || keyCode >= _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_2__.b && keyCode <= _keycodes_CpHkExLC_mjs__WEBPACK_IMPORTED_MODULE_2__.N) {
      this._letterKeyStream.next(String.fromCharCode(keyCode));
    }
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */
  isTyping() {
    return this._pressedLetters.length > 0;
  }
  /** Resets the currently stored sequence of typed letters. */
  reset() {
    this._pressedLetters = [];
  }
  _setupKeyHandler(typeAheadInterval) {
    // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
    // and convert those letters back into a string. Afterwards find the first item that starts
    // with that string and select it.
    this._letterKeyStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(letter => this._pressedLetters.push(letter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.debounceTime)(typeAheadInterval), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(() => this._pressedLetters.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => this._pressedLetters.join('').toLocaleUpperCase())).subscribe(inputString => {
      // Start at 1 because we want to start searching at the item immediately
      // following the current active item.
      for (let i = 1; i < this._items.length + 1; i++) {
        const index = (this._selectedItemIndex + i) % this._items.length;
        const item = this._items[index];
        if (!this._skipPredicateFn?.(item) && item.getLabel?.().toLocaleUpperCase().trim().indexOf(inputString) === 0) {
          this._selectedItem.next(item);
          break;
        }
      }
      this._pressedLetters = [];
    });
  }
}


/***/ }),

/***/ 72102:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/a11y.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A11yModule: () => (/* reexport safe */ _a11y_module_DHa4AVFz_mjs__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   ActiveDescendantKeyManager: () => (/* reexport safe */ _activedescendant_key_manager_CZAE5aFC_mjs__WEBPACK_IMPORTED_MODULE_4__.A),
/* harmony export */   AriaDescriber: () => (/* binding */ AriaDescriber),
/* harmony export */   CDK_DESCRIBEDBY_HOST_ATTRIBUTE: () => (/* binding */ CDK_DESCRIBEDBY_HOST_ATTRIBUTE),
/* harmony export */   CDK_DESCRIBEDBY_ID_PREFIX: () => (/* binding */ CDK_DESCRIBEDBY_ID_PREFIX),
/* harmony export */   CdkAriaLive: () => (/* reexport safe */ _a11y_module_DHa4AVFz_mjs__WEBPACK_IMPORTED_MODULE_1__.d),
/* harmony export */   CdkMonitorFocus: () => (/* reexport safe */ _focus_monitor_DLjkiju1_mjs__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   CdkTrapFocus: () => (/* reexport safe */ _a11y_module_DHa4AVFz_mjs__WEBPACK_IMPORTED_MODULE_1__.C),
/* harmony export */   ConfigurableFocusTrap: () => (/* binding */ ConfigurableFocusTrap),
/* harmony export */   ConfigurableFocusTrapFactory: () => (/* binding */ ConfigurableFocusTrapFactory),
/* harmony export */   EventListenerFocusTrapInertStrategy: () => (/* binding */ EventListenerFocusTrapInertStrategy),
/* harmony export */   FOCUS_MONITOR_DEFAULT_OPTIONS: () => (/* reexport safe */ _focus_monitor_DLjkiju1_mjs__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   FOCUS_TRAP_INERT_STRATEGY: () => (/* binding */ FOCUS_TRAP_INERT_STRATEGY),
/* harmony export */   FocusKeyManager: () => (/* reexport safe */ _focus_key_manager_CPmlyB_c_mjs__WEBPACK_IMPORTED_MODULE_5__.F),
/* harmony export */   FocusMonitor: () => (/* reexport safe */ _focus_monitor_DLjkiju1_mjs__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   FocusMonitorDetectionMode: () => (/* reexport safe */ _focus_monitor_DLjkiju1_mjs__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   FocusTrap: () => (/* reexport safe */ _a11y_module_DHa4AVFz_mjs__WEBPACK_IMPORTED_MODULE_1__.a),
/* harmony export */   FocusTrapFactory: () => (/* reexport safe */ _a11y_module_DHa4AVFz_mjs__WEBPACK_IMPORTED_MODULE_1__.F),
/* harmony export */   HighContrastMode: () => (/* reexport safe */ _a11y_module_DHa4AVFz_mjs__WEBPACK_IMPORTED_MODULE_1__.b),
/* harmony export */   HighContrastModeDetector: () => (/* reexport safe */ _a11y_module_DHa4AVFz_mjs__WEBPACK_IMPORTED_MODULE_1__.H),
/* harmony export */   INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS: () => (/* reexport safe */ _focus_monitor_DLjkiju1_mjs__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   INPUT_MODALITY_DETECTOR_OPTIONS: () => (/* reexport safe */ _focus_monitor_DLjkiju1_mjs__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   InputModalityDetector: () => (/* reexport safe */ _focus_monitor_DLjkiju1_mjs__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   InteractivityChecker: () => (/* reexport safe */ _a11y_module_DHa4AVFz_mjs__WEBPACK_IMPORTED_MODULE_1__.I),
/* harmony export */   IsFocusableConfig: () => (/* reexport safe */ _a11y_module_DHa4AVFz_mjs__WEBPACK_IMPORTED_MODULE_1__.c),
/* harmony export */   LIVE_ANNOUNCER_DEFAULT_OPTIONS: () => (/* reexport safe */ _a11y_module_DHa4AVFz_mjs__WEBPACK_IMPORTED_MODULE_1__.g),
/* harmony export */   LIVE_ANNOUNCER_ELEMENT_TOKEN: () => (/* reexport safe */ _a11y_module_DHa4AVFz_mjs__WEBPACK_IMPORTED_MODULE_1__.e),
/* harmony export */   LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY: () => (/* reexport safe */ _a11y_module_DHa4AVFz_mjs__WEBPACK_IMPORTED_MODULE_1__.f),
/* harmony export */   ListKeyManager: () => (/* reexport safe */ _list_key_manager_C7tp3RbG_mjs__WEBPACK_IMPORTED_MODULE_6__.L),
/* harmony export */   LiveAnnouncer: () => (/* reexport safe */ _a11y_module_DHa4AVFz_mjs__WEBPACK_IMPORTED_MODULE_1__.L),
/* harmony export */   MESSAGES_CONTAINER_ID: () => (/* binding */ MESSAGES_CONTAINER_ID),
/* harmony export */   NOOP_TREE_KEY_MANAGER_FACTORY: () => (/* binding */ NOOP_TREE_KEY_MANAGER_FACTORY),
/* harmony export */   NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER: () => (/* binding */ NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER),
/* harmony export */   NoopTreeKeyManager: () => (/* binding */ NoopTreeKeyManager),
/* harmony export */   TREE_KEY_MANAGER: () => (/* reexport safe */ _tree_key_manager_KnCoIkIC_mjs__WEBPACK_IMPORTED_MODULE_8__.T),
/* harmony export */   TREE_KEY_MANAGER_FACTORY: () => (/* reexport safe */ _tree_key_manager_KnCoIkIC_mjs__WEBPACK_IMPORTED_MODULE_8__.b),
/* harmony export */   TREE_KEY_MANAGER_FACTORY_PROVIDER: () => (/* reexport safe */ _tree_key_manager_KnCoIkIC_mjs__WEBPACK_IMPORTED_MODULE_8__.c),
/* harmony export */   TreeKeyManager: () => (/* reexport safe */ _tree_key_manager_KnCoIkIC_mjs__WEBPACK_IMPORTED_MODULE_8__.a),
/* harmony export */   _IdGenerator: () => (/* reexport safe */ _id_generator_LuoRZSid_mjs__WEBPACK_IMPORTED_MODULE_2__._),
/* harmony export */   addAriaReferencedId: () => (/* binding */ addAriaReferencedId),
/* harmony export */   getAriaReferenceIds: () => (/* binding */ getAriaReferenceIds),
/* harmony export */   isFakeMousedownFromScreenReader: () => (/* reexport safe */ _fake_event_detection_DWOdFTFz_mjs__WEBPACK_IMPORTED_MODULE_9__.i),
/* harmony export */   isFakeTouchstartFromScreenReader: () => (/* reexport safe */ _fake_event_detection_DWOdFTFz_mjs__WEBPACK_IMPORTED_MODULE_9__.a),
/* harmony export */   removeAriaReferencedId: () => (/* binding */ removeAriaReferencedId)
/* harmony export */ });
/* harmony import */ var _focus_monitor_DLjkiju1_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focus-monitor-DLjkiju1.mjs */ 25662);
/* harmony import */ var _a11y_module_DHa4AVFz_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a11y-module-DHa4AVFz.mjs */ 87438);
/* harmony import */ var _id_generator_LuoRZSid_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./id-generator-LuoRZSid.mjs */ 51590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./platform-DNDzkVcI.mjs */ 6427);
/* harmony import */ var _style_loader_B2sGQXxD_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style-loader-B2sGQXxD.mjs */ 82981);
/* harmony import */ var _private_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./private.mjs */ 9227);
/* harmony import */ var _activedescendant_key_manager_CZAE5aFC_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activedescendant-key-manager-CZAE5aFC.mjs */ 53524);
/* harmony import */ var _focus_key_manager_CPmlyB_c_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./focus-key-manager-CPmlyB_c.mjs */ 49390);
/* harmony import */ var _list_key_manager_C7tp3RbG_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-key-manager-C7tp3RbG.mjs */ 17355);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _tree_key_manager_KnCoIkIC_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tree-key-manager-KnCoIkIC.mjs */ 83594);
/* harmony import */ var _fake_event_detection_DWOdFTFz_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fake-event-detection-DWOdFTFz.mjs */ 513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 85914);





























/** IDs are delimited by an empty space, as per the spec. */
const ID_DELIMITER = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some(existingId => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter(val => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */
function getAriaReferenceIds(el, attr) {
  // Get string array of all individual ids (whitespace delimited) in the attribute value
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}

/**
 * ID used for the body container where all messages are appended.
 * @deprecated No longer being used. To be removed.
 * @breaking-change 14.0.0
 */
const MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/**
 * ID prefix used for each created message element.
 * @deprecated To be turned into a private variable.
 * @breaking-change 14.0.0
 */
const CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/**
 * Attribute given to each host element that is described by a message element.
 * @deprecated To be turned into a private variable.
 * @breaking-change 14.0.0
 */
const CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/** Global incremental identifier for each registered message element. */
let nextId = 0;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 */
let AriaDescriber = /*#__PURE__*/(() => {
  class AriaDescriber {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_12__.P);
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT);
    /** Map of all registered message elements that have been placed into the document. */
    _messageRegistry = new Map();
    /** Container for all registered messages. */
    _messagesContainer = null;
    /** Unique ID for the service. */
    _id = `${nextId++}`;
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_style_loader_B2sGQXxD_mjs__WEBPACK_IMPORTED_MODULE_13__._).load(_private_mjs__WEBPACK_IMPORTED_MODULE_14__._VisuallyHiddenLoader);
      this._id = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.APP_ID) + '-' + nextId++;
    }
    describe(hostElement, message, role) {
      if (!this._canBeDescribed(hostElement, message)) {
        return;
      }
      const key = getKey(message, role);
      if (typeof message !== 'string') {
        // We need to ensure that the element has an ID.
        setMessageId(message, this._id);
        this._messageRegistry.set(key, {
          messageElement: message,
          referenceCount: 0
        });
      } else if (!this._messageRegistry.has(key)) {
        this._createMessageElement(message, role);
      }
      if (!this._isElementDescribedByMessage(hostElement, key)) {
        this._addMessageReference(hostElement, key);
      }
    }
    removeDescription(hostElement, message, role) {
      if (!message || !this._isElementNode(hostElement)) {
        return;
      }
      const key = getKey(message, role);
      if (this._isElementDescribedByMessage(hostElement, key)) {
        this._removeMessageReference(hostElement, key);
      }
      // If the message is a string, it means that it's one that we created for the
      // consumer so we can remove it safely, otherwise we should leave it in place.
      if (typeof message === 'string') {
        const registeredMessage = this._messageRegistry.get(key);
        if (registeredMessage && registeredMessage.referenceCount === 0) {
          this._deleteMessageElement(key);
        }
      }
      if (this._messagesContainer?.childNodes.length === 0) {
        this._messagesContainer.remove();
        this._messagesContainer = null;
      }
    }
    /** Unregisters all created message elements and removes the message container. */
    ngOnDestroy() {
      const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
      for (let i = 0; i < describedElements.length; i++) {
        this._removeCdkDescribedByReferenceIds(describedElements[i]);
        describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
      }
      this._messagesContainer?.remove();
      this._messagesContainer = null;
      this._messageRegistry.clear();
    }
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     */
    _createMessageElement(message, role) {
      const messageElement = this._document.createElement('div');
      setMessageId(messageElement, this._id);
      messageElement.textContent = message;
      if (role) {
        messageElement.setAttribute('role', role);
      }
      this._createMessagesContainer();
      this._messagesContainer.appendChild(messageElement);
      this._messageRegistry.set(getKey(message, role), {
        messageElement,
        referenceCount: 0
      });
    }
    /** Deletes the message element from the global messages container. */
    _deleteMessageElement(key) {
      this._messageRegistry.get(key)?.messageElement?.remove();
      this._messageRegistry.delete(key);
    }
    /** Creates the global container for all aria-describedby messages. */
    _createMessagesContainer() {
      if (this._messagesContainer) {
        return;
      }
      const containerClassName = 'cdk-describedby-message-container';
      const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
      for (let i = 0; i < serverContainers.length; i++) {
        // When going from the server to the client, we may end up in a situation where there's
        // already a container on the page, but we don't have a reference to it. Clear the
        // old container so we don't get duplicates. Doing this, instead of emptying the previous
        // container, should be slightly faster.
        serverContainers[i].remove();
      }
      const messagesContainer = this._document.createElement('div');
      // We add `visibility: hidden` in order to prevent text in this container from
      // being searchable by the browser's Ctrl + F functionality.
      // Screen-readers will still read the description for elements with aria-describedby even
      // when the description element is not visible.
      messagesContainer.style.visibility = 'hidden';
      // Even though we use `visibility: hidden`, we still apply `cdk-visually-hidden` so that
      // the description element doesn't impact page layout.
      messagesContainer.classList.add(containerClassName);
      messagesContainer.classList.add('cdk-visually-hidden');
      if (!this._platform.isBrowser) {
        messagesContainer.setAttribute('platform', 'server');
      }
      this._document.body.appendChild(messagesContainer);
      this._messagesContainer = messagesContainer;
    }
    /** Removes all cdk-describedby messages that are hosted through the element. */
    _removeCdkDescribedByReferenceIds(element) {
      // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
      const originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(id => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
      element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
    }
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     */
    _addMessageReference(element, key) {
      const registeredMessage = this._messageRegistry.get(key);
      // Add the aria-describedby reference and set the
      // describedby_host attribute to mark the element.
      addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
      element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
      registeredMessage.referenceCount++;
    }
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     */
    _removeMessageReference(element, key) {
      const registeredMessage = this._messageRegistry.get(key);
      registeredMessage.referenceCount--;
      removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
      element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    /** Returns true if the element has been described by the provided message ID. */
    _isElementDescribedByMessage(element, key) {
      const referenceIds = getAriaReferenceIds(element, 'aria-describedby');
      const registeredMessage = this._messageRegistry.get(key);
      const messageId = registeredMessage && registeredMessage.messageElement.id;
      return !!messageId && referenceIds.indexOf(messageId) != -1;
    }
    /** Determines whether a message can be described on a particular element. */
    _canBeDescribed(element, message) {
      if (!this._isElementNode(element)) {
        return false;
      }
      if (message && typeof message === 'object') {
        // We'd have to make some assumptions about the description element's text, if the consumer
        // passed in an element. Assume that if an element is passed in, the consumer has verified
        // that it can be used as a description.
        return true;
      }
      const trimmedMessage = message == null ? '' : `${message}`.trim();
      const ariaLabel = element.getAttribute('aria-label');
      // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
      // element, because screen readers will end up reading out the same text twice in a row.
      return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
    }
    /** Checks whether a node is an Element node. */
    _isElementNode(element) {
      return element.nodeType === this._document.ELEMENT_NODE;
    }
    static ɵfac = function AriaDescriber_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AriaDescriber)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AriaDescriber,
      factory: AriaDescriber.ɵfac,
      providedIn: 'root'
    });
  }
  return AriaDescriber;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Gets a key that can be used to look messages up in the registry. */
function getKey(message, role) {
  return typeof message === 'string' ? `${role || ''}/${message}` : message;
}
/** Assigns a unique ID to an element, if it doesn't have one already. */
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}

// NoopTreeKeyManager is a "noop" implementation of TreeKeyMangerStrategy. Methods are noops. Does
// not emit to streams.
//
// Used for applications built before TreeKeyManager to opt-out of TreeKeyManager and revert to
// legacy behavior.
/**
 * @docs-private
 *
 * Opt-out of Tree of key manager behavior.
 *
 * When provided, Tree has same focus management behavior as before TreeKeyManager was introduced.
 *  - Tree does not respond to keyboard interaction
 *  - Tree node allows tabindex to be set by Input binding
 *  - Tree node allows tabindex to be set by attribute binding
 *
 * @deprecated NoopTreeKeyManager deprecated. Use TreeKeyManager or inject a
 * TreeKeyManagerStrategy instead. To be removed in a future version.
 *
 * @breaking-change 21.0.0
 */
class NoopTreeKeyManager {
  _isNoopTreeKeyManager = true;
  // Provide change as required by TreeKeyManagerStrategy. NoopTreeKeyManager is a "noop"
  // implementation that does not emit to streams.
  change = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  destroy() {
    this.change.complete();
  }
  onKeydown() {
    // noop
  }
  getActiveItemIndex() {
    // Always return null. NoopTreeKeyManager is a "noop" implementation that does not maintain
    // the active item.
    return null;
  }
  getActiveItem() {
    // Always return null. NoopTreeKeyManager is a "noop" implementation that does not maintain
    // the active item.
    return null;
  }
  focusItem() {
    // noop
  }
}
/**
 * @docs-private
 *
 * Opt-out of Tree of key manager behavior.
 *
 * When provided, Tree has same focus management behavior as before TreeKeyManager was introduced.
 *  - Tree does not respond to keyboard interaction
 *  - Tree node allows tabindex to be set by Input binding
 *  - Tree node allows tabindex to be set by attribute binding
 *
 * @deprecated NoopTreeKeyManager deprecated. Use TreeKeyManager or inject a
 * TreeKeyManagerStrategy instead. To be removed in a future version.
 *
 * @breaking-change 21.0.0
 */
function NOOP_TREE_KEY_MANAGER_FACTORY() {
  return () => new NoopTreeKeyManager();
}
/**
 * @docs-private
 *
 * Opt-out of Tree of key manager behavior.
 *
 * When provided, Tree has same focus management behavior as before TreeKeyManager was introduced.
 *  - Tree does not respond to keyboard interaction
 *  - Tree node allows tabindex to be set by Input binding
 *  - Tree node allows tabindex to be set by attribute binding
 *
 * @deprecated NoopTreeKeyManager deprecated. Use TreeKeyManager or inject a
 * TreeKeyManagerStrategy instead. To be removed in a future version.
 *
 * @breaking-change 21.0.0
 */
const NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER = {
  provide: _tree_key_manager_KnCoIkIC_mjs__WEBPACK_IMPORTED_MODULE_8__.T,
  useFactory: NOOP_TREE_KEY_MANAGER_FACTORY
};

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class uses a strategy pattern that determines how it traps focus.
 * See FocusTrapInertStrategy.
 */
class ConfigurableFocusTrap extends _a11y_module_DHa4AVFz_mjs__WEBPACK_IMPORTED_MODULE_1__.a {
  _focusTrapManager;
  _inertStrategy;
  /** Whether the FocusTrap is enabled. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config, injector) {
    super(_element, _checker, _ngZone, _document, config.defer, injector);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;
    this._focusTrapManager.register(this);
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
  destroy() {
    this._focusTrapManager.deregister(this);
    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _enable() {
    this._inertStrategy.preventFocus(this);
    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _disable() {
    this._inertStrategy.allowFocus(this);
    this.toggleAnchors(false);
  }
}

/**
 * Lightweight FocusTrapInertStrategy that adds a document focus event
 * listener to redirect focus back inside the FocusTrap.
 */
class EventListenerFocusTrapInertStrategy {
  /** Focus event handler. */
  _listener = null;
  /** Adds a document event listener that keeps focus inside the FocusTrap. */
  preventFocus(focusTrap) {
    // Ensure there's only one listener per document
    if (this._listener) {
      focusTrap._document.removeEventListener('focus', this._listener, true);
    }
    this._listener = e => this._trapFocus(focusTrap, e);
    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener('focus', this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */
  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }
    focusTrap._document.removeEventListener('focus', this._listener, true);
    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */
  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element;
    // Don't refocus if target was in an overlay, because the overlay might be associated
    // with an element inside the FocusTrap, ex. mat-select.
    if (target && !focusTrapRoot.contains(target) && !target.closest?.('div.cdk-overlay-pane')) {
      // Some legacy FocusTrap usages have logic that focuses some element on the page
      // just before FocusTrap is destroyed. For backwards compatibility, wait
      // to be sure FocusTrap is still enabled before refocusing.
      setTimeout(() => {
        // Check whether focus wasn't put back into the focus trap while the timeout was pending.
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }
}

/** The injection token used to specify the inert strategy. */
const FOCUS_TRAP_INERT_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('FOCUS_TRAP_INERT_STRATEGY');

/** Injectable that ensures only the most recently enabled FocusTrap is active. */
let FocusTrapManager = /*#__PURE__*/(() => {
  class FocusTrapManager {
    // A stack of the FocusTraps on the page. Only the FocusTrap at the
    // top of the stack is active.
    _focusTrapStack = [];
    /**
     * Disables the FocusTrap at the top of the stack, and then pushes
     * the new FocusTrap onto the stack.
     */
    register(focusTrap) {
      // Dedupe focusTraps that register multiple times.
      this._focusTrapStack = this._focusTrapStack.filter(ft => ft !== focusTrap);
      let stack = this._focusTrapStack;
      if (stack.length) {
        stack[stack.length - 1]._disable();
      }
      stack.push(focusTrap);
      focusTrap._enable();
    }
    /**
     * Removes the FocusTrap from the stack, and activates the
     * FocusTrap that is the new top of the stack.
     */
    deregister(focusTrap) {
      focusTrap._disable();
      const stack = this._focusTrapStack;
      const i = stack.indexOf(focusTrap);
      if (i !== -1) {
        stack.splice(i, 1);
        if (stack.length) {
          stack[stack.length - 1]._enable();
        }
      }
    }
    static ɵfac = function FocusTrapManager_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FocusTrapManager)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: FocusTrapManager,
      factory: FocusTrapManager.ɵfac,
      providedIn: 'root'
    });
  }
  return FocusTrapManager;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Factory that allows easy instantiation of configurable focus traps. */
let ConfigurableFocusTrapFactory = /*#__PURE__*/(() => {
  class ConfigurableFocusTrapFactory {
    _checker = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_a11y_module_DHa4AVFz_mjs__WEBPACK_IMPORTED_MODULE_1__.I);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone);
    _focusTrapManager = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(FocusTrapManager);
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT);
    _inertStrategy;
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector);
    constructor() {
      const inertStrategy = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(FOCUS_TRAP_INERT_STRATEGY, {
        optional: true
      });
      // TODO split up the strategies into different modules, similar to DateAdapter.
      this._inertStrategy = inertStrategy || new EventListenerFocusTrapInertStrategy();
    }
    create(element, config = {
      defer: false
    }) {
      let configObject;
      if (typeof config === 'boolean') {
        configObject = {
          defer: config
        };
      } else {
        configObject = config;
      }
      return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject, this._injector);
    }
    static ɵfac = function ConfigurableFocusTrapFactory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ConfigurableFocusTrapFactory)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ConfigurableFocusTrapFactory,
      factory: ConfigurableFocusTrapFactory.ɵfac,
      providedIn: 'root'
    });
  }
  return ConfigurableFocusTrapFactory;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


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

/***/ 83594:
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/tree-key-manager-KnCoIkIC.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TREE_KEY_MANAGER),
/* harmony export */   a: () => (/* binding */ TreeKeyManager),
/* harmony export */   b: () => (/* binding */ TREE_KEY_MANAGER_FACTORY),
/* harmony export */   c: () => (/* binding */ TREE_KEY_MANAGER_FACTORY_PROVIDER)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _typeahead_9ZW4Dtsf_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typeahead-9ZW4Dtsf.mjs */ 67097);
/* harmony import */ var _coercion_private_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coercion/private.mjs */ 22810);






/**
 * This class manages keyboard events for trees. If you pass it a QueryList or other list of tree
 * items, it will set the active item, focus, handle expansion and typeahead correctly when
 * keyboard events occur.
 */
class TreeKeyManager {
  /** The index of the currently active (focused) item. */
  _activeItemIndex = -1;
  /** The currently active (focused) item. */
  _activeItem = null;
  /** Whether or not we activate the item when it's focused. */
  _shouldActivationFollowFocus = false;
  /**
   * The orientation that the tree is laid out in. In `rtl` mode, the behavior of Left and
   * Right arrow are switched.
   */
  _horizontalOrientation = 'ltr';
  /**
   * Predicate function that can be used to check whether an item should be skipped
   * by the key manager.
   *
   * The default value for this doesn't skip any elements in order to keep tree items focusable
   * when disabled. This aligns with ARIA guidelines:
   * https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#focusabilityofdisabledcontrols.
   */
  _skipPredicateFn = _item => false;
  /** Function to determine equivalent items. */
  _trackByFn = item => item;
  /** Synchronous cache of the items to manage. */
  _items = [];
  _typeahead;
  _typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
  _hasInitialFocused = false;
  _initializeFocus() {
    if (this._hasInitialFocused || this._items.length === 0) {
      return;
    }
    let activeIndex = 0;
    for (let i = 0; i < this._items.length; i++) {
      if (!this._skipPredicateFn(this._items[i]) && !this._isItemDisabled(this._items[i])) {
        activeIndex = i;
        break;
      }
    }
    const activeItem = this._items[activeIndex];
    // Use `makeFocusable` here, because we want the item to just be focusable, not actually
    // capture the focus since the user isn't interacting with it. See #29628.
    if (activeItem.makeFocusable) {
      this._activeItem?.unfocus();
      this._activeItemIndex = activeIndex;
      this._activeItem = activeItem;
      this._typeahead?.setCurrentSelectedItemIndex(activeIndex);
      activeItem.makeFocusable();
    } else {
      // Backwards compatibility for items that don't implement `makeFocusable`.
      this.focusItem(activeIndex);
    }
    this._hasInitialFocused = true;
  }
  /**
   *
   * @param items List of TreeKeyManager options. Can be synchronous or asynchronous.
   * @param config Optional configuration options. By default, use 'ltr' horizontal orientation. By
   * default, do not skip any nodes. By default, key manager only calls `focus` method when items
   * are focused and does not call `activate`. If `typeaheadDefaultInterval` is `true`, use a
   * default interval of 200ms.
   */
  constructor(items, config) {
    // We allow for the items to be an array or Observable because, in some cases, the consumer may
    // not have access to a QueryList of the items they want to manage (e.g. when the
    // items aren't being collected via `ViewChildren` or `ContentChildren`).
    if (items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList) {
      this._items = items.toArray();
      items.changes.subscribe(newItems => {
        this._items = newItems.toArray();
        this._typeahead?.setItems(this._items);
        this._updateActiveItemIndex(this._items);
        this._initializeFocus();
      });
    } else if ((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(items)) {
      items.subscribe(newItems => {
        this._items = newItems;
        this._typeahead?.setItems(newItems);
        this._updateActiveItemIndex(newItems);
        this._initializeFocus();
      });
    } else {
      this._items = items;
      this._initializeFocus();
    }
    if (typeof config.shouldActivationFollowFocus === 'boolean') {
      this._shouldActivationFollowFocus = config.shouldActivationFollowFocus;
    }
    if (config.horizontalOrientation) {
      this._horizontalOrientation = config.horizontalOrientation;
    }
    if (config.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    if (config.trackBy) {
      this._trackByFn = config.trackBy;
    }
    if (typeof config.typeAheadDebounceInterval !== 'undefined') {
      this._setTypeAhead(config.typeAheadDebounceInterval);
    }
  }
  /** Stream that emits any time the focused item changes. */
  change = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  /** Cleans up the key manager. */
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._typeahead?.destroy();
    this.change.complete();
  }
  /**
   * Handles a keyboard event on the tree.
   * @param event Keyboard event that represents the user interaction with the tree.
   */
  onKeydown(event) {
    const key = event.key;
    switch (key) {
      case 'Tab':
        // Return early here, in order to allow Tab to actually tab out of the tree
        return;
      case 'ArrowDown':
        this._focusNextItem();
        break;
      case 'ArrowUp':
        this._focusPreviousItem();
        break;
      case 'ArrowRight':
        this._horizontalOrientation === 'rtl' ? this._collapseCurrentItem() : this._expandCurrentItem();
        break;
      case 'ArrowLeft':
        this._horizontalOrientation === 'rtl' ? this._expandCurrentItem() : this._collapseCurrentItem();
        break;
      case 'Home':
        this._focusFirstItem();
        break;
      case 'End':
        this._focusLastItem();
        break;
      case 'Enter':
      case ' ':
        this._activateCurrentItem();
        break;
      default:
        if (event.key === '*') {
          this._expandAllItemsAtCurrentItemLevel();
          break;
        }
        this._typeahead?.handleKey(event);
        // Return here, in order to avoid preventing the default action of non-navigational
        // keys or resetting the buffer of pressed letters.
        return;
    }
    // Reset the typeahead since the user has used a navigational key.
    this._typeahead?.reset();
    event.preventDefault();
  }
  /** Index of the currently active item. */
  getActiveItemIndex() {
    return this._activeItemIndex;
  }
  /** The currently active item. */
  getActiveItem() {
    return this._activeItem;
  }
  /** Focus the first available item. */
  _focusFirstItem() {
    this.focusItem(this._findNextAvailableItemIndex(-1));
  }
  /** Focus the last available item. */
  _focusLastItem() {
    this.focusItem(this._findPreviousAvailableItemIndex(this._items.length));
  }
  /** Focus the next available item. */
  _focusNextItem() {
    this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex));
  }
  /** Focus the previous available item. */
  _focusPreviousItem() {
    this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex));
  }
  focusItem(itemOrIndex, options = {}) {
    // Set default options
    options.emitChangeEvent ??= true;
    let index = typeof itemOrIndex === 'number' ? itemOrIndex : this._items.findIndex(item => this._trackByFn(item) === this._trackByFn(itemOrIndex));
    if (index < 0 || index >= this._items.length) {
      return;
    }
    const activeItem = this._items[index];
    // If we're just setting the same item, don't re-call activate or focus
    if (this._activeItem !== null && this._trackByFn(activeItem) === this._trackByFn(this._activeItem)) {
      return;
    }
    const previousActiveItem = this._activeItem;
    this._activeItem = activeItem ?? null;
    this._activeItemIndex = index;
    this._typeahead?.setCurrentSelectedItemIndex(index);
    this._activeItem?.focus();
    previousActiveItem?.unfocus();
    if (options.emitChangeEvent) {
      this.change.next(this._activeItem);
    }
    if (this._shouldActivationFollowFocus) {
      this._activateCurrentItem();
    }
  }
  _updateActiveItemIndex(newItems) {
    const activeItem = this._activeItem;
    if (!activeItem) {
      return;
    }
    const newIndex = newItems.findIndex(item => this._trackByFn(item) === this._trackByFn(activeItem));
    if (newIndex > -1 && newIndex !== this._activeItemIndex) {
      this._activeItemIndex = newIndex;
      this._typeahead?.setCurrentSelectedItemIndex(newIndex);
    }
  }
  _setTypeAhead(debounceInterval) {
    this._typeahead = new _typeahead_9ZW4Dtsf_mjs__WEBPACK_IMPORTED_MODULE_3__.T(this._items, {
      debounceInterval: typeof debounceInterval === 'number' ? debounceInterval : undefined,
      skipPredicate: item => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(item => {
      this.focusItem(item);
    });
  }
  _findNextAvailableItemIndex(startingIndex) {
    for (let i = startingIndex + 1; i < this._items.length; i++) {
      if (!this._skipPredicateFn(this._items[i])) {
        return i;
      }
    }
    return startingIndex;
  }
  _findPreviousAvailableItemIndex(startingIndex) {
    for (let i = startingIndex - 1; i >= 0; i--) {
      if (!this._skipPredicateFn(this._items[i])) {
        return i;
      }
    }
    return startingIndex;
  }
  /**
   * If the item is already expanded, we collapse the item. Otherwise, we will focus the parent.
   */
  _collapseCurrentItem() {
    if (!this._activeItem) {
      return;
    }
    if (this._isCurrentItemExpanded()) {
      this._activeItem.collapse();
    } else {
      const parent = this._activeItem.getParent();
      if (!parent || this._skipPredicateFn(parent)) {
        return;
      }
      this.focusItem(parent);
    }
  }
  /**
   * If the item is already collapsed, we expand the item. Otherwise, we will focus the first child.
   */
  _expandCurrentItem() {
    if (!this._activeItem) {
      return;
    }
    if (!this._isCurrentItemExpanded()) {
      this._activeItem.expand();
    } else {
      (0,_coercion_private_mjs__WEBPACK_IMPORTED_MODULE_4__.coerceObservable)(this._activeItem.getChildren()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(children => {
        const firstChild = children.find(child => !this._skipPredicateFn(child));
        if (!firstChild) {
          return;
        }
        this.focusItem(firstChild);
      });
    }
  }
  _isCurrentItemExpanded() {
    if (!this._activeItem) {
      return false;
    }
    return typeof this._activeItem.isExpanded === 'boolean' ? this._activeItem.isExpanded : this._activeItem.isExpanded();
  }
  _isItemDisabled(item) {
    return typeof item.isDisabled === 'boolean' ? item.isDisabled : item.isDisabled?.();
  }
  /** For all items that are the same level as the current item, we expand those items. */
  _expandAllItemsAtCurrentItemLevel() {
    if (!this._activeItem) {
      return;
    }
    const parent = this._activeItem.getParent();
    let itemsToExpand;
    if (!parent) {
      itemsToExpand = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this._items.filter(item => item.getParent() === null));
    } else {
      itemsToExpand = (0,_coercion_private_mjs__WEBPACK_IMPORTED_MODULE_4__.coerceObservable)(parent.getChildren());
    }
    itemsToExpand.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(items => {
      for (const item of items) {
        item.expand();
      }
    });
  }
  _activateCurrentItem() {
    this._activeItem?.activate();
  }
}
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
function TREE_KEY_MANAGER_FACTORY() {
  return (items, options) => new TreeKeyManager(items, options);
}
/** Injection token that determines the key manager to use. */
const TREE_KEY_MANAGER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('tree-key-manager', {
  providedIn: 'root',
  factory: TREE_KEY_MANAGER_FACTORY
});
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
const TREE_KEY_MANAGER_FACTORY_PROVIDER = {
  provide: TREE_KEY_MANAGER,
  useFactory: TREE_KEY_MANAGER_FACTORY
};


/***/ }),

/***/ 87438:
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/a11y-module-DHa4AVFz.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ A11yModule),
/* harmony export */   C: () => (/* binding */ CdkTrapFocus),
/* harmony export */   F: () => (/* binding */ FocusTrapFactory),
/* harmony export */   H: () => (/* binding */ HighContrastModeDetector),
/* harmony export */   I: () => (/* binding */ InteractivityChecker),
/* harmony export */   L: () => (/* binding */ LiveAnnouncer),
/* harmony export */   a: () => (/* binding */ FocusTrap),
/* harmony export */   b: () => (/* binding */ HighContrastMode),
/* harmony export */   c: () => (/* binding */ IsFocusableConfig),
/* harmony export */   d: () => (/* binding */ CdkAriaLive),
/* harmony export */   e: () => (/* binding */ LIVE_ANNOUNCER_ELEMENT_TOKEN),
/* harmony export */   f: () => (/* binding */ LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY),
/* harmony export */   g: () => (/* binding */ LIVE_ANNOUNCER_DEFAULT_OPTIONS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform-DNDzkVcI.mjs */ 6427);
/* harmony import */ var _shadow_dom_B0oHn41l_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shadow-dom-B0oHn41l.mjs */ 66488);
/* harmony import */ var _style_loader_B2sGQXxD_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-loader-B2sGQXxD.mjs */ 82981);
/* harmony import */ var _private_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./private.mjs */ 9227);
/* harmony import */ var _breakpoints_observer_QutrMj4x_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./breakpoints-observer-QutrMj4x.mjs */ 82195);
/* harmony import */ var _observers_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observers.mjs */ 39539);










/**
 * Configuration for the isFocusable method.
 */
class IsFocusableConfig {
  /**
   * Whether to count an element as focusable even if it is not currently visible.
   */
  ignoreVisibility = false;
}
// The InteractivityChecker leans heavily on the ally.js accessibility utilities.
// Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
// supported.
/**
 * Utility for checking the interactivity of an element, such as whether it is focusable or
 * tabbable.
 */
let InteractivityChecker = /*#__PURE__*/(() => {
  class InteractivityChecker {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_1__.P);
    constructor() {}
    /**
     * Gets whether an element is disabled.
     *
     * @param element Element to be checked.
     * @returns Whether the element is disabled.
     */
    isDisabled(element) {
      // This does not capture some cases, such as a non-form control with a disabled attribute or
      // a form control inside of a disabled form, but should capture the most common cases.
      return element.hasAttribute('disabled');
    }
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @returns Whether the element is visible.
     */
    isVisible(element) {
      return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    }
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param element Element to be checked.
     * @returns Whether the element is tabbable.
     */
    isTabbable(element) {
      // Nothing is tabbable on the server 😎
      if (!this._platform.isBrowser) {
        return false;
      }
      const frameElement = getFrameElement(getWindow(element));
      if (frameElement) {
        // Frame elements inherit their tabindex onto all child elements.
        if (getTabIndexValue(frameElement) === -1) {
          return false;
        }
        // Browsers disable tabbing to an element inside of an invisible frame.
        if (!this.isVisible(frameElement)) {
          return false;
        }
      }
      let nodeName = element.nodeName.toLowerCase();
      let tabIndexValue = getTabIndexValue(element);
      if (element.hasAttribute('contenteditable')) {
        return tabIndexValue !== -1;
      }
      if (nodeName === 'iframe' || nodeName === 'object') {
        // The frame or object's content may be tabbable depending on the content, but it's
        // not possibly to reliably detect the content of the frames. We always consider such
        // elements as non-tabbable.
        return false;
      }
      // In iOS, the browser only considers some specific elements as tabbable.
      if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
        return false;
      }
      if (nodeName === 'audio') {
        // Audio elements without controls enabled are never tabbable, regardless
        // of the tabindex attribute explicitly being set.
        if (!element.hasAttribute('controls')) {
          return false;
        }
        // Audio elements with controls are by default tabbable unless the
        // tabindex attribute is set to `-1` explicitly.
        return tabIndexValue !== -1;
      }
      if (nodeName === 'video') {
        // For all video elements, if the tabindex attribute is set to `-1`, the video
        // is not tabbable. Note: We cannot rely on the default `HTMLElement.tabIndex`
        // property as that one is set to `-1` in Chrome, Edge and Safari v13.1. The
        // tabindex attribute is the source of truth here.
        if (tabIndexValue === -1) {
          return false;
        }
        // If the tabindex is explicitly set, and not `-1` (as per check before), the
        // video element is always tabbable (regardless of whether it has controls or not).
        if (tabIndexValue !== null) {
          return true;
        }
        // Otherwise (when no explicit tabindex is set), a video is only tabbable if it
        // has controls enabled. Firefox is special as videos are always tabbable regardless
        // of whether there are controls or not.
        return this._platform.FIREFOX || element.hasAttribute('controls');
      }
      return element.tabIndex >= 0;
    }
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param element Element to be checked.
     * @param config The config object with options to customize this method's behavior
     * @returns Whether the element is focusable.
     */
    isFocusable(element, config) {
      // Perform checks in order of left to most expensive.
      // Again, naive approach that does not capture many edge cases and browser quirks.
      return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
    }
    static ɵfac = function InteractivityChecker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InteractivityChecker)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InteractivityChecker,
      factory: InteractivityChecker.ɵfac,
      providedIn: 'root'
    });
  }
  return InteractivityChecker;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 */
function getFrameElement(window) {
  try {
    return window.frameElement;
  } catch {
    return null;
  }
}
/** Checks whether the specified element has any geometry / rectangles. */
function hasGeometry(element) {
  // Use logic from jQuery to check for an invisible element.
  // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
}
/** Gets whether an element's  */
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
}
/** Gets whether an element is an `<input type="hidden">`. */
function isHiddenInput(element) {
  return isInputElement(element) && element.type == 'hidden';
}
/** Gets whether an element is an anchor that has an href attribute. */
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute('href');
}
/** Gets whether an element is an input element. */
function isInputElement(element) {
  return element.nodeName.toLowerCase() == 'input';
}
/** Gets whether an element is an anchor element. */
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == 'a';
}
/** Gets whether an element has a valid tabindex. */
function hasValidTabIndex(element) {
  if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
    return false;
  }
  let tabIndex = element.getAttribute('tabindex');
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 */
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
  const tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
/** Checks whether the specified element is potentially tabbable on iOS */
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === 'input' && element.type;
  return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 */
function isPotentiallyFocusable(element) {
  // Inputs are potentially focusable *unless* they're type="hidden".
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
}
/** Gets the parent window of a DOM node with regards of being inside of an iframe. */
function getWindow(node) {
  // ownerDocument is null if `node` itself *is* a document.
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause the two to be misaligned.
 */
class FocusTrap {
  _element;
  _checker;
  _ngZone;
  _document;
  _injector;
  _startAnchor;
  _endAnchor;
  _hasAttached = false;
  // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
  startAnchorListener = () => this.focusLastTabbableElement();
  endAnchorListener = () => this.focusFirstTabbableElement();
  /** Whether the focus trap is active. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);
      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  _enabled = true;
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false, /** @breaking-change 20.0.0 param to become required */
  _injector) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._injector = _injector;
    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */
  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;
    if (startAnchor) {
      startAnchor.removeEventListener('focus', this.startAnchorListener);
      startAnchor.remove();
    }
    if (endAnchor) {
      endAnchor.removeEventListener('focus', this.endAnchorListener);
      endAnchor.remove();
    }
    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfully. This may not be the case
   * if the target element isn't currently in the DOM.
   */
  attachAnchors() {
    // If we're not on the browser, there can be no focus to trap.
    if (this._hasAttached) {
      return true;
    }
    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();
        this._startAnchor.addEventListener('focus', this.startAnchorListener);
      }
      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();
        this._endAnchor.addEventListener('focus', this.endAnchorListener);
      }
    });
    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);
      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
      this._hasAttached = true;
    }
    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then focuses the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusInitialElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusFirstTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusLastTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */
  _getRegionBoundary(bound) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], ` + `[cdkFocusRegion${bound}], ` + `[cdk-focus-${bound}]`);
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        // @breaking-change 8.0.0
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated ` + `attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated attribute ` + `will be removed in 8.0.0.`, markers[i]);
        }
      }
    }
    if (bound == 'start') {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }
    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */
  focusInitialElement(options) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], ` + `[cdkFocusInitial]`);
    if (redirectToElement) {
      // @breaking-change 8.0.0
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', ` + `use 'cdkFocusInitial' instead. The deprecated attribute ` + `will be removed in 8.0.0`, redirectToElement);
      }
      // Warn the consumer if the element they've pointed to
      // isn't focusable, when not in production mode.
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }
      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);
        focusableChild?.focus(options);
        return !!focusableChild;
      }
      redirectToElement.focus(options);
      return true;
    }
    return this.focusFirstTabbableElement(options);
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('start');
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('end');
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */
  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */
  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */
  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    // Iterate in reverse DOM order.
    const children = root.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Creates an anchor element. */
  _createAnchor() {
    const anchor = this._document.createElement('div');
    this._toggleAnchorTabIndex(this._enabled, anchor);
    anchor.classList.add('cdk-visually-hidden');
    anchor.classList.add('cdk-focus-trap-anchor');
    anchor.setAttribute('aria-hidden', 'true');
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */
  _toggleAnchorTabIndex(isEnabled, anchor) {
    // Remove the tabindex completely, rather than setting it to -1, because if the
    // element has a tabindex, the user might still hit it when navigating with the arrow keys.
    isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */
  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);
      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */
  _executeOnStable(fn) {
    // TODO: remove this conditional when injector is required in the constructor.
    if (this._injector) {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(fn, {
        injector: this._injector
      });
    } else {
      setTimeout(fn);
    }
  }
}
/**
 * Factory that allows easy instantiation of focus traps.
 */
let FocusTrapFactory = /*#__PURE__*/(() => {
  class FocusTrapFactory {
    _checker = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(InteractivityChecker);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_style_loader_B2sGQXxD_mjs__WEBPACK_IMPORTED_MODULE_2__._).load(_private_mjs__WEBPACK_IMPORTED_MODULE_3__._VisuallyHiddenLoader);
    }
    /**
     * Creates a focus-trapped region around the given element.
     * @param element The element around which focus will be trapped.
     * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @returns The created focus trap instance.
     */
    create(element, deferCaptureElements = false) {
      return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements, this._injector);
    }
    static ɵfac = function FocusTrapFactory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FocusTrapFactory)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FocusTrapFactory,
      factory: FocusTrapFactory.ɵfac,
      providedIn: 'root'
    });
  }
  return FocusTrapFactory;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Directive for trapping focus within a region. */
let CdkTrapFocus = /*#__PURE__*/(() => {
  class CdkTrapFocus {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _focusTrapFactory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(FocusTrapFactory);
    /** Underlying FocusTrap instance. */
    focusTrap;
    /** Previously focused element to restore focus to upon destroy when using autoCapture. */
    _previouslyFocusedElement = null;
    /** Whether the focus trap is active. */
    get enabled() {
      return this.focusTrap?.enabled || false;
    }
    set enabled(value) {
      if (this.focusTrap) {
        this.focusTrap.enabled = value;
      }
    }
    /**
     * Whether the directive should automatically move focus into the trapped region upon
     * initialization and return focus to the previous activeElement upon destruction.
     */
    autoCapture;
    constructor() {
      const platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_1__.P);
      if (platform.isBrowser) {
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
      }
    }
    ngOnDestroy() {
      this.focusTrap?.destroy();
      // If we stored a previously focused element when using autoCapture, return focus to that
      // element now that the trapped region is being destroyed.
      if (this._previouslyFocusedElement) {
        this._previouslyFocusedElement.focus();
        this._previouslyFocusedElement = null;
      }
    }
    ngAfterContentInit() {
      this.focusTrap?.attachAnchors();
      if (this.autoCapture) {
        this._captureFocus();
      }
    }
    ngDoCheck() {
      if (this.focusTrap && !this.focusTrap.hasAttached()) {
        this.focusTrap.attachAnchors();
      }
    }
    ngOnChanges(changes) {
      const autoCaptureChange = changes['autoCapture'];
      if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
        this._captureFocus();
      }
    }
    _captureFocus() {
      this._previouslyFocusedElement = (0,_shadow_dom_B0oHn41l_mjs__WEBPACK_IMPORTED_MODULE_4__.c)();
      this.focusTrap?.focusInitialElementWhenReady();
    }
    static ɵfac = function CdkTrapFocus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkTrapFocus)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkTrapFocus,
      selectors: [["", "cdkTrapFocus", ""]],
      inputs: {
        enabled: [2, "cdkTrapFocus", "enabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        autoCapture: [2, "cdkTrapFocusAutoCapture", "autoCapture", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      exportAs: ["cdkTrapFocus"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
  return CdkTrapFocus;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const LIVE_ANNOUNCER_ELEMENT_TOKEN = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('liveAnnouncerElement', {
  providedIn: 'root',
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
/** Injection token that can be used to configure the default options for the LiveAnnouncer. */
const LIVE_ANNOUNCER_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
let uniqueIds = 0;
let LiveAnnouncer = /*#__PURE__*/(() => {
  class LiveAnnouncer {
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _defaultOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(LIVE_ANNOUNCER_DEFAULT_OPTIONS, {
      optional: true
    });
    _liveElement;
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _previousTimeout;
    _currentPromise;
    _currentResolve;
    constructor() {
      const elementToken = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(LIVE_ANNOUNCER_ELEMENT_TOKEN, {
        optional: true
      });
      this._liveElement = elementToken || this._createLiveElement();
    }
    announce(message, ...args) {
      const defaultOptions = this._defaultOptions;
      let politeness;
      let duration;
      if (args.length === 1 && typeof args[0] === 'number') {
        duration = args[0];
      } else {
        [politeness, duration] = args;
      }
      this.clear();
      clearTimeout(this._previousTimeout);
      if (!politeness) {
        politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
      }
      if (duration == null && defaultOptions) {
        duration = defaultOptions.duration;
      }
      // TODO: ensure changing the politeness works on all environments we support.
      this._liveElement.setAttribute('aria-live', politeness);
      if (this._liveElement.id) {
        this._exposeAnnouncerToModals(this._liveElement.id);
      }
      // This 100ms timeout is necessary for some browser + screen-reader combinations:
      // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
      // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
      //   second time without clearing and then using a non-zero delay.
      // (using JAWS 17 at time of this writing).
      return this._ngZone.runOutsideAngular(() => {
        if (!this._currentPromise) {
          this._currentPromise = new Promise(resolve => this._currentResolve = resolve);
        }
        clearTimeout(this._previousTimeout);
        this._previousTimeout = setTimeout(() => {
          this._liveElement.textContent = message;
          if (typeof duration === 'number') {
            this._previousTimeout = setTimeout(() => this.clear(), duration);
          }
          // For some reason in tests this can be undefined
          // Probably related to ZoneJS and every other thing that patches browser APIs in tests
          this._currentResolve?.();
          this._currentPromise = this._currentResolve = undefined;
        }, 100);
        return this._currentPromise;
      });
    }
    /**
     * Clears the current text from the announcer element. Can be used to prevent
     * screen readers from reading the text out again while the user is going
     * through the page landmarks.
     */
    clear() {
      if (this._liveElement) {
        this._liveElement.textContent = '';
      }
    }
    ngOnDestroy() {
      clearTimeout(this._previousTimeout);
      this._liveElement?.remove();
      this._liveElement = null;
      this._currentResolve?.();
      this._currentPromise = this._currentResolve = undefined;
    }
    _createLiveElement() {
      const elementClass = 'cdk-live-announcer-element';
      const previousElements = this._document.getElementsByClassName(elementClass);
      const liveEl = this._document.createElement('div');
      // Remove any old containers. This can happen when coming in from a server-side-rendered page.
      for (let i = 0; i < previousElements.length; i++) {
        previousElements[i].remove();
      }
      liveEl.classList.add(elementClass);
      liveEl.classList.add('cdk-visually-hidden');
      liveEl.setAttribute('aria-atomic', 'true');
      liveEl.setAttribute('aria-live', 'polite');
      liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
      this._document.body.appendChild(liveEl);
      return liveEl;
    }
    /**
     * Some browsers won't expose the accessibility node of the live announcer element if there is an
     * `aria-modal` and the live announcer is outside of it. This method works around the issue by
     * pointing the `aria-owns` of all modals to the live announcer element.
     */
    _exposeAnnouncerToModals(id) {
      // TODO(http://github.com/angular/components/issues/26853): consider de-duplicating this with
      // the `SnakBarContainer` and other usages.
      //
      // Note that the selector here is limited to CDK overlays at the moment in order to reduce the
      // section of the DOM we need to look through. This should cover all the cases we support, but
      // the selector can be expanded if it turns out to be too narrow.
      const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
      for (let i = 0; i < modals.length; i++) {
        const modal = modals[i];
        const ariaOwns = modal.getAttribute('aria-owns');
        if (!ariaOwns) {
          modal.setAttribute('aria-owns', id);
        } else if (ariaOwns.indexOf(id) === -1) {
          modal.setAttribute('aria-owns', ariaOwns + ' ' + id);
        }
      }
    }
    static ɵfac = function LiveAnnouncer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LiveAnnouncer)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LiveAnnouncer,
      factory: LiveAnnouncer.ɵfac,
      providedIn: 'root'
    });
  }
  return LiveAnnouncer;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */
let CdkAriaLive = /*#__PURE__*/(() => {
  class CdkAriaLive {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _liveAnnouncer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(LiveAnnouncer);
    _contentObserver = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_observers_mjs__WEBPACK_IMPORTED_MODULE_5__.ContentObserver);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    /** The aria-live politeness level to use when announcing messages. */
    get politeness() {
      return this._politeness;
    }
    set politeness(value) {
      this._politeness = value === 'off' || value === 'assertive' ? value : 'polite';
      if (this._politeness === 'off') {
        if (this._subscription) {
          this._subscription.unsubscribe();
          this._subscription = null;
        }
      } else if (!this._subscription) {
        this._subscription = this._ngZone.runOutsideAngular(() => {
          return this._contentObserver.observe(this._elementRef).subscribe(() => {
            // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
            const elementText = this._elementRef.nativeElement.textContent;
            // The `MutationObserver` fires also for attribute
            // changes which we don't want to announce.
            if (elementText !== this._previousAnnouncedText) {
              this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
              this._previousAnnouncedText = elementText;
            }
          });
        });
      }
    }
    _politeness = 'polite';
    /** Time in milliseconds after which to clear out the announcer element. */
    duration;
    _previousAnnouncedText;
    _subscription;
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_style_loader_B2sGQXxD_mjs__WEBPACK_IMPORTED_MODULE_2__._).load(_private_mjs__WEBPACK_IMPORTED_MODULE_3__._VisuallyHiddenLoader);
    }
    ngOnDestroy() {
      if (this._subscription) {
        this._subscription.unsubscribe();
      }
    }
    static ɵfac = function CdkAriaLive_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkAriaLive)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkAriaLive,
      selectors: [["", "cdkAriaLive", ""]],
      inputs: {
        politeness: [0, "cdkAriaLive", "politeness"],
        duration: [0, "cdkAriaLiveDuration", "duration"]
      },
      exportAs: ["cdkAriaLive"]
    });
  }
  return CdkAriaLive;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Set of possible high-contrast mode backgrounds. */
var HighContrastMode = /*#__PURE__*/function (HighContrastMode) {
  HighContrastMode[HighContrastMode["NONE"] = 0] = "NONE";
  HighContrastMode[HighContrastMode["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
  HighContrastMode[HighContrastMode["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
  return HighContrastMode;
}(HighContrastMode || {});
/** CSS class applied to the document body when in black-on-white high-contrast mode. */
const BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
/** CSS class applied to the document body when in white-on-black high-contrast mode. */
const WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
/** CSS class applied to the document body when in high-contrast mode. */
const HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
/**
 * Service to determine whether the browser is currently in a high-contrast-mode environment.
 *
 * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
 * changes the appearance of all applications, including web applications, to dramatically increase
 * contrast.
 *
 * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
 * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
 * browser extension.
 */
let HighContrastModeDetector = /*#__PURE__*/(() => {
  class HighContrastModeDetector {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_1__.P);
    /**
     * Figuring out the high contrast mode and adding the body classes can cause
     * some expensive layouts. This flag is used to ensure that we only do it once.
     */
    _hasCheckedHighContrastMode;
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _breakpointSubscription;
    constructor() {
      this._breakpointSubscription = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_breakpoints_observer_QutrMj4x_mjs__WEBPACK_IMPORTED_MODULE_6__.B).observe('(forced-colors: active)').subscribe(() => {
        if (this._hasCheckedHighContrastMode) {
          this._hasCheckedHighContrastMode = false;
          this._applyBodyHighContrastModeCssClasses();
        }
      });
    }
    /** Gets the current high-contrast-mode for the page. */
    getHighContrastMode() {
      if (!this._platform.isBrowser) {
        return HighContrastMode.NONE;
      }
      // Create a test element with an arbitrary background-color that is neither black nor
      // white; high-contrast mode will coerce the color to either black or white. Also ensure that
      // appending the test element to the DOM does not affect layout by absolutely positioning it
      const testElement = this._document.createElement('div');
      testElement.style.backgroundColor = 'rgb(1,2,3)';
      testElement.style.position = 'absolute';
      this._document.body.appendChild(testElement);
      // Get the computed style for the background color, collapsing spaces to normalize between
      // browsers. Once we get this color, we no longer need the test element. Access the `window`
      // via the document so we can fake it in tests. Note that we have extra null checks, because
      // this logic will likely run during app bootstrap and throwing can break the entire app.
      const documentWindow = this._document.defaultView || window;
      const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
      const computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');
      testElement.remove();
      switch (computedColor) {
        // Pre Windows 11 dark theme.
        case 'rgb(0,0,0)':
        // Windows 11 dark themes.
        case 'rgb(45,50,54)':
        case 'rgb(32,32,32)':
          return HighContrastMode.WHITE_ON_BLACK;
        // Pre Windows 11 light theme.
        case 'rgb(255,255,255)':
        // Windows 11 light theme.
        case 'rgb(255,250,239)':
          return HighContrastMode.BLACK_ON_WHITE;
      }
      return HighContrastMode.NONE;
    }
    ngOnDestroy() {
      this._breakpointSubscription.unsubscribe();
    }
    /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
    _applyBodyHighContrastModeCssClasses() {
      if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
        const bodyClasses = this._document.body.classList;
        bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
        this._hasCheckedHighContrastMode = true;
        const mode = this.getHighContrastMode();
        if (mode === HighContrastMode.BLACK_ON_WHITE) {
          bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
        } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
          bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
        }
      }
    }
    static ɵfac = function HighContrastModeDetector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HighContrastModeDetector)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HighContrastModeDetector,
      factory: HighContrastModeDetector.ɵfac,
      providedIn: 'root'
    });
  }
  return HighContrastModeDetector;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let A11yModule = /*#__PURE__*/(() => {
  class A11yModule {
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
    }
    static ɵfac = function A11yModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || A11yModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: A11yModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_observers_mjs__WEBPACK_IMPORTED_MODULE_5__.ObserversModule]
    });
  }
  return A11yModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 92516:
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/passive-listeners-esHZRgIN.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ normalizePassiveListenerOptions),
/* harmony export */   s: () => (/* binding */ supportsPassiveEventListeners)
/* harmony export */ });
/** Cached result of whether the user's browser supports passive event listeners. */
let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 */
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
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param options Object to be normalized.
 */
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
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
//# sourceMappingURL=2102.js.map