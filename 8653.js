(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[8653],{

/***/ 17828
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_ripple-chunk.mjs ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_RIPPLE_GLOBAL_OPTIONS: () => (/* binding */ MAT_RIPPLE_GLOBAL_OPTIONS),
/* harmony export */   MatRipple: () => (/* binding */ MatRipple),
/* harmony export */   RippleRef: () => (/* binding */ RippleRef),
/* harmony export */   RippleRenderer: () => (/* binding */ RippleRenderer),
/* harmony export */   RippleState: () => (/* binding */ RippleState),
/* harmony export */   defaultRippleAnimationConfig: () => (/* binding */ defaultRippleAnimationConfig)
/* harmony export */ });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ 86456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 45562);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 32298);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/private */ 74418);
/* harmony import */ var _animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_animation-chunk.mjs */ 87432);







var RippleState = /*#__PURE__*/function (RippleState) {
  RippleState[RippleState["FADING_IN"] = 0] = "FADING_IN";
  RippleState[RippleState["VISIBLE"] = 1] = "VISIBLE";
  RippleState[RippleState["FADING_OUT"] = 2] = "FADING_OUT";
  RippleState[RippleState["HIDDEN"] = 3] = "HIDDEN";
  return RippleState;
}(RippleState || {});
class RippleRef {
  _renderer;
  element;
  config;
  _animationForciblyDisabledThroughCss;
  state = RippleState.HIDDEN;
  constructor(_renderer, element, config, _animationForciblyDisabledThroughCss = false) {
    this._renderer = _renderer;
    this.element = element;
    this.config = config;
    this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
  }
  fadeOut() {
    this._renderer.fadeOutRipple(this);
  }
}
const passiveCapturingEventOptions$1 = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
class RippleEventManager {
  _events = /*#__PURE__*/new Map();
  addHandler(ngZone, name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (handlersForEvent) {
      const handlersForElement = handlersForEvent.get(element);
      if (handlersForElement) {
        handlersForElement.add(handler);
      } else {
        handlersForEvent.set(element, new Set([handler]));
      }
    } else {
      this._events.set(name, new Map([[element, new Set([handler])]]));
      ngZone.runOutsideAngular(() => {
        document.addEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
      });
    }
  }
  removeHandler(name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (!handlersForEvent) {
      return;
    }
    const handlersForElement = handlersForEvent.get(element);
    if (!handlersForElement) {
      return;
    }
    handlersForElement.delete(handler);
    if (handlersForElement.size === 0) {
      handlersForEvent.delete(element);
    }
    if (handlersForEvent.size === 0) {
      this._events.delete(name);
      document.removeEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
    }
  }
  _delegateEventHandler = event => {
    const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event);
    if (target) {
      this._events.get(event.type)?.forEach((handlers, element) => {
        if (element === target || element.contains(target)) {
          handlers.forEach(handler => handler.handleEvent(event));
        }
      });
    }
  };
}
const defaultRippleAnimationConfig = {
  enterDuration: 225,
  exitDuration: 150
};
const ignoreMouseEventsTimeout = 800;
const passiveCapturingEventOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
const pointerDownEvents = ['mousedown', 'touchstart'];
const pointerUpEvents = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
let _MatRippleStylesLoader = /*#__PURE__*/(() => {
  class _MatRippleStylesLoader {
    static ɵfac = function _MatRippleStylesLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatRippleStylesLoader)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: _MatRippleStylesLoader,
      selectors: [["ng-component"]],
      hostAttrs: ["mat-ripple-style-loader", ""],
      decls: 0,
      vars: 0,
      template: function _MatRippleStylesLoader_Template(rf, ctx) {},
      styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return _MatRippleStylesLoader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class RippleRenderer {
  _target;
  _ngZone;
  _platform;
  _containerElement;
  _triggerElement = null;
  _isPointerDown = false;
  _activeRipples = /*#__PURE__*/new Map();
  _mostRecentTransientRipple = null;
  _lastTouchStartEvent;
  _pointerUpEventsRegistered = false;
  _containerRect = null;
  static _eventManager = /*#__PURE__*/new RippleEventManager();
  constructor(_target, _ngZone, elementOrElementRef, _platform, injector) {
    this._target = _target;
    this._ngZone = _ngZone;
    this._platform = _platform;
    if (_platform.isBrowser) {
      this._containerElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(elementOrElementRef);
    }
    if (injector) {
      injector.get(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_4__._CdkPrivateStyleLoader).load(_MatRippleStylesLoader);
    }
  }
  fadeInRipple(x, y, config = {}) {
    const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
    const animationConfig = {
      ...defaultRippleAnimationConfig,
      ...config.animation
    };
    if (config.centered) {
      x = containerRect.left + containerRect.width / 2;
      y = containerRect.top + containerRect.height / 2;
    }
    const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
    const offsetX = x - containerRect.left;
    const offsetY = y - containerRect.top;
    const enterDuration = animationConfig.enterDuration;
    const ripple = document.createElement('div');
    ripple.classList.add('mat-ripple-element');
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`;
    if (config.color != null) {
      ripple.style.backgroundColor = config.color;
    }
    ripple.style.transitionDuration = `${enterDuration}ms`;
    this._containerElement.appendChild(ripple);
    const computedStyles = window.getComputedStyle(ripple);
    const userTransitionProperty = computedStyles.transitionProperty;
    const userTransitionDuration = computedStyles.transitionDuration;
    const animationForciblyDisabledThroughCss = userTransitionProperty === 'none' || userTransitionDuration === '0s' || userTransitionDuration === '0s, 0s' || containerRect.width === 0 && containerRect.height === 0;
    const rippleRef = new RippleRef(this, ripple, config, animationForciblyDisabledThroughCss);
    ripple.style.transform = 'scale3d(1, 1, 1)';
    rippleRef.state = RippleState.FADING_IN;
    if (!config.persistent) {
      this._mostRecentTransientRipple = rippleRef;
    }
    let eventListeners = null;
    if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
      this._ngZone.runOutsideAngular(() => {
        const onTransitionEnd = () => {
          if (eventListeners) {
            eventListeners.fallbackTimer = null;
          }
          clearTimeout(fallbackTimer);
          this._finishRippleTransition(rippleRef);
        };
        const onTransitionCancel = () => this._destroyRipple(rippleRef);
        const fallbackTimer = setTimeout(onTransitionCancel, enterDuration + 100);
        ripple.addEventListener('transitionend', onTransitionEnd);
        ripple.addEventListener('transitioncancel', onTransitionCancel);
        eventListeners = {
          onTransitionEnd,
          onTransitionCancel,
          fallbackTimer
        };
      });
    }
    this._activeRipples.set(rippleRef, eventListeners);
    if (animationForciblyDisabledThroughCss || !enterDuration) {
      this._finishRippleTransition(rippleRef);
    }
    return rippleRef;
  }
  fadeOutRipple(rippleRef) {
    if (rippleRef.state === RippleState.FADING_OUT || rippleRef.state === RippleState.HIDDEN) {
      return;
    }
    const rippleEl = rippleRef.element;
    const animationConfig = {
      ...defaultRippleAnimationConfig,
      ...rippleRef.config.animation
    };
    rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
    rippleEl.style.opacity = '0';
    rippleRef.state = RippleState.FADING_OUT;
    if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
      this._finishRippleTransition(rippleRef);
    }
  }
  fadeOutAll() {
    this._getActiveRipples().forEach(ripple => ripple.fadeOut());
  }
  fadeOutAllNonPersistent() {
    this._getActiveRipples().forEach(ripple => {
      if (!ripple.config.persistent) {
        ripple.fadeOut();
      }
    });
  }
  setupTriggerEvents(elementOrElementRef) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(elementOrElementRef);
    if (!this._platform.isBrowser || !element || element === this._triggerElement) {
      return;
    }
    this._removeTriggerEvents();
    this._triggerElement = element;
    pointerDownEvents.forEach(type => {
      RippleRenderer._eventManager.addHandler(this._ngZone, type, element, this);
    });
  }
  handleEvent(event) {
    if (event.type === 'mousedown') {
      this._onMousedown(event);
    } else if (event.type === 'touchstart') {
      this._onTouchStart(event);
    } else {
      this._onPointerUp();
    }
    if (!this._pointerUpEventsRegistered) {
      this._ngZone.runOutsideAngular(() => {
        pointerUpEvents.forEach(type => {
          this._triggerElement.addEventListener(type, this, passiveCapturingEventOptions);
        });
      });
      this._pointerUpEventsRegistered = true;
    }
  }
  _finishRippleTransition(rippleRef) {
    if (rippleRef.state === RippleState.FADING_IN) {
      this._startFadeOutTransition(rippleRef);
    } else if (rippleRef.state === RippleState.FADING_OUT) {
      this._destroyRipple(rippleRef);
    }
  }
  _startFadeOutTransition(rippleRef) {
    const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
    const {
      persistent
    } = rippleRef.config;
    rippleRef.state = RippleState.VISIBLE;
    if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
      rippleRef.fadeOut();
    }
  }
  _destroyRipple(rippleRef) {
    const eventListeners = this._activeRipples.get(rippleRef) ?? null;
    this._activeRipples.delete(rippleRef);
    if (!this._activeRipples.size) {
      this._containerRect = null;
    }
    if (rippleRef === this._mostRecentTransientRipple) {
      this._mostRecentTransientRipple = null;
    }
    rippleRef.state = RippleState.HIDDEN;
    if (eventListeners !== null) {
      rippleRef.element.removeEventListener('transitionend', eventListeners.onTransitionEnd);
      rippleRef.element.removeEventListener('transitioncancel', eventListeners.onTransitionCancel);
      if (eventListeners.fallbackTimer !== null) {
        clearTimeout(eventListeners.fallbackTimer);
      }
    }
    rippleRef.element.remove();
  }
  _onMousedown(event) {
    const isFakeMousedown = (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.isFakeMousedownFromScreenReader)(event);
    const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
    if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this._isPointerDown = true;
      this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
    }
  }
  _onTouchStart(event) {
    if (!this._target.rippleDisabled && !(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.isFakeTouchstartFromScreenReader)(event)) {
      this._lastTouchStartEvent = Date.now();
      this._isPointerDown = true;
      const touches = event.changedTouches;
      if (touches) {
        for (let i = 0; i < touches.length; i++) {
          this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
        }
      }
    }
  }
  _onPointerUp() {
    if (!this._isPointerDown) {
      return;
    }
    this._isPointerDown = false;
    this._getActiveRipples().forEach(ripple => {
      const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }
  _getActiveRipples() {
    return Array.from(this._activeRipples.keys());
  }
  _removeTriggerEvents() {
    const trigger = this._triggerElement;
    if (trigger) {
      pointerDownEvents.forEach(type => RippleRenderer._eventManager.removeHandler(type, trigger, this));
      if (this._pointerUpEventsRegistered) {
        pointerUpEvents.forEach(type => trigger.removeEventListener(type, this, passiveCapturingEventOptions));
        this._pointerUpEventsRegistered = false;
      }
    }
  }
}
function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
const MAT_RIPPLE_GLOBAL_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('mat-ripple-global-options');
let MatRipple = /*#__PURE__*/(() => {
  class MatRipple {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    _animationsDisabled = (0,_animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__._animationsDisabled)();
    color;
    unbounded = false;
    centered = false;
    radius = 0;
    animation;
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      if (value) {
        this.fadeOutAllNonPersistent();
      }
      this._disabled = value;
      this._setupTriggerEventsIfEnabled();
    }
    _disabled = false;
    get trigger() {
      return this._trigger || this._elementRef.nativeElement;
    }
    set trigger(trigger) {
      this._trigger = trigger;
      this._setupTriggerEventsIfEnabled();
    }
    _trigger;
    _rippleRenderer;
    _globalOptions;
    _isInitialized = false;
    constructor() {
      const ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
      const platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform);
      const globalOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MAT_RIPPLE_GLOBAL_OPTIONS, {
        optional: true
      });
      const injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector);
      this._globalOptions = globalOptions || {};
      this._rippleRenderer = new RippleRenderer(this, ngZone, this._elementRef, platform, injector);
    }
    ngOnInit() {
      this._isInitialized = true;
      this._setupTriggerEventsIfEnabled();
    }
    ngOnDestroy() {
      this._rippleRenderer._removeTriggerEvents();
    }
    fadeOutAll() {
      this._rippleRenderer.fadeOutAll();
    }
    fadeOutAllNonPersistent() {
      this._rippleRenderer.fadeOutAllNonPersistent();
    }
    get rippleConfig() {
      return {
        centered: this.centered,
        radius: this.radius,
        color: this.color,
        animation: {
          ...this._globalOptions.animation,
          ...(this._animationsDisabled ? {
            enterDuration: 0,
            exitDuration: 0
          } : {}),
          ...this.animation
        },
        terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
      };
    }
    get rippleDisabled() {
      return this.disabled || !!this._globalOptions.disabled;
    }
    _setupTriggerEventsIfEnabled() {
      if (!this.disabled && this._isInitialized) {
        this._rippleRenderer.setupTriggerEvents(this.trigger);
      }
    }
    launch(configOrX, y = 0, config) {
      if (typeof configOrX === 'number') {
        return this._rippleRenderer.fadeInRipple(configOrX, y, {
          ...this.rippleConfig,
          ...config
        });
      } else {
        return this._rippleRenderer.fadeInRipple(0, 0, {
          ...this.rippleConfig,
          ...configOrX
        });
      }
    }
    static ɵfac = function MatRipple_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatRipple)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatRipple,
      selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
      hostAttrs: [1, "mat-ripple"],
      hostVars: 2,
      hostBindings: function MatRipple_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-ripple-unbounded", ctx.unbounded);
        }
      },
      inputs: {
        color: [0, "matRippleColor", "color"],
        unbounded: [0, "matRippleUnbounded", "unbounded"],
        centered: [0, "matRippleCentered", "centered"],
        radius: [0, "matRippleRadius", "radius"],
        animation: [0, "matRippleAnimation", "animation"],
        disabled: [0, "matRippleDisabled", "disabled"],
        trigger: [0, "matRippleTrigger", "trigger"]
      },
      exportAs: ["matRipple"]
    });
  }
  return MatRipple;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 22158
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_structural-styles-chunk.mjs ***!
  \******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _StructuralStylesLoader: () => (/* binding */ _StructuralStylesLoader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);


let _StructuralStylesLoader = /*#__PURE__*/(() => {
  class _StructuralStylesLoader {
    static ɵfac = function _StructuralStylesLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StructuralStylesLoader)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: _StructuralStylesLoader,
      selectors: [["structural-styles"]],
      decls: 0,
      vars: 0,
      template: function _StructuralStylesLoader_Template(rf, ctx) {},
      styles: [".mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus-visible::before{content:\"\"}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return _StructuralStylesLoader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 31034
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/menu.mjs ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_MENU_CONTENT: () => (/* binding */ MAT_MENU_CONTENT),
/* harmony export */   MAT_MENU_DEFAULT_OPTIONS: () => (/* binding */ MAT_MENU_DEFAULT_OPTIONS),
/* harmony export */   MAT_MENU_PANEL: () => (/* binding */ MAT_MENU_PANEL),
/* harmony export */   MAT_MENU_SCROLL_STRATEGY: () => (/* binding */ MAT_MENU_SCROLL_STRATEGY),
/* harmony export */   MENU_PANEL_TOP_PADDING: () => (/* binding */ MENU_PANEL_TOP_PADDING),
/* harmony export */   MatContextMenuTrigger: () => (/* binding */ MatContextMenuTrigger),
/* harmony export */   MatMenu: () => (/* binding */ MatMenu),
/* harmony export */   MatMenuContent: () => (/* binding */ MatMenuContent),
/* harmony export */   MatMenuItem: () => (/* binding */ MatMenuItem),
/* harmony export */   MatMenuModule: () => (/* binding */ MatMenuModule),
/* harmony export */   MatMenuTrigger: () => (/* binding */ MatMenuTrigger)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ 45562);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ 52444);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/private */ 74418);
/* harmony import */ var _structural_styles_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_structural-styles-chunk.mjs */ 22158);
/* harmony import */ var _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_ripple-chunk.mjs */ 17828);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ 5978);
/* harmony import */ var _animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_animation-chunk.mjs */ 87432);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 13266);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/overlay */ 20026);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ 86456);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/scrolling */ 11094);
/* harmony import */ var _ripple_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_ripple-module-chunk.mjs */ 85309);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/coercion */ 32298);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/layout */ 42394);


















const _c0 = ["mat-menu-item", ""];
const _c1 = [[["mat-icon"], ["", "matMenuItemIcon", ""]], "*"];
const _c2 = ["mat-icon, [matMenuItemIcon]", "*"];
function MatMenuItem_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "polygon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c3 = ["*"];
function MatMenu_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomListener"]("click", function MatMenu_ng_template_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.closed.emit("click"));
    })("animationstart", function MatMenu_ng_template_0_Template_div_animationstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._onAnimationStart($event.animationName));
    })("animationend", function MatMenu_ng_template_0_Template_div_animationend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._onAnimationDone($event.animationName));
    })("animationcancel", function MatMenu_ng_template_0_Template_div_animationcancel_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._onAnimationDone($event.animationName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1._classList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-menu-panel-animations-disabled", ctx_r1._animationsDisabled)("mat-menu-panel-exit-animation", ctx_r1._panelAnimationState === "void")("mat-menu-panel-animating", ctx_r1._isAnimating());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomProperty"]("id", ctx_r1.panelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1.ariaLabelledby || null)("aria-describedby", ctx_r1.ariaDescribedby || null);
  }
}
const MAT_MENU_PANEL = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_MENU_PANEL');
let MatMenuItem = /*#__PURE__*/(() => {
  class MatMenuItem {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _focusMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.FocusMonitor);
    _parentMenu = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_MENU_PANEL, {
      optional: true
    });
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    role = 'menuitem';
    disabled = false;
    disableRipple = false;
    _hovered = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    _focused = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    _highlighted = false;
    _triggersSubmenu = false;
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_5__._CdkPrivateStyleLoader).load(_structural_styles_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__._StructuralStylesLoader);
      this._parentMenu?.addItem?.(this);
    }
    focus(origin, options) {
      if (this._focusMonitor && origin) {
        this._focusMonitor.focusVia(this._getHostElement(), origin, options);
      } else {
        this._getHostElement().focus(options);
      }
      this._focused.next(this);
    }
    ngAfterViewInit() {
      if (this._focusMonitor) {
        this._focusMonitor.monitor(this._elementRef, false);
      }
    }
    ngOnDestroy() {
      if (this._focusMonitor) {
        this._focusMonitor.stopMonitoring(this._elementRef);
      }
      if (this._parentMenu && this._parentMenu.removeItem) {
        this._parentMenu.removeItem(this);
      }
      this._hovered.complete();
      this._focused.complete();
    }
    _getTabIndex() {
      return this.disabled ? '-1' : '0';
    }
    _getHostElement() {
      return this._elementRef.nativeElement;
    }
    _checkDisabled(event) {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    _handleMouseEnter() {
      this._hovered.next(this);
    }
    getLabel() {
      const clone = this._elementRef.nativeElement.cloneNode(true);
      const icons = clone.querySelectorAll('mat-icon, .material-icons');
      for (let i = 0; i < icons.length; i++) {
        icons[i].remove();
      }
      return clone.textContent?.trim() || '';
    }
    _setHighlighted(isHighlighted) {
      this._highlighted = isHighlighted;
      this._changeDetectorRef.markForCheck();
    }
    _setTriggersSubmenu(triggersSubmenu) {
      this._triggersSubmenu = triggersSubmenu;
      this._changeDetectorRef.markForCheck();
    }
    _hasFocus() {
      return this._document && this._document.activeElement === this._getHostElement();
    }
    static ɵfac = function MatMenuItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatMenuItem)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatMenuItem,
      selectors: [["", "mat-menu-item", ""]],
      hostAttrs: [1, "mat-mdc-menu-item", "mat-focus-indicator"],
      hostVars: 8,
      hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatMenuItem_click_HostBindingHandler($event) {
            return ctx._checkDisabled($event);
          })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
            return ctx._handleMouseEnter();
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled)("disabled", ctx.disabled || null);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-menu-item-highlighted", ctx._highlighted)("mat-mdc-menu-item-submenu-trigger", ctx._triggersSubmenu);
        }
      },
      inputs: {
        role: "role",
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      exportAs: ["matMenuItem"],
      attrs: _c0,
      ngContentSelectors: _c2,
      decls: 5,
      vars: 3,
      consts: [[1, "mat-mdc-menu-item-text"], ["matRipple", "", 1, "mat-mdc-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]],
      template: function MatMenuItem_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](4, MatMenuItem_Conditional_4_Template, 2, 0, ":svg:svg", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._triggersSubmenu ? 4 : -1);
        }
      },
      dependencies: [_ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.MatRipple],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatMenuItem;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function throwMatMenuInvalidPositionX() {
  throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuInvalidPositionY() {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuRecursiveError() {
  throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is ` + `not a parent of the trigger or move the trigger outside of the menu.`);
}
const MAT_MENU_CONTENT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatMenuContent');
let MatMenuContent = /*#__PURE__*/(() => {
  class MatMenuContent {
    _template = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    _appRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    _viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    _portal;
    _outlet;
    _attached = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    constructor() {}
    attach(context = {}) {
      if (!this._portal) {
        this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.TemplatePortal(this._template, this._viewContainerRef);
      }
      this.detach();
      if (!this._outlet) {
        this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.DomPortalOutlet(this._document.createElement('div'), this._appRef, this._injector);
      }
      const element = this._template.elementRef.nativeElement;
      element.parentNode.insertBefore(this._outlet.outletElement, element);
      this._changeDetectorRef.markForCheck();
      this._portal.attach(this._outlet, context);
      this._attached.next();
    }
    detach() {
      if (this._portal?.isAttached) {
        this._portal.detach();
      }
    }
    ngOnDestroy() {
      this.detach();
      this._outlet?.dispose();
    }
    static ɵfac = function MatMenuContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatMenuContent)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatMenuContent,
      selectors: [["ng-template", "matMenuContent", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MAT_MENU_CONTENT,
        useExisting: MatMenuContent
      }])]
    });
  }
  return MatMenuContent;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const MAT_MENU_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-menu-default-options', {
  providedIn: 'root',
  factory: () => ({
    overlapTrigger: false,
    xPosition: 'after',
    yPosition: 'below',
    backdropClass: 'cdk-overlay-transparent-backdrop'
  })
});
const ENTER_ANIMATION = '_mat-menu-enter';
const EXIT_ANIMATION = '_mat-menu-exit';
let MatMenu = /*#__PURE__*/(() => {
  class MatMenu {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    _keyManager;
    _xPosition;
    _yPosition;
    _firstItemFocusRef;
    _exitFallbackTimeout;
    _animationsDisabled = (0,_animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__._animationsDisabled)();
    _allItems;
    _directDescendantItems = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    _classList = {};
    _panelAnimationState = 'void';
    _animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    _isAnimating = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "_isAnimating"
    }] : []));
    parentMenu;
    direction;
    overlayPanelClass;
    backdropClass;
    ariaLabel;
    ariaLabelledby;
    ariaDescribedby;
    get xPosition() {
      return this._xPosition;
    }
    set xPosition(value) {
      if (value !== 'before' && value !== 'after' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwMatMenuInvalidPositionX();
      }
      this._xPosition = value;
      this.setPositionClasses();
    }
    get yPosition() {
      return this._yPosition;
    }
    set yPosition(value) {
      if (value !== 'above' && value !== 'below' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwMatMenuInvalidPositionY();
      }
      this._yPosition = value;
      this.setPositionClasses();
    }
    templateRef;
    items;
    lazyContent;
    overlapTrigger = false;
    hasBackdrop;
    set panelClass(classes) {
      const previousPanelClass = this._previousPanelClass;
      const newClassList = {
        ...this._classList
      };
      if (previousPanelClass && previousPanelClass.length) {
        previousPanelClass.split(' ').forEach(className => {
          newClassList[className] = false;
        });
      }
      this._previousPanelClass = classes;
      if (classes && classes.length) {
        classes.split(' ').forEach(className => {
          newClassList[className] = true;
        });
        this._elementRef.nativeElement.className = '';
      }
      this._classList = newClassList;
    }
    _previousPanelClass;
    get classList() {
      return this.panelClass;
    }
    set classList(classes) {
      this.panelClass = classes;
    }
    closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    close = this.closed;
    panelId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__._IdGenerator).getId('mat-menu-panel-');
    constructor() {
      const defaultOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_MENU_DEFAULT_OPTIONS);
      this.overlayPanelClass = defaultOptions.overlayPanelClass || '';
      this._xPosition = defaultOptions.xPosition;
      this._yPosition = defaultOptions.yPosition;
      this.backdropClass = defaultOptions.backdropClass;
      this.overlapTrigger = defaultOptions.overlapTrigger;
      this.hasBackdrop = defaultOptions.hasBackdrop;
    }
    ngOnInit() {
      this.setPositionClasses();
    }
    ngAfterContentInit() {
      this._updateDirectDescendants();
      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
      this._keyManager.tabOut.subscribe(() => this.closed.emit('tab'));
      this._directDescendantItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(this._directDescendantItems), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(items => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)(...items.map(item => item._focused)))).subscribe(focusedItem => this._keyManager.updateActiveItem(focusedItem));
      this._directDescendantItems.changes.subscribe(itemsList => {
        const manager = this._keyManager;
        if (this._panelAnimationState === 'enter' && manager.activeItem?._hasFocus()) {
          const items = itemsList.toArray();
          const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));
          if (items[index] && !items[index].disabled) {
            manager.setActiveItem(index);
          } else {
            manager.setNextItemActive();
          }
        }
      });
    }
    ngOnDestroy() {
      this._keyManager?.destroy();
      this._directDescendantItems.destroy();
      this.closed.complete();
      this._firstItemFocusRef?.destroy();
      clearTimeout(this._exitFallbackTimeout);
    }
    _hovered() {
      const itemChanges = this._directDescendantItems.changes;
      return itemChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(this._directDescendantItems), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(items => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)(...items.map(item => item._hovered))));
    }
    addItem(_item) {}
    removeItem(_item) {}
    _handleKeydown(event) {
      const keyCode = event.keyCode;
      const manager = this._keyManager;
      switch (keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.ESCAPE:
          if (!(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.hasModifierKey)(event)) {
            event.preventDefault();
            this.closed.emit('keydown');
          }
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.LEFT_ARROW:
          if (this.parentMenu && this.direction === 'ltr') {
            this.closed.emit('keydown');
          }
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.RIGHT_ARROW:
          if (this.parentMenu && this.direction === 'rtl') {
            this.closed.emit('keydown');
          }
          break;
        default:
          if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.DOWN_ARROW) {
            manager.setFocusOrigin('keyboard');
          }
          manager.onKeydown(event);
          return;
      }
    }
    focusFirstItem(origin = 'program') {
      this._firstItemFocusRef?.destroy();
      this._firstItemFocusRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
        const menuPanel = this._resolvePanel();
        if (!menuPanel || !menuPanel.contains(document.activeElement)) {
          const manager = this._keyManager;
          manager.setFocusOrigin(origin).setFirstItemActive();
          if (!manager.activeItem && menuPanel) {
            menuPanel.focus();
          }
        }
      }, {
        injector: this._injector
      });
    }
    resetActiveItem() {
      this._keyManager.setActiveItem(-1);
    }
    setElevation(_depth) {}
    setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
      this._classList = {
        ...this._classList,
        ['mat-menu-before']: posX === 'before',
        ['mat-menu-after']: posX === 'after',
        ['mat-menu-above']: posY === 'above',
        ['mat-menu-below']: posY === 'below'
      };
      this._changeDetectorRef.markForCheck();
    }
    _onAnimationDone(state) {
      const isExit = state === EXIT_ANIMATION;
      if (isExit || state === ENTER_ANIMATION) {
        if (isExit) {
          clearTimeout(this._exitFallbackTimeout);
          this._exitFallbackTimeout = undefined;
        }
        this._animationDone.next(isExit ? 'void' : 'enter');
        this._isAnimating.set(false);
      }
    }
    _onAnimationStart(state) {
      if (state === ENTER_ANIMATION || state === EXIT_ANIMATION) {
        this._isAnimating.set(true);
      }
    }
    _setIsOpen(isOpen) {
      this._panelAnimationState = isOpen ? 'enter' : 'void';
      if (isOpen) {
        if (this._keyManager.activeItemIndex === 0) {
          const menuPanel = this._resolvePanel();
          if (menuPanel) {
            menuPanel.scrollTop = 0;
          }
        }
      } else if (!this._animationsDisabled) {
        this._exitFallbackTimeout = setTimeout(() => this._onAnimationDone(EXIT_ANIMATION), 200);
      }
      if (this._animationsDisabled) {
        setTimeout(() => {
          this._onAnimationDone(isOpen ? ENTER_ANIMATION : EXIT_ANIMATION);
        });
      }
      this._changeDetectorRef.markForCheck();
    }
    _updateDirectDescendants() {
      this._allItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(this._allItems)).subscribe(items => {
        this._directDescendantItems.reset(items.filter(item => item._parentMenu === this));
        this._directDescendantItems.notifyOnChanges();
      });
    }
    _resolvePanel() {
      let menuPanel = null;
      if (this._directDescendantItems.length) {
        menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
      }
      return menuPanel;
    }
    static ɵfac = function MatMenu_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatMenu)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatMenu,
      selectors: [["mat-menu"]],
      contentQueries: function MatMenu_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_MENU_CONTENT, 5)(dirIndex, MatMenuItem, 5)(dirIndex, MatMenuItem, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lazyContent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allItems = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
        }
      },
      viewQuery: function MatMenu_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
        }
      },
      hostVars: 3,
      hostBindings: function MatMenu_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
        }
      },
      inputs: {
        backdropClass: "backdropClass",
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
        xPosition: "xPosition",
        yPosition: "yPosition",
        overlapTrigger: [2, "overlapTrigger", "overlapTrigger", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        hasBackdrop: [2, "hasBackdrop", "hasBackdrop", value => value == null ? null : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute)(value)],
        panelClass: [0, "class", "panelClass"],
        classList: "classList"
      },
      outputs: {
        closed: "closed",
        close: "close"
      },
      exportAs: ["matMenu"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MAT_MENU_PANEL,
        useExisting: MatMenu
      }])],
      ngContentSelectors: _c3,
      decls: 1,
      vars: 0,
      consts: [["tabindex", "-1", "role", "menu", 1, "mat-mdc-menu-panel", 3, "click", "animationstart", "animationend", "animationcancel", "id"], [1, "mat-mdc-menu-content"]],
      template: function MatMenu_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomTemplate"](0, MatMenu_ng_template_0_Template, 3, 12, "ng-template");
        }
      },
      styles: ["mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}@keyframes _mat-menu-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-menu-exit{from{opacity:1}to{opacity:0}}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;box-sizing:border-box;outline:0;animation:_mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.mat-menu-panel-exit-animation{animation:_mat-menu-exit 100ms 25ms linear forwards}.mat-mdc-menu-panel.mat-menu-panel-animations-disabled{animation:none}.mat-mdc-menu-panel.mat-menu-panel-animating{pointer-events:none}.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{border-top-color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:\"\";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatMenu;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const MAT_MENU_SCROLL_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-menu-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    const injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    return () => (0,_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.createRepositionScrollStrategy)(injector);
  }
});
const MENU_PANEL_TOP_PADDING = 8;
const PANELS_TO_TRIGGERS = /*#__PURE__*/new WeakMap();
let MatMenuTriggerBase = /*#__PURE__*/(() => {
  class MatMenuTriggerBase {
    _canHaveBackdrop;
    _element = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    _menuItemInstance = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MatMenuItem, {
      optional: true,
      self: true
    });
    _dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, {
      optional: true
    });
    _focusMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.FocusMonitor);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    _scrollStrategy = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_MENU_SCROLL_STRATEGY);
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    _animationsDisabled = (0,_animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__._animationsDisabled)();
    _portal;
    _overlayRef = null;
    _menuOpen = false;
    _closingActionsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    _menuCloseSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    _pendingRemoval;
    _parentMaterialMenu;
    _parentInnerPadding;
    _openedBy = undefined;
    get _menu() {
      return this._menuInternal;
    }
    set _menu(menu) {
      if (menu === this._menuInternal) {
        return;
      }
      this._menuInternal = menu;
      this._menuCloseSubscription.unsubscribe();
      if (menu) {
        if (menu === this._parentMaterialMenu && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throwMatMenuRecursiveError();
        }
        this._menuCloseSubscription = menu.close.subscribe(reason => {
          this._destroyMenu(reason);
          if ((reason === 'click' || reason === 'tab') && this._parentMaterialMenu) {
            this._parentMaterialMenu.closed.emit(reason);
          }
        });
      }
      this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu());
    }
    _menuInternal = null;
    constructor(_canHaveBackdrop) {
      this._canHaveBackdrop = _canHaveBackdrop;
      const parentMenu = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_MENU_PANEL, {
        optional: true
      });
      this._parentMaterialMenu = parentMenu instanceof MatMenu ? parentMenu : undefined;
    }
    ngOnDestroy() {
      if (this._menu && this._ownsMenu(this._menu)) {
        PANELS_TO_TRIGGERS.delete(this._menu);
      }
      this._pendingRemoval?.unsubscribe();
      this._menuCloseSubscription.unsubscribe();
      this._closingActionsSubscription.unsubscribe();
      if (this._overlayRef) {
        this._overlayRef.dispose();
        this._overlayRef = null;
      }
    }
    get menuOpen() {
      return this._menuOpen;
    }
    get dir() {
      return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    _triggersSubmenu() {
      return !!(this._menuItemInstance && this._parentMaterialMenu && this._menu);
    }
    _closeMenu() {
      this._menu?.close.emit();
    }
    _openMenu(autoFocus) {
      if (this._triggerIsAriaDisabled()) {
        return;
      }
      const menu = this._menu;
      if (this._menuOpen || !menu) {
        return;
      }
      this._pendingRemoval?.unsubscribe();
      const previousTrigger = PANELS_TO_TRIGGERS.get(menu);
      PANELS_TO_TRIGGERS.set(menu, this);
      if (previousTrigger && previousTrigger !== this) {
        previousTrigger._closeMenu();
      }
      const overlayRef = this._createOverlay(menu);
      const overlayConfig = overlayRef.getConfig();
      const positionStrategy = overlayConfig.positionStrategy;
      this._setPosition(menu, positionStrategy);
      if (this._canHaveBackdrop) {
        overlayConfig.hasBackdrop = menu.hasBackdrop == null ? !this._triggersSubmenu() : menu.hasBackdrop;
      } else {
        overlayConfig.hasBackdrop = false;
      }
      if (!overlayRef.hasAttached()) {
        overlayRef.attach(this._getPortal(menu));
        menu.lazyContent?.attach(this.menuData);
      }
      this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this._closeMenu());
      menu.parentMenu = this._triggersSubmenu() ? this._parentMaterialMenu : undefined;
      menu.direction = this.dir;
      if (autoFocus) {
        menu.focusFirstItem(this._openedBy || 'program');
      }
      this._setIsMenuOpen(true);
      if (menu instanceof MatMenu) {
        menu._setIsOpen(true);
        menu._directDescendantItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(menu.close)).subscribe(() => {
          positionStrategy.withLockedPosition(false).reapplyLastPosition();
          positionStrategy.withLockedPosition(true);
        });
      }
    }
    focus(origin, options) {
      if (this._focusMonitor && origin) {
        this._focusMonitor.focusVia(this._element, origin, options);
      } else {
        this._element.nativeElement.focus(options);
      }
    }
    _destroyMenu(reason) {
      const overlayRef = this._overlayRef;
      const menu = this._menu;
      if (!overlayRef || !this.menuOpen) {
        return;
      }
      this._closingActionsSubscription.unsubscribe();
      this._pendingRemoval?.unsubscribe();
      if (menu instanceof MatMenu && this._ownsMenu(menu)) {
        this._pendingRemoval = menu._animationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(() => {
          overlayRef.detach();
          if (!PANELS_TO_TRIGGERS.has(menu)) {
            menu.lazyContent?.detach();
          }
        });
        menu._setIsOpen(false);
      } else {
        overlayRef.detach();
        menu?.lazyContent?.detach();
      }
      if (menu && this._ownsMenu(menu)) {
        PANELS_TO_TRIGGERS.delete(menu);
      }
      if (this.restoreFocus && (reason === 'keydown' || !this._openedBy || !this._triggersSubmenu())) {
        this.focus(this._openedBy);
      }
      this._openedBy = undefined;
      this._setIsMenuOpen(false);
    }
    _setIsMenuOpen(isOpen) {
      if (isOpen !== this._menuOpen) {
        this._menuOpen = isOpen;
        this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
        if (this._triggersSubmenu()) {
          this._menuItemInstance._setHighlighted(isOpen);
        }
        this._changeDetectorRef.markForCheck();
      }
    }
    _createOverlay(menu) {
      if (!this._overlayRef) {
        const config = this._getOverlayConfig(menu);
        this._subscribeToPositions(menu, config.positionStrategy);
        this._overlayRef = (0,_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.createOverlayRef)(this._injector, config);
        this._overlayRef.keydownEvents().subscribe(event => {
          if (this._menu instanceof MatMenu) {
            this._menu._handleKeydown(event);
          }
        });
      }
      return this._overlayRef;
    }
    _getOverlayConfig(menu) {
      return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.OverlayConfig({
        positionStrategy: (0,_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.createFlexibleConnectedPositionStrategy)(this._injector, this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
        backdropClass: menu.backdropClass || 'cdk-overlay-transparent-backdrop',
        panelClass: menu.overlayPanelClass,
        scrollStrategy: this._scrollStrategy(),
        direction: this._dir || 'ltr',
        disableAnimations: this._animationsDisabled
      });
    }
    _subscribeToPositions(menu, position) {
      if (menu.setPositionClasses) {
        position.positionChanges.subscribe(change => {
          this._ngZone.run(() => {
            const posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
            const posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';
            menu.setPositionClasses(posX, posY);
          });
        });
      }
    }
    _setPosition(menu, positionStrategy) {
      let [originX, originFallbackX] = menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];
      let [overlayY, overlayFallbackY] = menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];
      let [originY, originFallbackY] = [overlayY, overlayFallbackY];
      let [overlayX, overlayFallbackX] = [originX, originFallbackX];
      let offsetY = 0;
      if (this._triggersSubmenu()) {
        overlayFallbackX = originX = menu.xPosition === 'before' ? 'start' : 'end';
        originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
        if (this._parentMaterialMenu) {
          if (this._parentInnerPadding == null) {
            const firstItem = this._parentMaterialMenu.items.first;
            this._parentInnerPadding = firstItem ? firstItem._getHostElement().offsetTop : 0;
          }
          offsetY = overlayY === 'bottom' ? this._parentInnerPadding : -this._parentInnerPadding;
        }
      } else if (!menu.overlapTrigger) {
        originY = overlayY === 'top' ? 'bottom' : 'top';
        originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
      }
      positionStrategy.withPositions([{
        originX,
        originY,
        overlayX,
        overlayY,
        offsetY
      }, {
        originX: originFallbackX,
        originY,
        overlayX: overlayFallbackX,
        overlayY,
        offsetY
      }, {
        originX,
        originY: originFallbackY,
        overlayX,
        overlayY: overlayFallbackY,
        offsetY: -offsetY
      }, {
        originX: originFallbackX,
        originY: originFallbackY,
        overlayX: overlayFallbackX,
        overlayY: overlayFallbackY,
        offsetY: -offsetY
      }]);
    }
    _menuClosingActions() {
      const outsideClicks = this._getOutsideClickStream(this._overlayRef);
      const detachments = this._overlayRef.detachments();
      const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)();
      const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(active => this._menuOpen && active !== this._menuItemInstance)) : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)(outsideClicks, parentClose, hover, detachments);
    }
    _getPortal(menu) {
      if (!this._portal || this._portal.templateRef !== menu.templateRef) {
        this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.TemplatePortal(menu.templateRef, this._viewContainerRef);
      }
      return this._portal;
    }
    _ownsMenu(menu) {
      return PANELS_TO_TRIGGERS.get(menu) === this;
    }
    _triggerIsAriaDisabled() {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute)(this._element.nativeElement.getAttribute('aria-disabled'));
    }
    static ɵfac = function MatMenuTriggerBase_Factory(__ngFactoryType__) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatMenuTriggerBase
    });
  }
  return MatMenuTriggerBase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatMenuTrigger = /*#__PURE__*/(() => {
  class MatMenuTrigger extends MatMenuTriggerBase {
    _cleanupTouchstart;
    _hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    get _deprecatedMatMenuTriggerFor() {
      return this.menu;
    }
    set _deprecatedMatMenuTriggerFor(v) {
      this.menu = v;
    }
    get menu() {
      return this._menu;
    }
    set menu(menu) {
      this._menu = menu;
    }
    menuData;
    restoreFocus = true;
    menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    onMenuOpen = this.menuOpened;
    menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    onMenuClose = this.menuClosed;
    constructor() {
      super(true);
      const renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2);
      this._cleanupTouchstart = renderer.listen(this._element.nativeElement, 'touchstart', event => {
        if (!(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.isFakeTouchstartFromScreenReader)(event)) {
          this._openedBy = 'touch';
        }
      }, {
        passive: true
      });
    }
    triggersSubmenu() {
      return super._triggersSubmenu();
    }
    toggleMenu() {
      return this.menuOpen ? this.closeMenu() : this.openMenu();
    }
    openMenu() {
      this._openMenu(true);
    }
    closeMenu() {
      this._closeMenu();
    }
    updatePosition() {
      this._overlayRef?.updatePosition();
    }
    ngAfterContentInit() {
      this._handleHover();
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this._cleanupTouchstart();
      this._hoverSubscription.unsubscribe();
    }
    _getOverlayOrigin() {
      return this._element;
    }
    _getOutsideClickStream(overlayRef) {
      return overlayRef.backdropClick();
    }
    _handleMousedown(event) {
      if (!(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.isFakeMousedownFromScreenReader)(event)) {
        this._openedBy = event.button === 0 ? 'mouse' : undefined;
        if (this.triggersSubmenu()) {
          event.preventDefault();
        }
      }
    }
    _handleKeydown(event) {
      const keyCode = event.keyCode;
      if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.SPACE) {
        this._openedBy = 'keyboard';
      }
      if (this.triggersSubmenu() && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.RIGHT_ARROW && this.dir === 'ltr' || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.LEFT_ARROW && this.dir === 'rtl')) {
        this._openedBy = 'keyboard';
        this.openMenu();
      }
    }
    _handleClick(event) {
      if (this.triggersSubmenu()) {
        event.stopPropagation();
        this.openMenu();
      } else {
        this.toggleMenu();
      }
    }
    _handleHover() {
      if (this.triggersSubmenu() && this._parentMaterialMenu) {
        this._hoverSubscription = this._parentMaterialMenu._hovered().subscribe(active => {
          if (active === this._menuItemInstance && !active.disabled && this._parentMaterialMenu?._panelAnimationState !== 'void') {
            this._openedBy = 'mouse';
            this._openMenu(false);
          }
        });
      }
    }
    static ɵfac = function MatMenuTrigger_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatMenuTrigger)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatMenuTrigger,
      selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
      hostAttrs: [1, "mat-mdc-menu-trigger"],
      hostVars: 3,
      hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatMenuTrigger_click_HostBindingHandler($event) {
            return ctx._handleClick($event);
          })("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
            return ctx._handleMousedown($event);
          })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx.menu ? "menu" : null)("aria-expanded", ctx.menuOpen)("aria-controls", ctx.menuOpen ? ctx.menu == null ? null : ctx.menu.panelId : null);
        }
      },
      inputs: {
        _deprecatedMatMenuTriggerFor: [0, "mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
        menu: [0, "matMenuTriggerFor", "menu"],
        menuData: [0, "matMenuTriggerData", "menuData"],
        restoreFocus: [0, "matMenuTriggerRestoreFocus", "restoreFocus"]
      },
      outputs: {
        menuOpened: "menuOpened",
        onMenuOpen: "onMenuOpen",
        menuClosed: "menuClosed",
        onMenuClose: "onMenuClose"
      },
      exportAs: ["matMenuTrigger"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatMenuTrigger;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatContextMenuTrigger = /*#__PURE__*/(() => {
  class MatContextMenuTrigger extends MatMenuTriggerBase {
    _point = {
      x: 0,
      y: 0,
      initialX: 0,
      initialY: 0,
      initialScrollX: 0,
      initialScrollY: 0
    };
    _triggerPressedControl = false;
    _rootNode;
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _viewportRuler = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.ViewportRuler);
    _scrollDispatcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.ScrollDispatcher);
    _scrollSubscription;
    get menu() {
      return this._menu;
    }
    set menu(menu) {
      this._menu = menu;
    }
    menuData;
    restoreFocus = true;
    disabled = false;
    menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    constructor() {
      super(false);
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this._scrollSubscription?.unsubscribe();
    }
    _handleContextMenuEvent(event) {
      if (!this.disabled) {
        event.preventDefault();
        if (this.menuOpen) {
          this._initializePoint(event.clientX, event.clientY);
          this._updatePosition();
        } else {
          this._openContextMenu(event);
        }
      }
    }
    _destroyMenu(reason) {
      super._destroyMenu(reason);
      this._scrollSubscription?.unsubscribe();
    }
    _getOverlayOrigin() {
      return this._point;
    }
    _getOutsideClickStream(overlayRef) {
      return overlayRef.outsidePointerEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.skipWhile)((event, index) => {
        if (event.type === 'contextmenu') {
          return this._isWithinMenuOrTrigger((0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__._getEventTarget)(event));
        } else if (event.type === 'auxclick') {
          if (index === 0) {
            return true;
          }
          this._rootNode ??= (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__._getShadowRoot)(this._element.nativeElement) || this._document;
          return this._isWithinMenuOrTrigger(this._rootNode.elementFromPoint(event.clientX, event.clientY));
        }
        return this._triggerPressedControl && index === 0 && event.ctrlKey;
      }));
    }
    _isWithinMenuOrTrigger(target) {
      if (!target) {
        return false;
      }
      const element = this._element.nativeElement;
      if (target === element || element.contains(target)) {
        return true;
      }
      const overlay = this._overlayRef?.hostElement;
      return overlay === target || !!overlay?.contains(target);
    }
    _openContextMenu(event) {
      if (event.button === 2) {
        this._openedBy = 'mouse';
      } else {
        this._openedBy = event.button === 0 ? 'keyboard' : undefined;
      }
      this._initializePoint(event.clientX, event.clientY);
      this._triggerPressedControl = event.ctrlKey;
      super._openMenu(true);
      this._scrollSubscription?.unsubscribe();
      this._scrollSubscription = this._scrollDispatcher.scrolled(0).subscribe(() => {
        const position = this._viewportRuler.getViewportScrollPosition();
        const point = this._point;
        point.y = point.initialY + (point.initialScrollY - position.top);
        point.x = point.initialX + (point.initialScrollX - position.left);
        this._updatePosition();
      });
    }
    _initializePoint(x, y) {
      const scrollPosition = this._viewportRuler.getViewportScrollPosition();
      const point = this._point;
      point.x = point.initialX = x;
      point.y = point.initialY = y;
      point.initialScrollX = scrollPosition.left;
      point.initialScrollY = scrollPosition.top;
    }
    _updatePosition() {
      const overlayRef = this._overlayRef;
      if (overlayRef) {
        const positionStrategy = overlayRef.getConfig().positionStrategy;
        positionStrategy.setOrigin(this._point);
        overlayRef.updatePosition();
      }
    }
    static ɵfac = function MatContextMenuTrigger_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatContextMenuTrigger)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatContextMenuTrigger,
      selectors: [["", "matContextMenuTriggerFor", ""]],
      hostAttrs: [1, "mat-context-menu-trigger"],
      hostVars: 3,
      hostBindings: function MatContextMenuTrigger_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function MatContextMenuTrigger_contextmenu_HostBindingHandler($event) {
            return ctx._handleContextMenuEvent($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-controls", ctx.menuOpen ? ctx.menu == null ? null : ctx.menu.panelId : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-context-menu-trigger-disabled", ctx.disabled);
        }
      },
      inputs: {
        menu: [0, "matContextMenuTriggerFor", "menu"],
        menuData: [0, "matContextMenuTriggerData", "menuData"],
        restoreFocus: [0, "matContextMenuTriggerRestoreFocus", "restoreFocus"],
        disabled: [2, "matContextMenuTriggerDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      outputs: {
        menuOpened: "menuOpened",
        menuClosed: "menuClosed"
      },
      exportAs: ["matContextMenuTrigger"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatContextMenuTrigger;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatMenuModule = /*#__PURE__*/(() => {
  class MatMenuModule {
    static ɵfac = function MatMenuModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatMenuModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatMenuModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_ripple_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_14__.MatRippleModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.OverlayModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.BidiModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.CdkScrollableModule]
    });
  }
  return MatMenuModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 85309
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_ripple-module-chunk.mjs ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatRippleModule: () => (/* binding */ MatRippleModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ 13266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);




let MatRippleModule = /*#__PURE__*/(() => {
  class MatRippleModule {
    static ɵfac = function MatRippleModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatRippleModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatRippleModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__.BidiModule]
    });
  }
  return MatRippleModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 87432
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_animation-chunk.mjs ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MATERIAL_ANIMATIONS: () => (/* binding */ MATERIAL_ANIMATIONS),
/* harmony export */   _animationsDisabled: () => (/* binding */ _animationsDisabled),
/* harmony export */   _getAnimationsState: () => (/* binding */ _getAnimationsState)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ 42394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);


const MATERIAL_ANIMATIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MATERIAL_ANIMATIONS');
let reducedMotion = null;
function _getAnimationsState() {
  if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MATERIAL_ANIMATIONS, {
    optional: true
  })?.animationsDisabled || (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, {
    optional: true
  }) === 'NoopAnimations') {
    return 'di-disabled';
  }
  reducedMotion ??= (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.MediaMatcher).matchMedia('(prefers-reduced-motion)').matches;
  return reducedMotion ? 'reduced-motion' : 'enabled';
}
function _animationsDisabled() {
  return _getAnimationsState() !== 'enabled';
}


/***/ }

}])
//# sourceMappingURL=8653.js.map