(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[7510],{

/***/ 65129
/*!******************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/observers-private.mjs ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedResizeObserver: () => (/* binding */ SharedResizeObserver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32778);




const loopLimitExceededErrorHandler = e => {
  if (e instanceof ErrorEvent && e.message === 'ResizeObserver loop limit exceeded') {
    console.error(`${e.message}. This could indicate a performance issue with your app. See https://github.com/WICG/resize-observer/blob/master/explainer.md#error-handling`);
  }
};
class SingleBoxSharedResizeObserver {
  _box;
  _destroyed = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  _resizeSubject = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  _resizeObserver;
  _elementObservables = /*#__PURE__*/new Map();
  constructor(_box) {
    this._box = _box;
    if (typeof ResizeObserver !== 'undefined') {
      this._resizeObserver = new ResizeObserver(entries => this._resizeSubject.next(entries));
    }
  }
  observe(target) {
    if (!this._elementObservables.has(target)) {
      this._elementObservables.set(target, new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
        const subscription = this._resizeSubject.subscribe(observer);
        this._resizeObserver?.observe(target, {
          box: this._box
        });
        return () => {
          this._resizeObserver?.unobserve(target);
          subscription.unsubscribe();
          this._elementObservables.delete(target);
        };
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(entries => entries.some(entry => entry.target === target)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.shareReplay)({
        bufferSize: 1,
        refCount: true
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this._destroyed)));
    }
    return this._elementObservables.get(target);
  }
  destroy() {
    this._destroyed.next();
    this._destroyed.complete();
    this._resizeSubject.complete();
    this._elementObservables.clear();
  }
}
let SharedResizeObserver = /*#__PURE__*/(() => {
  class SharedResizeObserver {
    _cleanupErrorListener;
    _observers = new Map();
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    constructor() {
      if (typeof ResizeObserver !== 'undefined' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        this._ngZone.runOutsideAngular(() => {
          const renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
          this._cleanupErrorListener = renderer.listen('window', 'error', loopLimitExceededErrorHandler);
        });
      }
    }
    ngOnDestroy() {
      for (const [, observer] of this._observers) {
        observer.destroy();
      }
      this._observers.clear();
      this._cleanupErrorListener?.();
    }
    observe(target, options) {
      const box = options?.box || 'content-box';
      if (!this._observers.has(box)) {
        this._observers.set(box, new SingleBoxSharedResizeObserver(box));
      }
      return this._observers.get(box).observe(target);
    }
    static ɵfac = function SharedResizeObserver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SharedResizeObserver)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SharedResizeObserver,
      factory: SharedResizeObserver.ɵfac,
      providedIn: 'root'
    });
  }
  return SharedResizeObserver;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }

}])
//# sourceMappingURL=7510.js.map