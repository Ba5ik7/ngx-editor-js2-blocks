(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[8653],{

/***/ 31034:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/menu.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_MENU_CONTENT: () => (/* binding */ MAT_MENU_CONTENT),
/* harmony export */   MAT_MENU_DEFAULT_OPTIONS: () => (/* binding */ MAT_MENU_DEFAULT_OPTIONS),
/* harmony export */   MAT_MENU_PANEL: () => (/* binding */ MAT_MENU_PANEL),
/* harmony export */   MAT_MENU_SCROLL_STRATEGY: () => (/* binding */ MAT_MENU_SCROLL_STRATEGY),
/* harmony export */   MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER: () => (/* binding */ MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   MENU_PANEL_TOP_PADDING: () => (/* binding */ MENU_PANEL_TOP_PADDING),
/* harmony export */   MatMenu: () => (/* binding */ MatMenu),
/* harmony export */   MatMenuContent: () => (/* binding */ MatMenuContent),
/* harmony export */   MatMenuItem: () => (/* binding */ MatMenuItem),
/* harmony export */   MatMenuModule: () => (/* binding */ MatMenuModule),
/* harmony export */   MatMenuTrigger: () => (/* binding */ MatMenuTrigger),
/* harmony export */   fadeInItems: () => (/* binding */ fadeInItems),
/* harmony export */   matMenuAnimations: () => (/* binding */ matMenuAnimations),
/* harmony export */   transformMenu: () => (/* binding */ transformMenu)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9516);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ 6020);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ 73038);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 59694);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 84718);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/private */ 77824);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ 80836);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ 71320);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/overlay */ 87916);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/platform */ 1830);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ 72396);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ 73840);
















/**
 * Injection token used to provide the parent menu to menu-specific components.
 * @docs-private
 */
const _c0 = ["mat-menu-item", ""];
const _c1 = [[["mat-icon"], ["", "matMenuItemIcon", ""]], "*"];
const _c2 = ["mat-icon, [matMenuItemIcon]", "*"];
function MatMenuItem_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "polygon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c3 = ["*"];
function MatMenu_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatMenu_ng_template_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.closed.emit("click"));
    })("animationstart", function MatMenu_ng_template_0_Template_div_animationstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._onAnimationStart($event.animationName));
    })("animationend", function MatMenu_ng_template_0_Template_div_animationend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._onAnimationDone($event.animationName));
    })("animationcancel", function MatMenu_ng_template_0_Template_div_animationcancel_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._onAnimationDone($event.animationName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1._classList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-menu-panel-animations-disabled", ctx_r1._animationsDisabled)("mat-menu-panel-exit-animation", ctx_r1._panelAnimationState === "void")("mat-menu-panel-animating", ctx_r1._isAnimating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1.panelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1.ariaLabelledby || null)("aria-describedby", ctx_r1.ariaDescribedby || null);
  }
}
const MAT_MENU_PANEL = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_MENU_PANEL');

/**
 * Single item inside a `mat-menu`. Provides the menu item styling and accessibility treatment.
 */
let MatMenuItem = /*#__PURE__*/(() => {
  class MatMenuItem {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT);
    _focusMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.FocusMonitor);
    _parentMenu = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_MENU_PANEL, {
      optional: true
    });
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    /** ARIA role for the menu item. */
    role = 'menuitem';
    /** Whether the menu item is disabled. */
    disabled = false;
    /** Whether ripples are disabled on the menu item. */
    disableRipple = false;
    /** Stream that emits when the menu item is hovered. */
    _hovered = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** Stream that emits when the menu item is focused. */
    _focused = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** Whether the menu item is highlighted. */
    _highlighted = false;
    /** Whether the menu item acts as a trigger for a sub-menu. */
    _triggersSubmenu = false;
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_7__._CdkPrivateStyleLoader).load(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__._StructuralStylesLoader);
      this._parentMenu?.addItem?.(this);
    }
    /** Focuses the menu item. */
    focus(origin, options) {
      if (this._focusMonitor && origin) {
        this._focusMonitor.focusVia(this._getHostElement(), origin, options);
      } else {
        this._getHostElement().focus(options);
      }
      this._focused.next(this);
    }
    ngAfterViewInit() {
      if (this._focusMonitor) {
        // Start monitoring the element, so it gets the appropriate focused classes. We want
        // to show the focus style for menu items only when the focus was not caused by a
        // mouse or touch interaction.
        this._focusMonitor.monitor(this._elementRef, false);
      }
    }
    ngOnDestroy() {
      if (this._focusMonitor) {
        this._focusMonitor.stopMonitoring(this._elementRef);
      }
      if (this._parentMenu && this._parentMenu.removeItem) {
        this._parentMenu.removeItem(this);
      }
      this._hovered.complete();
      this._focused.complete();
    }
    /** Used to set the `tabindex`. */
    _getTabIndex() {
      return this.disabled ? '-1' : '0';
    }
    /** Returns the host DOM element. */
    _getHostElement() {
      return this._elementRef.nativeElement;
    }
    /** Prevents the default element actions if it is disabled. */
    _checkDisabled(event) {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    /** Emits to the hover stream. */
    _handleMouseEnter() {
      this._hovered.next(this);
    }
    /** Gets the label to be used when determining whether the option should be focused. */
    getLabel() {
      const clone = this._elementRef.nativeElement.cloneNode(true);
      const icons = clone.querySelectorAll('mat-icon, .material-icons');
      // Strip away icons, so they don't show up in the text.
      for (let i = 0; i < icons.length; i++) {
        icons[i].remove();
      }
      return clone.textContent?.trim() || '';
    }
    _setHighlighted(isHighlighted) {
      // We need to mark this for check for the case where the content is coming from a
      // `matMenuContent` whose change detection tree is at the declaration position,
      // not the insertion position. See #23175.
      this._highlighted = isHighlighted;
      this._changeDetectorRef.markForCheck();
    }
    _setTriggersSubmenu(triggersSubmenu) {
      this._triggersSubmenu = triggersSubmenu;
      this._changeDetectorRef.markForCheck();
    }
    _hasFocus() {
      return this._document && this._document.activeElement === this._getHostElement();
    }
    static ɵfac = function MatMenuItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatMenuItem)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatMenuItem,
      selectors: [["", "mat-menu-item", ""]],
      hostAttrs: [1, "mat-mdc-menu-item", "mat-focus-indicator"],
      hostVars: 8,
      hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatMenuItem_click_HostBindingHandler($event) {
            return ctx._checkDisabled($event);
          })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
            return ctx._handleMouseEnter();
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled)("disabled", ctx.disabled || null);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-menu-item-highlighted", ctx._highlighted)("mat-mdc-menu-item-submenu-trigger", ctx._triggersSubmenu);
        }
      },
      inputs: {
        role: "role",
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      exportAs: ["matMenuItem"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      attrs: _c0,
      ngContentSelectors: _c2,
      decls: 5,
      vars: 3,
      consts: [[1, "mat-mdc-menu-item-text"], ["matRipple", "", 1, "mat-mdc-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]],
      template: function MatMenuItem_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatMenuItem_Conditional_4_Template, 2, 0, ":svg:svg", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._triggersSubmenu ? 4 : -1);
        }
      },
      dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatMenuItem;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Throws an exception for the case when menu's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 * @docs-private
 */
function throwMatMenuInvalidPositionX() {
  throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
/**
 * Throws an exception for the case when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 * @docs-private
 */
function throwMatMenuInvalidPositionY() {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
/**
 * Throws an exception for the case when a menu is assigned
 * to a trigger that is placed inside the same menu.
 * @docs-private
 */
function throwMatMenuRecursiveError() {
  throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is ` + `not a parent of the trigger or move the trigger outside of the menu.`);
}

/**
 * Injection token that can be used to reference instances of `MatMenuContent`. It serves
 * as alternative token to the actual `MatMenuContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_MENU_CONTENT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatMenuContent');
/** Menu content that will be rendered lazily once the menu is opened. */
let MatMenuContent = /*#__PURE__*/(() => {
  class MatMenuContent {
    _template = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    _appRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    _viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT);
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    _portal;
    _outlet;
    /** Emits when the menu content has been attached. */
    _attached = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    constructor() {}
    /**
     * Attaches the content with a particular context.
     * @docs-private
     */
    attach(context = {}) {
      if (!this._portal) {
        this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.TemplatePortal(this._template, this._viewContainerRef);
      }
      this.detach();
      if (!this._outlet) {
        this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.DomPortalOutlet(this._document.createElement('div'), null, this._appRef, this._injector);
      }
      const element = this._template.elementRef.nativeElement;
      // Because we support opening the same menu from different triggers (which in turn have their
      // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
      // risk it staying attached to a pane that's no longer in the DOM.
      element.parentNode.insertBefore(this._outlet.outletElement, element);
      // When `MatMenuContent` is used in an `OnPush` component, the insertion of the menu
      // content via `createEmbeddedView` does not cause the content to be seen as "dirty"
      // by Angular. This causes the `@ContentChildren` for menu items within the menu to
      // not be updated by Angular. By explicitly marking for check here, we tell Angular that
      // it needs to check for new menu items and update the `@ContentChild` in `MatMenu`.
      this._changeDetectorRef.markForCheck();
      this._portal.attach(this._outlet, context);
      this._attached.next();
    }
    /**
     * Detaches the content.
     * @docs-private
     */
    detach() {
      if (this._portal?.isAttached) {
        this._portal.detach();
      }
    }
    ngOnDestroy() {
      this.detach();
      this._outlet?.dispose();
    }
    static ɵfac = function MatMenuContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatMenuContent)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatMenuContent,
      selectors: [["ng-template", "matMenuContent", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MAT_MENU_CONTENT,
        useExisting: MatMenuContent
      }])]
    });
  }
  return MatMenuContent;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Injection token to be used to override the default options for `mat-menu`. */
const MAT_MENU_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-menu-default-options', {
  providedIn: 'root',
  factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
  return {
    overlapTrigger: false,
    xPosition: 'after',
    yPosition: 'below',
    backdropClass: 'cdk-overlay-transparent-backdrop'
  };
}
/** Name of the enter animation `@keyframes`. */
const ENTER_ANIMATION = '_mat-menu-enter';
/** Name of the exit animation `@keyframes`. */
const EXIT_ANIMATION = '_mat-menu-exit';
let MatMenu = /*#__PURE__*/(() => {
  class MatMenu {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    _keyManager;
    _xPosition;
    _yPosition;
    _firstItemFocusRef;
    _exitFallbackTimeout;
    /** Whether animations are currently disabled. */
    _animationsDisabled;
    /** All items inside the menu. Includes items nested inside another menu. */
    _allItems;
    /** Only the direct descendant menu items. */
    _directDescendantItems = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    /** Classes to be applied to the menu panel. */
    _classList = {};
    /** Current state of the panel animation. */
    _panelAnimationState = 'void';
    /** Emits whenever an animation on the menu completes. */
    _animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** Whether the menu is animating. */
    _isAnimating = false;
    /** Parent menu of the current menu panel. */
    parentMenu;
    /** Layout direction of the menu. */
    direction;
    /** Class or list of classes to be added to the overlay panel. */
    overlayPanelClass;
    /** Class to be added to the backdrop element. */
    backdropClass;
    /** aria-label for the menu panel. */
    ariaLabel;
    /** aria-labelledby for the menu panel. */
    ariaLabelledby;
    /** aria-describedby for the menu panel. */
    ariaDescribedby;
    /** Position of the menu in the X axis. */
    get xPosition() {
      return this._xPosition;
    }
    set xPosition(value) {
      if (value !== 'before' && value !== 'after' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwMatMenuInvalidPositionX();
      }
      this._xPosition = value;
      this.setPositionClasses();
    }
    /** Position of the menu in the Y axis. */
    get yPosition() {
      return this._yPosition;
    }
    set yPosition(value) {
      if (value !== 'above' && value !== 'below' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwMatMenuInvalidPositionY();
      }
      this._yPosition = value;
      this.setPositionClasses();
    }
    /** @docs-private */
    templateRef;
    /**
     * List of the items inside of a menu.
     * @deprecated
     * @breaking-change 8.0.0
     */
    items;
    /**
     * Menu content that will be rendered lazily.
     * @docs-private
     */
    lazyContent;
    /** Whether the menu should overlap its trigger. */
    overlapTrigger;
    /** Whether the menu has a backdrop. */
    hasBackdrop;
    /**
     * This method takes classes set on the host mat-menu element and applies them on the
     * menu template that displays in the overlay container.  Otherwise, it's difficult
     * to style the containing menu from outside the component.
     * @param classes list of class names
     */
    set panelClass(classes) {
      const previousPanelClass = this._previousPanelClass;
      const newClassList = {
        ...this._classList
      };
      if (previousPanelClass && previousPanelClass.length) {
        previousPanelClass.split(' ').forEach(className => {
          newClassList[className] = false;
        });
      }
      this._previousPanelClass = classes;
      if (classes && classes.length) {
        classes.split(' ').forEach(className => {
          newClassList[className] = true;
        });
        this._elementRef.nativeElement.className = '';
      }
      this._classList = newClassList;
    }
    _previousPanelClass;
    /**
     * This method takes classes set on the host mat-menu element and applies them on the
     * menu template that displays in the overlay container.  Otherwise, it's difficult
     * to style the containing menu from outside the component.
     * @deprecated Use `panelClass` instead.
     * @breaking-change 8.0.0
     */
    get classList() {
      return this.panelClass;
    }
    set classList(classes) {
      this.panelClass = classes;
    }
    /** Event emitted when the menu is closed. */
    closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Event emitted when the menu is closed.
     * @deprecated Switch to `closed` instead
     * @breaking-change 8.0.0
     */
    close = this.closed;
    panelId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__._IdGenerator).getId('mat-menu-panel-');
    constructor() {
      const defaultOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_MENU_DEFAULT_OPTIONS);
      this.overlayPanelClass = defaultOptions.overlayPanelClass || '';
      this._xPosition = defaultOptions.xPosition;
      this._yPosition = defaultOptions.yPosition;
      this.backdropClass = defaultOptions.backdropClass;
      this.overlapTrigger = defaultOptions.overlapTrigger;
      this.hasBackdrop = defaultOptions.hasBackdrop;
      this._animationsDisabled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, {
        optional: true
      }) === 'NoopAnimations';
    }
    ngOnInit() {
      this.setPositionClasses();
    }
    ngAfterContentInit() {
      this._updateDirectDescendants();
      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
      this._keyManager.tabOut.subscribe(() => this.closed.emit('tab'));
      // If a user manually (programmatically) focuses a menu item, we need to reflect that focus
      // change back to the key manager. Note that we don't need to unsubscribe here because _focused
      // is internal and we know that it gets completed on destroy.
      this._directDescendantItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(this._directDescendantItems), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(items => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)(...items.map(item => item._focused)))).subscribe(focusedItem => this._keyManager.updateActiveItem(focusedItem));
      this._directDescendantItems.changes.subscribe(itemsList => {
        // Move focus to another item, if the active item is removed from the list.
        // We need to debounce the callback, because multiple items might be removed
        // in quick succession.
        const manager = this._keyManager;
        if (this._panelAnimationState === 'enter' && manager.activeItem?._hasFocus()) {
          const items = itemsList.toArray();
          const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));
          if (items[index] && !items[index].disabled) {
            manager.setActiveItem(index);
          } else {
            manager.setNextItemActive();
          }
        }
      });
    }
    ngOnDestroy() {
      this._keyManager?.destroy();
      this._directDescendantItems.destroy();
      this.closed.complete();
      this._firstItemFocusRef?.destroy();
      clearTimeout(this._exitFallbackTimeout);
    }
    /** Stream that emits whenever the hovered menu item changes. */
    _hovered() {
      // Coerce the `changes` property because Angular types it as `Observable<any>`
      const itemChanges = this._directDescendantItems.changes;
      return itemChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(this._directDescendantItems), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(items => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)(...items.map(item => item._hovered))));
    }
    /*
     * Registers a menu item with the menu.
     * @docs-private
     * @deprecated No longer being used. To be removed.
     * @breaking-change 9.0.0
     */
    addItem(_item) {}
    /**
     * Removes an item from the menu.
     * @docs-private
     * @deprecated No longer being used. To be removed.
     * @breaking-change 9.0.0
     */
    removeItem(_item) {}
    /** Handle a keyboard event from the menu, delegating to the appropriate action. */
    _handleKeydown(event) {
      const keyCode = event.keyCode;
      const manager = this._keyManager;
      switch (keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.ESCAPE:
          if (!(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.hasModifierKey)(event)) {
            event.preventDefault();
            this.closed.emit('keydown');
          }
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.LEFT_ARROW:
          if (this.parentMenu && this.direction === 'ltr') {
            this.closed.emit('keydown');
          }
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.RIGHT_ARROW:
          if (this.parentMenu && this.direction === 'rtl') {
            this.closed.emit('keydown');
          }
          break;
        default:
          if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.DOWN_ARROW) {
            manager.setFocusOrigin('keyboard');
          }
          manager.onKeydown(event);
          return;
      }
    }
    /**
     * Focus the first item in the menu.
     * @param origin Action from which the focus originated. Used to set the correct styling.
     */
    focusFirstItem(origin = 'program') {
      // Wait for `afterNextRender` to ensure iOS VoiceOver screen reader focuses the first item (#24735).
      this._firstItemFocusRef?.destroy();
      this._firstItemFocusRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
        const menuPanel = this._resolvePanel();
        // If an item in the menuPanel is already focused, avoid overriding the focus.
        if (!menuPanel || !menuPanel.contains(document.activeElement)) {
          const manager = this._keyManager;
          manager.setFocusOrigin(origin).setFirstItemActive();
          // If there's no active item at this point, it means that all the items are disabled.
          // Move focus to the menuPanel panel so keyboard events like Escape still work. Also this will
          // give _some_ feedback to screen readers.
          if (!manager.activeItem && menuPanel) {
            menuPanel.focus();
          }
        }
      }, {
        injector: this._injector
      });
    }
    /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     */
    resetActiveItem() {
      this._keyManager.setActiveItem(-1);
    }
    /**
     * @deprecated No longer used and will be removed.
     * @breaking-change 21.0.0
     */
    setElevation(_depth) {}
    /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * @param posX Position of the menu along the x axis.
     * @param posY Position of the menu along the y axis.
     * @docs-private
     */
    setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
      this._classList = {
        ...this._classList,
        ['mat-menu-before']: posX === 'before',
        ['mat-menu-after']: posX === 'after',
        ['mat-menu-above']: posY === 'above',
        ['mat-menu-below']: posY === 'below'
      };
      this._changeDetectorRef.markForCheck();
    }
    /** Callback that is invoked when the panel animation completes. */
    _onAnimationDone(state) {
      const isExit = state === EXIT_ANIMATION;
      if (isExit || state === ENTER_ANIMATION) {
        if (isExit) {
          clearTimeout(this._exitFallbackTimeout);
          this._exitFallbackTimeout = undefined;
        }
        this._animationDone.next(isExit ? 'void' : 'enter');
        this._isAnimating = false;
      }
    }
    _onAnimationStart(state) {
      if (state === ENTER_ANIMATION || state === EXIT_ANIMATION) {
        this._isAnimating = true;
      }
    }
    _setIsOpen(isOpen) {
      this._panelAnimationState = isOpen ? 'enter' : 'void';
      if (isOpen) {
        if (this._keyManager.activeItemIndex === 0) {
          // Scroll the content element to the top as soon as the animation starts. This is necessary,
          // because we move focus to the first item while it's still being animated, which can throw
          // the browser off when it determines the scroll position. Alternatively we can move focus
          // when the animation is done, however moving focus asynchronously will interrupt screen
          // readers which are in the process of reading out the menu already. We take the `element`
          // from the `event` since we can't use a `ViewChild` to access the pane.
          const menuPanel = this._resolvePanel();
          if (menuPanel) {
            menuPanel.scrollTop = 0;
          }
        }
      } else if (!this._animationsDisabled) {
        // Some apps do `* { animation: none !important; }` in tests which will prevent the
        // `animationend` event from firing. Since the exit animation is loading-bearing for
        // removing the content from the DOM, add a fallback timer.
        this._exitFallbackTimeout = setTimeout(() => this._onAnimationDone(EXIT_ANIMATION), 200);
      }
      // Animation events won't fire when animations are disabled so we simulate them.
      if (this._animationsDisabled) {
        setTimeout(() => {
          this._onAnimationDone(isOpen ? ENTER_ANIMATION : EXIT_ANIMATION);
        });
      }
      this._changeDetectorRef.markForCheck();
    }
    /**
     * Sets up a stream that will keep track of any newly-added menu items and will update the list
     * of direct descendants. We collect the descendants this way, because `_allItems` can include
     * items that are part of child menus, and using a custom way of registering items is unreliable
     * when it comes to maintaining the item order.
     */
    _updateDirectDescendants() {
      this._allItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(this._allItems)).subscribe(items => {
        this._directDescendantItems.reset(items.filter(item => item._parentMenu === this));
        this._directDescendantItems.notifyOnChanges();
      });
    }
    /** Gets the menu panel DOM node. */
    _resolvePanel() {
      let menuPanel = null;
      if (this._directDescendantItems.length) {
        // Because the `mat-menuPanel` is at the DOM insertion point, not inside the overlay, we don't
        // have a nice way of getting a hold of the menuPanel panel. We can't use a `ViewChild` either
        // because the panel is inside an `ng-template`. We work around it by starting from one of
        // the items and walking up the DOM.
        menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
      }
      return menuPanel;
    }
    static ɵfac = function MatMenu_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatMenu)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatMenu,
      selectors: [["mat-menu"]],
      contentQueries: function MatMenu_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_MENU_CONTENT, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatMenuItem, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatMenuItem, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lazyContent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allItems = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
        }
      },
      viewQuery: function MatMenu_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
        }
      },
      hostVars: 3,
      hostBindings: function MatMenu_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
        }
      },
      inputs: {
        backdropClass: "backdropClass",
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
        xPosition: "xPosition",
        yPosition: "yPosition",
        overlapTrigger: [2, "overlapTrigger", "overlapTrigger", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        hasBackdrop: [2, "hasBackdrop", "hasBackdrop", value => value == null ? null : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute)(value)],
        panelClass: [0, "class", "panelClass"],
        classList: "classList"
      },
      outputs: {
        closed: "closed",
        close: "close"
      },
      exportAs: ["matMenu"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MAT_MENU_PANEL,
        useExisting: MatMenu
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
      ngContentSelectors: _c3,
      decls: 1,
      vars: 0,
      consts: [["tabindex", "-1", "role", "menu", 1, "mat-mdc-menu-panel", 3, "click", "animationstart", "animationend", "animationcancel", "id"], [1, "mat-mdc-menu-content"]],
      template: function MatMenu_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatMenu_ng_template_0_Template, 3, 12, "ng-template");
        }
      },
      styles: ["mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}@keyframes _mat-menu-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-menu-exit{from{opacity:1}to{opacity:0}}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;box-sizing:border-box;outline:0;animation:_mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.mat-menu-panel-exit-animation{animation:_mat-menu-exit 100ms 25ms linear forwards}.mat-mdc-menu-panel.mat-menu-panel-animations-disabled{animation:none}.mat-mdc-menu-panel.mat-menu-panel-animating{pointer-events:none}.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:\"\";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatMenu;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Injection token that determines the scroll handling while the menu is open. */
const MAT_MENU_SCROLL_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-menu-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    const overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.Overlay);
    return () => overlay.scrollStrategies.reposition();
  }
});
/** @docs-private */
function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_MENU_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.Overlay],
  useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
};
/** Options for binding a passive event listener. */
const passiveEventListenerOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.normalizePassiveListenerOptions)({
  passive: true
});
/**
 * Default top padding of the menu panel.
 * @deprecated No longer being used. Will be removed.
 * @breaking-change 15.0.0
 */
const MENU_PANEL_TOP_PADDING = 8;
/** Mapping between menu panels and the last trigger that opened them. */
const PANELS_TO_TRIGGERS = /*#__PURE__*/new WeakMap();
/** Directive applied to an element that should trigger a `mat-menu`. */
let MatMenuTrigger = /*#__PURE__*/(() => {
  class MatMenuTrigger {
    _overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.Overlay);
    _element = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    _viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    _menuItemInstance = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MatMenuItem, {
      optional: true,
      self: true
    });
    _dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, {
      optional: true
    });
    _focusMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.FocusMonitor);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    _scrollStrategy = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_MENU_SCROLL_STRATEGY);
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    _portal;
    _overlayRef = null;
    _menuOpen = false;
    _closingActionsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    _hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    _menuCloseSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    _pendingRemoval;
    /**
     * We're specifically looking for a `MatMenu` here since the generic `MatMenuPanel`
     * interface lacks some functionality around nested menus and animations.
     */
    _parentMaterialMenu;
    /**
     * Cached value of the padding of the parent menu panel.
     * Used to offset sub-menus to compensate for the padding.
     */
    _parentInnerPadding;
    /**
     * Handles touch start events on the trigger.
     * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
     */
    _handleTouchStart = event => {
      if (!(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.isFakeTouchstartFromScreenReader)(event)) {
        this._openedBy = 'touch';
      }
    };
    // Tracking input type is necessary so it's possible to only auto-focus
    // the first item of the list when the menu is opened via the keyboard
    _openedBy = undefined;
    /**
     * @deprecated
     * @breaking-change 8.0.0
     */
    get _deprecatedMatMenuTriggerFor() {
      return this.menu;
    }
    set _deprecatedMatMenuTriggerFor(v) {
      this.menu = v;
    }
    /** References the menu instance that the trigger is associated with. */
    get menu() {
      return this._menu;
    }
    set menu(menu) {
      if (menu === this._menu) {
        return;
      }
      this._menu = menu;
      this._menuCloseSubscription.unsubscribe();
      if (menu) {
        if (menu === this._parentMaterialMenu && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throwMatMenuRecursiveError();
        }
        this._menuCloseSubscription = menu.close.subscribe(reason => {
          this._destroyMenu(reason);
          // If a click closed the menu, we should close the entire chain of nested menus.
          if ((reason === 'click' || reason === 'tab') && this._parentMaterialMenu) {
            this._parentMaterialMenu.closed.emit(reason);
          }
        });
      }
      this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu());
    }
    _menu;
    /** Data to be passed along to any lazily-rendered content. */
    menuData;
    /**
     * Whether focus should be restored when the menu is closed.
     * Note that disabling this option can have accessibility implications
     * and it's up to you to manage focus, if you decide to turn it off.
     */
    restoreFocus = true;
    /** Event emitted when the associated menu is opened. */
    menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Event emitted when the associated menu is opened.
     * @deprecated Switch to `menuOpened` instead
     * @breaking-change 8.0.0
     */
    // tslint:disable-next-line:no-output-on-prefix
    onMenuOpen = this.menuOpened;
    /** Event emitted when the associated menu is closed. */
    menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Event emitted when the associated menu is closed.
     * @deprecated Switch to `menuClosed` instead
     * @breaking-change 8.0.0
     */
    // tslint:disable-next-line:no-output-on-prefix
    onMenuClose = this.menuClosed;
    constructor() {
      const parentMenu = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_MENU_PANEL, {
        optional: true
      });
      this._parentMaterialMenu = parentMenu instanceof MatMenu ? parentMenu : undefined;
      this._element.nativeElement.addEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);
    }
    ngAfterContentInit() {
      this._handleHover();
    }
    ngOnDestroy() {
      if (this.menu && this._ownsMenu(this.menu)) {
        PANELS_TO_TRIGGERS.delete(this.menu);
      }
      this._element.nativeElement.removeEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);
      this._pendingRemoval?.unsubscribe();
      this._menuCloseSubscription.unsubscribe();
      this._closingActionsSubscription.unsubscribe();
      this._hoverSubscription.unsubscribe();
      if (this._overlayRef) {
        this._overlayRef.dispose();
        this._overlayRef = null;
      }
    }
    /** Whether the menu is open. */
    get menuOpen() {
      return this._menuOpen;
    }
    /** The text direction of the containing app. */
    get dir() {
      return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Whether the menu triggers a sub-menu or a top-level one. */
    triggersSubmenu() {
      return !!(this._menuItemInstance && this._parentMaterialMenu && this.menu);
    }
    /** Toggles the menu between the open and closed states. */
    toggleMenu() {
      return this._menuOpen ? this.closeMenu() : this.openMenu();
    }
    /** Opens the menu. */
    openMenu() {
      const menu = this.menu;
      if (this._menuOpen || !menu) {
        return;
      }
      this._pendingRemoval?.unsubscribe();
      const previousTrigger = PANELS_TO_TRIGGERS.get(menu);
      PANELS_TO_TRIGGERS.set(menu, this);
      // If the same menu is currently attached to another trigger,
      // we need to close it so it doesn't end up in a broken state.
      if (previousTrigger && previousTrigger !== this) {
        previousTrigger.closeMenu();
      }
      const overlayRef = this._createOverlay(menu);
      const overlayConfig = overlayRef.getConfig();
      const positionStrategy = overlayConfig.positionStrategy;
      this._setPosition(menu, positionStrategy);
      overlayConfig.hasBackdrop = menu.hasBackdrop == null ? !this.triggersSubmenu() : menu.hasBackdrop;
      // We need the `hasAttached` check for the case where the user kicked off a removal animation,
      // but re-entered the menu. Re-attaching the same portal will trigger an error otherwise.
      if (!overlayRef.hasAttached()) {
        overlayRef.attach(this._getPortal(menu));
        menu.lazyContent?.attach(this.menuData);
      }
      this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this.closeMenu());
      menu.parentMenu = this.triggersSubmenu() ? this._parentMaterialMenu : undefined;
      menu.direction = this.dir;
      menu.focusFirstItem(this._openedBy || 'program');
      this._setIsMenuOpen(true);
      if (menu instanceof MatMenu) {
        menu._setIsOpen(true);
        menu._directDescendantItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(menu.close)).subscribe(() => {
          // Re-adjust the position without locking when the amount of items
          // changes so that the overlay is allowed to pick a new optimal position.
          positionStrategy.withLockedPosition(false).reapplyLastPosition();
          positionStrategy.withLockedPosition(true);
        });
      }
    }
    /** Closes the menu. */
    closeMenu() {
      this.menu?.close.emit();
    }
    /**
     * Focuses the menu trigger.
     * @param origin Source of the menu trigger's focus.
     */
    focus(origin, options) {
      if (this._focusMonitor && origin) {
        this._focusMonitor.focusVia(this._element, origin, options);
      } else {
        this._element.nativeElement.focus(options);
      }
    }
    /**
     * Updates the position of the menu to ensure that it fits all options within the viewport.
     */
    updatePosition() {
      this._overlayRef?.updatePosition();
    }
    /** Closes the menu and does the necessary cleanup. */
    _destroyMenu(reason) {
      const overlayRef = this._overlayRef;
      const menu = this._menu;
      if (!overlayRef || !this.menuOpen) {
        return;
      }
      this._closingActionsSubscription.unsubscribe();
      this._pendingRemoval?.unsubscribe();
      // Note that we don't wait for the animation to finish if another trigger took
      // over the menu, because the panel will end up empty which looks glitchy.
      if (menu instanceof MatMenu && this._ownsMenu(menu)) {
        this._pendingRemoval = menu._animationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(() => {
          overlayRef.detach();
          menu.lazyContent?.detach();
        });
        menu._setIsOpen(false);
      } else {
        overlayRef.detach();
        menu?.lazyContent?.detach();
      }
      if (menu && this._ownsMenu(menu)) {
        PANELS_TO_TRIGGERS.delete(menu);
      }
      // Always restore focus if the user is navigating using the keyboard or the menu was opened
      // programmatically. We don't restore for non-root triggers, because it can prevent focus
      // from making it back to the root trigger when closing a long chain of menus by clicking
      // on the backdrop.
      if (this.restoreFocus && (reason === 'keydown' || !this._openedBy || !this.triggersSubmenu())) {
        this.focus(this._openedBy);
      }
      this._openedBy = undefined;
      this._setIsMenuOpen(false);
    }
    // set state rather than toggle to support triggers sharing a menu
    _setIsMenuOpen(isOpen) {
      if (isOpen !== this._menuOpen) {
        this._menuOpen = isOpen;
        this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
        if (this.triggersSubmenu()) {
          this._menuItemInstance._setHighlighted(isOpen);
        }
        this._changeDetectorRef.markForCheck();
      }
    }
    /**
     * This method creates the overlay from the provided menu's template and saves its
     * OverlayRef so that it can be attached to the DOM when openMenu is called.
     */
    _createOverlay(menu) {
      if (!this._overlayRef) {
        const config = this._getOverlayConfig(menu);
        this._subscribeToPositions(menu, config.positionStrategy);
        this._overlayRef = this._overlay.create(config);
        this._overlayRef.keydownEvents().subscribe(event => {
          if (this.menu instanceof MatMenu) {
            this.menu._handleKeydown(event);
          }
        });
      }
      return this._overlayRef;
    }
    /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
     * @returns OverlayConfig
     */
    _getOverlayConfig(menu) {
      return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayConfig({
        positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
        backdropClass: menu.backdropClass || 'cdk-overlay-transparent-backdrop',
        panelClass: menu.overlayPanelClass,
        scrollStrategy: this._scrollStrategy(),
        direction: this._dir || 'ltr'
      });
    }
    /**
     * Listens to changes in the position of the overlay and sets the correct classes
     * on the menu based on the new position. This ensures the animation origin is always
     * correct, even if a fallback position is used for the overlay.
     */
    _subscribeToPositions(menu, position) {
      if (menu.setPositionClasses) {
        position.positionChanges.subscribe(change => {
          this._ngZone.run(() => {
            const posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
            const posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';
            menu.setPositionClasses(posX, posY);
          });
        });
      }
    }
    /**
     * Sets the appropriate positions on a position strategy
     * so the overlay connects with the trigger correctly.
     * @param positionStrategy Strategy whose position to update.
     */
    _setPosition(menu, positionStrategy) {
      let [originX, originFallbackX] = menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];
      let [overlayY, overlayFallbackY] = menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];
      let [originY, originFallbackY] = [overlayY, overlayFallbackY];
      let [overlayX, overlayFallbackX] = [originX, originFallbackX];
      let offsetY = 0;
      if (this.triggersSubmenu()) {
        // When the menu is a sub-menu, it should always align itself
        // to the edges of the trigger, instead of overlapping it.
        overlayFallbackX = originX = menu.xPosition === 'before' ? 'start' : 'end';
        originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
        if (this._parentMaterialMenu) {
          if (this._parentInnerPadding == null) {
            const firstItem = this._parentMaterialMenu.items.first;
            this._parentInnerPadding = firstItem ? firstItem._getHostElement().offsetTop : 0;
          }
          offsetY = overlayY === 'bottom' ? this._parentInnerPadding : -this._parentInnerPadding;
        }
      } else if (!menu.overlapTrigger) {
        originY = overlayY === 'top' ? 'bottom' : 'top';
        originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
      }
      positionStrategy.withPositions([{
        originX,
        originY,
        overlayX,
        overlayY,
        offsetY
      }, {
        originX: originFallbackX,
        originY,
        overlayX: overlayFallbackX,
        overlayY,
        offsetY
      }, {
        originX,
        originY: originFallbackY,
        overlayX,
        overlayY: overlayFallbackY,
        offsetY: -offsetY
      }, {
        originX: originFallbackX,
        originY: originFallbackY,
        overlayX: overlayFallbackX,
        overlayY: overlayFallbackY,
        offsetY: -offsetY
      }]);
    }
    /** Returns a stream that emits whenever an action that should close the menu occurs. */
    _menuClosingActions() {
      const backdrop = this._overlayRef.backdropClick();
      const detachments = this._overlayRef.detachments();
      const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)();
      const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(active => this._menuOpen && active !== this._menuItemInstance)) : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)(backdrop, parentClose, hover, detachments);
    }
    /** Handles mouse presses on the trigger. */
    _handleMousedown(event) {
      if (!(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.isFakeMousedownFromScreenReader)(event)) {
        // Since right or middle button clicks won't trigger the `click` event,
        // we shouldn't consider the menu as opened by mouse in those cases.
        this._openedBy = event.button === 0 ? 'mouse' : undefined;
        // Since clicking on the trigger won't close the menu if it opens a sub-menu,
        // we should prevent focus from moving onto it via click to avoid the
        // highlight from lingering on the menu item.
        if (this.triggersSubmenu()) {
          event.preventDefault();
        }
      }
    }
    /** Handles key presses on the trigger. */
    _handleKeydown(event) {
      const keyCode = event.keyCode;
      // Pressing enter on the trigger will trigger the click handler later.
      if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.SPACE) {
        this._openedBy = 'keyboard';
      }
      if (this.triggersSubmenu() && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.RIGHT_ARROW && this.dir === 'ltr' || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.LEFT_ARROW && this.dir === 'rtl')) {
        this._openedBy = 'keyboard';
        this.openMenu();
      }
    }
    /** Handles click events on the trigger. */
    _handleClick(event) {
      if (this.triggersSubmenu()) {
        // Stop event propagation to avoid closing the parent menu.
        event.stopPropagation();
        this.openMenu();
      } else {
        this.toggleMenu();
      }
    }
    /** Handles the cases where the user hovers over the trigger. */
    _handleHover() {
      // Subscribe to changes in the hovered item in order to toggle the panel.
      if (this.triggersSubmenu() && this._parentMaterialMenu) {
        this._hoverSubscription = this._parentMaterialMenu._hovered().subscribe(active => {
          if (active === this._menuItemInstance && !active.disabled) {
            this._openedBy = 'mouse';
            this.openMenu();
          }
        });
      }
    }
    /** Gets the portal that should be attached to the overlay. */
    _getPortal(menu) {
      // Note that we can avoid this check by keeping the portal on the menu panel.
      // While it would be cleaner, we'd have to introduce another required method on
      // `MatMenuPanel`, making it harder to consume.
      if (!this._portal || this._portal.templateRef !== menu.templateRef) {
        this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.TemplatePortal(menu.templateRef, this._viewContainerRef);
      }
      return this._portal;
    }
    /**
     * Determines whether the trigger owns a specific menu panel, at the current point in time.
     * This allows us to distinguish the case where the same panel is passed into multiple triggers
     * and multiple are open at a time.
     */
    _ownsMenu(menu) {
      return PANELS_TO_TRIGGERS.get(menu) === this;
    }
    static ɵfac = function MatMenuTrigger_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatMenuTrigger)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatMenuTrigger,
      selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
      hostAttrs: [1, "mat-mdc-menu-trigger"],
      hostVars: 3,
      hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatMenuTrigger_click_HostBindingHandler($event) {
            return ctx._handleClick($event);
          })("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
            return ctx._handleMousedown($event);
          })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx.menu ? "menu" : null)("aria-expanded", ctx.menuOpen)("aria-controls", ctx.menuOpen ? ctx.menu.panelId : null);
        }
      },
      inputs: {
        _deprecatedMatMenuTriggerFor: [0, "mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
        menu: [0, "matMenuTriggerFor", "menu"],
        menuData: [0, "matMenuTriggerData", "menuData"],
        restoreFocus: [0, "matMenuTriggerRestoreFocus", "restoreFocus"]
      },
      outputs: {
        menuOpened: "menuOpened",
        onMenuOpen: "onMenuOpen",
        menuClosed: "menuClosed",
        onMenuClose: "onMenuClose"
      },
      exportAs: ["matMenuTrigger"]
    });
  }
  return MatMenuTrigger;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatMenuModule = /*#__PURE__*/(() => {
  class MatMenuModule {
    static ɵfac = function MatMenuModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatMenuModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatMenuModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatCommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatCommonModule]
    });
  }
  return MatMenuModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Animations used by the mat-menu component.
 * Animation duration and timing values are based on:
 * https://material.io/guidelines/components/menus.html#menus-usage
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
const matMenuAnimations = {
  /**
   * This animation controls the menu panel's entry and exit from the page.
   *
   * When the menu panel is added to the DOM, it scales in and fades in its border.
   *
   * When the menu panel is removed from the DOM, it simply fades out after a brief
   * delay to display the ripple.
   */
  transformMenu: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.trigger)('transformMenu', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('void', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    opacity: 0,
    transform: 'scale(0.8)'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('void => enter', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    opacity: 1,
    transform: 'scale(1)'
  }))), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('* => void', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('100ms 25ms linear', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    opacity: 0
  })))]),
  /**
   * This animation fades in the background color and content of the menu panel
   * after its containing element is scaled in.
   */
  fadeInItems: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.trigger)('fadeInItems', [
  /*#__PURE__*/
  // TODO(crisbeto): this is inside the `transformMenu`
  // now. Remove next time we do breaking changes.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('showing', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    opacity: 1
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('void => *', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    opacity: 0
  }), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
};
/**
 * @deprecated
 * @breaking-change 8.0.0
 * @docs-private
 */
const fadeInItems = matMenuAnimations.fadeInItems;
/**
 * @deprecated
 * @breaking-change 8.0.0
 * @docs-private
 */
const transformMenu = matMenuAnimations.transformMenu;

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=8653.js.map