(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[3804],{

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

/***/ 20586:
/*!**********************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/internal-form-field-D5iFxU6d.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _MatInternalFormField)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);



/**
 * Internal shared component used as a container in form field controls.
 * Not to be confused with `mat-form-field` which MDC calls a "text field".
 * @docs-private
 */
const _c0 = ["mat-internal-form-field", ""];
const _c1 = ["*"];
let _MatInternalFormField = /*#__PURE__*/(() => {
  class _MatInternalFormField {
    /** Position of the label relative to the content. */
    labelPosition;
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

/***/ 53804:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/radio.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_RADIO_DEFAULT_OPTIONS: () => (/* binding */ MAT_RADIO_DEFAULT_OPTIONS),
/* harmony export */   MAT_RADIO_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ MAT_RADIO_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   MAT_RADIO_GROUP: () => (/* binding */ MAT_RADIO_GROUP),
/* harmony export */   MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR: () => (/* binding */ MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR),
/* harmony export */   MatRadioButton: () => (/* binding */ MatRadioButton),
/* harmony export */   MatRadioChange: () => (/* binding */ MatRadioChange),
/* harmony export */   MatRadioGroup: () => (/* binding */ MatRadioGroup),
/* harmony export */   MatRadioModule: () => (/* binding */ MatRadioModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ 56593);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ 22679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 7140);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/private */ 98959);
/* harmony import */ var _animation_DfMFjxHu_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./animation-DfMFjxHu.mjs */ 73388);
/* harmony import */ var _structural_styles_CObeNzjn_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./structural-styles-CObeNzjn.mjs */ 79735);
/* harmony import */ var _ripple_BYgV4oZC_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ripple-BYgV4oZC.mjs */ 29968);
/* harmony import */ var _internal_form_field_D5iFxU6d_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./internal-form-field-D5iFxU6d.mjs */ 20586);
/* harmony import */ var _common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common-module-cKSwHniA.mjs */ 8126);
/* harmony import */ var _index_BFRo2fUq_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index-BFRo2fUq.mjs */ 89061);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 285);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ 49583);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ 33981);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 48073);

















/** Change event object emitted by radio button and radio group. */
const _c0 = ["input"];
const _c1 = ["formField"];
const _c2 = ["*"];
class MatRadioChange {
  source;
  value;
  constructor(/** The radio button that emits the change event. */
  source, /** The value of the radio button. */
  value) {
    this.source = source;
    this.value = value;
  }
}
/**
 * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * @docs-private
 */
const MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => MatRadioGroup),
  multi: true
};
/**
 * Injection token that can be used to inject instances of `MatRadioGroup`. It serves as
 * alternative token to the actual `MatRadioGroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_RADIO_GROUP = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('MatRadioGroup');
const MAT_RADIO_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('mat-radio-default-options', {
  providedIn: 'root',
  factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: 'accent',
    disabledInteractive: false
  };
}
/**
 * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
 */
let MatRadioGroup = /*#__PURE__*/(() => {
  class MatRadioGroup {
    _changeDetector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
    /** Selected value for the radio group. */
    _value = null;
    /** The HTML name attribute applied to radio buttons in this group. */
    _name = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__._IdGenerator).getId('mat-radio-group-');
    /** The currently selected radio button. Should match value. */
    _selected = null;
    /** Whether the `value` has been set to its initial value. */
    _isInitialized = false;
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
    _labelPosition = 'after';
    /** Whether the radio group is disabled. */
    _disabled = false;
    /** Whether the radio group is required. */
    _required = false;
    /** Subscription to changes in amount of radio buttons. */
    _buttonChanges;
    /** The method to be called in order to update ngModel */
    _controlValueAccessorChangeFn = () => {};
    /**
     * onTouch function registered via registerOnTouch (ControlValueAccessor).
     * @docs-private
     */
    onTouched = () => {};
    /**
     * Event emitted when the group value changes.
     * Change events are only emitted when the value changes due to user interaction with
     * a radio button (the same behavior as `<input type-"radio">`).
     */
    change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /** Child radio buttons. */
    _radios;
    /**
     * Theme color of the radio buttons in the group. This API is supported in M2
     * themes only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/radio/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    color;
    /** Name of the radio button group. All radio buttons inside this group will use this name. */
    get name() {
      return this._name;
    }
    set name(value) {
      this._name = value;
      this._updateRadioButtonNames();
    }
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
    get labelPosition() {
      return this._labelPosition;
    }
    set labelPosition(v) {
      this._labelPosition = v === 'before' ? 'before' : 'after';
      this._markRadiosForCheck();
    }
    /**
     * Value for the radio-group. Should equal the value of the selected radio button if there is
     * a corresponding radio button with a matching value. If there is not such a corresponding
     * radio button, this value persists to be applied in case a new radio button is added with a
     * matching value.
     */
    get value() {
      return this._value;
    }
    set value(newValue) {
      if (this._value !== newValue) {
        // Set this before proceeding to ensure no circular loop occurs with selection.
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
    /**
     * The currently selected radio button. If set to a new radio button, the radio group value
     * will be updated to match the new selected button.
     */
    get selected() {
      return this._selected;
    }
    set selected(selected) {
      this._selected = selected;
      this.value = selected ? selected.value : null;
      this._checkSelectedRadioButton();
    }
    /** Whether the radio group is disabled */
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
      this._markRadiosForCheck();
    }
    /** Whether the radio group is required */
    get required() {
      return this._required;
    }
    set required(value) {
      this._required = value;
      this._markRadiosForCheck();
    }
    /** Whether buttons in the group should be interactive while they're disabled. */
    get disabledInteractive() {
      return this._disabledInteractive;
    }
    set disabledInteractive(value) {
      this._disabledInteractive = value;
      this._markRadiosForCheck();
    }
    _disabledInteractive = false;
    constructor() {}
    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     */
    ngAfterContentInit() {
      // Mark this component as initialized in AfterContentInit because the initial value can
      // possibly be set by NgModel on MatRadioGroup, and it is possible that the OnInit of the
      // NgModel occurs *after* the OnInit of the MatRadioGroup.
      this._isInitialized = true;
      // Clear the `selected` button when it's destroyed since the tabindex of the rest of the
      // buttons depends on it. Note that we don't clear the `value`, because the radio button
      // may be swapped out with a similar one and there are some internal apps that depend on
      // that behavior.
      this._buttonChanges = this._radios.changes.subscribe(() => {
        if (this.selected && !this._radios.find(radio => radio === this.selected)) {
          this._selected = null;
        }
      });
    }
    ngOnDestroy() {
      this._buttonChanges?.unsubscribe();
    }
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
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
    /** Updates the `selected` radio button from the internal _value state. */
    _updateSelectedRadioFromValue() {
      // If the value already matches the selected radio, do nothing.
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
    /** Dispatch change event with current selection and group value. */
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
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    writeValue(value) {
      this.value = value;
      this._changeDetector.markForCheck();
    }
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnChange(fn) {
      this._controlValueAccessorChangeFn = fn;
    }
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the control should be disabled.
     */
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
    /** The unique ID for the radio button. */
    id = this._uniqueId;
    /** Analog to HTML 'name' attribute used to group radios for unique selection. */
    name;
    /** Used to set the 'aria-label' attribute on the underlying input element. */
    ariaLabel;
    /** The 'aria-labelledby' attribute takes precedence as the element's text alternative. */
    ariaLabelledby;
    /** The 'aria-describedby' attribute is read after the element's label and field type. */
    ariaDescribedby;
    /** Whether ripples are disabled inside the radio button */
    disableRipple = false;
    /** Tabindex of the radio button. */
    tabIndex = 0;
    /** Whether this radio button is checked. */
    get checked() {
      return this._checked;
    }
    set checked(value) {
      if (this._checked !== value) {
        this._checked = value;
        if (value && this.radioGroup && this.radioGroup.value !== this.value) {
          this.radioGroup.selected = this;
        } else if (!value && this.radioGroup && this.radioGroup.value === this.value) {
          // When unchecking the selected radio button, update the selected radio
          // property on the group.
          this.radioGroup.selected = null;
        }
        if (value) {
          // Notify all radio buttons with the same name to un-check.
          this._radioDispatcher.notify(this.id, this.name);
        }
        this._changeDetector.markForCheck();
      }
    }
    /** The value of this radio button. */
    get value() {
      return this._value;
    }
    set value(value) {
      if (this._value !== value) {
        this._value = value;
        if (this.radioGroup !== null) {
          if (!this.checked) {
            // Update checked when the value changed to match the radio group's value
            this.checked = this.radioGroup.value === value;
          }
          if (this.checked) {
            this.radioGroup.selected = this;
          }
        }
      }
    }
    /** Whether the label should appear after or before the radio button. Defaults to 'after' */
    get labelPosition() {
      return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || 'after';
    }
    set labelPosition(value) {
      this._labelPosition = value;
    }
    _labelPosition;
    /** Whether the radio button is disabled. */
    get disabled() {
      return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
    }
    set disabled(value) {
      this._setDisabled(value);
    }
    /** Whether the radio button is required. */
    get required() {
      return this._required || this.radioGroup && this.radioGroup.required;
    }
    set required(value) {
      if (value !== this._required) {
        this._changeDetector.markForCheck();
      }
      this._required = value;
    }
    /**
     * Theme color of the radio button. This API is supported in M2 themes only, it
     * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/radio/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    get color() {
      // As per M2 design specifications the selection control radio should use the accent color
      // palette by default. https://m2.material.io/components/radio-buttons#specs
      return this._color || this.radioGroup && this.radioGroup.color || this._defaultOptions && this._defaultOptions.color || 'accent';
    }
    set color(newValue) {
      this._color = newValue;
    }
    _color;
    /** Whether the radio button should remain interactive when it is disabled. */
    get disabledInteractive() {
      return this._disabledInteractive || this.radioGroup !== null && this.radioGroup.disabledInteractive;
    }
    set disabledInteractive(value) {
      this._disabledInteractive = value;
    }
    _disabledInteractive;
    /**
     * Event emitted when the checked state of this radio button changes.
     * Change events are only emitted when the value changes due to user interaction with
     * the radio button (the same behavior as `<input type-"radio">`).
     */
    change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /** The parent radio group. May or may not be present. */
    radioGroup;
    /** ID of the native input element inside `<mat-radio-button>` */
    get inputId() {
      return `${this.id || this._uniqueId}-input`;
    }
    /** Whether this radio is checked. */
    _checked = false;
    /** Whether this radio is disabled. */
    _disabled;
    /** Whether this radio is required. */
    _required;
    /** Value assigned to this radio. */
    _value = null;
    /** Unregister function for _radioDispatcher */
    _removeUniqueSelectionListener = () => {};
    /** Previous value of the input's tabindex. */
    _previousTabIndex;
    /** The native `<input type=radio>` element */
    _inputElement;
    /** Trigger elements for the ripple events. */
    _rippleTrigger;
    /** Whether animations are disabled. */
    _noopAnimations = (0,_animation_DfMFjxHu_mjs__WEBPACK_IMPORTED_MODULE_9__._)();
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector);
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_4__._CdkPrivateStyleLoader).load(_structural_styles_CObeNzjn_mjs__WEBPACK_IMPORTED_MODULE_10__._);
      const radioGroup = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(MAT_RADIO_GROUP, {
        optional: true
      });
      const tabIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(new _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostAttributeToken('tabindex'), {
        optional: true
      });
      // Assertions. Ideally these should be stripped out by the compiler.
      // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
      this.radioGroup = radioGroup;
      this._disabledInteractive = this._defaultOptions?.disabledInteractive ?? false;
      if (tabIndex) {
        this.tabIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.numberAttribute)(tabIndex, 0);
      }
    }
    /** Focuses the radio button. */
    focus(options, origin) {
      if (origin) {
        this._focusMonitor.focusVia(this._inputElement, origin, options);
      } else {
        this._inputElement.nativeElement.focus(options);
      }
    }
    /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     */
    _markForCheck() {
      // When group value changes, the button will not be notified. Use `markForCheck` to explicit
      // update radio button's status
      this._changeDetector.markForCheck();
    }
    ngOnInit() {
      if (this.radioGroup) {
        // If the radio is inside a radio group, determine if it should be checked
        this.checked = this.radioGroup.value === this._value;
        if (this.checked) {
          this.radioGroup.selected = this;
        }
        // Copy name from parent radio group
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
      // We bind this outside of the zone, because:
      // 1. Its logic is completely DOM-related so we can avoid some change detections.
      // 2. There appear to be some internal tests that break when this triggers a change detection.
      this._ngZone.runOutsideAngular(() => {
        this._cleanupClick = this._renderer.listen(this._inputElement.nativeElement, 'click', this._onInputClick);
      });
    }
    ngOnDestroy() {
      this._cleanupClick?.();
      this._focusMonitor.stopMonitoring(this._elementRef);
      this._removeUniqueSelectionListener();
    }
    /** Dispatch change event with current value. */
    _emitChangeEvent() {
      this.change.emit(new MatRadioChange(this, this._value));
    }
    _isRippleDisabled() {
      return this.disableRipple || this.disabled;
    }
    /** Triggered when the radio button receives an interaction from the user. */
    _onInputInteraction(event) {
      // We always have to stop propagation on the change event.
      // Otherwise the change event, from the input element, will bubble up and
      // emit its event object to the `change` output.
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
    /** Triggered when the user clicks on the touch target. */
    _onTouchTargetClick(event) {
      this._onInputInteraction(event);
      if (!this.disabled || this.disabledInteractive) {
        // Normally the input should be focused already, but if the click
        // comes from the touch target, then we might have to focus it ourselves.
        this._inputElement?.nativeElement.focus();
      }
    }
    /** Sets the disabled state and marks for check if a change occurred. */
    _setDisabled(value) {
      if (this._disabled !== value) {
        this._disabled = value;
        this._changeDetector.markForCheck();
      }
    }
    /** Called when the input is clicked. */
    _onInputClick = event => {
      // If the input is disabled while interactive, we need to prevent the
      // selection from happening in this event handler. Note that even though
      // this happens on `click` events, the logic applies when the user is
      // navigating with the keyboard as well. An alternative way of doing
      // this is by resetting the `checked` state in the `change` callback but
      // it isn't optimal, because it can allow a pre-checked disabled button
      // to be un-checked. This approach seems to cover everything.
      if (this.disabled && this.disabledInteractive) {
        event.preventDefault();
      }
    };
    /** Gets the tabindex for the underlying input element. */
    _updateTabIndex() {
      const group = this.radioGroup;
      let value;
      // Implement a roving tabindex if the button is inside a group. For most cases this isn't
      // necessary, because the browser handles the tab order for inputs inside a group automatically,
      // but we need an explicitly higher tabindex for the selected button in order for things like
      // the focus trap to pick it up correctly.
      if (!group || !group.selected || this.disabled) {
        value = this.tabIndex;
      } else {
        value = group.selected === this ? this.tabIndex : -1;
      }
      if (value !== this._previousTabIndex) {
        // We have to set the tabindex directly on the DOM node, because it depends on
        // the selected state which is prone to "changed after checked errors".
        const input = this._inputElement?.nativeElement;
        if (input) {
          input.setAttribute('tabindex', value + '');
          this._previousTabIndex = value;
          // Wait for any pending tabindex changes to be applied
          (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.afterNextRender)(() => {
            queueMicrotask(() => {
              // The radio group uses a "selection follows focus" pattern for tab management, so if this
              // radio button is currently focused and another radio button in the group becomes
              // selected, we should move focus to the newly selected radio button to maintain
              // consistency between the focused and selected states.
              if (group && group.selected && group.selected !== this && document.activeElement === input) {
                group.selected?._inputElement.nativeElement.focus();
                // If this radio button still has focus, the selected one must be disabled. In this
                // case the radio group as a whole should lose focus.
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
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
      dependencies: [_ripple_BYgV4oZC_mjs__WEBPACK_IMPORTED_MODULE_11__.M, _internal_form_field_D5iFxU6d_mjs__WEBPACK_IMPORTED_MODULE_12__._],
      styles: [".mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled])~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px);top:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-sys-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple>.mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio>.mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before{content:\"\"}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display, block)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}\n"],
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
      imports: [_common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_13__.M, _index_BFRo2fUq_mjs__WEBPACK_IMPORTED_MODULE_14__.M, MatRadioButton, _common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_13__.M]
    });
  }
  return MatRadioModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


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


/***/ })

}])
//# sourceMappingURL=3804.js.map