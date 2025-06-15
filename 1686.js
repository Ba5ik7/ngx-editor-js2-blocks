(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[1686],{

/***/ 59305:
/*!*************************************************************************************!*\
  !*** ./dist/ngx-editor-js2-codemirror/fesm2022/tmdjr-ngx-editor-js2-codemirror.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxEditorJs2CodemirrorComponent: () => (/* binding */ NgxEditorJs2CodemirrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9516);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 56748);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 53576);
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ 42642);
/* harmony import */ var _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tmdjr/ngx-editor-js2 */ 40623);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 59694);










function NgxEditorJs2CodemirrorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1)(2, "ngx-codemirror", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formGroup());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autofocus", ctx_r0.autofocus());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actionCallback", ctx_r0.actionCallbackBind)("blockOptionActions", ctx_r0.blockOptionActions())("formControlName", ctx_r0.formControlName())("componentContextPositionIndex", ctx_r0.sortIndex())("options", ctx_r0.codeMirrorOptions());
  }
}
let NgxEditorJs2CodemirrorComponent = /*#__PURE__*/(() => {
  class NgxEditorJs2CodemirrorComponent {
    sortIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(0);
    componentInstanceName = 'NgxEditorJs2CodemirrorComponent';
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(true);
    formGroup = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    formControlName = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)([{
      action: 'text/typescript',
      icon: 'javascript'
    }, {
      action: 'css',
      icon: 'css'
    }, {
      action: 'xml',
      icon: 'html'
    }]);
    codeMirrorOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
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
    });
    savedAction = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('display-large');
    actionCallbackBind = this.actionCallback.bind(this);
    actionCallback(action) {
      this.codeMirrorOptions.update(prev => ({
        ...prev,
        mode: action
      }));
      this.savedAction.update(() => action);
    }
    // ! Hotfix for perspective: 2500px;
    // Need create a delay to wait for the animation to finish before showing the component
    waitForAnimation = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
    constructor() {
      setTimeout(() => {
        this.waitForAnimation.update(() => true);
      }, 500);
    }
    static ɵfac = function NgxEditorJs2CodemirrorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgxEditorJs2CodemirrorComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxEditorJs2CodemirrorComponent,
      selectors: [["ngx-editor-js2-codemirror"]],
      hostAttrs: [1, "cdk-drag-animating", "no-toolbar-inline"],
      inputs: {
        sortIndex: [1, "sortIndex"],
        autofocus: [1, "autofocus"],
        formGroup: [1, "formGroup"],
        formControlName: [1, "formControlName"],
        blockOptionActions: [1, "blockOptionActions"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDrag])],
      decls: 1,
      vars: 1,
      consts: [[3, "formGroup"], ["controlAccessor", "", 3, "autofocus"], ["toolbarFab", "", 1, "fade-in", 3, "actionCallback", "blockOptionActions", "formControlName", "componentContextPositionIndex", "options"]],
      template: function NgxEditorJs2CodemirrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxEditorJs2CodemirrorComponent_Conditional_0_Template, 3, 7, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.waitForAnimation() ? 0 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_4__.ControlAccessorDirective, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_4__.AutofocusDirective, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_4__.ToolbarFabDirective, _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_5__.CodemirrorModule, _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_5__.CodemirrorComponent],
      styles: ["[_nghost-%COMP%]{display:block;position:relative;margin:1.5rem 0}[_nghost-%COMP%]   .codemirror-container-overlay[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;position:absolute}[_nghost-%COMP%]   .fade-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .25s ease-in-out}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}[_nghost-%COMP%]     .CodeMirror{font-family:Cascadia Code,Fira Code,Menlo,Monaco,Courier New,monospace;font-size:16px;font-weight:400;line-height:32px;letter-spacing:.5px;height:100%}"]
    });
  }
  return NgxEditorJs2CodemirrorComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of ngx-editor-js2-codemirror
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 42642:
/*!****************************************************************************!*\
  !*** ./node_modules/@ctrl/ngx-codemirror/fesm2022/ctrl-ngx-codemirror.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodemirrorComponent: () => (/* binding */ CodemirrorComponent),
/* harmony export */   CodemirrorModule: () => (/* binding */ CodemirrorModule)
/* harmony export */ });
/* harmony import */ var _Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9516);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 56748);




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
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ngx-codemirror ", ctx.className, "");
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



/***/ })

}])
//# sourceMappingURL=1686.js.map