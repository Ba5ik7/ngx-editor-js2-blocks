(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[9975],{

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

/***/ 24439
/*!**************************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_recycle-view-repeater-strategy-chunk.mjs ***!
  \**************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayDataSource: () => (/* binding */ ArrayDataSource),
/* harmony export */   _RecycleViewRepeaterStrategy: () => (/* binding */ _RecycleViewRepeaterStrategy),
/* harmony export */   _ViewRepeaterOperation: () => (/* binding */ _ViewRepeaterOperation)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _data_source_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_data-source-chunk.mjs */ 33597);


class ArrayDataSource extends _data_source_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.DataSource {
  _data;
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.isObservable)(this._data) ? this._data : (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this._data);
  }
  disconnect() {}
}
var _ViewRepeaterOperation = /*#__PURE__*/function (_ViewRepeaterOperation) {
  _ViewRepeaterOperation[_ViewRepeaterOperation["REPLACED"] = 0] = "REPLACED";
  _ViewRepeaterOperation[_ViewRepeaterOperation["INSERTED"] = 1] = "INSERTED";
  _ViewRepeaterOperation[_ViewRepeaterOperation["MOVED"] = 2] = "MOVED";
  _ViewRepeaterOperation[_ViewRepeaterOperation["REMOVED"] = 3] = "REMOVED";
  return _ViewRepeaterOperation;
}(_ViewRepeaterOperation || {});
class _RecycleViewRepeaterStrategy {
  viewCacheSize = 20;
  _viewCache = [];
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return undefined;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
}


/***/ },

/***/ 33597
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_data-source-chunk.mjs ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSource: () => (/* binding */ DataSource),
/* harmony export */   isDataSource: () => (/* binding */ isDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44866);

class DataSource {}
function isDataSource(value) {
  return value && typeof value.connect === 'function' && !(value instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.ConnectableObservable);
}


/***/ },

/***/ 43433
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_directionality-chunk.mjs ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DIR_DOCUMENT: () => (/* binding */ DIR_DOCUMENT),
/* harmony export */   Directionality: () => (/* binding */ Directionality),
/* harmony export */   _resolveDirectionality: () => (/* binding */ _resolveDirectionality)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);


const DIR_DOCUMENT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-dir-doc', {
  providedIn: 'root',
  factory: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT)
});
const RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || '';
  if (value === 'auto' && typeof navigator !== 'undefined' && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? 'rtl' : 'ltr';
  }
  return value === 'rtl' ? 'rtl' : 'ltr';
}
let Directionality = /*#__PURE__*/(() => {
  class Directionality {
    get value() {
      return this.valueSignal();
    }
    valueSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('ltr', ...(ngDevMode ? [{
      debugName: "valueSignal"
    }] : []));
    change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    constructor() {
      const _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(DIR_DOCUMENT, {
        optional: true
      });
      if (_document) {
        const bodyDir = _document.body ? _document.body.dir : null;
        const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
        this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || 'ltr'));
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
    static ɵfac = function Directionality_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Directionality)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Directionality,
      factory: Directionality.ɵfac,
      providedIn: 'root'
    });
  }
  return Directionality;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 63680
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/bidi.mjs ***!
  \*****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiModule: () => (/* binding */ BidiModule),
/* harmony export */   DIR_DOCUMENT: () => (/* reexport safe */ _directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.DIR_DOCUMENT),
/* harmony export */   Dir: () => (/* binding */ Dir),
/* harmony export */   Directionality: () => (/* reexport safe */ _directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.Directionality)
/* harmony export */ });
/* harmony import */ var _directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_directionality-chunk.mjs */ 43433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);




let Dir = /*#__PURE__*/(() => {
  class Dir {
    _isInitialized = false;
    _rawDir = '';
    change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    get dir() {
      return this.valueSignal();
    }
    set dir(value) {
      const previousValue = this.valueSignal();
      this.valueSignal.set((0,_directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__._resolveDirectionality)(value));
      this._rawDir = value;
      if (previousValue !== this.valueSignal() && this._isInitialized) {
        this.change.emit(this.valueSignal());
      }
    }
    get value() {
      return this.dir;
    }
    valueSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('ltr', ...(ngDevMode ? [{
      debugName: "valueSignal"
    }] : []));
    ngAfterContentInit() {
      this._isInitialized = true;
    }
    ngOnDestroy() {
      this.change.complete();
    }
    static ɵfac = function Dir_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Dir)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: Dir,
      selectors: [["", "dir", ""]],
      hostVars: 1,
      hostBindings: function Dir_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("dir", ctx._rawDir);
        }
      },
      inputs: {
        dir: "dir"
      },
      outputs: {
        change: "dirChange"
      },
      exportAs: ["dir"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.Directionality,
        useExisting: Dir
      }])]
    });
  }
  return Dir;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let BidiModule = /*#__PURE__*/(() => {
  class BidiModule {
    static ɵfac = function BidiModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BidiModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: BidiModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  }
  return BidiModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 79975
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/scrolling.mjs ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDK_VIRTUAL_SCROLL_VIEWPORT: () => (/* binding */ CDK_VIRTUAL_SCROLL_VIEWPORT),
/* harmony export */   CdkFixedSizeVirtualScroll: () => (/* binding */ CdkFixedSizeVirtualScroll),
/* harmony export */   CdkScrollable: () => (/* binding */ CdkScrollable),
/* harmony export */   CdkScrollableModule: () => (/* binding */ CdkScrollableModule),
/* harmony export */   CdkVirtualForOf: () => (/* binding */ CdkVirtualForOf),
/* harmony export */   CdkVirtualScrollViewport: () => (/* binding */ CdkVirtualScrollViewport),
/* harmony export */   CdkVirtualScrollable: () => (/* binding */ CdkVirtualScrollable),
/* harmony export */   CdkVirtualScrollableElement: () => (/* binding */ CdkVirtualScrollableElement),
/* harmony export */   CdkVirtualScrollableWindow: () => (/* binding */ CdkVirtualScrollableWindow),
/* harmony export */   DEFAULT_RESIZE_TIME: () => (/* binding */ DEFAULT_RESIZE_TIME),
/* harmony export */   DEFAULT_SCROLL_TIME: () => (/* binding */ DEFAULT_SCROLL_TIME),
/* harmony export */   FixedSizeVirtualScrollStrategy: () => (/* binding */ FixedSizeVirtualScrollStrategy),
/* harmony export */   ScrollDispatcher: () => (/* binding */ ScrollDispatcher),
/* harmony export */   ScrollingModule: () => (/* binding */ ScrollingModule),
/* harmony export */   VIRTUAL_SCROLLABLE: () => (/* binding */ VIRTUAL_SCROLLABLE),
/* harmony export */   VIRTUAL_SCROLL_STRATEGY: () => (/* binding */ VIRTUAL_SCROLL_STRATEGY),
/* harmony export */   ViewportRuler: () => (/* binding */ ViewportRuler),
/* harmony export */   _fixedSizeVirtualScrollStrategyFactory: () => (/* binding */ _fixedSizeVirtualScrollStrategyFactory),
/* harmony export */   "ɵɵDir": () => (/* reexport safe */ _bidi_mjs__WEBPACK_IMPORTED_MODULE_7__.Dir)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _element_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_element-chunk.mjs */ 6075);
/* harmony import */ var _platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_platform-chunk.mjs */ 98508);
/* harmony import */ var _directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_directionality-chunk.mjs */ 43433);
/* harmony import */ var _scrolling_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_scrolling-chunk.mjs */ 86186);
/* harmony import */ var _bidi_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bidi.mjs */ 63680);
/* harmony import */ var _recycle_view_repeater_strategy_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_recycle-view-repeater-strategy-chunk.mjs */ 24439);
/* harmony import */ var _data_source_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_data-source-chunk.mjs */ 33597);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 11674);









const _c0 = ["contentWrapper"];
const _c1 = ["*"];




const VIRTUAL_SCROLL_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('VIRTUAL_SCROLL_STRATEGY');
class FixedSizeVirtualScrollStrategy {
  _scrolledIndexChange = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  scrolledIndexChange = /*#__PURE__*/this._scrolledIndexChange.pipe(/*#__PURE__*/(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)());
  _viewport = null;
  _itemSize;
  _minBufferPx;
  _maxBufferPx;
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  onContentScrolled() {
    this._updateRenderedRange();
  }
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  onContentRendered() {}
  onRenderedOffsetChanged() {}
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    if (newRange.end > dataLength) {
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(Math.round(this._itemSize * newRange.start));
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
}
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
let CdkFixedSizeVirtualScroll = /*#__PURE__*/(() => {
  class CdkFixedSizeVirtualScroll {
    get itemSize() {
      return this._itemSize;
    }
    set itemSize(value) {
      this._itemSize = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
    }
    _itemSize = 20;
    get minBufferPx() {
      return this._minBufferPx;
    }
    set minBufferPx(value) {
      this._minBufferPx = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
    }
    _minBufferPx = 100;
    get maxBufferPx() {
      return this._maxBufferPx;
    }
    set maxBufferPx(value) {
      this._maxBufferPx = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
    }
    _maxBufferPx = 200;
    _scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
    ngOnChanges() {
      this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
    }
    static ɵfac = function CdkFixedSizeVirtualScroll_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkFixedSizeVirtualScroll)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkFixedSizeVirtualScroll,
      selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
      inputs: {
        itemSize: "itemSize",
        minBufferPx: "minBufferPx",
        maxBufferPx: "maxBufferPx"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CdkFixedSizeVirtualScroll)]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
  return CdkFixedSizeVirtualScroll;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const DEFAULT_SCROLL_TIME = 20;
let ScrollDispatcher = /*#__PURE__*/(() => {
  class ScrollDispatcher {
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.Platform);
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
    _cleanupGlobalListener;
    constructor() {}
    _scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    _scrolledCount = 0;
    scrollContainers = new Map();
    register(scrollable) {
      if (!this.scrollContainers.has(scrollable)) {
        this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
      }
    }
    deregister(scrollable) {
      const scrollableReference = this.scrollContainers.get(scrollable);
      if (scrollableReference) {
        scrollableReference.unsubscribe();
        this.scrollContainers.delete(scrollable);
      }
    }
    scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
      if (!this._platform.isBrowser) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)();
      }
      return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
        if (!this._cleanupGlobalListener) {
          this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen('document', 'scroll', () => this._scrolled.next()));
        }
        const subscription = auditTimeInMs > 0 ? this._scrolled.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.auditTime)(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
        this._scrolledCount++;
        return () => {
          subscription.unsubscribe();
          this._scrolledCount--;
          if (!this._scrolledCount) {
            this._cleanupGlobalListener?.();
            this._cleanupGlobalListener = undefined;
          }
        };
      });
    }
    ngOnDestroy() {
      this._cleanupGlobalListener?.();
      this._cleanupGlobalListener = undefined;
      this.scrollContainers.forEach((_, container) => this.deregister(container));
      this._scrolled.complete();
    }
    ancestorScrolled(elementOrElementRef, auditTimeInMs) {
      const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
      return this.scrolled(auditTimeInMs).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(target => !target || ancestors.indexOf(target) > -1));
    }
    getAncestorScrollContainers(elementOrElementRef) {
      const scrollingContainers = [];
      this.scrollContainers.forEach((_subscription, scrollable) => {
        if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
          scrollingContainers.push(scrollable);
        }
      });
      return scrollingContainers;
    }
    _scrollableContainsElement(scrollable, elementOrElementRef) {
      let element = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(elementOrElementRef);
      let scrollableElement = scrollable.getElementRef().nativeElement;
      do {
        if (element == scrollableElement) {
          return true;
        }
      } while (element = element.parentElement);
      return false;
    }
    static ɵfac = function ScrollDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ScrollDispatcher)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ScrollDispatcher,
      factory: ScrollDispatcher.ɵfac,
      providedIn: 'root'
    });
  }
  return ScrollDispatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CdkScrollable = /*#__PURE__*/(() => {
  class CdkScrollable {
    elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    scrollDispatcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ScrollDispatcher);
    ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.Directionality, {
      optional: true
    });
    _scrollElement = this.elementRef.nativeElement;
    _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2);
    _cleanupScroll;
    _elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    constructor() {}
    ngOnInit() {
      this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, 'scroll', event => this._elementScrolled.next(event)));
      this.scrollDispatcher.register(this);
    }
    ngOnDestroy() {
      this._cleanupScroll?.();
      this._elementScrolled.complete();
      this.scrollDispatcher.deregister(this);
      this._destroyed.next();
      this._destroyed.complete();
    }
    elementScrolled() {
      return this._elementScrolled;
    }
    getElementRef() {
      return this.elementRef;
    }
    scrollTo(options) {
      const el = this.elementRef.nativeElement;
      const isRtl = this.dir && this.dir.value == 'rtl';
      if (options.left == null) {
        options.left = isRtl ? options.end : options.start;
      }
      if (options.right == null) {
        options.right = isRtl ? options.start : options.end;
      }
      if (options.bottom != null) {
        options.top = el.scrollHeight - el.clientHeight - options.bottom;
      }
      if (isRtl && (0,_scrolling_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.getRtlScrollAxisType)() != _scrolling_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.RtlScrollAxisType.NORMAL) {
        if (options.left != null) {
          options.right = el.scrollWidth - el.clientWidth - options.left;
        }
        if ((0,_scrolling_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.getRtlScrollAxisType)() == _scrolling_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.RtlScrollAxisType.INVERTED) {
          options.left = options.right;
        } else if ((0,_scrolling_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.getRtlScrollAxisType)() == _scrolling_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.RtlScrollAxisType.NEGATED) {
          options.left = options.right ? -options.right : options.right;
        }
      } else {
        if (options.right != null) {
          options.left = el.scrollWidth - el.clientWidth - options.right;
        }
      }
      this._applyScrollToOptions(options);
    }
    _applyScrollToOptions(options) {
      const el = this.elementRef.nativeElement;
      if ((0,_scrolling_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.supportsScrollBehavior)()) {
        el.scrollTo(options);
      } else {
        if (options.top != null) {
          el.scrollTop = options.top;
        }
        if (options.left != null) {
          el.scrollLeft = options.left;
        }
      }
    }
    measureScrollOffset(from) {
      const LEFT = 'left';
      const RIGHT = 'right';
      const el = this.elementRef.nativeElement;
      if (from == 'top') {
        return el.scrollTop;
      }
      if (from == 'bottom') {
        return el.scrollHeight - el.clientHeight - el.scrollTop;
      }
      const isRtl = this.dir && this.dir.value == 'rtl';
      if (from == 'start') {
        from = isRtl ? RIGHT : LEFT;
      } else if (from == 'end') {
        from = isRtl ? LEFT : RIGHT;
      }
      if (isRtl && (0,_scrolling_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.getRtlScrollAxisType)() == _scrolling_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.RtlScrollAxisType.INVERTED) {
        if (from == LEFT) {
          return el.scrollWidth - el.clientWidth - el.scrollLeft;
        } else {
          return el.scrollLeft;
        }
      } else if (isRtl && (0,_scrolling_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.getRtlScrollAxisType)() == _scrolling_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.RtlScrollAxisType.NEGATED) {
        if (from == LEFT) {
          return el.scrollLeft + el.scrollWidth - el.clientWidth;
        } else {
          return -el.scrollLeft;
        }
      } else {
        if (from == LEFT) {
          return el.scrollLeft;
        } else {
          return el.scrollWidth - el.clientWidth - el.scrollLeft;
        }
      }
    }
    static ɵfac = function CdkScrollable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkScrollable)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkScrollable,
      selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
    });
  }
  return CdkScrollable;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const DEFAULT_RESIZE_TIME = 20;
let ViewportRuler = /*#__PURE__*/(() => {
  class ViewportRuler {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.Platform);
    _listeners;
    _viewportSize = null;
    _change = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    constructor() {
      const ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
      const renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
      ngZone.runOutsideAngular(() => {
        if (this._platform.isBrowser) {
          const changeListener = event => this._change.next(event);
          this._listeners = [renderer.listen('window', 'resize', changeListener), renderer.listen('window', 'orientationchange', changeListener)];
        }
        this.change().subscribe(() => this._viewportSize = null);
      });
    }
    ngOnDestroy() {
      this._listeners?.forEach(cleanup => cleanup());
      this._change.complete();
    }
    getViewportSize() {
      if (!this._viewportSize) {
        this._updateViewportSize();
      }
      const output = {
        width: this._viewportSize.width,
        height: this._viewportSize.height
      };
      if (!this._platform.isBrowser) {
        this._viewportSize = null;
      }
      return output;
    }
    getViewportRect() {
      const scrollPosition = this.getViewportScrollPosition();
      const {
        width,
        height
      } = this.getViewportSize();
      return {
        top: scrollPosition.top,
        left: scrollPosition.left,
        bottom: scrollPosition.top + height,
        right: scrollPosition.left + width,
        height,
        width
      };
    }
    getViewportScrollPosition() {
      if (!this._platform.isBrowser) {
        return {
          top: 0,
          left: 0
        };
      }
      const document = this._document;
      const window = this._getWindow();
      const documentElement = document.documentElement;
      const documentRect = documentElement.getBoundingClientRect();
      const top = -documentRect.top || document.body?.scrollTop || window.scrollY || documentElement.scrollTop || 0;
      const left = -documentRect.left || document.body?.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
      return {
        top,
        left
      };
    }
    change(throttleTime = DEFAULT_RESIZE_TIME) {
      return throttleTime > 0 ? this._change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.auditTime)(throttleTime)) : this._change;
    }
    _getWindow() {
      return this._document.defaultView || window;
    }
    _updateViewportSize() {
      const window = this._getWindow();
      this._viewportSize = this._platform.isBrowser ? {
        width: window.innerWidth,
        height: window.innerHeight
      } : {
        width: 0,
        height: 0
      };
    }
    static ɵfac = function ViewportRuler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ViewportRuler)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ViewportRuler,
      factory: ViewportRuler.ɵfac,
      providedIn: 'root'
    });
  }
  return ViewportRuler;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const VIRTUAL_SCROLLABLE = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('VIRTUAL_SCROLLABLE');
let CdkVirtualScrollable = /*#__PURE__*/(() => {
  class CdkVirtualScrollable extends CdkScrollable {
    constructor() {
      super();
    }
    measureViewportSize(orientation) {
      const viewportEl = this.elementRef.nativeElement;
      return orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
    }
    static ɵfac = function CdkVirtualScrollable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkVirtualScrollable)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkVirtualScrollable,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return CdkVirtualScrollable;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_1__.animationFrameScheduler : rxjs__WEBPACK_IMPORTED_MODULE_1__.asapScheduler;
const CDK_VIRTUAL_SCROLL_VIEWPORT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CDK_VIRTUAL_SCROLL_VIEWPORT');
let CdkVirtualScrollViewport = /*#__PURE__*/(() => {
  class CdkVirtualScrollViewport extends CdkVirtualScrollable {
    elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    _scrollStrategy = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(VIRTUAL_SCROLL_STRATEGY, {
      optional: true
    });
    scrollable = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(VIRTUAL_SCROLLABLE, {
      optional: true
    });
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.Platform);
    _detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    _renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    _renderedContentOffsetSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    get orientation() {
      return this._orientation;
    }
    set orientation(orientation) {
      if (this._orientation !== orientation) {
        this._orientation = orientation;
        this._calculateSpacerSize();
      }
    }
    _orientation = 'vertical';
    appendOnly = false;
    scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => this._scrollStrategy.scrolledIndexChange.subscribe(index => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
    _contentWrapper;
    renderedRangeStream = this._renderedRangeSubject;
    renderedContentOffset = this._renderedContentOffsetSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(offset => offset !== null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)());
    _totalContentSize = 0;
    _totalContentWidth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('', ...(ngDevMode ? [{
      debugName: "_totalContentWidth"
    }] : []));
    _totalContentHeight = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('', ...(ngDevMode ? [{
      debugName: "_totalContentHeight"
    }] : []));
    _renderedContentTransform;
    _renderedRange = {
      start: 0,
      end: 0
    };
    _dataLength = 0;
    _viewportSize = 0;
    _forOf = null;
    _renderedContentOffset = 0;
    _renderedContentOffsetNeedsRewrite = false;
    _changeDetectionNeeded = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "_changeDetectionNeeded"
    }] : []));
    _runAfterChangeDetection = [];
    _viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    _isDestroyed = false;
    constructor() {
      super();
      const viewportRuler = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ViewportRuler);
      if (!this._scrollStrategy && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
      }
      this._viewportChanges = viewportRuler.change().subscribe(() => {
        this.checkViewportSize();
      });
      if (!this.scrollable) {
        this.elementRef.nativeElement.classList.add('cdk-virtual-scrollable');
        this.scrollable = this;
      }
      const ref = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
        if (this._changeDetectionNeeded()) {
          this._doChangeDetection();
        }
      }, {
        ...(ngDevMode ? {
          debugName: "ref"
        } : {}),
        injector: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef).injector
      });
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef).onDestroy(() => void ref.destroy());
    }
    ngOnInit() {
      if (!this._platform.isBrowser) {
        return;
      }
      if (this.scrollable === this) {
        super.ngOnInit();
      }
      this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
        this._measureViewportSize();
        this._scrollStrategy.attach(this);
        this.scrollable.elementScrolled().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.auditTime)(0, SCROLL_SCHEDULER), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this._destroyed)).subscribe(() => this._scrollStrategy.onContentScrolled());
        this._markChangeDetectionNeeded();
      }));
    }
    ngOnDestroy() {
      this.detach();
      this._scrollStrategy.detach();
      this._renderedRangeSubject.complete();
      this._detachedSubject.complete();
      this._viewportChanges.unsubscribe();
      this._isDestroyed = true;
      super.ngOnDestroy();
    }
    attach(forOf) {
      if (this._forOf && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('CdkVirtualScrollViewport is already attached.');
      }
      this.ngZone.runOutsideAngular(() => {
        this._forOf = forOf;
        this._forOf.dataStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this._detachedSubject)).subscribe(data => {
          const newLength = data.length;
          if (newLength !== this._dataLength) {
            this._dataLength = newLength;
            this._scrollStrategy.onDataLengthChanged();
          }
          this._doChangeDetection();
        });
      });
    }
    detach() {
      this._forOf = null;
      this._detachedSubject.next();
    }
    getDataLength() {
      return this._dataLength;
    }
    getViewportSize() {
      return this._viewportSize;
    }
    getRenderedRange() {
      return this._renderedRange;
    }
    measureBoundingClientRectWithScrollOffset(from) {
      return this.getElementRef().nativeElement.getBoundingClientRect()[from];
    }
    setTotalContentSize(size) {
      if (this._totalContentSize !== size) {
        this._totalContentSize = size;
        this._calculateSpacerSize();
        this._markChangeDetectionNeeded();
      }
    }
    setRenderedRange(range) {
      if (!rangesEqual(this._renderedRange, range)) {
        if (this.appendOnly) {
          range = {
            start: 0,
            end: Math.max(this._renderedRange.end, range.end)
          };
        }
        this._renderedRangeSubject.next(this._renderedRange = range);
        this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
      }
    }
    getOffsetToRenderedContentStart() {
      return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
    }
    setRenderedContentOffset(offset, to = 'to-start') {
      offset = this.appendOnly && to === 'to-start' ? 0 : offset;
      const isRtl = this.dir && this.dir.value == 'rtl';
      const isHorizontal = this.orientation == 'horizontal';
      const axis = isHorizontal ? 'X' : 'Y';
      const axisDirection = isHorizontal && isRtl ? -1 : 1;
      let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
      this._renderedContentOffset = offset;
      if (to === 'to-end') {
        transform += ` translate${axis}(-100%)`;
        this._renderedContentOffsetNeedsRewrite = true;
      }
      if (this._renderedContentTransform != transform) {
        this._renderedContentTransform = transform;
        this._markChangeDetectionNeeded(() => {
          if (this._renderedContentOffsetNeedsRewrite) {
            this._renderedContentOffset -= this.measureRenderedContentSize();
            this._renderedContentOffsetNeedsRewrite = false;
            this.setRenderedContentOffset(this._renderedContentOffset);
          } else {
            this._scrollStrategy.onRenderedOffsetChanged();
          }
        });
      }
    }
    scrollToOffset(offset, behavior = 'auto') {
      const options = {
        behavior
      };
      if (this.orientation === 'horizontal') {
        options.start = offset;
      } else {
        options.top = offset;
      }
      this.scrollable.scrollTo(options);
    }
    scrollToIndex(index, behavior = 'auto') {
      this._scrollStrategy.scrollToIndex(index, behavior);
    }
    measureScrollOffset(from) {
      let measureScrollOffset;
      if (this.scrollable == this) {
        measureScrollOffset = _from => super.measureScrollOffset(_from);
      } else {
        measureScrollOffset = _from => this.scrollable.measureScrollOffset(_from);
      }
      return Math.max(0, measureScrollOffset(from ?? (this.orientation === 'horizontal' ? 'start' : 'top')) - this.measureViewportOffset());
    }
    measureViewportOffset(from) {
      let fromRect;
      const LEFT = 'left';
      const RIGHT = 'right';
      const isRtl = this.dir?.value == 'rtl';
      if (from == 'start') {
        fromRect = isRtl ? RIGHT : LEFT;
      } else if (from == 'end') {
        fromRect = isRtl ? LEFT : RIGHT;
      } else if (from) {
        fromRect = from;
      } else {
        fromRect = this.orientation === 'horizontal' ? 'left' : 'top';
      }
      const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
      const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
      return viewportClientRect - scrollerClientRect;
    }
    measureRenderedContentSize() {
      const contentEl = this._contentWrapper.nativeElement;
      return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
    }
    measureRangeSize(range) {
      if (!this._forOf) {
        return 0;
      }
      return this._forOf.measureRangeSize(range, this.orientation);
    }
    checkViewportSize() {
      this._measureViewportSize();
      this._scrollStrategy.onDataLengthChanged();
    }
    _measureViewportSize() {
      this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
    }
    _markChangeDetectionNeeded(runAfter) {
      if (runAfter) {
        this._runAfterChangeDetection.push(runAfter);
      }
      if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(this._changeDetectionNeeded)) {
        return;
      }
      this.ngZone.runOutsideAngular(() => {
        Promise.resolve().then(() => {
          this.ngZone.run(() => {
            this._changeDetectionNeeded.set(true);
          });
        });
      });
    }
    _doChangeDetection() {
      if (this._isDestroyed) {
        return;
      }
      this.ngZone.run(() => {
        this._changeDetectorRef.markForCheck();
        this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
        this._renderedContentOffsetSubject.next(this.getOffsetToRenderedContentStart());
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
          this._changeDetectionNeeded.set(false);
          const runAfterChangeDetection = this._runAfterChangeDetection;
          this._runAfterChangeDetection = [];
          for (const fn of runAfterChangeDetection) {
            fn();
          }
        }, {
          injector: this._injector
        });
      });
    }
    _calculateSpacerSize() {
      this._totalContentHeight.set(this.orientation === 'horizontal' ? '' : `${this._totalContentSize}px`);
      this._totalContentWidth.set(this.orientation === 'horizontal' ? `${this._totalContentSize}px` : '');
    }
    static ɵfac = function CdkVirtualScrollViewport_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkVirtualScrollViewport)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CdkVirtualScrollViewport,
      selectors: [["cdk-virtual-scroll-viewport"]],
      viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
        }
      },
      hostAttrs: [1, "cdk-virtual-scroll-viewport"],
      hostVars: 4,
      hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
        }
      },
      inputs: {
        orientation: "orientation",
        appendOnly: [2, "appendOnly", "appendOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      outputs: {
        scrolledIndexChange: "scrolledIndexChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CdkScrollable,
        useFactory: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(VIRTUAL_SCROLLABLE, {
          optional: true
        }) || (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CdkVirtualScrollViewport)
      }, {
        provide: CDK_VIRTUAL_SCROLL_VIEWPORT,
        useExisting: CdkVirtualScrollViewport
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 4,
      consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
      template: function CdkVirtualScrollViewport_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](0, "div", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElement"](3, "div", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx._totalContentWidth())("height", ctx._totalContentHeight());
        }
      },
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return CdkVirtualScrollViewport;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === 'horizontal') {
    return direction === 'start' ? rect.left : rect.right;
  }
  return direction === 'start' ? rect.top : rect.bottom;
}
let CdkVirtualForOf = /*#__PURE__*/(() => {
  class CdkVirtualForOf {
    _viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    _template = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    _differs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers);
    _viewRepeater = new _recycle_view_repeater_strategy_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__._RecycleViewRepeaterStrategy();
    _viewport = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_VIRTUAL_SCROLL_VIEWPORT, {
      skipSelf: true
    });
    viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    _dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    get cdkVirtualForOf() {
      return this._cdkVirtualForOf;
    }
    set cdkVirtualForOf(value) {
      this._cdkVirtualForOf = value;
      if ((0,_data_source_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__.isDataSource)(value)) {
        this._dataSourceChanges.next(value);
      } else {
        this._dataSourceChanges.next(new _recycle_view_repeater_strategy_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.ArrayDataSource((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(value) ? value : Array.from(value || [])));
      }
    }
    _cdkVirtualForOf;
    get cdkVirtualForTrackBy() {
      return this._cdkVirtualForTrackBy;
    }
    set cdkVirtualForTrackBy(fn) {
      this._needsUpdate = true;
      this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : undefined;
    }
    _cdkVirtualForTrackBy;
    set cdkVirtualForTemplate(value) {
      if (value) {
        this._needsUpdate = true;
        this._template = value;
      }
    }
    get cdkVirtualForTemplateCacheSize() {
      return this._viewRepeater.viewCacheSize;
    }
    set cdkVirtualForTemplateCacheSize(size) {
      this._viewRepeater.viewCacheSize = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(size);
    }
    dataStream = this._dataSourceChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.pairwise)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(([prev, cur]) => this._changeDataSource(prev, cur)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.shareReplay)(1));
    _differ = null;
    _data = [];
    _renderedItems = [];
    _renderedRange = {
      start: 0,
      end: 0
    };
    _needsUpdate = false;
    _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    constructor() {
      const ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
      this.dataStream.subscribe(data => {
        this._data = data;
        this._onRenderedDataChange();
      });
      this._viewport.renderedRangeStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this._destroyed)).subscribe(range => {
        this._renderedRange = range;
        if (this.viewChange.observers.length) {
          ngZone.run(() => this.viewChange.next(this._renderedRange));
        }
        this._onRenderedDataChange();
      });
      this._viewport.attach(this);
    }
    measureRangeSize(range, orientation) {
      if (range.start >= range.end) {
        return 0;
      }
      if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error(`Error: attempted to measure an item that isn't rendered.`);
      }
      const renderedStartIndex = range.start - this._renderedRange.start;
      const rangeLen = range.end - range.start;
      let firstNode;
      let lastNode;
      for (let i = 0; i < rangeLen; i++) {
        const view = this._viewContainerRef.get(i + renderedStartIndex);
        if (view && view.rootNodes.length) {
          firstNode = lastNode = view.rootNodes[0];
          break;
        }
      }
      for (let i = rangeLen - 1; i > -1; i--) {
        const view = this._viewContainerRef.get(i + renderedStartIndex);
        if (view && view.rootNodes.length) {
          lastNode = view.rootNodes[view.rootNodes.length - 1];
          break;
        }
      }
      return firstNode && lastNode ? getOffset(orientation, 'end', lastNode) - getOffset(orientation, 'start', firstNode) : 0;
    }
    ngDoCheck() {
      if (this._differ && this._needsUpdate) {
        const changes = this._differ.diff(this._renderedItems);
        if (!changes) {
          this._updateContext();
        } else {
          this._applyChanges(changes);
        }
        this._needsUpdate = false;
      }
    }
    ngOnDestroy() {
      this._viewport.detach();
      this._dataSourceChanges.next(undefined);
      this._dataSourceChanges.complete();
      this.viewChange.complete();
      this._destroyed.next();
      this._destroyed.complete();
      this._viewRepeater.detach();
    }
    _onRenderedDataChange() {
      if (!this._renderedRange) {
        return;
      }
      this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
      if (!this._differ) {
        this._differ = this._differs.find(this._renderedItems).create((index, item) => {
          return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
        });
      }
      this._needsUpdate = true;
    }
    _changeDataSource(oldDs, newDs) {
      if (oldDs) {
        oldDs.disconnect(this);
      }
      this._needsUpdate = true;
      return newDs ? newDs.connect(this) : (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)();
    }
    _updateContext() {
      const count = this._data.length;
      let i = this._viewContainerRef.length;
      while (i--) {
        const view = this._viewContainerRef.get(i);
        view.context.index = this._renderedRange.start + i;
        view.context.count = count;
        this._updateComputedContextProperties(view.context);
        view.detectChanges();
      }
    }
    _applyChanges(changes) {
      this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), record => record.item);
      changes.forEachIdentityChange(record => {
        const view = this._viewContainerRef.get(record.currentIndex);
        view.context.$implicit = record.item;
      });
      const count = this._data.length;
      let i = this._viewContainerRef.length;
      while (i--) {
        const view = this._viewContainerRef.get(i);
        view.context.index = this._renderedRange.start + i;
        view.context.count = count;
        this._updateComputedContextProperties(view.context);
      }
    }
    _updateComputedContextProperties(context) {
      context.first = context.index === 0;
      context.last = context.index === context.count - 1;
      context.even = context.index % 2 === 0;
      context.odd = !context.even;
    }
    _getEmbeddedViewArgs(record, index) {
      return {
        templateRef: this._template,
        context: {
          $implicit: record.item,
          cdkVirtualForOf: this._cdkVirtualForOf,
          index: -1,
          count: -1,
          first: false,
          last: false,
          odd: false,
          even: false
        },
        index
      };
    }
    static ngTemplateContextGuard(directive, context) {
      return true;
    }
    static ɵfac = function CdkVirtualForOf_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkVirtualForOf)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkVirtualForOf,
      selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
      inputs: {
        cdkVirtualForOf: "cdkVirtualForOf",
        cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
        cdkVirtualForTemplate: "cdkVirtualForTemplate",
        cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
      }
    });
  }
  return CdkVirtualForOf;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CdkVirtualScrollableElement = /*#__PURE__*/(() => {
  class CdkVirtualScrollableElement extends CdkVirtualScrollable {
    constructor() {
      super();
    }
    measureBoundingClientRectWithScrollOffset(from) {
      return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
    }
    static ɵfac = function CdkVirtualScrollableElement_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkVirtualScrollableElement)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkVirtualScrollableElement,
      selectors: [["", "cdkVirtualScrollingElement", ""]],
      hostAttrs: [1, "cdk-virtual-scrollable"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return CdkVirtualScrollableElement;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CdkVirtualScrollableWindow = /*#__PURE__*/(() => {
  class CdkVirtualScrollableWindow extends CdkVirtualScrollable {
    constructor() {
      super();
      const document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
      this.elementRef = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef(document.documentElement);
      this._scrollElement = document;
    }
    measureBoundingClientRectWithScrollOffset(from) {
      return this.getElementRef().nativeElement.getBoundingClientRect()[from];
    }
    static ɵfac = function CdkVirtualScrollableWindow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkVirtualScrollableWindow)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkVirtualScrollableWindow,
      selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return CdkVirtualScrollableWindow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CdkScrollableModule = /*#__PURE__*/(() => {
  class CdkScrollableModule {
    static ɵfac = function CdkScrollableModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkScrollableModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CdkScrollableModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  }
  return CdkScrollableModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ScrollingModule = /*#__PURE__*/(() => {
  class ScrollingModule {
    static ɵfac = function ScrollingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ScrollingModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ScrollingModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_bidi_mjs__WEBPACK_IMPORTED_MODULE_7__.BidiModule, CdkScrollableModule, _bidi_mjs__WEBPACK_IMPORTED_MODULE_7__.BidiModule, CdkScrollableModule]
    });
  }
  return ScrollingModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 86186
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_scrolling-chunk.mjs ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RtlScrollAxisType: () => (/* binding */ RtlScrollAxisType),
/* harmony export */   getRtlScrollAxisType: () => (/* binding */ getRtlScrollAxisType),
/* harmony export */   supportsScrollBehavior: () => (/* binding */ supportsScrollBehavior)
/* harmony export */ });
var RtlScrollAxisType = /*#__PURE__*/function (RtlScrollAxisType) {
  RtlScrollAxisType[RtlScrollAxisType["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType[RtlScrollAxisType["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType[RtlScrollAxisType["INVERTED"] = 2] = "INVERTED";
  return RtlScrollAxisType;
}(RtlScrollAxisType || {});
let rtlScrollAxisType;
let scrollBehaviorSupported;
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== 'object' || !document || typeof Element !== 'function' || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if (document.documentElement?.style && 'scrollBehavior' in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== 'object' || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement('div');
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = 'rtl';
    containerStyle.width = '1px';
    containerStyle.overflow = 'auto';
    containerStyle.visibility = 'hidden';
    containerStyle.pointerEvents = 'none';
    containerStyle.position = 'absolute';
    const content = document.createElement('div');
    const contentStyle = content.style;
    contentStyle.width = '2px';
    contentStyle.height = '1px';
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}


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
//# sourceMappingURL=9975.js.map