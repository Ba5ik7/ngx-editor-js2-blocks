(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[6811],{

/***/ 39192
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/platform-browser/fesm2022/animations-async.mjs ***!
  \******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideAnimationsAsync: () => (/* binding */ provideAnimationsAsync),
/* harmony export */   "ɵASYNC_ANIMATION_LOADING_SCHEDULER_FN": () => (/* binding */ ɵASYNC_ANIMATION_LOADING_SCHEDULER_FN),
/* harmony export */   "ɵAsyncAnimationRendererFactory": () => (/* binding */ AsyncAnimationRendererFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 11674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _dom_renderer_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_dom_renderer-chunk.mjs */ 78547);
/**
 * @license Angular v21.1.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */





const ANIMATION_PREFIX = '@';
let AsyncAnimationRendererFactory = /*#__PURE__*/(() => {
  class AsyncAnimationRendererFactory {
    doc;
    delegate;
    zone;
    animationType;
    moduleImpl;
    _rendererFactoryPromise = null;
    scheduler = null;
    injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector);
    loadingSchedulerFn = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ɵASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
      optional: true
    });
    _engine;
    constructor(doc, delegate, zone, animationType, moduleImpl) {
      this.doc = doc;
      this.delegate = delegate;
      this.zone = zone;
      this.animationType = animationType;
      this.moduleImpl = moduleImpl;
    }
    ngOnDestroy() {
      this._engine?.flush();
    }
    loadImpl() {
      const loadFn = () => this.moduleImpl ?? __webpack_require__.e(/*! import() */ 2574).then(__webpack_require__.t.bind(__webpack_require__, /*! @angular/animations/browser */ 42574, 19)).then(m => m);
      let moduleImplPromise;
      if (this.loadingSchedulerFn) {
        moduleImplPromise = this.loadingSchedulerFn(loadFn);
      } else {
        moduleImplPromise = loadFn();
      }
      return moduleImplPromise.catch(e => {
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](5300, (typeof ngDevMode === 'undefined' || ngDevMode) && 'Async loading for animations package was ' + 'enabled, but loading failed. Angular falls back to using regular rendering. ' + "No animations will be displayed and their styles won't be applied.");
      }).then(({
        ɵcreateEngine,
        ɵAnimationRendererFactory
      }) => {
        this._engine = ɵcreateEngine(this.animationType, this.doc);
        const rendererFactory = new ɵAnimationRendererFactory(this.delegate, this._engine, this.zone);
        this.delegate = rendererFactory;
        return rendererFactory;
      });
    }
    createRenderer(hostElement, rendererType) {
      const renderer = this.delegate.createRenderer(hostElement, rendererType);
      if (renderer.ɵtype === 0) {
        return renderer;
      }
      if (typeof renderer.throwOnSyntheticProps === 'boolean') {
        renderer.throwOnSyntheticProps = false;
      }
      const dynamicRenderer = new DynamicDelegationRenderer(renderer);
      if (rendererType?.data?.['animation'] && !this._rendererFactoryPromise) {
        this._rendererFactoryPromise = this.loadImpl();
      }
      this._rendererFactoryPromise?.then(animationRendererFactory => {
        const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
        dynamicRenderer.use(animationRenderer);
        this.scheduler ??= this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵChangeDetectionScheduler"], null, {
          optional: true
        });
        this.scheduler?.notify(10);
      }).catch(e => {
        dynamicRenderer.use(renderer);
      });
      return dynamicRenderer;
    }
    begin() {
      this.delegate.begin?.();
    }
    end() {
      this.delegate.end?.();
    }
    whenRenderingDone() {
      return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
    }
    componentReplaced(componentId) {
      this._engine?.flush();
      this.delegate.componentReplaced?.(componentId);
    }
    static ɵfac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"]();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AsyncAnimationRendererFactory,
      factory: AsyncAnimationRendererFactory.ɵfac
    });
  }
  return AsyncAnimationRendererFactory;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class DynamicDelegationRenderer {
  delegate;
  replay = [];
  ɵtype = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval) {
    this.delegate.removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push(renderer => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push(renderer => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
}
const ɵASYNC_ANIMATION_LOADING_SCHEDULER_FN = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'async_animation_loading_scheduler_fn' : '');
function provideAnimationsAsync(type = 'animations') {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵperformanceMarkFeature"])('NgAsyncAnimations');
  if (typeof ngServerMode !== 'undefined' && ngServerMode) {
    type = 'noop';
  }
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.makeEnvironmentProviders)([{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2,
    useFactory: () => {
      return new AsyncAnimationRendererFactory((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_dom_renderer_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.DomRendererFactory2), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), type);
    }
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE,
    useValue: type === 'noop' ? 'NoopAnimations' : 'BrowserAnimations'
  }]);
}


/***/ },

/***/ 78547
/*!*********************************************************************************!*\
  !*** ./node_modules/@angular/platform-browser/fesm2022/_dom_renderer-chunk.mjs ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomEventsPlugin: () => (/* binding */ DomEventsPlugin),
/* harmony export */   DomRendererFactory2: () => (/* binding */ DomRendererFactory2),
/* harmony export */   EVENT_MANAGER_PLUGINS: () => (/* binding */ EVENT_MANAGER_PLUGINS),
/* harmony export */   EventManager: () => (/* binding */ EventManager),
/* harmony export */   EventManagerPlugin: () => (/* binding */ EventManagerPlugin),
/* harmony export */   REMOVE_STYLES_ON_COMPONENT_DESTROY: () => (/* binding */ REMOVE_STYLES_ON_COMPONENT_DESTROY),
/* harmony export */   SharedStylesHost: () => (/* binding */ SharedStylesHost)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 11674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);
/**
 * @license Angular v21.1.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */




class EventManagerPlugin {
  _doc;
  constructor(_doc) {
    this._doc = _doc;
  }
  manager;
}
let DomEventsPlugin = /*#__PURE__*/(() => {
  class DomEventsPlugin extends EventManagerPlugin {
    constructor(doc) {
      super(doc);
    }
    supports(eventName) {
      return true;
    }
    addEventListener(element, eventName, handler, options) {
      element.addEventListener(eventName, handler, options);
      return () => this.removeEventListener(element, eventName, handler, options);
    }
    removeEventListener(target, eventName, callback, options) {
      return target.removeEventListener(eventName, callback, options);
    }
    static ɵfac = function DomEventsPlugin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DomEventsPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DomEventsPlugin,
      factory: DomEventsPlugin.ɵfac
    });
  }
  return DomEventsPlugin;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const EVENT_MANAGER_PLUGINS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'EventManagerPlugins' : '');
let EventManager = /*#__PURE__*/(() => {
  class EventManager {
    _zone;
    _plugins;
    _eventNameToPlugin = new Map();
    constructor(plugins, _zone) {
      this._zone = _zone;
      plugins.forEach(plugin => {
        plugin.manager = this;
      });
      const otherPlugins = plugins.filter(p => !(p instanceof DomEventsPlugin));
      this._plugins = otherPlugins.slice().reverse();
      const domEventPlugin = plugins.find(p => p instanceof DomEventsPlugin);
      if (domEventPlugin) {
        this._plugins.push(domEventPlugin);
      }
    }
    addEventListener(element, eventName, handler, options) {
      const plugin = this._findPluginFor(eventName);
      return plugin.addEventListener(element, eventName, handler, options);
    }
    getZone() {
      return this._zone;
    }
    _findPluginFor(eventName) {
      let plugin = this._eventNameToPlugin.get(eventName);
      if (plugin) {
        return plugin;
      }
      const plugins = this._plugins;
      plugin = plugins.find(plugin => plugin.supports(eventName));
      if (!plugin) {
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](5101, (typeof ngDevMode === 'undefined' || ngDevMode) && `No event manager plugin found for event ${eventName}`);
      }
      this._eventNameToPlugin.set(eventName, plugin);
      return plugin;
    }
    static ɵfac = function EventManager_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EventManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](EVENT_MANAGER_PLUGINS), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: EventManager,
      factory: EventManager.ɵfac
    });
  }
  return EventManager;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const APP_ID_ATTRIBUTE_NAME = 'ng-app-id';
function removeElements(elements) {
  for (const element of elements) {
    element.remove();
  }
}
function createStyleElement(style, doc) {
  const styleElement = doc.createElement('style');
  styleElement.textContent = style;
  return styleElement;
}
function addServerStyles(doc, appId, inline, external) {
  const elements = doc.head?.querySelectorAll(`style[${APP_ID_ATTRIBUTE_NAME}="${appId}"],link[${APP_ID_ATTRIBUTE_NAME}="${appId}"]`);
  if (elements) {
    for (const styleElement of elements) {
      styleElement.removeAttribute(APP_ID_ATTRIBUTE_NAME);
      if (styleElement instanceof HTMLLinkElement) {
        external.set(styleElement.href.slice(styleElement.href.lastIndexOf('/') + 1), {
          usage: 0,
          elements: [styleElement]
        });
      } else if (styleElement.textContent) {
        inline.set(styleElement.textContent, {
          usage: 0,
          elements: [styleElement]
        });
      }
    }
  }
}
function createLinkElement(url, doc) {
  const linkElement = doc.createElement('link');
  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.setAttribute('href', url);
  return linkElement;
}
let SharedStylesHost = /*#__PURE__*/(() => {
  class SharedStylesHost {
    doc;
    appId;
    nonce;
    inline = new Map();
    external = new Map();
    hosts = new Set();
    constructor(doc, appId, nonce, platformId = {}) {
      this.doc = doc;
      this.appId = appId;
      this.nonce = nonce;
      addServerStyles(doc, appId, this.inline, this.external);
      this.hosts.add(doc.head);
    }
    addStyles(styles, urls) {
      for (const value of styles) {
        this.addUsage(value, this.inline, createStyleElement);
      }
      urls?.forEach(value => this.addUsage(value, this.external, createLinkElement));
    }
    removeStyles(styles, urls) {
      for (const value of styles) {
        this.removeUsage(value, this.inline);
      }
      urls?.forEach(value => this.removeUsage(value, this.external));
    }
    addUsage(value, usages, creator) {
      const record = usages.get(value);
      if (record) {
        if ((typeof ngDevMode === 'undefined' || ngDevMode) && record.usage === 0) {
          record.elements.forEach(element => element.setAttribute('ng-style-reused', ''));
        }
        record.usage++;
      } else {
        usages.set(value, {
          usage: 1,
          elements: [...this.hosts].map(host => this.addElement(host, creator(value, this.doc)))
        });
      }
    }
    removeUsage(value, usages) {
      const record = usages.get(value);
      if (record) {
        record.usage--;
        if (record.usage <= 0) {
          removeElements(record.elements);
          usages.delete(value);
        }
      }
    }
    ngOnDestroy() {
      for (const [, {
        elements
      }] of [...this.inline, ...this.external]) {
        removeElements(elements);
      }
      this.hosts.clear();
    }
    addHost(hostNode) {
      this.hosts.add(hostNode);
      for (const [style, {
        elements
      }] of this.inline) {
        elements.push(this.addElement(hostNode, createStyleElement(style, this.doc)));
      }
      for (const [url, {
        elements
      }] of this.external) {
        elements.push(this.addElement(hostNode, createLinkElement(url, this.doc)));
      }
    }
    removeHost(hostNode) {
      this.hosts.delete(hostNode);
    }
    addElement(host, element) {
      if (this.nonce) {
        element.setAttribute('nonce', this.nonce);
      }
      if (typeof ngServerMode !== 'undefined' && ngServerMode) {
        element.setAttribute(APP_ID_ATTRIBUTE_NAME, this.appId);
      }
      return host.appendChild(element);
    }
    static ɵfac = function SharedStylesHost_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SharedStylesHost)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.CSP_NONCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SharedStylesHost,
      factory: SharedStylesHost.ɵfac
    });
  }
  return SharedStylesHost;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const NAMESPACE_URIS = {
  'svg': 'http://www.w3.org/2000/svg',
  'xhtml': 'http://www.w3.org/1999/xhtml',
  'xlink': 'http://www.w3.org/1999/xlink',
  'xml': 'http://www.w3.org/XML/1998/namespace',
  'xmlns': 'http://www.w3.org/2000/xmlns/',
  'math': 'http://www.w3.org/1998/Math/MathML'
};
const COMPONENT_REGEX = /%COMP%/g;
const SOURCEMAP_URL_REGEXP = /\/\*#\s*sourceMappingURL=(.+?)\s*\*\//;
const PROTOCOL_REGEXP = /^https?:/;
const COMPONENT_VARIABLE = '%COMP%';
const HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
const CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
const REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT = true;
const REMOVE_STYLES_ON_COMPONENT_DESTROY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'RemoveStylesOnCompDestroy' : '', {
  factory: () => REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT
});
function shimContentAttribute(componentShortId) {
  return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimHostAttribute(componentShortId) {
  return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimStylesContent(compId, styles) {
  return styles.map(s => s.replace(COMPONENT_REGEX, compId));
}
function addBaseHrefToCssSourceMap(baseHref, styles) {
  if (!baseHref) {
    return styles;
  }
  const absoluteBaseHrefUrl = new URL(baseHref, 'http://localhost');
  return styles.map(cssContent => {
    if (!cssContent.includes('sourceMappingURL=')) {
      return cssContent;
    }
    return cssContent.replace(SOURCEMAP_URL_REGEXP, (_, sourceMapUrl) => {
      if (sourceMapUrl[0] === '/' || sourceMapUrl.startsWith('data:') || PROTOCOL_REGEXP.test(sourceMapUrl)) {
        return `/*# sourceMappingURL=${sourceMapUrl} */`;
      }
      const {
        pathname: resolvedSourceMapUrl
      } = new URL(sourceMapUrl, absoluteBaseHrefUrl);
      return `/*# sourceMappingURL=${resolvedSourceMapUrl} */`;
    });
  });
}
let DomRendererFactory2 = /*#__PURE__*/(() => {
  class DomRendererFactory2 {
    eventManager;
    sharedStylesHost;
    appId;
    removeStylesOnCompDestroy;
    doc;
    ngZone;
    nonce;
    tracingService;
    rendererByCompId = new Map();
    defaultRenderer;
    constructor(eventManager, sharedStylesHost, appId, removeStylesOnCompDestroy, doc, ngZone, nonce = null, tracingService = null) {
      this.eventManager = eventManager;
      this.sharedStylesHost = sharedStylesHost;
      this.appId = appId;
      this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
      this.doc = doc;
      this.ngZone = ngZone;
      this.nonce = nonce;
      this.tracingService = tracingService;
      this.defaultRenderer = new DefaultDomRenderer2(eventManager, doc, ngZone, this.tracingService);
    }
    createRenderer(element, type) {
      if (!element || !type) {
        return this.defaultRenderer;
      }
      if (typeof ngServerMode !== 'undefined' && ngServerMode && (type.encapsulation === _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.ShadowDom || type.encapsulation === _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.ExperimentalIsolatedShadowDom)) {
        type = {
          ...type,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.Emulated
        };
      }
      const renderer = this.getOrCreateRenderer(element, type);
      if (renderer instanceof EmulatedEncapsulationDomRenderer2) {
        renderer.applyToHost(element);
      } else if (renderer instanceof NoneEncapsulationDomRenderer) {
        renderer.applyStyles();
      }
      return renderer;
    }
    getOrCreateRenderer(element, type) {
      const rendererByCompId = this.rendererByCompId;
      let renderer = rendererByCompId.get(type.id);
      if (!renderer) {
        const doc = this.doc;
        const ngZone = this.ngZone;
        const eventManager = this.eventManager;
        const sharedStylesHost = this.sharedStylesHost;
        const removeStylesOnCompDestroy = this.removeStylesOnCompDestroy;
        const tracingService = this.tracingService;
        switch (type.encapsulation) {
          case _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.Emulated:
            renderer = new EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, type, this.appId, removeStylesOnCompDestroy, doc, ngZone, tracingService);
            break;
          case _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.ShadowDom:
            return new ShadowDomRenderer(eventManager, element, type, doc, ngZone, this.nonce, tracingService, sharedStylesHost);
          case _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.ExperimentalIsolatedShadowDom:
            return new ShadowDomRenderer(eventManager, element, type, doc, ngZone, this.nonce, tracingService);
          default:
            renderer = new NoneEncapsulationDomRenderer(eventManager, sharedStylesHost, type, removeStylesOnCompDestroy, doc, ngZone, tracingService);
            break;
        }
        rendererByCompId.set(type.id, renderer);
      }
      return renderer;
    }
    ngOnDestroy() {
      this.rendererByCompId.clear();
    }
    componentReplaced(componentId) {
      this.rendererByCompId.delete(componentId);
    }
    static ɵfac = function DomRendererFactory2_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DomRendererFactory2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](EventManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](SharedStylesHost), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](REMOVE_STYLES_ON_COMPONENT_DESTROY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.CSP_NONCE), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵTracingService"], 8));
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DomRendererFactory2,
      factory: DomRendererFactory2.ɵfac
    });
  }
  return DomRendererFactory2;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class DefaultDomRenderer2 {
  eventManager;
  doc;
  ngZone;
  tracingService;
  data = /*#__PURE__*/Object.create(null);
  throwOnSyntheticProps = true;
  constructor(eventManager, doc, ngZone, tracingService) {
    this.eventManager = eventManager;
    this.doc = doc;
    this.ngZone = ngZone;
    this.tracingService = tracingService;
  }
  destroy() {}
  destroyNode = null;
  createElement(name, namespace) {
    if (namespace) {
      return this.doc.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
    }
    return this.doc.createElement(name);
  }
  createComment(value) {
    return this.doc.createComment(value);
  }
  createText(value) {
    return this.doc.createTextNode(value);
  }
  appendChild(parent, newChild) {
    const targetParent = isTemplateNode(parent) ? parent.content : parent;
    targetParent.appendChild(newChild);
  }
  insertBefore(parent, newChild, refChild) {
    if (parent) {
      const targetParent = isTemplateNode(parent) ? parent.content : parent;
      targetParent.insertBefore(newChild, refChild);
    }
  }
  removeChild(_parent, oldChild) {
    oldChild.remove();
  }
  selectRootElement(selectorOrNode, preserveContent) {
    let el = typeof selectorOrNode === 'string' ? this.doc.querySelector(selectorOrNode) : selectorOrNode;
    if (!el) {
      throw new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](-5104, (typeof ngDevMode === 'undefined' || ngDevMode) && `The selector "${selectorOrNode}" did not match any elements`);
    }
    if (!preserveContent) {
      el.textContent = '';
    }
    return el;
  }
  parentNode(node) {
    return node.parentNode;
  }
  nextSibling(node) {
    return node.nextSibling;
  }
  setAttribute(el, name, value, namespace) {
    if (namespace) {
      name = namespace + ':' + name;
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.setAttributeNS(namespaceUri, name, value);
      } else {
        el.setAttribute(name, value);
      }
    } else {
      el.setAttribute(name, value);
    }
  }
  removeAttribute(el, name, namespace) {
    if (namespace) {
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.removeAttributeNS(namespaceUri, name);
      } else {
        el.removeAttribute(`${namespace}:${name}`);
      }
    } else {
      el.removeAttribute(name);
    }
  }
  addClass(el, name) {
    el.classList.add(name);
  }
  removeClass(el, name) {
    el.classList.remove(name);
  }
  setStyle(el, style, value, flags) {
    if (flags & (_angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererStyleFlags2.DashCase | _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererStyleFlags2.Important)) {
      el.style.setProperty(style, value, flags & _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererStyleFlags2.Important ? 'important' : '');
    } else {
      el.style[style] = value;
    }
  }
  removeStyle(el, style, flags) {
    if (flags & _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererStyleFlags2.DashCase) {
      el.style.removeProperty(style);
    } else {
      el.style[style] = '';
    }
  }
  setProperty(el, name, value) {
    if (el == null) {
      return;
    }
    (typeof ngDevMode === 'undefined' || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(name, 'property');
    el[name] = value;
  }
  setValue(node, value) {
    node.nodeValue = value;
  }
  listen(target, event, callback, options) {
    (typeof ngDevMode === 'undefined' || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(event, 'listener');
    if (typeof target === 'string') {
      target = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])().getGlobalEventTarget(this.doc, target);
      if (!target) {
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](5102, (typeof ngDevMode === 'undefined' || ngDevMode) && `Unsupported event target ${target} for event ${event}`);
      }
    }
    let wrappedCallback = this.decoratePreventDefault(callback);
    if (this.tracingService?.wrapEventListener) {
      wrappedCallback = this.tracingService.wrapEventListener(target, event, wrappedCallback);
    }
    return this.eventManager.addEventListener(target, event, wrappedCallback, options);
  }
  decoratePreventDefault(eventHandler) {
    return event => {
      if (event === '__ngUnwrap__') {
        return eventHandler;
      }
      const allowDefaultBehavior = typeof ngServerMode !== 'undefined' && ngServerMode ? this.ngZone.runGuarded(() => eventHandler(event)) : eventHandler(event);
      if (allowDefaultBehavior === false) {
        event.preventDefault();
      }
      return undefined;
    };
  }
}
const AT_CHARCODE = /*#__PURE__*/(() => '@'.charCodeAt(0))();
function checkNoSyntheticProp(name, nameKind) {
  if (name.charCodeAt(0) === AT_CHARCODE) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](5105, `Unexpected synthetic ${nameKind} ${name} found. Please make sure that:
  - Make sure \`provideAnimationsAsync()\`, \`provideAnimations()\` or \`provideNoopAnimations()\` call was added to a list of providers used to bootstrap an application.
  - There is a corresponding animation configuration named \`${name}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.dev/api/core/Component#animations).`);
  }
}
function isTemplateNode(node) {
  return node.tagName === 'TEMPLATE' && node.content !== undefined;
}
class ShadowDomRenderer extends DefaultDomRenderer2 {
  hostEl;
  sharedStylesHost;
  shadowRoot;
  constructor(eventManager, hostEl, component, doc, ngZone, nonce, tracingService, sharedStylesHost) {
    super(eventManager, doc, ngZone, tracingService);
    this.hostEl = hostEl;
    this.sharedStylesHost = sharedStylesHost;
    this.shadowRoot = hostEl.attachShadow({
      mode: 'open'
    });
    if (this.sharedStylesHost) {
      this.sharedStylesHost.addHost(this.shadowRoot);
    }
    let styles = component.styles;
    if (ngDevMode) {
      const baseHref = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])().getBaseHref(doc) ?? '';
      styles = addBaseHrefToCssSourceMap(baseHref, styles);
    }
    styles = shimStylesContent(component.id, styles);
    for (const style of styles) {
      const styleEl = document.createElement('style');
      if (nonce) {
        styleEl.setAttribute('nonce', nonce);
      }
      styleEl.textContent = style;
      this.shadowRoot.appendChild(styleEl);
    }
    const styleUrls = component.getExternalStyles?.();
    if (styleUrls) {
      for (const styleUrl of styleUrls) {
        const linkEl = createLinkElement(styleUrl, doc);
        if (nonce) {
          linkEl.setAttribute('nonce', nonce);
        }
        this.shadowRoot.appendChild(linkEl);
      }
    }
  }
  nodeOrShadowRoot(node) {
    return node === this.hostEl ? this.shadowRoot : node;
  }
  appendChild(parent, newChild) {
    return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
  }
  insertBefore(parent, newChild, refChild) {
    return super.insertBefore(this.nodeOrShadowRoot(parent), newChild, refChild);
  }
  removeChild(_parent, oldChild) {
    return super.removeChild(null, oldChild);
  }
  parentNode(node) {
    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
  }
  destroy() {
    if (this.sharedStylesHost) {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  }
}
class NoneEncapsulationDomRenderer extends DefaultDomRenderer2 {
  sharedStylesHost;
  removeStylesOnCompDestroy;
  styles;
  styleUrls;
  constructor(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, tracingService, compId) {
    super(eventManager, doc, ngZone, tracingService);
    this.sharedStylesHost = sharedStylesHost;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    let styles = component.styles;
    if (ngDevMode) {
      const baseHref = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])().getBaseHref(doc) ?? '';
      styles = addBaseHrefToCssSourceMap(baseHref, styles);
    }
    this.styles = compId ? shimStylesContent(compId, styles) : styles;
    this.styleUrls = component.getExternalStyles?.(compId);
  }
  applyStyles() {
    this.sharedStylesHost.addStyles(this.styles, this.styleUrls);
  }
  destroy() {
    if (!this.removeStylesOnCompDestroy) {
      return;
    }
    if (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵallLeavingAnimations"].size === 0) {
      this.sharedStylesHost.removeStyles(this.styles, this.styleUrls);
    }
  }
}
class EmulatedEncapsulationDomRenderer2 extends NoneEncapsulationDomRenderer {
  contentAttr;
  hostAttr;
  constructor(eventManager, sharedStylesHost, component, appId, removeStylesOnCompDestroy, doc, ngZone, tracingService) {
    const compId = appId + '-' + component.id;
    super(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, tracingService, compId);
    this.contentAttr = shimContentAttribute(compId);
    this.hostAttr = shimHostAttribute(compId);
  }
  applyToHost(element) {
    this.applyStyles();
    this.setAttribute(element, this.hostAttr, '');
  }
  createElement(parent, name) {
    const el = super.createElement(parent, name);
    super.setAttribute(el, this.contentAttr, '');
    return el;
  }
}


/***/ }

}])
//# sourceMappingURL=6811.js.map