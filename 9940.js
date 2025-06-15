(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[9940],{

/***/ 69940:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/text-field.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillMonitor: () => (/* binding */ AutofillMonitor),
/* harmony export */   CdkAutofill: () => (/* binding */ CdkAutofill),
/* harmony export */   CdkTextareaAutosize: () => (/* binding */ CdkTextareaAutosize),
/* harmony export */   TextFieldModule: () => (/* binding */ TextFieldModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ 1830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9516);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/private */ 77824);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 31620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 59694);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 32778);









/** Component used to load the structural styles of the text field. */
let _CdkTextFieldStyleLoader = /*#__PURE__*/(() => {
  class _CdkTextFieldStyleLoader {
    static ɵfac = function _CdkTextFieldStyleLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkTextFieldStyleLoader)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: _CdkTextFieldStyleLoader,
      selectors: [["ng-component"]],
      hostAttrs: ["cdk-text-field-style-loader", ""],
      decls: 0,
      vars: 0,
      template: function _CdkTextFieldStyleLoader_Template(rf, ctx) {},
      styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return _CdkTextFieldStyleLoader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Options to pass to the animationstart listener. */
const listenerOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: true
});
/**
 * An injectable service that can be used to monitor the autofill state of an input.
 * Based on the following blog post:
 * https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
 */
let AutofillMonitor = /*#__PURE__*/(() => {
  class AutofillMonitor {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
    _styleLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_2__._CdkPrivateStyleLoader);
    _monitoredElements = new Map();
    constructor() {}
    monitor(elementOrRef) {
      if (!this._platform.isBrowser) {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
      }
      this._styleLoader.load(_CdkTextFieldStyleLoader);
      const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(elementOrRef);
      const info = this._monitoredElements.get(element);
      if (info) {
        return info.subject;
      }
      const result = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      const cssClass = 'cdk-text-field-autofilled';
      const listener = event => {
        // Animation events fire on initial element render, we check for the presence of the autofill
        // CSS class to make sure this is a real change in state, not just the initial render before
        // we fire off events.
        if (event.animationName === 'cdk-text-field-autofill-start' && !element.classList.contains(cssClass)) {
          element.classList.add(cssClass);
          this._ngZone.run(() => result.next({
            target: event.target,
            isAutofilled: true
          }));
        } else if (event.animationName === 'cdk-text-field-autofill-end' && element.classList.contains(cssClass)) {
          element.classList.remove(cssClass);
          this._ngZone.run(() => result.next({
            target: event.target,
            isAutofilled: false
          }));
        }
      };
      this._ngZone.runOutsideAngular(() => {
        element.addEventListener('animationstart', listener, listenerOptions);
        element.classList.add('cdk-text-field-autofill-monitored');
      });
      this._monitoredElements.set(element, {
        subject: result,
        unlisten: () => {
          element.removeEventListener('animationstart', listener, listenerOptions);
        }
      });
      return result;
    }
    stopMonitoring(elementOrRef) {
      const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(elementOrRef);
      const info = this._monitoredElements.get(element);
      if (info) {
        info.unlisten();
        info.subject.complete();
        element.classList.remove('cdk-text-field-autofill-monitored');
        element.classList.remove('cdk-text-field-autofilled');
        this._monitoredElements.delete(element);
      }
    }
    ngOnDestroy() {
      this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
    }
    static ɵfac = function AutofillMonitor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AutofillMonitor)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AutofillMonitor,
      factory: AutofillMonitor.ɵfac,
      providedIn: 'root'
    });
  }
  return AutofillMonitor;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** A directive that can be used to monitor the autofill state of an input. */
let CdkAutofill = /*#__PURE__*/(() => {
  class CdkAutofill {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    _autofillMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(AutofillMonitor);
    /** Emits when the autofill state of the element changes. */
    cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    constructor() {}
    ngOnInit() {
      this._autofillMonitor.monitor(this._elementRef).subscribe(event => this.cdkAutofill.emit(event));
    }
    ngOnDestroy() {
      this._autofillMonitor.stopMonitoring(this._elementRef);
    }
    static ɵfac = function CdkAutofill_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkAutofill)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkAutofill,
      selectors: [["", "cdkAutofill", ""]],
      outputs: {
        cdkAutofill: "cdkAutofill"
      }
    });
  }
  return CdkAutofill;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Directive to automatically resize a textarea to fit its content. */
let CdkTextareaAutosize = /*#__PURE__*/(() => {
  class CdkTextareaAutosize {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2);
    _resizeEvents = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /** Keep track of the previous textarea value to avoid resizing when the value hasn't changed. */
    _previousValue;
    _initialHeight;
    _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    _listenerCleanups;
    _minRows;
    _maxRows;
    _enabled = true;
    /**
     * Value of minRows as of last resize. If the minRows has decreased, the
     * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
     * does not have the same problem because it does not affect the textarea's scrollHeight.
     */
    _previousMinRows = -1;
    _textareaElement;
    /** Minimum amount of rows in the textarea. */
    get minRows() {
      return this._minRows;
    }
    set minRows(value) {
      this._minRows = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
      this._setMinHeight();
    }
    /** Maximum amount of rows in the textarea. */
    get maxRows() {
      return this._maxRows;
    }
    set maxRows(value) {
      this._maxRows = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
      this._setMaxHeight();
    }
    /** Whether autosizing is enabled or not */
    get enabled() {
      return this._enabled;
    }
    set enabled(value) {
      // Only act if the actual value changed. This specifically helps to not run
      // resizeToFitContent too early (i.e. before ngAfterViewInit)
      if (this._enabled !== value) {
        (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
      }
    }
    get placeholder() {
      return this._textareaElement.placeholder;
    }
    set placeholder(value) {
      this._cachedPlaceholderHeight = undefined;
      if (value) {
        this._textareaElement.setAttribute('placeholder', value);
      } else {
        this._textareaElement.removeAttribute('placeholder');
      }
      this._cacheTextareaPlaceholderHeight();
    }
    /** Cached height of a textarea with a single row. */
    _cachedLineHeight;
    /** Cached height of a textarea with only the placeholder. */
    _cachedPlaceholderHeight;
    /** Used to reference correct document/window */
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT, {
      optional: true
    });
    _hasFocus;
    _isViewInited = false;
    constructor() {
      const styleLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_2__._CdkPrivateStyleLoader);
      styleLoader.load(_CdkTextFieldStyleLoader);
      this._textareaElement = this._elementRef.nativeElement;
    }
    /** Sets the minimum height of the textarea as determined by minRows. */
    _setMinHeight() {
      const minHeight = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null;
      if (minHeight) {
        this._textareaElement.style.minHeight = minHeight;
      }
    }
    /** Sets the maximum height of the textarea as determined by maxRows. */
    _setMaxHeight() {
      const maxHeight = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null;
      if (maxHeight) {
        this._textareaElement.style.maxHeight = maxHeight;
      }
    }
    ngAfterViewInit() {
      if (this._platform.isBrowser) {
        // Remember the height which we started with in case autosizing is disabled
        this._initialHeight = this._textareaElement.style.height;
        this.resizeToFitContent();
        this._ngZone.runOutsideAngular(() => {
          this._listenerCleanups = [this._renderer.listen('window', 'resize', () => this._resizeEvents.next()), this._renderer.listen(this._textareaElement, 'focus', this._handleFocusEvent), this._renderer.listen(this._textareaElement, 'blur', this._handleFocusEvent)];
          this._resizeEvents.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(16)).subscribe(() => {
            // Clear the cached heights since the styles can change
            // when the window is resized (e.g. by media queries).
            this._cachedLineHeight = this._cachedPlaceholderHeight = undefined;
            this.resizeToFitContent(true);
          });
        });
        this._isViewInited = true;
        this.resizeToFitContent(true);
      }
    }
    ngOnDestroy() {
      this._listenerCleanups?.forEach(cleanup => cleanup());
      this._resizeEvents.complete();
      this._destroyed.next();
      this._destroyed.complete();
    }
    /**
     * Cache the height of a single-row textarea if it has not already been cached.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     */
    _cacheTextareaLineHeight() {
      if (this._cachedLineHeight) {
        return;
      }
      // Use a clone element because we have to override some styles.
      const textareaClone = this._textareaElement.cloneNode(false);
      const cloneStyles = textareaClone.style;
      textareaClone.rows = 1;
      // Use `position: absolute` so that this doesn't cause a browser layout and use
      // `visibility: hidden` so that nothing is rendered. Clear any other styles that
      // would affect the height.
      cloneStyles.position = 'absolute';
      cloneStyles.visibility = 'hidden';
      cloneStyles.border = 'none';
      cloneStyles.padding = '0';
      cloneStyles.height = '';
      cloneStyles.minHeight = '';
      cloneStyles.maxHeight = '';
      // App styles might be messing with the height through the positioning properties.
      cloneStyles.top = cloneStyles.bottom = cloneStyles.left = cloneStyles.right = 'auto';
      // In Firefox it happens that textarea elements are always bigger than the specified amount
      // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
      // As a workaround that removes the extra space for the scrollbar, we can just set overflow
      // to hidden. This ensures that there is no invalid calculation of the line height.
      // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
      cloneStyles.overflow = 'hidden';
      this._textareaElement.parentNode.appendChild(textareaClone);
      this._cachedLineHeight = textareaClone.clientHeight;
      textareaClone.remove();
      // Min and max heights have to be re-calculated if the cached line height changes
      this._setMinHeight();
      this._setMaxHeight();
    }
    _measureScrollHeight() {
      const element = this._textareaElement;
      const previousMargin = element.style.marginBottom || '';
      const isFirefox = this._platform.FIREFOX;
      const needsMarginFiller = isFirefox && this._hasFocus;
      const measuringClass = isFirefox ? 'cdk-textarea-autosize-measuring-firefox' : 'cdk-textarea-autosize-measuring';
      // In some cases the page might move around while we're measuring the `textarea` on Firefox. We
      // work around it by assigning a temporary margin with the same height as the `textarea` so that
      // it occupies the same amount of space. See #23233.
      if (needsMarginFiller) {
        element.style.marginBottom = `${element.clientHeight}px`;
      }
      // Reset the textarea height to auto in order to shrink back to its default size.
      // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
      element.classList.add(measuringClass);
      // The measuring class includes a 2px padding to workaround an issue with Chrome,
      // so we account for that extra space here by subtracting 4 (2px top + 2px bottom).
      const scrollHeight = element.scrollHeight - 4;
      element.classList.remove(measuringClass);
      if (needsMarginFiller) {
        element.style.marginBottom = previousMargin;
      }
      return scrollHeight;
    }
    _cacheTextareaPlaceholderHeight() {
      if (!this._isViewInited || this._cachedPlaceholderHeight != undefined) {
        return;
      }
      if (!this.placeholder) {
        this._cachedPlaceholderHeight = 0;
        return;
      }
      const value = this._textareaElement.value;
      this._textareaElement.value = this._textareaElement.placeholder;
      this._cachedPlaceholderHeight = this._measureScrollHeight();
      this._textareaElement.value = value;
    }
    /** Handles `focus` and `blur` events. */
    _handleFocusEvent = event => {
      this._hasFocus = event.type === 'focus';
    };
    ngDoCheck() {
      if (this._platform.isBrowser) {
        this.resizeToFitContent();
      }
    }
    /**
     * Resize the textarea to fit its content.
     * @param force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     */
    resizeToFitContent(force = false) {
      // If autosizing is disabled, just skip everything else
      if (!this._enabled) {
        return;
      }
      this._cacheTextareaLineHeight();
      this._cacheTextareaPlaceholderHeight();
      // If we haven't determined the line-height yet, we know we're still hidden and there's no point
      // in checking the height of the textarea.
      if (!this._cachedLineHeight) {
        return;
      }
      const textarea = this._elementRef.nativeElement;
      const value = textarea.value;
      // Only resize if the value or minRows have changed since these calculations can be expensive.
      if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
        return;
      }
      const scrollHeight = this._measureScrollHeight();
      const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0);
      // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
      textarea.style.height = `${height}px`;
      this._ngZone.runOutsideAngular(() => {
        if (typeof requestAnimationFrame !== 'undefined') {
          requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
        } else {
          setTimeout(() => this._scrollToCaretPosition(textarea));
        }
      });
      this._previousValue = value;
      this._previousMinRows = this._minRows;
    }
    /**
     * Resets the textarea to its original size
     */
    reset() {
      // Do not try to change the textarea, if the initialHeight has not been determined yet
      // This might potentially remove styles when reset() is called before ngAfterViewInit
      if (this._initialHeight !== undefined) {
        this._textareaElement.style.height = this._initialHeight;
      }
    }
    _noopInputHandler() {
      // no-op handler that ensures we're running change detection on input events.
    }
    /**
     * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
     * prevent it from scrolling to the caret position. We need to re-set the selection
     * in order for it to scroll to the proper position.
     */
    _scrollToCaretPosition(textarea) {
      const {
        selectionStart,
        selectionEnd
      } = textarea;
      // IE will throw an "Unspecified error" if we try to set the selection range after the
      // element has been removed from the DOM. Assert that the directive hasn't been destroyed
      // between the time we requested the animation frame and when it was executed.
      // Also note that we have to assert that the textarea is focused before we set the
      // selection range. Setting the selection range on a non-focused textarea will cause
      // it to receive focus on IE and Edge.
      if (!this._destroyed.isStopped && this._hasFocus) {
        textarea.setSelectionRange(selectionStart, selectionEnd);
      }
    }
    static ɵfac = function CdkTextareaAutosize_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkTextareaAutosize)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkTextareaAutosize,
      selectors: [["textarea", "cdkTextareaAutosize", ""]],
      hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
      hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() {
            return ctx._noopInputHandler();
          });
        }
      },
      inputs: {
        minRows: [0, "cdkAutosizeMinRows", "minRows"],
        maxRows: [0, "cdkAutosizeMaxRows", "maxRows"],
        enabled: [2, "cdkTextareaAutosize", "enabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute],
        placeholder: "placeholder"
      },
      exportAs: ["cdkTextareaAutosize"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputTransformsFeature"]]
    });
  }
  return CdkTextareaAutosize;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TextFieldModule = /*#__PURE__*/(() => {
  class TextFieldModule {
    static ɵfac = function TextFieldModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TextFieldModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TextFieldModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  }
  return TextFieldModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=9940.js.map