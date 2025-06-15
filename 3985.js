(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[3985],{

/***/ 63985:
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/stepper.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdkStep: () => (/* binding */ CdkStep),
/* harmony export */   CdkStepHeader: () => (/* binding */ CdkStepHeader),
/* harmony export */   CdkStepLabel: () => (/* binding */ CdkStepLabel),
/* harmony export */   CdkStepper: () => (/* binding */ CdkStepper),
/* harmony export */   CdkStepperModule: () => (/* binding */ CdkStepperModule),
/* harmony export */   CdkStepperNext: () => (/* binding */ CdkStepperNext),
/* harmony export */   CdkStepperPrevious: () => (/* binding */ CdkStepperPrevious),
/* harmony export */   STEPPER_GLOBAL_OPTIONS: () => (/* binding */ STEPPER_GLOBAL_OPTIONS),
/* harmony export */   STEP_STATE: () => (/* binding */ STEP_STATE),
/* harmony export */   StepperSelectionEvent: () => (/* binding */ StepperSelectionEvent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ 6020);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ 71320);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ 73038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9516);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 56748);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ 1830);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 32778);









const _c0 = ["*"];
function CdkStep_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
  }
}
let CdkStepHeader = /*#__PURE__*/(() => {
  class CdkStepHeader {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
    constructor() {}
    /** Focuses the step header. */
    focus() {
      this._elementRef.nativeElement.focus();
    }
    static ɵfac = function CdkStepHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkStepHeader)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkStepHeader,
      selectors: [["", "cdkStepHeader", ""]],
      hostAttrs: ["role", "tab"]
    });
  }
  return CdkStepHeader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CdkStepLabel = /*#__PURE__*/(() => {
  class CdkStepLabel {
    template = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef);
    constructor() {}
    static ɵfac = function CdkStepLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkStepLabel)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkStepLabel,
      selectors: [["", "cdkStepLabel", ""]]
    });
  }
  return CdkStepLabel;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Change event emitted on selection changes. */
class StepperSelectionEvent {
  /** Index of the step now selected. */
  selectedIndex;
  /** Index of the step previously selected. */
  previouslySelectedIndex;
  /** The step instance now selected. */
  selectedStep;
  /** The step instance previously selected. */
  previouslySelectedStep;
}
/** Enum to represent the different states of the steps. */
const STEP_STATE = {
  NUMBER: 'number',
  EDIT: 'edit',
  DONE: 'done',
  ERROR: 'error'
};
/** InjectionToken that can be used to specify the global stepper options. */
const STEPPER_GLOBAL_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('STEPPER_GLOBAL_OPTIONS');
let CdkStep = /*#__PURE__*/(() => {
  class CdkStep {
    _stepperOptions;
    _stepper = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(CdkStepper);
    _displayDefaultIndicatorType;
    /** Template for step label if it exists. */
    stepLabel;
    /** Forms that have been projected into the step. */
    _childForms;
    /** Template for step content. */
    content;
    /** The top level abstract control of the step. */
    stepControl;
    /** Whether user has attempted to move away from the step. */
    interacted = false;
    /** Emits when the user has attempted to move away from the step. */
    interactedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /** Plain text label of the step. */
    label;
    /** Error message to display when there's an error. */
    errorMessage;
    /** Aria label for the tab. */
    ariaLabel;
    /**
     * Reference to the element that the tab is labelled by.
     * Will be cleared if `aria-label` is set at the same time.
     */
    ariaLabelledby;
    /** State of the step. */
    state;
    /** Whether the user can return to this step once it has been marked as completed. */
    editable = true;
    /** Whether the completion of step is optional. */
    optional = false;
    /** Whether step is marked as completed. */
    get completed() {
      return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
    }
    set completed(value) {
      this._completedOverride = value;
    }
    _completedOverride = null;
    _getDefaultCompleted() {
      return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
    }
    /** Whether step has an error. */
    get hasError() {
      return this._customError == null ? this._getDefaultError() : this._customError;
    }
    set hasError(value) {
      this._customError = value;
    }
    _customError = null;
    _getDefaultError() {
      return this.stepControl && this.stepControl.invalid && this.interacted;
    }
    constructor() {
      const stepperOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(STEPPER_GLOBAL_OPTIONS, {
        optional: true
      });
      this._stepperOptions = stepperOptions ? stepperOptions : {};
      this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
    }
    /** Selects this step component. */
    select() {
      this._stepper.selected = this;
    }
    /** Resets the step to its initial state. Note that this includes resetting form data. */
    reset() {
      this.interacted = false;
      if (this._completedOverride != null) {
        this._completedOverride = false;
      }
      if (this._customError != null) {
        this._customError = false;
      }
      if (this.stepControl) {
        // Reset the forms since the default error state matchers will show errors on submit and we
        // want the form to be back to its initial state (see #29781). Submitted state is on the
        // individual directives, rather than the control, so we need to reset them ourselves.
        this._childForms?.forEach(form => form.resetForm?.());
        this.stepControl.reset();
      }
    }
    ngOnChanges() {
      // Since basically all inputs of the MatStep get proxied through the view down to the
      // underlying MatStepHeader, we have to make sure that change detection runs correctly.
      this._stepper._stateChanged();
    }
    _markAsInteracted() {
      if (!this.interacted) {
        this.interacted = true;
        this.interactedStream.emit(this);
      }
    }
    /** Determines whether the error state can be shown. */
    _showError() {
      // We want to show the error state either if the user opted into/out of it using the
      // global options, or if they've explicitly set it through the `hasError` input.
      return this._stepperOptions.showError ?? this._customError != null;
    }
    static ɵfac = function CdkStep_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkStep)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CdkStep,
      selectors: [["cdk-step"]],
      contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkStepLabel, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex,
          // Note: we look for `ControlContainer` here, because both `NgForm` and `FormGroupDirective`
          // provides themselves as such, but we don't want to have a concrete reference to both of
          // the directives. The type is marked as `Partial` in case we run into a class that provides
          // itself as `ControlContainer` but doesn't have the same interface as the directives.
          _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ControlContainer, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._childForms = _t);
        }
      },
      viewQuery: function CdkStep_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      inputs: {
        stepControl: "stepControl",
        label: "label",
        errorMessage: "errorMessage",
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        state: "state",
        editable: [2, "editable", "editable", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute],
        optional: [2, "optional", "optional", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute],
        completed: [2, "completed", "completed", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute],
        hasError: [2, "hasError", "hasError", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute]
      },
      outputs: {
        interactedStream: "interacted"
      },
      exportAs: ["cdkStep"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function CdkStep_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return CdkStep;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CdkStepper = /*#__PURE__*/(() => {
  class CdkStepper {
    _dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__.Directionality, {
      optional: true
    });
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef);
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
    /** Emits when the component is destroyed. */
    _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    /** Used for managing keyboard focus. */
    _keyManager;
    /** Full list of steps inside the stepper, including inside nested steppers. */
    _steps;
    /** Steps that belong to the current stepper, excluding ones from nested steppers. */
    steps = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.QueryList();
    /** The list of step headers of the steps in the stepper. */
    _stepHeader;
    /** List of step headers sorted based on their DOM order. */
    _sortedHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.QueryList();
    /** Whether the validity of previous steps should be checked or not. */
    linear = false;
    /** The index of the selected step. */
    get selectedIndex() {
      return this._selectedIndex;
    }
    set selectedIndex(index) {
      if (this.steps && this._steps) {
        // Ensure that the index can't be out of bounds.
        if (!this._isValidIndex(index) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
        }
        this.selected?._markAsInteracted();
        if (this._selectedIndex !== index && !this._anyControlsInvalidOrPending(index) && (index >= this._selectedIndex || this.steps.toArray()[index].editable)) {
          this._updateSelectedItemIndex(index);
        }
      } else {
        this._selectedIndex = index;
      }
    }
    _selectedIndex = 0;
    /** The step that is selected. */
    get selected() {
      return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
    }
    set selected(step) {
      this.selectedIndex = step && this.steps ? this.steps.toArray().indexOf(step) : -1;
    }
    /** Event emitted when the selected step has changed. */
    selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /** Output to support two-way binding on `[(selectedIndex)]` */
    selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /** Used to track unique ID for each stepper component. */
    _groupId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__._IdGenerator).getId('cdk-stepper-');
    /** Orientation of the stepper. */
    get orientation() {
      return this._orientation;
    }
    set orientation(value) {
      // This is a protected method so that `MatStepper` can hook into it.
      this._orientation = value;
      if (this._keyManager) {
        this._keyManager.withVerticalOrientation(value === 'vertical');
      }
    }
    _orientation = 'horizontal';
    constructor() {}
    ngAfterContentInit() {
      this._steps.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this._steps), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(steps => {
        this.steps.reset(steps.filter(step => step._stepper === this));
        this.steps.notifyOnChanges();
      });
    }
    ngAfterViewInit() {
      // If the step headers are defined outside of the `ngFor` that renders the steps, like in the
      // Material stepper, they won't appear in the `QueryList` in the same order as they're
      // rendered in the DOM which will lead to incorrect keyboard navigation. We need to sort
      // them manually to ensure that they're correct. Alternatively, we can change the Material
      // template to inline the headers in the `ngFor`, but that'll result in a lot of
      // code duplication. See #23539.
      this._stepHeader.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this._stepHeader), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(headers => {
        this._sortedHeaders.reset(headers.toArray().sort((a, b) => {
          const documentPosition = a._elementRef.nativeElement.compareDocumentPosition(b._elementRef.nativeElement);
          // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
          // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
          // tslint:disable-next-line:no-bitwise
          return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
        }));
        this._sortedHeaders.notifyOnChanges();
      });
      // Note that while the step headers are content children by default, any components that
      // extend this one might have them as view children. We initialize the keyboard handling in
      // AfterViewInit so we're guaranteed for both view and content children to be defined.
      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__.FocusKeyManager(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation === 'vertical');
      (this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this._layoutDirection()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(direction => this._keyManager.withHorizontalOrientation(direction));
      this._keyManager.updateActiveItem(this._selectedIndex);
      // No need to `takeUntil` here, because we're the ones destroying `steps`.
      this.steps.changes.subscribe(() => {
        if (!this.selected) {
          this._selectedIndex = Math.max(this._selectedIndex - 1, 0);
        }
      });
      // The logic which asserts that the selected index is within bounds doesn't run before the
      // steps are initialized, because we don't how many steps there are yet so we may have an
      // invalid index on init. If that's the case, auto-correct to the default so we don't throw.
      if (!this._isValidIndex(this._selectedIndex)) {
        this._selectedIndex = 0;
      }
    }
    ngOnDestroy() {
      this._keyManager?.destroy();
      this.steps.destroy();
      this._sortedHeaders.destroy();
      this._destroyed.next();
      this._destroyed.complete();
    }
    /** Selects and focuses the next step in list. */
    next() {
      this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
    }
    /** Selects and focuses the previous step in list. */
    previous() {
      this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
    }
    /** Resets the stepper to its initial state. Note that this includes clearing form data. */
    reset() {
      this._updateSelectedItemIndex(0);
      this.steps.forEach(step => step.reset());
      this._stateChanged();
    }
    /** Returns a unique id for each step label element. */
    _getStepLabelId(i) {
      return `${this._groupId}-label-${i}`;
    }
    /** Returns unique id for each step content element. */
    _getStepContentId(i) {
      return `${this._groupId}-content-${i}`;
    }
    /** Marks the component to be change detected. */
    _stateChanged() {
      this._changeDetectorRef.markForCheck();
    }
    /** Returns position state of the step with the given index. */
    _getAnimationDirection(index) {
      const position = index - this._selectedIndex;
      if (position < 0) {
        return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
      } else if (position > 0) {
        return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
      }
      return 'current';
    }
    /** Returns the type of icon to be displayed. */
    _getIndicatorType(index, state = STEP_STATE.NUMBER) {
      const step = this.steps.toArray()[index];
      const isCurrentStep = this._isCurrentStep(index);
      return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) : this._getGuidelineLogic(step, isCurrentStep, state);
    }
    _getDefaultIndicatorLogic(step, isCurrentStep) {
      if (step._showError() && step.hasError && !isCurrentStep) {
        return STEP_STATE.ERROR;
      } else if (!step.completed || isCurrentStep) {
        return STEP_STATE.NUMBER;
      } else {
        return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
      }
    }
    _getGuidelineLogic(step, isCurrentStep, state = STEP_STATE.NUMBER) {
      if (step._showError() && step.hasError && !isCurrentStep) {
        return STEP_STATE.ERROR;
      } else if (step.completed && !isCurrentStep) {
        return STEP_STATE.DONE;
      } else if (step.completed && isCurrentStep) {
        return state;
      } else if (step.editable && isCurrentStep) {
        return STEP_STATE.EDIT;
      } else {
        return state;
      }
    }
    _isCurrentStep(index) {
      return this._selectedIndex === index;
    }
    /** Returns the index of the currently-focused step header. */
    _getFocusIndex() {
      return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
    }
    _updateSelectedItemIndex(newIndex) {
      const stepsArray = this.steps.toArray();
      this.selectionChange.emit({
        selectedIndex: newIndex,
        previouslySelectedIndex: this._selectedIndex,
        selectedStep: stepsArray[newIndex],
        previouslySelectedStep: stepsArray[this._selectedIndex]
      });
      // If focus is inside the stepper, move it to the next header, otherwise it may become
      // lost when the active step content is hidden. We can't be more granular with the check
      // (e.g. checking whether focus is inside the active step), because we don't have a
      // reference to the elements that are rendering out the content.
      this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItem(newIndex);
      this._selectedIndex = newIndex;
      this.selectedIndexChange.emit(this._selectedIndex);
      this._stateChanged();
    }
    _onKeydown(event) {
      const hasModifier = (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.hasModifierKey)(event);
      const keyCode = event.keyCode;
      const manager = this._keyManager;
      if (manager.activeItemIndex != null && !hasModifier && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.SPACE || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.ENTER)) {
        this.selectedIndex = manager.activeItemIndex;
        event.preventDefault();
      } else {
        manager.setFocusOrigin('keyboard').onKeydown(event);
      }
    }
    _anyControlsInvalidOrPending(index) {
      if (this.linear && index >= 0) {
        return this.steps.toArray().slice(0, index).some(step => {
          const control = step.stepControl;
          const isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
          return isIncomplete && !step.optional && !step._completedOverride;
        });
      }
      return false;
    }
    _layoutDirection() {
      return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Checks whether the stepper contains the focused element. */
    _containsFocus() {
      const stepperElement = this._elementRef.nativeElement;
      const focusedElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__._getFocusedElementPierceShadowDom)();
      return stepperElement === focusedElement || stepperElement.contains(focusedElement);
    }
    /** Checks whether the passed-in index is a valid step index. */
    _isValidIndex(index) {
      return index > -1 && (!this.steps || index < this.steps.length);
    }
    static ɵfac = function CdkStepper_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkStepper)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkStepper,
      selectors: [["", "cdkStepper", ""]],
      contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkStep, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkStepHeader, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._steps = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
        }
      },
      inputs: {
        linear: [2, "linear", "linear", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute],
        selectedIndex: [2, "selectedIndex", "selectedIndex", _angular_core__WEBPACK_IMPORTED_MODULE_3__.numberAttribute],
        selected: "selected",
        orientation: "orientation"
      },
      outputs: {
        selectionChange: "selectionChange",
        selectedIndexChange: "selectedIndexChange"
      },
      exportAs: ["cdkStepper"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInputTransformsFeature"]]
    });
  }
  return CdkStepper;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Button that moves to the next step in a stepper workflow. */
let CdkStepperNext = /*#__PURE__*/(() => {
  class CdkStepperNext {
    _stepper = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(CdkStepper);
    /** Type of the next button. Defaults to "submit" if not specified. */
    type = 'submit';
    constructor() {}
    static ɵfac = function CdkStepperNext_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkStepperNext)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkStepperNext,
      selectors: [["button", "cdkStepperNext", ""]],
      hostVars: 1,
      hostBindings: function CdkStepperNext_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CdkStepperNext_click_HostBindingHandler() {
            return ctx._stepper.next();
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("type", ctx.type);
        }
      },
      inputs: {
        type: "type"
      }
    });
  }
  return CdkStepperNext;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Button that moves to the previous step in a stepper workflow. */
let CdkStepperPrevious = /*#__PURE__*/(() => {
  class CdkStepperPrevious {
    _stepper = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(CdkStepper);
    /** Type of the previous button. Defaults to "button" if not specified. */
    type = 'button';
    constructor() {}
    static ɵfac = function CdkStepperPrevious_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkStepperPrevious)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkStepperPrevious,
      selectors: [["button", "cdkStepperPrevious", ""]],
      hostVars: 1,
      hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CdkStepperPrevious_click_HostBindingHandler() {
            return ctx._stepper.previous();
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("type", ctx.type);
        }
      },
      inputs: {
        type: "type"
      }
    });
  }
  return CdkStepperPrevious;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CdkStepperModule = /*#__PURE__*/(() => {
  class CdkStepperModule {
    static ɵfac = function CdkStepperModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkStepperModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: CdkStepperModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__.BidiModule]
    });
  }
  return CdkStepperModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=3985.js.map