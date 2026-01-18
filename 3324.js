(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[3324],{

/***/ 14102
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/divider.mjs ***!
  \*************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatDivider: () => (/* binding */ MatDivider),
/* harmony export */   MatDividerModule: () => (/* binding */ MatDividerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 32298);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ 13266);




let MatDivider = /*#__PURE__*/(() => {
  class MatDivider {
    get vertical() {
      return this._vertical;
    }
    set vertical(value) {
      this._vertical = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    _vertical = false;
    get inset() {
      return this._inset;
    }
    set inset(value) {
      this._inset = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    _inset = false;
    static ɵfac = function MatDivider_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatDivider)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatDivider,
      selectors: [["mat-divider"]],
      hostAttrs: ["role", "separator", 1, "mat-divider"],
      hostVars: 7,
      hostBindings: function MatDivider_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
        }
      },
      inputs: {
        vertical: "vertical",
        inset: "inset"
      },
      decls: 0,
      vars: 0,
      template: function MatDivider_Template(rf, ctx) {},
      styles: [".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color, var(--mat-sys-outline-variant));border-top-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color, var(--mat-sys-outline-variant));border-right-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatDivider;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatDividerModule = /*#__PURE__*/(() => {
  class MatDividerModule {
    static ɵfac = function MatDividerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatDividerModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatDividerModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__.BidiModule]
    });
  }
  return MatDividerModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

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

/***/ 20943
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/list.mjs ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_LIST: () => (/* binding */ MAT_LIST),
/* harmony export */   MAT_LIST_CONFIG: () => (/* binding */ MAT_LIST_CONFIG),
/* harmony export */   MAT_NAV_LIST: () => (/* binding */ MAT_NAV_LIST),
/* harmony export */   MAT_SELECTION_LIST_VALUE_ACCESSOR: () => (/* binding */ MAT_SELECTION_LIST_VALUE_ACCESSOR),
/* harmony export */   MatActionList: () => (/* binding */ MatActionList),
/* harmony export */   MatDivider: () => (/* reexport safe */ _divider_mjs__WEBPACK_IMPORTED_MODULE_10__.MatDivider),
/* harmony export */   MatList: () => (/* binding */ MatList),
/* harmony export */   MatListItem: () => (/* binding */ MatListItem),
/* harmony export */   MatListItemAvatar: () => (/* binding */ MatListItemAvatar),
/* harmony export */   MatListItemIcon: () => (/* binding */ MatListItemIcon),
/* harmony export */   MatListItemLine: () => (/* binding */ MatListItemLine),
/* harmony export */   MatListItemMeta: () => (/* binding */ MatListItemMeta),
/* harmony export */   MatListItemTitle: () => (/* binding */ MatListItemTitle),
/* harmony export */   MatListModule: () => (/* binding */ MatListModule),
/* harmony export */   MatListOption: () => (/* binding */ MatListOption),
/* harmony export */   MatListSubheaderCssMatStyler: () => (/* binding */ MatListSubheaderCssMatStyler),
/* harmony export */   MatNavList: () => (/* binding */ MatNavList),
/* harmony export */   MatSelectionList: () => (/* binding */ MatSelectionList),
/* harmony export */   MatSelectionListChange: () => (/* binding */ MatSelectionListChange),
/* harmony export */   SELECTION_LIST: () => (/* binding */ SELECTION_LIST),
/* harmony export */   _MatListItemGraphicBase: () => (/* binding */ _MatListItemGraphicBase)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ 32298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 86456);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/private */ 74418);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_ripple-chunk.mjs */ 17828);
/* harmony import */ var _animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_animation-chunk.mjs */ 87432);
/* harmony import */ var _structural_styles_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_structural-styles-chunk.mjs */ 22158);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 11674);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/observers */ 60634);
/* harmony import */ var _divider_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./divider.mjs */ 14102);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/a11y */ 45562);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/collections */ 49934);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/keycodes */ 52444);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 14332);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/bidi */ 13266);
/* harmony import */ var _pseudo_checkbox_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_pseudo-checkbox-module-chunk.mjs */ 33115);
/* harmony import */ var _ripple_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_ripple-module-chunk.mjs */ 85309);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/layout */ 42394);












const _c0 = ["*"];
const _c1 = ".mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:\"\";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus-visible>.mat-focus-indicator::before{content:\"\"}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n";
const _c2 = ["unscopedContent"];
const _c3 = ["text"];
const _c4 = [[["", "matListItemAvatar", ""], ["", "matListItemIcon", ""]], [["", "matListItemTitle", ""]], [["", "matListItemLine", ""]], "*", [["", "matListItemMeta", ""]], [["mat-divider"]]];
const _c5 = ["[matListItemAvatar],[matListItemIcon]", "[matListItemTitle]", "[matListItemLine]", "*", "[matListItemMeta]", "mat-divider"];
const _c6 = [[["", "matListItemTitle", ""]], [["", "matListItemLine", ""]], "*", [["mat-divider"]], [["", "matListItemAvatar", ""], ["", "matListItemIcon", ""]]];
const _c7 = ["[matListItemTitle]", "[matListItemLine]", "*", "mat-divider", "[matListItemAvatar],[matListItemIcon]"];
function MatListOption_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 4);
  }
}
function MatListOption_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mdc-checkbox--disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r1.selected)("disabled", ctx_r1.disabled);
  }
}
function MatListOption_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 20)(4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mdc-radio--disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r1.selected)("disabled", ctx_r1.disabled);
  }
}
function MatListOption_Conditional_6_ng_template_1_Template(rf, ctx) {}
function MatListOption_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MatListOption_Conditional_6_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const checkbox_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", checkbox_r3);
  }
}
function MatListOption_Conditional_7_ng_template_1_Template(rf, ctx) {}
function MatListOption_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MatListOption_Conditional_7_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const radio_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", radio_r4);
  }
}
function MatListOption_Conditional_8_ng_template_0_Template(rf, ctx) {}
function MatListOption_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MatListOption_Conditional_8_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const icons_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", icons_r5);
  }
}
function MatListOption_Conditional_15_ng_template_1_Template(rf, ctx) {}
function MatListOption_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MatListOption_Conditional_15_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const checkbox_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", checkbox_r3);
  }
}
function MatListOption_Conditional_16_ng_template_1_Template(rf, ctx) {}
function MatListOption_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MatListOption_Conditional_16_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const radio_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", radio_r4);
  }
}
function MatListOption_Conditional_17_ng_template_0_Template(rf, ctx) {}
function MatListOption_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MatListOption_Conditional_17_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const icons_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", icons_r5);
  }
}











const LIST_OPTION = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('ListOption');
let MatListItemTitle = /*#__PURE__*/(() => {
  class MatListItemTitle {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    constructor() {}
    static ɵfac = function MatListItemTitle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatListItemTitle)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatListItemTitle,
      selectors: [["", "matListItemTitle", ""]],
      hostAttrs: [1, "mat-mdc-list-item-title", "mdc-list-item__primary-text"]
    });
  }
  return MatListItemTitle;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatListItemLine = /*#__PURE__*/(() => {
  class MatListItemLine {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    constructor() {}
    static ɵfac = function MatListItemLine_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatListItemLine)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatListItemLine,
      selectors: [["", "matListItemLine", ""]],
      hostAttrs: [1, "mat-mdc-list-item-line", "mdc-list-item__secondary-text"]
    });
  }
  return MatListItemLine;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatListItemMeta = /*#__PURE__*/(() => {
  class MatListItemMeta {
    static ɵfac = function MatListItemMeta_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatListItemMeta)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatListItemMeta,
      selectors: [["", "matListItemMeta", ""]],
      hostAttrs: [1, "mat-mdc-list-item-meta", "mdc-list-item__end"]
    });
  }
  return MatListItemMeta;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let _MatListItemGraphicBase = /*#__PURE__*/(() => {
  class _MatListItemGraphicBase {
    _listOption = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(LIST_OPTION, {
      optional: true
    });
    constructor() {}
    _isAlignedAtStart() {
      return !this._listOption || this._listOption?._getTogglePosition() === 'after';
    }
    static ɵfac = function _MatListItemGraphicBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatListItemGraphicBase)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: _MatListItemGraphicBase,
      hostVars: 4,
      hostBindings: function _MatListItemGraphicBase_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mdc-list-item__start", ctx._isAlignedAtStart())("mdc-list-item__end", !ctx._isAlignedAtStart());
        }
      }
    });
  }
  return _MatListItemGraphicBase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatListItemAvatar = /*#__PURE__*/(() => {
  class MatListItemAvatar extends _MatListItemGraphicBase {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatListItemAvatar_BaseFactory;
      return function MatListItemAvatar_Factory(__ngFactoryType__) {
        return (ɵMatListItemAvatar_BaseFactory || (ɵMatListItemAvatar_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatListItemAvatar)))(__ngFactoryType__ || MatListItemAvatar);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatListItemAvatar,
      selectors: [["", "matListItemAvatar", ""]],
      hostAttrs: [1, "mat-mdc-list-item-avatar"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatListItemAvatar;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatListItemIcon = /*#__PURE__*/(() => {
  class MatListItemIcon extends _MatListItemGraphicBase {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatListItemIcon_BaseFactory;
      return function MatListItemIcon_Factory(__ngFactoryType__) {
        return (ɵMatListItemIcon_BaseFactory || (ɵMatListItemIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatListItemIcon)))(__ngFactoryType__ || MatListItemIcon);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatListItemIcon,
      selectors: [["", "matListItemIcon", ""]],
      hostAttrs: [1, "mat-mdc-list-item-icon"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatListItemIcon;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const MAT_LIST_CONFIG = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MAT_LIST_CONFIG');
let MatListBase = /*#__PURE__*/(() => {
  class MatListBase {
    _isNonInteractive = true;
    get disableRipple() {
      return this._disableRipple;
    }
    set disableRipple(value) {
      this._disableRipple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
    }
    _disableRipple = false;
    get disabled() {
      return this._disabled();
    }
    set disabled(value) {
      this._disabled.set((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value));
    }
    _disabled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false, ...(ngDevMode ? [{
      debugName: "_disabled"
    }] : []));
    _defaultOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MAT_LIST_CONFIG, {
      optional: true
    });
    static ɵfac = function MatListBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatListBase)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatListBase,
      hostVars: 1,
      hostBindings: function MatListBase_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-disabled", ctx.disabled);
        }
      },
      inputs: {
        disableRipple: "disableRipple",
        disabled: "disabled"
      }
    });
  }
  return MatListBase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatListItemBase = /*#__PURE__*/(() => {
  class MatListItemBase {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
    _listBase = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MatListBase, {
      optional: true
    });
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform);
    _hostElement;
    _isButtonElement;
    _noopAnimations = (0,_animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__._animationsDisabled)();
    _avatars;
    _icons;
    set lines(lines) {
      this._explicitLines = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceNumberProperty)(lines, null);
      this._updateItemLines(false);
    }
    _explicitLines = null;
    get disableRipple() {
      return this.disabled || this._disableRipple || this._noopAnimations || !!this._listBase?.disableRipple;
    }
    set disableRipple(value) {
      this._disableRipple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
    }
    _disableRipple = false;
    get disabled() {
      return this._disabled() || !!this._listBase?.disabled;
    }
    set disabled(value) {
      this._disabled.set((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value));
    }
    _disabled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false, ...(ngDevMode ? [{
      debugName: "_disabled"
    }] : []));
    _subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    _rippleRenderer = null;
    _hasUnscopedTextContent = false;
    rippleConfig;
    get rippleDisabled() {
      return this.disableRipple || !!this.rippleConfig.disabled;
    }
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_3__._CdkPrivateStyleLoader).load(_structural_styles_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__._StructuralStylesLoader);
      const globalRippleOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.MAT_RIPPLE_GLOBAL_OPTIONS, {
        optional: true
      });
      this.rippleConfig = globalRippleOptions || {};
      this._hostElement = this._elementRef.nativeElement;
      this._isButtonElement = this._hostElement.nodeName.toLowerCase() === 'button';
      if (this._listBase && !this._listBase._isNonInteractive) {
        this._initInteractiveListItem();
      }
      if (this._isButtonElement && !this._hostElement.hasAttribute('type')) {
        this._hostElement.setAttribute('type', 'button');
      }
    }
    ngAfterViewInit() {
      this._monitorProjectedLinesAndTitle();
      this._updateItemLines(true);
    }
    ngOnDestroy() {
      this._subscriptions.unsubscribe();
      if (this._rippleRenderer !== null) {
        this._rippleRenderer._removeTriggerEvents();
      }
    }
    _hasIconOrAvatar() {
      return !!(this._avatars.length || this._icons.length);
    }
    _initInteractiveListItem() {
      this._hostElement.classList.add('mat-mdc-list-item-interactive');
      this._rippleRenderer = new _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.RippleRenderer(this, this._ngZone, this._hostElement, this._platform, (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
      this._rippleRenderer.setupTriggerEvents(this._hostElement);
    }
    _monitorProjectedLinesAndTitle() {
      this._ngZone.runOutsideAngular(() => {
        this._subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)(this._lines.changes, this._titles.changes).subscribe(() => this._updateItemLines(false)));
      });
    }
    _updateItemLines(recheckUnscopedContent) {
      if (!this._lines || !this._titles || !this._unscopedContent) {
        return;
      }
      if (recheckUnscopedContent) {
        this._checkDomForUnscopedTextContent();
      }
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        sanityCheckListItemContent(this);
      }
      const numberOfLines = this._explicitLines ?? this._inferLinesFromContent();
      const unscopedContentEl = this._unscopedContent.nativeElement;
      this._hostElement.classList.toggle('mat-mdc-list-item-single-line', numberOfLines <= 1);
      this._hostElement.classList.toggle('mdc-list-item--with-one-line', numberOfLines <= 1);
      this._hostElement.classList.toggle('mdc-list-item--with-two-lines', numberOfLines === 2);
      this._hostElement.classList.toggle('mdc-list-item--with-three-lines', numberOfLines === 3);
      if (this._hasUnscopedTextContent) {
        const treatAsTitle = this._titles.length === 0 && numberOfLines === 1;
        unscopedContentEl.classList.toggle('mdc-list-item__primary-text', treatAsTitle);
        unscopedContentEl.classList.toggle('mdc-list-item__secondary-text', !treatAsTitle);
      } else {
        unscopedContentEl.classList.remove('mdc-list-item__primary-text');
        unscopedContentEl.classList.remove('mdc-list-item__secondary-text');
      }
    }
    _inferLinesFromContent() {
      let numOfLines = this._titles.length + this._lines.length;
      if (this._hasUnscopedTextContent) {
        numOfLines += 1;
      }
      return numOfLines;
    }
    _checkDomForUnscopedTextContent() {
      this._hasUnscopedTextContent = Array.from(this._unscopedContent.nativeElement.childNodes).filter(node => node.nodeType !== node.COMMENT_NODE).some(node => !!(node.textContent && node.textContent.trim()));
    }
    static ɵfac = function MatListItemBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatListItemBase)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatListItemBase,
      contentQueries: function MatListItemBase_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListItemAvatar, 4)(dirIndex, MatListItemIcon, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._avatars = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._icons = _t);
        }
      },
      hostVars: 4,
      hostBindings: function MatListItemBase_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-disabled", ctx.disabled)("disabled", ctx._isButtonElement && ctx.disabled || null);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mdc-list-item--disabled", ctx.disabled);
        }
      },
      inputs: {
        lines: "lines",
        disableRipple: "disableRipple",
        disabled: "disabled"
      }
    });
  }
  return MatListItemBase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function sanityCheckListItemContent(item) {
  const numTitles = item._titles.length;
  const numLines = item._lines.length;
  if (numTitles > 1) {
    console.warn('A list item cannot have multiple titles.');
  }
  if (numTitles === 0 && numLines > 0) {
    console.warn('A list item line can only be used if there is a list item title.');
  }
  if (numTitles === 0 && item._hasUnscopedTextContent && item._explicitLines !== null && item._explicitLines > 1) {
    console.warn('A list item cannot have wrapping content without a title.');
  }
  if (numLines > 2 || numLines === 2 && item._hasUnscopedTextContent) {
    console.warn('A list item can have at maximum three lines.');
  }
}
let MatActionList = /*#__PURE__*/(() => {
  class MatActionList extends MatListBase {
    _isNonInteractive = false;
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatActionList_BaseFactory;
      return function MatActionList_Factory(__ngFactoryType__) {
        return (ɵMatActionList_BaseFactory || (ɵMatActionList_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatActionList)))(__ngFactoryType__ || MatActionList);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatActionList,
      selectors: [["mat-action-list"]],
      hostAttrs: ["role", "group", 1, "mat-mdc-action-list", "mat-mdc-list-base", "mdc-list"],
      exportAs: ["matActionList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: MatListBase,
        useExisting: MatActionList
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatActionList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      styles: [".mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:\"\";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus-visible>.mat-focus-indicator::before{content:\"\"}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatActionList;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const MAT_LIST = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MatList');
let MatList = /*#__PURE__*/(() => {
  class MatList extends MatListBase {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatList_BaseFactory;
      return function MatList_Factory(__ngFactoryType__) {
        return (ɵMatList_BaseFactory || (ɵMatList_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatList)))(__ngFactoryType__ || MatList);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatList,
      selectors: [["mat-list"]],
      hostAttrs: [1, "mat-mdc-list", "mat-mdc-list-base", "mdc-list"],
      exportAs: ["matList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: MatListBase,
        useExisting: MatList
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      styles: [_c1],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatList;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatListItem = /*#__PURE__*/(() => {
  class MatListItem extends MatListItemBase {
    _lines;
    _titles;
    _meta;
    _unscopedContent;
    _itemText;
    get activated() {
      return this._activated;
    }
    set activated(activated) {
      this._activated = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(activated);
    }
    _activated = false;
    _getAriaCurrent() {
      return this._hostElement.nodeName === 'A' && this._activated ? 'page' : null;
    }
    _hasBothLeadingAndTrailing() {
      return this._meta.length !== 0 && (this._avatars.length !== 0 || this._icons.length !== 0);
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatListItem_BaseFactory;
      return function MatListItem_Factory(__ngFactoryType__) {
        return (ɵMatListItem_BaseFactory || (ɵMatListItem_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatListItem)))(__ngFactoryType__ || MatListItem);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatListItem,
      selectors: [["mat-list-item"], ["a", "mat-list-item", ""], ["button", "mat-list-item", ""]],
      contentQueries: function MatListItem_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListItemLine, 5)(dirIndex, MatListItemTitle, 5)(dirIndex, MatListItemMeta, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._lines = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._titles = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._meta = _t);
        }
      },
      viewQuery: function MatListItem_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5)(_c3, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._unscopedContent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._itemText = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-list-item", "mdc-list-item"],
      hostVars: 13,
      hostBindings: function MatListItem_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-current", ctx._getAriaCurrent());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mdc-list-item--activated", ctx.activated)("mdc-list-item--with-leading-avatar", ctx._avatars.length !== 0)("mdc-list-item--with-leading-icon", ctx._icons.length !== 0)("mdc-list-item--with-trailing-meta", ctx._meta.length !== 0)("mat-mdc-list-item-both-leading-and-trailing", ctx._hasBothLeadingAndTrailing())("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        activated: "activated"
      },
      exportAs: ["matListItem"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c5,
      decls: 10,
      vars: 0,
      consts: [["unscopedContent", ""], [1, "mdc-list-item__content"], [1, "mat-mdc-list-item-unscoped-content", 3, "cdkObserveContent"], [1, "mat-focus-indicator"]],
      template: function MatListItem_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function MatListItem_Template_span_cdkObserveContent_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx._updateItemLines(true));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](7, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](8, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 3);
        }
      },
      dependencies: [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__.CdkObserveContent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatListItem;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const SELECTION_LIST = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('SelectionList');
let MatListOption = /*#__PURE__*/(() => {
  class MatListOption extends MatListItemBase {
    _selectionList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(SELECTION_LIST);
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
    _lines;
    _titles;
    _unscopedContent;
    selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    togglePosition = 'after';
    get checkboxPosition() {
      return this.togglePosition;
    }
    set checkboxPosition(value) {
      this.togglePosition = value;
    }
    get color() {
      return this._color || this._selectionList.color;
    }
    set color(newValue) {
      this._color = newValue;
    }
    _color;
    get value() {
      return this._value;
    }
    set value(newValue) {
      if (this.selected && newValue !== this.value && this._inputsInitialized) {
        this.selected = false;
      }
      this._value = newValue;
    }
    _value;
    get selected() {
      return this._selectionList.selectedOptions.isSelected(this);
    }
    set selected(value) {
      const isSelected = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
      if (isSelected !== this._selected) {
        this._setSelected(isSelected);
        if (isSelected || this._selectionList.multiple) {
          this._selectionList._reportValueChange();
        }
      }
    }
    _selected = false;
    _inputsInitialized = false;
    ngOnInit() {
      const list = this._selectionList;
      if (list._value && list._value.some(value => list.compareWith(this._value, value))) {
        this._setSelected(true);
      }
      const wasSelected = this._selected;
      Promise.resolve().then(() => {
        if (this._selected || wasSelected) {
          this.selected = true;
          this._changeDetectorRef.markForCheck();
        }
      });
      this._inputsInitialized = true;
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      if (this.selected) {
        Promise.resolve().then(() => {
          this.selected = false;
        });
      }
    }
    toggle() {
      this.selected = !this.selected;
    }
    focus() {
      this._hostElement.focus();
    }
    getLabel() {
      const titleElement = this._titles?.get(0)?._elementRef.nativeElement;
      const labelEl = titleElement || this._unscopedContent?.nativeElement;
      return labelEl?.textContent || '';
    }
    _hasCheckboxAt(position) {
      return this._selectionList.multiple && this._getTogglePosition() === position;
    }
    _hasRadioAt(position) {
      return !this._selectionList.multiple && this._getTogglePosition() === position && !this._selectionList.hideSingleSelectionIndicator;
    }
    _hasIconsOrAvatarsAt(position) {
      return this._hasProjected('icons', position) || this._hasProjected('avatars', position);
    }
    _hasProjected(type, position) {
      return this._getTogglePosition() !== position && (type === 'avatars' ? this._avatars.length !== 0 : this._icons.length !== 0);
    }
    _handleBlur() {
      this._selectionList._onTouched();
    }
    _getTogglePosition() {
      return this.togglePosition || 'after';
    }
    _setSelected(selected) {
      if (selected === this._selected) {
        return false;
      }
      this._selected = selected;
      if (selected) {
        this._selectionList.selectedOptions.select(this);
      } else {
        this._selectionList.selectedOptions.deselect(this);
      }
      this.selectedChange.emit(selected);
      this._changeDetectorRef.markForCheck();
      return true;
    }
    _markForCheck() {
      this._changeDetectorRef.markForCheck();
    }
    _toggleOnInteraction() {
      if (!this.disabled) {
        if (this._selectionList.multiple) {
          this.selected = !this.selected;
          this._selectionList._emitChangeEvent([this]);
        } else if (!this.selected) {
          this.selected = true;
          this._selectionList._emitChangeEvent([this]);
        }
      }
    }
    _setTabindex(value) {
      this._hostElement.setAttribute('tabindex', value + '');
    }
    _hasBothLeadingAndTrailing() {
      const hasLeading = this._hasProjected('avatars', 'before') || this._hasProjected('icons', 'before') || this._hasCheckboxAt('before') || this._hasRadioAt('before');
      const hasTrailing = this._hasProjected('icons', 'after') || this._hasProjected('avatars', 'after') || this._hasCheckboxAt('after') || this._hasRadioAt('after');
      return hasLeading && hasTrailing;
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatListOption_BaseFactory;
      return function MatListOption_Factory(__ngFactoryType__) {
        return (ɵMatListOption_BaseFactory || (ɵMatListOption_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatListOption)))(__ngFactoryType__ || MatListOption);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatListOption,
      selectors: [["mat-list-option"]],
      contentQueries: function MatListOption_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListItemLine, 5)(dirIndex, MatListItemTitle, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._lines = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._titles = _t);
        }
      },
      viewQuery: function MatListOption_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._unscopedContent = _t.first);
        }
      },
      hostAttrs: ["role", "option", 1, "mat-mdc-list-item", "mat-mdc-list-option", "mdc-list-item"],
      hostVars: 27,
      hostBindings: function MatListOption_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function MatListOption_blur_HostBindingHandler() {
            return ctx._handleBlur();
          })("click", function MatListOption_click_HostBindingHandler() {
            return ctx._toggleOnInteraction();
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", ctx.selected);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mdc-list-item--selected", ctx.selected && !ctx._selectionList.multiple && ctx._selectionList.hideSingleSelectionIndicator)("mdc-list-item--with-leading-avatar", ctx._hasProjected("avatars", "before"))("mdc-list-item--with-leading-icon", ctx._hasProjected("icons", "before"))("mdc-list-item--with-trailing-icon", ctx._hasProjected("icons", "after"))("mat-mdc-list-option-with-trailing-avatar", ctx._hasProjected("avatars", "after"))("mdc-list-item--with-leading-checkbox", ctx._hasCheckboxAt("before"))("mdc-list-item--with-trailing-checkbox", ctx._hasCheckboxAt("after"))("mdc-list-item--with-leading-radio", ctx._hasRadioAt("before"))("mdc-list-item--with-trailing-radio", ctx._hasRadioAt("after"))("mat-mdc-list-item-both-leading-and-trailing", ctx._hasBothLeadingAndTrailing())("mat-accent", ctx.color !== "primary" && ctx.color !== "warn")("mat-warn", ctx.color === "warn")("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        togglePosition: "togglePosition",
        checkboxPosition: "checkboxPosition",
        color: "color",
        value: "value",
        selected: "selected"
      },
      outputs: {
        selectedChange: "selectedChange"
      },
      exportAs: ["matListOption"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: MatListItemBase,
        useExisting: MatListOption
      }, {
        provide: LIST_OPTION,
        useExisting: MatListOption
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c7,
      decls: 20,
      vars: 4,
      consts: [["icons", ""], ["checkbox", ""], ["radio", ""], ["unscopedContent", ""], [1, "mdc-list-item__start", "mat-mdc-list-option-checkbox-before"], [1, "mdc-list-item__start", "mat-mdc-list-option-radio-before"], [3, "ngTemplateOutlet"], [1, "mdc-list-item__content"], [1, "mat-mdc-list-item-unscoped-content", 3, "cdkObserveContent"], [1, "mdc-list-item__end"], [1, "mat-focus-indicator"], [1, "mdc-checkbox"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "checked", "disabled"], [1, "mdc-checkbox__background"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], [1, "mdc-radio"], ["type", "radio", 1, "mdc-radio__native-control", 3, "checked", "disabled"], [1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"]],
      template: function MatListOption_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MatListOption_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"])(2, MatListOption_ng_template_2_Template, 6, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"])(4, MatListOption_ng_template_4_Template, 5, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](6, MatListOption_Conditional_6_Template, 2, 1, "span", 4)(7, MatListOption_Conditional_7_Template, 2, 1, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](8, MatListOption_Conditional_8_Template, 1, 1, null, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](11, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 8, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function MatListOption_Template_span_cdkObserveContent_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx._updateItemLines(true));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](14, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](15, MatListOption_Conditional_15_Template, 2, 1, "span", 9)(16, MatListOption_Conditional_16_Template, 2, 1, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](17, MatListOption_Conditional_17_Template, 1, 1, null, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](18, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 10);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx._hasCheckboxAt("before") ? 6 : ctx._hasRadioAt("before") ? 7 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx._hasIconsOrAvatarsAt("before") ? 8 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx._hasCheckboxAt("after") ? 15 : ctx._hasRadioAt("after") ? 16 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx._hasIconsOrAvatarsAt("after") ? 17 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__.CdkObserveContent],
      styles: [".mat-mdc-list-option-with-trailing-avatar.mdc-list-item,[dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item{padding-left:0;padding-right:0}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{margin-left:16px;margin-right:16px;width:40px;height:40px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{border-radius:50%}.mat-mdc-list-option .mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mat-mdc-list-option .mdc-checkbox--disabled{cursor:default;pointer-events:none}.mat-mdc-list-option .mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__checkmark{color:CanvasText}}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:GrayText}}.mat-mdc-list-option .mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mat-mdc-list-option .mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__mixedmark{margin:0 1px}}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-list-option .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-list-option .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-list-option .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px);top:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-list-option .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0);border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),background-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}@media(forced-colors: active){.mat-mdc-list-option .mdc-radio__inner-circle{background-color:CanvasText !important}}.mat-mdc-list-option .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-list-option .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor))}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-list-option .mdc-checkbox__native-control,.mat-mdc-list-option .mdc-radio__native-control{display:none}@media(forced-colors: active){.mat-mdc-list-option.mdc-list-item--selected::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after{right:auto;left:16px}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatListOption;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatListSubheaderCssMatStyler = /*#__PURE__*/(() => {
  class MatListSubheaderCssMatStyler {
    static ɵfac = function MatListSubheaderCssMatStyler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatListSubheaderCssMatStyler)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatListSubheaderCssMatStyler,
      selectors: [["", "mat-subheader", ""], ["", "matSubheader", ""]],
      hostAttrs: [1, "mat-mdc-subheader", "mdc-list-group__subheader"]
    });
  }
  return MatListSubheaderCssMatStyler;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const MAT_NAV_LIST = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MatNavList');
let MatNavList = /*#__PURE__*/(() => {
  class MatNavList extends MatListBase {
    _isNonInteractive = false;
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatNavList_BaseFactory;
      return function MatNavList_Factory(__ngFactoryType__) {
        return (ɵMatNavList_BaseFactory || (ɵMatNavList_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatNavList)))(__ngFactoryType__ || MatNavList);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatNavList,
      selectors: [["mat-nav-list"]],
      hostAttrs: ["role", "navigation", 1, "mat-mdc-nav-list", "mat-mdc-list-base", "mdc-list"],
      exportAs: ["matNavList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: MatListBase,
        useExisting: MatNavList
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatNavList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      styles: [_c1],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatNavList;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const MAT_SELECTION_LIST_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MatSelectionList),
  multi: true
};
class MatSelectionListChange {
  source;
  options;
  constructor(source, options) {
    this.source = source;
    this.options = options;
  }
}
let MatSelectionList = /*#__PURE__*/(() => {
  class MatSelectionList extends MatListBase {
    _element = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2);
    _initialized = false;
    _keyManager;
    _listenerCleanups;
    _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    _isDestroyed = false;
    _onChange = _ => {};
    _items;
    selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    color = 'accent';
    compareWith = (a1, a2) => a1 === a2;
    get multiple() {
      return this._multiple;
    }
    set multiple(value) {
      const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
      if (newValue !== this._multiple) {
        if ((typeof ngDevMode === 'undefined' || ngDevMode) && this._initialized) {
          throw new Error('Cannot change `multiple` mode of mat-selection-list after initialization.');
        }
        this._multiple = newValue;
        this.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__.SelectionModel(this._multiple, this.selectedOptions.selected);
      }
    }
    _multiple = true;
    get hideSingleSelectionIndicator() {
      return this._hideSingleSelectionIndicator;
    }
    set hideSingleSelectionIndicator(value) {
      this._hideSingleSelectionIndicator = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
    }
    _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
    selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__.SelectionModel(this._multiple);
    _value = null;
    _onTouched = () => {};
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
    constructor() {
      super();
      this._isNonInteractive = false;
    }
    ngAfterViewInit() {
      this._initialized = true;
      this._setupRovingTabindex();
      this._ngZone.runOutsideAngular(() => {
        this._listenerCleanups = [this._renderer.listen(this._element.nativeElement, 'focusin', this._handleFocusin), this._renderer.listen(this._element.nativeElement, 'focusout', this._handleFocusout)];
      });
      if (this._value) {
        this._setOptionsFromValues(this._value);
      }
      this._watchForSelectionChange();
    }
    ngOnChanges(changes) {
      const disabledChanges = changes['disabled'];
      const disableRippleChanges = changes['disableRipple'];
      const hideSingleSelectionIndicatorChanges = changes['hideSingleSelectionIndicator'];
      if (disableRippleChanges && !disableRippleChanges.firstChange || disabledChanges && !disabledChanges.firstChange || hideSingleSelectionIndicatorChanges && !hideSingleSelectionIndicatorChanges.firstChange) {
        this._markOptionsForCheck();
      }
    }
    ngOnDestroy() {
      this._keyManager?.destroy();
      this._listenerCleanups?.forEach(current => current());
      this._destroyed.next();
      this._destroyed.complete();
      this._isDestroyed = true;
    }
    focus(options) {
      this._element.nativeElement.focus(options);
    }
    selectAll() {
      return this._setAllOptionsSelected(true);
    }
    deselectAll() {
      return this._setAllOptionsSelected(false);
    }
    _reportValueChange() {
      if (this.options && !this._isDestroyed) {
        const value = this._getSelectedOptionValues();
        this._onChange(value);
        this._value = value;
      }
    }
    _emitChangeEvent(options) {
      this.selectionChange.emit(new MatSelectionListChange(this, options));
    }
    writeValue(values) {
      this._value = values;
      if (this.options) {
        this._setOptionsFromValues(values || []);
      }
    }
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
      this._changeDetectorRef.markForCheck();
      this._markOptionsForCheck();
    }
    get disabled() {
      return this._selectionListDisabled();
    }
    set disabled(value) {
      this._selectionListDisabled.set((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value));
      if (this._selectionListDisabled()) {
        this._keyManager?.setActiveItem(-1);
      }
    }
    _selectionListDisabled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false, ...(ngDevMode ? [{
      debugName: "_selectionListDisabled"
    }] : []));
    registerOnChange(fn) {
      this._onChange = fn;
    }
    registerOnTouched(fn) {
      this._onTouched = fn;
    }
    _watchForSelectionChange() {
      this.selectedOptions.changed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(event => {
        for (let item of event.added) {
          item.selected = true;
        }
        for (let item of event.removed) {
          item.selected = false;
        }
        if (!this._containsFocus()) {
          this._resetActiveOption();
        }
      });
    }
    _setOptionsFromValues(values) {
      this.options.forEach(option => option._setSelected(false));
      values.forEach(value => {
        const correspondingOption = this.options.find(option => {
          return option.selected ? false : this.compareWith(option.value, value);
        });
        if (correspondingOption) {
          correspondingOption._setSelected(true);
        }
      });
    }
    _getSelectedOptionValues() {
      return this.options.filter(option => option.selected).map(option => option.value);
    }
    _markOptionsForCheck() {
      if (this.options) {
        this.options.forEach(option => option._markForCheck());
      }
    }
    _setAllOptionsSelected(isSelected, skipDisabled) {
      const changedOptions = [];
      this.options.forEach(option => {
        if ((!skipDisabled || !option.disabled) && option._setSelected(isSelected)) {
          changedOptions.push(option);
        }
      });
      if (changedOptions.length) {
        this._reportValueChange();
      }
      return changedOptions;
    }
    get options() {
      return this._items;
    }
    _handleKeydown(event) {
      const activeItem = this._keyManager.activeItem;
      if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.ENTER || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.SPACE) && !this._keyManager.isTyping() && activeItem && !activeItem.disabled) {
        event.preventDefault();
        activeItem._toggleOnInteraction();
      } else if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.A && this.multiple && !this._keyManager.isTyping() && (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__.hasModifierKey)(event, 'ctrlKey', 'metaKey')) {
        const shouldSelect = this.options.some(option => !option.disabled && !option.selected);
        event.preventDefault();
        this._emitChangeEvent(this._setAllOptionsSelected(shouldSelect, true));
      } else {
        this._keyManager.onKeydown(event);
      }
    }
    _handleFocusout = () => {
      setTimeout(() => {
        if (!this._containsFocus()) {
          this._resetActiveOption();
        }
      });
    };
    _handleFocusin = event => {
      if (this.disabled) {
        return;
      }
      const activeIndex = this._items.toArray().findIndex(item => item._elementRef.nativeElement.contains(event.target));
      if (activeIndex > -1) {
        this._setActiveOption(activeIndex);
      } else {
        this._resetActiveOption();
      }
    };
    _setupRovingTabindex() {
      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.FocusKeyManager(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(() => this.disabled);
      this._resetActiveOption();
      this._keyManager.change.subscribe(activeItemIndex => this._setActiveOption(activeItemIndex));
      this._items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(() => {
        const activeItem = this._keyManager.activeItem;
        if (!activeItem || this._items.toArray().indexOf(activeItem) === -1) {
          this._resetActiveOption();
        }
      });
    }
    _setActiveOption(index) {
      this._items.forEach((item, itemIndex) => item._setTabindex(itemIndex === index ? 0 : -1));
      this._keyManager.updateActiveItem(index);
    }
    _resetActiveOption() {
      if (this.disabled) {
        this._setActiveOption(-1);
        return;
      }
      const activeItem = this._items.find(item => item.selected && !item.disabled) || this._items.first;
      this._setActiveOption(activeItem ? this._items.toArray().indexOf(activeItem) : -1);
    }
    _containsFocus() {
      const activeElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getFocusedElementPierceShadowDom)();
      return activeElement && this._element.nativeElement.contains(activeElement);
    }
    static ɵfac = function MatSelectionList_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatSelectionList)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatSelectionList,
      selectors: [["mat-selection-list"]],
      contentQueries: function MatSelectionList_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListOption, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._items = _t);
        }
      },
      hostAttrs: ["role", "listbox", 1, "mat-mdc-selection-list", "mat-mdc-list-base", "mdc-list"],
      hostVars: 1,
      hostBindings: function MatSelectionList_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MatSelectionList_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-multiselectable", ctx.multiple);
        }
      },
      inputs: {
        color: "color",
        compareWith: "compareWith",
        multiple: "multiple",
        hideSingleSelectionIndicator: "hideSingleSelectionIndicator",
        disabled: "disabled"
      },
      outputs: {
        selectionChange: "selectionChange"
      },
      exportAs: ["matSelectionList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SELECTION_LIST_VALUE_ACCESSOR, {
        provide: MatListBase,
        useExisting: MatSelectionList
      }, {
        provide: SELECTION_LIST,
        useExisting: MatSelectionList
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatSelectionList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      styles: [_c1],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatSelectionList;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatListModule = /*#__PURE__*/(() => {
  class MatListModule {
    static ɵfac = function MatListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatListModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatListModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__.ObserversModule, _ripple_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_18__.MatRippleModule, _pseudo_checkbox_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_17__.MatPseudoCheckboxModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__.BidiModule, _divider_mjs__WEBPACK_IMPORTED_MODULE_10__.MatDividerModule]
    });
  }
  return MatListModule;
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

/***/ 33115
/*!***********************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_pseudo-checkbox-module-chunk.mjs ***!
  \***********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatPseudoCheckboxModule: () => (/* binding */ MatPseudoCheckboxModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ 13266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);




let MatPseudoCheckboxModule = /*#__PURE__*/(() => {
  class MatPseudoCheckboxModule {
    static ɵfac = function MatPseudoCheckboxModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatPseudoCheckboxModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatPseudoCheckboxModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__.BidiModule]
    });
  }
  return MatPseudoCheckboxModule;
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
//# sourceMappingURL=3324.js.map