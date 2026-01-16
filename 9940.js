(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[9940],{

/***/ 6427:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/platform-DNDzkVcI.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ Platform)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 85914);




// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
let hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
  hasV8BreakIterator = typeof Intl !== 'undefined' && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
let Platform = /*#__PURE__*/(() => {
  class Platform {
    _platformId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID);
    // We want to use the Angular platform check because if the Document is shimmed
    // without the navigator, the following checks will fail. This is preferred because
    // sometimes the Document may be shimmed without the user's knowledge or intention
    /** Whether the Angular application is being rendered in the browser. */
    isBrowser = this._platformId ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this._platformId) : typeof document === 'object' && !!document;
    /** Whether the current browser is Microsoft Edge. */
    EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    /** Whether the current rendering engine is Microsoft Trident. */
    TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
    /** Whether the current rendering engine is Blink. */
    BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT;
    // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
    // ensure that Webkit runs standalone and is not used as another engine's base.
    /** Whether the current rendering engine is WebKit. */
    WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    /** Whether the current platform is Apple iOS. */
    IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
    // It's difficult to detect the plain Gecko engine, because most of the browsers identify
    // them self as Gecko-like browsers and modify the userAgent's according to that.
    // Since we only cover one explicit Firefox case, we can simply check for Firefox
    // instead of having an unstable check for Gecko.
    /** Whether the current browser is Firefox. */
    FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    /** Whether the current platform is Android. */
    // Trident on mobile adds the android platform to the userAgent to trick detections.
    ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
    // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
    // Safari browser should also use Webkit as its layout engine.
    /** Whether the current browser is Safari. */
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


/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./platform-DNDzkVcI.mjs */ 6427);
/* harmony import */ var _style_loader_B2sGQXxD_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style-loader-B2sGQXxD.mjs */ 82981);
/* harmony import */ var _element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./element-x4z00URv.mjs */ 94724);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 85914);









/** Component used to load the structural styles of the text field. */
let _CdkTextFieldStyleLoader = /*#__PURE__*/(() => {
  class _CdkTextFieldStyleLoader {
    static ɵfac = function _CdkTextFieldStyleLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkTextFieldStyleLoader)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: _CdkTextFieldStyleLoader,
      selectors: [["ng-component"]],
      hostAttrs: ["cdk-text-field-style-loader", ""],
      decls: 0,
      vars: 0,
      template: function _CdkTextFieldStyleLoader_Template(rf, ctx) {},
      styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"],
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
const listenerOptions = {
  passive: true
};
/**
 * An injectable service that can be used to monitor the autofill state of an input.
 * Based on the following blog post:
 * https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
 */
let AutofillMonitor = /*#__PURE__*/(() => {
  class AutofillMonitor {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_4__.P);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
    _styleLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_style_loader_B2sGQXxD_mjs__WEBPACK_IMPORTED_MODULE_5__._);
    _monitoredElements = new Map();
    constructor() {}
    monitor(elementOrRef) {
      if (!this._platform.isBrowser) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__.EMPTY;
      }
      this._styleLoader.load(_CdkTextFieldStyleLoader);
      const element = (0,_element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_6__.a)(elementOrRef);
      const info = this._monitoredElements.get(element);
      if (info) {
        return info.subject;
      }
      const subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      const cssClass = 'cdk-text-field-autofilled';
      const listener = event => {
        // Animation events fire on initial element render, we check for the presence of the autofill
        // CSS class to make sure this is a real change in state, not just the initial render before
        // we fire off events.
        if (event.animationName === 'cdk-text-field-autofill-start' && !element.classList.contains(cssClass)) {
          element.classList.add(cssClass);
          this._ngZone.run(() => subject.next({
            target: event.target,
            isAutofilled: true
          }));
        } else if (event.animationName === 'cdk-text-field-autofill-end' && element.classList.contains(cssClass)) {
          element.classList.remove(cssClass);
          this._ngZone.run(() => subject.next({
            target: event.target,
            isAutofilled: false
          }));
        }
      };
      const unlisten = this._ngZone.runOutsideAngular(() => {
        element.classList.add('cdk-text-field-autofill-monitored');
        return this._renderer.listen(element, 'animationstart', listener, listenerOptions);
      });
      this._monitoredElements.set(element, {
        subject,
        unlisten
      });
      return subject;
    }
    stopMonitoring(elementOrRef) {
      const element = (0,_element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_6__.a)(elementOrRef);
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
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
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
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _autofillMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(AutofillMonitor);
    /** Emits when the autofill state of the element changes. */
    cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
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
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
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
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_DNDzkVcI_mjs__WEBPACK_IMPORTED_MODULE_4__.P);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2);
    _resizeEvents = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Keep track of the previous textarea value to avoid resizing when the value hasn't changed. */
    _previousValue;
    _initialHeight;
    _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
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
      this._minRows = (0,_element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(value);
      this._setMinHeight();
    }
    /** Maximum amount of rows in the textarea. */
    get maxRows() {
      return this._maxRows;
    }
    set maxRows(value) {
      this._maxRows = (0,_element_x4z00URv_mjs__WEBPACK_IMPORTED_MODULE_6__.c)(value);
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
    /** Cached scroll top of a textarea */
    _cachedScrollTop;
    /** Used to reference correct document/window */
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, {
      optional: true
    });
    _hasFocus;
    _isViewInited = false;
    constructor() {
      const styleLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_style_loader_B2sGQXxD_mjs__WEBPACK_IMPORTED_MODULE_5__._);
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
          this._resizeEvents.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.auditTime)(16)).subscribe(() => {
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
      this._cachedScrollTop = this._textareaElement.scrollTop;
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
        textarea.scrollTop = this._cachedScrollTop;
      }
    }
    static ɵfac = function CdkTextareaAutosize_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkTextareaAutosize)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkTextareaAutosize,
      selectors: [["textarea", "cdkTextareaAutosize", ""]],
      hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
      hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() {
            return ctx._noopInputHandler();
          });
        }
      },
      inputs: {
        minRows: [0, "cdkAutosizeMinRows", "minRows"],
        maxRows: [0, "cdkAutosizeMaxRows", "maxRows"],
        enabled: [2, "cdkTextareaAutosize", "enabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        placeholder: "placeholder"
      },
      exportAs: ["cdkTextareaAutosize"]
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
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TextFieldModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  }
  return TextFieldModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 82981:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/style-loader-B2sGQXxD.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _CdkPrivateStyleLoader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);



/** Apps in which we've loaded styles. */
const appsWithLoaders = /*#__PURE__*/new WeakMap();
/**
 * Service that loads structural styles dynamically
 * and ensures that they're only loaded once per app.
 */
let _CdkPrivateStyleLoader = /*#__PURE__*/(() => {
  class _CdkPrivateStyleLoader {
    _appRef;
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    _environmentInjector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.EnvironmentInjector);
    /**
     * Loads a set of styles.
     * @param loader Component which will be instantiated to load the styles.
     */
    load(loader) {
      // Resolve the app ref lazily to avoid circular dependency errors if this is called too early.
      const appRef = this._appRef = this._appRef || this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
      let data = appsWithLoaders.get(appRef);
      // If we haven't loaded for this app before, we have to initialize it.
      if (!data) {
        data = {
          loaders: new Set(),
          refs: []
        };
        appsWithLoaders.set(appRef, data);
        // When the app is destroyed, we need to clean up all the related loaders.
        appRef.onDestroy(() => {
          appsWithLoaders.get(appRef)?.refs.forEach(ref => ref.destroy());
          appsWithLoaders.delete(appRef);
        });
      }
      // If the loader hasn't been loaded before, we need to instatiate it.
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


/***/ }),

/***/ 94724:
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/element-x4z00URv.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _isNumberValue),
/* harmony export */   a: () => (/* binding */ coerceElement),
/* harmony export */   c: () => (/* binding */ coerceNumberProperty)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);

function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
function _isNumberValue(value) {
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}

/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 */
function coerceElement(elementOrRef) {
  return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? elementOrRef.nativeElement : elementOrRef;
}


/***/ })

}])
//# sourceMappingURL=9940.js.map