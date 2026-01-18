(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[1608],{

/***/ 9227
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/private.mjs ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _CdkPrivateStyleLoader: () => (/* reexport safe */ _style_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__._CdkPrivateStyleLoader),
/* harmony export */   _VisuallyHiddenLoader: () => (/* binding */ _VisuallyHiddenLoader),
/* harmony export */   _setInnerHtml: () => (/* binding */ _setInnerHtml),
/* harmony export */   trustedHTMLFromString: () => (/* binding */ trustedHTMLFromString)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _style_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_style-loader-chunk.mjs */ 59504);



let _VisuallyHiddenLoader = /*#__PURE__*/(() => {
  class _VisuallyHiddenLoader {
    static ɵfac = function _VisuallyHiddenLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisuallyHiddenLoader)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: _VisuallyHiddenLoader,
      selectors: [["ng-component"]],
      exportAs: ["cdkVisuallyHidden"],
      decls: 0,
      vars: 0,
      template: function _VisuallyHiddenLoader_Template(rf, ctx) {},
      styles: [".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return _VisuallyHiddenLoader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let policy;
function getPolicy() {
  if (policy === undefined) {
    policy = null;
    if (typeof window !== 'undefined') {
      const ttWindow = window;
      if (ttWindow.trustedTypes !== undefined) {
        policy = ttWindow.trustedTypes.createPolicy('angular#components', {
          createHTML: s => s
        });
      }
    }
  }
  return policy;
}
function trustedHTMLFromString(html) {
  return getPolicy()?.createHTML(html) || html;
}
function _setInnerHtml(element, html, sanitizer) {
  const cleanHtml = sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML, html);
  if (cleanHtml === null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
    throw new Error(`Could not sanitize HTML: ${html}`);
  }
  element.innerHTML = trustedHTMLFromString(cleanHtml || '');
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


/***/ }

}])
//# sourceMappingURL=1608.js.map