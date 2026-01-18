(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[6556],{

/***/ 7100
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_ripple-loader-chunk.mjs ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatRippleLoader: () => (/* binding */ MatRippleLoader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 86456);
/* harmony import */ var _animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_animation-chunk.mjs */ 87432);
/* harmony import */ var _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_ripple-chunk.mjs */ 17828);





const eventListenerOptions = {
  capture: true
};
const rippleInteractionEvents = ['focus', 'mousedown', 'mouseenter', 'touchstart'];
const matRippleUninitialized = 'mat-ripple-loader-uninitialized';
const matRippleClassName = 'mat-ripple-loader-class-name';
const matRippleCentered = 'mat-ripple-loader-centered';
const matRippleDisabled = 'mat-ripple-loader-disabled';
let MatRippleLoader = /*#__PURE__*/(() => {
  class MatRippleLoader {
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _animationsDisabled = (0,_animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__._animationsDisabled)();
    _globalRippleOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    _eventCleanups;
    _hosts = new Map();
    constructor() {
      const renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
      this._eventCleanups = this._ngZone.runOutsideAngular(() => rippleInteractionEvents.map(name => renderer.listen(this._document, name, this._onInteraction, eventListenerOptions)));
    }
    ngOnDestroy() {
      const hosts = this._hosts.keys();
      for (const host of hosts) {
        this.destroyRipple(host);
      }
      this._eventCleanups.forEach(cleanup => cleanup());
    }
    configureRipple(host, config) {
      host.setAttribute(matRippleUninitialized, this._globalRippleOptions?.namespace ?? '');
      if (config.className || !host.hasAttribute(matRippleClassName)) {
        host.setAttribute(matRippleClassName, config.className || '');
      }
      if (config.centered) {
        host.setAttribute(matRippleCentered, '');
      }
      if (config.disabled) {
        host.setAttribute(matRippleDisabled, '');
      }
    }
    setDisabled(host, disabled) {
      const ripple = this._hosts.get(host);
      if (ripple) {
        ripple.target.rippleDisabled = disabled;
        if (!disabled && !ripple.hasSetUpEvents) {
          ripple.hasSetUpEvents = true;
          ripple.renderer.setupTriggerEvents(host);
        }
      } else if (disabled) {
        host.setAttribute(matRippleDisabled, '');
      } else {
        host.removeAttribute(matRippleDisabled);
      }
    }
    _onInteraction = event => {
      const eventTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__._getEventTarget)(event);
      if (eventTarget instanceof HTMLElement) {
        const element = eventTarget.closest(`[${matRippleUninitialized}="${this._globalRippleOptions?.namespace ?? ''}"]`);
        if (element) {
          this._createRipple(element);
        }
      }
    };
    _createRipple(host) {
      if (!this._document || this._hosts.has(host)) {
        return;
      }
      host.querySelector('.mat-ripple')?.remove();
      const rippleEl = this._document.createElement('span');
      rippleEl.classList.add('mat-ripple', host.getAttribute(matRippleClassName));
      host.append(rippleEl);
      const globalOptions = this._globalRippleOptions;
      const enterDuration = this._animationsDisabled ? 0 : globalOptions?.animation?.enterDuration ?? _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.defaultRippleAnimationConfig.enterDuration;
      const exitDuration = this._animationsDisabled ? 0 : globalOptions?.animation?.exitDuration ?? _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.defaultRippleAnimationConfig.exitDuration;
      const target = {
        rippleDisabled: this._animationsDisabled || globalOptions?.disabled || host.hasAttribute(matRippleDisabled),
        rippleConfig: {
          centered: host.hasAttribute(matRippleCentered),
          terminateOnPointerUp: globalOptions?.terminateOnPointerUp,
          animation: {
            enterDuration,
            exitDuration
          }
        }
      };
      const renderer = new _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.RippleRenderer(target, this._ngZone, rippleEl, this._platform, this._injector);
      const hasSetUpEvents = !target.rippleDisabled;
      if (hasSetUpEvents) {
        renderer.setupTriggerEvents(host);
      }
      this._hosts.set(host, {
        target,
        renderer,
        hasSetUpEvents
      });
      host.removeAttribute(matRippleUninitialized);
    }
    destroyRipple(host) {
      const ripple = this._hosts.get(host);
      if (ripple) {
        ripple.renderer._removeTriggerEvents();
        this._hosts.delete(host);
      }
    }
    static ɵfac = function MatRippleLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatRippleLoader)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MatRippleLoader,
      factory: MatRippleLoader.ɵfac,
      providedIn: 'root'
    });
  }
  return MatRippleLoader;
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

/***/ 55326
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_icon-button-chunk.mjs ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_BUTTON_CONFIG: () => (/* binding */ MAT_BUTTON_CONFIG),
/* harmony export */   MatButtonBase: () => (/* binding */ MatButtonBase),
/* harmony export */   MatIconAnchor: () => (/* binding */ MatIconAnchor),
/* harmony export */   MatIconButton: () => (/* binding */ MatIconButton)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ 45562);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/private */ 74418);
/* harmony import */ var _ripple_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_ripple-loader-chunk.mjs */ 7100);
/* harmony import */ var _structural_styles_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_structural-styles-chunk.mjs */ 22158);
/* harmony import */ var _animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_animation-chunk.mjs */ 87432);







const _c0 = ["mat-icon-button", ""];
const _c1 = ["*"];
const MAT_BUTTON_CONFIG = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_BUTTON_CONFIG');
function transformTabIndex(value) {
  return value == null ? undefined : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value);
}
let MatButtonBase = /*#__PURE__*/(() => {
  class MatButtonBase {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _animationsDisabled = (0,_animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__._animationsDisabled)();
    _config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_BUTTON_CONFIG, {
      optional: true
    });
    _focusMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.FocusMonitor);
    _cleanupClick;
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2);
    _rippleLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ripple_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.MatRippleLoader);
    _isAnchor;
    _isFab = false;
    color;
    get disableRipple() {
      return this._disableRipple;
    }
    set disableRipple(value) {
      this._disableRipple = value;
      this._updateRippleDisabled();
    }
    _disableRipple = false;
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
      this._updateRippleDisabled();
    }
    _disabled = false;
    ariaDisabled;
    disabledInteractive;
    tabIndex;
    set _tabindex(value) {
      this.tabIndex = value;
    }
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_2__._CdkPrivateStyleLoader).load(_structural_styles_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__._StructuralStylesLoader);
      const element = this._elementRef.nativeElement;
      this._isAnchor = element.tagName === 'A';
      this.disabledInteractive = this._config?.disabledInteractive ?? false;
      this.color = this._config?.color ?? null;
      this._rippleLoader?.configureRipple(element, {
        className: 'mat-mdc-button-ripple'
      });
    }
    ngAfterViewInit() {
      this._focusMonitor.monitor(this._elementRef, true);
      if (this._isAnchor) {
        this._setupAsAnchor();
      }
    }
    ngOnDestroy() {
      this._cleanupClick?.();
      this._focusMonitor.stopMonitoring(this._elementRef);
      this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
    }
    focus(origin = 'program', options) {
      if (origin) {
        this._focusMonitor.focusVia(this._elementRef.nativeElement, origin, options);
      } else {
        this._elementRef.nativeElement.focus(options);
      }
    }
    _getAriaDisabled() {
      if (this.ariaDisabled != null) {
        return this.ariaDisabled;
      }
      if (this._isAnchor) {
        return this.disabled || null;
      }
      return this.disabled && this.disabledInteractive ? true : null;
    }
    _getDisabledAttribute() {
      return this.disabledInteractive || !this.disabled ? null : true;
    }
    _updateRippleDisabled() {
      this._rippleLoader?.setDisabled(this._elementRef.nativeElement, this.disableRipple || this.disabled);
    }
    _getTabIndex() {
      if (this._isAnchor) {
        return this.disabled && !this.disabledInteractive ? -1 : this.tabIndex;
      }
      return this.tabIndex;
    }
    _setupAsAnchor() {
      this._cleanupClick = this._ngZone.runOutsideAngular(() => this._renderer.listen(this._elementRef.nativeElement, 'click', event => {
        if (this.disabled) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      }));
    }
    static ɵfac = function MatButtonBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatButtonBase)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatButtonBase,
      hostAttrs: [1, "mat-mdc-button-base"],
      hostVars: 13,
      hostBindings: function MatButtonBase_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx._getDisabledAttribute())("aria-disabled", ctx._getAriaDisabled())("tabindex", ctx._getTabIndex());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.color ? "mat-" + ctx.color : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-button-disabled", ctx.disabled)("mat-mdc-button-disabled-interactive", ctx.disabledInteractive)("mat-unthemed", !ctx.color)("_mat-animation-noopable", ctx._animationsDisabled);
        }
      },
      inputs: {
        color: "color",
        disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        ariaDisabled: [2, "aria-disabled", "ariaDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        tabIndex: [2, "tabIndex", "tabIndex", transformTabIndex],
        _tabindex: [2, "tabindex", "_tabindex", transformTabIndex]
      }
    });
  }
  return MatButtonBase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatIconButton = /*#__PURE__*/(() => {
  class MatIconButton extends MatButtonBase {
    constructor() {
      super();
      this._rippleLoader.configureRipple(this._elementRef.nativeElement, {
        centered: true
      });
    }
    static ɵfac = function MatIconButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatIconButton)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatIconButton,
      selectors: [["button", "mat-icon-button", ""], ["a", "mat-icon-button", ""], ["button", "matIconButton", ""], ["a", "matIconButton", ""]],
      hostAttrs: [1, "mdc-icon-button", "mat-mdc-icon-button"],
      exportAs: ["matButton", "matAnchor"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 4,
      vars: 0,
      consts: [[1, "mat-mdc-button-persistent-ripple", "mdc-icon-button__ripple"], [1, "mat-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
      template: function MatIconButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElement"](0, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElement"](2, "span", 1)(3, "span", 2);
        }
      },
      styles: [".mat-mdc-icon-button{-webkit-user-select:none;user-select:none;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;text-decoration:none;cursor:pointer;z-index:0;overflow:visible;border-radius:var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));flex-shrink:0;text-align:center;width:var(--mat-icon-button-state-layer-size, 40px);height:var(--mat-icon-button-state-layer-size, 40px);padding:calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);font-size:var(--mat-icon-button-icon-size, 24px);color:var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:\"\";opacity:0}.mat-mdc-icon-button .mdc-button__label,.mat-mdc-icon-button .mat-icon{z-index:1;position:relative}.mat-mdc-icon-button .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit}.mat-mdc-icon-button:focus-visible>.mat-focus-indicator::before{content:\"\";border-radius:inherit}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-icon-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-icon-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-icon-button-touch-target-size, 48px);display:var(--mat-icon-button-touch-target-display, block);left:50%;width:var(--mat-icon-button-touch-target-size, 48px);transform:translate(-50%, -50%)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button img,.mat-mdc-icon-button svg{width:var(--mat-icon-button-icon-size, 24px);height:var(--mat-icon-button-icon-size, 24px);vertical-align:baseline}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%))}.mat-mdc-icon-button[hidden]{display:none}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}\n", "@media(forced-colors: active){.mat-mdc-button:not(.mdc-button--outlined),.mat-mdc-unelevated-button:not(.mdc-button--outlined),.mat-mdc-raised-button:not(.mdc-button--outlined),.mat-mdc-outlined-button:not(.mdc-button--outlined),.mat-mdc-button-base.mat-tonal-button,.mat-mdc-icon-button.mat-mdc-icon-button,.mat-mdc-outlined-button .mdc-button__ripple{outline:solid 1px}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatIconButton;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const MatIconAnchor = MatIconButton;


/***/ },

/***/ 84175
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/button.mjs ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_BUTTON_CONFIG: () => (/* reexport safe */ _icon_button_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAT_BUTTON_CONFIG),
/* harmony export */   MAT_FAB_DEFAULT_OPTIONS: () => (/* binding */ MAT_FAB_DEFAULT_OPTIONS),
/* harmony export */   MatAnchor: () => (/* binding */ MatAnchor),
/* harmony export */   MatButton: () => (/* binding */ MatButton),
/* harmony export */   MatButtonModule: () => (/* binding */ MatButtonModule),
/* harmony export */   MatFabAnchor: () => (/* binding */ MatFabAnchor),
/* harmony export */   MatFabButton: () => (/* binding */ MatFabButton),
/* harmony export */   MatIconAnchor: () => (/* reexport safe */ _icon_button_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatIconAnchor),
/* harmony export */   MatIconButton: () => (/* reexport safe */ _icon_button_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatIconButton),
/* harmony export */   MatMiniFabAnchor: () => (/* binding */ MatMiniFabAnchor),
/* harmony export */   MatMiniFabButton: () => (/* binding */ MatMiniFabButton)
/* harmony export */ });
/* harmony import */ var _icon_button_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_icon-button-chunk.mjs */ 55326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ 13266);
/* harmony import */ var _ripple_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_ripple-module-chunk.mjs */ 85309);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 45562);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/private */ 74418);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ 86456);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ 42394);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/coercion */ 32298);

const _c0 = ["matButton", ""];
const _c1 = [[["", 8, "material-icons", 3, "iconPositionEnd", ""], ["mat-icon", 3, "iconPositionEnd", ""], ["", "matButtonIcon", "", 3, "iconPositionEnd", ""]], "*", [["", "iconPositionEnd", "", 8, "material-icons"], ["mat-icon", "iconPositionEnd", ""], ["", "matButtonIcon", "", "iconPositionEnd", ""]]];
const _c2 = [".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])", "*", ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];
const _c3 = ["mat-fab", ""];
const _c4 = ["mat-mini-fab", ""];
const _c5 = ".mat-mdc-fab-base{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);flex-shrink:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-fab-base .mat-mdc-button-ripple,.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-fab-base .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before{content:\"\";opacity:0}.mat-mdc-fab-base .mdc-button__label,.mat-mdc-fab-base .mat-icon{z-index:1;position:relative}.mat-mdc-fab-base .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-fab-base:focus-visible>.mat-focus-indicator::before{content:\"\"}.mat-mdc-fab-base._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-fab-base::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}.mat-mdc-fab-base[hidden]{display:none}.mat-mdc-fab-base::-moz-focus-inner{padding:0;border:0}.mat-mdc-fab-base:active,.mat-mdc-fab-base:focus{outline:none}.mat-mdc-fab-base:hover{cursor:pointer}.mat-mdc-fab-base>svg{width:100%}.mat-mdc-fab-base .mat-icon,.mat-mdc-fab-base .material-icons{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mat-mdc-fab-base .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-fab-base[disabled],.mat-mdc-fab-base.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-fab-base[disabled],.mat-mdc-fab-base[disabled]:focus,.mat-mdc-fab-base.mat-mdc-button-disabled,.mat-mdc-fab-base.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-fab-base.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab{background-color:var(--mat-fab-container-color, var(--mat-sys-primary-container));border-radius:var(--mat-fab-container-shape, var(--mat-sys-corner-large));color:var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));box-shadow:var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3))}@media(hover: hover){.mat-mdc-fab:hover{box-shadow:var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4))}}.mat-mdc-fab:focus{box-shadow:var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-fab:active,.mat-mdc-fab:focus:active{box-shadow:var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-fab-touch-target-size, 48px);display:var(--mat-fab-touch-target-display, block);left:50%;width:var(--mat-fab-touch-target-size, 48px);transform:translate(-50%, -50%)}.mat-mdc-fab .mat-ripple-element{background-color:var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container))}.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-disabled-state-layer-color)}.mat-mdc-fab:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-fab.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-fab:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-mini-fab{width:40px;height:40px;background-color:var(--mat-fab-small-container-color, var(--mat-sys-primary-container));border-radius:var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));color:var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));box-shadow:var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3))}@media(hover: hover){.mat-mdc-mini-fab:hover{box-shadow:var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4))}}.mat-mdc-mini-fab:focus{box-shadow:var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-mini-fab:active,.mat-mdc-mini-fab:focus:active{box-shadow:var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-mini-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-fab-small-touch-target-size, 48px);display:var(--mat-fab-small-touch-target-display);left:50%;width:var(--mat-fab-small-touch-target-size, 48px);transform:translate(-50%, -50%)}.mat-mdc-mini-fab .mat-ripple-element{background-color:var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container))}.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-disabled-state-layer-color)}.mat-mdc-mini-fab:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-mini-fab.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-mini-fab:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-extended-fab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:20px;padding-right:20px;width:auto;max-width:100%;line-height:normal;box-shadow:var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));height:var(--mat-fab-extended-container-height, 56px);border-radius:var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));font-family:var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking))}@media(hover: hover){.mat-mdc-extended-fab:hover{box-shadow:var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4))}}.mat-mdc-extended-fab:focus{box-shadow:var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-extended-fab:active,.mat-mdc-extended-fab:focus:active{box-shadow:var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab[disabled]:focus,.mat-mdc-extended-fab.mat-mdc-button-disabled,.mat-mdc-extended-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.material-icons,.mat-mdc-extended-fab>.mat-icon,.mat-mdc-extended-fab>.material-icons{margin-left:-8px;margin-right:12px}.mat-mdc-extended-fab .mdc-button__label+.mat-icon,.mat-mdc-extended-fab .mdc-button__label+.material-icons,[dir=rtl] .mat-mdc-extended-fab>.mat-icon,[dir=rtl] .mat-mdc-extended-fab>.material-icons{margin-left:12px;margin-right:-8px}.mat-mdc-extended-fab .mat-mdc-button-touch-target{width:100%}\n";














const APPEARANCE_CLASSES = /*#__PURE__*/new Map([['text', ['mat-mdc-button']], ['filled', ['mdc-button--unelevated', 'mat-mdc-unelevated-button']], ['elevated', ['mdc-button--raised', 'mat-mdc-raised-button']], ['outlined', ['mdc-button--outlined', 'mat-mdc-outlined-button']], ['tonal', ['mat-tonal-button']]]);
let MatButton = /*#__PURE__*/(() => {
  class MatButton extends _icon_button_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatButtonBase {
    get appearance() {
      return this._appearance;
    }
    set appearance(value) {
      this.setAppearance(value || this._config?.defaultAppearance || 'text');
    }
    _appearance = null;
    constructor() {
      super();
      const inferredAppearance = _inferAppearance(this._elementRef.nativeElement);
      if (inferredAppearance) {
        this.setAppearance(inferredAppearance);
      }
    }
    setAppearance(appearance) {
      if (appearance === this._appearance) {
        return;
      }
      const classList = this._elementRef.nativeElement.classList;
      const previousClasses = this._appearance ? APPEARANCE_CLASSES.get(this._appearance) : null;
      const newClasses = APPEARANCE_CLASSES.get(appearance);
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !newClasses) {
        throw new Error(`Unsupported MatButton appearance "${appearance}"`);
      }
      if (previousClasses) {
        classList.remove(...previousClasses);
      }
      classList.add(...newClasses);
      this._appearance = appearance;
    }
    static ɵfac = function MatButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatButton)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatButton,
      selectors: [["button", "matButton", ""], ["a", "matButton", ""], ["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-flat-button", ""], ["button", "mat-stroked-button", ""], ["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-flat-button", ""], ["a", "mat-stroked-button", ""]],
      hostAttrs: [1, "mdc-button"],
      inputs: {
        appearance: [0, "matButton", "appearance"]
      },
      exportAs: ["matButton", "matAnchor"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      attrs: _c0,
      ngContentSelectors: _c2,
      decls: 7,
      vars: 4,
      consts: [[1, "mat-mdc-button-persistent-ripple"], [1, "mdc-button__label"], [1, "mat-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
      template: function MatButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](0, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](2, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](5, "span", 2)(6, "span", 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mdc-button__ripple", !ctx._isFab)("mdc-fab__ripple", ctx._isFab);
        }
      },
      styles: [".mat-mdc-button-base{text-decoration:none}.mat-mdc-button-base .mat-icon{min-height:fit-content;flex-shrink:0}@media(hover: none){.mat-mdc-button-base:hover>span.mat-mdc-button-persistent-ripple::before{opacity:0}}.mdc-button{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0);padding:0 8px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__label{position:relative}.mat-mdc-button{padding:0 var(--mat-button-text-horizontal-padding, 12px);height:var(--mat-button-text-container-height, 40px);font-family:var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-text-label-text-transform);font-weight:var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight))}.mat-mdc-button,.mat-mdc-button .mdc-button__ripple{border-radius:var(--mat-button-text-container-shape, var(--mat-sys-corner-full))}.mat-mdc-button:not(:disabled){color:var(--mat-button-text-label-text-color, var(--mat-sys-primary))}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-button-text-with-icon-horizontal-padding, 16px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-button-text-icon-spacing, 8px);margin-left:var(--mat-button-text-icon-offset, -4px)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-button-text-icon-offset, -4px);margin-left:var(--mat-button-text-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-text-icon-offset, -4px);margin-left:var(--mat-button-text-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-text-icon-spacing, 8px);margin-left:var(--mat-button-text-icon-offset, -4px)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-text-state-layer-color, var(--mat-sys-primary))}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-text-touch-target-size, 48px);display:var(--mat-button-text-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-unelevated-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-button-filled-container-height, 40px);font-family:var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-filled-label-text-transform);font-weight:var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));padding:0 var(--mat-button-filled-horizontal-padding, 24px)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-button-filled-icon-spacing, 8px);margin-left:var(--mat-button-filled-icon-offset, -8px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-button-filled-icon-offset, -8px);margin-left:var(--mat-button-filled-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-filled-icon-offset, -8px);margin-left:var(--mat-button-filled-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-filled-icon-spacing, 8px);margin-left:var(--mat-button-filled-icon-offset, -8px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary))}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-unelevated-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-unelevated-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-unelevated-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-filled-touch-target-size, 48px);display:var(--mat-button-filled-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));background-color:var(--mat-button-filled-container-color, var(--mat-sys-primary))}.mat-mdc-unelevated-button,.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mat-button-filled-container-shape, var(--mat-sys-corner-full))}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);box-shadow:var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));height:var(--mat-button-protected-container-height, 40px);font-family:var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-protected-label-text-transform);font-weight:var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));padding:0 var(--mat-button-protected-horizontal-padding, 24px)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-button-protected-icon-spacing, 8px);margin-left:var(--mat-button-protected-icon-offset, -8px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-button-protected-icon-offset, -8px);margin-left:var(--mat-button-protected-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-protected-icon-offset, -8px);margin-left:var(--mat-button-protected-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-protected-icon-spacing, 8px);margin-left:var(--mat-button-protected-icon-offset, -8px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-protected-state-layer-color, var(--mat-sys-primary))}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-raised-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-raised-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-raised-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-protected-touch-target-size, 48px);display:var(--mat-button-protected-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-raised-button:not(:disabled){color:var(--mat-button-protected-label-text-color, var(--mat-sys-primary));background-color:var(--mat-button-protected-container-color, var(--mat-sys-surface))}.mat-mdc-raised-button,.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mat-button-protected-container-shape, var(--mat-sys-corner-full))}@media(hover: hover){.mat-mdc-raised-button:hover{box-shadow:var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2))}}.mat-mdc-raised-button:focus{box-shadow:var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1))}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1))}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0))}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-button-outlined-container-height, 40px);font-family:var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-outlined-label-text-transform);font-weight:var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));border-radius:var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));border-width:var(--mat-button-outlined-outline-width, 1px);padding:0 var(--mat-button-outlined-horizontal-padding, 24px)}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-button-outlined-icon-spacing, 8px);margin-left:var(--mat-button-outlined-icon-offset, -8px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-button-outlined-icon-offset, -8px);margin-left:var(--mat-button-outlined-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-outlined-icon-offset, -8px);margin-left:var(--mat-button-outlined-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-outlined-icon-spacing, 8px);margin-left:var(--mat-button-outlined-icon-offset, -8px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary))}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-outlined-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-outlined-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-outlined-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-outlined-touch-target-size, 48px);display:var(--mat-button-outlined-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-outlined-button:not(:disabled){color:var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));border-color:var(--mat-button-outlined-outline-color, var(--mat-sys-outline))}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-tonal-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-button-tonal-container-height, 40px);font-family:var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-tonal-label-text-transform);font-weight:var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));padding:0 var(--mat-button-tonal-horizontal-padding, 24px)}.mat-tonal-button:not(:disabled){color:var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container))}.mat-tonal-button,.mat-tonal-button .mdc-button__ripple{border-radius:var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full))}.mat-tonal-button[disabled],.mat-tonal-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-tonal-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-tonal-button>.mat-icon{margin-right:var(--mat-button-tonal-icon-spacing, 8px);margin-left:var(--mat-button-tonal-icon-offset, -8px)}[dir=rtl] .mat-tonal-button>.mat-icon{margin-right:var(--mat-button-tonal-icon-offset, -8px);margin-left:var(--mat-button-tonal-icon-spacing, 8px)}.mat-tonal-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-tonal-icon-offset, -8px);margin-left:var(--mat-button-tonal-icon-spacing, 8px)}[dir=rtl] .mat-tonal-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-tonal-icon-spacing, 8px);margin-left:var(--mat-button-tonal-icon-offset, -8px)}.mat-tonal-button .mat-ripple-element{background-color:var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-tonal-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-tonal-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-tonal-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-tonal-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-tonal-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-tonal-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-tonal-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-tonal-touch-target-size, 48px);display:var(--mat-button-tonal-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button,.mat-tonal-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,.mat-tonal-button .mat-mdc-button-ripple,.mat-tonal-button .mat-mdc-button-persistent-ripple,.mat-tonal-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-tonal-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,.mat-tonal-button .mat-mdc-button-persistent-ripple::before{content:\"\";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-button .mat-icon,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-unelevated-button .mat-icon,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-raised-button .mat-icon,.mat-mdc-outlined-button .mdc-button__label,.mat-mdc-outlined-button .mat-icon,.mat-tonal-button .mdc-button__label,.mat-tonal-button .mat-icon{z-index:1;position:relative}.mat-mdc-button .mat-focus-indicator,.mat-mdc-unelevated-button .mat-focus-indicator,.mat-mdc-raised-button .mat-focus-indicator,.mat-mdc-outlined-button .mat-focus-indicator,.mat-tonal-button .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit}.mat-mdc-button:focus-visible>.mat-focus-indicator::before,.mat-mdc-unelevated-button:focus-visible>.mat-focus-indicator::before,.mat-mdc-raised-button:focus-visible>.mat-focus-indicator::before,.mat-mdc-outlined-button:focus-visible>.mat-focus-indicator::before,.mat-tonal-button:focus-visible>.mat-focus-indicator::before{content:\"\";border-radius:inherit}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable,.mat-tonal-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon,.mat-tonal-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px}.mat-mdc-unelevated-button .mat-focus-indicator::before,.mat-tonal-button .mat-focus-indicator::before,.mat-mdc-raised-button .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}\n", "@media(forced-colors: active){.mat-mdc-button:not(.mdc-button--outlined),.mat-mdc-unelevated-button:not(.mdc-button--outlined),.mat-mdc-raised-button:not(.mdc-button--outlined),.mat-mdc-outlined-button:not(.mdc-button--outlined),.mat-mdc-button-base.mat-tonal-button,.mat-mdc-icon-button.mat-mdc-icon-button,.mat-mdc-outlined-button .mdc-button__ripple{outline:solid 1px}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatButton;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function _inferAppearance(button) {
  if (button.hasAttribute('mat-raised-button')) {
    return 'elevated';
  }
  if (button.hasAttribute('mat-stroked-button')) {
    return 'outlined';
  }
  if (button.hasAttribute('mat-flat-button')) {
    return 'filled';
  }
  if (button.hasAttribute('mat-button')) {
    return 'text';
  }
  return null;
}
const MatAnchor = MatButton;
const MAT_FAB_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('mat-mdc-fab-default-options', {
  providedIn: 'root',
  factory: () => defaults
});
const defaults = {
  color: 'accent'
};
let MatFabButton = /*#__PURE__*/(() => {
  class MatFabButton extends _icon_button_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatButtonBase {
    _options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MAT_FAB_DEFAULT_OPTIONS, {
      optional: true
    });
    _isFab = true;
    extended = false;
    constructor() {
      super();
      this._options = this._options || defaults;
      this.color = this._options.color || defaults.color;
    }
    static ɵfac = function MatFabButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatFabButton)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatFabButton,
      selectors: [["button", "mat-fab", ""], ["a", "mat-fab", ""], ["button", "matFab", ""], ["a", "matFab", ""]],
      hostAttrs: [1, "mdc-fab", "mat-mdc-fab-base", "mat-mdc-fab"],
      hostVars: 4,
      hostBindings: function MatFabButton_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mdc-fab--extended", ctx.extended)("mat-mdc-extended-fab", ctx.extended);
        }
      },
      inputs: {
        extended: [2, "extended", "extended", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute]
      },
      exportAs: ["matButton", "matAnchor"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      attrs: _c3,
      ngContentSelectors: _c2,
      decls: 7,
      vars: 4,
      consts: [[1, "mat-mdc-button-persistent-ripple"], [1, "mdc-button__label"], [1, "mat-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
      template: function MatFabButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](0, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](2, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](5, "span", 2)(6, "span", 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mdc-button__ripple", !ctx._isFab)("mdc-fab__ripple", ctx._isFab);
        }
      },
      styles: [".mat-mdc-fab-base{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);flex-shrink:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-fab-base .mat-mdc-button-ripple,.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-fab-base .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before{content:\"\";opacity:0}.mat-mdc-fab-base .mdc-button__label,.mat-mdc-fab-base .mat-icon{z-index:1;position:relative}.mat-mdc-fab-base .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-fab-base:focus-visible>.mat-focus-indicator::before{content:\"\"}.mat-mdc-fab-base._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-fab-base::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}.mat-mdc-fab-base[hidden]{display:none}.mat-mdc-fab-base::-moz-focus-inner{padding:0;border:0}.mat-mdc-fab-base:active,.mat-mdc-fab-base:focus{outline:none}.mat-mdc-fab-base:hover{cursor:pointer}.mat-mdc-fab-base>svg{width:100%}.mat-mdc-fab-base .mat-icon,.mat-mdc-fab-base .material-icons{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mat-mdc-fab-base .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-fab-base[disabled],.mat-mdc-fab-base.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-fab-base[disabled],.mat-mdc-fab-base[disabled]:focus,.mat-mdc-fab-base.mat-mdc-button-disabled,.mat-mdc-fab-base.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-fab-base.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab{background-color:var(--mat-fab-container-color, var(--mat-sys-primary-container));border-radius:var(--mat-fab-container-shape, var(--mat-sys-corner-large));color:var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));box-shadow:var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3))}@media(hover: hover){.mat-mdc-fab:hover{box-shadow:var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4))}}.mat-mdc-fab:focus{box-shadow:var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-fab:active,.mat-mdc-fab:focus:active{box-shadow:var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-fab-touch-target-size, 48px);display:var(--mat-fab-touch-target-display, block);left:50%;width:var(--mat-fab-touch-target-size, 48px);transform:translate(-50%, -50%)}.mat-mdc-fab .mat-ripple-element{background-color:var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container))}.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-disabled-state-layer-color)}.mat-mdc-fab:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-fab.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-fab:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-mini-fab{width:40px;height:40px;background-color:var(--mat-fab-small-container-color, var(--mat-sys-primary-container));border-radius:var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));color:var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));box-shadow:var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3))}@media(hover: hover){.mat-mdc-mini-fab:hover{box-shadow:var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4))}}.mat-mdc-mini-fab:focus{box-shadow:var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-mini-fab:active,.mat-mdc-mini-fab:focus:active{box-shadow:var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-mini-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-fab-small-touch-target-size, 48px);display:var(--mat-fab-small-touch-target-display);left:50%;width:var(--mat-fab-small-touch-target-size, 48px);transform:translate(-50%, -50%)}.mat-mdc-mini-fab .mat-ripple-element{background-color:var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container))}.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-disabled-state-layer-color)}.mat-mdc-mini-fab:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-mini-fab.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-mini-fab:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-extended-fab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:20px;padding-right:20px;width:auto;max-width:100%;line-height:normal;box-shadow:var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));height:var(--mat-fab-extended-container-height, 56px);border-radius:var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));font-family:var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking))}@media(hover: hover){.mat-mdc-extended-fab:hover{box-shadow:var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4))}}.mat-mdc-extended-fab:focus{box-shadow:var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-extended-fab:active,.mat-mdc-extended-fab:focus:active{box-shadow:var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab[disabled]:focus,.mat-mdc-extended-fab.mat-mdc-button-disabled,.mat-mdc-extended-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.material-icons,.mat-mdc-extended-fab>.mat-icon,.mat-mdc-extended-fab>.material-icons{margin-left:-8px;margin-right:12px}.mat-mdc-extended-fab .mdc-button__label+.mat-icon,.mat-mdc-extended-fab .mdc-button__label+.material-icons,[dir=rtl] .mat-mdc-extended-fab>.mat-icon,[dir=rtl] .mat-mdc-extended-fab>.material-icons{margin-left:12px;margin-right:-8px}.mat-mdc-extended-fab .mat-mdc-button-touch-target{width:100%}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatFabButton;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatMiniFabButton = /*#__PURE__*/(() => {
  class MatMiniFabButton extends _icon_button_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatButtonBase {
    _options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MAT_FAB_DEFAULT_OPTIONS, {
      optional: true
    });
    _isFab = true;
    constructor() {
      super();
      this._options = this._options || defaults;
      this.color = this._options.color || defaults.color;
    }
    static ɵfac = function MatMiniFabButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatMiniFabButton)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatMiniFabButton,
      selectors: [["button", "mat-mini-fab", ""], ["a", "mat-mini-fab", ""], ["button", "matMiniFab", ""], ["a", "matMiniFab", ""]],
      hostAttrs: [1, "mdc-fab", "mat-mdc-fab-base", "mdc-fab--mini", "mat-mdc-mini-fab"],
      exportAs: ["matButton", "matAnchor"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      attrs: _c4,
      ngContentSelectors: _c2,
      decls: 7,
      vars: 4,
      consts: [[1, "mat-mdc-button-persistent-ripple"], [1, "mdc-button__label"], [1, "mat-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
      template: function MatMiniFabButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](0, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](2, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](5, "span", 2)(6, "span", 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mdc-button__ripple", !ctx._isFab)("mdc-fab__ripple", ctx._isFab);
        }
      },
      styles: [_c5],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatMiniFabButton;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const MatFabAnchor = MatFabButton;
const MatMiniFabAnchor = MatMiniFabButton;
let MatButtonModule = /*#__PURE__*/(() => {
  class MatButtonModule {
    static ɵfac = function MatButtonModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatButtonModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatButtonModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_ripple_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__.BidiModule]
    });
  }
  return MatButtonModule;
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
//# sourceMappingURL=6556.js.map