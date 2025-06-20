(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[4620],{

/***/ 52239:
/*!***************************************************************************************!*\
  !*** ./dist/ngx-editor-js2-blockquotes/fesm2022/tmdjr-ngx-editor-js2-blockquotes.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxEditorJs2BlockquotesComponent: () => (/* binding */ NgxEditorJs2BlockquotesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 7140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 85914);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 77947);
/* harmony import */ var _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tmdjr/ngx-editor-js2 */ 40623);








let NgxEditorJs2BlockquotesComponent = /*#__PURE__*/(() => {
  class NgxEditorJs2BlockquotesComponent {
    sortIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(0);
    componentInstanceName = 'NgxEditorJs2BlockquotesComponent';
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(true);
    formGroup = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    formControlName = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)([{
      action: 'medium',
      icon: 'density_small'
    }, {
      action: 'display-small',
      icon: 'density_medium'
    }, {
      action: 'display-large',
      icon: 'density_large'
    }]);
    savedAction = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('display-large');
    actionCallbackBind = this.actionCallback.bind(this);
    actionCallback(action) {
      this.savedAction.update(() => action);
    }
    static ɵfac = function NgxEditorJs2BlockquotesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgxEditorJs2BlockquotesComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxEditorJs2BlockquotesComponent,
      selectors: [["ngx-editor-js2-blockquotes"]],
      hostAttrs: [1, "cdk-drag-animating"],
      inputs: {
        sortIndex: [1, "sortIndex"],
        autofocus: [1, "autofocus"],
        formGroup: [1, "formGroup"],
        formControlName: [1, "formControlName"],
        blockOptionActions: [1, "blockOptionActions"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDrag])],
      decls: 2,
      vars: 8,
      consts: [[3, "formGroup"], ["controlAccessor", "", "contentEditable", "", "toolbarFab", "", 3, "ngClass", "defaultValue", "actionCallback", "autofocus", "blockOptionActions", "formControlName", "componentContextPositionIndex"]],
      template: function NgxEditorJs2BlockquotesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "blockquote", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.savedAction())("defaultValue", (tmp_2_0 = ctx.formGroup().get(ctx.formControlName())) == null ? null : tmp_2_0.value)("actionCallback", ctx.actionCallbackBind)("autofocus", ctx.autofocus())("blockOptionActions", ctx.blockOptionActions())("formControlName", ctx.formControlName())("componentContextPositionIndex", ctx.sortIndex());
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_4__.ControlAccessorDirective, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_4__.AutofocusDirective, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_4__.ToolbarFabDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
      styles: ["[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]   .medium[_ngcontent-%COMP%]{font:var(--mat-sys-body-medium);font-weight:100}[_nghost-%COMP%]   .display-small[_ngcontent-%COMP%]{font:var(--mat-sys-display-small);font-weight:100}[_nghost-%COMP%]   .display-large[_ngcontent-%COMP%]{font:var(--mat-sys-display-large);font-weight:100}[_nghost-%COMP%]   blockquote[_ngcontent-%COMP%]{margin:20px 0;padding:5px 0 5px 20px;border-left:5px solid var(--mat-sys-primary)}"]
    });
  }
  return NgxEditorJs2BlockquotesComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of ngx-editor-js2-blockquotes
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=4620.js.map