(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[6787],{

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


/***/ }

}])
//# sourceMappingURL=6787.js.map