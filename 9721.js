(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[9721],{

/***/ 2903
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_focus-key-manager-chunk.mjs ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusKeyManager: () => (/* binding */ FocusKeyManager)
/* harmony export */ });
/* harmony import */ var _list_key_manager_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_list-key-manager-chunk.mjs */ 47441);

class FocusKeyManager extends _list_key_manager_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ListKeyManager {
  _origin = 'program';
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


/***/ },

/***/ 5642
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_a11y-module-chunk.mjs ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A11yModule: () => (/* binding */ A11yModule),
/* harmony export */   CdkAriaLive: () => (/* binding */ CdkAriaLive),
/* harmony export */   CdkTrapFocus: () => (/* binding */ CdkTrapFocus),
/* harmony export */   FocusTrap: () => (/* binding */ FocusTrap),
/* harmony export */   FocusTrapFactory: () => (/* binding */ FocusTrapFactory),
/* harmony export */   HighContrastMode: () => (/* binding */ HighContrastMode),
/* harmony export */   HighContrastModeDetector: () => (/* binding */ HighContrastModeDetector),
/* harmony export */   InteractivityChecker: () => (/* binding */ InteractivityChecker),
/* harmony export */   IsFocusableConfig: () => (/* binding */ IsFocusableConfig),
/* harmony export */   LIVE_ANNOUNCER_DEFAULT_OPTIONS: () => (/* binding */ LIVE_ANNOUNCER_DEFAULT_OPTIONS),
/* harmony export */   LIVE_ANNOUNCER_ELEMENT_TOKEN: () => (/* binding */ LIVE_ANNOUNCER_ELEMENT_TOKEN),
/* harmony export */   LiveAnnouncer: () => (/* binding */ LiveAnnouncer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_platform-chunk.mjs */ 98508);
/* harmony import */ var _shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_shadow-dom-chunk.mjs */ 68310);
/* harmony import */ var _style_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_style-loader-chunk.mjs */ 59504);
/* harmony import */ var _private_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./private.mjs */ 9227);
/* harmony import */ var _breakpoints_observer_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_breakpoints-observer-chunk.mjs */ 38438);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 2649);
/* harmony import */ var _observers_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observers.mjs */ 39539);










class IsFocusableConfig {
  ignoreVisibility = false;
}
let InteractivityChecker = /*#__PURE__*/(() => {
  class InteractivityChecker {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.Platform);
    constructor() {}
    isDisabled(element) {
      return element.hasAttribute('disabled');
    }
    isVisible(element) {
      return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    }
    isTabbable(element) {
      if (!this._platform.isBrowser) {
        return false;
      }
      const frameElement = getFrameElement(getWindow(element));
      if (frameElement) {
        if (getTabIndexValue(frameElement) === -1) {
          return false;
        }
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
        return false;
      }
      if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
        return false;
      }
      if (nodeName === 'audio') {
        if (!element.hasAttribute('controls')) {
          return false;
        }
        return tabIndexValue !== -1;
      }
      if (nodeName === 'video') {
        if (tabIndexValue === -1) {
          return false;
        }
        if (tabIndexValue !== null) {
          return true;
        }
        return this._platform.FIREFOX || element.hasAttribute('controls');
      }
      return element.tabIndex >= 0;
    }
    isFocusable(element, config) {
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
function getFrameElement(window) {
  try {
    return window.frameElement;
  } catch {
    return null;
  }
}
function hasGeometry(element) {
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
}
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
}
function isHiddenInput(element) {
  return isInputElement(element) && element.type == 'hidden';
}
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute('href');
}
function isInputElement(element) {
  return element.nodeName.toLowerCase() == 'input';
}
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == 'a';
}
function hasValidTabIndex(element) {
  if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
    return false;
  }
  let tabIndex = element.getAttribute('tabindex');
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  const tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === 'input' && element.type;
  return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
}
function isPotentiallyFocusable(element) {
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
}
function getWindow(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
class FocusTrap {
  _element;
  _checker;
  _ngZone;
  _document;
  _injector;
  _startAnchor = null;
  _endAnchor = null;
  _hasAttached = false;
  startAnchorListener = () => this.focusLastTabbableElement();
  endAnchorListener = () => this.focusFirstTabbableElement();
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
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false, _injector) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._injector = _injector;
    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
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
  attachAnchors() {
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
  focusInitialElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  focusFirstTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  focusLastTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  _getRegionBoundary(bound) {
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], ` + `[cdkFocusRegion${bound}], ` + `[cdk-focus-${bound}]`);
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
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
  focusInitialElement(options) {
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], ` + `[cdkFocusInitial]`);
    if (redirectToElement) {
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', ` + `use 'cdkFocusInitial' instead. The deprecated attribute ` + `will be removed in 8.0.0`, redirectToElement);
      }
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
  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('start');
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('end');
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  hasAttached() {
    return this._hasAttached;
  }
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
  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  _createAnchor() {
    const anchor = this._document.createElement('div');
    this._toggleAnchorTabIndex(this._enabled, anchor);
    anchor.classList.add('cdk-visually-hidden');
    anchor.classList.add('cdk-focus-trap-anchor');
    anchor.setAttribute('aria-hidden', 'true');
    return anchor;
  }
  _toggleAnchorTabIndex(isEnabled, anchor) {
    isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
  }
  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);
      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  _executeOnStable(fn) {
    if (this._injector) {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(fn, {
        injector: this._injector
      });
    } else {
      setTimeout(fn);
    }
  }
}
let FocusTrapFactory = /*#__PURE__*/(() => {
  class FocusTrapFactory {
    _checker = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(InteractivityChecker);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_style_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__._CdkPrivateStyleLoader).load(_private_mjs__WEBPACK_IMPORTED_MODULE_4__._VisuallyHiddenLoader);
    }
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
let CdkTrapFocus = /*#__PURE__*/(() => {
  class CdkTrapFocus {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _focusTrapFactory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(FocusTrapFactory);
    focusTrap = undefined;
    _previouslyFocusedElement = null;
    get enabled() {
      return this.focusTrap?.enabled || false;
    }
    set enabled(value) {
      if (this.focusTrap) {
        this.focusTrap.enabled = value;
      }
    }
    autoCapture = false;
    constructor() {
      const platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.Platform);
      if (platform.isBrowser) {
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
      }
    }
    ngOnDestroy() {
      this.focusTrap?.destroy();
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
      this._previouslyFocusedElement = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__._getFocusedElementPierceShadowDom)();
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
  factory: () => null
});
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
    _sanitizer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer);
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
      this._liveElement.setAttribute('aria-live', politeness);
      if (this._liveElement.id) {
        this._exposeAnnouncerToModals(this._liveElement.id);
      }
      return this._ngZone.runOutsideAngular(() => {
        if (!this._currentPromise) {
          this._currentPromise = new Promise(resolve => this._currentResolve = resolve);
        }
        clearTimeout(this._previousTimeout);
        this._previousTimeout = setTimeout(() => {
          if (!message || typeof message === 'string') {
            this._liveElement.textContent = message;
          } else {
            (0,_private_mjs__WEBPACK_IMPORTED_MODULE_4__._setInnerHtml)(this._liveElement, message, this._sanitizer);
          }
          if (typeof duration === 'number') {
            this._previousTimeout = setTimeout(() => this.clear(), duration);
          }
          this._currentResolve?.();
          this._currentPromise = this._currentResolve = undefined;
        }, 100);
        return this._currentPromise;
      });
    }
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
    _exposeAnnouncerToModals(id) {
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
let CdkAriaLive = /*#__PURE__*/(() => {
  class CdkAriaLive {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _liveAnnouncer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(LiveAnnouncer);
    _contentObserver = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_observers_mjs__WEBPACK_IMPORTED_MODULE_7__.ContentObserver);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    get politeness() {
      return this._politeness;
    }
    set politeness(value) {
      this._politeness = value === 'off' || value === 'assertive' ? value : 'polite';
      if (this._politeness === 'off') {
        if (this._subscription) {
          this._subscription.unsubscribe();
          this._subscription = undefined;
        }
      } else if (!this._subscription) {
        this._subscription = this._ngZone.runOutsideAngular(() => {
          return this._contentObserver.observe(this._elementRef).subscribe(() => {
            const elementText = this._elementRef.nativeElement.textContent;
            if (elementText !== this._previousAnnouncedText) {
              this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
              this._previousAnnouncedText = elementText;
            }
          });
        });
      }
    }
    _politeness = 'polite';
    duration;
    _previousAnnouncedText;
    _subscription;
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_style_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__._CdkPrivateStyleLoader).load(_private_mjs__WEBPACK_IMPORTED_MODULE_4__._VisuallyHiddenLoader);
    }
    ngOnDestroy() {
      this._subscription?.unsubscribe();
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
var HighContrastMode = /*#__PURE__*/function (HighContrastMode) {
  HighContrastMode[HighContrastMode["NONE"] = 0] = "NONE";
  HighContrastMode[HighContrastMode["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
  HighContrastMode[HighContrastMode["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
  return HighContrastMode;
}(HighContrastMode || {});
const BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
const WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
const HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
let HighContrastModeDetector = /*#__PURE__*/(() => {
  class HighContrastModeDetector {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.Platform);
    _hasCheckedHighContrastMode = false;
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _breakpointSubscription;
    constructor() {
      this._breakpointSubscription = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_breakpoints_observer_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.BreakpointObserver).observe('(forced-colors: active)').subscribe(() => {
        if (this._hasCheckedHighContrastMode) {
          this._hasCheckedHighContrastMode = false;
          this._applyBodyHighContrastModeCssClasses();
        }
      });
    }
    getHighContrastMode() {
      if (!this._platform.isBrowser) {
        return HighContrastMode.NONE;
      }
      const testElement = this._document.createElement('div');
      testElement.style.backgroundColor = 'rgb(1,2,3)';
      testElement.style.position = 'absolute';
      this._document.body.appendChild(testElement);
      const documentWindow = this._document.defaultView || window;
      const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
      const computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');
      testElement.remove();
      switch (computedColor) {
        case 'rgb(0,0,0)':
        case 'rgb(45,50,54)':
        case 'rgb(32,32,32)':
          return HighContrastMode.WHITE_ON_BLACK;
        case 'rgb(255,255,255)':
        case 'rgb(255,250,239)':
          return HighContrastMode.BLACK_ON_WHITE;
      }
      return HighContrastMode.NONE;
    }
    ngOnDestroy() {
      this._breakpointSubscription.unsubscribe();
    }
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
      imports: [_observers_mjs__WEBPACK_IMPORTED_MODULE_7__.ObserversModule]
    });
  }
  return A11yModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 6075
/*!***************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_element-chunk.mjs ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _isNumberValue: () => (/* binding */ _isNumberValue),
/* harmony export */   coerceElement: () => (/* binding */ coerceElement),
/* harmony export */   coerceNumberProperty: () => (/* binding */ coerceNumberProperty)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);

function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? elementOrRef.nativeElement : elementOrRef;
}


/***/ },

/***/ 9227
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/private.mjs ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _CdkPrivateStyleLoader: () => (/* reexport safe */ _style_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__._CdkPrivateStyleLoader),
/* harmony export */   _VisuallyHiddenLoader: () => (/* binding */ _VisuallyHiddenLoader),
/* harmony export */   _setInnerHtml: () => (/* binding */ _setInnerHtml),
/* harmony export */   trustedHTMLFromString: () => (/* binding */ trustedHTMLFromString)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _style_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_style-loader-chunk.mjs */ 59504);



let _VisuallyHiddenLoader = /*#__PURE__*/(() => {
  class _VisuallyHiddenLoader {
    static ɵfac = function _VisuallyHiddenLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisuallyHiddenLoader)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
let policy;
function getPolicy() {
  if (policy === undefined) {
    policy = null;
    if (typeof window !== 'undefined') {
      const ttWindow = window;
      if (ttWindow.trustedTypes !== undefined) {
        policy = ttWindow.trustedTypes.createPolicy('angular#components', {
          createHTML: s => s
        });
      }
    }
  }
  return policy;
}
function trustedHTMLFromString(html) {
  return getPolicy()?.createHTML(html) || html;
}
function _setInnerHtml(element, html, sanitizer) {
  const cleanHtml = sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML, html);
  if (cleanHtml === null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
    throw new Error(`Could not sanitize HTML: ${html}`);
  }
  element.innerHTML = trustedHTMLFromString(cleanHtml || '');
}


/***/ },

/***/ 11349
/*!************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_tree-key-manager-chunk.mjs ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TREE_KEY_MANAGER: () => (/* binding */ TREE_KEY_MANAGER),
/* harmony export */   TreeKeyManager: () => (/* binding */ TreeKeyManager)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _typeahead_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_typeahead-chunk.mjs */ 21920);
/* harmony import */ var _coercion_private_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coercion-private.mjs */ 86576);





class TreeKeyManager {
  _activeItemIndex = -1;
  _activeItem = null;
  _shouldActivationFollowFocus = false;
  _horizontalOrientation = 'ltr';
  _skipPredicateFn = _item => false;
  _trackByFn = item => item;
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
    if (activeItem.makeFocusable) {
      this._activeItem?.unfocus();
      this._activeItemIndex = activeIndex;
      this._activeItem = activeItem;
      this._typeahead?.setCurrentSelectedItemIndex(activeIndex);
      activeItem.makeFocusable();
    } else {
      this.focusItem(activeIndex);
    }
    this._hasInitialFocused = true;
  }
  constructor(items, config) {
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
  change = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._typeahead?.destroy();
    this.change.complete();
  }
  onKeydown(event) {
    const key = event.key;
    switch (key) {
      case 'Tab':
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
        return;
    }
    this._typeahead?.reset();
    event.preventDefault();
  }
  getActiveItemIndex() {
    return this._activeItemIndex;
  }
  getActiveItem() {
    return this._activeItem;
  }
  _focusFirstItem() {
    this.focusItem(this._findNextAvailableItemIndex(-1));
  }
  _focusLastItem() {
    this.focusItem(this._findPreviousAvailableItemIndex(this._items.length));
  }
  _focusNextItem() {
    this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex));
  }
  _focusPreviousItem() {
    this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex));
  }
  focusItem(itemOrIndex, options = {}) {
    options.emitChangeEvent ??= true;
    let index = typeof itemOrIndex === 'number' ? itemOrIndex : this._items.findIndex(item => this._trackByFn(item) === this._trackByFn(itemOrIndex));
    if (index < 0 || index >= this._items.length) {
      return;
    }
    const activeItem = this._items[index];
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
    this._typeahead = new _typeahead_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.Typeahead(this._items, {
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
const TREE_KEY_MANAGER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('tree-key-manager', {
  providedIn: 'root',
  factory: () => (items, options) => new TreeKeyManager(items, options)
});


/***/ },

/***/ 21920
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_typeahead-chunk.mjs ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Typeahead: () => (/* binding */ Typeahead)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_keycodes-chunk.mjs */ 97552);



const DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS = 200;
class Typeahead {
  _letterKeyStream = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  _items = [];
  _selectedItemIndex = -1;
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
    if (event.key && event.key.length === 1) {
      this._letterKeyStream.next(event.key.toLocaleUpperCase());
    } else if (keyCode >= _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.A && keyCode <= _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.Z || keyCode >= _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.ZERO && keyCode <= _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.NINE) {
      this._letterKeyStream.next(String.fromCharCode(keyCode));
    }
  }
  isTyping() {
    return this._pressedLetters.length > 0;
  }
  reset() {
    this._pressedLetters = [];
  }
  _setupKeyHandler(typeAheadInterval) {
    this._letterKeyStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(letter => this._pressedLetters.push(letter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.debounceTime)(typeAheadInterval), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(() => this._pressedLetters.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => this._pressedLetters.join('').toLocaleUpperCase())).subscribe(inputString => {
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


/***/ },

/***/ 26306
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_id-generator-chunk.mjs ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _IdGenerator: () => (/* binding */ _IdGenerator)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);


const counters = {};
class _IdGenerator {
  _appId = /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID);
  static _infix = `a${/*#__PURE__*/ /*#__PURE__*/Math.floor(/*#__PURE__*/Math.random() * 100000).toString()}`;
  getId(prefix, randomize = false) {
    if (this._appId !== 'ng') {
      prefix += this._appId;
    }
    if (!counters.hasOwnProperty(prefix)) {
      counters[prefix] = 0;
    }
    return `${prefix}${randomize ? _IdGenerator._infix + '-' : ''}${counters[prefix]++}`;
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
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

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

/***/ 39539
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/observers.mjs ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdkObserveContent: () => (/* binding */ CdkObserveContent),
/* harmony export */   ContentObserver: () => (/* binding */ ContentObserver),
/* harmony export */   MutationObserverFactory: () => (/* binding */ MutationObserverFactory),
/* harmony export */   ObserversModule: () => (/* binding */ ObserversModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _element_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_element-chunk.mjs */ 6075);





function shouldIgnoreRecord(record) {
  if (record.type === 'characterData' && record.target instanceof Comment) {
    return true;
  }
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
  return false;
}
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
let ContentObserver = /*#__PURE__*/(() => {
  class ContentObserver {
    _mutationObserverFactory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MutationObserverFactory);
    _observedElements = new Map();
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    constructor() {}
    ngOnDestroy() {
      this._observedElements.forEach((_, element) => this._cleanupObserver(element));
    }
    observe(elementOrRef) {
      const element = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(elementOrRef);
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
    _unobserveElement(element) {
      if (this._observedElements.has(element)) {
        this._observedElements.get(element).count--;
        if (!this._observedElements.get(element).count) {
          this._cleanupObserver(element);
        }
      }
    }
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
let CdkObserveContent = /*#__PURE__*/(() => {
  class CdkObserveContent {
    _contentObserver = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ContentObserver);
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
      this._disabled ? this._unsubscribe() : this._subscribe();
    }
    _disabled = false;
    get debounce() {
      return this._debounce;
    }
    set debounce(value) {
      this._debounce = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
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


/***/ },

/***/ 47441
/*!************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_list-key-manager-chunk.mjs ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListKeyManager: () => (/* binding */ ListKeyManager)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _typeahead_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_typeahead-chunk.mjs */ 21920);
/* harmony import */ var _keycodes_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keycodes.mjs */ 74879);
/* harmony import */ var _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_keycodes-chunk.mjs */ 97552);





class ListKeyManager {
  _items;
  _activeItemIndex = /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(-1, ...(ngDevMode ? [{
    debugName: "_activeItemIndex"
  }] : []));
  _activeItem = /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
    debugName: "_activeItem"
  }] : []));
  _wrap = false;
  _typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
  _itemChangesSubscription;
  _vertical = true;
  _horizontal = null;
  _allowedModifierKeys = [];
  _homeAndEnd = false;
  _pageUpAndDown = {
    enabled: false,
    delta: 10
  };
  _effectRef;
  _typeahead;
  _skipPredicateFn = item => item.disabled;
  constructor(_items, injector) {
    this._items = _items;
    if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList) {
      this._itemChangesSubscription = _items.changes.subscribe(newItems => this._itemsChanged(newItems.toArray()));
    } else if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isSignal)(_items)) {
      if (!injector && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw new Error('ListKeyManager constructed with a signal must receive an injector');
      }
      this._effectRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => this._itemsChanged(_items()), {
        ...(ngDevMode ? {
          debugName: "_effectRef"
        } : {}),
        injector
      });
    }
  }
  tabOut = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  change = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  withAllowedModifierKeys(keys) {
    this._allowedModifierKeys = keys;
    return this;
  }
  withTypeAhead(debounceInterval = 200) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      const items = this._getItemsArray();
      if (items.length > 0 && items.some(item => typeof item.getLabel !== 'function')) {
        throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
      }
    }
    this._typeaheadSubscription.unsubscribe();
    const items = this._getItemsArray();
    this._typeahead = new _typeahead_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.Typeahead(items, {
      debounceInterval: typeof debounceInterval === 'number' ? debounceInterval : undefined,
      skipPredicate: item => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(item => {
      this.setActiveItem(item);
    });
    return this;
  }
  cancelTypeahead() {
    this._typeahead?.reset();
    return this;
  }
  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }
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
  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
    const isModifierAllowed = modifiers.every(modifier => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });
    switch (keyCode) {
      case _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.TAB:
        this.tabOut.next();
        return;
      case _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.DOWN_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.UP_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.RIGHT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.LEFT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.HOME:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.END:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }
      case _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.PAGE_UP:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex() - this._pageUpAndDown.delta;
          this._setActiveItemByIndex(targetIndex > 0 ? targetIndex : 0, 1);
          break;
        } else {
          return;
        }
      case _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.PAGE_DOWN:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex() + this._pageUpAndDown.delta;
          const itemsLength = this._getItemsArray().length;
          this._setActiveItemByIndex(targetIndex < itemsLength ? targetIndex : itemsLength - 1, -1);
          break;
        } else {
          return;
        }
      default:
        if (isModifierAllowed || (0,_keycodes_mjs__WEBPACK_IMPORTED_MODULE_3__.hasModifierKey)(event, 'shiftKey')) {
          this._typeahead?.handleKey(event);
        }
        return;
    }
    this._typeahead?.reset();
    event.preventDefault();
  }
  get activeItemIndex() {
    return this._activeItemIndex();
  }
  get activeItem() {
    return this._activeItem();
  }
  isTyping() {
    return !!this._typeahead && this._typeahead.isTyping();
  }
  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  setLastItemActive() {
    this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
  }
  setNextItemActive() {
    this._activeItemIndex() < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  setPreviousItemActive() {
    this._activeItemIndex() < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }
  updateActiveItem(item) {
    const itemArray = this._getItemsArray();
    const index = typeof item === 'number' ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index];
    this._activeItem.set(activeItem == null ? null : activeItem);
    this._activeItemIndex.set(index);
    this._typeahead?.setCurrentSelectedItemIndex(index);
  }
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._itemChangesSubscription?.unsubscribe();
    this._effectRef?.destroy();
    this._typeahead?.destroy();
    this.tabOut.complete();
    this.change.complete();
  }
  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
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
  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex() + delta, delta);
  }
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
  _getItemsArray() {
    if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isSignal)(this._items)) {
      return this._items();
    }
    return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList ? this._items.toArray() : this._items;
  }
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


/***/ },

/***/ 59504
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_style-loader-chunk.mjs ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _CdkPrivateStyleLoader: () => (/* binding */ _CdkPrivateStyleLoader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);


const appsWithLoaders = /*#__PURE__*/new WeakMap();
let _CdkPrivateStyleLoader = /*#__PURE__*/(() => {
  class _CdkPrivateStyleLoader {
    _appRef;
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    _environmentInjector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.EnvironmentInjector);
    load(loader) {
      const appRef = this._appRef = this._appRef || this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
      let data = appsWithLoaders.get(appRef);
      if (!data) {
        data = {
          loaders: new Set(),
          refs: []
        };
        appsWithLoaders.set(appRef, data);
        appRef.onDestroy(() => {
          appsWithLoaders.get(appRef)?.refs.forEach(ref => ref.destroy());
          appsWithLoaders.delete(appRef);
        });
      }
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

/***/ 72102
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/a11y.mjs ***!
  \*****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A11yModule: () => (/* reexport safe */ _a11y_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.A11yModule),
/* harmony export */   ActiveDescendantKeyManager: () => (/* reexport safe */ _activedescendant_key_manager_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.ActiveDescendantKeyManager),
/* harmony export */   AriaDescriber: () => (/* binding */ AriaDescriber),
/* harmony export */   CDK_DESCRIBEDBY_HOST_ATTRIBUTE: () => (/* binding */ CDK_DESCRIBEDBY_HOST_ATTRIBUTE),
/* harmony export */   CDK_DESCRIBEDBY_ID_PREFIX: () => (/* binding */ CDK_DESCRIBEDBY_ID_PREFIX),
/* harmony export */   CdkAriaLive: () => (/* reexport safe */ _a11y_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.CdkAriaLive),
/* harmony export */   CdkMonitorFocus: () => (/* reexport safe */ _focus_monitor_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.CdkMonitorFocus),
/* harmony export */   CdkTrapFocus: () => (/* reexport safe */ _a11y_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.CdkTrapFocus),
/* harmony export */   ConfigurableFocusTrap: () => (/* binding */ ConfigurableFocusTrap),
/* harmony export */   ConfigurableFocusTrapFactory: () => (/* binding */ ConfigurableFocusTrapFactory),
/* harmony export */   EventListenerFocusTrapInertStrategy: () => (/* binding */ EventListenerFocusTrapInertStrategy),
/* harmony export */   FOCUS_MONITOR_DEFAULT_OPTIONS: () => (/* reexport safe */ _focus_monitor_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FOCUS_MONITOR_DEFAULT_OPTIONS),
/* harmony export */   FOCUS_TRAP_INERT_STRATEGY: () => (/* binding */ FOCUS_TRAP_INERT_STRATEGY),
/* harmony export */   FocusKeyManager: () => (/* reexport safe */ _focus_key_manager_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.FocusKeyManager),
/* harmony export */   FocusMonitor: () => (/* reexport safe */ _focus_monitor_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FocusMonitor),
/* harmony export */   FocusMonitorDetectionMode: () => (/* reexport safe */ _focus_monitor_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FocusMonitorDetectionMode),
/* harmony export */   FocusTrap: () => (/* reexport safe */ _a11y_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.FocusTrap),
/* harmony export */   FocusTrapFactory: () => (/* reexport safe */ _a11y_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.FocusTrapFactory),
/* harmony export */   HighContrastMode: () => (/* reexport safe */ _a11y_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.HighContrastMode),
/* harmony export */   HighContrastModeDetector: () => (/* reexport safe */ _a11y_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.HighContrastModeDetector),
/* harmony export */   INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS: () => (/* reexport safe */ _focus_monitor_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS),
/* harmony export */   INPUT_MODALITY_DETECTOR_OPTIONS: () => (/* reexport safe */ _focus_monitor_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.INPUT_MODALITY_DETECTOR_OPTIONS),
/* harmony export */   InputModalityDetector: () => (/* reexport safe */ _focus_monitor_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.InputModalityDetector),
/* harmony export */   InteractivityChecker: () => (/* reexport safe */ _a11y_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.InteractivityChecker),
/* harmony export */   IsFocusableConfig: () => (/* reexport safe */ _a11y_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.IsFocusableConfig),
/* harmony export */   LIVE_ANNOUNCER_DEFAULT_OPTIONS: () => (/* reexport safe */ _a11y_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.LIVE_ANNOUNCER_DEFAULT_OPTIONS),
/* harmony export */   LIVE_ANNOUNCER_ELEMENT_TOKEN: () => (/* reexport safe */ _a11y_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.LIVE_ANNOUNCER_ELEMENT_TOKEN),
/* harmony export */   ListKeyManager: () => (/* reexport safe */ _list_key_manager_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__.ListKeyManager),
/* harmony export */   LiveAnnouncer: () => (/* reexport safe */ _a11y_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.LiveAnnouncer),
/* harmony export */   MESSAGES_CONTAINER_ID: () => (/* binding */ MESSAGES_CONTAINER_ID),
/* harmony export */   NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER: () => (/* binding */ NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER),
/* harmony export */   NoopTreeKeyManager: () => (/* binding */ NoopTreeKeyManager),
/* harmony export */   TREE_KEY_MANAGER: () => (/* reexport safe */ _tree_key_manager_chunk_mjs__WEBPACK_IMPORTED_MODULE_11__.TREE_KEY_MANAGER),
/* harmony export */   TreeKeyManager: () => (/* reexport safe */ _tree_key_manager_chunk_mjs__WEBPACK_IMPORTED_MODULE_11__.TreeKeyManager),
/* harmony export */   _IdGenerator: () => (/* reexport safe */ _id_generator_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__._IdGenerator),
/* harmony export */   addAriaReferencedId: () => (/* binding */ addAriaReferencedId),
/* harmony export */   getAriaReferenceIds: () => (/* binding */ getAriaReferenceIds),
/* harmony export */   isFakeMousedownFromScreenReader: () => (/* reexport safe */ _fake_event_detection_chunk_mjs__WEBPACK_IMPORTED_MODULE_12__.isFakeMousedownFromScreenReader),
/* harmony export */   isFakeTouchstartFromScreenReader: () => (/* reexport safe */ _fake_event_detection_chunk_mjs__WEBPACK_IMPORTED_MODULE_12__.isFakeTouchstartFromScreenReader),
/* harmony export */   removeAriaReferencedId: () => (/* binding */ removeAriaReferencedId)
/* harmony export */ });
/* harmony import */ var _focus_monitor_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_focus-monitor-chunk.mjs */ 76522);
/* harmony import */ var _a11y_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_a11y-module-chunk.mjs */ 5642);
/* harmony import */ var _id_generator_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_id-generator-chunk.mjs */ 26306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_platform-chunk.mjs */ 98508);
/* harmony import */ var _style_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_style-loader-chunk.mjs */ 59504);
/* harmony import */ var _private_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./private.mjs */ 9227);
/* harmony import */ var _activedescendant_key_manager_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_activedescendant-key-manager-chunk.mjs */ 77022);
/* harmony import */ var _focus_key_manager_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_focus-key-manager-chunk.mjs */ 2903);
/* harmony import */ var _list_key_manager_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_list-key-manager-chunk.mjs */ 47441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _tree_key_manager_chunk_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_tree-key-manager-chunk.mjs */ 11349);
/* harmony import */ var _fake_event_detection_chunk_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_fake-event-detection-chunk.mjs */ 90603);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 2649);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 11674);





























const ID_DELIMITER = ' ';
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some(existingId => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
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
function getAriaReferenceIds(el, attr) {
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}
const MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
const CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
const CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
let nextId = 0;
let AriaDescriber = /*#__PURE__*/(() => {
  class AriaDescriber {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.Platform);
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT);
    _messageRegistry = new Map();
    _messagesContainer = null;
    _id = `${nextId++}`;
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_style_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__._CdkPrivateStyleLoader).load(_private_mjs__WEBPACK_IMPORTED_MODULE_6__._VisuallyHiddenLoader);
      this._id = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.APP_ID) + '-' + nextId++;
    }
    describe(hostElement, message, role) {
      if (!this._canBeDescribed(hostElement, message)) {
        return;
      }
      const key = getKey(message, role);
      if (typeof message !== 'string') {
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
    _deleteMessageElement(key) {
      this._messageRegistry.get(key)?.messageElement?.remove();
      this._messageRegistry.delete(key);
    }
    _createMessagesContainer() {
      if (this._messagesContainer) {
        return;
      }
      const containerClassName = 'cdk-describedby-message-container';
      const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
      for (let i = 0; i < serverContainers.length; i++) {
        serverContainers[i].remove();
      }
      const messagesContainer = this._document.createElement('div');
      messagesContainer.style.visibility = 'hidden';
      messagesContainer.classList.add(containerClassName);
      messagesContainer.classList.add('cdk-visually-hidden');
      if (!this._platform.isBrowser) {
        messagesContainer.setAttribute('platform', 'server');
      }
      this._document.body.appendChild(messagesContainer);
      this._messagesContainer = messagesContainer;
    }
    _removeCdkDescribedByReferenceIds(element) {
      const originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(id => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
      element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
    }
    _addMessageReference(element, key) {
      const registeredMessage = this._messageRegistry.get(key);
      addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
      element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
      registeredMessage.referenceCount++;
    }
    _removeMessageReference(element, key) {
      const registeredMessage = this._messageRegistry.get(key);
      registeredMessage.referenceCount--;
      removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
      element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    _isElementDescribedByMessage(element, key) {
      const referenceIds = getAriaReferenceIds(element, 'aria-describedby');
      const registeredMessage = this._messageRegistry.get(key);
      const messageId = registeredMessage && registeredMessage.messageElement.id;
      return !!messageId && referenceIds.indexOf(messageId) != -1;
    }
    _canBeDescribed(element, message) {
      if (!this._isElementNode(element)) {
        return false;
      }
      if (message && typeof message === 'object') {
        return true;
      }
      const trimmedMessage = message == null ? '' : `${message}`.trim();
      const ariaLabel = element.getAttribute('aria-label');
      return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
    }
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
function getKey(message, role) {
  return typeof message === 'string' ? `${role || ''}/${message}` : message;
}
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}
class NoopTreeKeyManager {
  _isNoopTreeKeyManager = true;
  change = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
  destroy() {
    this.change.complete();
  }
  onKeydown() {}
  getActiveItemIndex() {
    return null;
  }
  getActiveItem() {
    return null;
  }
  focusItem() {}
}
const NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER = {
  provide: _tree_key_manager_chunk_mjs__WEBPACK_IMPORTED_MODULE_11__.TREE_KEY_MANAGER,
  useFactory: () => () => new NoopTreeKeyManager()
};
class ConfigurableFocusTrap extends _a11y_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.FocusTrap {
  _focusTrapManager;
  _inertStrategy;
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
  destroy() {
    this._focusTrapManager.deregister(this);
    super.destroy();
  }
  _enable() {
    this._inertStrategy.preventFocus(this);
    this.toggleAnchors(true);
  }
  _disable() {
    this._inertStrategy.allowFocus(this);
    this.toggleAnchors(false);
  }
}
class EventListenerFocusTrapInertStrategy {
  _listener = null;
  preventFocus(focusTrap) {
    if (this._listener) {
      focusTrap._document.removeEventListener('focus', this._listener, true);
    }
    this._listener = e => this._trapFocus(focusTrap, e);
    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener('focus', this._listener, true);
    });
  }
  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }
    focusTrap._document.removeEventListener('focus', this._listener, true);
    this._listener = null;
  }
  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element;
    if (target && !focusTrapRoot.contains(target) && !target.closest?.('div.cdk-overlay-pane')) {
      setTimeout(() => {
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }
}
const FOCUS_TRAP_INERT_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('FOCUS_TRAP_INERT_STRATEGY');
let FocusTrapManager = /*#__PURE__*/(() => {
  class FocusTrapManager {
    _focusTrapStack = [];
    register(focusTrap) {
      this._focusTrapStack = this._focusTrapStack.filter(ft => ft !== focusTrap);
      let stack = this._focusTrapStack;
      if (stack.length) {
        stack[stack.length - 1]._disable();
      }
      stack.push(focusTrap);
      focusTrap._enable();
    }
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
let ConfigurableFocusTrapFactory = /*#__PURE__*/(() => {
  class ConfigurableFocusTrapFactory {
    _checker = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_a11y_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.InteractivityChecker);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone);
    _focusTrapManager = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(FocusTrapManager);
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT);
    _inertStrategy;
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector);
    constructor() {
      const inertStrategy = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(FOCUS_TRAP_INERT_STRATEGY, {
        optional: true
      });
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


/***/ },

/***/ 74879
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/keycodes.mjs ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   ALT: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ALT),
/* harmony export */   APOSTROPHE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.APOSTROPHE),
/* harmony export */   AT_SIGN: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.AT_SIGN),
/* harmony export */   B: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   BACKSLASH: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.BACKSLASH),
/* harmony export */   BACKSPACE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.BACKSPACE),
/* harmony export */   C: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   CAPS_LOCK: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.CAPS_LOCK),
/* harmony export */   CLOSE_SQUARE_BRACKET: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.CLOSE_SQUARE_BRACKET),
/* harmony export */   COMMA: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.COMMA),
/* harmony export */   CONTEXT_MENU: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.CONTEXT_MENU),
/* harmony export */   CONTROL: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.CONTROL),
/* harmony export */   D: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   DASH: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.DASH),
/* harmony export */   DELETE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.DELETE),
/* harmony export */   DOWN_ARROW: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.DOWN_ARROW),
/* harmony export */   E: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   EIGHT: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.EIGHT),
/* harmony export */   END: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.END),
/* harmony export */   ENTER: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ENTER),
/* harmony export */   EQUALS: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.EQUALS),
/* harmony export */   ESCAPE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ESCAPE),
/* harmony export */   F: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   F1: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F1),
/* harmony export */   F10: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F10),
/* harmony export */   F11: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F11),
/* harmony export */   F12: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F12),
/* harmony export */   F2: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F2),
/* harmony export */   F3: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F3),
/* harmony export */   F4: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F4),
/* harmony export */   F5: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F5),
/* harmony export */   F6: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F6),
/* harmony export */   F7: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F7),
/* harmony export */   F8: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F8),
/* harmony export */   F9: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F9),
/* harmony export */   FF_EQUALS: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FF_EQUALS),
/* harmony export */   FF_MINUS: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FF_MINUS),
/* harmony export */   FF_MUTE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FF_MUTE),
/* harmony export */   FF_SEMICOLON: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FF_SEMICOLON),
/* harmony export */   FF_VOLUME_DOWN: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FF_VOLUME_DOWN),
/* harmony export */   FF_VOLUME_UP: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FF_VOLUME_UP),
/* harmony export */   FIRST_MEDIA: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FIRST_MEDIA),
/* harmony export */   FIVE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FIVE),
/* harmony export */   FOUR: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FOUR),
/* harmony export */   G: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   H: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   HOME: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HOME),
/* harmony export */   I: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   INSERT: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.INSERT),
/* harmony export */   J: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   K: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   L: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   LAST_MEDIA: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.LAST_MEDIA),
/* harmony export */   LEFT_ARROW: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.LEFT_ARROW),
/* harmony export */   M: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   MAC_ENTER: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAC_ENTER),
/* harmony export */   MAC_META: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAC_META),
/* harmony export */   MAC_WK_CMD_LEFT: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAC_WK_CMD_LEFT),
/* harmony export */   MAC_WK_CMD_RIGHT: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAC_WK_CMD_RIGHT),
/* harmony export */   META: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.META),
/* harmony export */   MUTE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MUTE),
/* harmony export */   N: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   NINE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NINE),
/* harmony export */   NUMPAD_DIVIDE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_DIVIDE),
/* harmony export */   NUMPAD_EIGHT: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_EIGHT),
/* harmony export */   NUMPAD_FIVE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_FIVE),
/* harmony export */   NUMPAD_FOUR: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_FOUR),
/* harmony export */   NUMPAD_MINUS: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_MINUS),
/* harmony export */   NUMPAD_MULTIPLY: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_MULTIPLY),
/* harmony export */   NUMPAD_NINE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_NINE),
/* harmony export */   NUMPAD_ONE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_ONE),
/* harmony export */   NUMPAD_PERIOD: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_PERIOD),
/* harmony export */   NUMPAD_PLUS: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_PLUS),
/* harmony export */   NUMPAD_SEVEN: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_SEVEN),
/* harmony export */   NUMPAD_SIX: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_SIX),
/* harmony export */   NUMPAD_THREE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_THREE),
/* harmony export */   NUMPAD_TWO: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_TWO),
/* harmony export */   NUMPAD_ZERO: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_ZERO),
/* harmony export */   NUM_CENTER: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUM_CENTER),
/* harmony export */   NUM_LOCK: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUM_LOCK),
/* harmony export */   O: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   ONE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ONE),
/* harmony export */   OPEN_SQUARE_BRACKET: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.OPEN_SQUARE_BRACKET),
/* harmony export */   P: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   PAGE_DOWN: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.PAGE_DOWN),
/* harmony export */   PAGE_UP: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.PAGE_UP),
/* harmony export */   PAUSE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.PAUSE),
/* harmony export */   PERIOD: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.PERIOD),
/* harmony export */   PLUS_SIGN: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.PLUS_SIGN),
/* harmony export */   PRINT_SCREEN: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.PRINT_SCREEN),
/* harmony export */   Q: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.Q),
/* harmony export */   QUESTION_MARK: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.QUESTION_MARK),
/* harmony export */   R: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   RIGHT_ARROW: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.RIGHT_ARROW),
/* harmony export */   S: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   SCROLL_LOCK: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SCROLL_LOCK),
/* harmony export */   SEMICOLON: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SEMICOLON),
/* harmony export */   SEVEN: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SEVEN),
/* harmony export */   SHIFT: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SHIFT),
/* harmony export */   SINGLE_QUOTE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SINGLE_QUOTE),
/* harmony export */   SIX: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SIX),
/* harmony export */   SLASH: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SLASH),
/* harmony export */   SPACE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SPACE),
/* harmony export */   T: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.T),
/* harmony export */   TAB: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.TAB),
/* harmony export */   THREE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.THREE),
/* harmony export */   TILDE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.TILDE),
/* harmony export */   TWO: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.TWO),
/* harmony export */   U: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   UP_ARROW: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.UP_ARROW),
/* harmony export */   V: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   VOLUME_DOWN: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.VOLUME_DOWN),
/* harmony export */   VOLUME_UP: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.VOLUME_UP),
/* harmony export */   W: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   X: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.X),
/* harmony export */   Y: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.Y),
/* harmony export */   Z: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   ZERO: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ZERO),
/* harmony export */   hasModifierKey: () => (/* binding */ hasModifierKey)
/* harmony export */ });
/* harmony import */ var _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_keycodes-chunk.mjs */ 97552);

function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some(modifier => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}


/***/ },

/***/ 76522
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_focus-monitor-chunk.mjs ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdkMonitorFocus: () => (/* binding */ CdkMonitorFocus),
/* harmony export */   FOCUS_MONITOR_DEFAULT_OPTIONS: () => (/* binding */ FOCUS_MONITOR_DEFAULT_OPTIONS),
/* harmony export */   FocusMonitor: () => (/* binding */ FocusMonitor),
/* harmony export */   FocusMonitorDetectionMode: () => (/* binding */ FocusMonitorDetectionMode),
/* harmony export */   INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS: () => (/* binding */ INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS),
/* harmony export */   INPUT_MODALITY_DETECTOR_OPTIONS: () => (/* binding */ INPUT_MODALITY_DETECTOR_OPTIONS),
/* harmony export */   InputModalityDetector: () => (/* binding */ InputModalityDetector)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _fake_event_detection_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_fake-event-detection-chunk.mjs */ 90603);
/* harmony import */ var _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_keycodes-chunk.mjs */ 97552);
/* harmony import */ var _shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_shadow-dom-chunk.mjs */ 68310);
/* harmony import */ var _platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_platform-chunk.mjs */ 98508);
/* harmony import */ var _passive_listeners_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_passive-listeners-chunk.mjs */ 82548);
/* harmony import */ var _element_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_element-chunk.mjs */ 6075);










const INPUT_MODALITY_DETECTOR_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-input-modality-detector-options');
const INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [_keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.ALT, _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.CONTROL, _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.MAC_META, _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.META, _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.SHIFT]
};
const TOUCH_BUFFER_MS = 650;
const modalityEventListenerOptions = {
  passive: true,
  capture: true
};
let InputModalityDetector = /*#__PURE__*/(() => {
  class InputModalityDetector {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.Platform);
    _listenerCleanups;
    modalityDetected;
    modalityChanged;
    get mostRecentModality() {
      return this._modality.value;
    }
    _mostRecentTarget = null;
    _modality = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    _options;
    _lastTouchMs = 0;
    _onKeydown = event => {
      if (this._options?.ignoreKeys?.some(keyCode => keyCode === event.keyCode)) {
        return;
      }
      this._modality.next('keyboard');
      this._mostRecentTarget = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__._getEventTarget)(event);
    };
    _onMousedown = event => {
      if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
        return;
      }
      this._modality.next((0,_fake_event_detection_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.isFakeMousedownFromScreenReader)(event) ? 'keyboard' : 'mouse');
      this._mostRecentTarget = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__._getEventTarget)(event);
    };
    _onTouchstart = event => {
      if ((0,_fake_event_detection_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.isFakeTouchstartFromScreenReader)(event)) {
        this._modality.next('keyboard');
        return;
      }
      this._lastTouchMs = Date.now();
      this._modality.next('touch');
      this._mostRecentTarget = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__._getEventTarget)(event);
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
      this.modalityDetected = this._modality.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.skip)(1));
      this.modalityChanged = this.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)());
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
var FocusMonitorDetectionMode = /*#__PURE__*/function (FocusMonitorDetectionMode) {
  FocusMonitorDetectionMode[FocusMonitorDetectionMode["IMMEDIATE"] = 0] = "IMMEDIATE";
  FocusMonitorDetectionMode[FocusMonitorDetectionMode["EVENTUAL"] = 1] = "EVENTUAL";
  return FocusMonitorDetectionMode;
}(FocusMonitorDetectionMode || {});
const FOCUS_MONITOR_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-focus-monitor-default-options');
const captureEventListenerOptions = /*#__PURE__*/(0,_passive_listeners_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
let FocusMonitor = /*#__PURE__*/(() => {
  class FocusMonitor {
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.Platform);
    _inputModalityDetector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(InputModalityDetector);
    _origin = null;
    _lastFocusOrigin = null;
    _windowFocused = false;
    _windowFocusTimeoutId;
    _originTimeoutId;
    _originFromTouchInteraction = false;
    _elementInfo = new Map();
    _monitoredElementCount = 0;
    _rootNodeFocusListenerCount = new Map();
    _detectionMode;
    _windowFocusListener = () => {
      this._windowFocused = true;
      this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = false);
    };
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _stopInputModalityDetector = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    constructor() {
      const options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(FOCUS_MONITOR_DEFAULT_OPTIONS, {
        optional: true
      });
      this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
    }
    _rootNodeFocusAndBlurListener = event => {
      const target = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__._getEventTarget)(event);
      for (let element = target; element; element = element.parentElement) {
        if (event.type === 'focus') {
          this._onFocus(event, element);
        } else {
          this._onBlur(event, element);
        }
      }
    };
    monitor(element, checkChildren = false) {
      const nativeElement = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.coerceElement)(element);
      if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)();
      }
      const rootNode = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__._getShadowRoot)(nativeElement) || this._document;
      const cachedInfo = this._elementInfo.get(nativeElement);
      if (cachedInfo) {
        if (checkChildren) {
          cachedInfo.checkChildren = true;
        }
        return cachedInfo.subject;
      }
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
      const nativeElement = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.coerceElement)(element);
      const elementInfo = this._elementInfo.get(nativeElement);
      if (elementInfo) {
        elementInfo.subject.complete();
        this._setClasses(nativeElement);
        this._elementInfo.delete(nativeElement);
        this._removeGlobalListeners(elementInfo);
      }
    }
    focusVia(element, origin, options) {
      const nativeElement = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.coerceElement)(element);
      const focusedElement = this._document.activeElement;
      if (nativeElement === focusedElement) {
        this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
      } else {
        this._setOrigin(origin);
        if (typeof nativeElement.focus === 'function') {
          nativeElement.focus(options);
        }
      }
    }
    ngOnDestroy() {
      this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
    }
    _getWindow() {
      return this._document.defaultView || window;
    }
    _getFocusOrigin(focusEventTarget) {
      if (this._origin) {
        if (this._originFromTouchInteraction) {
          return this._shouldBeAttributedToTouch(focusEventTarget) ? 'touch' : 'program';
        } else {
          return this._origin;
        }
      }
      if (this._windowFocused && this._lastFocusOrigin) {
        return this._lastFocusOrigin;
      }
      if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
        return 'mouse';
      }
      return 'program';
    }
    _shouldBeAttributedToTouch(focusEventTarget) {
      return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
    }
    _setClasses(element, origin) {
      element.classList.toggle('cdk-focused', !!origin);
      element.classList.toggle('cdk-touch-focused', origin === 'touch');
      element.classList.toggle('cdk-keyboard-focused', origin === 'keyboard');
      element.classList.toggle('cdk-mouse-focused', origin === 'mouse');
      element.classList.toggle('cdk-program-focused', origin === 'program');
    }
    _setOrigin(origin, isFromInteraction = false) {
      this._ngZone.runOutsideAngular(() => {
        this._origin = origin;
        this._originFromTouchInteraction = origin === 'touch' && isFromInteraction;
        if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
          clearTimeout(this._originTimeoutId);
          const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
          this._originTimeoutId = setTimeout(() => this._origin = null, ms);
        }
      });
    }
    _onFocus(event, element) {
      const elementInfo = this._elementInfo.get(element);
      const focusEventTarget = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__._getEventTarget)(event);
      if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
        return;
      }
      this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
    }
    _onBlur(event, element) {
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
      if (++this._monitoredElementCount === 1) {
        this._ngZone.runOutsideAngular(() => {
          const window = this._getWindow();
          window.addEventListener('focus', this._windowFocusListener);
        });
        this._inputModalityDetector.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this._stopInputModalityDetector)).subscribe(modality => {
          this._setOrigin(modality, true);
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
      if (! --this._monitoredElementCount) {
        const window = this._getWindow();
        window.removeEventListener('focus', this._windowFocusListener);
        this._stopInputModalityDetector.next();
        clearTimeout(this._windowFocusTimeoutId);
        clearTimeout(this._originTimeoutId);
      }
    }
    _originChanged(element, origin, elementInfo) {
      this._setClasses(element, origin);
      this._emitOrigin(elementInfo, origin);
      this._lastFocusOrigin = origin;
    }
    _getClosestElementsInfo(element) {
      const results = [];
      this._elementInfo.forEach((info, currentElement) => {
        if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
          results.push([currentElement, info]);
        }
      });
      return results;
    }
    _isLastInteractionFromInputLabel(focusEventTarget) {
      const {
        _mostRecentTarget: mostRecentTarget,
        mostRecentModality
      } = this._inputModalityDetector;
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
      this._monitorSubscription?.unsubscribe();
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


/***/ },

/***/ 77022
/*!************************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_activedescendant-key-manager-chunk.mjs ***!
  \************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveDescendantKeyManager: () => (/* binding */ ActiveDescendantKeyManager)
/* harmony export */ });
/* harmony import */ var _list_key_manager_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_list-key-manager-chunk.mjs */ 47441);

class ActiveDescendantKeyManager extends _list_key_manager_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ListKeyManager {
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

/***/ 86576
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/coercion-private.mjs ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coerceObservable: () => (/* binding */ coerceObservable)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44866);

function coerceObservable(data) {
  if (!(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.isObservable)(data)) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(data);
  }
  return data;
}


/***/ },

/***/ 90603
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_fake-event-detection-chunk.mjs ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFakeMousedownFromScreenReader: () => (/* binding */ isFakeMousedownFromScreenReader),
/* harmony export */   isFakeTouchstartFromScreenReader: () => (/* binding */ isFakeTouchstartFromScreenReader)
/* harmony export */ });
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}


/***/ },

/***/ 97552
/*!****************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_keycodes-chunk.mjs ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ A),
/* harmony export */   ALT: () => (/* binding */ ALT),
/* harmony export */   APOSTROPHE: () => (/* binding */ APOSTROPHE),
/* harmony export */   AT_SIGN: () => (/* binding */ AT_SIGN),
/* harmony export */   B: () => (/* binding */ B),
/* harmony export */   BACKSLASH: () => (/* binding */ BACKSLASH),
/* harmony export */   BACKSPACE: () => (/* binding */ BACKSPACE),
/* harmony export */   C: () => (/* binding */ C),
/* harmony export */   CAPS_LOCK: () => (/* binding */ CAPS_LOCK),
/* harmony export */   CLOSE_SQUARE_BRACKET: () => (/* binding */ CLOSE_SQUARE_BRACKET),
/* harmony export */   COMMA: () => (/* binding */ COMMA),
/* harmony export */   CONTEXT_MENU: () => (/* binding */ CONTEXT_MENU),
/* harmony export */   CONTROL: () => (/* binding */ CONTROL),
/* harmony export */   D: () => (/* binding */ D),
/* harmony export */   DASH: () => (/* binding */ DASH),
/* harmony export */   DELETE: () => (/* binding */ DELETE),
/* harmony export */   DOWN_ARROW: () => (/* binding */ DOWN_ARROW),
/* harmony export */   E: () => (/* binding */ E),
/* harmony export */   EIGHT: () => (/* binding */ EIGHT),
/* harmony export */   END: () => (/* binding */ END),
/* harmony export */   ENTER: () => (/* binding */ ENTER),
/* harmony export */   EQUALS: () => (/* binding */ EQUALS),
/* harmony export */   ESCAPE: () => (/* binding */ ESCAPE),
/* harmony export */   F: () => (/* binding */ F),
/* harmony export */   F1: () => (/* binding */ F1),
/* harmony export */   F10: () => (/* binding */ F10),
/* harmony export */   F11: () => (/* binding */ F11),
/* harmony export */   F12: () => (/* binding */ F12),
/* harmony export */   F2: () => (/* binding */ F2),
/* harmony export */   F3: () => (/* binding */ F3),
/* harmony export */   F4: () => (/* binding */ F4),
/* harmony export */   F5: () => (/* binding */ F5),
/* harmony export */   F6: () => (/* binding */ F6),
/* harmony export */   F7: () => (/* binding */ F7),
/* harmony export */   F8: () => (/* binding */ F8),
/* harmony export */   F9: () => (/* binding */ F9),
/* harmony export */   FF_EQUALS: () => (/* binding */ FF_EQUALS),
/* harmony export */   FF_MINUS: () => (/* binding */ FF_MINUS),
/* harmony export */   FF_MUTE: () => (/* binding */ FF_MUTE),
/* harmony export */   FF_SEMICOLON: () => (/* binding */ FF_SEMICOLON),
/* harmony export */   FF_VOLUME_DOWN: () => (/* binding */ FF_VOLUME_DOWN),
/* harmony export */   FF_VOLUME_UP: () => (/* binding */ FF_VOLUME_UP),
/* harmony export */   FIRST_MEDIA: () => (/* binding */ FIRST_MEDIA),
/* harmony export */   FIVE: () => (/* binding */ FIVE),
/* harmony export */   FOUR: () => (/* binding */ FOUR),
/* harmony export */   G: () => (/* binding */ G),
/* harmony export */   H: () => (/* binding */ H),
/* harmony export */   HOME: () => (/* binding */ HOME),
/* harmony export */   I: () => (/* binding */ I),
/* harmony export */   INSERT: () => (/* binding */ INSERT),
/* harmony export */   J: () => (/* binding */ J),
/* harmony export */   K: () => (/* binding */ K),
/* harmony export */   L: () => (/* binding */ L),
/* harmony export */   LAST_MEDIA: () => (/* binding */ LAST_MEDIA),
/* harmony export */   LEFT_ARROW: () => (/* binding */ LEFT_ARROW),
/* harmony export */   M: () => (/* binding */ M),
/* harmony export */   MAC_ENTER: () => (/* binding */ MAC_ENTER),
/* harmony export */   MAC_META: () => (/* binding */ MAC_META),
/* harmony export */   MAC_WK_CMD_LEFT: () => (/* binding */ MAC_WK_CMD_LEFT),
/* harmony export */   MAC_WK_CMD_RIGHT: () => (/* binding */ MAC_WK_CMD_RIGHT),
/* harmony export */   META: () => (/* binding */ META),
/* harmony export */   MUTE: () => (/* binding */ MUTE),
/* harmony export */   N: () => (/* binding */ N),
/* harmony export */   NINE: () => (/* binding */ NINE),
/* harmony export */   NUMPAD_DIVIDE: () => (/* binding */ NUMPAD_DIVIDE),
/* harmony export */   NUMPAD_EIGHT: () => (/* binding */ NUMPAD_EIGHT),
/* harmony export */   NUMPAD_FIVE: () => (/* binding */ NUMPAD_FIVE),
/* harmony export */   NUMPAD_FOUR: () => (/* binding */ NUMPAD_FOUR),
/* harmony export */   NUMPAD_MINUS: () => (/* binding */ NUMPAD_MINUS),
/* harmony export */   NUMPAD_MULTIPLY: () => (/* binding */ NUMPAD_MULTIPLY),
/* harmony export */   NUMPAD_NINE: () => (/* binding */ NUMPAD_NINE),
/* harmony export */   NUMPAD_ONE: () => (/* binding */ NUMPAD_ONE),
/* harmony export */   NUMPAD_PERIOD: () => (/* binding */ NUMPAD_PERIOD),
/* harmony export */   NUMPAD_PLUS: () => (/* binding */ NUMPAD_PLUS),
/* harmony export */   NUMPAD_SEVEN: () => (/* binding */ NUMPAD_SEVEN),
/* harmony export */   NUMPAD_SIX: () => (/* binding */ NUMPAD_SIX),
/* harmony export */   NUMPAD_THREE: () => (/* binding */ NUMPAD_THREE),
/* harmony export */   NUMPAD_TWO: () => (/* binding */ NUMPAD_TWO),
/* harmony export */   NUMPAD_ZERO: () => (/* binding */ NUMPAD_ZERO),
/* harmony export */   NUM_CENTER: () => (/* binding */ NUM_CENTER),
/* harmony export */   NUM_LOCK: () => (/* binding */ NUM_LOCK),
/* harmony export */   O: () => (/* binding */ O),
/* harmony export */   ONE: () => (/* binding */ ONE),
/* harmony export */   OPEN_SQUARE_BRACKET: () => (/* binding */ OPEN_SQUARE_BRACKET),
/* harmony export */   P: () => (/* binding */ P),
/* harmony export */   PAGE_DOWN: () => (/* binding */ PAGE_DOWN),
/* harmony export */   PAGE_UP: () => (/* binding */ PAGE_UP),
/* harmony export */   PAUSE: () => (/* binding */ PAUSE),
/* harmony export */   PERIOD: () => (/* binding */ PERIOD),
/* harmony export */   PLUS_SIGN: () => (/* binding */ PLUS_SIGN),
/* harmony export */   PRINT_SCREEN: () => (/* binding */ PRINT_SCREEN),
/* harmony export */   Q: () => (/* binding */ Q),
/* harmony export */   QUESTION_MARK: () => (/* binding */ QUESTION_MARK),
/* harmony export */   R: () => (/* binding */ R),
/* harmony export */   RIGHT_ARROW: () => (/* binding */ RIGHT_ARROW),
/* harmony export */   S: () => (/* binding */ S),
/* harmony export */   SCROLL_LOCK: () => (/* binding */ SCROLL_LOCK),
/* harmony export */   SEMICOLON: () => (/* binding */ SEMICOLON),
/* harmony export */   SEVEN: () => (/* binding */ SEVEN),
/* harmony export */   SHIFT: () => (/* binding */ SHIFT),
/* harmony export */   SINGLE_QUOTE: () => (/* binding */ SINGLE_QUOTE),
/* harmony export */   SIX: () => (/* binding */ SIX),
/* harmony export */   SLASH: () => (/* binding */ SLASH),
/* harmony export */   SPACE: () => (/* binding */ SPACE),
/* harmony export */   T: () => (/* binding */ T),
/* harmony export */   TAB: () => (/* binding */ TAB),
/* harmony export */   THREE: () => (/* binding */ THREE),
/* harmony export */   TILDE: () => (/* binding */ TILDE),
/* harmony export */   TWO: () => (/* binding */ TWO),
/* harmony export */   U: () => (/* binding */ U),
/* harmony export */   UP_ARROW: () => (/* binding */ UP_ARROW),
/* harmony export */   V: () => (/* binding */ V),
/* harmony export */   VOLUME_DOWN: () => (/* binding */ VOLUME_DOWN),
/* harmony export */   VOLUME_UP: () => (/* binding */ VOLUME_UP),
/* harmony export */   W: () => (/* binding */ W),
/* harmony export */   X: () => (/* binding */ X),
/* harmony export */   Y: () => (/* binding */ Y),
/* harmony export */   Z: () => (/* binding */ Z),
/* harmony export */   ZERO: () => (/* binding */ ZERO)
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
const FF_SEMICOLON = 59;
const FF_EQUALS = 61;
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
const META = 91;
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
const MUTE = 173;
const VOLUME_DOWN = 174;
const VOLUME_UP = 175;
const FF_MUTE = 181;
const FF_VOLUME_DOWN = 182;
const LAST_MEDIA = 183;
const FF_VOLUME_UP = 183;
const SEMICOLON = 186;
const EQUALS = 187;
const COMMA = 188;
const DASH = 189;
const PERIOD = 190;
const SLASH = 191;
const APOSTROPHE = 192;
const TILDE = 192;
const OPEN_SQUARE_BRACKET = 219;
const BACKSLASH = 220;
const CLOSE_SQUARE_BRACKET = 221;
const SINGLE_QUOTE = 222;
const MAC_META = 224;


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
//# sourceMappingURL=9721.js.map