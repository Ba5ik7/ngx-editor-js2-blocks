(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[4646],{

/***/ 6423:
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/date-formats-K6TQue-Y.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ DateAdapter),
/* harmony export */   M: () => (/* binding */ MAT_DATE_LOCALE),
/* harmony export */   a: () => (/* binding */ MAT_DATE_FORMATS),
/* harmony export */   b: () => (/* binding */ MAT_DATE_LOCALE_FACTORY)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);



/** InjectionToken for datepicker that can be used to override default locale code. */
const MAT_DATE_LOCALE = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DATE_LOCALE', {
  providedIn: 'root',
  factory: MAT_DATE_LOCALE_FACTORY
});
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
function MAT_DATE_LOCALE_FACTORY() {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID);
}
const NOT_IMPLEMENTED = 'Method not implemented';
/** Adapts type `D` to be usable as a date by cdk-based components that work with dates. */
class DateAdapter {
  /** The locale to use for all dates. */
  locale;
  _localeChanges = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  /** A stream that emits when the locale changes. */
  localeChanges = this._localeChanges;
  /**
   * Sets the time of one date to the time of another.
   * @param target Date whose time will be set.
   * @param hours New hours to set on the date object.
   * @param minutes New minutes to set on the date object.
   * @param seconds New seconds to set on the date object.
   */
  setTime(target, hours, minutes, seconds) {
    throw new Error(NOT_IMPLEMENTED);
  }
  /**
   * Gets the hours component of the given date.
   * @param date The date to extract the hours from.
   */
  getHours(date) {
    throw new Error(NOT_IMPLEMENTED);
  }
  /**
   * Gets the minutes component of the given date.
   * @param date The date to extract the minutes from.
   */
  getMinutes(date) {
    throw new Error(NOT_IMPLEMENTED);
  }
  /**
   * Gets the seconds component of the given date.
   * @param date The date to extract the seconds from.
   */
  getSeconds(date) {
    throw new Error(NOT_IMPLEMENTED);
  }
  /**
   * Parses a date with a specific time from a user-provided value.
   * @param value The value to parse.
   * @param parseFormat The expected format of the value being parsed
   *     (type is implementation-dependent).
   */
  parseTime(value, parseFormat) {
    throw new Error(NOT_IMPLEMENTED);
  }
  /**
   * Adds an amount of seconds to the specified date.
   * @param date Date to which to add the seconds.
   * @param amount Amount of seconds to add to the date.
   */
  addSeconds(date, amount) {
    throw new Error(NOT_IMPLEMENTED);
  }
  /**
   * Given a potential date object, returns that same date object if it is
   * a valid date, or `null` if it's not a valid date.
   * @param obj The object to check.
   * @returns A date or `null`.
   */
  getValidDateOrNull(obj) {
    return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
  }
  /**
   * Attempts to deserialize a value to a valid date object. This is different from parsing in that
   * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
   * string). The default implementation does not allow any deserialization, it simply checks that
   * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
   * method on all of its `@Input()` properties that accept dates. It is therefore possible to
   * support passing values from your backend directly to these properties by overriding this method
   * to also deserialize the format used by your backend.
   * @param value The value to be deserialized into a date object.
   * @returns The deserialized date object, either a valid date, null if the value can be
   *     deserialized into a null date (e.g. the empty string), or an invalid date.
   */
  deserialize(value) {
    if (value == null || this.isDateInstance(value) && this.isValid(value)) {
      return value;
    }
    return this.invalid();
  }
  /**
   * Sets the locale used for all dates.
   * @param locale The new locale.
   */
  setLocale(locale) {
    this.locale = locale;
    this._localeChanges.next();
  }
  /**
   * Compares two dates.
   * @param first The first date to compare.
   * @param second The second date to compare.
   * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
   *     a number greater than 0 if the first date is later.
   */
  compareDate(first, second) {
    return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
  }
  /**
   * Compares the time values of two dates.
   * @param first First date to compare.
   * @param second Second date to compare.
   * @returns 0 if the times are equal, a number less than 0 if the first time is earlier,
   *     a number greater than 0 if the first time is later.
   */
  compareTime(first, second) {
    return this.getHours(first) - this.getHours(second) || this.getMinutes(first) - this.getMinutes(second) || this.getSeconds(first) - this.getSeconds(second);
  }
  /**
   * Checks if two dates are equal.
   * @param first The first date to check.
   * @param second The second date to check.
   * @returns Whether the two dates are equal.
   *     Null dates are considered equal to other null dates.
   */
  sameDate(first, second) {
    if (first && second) {
      let firstValid = this.isValid(first);
      let secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareDate(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }
  /**
   * Checks if the times of two dates are equal.
   * @param first The first date to check.
   * @param second The second date to check.
   * @returns Whether the times of the two dates are equal.
   *     Null dates are considered equal to other null dates.
   */
  sameTime(first, second) {
    if (first && second) {
      const firstValid = this.isValid(first);
      const secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareTime(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }
  /**
   * Clamp the given date between min and max dates.
   * @param date The date to clamp.
   * @param min The minimum value to allow. If null or omitted no min is enforced.
   * @param max The maximum value to allow. If null or omitted no max is enforced.
   * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
   *     otherwise `date`.
   */
  clampDate(date, min, max) {
    if (min && this.compareDate(date, min) < 0) {
      return min;
    }
    if (max && this.compareDate(date, max) > 0) {
      return max;
    }
    return date;
  }
}
const MAT_DATE_FORMATS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-date-formats');


/***/ }),

/***/ 8126:
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/common-module-cKSwHniA.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MatCommonModule),
/* harmony export */   a: () => (/* binding */ MATERIAL_SANITY_CHECKS)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ 56593);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ 48073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27940);





/**
 * Injection token that configures whether the Material sanity checks are enabled.
 * @deprecated No longer used and will be removed.
 * @breaking-change 21.0.0
 */
const MATERIAL_SANITY_CHECKS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('mat-sanity-checks', {
  providedIn: 'root',
  factory: () => true
});
/**
 * Module that captures anything that should be loaded and/or run for *all* Angular Material
 * components. This includes Bidi, etc.
 *
 * This module should be imported to each top-level component module (e.g., MatTabsModule).
 * @deprecated No longer used and will be removed.
 * @breaking-change 21.0.0
 */
let MatCommonModule = /*#__PURE__*/(() => {
  class MatCommonModule {
    constructor() {
      // While A11yModule also does this, we repeat it here to avoid importing A11yModule
      // in MatCommonModule.
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__.HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
    }
    static ɵfac = function MatCommonModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatCommonModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: MatCommonModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__.BidiModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__.BidiModule]
    });
  }
  return MatCommonModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 16364:
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/option-BzhYL_xC.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MatOption),
/* harmony export */   _: () => (/* binding */ _countGroupLabelsBeforeOption),
/* harmony export */   a: () => (/* binding */ MatOptgroup),
/* harmony export */   b: () => (/* binding */ _getOptionScrollPosition),
/* harmony export */   c: () => (/* binding */ MAT_OPTION_PARENT_COMPONENT),
/* harmony export */   d: () => (/* binding */ MAT_OPTGROUP),
/* harmony export */   e: () => (/* binding */ MatOptionSelectionChange)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ 56593);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ 48215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _ripple_BYgV4oZC_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ripple-BYgV4oZC.mjs */ 29968);
/* harmony import */ var _pseudo_checkbox_DDmgx3P4_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pseudo-checkbox-DDmgx3P4.mjs */ 99125);
/* harmony import */ var _structural_styles_CObeNzjn_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./structural-styles-CObeNzjn.mjs */ 79735);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/private */ 98959);










/**
 * Injection token used to provide the parent component to options.
 */
const _c0 = ["*", [["mat-option"], ["ng-container"]]];
const _c1 = ["*", "mat-option, ng-container"];
const _c2 = ["text"];
const _c3 = [[["mat-icon"]], "*"];
const _c4 = ["mat-icon", "*"];
function MatOption_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-pseudo-checkbox", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.disabled)("state", ctx_r0.selected ? "checked" : "unchecked");
  }
}
function MatOption_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-pseudo-checkbox", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.disabled);
  }
}
function MatOption_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", ctx_r0.group.label, ")");
  }
}
const MAT_OPTION_PARENT_COMPONENT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('MAT_OPTION_PARENT_COMPONENT');

// Notes on the accessibility pattern used for `mat-optgroup`.
// The option group has two different "modes": regular and inert. The regular mode uses the
// recommended a11y pattern which has `role="group"` on the group element with `aria-labelledby`
// pointing to the label. This works for `mat-select`, but it seems to hit a bug for autocomplete
// under VoiceOver where the group doesn't get read out at all. The bug appears to be that if
// there's __any__ a11y-related attribute on the group (e.g. `role` or `aria-labelledby`),
// VoiceOver on Safari won't read it out.
// We've introduced the `inert` mode as a workaround. Under this mode, all a11y attributes are
// removed from the group, and we get the screen reader to read out the group label by mirroring it
// inside an invisible element in the option. This is sub-optimal, because the screen reader will
// repeat the group label on each navigation, whereas the default pattern only reads the group when
// the user enters a new group. The following alternate approaches were considered:
// 1. Reading out the group label using the `LiveAnnouncer` solves the problem, but we can't control
//    when the text will be read out so sometimes it comes in too late or never if the user
//    navigates quickly.
// 2. `<mat-option aria-describedby="groupLabel"` - This works on Safari, but VoiceOver in Chrome
//    won't read out the description at all.
// 3. `<mat-option aria-labelledby="optionLabel groupLabel"` - This works on Chrome, but Safari
//     doesn't read out the text at all. Furthermore, on
/**
 * Injection token that can be used to reference instances of `MatOptgroup`. It serves as
 * alternative token to the actual `MatOptgroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_OPTGROUP = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('MatOptgroup');
/**
 * Component that is used to group instances of `mat-option`.
 */
let MatOptgroup = /*#__PURE__*/(() => {
  class MatOptgroup {
    /** Label for the option group. */
    label;
    /** whether the option group is disabled. */
    disabled = false;
    /** Unique id for the underlying label. */
    _labelId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__._IdGenerator).getId('mat-optgroup-label-');
    /** Whether the group is in inert a11y mode. */
    _inert;
    constructor() {
      const parent = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(MAT_OPTION_PARENT_COMPONENT, {
        optional: true
      });
      this._inert = parent?.inertGroups ?? false;
    }
    static ɵfac = function MatOptgroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatOptgroup)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MatOptgroup,
      selectors: [["mat-optgroup"]],
      hostAttrs: [1, "mat-mdc-optgroup"],
      hostVars: 3,
      hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
        }
      },
      inputs: {
        label: "label",
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute]
      },
      exportAs: ["matOptgroup"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: MAT_OPTGROUP,
        useExisting: MatOptgroup
      }])],
      ngContentSelectors: _c1,
      decls: 5,
      vars: 4,
      consts: [["role", "presentation", 1, "mat-mdc-optgroup-label", 3, "id"], [1, "mdc-list-item__primary-text"]],
      template: function MatOptgroup_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](0, "span", 0)(1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4, 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mdc-list-item--disabled", ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomProperty"]("id", ctx._labelId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.label, " ");
        }
      },
      styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal;color:inherit}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatOptgroup;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Event object emitted by MatOption when selected or deselected. */
class MatOptionSelectionChange {
  source;
  isUserInput;
  constructor(/** Reference to the option that emitted the event. */
  source, /** Whether the change in the option's value was a result of a user action. */
  isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }
}
/**
 * Single option inside of a `<mat-select>` element.
 */
let MatOption = /*#__PURE__*/(() => {
  class MatOption {
    _element = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
    _parent = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(MAT_OPTION_PARENT_COMPONENT, {
      optional: true
    });
    group = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(MAT_OPTGROUP, {
      optional: true
    });
    _signalDisableRipple = false;
    _selected = false;
    _active = false;
    _mostRecentViewValue = '';
    /** Whether the wrapping component is in multiple selection mode. */
    get multiple() {
      return this._parent && this._parent.multiple;
    }
    /** Whether or not the option is currently selected. */
    get selected() {
      return this._selected;
    }
    /** The form value of the option. */
    value;
    /** The unique ID of the option. */
    id = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__._IdGenerator).getId('mat-option-');
    /** Whether the option is disabled. */
    get disabled() {
      return this.group && this.group.disabled || this._disabled();
    }
    set disabled(value) {
      this._disabled.set(value);
    }
    _disabled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false);
    /** Whether ripples for the option are disabled. */
    get disableRipple() {
      return this._signalDisableRipple ? this._parent.disableRipple() : !!this._parent?.disableRipple;
    }
    /** Whether to display checkmark for single-selection. */
    get hideSingleSelectionIndicator() {
      return !!(this._parent && this._parent.hideSingleSelectionIndicator);
    }
    /** Event emitted when the option is selected or deselected. */
    // tslint:disable-next-line:no-output-on-prefix
    onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /** Element containing the option's text. */
    _text;
    /** Emits when the state of the option changes and any parents have to be notified. */
    _stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    constructor() {
      const styleLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_4__._CdkPrivateStyleLoader);
      styleLoader.load(_structural_styles_CObeNzjn_mjs__WEBPACK_IMPORTED_MODULE_5__._);
      styleLoader.load(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_4__._VisuallyHiddenLoader);
      this._signalDisableRipple = !!this._parent && (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.isSignal)(this._parent.disableRipple);
    }
    /**
     * Whether or not the option is currently active and ready to be selected.
     * An active option displays styles as if it is focused, but the
     * focus is actually retained somewhere else. This comes in handy
     * for components like autocomplete where focus must remain on the input.
     */
    get active() {
      return this._active;
    }
    /**
     * The displayed value of the option. It is necessary to show the selected option in the
     * select's trigger.
     */
    get viewValue() {
      // TODO(kara): Add input property alternative for node envs.
      return (this._text?.nativeElement.textContent || '').trim();
    }
    /** Selects the option. */
    select(emitEvent = true) {
      if (!this._selected) {
        this._selected = true;
        this._changeDetectorRef.markForCheck();
        if (emitEvent) {
          this._emitSelectionChangeEvent();
        }
      }
    }
    /** Deselects the option. */
    deselect(emitEvent = true) {
      if (this._selected) {
        this._selected = false;
        this._changeDetectorRef.markForCheck();
        if (emitEvent) {
          this._emitSelectionChangeEvent();
        }
      }
    }
    /** Sets focus onto this option. */
    focus(_origin, options) {
      // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
      // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
      const element = this._getHostElement();
      if (typeof element.focus === 'function') {
        element.focus(options);
      }
    }
    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    setActiveStyles() {
      if (!this._active) {
        this._active = true;
        this._changeDetectorRef.markForCheck();
      }
    }
    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    setInactiveStyles() {
      if (this._active) {
        this._active = false;
        this._changeDetectorRef.markForCheck();
      }
    }
    /** Gets the label to be used when determining whether the option should be focused. */
    getLabel() {
      return this.viewValue;
    }
    /** Ensures the option is selected when activated from the keyboard. */
    _handleKeydown(event) {
      if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.ENTER || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.SPACE) && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.hasModifierKey)(event)) {
        this._selectViaInteraction();
        // Prevent the page from scrolling down and form submits.
        event.preventDefault();
      }
    }
    /**
     * `Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.`
     */
    _selectViaInteraction() {
      if (!this.disabled) {
        this._selected = this.multiple ? !this._selected : true;
        this._changeDetectorRef.markForCheck();
        this._emitSelectionChangeEvent(true);
      }
    }
    /** Returns the correct tabindex for the option depending on disabled state. */
    // This method is only used by `MatLegacyOption`. Keeping it here to avoid breaking the types.
    // That's because `MatLegacyOption` use `MatOption` type in a few places such as
    // `MatOptionSelectionChange`. It is safe to delete this when `MatLegacyOption` is deleted.
    _getTabIndex() {
      return this.disabled ? '-1' : '0';
    }
    /** Gets the host DOM element. */
    _getHostElement() {
      return this._element.nativeElement;
    }
    ngAfterViewChecked() {
      // Since parent components could be using the option's label to display the selected values
      // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
      // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
      // relatively cheap, however we still limit them only to selected options in order to avoid
      // hitting the DOM too often.
      if (this._selected) {
        const viewValue = this.viewValue;
        if (viewValue !== this._mostRecentViewValue) {
          if (this._mostRecentViewValue) {
            this._stateChanges.next();
          }
          this._mostRecentViewValue = viewValue;
        }
      }
    }
    ngOnDestroy() {
      this._stateChanges.complete();
    }
    /** Emits the selection change event. */
    _emitSelectionChangeEvent(isUserInput = false) {
      this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
    }
    static ɵfac = function MatOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatOption)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MatOption,
      selectors: [["mat-option"]],
      viewQuery: function MatOption_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._text = _t.first);
        }
      },
      hostAttrs: ["role", "option", 1, "mat-mdc-option", "mdc-list-item"],
      hostVars: 11,
      hostBindings: function MatOption_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatOption_click_HostBindingHandler() {
            return ctx._selectViaInteraction();
          })("keydown", function MatOption_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomProperty"]("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-selected", ctx.selected)("aria-disabled", ctx.disabled.toString());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mdc-list-item--selected", ctx.selected)("mat-mdc-option-multiple", ctx.multiple)("mat-mdc-option-active", ctx.active)("mdc-list-item--disabled", ctx.disabled);
        }
      },
      inputs: {
        value: "value",
        id: "id",
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute]
      },
      outputs: {
        onSelectionChange: "onSelectionChange"
      },
      exportAs: ["matOption"],
      ngContentSelectors: _c4,
      decls: 8,
      vars: 5,
      consts: [["text", ""], ["aria-hidden", "true", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled", "state"], [1, "mdc-list-item__primary-text"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"], [1, "cdk-visually-hidden"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-mdc-option-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"]],
      template: function MatOption_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](0, MatOption_Conditional_0_Template, 1, 2, "mat-pseudo-checkbox", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](5, MatOption_Conditional_5_Template, 1, 1, "mat-pseudo-checkbox", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](6, MatOption_Conditional_6_Template, 2, 1, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 5);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.multiple ? 0 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](!ctx.multiple && ctx.selected && !ctx.hideSingleSelectionIndicator ? 5 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.group && ctx.group._inert ? 6 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
        }
      },
      dependencies: [_pseudo_checkbox_DDmgx3P4_mjs__WEBPACK_IMPORTED_MODULE_6__.M, _ripple_BYgV4oZC_mjs__WEBPACK_IMPORTED_MODULE_7__.M],
      styles: [".mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}@media(forced-colors: active){.mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{right:auto;left:16px}}.mat-mdc-option-multiple{--mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-focus-indicator::before{content:\"\"}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatOption;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Counts the amount of option group labels that precede the specified option.
 * @param optionIndex Index of the option at which to start counting.
 * @param options Flat list of all of the options.
 * @param optionGroups Flat list of all of the option groups.
 * @docs-private
 */
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
  if (optionGroups.length) {
    let optionsArray = options.toArray();
    let groups = optionGroups.toArray();
    let groupCounter = 0;
    for (let i = 0; i < optionIndex + 1; i++) {
      if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
        groupCounter++;
      }
    }
    return groupCounter;
  }
  return 0;
}
/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * @param optionOffset Offset of the option from the top of the panel.
 * @param optionHeight Height of the options.
 * @param currentScrollPosition Current scroll position of the panel.
 * @param panelHeight Height of the panel.
 * @docs-private
 */
function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }
  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }
  return currentScrollPosition;
}


/***/ }),

/***/ 20586:
/*!**********************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/internal-form-field-D5iFxU6d.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _MatInternalFormField)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);



/**
 * Internal shared component used as a container in form field controls.
 * Not to be confused with `mat-form-field` which MDC calls a "text field".
 * @docs-private
 */
const _c0 = ["mat-internal-form-field", ""];
const _c1 = ["*"];
let _MatInternalFormField = /*#__PURE__*/(() => {
  class _MatInternalFormField {
    /** Position of the label relative to the content. */
    labelPosition;
    static ɵfac = function _MatInternalFormField_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatInternalFormField)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: _MatInternalFormField,
      selectors: [["div", "mat-internal-form-field", ""]],
      hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
      hostVars: 2,
      hostBindings: function _MatInternalFormField_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-form-field--align-end", ctx.labelPosition === "before");
        }
      },
      inputs: {
        labelPosition: "labelPosition"
      },
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 1,
      vars: 0,
      template: function _MatInternalFormField_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return _MatInternalFormField;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 21072:
/*!*************************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/pseudo-checkbox-module-4F8Up4PL.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MatPseudoCheckboxModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-module-cKSwHniA.mjs */ 8126);




let MatPseudoCheckboxModule = /*#__PURE__*/(() => {
  class MatPseudoCheckboxModule {
    static ɵfac = function MatPseudoCheckboxModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatPseudoCheckboxModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatPseudoCheckboxModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_1__.M]
    });
  }
  return MatPseudoCheckboxModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 27295:
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/error-options-DCNQlTOA.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ ErrorStateMatcher),
/* harmony export */   S: () => (/* binding */ ShowOnDirtyErrorStateMatcher)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);



/** Error state matcher that matches when a control is invalid and dirty. */
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
/** Provider that defines how form controls behave with regards to displaying error messages. */
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


/***/ }),

/***/ 29968:
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/ripple-BYgV4oZC.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MatRipple),
/* harmony export */   R: () => (/* binding */ RippleRenderer),
/* harmony export */   a: () => (/* binding */ MAT_RIPPLE_GLOBAL_OPTIONS),
/* harmony export */   b: () => (/* binding */ RippleState),
/* harmony export */   c: () => (/* binding */ RippleRef),
/* harmony export */   d: () => (/* binding */ defaultRippleAnimationConfig)
/* harmony export */ });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ 49583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 56593);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 33981);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/private */ 98959);
/* harmony import */ var _animation_DfMFjxHu_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animation-DfMFjxHu.mjs */ 73388);








/** Possible states for a ripple element. */
var RippleState = /*#__PURE__*/function (RippleState) {
  RippleState[RippleState["FADING_IN"] = 0] = "FADING_IN";
  RippleState[RippleState["VISIBLE"] = 1] = "VISIBLE";
  RippleState[RippleState["FADING_OUT"] = 2] = "FADING_OUT";
  RippleState[RippleState["HIDDEN"] = 3] = "HIDDEN";
  return RippleState;
}(RippleState || {});
/**
 * Reference to a previously launched ripple element.
 */
class RippleRef {
  _renderer;
  element;
  config;
  _animationForciblyDisabledThroughCss;
  /** Current state of the ripple. */
  state = RippleState.HIDDEN;
  constructor(_renderer, /** Reference to the ripple HTML element. */
  element, /** Ripple configuration used for the ripple. */
  config, /* Whether animations are forcibly disabled for ripples through CSS. */
  _animationForciblyDisabledThroughCss = false) {
    this._renderer = _renderer;
    this.element = element;
    this.config = config;
    this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
  }
  /** Fades out the ripple element. */
  fadeOut() {
    this._renderer.fadeOutRipple(this);
  }
}

/** Options used to bind a passive capturing event. */
const passiveCapturingEventOptions$1 = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/** Manages events through delegation so that as few event handlers as possible are bound. */
class RippleEventManager {
  _events = /*#__PURE__*/new Map();
  /** Adds an event handler. */
  addHandler(ngZone, name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (handlersForEvent) {
      const handlersForElement = handlersForEvent.get(element);
      if (handlersForElement) {
        handlersForElement.add(handler);
      } else {
        handlersForEvent.set(element, new Set([handler]));
      }
    } else {
      this._events.set(name, new Map([[element, new Set([handler])]]));
      ngZone.runOutsideAngular(() => {
        document.addEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
      });
    }
  }
  /** Removes an event handler. */
  removeHandler(name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (!handlersForEvent) {
      return;
    }
    const handlersForElement = handlersForEvent.get(element);
    if (!handlersForElement) {
      return;
    }
    handlersForElement.delete(handler);
    if (handlersForElement.size === 0) {
      handlersForEvent.delete(element);
    }
    if (handlersForEvent.size === 0) {
      this._events.delete(name);
      document.removeEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
    }
  }
  /** Event handler that is bound and which dispatches the events to the different targets. */
  _delegateEventHandler = event => {
    const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event);
    if (target) {
      this._events.get(event.type)?.forEach((handlers, element) => {
        if (element === target || element.contains(target)) {
          handlers.forEach(handler => handler.handleEvent(event));
        }
      });
    }
  };
}

/**
 * Default ripple animation configuration for ripples without an explicit
 * animation config specified.
 */
const defaultRippleAnimationConfig = {
  enterDuration: 225,
  exitDuration: 150
};
/**
 * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
 * events to avoid synthetic mouse events.
 */
const ignoreMouseEventsTimeout = 800;
/** Options used to bind a passive capturing event. */
const passiveCapturingEventOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/** Events that signal that the pointer is down. */
const pointerDownEvents = ['mousedown', 'touchstart'];
/** Events that signal that the pointer is up. */
const pointerUpEvents = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
let _MatRippleStylesLoader = /*#__PURE__*/(() => {
  class _MatRippleStylesLoader {
    static ɵfac = function _MatRippleStylesLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatRippleStylesLoader)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: _MatRippleStylesLoader,
      selectors: [["ng-component"]],
      hostAttrs: ["mat-ripple-style-loader", ""],
      decls: 0,
      vars: 0,
      template: function _MatRippleStylesLoader_Template(rf, ctx) {},
      styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return _MatRippleStylesLoader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * @docs-private
 */
class RippleRenderer {
  _target;
  _ngZone;
  _platform;
  /** Element where the ripples are being added to. */
  _containerElement;
  /** Element which triggers the ripple elements on mouse events. */
  _triggerElement;
  /** Whether the pointer is currently down or not. */
  _isPointerDown = false;
  /**
   * Map of currently active ripple references.
   * The ripple reference is mapped to its element event listeners.
   * The reason why `| null` is used is that event listeners are added only
   * when the condition is truthy (see the `_startFadeOutTransition` method).
   */
  _activeRipples = /*#__PURE__*/new Map();
  /** Latest non-persistent ripple that was triggered. */
  _mostRecentTransientRipple;
  /** Time in milliseconds when the last touchstart event happened. */
  _lastTouchStartEvent;
  /** Whether pointer-up event listeners have been registered. */
  _pointerUpEventsRegistered = false;
  /**
   * Cached dimensions of the ripple container. Set when the first
   * ripple is shown and cleared once no more ripples are visible.
   */
  _containerRect;
  static _eventManager = /*#__PURE__*/new RippleEventManager();
  constructor(_target, _ngZone, elementOrElementRef, _platform, injector) {
    this._target = _target;
    this._ngZone = _ngZone;
    this._platform = _platform;
    // Only do anything if we're on the browser.
    if (_platform.isBrowser) {
      this._containerElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(elementOrElementRef);
    }
    if (injector) {
      injector.get(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_4__._CdkPrivateStyleLoader).load(_MatRippleStylesLoader);
    }
  }
  /**
   * Fades in a ripple at the given coordinates.
   * @param x Coordinate within the element, along the X axis at which to start the ripple.
   * @param y Coordinate within the element, along the Y axis at which to start the ripple.
   * @param config Extra ripple options.
   */
  fadeInRipple(x, y, config = {}) {
    const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
    const animationConfig = {
      ...defaultRippleAnimationConfig,
      ...config.animation
    };
    if (config.centered) {
      x = containerRect.left + containerRect.width / 2;
      y = containerRect.top + containerRect.height / 2;
    }
    const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
    const offsetX = x - containerRect.left;
    const offsetY = y - containerRect.top;
    const enterDuration = animationConfig.enterDuration;
    const ripple = document.createElement('div');
    ripple.classList.add('mat-ripple-element');
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`;
    // If a custom color has been specified, set it as inline style. If no color is
    // set, the default color will be applied through the ripple theme styles.
    if (config.color != null) {
      ripple.style.backgroundColor = config.color;
    }
    ripple.style.transitionDuration = `${enterDuration}ms`;
    this._containerElement.appendChild(ripple);
    // By default the browser does not recalculate the styles of dynamically created
    // ripple elements. This is critical to ensure that the `scale` animates properly.
    // We enforce a style recalculation by calling `getComputedStyle` and *accessing* a property.
    // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    const computedStyles = window.getComputedStyle(ripple);
    const userTransitionProperty = computedStyles.transitionProperty;
    const userTransitionDuration = computedStyles.transitionDuration;
    // Note: We detect whether animation is forcibly disabled through CSS (e.g. through
    // `transition: none` or `display: none`). This is technically unexpected since animations are
    // controlled through the animation config, but this exists for backwards compatibility. This
    // logic does not need to be super accurate since it covers some edge cases which can be easily
    // avoided by users.
    const animationForciblyDisabledThroughCss = userTransitionProperty === 'none' ||
    // Note: The canonical unit for serialized CSS `<time>` properties is seconds. Additionally
    // some browsers expand the duration for every property (in our case `opacity` and `transform`).
    userTransitionDuration === '0s' || userTransitionDuration === '0s, 0s' ||
    // If the container is 0x0, it's likely `display: none`.
    containerRect.width === 0 && containerRect.height === 0;
    // Exposed reference to the ripple that will be returned.
    const rippleRef = new RippleRef(this, ripple, config, animationForciblyDisabledThroughCss);
    // Start the enter animation by setting the transform/scale to 100%. The animation will
    // execute as part of this statement because we forced a style recalculation before.
    // Note: We use a 3d transform here in order to avoid an issue in Safari where
    // the ripples aren't clipped when inside the shadow DOM (see #24028).
    ripple.style.transform = 'scale3d(1, 1, 1)';
    rippleRef.state = RippleState.FADING_IN;
    if (!config.persistent) {
      this._mostRecentTransientRipple = rippleRef;
    }
    let eventListeners = null;
    // Do not register the `transition` event listener if fade-in and fade-out duration
    // are set to zero. The events won't fire anyway and we can save resources here.
    if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
      this._ngZone.runOutsideAngular(() => {
        const onTransitionEnd = () => {
          // Clear the fallback timer since the transition fired correctly.
          if (eventListeners) {
            eventListeners.fallbackTimer = null;
          }
          clearTimeout(fallbackTimer);
          this._finishRippleTransition(rippleRef);
        };
        const onTransitionCancel = () => this._destroyRipple(rippleRef);
        // In some cases where there's a higher load on the browser, it can choose not to dispatch
        // neither `transitionend` nor `transitioncancel` (see b/227356674). This timer serves as a
        // fallback for such cases so that the ripple doesn't become stuck. We add a 100ms buffer
        // because timers aren't precise. Note that another approach can be to transition the ripple
        // to the `VISIBLE` state immediately above and to `FADING_IN` afterwards inside
        // `transitionstart`. We go with the timer because it's one less event listener and
        // it's less likely to break existing tests.
        const fallbackTimer = setTimeout(onTransitionCancel, enterDuration + 100);
        ripple.addEventListener('transitionend', onTransitionEnd);
        // If the transition is cancelled (e.g. due to DOM removal), we destroy the ripple
        // directly as otherwise we would keep it part of the ripple container forever.
        // https://www.w3.org/TR/css-transitions-1/#:~:text=no%20longer%20in%20the%20document.
        ripple.addEventListener('transitioncancel', onTransitionCancel);
        eventListeners = {
          onTransitionEnd,
          onTransitionCancel,
          fallbackTimer
        };
      });
    }
    // Add the ripple reference to the list of all active ripples.
    this._activeRipples.set(rippleRef, eventListeners);
    // In case there is no fade-in transition duration, we need to manually call the transition
    // end listener because `transitionend` doesn't fire if there is no transition.
    if (animationForciblyDisabledThroughCss || !enterDuration) {
      this._finishRippleTransition(rippleRef);
    }
    return rippleRef;
  }
  /** Fades out a ripple reference. */
  fadeOutRipple(rippleRef) {
    // For ripples already fading out or hidden, this should be a noop.
    if (rippleRef.state === RippleState.FADING_OUT || rippleRef.state === RippleState.HIDDEN) {
      return;
    }
    const rippleEl = rippleRef.element;
    const animationConfig = {
      ...defaultRippleAnimationConfig,
      ...rippleRef.config.animation
    };
    // This starts the fade-out transition and will fire the transition end listener that
    // removes the ripple element from the DOM.
    rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
    rippleEl.style.opacity = '0';
    rippleRef.state = RippleState.FADING_OUT;
    // In case there is no fade-out transition duration, we need to manually call the
    // transition end listener because `transitionend` doesn't fire if there is no transition.
    if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
      this._finishRippleTransition(rippleRef);
    }
  }
  /** Fades out all currently active ripples. */
  fadeOutAll() {
    this._getActiveRipples().forEach(ripple => ripple.fadeOut());
  }
  /** Fades out all currently active non-persistent ripples. */
  fadeOutAllNonPersistent() {
    this._getActiveRipples().forEach(ripple => {
      if (!ripple.config.persistent) {
        ripple.fadeOut();
      }
    });
  }
  /** Sets up the trigger event listeners */
  setupTriggerEvents(elementOrElementRef) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(elementOrElementRef);
    if (!this._platform.isBrowser || !element || element === this._triggerElement) {
      return;
    }
    // Remove all previously registered event listeners from the trigger element.
    this._removeTriggerEvents();
    this._triggerElement = element;
    // Use event delegation for the trigger events since they're
    // set up during creation and are performance-sensitive.
    pointerDownEvents.forEach(type => {
      RippleRenderer._eventManager.addHandler(this._ngZone, type, element, this);
    });
  }
  /**
   * Handles all registered events.
   * @docs-private
   */
  handleEvent(event) {
    if (event.type === 'mousedown') {
      this._onMousedown(event);
    } else if (event.type === 'touchstart') {
      this._onTouchStart(event);
    } else {
      this._onPointerUp();
    }
    // If pointer-up events haven't been registered yet, do so now.
    // We do this on-demand in order to reduce the total number of event listeners
    // registered by the ripples, which speeds up the rendering time for large UIs.
    if (!this._pointerUpEventsRegistered) {
      // The events for hiding the ripple are bound directly on the trigger, because:
      // 1. Some of them occur frequently (e.g. `mouseleave`) and any advantage we get from
      // delegation will be diminished by having to look through all the data structures often.
      // 2. They aren't as performance-sensitive, because they're bound only after the user
      // has interacted with an element.
      this._ngZone.runOutsideAngular(() => {
        pointerUpEvents.forEach(type => {
          this._triggerElement.addEventListener(type, this, passiveCapturingEventOptions);
        });
      });
      this._pointerUpEventsRegistered = true;
    }
  }
  /** Method that will be called if the fade-in or fade-in transition completed. */
  _finishRippleTransition(rippleRef) {
    if (rippleRef.state === RippleState.FADING_IN) {
      this._startFadeOutTransition(rippleRef);
    } else if (rippleRef.state === RippleState.FADING_OUT) {
      this._destroyRipple(rippleRef);
    }
  }
  /**
   * Starts the fade-out transition of the given ripple if it's not persistent and the pointer
   * is not held down anymore.
   */
  _startFadeOutTransition(rippleRef) {
    const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
    const {
      persistent
    } = rippleRef.config;
    rippleRef.state = RippleState.VISIBLE;
    // When the timer runs out while the user has kept their pointer down, we want to
    // keep only the persistent ripples and the latest transient ripple. We do this,
    // because we don't want stacked transient ripples to appear after their enter
    // animation has finished.
    if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
      rippleRef.fadeOut();
    }
  }
  /** Destroys the given ripple by removing it from the DOM and updating its state. */
  _destroyRipple(rippleRef) {
    const eventListeners = this._activeRipples.get(rippleRef) ?? null;
    this._activeRipples.delete(rippleRef);
    // Clear out the cached bounding rect if we have no more ripples.
    if (!this._activeRipples.size) {
      this._containerRect = null;
    }
    // If the current ref is the most recent transient ripple, unset it
    // avoid memory leaks.
    if (rippleRef === this._mostRecentTransientRipple) {
      this._mostRecentTransientRipple = null;
    }
    rippleRef.state = RippleState.HIDDEN;
    if (eventListeners !== null) {
      rippleRef.element.removeEventListener('transitionend', eventListeners.onTransitionEnd);
      rippleRef.element.removeEventListener('transitioncancel', eventListeners.onTransitionCancel);
      if (eventListeners.fallbackTimer !== null) {
        clearTimeout(eventListeners.fallbackTimer);
      }
    }
    rippleRef.element.remove();
  }
  /** Function being called whenever the trigger is being pressed using mouse. */
  _onMousedown(event) {
    // Screen readers will fire fake mouse events for space/enter. Skip launching a
    // ripple in this case for consistency with the non-screen-reader experience.
    const isFakeMousedown = (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.isFakeMousedownFromScreenReader)(event);
    const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
    if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this._isPointerDown = true;
      this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
    }
  }
  /** Function being called whenever the trigger is being pressed using touch. */
  _onTouchStart(event) {
    if (!this._target.rippleDisabled && !(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.isFakeTouchstartFromScreenReader)(event)) {
      // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
      // events will launch a second ripple if we don't ignore mouse events for a specific
      // time after a touchstart event.
      this._lastTouchStartEvent = Date.now();
      this._isPointerDown = true;
      // Use `changedTouches` so we skip any touches where the user put
      // their finger down, but used another finger to tap the element again.
      const touches = event.changedTouches;
      // According to the typings the touches should always be defined, but in some cases
      // the browser appears to not assign them in tests which leads to flakes.
      if (touches) {
        for (let i = 0; i < touches.length; i++) {
          this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
        }
      }
    }
  }
  /** Function being called whenever the trigger is being released. */
  _onPointerUp() {
    if (!this._isPointerDown) {
      return;
    }
    this._isPointerDown = false;
    // Fade-out all ripples that are visible and not persistent.
    this._getActiveRipples().forEach(ripple => {
      // By default, only ripples that are completely visible will fade out on pointer release.
      // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
      const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }
  _getActiveRipples() {
    return Array.from(this._activeRipples.keys());
  }
  /** Removes previously registered event listeners from the trigger element. */
  _removeTriggerEvents() {
    const trigger = this._triggerElement;
    if (trigger) {
      pointerDownEvents.forEach(type => RippleRenderer._eventManager.removeHandler(type, trigger, this));
      if (this._pointerUpEventsRegistered) {
        pointerUpEvents.forEach(type => trigger.removeEventListener(type, this, passiveCapturingEventOptions));
        this._pointerUpEventsRegistered = false;
      }
    }
  }
}
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 */
function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}

/** Injection token that can be used to specify the global ripple options. */
const MAT_RIPPLE_GLOBAL_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('mat-ripple-global-options');
let MatRipple = /*#__PURE__*/(() => {
  class MatRipple {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    _animationsDisabled = (0,_animation_DfMFjxHu_mjs__WEBPACK_IMPORTED_MODULE_5__._)();
    /** Custom color for all ripples. */
    color;
    /** Whether the ripples should be visible outside the component's bounds. */
    unbounded;
    /**
     * Whether the ripple always originates from the center of the host element's bounds, rather
     * than originating from the location of the click event.
     */
    centered;
    /**
     * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
     * will be the distance from the center of the ripple to the furthest corner of the host element's
     * bounding rectangle.
     */
    radius = 0;
    /**
     * Configuration for the ripple animation. Allows modifying the enter and exit animation
     * duration of the ripples. The animation durations will be overwritten if the
     * `NoopAnimationsModule` is being used.
     */
    animation;
    /**
     * Whether click events will not trigger the ripple. Ripples can be still launched manually
     * by using the `launch()` method.
     */
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      if (value) {
        this.fadeOutAllNonPersistent();
      }
      this._disabled = value;
      this._setupTriggerEventsIfEnabled();
    }
    _disabled = false;
    /**
     * The element that triggers the ripple when click events are received.
     * Defaults to the directive's host element.
     */
    get trigger() {
      return this._trigger || this._elementRef.nativeElement;
    }
    set trigger(trigger) {
      this._trigger = trigger;
      this._setupTriggerEventsIfEnabled();
    }
    _trigger;
    /** Renderer for the ripple DOM manipulations. */
    _rippleRenderer;
    /** Options that are set globally for all ripples. */
    _globalOptions;
    /** @docs-private Whether ripple directive is initialized and the input bindings are set. */
    _isInitialized = false;
    constructor() {
      const ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
      const platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform);
      const globalOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MAT_RIPPLE_GLOBAL_OPTIONS, {
        optional: true
      });
      const injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector);
      // Note: cannot use `inject()` here, because this class
      // gets instantiated manually in the ripple loader.
      this._globalOptions = globalOptions || {};
      this._rippleRenderer = new RippleRenderer(this, ngZone, this._elementRef, platform, injector);
    }
    ngOnInit() {
      this._isInitialized = true;
      this._setupTriggerEventsIfEnabled();
    }
    ngOnDestroy() {
      this._rippleRenderer._removeTriggerEvents();
    }
    /** Fades out all currently showing ripple elements. */
    fadeOutAll() {
      this._rippleRenderer.fadeOutAll();
    }
    /** Fades out all currently showing non-persistent ripple elements. */
    fadeOutAllNonPersistent() {
      this._rippleRenderer.fadeOutAllNonPersistent();
    }
    /**
     * Ripple configuration from the directive's input values.
     * @docs-private Implemented as part of RippleTarget
     */
    get rippleConfig() {
      return {
        centered: this.centered,
        radius: this.radius,
        color: this.color,
        animation: {
          ...this._globalOptions.animation,
          ...(this._animationsDisabled ? {
            enterDuration: 0,
            exitDuration: 0
          } : {}),
          ...this.animation
        },
        terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
      };
    }
    /**
     * Whether ripples on pointer-down are disabled or not.
     * @docs-private Implemented as part of RippleTarget
     */
    get rippleDisabled() {
      return this.disabled || !!this._globalOptions.disabled;
    }
    /** Sets up the trigger event listeners if ripples are enabled. */
    _setupTriggerEventsIfEnabled() {
      if (!this.disabled && this._isInitialized) {
        this._rippleRenderer.setupTriggerEvents(this.trigger);
      }
    }
    /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
    launch(configOrX, y = 0, config) {
      if (typeof configOrX === 'number') {
        return this._rippleRenderer.fadeInRipple(configOrX, y, {
          ...this.rippleConfig,
          ...config
        });
      } else {
        return this._rippleRenderer.fadeInRipple(0, 0, {
          ...this.rippleConfig,
          ...configOrX
        });
      }
    }
    static ɵfac = function MatRipple_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatRipple)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatRipple,
      selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
      hostAttrs: [1, "mat-ripple"],
      hostVars: 2,
      hostBindings: function MatRipple_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-ripple-unbounded", ctx.unbounded);
        }
      },
      inputs: {
        color: [0, "matRippleColor", "color"],
        unbounded: [0, "matRippleUnbounded", "unbounded"],
        centered: [0, "matRippleCentered", "centered"],
        radius: [0, "matRippleRadius", "radius"],
        animation: [0, "matRippleAnimation", "animation"],
        disabled: [0, "matRippleDisabled", "disabled"],
        trigger: [0, "matRippleTrigger", "trigger"]
      },
      exportAs: ["matRipple"]
    });
  }
  return MatRipple;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 31403:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/index-DwiL-HGk.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MatOptionModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _index_BFRo2fUq_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-BFRo2fUq.mjs */ 89061);
/* harmony import */ var _common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-module-cKSwHniA.mjs */ 8126);
/* harmony import */ var _option_BzhYL_xC_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./option-BzhYL_xC.mjs */ 16364);
/* harmony import */ var _pseudo_checkbox_module_4F8Up4PL_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pseudo-checkbox-module-4F8Up4PL.mjs */ 21072);






let MatOptionModule = /*#__PURE__*/(() => {
  class MatOptionModule {
    static ɵfac = function MatOptionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatOptionModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatOptionModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_index_BFRo2fUq_mjs__WEBPACK_IMPORTED_MODULE_1__.M, _common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_2__.M, _pseudo_checkbox_module_4F8Up4PL_mjs__WEBPACK_IMPORTED_MODULE_3__.M, _option_BzhYL_xC_mjs__WEBPACK_IMPORTED_MODULE_4__.M]
    });
  }
  return MatOptionModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 35604:
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/line-Bz5f9Cyx.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MatLine),
/* harmony export */   a: () => (/* binding */ MatLineModule),
/* harmony export */   s: () => (/* binding */ setLines)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-module-cKSwHniA.mjs */ 8126);





/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a @ContentChildren(MatLine) query, then
 * counted by checking the query list's length.
 */
let MatLine = /*#__PURE__*/(() => {
  class MatLine {
    static ɵfac = function MatLine_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatLine)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatLine,
      selectors: [["", "mat-line", ""], ["", "matLine", ""]],
      hostAttrs: [1, "mat-line"]
    });
  }
  return MatLine;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * @docs-private
 */
function setLines(lines, element, prefix = 'mat') {
  // Note: doesn't need to unsubscribe, because `changes`
  // gets completed by Angular when the view is destroyed.
  lines.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.startWith)(lines)).subscribe(({
    length
  }) => {
    setClass(element, `${prefix}-2-line`, false);
    setClass(element, `${prefix}-3-line`, false);
    setClass(element, `${prefix}-multi-line`, false);
    if (length === 2 || length === 3) {
      setClass(element, `${prefix}-${length}-line`, true);
    } else if (length > 3) {
      setClass(element, `${prefix}-multi-line`, true);
    }
  });
}
/** Adds or removes a class from an element. */
function setClass(element, className, isAdd) {
  element.nativeElement.classList.toggle(className, isAdd);
}
let MatLineModule = /*#__PURE__*/(() => {
  class MatLineModule {
    static ɵfac = function MatLineModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatLineModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatLineModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_2__.M, _common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_2__.M]
    });
  }
  return MatLineModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 36987:
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/ripple-loader-BnMiRtmT.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MatRippleLoader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 49583);
/* harmony import */ var _animation_DfMFjxHu_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation-DfMFjxHu.mjs */ 73388);
/* harmony import */ var _ripple_BYgV4oZC_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ripple-BYgV4oZC.mjs */ 29968);






/** The options for the MatRippleLoader's event listeners. */
const eventListenerOptions = {
  capture: true
};
/**
 * The events that should trigger the initialization of the ripple.
 * Note that we use `mousedown`, rather than `click`, for mouse devices because
 * we can't rely on `mouseenter` in the shadow DOM and `click` happens too late.
 */
const rippleInteractionEvents = ['focus', 'mousedown', 'mouseenter', 'touchstart'];
/** The attribute attached to a component whose ripple has not yet been initialized. */
const matRippleUninitialized = 'mat-ripple-loader-uninitialized';
/** Additional classes that should be added to the ripple when it is rendered. */
const matRippleClassName = 'mat-ripple-loader-class-name';
/** Whether the ripple should be centered. */
const matRippleCentered = 'mat-ripple-loader-centered';
/** Whether the ripple should be disabled. */
const matRippleDisabled = 'mat-ripple-loader-disabled';
/**
 * Handles attaching ripples on demand.
 *
 * This service allows us to avoid eagerly creating & attaching MatRipples.
 * It works by creating & attaching a ripple only when a component is first interacted with.
 *
 * @docs-private
 */
let MatRippleLoader = /*#__PURE__*/(() => {
  class MatRippleLoader {
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    _animationsDisabled = (0,_animation_DfMFjxHu_mjs__WEBPACK_IMPORTED_MODULE_2__._)();
    _globalRippleOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ripple_BYgV4oZC_mjs__WEBPACK_IMPORTED_MODULE_3__.a, {
      optional: true
    });
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    _eventCleanups;
    _hosts = new Map();
    constructor() {
      const renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
      this._eventCleanups = this._ngZone.runOutsideAngular(() => rippleInteractionEvents.map(name => renderer.listen(this._document, name, this._onInteraction, eventListenerOptions)));
    }
    ngOnDestroy() {
      const hosts = this._hosts.keys();
      for (const host of hosts) {
        this.destroyRipple(host);
      }
      this._eventCleanups.forEach(cleanup => cleanup());
    }
    /**
     * Configures the ripple that will be rendered by the ripple loader.
     *
     * Stores the given information about how the ripple should be configured on the host
     * element so that it can later be retrived & used when the ripple is actually created.
     */
    configureRipple(host, config) {
      // Indicates that the ripple has not yet been rendered for this component.
      host.setAttribute(matRippleUninitialized, this._globalRippleOptions?.namespace ?? '');
      // Store the additional class name(s) that should be added to the ripple element.
      if (config.className || !host.hasAttribute(matRippleClassName)) {
        host.setAttribute(matRippleClassName, config.className || '');
      }
      // Store whether the ripple should be centered.
      if (config.centered) {
        host.setAttribute(matRippleCentered, '');
      }
      if (config.disabled) {
        host.setAttribute(matRippleDisabled, '');
      }
    }
    /** Sets the disabled state on the ripple instance corresponding to the given host element. */
    setDisabled(host, disabled) {
      const ripple = this._hosts.get(host);
      // If the ripple has already been instantiated, just disable it.
      if (ripple) {
        ripple.target.rippleDisabled = disabled;
        if (!disabled && !ripple.hasSetUpEvents) {
          ripple.hasSetUpEvents = true;
          ripple.renderer.setupTriggerEvents(host);
        }
      } else if (disabled) {
        // Otherwise, set an attribute so we know what the
        // disabled state should be when the ripple is initialized.
        host.setAttribute(matRippleDisabled, '');
      } else {
        host.removeAttribute(matRippleDisabled);
      }
    }
    /**
     * Handles creating and attaching component internals
     * when a component is initially interacted with.
     */
    _onInteraction = event => {
      const eventTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__._getEventTarget)(event);
      if (eventTarget instanceof HTMLElement) {
        // TODO(wagnermaciel): Consider batching these events to improve runtime performance.
        const element = eventTarget.closest(`[${matRippleUninitialized}="${this._globalRippleOptions?.namespace ?? ''}"]`);
        if (element) {
          this._createRipple(element);
        }
      }
    };
    /** Creates a MatRipple and appends it to the given element. */
    _createRipple(host) {
      if (!this._document || this._hosts.has(host)) {
        return;
      }
      // Create the ripple element.
      host.querySelector('.mat-ripple')?.remove();
      const rippleEl = this._document.createElement('span');
      rippleEl.classList.add('mat-ripple', host.getAttribute(matRippleClassName));
      host.append(rippleEl);
      const globalOptions = this._globalRippleOptions;
      const enterDuration = this._animationsDisabled ? 0 : globalOptions?.animation?.enterDuration ?? _ripple_BYgV4oZC_mjs__WEBPACK_IMPORTED_MODULE_3__.d.enterDuration;
      const exitDuration = this._animationsDisabled ? 0 : globalOptions?.animation?.exitDuration ?? _ripple_BYgV4oZC_mjs__WEBPACK_IMPORTED_MODULE_3__.d.exitDuration;
      const target = {
        rippleDisabled: this._animationsDisabled || globalOptions?.disabled || host.hasAttribute(matRippleDisabled),
        rippleConfig: {
          centered: host.hasAttribute(matRippleCentered),
          terminateOnPointerUp: globalOptions?.terminateOnPointerUp,
          animation: {
            enterDuration,
            exitDuration
          }
        }
      };
      const renderer = new _ripple_BYgV4oZC_mjs__WEBPACK_IMPORTED_MODULE_3__.R(target, this._ngZone, rippleEl, this._platform, this._injector);
      const hasSetUpEvents = !target.rippleDisabled;
      if (hasSetUpEvents) {
        renderer.setupTriggerEvents(host);
      }
      this._hosts.set(host, {
        target,
        renderer,
        hasSetUpEvents
      });
      host.removeAttribute(matRippleUninitialized);
    }
    destroyRipple(host) {
      const ripple = this._hosts.get(host);
      if (ripple) {
        ripple.renderer._removeTriggerEvents();
        this._hosts.delete(host);
      }
    }
    static ɵfac = function MatRippleLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatRippleLoader)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MatRippleLoader,
      factory: MatRippleLoader.ɵfac,
      providedIn: 'root'
    });
  }
  return MatRippleLoader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 60850:
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/error-state-Dtb1IHM-.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _ErrorStateTracker)
/* harmony export */ });
/**
 * Class that tracks the error state of a component.
 * @docs-private
 */
class _ErrorStateTracker {
  _defaultMatcher;
  ngControl;
  _parentFormGroup;
  _parentForm;
  _stateChanges;
  /** Whether the tracker is currently in an error state. */
  errorState = false;
  /** User-defined matcher for the error state. */
  matcher;
  constructor(_defaultMatcher, ngControl, _parentFormGroup, _parentForm, _stateChanges) {
    this._defaultMatcher = _defaultMatcher;
    this.ngControl = ngControl;
    this._parentFormGroup = _parentFormGroup;
    this._parentForm = _parentForm;
    this._stateChanges = _stateChanges;
  }
  /** Updates the error state based on the provided error state matcher. */
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


/***/ }),

/***/ 73388:
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/animation-DfMFjxHu.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AnimationCurves),
/* harmony export */   M: () => (/* binding */ MATERIAL_ANIMATIONS),
/* harmony export */   _: () => (/* binding */ _animationsDisabled),
/* harmony export */   a: () => (/* binding */ AnimationDurations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ 285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27940);



/** Injection token used to configure the animations in Angular Material. */
const MATERIAL_ANIMATIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MATERIAL_ANIMATIONS');
/**
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 * @docs-private
 */
let AnimationCurves = /*#__PURE__*/(() => {
  class AnimationCurves {
    static STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
    static DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
    static ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
    static SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
  }
  return AnimationCurves;
})();
/**
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 * @docs-private
 */
let AnimationDurations = /*#__PURE__*/(() => {
  class AnimationDurations {
    static COMPLEX = '375ms';
    static ENTERING = '225ms';
    static EXITING = '195ms';
  }
  return AnimationDurations;
})();
/**
 * Returns whether animations have been disabled by DI. Must be called in a DI context.
 * @docs-private
 */
function _animationsDisabled() {
  if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MATERIAL_ANIMATIONS, {
    optional: true
  })?.animationsDisabled || (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, {
    optional: true
  }) === 'NoopAnimations') {
    return true;
  }
  const mediaMatcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.MediaMatcher);
  return mediaMatcher.matchMedia('(prefers-reduced-motion)').matches;
}


/***/ }),

/***/ 74646:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/core.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationCurves: () => (/* reexport safe */ _animation_DfMFjxHu_mjs__WEBPACK_IMPORTED_MODULE_2__.A),
/* harmony export */   AnimationDurations: () => (/* reexport safe */ _animation_DfMFjxHu_mjs__WEBPACK_IMPORTED_MODULE_2__.a),
/* harmony export */   DateAdapter: () => (/* reexport safe */ _date_formats_K6TQue_Y_mjs__WEBPACK_IMPORTED_MODULE_5__.D),
/* harmony export */   ErrorStateMatcher: () => (/* reexport safe */ _error_options_DCNQlTOA_mjs__WEBPACK_IMPORTED_MODULE_6__.E),
/* harmony export */   MATERIAL_ANIMATIONS: () => (/* reexport safe */ _animation_DfMFjxHu_mjs__WEBPACK_IMPORTED_MODULE_2__.M),
/* harmony export */   MATERIAL_SANITY_CHECKS: () => (/* reexport safe */ _common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_3__.a),
/* harmony export */   MAT_DATE_FORMATS: () => (/* reexport safe */ _date_formats_K6TQue_Y_mjs__WEBPACK_IMPORTED_MODULE_5__.a),
/* harmony export */   MAT_DATE_LOCALE: () => (/* reexport safe */ _date_formats_K6TQue_Y_mjs__WEBPACK_IMPORTED_MODULE_5__.M),
/* harmony export */   MAT_DATE_LOCALE_FACTORY: () => (/* reexport safe */ _date_formats_K6TQue_Y_mjs__WEBPACK_IMPORTED_MODULE_5__.b),
/* harmony export */   MAT_NATIVE_DATE_FORMATS: () => (/* binding */ MAT_NATIVE_DATE_FORMATS),
/* harmony export */   MAT_OPTGROUP: () => (/* reexport safe */ _option_BzhYL_xC_mjs__WEBPACK_IMPORTED_MODULE_9__.d),
/* harmony export */   MAT_OPTION_PARENT_COMPONENT: () => (/* reexport safe */ _option_BzhYL_xC_mjs__WEBPACK_IMPORTED_MODULE_9__.c),
/* harmony export */   MAT_RIPPLE_GLOBAL_OPTIONS: () => (/* reexport safe */ _ripple_BYgV4oZC_mjs__WEBPACK_IMPORTED_MODULE_12__.a),
/* harmony export */   MatCommonModule: () => (/* reexport safe */ _common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_3__.M),
/* harmony export */   MatLine: () => (/* reexport safe */ _line_Bz5f9Cyx_mjs__WEBPACK_IMPORTED_MODULE_8__.M),
/* harmony export */   MatLineModule: () => (/* reexport safe */ _line_Bz5f9Cyx_mjs__WEBPACK_IMPORTED_MODULE_8__.a),
/* harmony export */   MatNativeDateModule: () => (/* binding */ MatNativeDateModule),
/* harmony export */   MatOptgroup: () => (/* reexport safe */ _option_BzhYL_xC_mjs__WEBPACK_IMPORTED_MODULE_9__.a),
/* harmony export */   MatOption: () => (/* reexport safe */ _option_BzhYL_xC_mjs__WEBPACK_IMPORTED_MODULE_9__.M),
/* harmony export */   MatOptionModule: () => (/* reexport safe */ _index_DwiL_HGk_mjs__WEBPACK_IMPORTED_MODULE_10__.M),
/* harmony export */   MatOptionSelectionChange: () => (/* reexport safe */ _option_BzhYL_xC_mjs__WEBPACK_IMPORTED_MODULE_9__.e),
/* harmony export */   MatPseudoCheckbox: () => (/* reexport safe */ _pseudo_checkbox_DDmgx3P4_mjs__WEBPACK_IMPORTED_MODULE_14__.M),
/* harmony export */   MatPseudoCheckboxModule: () => (/* reexport safe */ _pseudo_checkbox_module_4F8Up4PL_mjs__WEBPACK_IMPORTED_MODULE_15__.M),
/* harmony export */   MatRipple: () => (/* reexport safe */ _ripple_BYgV4oZC_mjs__WEBPACK_IMPORTED_MODULE_12__.M),
/* harmony export */   MatRippleLoader: () => (/* reexport safe */ _ripple_loader_BnMiRtmT_mjs__WEBPACK_IMPORTED_MODULE_11__.M),
/* harmony export */   MatRippleModule: () => (/* reexport safe */ _index_BFRo2fUq_mjs__WEBPACK_IMPORTED_MODULE_13__.M),
/* harmony export */   NativeDateAdapter: () => (/* binding */ NativeDateAdapter),
/* harmony export */   NativeDateModule: () => (/* binding */ NativeDateModule),
/* harmony export */   RippleRef: () => (/* reexport safe */ _ripple_BYgV4oZC_mjs__WEBPACK_IMPORTED_MODULE_12__.c),
/* harmony export */   RippleRenderer: () => (/* reexport safe */ _ripple_BYgV4oZC_mjs__WEBPACK_IMPORTED_MODULE_12__.R),
/* harmony export */   RippleState: () => (/* reexport safe */ _ripple_BYgV4oZC_mjs__WEBPACK_IMPORTED_MODULE_12__.b),
/* harmony export */   ShowOnDirtyErrorStateMatcher: () => (/* reexport safe */ _error_options_DCNQlTOA_mjs__WEBPACK_IMPORTED_MODULE_6__.S),
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   _ErrorStateTracker: () => (/* reexport safe */ _error_state_Dtb1IHM_mjs__WEBPACK_IMPORTED_MODULE_4__._),
/* harmony export */   _MatInternalFormField: () => (/* reexport safe */ _internal_form_field_D5iFxU6d_mjs__WEBPACK_IMPORTED_MODULE_0__._),
/* harmony export */   _StructuralStylesLoader: () => (/* reexport safe */ _structural_styles_CObeNzjn_mjs__WEBPACK_IMPORTED_MODULE_7__._),
/* harmony export */   _animationsDisabled: () => (/* reexport safe */ _animation_DfMFjxHu_mjs__WEBPACK_IMPORTED_MODULE_2__._),
/* harmony export */   _countGroupLabelsBeforeOption: () => (/* reexport safe */ _option_BzhYL_xC_mjs__WEBPACK_IMPORTED_MODULE_9__._),
/* harmony export */   _getOptionScrollPosition: () => (/* reexport safe */ _option_BzhYL_xC_mjs__WEBPACK_IMPORTED_MODULE_9__.b),
/* harmony export */   defaultRippleAnimationConfig: () => (/* reexport safe */ _ripple_BYgV4oZC_mjs__WEBPACK_IMPORTED_MODULE_12__.d),
/* harmony export */   provideNativeDateAdapter: () => (/* binding */ provideNativeDateAdapter),
/* harmony export */   setLines: () => (/* reexport safe */ _line_Bz5f9Cyx_mjs__WEBPACK_IMPORTED_MODULE_8__.s)
/* harmony export */ });
/* harmony import */ var _internal_form_field_D5iFxU6d_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal-form-field-D5iFxU6d.mjs */ 20586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _animation_DfMFjxHu_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation-DfMFjxHu.mjs */ 73388);
/* harmony import */ var _common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common-module-cKSwHniA.mjs */ 8126);
/* harmony import */ var _error_state_Dtb1IHM_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-state-Dtb1IHM-.mjs */ 60850);
/* harmony import */ var _date_formats_K6TQue_Y_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date-formats-K6TQue-Y.mjs */ 6423);
/* harmony import */ var _error_options_DCNQlTOA_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-options-DCNQlTOA.mjs */ 27295);
/* harmony import */ var _structural_styles_CObeNzjn_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./structural-styles-CObeNzjn.mjs */ 79735);
/* harmony import */ var _line_Bz5f9Cyx_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./line-Bz5f9Cyx.mjs */ 35604);
/* harmony import */ var _option_BzhYL_xC_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./option-BzhYL_xC.mjs */ 16364);
/* harmony import */ var _index_DwiL_HGk_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index-DwiL-HGk.mjs */ 31403);
/* harmony import */ var _ripple_loader_BnMiRtmT_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ripple-loader-BnMiRtmT.mjs */ 36987);
/* harmony import */ var _ripple_BYgV4oZC_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ripple-BYgV4oZC.mjs */ 29968);
/* harmony import */ var _index_BFRo2fUq_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index-BFRo2fUq.mjs */ 89061);
/* harmony import */ var _pseudo_checkbox_DDmgx3P4_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pseudo-checkbox-DDmgx3P4.mjs */ 99125);
/* harmony import */ var _pseudo_checkbox_module_4F8Up4PL_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pseudo-checkbox-module-4F8Up4PL.mjs */ 21072);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/layout */ 285);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/a11y */ 56593);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/bidi */ 48073);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/keycodes */ 48215);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/private */ 98959);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/platform */ 49583);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/coercion */ 33981);




























/** Current version of Angular Material. */
const VERSION = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Version('20.1.0');

/**
 * Matches strings that have the form of a valid RFC 3339 string
 * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
 * because the regex will match strings with an out of bounds month, date, etc.
 */
const ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/**
 * Matches a time string. Supported formats:
 * - {{hours}}:{{minutes}}
 * - {{hours}}:{{minutes}}:{{seconds}}
 * - {{hours}}:{{minutes}} AM/PM
 * - {{hours}}:{{minutes}}:{{seconds}} AM/PM
 * - {{hours}}.{{minutes}}
 * - {{hours}}.{{minutes}}.{{seconds}}
 * - {{hours}}.{{minutes}} AM/PM
 * - {{hours}}.{{minutes}}.{{seconds}} AM/PM
 */
const TIME_REGEX = /^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;
/** Creates an array and fills it with values. */
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
/** Adapts the native JS Date for use with cdk-based components that work with dates. */
let NativeDateAdapter = /*#__PURE__*/(() => {
  class NativeDateAdapter extends _date_formats_K6TQue_Y_mjs__WEBPACK_IMPORTED_MODULE_5__.D {
    /**
     * @deprecated No longer being used. To be removed.
     * @breaking-change 14.0.0
     */
    useUtcForDisplay = false;
    /** The injected locale. */
    _matDateLocale = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_date_formats_K6TQue_Y_mjs__WEBPACK_IMPORTED_MODULE_5__.M, {
      optional: true
    });
    constructor() {
      super();
      const matDateLocale = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_date_formats_K6TQue_Y_mjs__WEBPACK_IMPORTED_MODULE_5__.M, {
        optional: true
      });
      if (matDateLocale !== undefined) {
        this._matDateLocale = matDateLocale;
      }
      super.setLocale(this._matDateLocale);
    }
    getYear(date) {
      return date.getFullYear();
    }
    getMonth(date) {
      return date.getMonth();
    }
    getDate(date) {
      return date.getDate();
    }
    getDayOfWeek(date) {
      return date.getDay();
    }
    getMonthNames(style) {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        month: style,
        timeZone: 'utc'
      });
      return range(12, i => this._format(dtf, new Date(2017, i, 1)));
    }
    getDateNames() {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        day: 'numeric',
        timeZone: 'utc'
      });
      return range(31, i => this._format(dtf, new Date(2017, 0, i + 1)));
    }
    getDayOfWeekNames(style) {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        weekday: style,
        timeZone: 'utc'
      });
      return range(7, i => this._format(dtf, new Date(2017, 0, i + 1)));
    }
    getYearName(date) {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        year: 'numeric',
        timeZone: 'utc'
      });
      return this._format(dtf, date);
    }
    getFirstDayOfWeek() {
      // At the time of writing `Intl.Locale` isn't available
      // in the internal types so we need to cast to `any`.
      if (typeof Intl !== 'undefined' && Intl.Locale) {
        const locale = new Intl.Locale(this.locale);
        // Some browsers implement a `getWeekInfo` method while others have a `weekInfo` getter.
        // Note that this isn't supported in all browsers so we need to null check it.
        const firstDay = (locale.getWeekInfo?.() || locale.weekInfo)?.firstDay ?? 0;
        // `weekInfo.firstDay` is a number between 1 and 7 where, starting from Monday,
        // whereas our representation is 0 to 6 where 0 is Sunday so we need to normalize it.
        return firstDay === 7 ? 0 : firstDay;
      }
      // Default to Sunday if the browser doesn't provide the week information.
      return 0;
    }
    getNumDaysInMonth(date) {
      return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
    }
    clone(date) {
      return new Date(date.getTime());
    }
    createDate(year, month, date) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11) {
          throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }
        if (date < 1) {
          throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
        }
      }
      let result = this._createDateWithOverflow(year, month, date);
      // Check that the date wasn't above the upper bound for the month, causing the month to overflow
      if (result.getMonth() != month && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error(`Invalid date "${date}" for month with index "${month}".`);
      }
      return result;
    }
    today() {
      return new Date();
    }
    parse(value, parseFormat) {
      // We have no way using the native JS Date to set the parse format or locale, so we ignore these
      // parameters.
      if (typeof value == 'number') {
        return new Date(value);
      }
      return value ? new Date(Date.parse(value)) : null;
    }
    format(date, displayFormat) {
      if (!this.isValid(date)) {
        throw Error('NativeDateAdapter: Cannot format invalid date.');
      }
      const dtf = new Intl.DateTimeFormat(this.locale, {
        ...displayFormat,
        timeZone: 'utc'
      });
      return this._format(dtf, date);
    }
    addCalendarYears(date, years) {
      return this.addCalendarMonths(date, years * 12);
    }
    addCalendarMonths(date, months) {
      let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
      // It's possible to wind up in the wrong month if the original month has more days than the new
      // month. In this case we want to go to the last day of the desired month.
      // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
      // guarantee this.
      if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
        newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
      }
      return newDate;
    }
    addCalendarDays(date, days) {
      return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
    }
    toIso8601(date) {
      return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join('-');
    }
    /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     */
    deserialize(value) {
      if (typeof value === 'string') {
        if (!value) {
          return null;
        }
        // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
        // string is the right format first.
        if (ISO_8601_REGEX.test(value)) {
          let date = new Date(value);
          if (this.isValid(date)) {
            return date;
          }
        }
      }
      return super.deserialize(value);
    }
    isDateInstance(obj) {
      return obj instanceof Date;
    }
    isValid(date) {
      return !isNaN(date.getTime());
    }
    invalid() {
      return new Date(NaN);
    }
    setTime(target, hours, minutes, seconds) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!inRange(hours, 0, 23)) {
          throw Error(`Invalid hours "${hours}". Hours value must be between 0 and 23.`);
        }
        if (!inRange(minutes, 0, 59)) {
          throw Error(`Invalid minutes "${minutes}". Minutes value must be between 0 and 59.`);
        }
        if (!inRange(seconds, 0, 59)) {
          throw Error(`Invalid seconds "${seconds}". Seconds value must be between 0 and 59.`);
        }
      }
      const clone = this.clone(target);
      clone.setHours(hours, minutes, seconds, 0);
      return clone;
    }
    getHours(date) {
      return date.getHours();
    }
    getMinutes(date) {
      return date.getMinutes();
    }
    getSeconds(date) {
      return date.getSeconds();
    }
    parseTime(userValue, parseFormat) {
      if (typeof userValue !== 'string') {
        return userValue instanceof Date ? new Date(userValue.getTime()) : null;
      }
      const value = userValue.trim();
      if (value.length === 0) {
        return null;
      }
      // Attempt to parse the value directly.
      let result = this._parseTimeString(value);
      // Some locales add extra characters around the time, but are otherwise parseable
      // (e.g. `00:05 ч.` in bg-BG). Try replacing all non-number and non-colon characters.
      if (result === null) {
        const withoutExtras = value.replace(/[^0-9:(AM|PM)]/gi, '').trim();
        if (withoutExtras.length > 0) {
          result = this._parseTimeString(withoutExtras);
        }
      }
      return result || this.invalid();
    }
    addSeconds(date, amount) {
      return new Date(date.getTime() + amount * 1000);
    }
    /** Creates a date but allows the month and date to overflow. */
    _createDateWithOverflow(year, month, date) {
      // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
      // To work around this we use `setFullYear` and `setHours` instead.
      const d = new Date();
      d.setFullYear(year, month, date);
      d.setHours(0, 0, 0, 0);
      return d;
    }
    /**
     * Pads a number to make it two digits.
     * @param n The number to pad.
     * @returns The padded number.
     */
    _2digit(n) {
      return ('00' + n).slice(-2);
    }
    /**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     * @param dtf Intl.DateTimeFormat object, containing the desired string format. It must have
     *    timeZone set to 'utc' to work fine.
     * @param date Date from which we want to get the string representation according to dtf
     * @returns A Date object with its UTC representation based on the passed in date info
     */
    _format(dtf, date) {
      // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
      // To work around this we use `setUTCFullYear` and `setUTCHours` instead.
      const d = new Date();
      d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
      d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
      return dtf.format(d);
    }
    /**
     * Attempts to parse a time string into a date object. Returns null if it cannot be parsed.
     * @param value Time string to parse.
     */
    _parseTimeString(value) {
      // Note: we can technically rely on the browser for the time parsing by generating
      // an ISO string and appending the string to the end of it. We don't do it, because
      // browsers aren't consistent in what they support. Some examples:
      // - Safari doesn't support AM/PM.
      // - Firefox produces a valid date object if the time string has overflows (e.g. 12:75) while
      //   other browsers produce an invalid date.
      // - Safari doesn't allow padded numbers.
      const parsed = value.toUpperCase().match(TIME_REGEX);
      if (parsed) {
        let hours = parseInt(parsed[1]);
        const minutes = parseInt(parsed[2]);
        let seconds = parsed[3] == null ? undefined : parseInt(parsed[3]);
        const amPm = parsed[4];
        if (hours === 12) {
          hours = amPm === 'AM' ? 0 : hours;
        } else if (amPm === 'PM') {
          hours += 12;
        }
        if (inRange(hours, 0, 23) && inRange(minutes, 0, 59) && (seconds == null || inRange(seconds, 0, 59))) {
          return this.setTime(this.today(), hours, minutes, seconds || 0);
        }
      }
      return null;
    }
    static ɵfac = function NativeDateAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NativeDateAdapter)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NativeDateAdapter,
      factory: NativeDateAdapter.ɵfac
    });
  }
  return NativeDateAdapter;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Checks whether a number is within a certain range. */
function inRange(value, min, max) {
  return !isNaN(value) && value >= min && value <= max;
}
const MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null,
    timeInput: null
  },
  display: {
    dateInput: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    },
    timeInput: {
      hour: 'numeric',
      minute: 'numeric'
    },
    monthYearLabel: {
      year: 'numeric',
      month: 'short'
    },
    dateA11yLabel: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    monthYearA11yLabel: {
      year: 'numeric',
      month: 'long'
    },
    timeOptionLabel: {
      hour: 'numeric',
      minute: 'numeric'
    }
  }
};
let NativeDateModule = /*#__PURE__*/(() => {
  class NativeDateModule {
    static ɵfac = function NativeDateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NativeDateModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NativeDateModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      providers: [{
        provide: _date_formats_K6TQue_Y_mjs__WEBPACK_IMPORTED_MODULE_5__.D,
        useClass: NativeDateAdapter
      }]
    });
  }
  return NativeDateModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatNativeDateModule = /*#__PURE__*/(() => {
  class MatNativeDateModule {
    static ɵfac = function MatNativeDateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatNativeDateModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatNativeDateModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      providers: [provideNativeDateAdapter()]
    });
  }
  return MatNativeDateModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function provideNativeDateAdapter(formats = MAT_NATIVE_DATE_FORMATS) {
  return [{
    provide: _date_formats_K6TQue_Y_mjs__WEBPACK_IMPORTED_MODULE_5__.D,
    useClass: NativeDateAdapter
  }, {
    provide: _date_formats_K6TQue_Y_mjs__WEBPACK_IMPORTED_MODULE_5__.a,
    useValue: formats
  }];
}


/***/ }),

/***/ 79735:
/*!********************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/structural-styles-CObeNzjn.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _StructuralStylesLoader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);



/**
 * Component used to load structural styles for focus indicators.
 * @docs-private
 */
let _StructuralStylesLoader = /*#__PURE__*/(() => {
  class _StructuralStylesLoader {
    static ɵfac = function _StructuralStylesLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StructuralStylesLoader)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: _StructuralStylesLoader,
      selectors: [["structural-styles"]],
      decls: 0,
      vars: 0,
      template: function _StructuralStylesLoader_Template(rf, ctx) {},
      styles: [".mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:\"\"}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return _StructuralStylesLoader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 89061:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/index-BFRo2fUq.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MatRippleModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-module-cKSwHniA.mjs */ 8126);




let MatRippleModule = /*#__PURE__*/(() => {
  class MatRippleModule {
    static ɵfac = function MatRippleModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatRippleModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatRippleModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_1__.M, _common_module_cKSwHniA_mjs__WEBPACK_IMPORTED_MODULE_1__.M]
    });
  }
  return MatRippleModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 99125:
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/pseudo-checkbox-DDmgx3P4.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MatPseudoCheckbox)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _animation_DfMFjxHu_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation-DfMFjxHu.mjs */ 73388);




/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 * Note that theming is meant to be handled by the parent element, e.g.
 * `mat-primary .mat-pseudo-checkbox`.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
 * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
 * of more complex components that appropriately handle selected / checked state.
 * @docs-private
 */
let MatPseudoCheckbox = /*#__PURE__*/(() => {
  class MatPseudoCheckbox {
    _animationsDisabled = (0,_animation_DfMFjxHu_mjs__WEBPACK_IMPORTED_MODULE_1__._)();
    /** Display state of the checkbox. */
    state = 'unchecked';
    /** Whether the checkbox is disabled. */
    disabled = false;
    /**
     * Appearance of the pseudo checkbox. Default appearance of 'full' renders a checkmark/mixedmark
     * indicator inside a square box. 'minimal' appearance only renders the checkmark/mixedmark.
     */
    appearance = 'full';
    constructor() {}
    static ɵfac = function MatPseudoCheckbox_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatPseudoCheckbox)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatPseudoCheckbox,
      selectors: [["mat-pseudo-checkbox"]],
      hostAttrs: [1, "mat-pseudo-checkbox"],
      hostVars: 12,
      hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("mat-pseudo-checkbox-minimal", ctx.appearance === "minimal")("mat-pseudo-checkbox-full", ctx.appearance === "full")("_mat-animation-noopable", ctx._animationsDisabled);
        }
      },
      inputs: {
        state: "state",
        disabled: "disabled",
        appearance: "appearance"
      },
      decls: 0,
      vars: 0,
      template: function MatPseudoCheckbox_Template(rf, ctx) {},
      styles: [".mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatPseudoCheckbox;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ })

}])
//# sourceMappingURL=4646.js.map