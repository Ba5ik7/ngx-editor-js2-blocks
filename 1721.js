(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[1721],{

/***/ 14102
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/divider.mjs ***!
  \*************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatDivider: () => (/* binding */ MatDivider),
/* harmony export */   MatDividerModule: () => (/* binding */ MatDividerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 32298);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ 13266);




let MatDivider = /*#__PURE__*/(() => {
  class MatDivider {
    get vertical() {
      return this._vertical;
    }
    set vertical(value) {
      this._vertical = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    _vertical = false;
    get inset() {
      return this._inset;
    }
    set inset(value) {
      this._inset = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    _inset = false;
    static ɵfac = function MatDivider_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatDivider)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatDivider,
      selectors: [["mat-divider"]],
      hostAttrs: ["role", "separator", 1, "mat-divider"],
      hostVars: 7,
      hostBindings: function MatDivider_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
        }
      },
      inputs: {
        vertical: "vertical",
        inset: "inset"
      },
      decls: 0,
      vars: 0,
      template: function MatDivider_Template(rf, ctx) {},
      styles: [".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color, var(--mat-sys-outline-variant));border-top-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color, var(--mat-sys-outline-variant));border-right-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatDivider;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatDividerModule = /*#__PURE__*/(() => {
  class MatDividerModule {
    static ɵfac = function MatDividerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatDividerModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatDividerModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__.BidiModule]
    });
  }
  return MatDividerModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }

}])
//# sourceMappingURL=1721.js.map