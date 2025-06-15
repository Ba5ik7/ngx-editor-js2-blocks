(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[5541],{

/***/ 95541:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/input.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_INPUT_CONFIG: () => (/* binding */ MAT_INPUT_CONFIG),
/* harmony export */   MAT_INPUT_VALUE_ACCESSOR: () => (/* binding */ MAT_INPUT_VALUE_ACCESSOR),
/* harmony export */   MatError: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError),
/* harmony export */   MatFormField: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField),
/* harmony export */   MatHint: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatHint),
/* harmony export */   MatInput: () => (/* binding */ MatInput),
/* harmony export */   MatInputModule: () => (/* binding */ MatInputModule),
/* harmony export */   MatLabel: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel),
/* harmony export */   MatPrefix: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatPrefix),
/* harmony export */   MatSuffix: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix),
/* harmony export */   getMatInputUnsupportedTypeError: () => (/* binding */ getMatInputUnsupportedTypeError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ 31620);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 1830);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/text-field */ 1096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9516);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 6020);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 56748);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 84718);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 43250);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 44866);












/** @docs-private */
function getMatInputUnsupportedTypeError(type) {
  return Error(`Input type "${type}" isn't supported by matInput.`);
}

/**
 * This token is used to inject the object whose value should be set into `MatInput`. If none is
 * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
 * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
 * value to them.
 */
const MAT_INPUT_VALUE_ACCESSOR = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('MAT_INPUT_VALUE_ACCESSOR');

// Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.
const MAT_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
/** Injection token that can be used to provide the default options for the input. */
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
    _formField = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MAT_FORM_FIELD, {
      optional: true
    });
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2);
    _uid = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__._IdGenerator).getId('mat-input-');
    _previousNativeValue;
    _inputValueAccessor;
    _signalBasedValueAccessor;
    _previousPlaceholder;
    _errorStateTracker;
    _config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(MAT_INPUT_CONFIG, {
      optional: true
    });
    _cleanupIosKeyup;
    _cleanupWebkitWheel;
    /** `aria-describedby` IDs assigned by the form field. */
    _formFieldDescribedBy;
    /** Whether the component is being rendered on the server. */
    _isServer;
    /** Whether the component is a native html select. */
    _isNativeSelect;
    /** Whether the component is a textarea. */
    _isTextarea;
    /** Whether the input is inside of a form field. */
    _isInFormField;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    focused = false;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    controlType = 'mat-input';
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    autofilled = false;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
      // Browsers may not fire the blur event if the input is disabled too quickly.
      // Reset from here to ensure that the element doesn't become stuck.
      if (this.focused) {
        this.focused = false;
        this.stateChanges.next();
      }
    }
    _disabled = false;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get id() {
      return this._id;
    }
    set id(value) {
      this._id = value || this._uid;
    }
    _id;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    placeholder;
    /**
     * Name of the input.
     * @docs-private
     */
    name;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get required() {
      return this._required ?? this.ngControl?.control?.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required) ?? false;
    }
    set required(value) {
      this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
    }
    _required;
    /** Input type of the element. */
    get type() {
      return this._type;
    }
    set type(value) {
      const prevType = this._type;
      this._type = value || 'text';
      this._validateType();
      // When using Angular inputs, developers are no longer able to set the properties on the native
      // input element. To ensure that bindings for `type` work, we need to sync the setter
      // with the native property. Textarea elements don't support the type property or attribute.
      if (!this._isTextarea && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.getSupportedInputTypes)().has(this._type)) {
        this._elementRef.nativeElement.type = this._type;
      }
      if (this._type !== prevType) {
        this._ensureWheelDefaultBehavior();
      }
    }
    _type = 'text';
    /** An object used to control when error messages are shown. */
    get errorStateMatcher() {
      return this._errorStateTracker.matcher;
    }
    set errorStateMatcher(value) {
      this._errorStateTracker.matcher = value;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    userAriaDescribedBy;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
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
    /** Whether the element is readonly. */
    get readonly() {
      return this._readonly;
    }
    set readonly(value) {
      this._readonly = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
    }
    _readonly = false;
    /** Whether the input should remain interactive when it is disabled. */
    disabledInteractive;
    /** Whether the input is in an error state. */
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
      const defaultErrorStateMatcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__.ErrorStateMatcher);
      const accessor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(MAT_INPUT_VALUE_ACCESSOR, {
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
        // If no input value accessor was explicitly specified, use the element as the input value
        // accessor.
        this._inputValueAccessor = element;
      }
      this._previousNativeValue = this.value;
      // Force setter to be called in case id was not specified.
      this.id = this.id;
      // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
      // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
      // exists on iOS, we only bother to install the listener on iOS.
      if (this._platform.IOS) {
        this._ngZone.runOutsideAngular(() => {
          this._cleanupIosKeyup = this._renderer.listen(element, 'keyup', this._iOSKeyupListener);
        });
      }
      this._errorStateTracker = new _angular_material_core__WEBPACK_IMPORTED_MODULE_6__._ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
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
          // Read the value so the effect can register the dependency.
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
        // We need to re-evaluate this on every change detection cycle, because there are some
        // error triggers that we can't subscribe to (e.g. parent form submissions). This means
        // that whatever logic is in here has to be super lean or we risk destroying the performance.
        this.updateErrorState();
        // Since the input isn't a `ControlValueAccessor`, we don't have a good way of knowing when
        // the disabled state has changed. We can't use the `ngControl.statusChanges`, because it
        // won't fire if the input is disabled with `emitEvents = false`, despite the input becoming
        // disabled.
        if (this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled) {
          this.disabled = this.ngControl.disabled;
          this.stateChanges.next();
        }
      }
      // We need to dirty-check the native element's value, because there are some cases where
      // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
      // updating the value using `emitEvent: false`).
      this._dirtyCheckNativeValue();
      // We need to dirty-check and set the placeholder attribute ourselves, because whether it's
      // present or not depends on a query which is prone to "changed after checked" errors.
      this._dirtyCheckPlaceholder();
    }
    /** Focuses the input. */
    focus(options) {
      this._elementRef.nativeElement.focus(options);
    }
    /** Refreshes the error state of the input. */
    updateErrorState() {
      this._errorStateTracker.updateErrorState();
    }
    /** Callback for the cases where the focused state of the input changes. */
    _focusChanged(isFocused) {
      if (isFocused === this.focused) {
        return;
      }
      if (!this._isNativeSelect && isFocused && this.disabled && this.disabledInteractive) {
        const element = this._elementRef.nativeElement;
        // Focusing an input that has text will cause all the text to be selected. Clear it since
        // the user won't be able to change it. This is based on the internal implementation.
        if (element.type === 'number') {
          // setSelectionRange doesn't work on number inputs so it needs to be set briefly to text.
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
    _onInput() {
      // This is a noop function and is used to let Angular know whenever the value changes.
      // Angular will run a new change detection each time the `input` event has been dispatched.
      // It's necessary that Angular recognizes the value change, because when floatingLabel
      // is set to false and Angular forms aren't used, the placeholder won't recognize the
      // value changes and will not disappear.
      // Listening to the input event wouldn't be necessary when the input is using the
      // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
    }
    /** Does some manual dirty checking on the native input `value` property. */
    _dirtyCheckNativeValue() {
      const newValue = this._elementRef.nativeElement.value;
      if (this._previousNativeValue !== newValue) {
        this._previousNativeValue = newValue;
        this.stateChanges.next();
      }
    }
    /** Does some manual dirty checking on the native input `placeholder` attribute. */
    _dirtyCheckPlaceholder() {
      const placeholder = this._getPlaceholder();
      if (placeholder !== this._previousPlaceholder) {
        const element = this._elementRef.nativeElement;
        this._previousPlaceholder = placeholder;
        placeholder ? element.setAttribute('placeholder', placeholder) : element.removeAttribute('placeholder');
      }
    }
    /** Gets the current placeholder of the form field. */
    _getPlaceholder() {
      return this.placeholder || null;
    }
    /** Make sure the input is a supported type. */
    _validateType() {
      if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatInputUnsupportedTypeError(this._type);
      }
    }
    /** Checks whether the input type is one of the types that are never empty. */
    _isNeverEmpty() {
      return this._neverEmptyInputTypes.indexOf(this._type) > -1;
    }
    /** Checks whether the input is invalid based on the native validation. */
    _isBadInput() {
      // The `validity` property won't be present on platform-server.
      let validity = this._elementRef.nativeElement.validity;
      return validity && validity.badInput;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get empty() {
      return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get shouldLabelFloat() {
      if (this._isNativeSelect) {
        // For a single-selection `<select>`, the label should float when the selected option has
        // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
        // overlapping the label with the options.
        const selectElement = this._elementRef.nativeElement;
        const firstOption = selectElement.options[0];
        // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
        // -1 if the `value` is set to something, that isn't in the list of options, at a later point.
        return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
      } else {
        return this.focused && !this.disabled || !this.empty;
      }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    setDescribedByIds(ids) {
      const element = this._elementRef.nativeElement;
      const existingDescribedBy = element.getAttribute('aria-describedby');
      let toAssign;
      // In some cases there might be some `aria-describedby` IDs that were assigned directly,
      // like by the `AriaDescriber` (see #30011). Attempt to preserve them by taking the previous
      // attribute value and filtering out the IDs that came from the previous `setDescribedByIds`
      // call. Note the `|| ids` here allows us to avoid duplicating IDs on the first render.
      if (existingDescribedBy) {
        const exclude = this._formFieldDescribedBy || ids;
        toAssign = ids.concat(existingDescribedBy.split(' ').filter(id => id && !exclude.includes(id)));
      } else {
        toAssign = ids;
      }
      this._formFieldDescribedBy = ids;
      if (toAssign.length) {
        element.setAttribute('aria-describedby', toAssign.join(' '));
      } else {
        element.removeAttribute('aria-describedby');
      }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    onContainerClick() {
      // Do not re-focus the input element if the element is already focused. Otherwise it can happen
      // that someone clicks on a time input and the cursor resets to the "hours" field while the
      // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
      if (!this.focused) {
        this.focus();
      }
    }
    /** Whether the form control is a native select that is displayed inline. */
    _isInlineSelect() {
      const element = this._elementRef.nativeElement;
      return this._isNativeSelect && (element.multiple || element.size > 1);
    }
    _iOSKeyupListener = event => {
      const el = event.target;
      // Note: We specifically check for 0, rather than `!el.selectionStart`, because the two
      // indicate different things. If the value is 0, it means that the caret is at the start
      // of the input, whereas a value of `null` means that the input doesn't support
      // manipulating the selection range. Inputs that don't support setting the selection range
      // will throw an error so we want to avoid calling `setSelectionRange` on them. See:
      // https://html.spec.whatwg.org/multipage/input.html#do-not-apply
      if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
        // Note: Just setting `0, 0` doesn't fix the issue. Setting
        // `1, 1` fixes it for the first time that you type text and
        // then hold delete. Toggling to `1, 1` and then back to
        // `0, 0` seems to completely fix it.
        el.setSelectionRange(1, 1);
        el.setSelectionRange(0, 0);
      }
    };
    _webkitBlinkWheelListener = () => {
      // This is a noop function and is used to enable mouse wheel input
      // on number inputs
      // on blink and webkit browsers.
    };
    /**
     * In blink and webkit browsers a focused number input does not increment or decrement its value
     * on mouse wheel interaction unless a wheel event listener is attached to it or one of its
     * ancestors or a passive wheel listener is attached somewhere in the DOM. For example: Hitting
     * a tooltip once enables the mouse wheel input for all number inputs as long as it exists. In
     * order to get reliable and intuitive behavior we apply a wheel event on our own thus making
     * sure increment and decrement by mouse wheel works every time.
     * @docs-private
     */
    _ensureWheelDefaultBehavior() {
      this._cleanupWebkitWheel?.();
      if (this._type === 'number' && (this._platform.BLINK || this._platform.WEBKIT)) {
        this._cleanupWebkitWheel = this._renderer.listen(this._elementRef.nativeElement, 'wheel', this._webkitBlinkWheelListener);
      }
    }
    /** Gets the value to set on the `readonly` attribute. */
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
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("id", ctx.id)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
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
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldControl,
        useExisting: MatInput
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
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
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatCommonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__.TextFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatCommonModule]
    });
  }
  return MatInputModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=5541.js.map