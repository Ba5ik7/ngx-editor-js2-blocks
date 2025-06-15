(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[7887],{

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



/***/ }),

/***/ 40623:
/*!******************************************************************************!*\
  !*** ./node_modules/@tmdjr/ngx-editor-js2/fesm2022/tmdjr-ngx-editor-js2.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofocusDirective: () => (/* binding */ AutofocusDirective),
/* harmony export */   CleanPasteDataDirective: () => (/* binding */ CleanPasteDataDirective),
/* harmony export */   ControlAccessorDirective: () => (/* binding */ ControlAccessorDirective),
/* harmony export */   NGX_EDITORJS_OPTIONS: () => (/* binding */ NGX_EDITORJS_OPTIONS),
/* harmony export */   NgxEditorJs2Component: () => (/* binding */ NgxEditorJs2Component),
/* harmony export */   NgxEditorJs2Service: () => (/* binding */ NgxEditorJs2Service),
/* harmony export */   ToolbarFabDirective: () => (/* binding */ ToolbarFabDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9516);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 56748);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 84718);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 53576);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ 87916);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 70018);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 59694);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 56968);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 43250);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 62392);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ 17858);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/portal */ 80836);


















function ToolbarBlockOptionsComponent_For_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const blockOptionAction_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", blockOptionAction_r2.text, " ");
  }
}
function ToolbarBlockOptionsComponent_For_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const blockOptionAction_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blockOptionAction_r2.icon);
  }
}
function ToolbarBlockOptionsComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarBlockOptionsComponent_For_11_Template_div_click_0_listener() {
      const blockOptionAction_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.handleAction(blockOptionAction_r2.action));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToolbarBlockOptionsComponent_For_11_Conditional_1_Template, 1, 1)(2, ToolbarBlockOptionsComponent_For_11_Conditional_2_Template, 2, 1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const blockOptionAction_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](blockOptionAction_r2.text ? 1 : 2);
  }
}
function ToolbarBlocksComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ToolbarBlocksComponent_Conditional_5_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarBlocksComponent_Conditional_5_Conditional_2_For_1_Template_mat_list_item_click_0_listener() {
      const block_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.addBlock(block_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", block_r2.name, " ");
  }
}
function ToolbarBlocksComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](0, ToolbarBlocksComponent_Conditional_5_Conditional_2_For_1_Template, 2, 1, "mat-list-item", 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIndex"]);
  }
  if (rf & 2) {
    const filteredBlocks_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](filteredBlocks_r4);
  }
}
function ToolbarBlocksComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToolbarBlocksComponent_Conditional_5_Conditional_1_Template, 2, 0, "mat-list-item", 4)(2, ToolbarBlocksComponent_Conditional_5_Conditional_2_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.length <= 0 ? 1 : 2);
  }
}
function ToolbarComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "toolbar-blocks", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addBlock", function ToolbarComponent_ng_template_9_Template_toolbar_blocks_addBlock_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.addBlock($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("supportedBlocks", ctx_r2.supportedBlocks());
  }
}
function ToolbarComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "toolbar-block-options", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("handleAction", function ToolbarComponent_ng_template_10_Template_toolbar_block_options_handleAction_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.handleAction($event));
    })("moveBlockPosition", function ToolbarComponent_ng_template_10_Template_toolbar_block_options_moveBlockPosition_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.moveBlockPosition($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockOptionActions", ctx_r2.blockOptionActions());
  }
}
function HeaderBlockComponent_h1_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function HeaderBlockComponent_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_h1_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const sharedHeaderTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", sharedHeaderTemplate_r1);
  }
}
function HeaderBlockComponent_h2_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function HeaderBlockComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_h2_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const sharedHeaderTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", sharedHeaderTemplate_r1);
  }
}
function HeaderBlockComponent_h3_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function HeaderBlockComponent_h3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_h3_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const sharedHeaderTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", sharedHeaderTemplate_r1);
  }
}
function HeaderBlockComponent_h4_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function HeaderBlockComponent_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_h4_4_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const sharedHeaderTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", sharedHeaderTemplate_r1);
  }
}
function HeaderBlockComponent_h5_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function HeaderBlockComponent_h5_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_h5_5_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const sharedHeaderTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", sharedHeaderTemplate_r1);
  }
}
function HeaderBlockComponent_h6_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function HeaderBlockComponent_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_h6_6_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const sharedHeaderTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", sharedHeaderTemplate_r1);
  }
}
function HeaderBlockComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 5);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultValue", (tmp_2_0 = ctx_r1.formGroup().get(ctx_r1.formControlName())) == null ? null : tmp_2_0.value)("actionCallback", ctx_r1.actionCallbackBind)("blockOptionActions", ctx_r1.blockOptionActions())("autofocus", ctx_r1.autofocus())("formControlName", ctx_r1.formControlName())("componentContextPositionIndex", ctx_r1.sortIndex());
  }
}
const _c0 = ["ngxEditor"];
function ToolbarInlineComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarInlineComponent_For_2_Template_div_click_0_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.addInlineTag(item_r2.action));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.icon);
  }
}
function ToolbarInlineComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ToolbarInlineComponent_Conditional_12_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r2.url, $event) || (ctx_r2.url = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarInlineComponent_Conditional_12_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.createLink());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.url);
  }
}
let ControlAccessorDirective = /*#__PURE__*/(() => {
  class ControlAccessorDirective {
    elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    defaultValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    onChange = () => {};
    onTouched = () => {};
    writeValue() {
      this.elementRef.nativeElement.innerHTML = this.defaultValue() || '';
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    onBlur() {
      this.onTouched();
    }
    onInput() {
      this.onChange(this.elementRef.nativeElement.innerHTML);
    }
    static ɵfac = function ControlAccessorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ControlAccessorDirective)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ControlAccessorDirective,
      selectors: [["", "controlAccessor", ""]],
      hostBindings: function ControlAccessorDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ControlAccessorDirective_blur_HostBindingHandler() {
            return ctx.onBlur();
          })("input", function ControlAccessorDirective_input_HostBindingHandler() {
            return ctx.onInput();
          });
        }
      },
      inputs: {
        defaultValue: [1, "defaultValue"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => ControlAccessorDirective),
        multi: true
      }])]
    });
  }
  return ControlAccessorDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let AutofocusDirective = /*#__PURE__*/(() => {
  class AutofocusDirective {
    elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(false);
    ngAfterContentInit() {
      this.autofocus() && this.elementRef.nativeElement.focus?.();
    }
    static ɵfac = function AutofocusDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AutofocusDirective)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AutofocusDirective,
      selectors: [["", "autofocus", ""]],
      inputs: {
        autofocus: [1, "autofocus"]
      }
    });
  }
  return AutofocusDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
var MovePositionActions = /*#__PURE__*/function (MovePositionActions) {
  MovePositionActions["UP"] = "UP";
  MovePositionActions["DOWN"] = "DOWN";
  MovePositionActions["DELETE"] = "DELETE";
  return MovePositionActions;
}(MovePositionActions || {});
let ToolbarBlockOptionsComponent = /*#__PURE__*/(() => {
  class ToolbarBlockOptionsComponent {
    Position = MovePositionActions;
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    handleActionEmitter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)({
      alias: 'handleAction'
    });
    moveBlockPositionEmitter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)({
      alias: 'moveBlockPosition'
    });
    movePosition(action) {
      this.moveBlockPositionEmitter.emit(action);
    }
    handleAction(action) {
      this.handleActionEmitter.emit(action);
    }
    static ɵfac = function ToolbarBlockOptionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolbarBlockOptionsComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarBlockOptionsComponent,
      selectors: [["toolbar-block-options"]],
      inputs: {
        blockOptionActions: [1, "blockOptionActions"]
      },
      outputs: {
        handleActionEmitter: "handleAction",
        moveBlockPositionEmitter: "moveBlockPosition"
      },
      decls: 12,
      vars: 0,
      consts: [[1, "actions-panel", "mat-elevation-z24"], ["matRipple", "", 1, "action-btn", 3, "click"], ["matRipple", "", 1, "action-btn"]],
      template: function ToolbarBlockOptionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarBlockOptionsComponent_Template_div_click_1_listener() {
            return ctx.movePosition(ctx.Position.UP);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_upward");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarBlockOptionsComponent_Template_div_click_4_listener() {
            return ctx.movePosition(ctx.Position.DELETE);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarBlockOptionsComponent_Template_div_click_7_listener() {
            return ctx.movePosition(ctx.Position.DOWN);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "arrow_downward");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](10, ToolbarBlockOptionsComponent_For_11_Template, 3, 1, "div", 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIndex"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.blockOptionActions());
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple],
      styles: ["[_nghost-%COMP%]   .actions-panel[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:1px;width:128px;max-height:128px;border-radius:4px;overflow:auto;background:var(--mat-sys-secondary)}[_nghost-%COMP%]   .actions-panel[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{cursor:pointer;width:42px;height:42px;display:flex;align-items:center;justify-content:center;border-radius:4px;color:var(--mat-sys-on-secondary);background:var(--mat-sys-secondary)}[_nghost-%COMP%]   .actions-panel[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:is(:hover,:focus){color:var(--mat-sys-secondary);background:var(--mat-sys-on-secondary)}"]
    });
  }
  return ToolbarBlockOptionsComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ToolbarBlocksComponent = /*#__PURE__*/(() => {
  class ToolbarBlocksComponent {
    addBlockEmitter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)({
      alias: 'addBlock'
    });
    supportedBlocks = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)([]);
    supportedBlocks$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__.toObservable)(this.supportedBlocks);
    blockCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl([]);
    filter$ = this.blockCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.startWith)(''));
    filteredBlocks$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([this.supportedBlocks$, this.filter$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(([blocks, filterString]) => {
      if (typeof filterString !== 'string') filterString = '';
      filterString = filterString.replace(/\\/g, '');
      const pattern = filterString?.split('').map(v => `(?=.*${v})`).join('');
      const regex = new RegExp(`${pattern}`, 'gi');
      // return blocks.filter(block => regex.exec(block));
      return blocks.filter(block => block.name.match(regex));
    }));
    addBlock(block) {
      this.addBlockEmitter.emit(block?.component);
    }
    static ɵfac = function ToolbarBlocksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolbarBlocksComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarBlocksComponent,
      selectors: [["toolbar-blocks"]],
      inputs: {
        supportedBlocks: [1, "supportedBlocks"]
      },
      outputs: {
        addBlockEmitter: "addBlock"
      },
      decls: 7,
      vars: 5,
      consts: [[1, "block-list-container", "mat-elevation-z24"], ["appearance", "fill", "color", "accent"], ["matInput", "", 1, "filter-text", 3, "formControl", "autofocus"], [1, "block-list-panel"], ["matRipple", "", "mat-list-item", ""], ["matRipple", "", "mat-list-item", "", 3, "click"]],
      template: function ToolbarBlocksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filter");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ToolbarBlocksComponent_Conditional_5_Template, 3, 1, "mat-list", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.blockCtrl)("autofocus", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.filteredBlocks$)) ? 5 : -1, tmp_2_0);
        }
      },
      dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
      styles: ["[_nghost-%COMP%]   .mat-mdc-list-base[_ngcontent-%COMP%]{padding-top:0;margin-top:-14px}[_nghost-%COMP%]   .block-list-container[_ngcontent-%COMP%]{background:var(--mat-sys-secondary-container);border-radius:4px}[_nghost-%COMP%]   .block-list-panel[_ngcontent-%COMP%]{max-width:280px;max-height:240px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;overflow:auto;color:var(--mat-sys-on-secondary-container)}[_nghost-%COMP%]   mat-list-item[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none}[_nghost-%COMP%]   mat-list-item[_ngcontent-%COMP%]:is(:hover,:focus){background:var(--mat-sys-surface-bright)}"]
    });
  }
  return ToolbarBlocksComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ToolbarComponent = /*#__PURE__*/(() => {
  class ToolbarComponent {
    componentContextPositionIndex = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    supportedBlocks = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    actionCallback = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(() => () => {});
    formControlName = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    addBlockCallback = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    moveBlockPositionCallback = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    openBlocks = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
    openBlocksOption = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
    openBlocksList() {
      this.openBlocks.update(prev => !prev);
    }
    openBlockOptionList() {
      this.openBlocksOption.update(prev => !prev);
    }
    moveBlockPosition(action) {
      this.closeLists();
      this.moveBlockPositionCallback()(action, this.componentContextPositionIndex());
    }
    handleAction(action) {
      this.closeLists();
      this.actionCallback()(action);
    }
    addBlock(block) {
      this.closeLists();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(this.addBlockCallback()(block, this.componentContextPositionIndex()));
    }
    closeLists() {
      this.openBlocks.set(false);
      this.openBlocksOption.set(false);
    }
    static ɵfac = function ToolbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolbarComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarComponent,
      selectors: [["toolbar"]],
      inputs: {
        componentContextPositionIndex: [1, "componentContextPositionIndex"],
        supportedBlocks: [1, "supportedBlocks"],
        blockOptionActions: [1, "blockOptionActions"],
        actionCallback: [1, "actionCallback"],
        formControlName: [1, "formControlName"],
        addBlockCallback: [1, "addBlockCallback"],
        moveBlockPositionCallback: [1, "moveBlockPositionCallback"]
      },
      decls: 11,
      vars: 11,
      consts: [["blockListTigger", "cdkOverlayOrigin"], ["blockOptionListTigger", "cdkOverlayOrigin"], [1, "toolbar-buttons-container"], ["cdkOverlayOrigin", "", "matRipple", "", 1, "toolbar-buttons", "mat-elevation-z4", 3, "click"], [1, "material-icons"], ["cdkDragHandle", "", "cdkOverlayOrigin", "", "matRipple", "", 1, "toolbar-buttons", "mat-elevation-z4", 3, "click"], ["cdkConnectedOverlay", "", 3, "overlayOutsideClick", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayBackdropClass"], ["cdkConnectedOverlay", "", 3, "overlayOutsideClick", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayBackdropClass"], [3, "addBlock", "supportedBlocks"], [3, "handleAction", "moveBlockPosition", "blockOptionActions"]],
      template: function ToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.openBlocksList());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_div_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.openBlockOptionList());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "drag_indicator");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ToolbarComponent_ng_template_9_Template, 1, 1, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("overlayOutsideClick", function ToolbarComponent_Template_ng_template_overlayOutsideClick_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.openBlocks.set(false));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ToolbarComponent_ng_template_10_Template, 1, 1, "ng-template", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("overlayOutsideClick", function ToolbarComponent_Template_ng_template_overlayOutsideClick_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.openBlocksOption.set(false));
          });
        }
        if (rf & 2) {
          const blockListTigger_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
          const blockOptionListTigger_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayOrigin", blockListTigger_r5)("cdkConnectedOverlayOpen", ctx.openBlocks())("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayOffsetY", 15)("cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayOrigin", blockOptionListTigger_r6)("cdkConnectedOverlayOpen", ctx.openBlocksOption())("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayOffsetX", -49)("cdkConnectedOverlayOffsetY", 15)("cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop");
        }
      },
      dependencies: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDragHandle, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.CdkConnectedOverlay, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.CdkOverlayOrigin, ToolbarBlockOptionsComponent, ToolbarBlocksComponent],
      styles: ["[_nghost-%COMP%]   .toolbar-buttons-container[_ngcontent-%COMP%]{position:relative;display:flex;gap:10px}[_nghost-%COMP%]   .toolbar-buttons[_ngcontent-%COMP%]{cursor:pointer;width:30px;height:30px;display:flex;justify-content:center;align-items:center;border-radius:4px;margin-bottom:14px;-webkit-user-select:none;user-select:none;color:var(--mat-sys-on-tertiary-container);background:var(--mat-sys-tertiary-container)}[_nghost-%COMP%]   .toolbar-buttons[_ngcontent-%COMP%]:is(:hover,:focus){background:var(--mat-sys-surface-bright)}@media (min-width: 768px){[_nghost-%COMP%]{position:absolute;margin-left:-80px;top:0}}"]
    });
  }
  return ToolbarComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let BlockMovementService = /*#__PURE__*/(() => {
  class BlockMovementService {
    componentRefMap = new Map();
    clearComponentRefs() {
      this.componentRefMap.clear();
    }
    getNgxEditorJsBlocks() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(Array.from(this.componentRefMap.values()));
    }
    newComponentAttached(componentRef) {
      this.componentRefMap.set(componentRef.instance, componentRef);
    }
    updateComponentIndices(ngxEditor) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.componentRefMap.values()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(componentRef => componentRef.setInput('sortIndex', ngxEditor.indexOf(componentRef.hostView))));
    }
    moveBlockComponentPosition(ngxEditor, action, index) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(Array.from(this.componentRefMap.values())).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(componentRefs => componentRefs.find(componentRef => ngxEditor.indexOf(componentRef.hostView) === index - 1)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(componentRef => !!componentRef), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(componentRef => ({
        componentRef,
        totalComponents: ngxEditor.length - 1,
        currentIndex: ngxEditor.indexOf(componentRef.hostView),
        newIndex: index => action === MovePositionActions.UP ? index - 1 : index + 1
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(({
        componentRef,
        totalComponents,
        currentIndex,
        newIndex
      }) => ({
        componentRef,
        currentIndex,
        newIndex: Math.max(0, Math.min(newIndex(currentIndex), totalComponents))
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(({
        currentIndex,
        newIndex
      }) => currentIndex !== newIndex), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(({
        componentRef,
        newIndex
      }) => {
        ngxEditor.move(componentRef.hostView, newIndex);
        componentRef.setInput('sortIndex', newIndex);
        componentRef.setInput('autofocus', true);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.defaultIfEmpty)(false));
    }
    removeBlockComponent(ngxEditor, index, clear = false) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(Array.from(this.componentRefMap.values())).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(componentRefs => clear || componentRefs.length !== 1), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(componentRefs => componentRefs.find(componentRef => ngxEditor.indexOf(componentRef.hostView) === index - 1)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(componentRef => this.componentRefMap.delete(componentRef?.instance ?? {})), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(successful => successful && ngxEditor.remove(index - 1)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.defaultIfEmpty)(false));
    }
    static ɵfac = function BlockMovementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlockMovementService)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BlockMovementService,
      factory: BlockMovementService.ɵfac,
      providedIn: 'root'
    });
  }
  return BlockMovementService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const createUID = () => Math.random().toString(36).substring(7);
let EditorJsService = /*#__PURE__*/(() => {
  class EditorJsService {
    formBuilder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder);
    blockMovementService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(BlockMovementService);
    componentRefMap = new Map();
    ngxEditor;
    formGroup = this.formBuilder.group({});
    // TODO - Handle this idiomatically
    setNgxEditor(ngxEditor) {
      this.ngxEditor = ngxEditor;
    }
    getBlocks$() {
      return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(this.blockMovementService.getNgxEditorJsBlocks().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(componentRefs => componentRefs.map(({
          instance
        }) => ({
          blockId: instance.formControlName(),
          sortIndex: instance.sortIndex(),
          componentInstanceName: instance.componentInstanceName,
          savedAction: instance.savedAction(),
          dataClean: instance.formGroup().get(instance.formControlName())?.value
        }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(blocks => blocks.sort((a, b) => a.sortIndex - b.sortIndex)))).then(blocks => {
          observer.next(blocks);
          observer.complete();
        });
      });
    }
    createNgxEditorJsBlockWithComponent(blockComponent, componentContextPositionIndex) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
        blockId: createUID(),
        sortIndex: componentContextPositionIndex,
        componentInstanceName: blockComponent.name,
        component: blockComponent,
        // TODO - Force content-type for dataClean? JSON, HTML, etc.
        // TODO - And maybe rename dataClean to just data?
        dataClean: '',
        autofocus: true
      });
    }
    addBlockComponent(ngxEditorJsBlock) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)([this.createFormGroupControl(ngxEditorJsBlock), this.attachComponent(ngxEditorJsBlock), this.blockMovementService.updateComponentIndices(this.ngxEditor)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(() => void 0));
    }
    createFormGroupControl({
      blockId,
      dataClean
    }) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.formBuilder.control(dataClean, [])).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(formControl => this.formGroup.addControl(blockId, formControl)));
    }
    attachComponent({
      component,
      blockId,
      autofocus,
      savedAction,
      sortIndex: index
    }) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(blockId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(controlName => {
        const componentRef = this.ngxEditor.createComponent(component, {
          index
        });
        componentRef.setInput('sortIndex', index);
        componentRef.setInput('formGroup', this.formGroup);
        componentRef.setInput('formControlName', controlName);
        componentRef.setInput('autofocus', autofocus);
        savedAction && componentRef.instance.actionCallback?.(savedAction);
        this.blockMovementService.newComponentAttached(componentRef);
        return componentRef;
      }));
    }
    determineMovePositionAction(action, index, formControlName) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.iif)(() => action === MovePositionActions.DELETE, this.removeBlockComponent(index, formControlName), this.blockMovementService.moveBlockComponentPosition(this.ngxEditor, action, index)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => this.blockMovementService.updateComponentIndices(this.ngxEditor)));
    }
    moveBlockComponentPosition(previousIndex, currentIndex) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.ngxEditor.get(previousIndex)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(viewRef => !!viewRef), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(viewRef => {
        this.ngxEditor.move(viewRef, currentIndex);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => this.blockMovementService.updateComponentIndices(this.ngxEditor)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.defaultIfEmpty)(false));
    }
    removeBlockComponent(index, formControlName, clear = false) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([this.blockMovementService.removeBlockComponent(this.ngxEditor, index, clear), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.formGroup.removeControl(formControlName))]);
    }
    clearBlocks() {
      return this.blockMovementService.getNgxEditorJsBlocks().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(componentRefs => componentRefs.length > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(componentRefs => componentRefs.sort((a, b) => a.instance.sortIndex() - b.instance.sortIndex())), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(componentRefs => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)(Array.from(componentRefs.values()).map(componentRef => this.removeBlockComponent(componentRef.instance.sortIndex() + 1, componentRef.instance.formControlName(), true)))), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => this.blockMovementService.updateComponentIndices(this.ngxEditor)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(() => {
        this.blockMovementService.clearComponentRefs();
        this.ngxEditor.clear();
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.defaultIfEmpty)(false));
    }
    static ɵfac = function EditorJsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditorJsService)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EditorJsService,
      factory: EditorJsService.ɵfac,
      providedIn: 'root'
    });
  }
  return EditorJsService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ToolFabService = /*#__PURE__*/(() => {
  class ToolFabService {
    ngxEditorJs2Service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(NgxEditorJs2Service);
    editorJsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(EditorJsService);
    // I need to explain this in detail so the future me can understand this.
    componentContext = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    toolbarComponentRef$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)({
      componentContext: this.componentContext.asObservable(),
      supportedBlocks: this.ngxEditorJs2Service.supportedBlocks$
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(({
      componentContext
    }) => componentContext !== null), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(({
      componentContext: previous
    }, {
      componentContext: current
    }) => previous.index !== current.index || previous.viewContainerRef !== current.viewContainerRef ? (previous.viewContainerRef.clear(), false) : true), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(({
      componentContext,
      supportedBlocks
    }) => {
      const {
        index,
        viewContainerRef,
        blockOptionActions,
        actionCallback,
        formControlName
      } = componentContext;
      // TODO We will need to create a ToolbarBottomRailComponent to handle the mobile view
      const componentRef = viewContainerRef.createComponent(ToolbarComponent);
      componentRef.setInput('componentContextPositionIndex', index + 1);
      componentRef.setInput('supportedBlocks', supportedBlocks);
      componentRef.setInput('blockOptionActions', blockOptionActions);
      componentRef.setInput('actionCallback', actionCallback);
      componentRef.setInput('formControlName', formControlName);
      componentRef.setInput('addBlockCallback', this.addBlock.bind(this));
      componentRef.setInput('moveBlockPositionCallback', this.movePositionAction.bind(this));
      return componentRef;
    }));
    addBlock(block, index) {
      return this.editorJsService.createNgxEditorJsBlockWithComponent(block, index).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(block => this.editorJsService.addBlockComponent(block)));
    }
    movePositionAction(action, index, formControlName) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(this.editorJsService.determineMovePositionAction(action, index, formControlName));
    }
    static ɵfac = function ToolFabService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolFabService)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ToolFabService,
      factory: ToolFabService.ɵfac,
      providedIn: 'root'
    });
  }
  return ToolFabService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ToolbarFabDirective = /*#__PURE__*/(() => {
  class ToolbarFabDirective {
    toolFabService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ToolFabService);
    viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    actionCallback = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    componentContextPositionIndex = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    formControlName = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    onMouseEnter() {
      this.toolFabService.componentContext.next({
        viewContainerRef: this.viewContainerRef,
        blockOptionActions: this.blockOptionActions() ?? [],
        actionCallback: this.actionCallback(),
        index: this.componentContextPositionIndex(),
        formControlName: this.formControlName()
      });
    }
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
        this.autofocus() && this.onMouseEnter();
      });
    }
    static ɵfac = function ToolbarFabDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolbarFabDirective)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ToolbarFabDirective,
      selectors: [["", "toolbarFab", ""]],
      hostBindings: function ToolbarFabDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ToolbarFabDirective_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          });
        }
      },
      inputs: {
        autofocus: [1, "autofocus"],
        blockOptionActions: [1, "blockOptionActions"],
        actionCallback: [1, "actionCallback"],
        componentContextPositionIndex: [1, "componentContextPositionIndex"],
        formControlName: [1, "formControlName"]
      }
    });
  }
  return ToolbarFabDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CleanPasteDataDirective = /*#__PURE__*/(() => {
  class CleanPasteDataDirective {
    onPaste(event) {
      event.preventDefault();
      const text = event.clipboardData?.getData('text/plain');
      document.execCommand('insertText', false, text);
    }
    static ɵfac = function CleanPasteDataDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CleanPasteDataDirective)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CleanPasteDataDirective,
      selectors: [["", "cleanPasteData", ""]],
      hostBindings: function CleanPasteDataDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function CleanPasteDataDirective_paste_HostBindingHandler($event) {
            return ctx.onPaste($event);
          });
        }
      }
    });
  }
  return CleanPasteDataDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let HeaderBlockComponent = /*#__PURE__*/(() => {
  class HeaderBlockComponent {
    sortIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(0);
    componentInstanceName = 'HeaderBlockComponent';
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(true);
    formGroup = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    formControlName = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)([{
      action: 'h1',
      text: 'H1'
    }, {
      action: 'h2',
      text: 'H2'
    }, {
      action: 'h3',
      text: 'H3'
    }, {
      action: 'h4',
      text: 'H4'
    }, {
      action: 'h5',
      text: 'H5'
    }, {
      action: 'h6',
      text: 'H6'
    }]);
    savedAction = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('h1');
    actionCallbackBind = this.actionCallback.bind(this);
    actionCallback(selectedAction) {
      this.savedAction.set(selectedAction);
    }
    static ɵfac = function HeaderBlockComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HeaderBlockComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderBlockComponent,
      selectors: [["header-block"]],
      hostAttrs: [1, "cdk-drag-animating"],
      inputs: {
        sortIndex: [1, "sortIndex"],
        autofocus: [1, "autofocus"],
        formGroup: [1, "formGroup"],
        formControlName: [1, "formControlName"],
        blockOptionActions: [1, "blockOptionActions"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDrag])],
      decls: 9,
      vars: 8,
      consts: [["sharedHeaderTemplate", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "formGroup"], [4, "ngTemplateOutlet"], ["controlAccessor", "", "cleanPasteData", "", "contentEditable", "", "toolbarFab", "", 3, "defaultValue", "actionCallback", "blockOptionActions", "autofocus", "formControlName", "componentContextPositionIndex"]],
      template: function HeaderBlockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_h1_1_Template, 2, 1, "h1", 2)(2, HeaderBlockComponent_h2_2_Template, 2, 1, "h2", 2)(3, HeaderBlockComponent_h3_3_Template, 2, 1, "h3", 2)(4, HeaderBlockComponent_h4_4_Template, 2, 1, "h4", 2)(5, HeaderBlockComponent_h5_5_Template, 2, 1, "h5", 2)(6, HeaderBlockComponent_h6_6_Template, 2, 1, "h6", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderBlockComponent_ng_template_7_Template, 1, 6, "ng-template", 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.savedAction());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup());
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, ControlAccessorDirective, AutofocusDirective, ToolbarFabDirective, CleanPasteDataDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet],
      styles: ["[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]   :is(h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]){margin:0}[_nghost-%COMP%]   :is(h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%])   span[_ngcontent-%COMP%]{display:block;line-height:inherit}[_nghost-%COMP%]   h1[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font:var(--mat-sys-display-large)}[_nghost-%COMP%]   h2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font:var(--mat-sys-display-medium)}[_nghost-%COMP%]   h3[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font:var(--mat-sys-display-small)}[_nghost-%COMP%]   h4[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font:var(--mat-sys-headline-large)}[_nghost-%COMP%]   h5[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font:var(--mat-sys-headline-medium)}[_nghost-%COMP%]   h6[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font:var(--mat-sys-headline-small)}"]
    });
  }
  return HeaderBlockComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ParagraphBlockComponent = /*#__PURE__*/(() => {
  class ParagraphBlockComponent {
    sortIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(0);
    componentInstanceName = 'ParagraphBlockComponent';
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(true);
    formGroup = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    formControlName = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)([{
      action: 'small',
      icon: 'density_small'
    }, {
      action: 'medium',
      icon: 'density_medium'
    }, {
      action: 'large',
      icon: 'density_large'
    }, {
      action: 'title-small',
      text: 'TS'
    }, {
      action: 'title-medium',
      text: 'TM'
    }, {
      action: 'title-large',
      text: 'TL'
    }]);
    savedAction = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('medium');
    actionCallbackBind = this.actionCallback.bind(this);
    actionCallback(action) {
      this.savedAction.update(() => action);
    }
    static ɵfac = function ParagraphBlockComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ParagraphBlockComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ParagraphBlockComponent,
      selectors: [["paragraph-block"]],
      hostAttrs: [1, "cdk-drag-animating"],
      inputs: {
        sortIndex: [1, "sortIndex"],
        autofocus: [1, "autofocus"],
        formGroup: [1, "formGroup"],
        formControlName: [1, "formControlName"],
        blockOptionActions: [1, "blockOptionActions"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDrag])],
      decls: 2,
      vars: 8,
      consts: [[3, "formGroup"], ["controlAccessor", "", "contentEditable", "", "toolbarFab", "", "cleanPasteData", "", 3, "ngClass", "defaultValue", "actionCallback", "autofocus", "blockOptionActions", "formControlName", "componentContextPositionIndex"]],
      template: function ParagraphBlockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.savedAction())("defaultValue", (tmp_2_0 = ctx.formGroup().get(ctx.formControlName())) == null ? null : tmp_2_0.value)("actionCallback", ctx.actionCallbackBind)("autofocus", ctx.autofocus())("blockOptionActions", ctx.blockOptionActions())("formControlName", ctx.formControlName())("componentContextPositionIndex", ctx.sortIndex());
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, ControlAccessorDirective, AutofocusDirective, ToolbarFabDirective, CleanPasteDataDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass],
      styles: ["[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]   .small[_ngcontent-%COMP%]{font:var(--mat-sys-body-small)}[_nghost-%COMP%]   .medium[_ngcontent-%COMP%]{font:var(--mat-sys-body-medium)}[_nghost-%COMP%]   .large[_ngcontent-%COMP%]{font:var(--mat-sys-body-large)}[_nghost-%COMP%]   .title-small[_ngcontent-%COMP%]{font:var(--mat-sys-title-small)}[_nghost-%COMP%]   .title-medium[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium)}[_nghost-%COMP%]   .title-large[_ngcontent-%COMP%]{font:var(--mat-sys-title-large)}"]
    });
  }
  return ParagraphBlockComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const NGX_EDITORJS_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NGX_EDITORJS_OPTIONS');
let NgxEditorJs2Service = /*#__PURE__*/(() => {
  class NgxEditorJs2Service {
    editorJsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(EditorJsService);
    consumerSupportedBlocks = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(NGX_EDITORJS_OPTIONS, {
      optional: true
    })?.consumerSupportedBlocks ?? []);
    internalSupportedBlocks = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([{
      name: 'Paragraph',
      component: ParagraphBlockComponent,
      componentInstanceName: 'ParagraphBlockComponent'
    }, {
      name: 'Header',
      component: HeaderBlockComponent,
      componentInstanceName: 'HeaderBlockComponent'
    }]);
    supportedBlocks$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([this.internalSupportedBlocks.asObservable(), this.consumerSupportedBlocks.asObservable()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(([internal, consumer]) => [...internal, ...consumer]));
    blocksToLoad = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    loadBlocks$ = this.blocksToLoad.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.delay)(0), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.exhaustMap)(blocks => this.clearBlocksFromEditorJs(blocks)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(([blocks]) => this.determineToloadDefaultBlocks(blocks)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(blocks => this.removeDuplicateBlocksWithSameIds(blocks)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(blocks => this.sortBlocks(blocks)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(blocks => this.combineSupportBlocks(blocks)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(([blocks, supportedBlocks]) => this.createALookupMapForSupportedBlocks(blocks, supportedBlocks)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(({
      blocks,
      supportedBlocksMap
    }) => this.findAndMarshalBlocksComponent(blocks, supportedBlocksMap)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(blocks => this.addBlocksToEditorJs(blocks).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(() => blocks))));
    clearBlocksFromEditorJs(blocks) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)([(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(blocks), this.editorJsService.clearBlocks()]);
    }
    determineToloadDefaultBlocks(blocks) {
      return blocks.length > 0 ? blocks : this.loadDefaultBlocks();
    }
    loadDefaultBlocks() {
      return [{
        blockId: 'tmdjr',
        sortIndex: 0,
        componentInstanceName: 'HeaderBlockComponent',
        dataClean: "Let's get started... 🚀",
        savedAction: 'h1'
      }];
    }
    removeDuplicateBlocksWithSameIds(blocks) {
      return Array.from(new Map(blocks.map(block => [block.blockId, block])).values());
    }
    sortBlocks(blocks) {
      return blocks.sort((a, b) => a.sortIndex - b.sortIndex);
    }
    combineSupportBlocks(blocks) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(blocks), this.supportedBlocks$]);
    }
    createALookupMapForSupportedBlocks(blocks, supportedBlocks) {
      return {
        blocks,
        supportedBlocksMap: new Map(supportedBlocks.map(sb => [sb.componentInstanceName, sb.component]))
      };
    }
    findAndMarshalBlocksComponent(blocks, supportedBlocksMap) {
      return blocks.map(block => ({
        ...block,
        component: supportedBlocksMap.get(block.componentInstanceName) ?? HeaderBlockComponent
      }));
    }
    addBlocksToEditorJs(blocks) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)(blocks.map(block => this.editorJsService.addBlockComponent(block)));
    }
    static ɵfac = function NgxEditorJs2Service_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgxEditorJs2Service)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgxEditorJs2Service,
      factory: NgxEditorJs2Service.ɵfac,
      providedIn: 'root'
    });
  }
  return NgxEditorJs2Service;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let EditorJsComponent = /*#__PURE__*/(() => {
  class EditorJsComponent {
    editorJsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(EditorJsService);
    ngxEditorJs2Service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(NgxEditorJs2Service);
    bootstrapEditorJs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    blocks = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required({
      transform: value => this.ngxEditorJs2Service.blocksToLoad.next(value)
    });
    ngxEditor = _angular_core__WEBPACK_IMPORTED_MODULE_0__.viewChild.required('ngxEditor', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    });
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
        this.editorJsService.setNgxEditor(this.ngxEditor());
      });
    }
    // * DEBUGGING
    // ngOnInit() {
    //   this.editorJsService.formGroup.valueChanges.subscribe((value) => {
    //     console.log('[formGroup.value] : ', value);
    //   });
    //   this.editorJsService.blockComponents$.subscribe((components) => {
    //     console.log('[components] : ', components);
    //   });
    // }
    drop(event) {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(this.editorJsService.moveBlockComponentPosition(event.previousIndex, event.currentIndex)).then(() => {
        // DRAG ANIMATION HOT FIX
        // Wait for Angular to update the DOM, then remove the animation class
        requestAnimationFrame(() => {
          document.querySelectorAll('.cdk-drag-animating').forEach(el => {
            const element = el;
            element.classList.remove('cdk-drag-animating'); // Ensure old class is removed
            void element.offsetWidth; // Force reflow
            element.classList.add('cdk-drag-animating'); // Re-add for next drag
          });
        });
      });
    }
    static ɵfac = function EditorJsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditorJsComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditorJsComponent,
      selectors: [["editor-js"]],
      viewQuery: function EditorJsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuerySignal"](ctx.ngxEditor, _c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryAdvance"]();
        }
      },
      inputs: {
        bootstrapEditorJs: [1, "bootstrapEditorJs"],
        blocks: [1, "blocks"]
      },
      decls: 3,
      vars: 0,
      consts: [["ngxEditor", ""], ["cdkDropList", "", 1, "block-list", 3, "cdkDropListDropped"]],
      template: function EditorJsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function EditorJsComponent_Template_div_cdkDropListDropped_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.drop($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, null, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDropList],
      styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .block-list[_ngcontent-%COMP%]{min-height:60px}"]
    });
  }
  return EditorJsComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ToolbarInlineComponent = /*#__PURE__*/(() => {
  class ToolbarInlineComponent {
    // @Input() selection!: Selection;
    selection = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    closeOverlayEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2);
    url = '';
    showURLInputField = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
    savedRanges = [];
    options = [{
      icon: 'format_bold',
      action: 'bold'
    }, {
      icon: 'format_italic',
      action: 'italic'
    }, {
      icon: 'format_underlined',
      action: 'underline'
    }, {
      icon: 'strikethrough_s',
      action: 'strikethrough'
    }, {
      icon: 'format_list_bulleted',
      action: 'insertUnorderedList'
    }, {
      icon: 'format_list_numbered',
      action: 'insertOrderedList'
    }, {
      icon: 'highlight',
      action: 'highlightColor'
    }, {
      icon: 'format_align_left',
      action: 'justifyLeft'
    }, {
      icon: 'format_align_center',
      action: 'justifyCenter'
    }, {
      icon: 'format_align_right',
      action: 'justifyRight'
    }, {
      icon: 'format_align_justify',
      action: 'justifyFull'
    }];
    addInlineTag(tag) {
      // https://stackoverflow.com/questions/60581285/execcommand-is-now-obsolete-whats-the-alternative
      document.execCommand(tag);
      this.closeOverlayEmitter.emit();
    }
    addClassTag(tag, className) {
      const range = this.selection().getRangeAt(0);
      const element = this.renderer.createElement(tag);
      element.className = className ?? '';
      element.innerHTML = range.toString();
      range.deleteContents();
      range.insertNode(element);
      this.closeOverlayEmitter.emit();
    }
    clearTags() {
      document.execCommand('removeFormat');
      document.execCommand('unlink');
      this.closeOverlayEmitter.emit();
    }
    openUrlInput() {
      this.savedRanges.push(this.selection().getRangeAt(0));
      this.showURLInputField.set(true);
    }
    createLink() {
      this.selection().removeAllRanges();
      this.selection().addRange(this.savedRanges.pop());
      document.execCommand('createLink', false, this.url);
      this.closeOverlayEmitter.emit();
    }
    static ɵfac = function ToolbarInlineComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolbarInlineComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarInlineComponent,
      selectors: [["toolbar-inline"]],
      hostAttrs: [1, "mat-elevation-z24"],
      inputs: {
        selection: [1, "selection"]
      },
      outputs: {
        closeOverlayEmitter: "closeOverlay"
      },
      decls: 13,
      vars: 1,
      consts: [[1, "panel"], [1, "inline-option"], [1, "inline-option", 3, "click"], ["type", "text", "placeholder", "Enter URL", 1, "block-option-input", 3, "ngModelChange", "ngModel"]],
      template: function ToolbarInlineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](1, ToolbarInlineComponent_For_2_Template, 3, 1, "div", 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIndex"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarInlineComponent_Template_div_click_3_listener() {
            return ctx.addClassTag("code", "inline-code");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarInlineComponent_Template_div_click_6_listener() {
            return ctx.openUrlInput();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "insert_link");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarInlineComponent_Template_div_click_9_listener() {
            return ctx.clearTags();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "format_clear");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ToolbarInlineComponent_Conditional_12_Template, 5, 1, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.options);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.showURLInputField() ? 12 : -1);
        }
      },
      dependencies: [_angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
      styles: ["[_nghost-%COMP%]{color:var(--mat-sys-on-secondary);background:var(--mat-sys-secondary);border-radius:8px}[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]{display:flex;width:230px;flex-wrap:wrap;gap:1px}[_nghost-%COMP%]   .inline-option[_ngcontent-%COMP%]{cursor:pointer;width:32px;height:32px;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .block-option-input[_ngcontent-%COMP%]{width:197px;height:32px;border:none;outline:none;color:var(--mat-sys-on-secondary);background-color:transparent;box-sizing:border-box}"]
    });
  }
  return ToolbarInlineComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ToolbarInlineService = /*#__PURE__*/(() => {
  class ToolbarInlineService {
    overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay);
    overlayRef;
    determineToDisplayInlineToolbarBlock(_event) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(window.getSelection()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(selection => selection !== null), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(selection => selection.rangeCount > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(selection => selection.toString().length > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(selection => selection.toString() !== ''), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(() => this.overlayRef?.hasAttached() && this.overlayRef.dispose()),
      // So hacky tired to do this properly
      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(selection => ({
        selection,
        parant: this.getSelectionParent(selection)
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(({
        parant
      }) => this.isSelectionInABlock(parant)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.exhaustMap)(({
        selection
      }) => this.attachInlineToolbar(selection)));
    }
    getSelectionParent(selection) {
      const range = selection.getRangeAt(0);
      return range.commonAncestorContainer.nodeType === Node.ELEMENT_NODE ? range.commonAncestorContainer : range.commonAncestorContainer.parentElement;
    }
    isSelectionInABlock(target) {
      // ! TODO: This is a hacky way to determine if the selection is in a block
      // ! Need to also check if the block wants to display the inline toolbar
      return !!target && (target.closest('.no-toolbar-inline') !== null ? false : target.closest('ngx-editor-js2') !== null ? true : false);
    }
    attachInlineToolbar(selection) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(selection.getRangeAt(0)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(range => range.getBoundingClientRect()), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(selectionRect => this.createOverlay(selectionRect)),
      // So hacky tired to do this properly
      // passing the refs down the pipe adds a bug
      // user selects text with a drag
      // (mousedown → mousemove → wait → mousemove → mouseup)
      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(overlayRef => this.overlayRef = overlayRef), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(overlayRef => {
        const inlineToolbar = overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.ComponentPortal(ToolbarInlineComponent));
        inlineToolbar.setInput('selection', selection);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(overlayRef.backdropClick(), inlineToolbar.instance.closeOverlayEmitter).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(() => overlayRef.dispose()), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(() => selection.removeAllRanges())));
        return true;
      }));
    }
    createOverlay(selectionRect) {
      return this.overlay.create({
        hasBackdrop: true,
        backdropClass: 'cdk-overlay-transparent-backdrop',
        positionStrategy: this.overlay.position().flexibleConnectedTo(selectionRect).withPositions([{
          offsetY: 8,
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        }])
      });
    }
    static ɵfac = function ToolbarInlineService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolbarInlineService)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ToolbarInlineService,
      factory: ToolbarInlineService.ɵfac,
      providedIn: 'root'
    });
  }
  return ToolbarInlineService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NgxEditorJs2Component = /*#__PURE__*/(() => {
  class NgxEditorJs2Component {
    inlineToolbarSerivce = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ToolbarInlineService);
    editorJsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(EditorJsService);
    ngxEditorJs2Service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(NgxEditorJs2Service);
    blocks = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)([]);
    blocksRequested = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    requestBlocks = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required({
      transform: _v => this.blocksRequested.emit(this.editorJsService.getBlocks$())
    });
    bootstrapEditorJs$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ToolFabService).toolbarComponentRef$, this.ngxEditorJs2Service.loadBlocks$, (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'selectionchange').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(event => this.inlineToolbarSerivce.determineToDisplayInlineToolbarBlock(event)))]);
    static ɵfac = function NgxEditorJs2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgxEditorJs2Component)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxEditorJs2Component,
      selectors: [["ngx-editor-js2"]],
      inputs: {
        blocks: [1, "blocks"],
        requestBlocks: [1, "requestBlocks"]
      },
      outputs: {
        blocksRequested: "blocksRequested"
      },
      decls: 2,
      vars: 4,
      consts: [[3, "blocks", "bootstrapEditorJs"]],
      template: function NgxEditorJs2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "editor-js", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blocks", ctx.blocks())("bootstrapEditorJs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.bootstrapEditorJs$));
        }
      },
      dependencies: [EditorJsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
      encapsulation: 2
    });
  }
  return NgxEditorJs2Component;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of ngx-editor-js2
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=7887.js.map