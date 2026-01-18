(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[7556],{

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

/***/ 18953
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_option-chunk.mjs ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_OPTGROUP: () => (/* binding */ MAT_OPTGROUP),
/* harmony export */   MAT_OPTION_PARENT_COMPONENT: () => (/* binding */ MAT_OPTION_PARENT_COMPONENT),
/* harmony export */   MatOptgroup: () => (/* binding */ MatOptgroup),
/* harmony export */   MatOption: () => (/* binding */ MatOption),
/* harmony export */   MatOptionSelectionChange: () => (/* binding */ MatOptionSelectionChange),
/* harmony export */   _countGroupLabelsBeforeOption: () => (/* binding */ _countGroupLabelsBeforeOption),
/* harmony export */   _getOptionScrollPosition: () => (/* binding */ _getOptionScrollPosition)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ 45562);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ 52444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_ripple-chunk.mjs */ 17828);
/* harmony import */ var _pseudo_checkbox_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_pseudo-checkbox-chunk.mjs */ 83618);
/* harmony import */ var _structural_styles_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_structural-styles-chunk.mjs */ 22158);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/private */ 74418);









const _c0 = ["*", [["mat-option"], ["ng-container"]]];
const _c1 = ["*", "mat-option, ng-container"];
const _c2 = ["text"];
const _c3 = [[["mat-icon"]], "*"];
const _c4 = ["mat-icon", "*"];
function MatOption_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-pseudo-checkbox", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.disabled)("state", ctx_r0.selected ? "checked" : "unchecked");
  }
}
function MatOption_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-pseudo-checkbox", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.disabled);
  }
}
function MatOption_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", ctx_r0.group.label, ")");
  }
}
const MAT_OPTION_PARENT_COMPONENT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('MAT_OPTION_PARENT_COMPONENT');
const MAT_OPTGROUP = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('MatOptgroup');
let MatOptgroup = /*#__PURE__*/(() => {
  class MatOptgroup {
    label;
    disabled = false;
    _labelId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__._IdGenerator).getId('mat-optgroup-label-');
    _inert;
    constructor() {
      const parent = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(MAT_OPTION_PARENT_COMPONENT, {
        optional: true
      });
      this._inert = parent?.inertGroups ?? false;
    }
    static ɵfac = function MatOptgroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatOptgroup)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MatOptgroup,
      selectors: [["mat-optgroup"]],
      hostAttrs: [1, "mat-mdc-optgroup"],
      hostVars: 3,
      hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
        }
      },
      inputs: {
        label: "label",
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute]
      },
      exportAs: ["matOptgroup"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: MAT_OPTGROUP,
        useExisting: MatOptgroup
      }])],
      ngContentSelectors: _c1,
      decls: 5,
      vars: 4,
      consts: [["role", "presentation", 1, "mat-mdc-optgroup-label", 3, "id"], [1, "mdc-list-item__primary-text"]],
      template: function MatOptgroup_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](0, "span", 0)(1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4, 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mdc-list-item--disabled", ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomProperty"]("id", ctx._labelId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.label, " ");
        }
      },
      styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal;color:inherit}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatOptgroup;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class MatOptionSelectionChange {
  source;
  isUserInput;
  constructor(source, isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }
}
let MatOption = /*#__PURE__*/(() => {
  class MatOption {
    _element = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
    _parent = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(MAT_OPTION_PARENT_COMPONENT, {
      optional: true
    });
    group = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(MAT_OPTGROUP, {
      optional: true
    });
    _signalDisableRipple = false;
    _selected = false;
    _active = false;
    _mostRecentViewValue = '';
    get multiple() {
      return this._parent && this._parent.multiple;
    }
    get selected() {
      return this._selected;
    }
    value;
    id = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__._IdGenerator).getId('mat-option-');
    get disabled() {
      return this.group && this.group.disabled || this._disabled();
    }
    set disabled(value) {
      this._disabled.set(value);
    }
    _disabled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false, ...(ngDevMode ? [{
      debugName: "_disabled"
    }] : []));
    get disableRipple() {
      return this._signalDisableRipple ? this._parent.disableRipple() : !!this._parent?.disableRipple;
    }
    get hideSingleSelectionIndicator() {
      return !!(this._parent && this._parent.hideSingleSelectionIndicator);
    }
    onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    _text;
    _stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    constructor() {
      const styleLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_7__._CdkPrivateStyleLoader);
      styleLoader.load(_structural_styles_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__._StructuralStylesLoader);
      styleLoader.load(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_7__._VisuallyHiddenLoader);
      this._signalDisableRipple = !!this._parent && (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.isSignal)(this._parent.disableRipple);
    }
    get active() {
      return this._active;
    }
    get viewValue() {
      return (this._text?.nativeElement.textContent || '').trim();
    }
    select(emitEvent = true) {
      if (!this._selected) {
        this._selected = true;
        this._changeDetectorRef.markForCheck();
        if (emitEvent) {
          this._emitSelectionChangeEvent();
        }
      }
    }
    deselect(emitEvent = true) {
      if (this._selected) {
        this._selected = false;
        this._changeDetectorRef.markForCheck();
        if (emitEvent) {
          this._emitSelectionChangeEvent();
        }
      }
    }
    focus(_origin, options) {
      const element = this._getHostElement();
      if (typeof element.focus === 'function') {
        element.focus(options);
      }
    }
    setActiveStyles() {
      if (!this._active) {
        this._active = true;
        this._changeDetectorRef.markForCheck();
      }
    }
    setInactiveStyles() {
      if (this._active) {
        this._active = false;
        this._changeDetectorRef.markForCheck();
      }
    }
    getLabel() {
      return this.viewValue;
    }
    _handleKeydown(event) {
      if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.ENTER || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.SPACE) && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.hasModifierKey)(event)) {
        this._selectViaInteraction();
        event.preventDefault();
      }
    }
    _selectViaInteraction() {
      if (!this.disabled) {
        this._selected = this.multiple ? !this._selected : true;
        this._changeDetectorRef.markForCheck();
        this._emitSelectionChangeEvent(true);
      }
    }
    _getTabIndex() {
      return this.disabled ? '-1' : '0';
    }
    _getHostElement() {
      return this._element.nativeElement;
    }
    ngAfterViewChecked() {
      if (this._selected) {
        const viewValue = this.viewValue;
        if (viewValue !== this._mostRecentViewValue) {
          if (this._mostRecentViewValue) {
            this._stateChanges.next();
          }
          this._mostRecentViewValue = viewValue;
        }
      }
    }
    ngOnDestroy() {
      this._stateChanges.complete();
    }
    _emitSelectionChangeEvent(isUserInput = false) {
      this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
    }
    static ɵfac = function MatOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatOption)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MatOption,
      selectors: [["mat-option"]],
      viewQuery: function MatOption_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._text = _t.first);
        }
      },
      hostAttrs: ["role", "option", 1, "mat-mdc-option", "mdc-list-item"],
      hostVars: 11,
      hostBindings: function MatOption_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatOption_click_HostBindingHandler() {
            return ctx._selectViaInteraction();
          })("keydown", function MatOption_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomProperty"]("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-selected", ctx.selected)("aria-disabled", ctx.disabled.toString());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mdc-list-item--selected", ctx.selected)("mat-mdc-option-multiple", ctx.multiple)("mat-mdc-option-active", ctx.active)("mdc-list-item--disabled", ctx.disabled);
        }
      },
      inputs: {
        value: "value",
        id: "id",
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute]
      },
      outputs: {
        onSelectionChange: "onSelectionChange"
      },
      exportAs: ["matOption"],
      ngContentSelectors: _c4,
      decls: 8,
      vars: 5,
      consts: [["text", ""], ["aria-hidden", "true", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled", "state"], [1, "mdc-list-item__primary-text"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"], [1, "cdk-visually-hidden"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-mdc-option-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"]],
      template: function MatOption_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](0, MatOption_Conditional_0_Template, 1, 2, "mat-pseudo-checkbox", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](5, MatOption_Conditional_5_Template, 1, 1, "mat-pseudo-checkbox", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](6, MatOption_Conditional_6_Template, 2, 1, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 5);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.multiple ? 0 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](!ctx.multiple && ctx.selected && !ctx.hideSingleSelectionIndicator ? 5 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.group && ctx.group._inert ? 6 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
        }
      },
      dependencies: [_pseudo_checkbox_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.MatPseudoCheckbox, _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.MatRipple],
      styles: [".mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active,.mat-mdc-option-multiple,:focus,:hover){background-color:var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active,.mat-mdc-option-multiple,:focus,:hover) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}@media(forced-colors: active){.mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{right:auto;left:16px}}.mat-mdc-option-multiple{--mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-focus-indicator::before{content:\"\"}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatOption;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
  if (optionGroups.length) {
    let optionsArray = options.toArray();
    let groups = optionGroups.toArray();
    let groupCounter = 0;
    for (let i = 0; i < optionIndex + 1; i++) {
      if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
        groupCounter++;
      }
    }
    return groupCounter;
  }
  return 0;
}
function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }
  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }
  return currentScrollPosition;
}


/***/ },

/***/ 20762
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_option-module-chunk.mjs ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatOptionModule: () => (/* binding */ MatOptionModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ 13266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _ripple_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_ripple-module-chunk.mjs */ 85309);
/* harmony import */ var _pseudo_checkbox_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_pseudo-checkbox-module-chunk.mjs */ 33115);
/* harmony import */ var _option_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_option-chunk.mjs */ 18953);






let MatOptionModule = /*#__PURE__*/(() => {
  class MatOptionModule {
    static ɵfac = function MatOptionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatOptionModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatOptionModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_ripple_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _pseudo_checkbox_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.MatPseudoCheckboxModule, _option_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.MatOption, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__.BidiModule]
    });
  }
  return MatOptionModule;
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

/***/ 24950
/*!****************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/form-field.mjs ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_ERROR: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAT_ERROR),
/* harmony export */   MAT_FORM_FIELD: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAT_FORM_FIELD),
/* harmony export */   MAT_FORM_FIELD_DEFAULT_OPTIONS: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAT_FORM_FIELD_DEFAULT_OPTIONS),
/* harmony export */   MAT_PREFIX: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAT_PREFIX),
/* harmony export */   MAT_SUFFIX: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAT_SUFFIX),
/* harmony export */   MatError: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatError),
/* harmony export */   MatFormField: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatFormField),
/* harmony export */   MatFormFieldControl: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatFormFieldControl),
/* harmony export */   MatFormFieldModule: () => (/* binding */ MatFormFieldModule),
/* harmony export */   MatHint: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatHint),
/* harmony export */   MatLabel: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatLabel),
/* harmony export */   MatPrefix: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatPrefix),
/* harmony export */   MatSuffix: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatSuffix),
/* harmony export */   getMatFormFieldDuplicatedHintError: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.getMatFormFieldDuplicatedHintError),
/* harmony export */   getMatFormFieldMissingControlError: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.getMatFormFieldMissingControlError),
/* harmony export */   getMatFormFieldPlaceholderConflictError: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.getMatFormFieldPlaceholderConflictError)
/* harmony export */ });
/* harmony import */ var _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_form-field-chunk.mjs */ 80423);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ 13266);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/observers */ 60634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 45562);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ 32298);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ 86456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 11674);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _angular_cdk_observers_private__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/observers/private */ 36192);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ 42394);















let MatFormFieldModule = /*#__PURE__*/(() => {
  class MatFormFieldModule {
    static ɵfac = function MatFormFieldModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatFormFieldModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MatFormFieldModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__.ObserversModule, _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatFormField, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__.BidiModule]
    });
  }
  return MatFormFieldModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 25175
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/select.mjs ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_SELECT_CONFIG: () => (/* binding */ MAT_SELECT_CONFIG),
/* harmony export */   MAT_SELECT_SCROLL_STRATEGY: () => (/* binding */ MAT_SELECT_SCROLL_STRATEGY),
/* harmony export */   MAT_SELECT_TRIGGER: () => (/* binding */ MAT_SELECT_TRIGGER),
/* harmony export */   MatError: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.MatError),
/* harmony export */   MatFormField: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.MatFormField),
/* harmony export */   MatHint: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.MatHint),
/* harmony export */   MatLabel: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.MatLabel),
/* harmony export */   MatOptgroup: () => (/* reexport safe */ _option_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatOptgroup),
/* harmony export */   MatOption: () => (/* reexport safe */ _option_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatOption),
/* harmony export */   MatPrefix: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.MatPrefix),
/* harmony export */   MatSelect: () => (/* binding */ MatSelect),
/* harmony export */   MatSelectChange: () => (/* binding */ MatSelectChange),
/* harmony export */   MatSelectModule: () => (/* binding */ MatSelectModule),
/* harmony export */   MatSelectTrigger: () => (/* binding */ MatSelectTrigger),
/* harmony export */   MatSuffix: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.MatSuffix)
/* harmony export */ });
/* harmony import */ var _option_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_option-chunk.mjs */ 18953);
/* harmony import */ var _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_form-field-chunk.mjs */ 80423);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ 20026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ 11094);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ 45562);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 13266);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ 49934);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ 52444);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 14332);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/platform */ 86456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 11674);
/* harmony import */ var _animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_animation-chunk.mjs */ 87432);
/* harmony import */ var _error_options_chunk_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_error-options-chunk.mjs */ 54297);
/* harmony import */ var _error_state_chunk_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_error-state-chunk.mjs */ 54612);
/* harmony import */ var _option_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_option-module-chunk.mjs */ 20762);
/* harmony import */ var _form_field_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form-field.mjs */ 24950);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/coercion */ 32298);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/private */ 74418);
/* harmony import */ var _angular_cdk_observers_private__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/observers/private */ 36192);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/layout */ 42394);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/observers */ 60634);

const _c0 = ["trigger"];
const _c1 = ["panel"];
const _c2 = [[["mat-select-trigger"]], "*"];
const _c3 = ["mat-select-trigger", "*"];
function MatSelect_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.placeholder);
  }
}
function MatSelect_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
  }
}
function MatSelect_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.triggerValue);
  }
}
function MatSelect_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](1, MatSelect_Conditional_5_Conditional_1_Template, 1, 0)(2, MatSelect_Conditional_5_Conditional_2_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx_r1.customTrigger ? 1 : 2);
  }
}
function MatSelect_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function MatSelect_ng_template_10_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1._handleKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinterpolate1"]("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ", ctx_r1._getPanelTheme()));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-select-panel-animations-enabled", !ctx_r1._animationsDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.panelClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx_r1.id + "-panel")("aria-multiselectable", ctx_r1.multiple)("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1._getPanelAriaLabelledby());
  }
}































function getMatSelectDynamicMultipleError() {
  return Error('Cannot change `multiple` mode of select after initialization.');
}
function getMatSelectNonArrayValueError() {
  return Error('Value must be an array in multiple-selection mode.');
}
function getMatSelectNonFunctionValueError() {
  return Error('`compareWith` must be a function.');
}
const MAT_SELECT_SCROLL_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('mat-select-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    const injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector);
    return () => (0,_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.createRepositionScrollStrategy)(injector);
  }
});
const MAT_SELECT_CONFIG = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('MAT_SELECT_CONFIG');
const MAT_SELECT_TRIGGER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('MatSelectTrigger');
class MatSelectChange {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
}
let MatSelect = /*#__PURE__*/(() => {
  class MatSelect {
    _viewportRuler = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__.ViewportRuler);
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef);
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
    _dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Directionality, {
      optional: true
    });
    _idGenerator = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__._IdGenerator);
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2);
    _parentFormField = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.MAT_FORM_FIELD, {
      optional: true
    });
    ngControl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControl, {
      self: true,
      optional: true
    });
    _liveAnnouncer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.LiveAnnouncer);
    _defaultOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(MAT_SELECT_CONFIG, {
      optional: true
    });
    _animationsDisabled = (0,_animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_14__._animationsDisabled)();
    _popoverLocation;
    _initialized = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    _cleanupDetach;
    options;
    optionGroups;
    customTrigger;
    _positions = [{
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top'
    }, {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom',
      panelClass: 'mat-mdc-select-panel-above'
    }, {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom',
      panelClass: 'mat-mdc-select-panel-above'
    }];
    _scrollOptionIntoView(index) {
      const option = this.options.toArray()[index];
      if (option) {
        const panel = this.panel.nativeElement;
        const labelCount = (0,_option_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__._countGroupLabelsBeforeOption)(index, this.options, this.optionGroups);
        const element = option._getHostElement();
        if (index === 0 && labelCount === 1) {
          panel.scrollTop = 0;
        } else {
          panel.scrollTop = (0,_option_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__._getOptionScrollPosition)(element.offsetTop, element.offsetHeight, panel.scrollTop, panel.offsetHeight);
        }
      }
    }
    _positioningSettled() {
      this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
    }
    _getChangeEvent(value) {
      return new MatSelectChange(this, value);
    }
    _scrollStrategyFactory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(MAT_SELECT_SCROLL_STRATEGY);
    _panelOpen = false;
    _compareWith = (o1, o2) => o1 === o2;
    _uid = this._idGenerator.getId('mat-select-');
    _triggerAriaLabelledBy = null;
    _previousControl;
    _destroy = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    _errorStateTracker;
    stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    disableAutomaticLabeling = true;
    userAriaDescribedBy;
    _selectionModel;
    _keyManager;
    _preferredOverlayOrigin;
    _overlayWidth;
    _onChange = () => {};
    _onTouched = () => {};
    _valueId = this._idGenerator.getId('mat-select-value-');
    _scrollStrategy;
    _overlayPanelClass = this._defaultOptions?.overlayPanelClass || '';
    get focused() {
      return this._focused || this._panelOpen;
    }
    _focused = false;
    controlType = 'mat-select';
    trigger;
    panel;
    _overlayDir;
    panelClass;
    disabled = false;
    get disableRipple() {
      return this._disableRipple();
    }
    set disableRipple(value) {
      this._disableRipple.set(value);
    }
    _disableRipple = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)(false, ...(ngDevMode ? [{
      debugName: "_disableRipple"
    }] : []));
    tabIndex = 0;
    get hideSingleSelectionIndicator() {
      return this._hideSingleSelectionIndicator;
    }
    set hideSingleSelectionIndicator(value) {
      this._hideSingleSelectionIndicator = value;
      this._syncParentProperties();
    }
    _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
    get placeholder() {
      return this._placeholder;
    }
    set placeholder(value) {
      this._placeholder = value;
      this.stateChanges.next();
    }
    _placeholder;
    get required() {
      return this._required ?? this.ngControl?.control?.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required) ?? false;
    }
    set required(value) {
      this._required = value;
      this.stateChanges.next();
    }
    _required;
    get multiple() {
      return this._multiple;
    }
    set multiple(value) {
      if (this._selectionModel && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatSelectDynamicMultipleError();
      }
      this._multiple = value;
    }
    _multiple = false;
    disableOptionCentering = this._defaultOptions?.disableOptionCentering ?? false;
    get compareWith() {
      return this._compareWith;
    }
    set compareWith(fn) {
      if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatSelectNonFunctionValueError();
      }
      this._compareWith = fn;
      if (this._selectionModel) {
        this._initializeSelection();
      }
    }
    get value() {
      return this._value;
    }
    set value(newValue) {
      const hasAssigned = this._assignValue(newValue);
      if (hasAssigned) {
        this._onChange(newValue);
      }
    }
    _value;
    ariaLabel = '';
    ariaLabelledby;
    get errorStateMatcher() {
      return this._errorStateTracker.matcher;
    }
    set errorStateMatcher(value) {
      this._errorStateTracker.matcher = value;
    }
    typeaheadDebounceInterval;
    sortComparator;
    get id() {
      return this._id;
    }
    set id(value) {
      this._id = value || this._uid;
      this.stateChanges.next();
    }
    _id;
    get errorState() {
      return this._errorStateTracker.errorState;
    }
    set errorState(value) {
      this._errorStateTracker.errorState = value;
    }
    panelWidth = this._defaultOptions && typeof this._defaultOptions.panelWidth !== 'undefined' ? this._defaultOptions.panelWidth : 'auto';
    canSelectNullableOptions = this._defaultOptions?.canSelectNullableOptions ?? false;
    optionSelectionChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.defer)(() => {
      const options = this.options;
      if (options) {
        return options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(options), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(...options.map(option => option.onSelectionChange))));
      }
      return this._initialized.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(() => this.optionSelectionChanges));
    });
    openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    _openedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(o => o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => {}));
    _closedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(o => !o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => {}));
    selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    constructor() {
      const defaultErrorStateMatcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_error_options_chunk_mjs__WEBPACK_IMPORTED_MODULE_15__.ErrorStateMatcher);
      const parentForm = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, {
        optional: true
      });
      const parentFormGroup = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, {
        optional: true
      });
      const tabIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(new _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostAttributeToken('tabindex'), {
        optional: true
      });
      const defaultPopoverConfig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.OVERLAY_DEFAULT_CONFIG, {
        optional: true
      });
      if (this.ngControl) {
        this.ngControl.valueAccessor = this;
      }
      if (this._defaultOptions?.typeaheadDebounceInterval != null) {
        this.typeaheadDebounceInterval = this._defaultOptions.typeaheadDebounceInterval;
      }
      this._errorStateTracker = new _error_state_chunk_mjs__WEBPACK_IMPORTED_MODULE_16__._ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
      this._scrollStrategy = this._scrollStrategyFactory();
      this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
      this._popoverLocation = defaultPopoverConfig?.usePopover === false ? null : 'inline';
      this.id = this.id;
    }
    ngOnInit() {
      this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(this.multiple);
      this.stateChanges.next();
      this._viewportRuler.change().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroy)).subscribe(() => {
        if (this.panelOpen) {
          this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
          this._changeDetectorRef.detectChanges();
        }
      });
    }
    ngAfterContentInit() {
      this._initialized.next();
      this._initialized.complete();
      this._initKeyManager();
      this._selectionModel.changed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroy)).subscribe(event => {
        event.added.forEach(option => option.select());
        event.removed.forEach(option => option.deselect());
      });
      this.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroy)).subscribe(() => {
        this._resetOptions();
        this._initializeSelection();
      });
    }
    ngDoCheck() {
      const newAriaLabelledby = this._getTriggerAriaLabelledby();
      const ngControl = this.ngControl;
      if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
        const element = this._elementRef.nativeElement;
        this._triggerAriaLabelledBy = newAriaLabelledby;
        if (newAriaLabelledby) {
          element.setAttribute('aria-labelledby', newAriaLabelledby);
        } else {
          element.removeAttribute('aria-labelledby');
        }
      }
      if (ngControl) {
        if (this._previousControl !== ngControl.control) {
          if (this._previousControl !== undefined && ngControl.disabled !== null && ngControl.disabled !== this.disabled) {
            this.disabled = ngControl.disabled;
          }
          this._previousControl = ngControl.control;
        }
        this.updateErrorState();
      }
    }
    ngOnChanges(changes) {
      if (changes['disabled'] || changes['userAriaDescribedBy']) {
        this.stateChanges.next();
      }
      if (changes['typeaheadDebounceInterval'] && this._keyManager) {
        this._keyManager.withTypeAhead(this.typeaheadDebounceInterval);
      }
    }
    ngOnDestroy() {
      this._cleanupDetach?.();
      this._keyManager?.destroy();
      this._destroy.next();
      this._destroy.complete();
      this.stateChanges.complete();
      this._clearFromModal();
    }
    toggle() {
      this.panelOpen ? this.close() : this.open();
    }
    open() {
      if (!this._canOpen()) {
        return;
      }
      if (this._parentFormField) {
        this._preferredOverlayOrigin = this._parentFormField.getConnectedOverlayOrigin();
      }
      this._cleanupDetach?.();
      this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
      this._applyModalPanelOwnership();
      this._panelOpen = true;
      this._overlayDir.positionChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(() => {
        this._changeDetectorRef.detectChanges();
        this._positioningSettled();
      });
      this._overlayDir.attachOverlay();
      this._keyManager.withHorizontalOrientation(null);
      this._highlightCorrectOption();
      this._changeDetectorRef.markForCheck();
      this.stateChanges.next();
      Promise.resolve().then(() => this.openedChange.emit(true));
    }
    _trackedModal = null;
    _applyModalPanelOwnership() {
      const modal = this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');
      if (!modal) {
        return;
      }
      const panelId = `${this.id}-panel`;
      if (this._trackedModal) {
        (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.removeAriaReferencedId)(this._trackedModal, 'aria-owns', panelId);
      }
      (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.addAriaReferencedId)(modal, 'aria-owns', panelId);
      this._trackedModal = modal;
    }
    _clearFromModal() {
      if (!this._trackedModal) {
        return;
      }
      const panelId = `${this.id}-panel`;
      (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.removeAriaReferencedId)(this._trackedModal, 'aria-owns', panelId);
      this._trackedModal = null;
    }
    close() {
      if (this._panelOpen) {
        this._panelOpen = false;
        this._exitAndDetach();
        this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');
        this._changeDetectorRef.markForCheck();
        this._onTouched();
        this.stateChanges.next();
        Promise.resolve().then(() => this.openedChange.emit(false));
      }
    }
    _exitAndDetach() {
      if (this._animationsDisabled || !this.panel) {
        this._detachOverlay();
        return;
      }
      this._cleanupDetach?.();
      this._cleanupDetach = () => {
        cleanupEvent();
        clearTimeout(exitFallbackTimer);
        this._cleanupDetach = undefined;
      };
      const panel = this.panel.nativeElement;
      const cleanupEvent = this._renderer.listen(panel, 'animationend', event => {
        if (event.animationName === '_mat-select-exit') {
          this._cleanupDetach?.();
          this._detachOverlay();
        }
      });
      const exitFallbackTimer = setTimeout(() => {
        this._cleanupDetach?.();
        this._detachOverlay();
      }, 200);
      panel.classList.add('mat-select-panel-exit');
    }
    _detachOverlay() {
      this._overlayDir.detachOverlay();
      this._changeDetectorRef.markForCheck();
    }
    writeValue(value) {
      this._assignValue(value);
    }
    registerOnChange(fn) {
      this._onChange = fn;
    }
    registerOnTouched(fn) {
      this._onTouched = fn;
    }
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
      this._changeDetectorRef.markForCheck();
      this.stateChanges.next();
    }
    get panelOpen() {
      return this._panelOpen;
    }
    get selected() {
      return this.multiple ? this._selectionModel?.selected || [] : this._selectionModel?.selected[0];
    }
    get triggerValue() {
      if (this.empty) {
        return '';
      }
      if (this._multiple) {
        const selectedOptions = this._selectionModel.selected.map(option => option.viewValue);
        if (this._isRtl()) {
          selectedOptions.reverse();
        }
        return selectedOptions.join(', ');
      }
      return this._selectionModel.selected[0].viewValue;
    }
    updateErrorState() {
      this._errorStateTracker.updateErrorState();
    }
    _isRtl() {
      return this._dir ? this._dir.value === 'rtl' : false;
    }
    _handleKeydown(event) {
      if (!this.disabled) {
        this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
      }
    }
    _handleClosedKeydown(event) {
      const keyCode = event.keyCode;
      const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.DOWN_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.LEFT_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.RIGHT_ARROW;
      const isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.SPACE;
      const manager = this._keyManager;
      if (!manager.isTyping() && isOpenKey && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event) || (this.multiple || event.altKey) && isArrowKey) {
        event.preventDefault();
        this.open();
      } else if (!this.multiple) {
        const previouslySelectedOption = this.selected;
        manager.onKeydown(event);
        const selectedOption = this.selected;
        if (selectedOption && previouslySelectedOption !== selectedOption) {
          this._liveAnnouncer.announce(selectedOption.viewValue, 10000);
        }
      }
    }
    _handleOpenKeydown(event) {
      const manager = this._keyManager;
      const keyCode = event.keyCode;
      const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.DOWN_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.UP_ARROW;
      const isTyping = manager.isTyping();
      if (isArrowKey && event.altKey) {
        event.preventDefault();
        this.close();
      } else if (!isTyping && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.SPACE) && manager.activeItem && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event)) {
        event.preventDefault();
        manager.activeItem._selectViaInteraction();
      } else if (!isTyping && this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.A && event.ctrlKey) {
        event.preventDefault();
        const hasDeselectedOptions = this.options.some(opt => !opt.disabled && !opt.selected);
        this.options.forEach(option => {
          if (!option.disabled) {
            hasDeselectedOptions ? option.select() : option.deselect();
          }
        });
      } else {
        const previouslyFocusedIndex = manager.activeItemIndex;
        manager.onKeydown(event);
        if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
          manager.activeItem._selectViaInteraction();
        }
      }
    }
    _handleOverlayKeydown(event) {
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event)) {
        event.preventDefault();
        this.close();
      }
    }
    _onFocus() {
      if (!this.disabled) {
        this._focused = true;
        this.stateChanges.next();
      }
    }
    _onBlur() {
      this._focused = false;
      this._keyManager?.cancelTypeahead();
      if (!this.disabled && !this.panelOpen) {
        this._onTouched();
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
      }
    }
    _getPanelTheme() {
      return this._parentFormField ? `mat-${this._parentFormField.color}` : '';
    }
    get empty() {
      return !this._selectionModel || this._selectionModel.isEmpty();
    }
    _initializeSelection() {
      Promise.resolve().then(() => {
        if (this.ngControl) {
          this._value = this.ngControl.value;
        }
        this._setSelectionByValue(this._value);
        this.stateChanges.next();
      });
    }
    _setSelectionByValue(value) {
      this.options.forEach(option => option.setInactiveStyles());
      this._selectionModel.clear();
      if (this.multiple && value) {
        if (!Array.isArray(value) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getMatSelectNonArrayValueError();
        }
        value.forEach(currentValue => this._selectOptionByValue(currentValue));
        this._sortValues();
      } else {
        const correspondingOption = this._selectOptionByValue(value);
        if (correspondingOption) {
          this._keyManager.updateActiveItem(correspondingOption);
        } else if (!this.panelOpen) {
          this._keyManager.updateActiveItem(-1);
        }
      }
      this._changeDetectorRef.markForCheck();
    }
    _selectOptionByValue(value) {
      const correspondingOption = this.options.find(option => {
        if (this._selectionModel.isSelected(option)) {
          return false;
        }
        try {
          return (option.value != null || this.canSelectNullableOptions) && this._compareWith(option.value, value);
        } catch (error) {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            console.warn(error);
          }
          return false;
        }
      });
      if (correspondingOption) {
        this._selectionModel.select(correspondingOption);
      }
      return correspondingOption;
    }
    _assignValue(newValue) {
      if (newValue !== this._value || this._multiple && Array.isArray(newValue)) {
        if (this.options) {
          this._setSelectionByValue(newValue);
        }
        this._value = newValue;
        return true;
      }
      return false;
    }
    _skipPredicate = option => {
      if (this.panelOpen) {
        return false;
      }
      return option.disabled;
    };
    _getOverlayWidth(preferredOrigin) {
      if (this.panelWidth === 'auto') {
        const refToMeasure = preferredOrigin instanceof _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.CdkOverlayOrigin ? preferredOrigin.elementRef : preferredOrigin || this._elementRef;
        return refToMeasure.nativeElement.getBoundingClientRect().width;
      }
      return this.panelWidth === null ? '' : this.panelWidth;
    }
    _syncParentProperties() {
      if (this.options) {
        for (const option of this.options) {
          option._changeDetectorRef.markForCheck();
        }
      }
    }
    _initKeyManager() {
      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.ActiveDescendantKeyManager(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr').withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(['shiftKey']).skipPredicate(this._skipPredicate);
      this._keyManager.tabOut.subscribe(() => {
        if (this.panelOpen) {
          if (!this.multiple && this._keyManager.activeItem) {
            this._keyManager.activeItem._selectViaInteraction();
          }
          this.focus();
          this.close();
        }
      });
      this._keyManager.change.subscribe(() => {
        if (this._panelOpen && this.panel) {
          this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
        } else if (!this._panelOpen && !this.multiple && this._keyManager.activeItem) {
          this._keyManager.activeItem._selectViaInteraction();
        }
      });
    }
    _resetOptions() {
      const changedOrDestroyed = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(this.options.changes, this._destroy);
      this.optionSelectionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(changedOrDestroyed)).subscribe(event => {
        this._onSelect(event.source, event.isUserInput);
        if (event.isUserInput && !this.multiple && this._panelOpen) {
          this.close();
          this.focus();
        }
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(...this.options.map(option => option._stateChanges)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(changedOrDestroyed)).subscribe(() => {
        this._changeDetectorRef.detectChanges();
        this.stateChanges.next();
      });
    }
    _onSelect(option, isUserInput) {
      const wasSelected = this._selectionModel.isSelected(option);
      if (!this.canSelectNullableOptions && option.value == null && !this._multiple) {
        option.deselect();
        this._selectionModel.clear();
        if (this.value != null) {
          this._propagateChanges(option.value);
        }
      } else {
        if (wasSelected !== option.selected) {
          option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
        }
        if (isUserInput) {
          this._keyManager.setActiveItem(option);
        }
        if (this.multiple) {
          this._sortValues();
          if (isUserInput) {
            this.focus();
          }
        }
      }
      if (wasSelected !== this._selectionModel.isSelected(option)) {
        this._propagateChanges();
      }
      this.stateChanges.next();
    }
    _sortValues() {
      if (this.multiple) {
        const options = this.options.toArray();
        this._selectionModel.sort((a, b) => {
          return this.sortComparator ? this.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
        });
        this.stateChanges.next();
      }
    }
    _propagateChanges(fallbackValue) {
      let valueToEmit;
      if (this.multiple) {
        valueToEmit = this.selected.map(option => option.value);
      } else {
        valueToEmit = this.selected ? this.selected.value : fallbackValue;
      }
      this._value = valueToEmit;
      this.valueChange.emit(valueToEmit);
      this._onChange(valueToEmit);
      this.selectionChange.emit(this._getChangeEvent(valueToEmit));
      this._changeDetectorRef.markForCheck();
    }
    _highlightCorrectOption() {
      if (this._keyManager) {
        if (this.empty) {
          let firstEnabledOptionIndex = -1;
          for (let index = 0; index < this.options.length; index++) {
            const option = this.options.get(index);
            if (!option.disabled) {
              firstEnabledOptionIndex = index;
              break;
            }
          }
          this._keyManager.setActiveItem(firstEnabledOptionIndex);
        } else {
          this._keyManager.setActiveItem(this._selectionModel.selected[0]);
        }
      }
    }
    _canOpen() {
      return !this._panelOpen && !this.disabled && this.options?.length > 0 && !!this._overlayDir;
    }
    focus(options) {
      this._elementRef.nativeElement.focus(options);
    }
    _getPanelAriaLabelledby() {
      if (this.ariaLabel) {
        return null;
      }
      const labelId = this._parentFormField?.getLabelId() || null;
      const labelExpression = labelId ? labelId + ' ' : '';
      return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
    }
    _getAriaActiveDescendant() {
      if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
        return this._keyManager.activeItem.id;
      }
      return null;
    }
    _getTriggerAriaLabelledby() {
      if (this.ariaLabel) {
        return null;
      }
      let value = this._parentFormField?.getLabelId() || '';
      if (this.ariaLabelledby) {
        value += ' ' + this.ariaLabelledby;
      }
      if (!value) {
        value = this._valueId;
      }
      return value;
    }
    get describedByIds() {
      const element = this._elementRef.nativeElement;
      const existingDescribedBy = element.getAttribute('aria-describedby');
      return existingDescribedBy?.split(' ') || [];
    }
    setDescribedByIds(ids) {
      const element = this._elementRef.nativeElement;
      if (ids.length) {
        element.setAttribute('aria-describedby', ids.join(' '));
      } else {
        element.removeAttribute('aria-describedby');
      }
    }
    onContainerClick(event) {
      const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__._getEventTarget)(event);
      if (target && (target.tagName === 'MAT-OPTION' || target.classList.contains('cdk-overlay-backdrop') || target.closest('.mat-mdc-select-panel'))) {
        return;
      }
      this.focus();
      this.open();
    }
    get shouldLabelFloat() {
      return this.panelOpen || !this.empty || this.focused && !!this.placeholder;
    }
    static ɵfac = function MatSelect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatSelect)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatSelect,
      selectors: [["mat-select"]],
      contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MAT_SELECT_TRIGGER, 5)(dirIndex, _option_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatOption, 5)(dirIndex, _option_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAT_OPTGROUP, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.options = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
        }
      },
      viewQuery: function MatSelect_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5)(_c1, 5)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.CdkConnectedOverlay, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._overlayDir = _t.first);
        }
      },
      hostAttrs: ["role", "combobox", "aria-haspopup", "listbox", 1, "mat-mdc-select"],
      hostVars: 21,
      hostBindings: function MatSelect_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function MatSelect_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          })("focus", function MatSelect_focus_HostBindingHandler() {
            return ctx._onFocus();
          })("blur", function MatSelect_blur_HostBindingHandler() {
            return ctx._onBlur();
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-controls", ctx.panelOpen ? ctx.id + "-panel" : null)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-activedescendant", ctx._getAriaActiveDescendant());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-mdc-select-disabled", ctx.disabled)("mat-mdc-select-invalid", ctx.errorState)("mat-mdc-select-required", ctx.required)("mat-mdc-select-empty", ctx.empty)("mat-mdc-select-multiple", ctx.multiple)("mat-select-open", ctx.panelOpen);
        }
      },
      inputs: {
        userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
        panelClass: "panelClass",
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute],
        disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute],
        tabIndex: [2, "tabIndex", "tabIndex", value => value == null ? 0 : (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.numberAttribute)(value)],
        hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute],
        placeholder: "placeholder",
        required: [2, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute],
        multiple: [2, "multiple", "multiple", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute],
        disableOptionCentering: [2, "disableOptionCentering", "disableOptionCentering", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute],
        compareWith: "compareWith",
        value: "value",
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        errorStateMatcher: "errorStateMatcher",
        typeaheadDebounceInterval: [2, "typeaheadDebounceInterval", "typeaheadDebounceInterval", _angular_core__WEBPACK_IMPORTED_MODULE_3__.numberAttribute],
        sortComparator: "sortComparator",
        id: "id",
        panelWidth: "panelWidth",
        canSelectNullableOptions: [2, "canSelectNullableOptions", "canSelectNullableOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute]
      },
      outputs: {
        openedChange: "openedChange",
        _openedStream: "opened",
        _closedStream: "closed",
        selectionChange: "selectionChange",
        valueChange: "valueChange"
      },
      exportAs: ["matSelect"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldControl,
        useExisting: MatSelect
      }, {
        provide: _option_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatSelect
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c3,
      decls: 11,
      vars: 10,
      consts: [["fallbackOverlayOrigin", "cdkOverlayOrigin", "trigger", ""], ["panel", ""], ["cdk-overlay-origin", "", 1, "mat-mdc-select-trigger", 3, "click"], [1, "mat-mdc-select-value"], [1, "mat-mdc-select-placeholder", "mat-mdc-select-min-line"], [1, "mat-mdc-select-value-text"], [1, "mat-mdc-select-arrow-wrapper"], [1, "mat-mdc-select-arrow"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "focusable", "false", "aria-hidden", "true"], ["d", "M7 10l5 5 5-5z"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "detach", "backdropClick", "overlayKeydown", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayWidth", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayUsePopover"], [1, "mat-mdc-select-min-line"], ["role", "listbox", "tabindex", "-1", 3, "keydown", "ngClass"]],
      template: function MatSelect_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatSelect_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.open());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](4, MatSelect_Conditional_4_Template, 2, 1, "span", 4)(5, MatSelect_Conditional_5_Template, 3, 1, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "svg", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "path", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MatSelect_ng_template_10_Template, 3, 10, "ng-template", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("detach", function MatSelect_Template_ng_template_detach_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.close());
          })("backdropClick", function MatSelect_Template_ng_template_backdropClick_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.close());
          })("overlayKeydown", function MatSelect_Template_ng_template_overlayKeydown_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx._handleOverlayKeydown($event));
          });
        }
        if (rf & 2) {
          const fallbackOverlayOrigin_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx._valueId);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.empty ? 4 : 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkConnectedOverlayDisableClose", true)("cdkConnectedOverlayPanelClass", ctx._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", ctx._preferredOverlayOrigin || fallbackOverlayOrigin_r4)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayWidth", ctx._overlayWidth)("cdkConnectedOverlayFlexibleDimensions", true)("cdkConnectedOverlayUsePopover", ctx._popoverLocation);
        }
      },
      dependencies: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.CdkOverlayOrigin, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.CdkConnectedOverlay, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass],
      styles: ["@keyframes _mat-select-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-select-exit{from{opacity:1}to{opacity:0}}.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));font-family:var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking))}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-disabled .mat-mdc-select-placeholder{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color, var(--mat-sys-error))}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-select-open .mat-mdc-select-arrow{transform:rotate(180deg)}.mat-form-field-animations-enabled .mat-mdc-select-arrow{transition:transform 80ms linear}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}@media(forced-colors: active){.mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .mat-mdc-select-arrow svg{fill:GrayText}}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:relative;background-color:var(--mat-select-panel-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-select-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-select-panel-animations-enabled{animation:_mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-select-panel-animations-enabled.mat-select-panel-exit{animation:_mat-select-exit 100ms linear}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder,._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:\" \";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform, translateY(-8px))}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatSelect;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatSelectTrigger = /*#__PURE__*/(() => {
  class MatSelectTrigger {
    static ɵfac = function MatSelectTrigger_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatSelectTrigger)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatSelectTrigger,
      selectors: [["mat-select-trigger"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: MAT_SELECT_TRIGGER,
        useExisting: MatSelectTrigger
      }])]
    });
  }
  return MatSelectTrigger;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatSelectModule = /*#__PURE__*/(() => {
  class MatSelectModule {
    static ɵfac = function MatSelectModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatSelectModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MatSelectModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.OverlayModule, _option_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_17__.MatOptionModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.BidiModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__.CdkScrollableModule, _form_field_mjs__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule, _option_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_17__.MatOptionModule]
    });
  }
  return MatSelectModule;
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

/***/ 54297
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_error-options-chunk.mjs ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorStateMatcher: () => (/* binding */ ErrorStateMatcher),
/* harmony export */   ShowOnDirtyErrorStateMatcher: () => (/* binding */ ShowOnDirtyErrorStateMatcher)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);


let ShowOnDirtyErrorStateMatcher = /*#__PURE__*/(() => {
  class ShowOnDirtyErrorStateMatcher {
    isErrorState(control, form) {
      return !!(control && control.invalid && (control.dirty || form && form.submitted));
    }
    static ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ShowOnDirtyErrorStateMatcher)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ShowOnDirtyErrorStateMatcher,
      factory: ShowOnDirtyErrorStateMatcher.ɵfac
    });
  }
  return ShowOnDirtyErrorStateMatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ErrorStateMatcher = /*#__PURE__*/(() => {
  class ErrorStateMatcher {
    isErrorState(control, form) {
      return !!(control && control.invalid && (control.touched || form && form.submitted));
    }
    static ɵfac = function ErrorStateMatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ErrorStateMatcher)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorStateMatcher,
      factory: ErrorStateMatcher.ɵfac,
      providedIn: 'root'
    });
  }
  return ErrorStateMatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 54612
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_error-state-chunk.mjs ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _ErrorStateTracker: () => (/* binding */ _ErrorStateTracker)
/* harmony export */ });
class _ErrorStateTracker {
  _defaultMatcher;
  ngControl;
  _parentFormGroup;
  _parentForm;
  _stateChanges;
  errorState = false;
  matcher;
  constructor(_defaultMatcher, ngControl, _parentFormGroup, _parentForm, _stateChanges) {
    this._defaultMatcher = _defaultMatcher;
    this.ngControl = ngControl;
    this._parentFormGroup = _parentFormGroup;
    this._parentForm = _parentForm;
    this._stateChanges = _stateChanges;
  }
  updateErrorState() {
    const oldState = this.errorState;
    const parent = this._parentFormGroup || this._parentForm;
    const matcher = this.matcher || this._defaultMatcher;
    const control = this.ngControl ? this.ngControl.control : null;
    const newState = matcher?.isErrorState(control, parent) ?? false;
    if (newState !== oldState) {
      this.errorState = newState;
      this._stateChanges.next();
    }
  }
}


/***/ },

/***/ 80423
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_form-field-chunk.mjs ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_ERROR: () => (/* binding */ MAT_ERROR),
/* harmony export */   MAT_FORM_FIELD: () => (/* binding */ MAT_FORM_FIELD),
/* harmony export */   MAT_FORM_FIELD_DEFAULT_OPTIONS: () => (/* binding */ MAT_FORM_FIELD_DEFAULT_OPTIONS),
/* harmony export */   MAT_PREFIX: () => (/* binding */ MAT_PREFIX),
/* harmony export */   MAT_SUFFIX: () => (/* binding */ MAT_SUFFIX),
/* harmony export */   MatError: () => (/* binding */ MatError),
/* harmony export */   MatFormField: () => (/* binding */ MatFormField),
/* harmony export */   MatFormFieldControl: () => (/* binding */ MatFormFieldControl),
/* harmony export */   MatHint: () => (/* binding */ MatHint),
/* harmony export */   MatLabel: () => (/* binding */ MatLabel),
/* harmony export */   MatPrefix: () => (/* binding */ MatPrefix),
/* harmony export */   MatSuffix: () => (/* binding */ MatSuffix),
/* harmony export */   getMatFormFieldDuplicatedHintError: () => (/* binding */ getMatFormFieldDuplicatedHintError),
/* harmony export */   getMatFormFieldMissingControlError: () => (/* binding */ getMatFormFieldMissingControlError),
/* harmony export */   getMatFormFieldPlaceholderConflictError: () => (/* binding */ getMatFormFieldPlaceholderConflictError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ 45562);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ 13266);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 32298);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 86456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 11674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _angular_cdk_observers_private__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/observers/private */ 36192);
/* harmony import */ var _animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_animation-chunk.mjs */ 87432);











const _c0 = ["notch"];
const _c1 = ["matFormFieldNotchedOutline", ""];
const _c2 = ["*"];
const _c3 = ["iconPrefixContainer"];
const _c4 = ["textPrefixContainer"];
const _c5 = ["iconSuffixContainer"];
const _c6 = ["textSuffixContainer"];
const _c7 = ["textField"];
const _c8 = ["*", [["mat-label"]], [["", "matPrefix", ""], ["", "matIconPrefix", ""]], [["", "matTextPrefix", ""]], [["", "matTextSuffix", ""]], [["", "matSuffix", ""], ["", "matIconSuffix", ""]], [["mat-error"], ["", "matError", ""]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
const _c9 = ["*", "mat-label", "[matPrefix], [matIconPrefix]", "[matTextPrefix]", "[matTextSuffix]", "[matSuffix], [matIconSuffix]", "mat-error, [matError]", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
function MatFormField_ng_template_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 21);
  }
}
function MatFormField_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](2, MatFormField_ng_template_0_Conditional_0_Conditional_2_Template, 1, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("floating", ctx_r1._shouldLabelFloat())("monitorResize", ctx_r1._hasOutline())("id", ctx_r1._labelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("for", ctx_r1._control.disableAutomaticLabeling ? null : ctx_r1._control.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx_r1.hideRequiredMarker && ctx_r1._control.required ? 2 : -1);
  }
}
function MatFormField_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](0, MatFormField_ng_template_0_Conditional_0_Template, 3, 5, "label", 20);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r1._hasFloatingLabel() ? 0 : -1);
  }
}
function MatFormField_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 7);
  }
}
function MatFormField_Conditional_6_Conditional_1_ng_template_0_Template(rf, ctx) {}
function MatFormField_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MatFormField_Conditional_6_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const labelTemplate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", labelTemplate_r3);
  }
}
function MatFormField_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](1, MatFormField_Conditional_6_Conditional_1_Template, 1, 1, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matFormFieldNotchedOutlineOpen", ctx_r1._shouldLabelFloat());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx_r1._forceDisplayInfixLabel() ? 1 : -1);
  }
}
function MatFormField_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MatFormField_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MatFormField_Conditional_10_ng_template_0_Template(rf, ctx) {}
function MatFormField_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MatFormField_Conditional_10_ng_template_0_Template, 0, 0, "ng-template", 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const labelTemplate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", labelTemplate_r3);
  }
}
function MatFormField_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MatFormField_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](2, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MatFormField_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 16);
  }
}
function MatFormField_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MatFormField_Case_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", ctx_r1._hintLabelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.hintLabel);
  }
}
function MatFormField_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](1, MatFormField_Case_17_Conditional_1_Template, 2, 2, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](4, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r1.hintLabel ? 1 : -1);
  }
}
let MatLabel = /*#__PURE__*/(() => {
  class MatLabel {
    static ɵfac = function MatLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatLabel)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: MatLabel,
      selectors: [["mat-label"]]
    });
  }
  return MatLabel;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const MAT_ERROR = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken('MatError');
let MatError = /*#__PURE__*/(() => {
  class MatError {
    id = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__._IdGenerator).getId('mat-mdc-error-');
    constructor() {}
    static ɵfac = function MatError_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatError)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: MatError,
      selectors: [["mat-error"], ["", "matError", ""]],
      hostAttrs: [1, "mat-mdc-form-field-error", "mat-mdc-form-field-bottom-align"],
      hostVars: 1,
      hostBindings: function MatError_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomProperty"]("id", ctx.id);
        }
      },
      inputs: {
        id: "id"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
        provide: MAT_ERROR,
        useExisting: MatError
      }])]
    });
  }
  return MatError;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatHint = /*#__PURE__*/(() => {
  class MatHint {
    align = 'start';
    id = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__._IdGenerator).getId('mat-mdc-hint-');
    static ɵfac = function MatHint_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatHint)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: MatHint,
      selectors: [["mat-hint"]],
      hostAttrs: [1, "mat-mdc-form-field-hint", "mat-mdc-form-field-bottom-align"],
      hostVars: 4,
      hostBindings: function MatHint_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomProperty"]("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("align", null);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mat-mdc-form-field-hint-end", ctx.align === "end");
        }
      },
      inputs: {
        align: "align",
        id: "id"
      }
    });
  }
  return MatHint;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const MAT_PREFIX = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken('MatPrefix');
let MatPrefix = /*#__PURE__*/(() => {
  class MatPrefix {
    set _isTextSelector(value) {
      this._isText = true;
    }
    _isText = false;
    static ɵfac = function MatPrefix_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatPrefix)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: MatPrefix,
      selectors: [["", "matPrefix", ""], ["", "matIconPrefix", ""], ["", "matTextPrefix", ""]],
      inputs: {
        _isTextSelector: [0, "matTextPrefix", "_isTextSelector"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
        provide: MAT_PREFIX,
        useExisting: MatPrefix
      }])]
    });
  }
  return MatPrefix;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const MAT_SUFFIX = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken('MatSuffix');
let MatSuffix = /*#__PURE__*/(() => {
  class MatSuffix {
    set _isTextSelector(value) {
      this._isText = true;
    }
    _isText = false;
    static ɵfac = function MatSuffix_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatSuffix)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: MatSuffix,
      selectors: [["", "matSuffix", ""], ["", "matIconSuffix", ""], ["", "matTextSuffix", ""]],
      inputs: {
        _isTextSelector: [0, "matTextSuffix", "_isTextSelector"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
        provide: MAT_SUFFIX,
        useExisting: MatSuffix
      }])]
    });
  }
  return MatSuffix;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const FLOATING_LABEL_PARENT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken('FloatingLabelParent');
let MatFormFieldFloatingLabel = /*#__PURE__*/(() => {
  class MatFormFieldFloatingLabel {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef);
    get floating() {
      return this._floating;
    }
    set floating(value) {
      this._floating = value;
      if (this.monitorResize) {
        this._handleResize();
      }
    }
    _floating = false;
    get monitorResize() {
      return this._monitorResize;
    }
    set monitorResize(value) {
      this._monitorResize = value;
      if (this._monitorResize) {
        this._subscribeToResize();
      } else {
        this._resizeSubscription.unsubscribe();
      }
    }
    _monitorResize = false;
    _resizeObserver = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_cdk_observers_private__WEBPACK_IMPORTED_MODULE_8__.SharedResizeObserver);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone);
    _parent = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(FLOATING_LABEL_PARENT);
    _resizeSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    constructor() {}
    ngOnDestroy() {
      this._resizeSubscription.unsubscribe();
    }
    getWidth() {
      return estimateScrollWidth(this._elementRef.nativeElement);
    }
    get element() {
      return this._elementRef.nativeElement;
    }
    _handleResize() {
      setTimeout(() => this._parent._handleLabelResized());
    }
    _subscribeToResize() {
      this._resizeSubscription.unsubscribe();
      this._ngZone.runOutsideAngular(() => {
        this._resizeSubscription = this._resizeObserver.observe(this._elementRef.nativeElement, {
          box: 'border-box'
        }).subscribe(() => this._handleResize());
      });
    }
    static ɵfac = function MatFormFieldFloatingLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatFormFieldFloatingLabel)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: MatFormFieldFloatingLabel,
      selectors: [["label", "matFormFieldFloatingLabel", ""]],
      hostAttrs: [1, "mdc-floating-label", "mat-mdc-floating-label"],
      hostVars: 2,
      hostBindings: function MatFormFieldFloatingLabel_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mdc-floating-label--float-above", ctx.floating);
        }
      },
      inputs: {
        floating: "floating",
        monitorResize: "monitorResize"
      }
    });
  }
  return MatFormFieldFloatingLabel;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function estimateScrollWidth(element) {
  const htmlEl = element;
  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }
  const clone = htmlEl.cloneNode(true);
  clone.style.setProperty('position', 'absolute');
  clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
  document.documentElement.appendChild(clone);
  const scrollWidth = clone.scrollWidth;
  clone.remove();
  return scrollWidth;
}
const ACTIVATE_CLASS = 'mdc-line-ripple--active';
const DEACTIVATING_CLASS = 'mdc-line-ripple--deactivating';
let MatFormFieldLineRipple = /*#__PURE__*/(() => {
  class MatFormFieldLineRipple {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef);
    _cleanupTransitionEnd;
    constructor() {
      const ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone);
      const renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2);
      ngZone.runOutsideAngular(() => {
        this._cleanupTransitionEnd = renderer.listen(this._elementRef.nativeElement, 'transitionend', this._handleTransitionEnd);
      });
    }
    activate() {
      const classList = this._elementRef.nativeElement.classList;
      classList.remove(DEACTIVATING_CLASS);
      classList.add(ACTIVATE_CLASS);
    }
    deactivate() {
      this._elementRef.nativeElement.classList.add(DEACTIVATING_CLASS);
    }
    _handleTransitionEnd = event => {
      const classList = this._elementRef.nativeElement.classList;
      const isDeactivating = classList.contains(DEACTIVATING_CLASS);
      if (event.propertyName === 'opacity' && isDeactivating) {
        classList.remove(ACTIVATE_CLASS, DEACTIVATING_CLASS);
      }
    };
    ngOnDestroy() {
      this._cleanupTransitionEnd();
    }
    static ɵfac = function MatFormFieldLineRipple_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatFormFieldLineRipple)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: MatFormFieldLineRipple,
      selectors: [["div", "matFormFieldLineRipple", ""]],
      hostAttrs: [1, "mdc-line-ripple"]
    });
  }
  return MatFormFieldLineRipple;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatFormFieldNotchedOutline = /*#__PURE__*/(() => {
  class MatFormFieldNotchedOutline {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone);
    open = false;
    _notch;
    ngAfterViewInit() {
      const element = this._elementRef.nativeElement;
      const label = element.querySelector('.mdc-floating-label');
      if (label) {
        element.classList.add('mdc-notched-outline--upgraded');
        if (typeof requestAnimationFrame === 'function') {
          label.style.transitionDuration = '0s';
          this._ngZone.runOutsideAngular(() => {
            requestAnimationFrame(() => label.style.transitionDuration = '');
          });
        }
      } else {
        element.classList.add('mdc-notched-outline--no-label');
      }
    }
    _setNotchWidth(labelWidth) {
      const notch = this._notch.nativeElement;
      if (!this.open || !labelWidth) {
        notch.style.width = '';
      } else {
        const NOTCH_ELEMENT_PADDING = 8;
        const NOTCH_ELEMENT_BORDER = 1;
        notch.style.width = `calc(${labelWidth}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + ${NOTCH_ELEMENT_PADDING + NOTCH_ELEMENT_BORDER}px)`;
      }
    }
    _setMaxWidth(prefixAndSuffixWidth) {
      this._notch.nativeElement.style.setProperty('--mat-form-field-notch-max-width', `calc(100% - ${prefixAndSuffixWidth}px)`);
    }
    static ɵfac = function MatFormFieldNotchedOutline_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatFormFieldNotchedOutline)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: MatFormFieldNotchedOutline,
      selectors: [["div", "matFormFieldNotchedOutline", ""]],
      viewQuery: function MatFormFieldNotchedOutline_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._notch = _t.first);
        }
      },
      hostAttrs: [1, "mdc-notched-outline"],
      hostVars: 2,
      hostBindings: function MatFormFieldNotchedOutline_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mdc-notched-outline--notched", ctx.open);
        }
      },
      inputs: {
        open: [0, "matFormFieldNotchedOutlineOpen", "open"]
      },
      attrs: _c1,
      ngContentSelectors: _c2,
      decls: 5,
      vars: 0,
      consts: [["notch", ""], [1, "mat-mdc-notch-piece", "mdc-notched-outline__leading"], [1, "mat-mdc-notch-piece", "mdc-notched-outline__notch"], [1, "mat-mdc-notch-piece", "mdc-notched-outline__trailing"]],
      template: function MatFormFieldNotchedOutline_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](1, "div", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](4, "div", 3);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatFormFieldNotchedOutline;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatFormFieldControl = /*#__PURE__*/(() => {
  class MatFormFieldControl {
    value = null;
    stateChanges;
    id;
    placeholder;
    ngControl = null;
    focused = false;
    empty = false;
    shouldLabelFloat = false;
    required = false;
    disabled = false;
    errorState = false;
    controlType;
    autofilled;
    userAriaDescribedBy;
    disableAutomaticLabeling;
    describedByIds;
    static ɵfac = function MatFormFieldControl_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatFormFieldControl)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: MatFormFieldControl
    });
  }
  return MatFormFieldControl;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function getMatFormFieldPlaceholderConflictError() {
  return Error('Placeholder attribute and child element were both specified.');
}
function getMatFormFieldDuplicatedHintError(align) {
  return Error(`A hint was already declared for 'align="${align}"'.`);
}
function getMatFormFieldMissingControlError() {
  return Error('mat-form-field must contain a MatFormFieldControl.');
}
const MAT_FORM_FIELD = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken('MatFormField');
const MAT_FORM_FIELD_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken('MAT_FORM_FIELD_DEFAULT_OPTIONS');
const DEFAULT_APPEARANCE = 'fill';
const DEFAULT_FLOAT_LABEL = 'auto';
const DEFAULT_SUBSCRIPT_SIZING = 'fixed';
const FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM = `translateY(-50%)`;
let MatFormField = /*#__PURE__*/(() => {
  class MatFormField {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef);
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef);
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform);
    _idGenerator = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__._IdGenerator);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone);
    _defaults = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(MAT_FORM_FIELD_DEFAULT_OPTIONS, {
      optional: true
    });
    _currentDirection;
    _textField;
    _iconPrefixContainer;
    _textPrefixContainer;
    _iconSuffixContainer;
    _textSuffixContainer;
    _floatingLabel;
    _notchedOutline;
    _lineRipple;
    _iconPrefixContainerSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.viewChild)('iconPrefixContainer', ...(ngDevMode ? [{
      debugName: "_iconPrefixContainerSignal"
    }] : []));
    _textPrefixContainerSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.viewChild)('textPrefixContainer', ...(ngDevMode ? [{
      debugName: "_textPrefixContainerSignal"
    }] : []));
    _iconSuffixContainerSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.viewChild)('iconSuffixContainer', ...(ngDevMode ? [{
      debugName: "_iconSuffixContainerSignal"
    }] : []));
    _textSuffixContainerSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.viewChild)('textSuffixContainer', ...(ngDevMode ? [{
      debugName: "_textSuffixContainerSignal"
    }] : []));
    _prefixSuffixContainers = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => {
      return [this._iconPrefixContainerSignal(), this._textPrefixContainerSignal(), this._iconSuffixContainerSignal(), this._textSuffixContainerSignal()].map(container => container?.nativeElement).filter(e => e !== undefined);
    }, ...(ngDevMode ? [{
      debugName: "_prefixSuffixContainers"
    }] : []));
    _formFieldControl;
    _prefixChildren;
    _suffixChildren;
    _errorChildren;
    _hintChildren;
    _labelChild = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.contentChild)(MatLabel, ...(ngDevMode ? [{
      debugName: "_labelChild"
    }] : []));
    get hideRequiredMarker() {
      return this._hideRequiredMarker;
    }
    set hideRequiredMarker(value) {
      this._hideRequiredMarker = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
    }
    _hideRequiredMarker = false;
    color = 'primary';
    get floatLabel() {
      return this._floatLabel || this._defaults?.floatLabel || DEFAULT_FLOAT_LABEL;
    }
    set floatLabel(value) {
      if (value !== this._floatLabel) {
        this._floatLabel = value;
        this._changeDetectorRef.markForCheck();
      }
    }
    _floatLabel;
    get appearance() {
      return this._appearanceSignal();
    }
    set appearance(value) {
      const newAppearance = value || this._defaults?.appearance || DEFAULT_APPEARANCE;
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (newAppearance !== 'fill' && newAppearance !== 'outline') {
          throw new Error(`MatFormField: Invalid appearance "${newAppearance}", valid values are "fill" or "outline".`);
        }
      }
      this._appearanceSignal.set(newAppearance);
    }
    _appearanceSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)(DEFAULT_APPEARANCE, ...(ngDevMode ? [{
      debugName: "_appearanceSignal"
    }] : []));
    get subscriptSizing() {
      return this._subscriptSizing || this._defaults?.subscriptSizing || DEFAULT_SUBSCRIPT_SIZING;
    }
    set subscriptSizing(value) {
      this._subscriptSizing = value || this._defaults?.subscriptSizing || DEFAULT_SUBSCRIPT_SIZING;
    }
    _subscriptSizing = null;
    get hintLabel() {
      return this._hintLabel;
    }
    set hintLabel(value) {
      this._hintLabel = value;
      this._processHints();
    }
    _hintLabel = '';
    _hasIconPrefix = false;
    _hasTextPrefix = false;
    _hasIconSuffix = false;
    _hasTextSuffix = false;
    _labelId = this._idGenerator.getId('mat-mdc-form-field-label-');
    _hintLabelId = this._idGenerator.getId('mat-mdc-hint-');
    _describedByIds;
    get _control() {
      return this._explicitFormFieldControl || this._formFieldControl;
    }
    set _control(value) {
      this._explicitFormFieldControl = value;
    }
    _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    _isFocused = null;
    _explicitFormFieldControl;
    _previousControl = null;
    _previousControlValidatorFn = null;
    _stateChanges;
    _valueChanges;
    _describedByChanges;
    _outlineLabelOffsetResizeObserver = null;
    _animationsDisabled = (0,_animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__._animationsDisabled)();
    constructor() {
      const defaults = this._defaults;
      const dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__.Directionality);
      if (defaults) {
        if (defaults.appearance) {
          this.appearance = defaults.appearance;
        }
        this._hideRequiredMarker = Boolean(defaults?.hideRequiredMarker);
        if (defaults.color) {
          this.color = defaults.color;
        }
      }
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.effect)(() => this._currentDirection = dir.valueSignal());
      this._syncOutlineLabelOffset();
    }
    ngAfterViewInit() {
      this._updateFocusState();
      if (!this._animationsDisabled) {
        this._ngZone.runOutsideAngular(() => {
          setTimeout(() => {
            this._elementRef.nativeElement.classList.add('mat-form-field-animations-enabled');
          }, 300);
        });
      }
      this._changeDetectorRef.detectChanges();
    }
    ngAfterContentInit() {
      this._assertFormFieldControl();
      this._initializeSubscript();
      this._initializePrefixAndSuffix();
    }
    ngAfterContentChecked() {
      this._assertFormFieldControl();
      if (this._control !== this._previousControl) {
        this._initializeControl(this._previousControl);
        if (this._control.ngControl && this._control.ngControl.control) {
          this._previousControlValidatorFn = this._control.ngControl.control.validator;
        }
        this._previousControl = this._control;
      }
      if (this._control.ngControl && this._control.ngControl.control) {
        const validatorFn = this._control.ngControl.control.validator;
        if (validatorFn !== this._previousControlValidatorFn) {
          this._changeDetectorRef.markForCheck();
        }
      }
    }
    ngOnDestroy() {
      this._outlineLabelOffsetResizeObserver?.disconnect();
      this._stateChanges?.unsubscribe();
      this._valueChanges?.unsubscribe();
      this._describedByChanges?.unsubscribe();
      this._destroyed.next();
      this._destroyed.complete();
    }
    getLabelId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => this._hasFloatingLabel() ? this._labelId : null, ...(ngDevMode ? [{
      debugName: "getLabelId"
    }] : []));
    getConnectedOverlayOrigin() {
      return this._textField || this._elementRef;
    }
    _animateAndLockLabel() {
      if (this._hasFloatingLabel()) {
        this.floatLabel = 'always';
      }
    }
    _initializeControl(previousControl) {
      const control = this._control;
      const classPrefix = 'mat-mdc-form-field-type-';
      if (previousControl) {
        this._elementRef.nativeElement.classList.remove(classPrefix + previousControl.controlType);
      }
      if (control.controlType) {
        this._elementRef.nativeElement.classList.add(classPrefix + control.controlType);
      }
      this._stateChanges?.unsubscribe();
      this._stateChanges = control.stateChanges.subscribe(() => {
        this._updateFocusState();
        this._changeDetectorRef.markForCheck();
      });
      this._describedByChanges?.unsubscribe();
      this._describedByChanges = control.stateChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)([undefined, undefined]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => [control.errorState, control.userAriaDescribedBy]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.pairwise)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(([[prevErrorState, prevDescribedBy], [currentErrorState, currentDescribedBy]]) => {
        return prevErrorState !== currentErrorState || prevDescribedBy !== currentDescribedBy;
      })).subscribe(() => this._syncDescribedByIds());
      this._valueChanges?.unsubscribe();
      if (control.ngControl && control.ngControl.valueChanges) {
        this._valueChanges = control.ngControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
      }
    }
    _checkPrefixAndSuffixTypes() {
      this._hasIconPrefix = !!this._prefixChildren.find(p => !p._isText);
      this._hasTextPrefix = !!this._prefixChildren.find(p => p._isText);
      this._hasIconSuffix = !!this._suffixChildren.find(s => !s._isText);
      this._hasTextSuffix = !!this._suffixChildren.find(s => s._isText);
    }
    _initializePrefixAndSuffix() {
      this._checkPrefixAndSuffixTypes();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(() => {
        this._checkPrefixAndSuffixTypes();
        this._changeDetectorRef.markForCheck();
      });
    }
    _initializeSubscript() {
      this._hintChildren.changes.subscribe(() => {
        this._processHints();
        this._changeDetectorRef.markForCheck();
      });
      this._errorChildren.changes.subscribe(() => {
        this._syncDescribedByIds();
        this._changeDetectorRef.markForCheck();
      });
      this._validateHints();
      this._syncDescribedByIds();
    }
    _assertFormFieldControl() {
      if (!this._control && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatFormFieldMissingControlError();
      }
    }
    _updateFocusState() {
      const controlFocused = this._control.focused;
      if (controlFocused && !this._isFocused) {
        this._isFocused = true;
        this._lineRipple?.activate();
      } else if (!controlFocused && (this._isFocused || this._isFocused === null)) {
        this._isFocused = false;
        this._lineRipple?.deactivate();
      }
      this._elementRef.nativeElement.classList.toggle('mat-focused', controlFocused);
      this._textField?.nativeElement.classList.toggle('mdc-text-field--focused', controlFocused);
    }
    _syncOutlineLabelOffset() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.afterRenderEffect)({
        earlyRead: () => {
          if (this._appearanceSignal() !== 'outline') {
            this._outlineLabelOffsetResizeObserver?.disconnect();
            return null;
          }
          if (globalThis.ResizeObserver) {
            this._outlineLabelOffsetResizeObserver ||= new globalThis.ResizeObserver(() => {
              this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset());
            });
            for (const el of this._prefixSuffixContainers()) {
              this._outlineLabelOffsetResizeObserver.observe(el, {
                box: 'border-box'
              });
            }
          }
          return this._getOutlinedLabelOffset();
        },
        write: labelStyles => this._writeOutlinedLabelStyles(labelStyles())
      });
    }
    _shouldAlwaysFloat() {
      return this.floatLabel === 'always';
    }
    _hasOutline() {
      return this.appearance === 'outline';
    }
    _forceDisplayInfixLabel() {
      return !this._platform.isBrowser && this._prefixChildren.length && !this._shouldLabelFloat();
    }
    _hasFloatingLabel = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => !!this._labelChild(), ...(ngDevMode ? [{
      debugName: "_hasFloatingLabel"
    }] : []));
    _shouldLabelFloat() {
      if (!this._hasFloatingLabel()) {
        return false;
      }
      return this._control.shouldLabelFloat || this._shouldAlwaysFloat();
    }
    _shouldForward(prop) {
      const control = this._control ? this._control.ngControl : null;
      return control && control[prop];
    }
    _getSubscriptMessageType() {
      return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
    }
    _handleLabelResized() {
      this._refreshOutlineNotchWidth();
    }
    _refreshOutlineNotchWidth() {
      if (!this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat()) {
        this._notchedOutline?._setNotchWidth(0);
      } else {
        this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth());
      }
    }
    _processHints() {
      this._validateHints();
      this._syncDescribedByIds();
    }
    _validateHints() {
      if (this._hintChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        let startHint;
        let endHint;
        this._hintChildren.forEach(hint => {
          if (hint.align === 'start') {
            if (startHint || this.hintLabel) {
              throw getMatFormFieldDuplicatedHintError('start');
            }
            startHint = hint;
          } else if (hint.align === 'end') {
            if (endHint) {
              throw getMatFormFieldDuplicatedHintError('end');
            }
            endHint = hint;
          }
        });
      }
    }
    _syncDescribedByIds() {
      if (this._control) {
        let ids = [];
        if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy === 'string') {
          ids.push(...this._control.userAriaDescribedBy.split(' '));
        }
        if (this._getSubscriptMessageType() === 'hint') {
          const startHint = this._hintChildren ? this._hintChildren.find(hint => hint.align === 'start') : null;
          const endHint = this._hintChildren ? this._hintChildren.find(hint => hint.align === 'end') : null;
          if (startHint) {
            ids.push(startHint.id);
          } else if (this._hintLabel) {
            ids.push(this._hintLabelId);
          }
          if (endHint) {
            ids.push(endHint.id);
          }
        } else if (this._errorChildren) {
          ids.push(...this._errorChildren.map(error => error.id));
        }
        const existingDescribedBy = this._control.describedByIds;
        let toAssign;
        if (existingDescribedBy) {
          const exclude = this._describedByIds || ids;
          toAssign = ids.concat(existingDescribedBy.filter(id => id && !exclude.includes(id)));
        } else {
          toAssign = ids;
        }
        this._control.setDescribedByIds(toAssign);
        this._describedByIds = ids;
      }
    }
    _getOutlinedLabelOffset() {
      if (!this._hasOutline() || !this._floatingLabel) {
        return null;
      }
      if (!this._iconPrefixContainer && !this._textPrefixContainer) {
        return ['', null];
      }
      if (!this._isAttachedToDom()) {
        return null;
      }
      const iconPrefixContainer = this._iconPrefixContainer?.nativeElement;
      const textPrefixContainer = this._textPrefixContainer?.nativeElement;
      const iconSuffixContainer = this._iconSuffixContainer?.nativeElement;
      const textSuffixContainer = this._textSuffixContainer?.nativeElement;
      const iconPrefixContainerWidth = iconPrefixContainer?.getBoundingClientRect().width ?? 0;
      const textPrefixContainerWidth = textPrefixContainer?.getBoundingClientRect().width ?? 0;
      const iconSuffixContainerWidth = iconSuffixContainer?.getBoundingClientRect().width ?? 0;
      const textSuffixContainerWidth = textSuffixContainer?.getBoundingClientRect().width ?? 0;
      const negate = this._currentDirection === 'rtl' ? '-1' : '1';
      const prefixWidth = `${iconPrefixContainerWidth + textPrefixContainerWidth}px`;
      const labelOffset = `var(--mat-mdc-form-field-label-offset-x, 0px)`;
      const labelHorizontalOffset = `calc(${negate} * (${prefixWidth} + ${labelOffset}))`;
      const floatingLabelTransform = 'var(--mat-mdc-form-field-label-transform, ' + `${FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM} translateX(${labelHorizontalOffset}))`;
      const notchedOutlineWidth = iconPrefixContainerWidth + textPrefixContainerWidth + iconSuffixContainerWidth + textSuffixContainerWidth;
      return [floatingLabelTransform, notchedOutlineWidth];
    }
    _writeOutlinedLabelStyles(styles) {
      if (styles !== null) {
        const [floatingLabelTransform, notchedOutlineWidth] = styles;
        if (this._floatingLabel) {
          this._floatingLabel.element.style.transform = floatingLabelTransform;
        }
        if (notchedOutlineWidth !== null) {
          this._notchedOutline?._setMaxWidth(notchedOutlineWidth);
        }
      }
    }
    _isAttachedToDom() {
      const element = this._elementRef.nativeElement;
      if (element.getRootNode) {
        const rootNode = element.getRootNode();
        return rootNode && rootNode !== element;
      }
      return document.documentElement.contains(element);
    }
    static ɵfac = function MatFormField_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatFormField)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: MatFormField,
      selectors: [["mat-form-field"]],
      contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuerySignal"](dirIndex, ctx._labelChild, MatLabel, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, 5)(dirIndex, MAT_PREFIX, 5)(dirIndex, MAT_SUFFIX, 5)(dirIndex, MAT_ERROR, 5)(dirIndex, MatHint, 5);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryAdvance"]();
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._formFieldControl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
        }
      },
      viewQuery: function MatFormField_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuerySignal"](ctx._iconPrefixContainerSignal, _c3, 5)(ctx._textPrefixContainerSignal, _c4, 5)(ctx._iconSuffixContainerSignal, _c5, 5)(ctx._textSuffixContainerSignal, _c6, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c7, 5)(_c3, 5)(_c4, 5)(_c5, 5)(_c6, 5)(MatFormFieldFloatingLabel, 5)(MatFormFieldNotchedOutline, 5)(MatFormFieldLineRipple, 5);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryAdvance"](4);
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._textField = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._iconPrefixContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._textPrefixContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._iconSuffixContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._textSuffixContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._floatingLabel = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._notchedOutline = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._lineRipple = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-form-field"],
      hostVars: 38,
      hostBindings: function MatFormField_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mat-mdc-form-field-label-always-float", ctx._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix", ctx._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix", ctx._hasIconSuffix)("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-hide-placeholder", ctx._hasFloatingLabel() && !ctx._shouldLabelFloat())("mat-primary", ctx.color !== "accent" && ctx.color !== "warn")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"));
        }
      },
      inputs: {
        hideRequiredMarker: "hideRequiredMarker",
        color: "color",
        floatLabel: "floatLabel",
        appearance: "appearance",
        subscriptSizing: "subscriptSizing",
        hintLabel: "hintLabel"
      },
      exportAs: ["matFormField"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
        provide: MAT_FORM_FIELD,
        useExisting: MatFormField
      }, {
        provide: FLOATING_LABEL_PARENT,
        useExisting: MatFormField
      }])],
      ngContentSelectors: _c9,
      decls: 18,
      vars: 21,
      consts: [["labelTemplate", ""], ["textField", ""], ["iconPrefixContainer", ""], ["textPrefixContainer", ""], ["textSuffixContainer", ""], ["iconSuffixContainer", ""], [1, "mat-mdc-text-field-wrapper", "mdc-text-field", 3, "click"], [1, "mat-mdc-form-field-focus-overlay"], [1, "mat-mdc-form-field-flex"], ["matFormFieldNotchedOutline", "", 3, "matFormFieldNotchedOutlineOpen"], [1, "mat-mdc-form-field-icon-prefix"], [1, "mat-mdc-form-field-text-prefix"], [1, "mat-mdc-form-field-infix"], [3, "ngTemplateOutlet"], [1, "mat-mdc-form-field-text-suffix"], [1, "mat-mdc-form-field-icon-suffix"], ["matFormFieldLineRipple", ""], ["aria-atomic", "true", "aria-live", "polite", 1, "mat-mdc-form-field-subscript-wrapper", "mat-mdc-form-field-bottom-align"], [1, "mat-mdc-form-field-error-wrapper"], [1, "mat-mdc-form-field-hint-wrapper"], ["matFormFieldFloatingLabel", "", 3, "floating", "monitorResize", "id"], ["aria-hidden", "true", 1, "mat-mdc-form-field-required-marker", "mdc-floating-label--required"], [3, "id"], [1, "mat-mdc-form-field-hint-spacer"]],
      template: function MatFormField_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"](_c8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MatFormField_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 6, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MatFormField_Template_div_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx._control.onContainerClick($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](4, MatFormField_Conditional_4_Template, 1, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](6, MatFormField_Conditional_6_Template, 2, 2, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](7, MatFormField_Conditional_7_Template, 3, 0, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](8, MatFormField_Conditional_8_Template, 3, 0, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](10, MatFormField_Conditional_10_Template, 1, 1, null, 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](12, MatFormField_Conditional_12_Template, 3, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](13, MatFormField_Conditional_13_Template, 3, 0, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](14, MatFormField_Conditional_14_Template, 1, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](16, MatFormField_Case_16_Template, 2, 0, "div", 18)(17, MatFormField_Case_17_Template, 5, 1, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_17_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mdc-text-field--filled", !ctx._hasOutline())("mdc-text-field--outlined", ctx._hasOutline())("mdc-text-field--no-label", !ctx._hasFloatingLabel())("mdc-text-field--disabled", ctx._control.disabled)("mdc-text-field--invalid", ctx._control.errorState);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx._hasOutline() && !ctx._control.disabled ? 4 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx._hasOutline() ? 6 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx._hasIconPrefix ? 7 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx._hasTextPrefix ? 8 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx._hasOutline() || ctx._forceDisplayInfixLabel() ? 10 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx._hasTextSuffix ? 12 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx._hasIconSuffix ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx._hasOutline() ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mat-mdc-form-field-subscript-dynamic-size", ctx.subscriptSizing === "dynamic");
          const subscriptMessageType_r4 = ctx._getSubscriptMessageType();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"]((tmp_17_0 = subscriptMessageType_r4) === "error" ? 16 : tmp_17_0 === "hint" ? 17 : -1);
        }
      },
      dependencies: [MatFormFieldFloatingLabel, MatFormFieldNotchedOutline, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, MatFormFieldLineRipple, MatHint],
      styles: [".mdc-text-field{display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field__input{width:100%;min-width:0;border:none;border-radius:0;background:none;padding:0;-moz-appearance:none;-webkit-appearance:none;height:28px}.mdc-text-field__input::-webkit-calendar-picker-indicator,.mdc-text-field__input::-webkit-search-cancel-button{display:none}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input::placeholder{opacity:0}.mdc-text-field__input::-moz-placeholder{opacity:0}.mdc-text-field__input::-webkit-input-placeholder{opacity:0}.mdc-text-field__input:-ms-input-placeholder{opacity:0}.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder{opacity:0}.mdc-text-field--outlined .mdc-text-field__input,.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-filled-caret-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error))}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--filled{height:56px;border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-left-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));border-top-right-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent))}.mdc-text-field--outlined{height:56px;overflow:visible;padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px)}[dir=rtl] .mdc-text-field--outlined{padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}.mdc-floating-label{position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:auto}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label{left:auto;right:4px}.mdc-text-field--filled .mdc-floating-label{left:16px;right:auto}[dir=rtl] .mdc-text-field--filled .mdc-floating-label{left:auto;right:16px}.mdc-text-field--disabled .mdc-floating-label{cursor:default}@media(forced-colors: active){.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-floating-label--float-above{cursor:auto;transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1);font-size:.75rem}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0;content:\"*\"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mat-mdc-notch-piece{box-sizing:border-box;height:100%;pointer-events:none;border:none;border-top:1px solid;border-bottom:1px solid}.mdc-text-field--focused .mat-mdc-notch-piece{border-width:2px}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));border-width:var(--mat-form-field-outlined-outline-width, 1px)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary))}.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece{border-width:var(--mat-form-field-outlined-focus-outline-width, 2px)}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid;border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__trailing{flex-grow:1;border-left:none;border-right:1px solid;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:min(var(--mat-form-field-notch-max-width, 100%),calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{max-width:min(100%,calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:\"\"}.mdc-line-ripple::before{z-index:1;border-bottom-width:var(--mat-form-field-filled-active-indicator-height, 1px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container))}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mat-form-field-filled-focus-active-indicator-height, 2px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error))}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-text-field--disabled{pointer-events:none}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height, 56px);padding-top:var(--mat-form-field-filled-with-label-container-padding-top, 24px);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom, 8px)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding, 16px);padding-bottom:var(--mat-form-field-container-vertical-padding, 16px)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height, 56px)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}@keyframes _mat-form-field-subscript-animation{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px;opacity:1;transform:translateY(0);animation:_mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:\"\";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color, var(--mat-sys-error))}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));letter-spacing:var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));font-weight:var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight))}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface))}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity, 0)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10))}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant))}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}@media(forced-colors: active){.mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}}@media(forced-colors: active){.mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));font-weight:var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error))}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container))}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error))}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field-infix:has(textarea[cols]){width:auto}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper{animation-duration:300ms}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatFormField;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 83618
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_pseudo-checkbox-chunk.mjs ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatPseudoCheckbox: () => (/* binding */ MatPseudoCheckbox)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_animation-chunk.mjs */ 87432);



let MatPseudoCheckbox = /*#__PURE__*/(() => {
  class MatPseudoCheckbox {
    _animationsDisabled = (0,_animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__._animationsDisabled)();
    state = 'unchecked';
    disabled = false;
    appearance = 'full';
    constructor() {}
    static ɵfac = function MatPseudoCheckbox_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatPseudoCheckbox)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatPseudoCheckbox,
      selectors: [["mat-pseudo-checkbox"]],
      hostAttrs: [1, "mat-pseudo-checkbox"],
      hostVars: 12,
      hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("mat-pseudo-checkbox-minimal", ctx.appearance === "minimal")("mat-pseudo-checkbox-full", ctx.appearance === "full")("_mat-animation-noopable", ctx._animationsDisabled);
        }
      },
      inputs: {
        state: "state",
        disabled: "disabled",
        appearance: "appearance"
      },
      decls: 0,
      vars: 0,
      template: function MatPseudoCheckbox_Template(rf, ctx) {},
      styles: [".mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatPseudoCheckbox;
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
//# sourceMappingURL=7556.js.map