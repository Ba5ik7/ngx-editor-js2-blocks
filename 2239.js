(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[2239],{

/***/ 40623
/*!******************************************************************************!*\
  !*** ./node_modules/@tmdjr/ngx-editor-js2/fesm2022/tmdjr-ngx-editor-js2.mjs ***!
  \******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 14332);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 61488);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 8778);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ 20026);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 81836);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 11674);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 51404);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 66080);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 91638);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ 53092);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/portal */ 5978);


















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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](1, ToolbarBlockOptionsComponent_For_11_Conditional_1_Template, 1, 1)(2, ToolbarBlockOptionsComponent_For_11_Conditional_2_Template, 2, 1, "mat-icon");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](1, ToolbarBlocksComponent_Conditional_5_Conditional_1_Template, 2, 0, "mat-list-item", 4)(2, ToolbarBlocksComponent_Conditional_5_Conditional_2_Template, 2, 0);
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
function HeaderBlockComponent_Case_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function HeaderBlockComponent_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_Case_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const sharedHeaderTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", sharedHeaderTemplate_r1);
  }
}
function HeaderBlockComponent_Case_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function HeaderBlockComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_Case_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const sharedHeaderTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", sharedHeaderTemplate_r1);
  }
}
function HeaderBlockComponent_Case_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function HeaderBlockComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_Case_2_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const sharedHeaderTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", sharedHeaderTemplate_r1);
  }
}
function HeaderBlockComponent_Case_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function HeaderBlockComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_Case_3_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const sharedHeaderTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", sharedHeaderTemplate_r1);
  }
}
function HeaderBlockComponent_Case_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function HeaderBlockComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_Case_4_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const sharedHeaderTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", sharedHeaderTemplate_r1);
  }
}
function HeaderBlockComponent_Case_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function HeaderBlockComponent_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_Case_5_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const sharedHeaderTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", sharedHeaderTemplate_r1);
  }
}
function HeaderBlockComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 3);
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
    defaultValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(...(ngDevMode ? [undefined, {
      debugName: "defaultValue"
    }] : []));
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
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(false, ...(ngDevMode ? [{
      debugName: "autofocus"
    }] : []));
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
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(...(ngDevMode ? [undefined, {
      debugName: "blockOptionActions"
    }] : []));
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
      consts: [[1, "actions-panel"], ["matRipple", "", 1, "action-btn", 3, "click"], ["matRipple", "", 1, "action-btn"]],
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
      styles: ["[_nghost-%COMP%]   .actions-panel[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:1px;width:128px;max-height:128px;border-radius:4px;overflow:auto;background:var(--mat-sys-secondary);box-shadow:var(--mat-sys-level5)}[_nghost-%COMP%]   .actions-panel[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{cursor:pointer;width:42px;height:42px;display:flex;align-items:center;justify-content:center;border-radius:4px;color:var(--mat-sys-on-secondary);background:var(--mat-sys-secondary)}[_nghost-%COMP%]   .actions-panel[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .actions-panel[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:focus{color:var(--mat-sys-secondary);background:var(--mat-sys-on-secondary)}"]
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
    supportedBlocks = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)([], ...(ngDevMode ? [{
      debugName: "supportedBlocks"
    }] : []));
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
      consts: [[1, "block-list-container"], ["appearance", "fill", "color", "accent"], ["matInput", "", 1, "filter-text", 3, "formControl", "autofocus"], [1, "block-list-panel"], ["matRipple", "", "mat-list-item", ""], ["matRipple", "", "mat-list-item", "", 3, "click"]],
      template: function ToolbarBlocksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filter");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](5, ToolbarBlocksComponent_Conditional_5_Template, 3, 1, "mat-list", 3);
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
      styles: ["[_nghost-%COMP%]   .mat-mdc-list-base[_ngcontent-%COMP%]{padding-top:0;margin-top:-14px}[_nghost-%COMP%]   .block-list-container[_ngcontent-%COMP%]{border-radius:4px;background:var(--mat-sys-secondary-container);box-shadow:var(--mat-sys-level5)}[_nghost-%COMP%]   .block-list-panel[_ngcontent-%COMP%]{max-width:280px;max-height:240px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;overflow:auto;color:var(--mat-sys-on-secondary-container)}[_nghost-%COMP%]   mat-list-item[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none}[_nghost-%COMP%]   mat-list-item[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   mat-list-item[_ngcontent-%COMP%]:focus{background:var(--mat-sys-surface-bright)}"]
    });
  }
  return ToolbarBlocksComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ToolbarComponent = /*#__PURE__*/(() => {
  class ToolbarComponent {
    componentContextPositionIndex = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "componentContextPositionIndex"
    }] : []));
    supportedBlocks = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "supportedBlocks"
    }] : []));
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(...(ngDevMode ? [undefined, {
      debugName: "blockOptionActions"
    }] : []));
    actionCallback = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(() => () => {}, ...(ngDevMode ? [{
      debugName: "actionCallback"
    }] : []));
    formControlName = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(...(ngDevMode ? [undefined, {
      debugName: "formControlName"
    }] : []));
    addBlockCallback = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "addBlockCallback"
    }] : []));
    moveBlockPositionCallback = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "moveBlockPositionCallback"
    }] : []));
    openBlocks = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "openBlocks"
    }] : []));
    openBlocksOption = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "openBlocksOption"
    }] : []));
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
      consts: [["blockListTigger", "cdkOverlayOrigin"], ["blockOptionListTigger", "cdkOverlayOrigin"], [1, "toolbar-buttons-container"], ["cdkOverlayOrigin", "", "matRipple", "", 1, "toolbar-buttons", 3, "click"], [1, "material-icons"], ["cdkDragHandle", "", "cdkOverlayOrigin", "", "matRipple", "", 1, "toolbar-buttons", 3, "click"], ["cdkConnectedOverlay", "", 3, "overlayOutsideClick", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayBackdropClass"], ["cdkConnectedOverlay", "", 3, "overlayOutsideClick", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayBackdropClass"], [3, "addBlock", "supportedBlocks"], [3, "handleAction", "moveBlockPosition", "blockOptionActions"]],
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
      styles: ["[_nghost-%COMP%]   .toolbar-buttons-container[_ngcontent-%COMP%]{position:relative;display:flex;gap:10px}[_nghost-%COMP%]   .toolbar-buttons[_ngcontent-%COMP%]{cursor:pointer;width:30px;height:30px;display:flex;justify-content:center;align-items:center;border-radius:4px;margin-bottom:14px;-webkit-user-select:none;user-select:none;color:var(--mat-sys-on-tertiary-container);background:var(--mat-sys-tertiary-container);box-shadow:var(--mat-sys-level2)}[_nghost-%COMP%]   .toolbar-buttons[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .toolbar-buttons[_ngcontent-%COMP%]:focus{background:var(--mat-sys-surface-bright)}@media(min-width:768px){[_nghost-%COMP%]{position:absolute;margin-left:-80px;top:0}}"]
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
    addBlockComponent(ngxEditorJsBlock, emitEvent = true) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)([this.createFormGroupControl(ngxEditorJsBlock, emitEvent), this.attachComponent(ngxEditorJsBlock), this.blockMovementService.updateComponentIndices(this.ngxEditor)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(() => void 0));
    }
    createFormGroupControl({
      blockId,
      dataClean
    }, emitEvent = true) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.formBuilder.control(dataClean, [])).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(formControl => this.formGroup.addControl(blockId, formControl, {
        emitEvent
      })));
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
        componentRef.location.nativeElement.classList.add('ngx-editor-js2-block');
        componentRef.setInput('sortIndex', index);
        componentRef.setInput('formGroup', this.formGroup);
        componentRef.setInput('formControlName', controlName);
        componentRef.setInput('autofocus', autofocus);
        savedAction && componentRef.instance.actionCallback?.(savedAction, false);
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
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([this.blockMovementService.removeBlockComponent(this.ngxEditor, index, clear), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.formGroup.removeControl(formControlName, {
        emitEvent: !clear
      }))]);
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
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(...(ngDevMode ? [undefined, {
      debugName: "autofocus"
    }] : []));
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(...(ngDevMode ? [undefined, {
      debugName: "blockOptionActions"
    }] : []));
    actionCallback = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "actionCallback"
    }] : []));
    componentContextPositionIndex = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "componentContextPositionIndex"
    }] : []));
    formControlName = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "formControlName"
    }] : []));
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
    sortIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(0, ...(ngDevMode ? [{
      debugName: "sortIndex"
    }] : []));
    componentInstanceName = 'HeaderBlockComponent';
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(true, ...(ngDevMode ? [{
      debugName: "autofocus"
    }] : []));
    formGroup = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "formGroup"
    }] : []));
    formControlName = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "formControlName"
    }] : []));
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
    }], ...(ngDevMode ? [{
      debugName: "blockOptionActions"
    }] : []));
    savedAction = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('h1', ...(ngDevMode ? [{
      debugName: "savedAction"
    }] : []));
    actionCallbackBind = this.actionCallback.bind(this);
    actionCallback(selectedAction, updateFormValue = true) {
      this.savedAction.set(selectedAction);
      updateFormValue && this.formGroup().updateValueAndValidity();
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
      decls: 8,
      vars: 2,
      consts: [["sharedHeaderTemplate", ""], [3, "formGroup"], [4, "ngTemplateOutlet"], ["controlAccessor", "", "cleanPasteData", "", "contentEditable", "", "toolbarFab", "", 3, "defaultValue", "actionCallback", "blockOptionActions", "autofocus", "formControlName", "componentContextPositionIndex"]],
      template: function HeaderBlockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](0, HeaderBlockComponent_Case_0_Template, 2, 1, "h1")(1, HeaderBlockComponent_Case_1_Template, 2, 1, "h2")(2, HeaderBlockComponent_Case_2_Template, 2, 1, "h3")(3, HeaderBlockComponent_Case_3_Template, 2, 1, "h4")(4, HeaderBlockComponent_Case_4_Template, 2, 1, "h5")(5, HeaderBlockComponent_Case_5_Template, 2, 1, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderBlockComponent_ng_template_6_Template, 1, 6, "ng-template", 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_1_0 = ctx.savedAction()) === "h1" ? 0 : tmp_1_0 === "h2" ? 1 : tmp_1_0 === "h3" ? 2 : tmp_1_0 === "h4" ? 3 : tmp_1_0 === "h5" ? 4 : tmp_1_0 === "h6" ? 5 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup());
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, ControlAccessorDirective, AutofocusDirective, ToolbarFabDirective, CleanPasteDataDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet],
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
    sortIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(0, ...(ngDevMode ? [{
      debugName: "sortIndex"
    }] : []));
    componentInstanceName = 'ParagraphBlockComponent';
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(true, ...(ngDevMode ? [{
      debugName: "autofocus"
    }] : []));
    formGroup = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "formGroup"
    }] : []));
    formControlName = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "formControlName"
    }] : []));
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
    }], ...(ngDevMode ? [{
      debugName: "blockOptionActions"
    }] : []));
    savedAction = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('medium', ...(ngDevMode ? [{
      debugName: "savedAction"
    }] : []));
    actionCallbackBind = this.actionCallback.bind(this);
    actionCallback(action, updateFormValue = true) {
      this.savedAction.update(() => action);
      updateFormValue && this.formGroup().updateValueAndValidity();
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
const NGX_EDITORJS_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NGX_EDITORJS_OPTIONS');
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
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)(blocks.map(block => this.editorJsService.addBlockComponent(block, false)));
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
    bootstrapEditorJs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(...(ngDevMode ? [undefined, {
      debugName: "bootstrapEditorJs"
    }] : []));
    blocks = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required({
      ...(ngDevMode ? {
        debugName: "blocks"
      } : {}),
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
    drop(event) {
      void (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(this.editorJsService.moveBlockComponentPosition(event.previousIndex, event.currentIndex).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(() => this.editorJsService.formGroup.updateValueAndValidity())));
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
    selection = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "selection"
    }] : []));
    closeOverlayEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2);
    url = '';
    showURLInputField = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "showURLInputField"
    }] : []));
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](12, ToolbarInlineComponent_Conditional_12_Template, 5, 1, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.options);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.showURLInputField() ? 12 : -1);
        }
      },
      dependencies: [_angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
      styles: ["[_nghost-%COMP%]{color:var(--mat-sys-on-secondary);background:var(--mat-sys-secondary);box-shadow:var(--mat-sys-level5);border-radius:8px}[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]{display:flex;width:230px;flex-wrap:wrap;gap:1px}[_nghost-%COMP%]   .inline-option[_ngcontent-%COMP%]{cursor:pointer;width:32px;height:32px;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .block-option-input[_ngcontent-%COMP%]{width:197px;height:32px;border:none;outline:none;color:var(--mat-sys-on-secondary);background-color:transparent;box-sizing:border-box}"]
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
    constructor() {
      this.editorJsService.formGroup.valueChanges.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__.takeUntilDestroyed)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(500), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => this.editorJsService.getBlocks$()), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(blocks => this.formChanged.emit(blocks))).subscribe();
    }
    blocks = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)([], ...(ngDevMode ? [{
      debugName: "blocks"
    }] : []));
    // Allows the parent component to request the current blocks
    blocksRequested = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    requestBlocks = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required({
      ...(ngDevMode ? {
        debugName: "requestBlocks"
      } : {}),
      transform: value => value && this.blocksRequested.emit(this.editorJsService.getBlocks$())
    });
    // Tells the parent component when the form has changed
    formChanged = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
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
        blocksRequested: "blocksRequested",
        formChanged: "formChanged"
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



/***/ },

/***/ 52239
/*!***************************************************************************************!*\
  !*** ./dist/ngx-editor-js2-blockquotes/fesm2022/tmdjr-ngx-editor-js2-blockquotes.mjs ***!
  \***************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxEditorJs2BlockquotesComponent: () => (/* binding */ NgxEditorJs2BlockquotesComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 8778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 11674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 14332);
/* harmony import */ var _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tmdjr/ngx-editor-js2 */ 40623);








let NgxEditorJs2BlockquotesComponent = /*#__PURE__*/(() => {
  class NgxEditorJs2BlockquotesComponent {
    sortIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.input)(0, ...(ngDevMode ? [{
      debugName: "sortIndex"
    }] : []));
    componentInstanceName = 'NgxEditorJs2BlockquotesComponent';
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
      action: 'medium',
      icon: 'density_small'
    }, {
      action: 'display-small',
      icon: 'density_medium'
    }, {
      action: 'display-large',
      icon: 'density_large'
    }], ...(ngDevMode ? [{
      debugName: "blockOptionActions"
    }] : []));
    savedAction = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)('display-large', ...(ngDevMode ? [{
      debugName: "savedAction"
    }] : []));
    actionCallbackBind = this.actionCallback.bind(this);
    actionCallback(action, updateFormValue = true) {
      this.savedAction.update(() => action);
      updateFormValue && this.formGroup().updateValueAndValidity();
    }
    static ɵfac = function NgxEditorJs2BlockquotesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgxEditorJs2BlockquotesComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__.CdkDrag])],
      decls: 2,
      vars: 8,
      consts: [[3, "formGroup"], ["controlAccessor", "", "contentEditable", "", "toolbarFab", "", "cleanPasteData", "", 3, "ngClass", "defaultValue", "actionCallback", "autofocus", "blockOptionActions", "formControlName", "componentContextPositionIndex"]],
      template: function NgxEditorJs2BlockquotesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "blockquote", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formGroup());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.savedAction())("defaultValue", (tmp_2_0 = ctx.formGroup().get(ctx.formControlName())) == null ? null : tmp_2_0.value)("actionCallback", ctx.actionCallbackBind)("autofocus", ctx.autofocus())("blockOptionActions", ctx.blockOptionActions())("formControlName", ctx.formControlName())("componentContextPositionIndex", ctx.sortIndex());
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_4__.ControlAccessorDirective, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_4__.AutofocusDirective, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_4__.ToolbarFabDirective, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_4__.CleanPasteDataDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
      styles: ["[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]   .medium[_ngcontent-%COMP%]{font:var(--mat-sys-body-medium);font-weight:100}[_nghost-%COMP%]   .display-small[_ngcontent-%COMP%]{font:var(--mat-sys-display-small);font-weight:100}[_nghost-%COMP%]   .display-large[_ngcontent-%COMP%]{font:var(--mat-sys-display-large);font-weight:100}[_nghost-%COMP%]   blockquote[_ngcontent-%COMP%]{margin:20px 0;padding:5px 0 5px 1em;border-left:5px solid var(--mat-sys-primary)}"]
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



/***/ }

}])
//# sourceMappingURL=2239.js.map