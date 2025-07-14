(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[6622],{

/***/ 8126:
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/common-module-cKSwHniA.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MatCommonModule),
/* harmony export */   a: () => (/* binding */ MATERIAL_SANITY_CHECKS)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ 56593);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ 48073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27940);





/**
 * Injection token that configures whether the Material sanity checks are enabled.
 * @deprecated No longer used and will be removed.
 * @breaking-change 21.0.0
 */
const MATERIAL_SANITY_CHECKS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('mat-sanity-checks', {
  providedIn: 'root',
  factory: () => true
});
/**
 * Module that captures anything that should be loaded and/or run for *all* Angular Material
 * components. This includes Bidi, etc.
 *
 * This module should be imported to each top-level component module (e.g., MatTabsModule).
 * @deprecated No longer used and will be removed.
 * @breaking-change 21.0.0
 */
let MatCommonModule = /*#__PURE__*/(() => {
  class MatCommonModule {
    constructor() {
      // While A11yModule also does this, we repeat it here to avoid importing A11yModule
      // in MatCommonModule.
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__.HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
    }
    static ɵfac = function MatCommonModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatCommonModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: MatCommonModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__.BidiModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__.BidiModule]
    });
  }
  return MatCommonModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 27295:
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/error-options-DCNQlTOA.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ ErrorStateMatcher),
/* harmony export */   S: () => (/* binding */ ShowOnDirtyErrorStateMatcher)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);



/** Error state matcher that matches when a control is invalid and dirty. */
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
/** Provider that defines how form controls behave with regards to displaying error messages. */
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


/***/ }),

/***/ 29968:
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/ripple-BYgV4oZC.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MatRipple),
/* harmony export */   R: () => (/* binding */ RippleRenderer),
/* harmony export */   a: () => (/* binding */ MAT_RIPPLE_GLOBAL_OPTIONS),
/* harmony export */   b: () => (/* binding */ RippleState),
/* harmony export */   c: () => (/* binding */ RippleRef),
/* harmony export */   d: () => (/* binding */ defaultRippleAnimationConfig)
/* harmony export */ });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ 49583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 56593);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 33981);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/private */ 98959);
/* harmony import */ var _animation_DfMFjxHu_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animation-DfMFjxHu.mjs */ 73388);








/** Possible states for a ripple element. */
var RippleState = /*#__PURE__*/function (RippleState) {
  RippleState[RippleState["FADING_IN"] = 0] = "FADING_IN";
  RippleState[RippleState["VISIBLE"] = 1] = "VISIBLE";
  RippleState[RippleState["FADING_OUT"] = 2] = "FADING_OUT";
  RippleState[RippleState["HIDDEN"] = 3] = "HIDDEN";
  return RippleState;
}(RippleState || {});
/**
 * Reference to a previously launched ripple element.
 */
class RippleRef {
  _renderer;
  element;
  config;
  _animationForciblyDisabledThroughCss;
  /** Current state of the ripple. */
  state = RippleState.HIDDEN;
  constructor(_renderer, /** Reference to the ripple HTML element. */
  element, /** Ripple configuration used for the ripple. */
  config, /* Whether animations are forcibly disabled for ripples through CSS. */
  _animationForciblyDisabledThroughCss = false) {
    this._renderer = _renderer;
    this.element = element;
    this.config = config;
    this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
  }
  /** Fades out the ripple element. */
  fadeOut() {
    this._renderer.fadeOutRipple(this);
  }
}

/** Options used to bind a passive capturing event. */
const passiveCapturingEventOptions$1 = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/** Manages events through delegation so that as few event handlers as possible are bound. */
class RippleEventManager {
  _events = /*#__PURE__*/new Map();
  /** Adds an event handler. */
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
  /** Removes an event handler. */
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
  /** Event handler that is bound and which dispatches the events to the different targets. */
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

/**
 * Default ripple animation configuration for ripples without an explicit
 * animation config specified.
 */
const defaultRippleAnimationConfig = {
  enterDuration: 225,
  exitDuration: 150
};
/**
 * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
 * events to avoid synthetic mouse events.
 */
const ignoreMouseEventsTimeout = 800;
/** Options used to bind a passive capturing event. */
const passiveCapturingEventOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/** Events that signal that the pointer is down. */
const pointerDownEvents = ['mousedown', 'touchstart'];
/** Events that signal that the pointer is up. */
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
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * @docs-private
 */
class RippleRenderer {
  _target;
  _ngZone;
  _platform;
  /** Element where the ripples are being added to. */
  _containerElement;
  /** Element which triggers the ripple elements on mouse events. */
  _triggerElement;
  /** Whether the pointer is currently down or not. */
  _isPointerDown = false;
  /**
   * Map of currently active ripple references.
   * The ripple reference is mapped to its element event listeners.
   * The reason why `| null` is used is that event listeners are added only
   * when the condition is truthy (see the `_startFadeOutTransition` method).
   */
  _activeRipples = /*#__PURE__*/new Map();
  /** Latest non-persistent ripple that was triggered. */
  _mostRecentTransientRipple;
  /** Time in milliseconds when the last touchstart event happened. */
  _lastTouchStartEvent;
  /** Whether pointer-up event listeners have been registered. */
  _pointerUpEventsRegistered = false;
  /**
   * Cached dimensions of the ripple container. Set when the first
   * ripple is shown and cleared once no more ripples are visible.
   */
  _containerRect;
  static _eventManager = /*#__PURE__*/new RippleEventManager();
  constructor(_target, _ngZone, elementOrElementRef, _platform, injector) {
    this._target = _target;
    this._ngZone = _ngZone;
    this._platform = _platform;
    // Only do anything if we're on the browser.
    if (_platform.isBrowser) {
      this._containerElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(elementOrElementRef);
    }
    if (injector) {
      injector.get(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_4__._CdkPrivateStyleLoader).load(_MatRippleStylesLoader);
    }
  }
  /**
   * Fades in a ripple at the given coordinates.
   * @param x Coordinate within the element, along the X axis at which to start the ripple.
   * @param y Coordinate within the element, along the Y axis at which to start the ripple.
   * @param config Extra ripple options.
   */
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
    // If a custom color has been specified, set it as inline style. If no color is
    // set, the default color will be applied through the ripple theme styles.
    if (config.color != null) {
      ripple.style.backgroundColor = config.color;
    }
    ripple.style.transitionDuration = `${enterDuration}ms`;
    this._containerElement.appendChild(ripple);
    // By default the browser does not recalculate the styles of dynamically created
    // ripple elements. This is critical to ensure that the `scale` animates properly.
    // We enforce a style recalculation by calling `getComputedStyle` and *accessing* a property.
    // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    const computedStyles = window.getComputedStyle(ripple);
    const userTransitionProperty = computedStyles.transitionProperty;
    const userTransitionDuration = computedStyles.transitionDuration;
    // Note: We detect whether animation is forcibly disabled through CSS (e.g. through
    // `transition: none` or `display: none`). This is technically unexpected since animations are
    // controlled through the animation config, but this exists for backwards compatibility. This
    // logic does not need to be super accurate since it covers some edge cases which can be easily
    // avoided by users.
    const animationForciblyDisabledThroughCss = userTransitionProperty === 'none' ||
    // Note: The canonical unit for serialized CSS `<time>` properties is seconds. Additionally
    // some browsers expand the duration for every property (in our case `opacity` and `transform`).
    userTransitionDuration === '0s' || userTransitionDuration === '0s, 0s' ||
    // If the container is 0x0, it's likely `display: none`.
    containerRect.width === 0 && containerRect.height === 0;
    // Exposed reference to the ripple that will be returned.
    const rippleRef = new RippleRef(this, ripple, config, animationForciblyDisabledThroughCss);
    // Start the enter animation by setting the transform/scale to 100%. The animation will
    // execute as part of this statement because we forced a style recalculation before.
    // Note: We use a 3d transform here in order to avoid an issue in Safari where
    // the ripples aren't clipped when inside the shadow DOM (see #24028).
    ripple.style.transform = 'scale3d(1, 1, 1)';
    rippleRef.state = RippleState.FADING_IN;
    if (!config.persistent) {
      this._mostRecentTransientRipple = rippleRef;
    }
    let eventListeners = null;
    // Do not register the `transition` event listener if fade-in and fade-out duration
    // are set to zero. The events won't fire anyway and we can save resources here.
    if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
      this._ngZone.runOutsideAngular(() => {
        const onTransitionEnd = () => {
          // Clear the fallback timer since the transition fired correctly.
          if (eventListeners) {
            eventListeners.fallbackTimer = null;
          }
          clearTimeout(fallbackTimer);
          this._finishRippleTransition(rippleRef);
        };
        const onTransitionCancel = () => this._destroyRipple(rippleRef);
        // In some cases where there's a higher load on the browser, it can choose not to dispatch
        // neither `transitionend` nor `transitioncancel` (see b/227356674). This timer serves as a
        // fallback for such cases so that the ripple doesn't become stuck. We add a 100ms buffer
        // because timers aren't precise. Note that another approach can be to transition the ripple
        // to the `VISIBLE` state immediately above and to `FADING_IN` afterwards inside
        // `transitionstart`. We go with the timer because it's one less event listener and
        // it's less likely to break existing tests.
        const fallbackTimer = setTimeout(onTransitionCancel, enterDuration + 100);
        ripple.addEventListener('transitionend', onTransitionEnd);
        // If the transition is cancelled (e.g. due to DOM removal), we destroy the ripple
        // directly as otherwise we would keep it part of the ripple container forever.
        // https://www.w3.org/TR/css-transitions-1/#:~:text=no%20longer%20in%20the%20document.
        ripple.addEventListener('transitioncancel', onTransitionCancel);
        eventListeners = {
          onTransitionEnd,
          onTransitionCancel,
          fallbackTimer
        };
      });
    }
    // Add the ripple reference to the list of all active ripples.
    this._activeRipples.set(rippleRef, eventListeners);
    // In case there is no fade-in transition duration, we need to manually call the transition
    // end listener because `transitionend` doesn't fire if there is no transition.
    if (animationForciblyDisabledThroughCss || !enterDuration) {
      this._finishRippleTransition(rippleRef);
    }
    return rippleRef;
  }
  /** Fades out a ripple reference. */
  fadeOutRipple(rippleRef) {
    // For ripples already fading out or hidden, this should be a noop.
    if (rippleRef.state === RippleState.FADING_OUT || rippleRef.state === RippleState.HIDDEN) {
      return;
    }
    const rippleEl = rippleRef.element;
    const animationConfig = {
      ...defaultRippleAnimationConfig,
      ...rippleRef.config.animation
    };
    // This starts the fade-out transition and will fire the transition end listener that
    // removes the ripple element from the DOM.
    rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
    rippleEl.style.opacity = '0';
    rippleRef.state = RippleState.FADING_OUT;
    // In case there is no fade-out transition duration, we need to manually call the
    // transition end listener because `transitionend` doesn't fire if there is no transition.
    if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
      this._finishRippleTransition(rippleRef);
    }
  }
  /** Fades out all currently active ripples. */
  fadeOutAll() {
    this._getActiveRipples().forEach(ripple => ripple.fadeOut());
  }
  /** Fades out all currently active non-persistent ripples. */
  fadeOutAllNonPersistent() {
    this._getActiveRipples().forEach(ripple => {
      if (!ripple.config.persistent) {
        ripple.fadeOut();
      }
    });
  }
  /** Sets up the trigger event listeners */
  setupTriggerEvents(elementOrElementRef) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(elementOrElementRef);
    if (!this._platform.isBrowser || !element || element === this._triggerElement) {
      return;
    }
    // Remove all previously registered event listeners from the trigger element.
    this._removeTriggerEvents();
    this._triggerElement = element;
    // Use event delegation for the trigger events since they're
    // set up during creation and are performance-sensitive.
    pointerDownEvents.forEach(type => {
      RippleRenderer._eventManager.addHandler(this._ngZone, type, element, this);
    });
  }
  /**
   * Handles all registered events.
   * @docs-private
   */
  handleEvent(event) {
    if (event.type === 'mousedown') {
      this._onMousedown(event);
    } else if (event.type === 'touchstart') {
      this._onTouchStart(event);
    } else {
      this._onPointerUp();
    }
    // If pointer-up events haven't been registered yet, do so now.
    // We do this on-demand in order to reduce the total number of event listeners
    // registered by the ripples, which speeds up the rendering time for large UIs.
    if (!this._pointerUpEventsRegistered) {
      // The events for hiding the ripple are bound directly on the trigger, because:
      // 1. Some of them occur frequently (e.g. `mouseleave`) and any advantage we get from
      // delegation will be diminished by having to look through all the data structures often.
      // 2. They aren't as performance-sensitive, because they're bound only after the user
      // has interacted with an element.
      this._ngZone.runOutsideAngular(() => {
        pointerUpEvents.forEach(type => {
          this._triggerElement.addEventListener(type, this, passiveCapturingEventOptions);
        });
      });
      this._pointerUpEventsRegistered = true;
    }
  }
  /** Method that will be called if the fade-in or fade-in transition completed. */
  _finishRippleTransition(rippleRef) {
    if (rippleRef.state === RippleState.FADING_IN) {
      this._startFadeOutTransition(rippleRef);
    } else if (rippleRef.state === RippleState.FADING_OUT) {
      this._destroyRipple(rippleRef);
    }
  }
  /**
   * Starts the fade-out transition of the given ripple if it's not persistent and the pointer
   * is not held down anymore.
   */
  _startFadeOutTransition(rippleRef) {
    const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
    const {
      persistent
    } = rippleRef.config;
    rippleRef.state = RippleState.VISIBLE;
    // When the timer runs out while the user has kept their pointer down, we want to
    // keep only the persistent ripples and the latest transient ripple. We do this,
    // because we don't want stacked transient ripples to appear after their enter
    // animation has finished.
    if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
      rippleRef.fadeOut();
    }
  }
  /** Destroys the given ripple by removing it from the DOM and updating its state. */
  _destroyRipple(rippleRef) {
    const eventListeners = this._activeRipples.get(rippleRef) ?? null;
    this._activeRipples.delete(rippleRef);
    // Clear out the cached bounding rect if we have no more ripples.
    if (!this._activeRipples.size) {
      this._containerRect = null;
    }
    // If the current ref is the most recent transient ripple, unset it
    // avoid memory leaks.
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
  /** Function being called whenever the trigger is being pressed using mouse. */
  _onMousedown(event) {
    // Screen readers will fire fake mouse events for space/enter. Skip launching a
    // ripple in this case for consistency with the non-screen-reader experience.
    const isFakeMousedown = (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.isFakeMousedownFromScreenReader)(event);
    const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
    if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this._isPointerDown = true;
      this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
    }
  }
  /** Function being called whenever the trigger is being pressed using touch. */
  _onTouchStart(event) {
    if (!this._target.rippleDisabled && !(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.isFakeTouchstartFromScreenReader)(event)) {
      // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
      // events will launch a second ripple if we don't ignore mouse events for a specific
      // time after a touchstart event.
      this._lastTouchStartEvent = Date.now();
      this._isPointerDown = true;
      // Use `changedTouches` so we skip any touches where the user put
      // their finger down, but used another finger to tap the element again.
      const touches = event.changedTouches;
      // According to the typings the touches should always be defined, but in some cases
      // the browser appears to not assign them in tests which leads to flakes.
      if (touches) {
        for (let i = 0; i < touches.length; i++) {
          this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
        }
      }
    }
  }
  /** Function being called whenever the trigger is being released. */
  _onPointerUp() {
    if (!this._isPointerDown) {
      return;
    }
    this._isPointerDown = false;
    // Fade-out all ripples that are visible and not persistent.
    this._getActiveRipples().forEach(ripple => {
      // By default, only ripples that are completely visible will fade out on pointer release.
      // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
      const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }
  _getActiveRipples() {
    return Array.from(this._activeRipples.keys());
  }
  /** Removes previously registered event listeners from the trigger element. */
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
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 */
function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}

/** Injection token that can be used to specify the global ripple options. */
const MAT_RIPPLE_GLOBAL_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('mat-ripple-global-options');
let MatRipple = /*#__PURE__*/(() => {
  class MatRipple {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    _animationsDisabled = (0,_animation_DfMFjxHu_mjs__WEBPACK_IMPORTED_MODULE_5__._)();
    /** Custom color for all ripples. */
    color;
    /** Whether the ripples should be visible outside the component's bounds. */
    unbounded;
    /**
     * Whether the ripple always originates from the center of the host element's bounds, rather
     * than originating from the location of the click event.
     */
    centered;
    /**
     * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
     * will be the distance from the center of the ripple to the furthest corner of the host element's
     * bounding rectangle.
     */
    radius = 0;
    /**
     * Configuration for the ripple animation. Allows modifying the enter and exit animation
     * duration of the ripples. The animation durations will be overwritten if the
     * `NoopAnimationsModule` is being used.
     */
    animation;
    /**
     * Whether click events will not trigger the ripple. Ripples can be still launched manually
     * by using the `launch()` method.
     */
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
    /**
     * The element that triggers the ripple when click events are received.
     * Defaults to the directive's host element.
     */
    get trigger() {
      return this._trigger || this._elementRef.nativeElement;
    }
    set trigger(trigger) {
      this._trigger = trigger;
      this._setupTriggerEventsIfEnabled();
    }
    _trigger;
    /** Renderer for the ripple DOM manipulations. */
    _rippleRenderer;
    /** Options that are set globally for all ripples. */
    _globalOptions;
    /** @docs-private Whether ripple directive is initialized and the input bindings are set. */
    _isInitialized = false;
    constructor() {
      const ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
      const platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform);
      const globalOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MAT_RIPPLE_GLOBAL_OPTIONS, {
        optional: true
      });
      const injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector);
      // Note: cannot use `inject()` here, because this class
      // gets instantiated manually in the ripple loader.
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
    /** Fades out all currently showing ripple elements. */
    fadeOutAll() {
      this._rippleRenderer.fadeOutAll();
    }
    /** Fades out all currently showing non-persistent ripple elements. */
    fadeOutAllNonPersistent() {
      this._rippleRenderer.fadeOutAllNonPersistent();
    }
    /**
     * Ripple configuration from the directive's input values.
     * @docs-private Implemented as part of RippleTarget
     */
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
    /**
     * Whether ripples on pointer-down are disabled or not.
     * @docs-private Implemented as part of RippleTarget
     */
    get rippleDisabled() {
      return this.disabled || !!this._globalOptions.disabled;
    }
    /** Sets up the trigger event listeners if ripples are enabled. */
    _setupTriggerEventsIfEnabled() {
      if (!this.disabled && this._isInitialized) {
        this._rippleRenderer.setupTriggerEvents(this.trigger);
      }
    }
    /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
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


/***/ }),

/***/ 50069:
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/icon-registry-CwOTJ7YM.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ ICON_REGISTRY_PROVIDER_FACTORY),
/* harmony export */   M: () => (/* binding */ MatIconRegistry),
/* harmony export */   a: () => (/* binding */ getMatIconNoHttpProviderError),
/* harmony export */   b: () => (/* binding */ getMatIconFailedToSanitizeUrlError),
/* harmony export */   c: () => (/* binding */ getMatIconFailedToSanitizeLiteralError),
/* harmony export */   d: () => (/* binding */ ICON_REGISTRY_PROVIDER),
/* harmony export */   g: () => (/* binding */ getMatIconNameNotFoundError)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 52580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 53105);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 32778);









/**
 * The Trusted Types policy, or null if Trusted Types are not
 * enabled/supported, or undefined if the policy has not been created yet.
 */
let policy;
/**
 * Returns the Trusted Types policy, or null if Trusted Types are not
 * enabled/supported. The first call to this function will create the policy.
 */
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
/**
 * Unsafely promote a string to a TrustedHTML, falling back to strings when
 * Trusted Types are not available.
 * @security This is a security-sensitive function; any use of this function
 * must go through security review. In particular, it must be assured that the
 * provided string will never cause an XSS vulnerability if used in a context
 * that will be interpreted as HTML by a browser, e.g. when assigning to
 * element.innerHTML.
 */
function trustedHTMLFromString(html) {
  return getPolicy()?.createHTML(html) || html;
}

/**
 * Returns an exception to be thrown in the case when attempting to
 * load an icon with a name that cannot be found.
 * @docs-private
 */
function getMatIconNameNotFoundError(iconName) {
  return Error(`Unable to find icon with the name "${iconName}"`);
}
/**
 * Returns an exception to be thrown when the consumer attempts to use
 * `<mat-icon>` without including @angular/common/http.
 * @docs-private
 */
function getMatIconNoHttpProviderError() {
  return Error('Could not find HttpClient for use with Angular Material icons. ' + 'Please add provideHttpClient() to your providers.');
}
/**
 * Returns an exception to be thrown when a URL couldn't be sanitized.
 * @param url URL that was attempted to be sanitized.
 * @docs-private
 */
function getMatIconFailedToSanitizeUrlError(url) {
  return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL ` + `via Angular's DomSanitizer. Attempted URL was "${url}".`);
}
/**
 * Returns an exception to be thrown when a HTML string couldn't be sanitized.
 * @param literal HTML that was attempted to be sanitized.
 * @docs-private
 */
function getMatIconFailedToSanitizeLiteralError(literal) {
  return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by ` + `Angular's DomSanitizer. Attempted literal was "${literal}".`);
}
/**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * @docs-private
 */
class SvgIconConfig {
  url;
  svgText;
  options;
  svgElement;
  constructor(url, svgText, options) {
    this.url = url;
    this.svgText = svgText;
    this.options = options;
  }
}
/**
 * Service to register and display icons used by the `<mat-icon>` component.
 * - Registers icon URLs by namespace and name.
 * - Registers icon set URLs by namespace.
 * - Registers aliases for CSS classes, for use with icon fonts.
 * - Loads icons from URLs and extracts individual icons from icon sets.
 */
let MatIconRegistry = /*#__PURE__*/(() => {
  class MatIconRegistry {
    _httpClient;
    _sanitizer;
    _errorHandler;
    _document;
    /**
     * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
     */
    _svgIconConfigs = new Map();
    /**
     * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
     * Multiple icon sets can be registered under the same namespace.
     */
    _iconSetConfigs = new Map();
    /** Cache for icons loaded by direct URLs. */
    _cachedIconsByUrl = new Map();
    /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */
    _inProgressUrlFetches = new Map();
    /** Map from font identifiers to their CSS class names. Used for icon fonts. */
    _fontCssClassesByAlias = new Map();
    /** Registered icon resolver functions. */
    _resolvers = [];
    /**
     * The CSS classes to apply when an `<mat-icon>` component has no icon name, url, or font
     * specified. The default 'material-icons' value assumes that the material icon font has been
     * loaded as described at https://google.github.io/material-design-icons/#icon-font-for-the-web
     */
    _defaultFontSetClass = ['material-icons', 'mat-ligature-font'];
    constructor(_httpClient, _sanitizer, document, _errorHandler) {
      this._httpClient = _httpClient;
      this._sanitizer = _sanitizer;
      this._errorHandler = _errorHandler;
      this._document = document;
    }
    /**
     * Registers an icon by URL in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    addSvgIcon(iconName, url, options) {
      return this.addSvgIconInNamespace('', iconName, url, options);
    }
    /**
     * Registers an icon using an HTML string in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param literal SVG source of the icon.
     */
    addSvgIconLiteral(iconName, literal, options) {
      return this.addSvgIconLiteralInNamespace('', iconName, literal, options);
    }
    /**
     * Registers an icon by URL in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    addSvgIconInNamespace(namespace, iconName, url, options) {
      return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
    }
    /**
     * Registers an icon resolver function with the registry. The function will be invoked with the
     * name and namespace of an icon when the registry tries to resolve the URL from which to fetch
     * the icon. The resolver is expected to return a `SafeResourceUrl` that points to the icon,
     * an object with the icon URL and icon options, or `null` if the icon is not supported. Resolvers
     * will be invoked in the order in which they have been registered.
     * @param resolver Resolver function to be registered.
     */
    addSvgIconResolver(resolver) {
      this._resolvers.push(resolver);
      return this;
    }
    /**
     * Registers an icon using an HTML string in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param literal SVG source of the icon.
     */
    addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
      const cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.HTML, literal);
      // TODO: add an ngDevMode check
      if (!cleanLiteral) {
        throw getMatIconFailedToSanitizeLiteralError(literal);
      }
      // Security: The literal is passed in as SafeHtml, and is thus trusted.
      const trustedLiteral = trustedHTMLFromString(cleanLiteral);
      return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig('', trustedLiteral, options));
    }
    /**
     * Registers an icon set by URL in the default namespace.
     * @param url
     */
    addSvgIconSet(url, options) {
      return this.addSvgIconSetInNamespace('', url, options);
    }
    /**
     * Registers an icon set using an HTML string in the default namespace.
     * @param literal SVG source of the icon set.
     */
    addSvgIconSetLiteral(literal, options) {
      return this.addSvgIconSetLiteralInNamespace('', literal, options);
    }
    /**
     * Registers an icon set by URL in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param url
     */
    addSvgIconSetInNamespace(namespace, url, options) {
      return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
    }
    /**
     * Registers an icon set using an HTML string in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param literal SVG source of the icon set.
     */
    addSvgIconSetLiteralInNamespace(namespace, literal, options) {
      const cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.HTML, literal);
      if (!cleanLiteral) {
        throw getMatIconFailedToSanitizeLiteralError(literal);
      }
      // Security: The literal is passed in as SafeHtml, and is thus trusted.
      const trustedLiteral = trustedHTMLFromString(cleanLiteral);
      return this._addSvgIconSetConfig(namespace, new SvgIconConfig('', trustedLiteral, options));
    }
    /**
     * Defines an alias for CSS class names to be used for icon fonts. Creating an matIcon
     * component with the alias as the fontSet input will cause the class name to be applied
     * to the `<mat-icon>` element.
     *
     * If the registered font is a ligature font, then don't forget to also include the special
     * class `mat-ligature-font` to allow the usage via attribute. So register like this:
     *
     * ```ts
     * iconRegistry.registerFontClassAlias('f1', 'font1 mat-ligature-font');
     * ```
     *
     * And use like this:
     *
     * ```html
     * <mat-icon fontSet="f1" fontIcon="home"></mat-icon>
     * ```
     *
     * @param alias Alias for the font.
     * @param classNames Class names override to be used instead of the alias.
     */
    registerFontClassAlias(alias, classNames = alias) {
      this._fontCssClassesByAlias.set(alias, classNames);
      return this;
    }
    /**
     * Returns the CSS class name associated with the alias by a previous call to
     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     */
    classNameForFontAlias(alias) {
      return this._fontCssClassesByAlias.get(alias) || alias;
    }
    /**
     * Sets the CSS classes to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     */
    setDefaultFontSetClass(...classNames) {
      this._defaultFontSetClass = classNames;
      return this;
    }
    /**
     * Returns the CSS classes to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     */
    getDefaultFontSetClass() {
      return this._defaultFontSetClass;
    }
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param safeUrl URL from which to fetch the SVG icon.
     */
    getSvgIconFromUrl(safeUrl) {
      const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.RESOURCE_URL, safeUrl);
      if (!url) {
        throw getMatIconFailedToSanitizeUrlError(safeUrl);
      }
      const cachedIcon = this._cachedIconsByUrl.get(url);
      if (cachedIcon) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(cloneSvg(cachedIcon));
      }
      return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(svg => this._cachedIconsByUrl.set(url, svg)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(svg => cloneSvg(svg)));
    }
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an error.
     *
     * @param name Name of the icon to be retrieved.
     * @param namespace Namespace in which to look for the icon.
     */
    getNamedSvgIcon(name, namespace = '') {
      const key = iconKey(namespace, name);
      let config = this._svgIconConfigs.get(key);
      // Return (copy of) cached icon if possible.
      if (config) {
        return this._getSvgFromConfig(config);
      }
      // Otherwise try to resolve the config from one of the resolver functions.
      config = this._getIconConfigFromResolvers(namespace, name);
      if (config) {
        this._svgIconConfigs.set(key, config);
        return this._getSvgFromConfig(config);
      }
      // See if we have any icon sets registered for the namespace.
      const iconSetConfigs = this._iconSetConfigs.get(namespace);
      if (iconSetConfigs) {
        return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(getMatIconNameNotFoundError(key));
    }
    ngOnDestroy() {
      this._resolvers = [];
      this._svgIconConfigs.clear();
      this._iconSetConfigs.clear();
      this._cachedIconsByUrl.clear();
    }
    /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     */
    _getSvgFromConfig(config) {
      if (config.svgText) {
        // We already have the SVG element for this icon, return a copy.
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(cloneSvg(this._svgElementFromConfig(config)));
      } else {
        // Fetch the icon from the config's URL, cache it, and return a copy.
        return this._loadSvgIconFromConfig(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(svg => cloneSvg(svg)));
      }
    }
    /**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
     * First searches the available cached icons for a nested element with a matching name, and
     * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
     * that have not been cached, and searches again after all fetches are completed.
     * The returned Observable produces the SVG element if possible, and throws
     * an error if no icon with the specified name can be found.
     */
    _getSvgFromIconSetConfigs(name, iconSetConfigs) {
      // For all the icon set SVG elements we've fetched, see if any contain an icon with the
      // requested name.
      const namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
      if (namedIcon) {
        // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
        // time anyway, there's probably not much advantage compared to just always extracting
        // it from the icon set.
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(namedIcon);
      }
      // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
      // fetched, fetch them now and look for iconName in the results.
      const iconSetFetchRequests = iconSetConfigs.filter(iconSetConfig => !iconSetConfig.svgText).map(iconSetConfig => {
        return this._loadSvgIconSetFromConfig(iconSetConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
          const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.RESOURCE_URL, iconSetConfig.url);
          // Swallow errors fetching individual URLs so the
          // combined Observable won't necessarily fail.
          const errorMessage = `Loading icon set URL: ${url} failed: ${err.message}`;
          this._errorHandler.handleError(new Error(errorMessage));
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
        }));
      });
      // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
      // cached SVG element (unless the request failed), and we can check again for the icon.
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(iconSetFetchRequests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => {
        const foundIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
        // TODO: add an ngDevMode check
        if (!foundIcon) {
          throw getMatIconNameNotFoundError(name);
        }
        return foundIcon;
      }));
    }
    /**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */
    _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
      // Iterate backwards, so icon sets added later have precedence.
      for (let i = iconSetConfigs.length - 1; i >= 0; i--) {
        const config = iconSetConfigs[i];
        // Parsing the icon set's text into an SVG element can be expensive. We can avoid some of
        // the parsing by doing a quick check using `indexOf` to see if there's any chance for the
        // icon to be in the set. This won't be 100% accurate, but it should help us avoid at least
        // some of the parsing.
        if (config.svgText && config.svgText.toString().indexOf(iconName) > -1) {
          const svg = this._svgElementFromConfig(config);
          const foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);
          if (foundIcon) {
            return foundIcon;
          }
        }
      }
      return null;
    }
    /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     */
    _loadSvgIconFromConfig(config) {
      return this._fetchIcon(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(svgText => config.svgText = svgText), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => this._svgElementFromConfig(config)));
    }
    /**
     * Loads the content of the icon set URL specified in the
     * SvgIconConfig and attaches it to the config.
     */
    _loadSvgIconSetFromConfig(config) {
      if (config.svgText) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
      }
      return this._fetchIcon(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(svgText => config.svgText = svgText));
    }
    /**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */
    _extractSvgIconFromSet(iconSet, iconName, options) {
      // Use the `id="iconName"` syntax in order to escape special
      // characters in the ID (versus using the #iconName syntax).
      const iconSource = iconSet.querySelector(`[id="${iconName}"]`);
      if (!iconSource) {
        return null;
      }
      // Clone the element and remove the ID to prevent multiple elements from being added
      // to the page with the same ID.
      const iconElement = iconSource.cloneNode(true);
      iconElement.removeAttribute('id');
      // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
      // the content of a new <svg> node.
      if (iconElement.nodeName.toLowerCase() === 'svg') {
        return this._setSvgAttributes(iconElement, options);
      }
      // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
      // that the same could be achieved by referring to it via <use href="#id">, however the <use>
      // tag is problematic on Firefox, because it needs to include the current page path.
      if (iconElement.nodeName.toLowerCase() === 'symbol') {
        return this._setSvgAttributes(this._toSvgElement(iconElement), options);
      }
      // createElement('SVG') doesn't work as expected; the DOM ends up with
      // the correct nodes, but the SVG content doesn't render. Instead we
      // have to create an empty SVG node using innerHTML and append its content.
      // Elements created using DOMParser.parseFromString have the same problem.
      // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
      const svg = this._svgElementFromString(trustedHTMLFromString('<svg></svg>'));
      // Clone the node so we don't remove it from the parent icon set element.
      svg.appendChild(iconElement);
      return this._setSvgAttributes(svg, options);
    }
    /**
     * Creates a DOM element from the given SVG string.
     */
    _svgElementFromString(str) {
      const div = this._document.createElement('DIV');
      div.innerHTML = str;
      const svg = div.querySelector('svg');
      // TODO: add an ngDevMode check
      if (!svg) {
        throw Error('<svg> tag not found');
      }
      return svg;
    }
    /**
     * Converts an element into an SVG node by cloning all of its children.
     */
    _toSvgElement(element) {
      const svg = this._svgElementFromString(trustedHTMLFromString('<svg></svg>'));
      const attributes = element.attributes;
      // Copy over all the attributes from the `symbol` to the new SVG, except the id.
      for (let i = 0; i < attributes.length; i++) {
        const {
          name,
          value
        } = attributes[i];
        if (name !== 'id') {
          svg.setAttribute(name, value);
        }
      }
      for (let i = 0; i < element.childNodes.length; i++) {
        if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
          svg.appendChild(element.childNodes[i].cloneNode(true));
        }
      }
      return svg;
    }
    /**
     * Sets the default attributes for an SVG element to be used as an icon.
     */
    _setSvgAttributes(svg, options) {
      svg.setAttribute('fit', '');
      svg.setAttribute('height', '100%');
      svg.setAttribute('width', '100%');
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
      if (options && options.viewBox) {
        svg.setAttribute('viewBox', options.viewBox);
      }
      return svg;
    }
    /**
     * Returns an Observable which produces the string contents of the given icon. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     */
    _fetchIcon(iconConfig) {
      const {
        url: safeUrl,
        options
      } = iconConfig;
      const withCredentials = options?.withCredentials ?? false;
      if (!this._httpClient) {
        throw getMatIconNoHttpProviderError();
      }
      // TODO: add an ngDevMode check
      if (safeUrl == null) {
        throw Error(`Cannot fetch icon from URL "${safeUrl}".`);
      }
      const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.RESOURCE_URL, safeUrl);
      // TODO: add an ngDevMode check
      if (!url) {
        throw getMatIconFailedToSanitizeUrlError(safeUrl);
      }
      // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
      // already a request in progress for that URL. It's necessary to call share() on the
      // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
      const inProgressFetch = this._inProgressUrlFetches.get(url);
      if (inProgressFetch) {
        return inProgressFetch;
      }
      const req = this._httpClient.get(url, {
        responseType: 'text',
        withCredentials
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(svg => {
        // Security: This SVG is fetched from a SafeResourceUrl, and is thus
        // trusted HTML.
        return trustedHTMLFromString(svg);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this._inProgressUrlFetches.delete(url)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
      this._inProgressUrlFetches.set(url, req);
      return req;
    }
    /**
     * Registers an icon config by name in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param iconName Name under which to register the config.
     * @param config Config to be registered.
     */
    _addSvgIconConfig(namespace, iconName, config) {
      this._svgIconConfigs.set(iconKey(namespace, iconName), config);
      return this;
    }
    /**
     * Registers an icon set config in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param config Config to be registered.
     */
    _addSvgIconSetConfig(namespace, config) {
      const configNamespace = this._iconSetConfigs.get(namespace);
      if (configNamespace) {
        configNamespace.push(config);
      } else {
        this._iconSetConfigs.set(namespace, [config]);
      }
      return this;
    }
    /** Parses a config's text into an SVG element. */
    _svgElementFromConfig(config) {
      if (!config.svgElement) {
        const svg = this._svgElementFromString(config.svgText);
        this._setSvgAttributes(svg, config.options);
        config.svgElement = svg;
      }
      return config.svgElement;
    }
    /** Tries to create an icon config through the registered resolver functions. */
    _getIconConfigFromResolvers(namespace, name) {
      for (let i = 0; i < this._resolvers.length; i++) {
        const result = this._resolvers[i](name, namespace);
        if (result) {
          return isSafeUrlWithOptions(result) ? new SvgIconConfig(result.url, null, result.options) : new SvgIconConfig(result, null);
        }
      }
      return undefined;
    }
    static ɵfac = function MatIconRegistry_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatIconRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ErrorHandler));
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MatIconRegistry,
      factory: MatIconRegistry.ɵfac,
      providedIn: 'root'
    });
  }
  return MatIconRegistry;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document) {
  return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
}
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
const ICON_REGISTRY_PROVIDER = {
  // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
  provide: MatIconRegistry,
  deps: [[/*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional(), /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf(), MatIconRegistry], [/*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional(), _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ErrorHandler, [/*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional(), _angular_core__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]],
  useFactory: ICON_REGISTRY_PROVIDER_FACTORY
};
/** Clones an SVGElement while preserving type information. */
function cloneSvg(svg) {
  return svg.cloneNode(true);
}
/** Returns the cache key to use for an icon namespace and name. */
function iconKey(namespace, name) {
  return namespace + ':' + name;
}
function isSafeUrlWithOptions(value) {
  return !!(value.url && value.options);
}


/***/ }),

/***/ 56622:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/stepper.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_STEPPER_INTL_PROVIDER: () => (/* binding */ MAT_STEPPER_INTL_PROVIDER),
/* harmony export */   MAT_STEPPER_INTL_PROVIDER_FACTORY: () => (/* binding */ MAT_STEPPER_INTL_PROVIDER_FACTORY),
/* harmony export */   MatStep: () => (/* binding */ MatStep),
/* harmony export */   MatStepContent: () => (/* binding */ MatStepContent),
/* harmony export */   MatStepHeader: () => (/* binding */ MatStepHeader),
/* harmony export */   MatStepLabel: () => (/* binding */ MatStepLabel),
/* harmony export */   MatStepper: () => (/* binding */ MatStepper),
/* harmony export */   MatStepperIcon: () => (/* binding */ MatStepperIcon),
/* harmony export */   MatStepperIntl: () => (/* binding */ MatStepperIntl),
/* harmony export */   MatStepperModule: () => (/* binding */ MatStepperModule),
/* harmony export */   MatStepperNext: () => (/* binding */ MatStepperNext),
/* harmony export */   MatStepperPrevious: () => (/* binding */ MatStepperPrevious),
/* harmony export */   matStepperAnimations: () => (/* binding */ matStepperAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ 35253);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/stepper */ 25799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 56593);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 85914);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/private */ 98959);
/* harmony import */ var _icon_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./icon.mjs */ 93840);
/* harmony import */ var _structural_styles_CObeNzjn_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./structural-styles-CObeNzjn.mjs */ 79735);
/* harmony import */ var _ripple_BYgV4oZC_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ripple-BYgV4oZC.mjs */ 29968);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ 49583);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _error_options_DCNQlTOA_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./error-options-DCNQlTOA.mjs */ 27295);
/* harmony import */ var _animation_DfMFjxHu_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./animation-DfMFjxHu.mjs */ 73388);
/* harmony import */ var _common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./common-module-cKSwHniA.mjs */ 8126);
/* harmony import */ var _index_BFRo2fUq_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./index-BFRo2fUq.mjs */ 89061);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 52580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 53105);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion */ 33981);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ 285);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ 48073);























const _c0 = (a0, a1, a2) => ({
  index: a0,
  active: a1,
  optional: a2
});
function MatStepHeader_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](2, _c0, ctx_r0.index, ctx_r0.active, ctx_r0.optional));
  }
}
function MatStepHeader_Conditional_4_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0._getDefaultTextForState(ctx_r0.state));
  }
}
function MatStepHeader_Conditional_4_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0._intl.completedLabel);
  }
}
function MatStepHeader_Conditional_4_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0._intl.editableLabel);
  }
}
function MatStepHeader_Conditional_4_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](0, MatStepHeader_Conditional_4_Case_1_Conditional_0_Template, 2, 1, "span", 8)(1, MatStepHeader_Conditional_4_Case_1_Conditional_1_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r0.state === "done" ? 0 : ctx_r0.state === "edit" ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0._getDefaultTextForState(ctx_r0.state));
  }
}
function MatStepHeader_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](0, MatStepHeader_Conditional_4_Case_0_Template, 2, 1, "span", 7)(1, MatStepHeader_Conditional_4_Case_1_Template, 4, 2);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"]((tmp_1_0 = ctx_r0.state) === "number" ? 0 : 1);
  }
}
function MatStepHeader_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.template);
  }
}
function MatStepHeader_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.label);
  }
}
function MatStepHeader_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0._intl.optionalLabel);
  }
}
function MatStepHeader_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
const _c1 = ["*"];
function MatStep_ng_template_0_ng_template_1_Template(rf, ctx) {}
function MatStep_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MatStep_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkPortalOutlet", ctx_r0._portal);
  }
}
const _c2 = ["animatedContainer"];
const _c3 = a0 => ({
  step: a0
});
function MatStepper_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
  }
}
function MatStepper_Case_1_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 7);
  }
}
function MatStepper_Case_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](1, MatStepper_Case_1_For_3_Conditional_1_Template, 1, 0, "div", 7);
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const ɵ$index_8_r2 = ctx.$index;
    const ɵ$count_8_r3 = ctx.$count;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const stepTemplate_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", stepTemplate_r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c3, step_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](!(ɵ$index_8_r2 === ɵ$count_8_r3 - 1) ? 1 : -1);
  }
}
function MatStepper_Case_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const $index_r6 = ctx.$index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("mat-horizontal-stepper-content-" + ctx_r6._getAnimationDirection($index_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r6._getStepContentId($index_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-labelledby", ctx_r6._getStepLabelId($index_r6))("inert", ctx_r6.selectedIndex === $index_r6 ? null : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", step_r5.content);
  }
}
function MatStepper_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](2, MatStepper_Case_1_For_3_Template, 2, 5, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](5, MatStepper_Case_1_For_6_Template, 3, 6, "div", 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r6.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r6.steps);
  }
}
function MatStepper_Case_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11, 1)(4, "div", 12)(5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](6, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const step_r8 = ctx.$implicit;
    const $index_r9 = ctx.$index;
    const ɵ$index_22_r10 = ctx.$index;
    const ɵ$count_22_r11 = ctx.$count;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const stepTemplate_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", stepTemplate_r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c3, step_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-stepper-vertical-line", !(ɵ$index_22_r10 === ɵ$count_22_r11 - 1))("mat-vertical-content-container-active", ctx_r6.selectedIndex === $index_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("inert", ctx_r6.selectedIndex === $index_r9 ? null : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r6._getStepContentId($index_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-labelledby", ctx_r6._getStepLabelId($index_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", step_r8.content);
  }
}
function MatStepper_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](0, MatStepper_Case_2_For_1_Template, 7, 12, "div", 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r6.steps);
  }
}
function MatStepper_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-step-header", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatStepper_ng_template_3_Template_mat_step_header_click_0_listener() {
      const step_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12).step;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](step_r13.select());
    })("keydown", function MatStepper_ng_template_3_Template_mat_step_header_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6._onKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r13 = ctx.step;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-horizontal-stepper-header", ctx_r6.orientation === "horizontal")("mat-vertical-stepper-header", ctx_r6.orientation === "vertical");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tabIndex", ctx_r6._getFocusIndex() === step_r13.index() ? 0 : -1)("id", ctx_r6._getStepLabelId(step_r13.index()))("index", step_r13.index())("state", step_r13.indicatorType())("label", step_r13.stepLabel || step_r13.label)("selected", step_r13.isSelected())("active", step_r13.isNavigable())("optional", step_r13.optional)("errorMessage", step_r13.errorMessage)("iconOverrides", ctx_r6._iconOverrides)("disableRipple", ctx_r6.disableRipple || !step_r13.isNavigable())("color", step_r13.color || ctx_r6.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-posinset", step_r13.index() + 1)("aria-setsize", ctx_r6.steps.length)("aria-controls", ctx_r6._getStepContentId(step_r13.index()))("aria-selected", step_r13.isSelected())("aria-label", step_r13.ariaLabel || null)("aria-labelledby", !step_r13.ariaLabel && step_r13.ariaLabelledby ? step_r13.ariaLabelledby : null)("aria-disabled", step_r13.isNavigable() ? null : true);
  }
}
let MatStepLabel = /*#__PURE__*/(() => {
  class MatStepLabel extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepLabel {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatStepLabel_BaseFactory;
      return function MatStepLabel_Factory(__ngFactoryType__) {
        return (ɵMatStepLabel_BaseFactory || (ɵMatStepLabel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatStepLabel)))(__ngFactoryType__ || MatStepLabel);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatStepLabel,
      selectors: [["", "matStepLabel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatStepLabel;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Stepper data that is required for internationalization. */
let MatStepperIntl = /*#__PURE__*/(() => {
  class MatStepperIntl {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    changes = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /** Label that is rendered below optional steps. */
    optionalLabel = 'Optional';
    /** Label that is used to indicate step as completed to screen readers. */
    completedLabel = 'Completed';
    /** Label that is used to indicate step as editable to screen readers. */
    editableLabel = 'Editable';
    static ɵfac = function MatStepperIntl_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatStepperIntl)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: MatStepperIntl,
      factory: MatStepperIntl.ɵfac,
      providedIn: 'root'
    });
  }
  return MatStepperIntl;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatStepperIntl();
}
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
const MAT_STEPPER_INTL_PROVIDER = {
  provide: MatStepperIntl,
  deps: [[/*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional(), /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.SkipSelf(), MatStepperIntl]],
  useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
};
let MatStepHeader = /*#__PURE__*/(() => {
  class MatStepHeader extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepHeader {
    _intl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(MatStepperIntl);
    _focusMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor);
    _intlSubscription;
    /** State of the given step. */
    state;
    /** Label of the given step. */
    label;
    /** Error message to display when there's an error. */
    errorMessage;
    /** Overrides for the header icons, passed in via the stepper. */
    iconOverrides;
    /** Index of the given step. */
    index;
    /** Whether the given step is selected. */
    selected;
    /** Whether the given step label is active. */
    active;
    /** Whether the given step is optional. */
    optional;
    /** Whether the ripple should be disabled. */
    disableRipple;
    /**
     * Theme color of the step header. This API is supported in M2 themes only, it
     * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/stepper/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    color;
    constructor() {
      super();
      const styleLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_6__._CdkPrivateStyleLoader);
      styleLoader.load(_structural_styles_CObeNzjn_mjs__WEBPACK_IMPORTED_MODULE_14__._);
      styleLoader.load(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_6__._VisuallyHiddenLoader);
      const changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
      this._intlSubscription = this._intl.changes.subscribe(() => changeDetectorRef.markForCheck());
    }
    ngAfterViewInit() {
      this._focusMonitor.monitor(this._elementRef, true);
    }
    ngOnDestroy() {
      this._intlSubscription.unsubscribe();
      this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /** Focuses the step header. */
    focus(origin, options) {
      if (origin) {
        this._focusMonitor.focusVia(this._elementRef, origin, options);
      } else {
        this._elementRef.nativeElement.focus(options);
      }
    }
    /** Returns string label of given step if it is a text label. */
    _stringLabel() {
      return this.label instanceof MatStepLabel ? null : this.label;
    }
    /** Returns MatStepLabel if the label of given step is a template label. */
    _templateLabel() {
      return this.label instanceof MatStepLabel ? this.label : null;
    }
    /** Returns the host HTML element. */
    _getHostElement() {
      return this._elementRef.nativeElement;
    }
    _getDefaultTextForState(state) {
      if (state == 'number') {
        return `${this.index + 1}`;
      }
      if (state == 'edit') {
        return 'create';
      }
      if (state == 'error') {
        return 'warning';
      }
      return state;
    }
    static ɵfac = function MatStepHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatStepHeader)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MatStepHeader,
      selectors: [["mat-step-header"]],
      hostAttrs: ["role", "tab", 1, "mat-step-header"],
      hostVars: 2,
      hostBindings: function MatStepHeader_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("mat-" + (ctx.color || "primary"));
        }
      },
      inputs: {
        state: "state",
        label: "label",
        errorMessage: "errorMessage",
        iconOverrides: "iconOverrides",
        index: "index",
        selected: "selected",
        active: "active",
        optional: "optional",
        disableRipple: "disableRipple",
        color: "color"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 10,
      vars: 17,
      consts: [["matRipple", "", 1, "mat-step-header-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-step-label"], [1, "mat-step-text-label"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"], ["aria-hidden", "true"], [1, "cdk-visually-hidden"], [3, "ngTemplateOutlet"]],
      template: function MatStepHeader_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div")(2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](3, MatStepHeader_Conditional_3_Template, 1, 6, "ng-container", 2)(4, MatStepHeader_Conditional_4_Template, 2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](6, MatStepHeader_Conditional_6_Template, 2, 1, "div", 4)(7, MatStepHeader_Conditional_7_Template, 2, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](8, MatStepHeader_Conditional_8_Template, 2, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](9, MatStepHeader_Conditional_9_Template, 2, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_8_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinterpolate1"]("mat-step-icon-state-", ctx.state, " mat-step-icon"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-step-icon-selected", ctx.selected);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.iconOverrides && ctx.iconOverrides[ctx.state] ? 3 : 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"]((tmp_8_0 = ctx._templateLabel()) ? 6 : ctx._stringLabel() ? 7 : -1, tmp_8_0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.optional && ctx.state != "error" ? 8 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.state === "error" ? 9 : -1);
        }
      },
      dependencies: [_ripple_BYgV4oZC_mjs__WEBPACK_IMPORTED_MODULE_15__.M, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _icon_mjs__WEBPACK_IMPORTED_MODULE_16__.MatIcon],
      styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:\"\"}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium))}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium))}@media(hover: none){.mat-step-header:hover{background:none}}@media(forced-colors: active){.mat-step-header{outline:solid 1px}.mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.mat-step-header[aria-disabled=true]{outline-color:GrayText}.mat-step-header[aria-disabled=true] .mat-step-label,.mat-step-header[aria-disabled=true] .mat-step-icon,.mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));background-color:var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant))}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color, transparent);color:var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error))}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));font-size:var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size))}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight))}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary))}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatStepHeader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Template to be used to override the icons inside the step header.
 */
let MatStepperIcon = /*#__PURE__*/(() => {
  class MatStepperIcon {
    templateRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef);
    /** Name of the icon to be overridden. */
    name;
    constructor() {}
    static ɵfac = function MatStepperIcon_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatStepperIcon)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatStepperIcon,
      selectors: [["ng-template", "matStepperIcon", ""]],
      inputs: {
        name: [0, "matStepperIcon", "name"]
      }
    });
  }
  return MatStepperIcon;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Content for a `mat-step` that will be rendered lazily.
 */
let MatStepContent = /*#__PURE__*/(() => {
  class MatStepContent {
    _template = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef);
    constructor() {}
    static ɵfac = function MatStepContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatStepContent)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatStepContent,
      selectors: [["ng-template", "matStepContent", ""]]
    });
  }
  return MatStepContent;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatStep = /*#__PURE__*/(() => {
  class MatStep extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStep {
    _errorStateMatcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_error_options_DCNQlTOA_mjs__WEBPACK_IMPORTED_MODULE_17__.E, {
      skipSelf: true
    });
    _viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
    _isSelected = rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
    /** Content for step label given by `<ng-template matStepLabel>`. */
    // We need an initializer here to avoid a TS error.
    stepLabel = undefined;
    /**
     * Theme color for the particular step. This API is supported in M2 themes
     * only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/stepper/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    color;
    /** Content that will be rendered lazily. */
    _lazyContent;
    /** Currently-attached portal containing the lazy content. */
    _portal;
    ngAfterContentInit() {
      this._isSelected = this._stepper.steps.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => {
        return this._stepper.selectionChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(event => event.selectedStep === this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(this._stepper.selected === this));
      })).subscribe(isSelected => {
        if (isSelected && this._lazyContent && !this._portal) {
          this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.TemplatePortal(this._lazyContent._template, this._viewContainerRef);
        }
      });
    }
    ngOnDestroy() {
      this._isSelected.unsubscribe();
    }
    /** Custom error state matcher that additionally checks for validity of interacted form. */
    isErrorState(control, form) {
      const originalErrorState = this._errorStateMatcher.isErrorState(control, form);
      // Custom error state checks for the validity of form that is not submitted or touched
      // since user can trigger a form change by calling for another step without directly
      // interacting with the current form.
      const customErrorState = !!(control && control.invalid && this.interacted);
      return originalErrorState || customErrorState;
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatStep_BaseFactory;
      return function MatStep_Factory(__ngFactoryType__) {
        return (ɵMatStep_BaseFactory || (ɵMatStep_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatStep)))(__ngFactoryType__ || MatStep);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MatStep,
      selectors: [["mat-step"]],
      contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatStepLabel, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatStepContent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
        }
      },
      hostAttrs: ["hidden", ""],
      inputs: {
        color: "color"
      },
      exportAs: ["matStep"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: _error_options_DCNQlTOA_mjs__WEBPACK_IMPORTED_MODULE_17__.E,
        useExisting: MatStep
      }, {
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStep,
        useExisting: MatStep
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 1,
      vars: 0,
      consts: [[3, "cdkPortalOutlet"]],
      template: function MatStep_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatStep_ng_template_0_Template, 2, 1, "ng-template");
        }
      },
      dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.CdkPortalOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatStep;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatStepper = /*#__PURE__*/(() => {
  class MatStepper extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper {
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone);
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2);
    _animationsDisabled = (0,_animation_DfMFjxHu_mjs__WEBPACK_IMPORTED_MODULE_18__._)();
    _cleanupTransition;
    _isAnimating = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false);
    /** The list of step headers of the steps in the stepper. */
    _stepHeader = undefined;
    /** Elements hosting the step animations. */
    _animatedContainers;
    /** Full list of steps inside the stepper, including inside nested steppers. */
    _steps = undefined;
    /** Steps that belong to the current stepper, excluding ones from nested steppers. */
    steps = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.QueryList();
    /** Custom icon overrides passed in by the consumer. */
    _icons;
    /** Event emitted when the current step is done transitioning in. */
    animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /** Whether ripples should be disabled for the step headers. */
    disableRipple;
    /**
     * Theme color for all of the steps in stepper. This API is supported in M2
     * themes only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/stepper/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    color;
    /**
     * Whether the label should display in bottom or end position.
     * Only applies in the `horizontal` orientation.
     */
    labelPosition = 'end';
    /**
     * Position of the stepper's header.
     * Only applies in the `horizontal` orientation.
     */
    headerPosition = 'top';
    /** Consumer-specified template-refs to be used to override the header icons. */
    _iconOverrides = {};
    /** Duration for the animation. Will be normalized to milliseconds if no units are set. */
    get animationDuration() {
      return this._animationDuration;
    }
    set animationDuration(value) {
      this._animationDuration = /^\d+$/.test(value) ? value + 'ms' : value;
    }
    _animationDuration = '';
    /** Whether the stepper is rendering on the server. */
    _isServer = !(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__.Platform).isBrowser;
    constructor() {
      super();
      const elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
      const nodeName = elementRef.nativeElement.nodeName.toLowerCase();
      this.orientation = nodeName === 'mat-vertical-stepper' ? 'vertical' : 'horizontal';
    }
    ngAfterContentInit() {
      super.ngAfterContentInit();
      this._icons.forEach(({
        name,
        templateRef
      }) => this._iconOverrides[name] = templateRef);
      // Mark the component for change detection whenever the content children query changes
      this.steps.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(() => this._stateChanged());
      // Transition events won't fire if animations are disabled so we simulate them.
      this.selectedIndexChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(() => {
        const duration = this._getAnimationDuration();
        if (duration === '0ms' || duration === '0s') {
          this._onAnimationDone();
        } else {
          this._isAnimating.set(true);
        }
      });
      this._ngZone.runOutsideAngular(() => {
        if (!this._animationsDisabled) {
          setTimeout(() => {
            // Delay enabling the animations so we don't animate the initial state.
            this._elementRef.nativeElement.classList.add('mat-stepper-animations-enabled');
            // Bind this outside the zone since it fires for all transitions inside the stepper.
            this._cleanupTransition = this._renderer.listen(this._elementRef.nativeElement, 'transitionend', this._handleTransitionend);
          }, 200);
        }
      });
    }
    ngAfterViewInit() {
      super.ngAfterViewInit();
      // Prior to #30314 the stepper had animation `done` events bound to each animated container.
      // The animations module was firing them on initialization and for each subsequent animation.
      // Since the events were bound in the template, it had the unintended side-effect of triggering
      // change detection as well. It appears that this side-effect ended up being load-bearing,
      // because it was ensuring that the content elements (e.g. `matStepLabel`) that are defined
      // in sub-components actually get picked up in a timely fashion. This subscription simulates
      // the same change detection by using `queueMicrotask` similarly to the animations module.
      if (typeof queueMicrotask === 'function') {
        let hasEmittedInitial = false;
        this._animatedContainers.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(() => queueMicrotask(() => {
          // Simulate the initial `animationDone` event
          // that gets emitted by the animations module.
          if (!hasEmittedInitial) {
            hasEmittedInitial = true;
            this.animationDone.emit();
          }
          this._stateChanged();
        }));
      }
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this._cleanupTransition?.();
    }
    _getAnimationDuration() {
      if (this._animationsDisabled) {
        return '0ms';
      }
      if (this.animationDuration) {
        return this.animationDuration;
      }
      return this.orientation === 'horizontal' ? '500ms' : '225ms';
    }
    _handleTransitionend = event => {
      const target = event.target;
      if (!target) {
        return;
      }
      // Because we bind a single `transitionend` handler on the host node and because transition
      // events bubble, we have to filter down to only the active step so don't emit events too
      // often. We check the orientation and `property` name first to reduce the amount of times
      // we need to check the DOM.
      const isHorizontalActiveElement = this.orientation === 'horizontal' && event.propertyName === 'transform' && target.classList.contains('mat-horizontal-stepper-content-current');
      const isVerticalActiveElement = this.orientation === 'vertical' && event.propertyName === 'grid-template-rows' && target.classList.contains('mat-vertical-content-container-active');
      // Finally we need to ensure that the animated element is a direct descendant,
      // rather than one coming from a nested stepper.
      const shouldEmit = (isHorizontalActiveElement || isVerticalActiveElement) && this._animatedContainers.find(ref => ref.nativeElement === target);
      if (shouldEmit) {
        this._onAnimationDone();
      }
    };
    _onAnimationDone() {
      this._isAnimating.set(false);
      this.animationDone.emit();
    }
    static ɵfac = function MatStepper_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatStepper)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MatStepper,
      selectors: [["mat-stepper"], ["mat-vertical-stepper"], ["mat-horizontal-stepper"], ["", "matStepper", ""]],
      contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatStep, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatStepperIcon, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._steps = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._icons = _t);
        }
      },
      viewQuery: function MatStepper_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](MatStepHeader, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._animatedContainers = _t);
        }
      },
      hostAttrs: ["role", "tablist"],
      hostVars: 15,
      hostBindings: function MatStepper_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-orientation", ctx.orientation);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("--mat-stepper-animation-duration", ctx._getAnimationDuration());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-stepper-horizontal", ctx.orientation === "horizontal")("mat-stepper-vertical", ctx.orientation === "vertical")("mat-stepper-label-position-end", ctx.orientation === "horizontal" && ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.orientation === "horizontal" && ctx.labelPosition == "bottom")("mat-stepper-header-position-bottom", ctx.headerPosition === "bottom")("mat-stepper-animating", ctx._isAnimating());
        }
      },
      inputs: {
        disableRipple: "disableRipple",
        color: "color",
        labelPosition: "labelPosition",
        headerPosition: "headerPosition",
        animationDuration: "animationDuration"
      },
      outputs: {
        animationDone: "animationDone"
      },
      exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper,
        useExisting: MatStepper
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 5,
      vars: 2,
      consts: [["stepTemplate", ""], ["animatedContainer", ""], [1, "mat-horizontal-stepper-wrapper"], [1, "mat-horizontal-stepper-header-container"], [1, "mat-horizontal-content-container"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id", "class"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"], [1, "mat-step"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "click", "keydown", "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color"]],
      template: function MatStepper_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](0, MatStepper_Conditional_0_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](1, MatStepper_Case_1_Template, 7, 0, "div", 2)(2, MatStepper_Case_2_Template, 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MatStepper_ng_template_3_Template, 1, 23, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx._isServer ? 0 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"]((tmp_2_0 = ctx.orientation) === "horizontal" ? 1 : tmp_2_0 === "vertical" ? 2 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, MatStepHeader],
      styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));background:var(--mat-stepper-container-color, var(--mat-sys-surface))}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height, 72px)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{visibility:hidden;overflow:hidden;outline:0;height:0}.mat-stepper-animations-enabled .mat-horizontal-stepper-content{transition:transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous{transform:translate3d(-100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next{transform:translate3d(100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{visibility:visible;transform:none;height:auto}.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{overflow:visible}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}@media(forced-colors: active){.mat-horizontal-content-container{outline:solid 1px}}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{display:grid;grid-template-rows:0fr;grid-template-columns:100%;margin-left:36px;border:0;position:relative}.mat-stepper-animations-enabled .mat-vertical-content-container{transition:grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1)}.mat-vertical-content-container.mat-vertical-content-container-active{grid-template-rows:1fr}.mat-step:last-child .mat-vertical-content-container{border:none}@media(forced-colors: active){.mat-vertical-content-container{outline:solid 1px}}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}@supports not (grid-template-rows: 0fr){.mat-vertical-content-container{height:0}.mat-vertical-content-container.mat-vertical-content-container-active{height:auto}}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color, var(--mat-sys-outline));top:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0;visibility:hidden}.mat-stepper-animations-enabled .mat-vertical-stepper-content{transition:visibility var(--mat-stepper-animation-duration, 0) linear}.mat-vertical-content-container-active>.mat-vertical-stepper-content{visibility:visible}.mat-vertical-content{padding:0 24px 24px 24px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatStepper;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Button that moves to the next step in a stepper workflow. */
let MatStepperNext = /*#__PURE__*/(() => {
  class MatStepperNext extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperNext {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatStepperNext_BaseFactory;
      return function MatStepperNext_Factory(__ngFactoryType__) {
        return (ɵMatStepperNext_BaseFactory || (ɵMatStepperNext_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatStepperNext)))(__ngFactoryType__ || MatStepperNext);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatStepperNext,
      selectors: [["button", "matStepperNext", ""]],
      hostAttrs: [1, "mat-stepper-next"],
      hostVars: 1,
      hostBindings: function MatStepperNext_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomProperty"]("type", ctx.type);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatStepperNext;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Button that moves to the previous step in a stepper workflow. */
let MatStepperPrevious = /*#__PURE__*/(() => {
  class MatStepperPrevious extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperPrevious {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatStepperPrevious_BaseFactory;
      return function MatStepperPrevious_Factory(__ngFactoryType__) {
        return (ɵMatStepperPrevious_BaseFactory || (ɵMatStepperPrevious_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatStepperPrevious)))(__ngFactoryType__ || MatStepperPrevious);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatStepperPrevious,
      selectors: [["button", "matStepperPrevious", ""]],
      hostAttrs: [1, "mat-stepper-previous"],
      hostVars: 1,
      hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomProperty"]("type", ctx.type);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatStepperPrevious;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatStepperModule = /*#__PURE__*/(() => {
  class MatStepperModule {
    static ɵfac = function MatStepperModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatStepperModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: MatStepperModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      providers: [MAT_STEPPER_INTL_PROVIDER, _error_options_DCNQlTOA_mjs__WEBPACK_IMPORTED_MODULE_17__.E],
      imports: [_common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_19__.M, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.PortalModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule, _icon_mjs__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _index_BFRo2fUq_mjs__WEBPACK_IMPORTED_MODULE_20__.M, MatStepper, MatStepHeader, _common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_19__.M]
    });
  }
  return MatStepperModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Animations used by the Material steppers.
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
const matStepperAnimations = {
  // Represents:
  // trigger('horizontalStepTransition', [
  //   state('previous', style({transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden'})),
  //   // Transition to `inherit`, rather than `visible`,
  //   // because visibility on a child element the one from the parent,
  //   // making this element focusable inside of a `hidden` element.
  //   state('current', style({transform: 'none', visibility: 'inherit'})),
  //   state('next', style({transform: 'translate3d(100%, 0, 0)', visibility: 'hidden'})),
  //   transition(
  //     '* => *',
  //     group([
  //       animate('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)'),
  //       query('@*', animateChild(), {optional: true}),
  //     ]),
  //     {
  //       params: {animationDuration: '500ms'},
  //     },
  //   ),
  // ])
  /** Animation that transitions the step along the X axis in a horizontal stepper. */
  horizontalStepTransition: {
    type: 7,
    name: 'horizontalStepTransition',
    definitions: [{
      type: 0,
      name: 'previous',
      styles: {
        type: 6,
        styles: {
          transform: 'translate3d(-100%, 0, 0)',
          visibility: 'hidden'
        },
        offset: null
      }
    }, {
      type: 0,
      name: 'current',
      styles: {
        type: 6,
        styles: {
          transform: 'none',
          visibility: 'inherit'
        },
        offset: null
      }
    }, {
      type: 0,
      name: 'next',
      styles: {
        type: 6,
        styles: {
          transform: 'translate3d(100%, 0, 0)',
          visibility: 'hidden'
        },
        offset: null
      }
    }, {
      type: 1,
      expr: '* => *',
      animation: {
        type: 3,
        steps: [{
          type: 4,
          styles: null,
          timings: '{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)'
        }, {
          type: 11,
          selector: '@*',
          animation: {
            type: 9,
            options: null
          },
          options: {
            optional: true
          }
        }],
        options: null
      },
      options: {
        params: {
          animationDuration: '500ms'
        }
      }
    }],
    options: {}
  },
  // Represents:
  // trigger('verticalStepTransition', [
  //   state('previous', style({height: '0px', visibility: 'hidden'})),
  //   state('next', style({height: '0px', visibility: 'hidden'})),
  //   // Transition to `inherit`, rather than `visible`,
  //   // because visibility on a child element the one from the parent,
  //   // making this element focusable inside of a `hidden` element.
  //   state('current', style({height: '*', visibility: 'inherit'})),
  //   transition(
  //     '* <=> current',
  //     group([
  //       animate('{{animationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)'),
  //       query('@*', animateChild(), {optional: true}),
  //     ]),
  //     {
  //       params: {animationDuration: '225ms'},
  //     },
  //   ),
  // ])
  /** Animation that transitions the step along the Y axis in a vertical stepper. */
  verticalStepTransition: {
    type: 7,
    name: 'verticalStepTransition',
    definitions: [{
      type: 0,
      name: 'previous',
      styles: {
        type: 6,
        styles: {
          'height': '0px',
          visibility: 'hidden'
        },
        offset: null
      }
    }, {
      type: 0,
      name: 'next',
      styles: {
        type: 6,
        styles: {
          'height': '0px',
          visibility: 'hidden'
        },
        offset: null
      }
    }, {
      type: 0,
      name: 'current',
      styles: {
        type: 6,
        styles: {
          'height': '*',
          visibility: 'inherit'
        },
        offset: null
      }
    }, {
      type: 1,
      expr: '* <=> current',
      animation: {
        type: 3,
        steps: [{
          type: 4,
          styles: null,
          timings: '{{animationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)'
        }, {
          type: 11,
          selector: '@*',
          animation: {
            type: 9,
            options: null
          },
          options: {
            optional: true
          }
        }],
        options: null
      },
      options: {
        params: {
          animationDuration: '225ms'
        }
      }
    }],
    options: {}
  }
};


/***/ }),

/***/ 73388:
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/animation-DfMFjxHu.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AnimationCurves),
/* harmony export */   M: () => (/* binding */ MATERIAL_ANIMATIONS),
/* harmony export */   _: () => (/* binding */ _animationsDisabled),
/* harmony export */   a: () => (/* binding */ AnimationDurations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ 285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27940);



/** Injection token used to configure the animations in Angular Material. */
const MATERIAL_ANIMATIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MATERIAL_ANIMATIONS');
/**
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 * @docs-private
 */
let AnimationCurves = /*#__PURE__*/(() => {
  class AnimationCurves {
    static STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
    static DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
    static ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
    static SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
  }
  return AnimationCurves;
})();
/**
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 * @docs-private
 */
let AnimationDurations = /*#__PURE__*/(() => {
  class AnimationDurations {
    static COMPLEX = '375ms';
    static ENTERING = '225ms';
    static EXITING = '195ms';
  }
  return AnimationDurations;
})();
/**
 * Returns whether animations have been disabled by DI. Must be called in a DI context.
 * @docs-private
 */
function _animationsDisabled() {
  if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MATERIAL_ANIMATIONS, {
    optional: true
  })?.animationsDisabled || (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, {
    optional: true
  }) === 'NoopAnimations') {
    return true;
  }
  const mediaMatcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.MediaMatcher);
  return mediaMatcher.matchMedia('(prefers-reduced-motion)').matches;
}


/***/ }),

/***/ 79735:
/*!********************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/structural-styles-CObeNzjn.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _StructuralStylesLoader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);



/**
 * Component used to load structural styles for focus indicators.
 * @docs-private
 */
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
      styles: [".mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:\"\"}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return _StructuralStylesLoader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 89061:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/index-BFRo2fUq.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MatRippleModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-module-cKSwHniA.mjs */ 8126);




let MatRippleModule = /*#__PURE__*/(() => {
  class MatRippleModule {
    static ɵfac = function MatRippleModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatRippleModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatRippleModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_1__.M, _common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_1__.M]
    });
  }
  return MatRippleModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 93840:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/icon.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ICON_REGISTRY_PROVIDER: () => (/* reexport safe */ _icon_registry_CwOTJ7YM_mjs__WEBPACK_IMPORTED_MODULE_3__.d),
/* harmony export */   ICON_REGISTRY_PROVIDER_FACTORY: () => (/* reexport safe */ _icon_registry_CwOTJ7YM_mjs__WEBPACK_IMPORTED_MODULE_3__.I),
/* harmony export */   MAT_ICON_DEFAULT_OPTIONS: () => (/* binding */ MAT_ICON_DEFAULT_OPTIONS),
/* harmony export */   MAT_ICON_LOCATION: () => (/* binding */ MAT_ICON_LOCATION),
/* harmony export */   MAT_ICON_LOCATION_FACTORY: () => (/* binding */ MAT_ICON_LOCATION_FACTORY),
/* harmony export */   MatIcon: () => (/* binding */ MatIcon),
/* harmony export */   MatIconModule: () => (/* binding */ MatIconModule),
/* harmony export */   MatIconRegistry: () => (/* reexport safe */ _icon_registry_CwOTJ7YM_mjs__WEBPACK_IMPORTED_MODULE_3__.M),
/* harmony export */   getMatIconFailedToSanitizeLiteralError: () => (/* reexport safe */ _icon_registry_CwOTJ7YM_mjs__WEBPACK_IMPORTED_MODULE_3__.c),
/* harmony export */   getMatIconFailedToSanitizeUrlError: () => (/* reexport safe */ _icon_registry_CwOTJ7YM_mjs__WEBPACK_IMPORTED_MODULE_3__.b),
/* harmony export */   getMatIconNameNotFoundError: () => (/* reexport safe */ _icon_registry_CwOTJ7YM_mjs__WEBPACK_IMPORTED_MODULE_3__.g),
/* harmony export */   getMatIconNoHttpProviderError: () => (/* reexport safe */ _icon_registry_CwOTJ7YM_mjs__WEBPACK_IMPORTED_MODULE_3__.a)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _icon_registry_CwOTJ7YM_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon-registry-CwOTJ7YM.mjs */ 50069);
/* harmony import */ var _common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common-module-cKSwHniA.mjs */ 8126);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 52580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 53105);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ 56593);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ 48073);





const _c0 = ["*"];







/** Injection token to be used to override the default options for `mat-icon`. */
const MAT_ICON_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_ICON_DEFAULT_OPTIONS');
/**
 * Injection token used to provide the current location to `MatIcon`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */
const MAT_ICON_LOCATION = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-icon-location', {
  providedIn: 'root',
  factory: MAT_ICON_LOCATION_FACTORY
});
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
function MAT_ICON_LOCATION_FACTORY() {
  const _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
  const _location = _document ? _document.location : null;
  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ''
  };
}
/** SVG attributes that accept a FuncIRI (e.g. `url(<something>)`). */
const funcIriAttributes = ['clip-path', 'color-profile', 'src', 'cursor', 'fill', 'filter', 'marker', 'marker-start', 'marker-mid', 'marker-end', 'mask', 'stroke'];
/** Selector that can be used to find all elements that are using a `FuncIRI`. */
const funcIriAttributeSelector = /*#__PURE__*/ /*#__PURE__*/funcIriAttributes.map(attr => `[${attr}]`).join(', ');
/** Regex that can be used to extract the id out of a FuncIRI. */
const funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
/**
 * Component to display an icon. It can be used in the following ways:
 *
 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
 *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
 *   Examples:
 *     `<mat-icon svgIcon="left-arrow"></mat-icon>
 *     <mat-icon svgIcon="animals:cat"></mat-icon>`
 *
 * - Use a font ligature as an icon by putting the ligature text in the `fontIcon` attribute or the
 *   content of the `<mat-icon>` component. If you register a custom font class, don't forget to also
 *   include the special class `mat-ligature-font`. It is recommended to use the attribute alternative
 *   to prevent the ligature text to be selectable and to appear in search engine results.
 *   By default, the Material icons font is used as described at
 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
 *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
 *   Examples:
 *     `<mat-icon fontIcon="home"></mat-icon>
 *     <mat-icon>home</mat-icon>
 *     <mat-icon fontSet="myfont" fontIcon="sun"></mat-icon>
 *     <mat-icon fontSet="myfont">sun</mat-icon>`
 *
 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
 *   CSS class which causes the glyph to be displayed via a :before selector, as in
 *   https://fontawesome-v4.github.io/examples/
 *   Example:
 *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
 */
let MatIcon = /*#__PURE__*/(() => {
  class MatIcon {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _iconRegistry = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_icon_registry_CwOTJ7YM_mjs__WEBPACK_IMPORTED_MODULE_3__.M);
    _location = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_ICON_LOCATION);
    _errorHandler = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler);
    _defaultColor;
    /**
     * Theme color of the icon. This API is supported in M2 themes only, it
     * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/icon/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    get color() {
      return this._color || this._defaultColor;
    }
    set color(value) {
      this._color = value;
    }
    _color;
    /**
     * Whether the icon should be inlined, automatically sizing the icon to match the font size of
     * the element the icon is contained in.
     */
    inline = false;
    /** Name of the icon in the SVG icon set. */
    get svgIcon() {
      return this._svgIcon;
    }
    set svgIcon(value) {
      if (value !== this._svgIcon) {
        if (value) {
          this._updateSvgIcon(value);
        } else if (this._svgIcon) {
          this._clearSvgElement();
        }
        this._svgIcon = value;
      }
    }
    _svgIcon;
    /** Font set that the icon is a part of. */
    get fontSet() {
      return this._fontSet;
    }
    set fontSet(value) {
      const newValue = this._cleanupFontValue(value);
      if (newValue !== this._fontSet) {
        this._fontSet = newValue;
        this._updateFontIconClasses();
      }
    }
    _fontSet;
    /** Name of an icon within a font set. */
    get fontIcon() {
      return this._fontIcon;
    }
    set fontIcon(value) {
      const newValue = this._cleanupFontValue(value);
      if (newValue !== this._fontIcon) {
        this._fontIcon = newValue;
        this._updateFontIconClasses();
      }
    }
    _fontIcon;
    _previousFontSetClass = [];
    _previousFontIconClass;
    _svgName;
    _svgNamespace;
    /** Keeps track of the current page path. */
    _previousPath;
    /** Keeps track of the elements and attributes that we've prefixed with the current path. */
    _elementsWithExternalReferences;
    /** Subscription to the current in-progress SVG icon request. */
    _currentIconFetch = rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
    constructor() {
      const ariaHidden = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(new _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostAttributeToken('aria-hidden'), {
        optional: true
      });
      const defaults = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_ICON_DEFAULT_OPTIONS, {
        optional: true
      });
      if (defaults) {
        if (defaults.color) {
          this.color = this._defaultColor = defaults.color;
        }
        if (defaults.fontSet) {
          this.fontSet = defaults.fontSet;
        }
      }
      // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
      // the right thing to do for the majority of icon use-cases.
      if (!ariaHidden) {
        this._elementRef.nativeElement.setAttribute('aria-hidden', 'true');
      }
    }
    /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws an error if the name contains two or more ':' separators.
     * Examples:
     *   `'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws Error)`
     */
    _splitIconName(iconName) {
      if (!iconName) {
        return ['', ''];
      }
      const parts = iconName.split(':');
      switch (parts.length) {
        case 1:
          return ['', parts[0]];
        // Use default namespace.
        case 2:
          return parts;
        default:
          throw Error(`Invalid icon name: "${iconName}"`);
        // TODO: add an ngDevMode check
      }
    }
    ngOnInit() {
      // Update font classes because ngOnChanges won't be called if none of the inputs are present,
      // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
      this._updateFontIconClasses();
    }
    ngAfterViewChecked() {
      const cachedElements = this._elementsWithExternalReferences;
      if (cachedElements && cachedElements.size) {
        const newPath = this._location.getPathname();
        // We need to check whether the URL has changed on each change detection since
        // the browser doesn't have an API that will let us react on link clicks and
        // we can't depend on the Angular router. The references need to be updated,
        // because while most browsers don't care whether the URL is correct after
        // the first render, Safari will break if the user navigates to a different
        // page and the SVG isn't re-rendered.
        if (newPath !== this._previousPath) {
          this._previousPath = newPath;
          this._prependPathToReferences(newPath);
        }
      }
    }
    ngOnDestroy() {
      this._currentIconFetch.unsubscribe();
      if (this._elementsWithExternalReferences) {
        this._elementsWithExternalReferences.clear();
      }
    }
    _usingFontIcon() {
      return !this.svgIcon;
    }
    _setSvgElement(svg) {
      this._clearSvgElement();
      // Note: we do this fix here, rather than the icon registry, because the
      // references have to point to the URL at the time that the icon was created.
      const path = this._location.getPathname();
      this._previousPath = path;
      this._cacheChildrenWithExternalReferences(svg);
      this._prependPathToReferences(path);
      this._elementRef.nativeElement.appendChild(svg);
    }
    _clearSvgElement() {
      const layoutElement = this._elementRef.nativeElement;
      let childCount = layoutElement.childNodes.length;
      if (this._elementsWithExternalReferences) {
        this._elementsWithExternalReferences.clear();
      }
      // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
      // we can't use innerHTML, because IE will throw if the element has a data binding.
      while (childCount--) {
        const child = layoutElement.childNodes[childCount];
        // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
        // of any loose text nodes, as well as any SVG elements in order to remove any old icons.
        if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
          child.remove();
        }
      }
    }
    _updateFontIconClasses() {
      if (!this._usingFontIcon()) {
        return;
      }
      const elem = this._elementRef.nativeElement;
      const fontSetClasses = (this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/) : this._iconRegistry.getDefaultFontSetClass()).filter(className => className.length > 0);
      this._previousFontSetClass.forEach(className => elem.classList.remove(className));
      fontSetClasses.forEach(className => elem.classList.add(className));
      this._previousFontSetClass = fontSetClasses;
      if (this.fontIcon !== this._previousFontIconClass && !fontSetClasses.includes('mat-ligature-font')) {
        if (this._previousFontIconClass) {
          elem.classList.remove(this._previousFontIconClass);
        }
        if (this.fontIcon) {
          elem.classList.add(this.fontIcon);
        }
        this._previousFontIconClass = this.fontIcon;
      }
    }
    /**
     * Cleans up a value to be used as a fontIcon or fontSet.
     * Since the value ends up being assigned as a CSS class, we
     * have to trim the value and omit space-separated values.
     */
    _cleanupFontValue(value) {
      return typeof value === 'string' ? value.trim().split(' ')[0] : value;
    }
    /**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     */
    _prependPathToReferences(path) {
      const elements = this._elementsWithExternalReferences;
      if (elements) {
        elements.forEach((attrs, element) => {
          attrs.forEach(attr => {
            element.setAttribute(attr.name, `url('${path}#${attr.value}')`);
          });
        });
      }
    }
    /**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     */
    _cacheChildrenWithExternalReferences(element) {
      const elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
      const elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map();
      for (let i = 0; i < elementsWithFuncIri.length; i++) {
        funcIriAttributes.forEach(attr => {
          const elementWithReference = elementsWithFuncIri[i];
          const value = elementWithReference.getAttribute(attr);
          const match = value ? value.match(funcIriPattern) : null;
          if (match) {
            let attributes = elements.get(elementWithReference);
            if (!attributes) {
              attributes = [];
              elements.set(elementWithReference, attributes);
            }
            attributes.push({
              name: attr,
              value: match[1]
            });
          }
        });
      }
    }
    /** Sets a new SVG icon with a particular name. */
    _updateSvgIcon(rawName) {
      this._svgNamespace = null;
      this._svgName = null;
      this._currentIconFetch.unsubscribe();
      if (rawName) {
        const [namespace, iconName] = this._splitIconName(rawName);
        if (namespace) {
          this._svgNamespace = namespace;
        }
        if (iconName) {
          this._svgName = iconName;
        }
        this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(svg => this._setSvgElement(svg), err => {
          const errorMessage = `Error retrieving icon ${namespace}:${iconName}! ${err.message}`;
          this._errorHandler.handleError(new Error(errorMessage));
        });
      }
    }
    static ɵfac = function MatIcon_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatIcon)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatIcon,
      selectors: [["mat-icon"]],
      hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
      hostVars: 10,
      hostBindings: function MatIcon_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-mat-icon-type", ctx._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", ctx._svgName || ctx.fontIcon)("data-mat-icon-namespace", ctx._svgNamespace || ctx.fontSet)("fontIcon", ctx._usingFontIcon() ? ctx.fontIcon : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.color ? "mat-" + ctx.color : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
        }
      },
      inputs: {
        color: "color",
        inline: [2, "inline", "inline", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        svgIcon: "svgIcon",
        fontSet: "fontSet",
        fontIcon: "fontIcon"
      },
      exportAs: ["matIcon"],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      styles: ["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatIcon;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatIconModule = /*#__PURE__*/(() => {
  class MatIconModule {
    static ɵfac = function MatIconModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatIconModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatIconModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_8__.M, _common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_8__.M]
    });
  }
  return MatIconModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ })

}])
//# sourceMappingURL=6622.js.map