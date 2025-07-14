(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[7128],{

/***/ 44747:
/*!***************************************************************************!*\
  !*** ./dist/ngx-editor-js2-panel/fesm2022/tmdjr-ngx-editor-js2-panel.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxEditorJs2PanelComponent: () => (/* binding */ NgxEditorJs2PanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 77947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 85914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 7140);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 37409);
/* harmony import */ var _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tmdjr/ngx-editor-js2 */ 40623);









let NgxEditorJs2PanelComponent = /*#__PURE__*/(() => {
  class NgxEditorJs2PanelComponent {
    sortIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.input)(0, ...(ngDevMode ? [{
      debugName: "sortIndex"
    }] : []));
    componentInstanceName = 'NgxEditorJs2PanelComponent';
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.input)(true, ...(ngDevMode ? [{
      debugName: "autofocus"
    }] : []));
    formGroup = _angular_core__WEBPACK_IMPORTED_MODULE_2__.input.required(...(ngDevMode ? [{
      debugName: "formGroup"
    }] : []));
    formControlName = _angular_core__WEBPACK_IMPORTED_MODULE_2__.input.required(...(ngDevMode ? [{
      debugName: "formControlName"
    }] : []));
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.input)([{
      action: 'info',
      icon: 'info'
    }, {
      action: 'note',
      icon: 'description'
    }, {
      action: 'tip',
      icon: 'lightbulb'
    }, {
      action: 'warning',
      icon: 'warning'
    }], ...(ngDevMode ? [{
      debugName: "blockOptionActions"
    }] : []));
    savedAction = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)('info', ...(ngDevMode ? [{
      debugName: "savedAction"
    }] : []));
    actionCallbackBind = this.actionCallback.bind(this);
    panelIcons = {
      info: 'info',
      note: 'description',
      tip: 'lightbulb',
      warning: 'warning'
    };
    actionCallback(action) {
      this.savedAction.update(() => action);
    }
    static ɵfac = function NgxEditorJs2PanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgxEditorJs2PanelComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NgxEditorJs2PanelComponent,
      selectors: [["ngx-editor-js2-panel"]],
      hostAttrs: [1, "cdk-drag-animating"],
      inputs: {
        sortIndex: [1, "sortIndex"],
        autofocus: [1, "autofocus"],
        formGroup: [1, "formGroup"],
        formControlName: [1, "formControlName"],
        blockOptionActions: [1, "blockOptionActions"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__.CdkDrag])],
      decls: 4,
      vars: 10,
      consts: [[3, "formGroup"], [1, "panel-icon", 3, "ngClass"], ["toolbarFab", "", "controlAccessor", "", "contentEditable", "", "cleanPasteData", "", 1, "panel", 3, "ngClass", "defaultValue", "actionCallback", "autofocus", "blockOptionActions", "formControlName", "componentContextPositionIndex"]],
      template: function NgxEditorJs2PanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
        if (rf & 2) {
          let tmp_4_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formGroup());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.savedAction());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.panelIcons[ctx.savedAction()], " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.savedAction())("defaultValue", (tmp_4_0 = ctx.formGroup().get(ctx.formControlName())) == null ? null : tmp_4_0.value)("actionCallback", ctx.actionCallbackBind)("autofocus", ctx.autofocus())("blockOptionActions", ctx.blockOptionActions())("formControlName", ctx.formControlName())("componentContextPositionIndex", ctx.sortIndex());
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_5__.ControlAccessorDirective, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_5__.AutofocusDirective, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_5__.ToolbarFabDirective, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_5__.CleanPasteDataDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
      styles: ["[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.6em}[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]{margin:1rem 0;padding:8px 0 8px 40px;border-left:5px solid currentColor;border-radius:4px}[_nghost-%COMP%]   .panel-icon[_ngcontent-%COMP%]{position:absolute;left:16px;top:8px}[_nghost-%COMP%]   .info[_ngcontent-%COMP%]{background:#e8f0fe;color:#1a73e8}[_nghost-%COMP%]   .note[_ngcontent-%COMP%]{background:#ece7f6;color:#673ab7}[_nghost-%COMP%]   .tip[_ngcontent-%COMP%]{background:#e6f4ea;color:#107c41}[_nghost-%COMP%]   .warning[_ngcontent-%COMP%]{background:#fff4e5;color:#f57c00}"]
    });
  }
  return NgxEditorJs2PanelComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=7128.js.map