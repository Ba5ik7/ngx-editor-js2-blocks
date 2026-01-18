(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[854],{

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

/***/ 26306
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_id-generator-chunk.mjs ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _IdGenerator: () => (/* binding */ _IdGenerator)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);


const counters = {};
class _IdGenerator {
  _appId = /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID);
  static _infix = `a${/*#__PURE__*/ /*#__PURE__*/Math.floor(/*#__PURE__*/Math.random() * 100000).toString()}`;
  getId(prefix, randomize = false) {
    if (this._appId !== 'ng') {
      prefix += this._appId;
    }
    if (!counters.hasOwnProperty(prefix)) {
      counters[prefix] = 0;
    }
    return `${prefix}${randomize ? _IdGenerator._infix + '-' : ''}${counters[prefix]++}`;
  }
  static ɵfac = function _IdGenerator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IdGenerator)();
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: _IdGenerator,
    factory: _IdGenerator.ɵfac,
    providedIn: 'root'
  });
}
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


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

/***/ 50854
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/drag-drop.mjs ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDK_DRAG_CONFIG: () => (/* binding */ CDK_DRAG_CONFIG),
/* harmony export */   CDK_DRAG_HANDLE: () => (/* binding */ CDK_DRAG_HANDLE),
/* harmony export */   CDK_DRAG_PARENT: () => (/* binding */ CDK_DRAG_PARENT),
/* harmony export */   CDK_DRAG_PLACEHOLDER: () => (/* binding */ CDK_DRAG_PLACEHOLDER),
/* harmony export */   CDK_DRAG_PREVIEW: () => (/* binding */ CDK_DRAG_PREVIEW),
/* harmony export */   CDK_DROP_LIST: () => (/* binding */ CDK_DROP_LIST),
/* harmony export */   CDK_DROP_LIST_GROUP: () => (/* binding */ CDK_DROP_LIST_GROUP),
/* harmony export */   CdkDrag: () => (/* binding */ CdkDrag),
/* harmony export */   CdkDragHandle: () => (/* binding */ CdkDragHandle),
/* harmony export */   CdkDragPlaceholder: () => (/* binding */ CdkDragPlaceholder),
/* harmony export */   CdkDragPreview: () => (/* binding */ CdkDragPreview),
/* harmony export */   CdkDropList: () => (/* binding */ CdkDropList),
/* harmony export */   CdkDropListGroup: () => (/* binding */ CdkDropListGroup),
/* harmony export */   DragDrop: () => (/* binding */ DragDrop),
/* harmony export */   DragDropModule: () => (/* binding */ DragDropModule),
/* harmony export */   DragDropRegistry: () => (/* binding */ DragDropRegistry),
/* harmony export */   DragRef: () => (/* binding */ DragRef),
/* harmony export */   DropListRef: () => (/* binding */ DropListRef),
/* harmony export */   copyArrayItem: () => (/* binding */ copyArrayItem),
/* harmony export */   createDragRef: () => (/* binding */ createDragRef),
/* harmony export */   createDropListRef: () => (/* binding */ createDropListRef),
/* harmony export */   moveItemInArray: () => (/* binding */ moveItemInArray),
/* harmony export */   transferArrayItem: () => (/* binding */ transferArrayItem),
/* harmony export */   "ɵɵCdkScrollable": () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_5__.CdkScrollable)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_shadow-dom-chunk.mjs */ 68310);
/* harmony import */ var _style_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_style-loader-chunk.mjs */ 59504);
/* harmony import */ var _fake_event_detection_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_fake-event-detection-chunk.mjs */ 90603);
/* harmony import */ var _scrolling_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrolling.mjs */ 79975);
/* harmony import */ var _element_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_element-chunk.mjs */ 6075);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_directionality-chunk.mjs */ 43433);
/* harmony import */ var _id_generator_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_id-generator-chunk.mjs */ 26306);
/* harmony import */ var _array_chunk_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_array-chunk.mjs */ 61440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 11674);



















function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll('[id]');
  const nodeName = node.nodeName.toLowerCase();
  clone.removeAttribute('id');
  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute('id');
  }
  if (nodeName === 'canvas') {
    transferCanvasData(node, clone);
  } else if (nodeName === 'input' || nodeName === 'select' || nodeName === 'textarea') {
    transferInputData(node, clone);
  }
  transferData('canvas', node, clone, transferCanvasData);
  transferData('input, textarea, select', node, clone, transferInputData);
  return clone;
}
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
let cloneUniqueId = 0;
function transferInputData(source, clone) {
  if (clone.type !== 'file') {
    clone.value = source.value;
  }
  if (clone.type === 'radio' && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
function transferCanvasData(source, clone) {
  const context = clone.getContext('2d');
  if (context) {
    try {
      context.drawImage(source, 0, 0);
    } catch {}
  }
}
function getMutableClientRect(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y
  };
}
function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
function isOverflowingParent(parentRect, childRect) {
  const isLeftOverflowing = childRect.left < parentRect.left;
  const isRightOverflowing = childRect.left + childRect.width > parentRect.right;
  const isTopOverflowing = childRect.top < parentRect.top;
  const isBottomOverflowing = childRect.top + childRect.height > parentRect.bottom;
  return isLeftOverflowing || isRightOverflowing || isTopOverflowing || isBottomOverflowing;
}
function adjustDomRect(domRect, top, left) {
  domRect.top += top;
  domRect.bottom = domRect.top + domRect.height;
  domRect.left += left;
  domRect.right = domRect.left + domRect.width;
}
function isPointerNearDomRect(rect, threshold, pointerX, pointerY) {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}
class ParentPositionTracker {
  _document;
  positions = /*#__PURE__*/new Map();
  constructor(_document) {
    this._document = _document;
  }
  clear() {
    this.positions.clear();
  }
  cache(elements) {
    this.clear();
    this.positions.set(this._document, {
      scrollPosition: this.getViewportScrollPosition()
    });
    elements.forEach(element => {
      this.positions.set(element, {
        scrollPosition: {
          top: element.scrollTop,
          left: element.scrollLeft
        },
        clientRect: getMutableClientRect(element)
      });
    });
  }
  handleScroll(event) {
    const target = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
    const cachedPosition = this.positions.get(target);
    if (!cachedPosition) {
      return null;
    }
    const scrollPosition = cachedPosition.scrollPosition;
    let newTop;
    let newLeft;
    if (target === this._document) {
      const viewportScrollPosition = this.getViewportScrollPosition();
      newTop = viewportScrollPosition.top;
      newLeft = viewportScrollPosition.left;
    } else {
      newTop = target.scrollTop;
      newLeft = target.scrollLeft;
    }
    const topDifference = scrollPosition.top - newTop;
    const leftDifference = scrollPosition.left - newLeft;
    this.positions.forEach((position, node) => {
      if (position.clientRect && target !== node && target.contains(node)) {
        adjustDomRect(position.clientRect, topDifference, leftDifference);
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
    return {
      top: topDifference,
      left: leftDifference
    };
  }
  getViewportScrollPosition() {
    return {
      top: window.scrollY,
      left: window.scrollX
    };
  }
}
function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;
  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }
  const wrapper = _document.createElement('div');
  rootNodes.forEach(node => wrapper.appendChild(node));
  return wrapper;
}
function extendStyles(dest, source, importantProperties) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];
      if (value) {
        dest.setProperty(key, value, importantProperties?.has(key) ? 'important' : '');
      } else {
        dest.removeProperty(key);
      }
    }
  }
  return dest;
}
function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? '' : 'none';
  extendStyles(element.style, {
    'touch-action': enable ? '' : 'none',
    '-webkit-user-drag': enable ? '' : 'none',
    '-webkit-tap-highlight-color': enable ? '' : 'transparent',
    'user-select': userSelect,
    '-ms-user-select': userSelect,
    '-webkit-user-select': userSelect,
    '-moz-user-select': userSelect
  });
}
function toggleVisibility(element, enable, importantProperties) {
  extendStyles(element.style, {
    position: enable ? '' : 'fixed',
    top: enable ? '' : '0',
    opacity: enable ? '' : '0',
    left: enable ? '' : '-999em'
  }, importantProperties);
}
function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != 'none' ? transform + ' ' + initialTransform : transform;
}
function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
function getTransform(x, y) {
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
const capturingEventOptions = {
  capture: true
};
const activeCapturingEventOptions$1 = {
  passive: false,
  capture: true
};
let _ResetsLoader = /*#__PURE__*/(() => {
  class _ResetsLoader {
    static ɵfac = function _ResetsLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResetsLoader)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: _ResetsLoader,
      selectors: [["ng-component"]],
      hostAttrs: ["cdk-drag-resets-container", ""],
      decls: 0,
      vars: 0,
      template: function _ResetsLoader_Template(rf, ctx) {},
      styles: ["@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit;inset:auto}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return _ResetsLoader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DragDropRegistry = /*#__PURE__*/(() => {
  class DragDropRegistry {
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _styleLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_style_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__._CdkPrivateStyleLoader);
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
    _cleanupDocumentTouchmove;
    _scroll = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    _dropInstances = new Set();
    _dragInstances = new Set();
    _activeDragInstances = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "_activeDragInstances"
    }] : []));
    _globalListeners;
    _draggingPredicate = item => item.isDragging();
    _domNodesToDirectives = null;
    pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    constructor() {}
    registerDropContainer(drop) {
      if (!this._dropInstances.has(drop)) {
        this._dropInstances.add(drop);
      }
    }
    registerDragItem(drag) {
      this._dragInstances.add(drag);
      if (this._dragInstances.size === 1) {
        this._ngZone.runOutsideAngular(() => {
          this._cleanupDocumentTouchmove?.();
          this._cleanupDocumentTouchmove = this._renderer.listen(this._document, 'touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions$1);
        });
      }
    }
    removeDropContainer(drop) {
      this._dropInstances.delete(drop);
    }
    removeDragItem(drag) {
      this._dragInstances.delete(drag);
      this.stopDragging(drag);
      if (this._dragInstances.size === 0) {
        this._cleanupDocumentTouchmove?.();
      }
    }
    startDragging(drag, event) {
      if (this._activeDragInstances().indexOf(drag) > -1) {
        return;
      }
      this._styleLoader.load(_ResetsLoader);
      this._activeDragInstances.update(instances => [...instances, drag]);
      if (this._activeDragInstances().length === 1) {
        const isTouchEvent = event.type.startsWith('touch');
        const endEventHandler = e => this.pointerUp.next(e);
        const toBind = [['scroll', e => this._scroll.next(e), capturingEventOptions], ['selectstart', this._preventDefaultWhileDragging, activeCapturingEventOptions$1]];
        if (isTouchEvent) {
          toBind.push(['touchend', endEventHandler, capturingEventOptions], ['touchcancel', endEventHandler, capturingEventOptions]);
        } else {
          toBind.push(['mouseup', endEventHandler, capturingEventOptions]);
        }
        if (!isTouchEvent) {
          toBind.push(['mousemove', e => this.pointerMove.next(e), activeCapturingEventOptions$1]);
        }
        this._ngZone.runOutsideAngular(() => {
          this._globalListeners = toBind.map(([name, handler, options]) => this._renderer.listen(this._document, name, handler, options));
        });
      }
    }
    stopDragging(drag) {
      this._activeDragInstances.update(instances => {
        const index = instances.indexOf(drag);
        if (index > -1) {
          instances.splice(index, 1);
          return [...instances];
        }
        return instances;
      });
      if (this._activeDragInstances().length === 0) {
        this._clearGlobalListeners();
      }
    }
    isDragging(drag) {
      return this._activeDragInstances().indexOf(drag) > -1;
    }
    scrolled(shadowRoot) {
      const streams = [this._scroll];
      if (shadowRoot && shadowRoot !== this._document) {
        streams.push(new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
          return this._ngZone.runOutsideAngular(() => {
            const cleanup = this._renderer.listen(shadowRoot, 'scroll', event => {
              if (this._activeDragInstances().length) {
                observer.next(event);
              }
            }, capturingEventOptions);
            return () => {
              cleanup();
            };
          });
        }));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.merge)(...streams);
    }
    registerDirectiveNode(node, dragRef) {
      this._domNodesToDirectives ??= new WeakMap();
      this._domNodesToDirectives.set(node, dragRef);
    }
    removeDirectiveNode(node) {
      this._domNodesToDirectives?.delete(node);
    }
    getDragDirectiveForNode(node) {
      return this._domNodesToDirectives?.get(node) || null;
    }
    ngOnDestroy() {
      this._dragInstances.forEach(instance => this.removeDragItem(instance));
      this._dropInstances.forEach(instance => this.removeDropContainer(instance));
      this._domNodesToDirectives = null;
      this._clearGlobalListeners();
      this.pointerMove.complete();
      this.pointerUp.complete();
    }
    _preventDefaultWhileDragging = event => {
      if (this._activeDragInstances().length > 0) {
        event.preventDefault();
      }
    };
    _persistentTouchmoveListener = event => {
      if (this._activeDragInstances().length > 0) {
        if (this._activeDragInstances().some(this._draggingPredicate)) {
          event.preventDefault();
        }
        this.pointerMove.next(event);
      }
    };
    _clearGlobalListeners() {
      this._globalListeners?.forEach(cleanup => cleanup());
      this._globalListeners = undefined;
    }
    static ɵfac = function DragDropRegistry_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DragDropRegistry)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DragDropRegistry,
      factory: DragDropRegistry.ɵfac,
      providedIn: 'root'
    });
  }
  return DragDropRegistry;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function parseCssTimeUnitsToMs(value) {
  const multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
  return parseFloat(value) * multiplier;
}
function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
  const property = transitionedProperties.find(prop => prop === 'transform' || prop === 'all');
  if (!property) {
    return 0;
  }
  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
  const rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(',').map(part => part.trim());
}
const importantProperties = /*#__PURE__*/new Set(['position']);
class PreviewRef {
  _document;
  _rootElement;
  _direction;
  _initialDomRect;
  _previewTemplate;
  _previewClass;
  _pickupPositionOnPage;
  _initialTransform;
  _zIndex;
  _renderer;
  _previewEmbeddedView = null;
  _preview;
  get element() {
    return this._preview;
  }
  constructor(_document, _rootElement, _direction, _initialDomRect, _previewTemplate, _previewClass, _pickupPositionOnPage, _initialTransform, _zIndex, _renderer) {
    this._document = _document;
    this._rootElement = _rootElement;
    this._direction = _direction;
    this._initialDomRect = _initialDomRect;
    this._previewTemplate = _previewTemplate;
    this._previewClass = _previewClass;
    this._pickupPositionOnPage = _pickupPositionOnPage;
    this._initialTransform = _initialTransform;
    this._zIndex = _zIndex;
    this._renderer = _renderer;
  }
  attach(parent) {
    this._preview = this._createPreview();
    parent.appendChild(this._preview);
    if (supportsPopover(this._preview)) {
      this._preview['showPopover']();
    }
  }
  destroy() {
    this._preview.remove();
    this._previewEmbeddedView?.destroy();
    this._preview = this._previewEmbeddedView = null;
  }
  setTransform(value) {
    this._preview.style.transform = value;
  }
  getBoundingClientRect() {
    return this._preview.getBoundingClientRect();
  }
  addClass(className) {
    this._preview.classList.add(className);
  }
  getTransitionDuration() {
    return getTransformTransitionDurationInMs(this._preview);
  }
  addEventListener(name, handler) {
    return this._renderer.listen(this._preview, name, handler);
  }
  _createPreview() {
    const previewConfig = this._previewTemplate;
    const previewClass = this._previewClass;
    const previewTemplate = previewConfig ? previewConfig.template : null;
    let preview;
    if (previewTemplate && previewConfig) {
      const rootRect = previewConfig.matchSize ? this._initialDomRect : null;
      const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
      viewRef.detectChanges();
      preview = getRootNode(viewRef, this._document);
      this._previewEmbeddedView = viewRef;
      if (previewConfig.matchSize) {
        matchElementSize(preview, rootRect);
      } else {
        preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      }
    } else {
      preview = deepCloneNode(this._rootElement);
      matchElementSize(preview, this._initialDomRect);
      if (this._initialTransform) {
        preview.style.transform = this._initialTransform;
      }
    }
    extendStyles(preview.style, {
      'pointer-events': 'none',
      'margin': supportsPopover(preview) ? '0 auto 0 0' : '0',
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'z-index': this._zIndex + ''
    }, importantProperties);
    toggleNativeDragInteractions(preview, false);
    preview.classList.add('cdk-drag-preview');
    preview.setAttribute('popover', 'manual');
    preview.setAttribute('dir', this._direction);
    if (previewClass) {
      if (Array.isArray(previewClass)) {
        previewClass.forEach(className => preview.classList.add(className));
      } else {
        preview.classList.add(previewClass);
      }
    }
    return preview;
  }
}
function supportsPopover(element) {
  return 'showPopover' in element;
}
const passiveEventListenerOptions = {
  passive: true
};
const activeEventListenerOptions = {
  passive: false
};
const activeCapturingEventOptions = {
  passive: false,
  capture: true
};
const MOUSE_EVENT_IGNORE_TIME = 800;
const PLACEHOLDER_CLASS = 'cdk-drag-placeholder';
const dragImportantProperties = /*#__PURE__*/new Set(['position']);
function createDragRef(injector, element, config = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
}) {
  const renderer = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2, null, {
    optional: true
  }) || injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
  return new DragRef(element, config, injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT), injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), injector.get(_scrolling_mjs__WEBPACK_IMPORTED_MODULE_5__.ViewportRuler), injector.get(DragDropRegistry), renderer);
}
class DragRef {
  _config;
  _document;
  _ngZone;
  _viewportRuler;
  _dragDropRegistry;
  _renderer;
  _rootElementCleanups;
  _cleanupShadowRootSelectStart;
  _preview = null;
  _previewContainer;
  _placeholderRef = null;
  _placeholder;
  _pickupPositionInElement;
  _pickupPositionOnPage;
  _marker;
  _anchor = null;
  _passiveTransform = {
    x: 0,
    y: 0
  };
  _activeTransform = {
    x: 0,
    y: 0
  };
  _initialTransform;
  _hasStartedDragging = /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
    debugName: "_hasStartedDragging"
  }] : []));
  _hasMoved = false;
  _initialContainer;
  _initialIndex;
  _parentPositions;
  _moveEvents = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  _pointerDirectionDelta;
  _pointerPositionAtLastDirectionChange;
  _lastKnownPointerPosition;
  _rootElement;
  _ownerSVGElement = null;
  _rootElementTapHighlight;
  _pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
  _pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
  _scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
  _resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
  _lastTouchEventTime;
  _dragStartTime;
  _boundaryElement = null;
  _nativeInteractionsEnabled = true;
  _initialDomRect;
  _previewRect;
  _boundaryRect;
  _previewTemplate;
  _placeholderTemplate;
  _handles = [];
  _disabledHandles = /*#__PURE__*/new Set();
  _dropContainer;
  _direction = 'ltr';
  _parentDragRef = null;
  _cachedShadowRoot;
  lockAxis = null;
  dragStartDelay = 0;
  previewClass;
  scale = 1;
  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this._toggleNativeDragInteractions();
      this._handles.forEach(handle => toggleNativeDragInteractions(handle, value));
    }
  }
  _disabled = false;
  beforeStarted = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  started = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  released = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  ended = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  entered = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  exited = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  dropped = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  moved = this._moveEvents;
  data;
  constrainPosition;
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry, _renderer) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    this._renderer = _renderer;
    this.withRootElement(element).withParent(_config.parentDragRef || null);
    this._parentPositions = new ParentPositionTracker(_document);
    _dragDropRegistry.registerDragItem(this);
  }
  getPlaceholderElement() {
    return this._placeholder;
  }
  getRootElement() {
    return this._rootElement;
  }
  getVisibleElement() {
    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
  }
  withHandles(handles) {
    this._handles = handles.map(handle => (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.coerceElement)(handle));
    this._handles.forEach(handle => toggleNativeDragInteractions(handle, this.disabled));
    this._toggleNativeDragInteractions();
    const disabledHandles = new Set();
    this._disabledHandles.forEach(handle => {
      if (this._handles.indexOf(handle) > -1) {
        disabledHandles.add(handle);
      }
    });
    this._disabledHandles = disabledHandles;
    return this;
  }
  withPreviewTemplate(template) {
    this._previewTemplate = template;
    return this;
  }
  withPlaceholderTemplate(template) {
    this._placeholderTemplate = template;
    return this;
  }
  withRootElement(rootElement) {
    const element = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.coerceElement)(rootElement);
    if (element !== this._rootElement) {
      this._removeRootElementListeners();
      const renderer = this._renderer;
      this._rootElementCleanups = this._ngZone.runOutsideAngular(() => [renderer.listen(element, 'mousedown', this._pointerDown, activeEventListenerOptions), renderer.listen(element, 'touchstart', this._pointerDown, passiveEventListenerOptions), renderer.listen(element, 'dragstart', this._nativeDragStart, activeEventListenerOptions)]);
      this._initialTransform = undefined;
      this._rootElement = element;
    }
    if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
      this._ownerSVGElement = this._rootElement.ownerSVGElement;
    }
    return this;
  }
  withBoundaryElement(boundaryElement) {
    this._boundaryElement = boundaryElement ? (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.coerceElement)(boundaryElement) : null;
    this._resizeSubscription.unsubscribe();
    if (boundaryElement) {
      this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
    }
    return this;
  }
  withParent(parent) {
    this._parentDragRef = parent;
    return this;
  }
  dispose() {
    this._removeRootElementListeners();
    if (this.isDragging()) {
      this._rootElement?.remove();
    }
    this._marker?.remove();
    this._destroyPreview();
    this._destroyPlaceholder();
    this._dragDropRegistry.removeDragItem(this);
    this._removeListeners();
    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this._moveEvents.complete();
    this._handles = [];
    this._disabledHandles.clear();
    this._dropContainer = undefined;
    this._resizeSubscription.unsubscribe();
    this._parentPositions.clear();
    this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._marker = this._parentDragRef = null;
  }
  isDragging() {
    return this._hasStartedDragging() && this._dragDropRegistry.isDragging(this);
  }
  reset() {
    this._rootElement.style.transform = this._initialTransform || '';
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  resetToBoundary() {
    if (this._boundaryElement && this._rootElement && isOverflowingParent(this._boundaryElement.getBoundingClientRect(), this._rootElement.getBoundingClientRect())) {
      const parentRect = this._boundaryElement.getBoundingClientRect();
      const childRect = this._rootElement.getBoundingClientRect();
      let offsetX = 0;
      let offsetY = 0;
      if (childRect.left < parentRect.left) {
        offsetX = parentRect.left - childRect.left;
      } else if (childRect.right > parentRect.right) {
        offsetX = parentRect.right - childRect.right;
      }
      if (childRect.top < parentRect.top) {
        offsetY = parentRect.top - childRect.top;
      } else if (childRect.bottom > parentRect.bottom) {
        offsetY = parentRect.bottom - childRect.bottom;
      }
      const currentLeft = this._activeTransform.x;
      const currentTop = this._activeTransform.y;
      let x = currentLeft + offsetX,
        y = currentTop + offsetY;
      this._rootElement.style.transform = getTransform(x, y);
      this._activeTransform = {
        x,
        y
      };
      this._passiveTransform = {
        x,
        y
      };
    }
  }
  disableHandle(handle) {
    if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);
      toggleNativeDragInteractions(handle, true);
    }
  }
  enableHandle(handle) {
    if (this._disabledHandles.has(handle)) {
      this._disabledHandles.delete(handle);
      toggleNativeDragInteractions(handle, this.disabled);
    }
  }
  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  _withDropContainer(container) {
    this._dropContainer = container;
  }
  getFreeDragPosition() {
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  setFreeDragPosition(value) {
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform.x = value.x;
    this._passiveTransform.y = value.y;
    if (!this._dropContainer) {
      this._applyRootElementTransform(value.x, value.y);
    }
    return this;
  }
  withPreviewContainer(value) {
    this._previewContainer = value;
    return this;
  }
  _sortFromLastPointerPosition() {
    const position = this._lastKnownPointerPosition;
    if (position && this._dropContainer) {
      this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
    }
  }
  _removeListeners() {
    this._pointerMoveSubscription.unsubscribe();
    this._pointerUpSubscription.unsubscribe();
    this._scrollSubscription.unsubscribe();
    this._cleanupShadowRootSelectStart?.();
    this._cleanupShadowRootSelectStart = undefined;
  }
  _destroyPreview() {
    this._preview?.destroy();
    this._preview = null;
  }
  _destroyPlaceholder() {
    this._anchor?.remove();
    this._placeholder?.remove();
    this._placeholderRef?.destroy();
    this._placeholder = this._anchor = this._placeholderRef = null;
  }
  _pointerDown = event => {
    this.beforeStarted.next();
    if (this._handles.length) {
      const targetHandle = this._getTargetHandle(event);
      if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
        this._initializeDragSequence(targetHandle, event);
      }
    } else if (!this.disabled) {
      this._initializeDragSequence(this._rootElement, event);
    }
  };
  _pointerMove = event => {
    const pointerPosition = this._getPointerPositionOnPage(event);
    if (!this._hasStartedDragging()) {
      const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
      const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
      const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
      if (isOverThreshold) {
        const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
        const container = this._dropContainer;
        if (!isDelayElapsed) {
          this._endDragSequence(event);
          return;
        }
        if (!container || !container.isDragging() && !container.isReceiving()) {
          if (event.cancelable) {
            event.preventDefault();
          }
          this._hasStartedDragging.set(true);
          this._ngZone.run(() => this._startDragSequence(event));
        }
      }
      return;
    }
    if (event.cancelable) {
      event.preventDefault();
    }
    const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
    this._hasMoved = true;
    this._lastKnownPointerPosition = pointerPosition;
    this._updatePointerDirectionDelta(constrainedPointerPosition);
    if (this._dropContainer) {
      this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
    } else {
      const offset = this.constrainPosition ? this._initialDomRect : this._pickupPositionOnPage;
      const activeTransform = this._activeTransform;
      activeTransform.x = constrainedPointerPosition.x - offset.x + this._passiveTransform.x;
      activeTransform.y = constrainedPointerPosition.y - offset.y + this._passiveTransform.y;
      this._applyRootElementTransform(activeTransform.x, activeTransform.y);
    }
    if (this._moveEvents.observers.length) {
      this._ngZone.run(() => {
        this._moveEvents.next({
          source: this,
          pointerPosition: constrainedPointerPosition,
          event,
          distance: this._getDragDistance(constrainedPointerPosition),
          delta: this._pointerDirectionDelta
        });
      });
    }
  };
  _pointerUp = event => {
    this._endDragSequence(event);
  };
  _endDragSequence(event) {
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }
    this._removeListeners();
    this._dragDropRegistry.stopDragging(this);
    this._toggleNativeDragInteractions();
    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }
    if (!this._hasStartedDragging()) {
      return;
    }
    this.released.next({
      source: this,
      event
    });
    if (this._dropContainer) {
      this._dropContainer._stopScrolling();
      this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(event);
        this._cleanupCachedDimensions();
        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      this._passiveTransform.x = this._activeTransform.x;
      const pointerPosition = this._getPointerPositionOnPage(event);
      this._passiveTransform.y = this._activeTransform.y;
      this._ngZone.run(() => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(pointerPosition),
          dropPoint: pointerPosition,
          event
        });
      });
      this._cleanupCachedDimensions();
      this._dragDropRegistry.stopDragging(this);
    }
  }
  _startDragSequence(event) {
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }
    this._toggleNativeDragInteractions();
    const shadowRoot = this._getShadowRoot();
    const dropContainer = this._dropContainer;
    if (shadowRoot) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupShadowRootSelectStart = this._renderer.listen(shadowRoot, 'selectstart', shadowDomSelectStart, activeCapturingEventOptions);
      });
    }
    if (dropContainer) {
      const element = this._rootElement;
      const parent = element.parentNode;
      const placeholder = this._placeholder = this._createPlaceholderElement();
      const marker = this._marker = this._marker || this._document.createComment(typeof ngDevMode === 'undefined' || ngDevMode ? 'cdk-drag-marker' : '');
      parent.insertBefore(marker, element);
      this._initialTransform = element.style.transform || '';
      this._preview = new PreviewRef(this._document, this._rootElement, this._direction, this._initialDomRect, this._previewTemplate || null, this.previewClass || null, this._pickupPositionOnPage, this._initialTransform, this._config.zIndex || 1000, this._renderer);
      this._preview.attach(this._getPreviewInsertionPoint(parent, shadowRoot));
      toggleVisibility(element, false, dragImportantProperties);
      this._document.body.appendChild(parent.replaceChild(placeholder, element));
      this.started.next({
        source: this,
        event
      });
      dropContainer.start();
      this._initialContainer = dropContainer;
      this._initialIndex = dropContainer.getItemIndex(this);
    } else {
      this.started.next({
        source: this,
        event
      });
      this._initialContainer = this._initialIndex = undefined;
    }
    this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
  }
  _initializeDragSequence(referenceElement, event) {
    if (this._parentDragRef) {
      event.stopPropagation();
    }
    const isDragging = this.isDragging();
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
    const rootElement = this._rootElement;
    const target = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    const isFakeEvent = isTouchSequence ? (0,_fake_event_detection_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.isFakeTouchstartFromScreenReader)(event) : (0,_fake_event_detection_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.isFakeMousedownFromScreenReader)(event);
    if (target && target.draggable && event.type === 'mousedown') {
      event.preventDefault();
    }
    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
      return;
    }
    if (this._handles.length) {
      const rootStyles = rootElement.style;
      this._rootElementTapHighlight = rootStyles.webkitTapHighlightColor || '';
      rootStyles.webkitTapHighlightColor = 'transparent';
    }
    this._hasMoved = false;
    this._hasStartedDragging.set(this._hasMoved);
    this._removeListeners();
    this._initialDomRect = this._rootElement.getBoundingClientRect();
    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(scrollEvent => this._updateOnScroll(scrollEvent));
    if (this._boundaryElement) {
      this._boundaryRect = getMutableClientRect(this._boundaryElement);
    }
    const previewTemplate = this._previewTemplate;
    this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(this._initialDomRect, referenceElement, event);
    const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);
    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();
    this._dragDropRegistry.startDragging(this, event);
  }
  _cleanupDragArtifacts(event) {
    toggleVisibility(this._rootElement, true, dragImportantProperties);
    this._marker.parentNode.replaceChild(this._rootElement, this._marker);
    this._destroyPreview();
    this._destroyPlaceholder();
    this._initialDomRect = this._boundaryRect = this._previewRect = this._initialTransform = undefined;
    this._ngZone.run(() => {
      const container = this._dropContainer;
      const currentIndex = container.getItemIndex(this);
      const pointerPosition = this._getPointerPositionOnPage(event);
      const distance = this._getDragDistance(pointerPosition);
      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
      this.ended.next({
        source: this,
        distance,
        dropPoint: pointerPosition,
        event
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialIndex,
        container: container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance,
        dropPoint: pointerPosition,
        event
      });
      container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition, event);
      this._dropContainer = this._initialContainer;
    });
  }
  _updateActiveDropContainer({
    x,
    y
  }, {
    x: rawX,
    y: rawY
  }) {
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }
    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(() => {
        const exitIndex = this._dropContainer.getItemIndex(this);
        const nextItemElement = this._dropContainer.getItemAtIndex(exitIndex + 1)?.getVisibleElement() || null;
        this.exited.next({
          item: this,
          container: this._dropContainer
        });
        this._dropContainer.exit(this);
        this._conditionallyInsertAnchor(newContainer, this._dropContainer, nextItemElement);
        this._dropContainer = newContainer;
        this._dropContainer.enter(this, x, y, newContainer === this._initialContainer && newContainer.sortingDisabled ? this._initialIndex : undefined);
        this.entered.next({
          item: this,
          container: newContainer,
          currentIndex: newContainer.getItemIndex(this)
        });
      });
    }
    if (this.isDragging()) {
      this._dropContainer._startScrollingIfNecessary(rawX, rawY);
      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
      if (this.constrainPosition) {
        this._applyPreviewTransform(x, y);
      } else {
        this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
      }
    }
  }
  _animatePreviewToPlaceholder() {
    if (!this._hasMoved) {
      return Promise.resolve();
    }
    const placeholderRect = this._placeholder.getBoundingClientRect();
    this._preview.addClass('cdk-drag-animating');
    this._applyPreviewTransform(placeholderRect.left, placeholderRect.top);
    const duration = this._preview.getTransitionDuration();
    if (duration === 0) {
      return Promise.resolve();
    }
    return this._ngZone.runOutsideAngular(() => {
      return new Promise(resolve => {
        const handler = event => {
          if (!event || this._preview && (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event) === this._preview.element && event.propertyName === 'transform') {
            cleanupListener();
            resolve();
            clearTimeout(timeout);
          }
        };
        const timeout = setTimeout(handler, duration * 1.5);
        const cleanupListener = this._preview.addEventListener('transitionend', handler);
      });
    });
  }
  _createPlaceholderElement() {
    const placeholderConfig = this._placeholderTemplate;
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    let placeholder;
    if (placeholderTemplate) {
      this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
      this._placeholderRef.detectChanges();
      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    }
    placeholder.style.pointerEvents = 'none';
    placeholder.classList.add(PLACEHOLDER_CLASS);
    return placeholder;
  }
  _getPointerPositionInElement(elementRect, referenceElement, event) {
    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;
    const scrollPosition = this._getViewportScrollPosition();
    const x = point.pageX - referenceRect.left - scrollPosition.left;
    const y = point.pageY - referenceRect.top - scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  _getPointerPositionOnPage(event) {
    const scrollPosition = this._getViewportScrollPosition();
    const point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] || {
      pageX: 0,
      pageY: 0
    } : event;
    const x = point.pageX - scrollPosition.left;
    const y = point.pageY - scrollPosition.top;
    if (this._ownerSVGElement) {
      const svgMatrix = this._ownerSVGElement.getScreenCTM();
      if (svgMatrix) {
        const svgPoint = this._ownerSVGElement.createSVGPoint();
        svgPoint.x = x;
        svgPoint.y = y;
        return svgPoint.matrixTransform(svgMatrix.inverse());
      }
    }
    return {
      x,
      y
    };
  }
  _getConstrainedPointerPosition(point) {
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    let {
      x,
      y
    } = this.constrainPosition ? this.constrainPosition(point, this, this._initialDomRect, this._pickupPositionInElement) : point;
    if (this.lockAxis === 'x' || dropContainerLock === 'x') {
      y = this._pickupPositionOnPage.y - (this.constrainPosition ? this._pickupPositionInElement.y : 0);
    } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
      x = this._pickupPositionOnPage.x - (this.constrainPosition ? this._pickupPositionInElement.x : 0);
    }
    if (this._boundaryRect) {
      const {
        x: pickupX,
        y: pickupY
      } = !this.constrainPosition ? this._pickupPositionInElement : {
        x: 0,
        y: 0
      };
      const boundaryRect = this._boundaryRect;
      const {
        width: previewWidth,
        height: previewHeight
      } = this._getPreviewRect();
      const minY = boundaryRect.top + pickupY;
      const maxY = boundaryRect.bottom - (previewHeight - pickupY);
      const minX = boundaryRect.left + pickupX;
      const maxX = boundaryRect.right - (previewWidth - pickupX);
      x = clamp$1(x, minX, maxX);
      y = clamp$1(y, minY, maxY);
    }
    return {
      x,
      y
    };
  }
  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y);
    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }
    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }
    return delta;
  }
  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }
    const shouldEnable = this._handles.length > 0 || !this.isDragging();
    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  _removeRootElementListeners() {
    this._rootElementCleanups?.forEach(cleanup => cleanup());
    this._rootElementCleanups = undefined;
  }
  _applyRootElementTransform(x, y) {
    const scale = 1 / this.scale;
    const transform = getTransform(x * scale, y * scale);
    const styles = this._rootElement.style;
    if (this._initialTransform == null) {
      this._initialTransform = styles.transform && styles.transform != 'none' ? styles.transform : '';
    }
    styles.transform = combineTransforms(transform, this._initialTransform);
  }
  _applyPreviewTransform(x, y) {
    const initialTransform = this._previewTemplate?.template ? undefined : this._initialTransform;
    const transform = getTransform(x, y);
    this._preview.setTransform(combineTransforms(transform, initialTransform));
  }
  _getDragDistance(currentPosition) {
    const pickupPosition = this._pickupPositionOnPage;
    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = undefined;
    this._parentPositions.clear();
  }
  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;
    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }
    const elementRect = this._rootElement.getBoundingClientRect();
    const boundaryRect = this._boundaryElement.getBoundingClientRect();
    if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
      return;
    }
    const leftOverflow = boundaryRect.left - elementRect.left;
    const rightOverflow = elementRect.right - boundaryRect.right;
    const topOverflow = boundaryRect.top - elementRect.top;
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }
      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    }
    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }
      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }
    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
  _getDragStartDelay(event) {
    const value = this.dragStartDelay;
    if (typeof value === 'number') {
      return value;
    } else if (isTouchEvent(event)) {
      return value.touch;
    }
    return value ? value.mouse : 0;
  }
  _updateOnScroll(event) {
    const scrollDifference = this._parentPositions.handleScroll(event);
    if (scrollDifference) {
      const target = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
      if (this._boundaryRect && target !== this._boundaryElement && target.contains(this._boundaryElement)) {
        adjustDomRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
      }
      this._pickupPositionOnPage.x += scrollDifference.left;
      this._pickupPositionOnPage.y += scrollDifference.top;
      if (!this._dropContainer) {
        this._activeTransform.x -= scrollDifference.left;
        this._activeTransform.y -= scrollDifference.top;
        this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
      }
    }
  }
  _getViewportScrollPosition() {
    return this._parentPositions.positions.get(this._document)?.scrollPosition || this._parentPositions.getViewportScrollPosition();
  }
  _getShadowRoot() {
    if (this._cachedShadowRoot === undefined) {
      this._cachedShadowRoot = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__._getShadowRoot)(this._rootElement);
    }
    return this._cachedShadowRoot;
  }
  _getPreviewInsertionPoint(initialParent, shadowRoot) {
    const previewContainer = this._previewContainer || 'global';
    if (previewContainer === 'parent') {
      return initialParent;
    }
    if (previewContainer === 'global') {
      const documentRef = this._document;
      return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    return (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.coerceElement)(previewContainer);
  }
  _getPreviewRect() {
    if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
      this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialDomRect;
    }
    return this._previewRect;
  }
  _nativeDragStart = event => {
    if (this._handles.length) {
      const targetHandle = this._getTargetHandle(event);
      if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
        event.preventDefault();
      }
    } else if (!this.disabled) {
      event.preventDefault();
    }
  };
  _getTargetHandle(event) {
    return this._handles.find(handle => {
      return event.target && (event.target === handle || handle.contains(event.target));
    });
  }
  _conditionallyInsertAnchor(newContainer, exitContainer, nextItemElement) {
    if (newContainer === this._initialContainer) {
      this._anchor?.remove();
      this._anchor = null;
    } else if (exitContainer === this._initialContainer && exitContainer.hasAnchor) {
      const anchor = this._anchor ??= deepCloneNode(this._placeholder);
      anchor.classList.remove(PLACEHOLDER_CLASS);
      anchor.classList.add('cdk-drag-anchor');
      anchor.style.transform = '';
      if (nextItemElement) {
        nextItemElement.before(anchor);
      } else {
        (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.coerceElement)(exitContainer.element).appendChild(anchor);
      }
    }
  }
}
function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function isTouchEvent(event) {
  return event.type[0] === 't';
}
function shadowDomSelectStart(event) {
  event.preventDefault();
}
function moveItemInArray(array, fromIndex, toIndex) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);
  if (from === to) {
    return;
  }
  const target = array[from];
  const delta = to < from ? -1 : 1;
  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }
  array[to] = target;
}
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  const from = clamp(currentIndex, currentArray.length - 1);
  const to = clamp(targetIndex, targetArray.length);
  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
  }
}
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  const to = clamp(targetIndex, targetArray.length);
  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray[currentIndex]);
  }
}
function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}
class SingleAxisSortStrategy {
  _dragDropRegistry;
  _element;
  _sortPredicate;
  _itemPositions = [];
  _activeDraggables;
  orientation = 'vertical';
  direction = 'ltr';
  constructor(_dragDropRegistry) {
    this._dragDropRegistry = _dragDropRegistry;
  }
  _previousSwap = {
    drag: null,
    delta: 0,
    overlaps: false
  };
  start(items) {
    this.withItems(items);
  }
  sort(item, pointerX, pointerY, pointerDelta) {
    const siblings = this._itemPositions;
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
    if (newIndex === -1 && siblings.length > 0) {
      return null;
    }
    const isHorizontal = this.orientation === 'horizontal';
    const currentIndex = siblings.findIndex(currentItem => currentItem.drag === item);
    const siblingAtNewPosition = siblings[newIndex];
    const currentPosition = siblings[currentIndex].clientRect;
    const newPosition = siblingAtNewPosition.clientRect;
    const delta = currentIndex > newIndex ? 1 : -1;
    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
    const oldOrder = siblings.slice();
    moveItemInArray(siblings, currentIndex, newIndex);
    siblings.forEach((sibling, index) => {
      if (oldOrder[index] === sibling) {
        return;
      }
      const isDraggedItem = sibling.drag === item;
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement();
      sibling.offset += offset;
      const transformAmount = Math.round(sibling.offset * (1 / sibling.drag.scale));
      if (isHorizontal) {
        elementToOffset.style.transform = combineTransforms(`translate3d(${transformAmount}px, 0, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = combineTransforms(`translate3d(0, ${transformAmount}px, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, offset, 0);
      }
    });
    this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
    return {
      previousIndex: currentIndex,
      currentIndex: newIndex
    };
  }
  enter(item, pointerX, pointerY, index) {
    const newIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    const activeDraggables = this._activeDraggables;
    const currentIndex = activeDraggables.indexOf(item);
    const placeholder = item.getPlaceholderElement();
    let newPositionReference = activeDraggables[newIndex];
    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    }
    if (!newPositionReference && (newIndex == null || newIndex === -1 || newIndex < activeDraggables.length - 1) && this._shouldEnterAsFirstChild(pointerX, pointerY)) {
      newPositionReference = activeDraggables[0];
    }
    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    }
    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      const element = newPositionReference.getRootElement();
      element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else {
      this._element.appendChild(placeholder);
      activeDraggables.push(item);
    }
    placeholder.style.transform = '';
    this._cacheItemPositions();
  }
  withItems(items) {
    this._activeDraggables = items.slice();
    this._cacheItemPositions();
  }
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  reset() {
    this._activeDraggables?.forEach(item => {
      const rootElement = item.getRootElement();
      if (rootElement) {
        const initialTransform = this._itemPositions.find(p => p.drag === item)?.initialTransform;
        rootElement.style.transform = initialTransform || '';
      }
    });
    this._itemPositions = [];
    this._activeDraggables = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._previousSwap.overlaps = false;
  }
  getActiveItemsSnapshot() {
    return this._activeDraggables;
  }
  getItemIndex(item) {
    return this._getVisualItemPositions().findIndex(currentItem => currentItem.drag === item);
  }
  getItemAtIndex(index) {
    return this._getVisualItemPositions()[index]?.drag || null;
  }
  updateOnScroll(topDifference, leftDifference) {
    this._itemPositions.forEach(({
      clientRect
    }) => {
      adjustDomRect(clientRect, topDifference, leftDifference);
    });
    this._itemPositions.forEach(({
      drag
    }) => {
      if (this._dragDropRegistry.isDragging(drag)) {
        drag._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    this._element = container;
  }
  _cacheItemPositions() {
    const isHorizontal = this.orientation === 'horizontal';
    this._itemPositions = this._activeDraggables.map(drag => {
      const elementToMeasure = drag.getVisibleElement();
      return {
        drag,
        offset: 0,
        initialTransform: elementToMeasure.style.transform || '',
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort((a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  _getVisualItemPositions() {
    return this.orientation === 'horizontal' && this.direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
  }
  _getItemOffsetPx(currentPosition, newPosition, delta) {
    const isHorizontal = this.orientation === 'horizontal';
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top;
    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }
    return itemOffset;
  }
  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    const isHorizontal = this.orientation === 'horizontal';
    const currentPosition = siblings[currentIndex].clientRect;
    const immediateSibling = siblings[currentIndex + delta * -1];
    let siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
    if (immediateSibling) {
      const start = isHorizontal ? 'left' : 'top';
      const end = isHorizontal ? 'right' : 'bottom';
      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }
    return siblingOffset;
  }
  _shouldEnterAsFirstChild(pointerX, pointerY) {
    if (!this._activeDraggables.length) {
      return false;
    }
    const itemPositions = this._itemPositions;
    const isHorizontal = this.orientation === 'horizontal';
    const reversed = itemPositions[0].drag !== this._activeDraggables[0];
    if (reversed) {
      const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
      return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
    } else {
      const firstItemRect = itemPositions[0].clientRect;
      return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
    }
  }
  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    const isHorizontal = this.orientation === 'horizontal';
    const index = this._itemPositions.findIndex(({
      drag,
      clientRect
    }) => {
      if (drag === item) {
        return false;
      }
      if (delta) {
        const direction = isHorizontal ? delta.x : delta.y;
        if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
          return false;
        }
      }
      return isHorizontal ? pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
    });
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
}
class MixedSortStrategy {
  _document;
  _dragDropRegistry;
  _element;
  _sortPredicate;
  _rootNode;
  _activeItems;
  _previousSwap = {
    drag: null,
    deltaX: 0,
    deltaY: 0,
    overlaps: false
  };
  _relatedNodes = [];
  constructor(_document, _dragDropRegistry) {
    this._document = _document;
    this._dragDropRegistry = _dragDropRegistry;
  }
  start(items) {
    const childNodes = this._element.childNodes;
    this._relatedNodes = [];
    for (let i = 0; i < childNodes.length; i++) {
      const node = childNodes[i];
      this._relatedNodes.push([node, node.nextSibling]);
    }
    this.withItems(items);
  }
  sort(item, pointerX, pointerY, pointerDelta) {
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
    const previousSwap = this._previousSwap;
    if (newIndex === -1 || this._activeItems[newIndex] === item) {
      return null;
    }
    const toSwapWith = this._activeItems[newIndex];
    if (previousSwap.drag === toSwapWith && previousSwap.overlaps && previousSwap.deltaX === pointerDelta.x && previousSwap.deltaY === pointerDelta.y) {
      return null;
    }
    const previousIndex = this.getItemIndex(item);
    const current = item.getPlaceholderElement();
    const overlapElement = toSwapWith.getRootElement();
    if (newIndex > previousIndex) {
      overlapElement.after(current);
    } else {
      overlapElement.before(current);
    }
    moveItemInArray(this._activeItems, previousIndex, newIndex);
    const newOverlapElement = this._getRootNode().elementFromPoint(pointerX, pointerY);
    previousSwap.deltaX = pointerDelta.x;
    previousSwap.deltaY = pointerDelta.y;
    previousSwap.drag = toSwapWith;
    previousSwap.overlaps = overlapElement === newOverlapElement || overlapElement.contains(newOverlapElement);
    return {
      previousIndex,
      currentIndex: newIndex
    };
  }
  enter(item, pointerX, pointerY, index) {
    const currentIndex = this._activeItems.indexOf(item);
    if (currentIndex > -1) {
      this._activeItems.splice(currentIndex, 1);
    }
    let enterIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    if (enterIndex === -1) {
      enterIndex = this._getClosestItemIndexToPointer(item, pointerX, pointerY);
    }
    const targetItem = this._activeItems[enterIndex];
    if (targetItem && !this._dragDropRegistry.isDragging(targetItem)) {
      this._activeItems.splice(enterIndex, 0, item);
      targetItem.getRootElement().before(item.getPlaceholderElement());
    } else {
      this._activeItems.push(item);
      this._element.appendChild(item.getPlaceholderElement());
    }
  }
  withItems(items) {
    this._activeItems = items.slice();
  }
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  reset() {
    const root = this._element;
    const previousSwap = this._previousSwap;
    for (let i = this._relatedNodes.length - 1; i > -1; i--) {
      const [node, nextSibling] = this._relatedNodes[i];
      if (node.parentNode === root && node.nextSibling !== nextSibling) {
        if (nextSibling === null) {
          root.appendChild(node);
        } else if (nextSibling.parentNode === root) {
          root.insertBefore(node, nextSibling);
        }
      }
    }
    this._relatedNodes = [];
    this._activeItems = [];
    previousSwap.drag = null;
    previousSwap.deltaX = previousSwap.deltaY = 0;
    previousSwap.overlaps = false;
  }
  getActiveItemsSnapshot() {
    return this._activeItems;
  }
  getItemIndex(item) {
    return this._activeItems.indexOf(item);
  }
  getItemAtIndex(index) {
    return this._activeItems[index] || null;
  }
  updateOnScroll() {
    this._activeItems.forEach(item => {
      if (this._dragDropRegistry.isDragging(item)) {
        item._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    if (container !== this._element) {
      this._element = container;
      this._rootNode = undefined;
    }
  }
  _getItemIndexFromPointerPosition(item, pointerX, pointerY) {
    const elementAtPoint = this._getRootNode().elementFromPoint(Math.floor(pointerX), Math.floor(pointerY));
    const index = elementAtPoint ? this._activeItems.findIndex(item => {
      const root = item.getRootElement();
      return elementAtPoint === root || root.contains(elementAtPoint);
    }) : -1;
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
  _getRootNode() {
    if (!this._rootNode) {
      this._rootNode = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__._getShadowRoot)(this._element) || this._document;
    }
    return this._rootNode;
  }
  _getClosestItemIndexToPointer(item, pointerX, pointerY) {
    if (this._activeItems.length === 0) {
      return -1;
    }
    if (this._activeItems.length === 1) {
      return 0;
    }
    let minDistance = Infinity;
    let minIndex = -1;
    for (let i = 0; i < this._activeItems.length; i++) {
      const current = this._activeItems[i];
      if (current !== item) {
        const {
          x,
          y
        } = current.getRootElement().getBoundingClientRect();
        const distance = Math.hypot(pointerX - x, pointerY - y);
        if (distance < minDistance) {
          minDistance = distance;
          minIndex = i;
        }
      }
    }
    return minIndex;
  }
}
const DROP_PROXIMITY_THRESHOLD = 0.05;
const SCROLL_PROXIMITY_THRESHOLD = 0.05;
var AutoScrollVerticalDirection = /*#__PURE__*/function (AutoScrollVerticalDirection) {
  AutoScrollVerticalDirection[AutoScrollVerticalDirection["NONE"] = 0] = "NONE";
  AutoScrollVerticalDirection[AutoScrollVerticalDirection["UP"] = 1] = "UP";
  AutoScrollVerticalDirection[AutoScrollVerticalDirection["DOWN"] = 2] = "DOWN";
  return AutoScrollVerticalDirection;
}(AutoScrollVerticalDirection || {});
var AutoScrollHorizontalDirection = /*#__PURE__*/function (AutoScrollHorizontalDirection) {
  AutoScrollHorizontalDirection[AutoScrollHorizontalDirection["NONE"] = 0] = "NONE";
  AutoScrollHorizontalDirection[AutoScrollHorizontalDirection["LEFT"] = 1] = "LEFT";
  AutoScrollHorizontalDirection[AutoScrollHorizontalDirection["RIGHT"] = 2] = "RIGHT";
  return AutoScrollHorizontalDirection;
}(AutoScrollHorizontalDirection || {});
function createDropListRef(injector, element) {
  return new DropListRef(element, injector.get(DragDropRegistry), injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT), injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), injector.get(_scrolling_mjs__WEBPACK_IMPORTED_MODULE_5__.ViewportRuler));
}
class DropListRef {
  _dragDropRegistry;
  _ngZone;
  _viewportRuler;
  element;
  disabled = false;
  sortingDisabled = false;
  lockAxis = null;
  autoScrollDisabled = false;
  autoScrollStep = 2;
  hasAnchor = false;
  enterPredicate = () => true;
  sortPredicate = () => true;
  beforeStarted = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  entered = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  exited = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  dropped = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  sorted = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  receivingStarted = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  receivingStopped = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  data;
  _container;
  _isDragging = false;
  _parentPositions;
  _sortStrategy;
  _domRect;
  _draggables = [];
  _siblings = [];
  _activeSiblings = /*#__PURE__*/new Set();
  _viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
  _verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  _horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  _scrollNode;
  _stopScrollTimers = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  _cachedShadowRoot = null;
  _document;
  _scrollableElements = [];
  _initialScrollSnap;
  _direction = 'ltr';
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    const coercedElement = this.element = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.coerceElement)(element);
    this._document = _document;
    this.withOrientation('vertical').withElementContainer(coercedElement);
    _dragDropRegistry.registerDropContainer(this);
    this._parentPositions = new ParentPositionTracker(_document);
  }
  dispose() {
    this._stopScrolling();
    this._stopScrollTimers.complete();
    this._viewportScrollSubscription.unsubscribe();
    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();
    this.receivingStarted.complete();
    this.receivingStopped.complete();
    this._activeSiblings.clear();
    this._scrollNode = null;
    this._parentPositions.clear();
    this._dragDropRegistry.removeDropContainer(this);
  }
  isDragging() {
    return this._isDragging;
  }
  start() {
    this._draggingStarted();
    this._notifyReceivingSiblings();
  }
  enter(item, pointerX, pointerY, index) {
    this._draggingStarted();
    if (index == null && this.sortingDisabled) {
      index = this._draggables.indexOf(item);
    }
    this._sortStrategy.enter(item, pointerX, pointerY, index);
    this._cacheParentPositions();
    this._notifyReceivingSiblings();
    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  exit(item) {
    this._reset();
    this.exited.next({
      item,
      container: this
    });
  }
  drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint, event = {}) {
    this._reset();
    this.dropped.next({
      item,
      currentIndex,
      previousIndex,
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance,
      dropPoint,
      event
    });
  }
  withItems(items) {
    const previousItems = this._draggables;
    this._draggables = items;
    items.forEach(item => item._withDropContainer(this));
    if (this.isDragging()) {
      const draggedItems = previousItems.filter(item => item.isDragging());
      if (draggedItems.every(item => items.indexOf(item) === -1)) {
        this._reset();
      } else {
        this._sortStrategy.withItems(this._draggables);
      }
    }
    return this;
  }
  withDirection(direction) {
    this._direction = direction;
    if (this._sortStrategy instanceof SingleAxisSortStrategy) {
      this._sortStrategy.direction = direction;
    }
    return this;
  }
  connectedTo(connectedTo) {
    this._siblings = connectedTo.slice();
    return this;
  }
  withOrientation(orientation) {
    if (orientation === 'mixed') {
      this._sortStrategy = new MixedSortStrategy(this._document, this._dragDropRegistry);
    } else {
      const strategy = new SingleAxisSortStrategy(this._dragDropRegistry);
      strategy.direction = this._direction;
      strategy.orientation = orientation;
      this._sortStrategy = strategy;
    }
    this._sortStrategy.withElementContainer(this._container);
    this._sortStrategy.withSortPredicate((index, item) => this.sortPredicate(index, item, this));
    return this;
  }
  withScrollableParents(elements) {
    const element = this._container;
    this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
    return this;
  }
  withElementContainer(container) {
    if (container === this._container) {
      return this;
    }
    const element = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.coerceElement)(this.element);
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && container !== element && !element.contains(container)) {
      throw new Error('Invalid DOM structure for drop list. Alternate container element must be a descendant of the drop list.');
    }
    const oldContainerIndex = this._scrollableElements.indexOf(this._container);
    const newContainerIndex = this._scrollableElements.indexOf(container);
    if (oldContainerIndex > -1) {
      this._scrollableElements.splice(oldContainerIndex, 1);
    }
    if (newContainerIndex > -1) {
      this._scrollableElements.splice(newContainerIndex, 1);
    }
    if (this._sortStrategy) {
      this._sortStrategy.withElementContainer(container);
    }
    this._cachedShadowRoot = null;
    this._scrollableElements.unshift(container);
    this._container = container;
    return this;
  }
  getScrollableParents() {
    return this._scrollableElements;
  }
  getItemIndex(item) {
    return this._isDragging ? this._sortStrategy.getItemIndex(item) : this._draggables.indexOf(item);
  }
  getItemAtIndex(index) {
    return this._isDragging ? this._sortStrategy.getItemAtIndex(index) : this._draggables[index] || null;
  }
  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  _sortItem(item, pointerX, pointerY, pointerDelta) {
    if (this.sortingDisabled || !this._domRect || !isPointerNearDomRect(this._domRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
      return;
    }
    const result = this._sortStrategy.sort(item, pointerX, pointerY, pointerDelta);
    if (result) {
      this.sorted.next({
        previousIndex: result.previousIndex,
        currentIndex: result.currentIndex,
        container: this,
        item
      });
    }
  }
  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }
    let scrollNode;
    let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    this._parentPositions.positions.forEach((position, element) => {
      if (element === this._document || !position.clientRect || scrollNode) {
        return;
      }
      if (isPointerNearDomRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, this._direction, pointerX, pointerY);
        if (verticalScrollDirection || horizontalScrollDirection) {
          scrollNode = element;
        }
      }
    });
    if (!verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();
      const domRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(domRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(domRect, pointerX);
      scrollNode = window;
    }
    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;
      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        this._ngZone.runOutsideAngular(this._startScrollInterval);
      } else {
        this._stopScrolling();
      }
    }
  }
  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  _draggingStarted() {
    const styles = this._container.style;
    this.beforeStarted.next();
    this._isDragging = true;
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && this._container !== (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.coerceElement)(this.element)) {
      for (const drag of this._draggables) {
        if (!drag.isDragging() && drag.getVisibleElement().parentNode !== this._container) {
          throw new Error('Invalid DOM structure for drop list. All items must be placed directly inside of the element container.');
        }
      }
    }
    this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || '';
    styles.scrollSnapType = styles.msScrollSnapType = 'none';
    this._sortStrategy.start(this._draggables);
    this._cacheParentPositions();
    this._viewportScrollSubscription.unsubscribe();
    this._listenToScrollEvents();
  }
  _cacheParentPositions() {
    this._parentPositions.cache(this._scrollableElements);
    this._domRect = this._parentPositions.positions.get(this._container).clientRect;
  }
  _reset() {
    this._isDragging = false;
    const styles = this._container.style;
    styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
    this._siblings.forEach(sibling => sibling._stopReceiving(this));
    this._sortStrategy.reset();
    this._stopScrolling();
    this._viewportScrollSubscription.unsubscribe();
    this._parentPositions.clear();
  }
  _startScrollInterval = () => {
    this._stopScrolling();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(0, rxjs__WEBPACK_IMPORTED_MODULE_1__.animationFrameScheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._stopScrollTimers)).subscribe(() => {
      const node = this._scrollNode;
      const scrollStep = this.autoScrollStep;
      if (this._verticalScrollDirection === AutoScrollVerticalDirection.UP) {
        node.scrollBy(0, -scrollStep);
      } else if (this._verticalScrollDirection === AutoScrollVerticalDirection.DOWN) {
        node.scrollBy(0, scrollStep);
      }
      if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.LEFT) {
        node.scrollBy(-scrollStep, 0);
      } else if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.RIGHT) {
        node.scrollBy(scrollStep, 0);
      }
    });
  };
  _isOverContainer(x, y) {
    return this._domRect != null && isInsideClientRect(this._domRect, x, y);
  }
  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find(sibling => sibling._canReceive(item, x, y));
  }
  _canReceive(item, x, y) {
    if (!this._domRect || !isInsideClientRect(this._domRect, x, y) || !this.enterPredicate(item, this)) {
      return false;
    }
    const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
    if (!elementFromPoint) {
      return false;
    }
    return elementFromPoint === this._container || this._container.contains(elementFromPoint);
  }
  _startReceiving(sibling, items) {
    const activeSiblings = this._activeSiblings;
    if (!activeSiblings.has(sibling) && items.every(item => {
      return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
    })) {
      activeSiblings.add(sibling);
      this._cacheParentPositions();
      this._listenToScrollEvents();
      this.receivingStarted.next({
        initiator: sibling,
        receiver: this,
        items
      });
    }
  }
  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);
    this._viewportScrollSubscription.unsubscribe();
    this.receivingStopped.next({
      initiator: sibling,
      receiver: this
    });
  }
  _listenToScrollEvents() {
    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(event => {
      if (this.isDragging()) {
        const scrollDifference = this._parentPositions.handleScroll(event);
        if (scrollDifference) {
          this._sortStrategy.updateOnScroll(scrollDifference.top, scrollDifference.left);
        }
      } else if (this.isReceiving()) {
        this._cacheParentPositions();
      }
    });
  }
  _getShadowRoot() {
    if (!this._cachedShadowRoot) {
      const shadowRoot = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__._getShadowRoot)(this._container);
      this._cachedShadowRoot = shadowRoot || this._document;
    }
    return this._cachedShadowRoot;
  }
  _notifyReceivingSiblings() {
    const draggedItems = this._sortStrategy.getActiveItemsSnapshot().filter(item => item.isDragging());
    this._siblings.forEach(sibling => sibling._startReceiving(this, draggedItems));
  }
}
function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return AutoScrollVerticalDirection.UP;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return AutoScrollVerticalDirection.DOWN;
  }
  return AutoScrollVerticalDirection.NONE;
}
function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return AutoScrollHorizontalDirection.LEFT;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return AutoScrollHorizontalDirection.RIGHT;
  }
  return AutoScrollHorizontalDirection.NONE;
}
function getElementScrollDirections(element, clientRect, direction, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  if (computedVertical) {
    const scrollTop = element.scrollTop;
    if (computedVertical === AutoScrollVerticalDirection.UP) {
      if (scrollTop > 0) {
        verticalScrollDirection = AutoScrollVerticalDirection.UP;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = AutoScrollVerticalDirection.DOWN;
    }
  }
  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;
    if (direction === 'rtl') {
      if (computedHorizontal === AutoScrollHorizontalDirection.RIGHT) {
        if (scrollLeft < 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
        }
      } else if (element.scrollWidth + scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
      }
    } else {
      if (computedHorizontal === AutoScrollHorizontalDirection.LEFT) {
        if (scrollLeft > 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
        }
      } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
      }
    }
  }
  return [verticalScrollDirection, horizontalScrollDirection];
}
let DragDrop = /*#__PURE__*/(() => {
  class DragDrop {
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    constructor() {}
    createDrag(element, config) {
      return createDragRef(this._injector, element, config);
    }
    createDropList(element) {
      return createDropListRef(this._injector, element);
    }
    static ɵfac = function DragDrop_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DragDrop)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DragDrop,
      factory: DragDrop.ɵfac,
      providedIn: 'root'
    });
  }
  return DragDrop;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const CDK_DRAG_PARENT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CDK_DRAG_PARENT');
function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. ` + `Currently attached to "${node.nodeName}".`);
  }
}
const CDK_DRAG_HANDLE = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CdkDragHandle');
let CdkDragHandle = /*#__PURE__*/(() => {
  class CdkDragHandle {
    element = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _parentDrag = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_DRAG_PARENT, {
      optional: true,
      skipSelf: true
    });
    _dragDropRegistry = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(DragDropRegistry);
    _stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
      this._stateChanges.next(this);
    }
    _disabled = false;
    constructor() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        assertElementNode(this.element.nativeElement, 'cdkDragHandle');
      }
      this._parentDrag?._addHandle(this);
    }
    ngAfterViewInit() {
      if (!this._parentDrag) {
        let parent = this.element.nativeElement.parentElement;
        while (parent) {
          const ref = this._dragDropRegistry.getDragDirectiveForNode(parent);
          if (ref) {
            this._parentDrag = ref;
            ref._addHandle(this);
            break;
          }
          parent = parent.parentElement;
        }
      }
    }
    ngOnDestroy() {
      this._parentDrag?._removeHandle(this);
      this._stateChanges.complete();
    }
    static ɵfac = function CdkDragHandle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkDragHandle)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkDragHandle,
      selectors: [["", "cdkDragHandle", ""]],
      hostAttrs: [1, "cdk-drag-handle"],
      inputs: {
        disabled: [2, "cdkDragHandleDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CDK_DRAG_HANDLE,
        useExisting: CdkDragHandle
      }])]
    });
  }
  return CdkDragHandle;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const CDK_DRAG_CONFIG = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CDK_DRAG_CONFIG');
const CDK_DROP_LIST = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CdkDropList');
let CdkDrag = /*#__PURE__*/(() => {
  class CdkDrag {
    element = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    dropContainer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_DROP_LIST, {
      optional: true,
      skipSelf: true
    });
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    _dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.Directionality, {
      optional: true
    });
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    _selfHandle = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_DRAG_HANDLE, {
      optional: true,
      self: true
    });
    _parentDrag = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_DRAG_PARENT, {
      optional: true,
      skipSelf: true
    });
    _dragDropRegistry = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(DragDropRegistry);
    _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    _handles = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    _previewTemplate = null;
    _placeholderTemplate = null;
    _dragRef;
    data;
    lockAxis = null;
    rootElementSelector;
    boundaryElement;
    dragStartDelay;
    freeDragPosition;
    get disabled() {
      return this._disabled || !!(this.dropContainer && this.dropContainer.disabled);
    }
    set disabled(value) {
      this._disabled = value;
      this._dragRef.disabled = this._disabled;
    }
    _disabled = false;
    constrainPosition;
    previewClass;
    previewContainer;
    scale = 1;
    started = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    released = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    ended = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    moved = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      const subscription = this._dragRef.moved.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(movedEvent => ({
        source: this,
        pointerPosition: movedEvent.pointerPosition,
        event: movedEvent.event,
        delta: movedEvent.delta,
        distance: movedEvent.distance
      }))).subscribe(observer);
      return () => {
        subscription.unsubscribe();
      };
    });
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    constructor() {
      const dropContainer = this.dropContainer;
      const config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_DRAG_CONFIG, {
        optional: true
      });
      this._dragRef = createDragRef(this._injector, this.element, {
        dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
        pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
        zIndex: config?.zIndex
      });
      this._dragRef.data = this;
      this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement, this);
      if (config) {
        this._assignDefaults(config);
      }
      if (dropContainer) {
        dropContainer.addItem(this);
        dropContainer._dropListRef.beforeStarted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(() => {
          this._dragRef.scale = this.scale;
        });
      }
      this._syncInputs(this._dragRef);
      this._handleEvents(this._dragRef);
    }
    getPlaceholderElement() {
      return this._dragRef.getPlaceholderElement();
    }
    getRootElement() {
      return this._dragRef.getRootElement();
    }
    reset() {
      this._dragRef.reset();
    }
    resetToBoundary() {
      this._dragRef.resetToBoundary();
    }
    getFreeDragPosition() {
      return this._dragRef.getFreeDragPosition();
    }
    setFreeDragPosition(value) {
      this._dragRef.setFreeDragPosition(value);
    }
    ngAfterViewInit() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
        this._updateRootElement();
        this._setupHandlesListener();
        this._dragRef.scale = this.scale;
        if (this.freeDragPosition) {
          this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
      }, {
        injector: this._injector
      });
    }
    ngOnChanges(changes) {
      const rootSelectorChange = changes['rootElementSelector'];
      const positionChange = changes['freeDragPosition'];
      if (rootSelectorChange && !rootSelectorChange.firstChange) {
        this._updateRootElement();
      }
      this._dragRef.scale = this.scale;
      if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
        this._dragRef.setFreeDragPosition(this.freeDragPosition);
      }
    }
    ngOnDestroy() {
      if (this.dropContainer) {
        this.dropContainer.removeItem(this);
      }
      this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement);
      this._ngZone.runOutsideAngular(() => {
        this._handles.complete();
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
      });
    }
    _addHandle(handle) {
      const handles = this._handles.getValue();
      handles.push(handle);
      this._handles.next(handles);
    }
    _removeHandle(handle) {
      const handles = this._handles.getValue();
      const index = handles.indexOf(handle);
      if (index > -1) {
        handles.splice(index, 1);
        this._handles.next(handles);
      }
    }
    _setPreviewTemplate(preview) {
      this._previewTemplate = preview;
    }
    _resetPreviewTemplate(preview) {
      if (preview === this._previewTemplate) {
        this._previewTemplate = null;
      }
    }
    _setPlaceholderTemplate(placeholder) {
      this._placeholderTemplate = placeholder;
    }
    _resetPlaceholderTemplate(placeholder) {
      if (placeholder === this._placeholderTemplate) {
        this._placeholderTemplate = null;
      }
    }
    _updateRootElement() {
      const element = this.element.nativeElement;
      let rootElement = element;
      if (this.rootElementSelector) {
        rootElement = element.closest !== undefined ? element.closest(this.rootElementSelector) : element.parentElement?.closest(this.rootElementSelector);
      }
      if (rootElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        assertElementNode(rootElement, 'cdkDrag');
      }
      this._dragRef.withRootElement(rootElement || element);
    }
    _getBoundaryElement() {
      const boundary = this.boundaryElement;
      if (!boundary) {
        return null;
      }
      if (typeof boundary === 'string') {
        return this.element.nativeElement.closest(boundary);
      }
      return (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.coerceElement)(boundary);
    }
    _syncInputs(ref) {
      ref.beforeStarted.subscribe(() => {
        if (!ref.isDragging()) {
          const dir = this._dir;
          const dragStartDelay = this.dragStartDelay;
          const placeholder = this._placeholderTemplate ? {
            template: this._placeholderTemplate.templateRef,
            context: this._placeholderTemplate.data,
            viewContainer: this._viewContainerRef
          } : null;
          const preview = this._previewTemplate ? {
            template: this._previewTemplate.templateRef,
            context: this._previewTemplate.data,
            matchSize: this._previewTemplate.matchSize,
            viewContainer: this._viewContainerRef
          } : null;
          ref.disabled = this.disabled;
          ref.lockAxis = this.lockAxis;
          ref.scale = this.scale;
          ref.dragStartDelay = typeof dragStartDelay === 'object' && dragStartDelay ? dragStartDelay : (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.coerceNumberProperty)(dragStartDelay);
          ref.constrainPosition = this.constrainPosition;
          ref.previewClass = this.previewClass;
          ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || 'global');
          if (dir) {
            ref.withDirection(dir.value);
          }
        }
      });
      ref.beforeStarted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(() => {
        if (this._parentDrag) {
          ref.withParent(this._parentDrag._dragRef);
          return;
        }
        let parent = this.element.nativeElement.parentElement;
        while (parent) {
          const parentDrag = this._dragDropRegistry.getDragDirectiveForNode(parent);
          if (parentDrag) {
            ref.withParent(parentDrag._dragRef);
            break;
          }
          parent = parent.parentElement;
        }
      });
    }
    _handleEvents(ref) {
      ref.started.subscribe(startEvent => {
        this.started.emit({
          source: this,
          event: startEvent.event
        });
        this._changeDetectorRef.markForCheck();
      });
      ref.released.subscribe(releaseEvent => {
        this.released.emit({
          source: this,
          event: releaseEvent.event
        });
      });
      ref.ended.subscribe(endEvent => {
        this.ended.emit({
          source: this,
          distance: endEvent.distance,
          dropPoint: endEvent.dropPoint,
          event: endEvent.event
        });
        this._changeDetectorRef.markForCheck();
      });
      ref.entered.subscribe(enterEvent => {
        this.entered.emit({
          container: enterEvent.container.data,
          item: this,
          currentIndex: enterEvent.currentIndex
        });
      });
      ref.exited.subscribe(exitEvent => {
        this.exited.emit({
          container: exitEvent.container.data,
          item: this
        });
      });
      ref.dropped.subscribe(dropEvent => {
        this.dropped.emit({
          previousIndex: dropEvent.previousIndex,
          currentIndex: dropEvent.currentIndex,
          previousContainer: dropEvent.previousContainer.data,
          container: dropEvent.container.data,
          isPointerOverContainer: dropEvent.isPointerOverContainer,
          item: this,
          distance: dropEvent.distance,
          dropPoint: dropEvent.dropPoint,
          event: dropEvent.event
        });
      });
    }
    _assignDefaults(config) {
      const {
        lockAxis,
        dragStartDelay,
        constrainPosition,
        previewClass,
        boundaryElement,
        draggingDisabled,
        rootElementSelector,
        previewContainer
      } = config;
      this.disabled = draggingDisabled == null ? false : draggingDisabled;
      this.dragStartDelay = dragStartDelay || 0;
      this.lockAxis = lockAxis || null;
      if (constrainPosition) {
        this.constrainPosition = constrainPosition;
      }
      if (previewClass) {
        this.previewClass = previewClass;
      }
      if (boundaryElement) {
        this.boundaryElement = boundaryElement;
      }
      if (rootElementSelector) {
        this.rootElementSelector = rootElementSelector;
      }
      if (previewContainer) {
        this.previewContainer = previewContainer;
      }
    }
    _setupHandlesListener() {
      this._handles.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(handles => {
        const handleElements = handles.map(handle => handle.element);
        if (this._selfHandle && this.rootElementSelector) {
          handleElements.push(this.element);
        }
        this._dragRef.withHandles(handleElements);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(handles => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.merge)(...handles.map(item => item._stateChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(item))));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(handleInstance => {
        const dragRef = this._dragRef;
        const handle = handleInstance.element.nativeElement;
        handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
      });
    }
    static ɵfac = function CdkDrag_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkDrag)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkDrag,
      selectors: [["", "cdkDrag", ""]],
      hostAttrs: [1, "cdk-drag"],
      hostVars: 4,
      hostBindings: function CdkDrag_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
        }
      },
      inputs: {
        data: [0, "cdkDragData", "data"],
        lockAxis: [0, "cdkDragLockAxis", "lockAxis"],
        rootElementSelector: [0, "cdkDragRootElement", "rootElementSelector"],
        boundaryElement: [0, "cdkDragBoundary", "boundaryElement"],
        dragStartDelay: [0, "cdkDragStartDelay", "dragStartDelay"],
        freeDragPosition: [0, "cdkDragFreeDragPosition", "freeDragPosition"],
        disabled: [2, "cdkDragDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        constrainPosition: [0, "cdkDragConstrainPosition", "constrainPosition"],
        previewClass: [0, "cdkDragPreviewClass", "previewClass"],
        previewContainer: [0, "cdkDragPreviewContainer", "previewContainer"],
        scale: [2, "cdkDragScale", "scale", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute]
      },
      outputs: {
        started: "cdkDragStarted",
        released: "cdkDragReleased",
        ended: "cdkDragEnded",
        entered: "cdkDragEntered",
        exited: "cdkDragExited",
        dropped: "cdkDragDropped",
        moved: "cdkDragMoved"
      },
      exportAs: ["cdkDrag"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
  return CdkDrag;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const CDK_DROP_LIST_GROUP = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CdkDropListGroup');
let CdkDropListGroup = /*#__PURE__*/(() => {
  class CdkDropListGroup {
    _items = new Set();
    disabled = false;
    ngOnDestroy() {
      this._items.clear();
    }
    static ɵfac = function CdkDropListGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkDropListGroup)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkDropListGroup,
      selectors: [["", "cdkDropListGroup", ""]],
      inputs: {
        disabled: [2, "cdkDropListGroupDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      exportAs: ["cdkDropListGroup"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: CdkDropListGroup
      }])]
    });
  }
  return CdkDropListGroup;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CdkDropList = /*#__PURE__*/(() => {
  class CdkDropList {
    element = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    _scrollDispatcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_scrolling_mjs__WEBPACK_IMPORTED_MODULE_5__.ScrollDispatcher);
    _dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.Directionality, {
      optional: true
    });
    _group = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_DROP_LIST_GROUP, {
      optional: true,
      skipSelf: true
    });
    _latestSortedRefs;
    _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    _scrollableParentsResolved = false;
    static _dropLists = [];
    _dropListRef;
    connectedTo = [];
    data;
    orientation = 'vertical';
    id = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_id_generator_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__._IdGenerator).getId('cdk-drop-list-');
    lockAxis = null;
    get disabled() {
      return this._disabled || !!this._group && this._group.disabled;
    }
    set disabled(value) {
      this._dropListRef.disabled = this._disabled = value;
    }
    _disabled = false;
    sortingDisabled = false;
    enterPredicate = () => true;
    sortPredicate = () => true;
    autoScrollDisabled = false;
    autoScrollStep;
    elementContainerSelector = null;
    hasAnchor = false;
    dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    _unsortedItems = new Set();
    constructor() {
      const config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_DRAG_CONFIG, {
        optional: true
      });
      const injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        assertElementNode(this.element.nativeElement, 'cdkDropList');
      }
      this._dropListRef = createDropListRef(injector, this.element);
      this._dropListRef.data = this;
      if (config) {
        this._assignDefaults(config);
      }
      this._dropListRef.enterPredicate = (drag, drop) => {
        return this.enterPredicate(drag.data, drop.data);
      };
      this._dropListRef.sortPredicate = (index, drag, drop) => {
        return this.sortPredicate(index, drag.data, drop.data);
      };
      this._setupInputSyncSubscription(this._dropListRef);
      this._handleEvents(this._dropListRef);
      CdkDropList._dropLists.push(this);
      if (this._group) {
        this._group._items.add(this);
      }
    }
    addItem(item) {
      this._unsortedItems.add(item);
      item._dragRef._withDropContainer(this._dropListRef);
      if (this._dropListRef.isDragging()) {
        this._syncItemsWithRef(this.getSortedItems().map(item => item._dragRef));
      }
    }
    removeItem(item) {
      this._unsortedItems.delete(item);
      if (this._latestSortedRefs) {
        const index = this._latestSortedRefs.indexOf(item._dragRef);
        if (index > -1) {
          this._latestSortedRefs.splice(index, 1);
          this._syncItemsWithRef(this._latestSortedRefs);
        }
      }
    }
    getSortedItems() {
      return Array.from(this._unsortedItems).sort((a, b) => {
        const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
        return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      });
    }
    ngOnDestroy() {
      const index = CdkDropList._dropLists.indexOf(this);
      if (index > -1) {
        CdkDropList._dropLists.splice(index, 1);
      }
      if (this._group) {
        this._group._items.delete(this);
      }
      this._latestSortedRefs = undefined;
      this._unsortedItems.clear();
      this._dropListRef.dispose();
      this._destroyed.next();
      this._destroyed.complete();
    }
    _setupInputSyncSubscription(ref) {
      if (this._dir) {
        this._dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this._dir.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(value => ref.withDirection(value));
      }
      ref.beforeStarted.subscribe(() => {
        const siblings = (0,_array_chunk_mjs__WEBPACK_IMPORTED_MODULE_10__.coerceArray)(this.connectedTo).map(drop => {
          if (typeof drop === 'string') {
            const correspondingDropList = CdkDropList._dropLists.find(list => list.id === drop);
            if (!correspondingDropList && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
            }
            return correspondingDropList;
          }
          return drop;
        });
        if (this._group) {
          this._group._items.forEach(drop => {
            if (siblings.indexOf(drop) === -1) {
              siblings.push(drop);
            }
          });
        }
        if (!this._scrollableParentsResolved) {
          const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map(scrollable => scrollable.getElementRef().nativeElement);
          this._dropListRef.withScrollableParents(scrollableParents);
          this._scrollableParentsResolved = true;
        }
        if (this.elementContainerSelector) {
          const container = this.element.nativeElement.querySelector(this.elementContainerSelector);
          if (!container && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw new Error(`CdkDropList could not find an element container matching the selector "${this.elementContainerSelector}"`);
          }
          ref.withElementContainer(container);
        }
        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.sortingDisabled = this.sortingDisabled;
        ref.autoScrollDisabled = this.autoScrollDisabled;
        ref.autoScrollStep = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__.coerceNumberProperty)(this.autoScrollStep, 2);
        ref.hasAnchor = this.hasAnchor;
        ref.connectedTo(siblings.filter(drop => drop && drop !== this).map(list => list._dropListRef)).withOrientation(this.orientation);
      });
    }
    _handleEvents(ref) {
      ref.beforeStarted.subscribe(() => {
        this._syncItemsWithRef(this.getSortedItems().map(item => item._dragRef));
        this._changeDetectorRef.markForCheck();
      });
      ref.entered.subscribe(event => {
        this.entered.emit({
          container: this,
          item: event.item.data,
          currentIndex: event.currentIndex
        });
      });
      ref.exited.subscribe(event => {
        this.exited.emit({
          container: this,
          item: event.item.data
        });
        this._changeDetectorRef.markForCheck();
      });
      ref.sorted.subscribe(event => {
        this.sorted.emit({
          previousIndex: event.previousIndex,
          currentIndex: event.currentIndex,
          container: this,
          item: event.item.data
        });
      });
      ref.dropped.subscribe(dropEvent => {
        this.dropped.emit({
          previousIndex: dropEvent.previousIndex,
          currentIndex: dropEvent.currentIndex,
          previousContainer: dropEvent.previousContainer.data,
          container: dropEvent.container.data,
          item: dropEvent.item.data,
          isPointerOverContainer: dropEvent.isPointerOverContainer,
          distance: dropEvent.distance,
          dropPoint: dropEvent.dropPoint,
          event: dropEvent.event
        });
        this._changeDetectorRef.markForCheck();
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.merge)(ref.receivingStarted, ref.receivingStopped).subscribe(() => this._changeDetectorRef.markForCheck());
    }
    _assignDefaults(config) {
      const {
        lockAxis,
        draggingDisabled,
        sortingDisabled,
        listAutoScrollDisabled,
        listOrientation
      } = config;
      this.disabled = draggingDisabled == null ? false : draggingDisabled;
      this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
      this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
      this.orientation = listOrientation || 'vertical';
      this.lockAxis = lockAxis || null;
    }
    _syncItemsWithRef(items) {
      this._latestSortedRefs = items;
      this._dropListRef.withItems(items);
    }
    static ɵfac = function CdkDropList_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkDropList)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkDropList,
      selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
      hostAttrs: [1, "cdk-drop-list"],
      hostVars: 7,
      hostBindings: function CdkDropList_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
        }
      },
      inputs: {
        connectedTo: [0, "cdkDropListConnectedTo", "connectedTo"],
        data: [0, "cdkDropListData", "data"],
        orientation: [0, "cdkDropListOrientation", "orientation"],
        id: "id",
        lockAxis: [0, "cdkDropListLockAxis", "lockAxis"],
        disabled: [2, "cdkDropListDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        sortingDisabled: [2, "cdkDropListSortingDisabled", "sortingDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        enterPredicate: [0, "cdkDropListEnterPredicate", "enterPredicate"],
        sortPredicate: [0, "cdkDropListSortPredicate", "sortPredicate"],
        autoScrollDisabled: [2, "cdkDropListAutoScrollDisabled", "autoScrollDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        autoScrollStep: [0, "cdkDropListAutoScrollStep", "autoScrollStep"],
        elementContainerSelector: [0, "cdkDropListElementContainer", "elementContainerSelector"],
        hasAnchor: [2, "cdkDropListHasAnchor", "hasAnchor", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      outputs: {
        dropped: "cdkDropListDropped",
        entered: "cdkDropListEntered",
        exited: "cdkDropListExited",
        sorted: "cdkDropListSorted"
      },
      exportAs: ["cdkDropList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CDK_DROP_LIST_GROUP,
        useValue: undefined
      }, {
        provide: CDK_DROP_LIST,
        useExisting: CdkDropList
      }])]
    });
  }
  return CdkDropList;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const CDK_DRAG_PREVIEW = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CdkDragPreview');
let CdkDragPreview = /*#__PURE__*/(() => {
  class CdkDragPreview {
    templateRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    _drag = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_DRAG_PARENT, {
      optional: true
    });
    data;
    matchSize = false;
    constructor() {
      this._drag?._setPreviewTemplate(this);
    }
    ngOnDestroy() {
      this._drag?._resetPreviewTemplate(this);
    }
    static ɵfac = function CdkDragPreview_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkDragPreview)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkDragPreview,
      selectors: [["ng-template", "cdkDragPreview", ""]],
      inputs: {
        data: "data",
        matchSize: [2, "matchSize", "matchSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CDK_DRAG_PREVIEW,
        useExisting: CdkDragPreview
      }])]
    });
  }
  return CdkDragPreview;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const CDK_DRAG_PLACEHOLDER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CdkDragPlaceholder');
let CdkDragPlaceholder = /*#__PURE__*/(() => {
  class CdkDragPlaceholder {
    templateRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    _drag = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_DRAG_PARENT, {
      optional: true
    });
    data;
    constructor() {
      this._drag?._setPlaceholderTemplate(this);
    }
    ngOnDestroy() {
      this._drag?._resetPlaceholderTemplate(this);
    }
    static ɵfac = function CdkDragPlaceholder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkDragPlaceholder)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkDragPlaceholder,
      selectors: [["ng-template", "cdkDragPlaceholder", ""]],
      inputs: {
        data: "data"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: CdkDragPlaceholder
      }])]
    });
  }
  return CdkDragPlaceholder;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const DRAG_DROP_DIRECTIVES = [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
let DragDropModule = /*#__PURE__*/(() => {
  class DragDropModule {
    static ɵfac = function DragDropModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DragDropModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DragDropModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      providers: [DragDrop],
      imports: [_scrolling_mjs__WEBPACK_IMPORTED_MODULE_5__.CdkScrollableModule]
    });
  }
  return DragDropModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


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

/***/ 61440
/*!*************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_array-chunk.mjs ***!
  \*************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coerceArray: () => (/* binding */ coerceArray)
/* harmony export */ });
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}


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

/***/ 68310
/*!******************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_shadow-dom-chunk.mjs ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _getEventTarget: () => (/* binding */ _getEventTarget),
/* harmony export */   _getFocusedElementPierceShadowDom: () => (/* binding */ _getFocusedElementPierceShadowDom),
/* harmony export */   _getShadowRoot: () => (/* binding */ _getShadowRoot),
/* harmony export */   _supportsShadowDom: () => (/* binding */ _supportsShadowDom)
/* harmony export */ });
let shadowDomIsSupported;
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== 'undefined' ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== 'undefined' && document ? document.activeElement : null;
  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }
  return activeElement;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}


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

/***/ 90603
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_fake-event-detection-chunk.mjs ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFakeMousedownFromScreenReader: () => (/* binding */ isFakeMousedownFromScreenReader),
/* harmony export */   isFakeTouchstartFromScreenReader: () => (/* binding */ isFakeTouchstartFromScreenReader)
/* harmony export */ });
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
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
//# sourceMappingURL=854.js.map