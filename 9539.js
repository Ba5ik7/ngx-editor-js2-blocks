(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[9539],{

/***/ 39539:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/observers.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdkObserveContent: () => (/* binding */ CdkObserveContent),
/* harmony export */   ContentObserver: () => (/* binding */ ContentObserver),
/* harmony export */   MutationObserverFactory: () => (/* binding */ MutationObserverFactory),
/* harmony export */   ObserversModule: () => (/* binding */ ObserversModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ 31620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 32778);






// Angular may add, remove, or edit comment nodes during change detection. We don't care about
// these changes because they don't affect the user-preceived content, and worse it can cause
// infinite change detection cycles where the change detection updates a comment, triggering the
// MutationObserver, triggering another change detection and kicking the cycle off again.
function shouldIgnoreRecord(record) {
  // Ignore changes to comment text.
  if (record.type === 'characterData' && record.target instanceof Comment) {
    return true;
  }
  // Ignore addition / removal of comments.
  if (record.type === 'childList') {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  // Observe everything else.
  return false;
}
/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */
let MutationObserverFactory = /*#__PURE__*/(() => {
  class MutationObserverFactory {
    create(callback) {
      return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    }
    static ɵfac = function MutationObserverFactory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MutationObserverFactory)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MutationObserverFactory,
      factory: MutationObserverFactory.ɵfac,
      providedIn: 'root'
    });
  }
  return MutationObserverFactory;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** An injectable service that allows watching elements for changes to their content. */
let ContentObserver = /*#__PURE__*/(() => {
  class ContentObserver {
    _mutationObserverFactory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MutationObserverFactory);
    /** Keeps track of the existing MutationObservers so they can be reused. */
    _observedElements = new Map();
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
    constructor() {}
    ngOnDestroy() {
      this._observedElements.forEach((_, element) => this._cleanupObserver(element));
    }
    observe(elementOrRef) {
      const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceElement)(elementOrRef);
      return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
        const stream = this._observeElement(element);
        const subscription = stream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(records => records.filter(record => !shouldIgnoreRecord(record))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(records => !!records.length)).subscribe(records => {
          this._ngZone.run(() => {
            observer.next(records);
          });
        });
        return () => {
          subscription.unsubscribe();
          this._unobserveElement(element);
        };
      });
    }
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     */
    _observeElement(element) {
      return this._ngZone.runOutsideAngular(() => {
        if (!this._observedElements.has(element)) {
          const stream = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
          const observer = this._mutationObserverFactory.create(mutations => stream.next(mutations));
          if (observer) {
            observer.observe(element, {
              characterData: true,
              childList: true,
              subtree: true
            });
          }
          this._observedElements.set(element, {
            observer,
            stream,
            count: 1
          });
        } else {
          this._observedElements.get(element).count++;
        }
        return this._observedElements.get(element).stream;
      });
    }
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     */
    _unobserveElement(element) {
      if (this._observedElements.has(element)) {
        this._observedElements.get(element).count--;
        if (!this._observedElements.get(element).count) {
          this._cleanupObserver(element);
        }
      }
    }
    /** Clean up the underlying MutationObserver for the specified element. */
    _cleanupObserver(element) {
      if (this._observedElements.has(element)) {
        const {
          observer,
          stream
        } = this._observedElements.get(element);
        if (observer) {
          observer.disconnect();
        }
        stream.complete();
        this._observedElements.delete(element);
      }
    }
    static ɵfac = function ContentObserver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ContentObserver)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ContentObserver,
      factory: ContentObserver.ɵfac,
      providedIn: 'root'
    });
  }
  return ContentObserver;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
let CdkObserveContent = /*#__PURE__*/(() => {
  class CdkObserveContent {
    _contentObserver = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ContentObserver);
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    /** Event emitted for each change in the element's content. */
    event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Whether observing content is disabled. This option can be used
     * to disconnect the underlying MutationObserver until it is needed.
     */
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
      this._disabled ? this._unsubscribe() : this._subscribe();
    }
    _disabled = false;
    /** Debounce interval for emitting the changes. */
    get debounce() {
      return this._debounce;
    }
    set debounce(value) {
      this._debounce = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceNumberProperty)(value);
      this._subscribe();
    }
    _debounce;
    _currentSubscription = null;
    constructor() {}
    ngAfterContentInit() {
      if (!this._currentSubscription && !this.disabled) {
        this._subscribe();
      }
    }
    ngOnDestroy() {
      this._unsubscribe();
    }
    _subscribe() {
      this._unsubscribe();
      const stream = this._contentObserver.observe(this._elementRef);
      this._currentSubscription = (this.debounce ? stream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(this.debounce)) : stream).subscribe(this.event);
    }
    _unsubscribe() {
      this._currentSubscription?.unsubscribe();
    }
    static ɵfac = function CdkObserveContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkObserveContent)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkObserveContent,
      selectors: [["", "cdkObserveContent", ""]],
      inputs: {
        disabled: [2, "cdkObserveContentDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute],
        debounce: "debounce"
      },
      outputs: {
        event: "cdkObserveContent"
      },
      exportAs: ["cdkObserveContent"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputTransformsFeature"]]
    });
  }
  return CdkObserveContent;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ObserversModule = /*#__PURE__*/(() => {
  class ObserversModule {
    static ɵfac = function ObserversModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ObserversModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ObserversModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      providers: [MutationObserverFactory]
    });
  }
  return ObserversModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=9539.js.map