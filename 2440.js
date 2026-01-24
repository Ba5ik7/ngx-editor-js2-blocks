(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[2440],{

/***/ 10059
/*!***********************************************************************************!*\
  !*** ./dist/ngx-editor-js2-mermaidjs/fesm2022/tmdjr-ngx-editor-js2-mermaidjs.mjs ***!
  \***********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxEditorJs2MermaidjsComponent: () => (/* binding */ NgxEditorJs2MermaidjsComponent),
/* harmony export */   SafeHtmlPipe: () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 8778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 11674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 14332);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 31944);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 81836);
/* harmony import */ var _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tmdjr/ngx-editor-js2 */ 40623);
/* harmony import */ var mermaid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mermaid */ 95575);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 66080);
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ 42642);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 2649);















function NgxEditorJs2MermaidjsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 5, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NgxEditorJs2MermaidjsComponent_Conditional_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.openEditOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.savedAction())("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, ctx_r1.mermaidDiagramSVG), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function NgxEditorJs2MermaidjsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mermaidjs-config", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("valueChange", function NgxEditorJs2MermaidjsComponent_Conditional_3_Template_mermaidjs_config_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.value, $event) || (ctx_r1.value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("updateConfig", function NgxEditorJs2MermaidjsComponent_Conditional_3_Template_mermaidjs_config_updateConfig_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.updateMermaidDiagram());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("value", ctx_r1.value);
  }
}
let MermaidjsConfigComponent = /*#__PURE__*/(() => {
  class MermaidjsConfigComponent {
    updateConfig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.output)();
    value = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.model)(...(ngDevMode ? [undefined, {
      debugName: "value"
    }] : []));
    codeMirrorOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)({
      lineNumbers: true,
      theme: 'material-palenight',
      mode: 'text/typescript',
      extraKeys: {
        'Ctrl-Space': 'autocomplete'
      },
      styleActiveLine: true,
      // Highlight active line
      matchBrackets: true,
      indentUnit: 2,
      tabSize: 2,
      cursorScrollMargin: 5
    }, ...(ngDevMode ? [{
      debugName: "codeMirrorOptions"
    }] : []));
    closeConfig() {
      this.updateConfig.emit();
    }
    static ɵfac = function MermaidjsConfigComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MermaidjsConfigComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MermaidjsConfigComponent,
      selectors: [["mermaidjs-config"]],
      inputs: {
        value: [1, "value"]
      },
      outputs: {
        updateConfig: "updateConfig",
        value: "valueChange"
      },
      decls: 7,
      vars: 2,
      consts: [[1, "mermaidjs-block-modal"], ["mat-dialog-title", ""], [3, "ngModelChange", "ngModel", "options"], [1, "action-group"], ["type", "button", "mat-flat-button", "", 3, "click"]],
      template: function MermaidjsConfigComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "MermaidJs Configurations");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ngx-codemirror", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function MermaidjsConfigComponent_Template_ngx_codemirror_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.value, $event) || (ctx.value = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MermaidjsConfigComponent_Template_button_click_5_listener() {
            return ctx.closeConfig();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Update ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.codeMirrorOptions());
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_9__.CodemirrorModule, _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_9__.CodemirrorComponent],
      styles: ["[_nghost-%COMP%]{display:block;position:relative;padding:20px;border:1px solid #ccc;border-radius:var( --mat-card-outlined-container-shape, var(--mat-sys-corner-medium) )}[_nghost-%COMP%]   .action-group[_ngcontent-%COMP%]{margin-top:20px;display:flex;justify-content:flex-end}[_nghost-%COMP%]     .CodeMirror{font-family:Cascadia Code,Fira Code,Menlo,Monaco,Courier New,monospace;font-size:16px;font-weight:400;line-height:32px;letter-spacing:.5px;height:100%}"]
    });
  }
  return MermaidjsConfigComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const mermaid = mermaid__WEBPACK_IMPORTED_MODULE_7__["default"] ? mermaid__WEBPACK_IMPORTED_MODULE_7__["default"] : mermaid__WEBPACK_IMPORTED_MODULE_7__;
let SafeHtmlPipe = /*#__PURE__*/(() => {
  class SafeHtmlPipe {
    sanitized;
    constructor(sanitized) {
      this.sanitized = sanitized;
    }
    transform(value) {
      return this.sanitized.bypassSecurityTrustHtml(value);
    }
    static ɵfac = function SafeHtmlPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer, 16));
    };
    static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
      name: "safeHtml",
      type: SafeHtmlPipe,
      pure: true
    });
  }
  return SafeHtmlPipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
mermaid.parseError = function (err, hash) {
  console.warn(`Error parsing mermaid diagram: ${err} ${hash}`);
};
let NgxEditorJs2MermaidjsComponent = /*#__PURE__*/(() => {
  class NgxEditorJs2MermaidjsComponent {
    changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
    ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone);
    mermaid = mermaid;
    sortIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.input)(0, ...(ngDevMode ? [{
      debugName: "sortIndex"
    }] : []));
    componentInstanceName = 'NgxEditorJs2MermaidjsComponent';
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
    }], ...(ngDevMode ? [{
      debugName: "blockOptionActions"
    }] : []));
    savedAction = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)('flex-start', ...(ngDevMode ? [{
      debugName: "savedAction"
    }] : []));
    actionCallbackBind = this.actionCallback.bind(this);
    mermaidDiagramSVG = '';
    value = `flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]`;
    openOverlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false, ...(ngDevMode ? [{
      debugName: "openOverlay"
    }] : []));
    ngOnInit() {
      this.ngZone.runOutsideAngular(() => {
        this.mermaid.initialize({
          startOnLoad: false
        });
      });
      const possibleSavedValue = this.formGroup().get(this.formControlName());
      this.value = possibleSavedValue?.value ? possibleSavedValue.value : this.value;
      this.renderMermaidDiagram(this.value);
      this.changeDetectorRef.markForCheck();
    }
    renderMermaidDiagram(mermaidDiagram) {
      this.ngZone.runOutsideAngular(() => {
        this.mermaid.render(this.genUniqueId(), mermaidDiagram).then(data => this.ngZone.run(() => this.mermaidDiagramSVG = data.svg), error => console.warn(`Error: ${error}`));
      });
    }
    actionCallback(action, updateFormValue = true) {
      this.savedAction.update(() => action);
      updateFormValue && this.formGroup().updateValueAndValidity();
    }
    openEditOverlay() {
      this.openOverlay.set(true);
    }
    updateMermaidDiagram() {
      this.renderMermaidDiagram(this.value);
      this.formGroup().get(this.formControlName())?.setValue(this.value);
      this.openOverlay.set(false);
    }
    genUniqueId() {
      return `mermaid-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }
    static ɵfac = function NgxEditorJs2MermaidjsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgxEditorJs2MermaidjsComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NgxEditorJs2MermaidjsComponent,
      selectors: [["ngx-editor-js2-mermaidjs"]],
      hostAttrs: [1, "cdk-drag-animating", "no-toolbar-inline"],
      inputs: {
        sortIndex: [1, "sortIndex"],
        autofocus: [1, "autofocus"],
        formGroup: [1, "formGroup"],
        formControlName: [1, "formControlName"],
        blockOptionActions: [1, "blockOptionActions"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__.CdkDrag])],
      decls: 4,
      vars: 7,
      consts: [["mermaidContainer", ""], [3, "formGroup"], ["controlAccessor", "", "toolbarFab", "", 1, "mermaidjs-container-overlay", 3, "actionCallback", "autofocus", "blockOptionActions", "formControlName", "componentContextPositionIndex"], [1, "mermaidjs-container"], [3, "value"], [1, "mermaid", 3, "ngClass", "innerHTML"], ["mat-fab", "", 1, "mermaidjs-block-button", 3, "click"], [3, "valueChange", "updateConfig", "value"]],
      template: function NgxEditorJs2MermaidjsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](2, NgxEditorJs2MermaidjsComponent_Conditional_2_Template, 7, 4, "div", 3)(3, NgxEditorJs2MermaidjsComponent_Conditional_3_Template, 1, 1, "mermaidjs-config", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formGroup());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("actionCallback", ctx.actionCallbackBind)("autofocus", ctx.autofocus())("blockOptionActions", ctx.blockOptionActions())("formControlName", ctx.formControlName())("componentContextPositionIndex", ctx.sortIndex());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](!ctx.openOverlay() ? 2 : 3);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_6__.ControlAccessorDirective, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_6__.AutofocusDirective, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_6__.ToolbarFabDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, MermaidjsConfigComponent, SafeHtmlPipe],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;margin:1.5rem 0}[_nghost-%COMP%]   .flex-start[_ngcontent-%COMP%]{justify-content:flex-start}[_nghost-%COMP%]   .flex-end[_ngcontent-%COMP%]{justify-content:flex-end}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]{justify-content:center}[_nghost-%COMP%]   .stretch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .mermaid[_ngcontent-%COMP%]{width:100%;display:flex}[_nghost-%COMP%]   .mermaidjs-container-overlay[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;position:absolute}[_nghost-%COMP%]   .mermaid[_ngcontent-%COMP%]:hover ~ .mermaid-block-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .mermaid-block-button[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .mermaidjs-container-overlay[_ngcontent-%COMP%]:hover ~ .mermaidjs-container[_ngcontent-%COMP%]   .mermaidjs-block-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .mermaidjs-block-button[_ngcontent-%COMP%]:hover{display:block}[_nghost-%COMP%]   .mermaidjs-container[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .mermaidjs-container[_ngcontent-%COMP%]   .mermaidjs-block[_ngcontent-%COMP%]{min-width:0}[_nghost-%COMP%]   .mermaidjs-block-button[_ngcontent-%COMP%]{position:absolute;top:6px;left:6px;display:none}"]
    });
  }
  return NgxEditorJs2MermaidjsComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of ngx-editor-js2-mermaidjs
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ },

/***/ 42642
/*!****************************************************************************!*\
  !*** ./node_modules/@ctrl/ngx-codemirror/fesm2022/ctrl-ngx-codemirror.mjs ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodemirrorComponent: () => (/* binding */ CodemirrorComponent),
/* harmony export */   CodemirrorModule: () => (/* binding */ CodemirrorModule)
/* harmony export */ });
/* harmony import */ var _Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 14332);




const _c0 = ["ref"];
function normalizeLineEndings(str) {
  if (!str) {
    return str;
  }
  return str.replace(/\r\n|\r/g, '\n');
}
let CodemirrorComponent = /*#__PURE__*/(() => {
  class CodemirrorComponent {
    _differs;
    _ngZone;
    /* class applied to the created textarea */
    className = '';
    /* name applied to the created textarea */
    name = 'codemirror';
    /* autofocus setting applied to the created textarea */
    autoFocus = false;
    /**
     * set options for codemirror
     * @link http://codemirror.net/doc/manual.html#config
     */
    set options(value) {
      this._options = value;
      if (!this._differ && value) {
        this._differ = this._differs.find(value).create();
      }
    }
    /* preserve previous scroll position after updating value */
    preserveScrollPosition = false;
    /* called when the text cursor is moved */
    cursorActivity = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /* called when the editor is focused or loses focus */
    focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /* called when the editor is scrolled */
    // eslint-disable-next-line @angular-eslint/no-output-native
    scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /* called when file(s) are dropped */
    // eslint-disable-next-line @angular-eslint/no-output-native
    drop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /* called when codeMirror instance is initiated on the component */
    codeMirrorLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    ref;
    value = '';
    disabled = false;
    isFocused = false;
    codeMirror;
    /**
     * either global variable or required library
     */
    _codeMirror;
    _differ;
    _options;
    constructor(_differs, _ngZone) {
      this._differs = _differs;
      this._ngZone = _ngZone;
    }
    get codeMirrorGlobal() {
      if (this._codeMirror) {
        return this._codeMirror;
      }
      // in order to allow for universal rendering, we import Codemirror runtime with `require` to prevent node errors
      this._codeMirror = typeof CodeMirror !== 'undefined' ? CodeMirror : __webpack_require__.e(/*! import() */ 1273).then(__webpack_require__.t.bind(__webpack_require__, /*! codemirror */ 81273, 19));
      return this._codeMirror;
    }
    ngAfterViewInit() {
      var _this = this;
      this._ngZone.runOutsideAngular(/*#__PURE__*/(0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const codeMirrorObj = yield _this.codeMirrorGlobal;
        const codeMirror = codeMirrorObj?.default ? codeMirrorObj.default : codeMirrorObj;
        _this.codeMirror = codeMirror.fromTextArea(_this.ref.nativeElement, _this._options);
        _this.codeMirror.on('cursorActivity', cm => _this._ngZone.run(() => _this.cursorActive(cm)));
        _this.codeMirror.on('scroll', _this.scrollChanged.bind(_this));
        _this.codeMirror.on('blur', () => _this._ngZone.run(() => _this.focusChanged(false)));
        _this.codeMirror.on('focus', () => _this._ngZone.run(() => _this.focusChanged(true)));
        _this.codeMirror.on('change', (cm, change) => _this._ngZone.run(() => _this.codemirrorValueChanged(cm, change)));
        _this.codeMirror.on('drop', (cm, e) => {
          _this._ngZone.run(() => _this.dropFiles(cm, e));
        });
        _this.codeMirror.setValue(_this.value);
        _this.codeMirrorLoaded.emit(_this);
      }));
    }
    ngDoCheck() {
      if (!this._differ) {
        return;
      }
      // check options have not changed
      const changes = this._differ.diff(this._options);
      if (changes) {
        changes.forEachChangedItem(option => this.setOptionIfChanged(option.key, option.currentValue));
        changes.forEachAddedItem(option => this.setOptionIfChanged(option.key, option.currentValue));
        changes.forEachRemovedItem(option => this.setOptionIfChanged(option.key, option.currentValue));
      }
    }
    ngOnDestroy() {
      // is there a lighter-weight way to remove the cm instance?
      if (this.codeMirror) {
        this.codeMirror.toTextArea();
      }
    }
    codemirrorValueChanged(cm, change) {
      const cmVal = cm.getValue();
      if (this.value !== cmVal) {
        this.value = cmVal;
        this.onChange(this.value);
      }
    }
    setOptionIfChanged(optionName, newValue) {
      if (!this.codeMirror) {
        return;
      }
      // cast to any to handle strictly typed option names
      // could possibly import settings strings available in the future
      this.codeMirror.setOption(optionName, newValue);
    }
    focusChanged(focused) {
      this.onTouched();
      this.isFocused = focused;
      this.focusChange.emit(focused);
    }
    scrollChanged(cm) {
      this.scroll.emit(cm.getScrollInfo());
    }
    cursorActive(cm) {
      this.cursorActivity.emit(cm);
    }
    dropFiles(cm, e) {
      this.drop.emit([cm, e]);
    }
    /** Implemented as part of ControlValueAccessor. */
    writeValue(value) {
      if (value === null || value === undefined) {
        return;
      }
      if (!this.codeMirror) {
        this.value = value;
        return;
      }
      const cur = this.codeMirror.getValue();
      if (value !== cur && normalizeLineEndings(cur) !== normalizeLineEndings(value)) {
        this.value = value;
        if (this.preserveScrollPosition) {
          const prevScrollPosition = this.codeMirror.getScrollInfo();
          this.codeMirror.setValue(this.value);
          this.codeMirror.scrollTo(prevScrollPosition.left, prevScrollPosition.top);
        } else {
          this.codeMirror.setValue(this.value);
        }
      }
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnChange(fn) {
      this.onChange = fn;
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /** Implemented as part of ControlValueAccessor. */
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
      this.setOptionIfChanged('readOnly', this.disabled);
    }
    /** Implemented as part of ControlValueAccessor. */
    onChange = _ => {};
    /** Implemented as part of ControlValueAccessor. */
    onTouched = () => {};
    static ɵfac = function CodemirrorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CodemirrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CodemirrorComponent,
      selectors: [["ngx-codemirror"]],
      viewQuery: function CodemirrorComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
        }
      },
      inputs: {
        className: "className",
        name: "name",
        autoFocus: "autoFocus",
        options: "options",
        preserveScrollPosition: "preserveScrollPosition"
      },
      outputs: {
        cursorActivity: "cursorActivity",
        focusChange: "focusChange",
        scroll: "scroll",
        drop: "drop",
        codeMirrorLoaded: "codeMirrorLoaded"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => CodemirrorComponent),
        multi: true
      }])],
      decls: 3,
      vars: 7,
      consts: [["ref", ""], ["autocomplete", "off", 3, "name", "autofocus"]],
      template: function CodemirrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "textarea", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "    ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinterpolate1"]("ngx-codemirror ", ctx.className));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-codemirror--focused", ctx.isFocused);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx.name)("autofocus", ctx.autoFocus);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return CodemirrorComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CodemirrorModule = /*#__PURE__*/(() => {
  class CodemirrorModule {
    static ɵfac = function CodemirrorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CodemirrorModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CodemirrorModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  }
  return CodemirrorModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }

}])
//# sourceMappingURL=2440.js.map