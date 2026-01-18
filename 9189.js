(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[9189],{

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

/***/ 9168
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/portal.mjs ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasePortalOutlet: () => (/* binding */ BasePortalOutlet),
/* harmony export */   CdkPortal: () => (/* binding */ CdkPortal),
/* harmony export */   CdkPortalOutlet: () => (/* binding */ CdkPortalOutlet),
/* harmony export */   ComponentPortal: () => (/* binding */ ComponentPortal),
/* harmony export */   DomPortal: () => (/* binding */ DomPortal),
/* harmony export */   DomPortalOutlet: () => (/* binding */ DomPortalOutlet),
/* harmony export */   Portal: () => (/* binding */ Portal),
/* harmony export */   PortalModule: () => (/* binding */ PortalModule),
/* harmony export */   TemplatePortal: () => (/* binding */ TemplatePortal)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);


function throwNullPortalError() {
  throw Error('Must provide a portal to attach');
}
function throwPortalAlreadyAttachedError() {
  throw Error('Host already has a portal attached');
}
function throwPortalOutletAlreadyDisposedError() {
  throw Error('This PortalOutlet has already been disposed');
}
function throwUnknownPortalTypeError() {
  throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' + 'a ComponentPortal or a TemplatePortal.');
}
function throwNullPortalOutletError() {
  throw Error('Attempting to attach a portal to a null PortalOutlet');
}
function throwNoPortalAttachedError() {
  throw Error('Attempting to detach a portal that is not attached to a host');
}
class Portal {
  _attachedHost = null;
  attach(host) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (host == null) {
        throwNullPortalOutletError();
      }
      if (host.hasAttached()) {
        throwPortalAlreadyAttachedError();
      }
    }
    this._attachedHost = host;
    return host.attach(this);
  }
  detach() {
    let host = this._attachedHost;
    if (host != null) {
      this._attachedHost = null;
      host.detach();
    } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
      throwNoPortalAttachedError();
    }
  }
  get isAttached() {
    return this._attachedHost != null;
  }
  setAttachedHost(host) {
    this._attachedHost = host;
  }
}
class ComponentPortal extends Portal {
  component;
  viewContainerRef;
  injector;
  projectableNodes;
  constructor(component, viewContainerRef, injector, projectableNodes) {
    super();
    this.component = component;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.projectableNodes = projectableNodes;
  }
}
class TemplatePortal extends Portal {
  templateRef;
  viewContainerRef;
  context;
  injector;
  constructor(templateRef, viewContainerRef, context, injector) {
    super();
    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
    this.context = context;
    this.injector = injector;
  }
  get origin() {
    return this.templateRef.elementRef;
  }
  attach(host, context = this.context) {
    this.context = context;
    return super.attach(host);
  }
  detach() {
    this.context = undefined;
    return super.detach();
  }
}
class DomPortal extends Portal {
  element;
  constructor(element) {
    super();
    this.element = element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? element.nativeElement : element;
  }
}
class BasePortalOutlet {
  _attachedPortal = null;
  _disposeFn = null;
  _isDisposed = false;
  hasAttached() {
    return !!this._attachedPortal;
  }
  attach(portal) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!portal) {
        throwNullPortalError();
      }
      if (this.hasAttached()) {
        throwPortalAlreadyAttachedError();
      }
      if (this._isDisposed) {
        throwPortalOutletAlreadyDisposedError();
      }
    }
    if (portal instanceof ComponentPortal) {
      this._attachedPortal = portal;
      return this.attachComponentPortal(portal);
    } else if (portal instanceof TemplatePortal) {
      this._attachedPortal = portal;
      return this.attachTemplatePortal(portal);
    } else if (this.attachDomPortal && portal instanceof DomPortal) {
      this._attachedPortal = portal;
      return this.attachDomPortal(portal);
    }
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      throwUnknownPortalTypeError();
    }
  }
  attachDomPortal = null;
  detach() {
    if (this._attachedPortal) {
      this._attachedPortal.setAttachedHost(null);
      this._attachedPortal = null;
    }
    this._invokeDisposeFn();
  }
  dispose() {
    if (this.hasAttached()) {
      this.detach();
    }
    this._invokeDisposeFn();
    this._isDisposed = true;
  }
  setDisposeFn(fn) {
    this._disposeFn = fn;
  }
  _invokeDisposeFn() {
    if (this._disposeFn) {
      this._disposeFn();
      this._disposeFn = null;
    }
  }
}
class DomPortalOutlet extends BasePortalOutlet {
  outletElement;
  _appRef;
  _defaultInjector;
  constructor(outletElement, _appRef, _defaultInjector) {
    super();
    this.outletElement = outletElement;
    this._appRef = _appRef;
    this._defaultInjector = _defaultInjector;
  }
  attachComponentPortal(portal) {
    let componentRef;
    if (portal.viewContainerRef) {
      const injector = portal.injector || portal.viewContainerRef.injector;
      const ngModuleRef = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModuleRef, null, {
        optional: true
      }) || undefined;
      componentRef = portal.viewContainerRef.createComponent(portal.component, {
        index: portal.viewContainerRef.length,
        injector,
        ngModuleRef,
        projectableNodes: portal.projectableNodes || undefined
      });
      this.setDisposeFn(() => componentRef.destroy());
    } else {
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !this._appRef) {
        throw Error('Cannot attach component portal to outlet without an ApplicationRef.');
      }
      const appRef = this._appRef;
      const elementInjector = portal.injector || this._defaultInjector || _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.NULL;
      const environmentInjector = elementInjector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.EnvironmentInjector, appRef.injector);
      componentRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.createComponent)(portal.component, {
        elementInjector,
        environmentInjector,
        projectableNodes: portal.projectableNodes || undefined
      });
      appRef.attachView(componentRef.hostView);
      this.setDisposeFn(() => {
        if (appRef.viewCount > 0) {
          appRef.detachView(componentRef.hostView);
        }
        componentRef.destroy();
      });
    }
    this.outletElement.appendChild(this._getComponentRootNode(componentRef));
    this._attachedPortal = portal;
    return componentRef;
  }
  attachTemplatePortal(portal) {
    let viewContainer = portal.viewContainerRef;
    let viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context, {
      injector: portal.injector
    });
    viewRef.rootNodes.forEach(rootNode => this.outletElement.appendChild(rootNode));
    viewRef.detectChanges();
    this.setDisposeFn(() => {
      let index = viewContainer.indexOf(viewRef);
      if (index !== -1) {
        viewContainer.remove(index);
      }
    });
    this._attachedPortal = portal;
    return viewRef;
  }
  attachDomPortal = portal => {
    const element = portal.element;
    if (!element.parentNode && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('DOM portal content must be attached to a parent node.');
    }
    const anchorNode = this.outletElement.ownerDocument.createComment('dom-portal');
    element.parentNode.insertBefore(anchorNode, element);
    this.outletElement.appendChild(element);
    this._attachedPortal = portal;
    super.setDisposeFn(() => {
      if (anchorNode.parentNode) {
        anchorNode.parentNode.replaceChild(element, anchorNode);
      }
    });
  };
  dispose() {
    super.dispose();
    this.outletElement.remove();
  }
  _getComponentRootNode(componentRef) {
    return componentRef.hostView.rootNodes[0];
  }
}
let CdkPortal = /*#__PURE__*/(() => {
  class CdkPortal extends TemplatePortal {
    constructor() {
      const templateRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      const viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
      super(templateRef, viewContainerRef);
    }
    static ɵfac = function CdkPortal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkPortal)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkPortal,
      selectors: [["", "cdkPortal", ""]],
      exportAs: ["cdkPortal"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return CdkPortal;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CdkPortalOutlet = /*#__PURE__*/(() => {
  class CdkPortalOutlet extends BasePortalOutlet {
    _moduleRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModuleRef, {
      optional: true
    });
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    _isInitialized = false;
    _attachedRef = null;
    constructor() {
      super();
    }
    get portal() {
      return this._attachedPortal;
    }
    set portal(portal) {
      if (this.hasAttached() && !portal && !this._isInitialized) {
        return;
      }
      if (this.hasAttached()) {
        super.detach();
      }
      if (portal) {
        super.attach(portal);
      }
      this._attachedPortal = portal || null;
    }
    attached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    get attachedRef() {
      return this._attachedRef;
    }
    ngOnInit() {
      this._isInitialized = true;
    }
    ngOnDestroy() {
      super.dispose();
      this._attachedRef = this._attachedPortal = null;
    }
    attachComponentPortal(portal) {
      portal.setAttachedHost(this);
      const viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
      const ref = viewContainerRef.createComponent(portal.component, {
        index: viewContainerRef.length,
        injector: portal.injector || viewContainerRef.injector,
        projectableNodes: portal.projectableNodes || undefined,
        ngModuleRef: this._moduleRef || undefined
      });
      if (viewContainerRef !== this._viewContainerRef) {
        this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
      }
      super.setDisposeFn(() => ref.destroy());
      this._attachedPortal = portal;
      this._attachedRef = ref;
      this.attached.emit(ref);
      return ref;
    }
    attachTemplatePortal(portal) {
      portal.setAttachedHost(this);
      const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context, {
        injector: portal.injector
      });
      super.setDisposeFn(() => this._viewContainerRef.clear());
      this._attachedPortal = portal;
      this._attachedRef = viewRef;
      this.attached.emit(viewRef);
      return viewRef;
    }
    attachDomPortal = portal => {
      const element = portal.element;
      if (!element.parentNode && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('DOM portal content must be attached to a parent node.');
      }
      const anchorNode = this._document.createComment('dom-portal');
      portal.setAttachedHost(this);
      element.parentNode.insertBefore(anchorNode, element);
      this._getRootNode().appendChild(element);
      this._attachedPortal = portal;
      super.setDisposeFn(() => {
        if (anchorNode.parentNode) {
          anchorNode.parentNode.replaceChild(element, anchorNode);
        }
      });
    };
    _getRootNode() {
      const nativeElement = this._viewContainerRef.element.nativeElement;
      return nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement : nativeElement.parentNode;
    }
    static ɵfac = function CdkPortalOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkPortalOutlet)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkPortalOutlet,
      selectors: [["", "cdkPortalOutlet", ""]],
      inputs: {
        portal: [0, "cdkPortalOutlet", "portal"]
      },
      outputs: {
        attached: "attached"
      },
      exportAs: ["cdkPortalOutlet"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return CdkPortalOutlet;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let PortalModule = /*#__PURE__*/(() => {
  class PortalModule {
    static ɵfac = function PortalModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PortalModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PortalModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  }
  return PortalModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


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

/***/ 74879
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/keycodes.mjs ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   ALT: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ALT),
/* harmony export */   APOSTROPHE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.APOSTROPHE),
/* harmony export */   AT_SIGN: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.AT_SIGN),
/* harmony export */   B: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   BACKSLASH: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.BACKSLASH),
/* harmony export */   BACKSPACE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.BACKSPACE),
/* harmony export */   C: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   CAPS_LOCK: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.CAPS_LOCK),
/* harmony export */   CLOSE_SQUARE_BRACKET: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.CLOSE_SQUARE_BRACKET),
/* harmony export */   COMMA: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.COMMA),
/* harmony export */   CONTEXT_MENU: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.CONTEXT_MENU),
/* harmony export */   CONTROL: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.CONTROL),
/* harmony export */   D: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   DASH: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.DASH),
/* harmony export */   DELETE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.DELETE),
/* harmony export */   DOWN_ARROW: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.DOWN_ARROW),
/* harmony export */   E: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   EIGHT: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.EIGHT),
/* harmony export */   END: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.END),
/* harmony export */   ENTER: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ENTER),
/* harmony export */   EQUALS: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.EQUALS),
/* harmony export */   ESCAPE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ESCAPE),
/* harmony export */   F: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   F1: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F1),
/* harmony export */   F10: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F10),
/* harmony export */   F11: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F11),
/* harmony export */   F12: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F12),
/* harmony export */   F2: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F2),
/* harmony export */   F3: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F3),
/* harmony export */   F4: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F4),
/* harmony export */   F5: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F5),
/* harmony export */   F6: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F6),
/* harmony export */   F7: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F7),
/* harmony export */   F8: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F8),
/* harmony export */   F9: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.F9),
/* harmony export */   FF_EQUALS: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FF_EQUALS),
/* harmony export */   FF_MINUS: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FF_MINUS),
/* harmony export */   FF_MUTE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FF_MUTE),
/* harmony export */   FF_SEMICOLON: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FF_SEMICOLON),
/* harmony export */   FF_VOLUME_DOWN: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FF_VOLUME_DOWN),
/* harmony export */   FF_VOLUME_UP: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FF_VOLUME_UP),
/* harmony export */   FIRST_MEDIA: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FIRST_MEDIA),
/* harmony export */   FIVE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FIVE),
/* harmony export */   FOUR: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FOUR),
/* harmony export */   G: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   H: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   HOME: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HOME),
/* harmony export */   I: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   INSERT: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.INSERT),
/* harmony export */   J: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   K: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   L: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   LAST_MEDIA: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.LAST_MEDIA),
/* harmony export */   LEFT_ARROW: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.LEFT_ARROW),
/* harmony export */   M: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   MAC_ENTER: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAC_ENTER),
/* harmony export */   MAC_META: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAC_META),
/* harmony export */   MAC_WK_CMD_LEFT: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAC_WK_CMD_LEFT),
/* harmony export */   MAC_WK_CMD_RIGHT: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAC_WK_CMD_RIGHT),
/* harmony export */   META: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.META),
/* harmony export */   MUTE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MUTE),
/* harmony export */   N: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   NINE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NINE),
/* harmony export */   NUMPAD_DIVIDE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_DIVIDE),
/* harmony export */   NUMPAD_EIGHT: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_EIGHT),
/* harmony export */   NUMPAD_FIVE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_FIVE),
/* harmony export */   NUMPAD_FOUR: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_FOUR),
/* harmony export */   NUMPAD_MINUS: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_MINUS),
/* harmony export */   NUMPAD_MULTIPLY: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_MULTIPLY),
/* harmony export */   NUMPAD_NINE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_NINE),
/* harmony export */   NUMPAD_ONE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_ONE),
/* harmony export */   NUMPAD_PERIOD: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_PERIOD),
/* harmony export */   NUMPAD_PLUS: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_PLUS),
/* harmony export */   NUMPAD_SEVEN: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_SEVEN),
/* harmony export */   NUMPAD_SIX: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_SIX),
/* harmony export */   NUMPAD_THREE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_THREE),
/* harmony export */   NUMPAD_TWO: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_TWO),
/* harmony export */   NUMPAD_ZERO: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_ZERO),
/* harmony export */   NUM_CENTER: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUM_CENTER),
/* harmony export */   NUM_LOCK: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NUM_LOCK),
/* harmony export */   O: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   ONE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ONE),
/* harmony export */   OPEN_SQUARE_BRACKET: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.OPEN_SQUARE_BRACKET),
/* harmony export */   P: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   PAGE_DOWN: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.PAGE_DOWN),
/* harmony export */   PAGE_UP: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.PAGE_UP),
/* harmony export */   PAUSE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.PAUSE),
/* harmony export */   PERIOD: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.PERIOD),
/* harmony export */   PLUS_SIGN: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.PLUS_SIGN),
/* harmony export */   PRINT_SCREEN: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.PRINT_SCREEN),
/* harmony export */   Q: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.Q),
/* harmony export */   QUESTION_MARK: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.QUESTION_MARK),
/* harmony export */   R: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   RIGHT_ARROW: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.RIGHT_ARROW),
/* harmony export */   S: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   SCROLL_LOCK: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SCROLL_LOCK),
/* harmony export */   SEMICOLON: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SEMICOLON),
/* harmony export */   SEVEN: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SEVEN),
/* harmony export */   SHIFT: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SHIFT),
/* harmony export */   SINGLE_QUOTE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SINGLE_QUOTE),
/* harmony export */   SIX: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SIX),
/* harmony export */   SLASH: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SLASH),
/* harmony export */   SPACE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SPACE),
/* harmony export */   T: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.T),
/* harmony export */   TAB: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.TAB),
/* harmony export */   THREE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.THREE),
/* harmony export */   TILDE: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.TILDE),
/* harmony export */   TWO: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.TWO),
/* harmony export */   U: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   UP_ARROW: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.UP_ARROW),
/* harmony export */   V: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   VOLUME_DOWN: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.VOLUME_DOWN),
/* harmony export */   VOLUME_UP: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.VOLUME_UP),
/* harmony export */   W: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   X: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.X),
/* harmony export */   Y: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.Y),
/* harmony export */   Z: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   ZERO: () => (/* reexport safe */ _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ZERO),
/* harmony export */   hasModifierKey: () => (/* binding */ hasModifierKey)
/* harmony export */ });
/* harmony import */ var _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_keycodes-chunk.mjs */ 97552);

function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some(modifier => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}


/***/ },

/***/ 75057
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_css-pixel-value-chunk.mjs ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coerceCssPixelValue: () => (/* binding */ coerceCssPixelValue)
/* harmony export */ });
function coerceCssPixelValue(value) {
  if (value == null) {
    return '';
  }
  return typeof value === 'string' ? value : `${value}px`;
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

/***/ 81570
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/overlay.mjs ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockScrollStrategy: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.BlockScrollStrategy),
/* harmony export */   CDK_CONNECTED_OVERLAY_DEFAULT_CONFIG: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.CDK_CONNECTED_OVERLAY_DEFAULT_CONFIG),
/* harmony export */   CdkConnectedOverlay: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.CdkConnectedOverlay),
/* harmony export */   CdkOverlayOrigin: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.CdkOverlayOrigin),
/* harmony export */   CdkScrollable: () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable),
/* harmony export */   CloseScrollStrategy: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.CloseScrollStrategy),
/* harmony export */   ConnectedOverlayPositionChange: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ConnectedOverlayPositionChange),
/* harmony export */   ConnectionPositionPair: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ConnectionPositionPair),
/* harmony export */   FlexibleConnectedPositionStrategy: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FlexibleConnectedPositionStrategy),
/* harmony export */   FullscreenOverlayContainer: () => (/* binding */ FullscreenOverlayContainer),
/* harmony export */   GlobalPositionStrategy: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.GlobalPositionStrategy),
/* harmony export */   NoopScrollStrategy: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.NoopScrollStrategy),
/* harmony export */   OVERLAY_DEFAULT_CONFIG: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.OVERLAY_DEFAULT_CONFIG),
/* harmony export */   Overlay: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.Overlay),
/* harmony export */   OverlayConfig: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.OverlayConfig),
/* harmony export */   OverlayContainer: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.OverlayContainer),
/* harmony export */   OverlayKeyboardDispatcher: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.OverlayKeyboardDispatcher),
/* harmony export */   OverlayModule: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.OverlayModule),
/* harmony export */   OverlayOutsideClickDispatcher: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.OverlayOutsideClickDispatcher),
/* harmony export */   OverlayPositionBuilder: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.OverlayPositionBuilder),
/* harmony export */   OverlayRef: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.OverlayRef),
/* harmony export */   RepositionScrollStrategy: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.RepositionScrollStrategy),
/* harmony export */   STANDARD_DROPDOWN_ADJACENT_POSITIONS: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.STANDARD_DROPDOWN_ADJACENT_POSITIONS),
/* harmony export */   STANDARD_DROPDOWN_BELOW_POSITIONS: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.STANDARD_DROPDOWN_BELOW_POSITIONS),
/* harmony export */   ScrollDispatcher: () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__.ScrollDispatcher),
/* harmony export */   ScrollStrategyOptions: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ScrollStrategyOptions),
/* harmony export */   ScrollingVisibility: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ScrollingVisibility),
/* harmony export */   ViewportRuler: () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__.ViewportRuler),
/* harmony export */   createBlockScrollStrategy: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.createBlockScrollStrategy),
/* harmony export */   createCloseScrollStrategy: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.createCloseScrollStrategy),
/* harmony export */   createFlexibleConnectedPositionStrategy: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.createFlexibleConnectedPositionStrategy),
/* harmony export */   createGlobalPositionStrategy: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.createGlobalPositionStrategy),
/* harmony export */   createNoopScrollStrategy: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.createNoopScrollStrategy),
/* harmony export */   createOverlayRef: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.createOverlayRef),
/* harmony export */   createRepositionScrollStrategy: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.createRepositionScrollStrategy),
/* harmony export */   validateHorizontalPosition: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.validateHorizontalPosition),
/* harmony export */   validateVerticalPosition: () => (/* reexport safe */ _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.validateVerticalPosition),
/* harmony export */   "ɵɵCdkFixedSizeVirtualScroll": () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__.CdkFixedSizeVirtualScroll),
/* harmony export */   "ɵɵCdkScrollableModule": () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__.CdkScrollableModule),
/* harmony export */   "ɵɵCdkVirtualForOf": () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__.CdkVirtualForOf),
/* harmony export */   "ɵɵCdkVirtualScrollViewport": () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__.CdkVirtualScrollViewport),
/* harmony export */   "ɵɵCdkVirtualScrollableElement": () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__.CdkVirtualScrollableElement),
/* harmony export */   "ɵɵCdkVirtualScrollableWindow": () => (/* reexport safe */ _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__.CdkVirtualScrollableWindow),
/* harmony export */   "ɵɵDir": () => (/* reexport safe */ _bidi_mjs__WEBPACK_IMPORTED_MODULE_3__.Dir)
/* harmony export */ });
/* harmony import */ var _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overlay-module-chunk.mjs */ 92832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _scrolling_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrolling.mjs */ 79975);
/* harmony import */ var _bidi_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bidi.mjs */ 63680);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 11674);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 32778);
























let FullscreenOverlayContainer = /*#__PURE__*/(() => {
  class FullscreenOverlayContainer extends _overlay_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.OverlayContainer {
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2).createRenderer(null, null);
    _fullScreenEventName;
    _cleanupFullScreenListener;
    constructor() {
      super();
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this._cleanupFullScreenListener?.();
    }
    _createContainer() {
      const eventName = this._getEventName();
      super._createContainer();
      this._adjustParentForFullscreenChange();
      if (eventName) {
        this._cleanupFullScreenListener?.();
        this._cleanupFullScreenListener = this._renderer.listen('document', eventName, () => {
          this._adjustParentForFullscreenChange();
        });
      }
    }
    _adjustParentForFullscreenChange() {
      if (this._containerElement) {
        const fullscreenElement = this.getFullscreenElement();
        const parent = fullscreenElement || this._document.body;
        parent.appendChild(this._containerElement);
      }
    }
    _getEventName() {
      if (!this._fullScreenEventName) {
        const _document = this._document;
        if (_document.fullscreenEnabled) {
          this._fullScreenEventName = 'fullscreenchange';
        } else if (_document.webkitFullscreenEnabled) {
          this._fullScreenEventName = 'webkitfullscreenchange';
        } else if (_document.mozFullScreenEnabled) {
          this._fullScreenEventName = 'mozfullscreenchange';
        } else if (_document.msFullscreenEnabled) {
          this._fullScreenEventName = 'MSFullscreenChange';
        }
      }
      return this._fullScreenEventName;
    }
    getFullscreenElement() {
      const _document = this._document;
      return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
    }
    static ɵfac = function FullscreenOverlayContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FullscreenOverlayContainer)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FullscreenOverlayContainer,
      factory: FullscreenOverlayContainer.ɵfac,
      providedIn: 'root'
    });
  }
  return FullscreenOverlayContainer;
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

/***/ 92832
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_overlay-module-chunk.mjs ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockScrollStrategy: () => (/* binding */ BlockScrollStrategy),
/* harmony export */   CDK_CONNECTED_OVERLAY_DEFAULT_CONFIG: () => (/* binding */ CDK_CONNECTED_OVERLAY_DEFAULT_CONFIG),
/* harmony export */   CdkConnectedOverlay: () => (/* binding */ CdkConnectedOverlay),
/* harmony export */   CdkOverlayOrigin: () => (/* binding */ CdkOverlayOrigin),
/* harmony export */   CloseScrollStrategy: () => (/* binding */ CloseScrollStrategy),
/* harmony export */   ConnectedOverlayPositionChange: () => (/* binding */ ConnectedOverlayPositionChange),
/* harmony export */   ConnectionPositionPair: () => (/* binding */ ConnectionPositionPair),
/* harmony export */   FlexibleConnectedPositionStrategy: () => (/* binding */ FlexibleConnectedPositionStrategy),
/* harmony export */   GlobalPositionStrategy: () => (/* binding */ GlobalPositionStrategy),
/* harmony export */   NoopScrollStrategy: () => (/* binding */ NoopScrollStrategy),
/* harmony export */   OVERLAY_DEFAULT_CONFIG: () => (/* binding */ OVERLAY_DEFAULT_CONFIG),
/* harmony export */   Overlay: () => (/* binding */ Overlay),
/* harmony export */   OverlayConfig: () => (/* binding */ OverlayConfig),
/* harmony export */   OverlayContainer: () => (/* binding */ OverlayContainer),
/* harmony export */   OverlayKeyboardDispatcher: () => (/* binding */ OverlayKeyboardDispatcher),
/* harmony export */   OverlayModule: () => (/* binding */ OverlayModule),
/* harmony export */   OverlayOutsideClickDispatcher: () => (/* binding */ OverlayOutsideClickDispatcher),
/* harmony export */   OverlayPositionBuilder: () => (/* binding */ OverlayPositionBuilder),
/* harmony export */   OverlayRef: () => (/* binding */ OverlayRef),
/* harmony export */   RepositionScrollStrategy: () => (/* binding */ RepositionScrollStrategy),
/* harmony export */   STANDARD_DROPDOWN_ADJACENT_POSITIONS: () => (/* binding */ STANDARD_DROPDOWN_ADJACENT_POSITIONS),
/* harmony export */   STANDARD_DROPDOWN_BELOW_POSITIONS: () => (/* binding */ STANDARD_DROPDOWN_BELOW_POSITIONS),
/* harmony export */   ScrollStrategyOptions: () => (/* binding */ ScrollStrategyOptions),
/* harmony export */   ScrollingVisibility: () => (/* binding */ ScrollingVisibility),
/* harmony export */   createBlockScrollStrategy: () => (/* binding */ createBlockScrollStrategy),
/* harmony export */   createCloseScrollStrategy: () => (/* binding */ createCloseScrollStrategy),
/* harmony export */   createFlexibleConnectedPositionStrategy: () => (/* binding */ createFlexibleConnectedPositionStrategy),
/* harmony export */   createGlobalPositionStrategy: () => (/* binding */ createGlobalPositionStrategy),
/* harmony export */   createNoopScrollStrategy: () => (/* binding */ createNoopScrollStrategy),
/* harmony export */   createOverlayRef: () => (/* binding */ createOverlayRef),
/* harmony export */   createRepositionScrollStrategy: () => (/* binding */ createRepositionScrollStrategy),
/* harmony export */   validateHorizontalPosition: () => (/* binding */ validateHorizontalPosition),
/* harmony export */   validateVerticalPosition: () => (/* binding */ validateVerticalPosition)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 11674);
/* harmony import */ var _platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_platform-chunk.mjs */ 98508);
/* harmony import */ var _shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_shadow-dom-chunk.mjs */ 68310);
/* harmony import */ var _test_environment_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_test-environment-chunk.mjs */ 99737);
/* harmony import */ var _style_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_style-loader-chunk.mjs */ 59504);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_css-pixel-value-chunk.mjs */ 75057);
/* harmony import */ var _array_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_array-chunk.mjs */ 61440);
/* harmony import */ var _scrolling_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scrolling.mjs */ 79975);
/* harmony import */ var _portal_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portal.mjs */ 9168);
/* harmony import */ var _scrolling_chunk_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_scrolling-chunk.mjs */ 86186);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _id_generator_chunk_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_id-generator-chunk.mjs */ 26306);
/* harmony import */ var _directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_directionality-chunk.mjs */ 43433);
/* harmony import */ var _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_keycodes-chunk.mjs */ 97552);
/* harmony import */ var _keycodes_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./keycodes.mjs */ 74879);
/* harmony import */ var _bidi_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bidi.mjs */ 63680);



















const scrollBehaviorSupported = /*#__PURE__*/(0,_scrolling_chunk_mjs__WEBPACK_IMPORTED_MODULE_11__.supportsScrollBehavior)();
function createBlockScrollStrategy(injector) {
  return new BlockScrollStrategy(injector.get(_scrolling_mjs__WEBPACK_IMPORTED_MODULE_9__.ViewportRuler), injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
}
class BlockScrollStrategy {
  _viewportRuler;
  _previousHTMLStyles = {
    top: '',
    left: ''
  };
  _previousScrollPosition;
  _isEnabled = false;
  _document;
  constructor(_viewportRuler, document) {
    this._viewportRuler = _viewportRuler;
    this._document = document;
  }
  attach() {}
  enable() {
    if (this._canBeEnabled()) {
      const root = this._document.documentElement;
      this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
      this._previousHTMLStyles.left = root.style.left || '';
      this._previousHTMLStyles.top = root.style.top || '';
      root.style.left = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(-this._previousScrollPosition.left);
      root.style.top = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(-this._previousScrollPosition.top);
      root.classList.add('cdk-global-scrollblock');
      this._isEnabled = true;
    }
  }
  disable() {
    if (this._isEnabled) {
      const html = this._document.documentElement;
      const body = this._document.body;
      const htmlStyle = html.style;
      const bodyStyle = body.style;
      const previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
      const previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
      this._isEnabled = false;
      htmlStyle.left = this._previousHTMLStyles.left;
      htmlStyle.top = this._previousHTMLStyles.top;
      html.classList.remove('cdk-global-scrollblock');
      if (scrollBehaviorSupported) {
        htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
      }
      window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
      if (scrollBehaviorSupported) {
        htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
        bodyStyle.scrollBehavior = previousBodyScrollBehavior;
      }
    }
  }
  _canBeEnabled() {
    const html = this._document.documentElement;
    if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
      return false;
    }
    const rootElement = this._document.documentElement;
    const viewport = this._viewportRuler.getViewportSize();
    return rootElement.scrollHeight > viewport.height || rootElement.scrollWidth > viewport.width;
  }
}
function getMatScrollStrategyAlreadyAttachedError() {
  return Error(`Scroll strategy has already been attached.`);
}
function createCloseScrollStrategy(injector, config) {
  return new CloseScrollStrategy(injector.get(_scrolling_mjs__WEBPACK_IMPORTED_MODULE_9__.ScrollDispatcher), injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), injector.get(_scrolling_mjs__WEBPACK_IMPORTED_MODULE_9__.ViewportRuler), config);
}
class CloseScrollStrategy {
  _scrollDispatcher;
  _ngZone;
  _viewportRuler;
  _config;
  _scrollSubscription = null;
  _overlayRef;
  _initialScrollPosition;
  constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
    this._scrollDispatcher = _scrollDispatcher;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._config = _config;
  }
  attach(overlayRef) {
    if (this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatScrollStrategyAlreadyAttachedError();
    }
    this._overlayRef = overlayRef;
  }
  enable() {
    if (this._scrollSubscription) {
      return;
    }
    const stream = this._scrollDispatcher.scrolled(0).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(scrollable => {
      return !scrollable || !this._overlayRef.overlayElement.contains(scrollable.getElementRef().nativeElement);
    }));
    if (this._config && this._config.threshold && this._config.threshold > 1) {
      this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
      this._scrollSubscription = stream.subscribe(() => {
        const scrollPosition = this._viewportRuler.getViewportScrollPosition().top;
        if (Math.abs(scrollPosition - this._initialScrollPosition) > this._config.threshold) {
          this._detach();
        } else {
          this._overlayRef.updatePosition();
        }
      });
    } else {
      this._scrollSubscription = stream.subscribe(this._detach);
    }
  }
  disable() {
    if (this._scrollSubscription) {
      this._scrollSubscription.unsubscribe();
      this._scrollSubscription = null;
    }
  }
  detach() {
    this.disable();
    this._overlayRef = null;
  }
  _detach = () => {
    this.disable();
    if (this._overlayRef.hasAttached()) {
      this._ngZone.run(() => this._overlayRef.detach());
    }
  };
}
function createNoopScrollStrategy() {
  return new NoopScrollStrategy();
}
class NoopScrollStrategy {
  enable() {}
  disable() {}
  attach() {}
}
function isElementScrolledOutsideView(element, scrollContainers) {
  return scrollContainers.some(containerBounds => {
    const outsideAbove = element.bottom < containerBounds.top;
    const outsideBelow = element.top > containerBounds.bottom;
    const outsideLeft = element.right < containerBounds.left;
    const outsideRight = element.left > containerBounds.right;
    return outsideAbove || outsideBelow || outsideLeft || outsideRight;
  });
}
function isElementClippedByScrolling(element, scrollContainers) {
  return scrollContainers.some(scrollContainerRect => {
    const clippedAbove = element.top < scrollContainerRect.top;
    const clippedBelow = element.bottom > scrollContainerRect.bottom;
    const clippedLeft = element.left < scrollContainerRect.left;
    const clippedRight = element.right > scrollContainerRect.right;
    return clippedAbove || clippedBelow || clippedLeft || clippedRight;
  });
}
function createRepositionScrollStrategy(injector, config) {
  return new RepositionScrollStrategy(injector.get(_scrolling_mjs__WEBPACK_IMPORTED_MODULE_9__.ScrollDispatcher), injector.get(_scrolling_mjs__WEBPACK_IMPORTED_MODULE_9__.ViewportRuler), injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), config);
}
class RepositionScrollStrategy {
  _scrollDispatcher;
  _viewportRuler;
  _ngZone;
  _config;
  _scrollSubscription = null;
  _overlayRef;
  constructor(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
    this._scrollDispatcher = _scrollDispatcher;
    this._viewportRuler = _viewportRuler;
    this._ngZone = _ngZone;
    this._config = _config;
  }
  attach(overlayRef) {
    if (this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatScrollStrategyAlreadyAttachedError();
    }
    this._overlayRef = overlayRef;
  }
  enable() {
    if (!this._scrollSubscription) {
      const throttle = this._config ? this._config.scrollThrottle : 0;
      this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(() => {
        this._overlayRef.updatePosition();
        if (this._config && this._config.autoClose) {
          const overlayRect = this._overlayRef.overlayElement.getBoundingClientRect();
          const {
            width,
            height
          } = this._viewportRuler.getViewportSize();
          const parentRects = [{
            width,
            height,
            bottom: height,
            right: width,
            top: 0,
            left: 0
          }];
          if (isElementScrolledOutsideView(overlayRect, parentRects)) {
            this.disable();
            this._ngZone.run(() => this._overlayRef.detach());
          }
        }
      });
    }
  }
  disable() {
    if (this._scrollSubscription) {
      this._scrollSubscription.unsubscribe();
      this._scrollSubscription = null;
    }
  }
  detach() {
    this.disable();
    this._overlayRef = null;
  }
}
let ScrollStrategyOptions = /*#__PURE__*/(() => {
  class ScrollStrategyOptions {
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    constructor() {}
    noop = () => new NoopScrollStrategy();
    close = config => createCloseScrollStrategy(this._injector, config);
    block = () => createBlockScrollStrategy(this._injector);
    reposition = config => createRepositionScrollStrategy(this._injector, config);
    static ɵfac = function ScrollStrategyOptions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ScrollStrategyOptions)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ScrollStrategyOptions,
      factory: ScrollStrategyOptions.ɵfac,
      providedIn: 'root'
    });
  }
  return ScrollStrategyOptions;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class OverlayConfig {
  positionStrategy;
  scrollStrategy = /*#__PURE__*/new NoopScrollStrategy();
  panelClass = '';
  hasBackdrop = false;
  backdropClass = 'cdk-overlay-dark-backdrop';
  disableAnimations;
  width;
  height;
  minWidth;
  minHeight;
  maxWidth;
  maxHeight;
  direction;
  disposeOnNavigation = false;
  usePopover;
  constructor(config) {
    if (config) {
      const configKeys = Object.keys(config);
      for (const key of configKeys) {
        if (config[key] !== undefined) {
          this[key] = config[key];
        }
      }
    }
  }
}
class ConnectionPositionPair {
  offsetX;
  offsetY;
  panelClass;
  originX;
  originY;
  overlayX;
  overlayY;
  constructor(origin, overlay, offsetX, offsetY, panelClass) {
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.panelClass = panelClass;
    this.originX = origin.originX;
    this.originY = origin.originY;
    this.overlayX = overlay.overlayX;
    this.overlayY = overlay.overlayY;
  }
}
class ScrollingVisibility {
  isOriginClipped = false;
  isOriginOutsideView = false;
  isOverlayClipped = false;
  isOverlayOutsideView = false;
}
class ConnectedOverlayPositionChange {
  connectionPair;
  scrollableViewProperties;
  constructor(connectionPair, scrollableViewProperties) {
    this.connectionPair = connectionPair;
    this.scrollableViewProperties = scrollableViewProperties;
  }
}
function validateVerticalPosition(property, value) {
  if (value !== 'top' && value !== 'bottom' && value !== 'center') {
    throw Error(`ConnectedPosition: Invalid ${property} "${value}". ` + `Expected "top", "bottom" or "center".`);
  }
}
function validateHorizontalPosition(property, value) {
  if (value !== 'start' && value !== 'end' && value !== 'center') {
    throw Error(`ConnectedPosition: Invalid ${property} "${value}". ` + `Expected "start", "end" or "center".`);
  }
}
let BaseOverlayDispatcher = /*#__PURE__*/(() => {
  class BaseOverlayDispatcher {
    _attachedOverlays = [];
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _isAttached = false;
    constructor() {}
    ngOnDestroy() {
      this.detach();
    }
    add(overlayRef) {
      this.remove(overlayRef);
      this._attachedOverlays.push(overlayRef);
    }
    remove(overlayRef) {
      const index = this._attachedOverlays.indexOf(overlayRef);
      if (index > -1) {
        this._attachedOverlays.splice(index, 1);
      }
      if (this._attachedOverlays.length === 0) {
        this.detach();
      }
    }
    static ɵfac = function BaseOverlayDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BaseOverlayDispatcher)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BaseOverlayDispatcher,
      factory: BaseOverlayDispatcher.ɵfac,
      providedIn: 'root'
    });
  }
  return BaseOverlayDispatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let OverlayKeyboardDispatcher = /*#__PURE__*/(() => {
  class OverlayKeyboardDispatcher extends BaseOverlayDispatcher {
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
    _cleanupKeydown;
    add(overlayRef) {
      super.add(overlayRef);
      if (!this._isAttached) {
        this._ngZone.runOutsideAngular(() => {
          this._cleanupKeydown = this._renderer.listen('body', 'keydown', this._keydownListener);
        });
        this._isAttached = true;
      }
    }
    detach() {
      if (this._isAttached) {
        this._cleanupKeydown?.();
        this._isAttached = false;
      }
    }
    _keydownListener = event => {
      const overlays = this._attachedOverlays;
      for (let i = overlays.length - 1; i > -1; i--) {
        if (overlays[i]._keydownEvents.observers.length > 0) {
          this._ngZone.run(() => overlays[i]._keydownEvents.next(event));
          break;
        }
      }
    };
    static ɵfac = /* @__PURE__ */(() => {
      let ɵOverlayKeyboardDispatcher_BaseFactory;
      return function OverlayKeyboardDispatcher_Factory(__ngFactoryType__) {
        return (ɵOverlayKeyboardDispatcher_BaseFactory || (ɵOverlayKeyboardDispatcher_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](OverlayKeyboardDispatcher)))(__ngFactoryType__ || OverlayKeyboardDispatcher);
      };
    })();
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OverlayKeyboardDispatcher,
      factory: OverlayKeyboardDispatcher.ɵfac,
      providedIn: 'root'
    });
  }
  return OverlayKeyboardDispatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let OverlayOutsideClickDispatcher = /*#__PURE__*/(() => {
  class OverlayOutsideClickDispatcher extends BaseOverlayDispatcher {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.Platform);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
    _cursorOriginalValue;
    _cursorStyleIsSet = false;
    _pointerDownEventTarget = null;
    _cleanups;
    add(overlayRef) {
      super.add(overlayRef);
      if (!this._isAttached) {
        const body = this._document.body;
        const eventOptions = {
          capture: true
        };
        const renderer = this._renderer;
        this._cleanups = this._ngZone.runOutsideAngular(() => [renderer.listen(body, 'pointerdown', this._pointerDownListener, eventOptions), renderer.listen(body, 'click', this._clickListener, eventOptions), renderer.listen(body, 'auxclick', this._clickListener, eventOptions), renderer.listen(body, 'contextmenu', this._clickListener, eventOptions)]);
        if (this._platform.IOS && !this._cursorStyleIsSet) {
          this._cursorOriginalValue = body.style.cursor;
          body.style.cursor = 'pointer';
          this._cursorStyleIsSet = true;
        }
        this._isAttached = true;
      }
    }
    detach() {
      if (this._isAttached) {
        this._cleanups?.forEach(cleanup => cleanup());
        this._cleanups = undefined;
        if (this._platform.IOS && this._cursorStyleIsSet) {
          this._document.body.style.cursor = this._cursorOriginalValue;
          this._cursorStyleIsSet = false;
        }
        this._isAttached = false;
      }
    }
    _pointerDownListener = event => {
      this._pointerDownEventTarget = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__._getEventTarget)(event);
    };
    _clickListener = event => {
      const target = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__._getEventTarget)(event);
      const origin = event.type === 'click' && this._pointerDownEventTarget ? this._pointerDownEventTarget : target;
      this._pointerDownEventTarget = null;
      const overlays = this._attachedOverlays.slice();
      for (let i = overlays.length - 1; i > -1; i--) {
        const overlayRef = overlays[i];
        if (overlayRef._outsidePointerEvents.observers.length < 1 || !overlayRef.hasAttached()) {
          continue;
        }
        if (containsPierceShadowDom(overlayRef.overlayElement, target) || containsPierceShadowDom(overlayRef.overlayElement, origin)) {
          break;
        }
        const outsidePointerEvents = overlayRef._outsidePointerEvents;
        if (this._ngZone) {
          this._ngZone.run(() => outsidePointerEvents.next(event));
        } else {
          outsidePointerEvents.next(event);
        }
      }
    };
    static ɵfac = /* @__PURE__ */(() => {
      let ɵOverlayOutsideClickDispatcher_BaseFactory;
      return function OverlayOutsideClickDispatcher_Factory(__ngFactoryType__) {
        return (ɵOverlayOutsideClickDispatcher_BaseFactory || (ɵOverlayOutsideClickDispatcher_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](OverlayOutsideClickDispatcher)))(__ngFactoryType__ || OverlayOutsideClickDispatcher);
      };
    })();
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OverlayOutsideClickDispatcher,
      factory: OverlayOutsideClickDispatcher.ɵfac,
      providedIn: 'root'
    });
  }
  return OverlayOutsideClickDispatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function containsPierceShadowDom(parent, child) {
  const supportsShadowRoot = typeof ShadowRoot !== 'undefined' && ShadowRoot;
  let current = child;
  while (current) {
    if (current === parent) {
      return true;
    }
    current = supportsShadowRoot && current instanceof ShadowRoot ? current.host : current.parentNode;
  }
  return false;
}
let _CdkOverlayStyleLoader = /*#__PURE__*/(() => {
  class _CdkOverlayStyleLoader {
    static ɵfac = function _CdkOverlayStyleLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkOverlayStyleLoader)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: _CdkOverlayStyleLoader,
      selectors: [["ng-component"]],
      hostAttrs: ["cdk-overlay-style-loader", ""],
      decls: 0,
      vars: 0,
      template: function _CdkOverlayStyleLoader_Template(rf, ctx) {},
      styles: [".cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0;touch-action:manipulation}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}@media(prefers-reduced-motion){.cdk-overlay-backdrop{transition-duration:1ms}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.cdk-overlay-popover{background:none;border:none;padding:0;outline:0;overflow:visible;position:fixed;pointer-events:none;white-space:normal;color:inherit;text-decoration:none;width:100%;height:100%;inset:auto;top:0;left:0}.cdk-overlay-popover::backdrop{display:none}.cdk-overlay-popover .cdk-overlay-backdrop{position:fixed;z-index:auto}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return _CdkOverlayStyleLoader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let OverlayContainer = /*#__PURE__*/(() => {
  class OverlayContainer {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.Platform);
    _containerElement;
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _styleLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_style_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__._CdkPrivateStyleLoader);
    constructor() {}
    ngOnDestroy() {
      this._containerElement?.remove();
    }
    getContainerElement() {
      this._loadStyles();
      if (!this._containerElement) {
        this._createContainer();
      }
      return this._containerElement;
    }
    _createContainer() {
      const containerClass = 'cdk-overlay-container';
      if (this._platform.isBrowser || (0,_test_environment_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__._isTestEnvironment)()) {
        const oppositePlatformContainers = this._document.querySelectorAll(`.${containerClass}[platform="server"], ` + `.${containerClass}[platform="test"]`);
        for (let i = 0; i < oppositePlatformContainers.length; i++) {
          oppositePlatformContainers[i].remove();
        }
      }
      const container = this._document.createElement('div');
      container.classList.add(containerClass);
      if ((0,_test_environment_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__._isTestEnvironment)()) {
        container.setAttribute('platform', 'test');
      } else if (!this._platform.isBrowser) {
        container.setAttribute('platform', 'server');
      }
      this._document.body.appendChild(container);
      this._containerElement = container;
    }
    _loadStyles() {
      this._styleLoader.load(_CdkOverlayStyleLoader);
    }
    static ɵfac = function OverlayContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OverlayContainer)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OverlayContainer,
      factory: OverlayContainer.ɵfac,
      providedIn: 'root'
    });
  }
  return OverlayContainer;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class BackdropRef {
  _renderer;
  _ngZone;
  element;
  _cleanupClick;
  _cleanupTransitionEnd;
  _fallbackTimeout;
  constructor(document, _renderer, _ngZone, onClick) {
    this._renderer = _renderer;
    this._ngZone = _ngZone;
    this.element = document.createElement('div');
    this.element.classList.add('cdk-overlay-backdrop');
    this._cleanupClick = _renderer.listen(this.element, 'click', onClick);
  }
  detach() {
    this._ngZone.runOutsideAngular(() => {
      const element = this.element;
      clearTimeout(this._fallbackTimeout);
      this._cleanupTransitionEnd?.();
      this._cleanupTransitionEnd = this._renderer.listen(element, 'transitionend', this.dispose);
      this._fallbackTimeout = setTimeout(this.dispose, 500);
      element.style.pointerEvents = 'none';
      element.classList.remove('cdk-overlay-backdrop-showing');
    });
  }
  dispose = () => {
    clearTimeout(this._fallbackTimeout);
    this._cleanupClick?.();
    this._cleanupTransitionEnd?.();
    this._cleanupClick = this._cleanupTransitionEnd = this._fallbackTimeout = undefined;
    this.element.remove();
  };
}
function isElement(value) {
  return value && value.nodeType === 1;
}
class OverlayRef {
  _portalOutlet;
  _host;
  _pane;
  _config;
  _ngZone;
  _keyboardDispatcher;
  _document;
  _location;
  _outsideClickDispatcher;
  _animationsDisabled;
  _injector;
  _renderer;
  _backdropClick = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  _attachments = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  _detachments = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  _positionStrategy;
  _scrollStrategy;
  _locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
  _backdropRef = null;
  _detachContentMutationObserver;
  _detachContentAfterRenderRef;
  _disposed = false;
  _previousHostParent;
  _keydownEvents = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  _outsidePointerEvents = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  _afterNextRenderRef;
  constructor(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location, _outsideClickDispatcher, _animationsDisabled = false, _injector, _renderer) {
    this._portalOutlet = _portalOutlet;
    this._host = _host;
    this._pane = _pane;
    this._config = _config;
    this._ngZone = _ngZone;
    this._keyboardDispatcher = _keyboardDispatcher;
    this._document = _document;
    this._location = _location;
    this._outsideClickDispatcher = _outsideClickDispatcher;
    this._animationsDisabled = _animationsDisabled;
    this._injector = _injector;
    this._renderer = _renderer;
    if (_config.scrollStrategy) {
      this._scrollStrategy = _config.scrollStrategy;
      this._scrollStrategy.attach(this);
    }
    this._positionStrategy = _config.positionStrategy;
  }
  get overlayElement() {
    return this._pane;
  }
  get backdropElement() {
    return this._backdropRef?.element || null;
  }
  get hostElement() {
    return this._host;
  }
  attach(portal) {
    if (this._disposed) {
      return null;
    }
    this._attachHost();
    const attachResult = this._portalOutlet.attach(portal);
    this._positionStrategy?.attach(this);
    this._updateStackingOrder();
    this._updateElementSize();
    this._updateElementDirection();
    if (this._scrollStrategy) {
      this._scrollStrategy.enable();
    }
    this._afterNextRenderRef?.destroy();
    this._afterNextRenderRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
      if (this.hasAttached()) {
        this.updatePosition();
      }
    }, {
      injector: this._injector
    });
    this._togglePointerEvents(true);
    if (this._config.hasBackdrop) {
      this._attachBackdrop();
    }
    if (this._config.panelClass) {
      this._toggleClasses(this._pane, this._config.panelClass, true);
    }
    this._attachments.next();
    this._completeDetachContent();
    this._keyboardDispatcher.add(this);
    if (this._config.disposeOnNavigation) {
      this._locationChanges = this._location.subscribe(() => this.dispose());
    }
    this._outsideClickDispatcher.add(this);
    if (typeof attachResult?.onDestroy === 'function') {
      attachResult.onDestroy(() => {
        if (this.hasAttached()) {
          this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()));
        }
      });
    }
    return attachResult;
  }
  detach() {
    if (!this.hasAttached()) {
      return;
    }
    this.detachBackdrop();
    this._togglePointerEvents(false);
    if (this._positionStrategy && this._positionStrategy.detach) {
      this._positionStrategy.detach();
    }
    if (this._scrollStrategy) {
      this._scrollStrategy.disable();
    }
    const detachmentResult = this._portalOutlet.detach();
    this._detachments.next();
    this._completeDetachContent();
    this._keyboardDispatcher.remove(this);
    this._detachContentWhenEmpty();
    this._locationChanges.unsubscribe();
    this._outsideClickDispatcher.remove(this);
    return detachmentResult;
  }
  dispose() {
    if (this._disposed) {
      return;
    }
    const isAttached = this.hasAttached();
    if (this._positionStrategy) {
      this._positionStrategy.dispose();
    }
    this._disposeScrollStrategy();
    this._backdropRef?.dispose();
    this._locationChanges.unsubscribe();
    this._keyboardDispatcher.remove(this);
    this._portalOutlet.dispose();
    this._attachments.complete();
    this._backdropClick.complete();
    this._keydownEvents.complete();
    this._outsidePointerEvents.complete();
    this._outsideClickDispatcher.remove(this);
    this._host?.remove();
    this._afterNextRenderRef?.destroy();
    this._previousHostParent = this._pane = this._host = this._backdropRef = null;
    if (isAttached) {
      this._detachments.next();
    }
    this._detachments.complete();
    this._completeDetachContent();
    this._disposed = true;
  }
  hasAttached() {
    return this._portalOutlet.hasAttached();
  }
  backdropClick() {
    return this._backdropClick;
  }
  attachments() {
    return this._attachments;
  }
  detachments() {
    return this._detachments;
  }
  keydownEvents() {
    return this._keydownEvents;
  }
  outsidePointerEvents() {
    return this._outsidePointerEvents;
  }
  getConfig() {
    return this._config;
  }
  updatePosition() {
    if (this._positionStrategy) {
      this._positionStrategy.apply();
    }
  }
  updatePositionStrategy(strategy) {
    if (strategy === this._positionStrategy) {
      return;
    }
    if (this._positionStrategy) {
      this._positionStrategy.dispose();
    }
    this._positionStrategy = strategy;
    if (this.hasAttached()) {
      strategy.attach(this);
      this.updatePosition();
    }
  }
  updateSize(sizeConfig) {
    this._config = {
      ...this._config,
      ...sizeConfig
    };
    this._updateElementSize();
  }
  setDirection(dir) {
    this._config = {
      ...this._config,
      direction: dir
    };
    this._updateElementDirection();
  }
  addPanelClass(classes) {
    if (this._pane) {
      this._toggleClasses(this._pane, classes, true);
    }
  }
  removePanelClass(classes) {
    if (this._pane) {
      this._toggleClasses(this._pane, classes, false);
    }
  }
  getDirection() {
    const direction = this._config.direction;
    if (!direction) {
      return 'ltr';
    }
    return typeof direction === 'string' ? direction : direction.value;
  }
  updateScrollStrategy(strategy) {
    if (strategy === this._scrollStrategy) {
      return;
    }
    this._disposeScrollStrategy();
    this._scrollStrategy = strategy;
    if (this.hasAttached()) {
      strategy.attach(this);
      strategy.enable();
    }
  }
  _updateElementDirection() {
    this._host.setAttribute('dir', this.getDirection());
  }
  _updateElementSize() {
    if (!this._pane) {
      return;
    }
    const style = this._pane.style;
    style.width = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(this._config.width);
    style.height = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(this._config.height);
    style.minWidth = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(this._config.minWidth);
    style.minHeight = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(this._config.minHeight);
    style.maxWidth = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(this._config.maxWidth);
    style.maxHeight = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(this._config.maxHeight);
  }
  _togglePointerEvents(enablePointer) {
    this._pane.style.pointerEvents = enablePointer ? '' : 'none';
  }
  _attachHost() {
    if (!this._host.parentElement) {
      const customInsertionPoint = this._config.usePopover ? this._positionStrategy?.getPopoverInsertionPoint?.() : null;
      if (isElement(customInsertionPoint)) {
        customInsertionPoint.after(this._host);
      } else if (customInsertionPoint?.type === 'parent') {
        customInsertionPoint.element.appendChild(this._host);
      } else {
        this._previousHostParent?.appendChild(this._host);
      }
    }
    if (this._config.usePopover) {
      try {
        this._host['showPopover']();
      } catch {}
    }
  }
  _attachBackdrop() {
    const showingClass = 'cdk-overlay-backdrop-showing';
    this._backdropRef?.dispose();
    this._backdropRef = new BackdropRef(this._document, this._renderer, this._ngZone, event => {
      this._backdropClick.next(event);
    });
    if (this._animationsDisabled) {
      this._backdropRef.element.classList.add('cdk-overlay-backdrop-noop-animation');
    }
    if (this._config.backdropClass) {
      this._toggleClasses(this._backdropRef.element, this._config.backdropClass, true);
    }
    if (this._config.usePopover) {
      this._host.prepend(this._backdropRef.element);
    } else {
      this._host.parentElement.insertBefore(this._backdropRef.element, this._host);
    }
    if (!this._animationsDisabled && typeof requestAnimationFrame !== 'undefined') {
      this._ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => this._backdropRef?.element.classList.add(showingClass));
      });
    } else {
      this._backdropRef.element.classList.add(showingClass);
    }
  }
  _updateStackingOrder() {
    if (!this._config.usePopover && this._host.nextSibling) {
      this._host.parentNode.appendChild(this._host);
    }
  }
  detachBackdrop() {
    if (this._animationsDisabled) {
      this._backdropRef?.dispose();
      this._backdropRef = null;
    } else {
      this._backdropRef?.detach();
    }
  }
  _toggleClasses(element, cssClasses, isAdd) {
    const classes = (0,_array_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.coerceArray)(cssClasses || []).filter(c => !!c);
    if (classes.length) {
      isAdd ? element.classList.add(...classes) : element.classList.remove(...classes);
    }
  }
  _detachContentWhenEmpty() {
    let rethrow = false;
    try {
      this._detachContentAfterRenderRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
        rethrow = true;
        this._detachContent();
      }, {
        injector: this._injector
      });
    } catch (e) {
      if (rethrow) {
        throw e;
      }
      this._detachContent();
    }
    if (globalThis.MutationObserver && this._pane) {
      this._detachContentMutationObserver ||= new globalThis.MutationObserver(() => {
        this._detachContent();
      });
      this._detachContentMutationObserver.observe(this._pane, {
        childList: true
      });
    }
  }
  _detachContent() {
    if (!this._pane || !this._host || this._pane.children.length === 0) {
      if (this._pane && this._config.panelClass) {
        this._toggleClasses(this._pane, this._config.panelClass, false);
      }
      if (this._host && this._host.parentElement) {
        this._previousHostParent = this._host.parentElement;
        this._host.remove();
      }
      this._completeDetachContent();
    }
  }
  _completeDetachContent() {
    this._detachContentAfterRenderRef?.destroy();
    this._detachContentAfterRenderRef = undefined;
    this._detachContentMutationObserver?.disconnect();
  }
  _disposeScrollStrategy() {
    const scrollStrategy = this._scrollStrategy;
    scrollStrategy?.disable();
    scrollStrategy?.detach?.();
  }
}
const boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
const cssUnitPattern = /([A-Za-z%]+)$/;
function createFlexibleConnectedPositionStrategy(injector, origin) {
  return new FlexibleConnectedPositionStrategy(origin, injector.get(_scrolling_mjs__WEBPACK_IMPORTED_MODULE_9__.ViewportRuler), injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT), injector.get(_platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.Platform), injector.get(OverlayContainer));
}
class FlexibleConnectedPositionStrategy {
  _viewportRuler;
  _document;
  _platform;
  _overlayContainer;
  _overlayRef;
  _isInitialRender = false;
  _lastBoundingBoxSize = {
    width: 0,
    height: 0
  };
  _isPushed = false;
  _canPush = true;
  _growAfterOpen = false;
  _hasFlexibleDimensions = true;
  _positionLocked = false;
  _originRect;
  _overlayRect;
  _viewportRect;
  _containerRect;
  _viewportMargin = 0;
  _scrollables = [];
  _preferredPositions = [];
  _origin;
  _pane;
  _isDisposed = false;
  _boundingBox = null;
  _lastPosition = null;
  _lastScrollVisibility = null;
  _positionChanges = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  _resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
  _offsetX = 0;
  _offsetY = 0;
  _transformOriginSelector;
  _appliedPanelClasses = [];
  _previousPushAmount = null;
  _popoverLocation = 'global';
  positionChanges = this._positionChanges;
  get positions() {
    return this._preferredPositions;
  }
  constructor(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
    this._viewportRuler = _viewportRuler;
    this._document = _document;
    this._platform = _platform;
    this._overlayContainer = _overlayContainer;
    this.setOrigin(connectedTo);
  }
  attach(overlayRef) {
    if (this._overlayRef && overlayRef !== this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('This position strategy is already attached to an overlay');
    }
    this._validatePositions();
    overlayRef.hostElement.classList.add(boundingBoxClass);
    this._overlayRef = overlayRef;
    this._boundingBox = overlayRef.hostElement;
    this._pane = overlayRef.overlayElement;
    this._isDisposed = false;
    this._isInitialRender = true;
    this._lastPosition = null;
    this._resizeSubscription.unsubscribe();
    this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
      this._isInitialRender = true;
      this.apply();
    });
  }
  apply() {
    if (this._isDisposed || !this._platform.isBrowser) {
      return;
    }
    if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
      this.reapplyLastPosition();
      return;
    }
    this._clearPanelClasses();
    this._resetOverlayElementStyles();
    this._resetBoundingBoxStyles();
    this._viewportRect = this._getNarrowedViewportRect();
    this._originRect = this._getOriginRect();
    this._overlayRect = this._pane.getBoundingClientRect();
    this._containerRect = this._getContainerRect();
    const originRect = this._originRect;
    const overlayRect = this._overlayRect;
    const viewportRect = this._viewportRect;
    const containerRect = this._containerRect;
    const flexibleFits = [];
    let fallback;
    for (let pos of this._preferredPositions) {
      let originPoint = this._getOriginPoint(originRect, containerRect, pos);
      let overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
      let overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
      if (overlayFit.isCompletelyWithinViewport) {
        this._isPushed = false;
        this._applyPosition(pos, originPoint);
        return;
      }
      if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
        flexibleFits.push({
          position: pos,
          origin: originPoint,
          overlayRect,
          boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
        });
        continue;
      }
      if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
        fallback = {
          overlayFit,
          overlayPoint,
          originPoint,
          position: pos,
          overlayRect
        };
      }
    }
    if (flexibleFits.length) {
      let bestFit = null;
      let bestScore = -1;
      for (const fit of flexibleFits) {
        const score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
        if (score > bestScore) {
          bestScore = score;
          bestFit = fit;
        }
      }
      this._isPushed = false;
      this._applyPosition(bestFit.position, bestFit.origin);
      return;
    }
    if (this._canPush) {
      this._isPushed = true;
      this._applyPosition(fallback.position, fallback.originPoint);
      return;
    }
    this._applyPosition(fallback.position, fallback.originPoint);
  }
  detach() {
    this._clearPanelClasses();
    this._lastPosition = null;
    this._previousPushAmount = null;
    this._resizeSubscription.unsubscribe();
  }
  dispose() {
    if (this._isDisposed) {
      return;
    }
    if (this._boundingBox) {
      extendStyles(this._boundingBox.style, {
        top: '',
        left: '',
        right: '',
        bottom: '',
        height: '',
        width: '',
        alignItems: '',
        justifyContent: ''
      });
    }
    if (this._pane) {
      this._resetOverlayElementStyles();
    }
    if (this._overlayRef) {
      this._overlayRef.hostElement.classList.remove(boundingBoxClass);
    }
    this.detach();
    this._positionChanges.complete();
    this._overlayRef = this._boundingBox = null;
    this._isDisposed = true;
  }
  reapplyLastPosition() {
    if (this._isDisposed || !this._platform.isBrowser) {
      return;
    }
    const lastPosition = this._lastPosition;
    if (lastPosition) {
      this._originRect = this._getOriginRect();
      this._overlayRect = this._pane.getBoundingClientRect();
      this._viewportRect = this._getNarrowedViewportRect();
      this._containerRect = this._getContainerRect();
      this._applyPosition(lastPosition, this._getOriginPoint(this._originRect, this._containerRect, lastPosition));
    } else {
      this.apply();
    }
  }
  withScrollableContainers(scrollables) {
    this._scrollables = scrollables;
    return this;
  }
  withPositions(positions) {
    this._preferredPositions = positions;
    if (positions.indexOf(this._lastPosition) === -1) {
      this._lastPosition = null;
    }
    this._validatePositions();
    return this;
  }
  withViewportMargin(margin) {
    this._viewportMargin = margin;
    return this;
  }
  withFlexibleDimensions(flexibleDimensions = true) {
    this._hasFlexibleDimensions = flexibleDimensions;
    return this;
  }
  withGrowAfterOpen(growAfterOpen = true) {
    this._growAfterOpen = growAfterOpen;
    return this;
  }
  withPush(canPush = true) {
    this._canPush = canPush;
    return this;
  }
  withLockedPosition(isLocked = true) {
    this._positionLocked = isLocked;
    return this;
  }
  setOrigin(origin) {
    this._origin = origin;
    return this;
  }
  withDefaultOffsetX(offset) {
    this._offsetX = offset;
    return this;
  }
  withDefaultOffsetY(offset) {
    this._offsetY = offset;
    return this;
  }
  withTransformOriginOn(selector) {
    this._transformOriginSelector = selector;
    return this;
  }
  withPopoverLocation(location) {
    this._popoverLocation = location;
    return this;
  }
  getPopoverInsertionPoint() {
    if (this._popoverLocation === 'global') {
      return null;
    } else if (this._popoverLocation !== 'inline') {
      return this._popoverLocation;
    }
    if (this._origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef) {
      return this._origin.nativeElement;
    } else if (isElement(this._origin)) {
      return this._origin;
    } else {
      return null;
    }
  }
  _getOriginPoint(originRect, containerRect, pos) {
    let x;
    if (pos.originX == 'center') {
      x = originRect.left + originRect.width / 2;
    } else {
      const startX = this._isRtl() ? originRect.right : originRect.left;
      const endX = this._isRtl() ? originRect.left : originRect.right;
      x = pos.originX == 'start' ? startX : endX;
    }
    if (containerRect.left < 0) {
      x -= containerRect.left;
    }
    let y;
    if (pos.originY == 'center') {
      y = originRect.top + originRect.height / 2;
    } else {
      y = pos.originY == 'top' ? originRect.top : originRect.bottom;
    }
    if (containerRect.top < 0) {
      y -= containerRect.top;
    }
    return {
      x,
      y
    };
  }
  _getOverlayPoint(originPoint, overlayRect, pos) {
    let overlayStartX;
    if (pos.overlayX == 'center') {
      overlayStartX = -overlayRect.width / 2;
    } else if (pos.overlayX === 'start') {
      overlayStartX = this._isRtl() ? -overlayRect.width : 0;
    } else {
      overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
    }
    let overlayStartY;
    if (pos.overlayY == 'center') {
      overlayStartY = -overlayRect.height / 2;
    } else {
      overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
    }
    return {
      x: originPoint.x + overlayStartX,
      y: originPoint.y + overlayStartY
    };
  }
  _getOverlayFit(point, rawOverlayRect, viewport, position) {
    const overlay = getRoundedBoundingClientRect(rawOverlayRect);
    let {
      x,
      y
    } = point;
    let offsetX = this._getOffset(position, 'x');
    let offsetY = this._getOffset(position, 'y');
    if (offsetX) {
      x += offsetX;
    }
    if (offsetY) {
      y += offsetY;
    }
    let leftOverflow = 0 - x;
    let rightOverflow = x + overlay.width - viewport.width;
    let topOverflow = 0 - y;
    let bottomOverflow = y + overlay.height - viewport.height;
    let visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
    let visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
    let visibleArea = visibleWidth * visibleHeight;
    return {
      visibleArea,
      isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
      fitsInViewportVertically: visibleHeight === overlay.height,
      fitsInViewportHorizontally: visibleWidth == overlay.width
    };
  }
  _canFitWithFlexibleDimensions(fit, point, viewport) {
    if (this._hasFlexibleDimensions) {
      const availableHeight = viewport.bottom - point.y;
      const availableWidth = viewport.right - point.x;
      const minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
      const minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
      const verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
      const horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
      return verticalFit && horizontalFit;
    }
    return false;
  }
  _pushOverlayOnScreen(start, rawOverlayRect, scrollPosition) {
    if (this._previousPushAmount && this._positionLocked) {
      return {
        x: start.x + this._previousPushAmount.x,
        y: start.y + this._previousPushAmount.y
      };
    }
    const overlay = getRoundedBoundingClientRect(rawOverlayRect);
    const viewport = this._viewportRect;
    const overflowRight = Math.max(start.x + overlay.width - viewport.width, 0);
    const overflowBottom = Math.max(start.y + overlay.height - viewport.height, 0);
    const overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
    const overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
    let pushX = 0;
    let pushY = 0;
    if (overlay.width <= viewport.width) {
      pushX = overflowLeft || -overflowRight;
    } else {
      pushX = start.x < this._getViewportMarginStart() ? viewport.left - scrollPosition.left - start.x : 0;
    }
    if (overlay.height <= viewport.height) {
      pushY = overflowTop || -overflowBottom;
    } else {
      pushY = start.y < this._getViewportMarginTop() ? viewport.top - scrollPosition.top - start.y : 0;
    }
    this._previousPushAmount = {
      x: pushX,
      y: pushY
    };
    return {
      x: start.x + pushX,
      y: start.y + pushY
    };
  }
  _applyPosition(position, originPoint) {
    this._setTransformOrigin(position);
    this._setOverlayElementStyles(originPoint, position);
    this._setBoundingBoxStyles(originPoint, position);
    if (position.panelClass) {
      this._addPanelClasses(position.panelClass);
    }
    if (this._positionChanges.observers.length) {
      const scrollVisibility = this._getScrollVisibility();
      if (position !== this._lastPosition || !this._lastScrollVisibility || !compareScrollVisibility(this._lastScrollVisibility, scrollVisibility)) {
        const changeEvent = new ConnectedOverlayPositionChange(position, scrollVisibility);
        this._positionChanges.next(changeEvent);
      }
      this._lastScrollVisibility = scrollVisibility;
    }
    this._lastPosition = position;
    this._isInitialRender = false;
  }
  _setTransformOrigin(position) {
    if (!this._transformOriginSelector) {
      return;
    }
    const elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);
    let xOrigin;
    let yOrigin = position.overlayY;
    if (position.overlayX === 'center') {
      xOrigin = 'center';
    } else if (this._isRtl()) {
      xOrigin = position.overlayX === 'start' ? 'right' : 'left';
    } else {
      xOrigin = position.overlayX === 'start' ? 'left' : 'right';
    }
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.transformOrigin = `${xOrigin} ${yOrigin}`;
    }
  }
  _calculateBoundingBoxRect(origin, position) {
    const viewport = this._viewportRect;
    const isRtl = this._isRtl();
    let height, top, bottom;
    if (position.overlayY === 'top') {
      top = origin.y;
      height = viewport.height - top + this._getViewportMarginBottom();
    } else if (position.overlayY === 'bottom') {
      bottom = viewport.height - origin.y + this._getViewportMarginTop() + this._getViewportMarginBottom();
      height = viewport.height - bottom + this._getViewportMarginTop();
    } else {
      const smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
      const previousHeight = this._lastBoundingBoxSize.height;
      height = smallestDistanceToViewportEdge * 2;
      top = origin.y - smallestDistanceToViewportEdge;
      if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
        top = origin.y - previousHeight / 2;
      }
    }
    const isBoundedByRightViewportEdge = position.overlayX === 'start' && !isRtl || position.overlayX === 'end' && isRtl;
    const isBoundedByLeftViewportEdge = position.overlayX === 'end' && !isRtl || position.overlayX === 'start' && isRtl;
    let width, left, right;
    if (isBoundedByLeftViewportEdge) {
      right = viewport.width - origin.x + this._getViewportMarginStart() + this._getViewportMarginEnd();
      width = origin.x - this._getViewportMarginStart();
    } else if (isBoundedByRightViewportEdge) {
      left = origin.x;
      width = viewport.right - origin.x - this._getViewportMarginEnd();
    } else {
      const smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
      const previousWidth = this._lastBoundingBoxSize.width;
      width = smallestDistanceToViewportEdge * 2;
      left = origin.x - smallestDistanceToViewportEdge;
      if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
        left = origin.x - previousWidth / 2;
      }
    }
    return {
      top: top,
      left: left,
      bottom: bottom,
      right: right,
      width,
      height
    };
  }
  _setBoundingBoxStyles(origin, position) {
    const boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
    if (!this._isInitialRender && !this._growAfterOpen) {
      boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
      boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
    }
    const styles = {};
    if (this._hasExactPosition()) {
      styles.top = styles.left = '0';
      styles.bottom = styles.right = 'auto';
      styles.maxHeight = styles.maxWidth = '';
      styles.width = styles.height = '100%';
    } else {
      const maxHeight = this._overlayRef.getConfig().maxHeight;
      const maxWidth = this._overlayRef.getConfig().maxWidth;
      styles.width = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(boundingBoxRect.width);
      styles.height = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(boundingBoxRect.height);
      styles.top = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(boundingBoxRect.top) || 'auto';
      styles.bottom = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(boundingBoxRect.bottom) || 'auto';
      styles.left = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(boundingBoxRect.left) || 'auto';
      styles.right = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(boundingBoxRect.right) || 'auto';
      if (position.overlayX === 'center') {
        styles.alignItems = 'center';
      } else {
        styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
      }
      if (position.overlayY === 'center') {
        styles.justifyContent = 'center';
      } else {
        styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
      }
      if (maxHeight) {
        styles.maxHeight = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(maxHeight);
      }
      if (maxWidth) {
        styles.maxWidth = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(maxWidth);
      }
    }
    this._lastBoundingBoxSize = boundingBoxRect;
    extendStyles(this._boundingBox.style, styles);
  }
  _resetBoundingBoxStyles() {
    extendStyles(this._boundingBox.style, {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      height: '',
      width: '',
      alignItems: '',
      justifyContent: ''
    });
  }
  _resetOverlayElementStyles() {
    extendStyles(this._pane.style, {
      top: '',
      left: '',
      bottom: '',
      right: '',
      position: '',
      transform: ''
    });
  }
  _setOverlayElementStyles(originPoint, position) {
    const styles = {};
    const hasExactPosition = this._hasExactPosition();
    const hasFlexibleDimensions = this._hasFlexibleDimensions;
    const config = this._overlayRef.getConfig();
    if (hasExactPosition) {
      const scrollPosition = this._viewportRuler.getViewportScrollPosition();
      extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
      extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
    } else {
      styles.position = 'static';
    }
    let transformString = '';
    let offsetX = this._getOffset(position, 'x');
    let offsetY = this._getOffset(position, 'y');
    if (offsetX) {
      transformString += `translateX(${offsetX}px) `;
    }
    if (offsetY) {
      transformString += `translateY(${offsetY}px)`;
    }
    styles.transform = transformString.trim();
    if (config.maxHeight) {
      if (hasExactPosition) {
        styles.maxHeight = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(config.maxHeight);
      } else if (hasFlexibleDimensions) {
        styles.maxHeight = '';
      }
    }
    if (config.maxWidth) {
      if (hasExactPosition) {
        styles.maxWidth = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(config.maxWidth);
      } else if (hasFlexibleDimensions) {
        styles.maxWidth = '';
      }
    }
    extendStyles(this._pane.style, styles);
  }
  _getExactOverlayY(position, originPoint, scrollPosition) {
    let styles = {
      top: '',
      bottom: ''
    };
    let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
    if (this._isPushed) {
      overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
    }
    if (position.overlayY === 'bottom') {
      const documentHeight = this._document.documentElement.clientHeight;
      styles.bottom = `${documentHeight - (overlayPoint.y + this._overlayRect.height)}px`;
    } else {
      styles.top = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(overlayPoint.y);
    }
    return styles;
  }
  _getExactOverlayX(position, originPoint, scrollPosition) {
    let styles = {
      left: '',
      right: ''
    };
    let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
    if (this._isPushed) {
      overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
    }
    let horizontalStyleProperty;
    if (this._isRtl()) {
      horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
    } else {
      horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
    }
    if (horizontalStyleProperty === 'right') {
      const documentWidth = this._document.documentElement.clientWidth;
      styles.right = `${documentWidth - (overlayPoint.x + this._overlayRect.width)}px`;
    } else {
      styles.left = (0,_css_pixel_value_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.coerceCssPixelValue)(overlayPoint.x);
    }
    return styles;
  }
  _getScrollVisibility() {
    const originBounds = this._getOriginRect();
    const overlayBounds = this._pane.getBoundingClientRect();
    const scrollContainerBounds = this._scrollables.map(scrollable => {
      return scrollable.getElementRef().nativeElement.getBoundingClientRect();
    });
    return {
      isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
      isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
      isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
      isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
    };
  }
  _subtractOverflows(length, ...overflows) {
    return overflows.reduce((currentValue, currentOverflow) => {
      return currentValue - Math.max(currentOverflow, 0);
    }, length);
  }
  _getNarrowedViewportRect() {
    const width = this._document.documentElement.clientWidth;
    const height = this._document.documentElement.clientHeight;
    const scrollPosition = this._viewportRuler.getViewportScrollPosition();
    return {
      top: scrollPosition.top + this._getViewportMarginTop(),
      left: scrollPosition.left + this._getViewportMarginStart(),
      right: scrollPosition.left + width - this._getViewportMarginEnd(),
      bottom: scrollPosition.top + height - this._getViewportMarginBottom(),
      width: width - this._getViewportMarginStart() - this._getViewportMarginEnd(),
      height: height - this._getViewportMarginTop() - this._getViewportMarginBottom()
    };
  }
  _isRtl() {
    return this._overlayRef.getDirection() === 'rtl';
  }
  _hasExactPosition() {
    return !this._hasFlexibleDimensions || this._isPushed;
  }
  _getOffset(position, axis) {
    if (axis === 'x') {
      return position.offsetX == null ? this._offsetX : position.offsetX;
    }
    return position.offsetY == null ? this._offsetY : position.offsetY;
  }
  _validatePositions() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._preferredPositions.length) {
        throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
      }
      this._preferredPositions.forEach(pair => {
        validateHorizontalPosition('originX', pair.originX);
        validateVerticalPosition('originY', pair.originY);
        validateHorizontalPosition('overlayX', pair.overlayX);
        validateVerticalPosition('overlayY', pair.overlayY);
      });
    }
  }
  _addPanelClasses(cssClasses) {
    if (this._pane) {
      (0,_array_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.coerceArray)(cssClasses).forEach(cssClass => {
        if (cssClass !== '' && this._appliedPanelClasses.indexOf(cssClass) === -1) {
          this._appliedPanelClasses.push(cssClass);
          this._pane.classList.add(cssClass);
        }
      });
    }
  }
  _clearPanelClasses() {
    if (this._pane) {
      this._appliedPanelClasses.forEach(cssClass => {
        this._pane.classList.remove(cssClass);
      });
      this._appliedPanelClasses = [];
    }
  }
  _getViewportMarginStart() {
    if (typeof this._viewportMargin === 'number') return this._viewportMargin;
    return this._viewportMargin?.start ?? 0;
  }
  _getViewportMarginEnd() {
    if (typeof this._viewportMargin === 'number') return this._viewportMargin;
    return this._viewportMargin?.end ?? 0;
  }
  _getViewportMarginTop() {
    if (typeof this._viewportMargin === 'number') return this._viewportMargin;
    return this._viewportMargin?.top ?? 0;
  }
  _getViewportMarginBottom() {
    if (typeof this._viewportMargin === 'number') return this._viewportMargin;
    return this._viewportMargin?.bottom ?? 0;
  }
  _getOriginRect() {
    const origin = this._origin;
    if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef) {
      return origin.nativeElement.getBoundingClientRect();
    }
    if (origin instanceof Element) {
      return origin.getBoundingClientRect();
    }
    const width = origin.width || 0;
    const height = origin.height || 0;
    return {
      top: origin.y,
      bottom: origin.y + height,
      left: origin.x,
      right: origin.x + width,
      height,
      width
    };
  }
  _getContainerRect() {
    const isInlinePopover = this._overlayRef.getConfig().usePopover && this._popoverLocation !== 'global';
    const element = this._overlayContainer.getContainerElement();
    if (isInlinePopover) {
      element.style.display = 'block';
    }
    const dimensions = element.getBoundingClientRect();
    if (isInlinePopover) {
      element.style.display = '';
    }
    return dimensions;
  }
}
function extendStyles(destination, source) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      destination[key] = source[key];
    }
  }
  return destination;
}
function getPixelValue(input) {
  if (typeof input !== 'number' && input != null) {
    const [value, units] = input.split(cssUnitPattern);
    return !units || units === 'px' ? parseFloat(value) : null;
  }
  return input || null;
}
function getRoundedBoundingClientRect(clientRect) {
  return {
    top: Math.floor(clientRect.top),
    right: Math.floor(clientRect.right),
    bottom: Math.floor(clientRect.bottom),
    left: Math.floor(clientRect.left),
    width: Math.floor(clientRect.width),
    height: Math.floor(clientRect.height)
  };
}
function compareScrollVisibility(a, b) {
  if (a === b) {
    return true;
  }
  return a.isOriginClipped === b.isOriginClipped && a.isOriginOutsideView === b.isOriginOutsideView && a.isOverlayClipped === b.isOverlayClipped && a.isOverlayOutsideView === b.isOverlayOutsideView;
}
const STANDARD_DROPDOWN_BELOW_POSITIONS = [{
  originX: 'start',
  originY: 'bottom',
  overlayX: 'start',
  overlayY: 'top'
}, {
  originX: 'start',
  originY: 'top',
  overlayX: 'start',
  overlayY: 'bottom'
}, {
  originX: 'end',
  originY: 'bottom',
  overlayX: 'end',
  overlayY: 'top'
}, {
  originX: 'end',
  originY: 'top',
  overlayX: 'end',
  overlayY: 'bottom'
}];
const STANDARD_DROPDOWN_ADJACENT_POSITIONS = [{
  originX: 'end',
  originY: 'top',
  overlayX: 'start',
  overlayY: 'top'
}, {
  originX: 'end',
  originY: 'bottom',
  overlayX: 'start',
  overlayY: 'bottom'
}, {
  originX: 'start',
  originY: 'top',
  overlayX: 'end',
  overlayY: 'top'
}, {
  originX: 'start',
  originY: 'bottom',
  overlayX: 'end',
  overlayY: 'bottom'
}];
const wrapperClass = 'cdk-global-overlay-wrapper';
function createGlobalPositionStrategy(_injector) {
  return new GlobalPositionStrategy();
}
class GlobalPositionStrategy {
  _overlayRef;
  _cssPosition = 'static';
  _topOffset = '';
  _bottomOffset = '';
  _alignItems = '';
  _xPosition = '';
  _xOffset = '';
  _width = '';
  _height = '';
  _isDisposed = false;
  attach(overlayRef) {
    const config = overlayRef.getConfig();
    this._overlayRef = overlayRef;
    if (this._width && !config.width) {
      overlayRef.updateSize({
        width: this._width
      });
    }
    if (this._height && !config.height) {
      overlayRef.updateSize({
        height: this._height
      });
    }
    overlayRef.hostElement.classList.add(wrapperClass);
    this._isDisposed = false;
  }
  top(value = '') {
    this._bottomOffset = '';
    this._topOffset = value;
    this._alignItems = 'flex-start';
    return this;
  }
  left(value = '') {
    this._xOffset = value;
    this._xPosition = 'left';
    return this;
  }
  bottom(value = '') {
    this._topOffset = '';
    this._bottomOffset = value;
    this._alignItems = 'flex-end';
    return this;
  }
  right(value = '') {
    this._xOffset = value;
    this._xPosition = 'right';
    return this;
  }
  start(value = '') {
    this._xOffset = value;
    this._xPosition = 'start';
    return this;
  }
  end(value = '') {
    this._xOffset = value;
    this._xPosition = 'end';
    return this;
  }
  width(value = '') {
    if (this._overlayRef) {
      this._overlayRef.updateSize({
        width: value
      });
    } else {
      this._width = value;
    }
    return this;
  }
  height(value = '') {
    if (this._overlayRef) {
      this._overlayRef.updateSize({
        height: value
      });
    } else {
      this._height = value;
    }
    return this;
  }
  centerHorizontally(offset = '') {
    this.left(offset);
    this._xPosition = 'center';
    return this;
  }
  centerVertically(offset = '') {
    this.top(offset);
    this._alignItems = 'center';
    return this;
  }
  apply() {
    if (!this._overlayRef || !this._overlayRef.hasAttached()) {
      return;
    }
    const styles = this._overlayRef.overlayElement.style;
    const parentStyles = this._overlayRef.hostElement.style;
    const config = this._overlayRef.getConfig();
    const {
      width,
      height,
      maxWidth,
      maxHeight
    } = config;
    const shouldBeFlushHorizontally = (width === '100%' || width === '100vw') && (!maxWidth || maxWidth === '100%' || maxWidth === '100vw');
    const shouldBeFlushVertically = (height === '100%' || height === '100vh') && (!maxHeight || maxHeight === '100%' || maxHeight === '100vh');
    const xPosition = this._xPosition;
    const xOffset = this._xOffset;
    const isRtl = this._overlayRef.getConfig().direction === 'rtl';
    let marginLeft = '';
    let marginRight = '';
    let justifyContent = '';
    if (shouldBeFlushHorizontally) {
      justifyContent = 'flex-start';
    } else if (xPosition === 'center') {
      justifyContent = 'center';
      if (isRtl) {
        marginRight = xOffset;
      } else {
        marginLeft = xOffset;
      }
    } else if (isRtl) {
      if (xPosition === 'left' || xPosition === 'end') {
        justifyContent = 'flex-end';
        marginLeft = xOffset;
      } else if (xPosition === 'right' || xPosition === 'start') {
        justifyContent = 'flex-start';
        marginRight = xOffset;
      }
    } else if (xPosition === 'left' || xPosition === 'start') {
      justifyContent = 'flex-start';
      marginLeft = xOffset;
    } else if (xPosition === 'right' || xPosition === 'end') {
      justifyContent = 'flex-end';
      marginRight = xOffset;
    }
    styles.position = this._cssPosition;
    styles.marginLeft = shouldBeFlushHorizontally ? '0' : marginLeft;
    styles.marginTop = shouldBeFlushVertically ? '0' : this._topOffset;
    styles.marginBottom = this._bottomOffset;
    styles.marginRight = shouldBeFlushHorizontally ? '0' : marginRight;
    parentStyles.justifyContent = justifyContent;
    parentStyles.alignItems = shouldBeFlushVertically ? 'flex-start' : this._alignItems;
  }
  dispose() {
    if (this._isDisposed || !this._overlayRef) {
      return;
    }
    const styles = this._overlayRef.overlayElement.style;
    const parent = this._overlayRef.hostElement;
    const parentStyles = parent.style;
    parent.classList.remove(wrapperClass);
    parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
    this._overlayRef = null;
    this._isDisposed = true;
  }
}
let OverlayPositionBuilder = /*#__PURE__*/(() => {
  class OverlayPositionBuilder {
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    constructor() {}
    global() {
      return createGlobalPositionStrategy();
    }
    flexibleConnectedTo(origin) {
      return createFlexibleConnectedPositionStrategy(this._injector, origin);
    }
    static ɵfac = function OverlayPositionBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OverlayPositionBuilder)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OverlayPositionBuilder,
      factory: OverlayPositionBuilder.ɵfac,
      providedIn: 'root'
    });
  }
  return OverlayPositionBuilder;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const OVERLAY_DEFAULT_CONFIG = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('OVERLAY_DEFAULT_CONFIG');
function createOverlayRef(injector, config) {
  injector.get(_style_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__._CdkPrivateStyleLoader).load(_CdkOverlayStyleLoader);
  const overlayContainer = injector.get(OverlayContainer);
  const doc = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
  const idGenerator = injector.get(_id_generator_chunk_mjs__WEBPACK_IMPORTED_MODULE_13__._IdGenerator);
  const appRef = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
  const directionality = injector.get(_directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_14__.Directionality);
  const renderer = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2, null, {
    optional: true
  }) || injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
  const overlayConfig = new OverlayConfig(config);
  const defaultUsePopover = injector.get(OVERLAY_DEFAULT_CONFIG, null, {
    optional: true
  })?.usePopover ?? true;
  overlayConfig.direction = overlayConfig.direction || directionality.value;
  if (!('showPopover' in doc.body)) {
    overlayConfig.usePopover = false;
  } else {
    overlayConfig.usePopover = config?.usePopover ?? defaultUsePopover;
  }
  const pane = doc.createElement('div');
  const host = doc.createElement('div');
  pane.id = idGenerator.getId('cdk-overlay-');
  pane.classList.add('cdk-overlay-pane');
  host.appendChild(pane);
  if (overlayConfig.usePopover) {
    host.setAttribute('popover', 'manual');
    host.classList.add('cdk-overlay-popover');
  }
  const customInsertionPoint = overlayConfig.usePopover ? overlayConfig.positionStrategy?.getPopoverInsertionPoint?.() : null;
  if (isElement(customInsertionPoint)) {
    customInsertionPoint.after(host);
  } else if (customInsertionPoint?.type === 'parent') {
    customInsertionPoint.element.appendChild(host);
  } else {
    overlayContainer.getContainerElement().appendChild(host);
  }
  return new OverlayRef(new _portal_mjs__WEBPACK_IMPORTED_MODULE_10__.DomPortalOutlet(pane, appRef, injector), host, pane, overlayConfig, injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), injector.get(OverlayKeyboardDispatcher), doc, injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_1__.Location), injector.get(OverlayOutsideClickDispatcher), config?.disableAnimations ?? injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, null, {
    optional: true
  }) === 'NoopAnimations', injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.EnvironmentInjector), renderer);
}
let Overlay = /*#__PURE__*/(() => {
  class Overlay {
    scrollStrategies = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ScrollStrategyOptions);
    _positionBuilder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(OverlayPositionBuilder);
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    constructor() {}
    create(config) {
      return createOverlayRef(this._injector, config);
    }
    position() {
      return this._positionBuilder;
    }
    static ɵfac = function Overlay_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Overlay)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Overlay,
      factory: Overlay.ɵfac,
      providedIn: 'root'
    });
  }
  return Overlay;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const defaultPositionList = [{
  originX: 'start',
  originY: 'bottom',
  overlayX: 'start',
  overlayY: 'top'
}, {
  originX: 'start',
  originY: 'top',
  overlayX: 'start',
  overlayY: 'bottom'
}, {
  originX: 'end',
  originY: 'top',
  overlayX: 'end',
  overlayY: 'bottom'
}, {
  originX: 'end',
  originY: 'bottom',
  overlayX: 'end',
  overlayY: 'top'
}];
const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-connected-overlay-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    const injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
let CdkOverlayOrigin = /*#__PURE__*/(() => {
  class CdkOverlayOrigin {
    elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    constructor() {}
    static ɵfac = function CdkOverlayOrigin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkOverlayOrigin)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkOverlayOrigin,
      selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
      exportAs: ["cdkOverlayOrigin"]
    });
  }
  return CdkOverlayOrigin;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const CDK_CONNECTED_OVERLAY_DEFAULT_CONFIG = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-connected-overlay-default-config');
let CdkConnectedOverlay = /*#__PURE__*/(() => {
  class CdkConnectedOverlay {
    _dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_14__.Directionality, {
      optional: true
    });
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    _overlayRef;
    _templatePortal;
    _backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    _attachSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    _detachSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    _positionSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    _offsetX;
    _offsetY;
    _position;
    _scrollStrategyFactory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    origin;
    positions;
    positionStrategy;
    get offsetX() {
      return this._offsetX;
    }
    set offsetX(offsetX) {
      this._offsetX = offsetX;
      if (this._position) {
        this._updatePositionStrategy(this._position);
      }
    }
    get offsetY() {
      return this._offsetY;
    }
    set offsetY(offsetY) {
      this._offsetY = offsetY;
      if (this._position) {
        this._updatePositionStrategy(this._position);
      }
    }
    width;
    height;
    minWidth;
    minHeight;
    backdropClass;
    panelClass;
    viewportMargin = 0;
    scrollStrategy;
    open = false;
    disableClose = false;
    transformOriginSelector;
    hasBackdrop = false;
    lockPosition = false;
    flexibleDimensions = false;
    growAfterOpen = false;
    push = false;
    disposeOnNavigation = false;
    usePopover;
    matchWidth = false;
    set _config(value) {
      if (typeof value !== 'string') {
        this._assignConfig(value);
      }
    }
    backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    attach = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    detach = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    overlayOutsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    constructor() {
      const templateRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      const viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
      const defaultConfig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CDK_CONNECTED_OVERLAY_DEFAULT_CONFIG, {
        optional: true
      });
      const globalConfig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(OVERLAY_DEFAULT_CONFIG, {
        optional: true
      });
      this.usePopover = globalConfig?.usePopover === false ? null : 'global';
      this._templatePortal = new _portal_mjs__WEBPACK_IMPORTED_MODULE_10__.TemplatePortal(templateRef, viewContainerRef);
      this.scrollStrategy = this._scrollStrategyFactory();
      if (defaultConfig) {
        this._assignConfig(defaultConfig);
      }
    }
    get overlayRef() {
      return this._overlayRef;
    }
    get dir() {
      return this._dir ? this._dir.value : 'ltr';
    }
    ngOnDestroy() {
      this._attachSubscription.unsubscribe();
      this._detachSubscription.unsubscribe();
      this._backdropSubscription.unsubscribe();
      this._positionSubscription.unsubscribe();
      this._overlayRef?.dispose();
    }
    ngOnChanges(changes) {
      if (this._position) {
        this._updatePositionStrategy(this._position);
        this._overlayRef?.updateSize({
          width: this._getWidth(),
          minWidth: this.minWidth,
          height: this.height,
          minHeight: this.minHeight
        });
        if (changes['origin'] && this.open) {
          this._position.apply();
        }
      }
      if (changes['open']) {
        this.open ? this.attachOverlay() : this.detachOverlay();
      }
    }
    _createOverlay() {
      if (!this.positions || !this.positions.length) {
        this.positions = defaultPositionList;
      }
      const overlayRef = this._overlayRef = createOverlayRef(this._injector, this._buildConfig());
      this._attachSubscription = overlayRef.attachments().subscribe(() => this.attach.emit());
      this._detachSubscription = overlayRef.detachments().subscribe(() => this.detach.emit());
      overlayRef.keydownEvents().subscribe(event => {
        this.overlayKeydown.next(event);
        if (event.keyCode === _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_15__.ESCAPE && !this.disableClose && !(0,_keycodes_mjs__WEBPACK_IMPORTED_MODULE_16__.hasModifierKey)(event)) {
          event.preventDefault();
          this.detachOverlay();
        }
      });
      this._overlayRef.outsidePointerEvents().subscribe(event => {
        const origin = this._getOriginElement();
        const target = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__._getEventTarget)(event);
        if (!origin || origin !== target && !origin.contains(target)) {
          this.overlayOutsideClick.next(event);
        }
      });
    }
    _buildConfig() {
      const positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();
      const overlayConfig = new OverlayConfig({
        direction: this._dir || 'ltr',
        positionStrategy,
        scrollStrategy: this.scrollStrategy,
        hasBackdrop: this.hasBackdrop,
        disposeOnNavigation: this.disposeOnNavigation,
        usePopover: !!this.usePopover
      });
      if (this.height || this.height === 0) {
        overlayConfig.height = this.height;
      }
      if (this.minWidth || this.minWidth === 0) {
        overlayConfig.minWidth = this.minWidth;
      }
      if (this.minHeight || this.minHeight === 0) {
        overlayConfig.minHeight = this.minHeight;
      }
      if (this.backdropClass) {
        overlayConfig.backdropClass = this.backdropClass;
      }
      if (this.panelClass) {
        overlayConfig.panelClass = this.panelClass;
      }
      return overlayConfig;
    }
    _updatePositionStrategy(positionStrategy) {
      const positions = this.positions.map(currentPosition => ({
        originX: currentPosition.originX,
        originY: currentPosition.originY,
        overlayX: currentPosition.overlayX,
        overlayY: currentPosition.overlayY,
        offsetX: currentPosition.offsetX || this.offsetX,
        offsetY: currentPosition.offsetY || this.offsetY,
        panelClass: currentPosition.panelClass || undefined
      }));
      return positionStrategy.setOrigin(this._getOrigin()).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover === null ? 'global' : this.usePopover);
    }
    _createPositionStrategy() {
      const strategy = createFlexibleConnectedPositionStrategy(this._injector, this._getOrigin());
      this._updatePositionStrategy(strategy);
      return strategy;
    }
    _getOrigin() {
      if (this.origin instanceof CdkOverlayOrigin) {
        return this.origin.elementRef;
      } else {
        return this.origin;
      }
    }
    _getOriginElement() {
      if (this.origin instanceof CdkOverlayOrigin) {
        return this.origin.elementRef.nativeElement;
      }
      if (this.origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef) {
        return this.origin.nativeElement;
      }
      if (typeof Element !== 'undefined' && this.origin instanceof Element) {
        return this.origin;
      }
      return null;
    }
    _getWidth() {
      if (this.width) {
        return this.width;
      }
      return this.matchWidth ? this._getOriginElement()?.getBoundingClientRect?.().width : undefined;
    }
    attachOverlay() {
      if (!this._overlayRef) {
        this._createOverlay();
      }
      const ref = this._overlayRef;
      ref.getConfig().hasBackdrop = this.hasBackdrop;
      ref.updateSize({
        width: this._getWidth()
      });
      if (!ref.hasAttached()) {
        ref.attach(this._templatePortal);
      }
      if (this.hasBackdrop) {
        this._backdropSubscription = ref.backdropClick().subscribe(event => this.backdropClick.emit(event));
      } else {
        this._backdropSubscription.unsubscribe();
      }
      this._positionSubscription.unsubscribe();
      if (this.positionChange.observers.length > 0) {
        this._positionSubscription = this._position.positionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeWhile)(() => this.positionChange.observers.length > 0)).subscribe(position => {
          this._ngZone.run(() => this.positionChange.emit(position));
          if (this.positionChange.observers.length === 0) {
            this._positionSubscription.unsubscribe();
          }
        });
      }
      this.open = true;
    }
    detachOverlay() {
      this._overlayRef?.detach();
      this._backdropSubscription.unsubscribe();
      this._positionSubscription.unsubscribe();
      this.open = false;
    }
    _assignConfig(config) {
      this.origin = config.origin ?? this.origin;
      this.positions = config.positions ?? this.positions;
      this.positionStrategy = config.positionStrategy ?? this.positionStrategy;
      this.offsetX = config.offsetX ?? this.offsetX;
      this.offsetY = config.offsetY ?? this.offsetY;
      this.width = config.width ?? this.width;
      this.height = config.height ?? this.height;
      this.minWidth = config.minWidth ?? this.minWidth;
      this.minHeight = config.minHeight ?? this.minHeight;
      this.backdropClass = config.backdropClass ?? this.backdropClass;
      this.panelClass = config.panelClass ?? this.panelClass;
      this.viewportMargin = config.viewportMargin ?? this.viewportMargin;
      this.scrollStrategy = config.scrollStrategy ?? this.scrollStrategy;
      this.disableClose = config.disableClose ?? this.disableClose;
      this.transformOriginSelector = config.transformOriginSelector ?? this.transformOriginSelector;
      this.hasBackdrop = config.hasBackdrop ?? this.hasBackdrop;
      this.lockPosition = config.lockPosition ?? this.lockPosition;
      this.flexibleDimensions = config.flexibleDimensions ?? this.flexibleDimensions;
      this.growAfterOpen = config.growAfterOpen ?? this.growAfterOpen;
      this.push = config.push ?? this.push;
      this.disposeOnNavigation = config.disposeOnNavigation ?? this.disposeOnNavigation;
      this.usePopover = config.usePopover ?? this.usePopover;
      this.matchWidth = config.matchWidth ?? this.matchWidth;
    }
    static ɵfac = function CdkConnectedOverlay_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkConnectedOverlay)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkConnectedOverlay,
      selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]],
      inputs: {
        origin: [0, "cdkConnectedOverlayOrigin", "origin"],
        positions: [0, "cdkConnectedOverlayPositions", "positions"],
        positionStrategy: [0, "cdkConnectedOverlayPositionStrategy", "positionStrategy"],
        offsetX: [0, "cdkConnectedOverlayOffsetX", "offsetX"],
        offsetY: [0, "cdkConnectedOverlayOffsetY", "offsetY"],
        width: [0, "cdkConnectedOverlayWidth", "width"],
        height: [0, "cdkConnectedOverlayHeight", "height"],
        minWidth: [0, "cdkConnectedOverlayMinWidth", "minWidth"],
        minHeight: [0, "cdkConnectedOverlayMinHeight", "minHeight"],
        backdropClass: [0, "cdkConnectedOverlayBackdropClass", "backdropClass"],
        panelClass: [0, "cdkConnectedOverlayPanelClass", "panelClass"],
        viewportMargin: [0, "cdkConnectedOverlayViewportMargin", "viewportMargin"],
        scrollStrategy: [0, "cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
        open: [0, "cdkConnectedOverlayOpen", "open"],
        disableClose: [0, "cdkConnectedOverlayDisableClose", "disableClose"],
        transformOriginSelector: [0, "cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"],
        hasBackdrop: [2, "cdkConnectedOverlayHasBackdrop", "hasBackdrop", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        lockPosition: [2, "cdkConnectedOverlayLockPosition", "lockPosition", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        flexibleDimensions: [2, "cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        growAfterOpen: [2, "cdkConnectedOverlayGrowAfterOpen", "growAfterOpen", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        push: [2, "cdkConnectedOverlayPush", "push", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        disposeOnNavigation: [2, "cdkConnectedOverlayDisposeOnNavigation", "disposeOnNavigation", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        usePopover: [0, "cdkConnectedOverlayUsePopover", "usePopover"],
        matchWidth: [2, "cdkConnectedOverlayMatchWidth", "matchWidth", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        _config: [0, "cdkConnectedOverlay", "_config"]
      },
      outputs: {
        backdropClick: "backdropClick",
        positionChange: "positionChange",
        attach: "attach",
        detach: "detach",
        overlayKeydown: "overlayKeydown",
        overlayOutsideClick: "overlayOutsideClick"
      },
      exportAs: ["cdkConnectedOverlay"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
  return CdkConnectedOverlay;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let OverlayModule = /*#__PURE__*/(() => {
  class OverlayModule {
    static ɵfac = function OverlayModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OverlayModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OverlayModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      providers: [Overlay],
      imports: [_bidi_mjs__WEBPACK_IMPORTED_MODULE_17__.BidiModule, _portal_mjs__WEBPACK_IMPORTED_MODULE_10__.PortalModule, _scrolling_mjs__WEBPACK_IMPORTED_MODULE_9__.ScrollingModule, _scrolling_mjs__WEBPACK_IMPORTED_MODULE_9__.ScrollingModule]
    });
  }
  return OverlayModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 97552
/*!****************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_keycodes-chunk.mjs ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ A),
/* harmony export */   ALT: () => (/* binding */ ALT),
/* harmony export */   APOSTROPHE: () => (/* binding */ APOSTROPHE),
/* harmony export */   AT_SIGN: () => (/* binding */ AT_SIGN),
/* harmony export */   B: () => (/* binding */ B),
/* harmony export */   BACKSLASH: () => (/* binding */ BACKSLASH),
/* harmony export */   BACKSPACE: () => (/* binding */ BACKSPACE),
/* harmony export */   C: () => (/* binding */ C),
/* harmony export */   CAPS_LOCK: () => (/* binding */ CAPS_LOCK),
/* harmony export */   CLOSE_SQUARE_BRACKET: () => (/* binding */ CLOSE_SQUARE_BRACKET),
/* harmony export */   COMMA: () => (/* binding */ COMMA),
/* harmony export */   CONTEXT_MENU: () => (/* binding */ CONTEXT_MENU),
/* harmony export */   CONTROL: () => (/* binding */ CONTROL),
/* harmony export */   D: () => (/* binding */ D),
/* harmony export */   DASH: () => (/* binding */ DASH),
/* harmony export */   DELETE: () => (/* binding */ DELETE),
/* harmony export */   DOWN_ARROW: () => (/* binding */ DOWN_ARROW),
/* harmony export */   E: () => (/* binding */ E),
/* harmony export */   EIGHT: () => (/* binding */ EIGHT),
/* harmony export */   END: () => (/* binding */ END),
/* harmony export */   ENTER: () => (/* binding */ ENTER),
/* harmony export */   EQUALS: () => (/* binding */ EQUALS),
/* harmony export */   ESCAPE: () => (/* binding */ ESCAPE),
/* harmony export */   F: () => (/* binding */ F),
/* harmony export */   F1: () => (/* binding */ F1),
/* harmony export */   F10: () => (/* binding */ F10),
/* harmony export */   F11: () => (/* binding */ F11),
/* harmony export */   F12: () => (/* binding */ F12),
/* harmony export */   F2: () => (/* binding */ F2),
/* harmony export */   F3: () => (/* binding */ F3),
/* harmony export */   F4: () => (/* binding */ F4),
/* harmony export */   F5: () => (/* binding */ F5),
/* harmony export */   F6: () => (/* binding */ F6),
/* harmony export */   F7: () => (/* binding */ F7),
/* harmony export */   F8: () => (/* binding */ F8),
/* harmony export */   F9: () => (/* binding */ F9),
/* harmony export */   FF_EQUALS: () => (/* binding */ FF_EQUALS),
/* harmony export */   FF_MINUS: () => (/* binding */ FF_MINUS),
/* harmony export */   FF_MUTE: () => (/* binding */ FF_MUTE),
/* harmony export */   FF_SEMICOLON: () => (/* binding */ FF_SEMICOLON),
/* harmony export */   FF_VOLUME_DOWN: () => (/* binding */ FF_VOLUME_DOWN),
/* harmony export */   FF_VOLUME_UP: () => (/* binding */ FF_VOLUME_UP),
/* harmony export */   FIRST_MEDIA: () => (/* binding */ FIRST_MEDIA),
/* harmony export */   FIVE: () => (/* binding */ FIVE),
/* harmony export */   FOUR: () => (/* binding */ FOUR),
/* harmony export */   G: () => (/* binding */ G),
/* harmony export */   H: () => (/* binding */ H),
/* harmony export */   HOME: () => (/* binding */ HOME),
/* harmony export */   I: () => (/* binding */ I),
/* harmony export */   INSERT: () => (/* binding */ INSERT),
/* harmony export */   J: () => (/* binding */ J),
/* harmony export */   K: () => (/* binding */ K),
/* harmony export */   L: () => (/* binding */ L),
/* harmony export */   LAST_MEDIA: () => (/* binding */ LAST_MEDIA),
/* harmony export */   LEFT_ARROW: () => (/* binding */ LEFT_ARROW),
/* harmony export */   M: () => (/* binding */ M),
/* harmony export */   MAC_ENTER: () => (/* binding */ MAC_ENTER),
/* harmony export */   MAC_META: () => (/* binding */ MAC_META),
/* harmony export */   MAC_WK_CMD_LEFT: () => (/* binding */ MAC_WK_CMD_LEFT),
/* harmony export */   MAC_WK_CMD_RIGHT: () => (/* binding */ MAC_WK_CMD_RIGHT),
/* harmony export */   META: () => (/* binding */ META),
/* harmony export */   MUTE: () => (/* binding */ MUTE),
/* harmony export */   N: () => (/* binding */ N),
/* harmony export */   NINE: () => (/* binding */ NINE),
/* harmony export */   NUMPAD_DIVIDE: () => (/* binding */ NUMPAD_DIVIDE),
/* harmony export */   NUMPAD_EIGHT: () => (/* binding */ NUMPAD_EIGHT),
/* harmony export */   NUMPAD_FIVE: () => (/* binding */ NUMPAD_FIVE),
/* harmony export */   NUMPAD_FOUR: () => (/* binding */ NUMPAD_FOUR),
/* harmony export */   NUMPAD_MINUS: () => (/* binding */ NUMPAD_MINUS),
/* harmony export */   NUMPAD_MULTIPLY: () => (/* binding */ NUMPAD_MULTIPLY),
/* harmony export */   NUMPAD_NINE: () => (/* binding */ NUMPAD_NINE),
/* harmony export */   NUMPAD_ONE: () => (/* binding */ NUMPAD_ONE),
/* harmony export */   NUMPAD_PERIOD: () => (/* binding */ NUMPAD_PERIOD),
/* harmony export */   NUMPAD_PLUS: () => (/* binding */ NUMPAD_PLUS),
/* harmony export */   NUMPAD_SEVEN: () => (/* binding */ NUMPAD_SEVEN),
/* harmony export */   NUMPAD_SIX: () => (/* binding */ NUMPAD_SIX),
/* harmony export */   NUMPAD_THREE: () => (/* binding */ NUMPAD_THREE),
/* harmony export */   NUMPAD_TWO: () => (/* binding */ NUMPAD_TWO),
/* harmony export */   NUMPAD_ZERO: () => (/* binding */ NUMPAD_ZERO),
/* harmony export */   NUM_CENTER: () => (/* binding */ NUM_CENTER),
/* harmony export */   NUM_LOCK: () => (/* binding */ NUM_LOCK),
/* harmony export */   O: () => (/* binding */ O),
/* harmony export */   ONE: () => (/* binding */ ONE),
/* harmony export */   OPEN_SQUARE_BRACKET: () => (/* binding */ OPEN_SQUARE_BRACKET),
/* harmony export */   P: () => (/* binding */ P),
/* harmony export */   PAGE_DOWN: () => (/* binding */ PAGE_DOWN),
/* harmony export */   PAGE_UP: () => (/* binding */ PAGE_UP),
/* harmony export */   PAUSE: () => (/* binding */ PAUSE),
/* harmony export */   PERIOD: () => (/* binding */ PERIOD),
/* harmony export */   PLUS_SIGN: () => (/* binding */ PLUS_SIGN),
/* harmony export */   PRINT_SCREEN: () => (/* binding */ PRINT_SCREEN),
/* harmony export */   Q: () => (/* binding */ Q),
/* harmony export */   QUESTION_MARK: () => (/* binding */ QUESTION_MARK),
/* harmony export */   R: () => (/* binding */ R),
/* harmony export */   RIGHT_ARROW: () => (/* binding */ RIGHT_ARROW),
/* harmony export */   S: () => (/* binding */ S),
/* harmony export */   SCROLL_LOCK: () => (/* binding */ SCROLL_LOCK),
/* harmony export */   SEMICOLON: () => (/* binding */ SEMICOLON),
/* harmony export */   SEVEN: () => (/* binding */ SEVEN),
/* harmony export */   SHIFT: () => (/* binding */ SHIFT),
/* harmony export */   SINGLE_QUOTE: () => (/* binding */ SINGLE_QUOTE),
/* harmony export */   SIX: () => (/* binding */ SIX),
/* harmony export */   SLASH: () => (/* binding */ SLASH),
/* harmony export */   SPACE: () => (/* binding */ SPACE),
/* harmony export */   T: () => (/* binding */ T),
/* harmony export */   TAB: () => (/* binding */ TAB),
/* harmony export */   THREE: () => (/* binding */ THREE),
/* harmony export */   TILDE: () => (/* binding */ TILDE),
/* harmony export */   TWO: () => (/* binding */ TWO),
/* harmony export */   U: () => (/* binding */ U),
/* harmony export */   UP_ARROW: () => (/* binding */ UP_ARROW),
/* harmony export */   V: () => (/* binding */ V),
/* harmony export */   VOLUME_DOWN: () => (/* binding */ VOLUME_DOWN),
/* harmony export */   VOLUME_UP: () => (/* binding */ VOLUME_UP),
/* harmony export */   W: () => (/* binding */ W),
/* harmony export */   X: () => (/* binding */ X),
/* harmony export */   Y: () => (/* binding */ Y),
/* harmony export */   Z: () => (/* binding */ Z),
/* harmony export */   ZERO: () => (/* binding */ ZERO)
/* harmony export */ });
const MAC_ENTER = 3;
const BACKSPACE = 8;
const TAB = 9;
const NUM_CENTER = 12;
const ENTER = 13;
const SHIFT = 16;
const CONTROL = 17;
const ALT = 18;
const PAUSE = 19;
const CAPS_LOCK = 20;
const ESCAPE = 27;
const SPACE = 32;
const PAGE_UP = 33;
const PAGE_DOWN = 34;
const END = 35;
const HOME = 36;
const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const PLUS_SIGN = 43;
const PRINT_SCREEN = 44;
const INSERT = 45;
const DELETE = 46;
const ZERO = 48;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const FIVE = 53;
const SIX = 54;
const SEVEN = 55;
const EIGHT = 56;
const NINE = 57;
const FF_SEMICOLON = 59;
const FF_EQUALS = 61;
const QUESTION_MARK = 63;
const AT_SIGN = 64;
const A = 65;
const B = 66;
const C = 67;
const D = 68;
const E = 69;
const F = 70;
const G = 71;
const H = 72;
const I = 73;
const J = 74;
const K = 75;
const L = 76;
const M = 77;
const N = 78;
const O = 79;
const P = 80;
const Q = 81;
const R = 82;
const S = 83;
const T = 84;
const U = 85;
const V = 86;
const W = 87;
const X = 88;
const Y = 89;
const Z = 90;
const META = 91;
const MAC_WK_CMD_LEFT = 91;
const MAC_WK_CMD_RIGHT = 93;
const CONTEXT_MENU = 93;
const NUMPAD_ZERO = 96;
const NUMPAD_ONE = 97;
const NUMPAD_TWO = 98;
const NUMPAD_THREE = 99;
const NUMPAD_FOUR = 100;
const NUMPAD_FIVE = 101;
const NUMPAD_SIX = 102;
const NUMPAD_SEVEN = 103;
const NUMPAD_EIGHT = 104;
const NUMPAD_NINE = 105;
const NUMPAD_MULTIPLY = 106;
const NUMPAD_PLUS = 107;
const NUMPAD_MINUS = 109;
const NUMPAD_PERIOD = 110;
const NUMPAD_DIVIDE = 111;
const F1 = 112;
const F2 = 113;
const F3 = 114;
const F4 = 115;
const F5 = 116;
const F6 = 117;
const F7 = 118;
const F8 = 119;
const F9 = 120;
const F10 = 121;
const F11 = 122;
const F12 = 123;
const NUM_LOCK = 144;
const SCROLL_LOCK = 145;
const FIRST_MEDIA = 166;
const FF_MINUS = 173;
const MUTE = 173;
const VOLUME_DOWN = 174;
const VOLUME_UP = 175;
const FF_MUTE = 181;
const FF_VOLUME_DOWN = 182;
const LAST_MEDIA = 183;
const FF_VOLUME_UP = 183;
const SEMICOLON = 186;
const EQUALS = 187;
const COMMA = 188;
const DASH = 189;
const PERIOD = 190;
const SLASH = 191;
const APOSTROPHE = 192;
const TILDE = 192;
const OPEN_SQUARE_BRACKET = 219;
const BACKSLASH = 220;
const CLOSE_SQUARE_BRACKET = 221;
const SINGLE_QUOTE = 222;
const MAC_META = 224;


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


/***/ },

/***/ 99737
/*!************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_test-environment-chunk.mjs ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _isTestEnvironment: () => (/* binding */ _isTestEnvironment)
/* harmony export */ });
function _isTestEnvironment() {
  return typeof __karma__ !== 'undefined' && !!__karma__ || typeof jasmine !== 'undefined' && !!jasmine || typeof jest !== 'undefined' && !!jest || typeof Mocha !== 'undefined' && !!Mocha;
}


/***/ }

}])
//# sourceMappingURL=9189.js.map