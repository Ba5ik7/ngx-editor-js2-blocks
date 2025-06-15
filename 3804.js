(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[3804],{

/***/ 53804:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/radio.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_RADIO_DEFAULT_OPTIONS: () => (/* binding */ MAT_RADIO_DEFAULT_OPTIONS),
/* harmony export */   MAT_RADIO_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ MAT_RADIO_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   MAT_RADIO_GROUP: () => (/* binding */ MAT_RADIO_GROUP),
/* harmony export */   MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR: () => (/* binding */ MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR),
/* harmony export */   MatRadioButton: () => (/* binding */ MatRadioButton),
/* harmony export */   MatRadioChange: () => (/* binding */ MatRadioChange),
/* harmony export */   MatRadioGroup: () => (/* binding */ MatRadioGroup),
/* harmony export */   MatRadioModule: () => (/* binding */ MatRadioModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ 6020);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ 35748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9516);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 56748);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 84718);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/private */ 77824);








/** Change event object emitted by radio button and radio group. */
const _c0 = ["input"];
const _c1 = ["formField"];
const _c2 = ["*"];
class MatRadioChange {
  source;
  value;
  constructor(/** The radio button that emits the change event. */
  source, /** The value of the radio button. */
  value) {
    this.source = source;
    this.value = value;
  }
}
/**
 * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * @docs-private
 */
const MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => MatRadioGroup),
  multi: true
};
/**
 * Injection token that can be used to inject instances of `MatRadioGroup`. It serves as
 * alternative token to the actual `MatRadioGroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_RADIO_GROUP = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('MatRadioGroup');
const MAT_RADIO_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('mat-radio-default-options', {
  providedIn: 'root',
  factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});
function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: 'accent',
    disabledInteractive: false
  };
}
/**
 * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
 */
let MatRadioGroup = /*#__PURE__*/(() => {
  class MatRadioGroup {
    _changeDetector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
    /** Selected value for the radio group. */
    _value = null;
    /** The HTML name attribute applied to radio buttons in this group. */
    _name = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__._IdGenerator).getId('mat-radio-group-');
    /** The currently selected radio button. Should match value. */
    _selected = null;
    /** Whether the `value` has been set to its initial value. */
    _isInitialized = false;
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
    _labelPosition = 'after';
    /** Whether the radio group is disabled. */
    _disabled = false;
    /** Whether the radio group is required. */
    _required = false;
    /** Subscription to changes in amount of radio buttons. */
    _buttonChanges;
    /** The method to be called in order to update ngModel */
    _controlValueAccessorChangeFn = () => {};
    /**
     * onTouch function registered via registerOnTouch (ControlValueAccessor).
     * @docs-private
     */
    onTouched = () => {};
    /**
     * Event emitted when the group value changes.
     * Change events are only emitted when the value changes due to user interaction with
     * a radio button (the same behavior as `<input type-"radio">`).
     */
    change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /** Child radio buttons. */
    _radios;
    /**
     * Theme color of the radio buttons in the group. This API is supported in M2
     * themes only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.io/components/radio/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.io/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    color;
    /** Name of the radio button group. All radio buttons inside this group will use this name. */
    get name() {
      return this._name;
    }
    set name(value) {
      this._name = value;
      this._updateRadioButtonNames();
    }
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
    get labelPosition() {
      return this._labelPosition;
    }
    set labelPosition(v) {
      this._labelPosition = v === 'before' ? 'before' : 'after';
      this._markRadiosForCheck();
    }
    /**
     * Value for the radio-group. Should equal the value of the selected radio button if there is
     * a corresponding radio button with a matching value. If there is not such a corresponding
     * radio button, this value persists to be applied in case a new radio button is added with a
     * matching value.
     */
    get value() {
      return this._value;
    }
    set value(newValue) {
      if (this._value !== newValue) {
        // Set this before proceeding to ensure no circular loop occurs with selection.
        this._value = newValue;
        this._updateSelectedRadioFromValue();
        this._checkSelectedRadioButton();
      }
    }
    _checkSelectedRadioButton() {
      if (this._selected && !this._selected.checked) {
        this._selected.checked = true;
      }
    }
    /**
     * The currently selected radio button. If set to a new radio button, the radio group value
     * will be updated to match the new selected button.
     */
    get selected() {
      return this._selected;
    }
    set selected(selected) {
      this._selected = selected;
      this.value = selected ? selected.value : null;
      this._checkSelectedRadioButton();
    }
    /** Whether the radio group is disabled */
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
      this._markRadiosForCheck();
    }
    /** Whether the radio group is required */
    get required() {
      return this._required;
    }
    set required(value) {
      this._required = value;
      this._markRadiosForCheck();
    }
    /** Whether buttons in the group should be interactive while they're disabled. */
    get disabledInteractive() {
      return this._disabledInteractive;
    }
    set disabledInteractive(value) {
      this._disabledInteractive = value;
      this._markRadiosForCheck();
    }
    _disabledInteractive = false;
    constructor() {}
    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     */
    ngAfterContentInit() {
      // Mark this component as initialized in AfterContentInit because the initial value can
      // possibly be set by NgModel on MatRadioGroup, and it is possible that the OnInit of the
      // NgModel occurs *after* the OnInit of the MatRadioGroup.
      this._isInitialized = true;
      // Clear the `selected` button when it's destroyed since the tabindex of the rest of the
      // buttons depends on it. Note that we don't clear the `value`, because the radio button
      // may be swapped out with a similar one and there are some internal apps that depend on
      // that behavior.
      this._buttonChanges = this._radios.changes.subscribe(() => {
        if (this.selected && !this._radios.find(radio => radio === this.selected)) {
          this._selected = null;
        }
      });
    }
    ngOnDestroy() {
      this._buttonChanges?.unsubscribe();
    }
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
    _touch() {
      if (this.onTouched) {
        this.onTouched();
      }
    }
    _updateRadioButtonNames() {
      if (this._radios) {
        this._radios.forEach(radio => {
          radio.name = this.name;
          radio._markForCheck();
        });
      }
    }
    /** Updates the `selected` radio button from the internal _value state. */
    _updateSelectedRadioFromValue() {
      // If the value already matches the selected radio, do nothing.
      const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
      if (this._radios && !isAlreadySelected) {
        this._selected = null;
        this._radios.forEach(radio => {
          radio.checked = this.value === radio.value;
          if (radio.checked) {
            this._selected = radio;
          }
        });
      }
    }
    /** Dispatch change event with current selection and group value. */
    _emitChangeEvent() {
      if (this._isInitialized) {
        this.change.emit(new MatRadioChange(this._selected, this._value));
      }
    }
    _markRadiosForCheck() {
      if (this._radios) {
        this._radios.forEach(radio => radio._markForCheck());
      }
    }
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    writeValue(value) {
      this.value = value;
      this._changeDetector.markForCheck();
    }
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnChange(fn) {
      this._controlValueAccessorChangeFn = fn;
    }
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the control should be disabled.
     */
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
      this._changeDetector.markForCheck();
    }
    static ɵfac = function MatRadioGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatRadioGroup)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatRadioGroup,
      selectors: [["mat-radio-group"]],
      contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatRadioButton, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._radios = _t);
        }
      },
      hostAttrs: ["role", "radiogroup", 1, "mat-mdc-radio-group"],
      inputs: {
        color: "color",
        name: "name",
        labelPosition: "labelPosition",
        value: "value",
        selected: "selected",
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
        required: [2, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute]
      },
      outputs: {
        change: "change"
      },
      exportAs: ["matRadioGroup"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputTransformsFeature"]]
    });
  }
  return MatRadioGroup;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatRadioButton = /*#__PURE__*/(() => {
  class MatRadioButton {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    _changeDetector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
    _focusMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__.FocusMonitor);
    _radioDispatcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.UniqueSelectionDispatcher);
    _defaultOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(MAT_RADIO_DEFAULT_OPTIONS, {
      optional: true
    });
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone);
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2);
    _uniqueId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__._IdGenerator).getId('mat-radio-');
    _cleanupClick;
    /** The unique ID for the radio button. */
    id = this._uniqueId;
    /** Analog to HTML 'name' attribute used to group radios for unique selection. */
    name;
    /** Used to set the 'aria-label' attribute on the underlying input element. */
    ariaLabel;
    /** The 'aria-labelledby' attribute takes precedence as the element's text alternative. */
    ariaLabelledby;
    /** The 'aria-describedby' attribute is read after the element's label and field type. */
    ariaDescribedby;
    /** Whether ripples are disabled inside the radio button */
    disableRipple = false;
    /** Tabindex of the radio button. */
    tabIndex = 0;
    /** Whether this radio button is checked. */
    get checked() {
      return this._checked;
    }
    set checked(value) {
      if (this._checked !== value) {
        this._checked = value;
        if (value && this.radioGroup && this.radioGroup.value !== this.value) {
          this.radioGroup.selected = this;
        } else if (!value && this.radioGroup && this.radioGroup.value === this.value) {
          // When unchecking the selected radio button, update the selected radio
          // property on the group.
          this.radioGroup.selected = null;
        }
        if (value) {
          // Notify all radio buttons with the same name to un-check.
          this._radioDispatcher.notify(this.id, this.name);
        }
        this._changeDetector.markForCheck();
      }
    }
    /** The value of this radio button. */
    get value() {
      return this._value;
    }
    set value(value) {
      if (this._value !== value) {
        this._value = value;
        if (this.radioGroup !== null) {
          if (!this.checked) {
            // Update checked when the value changed to match the radio group's value
            this.checked = this.radioGroup.value === value;
          }
          if (this.checked) {
            this.radioGroup.selected = this;
          }
        }
      }
    }
    /** Whether the label should appear after or before the radio button. Defaults to 'after' */
    get labelPosition() {
      return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || 'after';
    }
    set labelPosition(value) {
      this._labelPosition = value;
    }
    _labelPosition;
    /** Whether the radio button is disabled. */
    get disabled() {
      return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
    }
    set disabled(value) {
      this._setDisabled(value);
    }
    /** Whether the radio button is required. */
    get required() {
      return this._required || this.radioGroup && this.radioGroup.required;
    }
    set required(value) {
      this._required = value;
    }
    /**
     * Theme color of the radio button. This API is supported in M2 themes only, it
     * has no effect in M3 themes. For color customization in M3, see https://material.angular.io/components/radio/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.io/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    get color() {
      // As per M2 design specifications the selection control radio should use the accent color
      // palette by default. https://m2.material.io/components/radio-buttons#specs
      return this._color || this.radioGroup && this.radioGroup.color || this._defaultOptions && this._defaultOptions.color || 'accent';
    }
    set color(newValue) {
      this._color = newValue;
    }
    _color;
    /** Whether the radio button should remain interactive when it is disabled. */
    get disabledInteractive() {
      return this._disabledInteractive || this.radioGroup !== null && this.radioGroup.disabledInteractive;
    }
    set disabledInteractive(value) {
      this._disabledInteractive = value;
    }
    _disabledInteractive;
    /**
     * Event emitted when the checked state of this radio button changes.
     * Change events are only emitted when the value changes due to user interaction with
     * the radio button (the same behavior as `<input type-"radio">`).
     */
    change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /** The parent radio group. May or may not be present. */
    radioGroup;
    /** ID of the native input element inside `<mat-radio-button>` */
    get inputId() {
      return `${this.id || this._uniqueId}-input`;
    }
    /** Whether this radio is checked. */
    _checked = false;
    /** Whether this radio is disabled. */
    _disabled;
    /** Whether this radio is required. */
    _required;
    /** Value assigned to this radio. */
    _value = null;
    /** Unregister function for _radioDispatcher */
    _removeUniqueSelectionListener = () => {};
    /** Previous value of the input's tabindex. */
    _previousTabIndex;
    /** The native `<input type=radio>` element */
    _inputElement;
    /** Trigger elements for the ripple events. */
    _rippleTrigger;
    /** Whether animations are disabled. */
    _noopAnimations;
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector);
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_5__._CdkPrivateStyleLoader).load(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__._StructuralStylesLoader);
      const radioGroup = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(MAT_RADIO_GROUP, {
        optional: true
      });
      const animationMode = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ANIMATION_MODULE_TYPE, {
        optional: true
      });
      const tabIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(new _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostAttributeToken('tabindex'), {
        optional: true
      });
      // Assertions. Ideally these should be stripped out by the compiler.
      // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
      this.radioGroup = radioGroup;
      this._noopAnimations = animationMode === 'NoopAnimations';
      this._disabledInteractive = this._defaultOptions?.disabledInteractive ?? false;
      if (tabIndex) {
        this.tabIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.numberAttribute)(tabIndex, 0);
      }
    }
    /** Focuses the radio button. */
    focus(options, origin) {
      if (origin) {
        this._focusMonitor.focusVia(this._inputElement, origin, options);
      } else {
        this._inputElement.nativeElement.focus(options);
      }
    }
    /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     */
    _markForCheck() {
      // When group value changes, the button will not be notified. Use `markForCheck` to explicit
      // update radio button's status
      this._changeDetector.markForCheck();
    }
    ngOnInit() {
      if (this.radioGroup) {
        // If the radio is inside a radio group, determine if it should be checked
        this.checked = this.radioGroup.value === this._value;
        if (this.checked) {
          this.radioGroup.selected = this;
        }
        // Copy name from parent radio group
        this.name = this.radioGroup.name;
      }
      this._removeUniqueSelectionListener = this._radioDispatcher.listen((id, name) => {
        if (id !== this.id && name === this.name) {
          this.checked = false;
        }
      });
    }
    ngDoCheck() {
      this._updateTabIndex();
    }
    ngAfterViewInit() {
      this._updateTabIndex();
      this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
        if (!focusOrigin && this.radioGroup) {
          this.radioGroup._touch();
        }
      });
      // We bind this outside of the zone, because:
      // 1. Its logic is completely DOM-related so we can avoid some change detections.
      // 2. There appear to be some internal tests that break when this triggers a change detection.
      this._ngZone.runOutsideAngular(() => {
        this._cleanupClick = this._renderer.listen(this._inputElement.nativeElement, 'click', this._onInputClick);
      });
    }
    ngOnDestroy() {
      this._cleanupClick?.();
      this._focusMonitor.stopMonitoring(this._elementRef);
      this._removeUniqueSelectionListener();
    }
    /** Dispatch change event with current value. */
    _emitChangeEvent() {
      this.change.emit(new MatRadioChange(this, this._value));
    }
    _isRippleDisabled() {
      return this.disableRipple || this.disabled;
    }
    /** Triggered when the radio button receives an interaction from the user. */
    _onInputInteraction(event) {
      // We always have to stop propagation on the change event.
      // Otherwise the change event, from the input element, will bubble up and
      // emit its event object to the `change` output.
      event.stopPropagation();
      if (!this.checked && !this.disabled) {
        const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
        this.checked = true;
        this._emitChangeEvent();
        if (this.radioGroup) {
          this.radioGroup._controlValueAccessorChangeFn(this.value);
          if (groupValueChanged) {
            this.radioGroup._emitChangeEvent();
          }
        }
      }
    }
    /** Triggered when the user clicks on the touch target. */
    _onTouchTargetClick(event) {
      this._onInputInteraction(event);
      if (!this.disabled || this.disabledInteractive) {
        // Normally the input should be focused already, but if the click
        // comes from the touch target, then we might have to focus it ourselves.
        this._inputElement?.nativeElement.focus();
      }
    }
    /** Sets the disabled state and marks for check if a change occurred. */
    _setDisabled(value) {
      if (this._disabled !== value) {
        this._disabled = value;
        this._changeDetector.markForCheck();
      }
    }
    /** Called when the input is clicked. */
    _onInputClick = event => {
      // If the input is disabled while interactive, we need to prevent the
      // selection from happening in this event handler. Note that even though
      // this happens on `click` events, the logic applies when the user is
      // navigating with the keyboard as well. An alternative way of doing
      // this is by resetting the `checked` state in the `change` callback but
      // it isn't optimal, because it can allow a pre-checked disabled button
      // to be un-checked. This approach seems to cover everything.
      if (this.disabled && this.disabledInteractive) {
        event.preventDefault();
      }
    };
    /** Gets the tabindex for the underlying input element. */
    _updateTabIndex() {
      const group = this.radioGroup;
      let value;
      // Implement a roving tabindex if the button is inside a group. For most cases this isn't
      // necessary, because the browser handles the tab order for inputs inside a group automatically,
      // but we need an explicitly higher tabindex for the selected button in order for things like
      // the focus trap to pick it up correctly.
      if (!group || !group.selected || this.disabled) {
        value = this.tabIndex;
      } else {
        value = group.selected === this ? this.tabIndex : -1;
      }
      if (value !== this._previousTabIndex) {
        // We have to set the tabindex directly on the DOM node, because it depends on
        // the selected state which is prone to "changed after checked errors".
        const input = this._inputElement?.nativeElement;
        if (input) {
          input.setAttribute('tabindex', value + '');
          this._previousTabIndex = value;
          // Wait for any pending tabindex changes to be applied
          (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.afterNextRender)(() => {
            queueMicrotask(() => {
              // The radio group uses a "selection follows focus" pattern for tab management, so if this
              // radio button is currently focused and another radio button in the group becomes
              // selected, we should move focus to the newly selected radio button to maintain
              // consistency between the focused and selected states.
              if (group && group.selected && group.selected !== this && document.activeElement === input) {
                group.selected?._inputElement.nativeElement.focus();
                // If this radio button still has focus, the selected one must be disabled. In this
                // case the radio group as a whole should lose focus.
                if (document.activeElement === input) {
                  this._inputElement.nativeElement.blur();
                }
              }
            });
          }, {
            injector: this._injector
          });
        }
      }
    }
    static ɵfac = function MatRadioButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatRadioButton)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MatRadioButton,
      selectors: [["mat-radio-button"]],
      viewQuery: function MatRadioButton_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._rippleTrigger = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-radio-button"],
      hostVars: 19,
      hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function MatRadioButton_focus_HostBindingHandler() {
            return ctx._inputElement.nativeElement.focus();
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("tabindex", null)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("mat-mdc-radio-checked", ctx.checked)("mat-mdc-radio-disabled", ctx.disabled)("mat-mdc-radio-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        id: "id",
        name: "name",
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
        disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
        tabIndex: [2, "tabIndex", "tabIndex", value => value == null ? 0 : (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.numberAttribute)(value)],
        checked: [2, "checked", "checked", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
        value: "value",
        labelPosition: "labelPosition",
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
        required: [2, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
        color: "color",
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute]
      },
      outputs: {
        change: "change"
      },
      exportAs: ["matRadioButton"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputTransformsFeature"]],
      ngContentSelectors: _c2,
      decls: 13,
      vars: 17,
      consts: [["formField", ""], ["input", ""], ["mat-internal-form-field", "", 3, "labelPosition"], [1, "mdc-radio"], [1, "mat-mdc-radio-touch-target", 3, "click"], ["type", "radio", 1, "mdc-radio__native-control", 3, "change", "id", "checked", "disabled", "required"], [1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mdc-label", 3, "for"]],
      template: function MatRadioButton_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2, 0)(2, "div", 3)(3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatRadioButton_Template_div_click_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx._onTouchTargetClick($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 5, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function MatRadioButton_Template_input_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx._onInputInteraction($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("labelPosition", ctx.labelPosition);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mdc-radio--disabled", ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRippleTrigger", ctx._rippleTrigger.nativeElement)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", ctx.inputId);
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__._MatInternalFormField],
      styles: [".mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled])~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px);top:calc(-1*(var(--mdc-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-sys-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before{content:\"\"}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display, block)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatRadioButton;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatRadioModule = /*#__PURE__*/(() => {
  class MatRadioModule {
    static ɵfac = function MatRadioModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatRadioModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: MatRadioModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule]
    });
  }
  return MatRadioModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=3804.js.map