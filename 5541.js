(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[5541],{

/***/ 24950
/*!****************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/form-field.mjs ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_ERROR: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAT_ERROR),
/* harmony export */   MAT_FORM_FIELD: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAT_FORM_FIELD),
/* harmony export */   MAT_FORM_FIELD_DEFAULT_OPTIONS: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAT_FORM_FIELD_DEFAULT_OPTIONS),
/* harmony export */   MAT_PREFIX: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAT_PREFIX),
/* harmony export */   MAT_SUFFIX: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAT_SUFFIX),
/* harmony export */   MatError: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatError),
/* harmony export */   MatFormField: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatFormField),
/* harmony export */   MatFormFieldControl: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatFormFieldControl),
/* harmony export */   MatFormFieldModule: () => (/* binding */ MatFormFieldModule),
/* harmony export */   MatHint: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatHint),
/* harmony export */   MatLabel: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatLabel),
/* harmony export */   MatPrefix: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatPrefix),
/* harmony export */   MatSuffix: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatSuffix),
/* harmony export */   getMatFormFieldDuplicatedHintError: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.getMatFormFieldDuplicatedHintError),
/* harmony export */   getMatFormFieldMissingControlError: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.getMatFormFieldMissingControlError),
/* harmony export */   getMatFormFieldPlaceholderConflictError: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.getMatFormFieldPlaceholderConflictError)
/* harmony export */ });
/* harmony import */ var _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_form-field-chunk.mjs */ 80423);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ 13266);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/observers */ 60634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 45562);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ 32298);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ 86456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 11674);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _angular_cdk_observers_private__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/observers/private */ 36192);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ 42394);















let MatFormFieldModule = /*#__PURE__*/(() => {
  class MatFormFieldModule {
    static ɵfac = function MatFormFieldModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatFormFieldModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MatFormFieldModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__.ObserversModule, _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatFormField, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__.BidiModule]
    });
  }
  return MatFormFieldModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 54297
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_error-options-chunk.mjs ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorStateMatcher: () => (/* binding */ ErrorStateMatcher),
/* harmony export */   ShowOnDirtyErrorStateMatcher: () => (/* binding */ ShowOnDirtyErrorStateMatcher)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);


let ShowOnDirtyErrorStateMatcher = /*#__PURE__*/(() => {
  class ShowOnDirtyErrorStateMatcher {
    isErrorState(control, form) {
      return !!(control && control.invalid && (control.dirty || form && form.submitted));
    }
    static ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ShowOnDirtyErrorStateMatcher)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ShowOnDirtyErrorStateMatcher,
      factory: ShowOnDirtyErrorStateMatcher.ɵfac
    });
  }
  return ShowOnDirtyErrorStateMatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ErrorStateMatcher = /*#__PURE__*/(() => {
  class ErrorStateMatcher {
    isErrorState(control, form) {
      return !!(control && control.invalid && (control.touched || form && form.submitted));
    }
    static ɵfac = function ErrorStateMatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ErrorStateMatcher)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorStateMatcher,
      factory: ErrorStateMatcher.ɵfac,
      providedIn: 'root'
    });
  }
  return ErrorStateMatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 54612
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_error-state-chunk.mjs ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _ErrorStateTracker: () => (/* binding */ _ErrorStateTracker)
/* harmony export */ });
class _ErrorStateTracker {
  _defaultMatcher;
  ngControl;
  _parentFormGroup;
  _parentForm;
  _stateChanges;
  errorState = false;
  matcher;
  constructor(_defaultMatcher, ngControl, _parentFormGroup, _parentForm, _stateChanges) {
    this._defaultMatcher = _defaultMatcher;
    this.ngControl = ngControl;
    this._parentFormGroup = _parentFormGroup;
    this._parentForm = _parentForm;
    this._stateChanges = _stateChanges;
  }
  updateErrorState() {
    const oldState = this.errorState;
    const parent = this._parentFormGroup || this._parentForm;
    const matcher = this.matcher || this._defaultMatcher;
    const control = this.ngControl ? this.ngControl.control : null;
    const newState = matcher?.isErrorState(control, parent) ?? false;
    if (newState !== oldState) {
      this.errorState = newState;
      this._stateChanges.next();
    }
  }
}


/***/ },

/***/ 80423
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_form-field-chunk.mjs ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_ERROR: () => (/* binding */ MAT_ERROR),
/* harmony export */   MAT_FORM_FIELD: () => (/* binding */ MAT_FORM_FIELD),
/* harmony export */   MAT_FORM_FIELD_DEFAULT_OPTIONS: () => (/* binding */ MAT_FORM_FIELD_DEFAULT_OPTIONS),
/* harmony export */   MAT_PREFIX: () => (/* binding */ MAT_PREFIX),
/* harmony export */   MAT_SUFFIX: () => (/* binding */ MAT_SUFFIX),
/* harmony export */   MatError: () => (/* binding */ MatError),
/* harmony export */   MatFormField: () => (/* binding */ MatFormField),
/* harmony export */   MatFormFieldControl: () => (/* binding */ MatFormFieldControl),
/* harmony export */   MatHint: () => (/* binding */ MatHint),
/* harmony export */   MatLabel: () => (/* binding */ MatLabel),
/* harmony export */   MatPrefix: () => (/* binding */ MatPrefix),
/* harmony export */   MatSuffix: () => (/* binding */ MatSuffix),
/* harmony export */   getMatFormFieldDuplicatedHintError: () => (/* binding */ getMatFormFieldDuplicatedHintError),
/* harmony export */   getMatFormFieldMissingControlError: () => (/* binding */ getMatFormFieldMissingControlError),
/* harmony export */   getMatFormFieldPlaceholderConflictError: () => (/* binding */ getMatFormFieldPlaceholderConflictError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ 45562);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ 13266);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 32298);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 86456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 11674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _angular_cdk_observers_private__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/observers/private */ 36192);
/* harmony import */ var _animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_animation-chunk.mjs */ 87432);











const _c0 = ["notch"];
const _c1 = ["matFormFieldNotchedOutline", ""];
const _c2 = ["*"];
const _c3 = ["iconPrefixContainer"];
const _c4 = ["textPrefixContainer"];
const _c5 = ["iconSuffixContainer"];
const _c6 = ["textSuffixContainer"];
const _c7 = ["textField"];
const _c8 = ["*", [["mat-label"]], [["", "matPrefix", ""], ["", "matIconPrefix", ""]], [["", "matTextPrefix", ""]], [["", "matTextSuffix", ""]], [["", "matSuffix", ""], ["", "matIconSuffix", ""]], [["mat-error"], ["", "matError", ""]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
const _c9 = ["*", "mat-label", "[matPrefix], [matIconPrefix]", "[matTextPrefix]", "[matTextSuffix]", "[matSuffix], [matIconSuffix]", "mat-error, [matError]", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
function MatFormField_ng_template_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 21);
  }
}
function MatFormField_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](2, MatFormField_ng_template_0_Conditional_0_Conditional_2_Template, 1, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("floating", ctx_r1._shouldLabelFloat())("monitorResize", ctx_r1._hasOutline())("id", ctx_r1._labelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("for", ctx_r1._control.disableAutomaticLabeling ? null : ctx_r1._control.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx_r1.hideRequiredMarker && ctx_r1._control.required ? 2 : -1);
  }
}
function MatFormField_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](0, MatFormField_ng_template_0_Conditional_0_Template, 3, 5, "label", 20);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r1._hasFloatingLabel() ? 0 : -1);
  }
}
function MatFormField_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 7);
  }
}
function MatFormField_Conditional_6_Conditional_1_ng_template_0_Template(rf, ctx) {}
function MatFormField_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MatFormField_Conditional_6_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const labelTemplate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", labelTemplate_r3);
  }
}
function MatFormField_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](1, MatFormField_Conditional_6_Conditional_1_Template, 1, 1, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matFormFieldNotchedOutlineOpen", ctx_r1._shouldLabelFloat());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx_r1._forceDisplayInfixLabel() ? 1 : -1);
  }
}
function MatFormField_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MatFormField_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MatFormField_Conditional_10_ng_template_0_Template(rf, ctx) {}
function MatFormField_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MatFormField_Conditional_10_ng_template_0_Template, 0, 0, "ng-template", 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const labelTemplate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", labelTemplate_r3);
  }
}
function MatFormField_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MatFormField_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](2, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MatFormField_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 16);
  }
}
function MatFormField_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MatFormField_Case_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", ctx_r1._hintLabelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.hintLabel);
  }
}
function MatFormField_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](1, MatFormField_Case_17_Conditional_1_Template, 2, 2, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](4, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r1.hintLabel ? 1 : -1);
  }
}
let MatLabel = /*#__PURE__*/(() => {
  class MatLabel {
    static ɵfac = function MatLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatLabel)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: MatLabel,
      selectors: [["mat-label"]]
    });
  }
  return MatLabel;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const MAT_ERROR = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken('MatError');
let MatError = /*#__PURE__*/(() => {
  class MatError {
    id = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__._IdGenerator).getId('mat-mdc-error-');
    constructor() {}
    static ɵfac = function MatError_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatError)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: MatError,
      selectors: [["mat-error"], ["", "matError", ""]],
      hostAttrs: [1, "mat-mdc-form-field-error", "mat-mdc-form-field-bottom-align"],
      hostVars: 1,
      hostBindings: function MatError_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomProperty"]("id", ctx.id);
        }
      },
      inputs: {
        id: "id"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
        provide: MAT_ERROR,
        useExisting: MatError
      }])]
    });
  }
  return MatError;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatHint = /*#__PURE__*/(() => {
  class MatHint {
    align = 'start';
    id = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__._IdGenerator).getId('mat-mdc-hint-');
    static ɵfac = function MatHint_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatHint)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: MatHint,
      selectors: [["mat-hint"]],
      hostAttrs: [1, "mat-mdc-form-field-hint", "mat-mdc-form-field-bottom-align"],
      hostVars: 4,
      hostBindings: function MatHint_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomProperty"]("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("align", null);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mat-mdc-form-field-hint-end", ctx.align === "end");
        }
      },
      inputs: {
        align: "align",
        id: "id"
      }
    });
  }
  return MatHint;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const MAT_PREFIX = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken('MatPrefix');
let MatPrefix = /*#__PURE__*/(() => {
  class MatPrefix {
    set _isTextSelector(value) {
      this._isText = true;
    }
    _isText = false;
    static ɵfac = function MatPrefix_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatPrefix)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: MatPrefix,
      selectors: [["", "matPrefix", ""], ["", "matIconPrefix", ""], ["", "matTextPrefix", ""]],
      inputs: {
        _isTextSelector: [0, "matTextPrefix", "_isTextSelector"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
        provide: MAT_PREFIX,
        useExisting: MatPrefix
      }])]
    });
  }
  return MatPrefix;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const MAT_SUFFIX = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken('MatSuffix');
let MatSuffix = /*#__PURE__*/(() => {
  class MatSuffix {
    set _isTextSelector(value) {
      this._isText = true;
    }
    _isText = false;
    static ɵfac = function MatSuffix_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatSuffix)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: MatSuffix,
      selectors: [["", "matSuffix", ""], ["", "matIconSuffix", ""], ["", "matTextSuffix", ""]],
      inputs: {
        _isTextSelector: [0, "matTextSuffix", "_isTextSelector"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
        provide: MAT_SUFFIX,
        useExisting: MatSuffix
      }])]
    });
  }
  return MatSuffix;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const FLOATING_LABEL_PARENT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken('FloatingLabelParent');
let MatFormFieldFloatingLabel = /*#__PURE__*/(() => {
  class MatFormFieldFloatingLabel {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef);
    get floating() {
      return this._floating;
    }
    set floating(value) {
      this._floating = value;
      if (this.monitorResize) {
        this._handleResize();
      }
    }
    _floating = false;
    get monitorResize() {
      return this._monitorResize;
    }
    set monitorResize(value) {
      this._monitorResize = value;
      if (this._monitorResize) {
        this._subscribeToResize();
      } else {
        this._resizeSubscription.unsubscribe();
      }
    }
    _monitorResize = false;
    _resizeObserver = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_cdk_observers_private__WEBPACK_IMPORTED_MODULE_8__.SharedResizeObserver);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone);
    _parent = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(FLOATING_LABEL_PARENT);
    _resizeSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    constructor() {}
    ngOnDestroy() {
      this._resizeSubscription.unsubscribe();
    }
    getWidth() {
      return estimateScrollWidth(this._elementRef.nativeElement);
    }
    get element() {
      return this._elementRef.nativeElement;
    }
    _handleResize() {
      setTimeout(() => this._parent._handleLabelResized());
    }
    _subscribeToResize() {
      this._resizeSubscription.unsubscribe();
      this._ngZone.runOutsideAngular(() => {
        this._resizeSubscription = this._resizeObserver.observe(this._elementRef.nativeElement, {
          box: 'border-box'
        }).subscribe(() => this._handleResize());
      });
    }
    static ɵfac = function MatFormFieldFloatingLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatFormFieldFloatingLabel)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: MatFormFieldFloatingLabel,
      selectors: [["label", "matFormFieldFloatingLabel", ""]],
      hostAttrs: [1, "mdc-floating-label", "mat-mdc-floating-label"],
      hostVars: 2,
      hostBindings: function MatFormFieldFloatingLabel_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mdc-floating-label--float-above", ctx.floating);
        }
      },
      inputs: {
        floating: "floating",
        monitorResize: "monitorResize"
      }
    });
  }
  return MatFormFieldFloatingLabel;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function estimateScrollWidth(element) {
  const htmlEl = element;
  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }
  const clone = htmlEl.cloneNode(true);
  clone.style.setProperty('position', 'absolute');
  clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
  document.documentElement.appendChild(clone);
  const scrollWidth = clone.scrollWidth;
  clone.remove();
  return scrollWidth;
}
const ACTIVATE_CLASS = 'mdc-line-ripple--active';
const DEACTIVATING_CLASS = 'mdc-line-ripple--deactivating';
let MatFormFieldLineRipple = /*#__PURE__*/(() => {
  class MatFormFieldLineRipple {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef);
    _cleanupTransitionEnd;
    constructor() {
      const ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone);
      const renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2);
      ngZone.runOutsideAngular(() => {
        this._cleanupTransitionEnd = renderer.listen(this._elementRef.nativeElement, 'transitionend', this._handleTransitionEnd);
      });
    }
    activate() {
      const classList = this._elementRef.nativeElement.classList;
      classList.remove(DEACTIVATING_CLASS);
      classList.add(ACTIVATE_CLASS);
    }
    deactivate() {
      this._elementRef.nativeElement.classList.add(DEACTIVATING_CLASS);
    }
    _handleTransitionEnd = event => {
      const classList = this._elementRef.nativeElement.classList;
      const isDeactivating = classList.contains(DEACTIVATING_CLASS);
      if (event.propertyName === 'opacity' && isDeactivating) {
        classList.remove(ACTIVATE_CLASS, DEACTIVATING_CLASS);
      }
    };
    ngOnDestroy() {
      this._cleanupTransitionEnd();
    }
    static ɵfac = function MatFormFieldLineRipple_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatFormFieldLineRipple)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: MatFormFieldLineRipple,
      selectors: [["div", "matFormFieldLineRipple", ""]],
      hostAttrs: [1, "mdc-line-ripple"]
    });
  }
  return MatFormFieldLineRipple;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatFormFieldNotchedOutline = /*#__PURE__*/(() => {
  class MatFormFieldNotchedOutline {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone);
    open = false;
    _notch;
    ngAfterViewInit() {
      const element = this._elementRef.nativeElement;
      const label = element.querySelector('.mdc-floating-label');
      if (label) {
        element.classList.add('mdc-notched-outline--upgraded');
        if (typeof requestAnimationFrame === 'function') {
          label.style.transitionDuration = '0s';
          this._ngZone.runOutsideAngular(() => {
            requestAnimationFrame(() => label.style.transitionDuration = '');
          });
        }
      } else {
        element.classList.add('mdc-notched-outline--no-label');
      }
    }
    _setNotchWidth(labelWidth) {
      const notch = this._notch.nativeElement;
      if (!this.open || !labelWidth) {
        notch.style.width = '';
      } else {
        const NOTCH_ELEMENT_PADDING = 8;
        const NOTCH_ELEMENT_BORDER = 1;
        notch.style.width = `calc(${labelWidth}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + ${NOTCH_ELEMENT_PADDING + NOTCH_ELEMENT_BORDER}px)`;
      }
    }
    _setMaxWidth(prefixAndSuffixWidth) {
      this._notch.nativeElement.style.setProperty('--mat-form-field-notch-max-width', `calc(100% - ${prefixAndSuffixWidth}px)`);
    }
    static ɵfac = function MatFormFieldNotchedOutline_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatFormFieldNotchedOutline)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: MatFormFieldNotchedOutline,
      selectors: [["div", "matFormFieldNotchedOutline", ""]],
      viewQuery: function MatFormFieldNotchedOutline_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._notch = _t.first);
        }
      },
      hostAttrs: [1, "mdc-notched-outline"],
      hostVars: 2,
      hostBindings: function MatFormFieldNotchedOutline_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mdc-notched-outline--notched", ctx.open);
        }
      },
      inputs: {
        open: [0, "matFormFieldNotchedOutlineOpen", "open"]
      },
      attrs: _c1,
      ngContentSelectors: _c2,
      decls: 5,
      vars: 0,
      consts: [["notch", ""], [1, "mat-mdc-notch-piece", "mdc-notched-outline__leading"], [1, "mat-mdc-notch-piece", "mdc-notched-outline__notch"], [1, "mat-mdc-notch-piece", "mdc-notched-outline__trailing"]],
      template: function MatFormFieldNotchedOutline_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](1, "div", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](4, "div", 3);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatFormFieldNotchedOutline;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatFormFieldControl = /*#__PURE__*/(() => {
  class MatFormFieldControl {
    value = null;
    stateChanges;
    id;
    placeholder;
    ngControl = null;
    focused = false;
    empty = false;
    shouldLabelFloat = false;
    required = false;
    disabled = false;
    errorState = false;
    controlType;
    autofilled;
    userAriaDescribedBy;
    disableAutomaticLabeling;
    describedByIds;
    static ɵfac = function MatFormFieldControl_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatFormFieldControl)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: MatFormFieldControl
    });
  }
  return MatFormFieldControl;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function getMatFormFieldPlaceholderConflictError() {
  return Error('Placeholder attribute and child element were both specified.');
}
function getMatFormFieldDuplicatedHintError(align) {
  return Error(`A hint was already declared for 'align="${align}"'.`);
}
function getMatFormFieldMissingControlError() {
  return Error('mat-form-field must contain a MatFormFieldControl.');
}
const MAT_FORM_FIELD = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken('MatFormField');
const MAT_FORM_FIELD_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_5__.InjectionToken('MAT_FORM_FIELD_DEFAULT_OPTIONS');
const DEFAULT_APPEARANCE = 'fill';
const DEFAULT_FLOAT_LABEL = 'auto';
const DEFAULT_SUBSCRIPT_SIZING = 'fixed';
const FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM = `translateY(-50%)`;
let MatFormField = /*#__PURE__*/(() => {
  class MatFormField {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef);
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef);
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform);
    _idGenerator = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__._IdGenerator);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone);
    _defaults = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(MAT_FORM_FIELD_DEFAULT_OPTIONS, {
      optional: true
    });
    _currentDirection;
    _textField;
    _iconPrefixContainer;
    _textPrefixContainer;
    _iconSuffixContainer;
    _textSuffixContainer;
    _floatingLabel;
    _notchedOutline;
    _lineRipple;
    _iconPrefixContainerSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.viewChild)('iconPrefixContainer', ...(ngDevMode ? [{
      debugName: "_iconPrefixContainerSignal"
    }] : []));
    _textPrefixContainerSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.viewChild)('textPrefixContainer', ...(ngDevMode ? [{
      debugName: "_textPrefixContainerSignal"
    }] : []));
    _iconSuffixContainerSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.viewChild)('iconSuffixContainer', ...(ngDevMode ? [{
      debugName: "_iconSuffixContainerSignal"
    }] : []));
    _textSuffixContainerSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.viewChild)('textSuffixContainer', ...(ngDevMode ? [{
      debugName: "_textSuffixContainerSignal"
    }] : []));
    _prefixSuffixContainers = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => {
      return [this._iconPrefixContainerSignal(), this._textPrefixContainerSignal(), this._iconSuffixContainerSignal(), this._textSuffixContainerSignal()].map(container => container?.nativeElement).filter(e => e !== undefined);
    }, ...(ngDevMode ? [{
      debugName: "_prefixSuffixContainers"
    }] : []));
    _formFieldControl;
    _prefixChildren;
    _suffixChildren;
    _errorChildren;
    _hintChildren;
    _labelChild = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.contentChild)(MatLabel, ...(ngDevMode ? [{
      debugName: "_labelChild"
    }] : []));
    get hideRequiredMarker() {
      return this._hideRequiredMarker;
    }
    set hideRequiredMarker(value) {
      this._hideRequiredMarker = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
    }
    _hideRequiredMarker = false;
    color = 'primary';
    get floatLabel() {
      return this._floatLabel || this._defaults?.floatLabel || DEFAULT_FLOAT_LABEL;
    }
    set floatLabel(value) {
      if (value !== this._floatLabel) {
        this._floatLabel = value;
        this._changeDetectorRef.markForCheck();
      }
    }
    _floatLabel;
    get appearance() {
      return this._appearanceSignal();
    }
    set appearance(value) {
      const newAppearance = value || this._defaults?.appearance || DEFAULT_APPEARANCE;
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (newAppearance !== 'fill' && newAppearance !== 'outline') {
          throw new Error(`MatFormField: Invalid appearance "${newAppearance}", valid values are "fill" or "outline".`);
        }
      }
      this._appearanceSignal.set(newAppearance);
    }
    _appearanceSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)(DEFAULT_APPEARANCE, ...(ngDevMode ? [{
      debugName: "_appearanceSignal"
    }] : []));
    get subscriptSizing() {
      return this._subscriptSizing || this._defaults?.subscriptSizing || DEFAULT_SUBSCRIPT_SIZING;
    }
    set subscriptSizing(value) {
      this._subscriptSizing = value || this._defaults?.subscriptSizing || DEFAULT_SUBSCRIPT_SIZING;
    }
    _subscriptSizing = null;
    get hintLabel() {
      return this._hintLabel;
    }
    set hintLabel(value) {
      this._hintLabel = value;
      this._processHints();
    }
    _hintLabel = '';
    _hasIconPrefix = false;
    _hasTextPrefix = false;
    _hasIconSuffix = false;
    _hasTextSuffix = false;
    _labelId = this._idGenerator.getId('mat-mdc-form-field-label-');
    _hintLabelId = this._idGenerator.getId('mat-mdc-hint-');
    _describedByIds;
    get _control() {
      return this._explicitFormFieldControl || this._formFieldControl;
    }
    set _control(value) {
      this._explicitFormFieldControl = value;
    }
    _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    _isFocused = null;
    _explicitFormFieldControl;
    _previousControl = null;
    _previousControlValidatorFn = null;
    _stateChanges;
    _valueChanges;
    _describedByChanges;
    _outlineLabelOffsetResizeObserver = null;
    _animationsDisabled = (0,_animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__._animationsDisabled)();
    constructor() {
      const defaults = this._defaults;
      const dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__.Directionality);
      if (defaults) {
        if (defaults.appearance) {
          this.appearance = defaults.appearance;
        }
        this._hideRequiredMarker = Boolean(defaults?.hideRequiredMarker);
        if (defaults.color) {
          this.color = defaults.color;
        }
      }
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.effect)(() => this._currentDirection = dir.valueSignal());
      this._syncOutlineLabelOffset();
    }
    ngAfterViewInit() {
      this._updateFocusState();
      if (!this._animationsDisabled) {
        this._ngZone.runOutsideAngular(() => {
          setTimeout(() => {
            this._elementRef.nativeElement.classList.add('mat-form-field-animations-enabled');
          }, 300);
        });
      }
      this._changeDetectorRef.detectChanges();
    }
    ngAfterContentInit() {
      this._assertFormFieldControl();
      this._initializeSubscript();
      this._initializePrefixAndSuffix();
    }
    ngAfterContentChecked() {
      this._assertFormFieldControl();
      if (this._control !== this._previousControl) {
        this._initializeControl(this._previousControl);
        if (this._control.ngControl && this._control.ngControl.control) {
          this._previousControlValidatorFn = this._control.ngControl.control.validator;
        }
        this._previousControl = this._control;
      }
      if (this._control.ngControl && this._control.ngControl.control) {
        const validatorFn = this._control.ngControl.control.validator;
        if (validatorFn !== this._previousControlValidatorFn) {
          this._changeDetectorRef.markForCheck();
        }
      }
    }
    ngOnDestroy() {
      this._outlineLabelOffsetResizeObserver?.disconnect();
      this._stateChanges?.unsubscribe();
      this._valueChanges?.unsubscribe();
      this._describedByChanges?.unsubscribe();
      this._destroyed.next();
      this._destroyed.complete();
    }
    getLabelId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => this._hasFloatingLabel() ? this._labelId : null, ...(ngDevMode ? [{
      debugName: "getLabelId"
    }] : []));
    getConnectedOverlayOrigin() {
      return this._textField || this._elementRef;
    }
    _animateAndLockLabel() {
      if (this._hasFloatingLabel()) {
        this.floatLabel = 'always';
      }
    }
    _initializeControl(previousControl) {
      const control = this._control;
      const classPrefix = 'mat-mdc-form-field-type-';
      if (previousControl) {
        this._elementRef.nativeElement.classList.remove(classPrefix + previousControl.controlType);
      }
      if (control.controlType) {
        this._elementRef.nativeElement.classList.add(classPrefix + control.controlType);
      }
      this._stateChanges?.unsubscribe();
      this._stateChanges = control.stateChanges.subscribe(() => {
        this._updateFocusState();
        this._changeDetectorRef.markForCheck();
      });
      this._describedByChanges?.unsubscribe();
      this._describedByChanges = control.stateChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)([undefined, undefined]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => [control.errorState, control.userAriaDescribedBy]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.pairwise)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(([[prevErrorState, prevDescribedBy], [currentErrorState, currentDescribedBy]]) => {
        return prevErrorState !== currentErrorState || prevDescribedBy !== currentDescribedBy;
      })).subscribe(() => this._syncDescribedByIds());
      this._valueChanges?.unsubscribe();
      if (control.ngControl && control.ngControl.valueChanges) {
        this._valueChanges = control.ngControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
      }
    }
    _checkPrefixAndSuffixTypes() {
      this._hasIconPrefix = !!this._prefixChildren.find(p => !p._isText);
      this._hasTextPrefix = !!this._prefixChildren.find(p => p._isText);
      this._hasIconSuffix = !!this._suffixChildren.find(s => !s._isText);
      this._hasTextSuffix = !!this._suffixChildren.find(s => s._isText);
    }
    _initializePrefixAndSuffix() {
      this._checkPrefixAndSuffixTypes();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(() => {
        this._checkPrefixAndSuffixTypes();
        this._changeDetectorRef.markForCheck();
      });
    }
    _initializeSubscript() {
      this._hintChildren.changes.subscribe(() => {
        this._processHints();
        this._changeDetectorRef.markForCheck();
      });
      this._errorChildren.changes.subscribe(() => {
        this._syncDescribedByIds();
        this._changeDetectorRef.markForCheck();
      });
      this._validateHints();
      this._syncDescribedByIds();
    }
    _assertFormFieldControl() {
      if (!this._control && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatFormFieldMissingControlError();
      }
    }
    _updateFocusState() {
      const controlFocused = this._control.focused;
      if (controlFocused && !this._isFocused) {
        this._isFocused = true;
        this._lineRipple?.activate();
      } else if (!controlFocused && (this._isFocused || this._isFocused === null)) {
        this._isFocused = false;
        this._lineRipple?.deactivate();
      }
      this._elementRef.nativeElement.classList.toggle('mat-focused', controlFocused);
      this._textField?.nativeElement.classList.toggle('mdc-text-field--focused', controlFocused);
    }
    _syncOutlineLabelOffset() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.afterRenderEffect)({
        earlyRead: () => {
          if (this._appearanceSignal() !== 'outline') {
            this._outlineLabelOffsetResizeObserver?.disconnect();
            return null;
          }
          if (globalThis.ResizeObserver) {
            this._outlineLabelOffsetResizeObserver ||= new globalThis.ResizeObserver(() => {
              this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset());
            });
            for (const el of this._prefixSuffixContainers()) {
              this._outlineLabelOffsetResizeObserver.observe(el, {
                box: 'border-box'
              });
            }
          }
          return this._getOutlinedLabelOffset();
        },
        write: labelStyles => this._writeOutlinedLabelStyles(labelStyles())
      });
    }
    _shouldAlwaysFloat() {
      return this.floatLabel === 'always';
    }
    _hasOutline() {
      return this.appearance === 'outline';
    }
    _forceDisplayInfixLabel() {
      return !this._platform.isBrowser && this._prefixChildren.length && !this._shouldLabelFloat();
    }
    _hasFloatingLabel = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.computed)(() => !!this._labelChild(), ...(ngDevMode ? [{
      debugName: "_hasFloatingLabel"
    }] : []));
    _shouldLabelFloat() {
      if (!this._hasFloatingLabel()) {
        return false;
      }
      return this._control.shouldLabelFloat || this._shouldAlwaysFloat();
    }
    _shouldForward(prop) {
      const control = this._control ? this._control.ngControl : null;
      return control && control[prop];
    }
    _getSubscriptMessageType() {
      return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
    }
    _handleLabelResized() {
      this._refreshOutlineNotchWidth();
    }
    _refreshOutlineNotchWidth() {
      if (!this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat()) {
        this._notchedOutline?._setNotchWidth(0);
      } else {
        this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth());
      }
    }
    _processHints() {
      this._validateHints();
      this._syncDescribedByIds();
    }
    _validateHints() {
      if (this._hintChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        let startHint;
        let endHint;
        this._hintChildren.forEach(hint => {
          if (hint.align === 'start') {
            if (startHint || this.hintLabel) {
              throw getMatFormFieldDuplicatedHintError('start');
            }
            startHint = hint;
          } else if (hint.align === 'end') {
            if (endHint) {
              throw getMatFormFieldDuplicatedHintError('end');
            }
            endHint = hint;
          }
        });
      }
    }
    _syncDescribedByIds() {
      if (this._control) {
        let ids = [];
        if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy === 'string') {
          ids.push(...this._control.userAriaDescribedBy.split(' '));
        }
        if (this._getSubscriptMessageType() === 'hint') {
          const startHint = this._hintChildren ? this._hintChildren.find(hint => hint.align === 'start') : null;
          const endHint = this._hintChildren ? this._hintChildren.find(hint => hint.align === 'end') : null;
          if (startHint) {
            ids.push(startHint.id);
          } else if (this._hintLabel) {
            ids.push(this._hintLabelId);
          }
          if (endHint) {
            ids.push(endHint.id);
          }
        } else if (this._errorChildren) {
          ids.push(...this._errorChildren.map(error => error.id));
        }
        const existingDescribedBy = this._control.describedByIds;
        let toAssign;
        if (existingDescribedBy) {
          const exclude = this._describedByIds || ids;
          toAssign = ids.concat(existingDescribedBy.filter(id => id && !exclude.includes(id)));
        } else {
          toAssign = ids;
        }
        this._control.setDescribedByIds(toAssign);
        this._describedByIds = ids;
      }
    }
    _getOutlinedLabelOffset() {
      if (!this._hasOutline() || !this._floatingLabel) {
        return null;
      }
      if (!this._iconPrefixContainer && !this._textPrefixContainer) {
        return ['', null];
      }
      if (!this._isAttachedToDom()) {
        return null;
      }
      const iconPrefixContainer = this._iconPrefixContainer?.nativeElement;
      const textPrefixContainer = this._textPrefixContainer?.nativeElement;
      const iconSuffixContainer = this._iconSuffixContainer?.nativeElement;
      const textSuffixContainer = this._textSuffixContainer?.nativeElement;
      const iconPrefixContainerWidth = iconPrefixContainer?.getBoundingClientRect().width ?? 0;
      const textPrefixContainerWidth = textPrefixContainer?.getBoundingClientRect().width ?? 0;
      const iconSuffixContainerWidth = iconSuffixContainer?.getBoundingClientRect().width ?? 0;
      const textSuffixContainerWidth = textSuffixContainer?.getBoundingClientRect().width ?? 0;
      const negate = this._currentDirection === 'rtl' ? '-1' : '1';
      const prefixWidth = `${iconPrefixContainerWidth + textPrefixContainerWidth}px`;
      const labelOffset = `var(--mat-mdc-form-field-label-offset-x, 0px)`;
      const labelHorizontalOffset = `calc(${negate} * (${prefixWidth} + ${labelOffset}))`;
      const floatingLabelTransform = 'var(--mat-mdc-form-field-label-transform, ' + `${FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM} translateX(${labelHorizontalOffset}))`;
      const notchedOutlineWidth = iconPrefixContainerWidth + textPrefixContainerWidth + iconSuffixContainerWidth + textSuffixContainerWidth;
      return [floatingLabelTransform, notchedOutlineWidth];
    }
    _writeOutlinedLabelStyles(styles) {
      if (styles !== null) {
        const [floatingLabelTransform, notchedOutlineWidth] = styles;
        if (this._floatingLabel) {
          this._floatingLabel.element.style.transform = floatingLabelTransform;
        }
        if (notchedOutlineWidth !== null) {
          this._notchedOutline?._setMaxWidth(notchedOutlineWidth);
        }
      }
    }
    _isAttachedToDom() {
      const element = this._elementRef.nativeElement;
      if (element.getRootNode) {
        const rootNode = element.getRootNode();
        return rootNode && rootNode !== element;
      }
      return document.documentElement.contains(element);
    }
    static ɵfac = function MatFormField_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatFormField)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: MatFormField,
      selectors: [["mat-form-field"]],
      contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuerySignal"](dirIndex, ctx._labelChild, MatLabel, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, 5)(dirIndex, MAT_PREFIX, 5)(dirIndex, MAT_SUFFIX, 5)(dirIndex, MAT_ERROR, 5)(dirIndex, MatHint, 5);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryAdvance"]();
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._formFieldControl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
        }
      },
      viewQuery: function MatFormField_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuerySignal"](ctx._iconPrefixContainerSignal, _c3, 5)(ctx._textPrefixContainerSignal, _c4, 5)(ctx._iconSuffixContainerSignal, _c5, 5)(ctx._textSuffixContainerSignal, _c6, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c7, 5)(_c3, 5)(_c4, 5)(_c5, 5)(_c6, 5)(MatFormFieldFloatingLabel, 5)(MatFormFieldNotchedOutline, 5)(MatFormFieldLineRipple, 5);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryAdvance"](4);
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._textField = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._iconPrefixContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._textPrefixContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._iconSuffixContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._textSuffixContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._floatingLabel = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._notchedOutline = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._lineRipple = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-form-field"],
      hostVars: 38,
      hostBindings: function MatFormField_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mat-mdc-form-field-label-always-float", ctx._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix", ctx._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix", ctx._hasIconSuffix)("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-hide-placeholder", ctx._hasFloatingLabel() && !ctx._shouldLabelFloat())("mat-primary", ctx.color !== "accent" && ctx.color !== "warn")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"));
        }
      },
      inputs: {
        hideRequiredMarker: "hideRequiredMarker",
        color: "color",
        floatLabel: "floatLabel",
        appearance: "appearance",
        subscriptSizing: "subscriptSizing",
        hintLabel: "hintLabel"
      },
      exportAs: ["matFormField"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
        provide: MAT_FORM_FIELD,
        useExisting: MatFormField
      }, {
        provide: FLOATING_LABEL_PARENT,
        useExisting: MatFormField
      }])],
      ngContentSelectors: _c9,
      decls: 18,
      vars: 21,
      consts: [["labelTemplate", ""], ["textField", ""], ["iconPrefixContainer", ""], ["textPrefixContainer", ""], ["textSuffixContainer", ""], ["iconSuffixContainer", ""], [1, "mat-mdc-text-field-wrapper", "mdc-text-field", 3, "click"], [1, "mat-mdc-form-field-focus-overlay"], [1, "mat-mdc-form-field-flex"], ["matFormFieldNotchedOutline", "", 3, "matFormFieldNotchedOutlineOpen"], [1, "mat-mdc-form-field-icon-prefix"], [1, "mat-mdc-form-field-text-prefix"], [1, "mat-mdc-form-field-infix"], [3, "ngTemplateOutlet"], [1, "mat-mdc-form-field-text-suffix"], [1, "mat-mdc-form-field-icon-suffix"], ["matFormFieldLineRipple", ""], ["aria-atomic", "true", "aria-live", "polite", 1, "mat-mdc-form-field-subscript-wrapper", "mat-mdc-form-field-bottom-align"], [1, "mat-mdc-form-field-error-wrapper"], [1, "mat-mdc-form-field-hint-wrapper"], ["matFormFieldFloatingLabel", "", 3, "floating", "monitorResize", "id"], ["aria-hidden", "true", 1, "mat-mdc-form-field-required-marker", "mdc-floating-label--required"], [3, "id"], [1, "mat-mdc-form-field-hint-spacer"]],
      template: function MatFormField_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"](_c8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MatFormField_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 6, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MatFormField_Template_div_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx._control.onContainerClick($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](4, MatFormField_Conditional_4_Template, 1, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](6, MatFormField_Conditional_6_Template, 2, 2, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](7, MatFormField_Conditional_7_Template, 3, 0, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](8, MatFormField_Conditional_8_Template, 3, 0, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](10, MatFormField_Conditional_10_Template, 1, 1, null, 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](12, MatFormField_Conditional_12_Template, 3, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](13, MatFormField_Conditional_13_Template, 3, 0, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](14, MatFormField_Conditional_14_Template, 1, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](16, MatFormField_Case_16_Template, 2, 0, "div", 18)(17, MatFormField_Case_17_Template, 5, 1, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_17_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mdc-text-field--filled", !ctx._hasOutline())("mdc-text-field--outlined", ctx._hasOutline())("mdc-text-field--no-label", !ctx._hasFloatingLabel())("mdc-text-field--disabled", ctx._control.disabled)("mdc-text-field--invalid", ctx._control.errorState);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx._hasOutline() && !ctx._control.disabled ? 4 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx._hasOutline() ? 6 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx._hasIconPrefix ? 7 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx._hasTextPrefix ? 8 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx._hasOutline() || ctx._forceDisplayInfixLabel() ? 10 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx._hasTextSuffix ? 12 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx._hasIconSuffix ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx._hasOutline() ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mat-mdc-form-field-subscript-dynamic-size", ctx.subscriptSizing === "dynamic");
          const subscriptMessageType_r4 = ctx._getSubscriptMessageType();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"]((tmp_17_0 = subscriptMessageType_r4) === "error" ? 16 : tmp_17_0 === "hint" ? 17 : -1);
        }
      },
      dependencies: [MatFormFieldFloatingLabel, MatFormFieldNotchedOutline, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, MatFormFieldLineRipple, MatHint],
      styles: [".mdc-text-field{display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field__input{width:100%;min-width:0;border:none;border-radius:0;background:none;padding:0;-moz-appearance:none;-webkit-appearance:none;height:28px}.mdc-text-field__input::-webkit-calendar-picker-indicator,.mdc-text-field__input::-webkit-search-cancel-button{display:none}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input::placeholder{opacity:0}.mdc-text-field__input::-moz-placeholder{opacity:0}.mdc-text-field__input::-webkit-input-placeholder{opacity:0}.mdc-text-field__input:-ms-input-placeholder{opacity:0}.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder{opacity:0}.mdc-text-field--outlined .mdc-text-field__input,.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-filled-caret-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error))}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--filled{height:56px;border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-left-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));border-top-right-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent))}.mdc-text-field--outlined{height:56px;overflow:visible;padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px)}[dir=rtl] .mdc-text-field--outlined{padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}.mdc-floating-label{position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:auto}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label{left:auto;right:4px}.mdc-text-field--filled .mdc-floating-label{left:16px;right:auto}[dir=rtl] .mdc-text-field--filled .mdc-floating-label{left:auto;right:16px}.mdc-text-field--disabled .mdc-floating-label{cursor:default}@media(forced-colors: active){.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-floating-label--float-above{cursor:auto;transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1);font-size:.75rem}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0;content:\"*\"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mat-mdc-notch-piece{box-sizing:border-box;height:100%;pointer-events:none;border:none;border-top:1px solid;border-bottom:1px solid}.mdc-text-field--focused .mat-mdc-notch-piece{border-width:2px}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));border-width:var(--mat-form-field-outlined-outline-width, 1px)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary))}.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece{border-width:var(--mat-form-field-outlined-focus-outline-width, 2px)}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid;border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__trailing{flex-grow:1;border-left:none;border-right:1px solid;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:min(var(--mat-form-field-notch-max-width, 100%),calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{max-width:min(100%,calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:\"\"}.mdc-line-ripple::before{z-index:1;border-bottom-width:var(--mat-form-field-filled-active-indicator-height, 1px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container))}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mat-form-field-filled-focus-active-indicator-height, 2px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error))}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-text-field--disabled{pointer-events:none}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height, 56px);padding-top:var(--mat-form-field-filled-with-label-container-padding-top, 24px);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom, 8px)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding, 16px);padding-bottom:var(--mat-form-field-container-vertical-padding, 16px)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height, 56px)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}@keyframes _mat-form-field-subscript-animation{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px;opacity:1;transform:translateY(0);animation:_mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:\"\";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color, var(--mat-sys-error))}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));letter-spacing:var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));font-weight:var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight))}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface))}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity, 0)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10))}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant))}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}@media(forced-colors: active){.mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}}@media(forced-colors: active){.mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));font-weight:var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error))}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container))}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error))}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field-infix:has(textarea[cols]){width:auto}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper{animation-duration:300ms}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatFormField;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 87432
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_animation-chunk.mjs ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MATERIAL_ANIMATIONS: () => (/* binding */ MATERIAL_ANIMATIONS),
/* harmony export */   _animationsDisabled: () => (/* binding */ _animationsDisabled),
/* harmony export */   _getAnimationsState: () => (/* binding */ _getAnimationsState)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ 42394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);


const MATERIAL_ANIMATIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MATERIAL_ANIMATIONS');
let reducedMotion = null;
function _getAnimationsState() {
  if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MATERIAL_ANIMATIONS, {
    optional: true
  })?.animationsDisabled || (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, {
    optional: true
  }) === 'NoopAnimations') {
    return 'di-disabled';
  }
  reducedMotion ??= (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.MediaMatcher).matchMedia('(prefers-reduced-motion)').matches;
  return reducedMotion ? 'reduced-motion' : 'enabled';
}
function _animationsDisabled() {
  return _getAnimationsState() !== 'enabled';
}


/***/ },

/***/ 95541
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/input.mjs ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_INPUT_CONFIG: () => (/* binding */ MAT_INPUT_CONFIG),
/* harmony export */   MAT_INPUT_VALUE_ACCESSOR: () => (/* reexport safe */ _input_value_accessor_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.MAT_INPUT_VALUE_ACCESSOR),
/* harmony export */   MatError: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.MatError),
/* harmony export */   MatFormField: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.MatFormField),
/* harmony export */   MatHint: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.MatHint),
/* harmony export */   MatInput: () => (/* binding */ MatInput),
/* harmony export */   MatInputModule: () => (/* binding */ MatInputModule),
/* harmony export */   MatLabel: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.MatLabel),
/* harmony export */   MatPrefix: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.MatPrefix),
/* harmony export */   MatSuffix: () => (/* reexport safe */ _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.MatSuffix),
/* harmony export */   getMatInputUnsupportedTypeError: () => (/* binding */ getMatInputUnsupportedTypeError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ 32298);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 86456);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/text-field */ 36922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 45562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 14332);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _input_value_accessor_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_input-value-accessor-chunk.mjs */ 95722);
/* harmony import */ var _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_form-field-chunk.mjs */ 80423);
/* harmony import */ var _error_options_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_error-options-chunk.mjs */ 54297);
/* harmony import */ var _error_state_chunk_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_error-state-chunk.mjs */ 54612);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ 13266);
/* harmony import */ var _form_field_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form-field.mjs */ 24950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 11674);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _angular_cdk_observers_private__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/observers/private */ 36192);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/layout */ 42394);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/observers */ 60634);





















function getMatInputUnsupportedTypeError(type) {
  return Error(`Input type "${type}" isn't supported by matInput.`);
}
const MAT_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
const MAT_INPUT_CONFIG = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('MAT_INPUT_CONFIG');
let MatInput = /*#__PURE__*/(() => {
  class MatInput {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform);
    ngControl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControl, {
      optional: true,
      self: true
    });
    _autofillMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__.AutofillMonitor);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone);
    _formField = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.MAT_FORM_FIELD, {
      optional: true
    });
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2);
    _uid = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__._IdGenerator).getId('mat-input-');
    _previousNativeValue;
    _inputValueAccessor;
    _signalBasedValueAccessor;
    _previousPlaceholder = null;
    _errorStateTracker;
    _config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(MAT_INPUT_CONFIG, {
      optional: true
    });
    _cleanupIosKeyup;
    _cleanupWebkitWheel;
    _isServer = false;
    _isNativeSelect = false;
    _isTextarea = false;
    _isInFormField = false;
    focused = false;
    stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    controlType = 'mat-input';
    autofilled = false;
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
      if (this.focused) {
        this.focused = false;
        this.stateChanges.next();
      }
    }
    _disabled = false;
    get id() {
      return this._id;
    }
    set id(value) {
      this._id = value || this._uid;
    }
    _id;
    placeholder;
    name;
    get required() {
      return this._required ?? this.ngControl?.control?.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required) ?? false;
    }
    set required(value) {
      this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
    }
    _required;
    get type() {
      return this._type;
    }
    set type(value) {
      this._type = value || 'text';
      this._validateType();
      if (!this._isTextarea && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.getSupportedInputTypes)().has(this._type)) {
        this._elementRef.nativeElement.type = this._type;
      }
    }
    _type = 'text';
    get errorStateMatcher() {
      return this._errorStateTracker.matcher;
    }
    set errorStateMatcher(value) {
      this._errorStateTracker.matcher = value;
    }
    userAriaDescribedBy;
    get value() {
      return this._signalBasedValueAccessor ? this._signalBasedValueAccessor.value() : this._inputValueAccessor.value;
    }
    set value(value) {
      if (value !== this.value) {
        if (this._signalBasedValueAccessor) {
          this._signalBasedValueAccessor.value.set(value);
        } else {
          this._inputValueAccessor.value = value;
        }
        this.stateChanges.next();
      }
    }
    get readonly() {
      return this._readonly;
    }
    set readonly(value) {
      this._readonly = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
    }
    _readonly = false;
    disabledInteractive;
    get errorState() {
      return this._errorStateTracker.errorState;
    }
    set errorState(value) {
      this._errorStateTracker.errorState = value;
    }
    _neverEmptyInputTypes = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'].filter(t => (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.getSupportedInputTypes)().has(t));
    constructor() {
      const parentForm = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, {
        optional: true
      });
      const parentFormGroup = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, {
        optional: true
      });
      const defaultErrorStateMatcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_error_options_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__.ErrorStateMatcher);
      const accessor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_input_value_accessor_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__.MAT_INPUT_VALUE_ACCESSOR, {
        optional: true,
        self: true
      });
      const element = this._elementRef.nativeElement;
      const nodeName = element.nodeName.toLowerCase();
      if (accessor) {
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.isSignal)(accessor.value)) {
          this._signalBasedValueAccessor = accessor;
        } else {
          this._inputValueAccessor = accessor;
        }
      } else {
        this._inputValueAccessor = element;
      }
      this._previousNativeValue = this.value;
      this.id = this.id;
      if (this._platform.IOS) {
        this._ngZone.runOutsideAngular(() => {
          this._cleanupIosKeyup = this._renderer.listen(element, 'keyup', this._iOSKeyupListener);
        });
      }
      this._errorStateTracker = new _error_state_chunk_mjs__WEBPACK_IMPORTED_MODULE_10__._ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
      this._isServer = !this._platform.isBrowser;
      this._isNativeSelect = nodeName === 'select';
      this._isTextarea = nodeName === 'textarea';
      this._isInFormField = !!this._formField;
      this.disabledInteractive = this._config?.disabledInteractive || false;
      if (this._isNativeSelect) {
        this.controlType = element.multiple ? 'mat-native-select-multiple' : 'mat-native-select';
      }
      if (this._signalBasedValueAccessor) {
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.effect)(() => {
          this._signalBasedValueAccessor.value();
          this.stateChanges.next();
        });
      }
    }
    ngAfterViewInit() {
      if (this._platform.isBrowser) {
        this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(event => {
          this.autofilled = event.isAutofilled;
          this.stateChanges.next();
        });
      }
    }
    ngOnChanges() {
      this.stateChanges.next();
    }
    ngOnDestroy() {
      this.stateChanges.complete();
      if (this._platform.isBrowser) {
        this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
      }
      this._cleanupIosKeyup?.();
      this._cleanupWebkitWheel?.();
    }
    ngDoCheck() {
      if (this.ngControl) {
        this.updateErrorState();
        if (this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled) {
          this.disabled = this.ngControl.disabled;
          this.stateChanges.next();
        }
      }
      this._dirtyCheckNativeValue();
      this._dirtyCheckPlaceholder();
    }
    focus(options) {
      this._elementRef.nativeElement.focus(options);
    }
    updateErrorState() {
      this._errorStateTracker.updateErrorState();
    }
    _focusChanged(isFocused) {
      if (isFocused === this.focused) {
        return;
      }
      if (!this._isNativeSelect && isFocused && this.disabled && this.disabledInteractive) {
        const element = this._elementRef.nativeElement;
        if (element.type === 'number') {
          element.type = 'text';
          element.setSelectionRange(0, 0);
          element.type = 'number';
        } else {
          element.setSelectionRange(0, 0);
        }
      }
      this.focused = isFocused;
      this.stateChanges.next();
    }
    _onInput() {}
    _dirtyCheckNativeValue() {
      const newValue = this._elementRef.nativeElement.value;
      if (this._previousNativeValue !== newValue) {
        this._previousNativeValue = newValue;
        this.stateChanges.next();
      }
    }
    _dirtyCheckPlaceholder() {
      const placeholder = this._getPlaceholder();
      if (placeholder !== this._previousPlaceholder) {
        const element = this._elementRef.nativeElement;
        this._previousPlaceholder = placeholder;
        placeholder ? element.setAttribute('placeholder', placeholder) : element.removeAttribute('placeholder');
      }
    }
    _getPlaceholder() {
      return this.placeholder || null;
    }
    _validateType() {
      if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatInputUnsupportedTypeError(this._type);
      }
    }
    _isNeverEmpty() {
      return this._neverEmptyInputTypes.indexOf(this._type) > -1;
    }
    _isBadInput() {
      let validity = this._elementRef.nativeElement.validity;
      return validity && validity.badInput;
    }
    get empty() {
      return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
    }
    get shouldLabelFloat() {
      if (this._isNativeSelect) {
        const selectElement = this._elementRef.nativeElement;
        const firstOption = selectElement.options[0];
        return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
      } else {
        return this.focused && !this.disabled || !this.empty;
      }
    }
    get describedByIds() {
      const element = this._elementRef.nativeElement;
      const existingDescribedBy = element.getAttribute('aria-describedby');
      return existingDescribedBy?.split(' ') || [];
    }
    setDescribedByIds(ids) {
      const element = this._elementRef.nativeElement;
      if (ids.length) {
        element.setAttribute('aria-describedby', ids.join(' '));
      } else {
        element.removeAttribute('aria-describedby');
      }
    }
    onContainerClick() {
      if (!this.focused) {
        this.focus();
      }
    }
    _isInlineSelect() {
      const element = this._elementRef.nativeElement;
      return this._isNativeSelect && (element.multiple || element.size > 1);
    }
    _iOSKeyupListener = event => {
      const el = event.target;
      if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
        el.setSelectionRange(1, 1);
        el.setSelectionRange(0, 0);
      }
    };
    _getReadonlyAttribute() {
      if (this._isNativeSelect) {
        return null;
      }
      if (this.readonly || this.disabled && this.disabledInteractive) {
        return 'true';
      }
      return null;
    }
    static ɵfac = function MatInput_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatInput)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatInput,
      selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
      hostAttrs: [1, "mat-mdc-input-element"],
      hostVars: 21,
      hostBindings: function MatInput_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function MatInput_focus_HostBindingHandler() {
            return ctx._focusChanged(true);
          })("blur", function MatInput_blur_HostBindingHandler() {
            return ctx._focusChanged(false);
          })("input", function MatInput_input_HostBindingHandler() {
            return ctx._onInput();
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomProperty"]("id", ctx.id)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("name", ctx.name || null)("readonly", ctx._getReadonlyAttribute())("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null)("aria-invalid", ctx.empty && ctx.required ? null : ctx.errorState)("aria-required", ctx.required)("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-input-server", ctx._isServer)("mat-mdc-form-field-textarea-control", ctx._isInFormField && ctx._isTextarea)("mat-mdc-form-field-input-control", ctx._isInFormField)("mat-mdc-input-disabled-interactive", ctx.disabledInteractive)("mdc-text-field__input", ctx._isInFormField)("mat-mdc-native-select-inline", ctx._isInlineSelect());
        }
      },
      inputs: {
        disabled: "disabled",
        id: "id",
        placeholder: "placeholder",
        name: "name",
        required: "required",
        type: "type",
        errorStateMatcher: "errorStateMatcher",
        userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
        value: "value",
        readonly: "readonly",
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute]
      },
      exportAs: ["matInput"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: _form_field_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldControl,
        useExisting: MatInput
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
    });
  }
  return MatInput;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatInputModule = /*#__PURE__*/(() => {
  class MatInputModule {
    static ɵfac = function MatInputModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatInputModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MatInputModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_form_field_mjs__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _form_field_mjs__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__.TextFieldModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.BidiModule]
    });
  }
  return MatInputModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 95722
/*!*********************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_input-value-accessor-chunk.mjs ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_INPUT_VALUE_ACCESSOR: () => (/* binding */ MAT_INPUT_VALUE_ACCESSOR)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);

const MAT_INPUT_VALUE_ACCESSOR = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_INPUT_VALUE_ACCESSOR');


/***/ }

}])
//# sourceMappingURL=5541.js.map