(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[4646],{

/***/ 2261
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_date-formats-chunk.mjs ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateAdapter: () => (/* binding */ DateAdapter),
/* harmony export */   MAT_DATE_FORMATS: () => (/* binding */ MAT_DATE_FORMATS),
/* harmony export */   MAT_DATE_LOCALE: () => (/* binding */ MAT_DATE_LOCALE)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);


const MAT_DATE_LOCALE = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DATE_LOCALE', {
  providedIn: 'root',
  factory: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID)
});
const NOT_IMPLEMENTED = 'Method not implemented';
class DateAdapter {
  locale;
  _localeChanges = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  localeChanges = this._localeChanges;
  setTime(target, hours, minutes, seconds) {
    throw new Error(NOT_IMPLEMENTED);
  }
  getHours(date) {
    throw new Error(NOT_IMPLEMENTED);
  }
  getMinutes(date) {
    throw new Error(NOT_IMPLEMENTED);
  }
  getSeconds(date) {
    throw new Error(NOT_IMPLEMENTED);
  }
  parseTime(value, parseFormat) {
    throw new Error(NOT_IMPLEMENTED);
  }
  addSeconds(date, amount) {
    throw new Error(NOT_IMPLEMENTED);
  }
  getValidDateOrNull(obj) {
    return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
  }
  deserialize(value) {
    if (value == null || this.isDateInstance(value) && this.isValid(value)) {
      return value;
    }
    return this.invalid();
  }
  setLocale(locale) {
    this.locale = locale;
    this._localeChanges.next();
  }
  compareDate(first, second) {
    return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
  }
  compareTime(first, second) {
    return this.getHours(first) - this.getHours(second) || this.getMinutes(first) - this.getMinutes(second) || this.getSeconds(first) - this.getSeconds(second);
  }
  sameDate(first, second) {
    if (first && second) {
      let firstValid = this.isValid(first);
      let secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareDate(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }
  sameTime(first, second) {
    if (first && second) {
      const firstValid = this.isValid(first);
      const secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareTime(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }
  clampDate(date, min, max) {
    if (min && this.compareDate(date, min) < 0) {
      return min;
    }
    if (max && this.compareDate(date, max) > 0) {
      return max;
    }
    return date;
  }
}
const MAT_DATE_FORMATS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-date-formats');


/***/ },

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

/***/ 28476
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_line-chunk.mjs ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatLine: () => (/* binding */ MatLine),
/* harmony export */   MatLineModule: () => (/* binding */ MatLineModule),
/* harmony export */   setLines: () => (/* binding */ setLines)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ 13266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32778);




let MatLine = /*#__PURE__*/(() => {
  class MatLine {
    static ɵfac = function MatLine_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatLine)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatLine,
      selectors: [["", "mat-line", ""], ["", "matLine", ""]],
      hostAttrs: [1, "mat-line"]
    });
  }
  return MatLine;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function setLines(lines, element, prefix = 'mat') {
  lines.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(lines)).subscribe(({
    length
  }) => {
    setClass(element, `${prefix}-2-line`, false);
    setClass(element, `${prefix}-3-line`, false);
    setClass(element, `${prefix}-multi-line`, false);
    if (length === 2 || length === 3) {
      setClass(element, `${prefix}-${length}-line`, true);
    } else if (length > 3) {
      setClass(element, `${prefix}-multi-line`, true);
    }
  });
}
function setClass(element, className, isAdd) {
  element.nativeElement.classList.toggle(className, isAdd);
}
let MatLineModule = /*#__PURE__*/(() => {
  class MatLineModule {
    static ɵfac = function MatLineModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatLineModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatLineModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__.BidiModule]
    });
  }
  return MatLineModule;
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

/***/ 74646
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/core.mjs ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateAdapter: () => (/* reexport safe */ _date_formats_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.DateAdapter),
/* harmony export */   ErrorStateMatcher: () => (/* reexport safe */ _error_options_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.ErrorStateMatcher),
/* harmony export */   MATERIAL_ANIMATIONS: () => (/* reexport safe */ _animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.MATERIAL_ANIMATIONS),
/* harmony export */   MAT_DATE_FORMATS: () => (/* reexport safe */ _date_formats_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS),
/* harmony export */   MAT_DATE_LOCALE: () => (/* reexport safe */ _date_formats_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_LOCALE),
/* harmony export */   MAT_NATIVE_DATE_FORMATS: () => (/* binding */ MAT_NATIVE_DATE_FORMATS),
/* harmony export */   MAT_OPTGROUP: () => (/* reexport safe */ _option_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__.MAT_OPTGROUP),
/* harmony export */   MAT_OPTION_PARENT_COMPONENT: () => (/* reexport safe */ _option_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__.MAT_OPTION_PARENT_COMPONENT),
/* harmony export */   MAT_RIPPLE_GLOBAL_OPTIONS: () => (/* reexport safe */ _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_11__.MAT_RIPPLE_GLOBAL_OPTIONS),
/* harmony export */   MatLine: () => (/* reexport safe */ _line_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.MatLine),
/* harmony export */   MatLineModule: () => (/* reexport safe */ _line_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.MatLineModule),
/* harmony export */   MatNativeDateModule: () => (/* binding */ MatNativeDateModule),
/* harmony export */   MatOptgroup: () => (/* reexport safe */ _option_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__.MatOptgroup),
/* harmony export */   MatOption: () => (/* reexport safe */ _option_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__.MatOption),
/* harmony export */   MatOptionModule: () => (/* reexport safe */ _option_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.MatOptionModule),
/* harmony export */   MatOptionSelectionChange: () => (/* reexport safe */ _option_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__.MatOptionSelectionChange),
/* harmony export */   MatPseudoCheckbox: () => (/* reexport safe */ _pseudo_checkbox_chunk_mjs__WEBPACK_IMPORTED_MODULE_13__.MatPseudoCheckbox),
/* harmony export */   MatPseudoCheckboxModule: () => (/* reexport safe */ _pseudo_checkbox_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_14__.MatPseudoCheckboxModule),
/* harmony export */   MatRipple: () => (/* reexport safe */ _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_11__.MatRipple),
/* harmony export */   MatRippleLoader: () => (/* reexport safe */ _ripple_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_10__.MatRippleLoader),
/* harmony export */   MatRippleModule: () => (/* reexport safe */ _ripple_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_12__.MatRippleModule),
/* harmony export */   NativeDateAdapter: () => (/* binding */ NativeDateAdapter),
/* harmony export */   NativeDateModule: () => (/* binding */ NativeDateModule),
/* harmony export */   RippleRef: () => (/* reexport safe */ _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_11__.RippleRef),
/* harmony export */   RippleRenderer: () => (/* reexport safe */ _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_11__.RippleRenderer),
/* harmony export */   RippleState: () => (/* reexport safe */ _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_11__.RippleState),
/* harmony export */   ShowOnDirtyErrorStateMatcher: () => (/* reexport safe */ _error_options_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.ShowOnDirtyErrorStateMatcher),
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   _ErrorStateTracker: () => (/* reexport safe */ _error_state_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__._ErrorStateTracker),
/* harmony export */   _MatInternalFormField: () => (/* reexport safe */ _internal_form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__._MatInternalFormField),
/* harmony export */   _StructuralStylesLoader: () => (/* reexport safe */ _structural_styles_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__._StructuralStylesLoader),
/* harmony export */   _animationsDisabled: () => (/* reexport safe */ _animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__._animationsDisabled),
/* harmony export */   _countGroupLabelsBeforeOption: () => (/* reexport safe */ _option_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__._countGroupLabelsBeforeOption),
/* harmony export */   _getAnimationsState: () => (/* reexport safe */ _animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__._getAnimationsState),
/* harmony export */   _getOptionScrollPosition: () => (/* reexport safe */ _option_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__._getOptionScrollPosition),
/* harmony export */   defaultRippleAnimationConfig: () => (/* reexport safe */ _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_11__.defaultRippleAnimationConfig),
/* harmony export */   provideNativeDateAdapter: () => (/* binding */ provideNativeDateAdapter),
/* harmony export */   setLines: () => (/* reexport safe */ _line_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.setLines)
/* harmony export */ });
/* harmony import */ var _internal_form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_internal-form-field-chunk.mjs */ 41331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_animation-chunk.mjs */ 87432);
/* harmony import */ var _error_state_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_error-state-chunk.mjs */ 54612);
/* harmony import */ var _date_formats_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_date-formats-chunk.mjs */ 2261);
/* harmony import */ var _error_options_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_error-options-chunk.mjs */ 54297);
/* harmony import */ var _structural_styles_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_structural-styles-chunk.mjs */ 22158);
/* harmony import */ var _line_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_line-chunk.mjs */ 28476);
/* harmony import */ var _option_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_option-module-chunk.mjs */ 20762);
/* harmony import */ var _option_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_option-chunk.mjs */ 18953);
/* harmony import */ var _ripple_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_ripple-loader-chunk.mjs */ 7100);
/* harmony import */ var _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_ripple-chunk.mjs */ 17828);
/* harmony import */ var _ripple_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_ripple-module-chunk.mjs */ 85309);
/* harmony import */ var _pseudo_checkbox_chunk_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_pseudo-checkbox-chunk.mjs */ 83618);
/* harmony import */ var _pseudo_checkbox_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_pseudo-checkbox-module-chunk.mjs */ 33115);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/layout */ 42394);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/bidi */ 13266);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/a11y */ 45562);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/keycodes */ 52444);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/private */ 74418);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/platform */ 86456);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/coercion */ 32298);

























const VERSION = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Version('21.1.0');
const ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
const TIME_REGEX = /^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
let NativeDateAdapter = /*#__PURE__*/(() => {
  class NativeDateAdapter extends _date_formats_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.DateAdapter {
    _matDateLocale = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_date_formats_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_LOCALE, {
      optional: true
    });
    constructor() {
      super();
      const matDateLocale = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_date_formats_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_LOCALE, {
        optional: true
      });
      if (matDateLocale !== undefined) {
        this._matDateLocale = matDateLocale;
      }
      super.setLocale(this._matDateLocale);
    }
    getYear(date) {
      return date.getFullYear();
    }
    getMonth(date) {
      return date.getMonth();
    }
    getDate(date) {
      return date.getDate();
    }
    getDayOfWeek(date) {
      return date.getDay();
    }
    getMonthNames(style) {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        month: style,
        timeZone: 'utc'
      });
      return range(12, i => this._format(dtf, new Date(2017, i, 1)));
    }
    getDateNames() {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        day: 'numeric',
        timeZone: 'utc'
      });
      return range(31, i => this._format(dtf, new Date(2017, 0, i + 1)));
    }
    getDayOfWeekNames(style) {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        weekday: style,
        timeZone: 'utc'
      });
      return range(7, i => this._format(dtf, new Date(2017, 0, i + 1)));
    }
    getYearName(date) {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        year: 'numeric',
        timeZone: 'utc'
      });
      return this._format(dtf, date);
    }
    getFirstDayOfWeek() {
      if (typeof Intl !== 'undefined' && Intl.Locale) {
        const locale = new Intl.Locale(this.locale);
        const firstDay = (locale.getWeekInfo?.() || locale.weekInfo)?.firstDay ?? 0;
        return firstDay === 7 ? 0 : firstDay;
      }
      return 0;
    }
    getNumDaysInMonth(date) {
      return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
    }
    clone(date) {
      return new Date(date.getTime());
    }
    createDate(year, month, date) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (month < 0 || month > 11) {
          throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }
        if (date < 1) {
          throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
        }
      }
      let result = this._createDateWithOverflow(year, month, date);
      if (result.getMonth() != month && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error(`Invalid date "${date}" for month with index "${month}".`);
      }
      return result;
    }
    today() {
      return new Date();
    }
    parse(value, parseFormat) {
      if (typeof value == 'number') {
        return new Date(value);
      }
      return value ? new Date(Date.parse(value)) : null;
    }
    format(date, displayFormat) {
      if (!this.isValid(date)) {
        throw Error('NativeDateAdapter: Cannot format invalid date.');
      }
      const dtf = new Intl.DateTimeFormat(this.locale, {
        ...displayFormat,
        timeZone: 'utc'
      });
      return this._format(dtf, date);
    }
    addCalendarYears(date, years) {
      return this.addCalendarMonths(date, years * 12);
    }
    addCalendarMonths(date, months) {
      let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
      if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
        newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
      }
      return newDate;
    }
    addCalendarDays(date, days) {
      return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
    }
    toIso8601(date) {
      return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join('-');
    }
    deserialize(value) {
      if (typeof value === 'string') {
        if (!value) {
          return null;
        }
        if (ISO_8601_REGEX.test(value)) {
          let date = new Date(value);
          if (this.isValid(date)) {
            return date;
          }
        }
      }
      return super.deserialize(value);
    }
    isDateInstance(obj) {
      return obj instanceof Date;
    }
    isValid(date) {
      return !isNaN(date.getTime());
    }
    invalid() {
      return new Date(NaN);
    }
    setTime(target, hours, minutes, seconds) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!inRange(hours, 0, 23)) {
          throw Error(`Invalid hours "${hours}". Hours value must be between 0 and 23.`);
        }
        if (!inRange(minutes, 0, 59)) {
          throw Error(`Invalid minutes "${minutes}". Minutes value must be between 0 and 59.`);
        }
        if (!inRange(seconds, 0, 59)) {
          throw Error(`Invalid seconds "${seconds}". Seconds value must be between 0 and 59.`);
        }
      }
      const clone = this.clone(target);
      clone.setHours(hours, minutes, seconds, 0);
      return clone;
    }
    getHours(date) {
      return date.getHours();
    }
    getMinutes(date) {
      return date.getMinutes();
    }
    getSeconds(date) {
      return date.getSeconds();
    }
    parseTime(userValue, parseFormat) {
      if (typeof userValue !== 'string') {
        return userValue instanceof Date ? new Date(userValue.getTime()) : null;
      }
      const value = userValue.trim();
      if (value.length === 0) {
        return null;
      }
      let result = this._parseTimeString(value);
      if (result === null) {
        const withoutExtras = value.replace(/[^0-9:(AM|PM)]/gi, '').trim();
        if (withoutExtras.length > 0) {
          result = this._parseTimeString(withoutExtras);
        }
      }
      return result || this.invalid();
    }
    addSeconds(date, amount) {
      return new Date(date.getTime() + amount * 1000);
    }
    _createDateWithOverflow(year, month, date) {
      const d = new Date();
      d.setFullYear(year, month, date);
      d.setHours(0, 0, 0, 0);
      return d;
    }
    _2digit(n) {
      return ('00' + n).slice(-2);
    }
    _format(dtf, date) {
      const d = new Date();
      d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
      d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
      return dtf.format(d);
    }
    _parseTimeString(value) {
      const parsed = value.toUpperCase().match(TIME_REGEX);
      if (parsed) {
        let hours = parseInt(parsed[1]);
        const minutes = parseInt(parsed[2]);
        let seconds = parsed[3] == null ? undefined : parseInt(parsed[3]);
        const amPm = parsed[4];
        if (hours === 12) {
          hours = amPm === 'AM' ? 0 : hours;
        } else if (amPm === 'PM') {
          hours += 12;
        }
        if (inRange(hours, 0, 23) && inRange(minutes, 0, 59) && (seconds == null || inRange(seconds, 0, 59))) {
          return this.setTime(this.today(), hours, minutes, seconds || 0);
        }
      }
      return null;
    }
    static ɵfac = function NativeDateAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NativeDateAdapter)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NativeDateAdapter,
      factory: NativeDateAdapter.ɵfac
    });
  }
  return NativeDateAdapter;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function inRange(value, min, max) {
  return !isNaN(value) && value >= min && value <= max;
}
const MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null,
    timeInput: null
  },
  display: {
    dateInput: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    },
    timeInput: {
      hour: 'numeric',
      minute: 'numeric'
    },
    monthYearLabel: {
      year: 'numeric',
      month: 'short'
    },
    dateA11yLabel: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    monthYearA11yLabel: {
      year: 'numeric',
      month: 'long'
    },
    timeOptionLabel: {
      hour: 'numeric',
      minute: 'numeric'
    }
  }
};
let NativeDateModule = /*#__PURE__*/(() => {
  class NativeDateModule {
    static ɵfac = function NativeDateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NativeDateModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NativeDateModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      providers: [{
        provide: _date_formats_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.DateAdapter,
        useClass: NativeDateAdapter
      }]
    });
  }
  return NativeDateModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatNativeDateModule = /*#__PURE__*/(() => {
  class MatNativeDateModule {
    static ɵfac = function MatNativeDateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatNativeDateModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatNativeDateModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      providers: [provideNativeDateAdapter()]
    });
  }
  return MatNativeDateModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function provideNativeDateAdapter(formats = MAT_NATIVE_DATE_FORMATS) {
  return [{
    provide: _date_formats_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.DateAdapter,
    useClass: NativeDateAdapter
  }, {
    provide: _date_formats_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,
    useValue: formats
  }];
}


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
//# sourceMappingURL=4646.js.map