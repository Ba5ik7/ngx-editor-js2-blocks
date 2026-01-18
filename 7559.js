(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[7559],{

/***/ 6075
/*!***************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_element-chunk.mjs ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _isNumberValue: () => (/* binding */ _isNumberValue),
/* harmony export */   coerceElement: () => (/* binding */ coerceElement),
/* harmony export */   coerceNumberProperty: () => (/* binding */ coerceNumberProperty)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);

function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? elementOrRef.nativeElement : elementOrRef;
}


/***/ },

/***/ 59504
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_style-loader-chunk.mjs ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _CdkPrivateStyleLoader: () => (/* binding */ _CdkPrivateStyleLoader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);


const appsWithLoaders = /*#__PURE__*/new WeakMap();
let _CdkPrivateStyleLoader = /*#__PURE__*/(() => {
  class _CdkPrivateStyleLoader {
    _appRef;
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    _environmentInjector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.EnvironmentInjector);
    load(loader) {
      const appRef = this._appRef = this._appRef || this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
      let data = appsWithLoaders.get(appRef);
      if (!data) {
        data = {
          loaders: new Set(),
          refs: []
        };
        appsWithLoaders.set(appRef, data);
        appRef.onDestroy(() => {
          appsWithLoaders.get(appRef)?.refs.forEach(ref => ref.destroy());
          appsWithLoaders.delete(appRef);
        });
      }
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


/***/ },

/***/ 69940
/*!***********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/text-field.mjs ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillMonitor: () => (/* binding */ AutofillMonitor),
/* harmony export */   CdkAutofill: () => (/* binding */ CdkAutofill),
/* harmony export */   CdkTextareaAutosize: () => (/* binding */ CdkTextareaAutosize),
/* harmony export */   TextFieldModule: () => (/* binding */ TextFieldModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_platform-chunk.mjs */ 98508);
/* harmony import */ var _style_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_style-loader-chunk.mjs */ 59504);
/* harmony import */ var _element_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_element-chunk.mjs */ 6075);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 11674);








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
const listenerOptions = {
  passive: true
};
let AutofillMonitor = /*#__PURE__*/(() => {
  class AutofillMonitor {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.Platform);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
    _styleLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_style_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__._CdkPrivateStyleLoader);
    _monitoredElements = new Map();
    constructor() {}
    monitor(elementOrRef) {
      if (!this._platform.isBrowser) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__.EMPTY;
      }
      this._styleLoader.load(_CdkTextFieldStyleLoader);
      const element = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(elementOrRef);
      const info = this._monitoredElements.get(element);
      if (info) {
        return info.subject;
      }
      const subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      const cssClass = 'cdk-text-field-autofilled';
      const listener = event => {
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
      const element = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(elementOrRef);
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
let CdkAutofill = /*#__PURE__*/(() => {
  class CdkAutofill {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _autofillMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(AutofillMonitor);
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
let CdkTextareaAutosize = /*#__PURE__*/(() => {
  class CdkTextareaAutosize {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.Platform);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2);
    _resizeEvents = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    _previousValue;
    _initialHeight;
    _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    _listenerCleanups;
    _minRows;
    _maxRows;
    _enabled = true;
    _previousMinRows = -1;
    _textareaElement;
    get minRows() {
      return this._minRows;
    }
    set minRows(value) {
      this._minRows = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.coerceNumberProperty)(value);
      this._setMinHeight();
    }
    get maxRows() {
      return this._maxRows;
    }
    set maxRows(value) {
      this._maxRows = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.coerceNumberProperty)(value);
      this._setMaxHeight();
    }
    get enabled() {
      return this._enabled;
    }
    set enabled(value) {
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
    _cachedLineHeight;
    _cachedPlaceholderHeight;
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _hasFocus = false;
    _isViewInited = false;
    constructor() {
      const styleLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_style_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__._CdkPrivateStyleLoader);
      styleLoader.load(_CdkTextFieldStyleLoader);
      this._textareaElement = this._elementRef.nativeElement;
    }
    _setMinHeight() {
      const minHeight = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null;
      if (minHeight) {
        this._textareaElement.style.minHeight = minHeight;
      }
    }
    _setMaxHeight() {
      const maxHeight = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null;
      if (maxHeight) {
        this._textareaElement.style.maxHeight = maxHeight;
      }
    }
    ngAfterViewInit() {
      if (this._platform.isBrowser) {
        this._initialHeight = this._textareaElement.style.height;
        this.resizeToFitContent();
        this._ngZone.runOutsideAngular(() => {
          this._listenerCleanups = [this._renderer.listen('window', 'resize', () => this._resizeEvents.next()), this._renderer.listen(this._textareaElement, 'focus', this._handleFocusEvent), this._renderer.listen(this._textareaElement, 'blur', this._handleFocusEvent)];
          this._resizeEvents.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.auditTime)(16)).subscribe(() => {
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
    _cacheTextareaLineHeight() {
      if (this._cachedLineHeight) {
        return;
      }
      const textareaClone = this._textareaElement.cloneNode(false);
      const cloneStyles = textareaClone.style;
      textareaClone.rows = 1;
      cloneStyles.position = 'absolute';
      cloneStyles.visibility = 'hidden';
      cloneStyles.border = 'none';
      cloneStyles.padding = '0';
      cloneStyles.height = '';
      cloneStyles.minHeight = '';
      cloneStyles.maxHeight = '';
      cloneStyles.top = cloneStyles.bottom = cloneStyles.left = cloneStyles.right = 'auto';
      cloneStyles.overflow = 'hidden';
      this._textareaElement.parentNode.appendChild(textareaClone);
      this._cachedLineHeight = textareaClone.clientHeight;
      textareaClone.remove();
      this._setMinHeight();
      this._setMaxHeight();
    }
    _measureScrollHeight() {
      const element = this._textareaElement;
      const previousMargin = element.style.marginBottom || '';
      const isFirefox = this._platform.FIREFOX;
      const needsMarginFiller = this._hasFocus;
      const measuringClass = isFirefox ? 'cdk-textarea-autosize-measuring-firefox' : 'cdk-textarea-autosize-measuring';
      if (needsMarginFiller) {
        element.style.marginBottom = `${element.clientHeight}px`;
      }
      element.classList.add(measuringClass);
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
    _handleFocusEvent = event => {
      this._hasFocus = event.type === 'focus';
    };
    ngDoCheck() {
      if (this._platform.isBrowser) {
        this.resizeToFitContent();
      }
    }
    resizeToFitContent(force = false) {
      if (!this._enabled) {
        return;
      }
      this._cacheTextareaLineHeight();
      this._cacheTextareaPlaceholderHeight();
      if (!this._cachedLineHeight) {
        return;
      }
      const textarea = this._elementRef.nativeElement;
      const value = textarea.value;
      if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
        return;
      }
      const scrollHeight = this._measureScrollHeight();
      const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0);
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
    reset() {
      if (this._initialHeight !== undefined) {
        this._textareaElement.style.height = this._initialHeight;
      }
    }
    _noopInputHandler() {}
    _scrollToCaretPosition(textarea) {
      const {
        selectionStart,
        selectionEnd
      } = textarea;
      if (!this._destroyed.isStopped && this._hasFocus) {
        textarea.setSelectionRange(selectionStart, selectionEnd);
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


/***/ },

/***/ 98508
/*!****************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_platform-chunk.mjs ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Platform: () => (/* binding */ Platform)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 11674);



let hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== 'undefined' && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
let Platform = /*#__PURE__*/(() => {
  class Platform {
    _platformId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID);
    isBrowser = this._platformId ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this._platformId) : typeof document === 'object' && !!document;
    EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT;
    WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
    FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
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


/***/ }

}])
//# sourceMappingURL=7559.js.map