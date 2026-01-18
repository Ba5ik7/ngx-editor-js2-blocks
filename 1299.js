(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[1299],{

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


/***/ }

}])
//# sourceMappingURL=1299.js.map