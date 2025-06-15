(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[268],{

/***/ 57887:
/*!***************************************************************************!*\
  !*** ./dist/ngx-editor-js2-image/fesm2022/tmdjr-ngx-editor-js2-image.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxEditorJs2ImageComponent: () => (/* binding */ NgxEditorJs2ImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 59694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9516);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 28326);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 70018);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 56748);
/* harmony import */ var _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tmdjr/ngx-editor-js2 */ 40623);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 53576);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 56968);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 43250);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 62392);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 44866);















function ImageConfigComponent_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vm_r2.configFormErrorMessages["title"]);
  }
}
function ImageConfigComponent_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vm_r2.configFormErrorMessages["url"]);
  }
}
function ImageConfigComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 1)(1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Image Configurations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field")(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ImageConfigComponent_Conditional_1_Conditional_7_Template, 2, 1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field")(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ImageConfigComponent_Conditional_1_Conditional_12_Template, 2, 1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5)(14, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageConfigComponent_Conditional_1_Template_button_click_14_listener() {
      const vm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.updateImage(vm_r2.imageConfigForm));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageConfigComponent_Conditional_1_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.closeConfig());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const vm_r2 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", vm_r2.imageConfigForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](((tmp_3_0 = vm_r2.imageConfigForm.get("title")) == null ? null : tmp_3_0.errors) ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](((tmp_4_0 = vm_r2.imageConfigForm.get("url")) == null ? null : tmp_4_0.errors) ? 12 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", vm_r2.imageConfigForm.invalid);
  }
}
function NgxEditorJs2ImageComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxEditorJs2ImageComponent_Conditional_2_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openEditUrlOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.savedAction());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.value().url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", ctx_r1.value().title);
  }
}
function NgxEditorJs2ImageComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "image-config", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imageValue", function NgxEditorJs2ImageComponent_Conditional_3_Template_image_config_imageValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.updateImage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.value());
  }
}
let ImageConfigComponent = /*#__PURE__*/(() => {
  class ImageConfigComponent {
    formBuilder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder);
    value = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)({
      url: '',
      title: ''
    });
    value$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__.toObservable)(this.value);
    imageValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
    viewModel$ = this.value$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(value => ({
      imageConfigForm: this.formBuilder.group({
        url: [value.url, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        title: [value.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
      }),
      errorMessages: {
        required: 'Required'
      },
      configFormErrorMessages: {
        url: '',
        title: ''
      }
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(viewModel => this.watchStatusChanges(viewModel).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(null), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.withLatestFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(viewModel)), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(([_status, vm]) => vm))));
    watchStatusChanges(viewModel) {
      return viewModel.imageConfigForm.statusChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.setErrorsMessages(viewModel)));
    }
    updateImage(imageConfigForm) {
      this.imageValue.emit(imageConfigForm.value);
    }
    closeConfig() {
      this.imageValue.emit(this.value().url ? this.value() : {
        url: '',
        title: ''
      });
    }
    // ! Quick and Drity way to set error messages
    // ! Breaks all my believes in "clean code"
    setErrorsMessages({
      imageConfigForm,
      configFormErrorMessages,
      errorMessages
    }) {
      Object.keys(imageConfigForm.controls).forEach(element => {
        const errors = imageConfigForm.get(element)?.errors;
        if (errors) {
          const error = Object.keys(errors)[0];
          configFormErrorMessages[element] = errorMessages[error];
        }
      });
    }
    static ɵfac = function ImageConfigComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImageConfigComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ImageConfigComponent,
      selectors: [["image-config"]],
      inputs: {
        value: [1, "value"]
      },
      outputs: {
        imageValue: "imageValue"
      },
      decls: 3,
      vars: 3,
      consts: [[1, "image-block-modal"], [3, "formGroup"], ["mat-dialog-title", ""], ["matInput", "", "type", "text", "formControlName", "title"], ["matInput", "", "type", "text", "formControlName", "url"], [1, "action-group"], ["type", "button", "mat-raised-button", "", 3, "click", "disabled"], ["type", "button", "mat-raised-button", "", 3, "click"]],
      template: function ImageConfigComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ImageConfigComponent_Conditional_1_Template, 18, 4, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.viewModel$)) ? 1 : -1, tmp_0_0);
        }
      },
      dependencies: [_angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe],
      styles: ["[_nghost-%COMP%]{border:.5px solid #ccc;border-radius:4px;padding:20px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}"]
    });
  }
  return ImageConfigComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NgxEditorJs2ImageComponent = /*#__PURE__*/(() => {
  class NgxEditorJs2ImageComponent {
    sortIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)(0);
    componentInstanceName = 'NgxEditorJs2ImageComponent';
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)(true);
    formGroup = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
    formControlName = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)([{
      action: 'flex-start',
      icon: 'format_align_left'
    }, {
      action: 'center',
      icon: 'format_align_center'
    }, {
      action: 'flex-end',
      icon: 'format_align_right'
    }, {
      action: 'stretch',
      icon: 'format_align_justify'
    }]);
    value = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)({
      url: '',
      title: ''
    });
    savedAction = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('flex-start');
    actionCallbackBind = this.actionCallback.bind(this);
    openOverlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(true);
    ngOnInit() {
      try {
        const possibleSavedValue = this.formGroup().get(this.formControlName());
        this.value.set(JSON.parse(possibleSavedValue?.value ? possibleSavedValue.value : '{}'));
        this.value()?.url && this.openOverlay.set(false);
      } catch (error) {
        console.warn('Error parseing Image setting value', error);
      }
    }
    actionCallback(action) {
      this.savedAction.update(() => action);
    }
    openEditUrlOverlay() {
      this.openOverlay.set(true);
    }
    updateImage(value) {
      this.value.set(value);
      this.formGroup().get(this.formControlName())?.setValue(JSON.stringify(value));
      this.openOverlay.set(false);
    }
    static ɵfac = function NgxEditorJs2ImageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgxEditorJs2ImageComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NgxEditorJs2ImageComponent,
      selectors: [["ngx-editor-js2-image"]],
      hostAttrs: [1, "cdk-drag-animating", "no-toolbar-inline"],
      inputs: {
        sortIndex: [1, "sortIndex"],
        autofocus: [1, "autofocus"],
        formGroup: [1, "formGroup"],
        formControlName: [1, "formControlName"],
        blockOptionActions: [1, "blockOptionActions"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__.CdkDrag])],
      decls: 4,
      vars: 7,
      consts: [[3, "formGroup"], ["controlAccessor", "", "toolbarFab", "", 1, "image-container-overlay", 3, "actionCallback", "autofocus", "blockOptionActions", "formControlName", "componentContextPositionIndex"], [1, "image-container", 3, "ngClass"], [3, "value"], ["onerror", "this.onerror=null;this.src='https://dummyimage.com/600x400/000/fff'", 1, "image-block", 3, "src", "title"], ["mat-fab", "", 1, "image-block-button", 3, "click"], [3, "imageValue", "value"]],
      template: function NgxEditorJs2ImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxEditorJs2ImageComponent_Conditional_2_Template, 5, 3, "div", 2)(3, NgxEditorJs2ImageComponent_Conditional_3_Template, 1, 1, "image-config", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("actionCallback", ctx.actionCallbackBind)("autofocus", ctx.autofocus())("blockOptionActions", ctx.blockOptionActions())("formControlName", ctx.formControlName())("componentContextPositionIndex", ctx.sortIndex());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!ctx.openOverlay() ? 2 : 3);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_10__.ControlAccessorDirective, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_10__.AutofocusDirective, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_10__.ToolbarFabDirective, ImageConfigComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;margin:1.5rem 0}[_nghost-%COMP%]   .flex-start[_ngcontent-%COMP%]{justify-content:flex-start}[_nghost-%COMP%]   .flex-end[_ngcontent-%COMP%]{justify-content:flex-end}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]{justify-content:center}[_nghost-%COMP%]   .stretch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .image-container-overlay[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;position:absolute}[_nghost-%COMP%]   :is(.image-container-overlay[_ngcontent-%COMP%]:hover ~ .image-container[_ngcontent-%COMP%]   .image-block-button[_ngcontent-%COMP%], .image-block-button[_ngcontent-%COMP%]:hover){display:block}[_nghost-%COMP%]   .image-container[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .image-container[_ngcontent-%COMP%]   .image-block[_ngcontent-%COMP%]{min-width:0}[_nghost-%COMP%]   .image-container[_ngcontent-%COMP%]   .image-block-button[_ngcontent-%COMP%]{position:absolute;top:6px;left:6px;display:none}"]
    });
  }
  return NgxEditorJs2ImageComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of ngx-editor-js2-image
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=268.js.map