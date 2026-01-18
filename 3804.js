(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[3804],{

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

/***/ 41331
/*!********************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_internal-form-field-chunk.mjs ***!
  \********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _MatInternalFormField: () => (/* binding */ _MatInternalFormField)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);


const _c0 = ["mat-internal-form-field", ""];
const _c1 = ["*"];
let _MatInternalFormField = /*#__PURE__*/(() => {
  class _MatInternalFormField {
    labelPosition = 'after';
    static ɵfac = function _MatInternalFormField_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatInternalFormField)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: _MatInternalFormField,
      selectors: [["div", "mat-internal-form-field", ""]],
      hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
      hostVars: 2,
      hostBindings: function _MatInternalFormField_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-form-field--align-end", ctx.labelPosition === "before");
        }
      },
      inputs: {
        labelPosition: "labelPosition"
      },
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 1,
      vars: 0,
      template: function _MatInternalFormField_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return _MatInternalFormField;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 53804
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/radio.mjs ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_RADIO_DEFAULT_OPTIONS: () => (/* binding */ MAT_RADIO_DEFAULT_OPTIONS),
/* harmony export */   MAT_RADIO_GROUP: () => (/* binding */ MAT_RADIO_GROUP),
/* harmony export */   MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR: () => (/* binding */ MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR),
/* harmony export */   MatRadioButton: () => (/* binding */ MatRadioButton),
/* harmony export */   MatRadioChange: () => (/* binding */ MatRadioChange),
/* harmony export */   MatRadioGroup: () => (/* binding */ MatRadioGroup),
/* harmony export */   MatRadioModule: () => (/* binding */ MatRadioModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ 45562);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ 49934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 14332);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/private */ 74418);
/* harmony import */ var _animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_animation-chunk.mjs */ 87432);
/* harmony import */ var _structural_styles_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_structural-styles-chunk.mjs */ 22158);
/* harmony import */ var _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_ripple-chunk.mjs */ 17828);
/* harmony import */ var _internal_form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_internal-form-field-chunk.mjs */ 41331);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ 13266);
/* harmony import */ var _ripple_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_ripple-module-chunk.mjs */ 85309);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ 42394);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ 86456);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/coercion */ 32298);















const _c0 = ["input"];
const _c1 = ["formField"];
const _c2 = ["*"];
class MatRadioChange {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
}
const MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => MatRadioGroup),
  multi: true
};
const MAT_RADIO_GROUP = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('MatRadioGroup');
const MAT_RADIO_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('mat-radio-default-options', {
  providedIn: 'root',
  factory: () => ({
    color: 'accent',
    disabledInteractive: false
  })
});
let MatRadioGroup = /*#__PURE__*/(() => {
  class MatRadioGroup {
    _changeDetector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
    _value = null;
    _name = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__._IdGenerator).getId('mat-radio-group-');
    _selected = null;
    _isInitialized = false;
    _labelPosition = 'after';
    _disabled = false;
    _required = false;
    _buttonChanges;
    _controlValueAccessorChangeFn = () => {};
    onTouched = () => {};
    change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    _radios;
    color;
    get name() {
      return this._name;
    }
    set name(value) {
      this._name = value;
      this._updateRadioButtonNames();
    }
    get labelPosition() {
      return this._labelPosition;
    }
    set labelPosition(v) {
      this._labelPosition = v === 'before' ? 'before' : 'after';
      this._markRadiosForCheck();
    }
    get value() {
      return this._value;
    }
    set value(newValue) {
      if (this._value !== newValue) {
        this._value = newValue;
        this._updateSelectedRadioFromValue();
        this._checkSelectedRadioButton();
      }
    }
    _checkSelectedRadioButton() {
      if (this._selected && !this._selected.checked) {
        this._selected.checked = true;
      }
    }
    get selected() {
      return this._selected;
    }
    set selected(selected) {
      this._selected = selected;
      this.value = selected ? selected.value : null;
      this._checkSelectedRadioButton();
    }
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
      this._markRadiosForCheck();
    }
    get required() {
      return this._required;
    }
    set required(value) {
      this._required = value;
      this._markRadiosForCheck();
    }
    get disabledInteractive() {
      return this._disabledInteractive;
    }
    set disabledInteractive(value) {
      this._disabledInteractive = value;
      this._markRadiosForCheck();
    }
    _disabledInteractive = false;
    constructor() {}
    ngAfterContentInit() {
      this._isInitialized = true;
      this._buttonChanges = this._radios.changes.subscribe(() => {
        if (this.selected && !this._radios.find(radio => radio === this.selected)) {
          this._selected = null;
        }
      });
    }
    ngOnDestroy() {
      this._buttonChanges?.unsubscribe();
    }
    _touch() {
      if (this.onTouched) {
        this.onTouched();
      }
    }
    _updateRadioButtonNames() {
      if (this._radios) {
        this._radios.forEach(radio => {
          radio.name = this.name;
          radio._markForCheck();
        });
      }
    }
    _updateSelectedRadioFromValue() {
      const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
      if (this._radios && !isAlreadySelected) {
        this._selected = null;
        this._radios.forEach(radio => {
          radio.checked = this.value === radio.value;
          if (radio.checked) {
            this._selected = radio;
          }
        });
      }
    }
    _emitChangeEvent() {
      if (this._isInitialized) {
        this.change.emit(new MatRadioChange(this._selected, this._value));
      }
    }
    _markRadiosForCheck() {
      if (this._radios) {
        this._radios.forEach(radio => radio._markForCheck());
      }
    }
    writeValue(value) {
      this.value = value;
      this._changeDetector.markForCheck();
    }
    registerOnChange(fn) {
      this._controlValueAccessorChangeFn = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
      this._changeDetector.markForCheck();
    }
    static ɵfac = function MatRadioGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatRadioGroup)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatRadioGroup,
      selectors: [["mat-radio-group"]],
      contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatRadioButton, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._radios = _t);
        }
      },
      hostAttrs: ["role", "radiogroup", 1, "mat-mdc-radio-group"],
      inputs: {
        color: "color",
        name: "name",
        labelPosition: "labelPosition",
        value: "value",
        selected: "selected",
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
        required: [2, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute]
      },
      outputs: {
        change: "change"
      },
      exportAs: ["matRadioGroup"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }])]
    });
  }
  return MatRadioGroup;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatRadioButton = /*#__PURE__*/(() => {
  class MatRadioButton {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    _changeDetector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
    _focusMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__.FocusMonitor);
    _radioDispatcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.UniqueSelectionDispatcher);
    _defaultOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(MAT_RADIO_DEFAULT_OPTIONS, {
      optional: true
    });
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone);
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2);
    _uniqueId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__._IdGenerator).getId('mat-radio-');
    _cleanupClick;
    id = this._uniqueId;
    name;
    ariaLabel;
    ariaLabelledby;
    ariaDescribedby;
    disableRipple = false;
    tabIndex = 0;
    get checked() {
      return this._checked;
    }
    set checked(value) {
      if (this._checked !== value) {
        this._checked = value;
        if (value && this.radioGroup && this.radioGroup.value !== this.value) {
          this.radioGroup.selected = this;
        } else if (!value && this.radioGroup && this.radioGroup.value === this.value) {
          this.radioGroup.selected = null;
        }
        if (value) {
          this._radioDispatcher.notify(this.id, this.name);
        }
        this._changeDetector.markForCheck();
      }
    }
    get value() {
      return this._value;
    }
    set value(value) {
      if (this._value !== value) {
        this._value = value;
        if (this.radioGroup !== null) {
          if (!this.checked) {
            this.checked = this.radioGroup.value === value;
          }
          if (this.checked) {
            this.radioGroup.selected = this;
          }
        }
      }
    }
    get labelPosition() {
      return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || 'after';
    }
    set labelPosition(value) {
      this._labelPosition = value;
    }
    _labelPosition;
    get disabled() {
      return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
    }
    set disabled(value) {
      this._setDisabled(value);
    }
    get required() {
      return this._required || this.radioGroup && this.radioGroup.required;
    }
    set required(value) {
      if (value !== this._required) {
        this._changeDetector.markForCheck();
      }
      this._required = value;
    }
    get color() {
      return this._color || this.radioGroup && this.radioGroup.color || this._defaultOptions && this._defaultOptions.color || 'accent';
    }
    set color(newValue) {
      this._color = newValue;
    }
    _color;
    get disabledInteractive() {
      return this._disabledInteractive || this.radioGroup !== null && this.radioGroup.disabledInteractive;
    }
    set disabledInteractive(value) {
      this._disabledInteractive = value;
    }
    _disabledInteractive;
    change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    radioGroup;
    get inputId() {
      return `${this.id || this._uniqueId}-input`;
    }
    _checked = false;
    _disabled = false;
    _required = false;
    _value = null;
    _removeUniqueSelectionListener = () => {};
    _previousTabIndex;
    _inputElement;
    _rippleTrigger;
    _noopAnimations = (0,_animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__._animationsDisabled)();
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector);
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_4__._CdkPrivateStyleLoader).load(_structural_styles_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__._StructuralStylesLoader);
      const radioGroup = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(MAT_RADIO_GROUP, {
        optional: true
      });
      const tabIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(new _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostAttributeToken('tabindex'), {
        optional: true
      });
      this.radioGroup = radioGroup;
      this._disabledInteractive = this._defaultOptions?.disabledInteractive ?? false;
      if (tabIndex) {
        this.tabIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.numberAttribute)(tabIndex, 0);
      }
    }
    focus(options, origin) {
      if (origin) {
        this._focusMonitor.focusVia(this._inputElement, origin, options);
      } else {
        this._inputElement.nativeElement.focus(options);
      }
    }
    _markForCheck() {
      this._changeDetector.markForCheck();
    }
    ngOnInit() {
      if (this.radioGroup) {
        this.checked = this.radioGroup.value === this._value;
        if (this.checked) {
          this.radioGroup.selected = this;
        }
        this.name = this.radioGroup.name;
      }
      this._removeUniqueSelectionListener = this._radioDispatcher.listen((id, name) => {
        if (id !== this.id && name === this.name) {
          this.checked = false;
        }
      });
    }
    ngDoCheck() {
      this._updateTabIndex();
    }
    ngAfterViewInit() {
      this._updateTabIndex();
      this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
        if (!focusOrigin && this.radioGroup) {
          this.radioGroup._touch();
        }
      });
      this._ngZone.runOutsideAngular(() => {
        this._cleanupClick = this._renderer.listen(this._inputElement.nativeElement, 'click', this._onInputClick);
      });
    }
    ngOnDestroy() {
      this._cleanupClick?.();
      this._focusMonitor.stopMonitoring(this._elementRef);
      this._removeUniqueSelectionListener();
    }
    _emitChangeEvent() {
      this.change.emit(new MatRadioChange(this, this._value));
    }
    _isRippleDisabled() {
      return this.disableRipple || this.disabled;
    }
    _onInputInteraction(event) {
      event.stopPropagation();
      if (!this.checked && !this.disabled) {
        const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
        this.checked = true;
        this._emitChangeEvent();
        if (this.radioGroup) {
          this.radioGroup._controlValueAccessorChangeFn(this.value);
          if (groupValueChanged) {
            this.radioGroup._emitChangeEvent();
          }
        }
      }
    }
    _onTouchTargetClick(event) {
      this._onInputInteraction(event);
      if (!this.disabled || this.disabledInteractive) {
        this._inputElement?.nativeElement.focus();
      }
    }
    _setDisabled(value) {
      if (this._disabled !== value) {
        this._disabled = value;
        this._changeDetector.markForCheck();
      }
    }
    _onInputClick = event => {
      if (this.disabled && this.disabledInteractive) {
        event.preventDefault();
      }
    };
    _updateTabIndex() {
      const group = this.radioGroup;
      let value;
      if (!group || !group.selected || this.disabled) {
        value = this.tabIndex;
      } else {
        value = group.selected === this ? this.tabIndex : -1;
      }
      if (value !== this._previousTabIndex) {
        const input = this._inputElement?.nativeElement;
        if (input) {
          input.setAttribute('tabindex', value + '');
          this._previousTabIndex = value;
          (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.afterNextRender)(() => {
            queueMicrotask(() => {
              if (group && group.selected && group.selected !== this && document.activeElement === input) {
                group.selected?._inputElement.nativeElement.focus();
                if (document.activeElement === input) {
                  this._inputElement.nativeElement.blur();
                }
              }
            });
          }, {
            injector: this._injector
          });
        }
      }
    }
    static ɵfac = function MatRadioButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatRadioButton)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MatRadioButton,
      selectors: [["mat-radio-button"]],
      viewQuery: function MatRadioButton_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5)(_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._rippleTrigger = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-radio-button"],
      hostVars: 19,
      hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function MatRadioButton_focus_HostBindingHandler() {
            return ctx._inputElement.nativeElement.focus();
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("tabindex", null)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("mat-mdc-radio-checked", ctx.checked)("mat-mdc-radio-disabled", ctx.disabled)("mat-mdc-radio-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        id: "id",
        name: "name",
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
        disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
        tabIndex: [2, "tabIndex", "tabIndex", value => value == null ? 0 : (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.numberAttribute)(value)],
        checked: [2, "checked", "checked", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
        value: "value",
        labelPosition: "labelPosition",
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
        required: [2, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
        color: "color",
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute]
      },
      outputs: {
        change: "change"
      },
      exportAs: ["matRadioButton"],
      ngContentSelectors: _c2,
      decls: 13,
      vars: 17,
      consts: [["formField", ""], ["input", ""], ["mat-internal-form-field", "", 3, "labelPosition"], [1, "mdc-radio"], [1, "mat-mdc-radio-touch-target", 3, "click"], ["type", "radio", "aria-invalid", "false", 1, "mdc-radio__native-control", 3, "change", "id", "checked", "disabled", "required"], [1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mdc-label", 3, "for"]],
      template: function MatRadioButton_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2, 0)(2, "div", 3)(3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatRadioButton_Template_div_click_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx._onTouchTargetClick($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 5, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function MatRadioButton_Template_input_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx._onInputInteraction($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("labelPosition", ctx.labelPosition);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mdc-radio--disabled", ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRippleTrigger", ctx._rippleTrigger.nativeElement)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", ctx.inputId);
        }
      },
      dependencies: [_ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _internal_form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__._MatInternalFormField],
      styles: [".mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled])~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px);top:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0);border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),background-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}@media(forced-colors: active){.mat-mdc-radio-button .mdc-radio__inner-circle{background-color:CanvasText !important}}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button label{cursor:pointer}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-sys-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple>.mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio>.mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before{content:\"\"}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-radio-touch-target-size, 48px);width:var(--mat-radio-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display, block)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatRadioButton;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatRadioModule = /*#__PURE__*/(() => {
  class MatRadioModule {
    static ɵfac = function MatRadioModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatRadioModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: MatRadioModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_ripple_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_10__.MatRippleModule, MatRadioButton, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.BidiModule]
    });
  }
  return MatRadioModule;
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
//# sourceMappingURL=3804.js.map