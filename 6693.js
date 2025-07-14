(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[6693],{

/***/ 34205:
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/root_effect_scheduler.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AFTER_RENDER_SEQUENCES_TO_ADD: () => (/* binding */ AFTER_RENDER_SEQUENCES_TO_ADD),
/* harmony export */   CHILD_HEAD: () => (/* binding */ CHILD_HEAD),
/* harmony export */   CHILD_TAIL: () => (/* binding */ CHILD_TAIL),
/* harmony export */   CLEANUP: () => (/* binding */ CLEANUP),
/* harmony export */   CONTAINER_HEADER_OFFSET: () => (/* binding */ CONTAINER_HEADER_OFFSET),
/* harmony export */   CONTEXT: () => (/* binding */ CONTEXT),
/* harmony export */   ChangeDetectionScheduler: () => (/* binding */ ChangeDetectionScheduler),
/* harmony export */   CheckNoChangesMode: () => (/* binding */ CheckNoChangesMode),
/* harmony export */   DECLARATION_COMPONENT_VIEW: () => (/* binding */ DECLARATION_COMPONENT_VIEW),
/* harmony export */   DECLARATION_LCONTAINER: () => (/* binding */ DECLARATION_LCONTAINER),
/* harmony export */   DECLARATION_VIEW: () => (/* binding */ DECLARATION_VIEW),
/* harmony export */   DEHYDRATED_VIEWS: () => (/* binding */ DEHYDRATED_VIEWS),
/* harmony export */   DOCUMENT: () => (/* binding */ DOCUMENT),
/* harmony export */   DestroyRef: () => (/* binding */ DestroyRef),
/* harmony export */   EFFECTS: () => (/* binding */ EFFECTS),
/* harmony export */   EFFECTS_TO_SCHEDULE: () => (/* binding */ EFFECTS_TO_SCHEDULE),
/* harmony export */   EMBEDDED_VIEW_INJECTOR: () => (/* binding */ EMBEDDED_VIEW_INJECTOR),
/* harmony export */   EMPTY_ARRAY: () => (/* binding */ EMPTY_ARRAY),
/* harmony export */   EMPTY_OBJ: () => (/* binding */ EMPTY_OBJ),
/* harmony export */   ENVIRONMENT: () => (/* binding */ ENVIRONMENT),
/* harmony export */   ENVIRONMENT_INITIALIZER: () => (/* binding */ ENVIRONMENT_INITIALIZER),
/* harmony export */   EffectScheduler: () => (/* binding */ EffectScheduler),
/* harmony export */   EnvironmentInjector: () => (/* binding */ EnvironmentInjector),
/* harmony export */   ErrorHandler: () => (/* binding */ ErrorHandler),
/* harmony export */   FLAGS: () => (/* binding */ FLAGS),
/* harmony export */   HEADER_OFFSET: () => (/* binding */ HEADER_OFFSET),
/* harmony export */   HOST: () => (/* binding */ HOST),
/* harmony export */   HYDRATION: () => (/* binding */ HYDRATION),
/* harmony export */   ID: () => (/* binding */ ID),
/* harmony export */   INJECTOR: () => (/* binding */ INJECTOR$1),
/* harmony export */   INJECTOR$1: () => (/* binding */ INJECTOR),
/* harmony export */   INJECTOR_DEF_TYPES: () => (/* binding */ INJECTOR_DEF_TYPES),
/* harmony export */   INJECTOR_SCOPE: () => (/* binding */ INJECTOR_SCOPE),
/* harmony export */   INTERNAL_APPLICATION_ERROR_HANDLER: () => (/* binding */ INTERNAL_APPLICATION_ERROR_HANDLER),
/* harmony export */   InjectionToken: () => (/* binding */ InjectionToken),
/* harmony export */   Injector: () => (/* binding */ Injector),
/* harmony export */   MATH_ML_NAMESPACE: () => (/* binding */ MATH_ML_NAMESPACE),
/* harmony export */   MOVED_VIEWS: () => (/* binding */ MOVED_VIEWS),
/* harmony export */   NATIVE: () => (/* binding */ NATIVE),
/* harmony export */   NEXT: () => (/* binding */ NEXT),
/* harmony export */   NG_COMP_DEF: () => (/* binding */ NG_COMP_DEF),
/* harmony export */   NG_DIR_DEF: () => (/* binding */ NG_DIR_DEF),
/* harmony export */   NG_ELEMENT_ID: () => (/* binding */ NG_ELEMENT_ID),
/* harmony export */   NG_FACTORY_DEF: () => (/* binding */ NG_FACTORY_DEF),
/* harmony export */   NG_INJ_DEF: () => (/* binding */ NG_INJ_DEF),
/* harmony export */   NG_MOD_DEF: () => (/* binding */ NG_MOD_DEF),
/* harmony export */   NG_PIPE_DEF: () => (/* binding */ NG_PIPE_DEF),
/* harmony export */   NG_PROV_DEF: () => (/* binding */ NG_PROV_DEF),
/* harmony export */   NodeInjectorDestroyRef: () => (/* binding */ NodeInjectorDestroyRef),
/* harmony export */   NullInjector: () => (/* binding */ NullInjector),
/* harmony export */   ON_DESTROY_HOOKS: () => (/* binding */ ON_DESTROY_HOOKS),
/* harmony export */   PARENT: () => (/* binding */ PARENT),
/* harmony export */   PREORDER_HOOK_FLAGS: () => (/* binding */ PREORDER_HOOK_FLAGS),
/* harmony export */   PROVIDED_ZONELESS: () => (/* binding */ PROVIDED_ZONELESS),
/* harmony export */   PendingTasks: () => (/* binding */ PendingTasks),
/* harmony export */   PendingTasksInternal: () => (/* binding */ PendingTasksInternal),
/* harmony export */   QUERIES: () => (/* binding */ QUERIES),
/* harmony export */   R3Injector: () => (/* binding */ R3Injector),
/* harmony export */   REACTIVE_TEMPLATE_CONSUMER: () => (/* binding */ REACTIVE_TEMPLATE_CONSUMER),
/* harmony export */   RENDERER: () => (/* binding */ RENDERER),
/* harmony export */   RuntimeError: () => (/* binding */ RuntimeError),
/* harmony export */   SCHEDULE_IN_ROOT_ZONE: () => (/* binding */ SCHEDULE_IN_ROOT_ZONE),
/* harmony export */   SVG_NAMESPACE: () => (/* binding */ SVG_NAMESPACE),
/* harmony export */   TVIEW: () => (/* binding */ TVIEW),
/* harmony export */   T_HOST: () => (/* binding */ T_HOST),
/* harmony export */   VIEW_REFS: () => (/* binding */ VIEW_REFS),
/* harmony export */   ViewContext: () => (/* binding */ ViewContext),
/* harmony export */   XSS_SECURITY_URL: () => (/* binding */ XSS_SECURITY_URL),
/* harmony export */   ZONELESS_ENABLED: () => (/* binding */ ZONELESS_ENABLED),
/* harmony export */   ZONELESS_SCHEDULER_DISABLED: () => (/* binding */ ZONELESS_SCHEDULER_DISABLED),
/* harmony export */   _global: () => (/* binding */ _global),
/* harmony export */   addToArray: () => (/* binding */ addToArray),
/* harmony export */   arrayEquals: () => (/* binding */ arrayEquals),
/* harmony export */   arrayInsert2: () => (/* binding */ arrayInsert2),
/* harmony export */   arraySplice: () => (/* binding */ arraySplice),
/* harmony export */   assertComponentType: () => (/* binding */ assertComponentType),
/* harmony export */   assertDefined: () => (/* binding */ assertDefined),
/* harmony export */   assertDirectiveDef: () => (/* binding */ assertDirectiveDef),
/* harmony export */   assertDomNode: () => (/* binding */ assertDomNode),
/* harmony export */   assertElement: () => (/* binding */ assertElement),
/* harmony export */   assertEqual: () => (/* binding */ assertEqual),
/* harmony export */   assertFirstCreatePass: () => (/* binding */ assertFirstCreatePass),
/* harmony export */   assertFirstUpdatePass: () => (/* binding */ assertFirstUpdatePass),
/* harmony export */   assertFunction: () => (/* binding */ assertFunction),
/* harmony export */   assertGreaterThan: () => (/* binding */ assertGreaterThan),
/* harmony export */   assertGreaterThanOrEqual: () => (/* binding */ assertGreaterThanOrEqual),
/* harmony export */   assertHasParent: () => (/* binding */ assertHasParent),
/* harmony export */   assertInInjectionContext: () => (/* binding */ assertInInjectionContext),
/* harmony export */   assertIndexInDeclRange: () => (/* binding */ assertIndexInDeclRange),
/* harmony export */   assertIndexInExpandoRange: () => (/* binding */ assertIndexInExpandoRange),
/* harmony export */   assertIndexInRange: () => (/* binding */ assertIndexInRange),
/* harmony export */   assertInjectImplementationNotEqual: () => (/* binding */ assertInjectImplementationNotEqual),
/* harmony export */   assertLContainer: () => (/* binding */ assertLContainer),
/* harmony export */   assertLView: () => (/* binding */ assertLView),
/* harmony export */   assertLessThan: () => (/* binding */ assertLessThan),
/* harmony export */   assertNgModuleType: () => (/* binding */ assertNgModuleType),
/* harmony export */   assertNodeInjector: () => (/* binding */ assertNodeInjector),
/* harmony export */   assertNotDefined: () => (/* binding */ assertNotDefined),
/* harmony export */   assertNotEqual: () => (/* binding */ assertNotEqual),
/* harmony export */   assertNotInReactiveContext: () => (/* binding */ assertNotInReactiveContext),
/* harmony export */   assertNotReactive: () => (/* binding */ assertNotReactive),
/* harmony export */   assertNotSame: () => (/* binding */ assertNotSame),
/* harmony export */   assertNumber: () => (/* binding */ assertNumber),
/* harmony export */   assertNumberInRange: () => (/* binding */ assertNumberInRange),
/* harmony export */   assertOneOf: () => (/* binding */ assertOneOf),
/* harmony export */   assertParentView: () => (/* binding */ assertParentView),
/* harmony export */   assertProjectionSlots: () => (/* binding */ assertProjectionSlots),
/* harmony export */   assertSame: () => (/* binding */ assertSame),
/* harmony export */   assertString: () => (/* binding */ assertString),
/* harmony export */   assertTIcu: () => (/* binding */ assertTIcu),
/* harmony export */   assertTNode: () => (/* binding */ assertTNode),
/* harmony export */   assertTNodeCreationIndex: () => (/* binding */ assertTNodeCreationIndex),
/* harmony export */   assertTNodeForLView: () => (/* binding */ assertTNodeForLView),
/* harmony export */   assertTNodeForTView: () => (/* binding */ assertTNodeForTView),
/* harmony export */   attachInjectFlag: () => (/* binding */ attachInjectFlag),
/* harmony export */   concatStringsWithSpace: () => (/* binding */ concatStringsWithSpace),
/* harmony export */   convertToBitFlags: () => (/* binding */ convertToBitFlags),
/* harmony export */   createInjector: () => (/* binding */ createInjector),
/* harmony export */   createInjectorWithoutInjectorInstances: () => (/* binding */ createInjectorWithoutInjectorInstances),
/* harmony export */   debugStringifyTypeForError: () => (/* binding */ debugStringifyTypeForError),
/* harmony export */   decreaseElementDepthCount: () => (/* binding */ decreaseElementDepthCount),
/* harmony export */   deepForEach: () => (/* binding */ deepForEach),
/* harmony export */   defineInjectable: () => (/* binding */ defineInjectable),
/* harmony export */   emitEffectCreatedEvent: () => (/* binding */ emitEffectCreatedEvent),
/* harmony export */   emitInjectEvent: () => (/* binding */ emitInjectEvent),
/* harmony export */   emitInjectorToCreateInstanceEvent: () => (/* binding */ emitInjectorToCreateInstanceEvent),
/* harmony export */   emitInstanceCreatedByInjectorEvent: () => (/* binding */ emitInstanceCreatedByInjectorEvent),
/* harmony export */   emitProviderConfiguredEvent: () => (/* binding */ emitProviderConfiguredEvent),
/* harmony export */   enterDI: () => (/* binding */ enterDI),
/* harmony export */   enterSkipHydrationBlock: () => (/* binding */ enterSkipHydrationBlock),
/* harmony export */   enterView: () => (/* binding */ enterView),
/* harmony export */   errorHandlerEnvironmentInitializer: () => (/* binding */ errorHandlerEnvironmentInitializer),
/* harmony export */   fillProperties: () => (/* binding */ fillProperties),
/* harmony export */   flatten: () => (/* binding */ flatten),
/* harmony export */   formatRuntimeError: () => (/* binding */ formatRuntimeError),
/* harmony export */   forwardRef: () => (/* binding */ forwardRef),
/* harmony export */   getBindingIndex: () => (/* binding */ getBindingIndex),
/* harmony export */   getBindingRoot: () => (/* binding */ getBindingRoot),
/* harmony export */   getBindingsEnabled: () => (/* binding */ getBindingsEnabled),
/* harmony export */   getClosureSafeProperty: () => (/* binding */ getClosureSafeProperty),
/* harmony export */   getComponentDef: () => (/* binding */ getComponentDef),
/* harmony export */   getComponentLViewByIndex: () => (/* binding */ getComponentLViewByIndex),
/* harmony export */   getConstant: () => (/* binding */ getConstant),
/* harmony export */   getContextLView: () => (/* binding */ getContextLView),
/* harmony export */   getCurrentDirectiveDef: () => (/* binding */ getCurrentDirectiveDef),
/* harmony export */   getCurrentDirectiveIndex: () => (/* binding */ getCurrentDirectiveIndex),
/* harmony export */   getCurrentParentTNode: () => (/* binding */ getCurrentParentTNode),
/* harmony export */   getCurrentQueryIndex: () => (/* binding */ getCurrentQueryIndex),
/* harmony export */   getCurrentTNode: () => (/* binding */ getCurrentTNode),
/* harmony export */   getCurrentTNodePlaceholderOk: () => (/* binding */ getCurrentTNodePlaceholderOk),
/* harmony export */   getDirectiveDef: () => (/* binding */ getDirectiveDef),
/* harmony export */   getDirectiveDefOrThrow: () => (/* binding */ getDirectiveDefOrThrow),
/* harmony export */   getElementDepthCount: () => (/* binding */ getElementDepthCount),
/* harmony export */   getFactoryDef: () => (/* binding */ getFactoryDef),
/* harmony export */   getInjectableDef: () => (/* binding */ getInjectableDef),
/* harmony export */   getInjectorDef: () => (/* binding */ getInjectorDef),
/* harmony export */   getLView: () => (/* binding */ getLView),
/* harmony export */   getLViewParent: () => (/* binding */ getLViewParent),
/* harmony export */   getNamespace: () => (/* binding */ getNamespace),
/* harmony export */   getNativeByIndex: () => (/* binding */ getNativeByIndex),
/* harmony export */   getNativeByTNode: () => (/* binding */ getNativeByTNode),
/* harmony export */   getNativeByTNodeOrNull: () => (/* binding */ getNativeByTNodeOrNull),
/* harmony export */   getNgModuleDef: () => (/* binding */ getNgModuleDef),
/* harmony export */   getNgModuleDefOrThrow: () => (/* binding */ getNgModuleDefOrThrow),
/* harmony export */   getNullInjector: () => (/* binding */ getNullInjector),
/* harmony export */   getOrCreateLViewCleanup: () => (/* binding */ getOrCreateLViewCleanup),
/* harmony export */   getOrCreateTViewCleanup: () => (/* binding */ getOrCreateTViewCleanup),
/* harmony export */   getPipeDef: () => (/* binding */ getPipeDef),
/* harmony export */   getSelectedIndex: () => (/* binding */ getSelectedIndex),
/* harmony export */   getSelectedTNode: () => (/* binding */ getSelectedTNode),
/* harmony export */   getTNode: () => (/* binding */ getTNode),
/* harmony export */   getTView: () => (/* binding */ getTView),
/* harmony export */   hasI18n: () => (/* binding */ hasI18n),
/* harmony export */   importProvidersFrom: () => (/* binding */ importProvidersFrom),
/* harmony export */   increaseElementDepthCount: () => (/* binding */ increaseElementDepthCount),
/* harmony export */   incrementBindingIndex: () => (/* binding */ incrementBindingIndex),
/* harmony export */   initNgDevMode: () => (/* binding */ initNgDevMode),
/* harmony export */   inject: () => (/* binding */ inject),
/* harmony export */   injectRootLimpMode: () => (/* binding */ injectRootLimpMode),
/* harmony export */   internalImportProvidersFrom: () => (/* binding */ internalImportProvidersFrom),
/* harmony export */   isClassProvider: () => (/* binding */ isClassProvider),
/* harmony export */   isComponentDef: () => (/* binding */ isComponentDef),
/* harmony export */   isComponentHost: () => (/* binding */ isComponentHost),
/* harmony export */   isContentQueryHost: () => (/* binding */ isContentQueryHost),
/* harmony export */   isCreationMode: () => (/* binding */ isCreationMode),
/* harmony export */   isCurrentTNodeParent: () => (/* binding */ isCurrentTNodeParent),
/* harmony export */   isDestroyed: () => (/* binding */ isDestroyed),
/* harmony export */   isDirectiveHost: () => (/* binding */ isDirectiveHost),
/* harmony export */   isEnvironmentProviders: () => (/* binding */ isEnvironmentProviders),
/* harmony export */   isExhaustiveCheckNoChanges: () => (/* binding */ isExhaustiveCheckNoChanges),
/* harmony export */   isForwardRef: () => (/* binding */ isForwardRef),
/* harmony export */   isInCheckNoChangesMode: () => (/* binding */ isInCheckNoChangesMode),
/* harmony export */   isInI18nBlock: () => (/* binding */ isInI18nBlock),
/* harmony export */   isInInjectionContext: () => (/* binding */ isInInjectionContext),
/* harmony export */   isInSkipHydrationBlock: () => (/* binding */ isInSkipHydrationBlock),
/* harmony export */   isInjectable: () => (/* binding */ isInjectable),
/* harmony export */   isLContainer: () => (/* binding */ isLContainer),
/* harmony export */   isLView: () => (/* binding */ isLView),
/* harmony export */   isProjectionTNode: () => (/* binding */ isProjectionTNode),
/* harmony export */   isRefreshingViews: () => (/* binding */ isRefreshingViews),
/* harmony export */   isRootView: () => (/* binding */ isRootView),
/* harmony export */   isSignal: () => (/* binding */ isSignal),
/* harmony export */   isSkipHydrationRootTNode: () => (/* binding */ isSkipHydrationRootTNode),
/* harmony export */   isStandalone: () => (/* binding */ isStandalone),
/* harmony export */   isTypeProvider: () => (/* binding */ isTypeProvider),
/* harmony export */   isWritableSignal: () => (/* binding */ isWritableSignal),
/* harmony export */   keyValueArrayGet: () => (/* binding */ keyValueArrayGet),
/* harmony export */   keyValueArrayIndexOf: () => (/* binding */ keyValueArrayIndexOf),
/* harmony export */   keyValueArraySet: () => (/* binding */ keyValueArraySet),
/* harmony export */   lastNodeWasCreated: () => (/* binding */ lastNodeWasCreated),
/* harmony export */   leaveDI: () => (/* binding */ leaveDI),
/* harmony export */   leaveSkipHydrationBlock: () => (/* binding */ leaveSkipHydrationBlock),
/* harmony export */   leaveView: () => (/* binding */ leaveView),
/* harmony export */   load: () => (/* binding */ load),
/* harmony export */   makeEnvironmentProviders: () => (/* binding */ makeEnvironmentProviders),
/* harmony export */   markAncestorsForTraversal: () => (/* binding */ markAncestorsForTraversal),
/* harmony export */   markViewForRefresh: () => (/* binding */ markViewForRefresh),
/* harmony export */   newArray: () => (/* binding */ newArray),
/* harmony export */   nextBindingIndex: () => (/* binding */ nextBindingIndex),
/* harmony export */   nextContextImpl: () => (/* binding */ nextContextImpl),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   provideBrowserGlobalErrorListeners: () => (/* binding */ provideBrowserGlobalErrorListeners),
/* harmony export */   provideEnvironmentInitializer: () => (/* binding */ provideEnvironmentInitializer),
/* harmony export */   providerToFactory: () => (/* binding */ providerToFactory),
/* harmony export */   removeFromArray: () => (/* binding */ removeFromArray),
/* harmony export */   removeLViewOnDestroy: () => (/* binding */ removeLViewOnDestroy),
/* harmony export */   renderStringify: () => (/* binding */ renderStringify),
/* harmony export */   requiresRefreshOrTraversal: () => (/* binding */ requiresRefreshOrTraversal),
/* harmony export */   resetPreOrderHookFlags: () => (/* binding */ resetPreOrderHookFlags),
/* harmony export */   resolveForwardRef: () => (/* binding */ resolveForwardRef),
/* harmony export */   runInInjectionContext: () => (/* binding */ runInInjectionContext),
/* harmony export */   runInInjectorProfilerContext: () => (/* binding */ runInInjectorProfilerContext),
/* harmony export */   setBindingIndex: () => (/* binding */ setBindingIndex),
/* harmony export */   setBindingRootForHostBindings: () => (/* binding */ setBindingRootForHostBindings),
/* harmony export */   setCurrentDirectiveIndex: () => (/* binding */ setCurrentDirectiveIndex),
/* harmony export */   setCurrentQueryIndex: () => (/* binding */ setCurrentQueryIndex),
/* harmony export */   setCurrentTNode: () => (/* binding */ setCurrentTNode),
/* harmony export */   setCurrentTNodeAsNotParent: () => (/* binding */ setCurrentTNodeAsNotParent),
/* harmony export */   setInI18nBlock: () => (/* binding */ setInI18nBlock),
/* harmony export */   setInjectImplementation: () => (/* binding */ setInjectImplementation),
/* harmony export */   setInjectorProfiler: () => (/* binding */ setInjectorProfiler),
/* harmony export */   setInjectorProfilerContext: () => (/* binding */ setInjectorProfilerContext),
/* harmony export */   setIsInCheckNoChangesMode: () => (/* binding */ setIsInCheckNoChangesMode),
/* harmony export */   setIsRefreshingViews: () => (/* binding */ setIsRefreshingViews),
/* harmony export */   setSelectedIndex: () => (/* binding */ setSelectedIndex),
/* harmony export */   signal: () => (/* binding */ signal),
/* harmony export */   signalAsReadonlyFn: () => (/* binding */ signalAsReadonlyFn),
/* harmony export */   store: () => (/* binding */ store),
/* harmony export */   storeCleanupWithContext: () => (/* binding */ storeCleanupWithContext),
/* harmony export */   storeLViewOnDestroy: () => (/* binding */ storeLViewOnDestroy),
/* harmony export */   stringify: () => (/* binding */ stringify),
/* harmony export */   stringifyForError: () => (/* binding */ stringifyForError),
/* harmony export */   throwCyclicDependencyError: () => (/* binding */ throwCyclicDependencyError),
/* harmony export */   throwError: () => (/* binding */ throwError),
/* harmony export */   throwProviderNotFoundError: () => (/* binding */ throwProviderNotFoundError),
/* harmony export */   truncateMiddle: () => (/* binding */ truncateMiddle),
/* harmony export */   unwrapLView: () => (/* binding */ unwrapLView),
/* harmony export */   unwrapRNode: () => (/* binding */ unwrapRNode),
/* harmony export */   updateAncestorTraversalFlagsOnAttach: () => (/* binding */ updateAncestorTraversalFlagsOnAttach),
/* harmony export */   viewAttachedToChangeDetector: () => (/* binding */ viewAttachedToChangeDetector),
/* harmony export */   viewAttachedToContainer: () => (/* binding */ viewAttachedToContainer),
/* harmony export */   walkProviderTree: () => (/* binding */ walkProviderTree),
/* harmony export */   walkUpViews: () => (/* binding */ walkUpViews),
/* harmony export */   wasLastNodeCreated: () => (/* binding */ wasLastNodeCreated),
/* harmony export */   "ɵunwrapWritableSignal": () => (/* binding */ ɵunwrapWritableSignal),
/* harmony export */   "ɵɵdefineInjectable": () => (/* binding */ ɵɵdefineInjectable),
/* harmony export */   "ɵɵdefineInjector": () => (/* binding */ ɵɵdefineInjector),
/* harmony export */   "ɵɵdisableBindings": () => (/* binding */ ɵɵdisableBindings),
/* harmony export */   "ɵɵenableBindings": () => (/* binding */ ɵɵenableBindings),
/* harmony export */   "ɵɵinject": () => (/* binding */ ɵɵinject),
/* harmony export */   "ɵɵinvalidFactoryDep": () => (/* binding */ ɵɵinvalidFactoryDep),
/* harmony export */   "ɵɵnamespaceHTML": () => (/* binding */ ɵɵnamespaceHTML),
/* harmony export */   "ɵɵnamespaceMathML": () => (/* binding */ ɵɵnamespaceMathML),
/* harmony export */   "ɵɵnamespaceSVG": () => (/* binding */ ɵɵnamespaceSVG),
/* harmony export */   "ɵɵresetView": () => (/* binding */ ɵɵresetView),
/* harmony export */   "ɵɵrestoreView": () => (/* binding */ ɵɵrestoreView)
/* harmony export */ });
/* harmony import */ var _not_found_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not_found.mjs */ 57773);
/* harmony import */ var _signal_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signal.mjs */ 38677);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _angular_core_primitives_di__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/primitives/di */ 64278);
/* harmony import */ var _angular_core_primitives_signals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/primitives/signals */ 21712);
/**
 * @license Angular v20.1.0
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */







/**
 * Base URL for the error details page.
 *
 * Keep this constant in sync across:
 *  - packages/compiler-cli/src/ngtsc/diagnostics/src/error_details_base_url.ts
 *  - packages/core/src/error_details_base_url.ts
 */
const ERROR_DETAILS_PAGE_BASE_URL = 'https://angular.dev/errors';
/**
 * URL for the XSS security documentation.
 */
const XSS_SECURITY_URL = 'https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss';

/**
 * Class that represents a runtime error.
 * Formats and outputs the error message in a consistent way.
 *
 * Example:
 * ```ts
 *  throw new RuntimeError(
 *    RuntimeErrorCode.INJECTOR_ALREADY_DESTROYED,
 *    ngDevMode && 'Injector has already been destroyed.');
 * ```
 *
 * Note: the `message` argument contains a descriptive error message as a string in development
 * mode (when the `ngDevMode` is defined). In production mode (after tree-shaking pass), the
 * `message` argument becomes `false`, thus we account for it in the typings and the runtime
 * logic.
 */
class RuntimeError extends Error {
  code;
  constructor(code, message) {
    super(formatRuntimeError(code, message));
    this.code = code;
  }
}
function formatRuntimeErrorCode(code) {
  // Error code might be a negative number, which is a special marker that instructs the logic to
  // generate a link to the error details page on angular.io.
  // We also prepend `0` to non-compile-time errors.
  return `NG0${Math.abs(code)}`;
}
/**
 * Called to format a runtime error.
 * See additional info on the `message` argument type in the `RuntimeError` class description.
 */
function formatRuntimeError(code, message) {
  const fullCode = formatRuntimeErrorCode(code);
  let errorMessage = `${fullCode}${message ? ': ' + message : ''}`;
  if (ngDevMode && code < 0) {
    const addPeriodSeparator = !errorMessage.match(/[.,;!?\n]$/);
    const separator = addPeriodSeparator ? '.' : '';
    errorMessage = `${errorMessage}${separator} Find more at ${ERROR_DETAILS_PAGE_BASE_URL}/${fullCode}`;
  }
  return errorMessage;
}
const _global = globalThis;
function ngDevModeResetPerfCounters() {
  const locationString = typeof location !== 'undefined' ? location.toString() : '';
  const newCounters = {
    hydratedNodes: 0,
    hydratedComponents: 0,
    dehydratedViewsRemoved: 0,
    dehydratedViewsCleanupRuns: 0,
    componentsSkippedHydration: 0,
    deferBlocksWithIncrementalHydration: 0
  };
  // Make sure to refer to ngDevMode as ['ngDevMode'] for closure.
  const allowNgDevModeTrue = locationString.indexOf('ngDevMode=false') === -1;
  if (!allowNgDevModeTrue) {
    _global['ngDevMode'] = false;
  } else {
    if (typeof _global['ngDevMode'] !== 'object') {
      _global['ngDevMode'] = {};
    }
    Object.assign(_global['ngDevMode'], newCounters);
  }
  return newCounters;
}
/**
 * This function checks to see if the `ngDevMode` has been set. If yes,
 * then we honor it, otherwise we default to dev mode with additional checks.
 *
 * The idea is that unless we are doing production build where we explicitly
 * set `ngDevMode == false` we should be helping the developer by providing
 * as much early warning and errors as possible.
 *
 * `ɵɵdefineComponent` is guaranteed to have been called before any component template functions
 * (and thus Ivy instructions), so a single initialization there is sufficient to ensure ngDevMode
 * is defined for the entire instruction set.
 *
 * When checking `ngDevMode` on toplevel, always init it before referencing it
 * (e.g. `((typeof ngDevMode === 'undefined' || ngDevMode) && initNgDevMode())`), otherwise you can
 *  get a `ReferenceError` like in https://github.com/angular/angular/issues/31595.
 *
 * Details on possible values for `ngDevMode` can be found on its docstring.
 */
function initNgDevMode() {
  // The below checks are to ensure that calling `initNgDevMode` multiple times does not
  // reset the counters.
  // If the `ngDevMode` is not an object, then it means we have not created the perf counters
  // yet.
  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    if (typeof ngDevMode !== 'object' || Object.keys(ngDevMode).length === 0) {
      ngDevModeResetPerfCounters();
    }
    return typeof ngDevMode !== 'undefined' && !!ngDevMode;
  }
  return false;
}
function getClosureSafeProperty(objWithPropertyToExtract) {
  for (let key in objWithPropertyToExtract) {
    if (objWithPropertyToExtract[key] === getClosureSafeProperty) {
      return key;
    }
  }
  // Cannot change it to `RuntimeError` because the `util` target cannot
  // circularly depend on the `core` target.
  throw Error(typeof ngDevMode !== 'undefined' && ngDevMode ? 'Could not find renamed property on target object.' : '');
}
/**
 * Sets properties on a target object from a source object, but only if
 * the property doesn't already exist on the target object.
 * @param target The target to set properties on
 * @param source The source of the property keys and values to set
 */
function fillProperties(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key) && !target.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
}
function stringify(token) {
  if (typeof token === 'string') {
    return token;
  }
  if (Array.isArray(token)) {
    return `[${token.map(stringify).join(', ')}]`;
  }
  if (token == null) {
    return '' + token;
  }
  const name = token.overriddenName || token.name;
  if (name) {
    return `${name}`;
  }
  const result = token.toString();
  if (result == null) {
    return '' + result;
  }
  const newLineIndex = result.indexOf('\n');
  return newLineIndex >= 0 ? result.slice(0, newLineIndex) : result;
}
/**
 * Concatenates two strings with separator, allocating new strings only when necessary.
 *
 * @param before before string.
 * @param separator separator string.
 * @param after after string.
 * @returns concatenated string.
 */
function concatStringsWithSpace(before, after) {
  if (!before) return after || '';
  if (!after) return before;
  return `${before} ${after}`;
}
/**
 * Ellipses the string in the middle when longer than the max length
 *
 * @param string
 * @param maxLength of the output string
 * @returns ellipsed string with ... in the middle
 */
function truncateMiddle(str, maxLength = 100) {
  if (!str || maxLength < 1 || str.length <= maxLength) return str;
  if (maxLength == 1) return str.substring(0, 1) + '...';
  const halfLimit = Math.round(maxLength / 2);
  return str.substring(0, halfLimit) + '...' + str.substring(str.length - halfLimit);
}
const __forward_ref__ = /*#__PURE__*/getClosureSafeProperty({
  __forward_ref__: getClosureSafeProperty
});
/**
 * Allows to refer to references which are not yet defined.
 *
 * For instance, `forwardRef` is used when the `token` which we need to refer to for the purposes of
 * DI is declared, but not yet defined. It is also used when the `token` which we use when creating
 * a query is not yet defined.
 *
 * `forwardRef` is also used to break circularities in standalone components imports.
 *
 * @usageNotes
 * ### Circular dependency example
 * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='forward_ref'}
 *
 * ### Circular standalone reference import example
 * ```angular-ts
 * @Component({
 *   imports: [ChildComponent],
 *   selector: 'app-parent',
 *   template: `<app-child [hideParent]="hideParent()"></app-child>`,
 * })
 * export class ParentComponent {
 *    hideParent = input.required<boolean>();
 * }
 *
 *
 * @Component({
 *   imports: [forwardRef(() => ParentComponent)],
 *   selector: 'app-child',
 *   template: `
 *    @if(!hideParent() {
 *       <app-parent/>
 *    }
 *  `,
 * })
 * export class ChildComponent {
 *    hideParent = input.required<boolean>();
 * }
 * ```
 *
 * @publicApi
 */
function forwardRef(forwardRefFn) {
  forwardRefFn.__forward_ref__ = forwardRef;
  forwardRefFn.toString = function () {
    return stringify(this());
  };
  return forwardRefFn;
}
/**
 * Lazily retrieves the reference value from a forwardRef.
 *
 * Acts as the identity function when given a non-forward-ref value.
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='resolve_forward_ref'}
 *
 * @see {@link forwardRef}
 * @publicApi
 */
function resolveForwardRef(type) {
  return isForwardRef(type) ? type() : type;
}
/** Checks whether a function is wrapped by a `forwardRef`. */
function isForwardRef(fn) {
  return typeof fn === 'function' && fn.hasOwnProperty(__forward_ref__) && fn.__forward_ref__ === forwardRef;
}

// The functions in this file verify that the assumptions we are making
// about state in an instruction are correct before implementing any logic.
// They are meant only to be called in dev mode as sanity checks.
function assertNumber(actual, msg) {
  if (!(typeof actual === 'number')) {
    throwError(msg, typeof actual, 'number', '===');
  }
}
function assertNumberInRange(actual, minInclusive, maxInclusive) {
  assertNumber(actual, 'Expected a number');
  assertLessThanOrEqual(actual, maxInclusive, 'Expected number to be less than or equal to');
  assertGreaterThanOrEqual(actual, minInclusive, 'Expected number to be greater than or equal to');
}
function assertString(actual, msg) {
  if (!(typeof actual === 'string')) {
    throwError(msg, actual === null ? 'null' : typeof actual, 'string', '===');
  }
}
function assertFunction(actual, msg) {
  if (!(typeof actual === 'function')) {
    throwError(msg, actual === null ? 'null' : typeof actual, 'function', '===');
  }
}
function assertEqual(actual, expected, msg) {
  if (!(actual == expected)) {
    throwError(msg, actual, expected, '==');
  }
}
function assertNotEqual(actual, expected, msg) {
  if (!(actual != expected)) {
    throwError(msg, actual, expected, '!=');
  }
}
function assertSame(actual, expected, msg) {
  if (!(actual === expected)) {
    throwError(msg, actual, expected, '===');
  }
}
function assertNotSame(actual, expected, msg) {
  if (!(actual !== expected)) {
    throwError(msg, actual, expected, '!==');
  }
}
function assertLessThan(actual, expected, msg) {
  if (!(actual < expected)) {
    throwError(msg, actual, expected, '<');
  }
}
function assertLessThanOrEqual(actual, expected, msg) {
  if (!(actual <= expected)) {
    throwError(msg, actual, expected, '<=');
  }
}
function assertGreaterThan(actual, expected, msg) {
  if (!(actual > expected)) {
    throwError(msg, actual, expected, '>');
  }
}
function assertGreaterThanOrEqual(actual, expected, msg) {
  if (!(actual >= expected)) {
    throwError(msg, actual, expected, '>=');
  }
}
function assertNotDefined(actual, msg) {
  if (actual != null) {
    throwError(msg, actual, null, '==');
  }
}
function assertDefined(actual, msg) {
  if (actual == null) {
    throwError(msg, actual, null, '!=');
  }
}
function throwError(msg, actual, expected, comparison) {
  throw new Error(`ASSERTION ERROR: ${msg}` + (comparison == null ? '' : ` [Expected=> ${expected} ${comparison} ${actual} <=Actual]`));
}
function assertDomNode(node) {
  if (!(node instanceof Node)) {
    throwError(`The provided value must be an instance of a DOM Node but got ${stringify(node)}`);
  }
}
function assertElement(node) {
  if (!(node instanceof Element)) {
    throwError(`The provided value must be an element but got ${stringify(node)}`);
  }
}
function assertIndexInRange(arr, index) {
  assertDefined(arr, 'Array must be defined.');
  const maxLen = arr.length;
  if (index < 0 || index >= maxLen) {
    throwError(`Index expected to be less than ${maxLen} but got ${index}`);
  }
}
function assertOneOf(value, ...validValues) {
  if (validValues.indexOf(value) !== -1) return true;
  throwError(`Expected value to be one of ${JSON.stringify(validValues)} but was ${JSON.stringify(value)}.`);
}
function assertNotReactive(fn) {
  if ((0,_signal_mjs__WEBPACK_IMPORTED_MODULE_3__.getActiveConsumer)() !== null) {
    throwError(`${fn}() should never be called in a reactive context.`);
  }
}

/**
 * Construct an injectable definition which defines how a token will be constructed by the DI
 * system, and in which injectors (if any) it will be available.
 *
 * This should be assigned to a static `ɵprov` field on a type, which will then be an
 * `InjectableType`.
 *
 * Options:
 * * `providedIn` determines which injectors will include the injectable, by either associating it
 *   with an `@NgModule` or other `InjectorType`, or by specifying that this injectable should be
 *   provided in the `'root'` injector, which will be the application-level injector in most apps.
 * * `factory` gives the zero argument function which will create an instance of the injectable.
 *   The factory can call [`inject`](api/core/inject) to access the `Injector` and request injection
 * of dependencies.
 *
 * @codeGenApi
 * @publicApi This instruction has been emitted by ViewEngine for some time and is deployed to npm.
 */
function ɵɵdefineInjectable(opts) {
  return {
    token: opts.token,
    providedIn: opts.providedIn || null,
    factory: opts.factory,
    value: undefined
  };
}
/**
 * @deprecated in v8, delete after v10. This API should be used only by generated code, and that
 * code should now use ɵɵdefineInjectable instead.
 * @publicApi
 */
const defineInjectable = ɵɵdefineInjectable;
/**
 * Construct an `InjectorDef` which configures an injector.
 *
 * This should be assigned to a static injector def (`ɵinj`) field on a type, which will then be an
 * `InjectorType`.
 *
 * Options:
 *
 * * `providers`: an optional array of providers to add to the injector. Each provider must
 *   either have a factory or point to a type which has a `ɵprov` static property (the
 *   type must be an `InjectableType`).
 * * `imports`: an optional array of imports of other `InjectorType`s or `InjectorTypeWithModule`s
 *   whose providers will also be added to the injector. Locally provided types will override
 *   providers from imports.
 *
 * @codeGenApi
 */
function ɵɵdefineInjector(options) {
  return {
    providers: options.providers || [],
    imports: options.imports || []
  };
}
/**
 * Read the injectable def (`ɵprov`) for `type` in a way which is immune to accidentally reading
 * inherited value.
 *
 * @param type A type which may have its own (non-inherited) `ɵprov`.
 */
function getInjectableDef(type) {
  return getOwnDefinition(type, NG_PROV_DEF);
}
function isInjectable(type) {
  return getInjectableDef(type) !== null;
}
/**
 * Return definition only if it is defined directly on `type` and is not inherited from a base
 * class of `type`.
 */
function getOwnDefinition(type, field) {
  // if the ɵprov prop exist but is undefined we still want to return null
  return type.hasOwnProperty(field) && type[field] || null;
}
/**
 * Read the injectable def (`ɵprov`) for `type` or read the `ɵprov` from one of its ancestors.
 *
 * @param type A type which may have `ɵprov`, via inheritance.
 *
 * @deprecated Will be removed in a future version of Angular, where an error will occur in the
 *     scenario if we find the `ɵprov` on an ancestor only.
 */
function getInheritedInjectableDef(type) {
  // if the ɵprov prop exist but is undefined we still want to return null
  const def = type?.[NG_PROV_DEF] ?? null;
  if (def) {
    ngDevMode && console.warn(`DEPRECATED: DI is instantiating a token "${type.name}" that inherits its @Injectable decorator but does not provide one itself.\n` + `This will become an error in a future version of Angular. Please add @Injectable() to the "${type.name}" class.`);
    return def;
  } else {
    return null;
  }
}
/**
 * Read the injector def type in a way which is immune to accidentally reading inherited value.
 *
 * @param type type which may have an injector def (`ɵinj`)
 */
function getInjectorDef(type) {
  return type && type.hasOwnProperty(NG_INJ_DEF) ? type[NG_INJ_DEF] : null;
}
const NG_PROV_DEF = /*#__PURE__*/getClosureSafeProperty({
  ɵprov: getClosureSafeProperty
});
const NG_INJ_DEF = /*#__PURE__*/getClosureSafeProperty({
  ɵinj: getClosureSafeProperty
});

/**
 * Creates a token that can be used in a DI Provider.
 *
 * Use an `InjectionToken` whenever the type you are injecting is not reified (does not have a
 * runtime representation) such as when injecting an interface, callable type, array or
 * parameterized type.
 *
 * `InjectionToken` is parameterized on `T` which is the type of object which will be returned by
 * the `Injector`. This provides an additional level of type safety.
 *
 * <div class="docs-alert docs-alert-helpful">
 *
 * **Important Note**: Ensure that you use the same instance of the `InjectionToken` in both the
 * provider and the injection call. Creating a new instance of `InjectionToken` in different places,
 * even with the same description, will be treated as different tokens by Angular's DI system,
 * leading to a `NullInjectorError`.
 *
 * </div>
 *
 * {@example injection-token/src/main.ts region='InjectionToken'}
 *
 * When creating an `InjectionToken`, you can optionally specify a factory function which returns
 * (possibly by creating) a default value of the parameterized type `T`. This sets up the
 * `InjectionToken` using this factory as a provider as if it was defined explicitly in the
 * application's root injector. If the factory function, which takes zero arguments, needs to inject
 * dependencies, it can do so using the [`inject`](api/core/inject) function.
 * As you can see in the Tree-shakable InjectionToken example below.
 *
 * Additionally, if a `factory` is specified you can also specify the `providedIn` option, which
 * overrides the above behavior and marks the token as belonging to a particular `@NgModule` (note:
 * this option is now deprecated). As mentioned above, `'root'` is the default value for
 * `providedIn`.
 *
 * The `providedIn: NgModule` and `providedIn: 'any'` options are deprecated.
 *
 * @usageNotes
 * ### Basic Examples
 *
 * ### Plain InjectionToken
 *
 * {@example core/di/ts/injector_spec.ts region='InjectionToken'}
 *
 * ### Tree-shakable InjectionToken
 *
 * {@example core/di/ts/injector_spec.ts region='ShakableInjectionToken'}
 *
 * @publicApi
 */
class InjectionToken {
  _desc;
  /** @internal */
  ngMetadataName = 'InjectionToken';
  ɵprov;
  /**
   * @param _desc   Description for the token,
   *                used only for debugging purposes,
   *                it should but does not need to be unique
   * @param options Options for the token's usage, as described above
   */
  constructor(_desc, options) {
    this._desc = _desc;
    this.ɵprov = undefined;
    if (typeof options == 'number') {
      (typeof ngDevMode === 'undefined' || ngDevMode) && assertLessThan(options, 0, 'Only negative numbers are supported here');
      // This is a special hack to assign __NG_ELEMENT_ID__ to this instance.
      // See `InjectorMarkers`
      this.__NG_ELEMENT_ID__ = options;
    } else if (options !== undefined) {
      this.ɵprov = ɵɵdefineInjectable({
        token: this,
        providedIn: options.providedIn || 'root',
        factory: options.factory
      });
    }
  }
  /**
   * @internal
   */
  get multi() {
    return this;
  }
  toString() {
    return `InjectionToken ${this._desc}`;
  }
}
let _injectorProfilerContext;
function getInjectorProfilerContext() {
  !ngDevMode && throwError('getInjectorProfilerContext should never be called in production mode');
  return _injectorProfilerContext;
}
function setInjectorProfilerContext(context) {
  !ngDevMode && throwError('setInjectorProfilerContext should never be called in production mode');
  const previous = _injectorProfilerContext;
  _injectorProfilerContext = context;
  return previous;
}
const injectorProfilerCallbacks = [];
const NOOP_PROFILER_REMOVAL = () => {};
function removeProfiler(profiler) {
  const profilerIdx = injectorProfilerCallbacks.indexOf(profiler);
  if (profilerIdx !== -1) {
    injectorProfilerCallbacks.splice(profilerIdx, 1);
  }
}
/**
 * Adds a callback function which will be invoked during certain DI events within the
 * runtime (for example: injecting services, creating injectable instances, configuring providers).
 * Multiple profiler callbacks can be set: in this case profiling events are
 * reported to every registered callback.
 *
 * Warning: this function is *INTERNAL* and should not be relied upon in application's code.
 * The contract of the function might be changed in any release and/or the function can be removed
 * completely.
 *
 * @param profiler function provided by the caller or null value to disable profiling.
 * @returns a cleanup function that, when invoked, removes a given profiler callback.
 */
function setInjectorProfiler(injectorProfiler) {
  !ngDevMode && throwError('setInjectorProfiler should never be called in production mode');
  if (injectorProfiler !== null) {
    if (!injectorProfilerCallbacks.includes(injectorProfiler)) {
      injectorProfilerCallbacks.push(injectorProfiler);
    }
    return () => removeProfiler(injectorProfiler);
  } else {
    injectorProfilerCallbacks.length = 0;
    return NOOP_PROFILER_REMOVAL;
  }
}
/**
 * Injector profiler function which emits on DI events executed by the runtime.
 *
 * @param event InjectorProfilerEvent corresponding to the DI event being emitted
 */
function injectorProfiler(event) {
  !ngDevMode && throwError('Injector profiler should never be called in production mode');
  for (let i = 0; i < injectorProfilerCallbacks.length; i++) {
    const injectorProfilerCallback = injectorProfilerCallbacks[i];
    injectorProfilerCallback(event);
  }
}
/**
 * Emits an InjectorProfilerEventType.ProviderConfigured to the injector profiler. The data in the
 * emitted event includes the raw provider, as well as the token that provider is providing.
 *
 * @param eventProvider A provider object
 */
function emitProviderConfiguredEvent(eventProvider, isViewProvider = false) {
  !ngDevMode && throwError('Injector profiler should never be called in production mode');
  let token;
  // if the provider is a TypeProvider (typeof provider is function) then the token is the
  // provider itself
  if (typeof eventProvider === 'function') {
    token = eventProvider;
  }
  // if the provider is an injection token, then the token is the injection token.
  else if (eventProvider instanceof InjectionToken) {
    token = eventProvider;
  }
  // in all other cases we can access the token via the `provide` property of the provider
  else {
    token = resolveForwardRef(eventProvider.provide);
  }
  let provider = eventProvider;
  // Injection tokens may define their own default provider which gets attached to the token itself
  // as `ɵprov`. In this case, we want to emit the provider that is attached to the token, not the
  // token itself.
  if (eventProvider instanceof InjectionToken) {
    provider = eventProvider.ɵprov || eventProvider;
  }
  injectorProfiler({
    type: 2 /* InjectorProfilerEventType.ProviderConfigured */,
    context: getInjectorProfilerContext(),
    providerRecord: {
      token,
      provider,
      isViewProvider
    }
  });
}
/**
 * Emits an event to the injector profiler when an instance corresponding to a given token is about to be created be an injector. Note that
 * the injector associated with this emission can be accessed by using getDebugInjectContext()
 *
 * @param instance an object created by an injector
 */
function emitInjectorToCreateInstanceEvent(token) {
  !ngDevMode && throwError('Injector profiler should never be called in production mode');
  injectorProfiler({
    type: 4 /* InjectorProfilerEventType.InjectorToCreateInstanceEvent */,
    context: getInjectorProfilerContext(),
    token: token
  });
}
/**
 * Emits an event to the injector profiler with the instance that was created. Note that
 * the injector associated with this emission can be accessed by using getDebugInjectContext()
 *
 * @param instance an object created by an injector
 */
function emitInstanceCreatedByInjectorEvent(instance) {
  !ngDevMode && throwError('Injector profiler should never be called in production mode');
  injectorProfiler({
    type: 1 /* InjectorProfilerEventType.InstanceCreatedByInjector */,
    context: getInjectorProfilerContext(),
    instance: {
      value: instance
    }
  });
}
/**
 * @param token DI token associated with injected service
 * @param value the instance of the injected service (i.e the result of `inject(token)`)
 * @param flags the flags that the token was injected with
 */
function emitInjectEvent(token, value, flags) {
  !ngDevMode && throwError('Injector profiler should never be called in production mode');
  injectorProfiler({
    type: 0 /* InjectorProfilerEventType.Inject */,
    context: getInjectorProfilerContext(),
    service: {
      token,
      value,
      flags
    }
  });
}
function emitEffectCreatedEvent(effect) {
  !ngDevMode && throwError('Injector profiler should never be called in production mode');
  injectorProfiler({
    type: 3 /* InjectorProfilerEventType.EffectCreated */,
    context: getInjectorProfilerContext(),
    effect
  });
}
function runInInjectorProfilerContext(injector, token, callback) {
  !ngDevMode && throwError('runInInjectorProfilerContext should never be called in production mode');
  const prevInjectContext = setInjectorProfilerContext({
    injector,
    token
  });
  try {
    callback();
  } finally {
    setInjectorProfilerContext(prevInjectContext);
  }
}
function isEnvironmentProviders(value) {
  return value && !!value.ɵproviders;
}
const NG_COMP_DEF = /*#__PURE__*/getClosureSafeProperty({
  ɵcmp: getClosureSafeProperty
});
const NG_DIR_DEF = /*#__PURE__*/getClosureSafeProperty({
  ɵdir: getClosureSafeProperty
});
const NG_PIPE_DEF = /*#__PURE__*/getClosureSafeProperty({
  ɵpipe: getClosureSafeProperty
});
const NG_MOD_DEF = /*#__PURE__*/getClosureSafeProperty({
  ɵmod: getClosureSafeProperty
});
const NG_FACTORY_DEF = /*#__PURE__*/getClosureSafeProperty({
  ɵfac: getClosureSafeProperty
});
/**
 * If a directive is diPublic, bloomAdd sets a property on the type with this constant as
 * the key and the directive's unique ID as the value. This allows us to map directives to their
 * bloom filter bit for DI.
 */
// TODO(misko): This is wrong. The NG_ELEMENT_ID should never be minified.
const NG_ELEMENT_ID = /*#__PURE__*/getClosureSafeProperty({
  __NG_ELEMENT_ID__: getClosureSafeProperty
});
/**
 * The `NG_ENV_ID` field on a DI token indicates special processing in the `EnvironmentInjector`:
 * getting such tokens from the `EnvironmentInjector` will bypass the standard DI resolution
 * strategy and instead will return implementation produced by the `NG_ENV_ID` factory function.
 *
 * This particular retrieval of DI tokens is mostly done to eliminate circular dependencies and
 * improve tree-shaking.
 */
const NG_ENV_ID = /*#__PURE__*/getClosureSafeProperty({
  __NG_ENV_ID__: getClosureSafeProperty
});

/**
 * Used for stringify render output in Ivy.
 * Important! This function is very performance-sensitive and we should
 * be extra careful not to introduce megamorphic reads in it.
 * Check `core/test/render3/perf/render_stringify` for benchmarks and alternate implementations.
 */
function renderStringify(value) {
  if (typeof value === 'string') return value;
  if (value == null) return '';
  // Use `String` so that it invokes the `toString` method of the value. Note that this
  // appears to be faster than calling `value.toString` (see `render_stringify` benchmark).
  return String(value);
}
/**
 * Used to stringify a value so that it can be displayed in an error message.
 *
 * Important! This function contains a megamorphic read and should only be
 * used for error messages.
 */
function stringifyForError(value) {
  if (typeof value === 'function') return value.name || value.toString();
  if (typeof value === 'object' && value != null && typeof value.type === 'function') {
    return value.type.name || value.type.toString();
  }
  return renderStringify(value);
}
/**
 * Used to stringify a `Type` and including the file path and line number in which it is defined, if
 * possible, for better debugging experience.
 *
 * Important! This function contains a megamorphic read and should only be used for error messages.
 */
function debugStringifyTypeForError(type) {
  // TODO(pmvald): Do some refactoring so that we can use getComponentDef here without creating
  // circular deps.
  let componentDef = type[NG_COMP_DEF] || null;
  if (componentDef !== null && componentDef.debugInfo) {
    return stringifyTypeFromDebugInfo(componentDef.debugInfo);
  }
  return stringifyForError(type);
}
// TODO(pmvald): Do some refactoring so that we can use the type ClassDebugInfo for the param
// debugInfo here without creating circular deps.
function stringifyTypeFromDebugInfo(debugInfo) {
  if (!debugInfo.filePath || !debugInfo.lineNumber) {
    return debugInfo.className;
  } else {
    return `${debugInfo.className} (at ${debugInfo.filePath}:${debugInfo.lineNumber})`;
  }
}

/** Called when directives inject each other (creating a circular dependency) */
function throwCyclicDependencyError(token, path) {
  throw new RuntimeError(-200 /* RuntimeErrorCode.CYCLIC_DI_DEPENDENCY */, ngDevMode ? `Circular dependency in DI detected for ${token}${path ? `. Dependency path: ${path.join(' > ')} > ${token}` : ''}` : token);
}
function throwMixedMultiProviderError() {
  throw new Error(`Cannot mix multi providers and regular providers`);
}
function throwInvalidProviderError(ngModuleType, providers, provider) {
  if (ngModuleType && providers) {
    const providerDetail = providers.map(v => v == provider ? '?' + provider + '?' : '...');
    throw new Error(`Invalid provider for the NgModule '${stringify(ngModuleType)}' - only instances of Provider and Type are allowed, got: [${providerDetail.join(', ')}]`);
  } else if (isEnvironmentProviders(provider)) {
    if (provider.ɵfromNgModule) {
      throw new RuntimeError(207 /* RuntimeErrorCode.PROVIDER_IN_WRONG_CONTEXT */, `Invalid providers from 'importProvidersFrom' present in a non-environment injector. 'importProvidersFrom' can't be used for component providers.`);
    } else {
      throw new RuntimeError(207 /* RuntimeErrorCode.PROVIDER_IN_WRONG_CONTEXT */, `Invalid providers present in a non-environment injector. 'EnvironmentProviders' can't be used for component providers.`);
    }
  } else {
    throw new Error('Invalid provider');
  }
}
/** Throws an error when a token is not found in DI. */
function throwProviderNotFoundError(token, injectorName) {
  const errorMessage = ngDevMode && `No provider for ${stringifyForError(token)} found${injectorName ? ` in ${injectorName}` : ''}`;
  throw new RuntimeError(-201 /* RuntimeErrorCode.PROVIDER_NOT_FOUND */, errorMessage);
}

/**
 * Current implementation of inject.
 *
 * By default, it is `injectInjectorOnly`, which makes it `Injector`-only aware. It can be changed
 * to `directiveInject`, which brings in the `NodeInjector` system of ivy. It is designed this
 * way for two reasons:
 *  1. `Injector` should not depend on ivy logic.
 *  2. To maintain tree shake-ability we don't want to bring in unnecessary code.
 */
let _injectImplementation;
function getInjectImplementation() {
  return _injectImplementation;
}
/**
 * Sets the current inject implementation.
 */
function setInjectImplementation(impl) {
  const previous = _injectImplementation;
  _injectImplementation = impl;
  return previous;
}
/**
 * Injects `root` tokens in limp mode.
 *
 * If no injector exists, we can still inject tree-shakable providers which have `providedIn` set to
 * `"root"`. This is known as the limp mode injection. In such case the value is stored in the
 * injectable definition.
 */
function injectRootLimpMode(token, notFoundValue, flags) {
  const injectableDef = getInjectableDef(token);
  if (injectableDef && injectableDef.providedIn == 'root') {
    return injectableDef.value === undefined ? injectableDef.value = injectableDef.factory() : injectableDef.value;
  }
  if (flags & 8 /* InternalInjectFlags.Optional */) return null;
  if (notFoundValue !== undefined) return notFoundValue;
  throwProviderNotFoundError(token, 'Injector');
}
/**
 * Assert that `_injectImplementation` is not `fn`.
 *
 * This is useful, to prevent infinite recursion.
 *
 * @param fn Function which it should not equal to
 */
function assertInjectImplementationNotEqual(fn) {
  ngDevMode && assertNotEqual(_injectImplementation, fn, 'Calling ɵɵinject would cause infinite recursion');
}
const _THROW_IF_NOT_FOUND = {};
const THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
/*
 * Name of a property (that we patch onto DI decorator), which is used as an annotation of which
 * InjectFlag this decorator represents. This allows to avoid direct references to the DI decorators
 * in the code, thus making them tree-shakable.
 */
const DI_DECORATOR_FLAG = '__NG_DI_FLAG__';
/**
 * A wrapper around an `Injector` that implements the `PrimitivesInjector` interface.
 *
 * This is used to allow the `inject` function to be used with the new primitives-based DI system.
 */
class RetrievingInjector {
  injector;
  constructor(injector) {
    this.injector = injector;
  }
  retrieve(token, options) {
    const flags = convertToBitFlags(options) || 0 /* InternalInjectFlags.Default */;
    try {
      return this.injector.get(token,
      // When a dependency is requested with an optional flag, DI returns null as the default value.
      flags & 8 /* InternalInjectFlags.Optional */ ? null : THROW_IF_NOT_FOUND, flags);
    } catch (e) {
      if ((0,_not_found_mjs__WEBPACK_IMPORTED_MODULE_4__.isNotFound)(e)) {
        return e;
      }
      throw e;
    }
  }
}
const NG_TEMP_TOKEN_PATH = 'ngTempTokenPath';
const NG_TOKEN_PATH = 'ngTokenPath';
const NEW_LINE = /\n/gm;
const NO_NEW_LINE = 'ɵ';
const SOURCE = '__source';
function injectInjectorOnly(token, flags = 0 /* InternalInjectFlags.Default */) {
  const currentInjector = (0,_not_found_mjs__WEBPACK_IMPORTED_MODULE_4__.getCurrentInjector)();
  if (currentInjector === undefined) {
    throw new RuntimeError(-203 /* RuntimeErrorCode.MISSING_INJECTION_CONTEXT */, ngDevMode && `The \`${stringify(token)}\` token injection failed. \`inject()\` function must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with \`runInInjectionContext\`.`);
  } else if (currentInjector === null) {
    return injectRootLimpMode(token, undefined, flags);
  } else {
    const options = convertToInjectOptions(flags);
    const value = currentInjector.retrieve(token, options);
    ngDevMode && emitInjectEvent(token, value, flags);
    if ((0,_not_found_mjs__WEBPACK_IMPORTED_MODULE_4__.isNotFound)(value)) {
      if (options.optional) {
        return null;
      }
      throw value;
    }
    return value;
  }
}
function ɵɵinject(token, flags = 0 /* InternalInjectFlags.Default */) {
  return (getInjectImplementation() || injectInjectorOnly)(resolveForwardRef(token), flags);
}
/**
 * Throws an error indicating that a factory function could not be generated by the compiler for a
 * particular class.
 *
 * The name of the class is not mentioned here, but will be in the generated factory function name
 * and thus in the stack trace.
 *
 * @codeGenApi
 */
function ɵɵinvalidFactoryDep(index) {
  throw new RuntimeError(202 /* RuntimeErrorCode.INVALID_FACTORY_DEPENDENCY */, ngDevMode && `This constructor is not compatible with Angular Dependency Injection because its dependency at index ${index} of the parameter list is invalid.
This can happen if the dependency type is a primitive like a string or if an ancestor of this class is missing an Angular decorator.

Please check that 1) the type for the parameter at index ${index} is correct and 2) the correct Angular decorators are defined for this class and its ancestors.`);
}
/**
 * Injects a token from the currently active injector.
 * `inject` is only supported in an [injection context](guide/di/dependency-injection-context). It
 * can be used during:
 * - Construction (via the `constructor`) of a class being instantiated by the DI system, such
 * as an `@Injectable` or `@Component`.
 * - In the initializer for fields of such classes.
 * - In the factory function specified for `useFactory` of a `Provider` or an `@Injectable`.
 * - In the `factory` function specified for an `InjectionToken`.
 * - In a stackframe of a function call in a DI context
 *
 * @param token A token that represents a dependency that should be injected.
 * @param flags Optional flags that control how injection is executed.
 * The flags correspond to injection strategies that can be specified with
 * parameter decorators `@Host`, `@Self`, `@SkipSelf`, and `@Optional`.
 * @returns the injected value if operation is successful, `null` otherwise.
 * @throws if called outside of a supported context.
 *
 * @usageNotes
 * In practice the `inject()` calls are allowed in a constructor, a constructor parameter and a
 * field initializer:
 *
 * ```ts
 * @Injectable({providedIn: 'root'})
 * export class Car {
 *   radio: Radio|undefined;
 *   // OK: field initializer
 *   spareTyre = inject(Tyre);
 *
 *   constructor() {
 *     // OK: constructor body
 *     this.radio = inject(Radio);
 *   }
 * }
 * ```
 *
 * It is also legal to call `inject` from a provider's factory:
 *
 * ```ts
 * providers: [
 *   {provide: Car, useFactory: () => {
 *     // OK: a class factory
 *     const engine = inject(Engine);
 *     return new Car(engine);
 *   }}
 * ]
 * ```
 *
 * Calls to the `inject()` function outside of the class creation context will result in error. Most
 * notably, calls to `inject()` are disallowed after a class instance was created, in methods
 * (including lifecycle hooks):
 *
 * ```ts
 * @Component({ ... })
 * export class CarComponent {
 *   ngOnInit() {
 *     // ERROR: too late, the component instance was already created
 *     const engine = inject(Engine);
 *     engine.start();
 *   }
 * }
 * ```
 *
 * @publicApi
 */
function inject(token, options) {
  // The `as any` here _shouldn't_ be necessary, but without it JSCompiler
  // throws a disambiguation  error due to the multiple signatures.
  return ɵɵinject(token, convertToBitFlags(options));
}
// Converts object-based DI flags (`InjectOptions`) to bit flags (`InjectFlags`).
function convertToBitFlags(flags) {
  if (typeof flags === 'undefined' || typeof flags === 'number') {
    return flags;
  }
  // While TypeScript doesn't accept it without a cast, bitwise OR with false-y values in
  // JavaScript is a no-op. We can use that for a very codesize-efficient conversion from
  // `InjectOptions` to `InjectFlags`.
  return 0 /* InternalInjectFlags.Default */ | (
  // comment to force a line break in the formatter
  flags.optional && 8 /* InternalInjectFlags.Optional */) | (flags.host && 1 /* InternalInjectFlags.Host */) | (flags.self && 2 /* InternalInjectFlags.Self */) | (flags.skipSelf && 4 /* InternalInjectFlags.SkipSelf */);
}
// Converts bitflags to inject options
function convertToInjectOptions(flags) {
  return {
    optional: !!(flags & 8 /* InternalInjectFlags.Optional */),
    host: !!(flags & 1 /* InternalInjectFlags.Host */),
    self: !!(flags & 2 /* InternalInjectFlags.Self */),
    skipSelf: !!(flags & 4 /* InternalInjectFlags.SkipSelf */)
  };
}
function injectArgs(types) {
  const args = [];
  for (let i = 0; i < types.length; i++) {
    const arg = resolveForwardRef(types[i]);
    if (Array.isArray(arg)) {
      if (arg.length === 0) {
        throw new RuntimeError(900 /* RuntimeErrorCode.INVALID_DIFFER_INPUT */, ngDevMode && 'Arguments array must have arguments.');
      }
      let type = undefined;
      let flags = 0 /* InternalInjectFlags.Default */;
      for (let j = 0; j < arg.length; j++) {
        const meta = arg[j];
        const flag = getInjectFlag(meta);
        if (typeof flag === 'number') {
          // Special case when we handle @Inject decorator.
          if (flag === -1 /* DecoratorFlags.Inject */) {
            type = meta.token;
          } else {
            flags |= flag;
          }
        } else {
          type = meta;
        }
      }
      args.push(ɵɵinject(type, flags));
    } else {
      args.push(ɵɵinject(arg));
    }
  }
  return args;
}
/**
 * Attaches a given InjectFlag to a given decorator using monkey-patching.
 * Since DI decorators can be used in providers `deps` array (when provider is configured using
 * `useFactory`) without initialization (e.g. `Host`) and as an instance (e.g. `new Host()`), we
 * attach the flag to make it available both as a static property and as a field on decorator
 * instance.
 *
 * @param decorator Provided DI decorator.
 * @param flag InjectFlag that should be applied.
 */
function attachInjectFlag(decorator, flag) {
  decorator[DI_DECORATOR_FLAG] = flag;
  decorator.prototype[DI_DECORATOR_FLAG] = flag;
  return decorator;
}
/**
 * Reads monkey-patched property that contains InjectFlag attached to a decorator.
 *
 * @param token Token that may contain monkey-patched DI flags property.
 */
function getInjectFlag(token) {
  return token[DI_DECORATOR_FLAG];
}
function catchInjectorError(e, token, injectorErrorName, source) {
  const tokenPath = e[NG_TEMP_TOKEN_PATH];
  if (token[SOURCE]) {
    tokenPath.unshift(token[SOURCE]);
  }
  e.message = formatError('\n' + e.message, tokenPath, injectorErrorName, source);
  e[NG_TOKEN_PATH] = tokenPath;
  e[NG_TEMP_TOKEN_PATH] = null;
  throw e;
}
function formatError(text, obj, injectorErrorName, source = null) {
  text = text && text.charAt(0) === '\n' && text.charAt(1) == NO_NEW_LINE ? text.slice(2) : text;
  let context = stringify(obj);
  if (Array.isArray(obj)) {
    context = obj.map(stringify).join(' -> ');
  } else if (typeof obj === 'object') {
    let parts = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let value = obj[key];
        parts.push(key + ':' + (typeof value === 'string' ? JSON.stringify(value) : stringify(value)));
      }
    }
    context = `{${parts.join(', ')}}`;
  }
  return `${injectorErrorName}${source ? '(' + source + ')' : ''}[${context}]: ${text.replace(NEW_LINE, '\n  ')}`;
}
function getFactoryDef(type, throwNotFound) {
  const hasFactoryDef = type.hasOwnProperty(NG_FACTORY_DEF);
  if (!hasFactoryDef && throwNotFound === true && ngDevMode) {
    throw new Error(`Type ${stringify(type)} does not have 'ɵfac' property.`);
  }
  return hasFactoryDef ? type[NG_FACTORY_DEF] : null;
}

/**
 * Determines if the contents of two arrays is identical
 *
 * @param a first array
 * @param b second array
 * @param identityAccessor Optional function for extracting stable object identity from a value in
 *     the array.
 */
function arrayEquals(a, b, identityAccessor) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    let valueA = a[i];
    let valueB = b[i];
    if (identityAccessor) {
      valueA = identityAccessor(valueA);
      valueB = identityAccessor(valueB);
    }
    if (valueB !== valueA) {
      return false;
    }
  }
  return true;
}
/**
 * Flattens an array.
 */
function flatten(list) {
  return list.flat(Number.POSITIVE_INFINITY);
}
function deepForEach(input, fn) {
  input.forEach(value => Array.isArray(value) ? deepForEach(value, fn) : fn(value));
}
function addToArray(arr, index, value) {
  // perf: array.push is faster than array.splice!
  if (index >= arr.length) {
    arr.push(value);
  } else {
    arr.splice(index, 0, value);
  }
}
function removeFromArray(arr, index) {
  // perf: array.pop is faster than array.splice!
  if (index >= arr.length - 1) {
    return arr.pop();
  } else {
    return arr.splice(index, 1)[0];
  }
}
function newArray(size, value) {
  const list = [];
  for (let i = 0; i < size; i++) {
    list.push(value);
  }
  return list;
}
/**
 * Remove item from array (Same as `Array.splice()` but faster.)
 *
 * `Array.splice()` is not as fast because it has to allocate an array for the elements which were
 * removed. This causes memory pressure and slows down code when most of the time we don't
 * care about the deleted items array.
 *
 * https://jsperf.com/fast-array-splice (About 20x faster)
 *
 * @param array Array to splice
 * @param index Index of element in array to remove.
 * @param count Number of items to remove.
 */
function arraySplice(array, index, count) {
  const length = array.length - count;
  while (index < length) {
    array[index] = array[index + count];
    index++;
  }
  while (count--) {
    array.pop(); // shrink the array
  }
}
/**
 * Same as `Array.splice2(index, 0, value1, value2)` but faster.
 *
 * `Array.splice()` is not fast because it has to allocate an array for the elements which were
 * removed. This causes memory pressure and slows down code when most of the time we don't
 * care about the deleted items array.
 *
 * @param array Array to splice.
 * @param index Index in array where the `value` should be added.
 * @param value1 Value to add to array.
 * @param value2 Value to add to array.
 */
function arrayInsert2(array, index, value1, value2) {
  ngDevMode && assertLessThanOrEqual(index, array.length, "Can't insert past array end.");
  let end = array.length;
  if (end == index) {
    // inserting at the end.
    array.push(value1, value2);
  } else if (end === 1) {
    // corner case when we have less items in array than we have items to insert.
    array.push(value2, array[0]);
    array[0] = value1;
  } else {
    end--;
    array.push(array[end - 1], array[end]);
    while (end > index) {
      const previousEnd = end - 2;
      array[end] = array[previousEnd];
      end--;
    }
    array[index] = value1;
    array[index + 1] = value2;
  }
}
/**
 * Set a `value` for a `key`.
 *
 * @param keyValueArray to modify.
 * @param key The key to locate or create.
 * @param value The value to set for a `key`.
 * @returns index (always even) of where the value vas set.
 */
function keyValueArraySet(keyValueArray, key, value) {
  let index = keyValueArrayIndexOf(keyValueArray, key);
  if (index >= 0) {
    // if we found it set it.
    keyValueArray[index | 1] = value;
  } else {
    index = ~index;
    arrayInsert2(keyValueArray, index, key, value);
  }
  return index;
}
/**
 * Retrieve a `value` for a `key` (on `undefined` if not found.)
 *
 * @param keyValueArray to search.
 * @param key The key to locate.
 * @return The `value` stored at the `key` location or `undefined if not found.
 */
function keyValueArrayGet(keyValueArray, key) {
  const index = keyValueArrayIndexOf(keyValueArray, key);
  if (index >= 0) {
    // if we found it retrieve it.
    return keyValueArray[index | 1];
  }
  return undefined;
}
/**
 * Retrieve a `key` index value in the array or `-1` if not found.
 *
 * @param keyValueArray to search.
 * @param key The key to locate.
 * @returns index of where the key is (or should have been.)
 *   - positive (even) index if key found.
 *   - negative index if key not found. (`~index` (even) to get the index where it should have
 *     been inserted.)
 */
function keyValueArrayIndexOf(keyValueArray, key) {
  return _arrayIndexOfSorted(keyValueArray, key, 1);
}
/**
 * INTERNAL: Get an index of an `value` in a sorted `array` by grouping search by `shift`.
 *
 * NOTE:
 * - This uses binary search algorithm for fast removals.
 *
 * @param array A sorted array to binary search.
 * @param value The value to look for.
 * @param shift grouping shift.
 *   - `0` means look at every location
 *   - `1` means only look at every other (even) location (the odd locations are to be ignored as
 *         they are values.)
 * @returns index of the value.
 *   - positive index if value found.
 *   - negative index if value not found. (`~index` to get the value where it should have been
 * inserted)
 */
function _arrayIndexOfSorted(array, value, shift) {
  ngDevMode && assertEqual(Array.isArray(array), true, 'Expecting an array');
  let start = 0;
  let end = array.length >> shift;
  while (end !== start) {
    const middle = start + (end - start >> 1); // find the middle.
    const current = array[middle << shift];
    if (value === current) {
      return middle << shift;
    } else if (current > value) {
      end = middle;
    } else {
      start = middle + 1; // We already searched middle so make it non-inclusive by adding 1
    }
  }
  return ~(end << shift);
}

/**
 * This file contains reuseable "empty" symbols that can be used as default return values
 * in different parts of the rendering code. Because the same symbols are returned, this
 * allows for identity checks against these values to be consistently used by the framework
 * code.
 */
const EMPTY_OBJ = {};
const EMPTY_ARRAY = [];
// freezing the values prevents any code from accidentally inserting new values in
if ((typeof ngDevMode === 'undefined' || ngDevMode) && /*#__PURE__*/initNgDevMode()) {
  // These property accesses can be ignored because ngDevMode will be set to false
  // when optimizing code and the whole if statement will be dropped.
  // tslint:disable-next-line:no-toplevel-property-access
  /*#__PURE__*/Object.freeze(EMPTY_OBJ);
  // tslint:disable-next-line:no-toplevel-property-access
  /*#__PURE__*/Object.freeze(EMPTY_ARRAY);
}

/**
 * A multi-provider token for initialization functions that will run upon construction of an
 * environment injector.
 *
 * @deprecated from v19.0.0, use provideEnvironmentInitializer instead
 *
 * @see {@link provideEnvironmentInitializer}
 *
 * Note: As opposed to the `APP_INITIALIZER` token, the `ENVIRONMENT_INITIALIZER` functions are not awaited,
 * hence they should not be `async`.
 *
 * @publicApi
 */
const ENVIRONMENT_INITIALIZER = /*#__PURE__*/new InjectionToken(ngDevMode ? 'ENVIRONMENT_INITIALIZER' : '');

/**
 * An InjectionToken that gets the current `Injector` for `createInjector()`-style injectors.
 *
 * Requesting this token instead of `Injector` allows `StaticInjector` to be tree-shaken from a
 * project.
 *
 * @publicApi
 */
const INJECTOR$1 = /*#__PURE__*/new InjectionToken(ngDevMode ? 'INJECTOR' : '',
// Disable tslint because this is const enum which gets inlined not top level prop access.
// tslint:disable-next-line: no-toplevel-property-access
-1 /* InjectorMarkers.Injector */);
const INJECTOR_DEF_TYPES = /*#__PURE__*/new InjectionToken(ngDevMode ? 'INJECTOR_DEF_TYPES' : '');
class NullInjector {
  get(token, notFoundValue = THROW_IF_NOT_FOUND) {
    if (notFoundValue === THROW_IF_NOT_FOUND) {
      const error = new _angular_core_primitives_di__WEBPACK_IMPORTED_MODULE_1__.NotFoundError(`NullInjectorError: No provider for ${stringify(token)}!`);
      throw error;
    }
    return notFoundValue;
  }
}
function getNgModuleDef(type) {
  return type[NG_MOD_DEF] || null;
}
function getNgModuleDefOrThrow(type) {
  const ngModuleDef = getNgModuleDef(type);
  if (!ngModuleDef) {
    throw new RuntimeError(915 /* RuntimeErrorCode.MISSING_NG_MODULE_DEFINITION */, (typeof ngDevMode === 'undefined' || ngDevMode) && `Type ${stringify(type)} does not have 'ɵmod' property.`);
  }
  return ngModuleDef;
}
/**
 * The following getter methods retrieve the definition from the type. Currently the retrieval
 * honors inheritance, but in the future we may change the rule to require that definitions are
 * explicit. This would require some sort of migration strategy.
 */
function getComponentDef(type) {
  return type[NG_COMP_DEF] || null;
}
function getDirectiveDefOrThrow(type) {
  const def = getDirectiveDef(type);
  if (!def) {
    throw new RuntimeError(916 /* RuntimeErrorCode.MISSING_DIRECTIVE_DEFINITION */, (typeof ngDevMode === 'undefined' || ngDevMode) && `Type ${stringify(type)} does not have 'ɵdir' property.`);
  }
  return def;
}
function getDirectiveDef(type) {
  return type[NG_DIR_DEF] || null;
}
function getPipeDef(type) {
  return type[NG_PIPE_DEF] || null;
}
/**
 * Checks whether a given Component, Directive or Pipe is marked as standalone.
 * This will return false if passed anything other than a Component, Directive, or Pipe class
 * See [this guide](guide/components/importing) for additional information:
 *
 * @param type A reference to a Component, Directive or Pipe.
 * @publicApi
 */
function isStandalone(type) {
  const def = getComponentDef(type) || getDirectiveDef(type) || getPipeDef(type);
  return def !== null && def.standalone;
}

/**
 * Wrap an array of `Provider`s into `EnvironmentProviders`, preventing them from being accidentally
 * referenced in `@Component` in a component injector.
 *
 * @publicApi
 */
function makeEnvironmentProviders(providers) {
  return {
    ɵproviders: providers
  };
}
/**
 * @description
 * This function is used to provide initialization functions that will be executed upon construction
 * of an environment injector.
 *
 * Note that the provided initializer is run in the injection context.
 *
 * Previously, this was achieved using the `ENVIRONMENT_INITIALIZER` token which is now deprecated.
 *
 * @see {@link ENVIRONMENT_INITIALIZER}
 *
 * @usageNotes
 * The following example illustrates how to configure an initialization function using
 * `provideEnvironmentInitializer()`
 * ```ts
 * createEnvironmentInjector(
 *   [
 *     provideEnvironmentInitializer(() => {
 *       console.log('environment initialized');
 *     }),
 *   ],
 *   parentInjector
 * );
 * ```
 *
 * @publicApi
 */
function provideEnvironmentInitializer(initializerFn) {
  return makeEnvironmentProviders([{
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useValue: initializerFn
  }]);
}
/**
 * Collects providers from all NgModules and standalone components, including transitively imported
 * ones.
 *
 * Providers extracted via `importProvidersFrom` are only usable in an application injector or
 * another environment injector (such as a route injector). They should not be used in component
 * providers.
 *
 * More information about standalone components can be found in [this
 * guide](guide/components/importing).
 *
 * @usageNotes
 * The results of the `importProvidersFrom` call can be used in the `bootstrapApplication` call:
 *
 * ```ts
 * await bootstrapApplication(RootComponent, {
 *   providers: [
 *     importProvidersFrom(NgModuleOne, NgModuleTwo)
 *   ]
 * });
 * ```
 *
 * You can also use the `importProvidersFrom` results in the `providers` field of a route, when a
 * standalone component is used:
 *
 * ```ts
 * export const ROUTES: Route[] = [
 *   {
 *     path: 'foo',
 *     providers: [
 *       importProvidersFrom(NgModuleOne, NgModuleTwo)
 *     ],
 *     component: YourStandaloneComponent
 *   }
 * ];
 * ```
 *
 * @returns Collected providers from the specified list of types.
 * @publicApi
 */
function importProvidersFrom(...sources) {
  return {
    ɵproviders: internalImportProvidersFrom(true, sources),
    ɵfromNgModule: true
  };
}
function internalImportProvidersFrom(checkForStandaloneCmp, ...sources) {
  const providersOut = [];
  const dedup = new Set(); // already seen types
  let injectorTypesWithProviders;
  const collectProviders = provider => {
    providersOut.push(provider);
  };
  deepForEach(sources, source => {
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && checkForStandaloneCmp) {
      const cmpDef = getComponentDef(source);
      if (cmpDef?.standalone) {
        throw new RuntimeError(800 /* RuntimeErrorCode.IMPORT_PROVIDERS_FROM_STANDALONE */, `Importing providers supports NgModule or ModuleWithProviders but got a standalone component "${stringifyForError(source)}"`);
      }
    }
    // Narrow `source` to access the internal type analogue for `ModuleWithProviders`.
    const internalSource = source;
    if (walkProviderTree(internalSource, collectProviders, [], dedup)) {
      injectorTypesWithProviders ||= [];
      injectorTypesWithProviders.push(internalSource);
    }
  });
  // Collect all providers from `ModuleWithProviders` types.
  if (injectorTypesWithProviders !== undefined) {
    processInjectorTypesWithProviders(injectorTypesWithProviders, collectProviders);
  }
  return providersOut;
}
/**
 * Collects all providers from the list of `ModuleWithProviders` and appends them to the provided
 * array.
 */
function processInjectorTypesWithProviders(typesWithProviders, visitor) {
  for (let i = 0; i < typesWithProviders.length; i++) {
    const {
      ngModule,
      providers
    } = typesWithProviders[i];
    deepForEachProvider(providers, provider => {
      ngDevMode && validateProvider(provider, providers || EMPTY_ARRAY, ngModule);
      visitor(provider, ngModule);
    });
  }
}
/**
 * The logic visits an `InjectorType`, an `InjectorTypeWithProviders`, or a standalone
 * `ComponentType`, and all of its transitive providers and collects providers.
 *
 * If an `InjectorTypeWithProviders` that declares providers besides the type is specified,
 * the function will return "true" to indicate that the providers of the type definition need
 * to be processed. This allows us to process providers of injector types after all imports of
 * an injector definition are processed. (following View Engine semantics: see FW-1349)
 */
function walkProviderTree(container, visitor, parents, dedup) {
  container = resolveForwardRef(container);
  if (!container) return false;
  // The actual type which had the definition. Usually `container`, but may be an unwrapped type
  // from `InjectorTypeWithProviders`.
  let defType = null;
  let injDef = getInjectorDef(container);
  const cmpDef = !injDef && getComponentDef(container);
  if (!injDef && !cmpDef) {
    // `container` is not an injector type or a component type. It might be:
    //  * An `InjectorTypeWithProviders` that wraps an injector type.
    //  * A standalone directive or pipe that got pulled in from a standalone component's
    //    dependencies.
    // Try to unwrap it as an `InjectorTypeWithProviders` first.
    const ngModule = container.ngModule;
    injDef = getInjectorDef(ngModule);
    if (injDef) {
      defType = ngModule;
    } else {
      // Not a component or injector type, so ignore it.
      return false;
    }
  } else if (cmpDef && !cmpDef.standalone) {
    return false;
  } else {
    defType = container;
  }
  // Check for circular dependencies.
  if (ngDevMode && parents.indexOf(defType) !== -1) {
    const defName = stringify(defType);
    const path = parents.map(stringify);
    throwCyclicDependencyError(defName, path);
  }
  // Check for multiple imports of the same module
  const isDuplicate = dedup.has(defType);
  if (cmpDef) {
    if (isDuplicate) {
      // This component definition has already been processed.
      return false;
    }
    dedup.add(defType);
    if (cmpDef.dependencies) {
      const deps = typeof cmpDef.dependencies === 'function' ? cmpDef.dependencies() : cmpDef.dependencies;
      for (const dep of deps) {
        walkProviderTree(dep, visitor, parents, dedup);
      }
    }
  } else if (injDef) {
    // First, include providers from any imports.
    if (injDef.imports != null && !isDuplicate) {
      // Before processing defType's imports, add it to the set of parents. This way, if it ends
      // up deeply importing itself, this can be detected.
      ngDevMode && parents.push(defType);
      // Add it to the set of dedups. This way we can detect multiple imports of the same module
      dedup.add(defType);
      let importTypesWithProviders;
      try {
        deepForEach(injDef.imports, imported => {
          if (walkProviderTree(imported, visitor, parents, dedup)) {
            importTypesWithProviders ||= [];
            // If the processed import is an injector type with providers, we store it in the
            // list of import types with providers, so that we can process those afterwards.
            importTypesWithProviders.push(imported);
          }
        });
      } finally {
        // Remove it from the parents set when finished.
        ngDevMode && parents.pop();
      }
      // Imports which are declared with providers (TypeWithProviders) need to be processed
      // after all imported modules are processed. This is similar to how View Engine
      // processes/merges module imports in the metadata resolver. See: FW-1349.
      if (importTypesWithProviders !== undefined) {
        processInjectorTypesWithProviders(importTypesWithProviders, visitor);
      }
    }
    if (!isDuplicate) {
      // Track the InjectorType and add a provider for it.
      // It's important that this is done after the def's imports.
      const factory = getFactoryDef(defType) || (() => new defType());
      // Append extra providers to make more info available for consumers (to retrieve an injector
      // type), as well as internally (to calculate an injection scope correctly and eagerly
      // instantiate a `defType` when an injector is created).
      // Provider to create `defType` using its factory.
      visitor({
        provide: defType,
        useFactory: factory,
        deps: EMPTY_ARRAY
      }, defType);
      // Make this `defType` available to an internal logic that calculates injector scope.
      visitor({
        provide: INJECTOR_DEF_TYPES,
        useValue: defType,
        multi: true
      }, defType);
      // Provider to eagerly instantiate `defType` via `INJECTOR_INITIALIZER`.
      visitor({
        provide: ENVIRONMENT_INITIALIZER,
        useValue: () => ɵɵinject(defType),
        multi: true
      }, defType);
    }
    // Next, include providers listed on the definition itself.
    const defProviders = injDef.providers;
    if (defProviders != null && !isDuplicate) {
      const injectorType = container;
      deepForEachProvider(defProviders, provider => {
        ngDevMode && validateProvider(provider, defProviders, injectorType);
        visitor(provider, injectorType);
      });
    }
  } else {
    // Should not happen, but just in case.
    return false;
  }
  return defType !== container && container.providers !== undefined;
}
function validateProvider(provider, providers, containerType) {
  if (isTypeProvider(provider) || isValueProvider(provider) || isFactoryProvider(provider) || isExistingProvider(provider)) {
    return;
  }
  // Here we expect the provider to be a `useClass` provider (by elimination).
  const classRef = resolveForwardRef(provider && (provider.useClass || provider.provide));
  if (!classRef) {
    throwInvalidProviderError(containerType, providers, provider);
  }
}
function deepForEachProvider(providers, fn) {
  for (let provider of providers) {
    if (isEnvironmentProviders(provider)) {
      provider = provider.ɵproviders;
    }
    if (Array.isArray(provider)) {
      deepForEachProvider(provider, fn);
    } else {
      fn(provider);
    }
  }
}
const USE_VALUE = /*#__PURE__*/getClosureSafeProperty({
  provide: String,
  useValue: getClosureSafeProperty
});
function isValueProvider(value) {
  return value !== null && typeof value == 'object' && USE_VALUE in value;
}
function isExistingProvider(value) {
  return !!(value && value.useExisting);
}
function isFactoryProvider(value) {
  return !!(value && value.useFactory);
}
function isTypeProvider(value) {
  return typeof value === 'function';
}
function isClassProvider(value) {
  return !!value.useClass;
}

/**
 * An internal token whose presence in an injector indicates that the injector should treat itself
 * as a root scoped injector when processing requests for unknown tokens which may indicate
 * they are provided in the root scope.
 */
const INJECTOR_SCOPE = /*#__PURE__*/new InjectionToken(ngDevMode ? 'Set Injector scope.' : '');

/**
 * Marker which indicates that a value has not yet been created from the factory function.
 */
const NOT_YET = {};
/**
 * Marker which indicates that the factory function for a token is in the process of being called.
 *
 * If the injector is asked to inject a token with its value set to CIRCULAR, that indicates
 * injection of a dependency has recursively attempted to inject the original token, and there is
 * a circular dependency among the providers.
 */
const CIRCULAR = {};
/**
 * A lazily initialized NullInjector.
 */
let NULL_INJECTOR = undefined;
function getNullInjector() {
  if (NULL_INJECTOR === undefined) {
    NULL_INJECTOR = new NullInjector();
  }
  return NULL_INJECTOR;
}
/**
 * An `Injector` that's part of the environment injector hierarchy, which exists outside of the
 * component tree.
 *
 * @publicApi
 */
class EnvironmentInjector {}
class R3Injector extends EnvironmentInjector {
  parent;
  source;
  scopes;
  /**
   * Map of tokens to records which contain the instances of those tokens.
   * - `null` value implies that we don't have the record. Used by tree-shakable injectors
   * to prevent further searches.
   */
  records = /*#__PURE__*/new Map();
  /**
   * Set of values instantiated by this injector which contain `ngOnDestroy` lifecycle hooks.
   */
  _ngOnDestroyHooks = /*#__PURE__*/new Set();
  _onDestroyHooks = [];
  /**
   * Flag indicating that this injector was previously destroyed.
   */
  get destroyed() {
    return this._destroyed;
  }
  _destroyed = false;
  injectorDefTypes;
  constructor(providers, parent, source, scopes) {
    super();
    this.parent = parent;
    this.source = source;
    this.scopes = scopes;
    // Start off by creating Records for every provider.
    forEachSingleProvider(providers, provider => this.processProvider(provider));
    // Make sure the INJECTOR token provides this injector.
    this.records.set(INJECTOR$1, makeRecord(undefined, this));
    // And `EnvironmentInjector` if the current injector is supposed to be env-scoped.
    if (scopes.has('environment')) {
      this.records.set(EnvironmentInjector, makeRecord(undefined, this));
    }
    // Detect whether this injector has the APP_ROOT_SCOPE token and thus should provide
    // any injectable scoped to APP_ROOT_SCOPE.
    const record = this.records.get(INJECTOR_SCOPE);
    if (record != null && typeof record.value === 'string') {
      this.scopes.add(record.value);
    }
    this.injectorDefTypes = new Set(this.get(INJECTOR_DEF_TYPES, EMPTY_ARRAY, {
      self: true
    }));
  }
  retrieve(token, options) {
    const flags = convertToBitFlags(options) || 0 /* InternalInjectFlags.Default */;
    try {
      return this.get(token,
      // When a dependency is requested with an optional flag, DI returns null as the default value.
      THROW_IF_NOT_FOUND, flags);
    } catch (e) {
      if ((0,_angular_core_primitives_di__WEBPACK_IMPORTED_MODULE_1__.isNotFound)(e)) {
        return e;
      }
      throw e;
    }
  }
  /**
   * Destroy the injector and release references to every instance or provider associated with it.
   *
   * Also calls the `OnDestroy` lifecycle hooks of every instance that was created for which a
   * hook was found.
   */
  destroy() {
    assertNotDestroyed(this);
    // Set destroyed = true first, in case lifecycle hooks re-enter destroy().
    this._destroyed = true;
    const prevConsumer = (0,_angular_core_primitives_signals__WEBPACK_IMPORTED_MODULE_2__.setActiveConsumer)(null);
    try {
      // Call all the lifecycle hooks.
      for (const service of this._ngOnDestroyHooks) {
        service.ngOnDestroy();
      }
      const onDestroyHooks = this._onDestroyHooks;
      // Reset the _onDestroyHooks array before iterating over it to prevent hooks that unregister
      // themselves from mutating the array during iteration.
      this._onDestroyHooks = [];
      for (const hook of onDestroyHooks) {
        hook();
      }
    } finally {
      // Release all references.
      this.records.clear();
      this._ngOnDestroyHooks.clear();
      this.injectorDefTypes.clear();
      (0,_angular_core_primitives_signals__WEBPACK_IMPORTED_MODULE_2__.setActiveConsumer)(prevConsumer);
    }
  }
  onDestroy(callback) {
    assertNotDestroyed(this);
    this._onDestroyHooks.push(callback);
    return () => this.removeOnDestroy(callback);
  }
  runInContext(fn) {
    assertNotDestroyed(this);
    const previousInjector = (0,_not_found_mjs__WEBPACK_IMPORTED_MODULE_4__.setCurrentInjector)(this);
    const previousInjectImplementation = setInjectImplementation(undefined);
    let prevInjectContext;
    if (ngDevMode) {
      prevInjectContext = setInjectorProfilerContext({
        injector: this,
        token: null
      });
    }
    try {
      return fn();
    } finally {
      (0,_not_found_mjs__WEBPACK_IMPORTED_MODULE_4__.setCurrentInjector)(previousInjector);
      setInjectImplementation(previousInjectImplementation);
      ngDevMode && setInjectorProfilerContext(prevInjectContext);
    }
  }
  get(token, notFoundValue = THROW_IF_NOT_FOUND, options) {
    assertNotDestroyed(this);
    if (token.hasOwnProperty(NG_ENV_ID)) {
      return token[NG_ENV_ID](this);
    }
    const flags = convertToBitFlags(options);
    // Set the injection context.
    let prevInjectContext;
    if (ngDevMode) {
      prevInjectContext = setInjectorProfilerContext({
        injector: this,
        token: token
      });
    }
    const previousInjector = (0,_not_found_mjs__WEBPACK_IMPORTED_MODULE_4__.setCurrentInjector)(this);
    const previousInjectImplementation = setInjectImplementation(undefined);
    try {
      // Check for the SkipSelf flag.
      if (!(flags & 4 /* InternalInjectFlags.SkipSelf */)) {
        // SkipSelf isn't set, check if the record belongs to this injector.
        let record = this.records.get(token);
        if (record === undefined) {
          // No record, but maybe the token is scoped to this injector. Look for an injectable
          // def with a scope matching this injector.
          const def = couldBeInjectableType(token) && getInjectableDef(token);
          if (def && this.injectableDefInScope(def)) {
            // Found an injectable def and it's scoped to this injector. Pretend as if it was here
            // all along.
            if (ngDevMode) {
              runInInjectorProfilerContext(this, token, () => {
                emitProviderConfiguredEvent(token);
              });
            }
            record = makeRecord(injectableDefOrInjectorDefFactory(token), NOT_YET);
          } else {
            record = null;
          }
          this.records.set(token, record);
        }
        // If a record was found, get the instance for it and return it.
        if (record != null /* NOT null || undefined */) {
          return this.hydrate(token, record, flags);
        }
      }
      // Select the next injector based on the Self flag - if self is set, the next injector is
      // the NullInjector, otherwise it's the parent.
      const nextInjector = !(flags & 2 /* InternalInjectFlags.Self */) ? this.parent : getNullInjector();
      // Set the notFoundValue based on the Optional flag - if optional is set and notFoundValue
      // is undefined, the value is null, otherwise it's the notFoundValue.
      notFoundValue = flags & 8 /* InternalInjectFlags.Optional */ && notFoundValue === THROW_IF_NOT_FOUND ? null : notFoundValue;
      return nextInjector.get(token, notFoundValue);
    } catch (e) {
      if ((0,_angular_core_primitives_di__WEBPACK_IMPORTED_MODULE_1__.isNotFound)(e)) {
        // @ts-ignore
        const path = e[NG_TEMP_TOKEN_PATH] = e[NG_TEMP_TOKEN_PATH] || [];
        path.unshift(stringify(token));
        if (previousInjector) {
          // We still have a parent injector, keep throwing
          throw e;
        } else {
          // Format & throw the final error message when we don't have any previous injector
          return catchInjectorError(e, token, 'R3InjectorError', this.source);
        }
      } else {
        throw e;
      }
    } finally {
      // Lastly, restore the previous injection context.
      setInjectImplementation(previousInjectImplementation);
      (0,_not_found_mjs__WEBPACK_IMPORTED_MODULE_4__.setCurrentInjector)(previousInjector);
      ngDevMode && setInjectorProfilerContext(prevInjectContext);
    }
  }
  /** @internal */
  resolveInjectorInitializers() {
    const prevConsumer = (0,_angular_core_primitives_signals__WEBPACK_IMPORTED_MODULE_2__.setActiveConsumer)(null);
    const previousInjector = (0,_not_found_mjs__WEBPACK_IMPORTED_MODULE_4__.setCurrentInjector)(this);
    const previousInjectImplementation = setInjectImplementation(undefined);
    let prevInjectContext;
    if (ngDevMode) {
      prevInjectContext = setInjectorProfilerContext({
        injector: this,
        token: null
      });
    }
    try {
      const initializers = this.get(ENVIRONMENT_INITIALIZER, EMPTY_ARRAY, {
        self: true
      });
      if (ngDevMode && !Array.isArray(initializers)) {
        throw new RuntimeError(-209 /* RuntimeErrorCode.INVALID_MULTI_PROVIDER */, 'Unexpected type of the `ENVIRONMENT_INITIALIZER` token value ' + `(expected an array, but got ${typeof initializers}). ` + 'Please check that the `ENVIRONMENT_INITIALIZER` token is configured as a ' + '`multi: true` provider.');
      }
      for (const initializer of initializers) {
        initializer();
      }
    } finally {
      (0,_not_found_mjs__WEBPACK_IMPORTED_MODULE_4__.setCurrentInjector)(previousInjector);
      setInjectImplementation(previousInjectImplementation);
      ngDevMode && setInjectorProfilerContext(prevInjectContext);
      (0,_angular_core_primitives_signals__WEBPACK_IMPORTED_MODULE_2__.setActiveConsumer)(prevConsumer);
    }
  }
  toString() {
    const tokens = [];
    const records = this.records;
    for (const token of records.keys()) {
      tokens.push(stringify(token));
    }
    return `R3Injector[${tokens.join(', ')}]`;
  }
  /**
   * Process a `SingleProvider` and add it.
   */
  processProvider(provider) {
    // Determine the token from the provider. Either it's its own token, or has a {provide: ...}
    // property.
    provider = resolveForwardRef(provider);
    let token = isTypeProvider(provider) ? provider : resolveForwardRef(provider && provider.provide);
    // Construct a `Record` for the provider.
    const record = providerToRecord(provider);
    if (ngDevMode) {
      runInInjectorProfilerContext(this, token, () => {
        // Emit InjectorProfilerEventType.Create if provider is a value provider because
        // these are the only providers that do not go through the value hydration logic
        // where this event would normally be emitted from.
        if (isValueProvider(provider)) {
          emitInjectorToCreateInstanceEvent(token);
          emitInstanceCreatedByInjectorEvent(provider.useValue);
        }
        emitProviderConfiguredEvent(provider);
      });
    }
    if (!isTypeProvider(provider) && provider.multi === true) {
      // If the provider indicates that it's a multi-provider, process it specially.
      // First check whether it's been defined already.
      let multiRecord = this.records.get(token);
      if (multiRecord) {
        // It has. Throw a nice error if
        if (ngDevMode && multiRecord.multi === undefined) {
          throwMixedMultiProviderError();
        }
      } else {
        multiRecord = makeRecord(undefined, NOT_YET, true);
        multiRecord.factory = () => injectArgs(multiRecord.multi);
        this.records.set(token, multiRecord);
      }
      token = provider;
      multiRecord.multi.push(provider);
    } else {
      if (ngDevMode) {
        const existing = this.records.get(token);
        if (existing && existing.multi !== undefined) {
          throwMixedMultiProviderError();
        }
      }
    }
    this.records.set(token, record);
  }
  hydrate(token, record, flags) {
    const prevConsumer = (0,_angular_core_primitives_signals__WEBPACK_IMPORTED_MODULE_2__.setActiveConsumer)(null);
    try {
      if (record.value === CIRCULAR) {
        throwCyclicDependencyError(stringify(token));
      } else if (record.value === NOT_YET) {
        record.value = CIRCULAR;
        if (ngDevMode) {
          runInInjectorProfilerContext(this, token, () => {
            emitInjectorToCreateInstanceEvent(token);
            record.value = record.factory(undefined, flags);
            emitInstanceCreatedByInjectorEvent(record.value);
          });
        } else {
          record.value = record.factory(undefined, flags);
        }
      }
      if (typeof record.value === 'object' && record.value && hasOnDestroy(record.value)) {
        this._ngOnDestroyHooks.add(record.value);
      }
      return record.value;
    } finally {
      (0,_angular_core_primitives_signals__WEBPACK_IMPORTED_MODULE_2__.setActiveConsumer)(prevConsumer);
    }
  }
  injectableDefInScope(def) {
    if (!def.providedIn) {
      return false;
    }
    const providedIn = resolveForwardRef(def.providedIn);
    if (typeof providedIn === 'string') {
      return providedIn === 'any' || this.scopes.has(providedIn);
    } else {
      return this.injectorDefTypes.has(providedIn);
    }
  }
  removeOnDestroy(callback) {
    const destroyCBIdx = this._onDestroyHooks.indexOf(callback);
    if (destroyCBIdx !== -1) {
      this._onDestroyHooks.splice(destroyCBIdx, 1);
    }
  }
}
function injectableDefOrInjectorDefFactory(token) {
  // Most tokens will have an injectable def directly on them, which specifies a factory directly.
  const injectableDef = getInjectableDef(token);
  const factory = injectableDef !== null ? injectableDef.factory : getFactoryDef(token);
  if (factory !== null) {
    return factory;
  }
  // InjectionTokens should have an injectable def (ɵprov) and thus should be handled above.
  // If it's missing that, it's an error.
  if (token instanceof InjectionToken) {
    throw new RuntimeError(204 /* RuntimeErrorCode.INVALID_INJECTION_TOKEN */, ngDevMode && `Token ${stringify(token)} is missing a ɵprov definition.`);
  }
  // Undecorated types can sometimes be created if they have no constructor arguments.
  if (token instanceof Function) {
    return getUndecoratedInjectableFactory(token);
  }
  // There was no way to resolve a factory for this token.
  throw new RuntimeError(204 /* RuntimeErrorCode.INVALID_INJECTION_TOKEN */, ngDevMode && 'unreachable');
}
function getUndecoratedInjectableFactory(token) {
  // If the token has parameters then it has dependencies that we cannot resolve implicitly.
  const paramLength = token.length;
  if (paramLength > 0) {
    throw new RuntimeError(204 /* RuntimeErrorCode.INVALID_INJECTION_TOKEN */, ngDevMode && `Can't resolve all parameters for ${stringify(token)}: (${newArray(paramLength, '?').join(', ')}).`);
  }
  // The constructor function appears to have no parameters.
  // This might be because it inherits from a super-class. In which case, use an injectable
  // def from an ancestor if there is one.
  // Otherwise this really is a simple class with no dependencies, so return a factory that
  // just instantiates the zero-arg constructor.
  const inheritedInjectableDef = getInheritedInjectableDef(token);
  if (inheritedInjectableDef !== null) {
    return () => inheritedInjectableDef.factory(token);
  } else {
    return () => new token();
  }
}
function providerToRecord(provider) {
  if (isValueProvider(provider)) {
    return makeRecord(undefined, provider.useValue);
  } else {
    const factory = providerToFactory(provider);
    return makeRecord(factory, NOT_YET);
  }
}
/**
 * Converts a `SingleProvider` into a factory function.
 *
 * @param provider provider to convert to factory
 */
function providerToFactory(provider, ngModuleType, providers) {
  let factory = undefined;
  if (ngDevMode && isEnvironmentProviders(provider)) {
    throwInvalidProviderError(undefined, providers, provider);
  }
  if (isTypeProvider(provider)) {
    const unwrappedProvider = resolveForwardRef(provider);
    return getFactoryDef(unwrappedProvider) || injectableDefOrInjectorDefFactory(unwrappedProvider);
  } else {
    if (isValueProvider(provider)) {
      factory = () => resolveForwardRef(provider.useValue);
    } else if (isFactoryProvider(provider)) {
      factory = () => provider.useFactory(...injectArgs(provider.deps || []));
    } else if (isExistingProvider(provider)) {
      factory = (_, flags) => ɵɵinject(resolveForwardRef(provider.useExisting), flags !== undefined && flags & 8 /* InternalInjectFlags.Optional */ ? 8 /* InternalInjectFlags.Optional */ : undefined);
    } else {
      const classRef = resolveForwardRef(provider && (provider.useClass || provider.provide));
      if (ngDevMode && !classRef) {
        throwInvalidProviderError(ngModuleType, providers, provider);
      }
      if (hasDeps(provider)) {
        factory = () => new classRef(...injectArgs(provider.deps));
      } else {
        return getFactoryDef(classRef) || injectableDefOrInjectorDefFactory(classRef);
      }
    }
  }
  return factory;
}
function assertNotDestroyed(injector) {
  if (injector.destroyed) {
    throw new RuntimeError(205 /* RuntimeErrorCode.INJECTOR_ALREADY_DESTROYED */, ngDevMode && 'Injector has already been destroyed.');
  }
}
function makeRecord(factory, value, multi = false) {
  return {
    factory: factory,
    value: value,
    multi: multi ? [] : undefined
  };
}
function hasDeps(value) {
  return !!value.deps;
}
function hasOnDestroy(value) {
  return value !== null && typeof value === 'object' && typeof value.ngOnDestroy === 'function';
}
function couldBeInjectableType(value) {
  return typeof value === 'function' || typeof value === 'object' && value.ngMetadataName === 'InjectionToken';
}
function forEachSingleProvider(providers, fn) {
  for (const provider of providers) {
    if (Array.isArray(provider)) {
      forEachSingleProvider(provider, fn);
    } else if (provider && isEnvironmentProviders(provider)) {
      forEachSingleProvider(provider.ɵproviders, fn);
    } else {
      fn(provider);
    }
  }
}

/**
 * Runs the given function in the [context](guide/di/dependency-injection-context) of the given
 * `Injector`.
 *
 * Within the function's stack frame, [`inject`](api/core/inject) can be used to inject dependencies
 * from the given `Injector`. Note that `inject` is only usable synchronously, and cannot be used in
 * any asynchronous callbacks or after any `await` points.
 *
 * @param injector the injector which will satisfy calls to [`inject`](api/core/inject) while `fn`
 *     is executing
 * @param fn the closure to be run in the context of `injector`
 * @returns the return value of the function, if any
 * @publicApi
 */
function runInInjectionContext(injector, fn) {
  let internalInjector;
  if (injector instanceof R3Injector) {
    assertNotDestroyed(injector);
    internalInjector = injector;
  } else {
    internalInjector = new RetrievingInjector(injector);
  }
  let prevInjectorProfilerContext;
  if (ngDevMode) {
    prevInjectorProfilerContext = setInjectorProfilerContext({
      injector,
      token: null
    });
  }
  const prevInjector = (0,_not_found_mjs__WEBPACK_IMPORTED_MODULE_4__.setCurrentInjector)(internalInjector);
  const previousInjectImplementation = setInjectImplementation(undefined);
  try {
    return fn();
  } finally {
    (0,_not_found_mjs__WEBPACK_IMPORTED_MODULE_4__.setCurrentInjector)(prevInjector);
    ngDevMode && setInjectorProfilerContext(prevInjectorProfilerContext);
    setInjectImplementation(previousInjectImplementation);
  }
}
/**
 * Whether the current stack frame is inside an injection context.
 */
function isInInjectionContext() {
  return getInjectImplementation() !== undefined || (0,_not_found_mjs__WEBPACK_IMPORTED_MODULE_4__.getCurrentInjector)() != null;
}
/**
 * Asserts that the current stack frame is within an [injection
 * context](guide/di/dependency-injection-context) and has access to `inject`.
 *
 * @param debugFn a reference to the function making the assertion (used for the error message).
 *
 * @publicApi
 */
function assertInInjectionContext(debugFn) {
  // Taking a `Function` instead of a string name here prevents the unminified name of the function
  // from being retained in the bundle regardless of minification.
  if (!isInInjectionContext()) {
    throw new RuntimeError(-203 /* RuntimeErrorCode.MISSING_INJECTION_CONTEXT */, ngDevMode && debugFn.name + '() can only be used within an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`');
  }
}

// Below are constants for LView indices to help us look up LView members
// without having to remember the specific indices.
// Uglify will inline these when minifying so there shouldn't be a cost.
const HOST = 0;
const TVIEW = 1;
// Shared with LContainer
const FLAGS = 2;
const PARENT = 3;
const NEXT = 4;
const T_HOST = 5;
// End shared with LContainer
const HYDRATION = 6;
const CLEANUP = 7;
const CONTEXT = 8;
const INJECTOR = 9;
const ENVIRONMENT = 10;
const RENDERER = 11;
const CHILD_HEAD = 12;
const CHILD_TAIL = 13;
// FIXME(misko): Investigate if the three declarations aren't all same thing.
const DECLARATION_VIEW = 14;
const DECLARATION_COMPONENT_VIEW = 15;
const DECLARATION_LCONTAINER = 16;
const PREORDER_HOOK_FLAGS = 17;
const QUERIES = 18;
const ID = 19;
const EMBEDDED_VIEW_INJECTOR = 20;
const ON_DESTROY_HOOKS = 21;
const EFFECTS_TO_SCHEDULE = 22;
const EFFECTS = 23;
const REACTIVE_TEMPLATE_CONSUMER = 24;
const AFTER_RENDER_SEQUENCES_TO_ADD = 25;
/**
 * Size of LView's header. Necessary to adjust for it when setting slots.
 *
 * IMPORTANT: `HEADER_OFFSET` should only be referred to the in the `ɵɵ*` instructions to translate
 * instruction index into `LView` index. All other indexes should be in the `LView` index space and
 * there should be no need to refer to `HEADER_OFFSET` anywhere else.
 */
const HEADER_OFFSET = 26;

/**
 * Special location which allows easy identification of type. If we have an array which was
 * retrieved from the `LView` and that array has `true` at `TYPE` location, we know it is
 * `LContainer`.
 */
const TYPE = 1;
/**
 * Below are constants for LContainer indices to help us look up LContainer members
 * without having to remember the specific indices.
 * Uglify will inline these when minifying so there shouldn't be a cost.
 */
// FLAGS, PARENT, NEXT, and T_HOST are indices 2, 3, 4, and 5
// As we already have these constants in LView, we don't need to re-create them.
const DEHYDRATED_VIEWS = 6;
const NATIVE = 7;
const VIEW_REFS = 8;
const MOVED_VIEWS = 9;
/**
 * Size of LContainer's header. Represents the index after which all views in the
 * container will be inserted. We need to keep a record of current views so we know
 * which views are already in the DOM (and don't need to be re-added) and so we can
 * remove views from the DOM when they are no longer required.
 */
const CONTAINER_HEADER_OFFSET = 10;

/**
 * True if `value` is `LView`.
 * @param value wrapped value of `RNode`, `LView`, `LContainer`
 */
function isLView(value) {
  return Array.isArray(value) && typeof value[TYPE] === 'object';
}
/**
 * True if `value` is `LContainer`.
 * @param value wrapped value of `RNode`, `LView`, `LContainer`
 */
function isLContainer(value) {
  return Array.isArray(value) && value[TYPE] === true;
}
function isContentQueryHost(tNode) {
  return (tNode.flags & 4 /* TNodeFlags.hasContentQuery */) !== 0;
}
function isComponentHost(tNode) {
  return tNode.componentOffset > -1;
}
function isDirectiveHost(tNode) {
  return (tNode.flags & 1 /* TNodeFlags.isDirectiveHost */) === 1 /* TNodeFlags.isDirectiveHost */;
}
function isComponentDef(def) {
  return !!def.template;
}
function isRootView(target) {
  // Determines whether a given LView is marked as a root view.
  return (target[FLAGS] & 512 /* LViewFlags.IsRoot */) !== 0;
}
function isProjectionTNode(tNode) {
  return (tNode.type & 16 /* TNodeType.Projection */) === 16 /* TNodeType.Projection */;
}
function hasI18n(lView) {
  return (lView[FLAGS] & 32 /* LViewFlags.HasI18n */) === 32 /* LViewFlags.HasI18n */;
}
function isDestroyed(lView) {
  // Determines whether a given LView is marked as destroyed.
  return (lView[FLAGS] & 256 /* LViewFlags.Destroyed */) === 256 /* LViewFlags.Destroyed */;
}

// [Assert functions do not constraint type when they are guarded by a truthy
// expression.](https://github.com/microsoft/TypeScript/issues/37295)
function assertTNodeForLView(tNode, lView) {
  assertTNodeForTView(tNode, lView[TVIEW]);
}
function assertTNodeCreationIndex(lView, index) {
  const adjustedIndex = index + HEADER_OFFSET;
  assertIndexInRange(lView, adjustedIndex);
  assertLessThan(adjustedIndex, lView[TVIEW].bindingStartIndex, 'TNodes should be created before any bindings');
}
function assertTNodeForTView(tNode, tView) {
  assertTNode(tNode);
  const tData = tView.data;
  for (let i = HEADER_OFFSET; i < tData.length; i++) {
    if (tData[i] === tNode) {
      return;
    }
  }
  throwError('This TNode does not belong to this TView.');
}
function assertTNode(tNode) {
  assertDefined(tNode, 'TNode must be defined');
  if (!(tNode && typeof tNode === 'object' && tNode.hasOwnProperty('directiveStylingLast'))) {
    throwError('Not of type TNode, got: ' + tNode);
  }
}
function assertTIcu(tIcu) {
  assertDefined(tIcu, 'Expected TIcu to be defined');
  if (!(typeof tIcu.currentCaseLViewIndex === 'number')) {
    throwError('Object is not of TIcu type.');
  }
}
function assertComponentType(actual, msg = "Type passed in is not ComponentType, it does not have 'ɵcmp' property.") {
  if (!getComponentDef(actual)) {
    throwError(msg);
  }
}
function assertNgModuleType(actual, msg = "Type passed in is not NgModuleType, it does not have 'ɵmod' property.") {
  if (!getNgModuleDef(actual)) {
    throwError(msg);
  }
}
function assertHasParent(tNode) {
  assertDefined(tNode, 'currentTNode should exist!');
  assertDefined(tNode.parent, 'currentTNode should have a parent');
}
function assertLContainer(value) {
  assertDefined(value, 'LContainer must be defined');
  assertEqual(isLContainer(value), true, 'Expecting LContainer');
}
function assertLViewOrUndefined(value) {
  value && assertEqual(isLView(value), true, 'Expecting LView or undefined or null');
}
function assertLView(value) {
  assertDefined(value, 'LView must be defined');
  assertEqual(isLView(value), true, 'Expecting LView');
}
function assertFirstCreatePass(tView, errMessage) {
  assertEqual(tView.firstCreatePass, true, errMessage || 'Should only be called in first create pass.');
}
function assertFirstUpdatePass(tView, errMessage) {
  assertEqual(tView.firstUpdatePass, true, 'Should only be called in first update pass.');
}
/**
 * This is a basic sanity check that an object is probably a directive def. DirectiveDef is
 * an interface, so we can't do a direct instanceof check.
 */
function assertDirectiveDef(obj) {
  if (obj.type === undefined || obj.selectors == undefined || obj.inputs === undefined) {
    throwError(`Expected a DirectiveDef/ComponentDef and this object does not seem to have the expected shape.`);
  }
}
function assertIndexInDeclRange(tView, index) {
  assertBetween(HEADER_OFFSET, tView.bindingStartIndex, index);
}
function assertIndexInExpandoRange(lView, index) {
  const tView = lView[1];
  assertBetween(tView.expandoStartIndex, lView.length, index);
}
function assertBetween(lower, upper, index) {
  if (!(lower <= index && index < upper)) {
    throwError(`Index out of range (expecting ${lower} <= ${index} < ${upper})`);
  }
}
function assertProjectionSlots(lView, errMessage) {
  assertDefined(lView[DECLARATION_COMPONENT_VIEW], 'Component views should exist.');
  assertDefined(lView[DECLARATION_COMPONENT_VIEW][T_HOST].projection, 'Components with projection nodes (<ng-content>) must have projection slots defined.');
}
function assertParentView(lView, errMessage) {
  assertDefined(lView, "Component views should always have a parent view (component's host view)");
}
/**
 * This is a basic sanity check that the `injectorIndex` seems to point to what looks like a
 * NodeInjector data structure.
 *
 * @param lView `LView` which should be checked.
 * @param injectorIndex index into the `LView` where the `NodeInjector` is expected.
 */
function assertNodeInjector(lView, injectorIndex) {
  assertIndexInExpandoRange(lView, injectorIndex);
  assertIndexInExpandoRange(lView, injectorIndex + 8 /* NodeInjectorOffset.PARENT */);
  assertNumber(lView[injectorIndex + 0], 'injectorIndex should point to a bloom filter');
  assertNumber(lView[injectorIndex + 1], 'injectorIndex should point to a bloom filter');
  assertNumber(lView[injectorIndex + 2], 'injectorIndex should point to a bloom filter');
  assertNumber(lView[injectorIndex + 3], 'injectorIndex should point to a bloom filter');
  assertNumber(lView[injectorIndex + 4], 'injectorIndex should point to a bloom filter');
  assertNumber(lView[injectorIndex + 5], 'injectorIndex should point to a bloom filter');
  assertNumber(lView[injectorIndex + 6], 'injectorIndex should point to a bloom filter');
  assertNumber(lView[injectorIndex + 7], 'injectorIndex should point to a bloom filter');
  assertNumber(lView[injectorIndex + 8 /* NodeInjectorOffset.PARENT */], 'injectorIndex should point to parent injector');
}
const SVG_NAMESPACE = 'svg';
const MATH_ML_NAMESPACE = 'math';

/**
 * For efficiency reasons we often put several different data types (`RNode`, `LView`, `LContainer`)
 * in same location in `LView`. This is because we don't want to pre-allocate space for it
 * because the storage is sparse. This file contains utilities for dealing with such data types.
 *
 * How do we know what is stored at a given location in `LView`.
 * - `Array.isArray(value) === false` => `RNode` (The normal storage value)
 * - `Array.isArray(value) === true` => then the `value[0]` represents the wrapped value.
 *   - `typeof value[TYPE] === 'object'` => `LView`
 *      - This happens when we have a component at a given location
 *   - `typeof value[TYPE] === true` => `LContainer`
 *      - This happens when we have `LContainer` binding at a given location.
 *
 *
 * NOTE: it is assumed that `Array.isArray` and `typeof` operations are very efficient.
 */
/**
 * Returns `RNode`.
 * @param value wrapped value of `RNode`, `LView`, `LContainer`
 */
function unwrapRNode(value) {
  while (Array.isArray(value)) {
    value = value[HOST];
  }
  return value;
}
/**
 * Returns `LView` or `null` if not found.
 * @param value wrapped value of `RNode`, `LView`, `LContainer`
 */
function unwrapLView(value) {
  while (Array.isArray(value)) {
    // This check is same as `isLView()` but we don't call at as we don't want to call
    // `Array.isArray()` twice and give JITer more work for inlining.
    if (typeof value[TYPE] === 'object') return value;
    value = value[HOST];
  }
  return null;
}
/**
 * Retrieves an element value from the provided `viewData`, by unwrapping
 * from any containers, component views, or style contexts.
 */
function getNativeByIndex(index, lView) {
  ngDevMode && assertIndexInRange(lView, index);
  ngDevMode && assertGreaterThanOrEqual(index, HEADER_OFFSET, 'Expected to be past HEADER_OFFSET');
  return unwrapRNode(lView[index]);
}
/**
 * Retrieve an `RNode` for a given `TNode` and `LView`.
 *
 * This function guarantees in dev mode to retrieve a non-null `RNode`.
 *
 * @param tNode
 * @param lView
 */
function getNativeByTNode(tNode, lView) {
  ngDevMode && assertTNodeForLView(tNode, lView);
  ngDevMode && assertIndexInRange(lView, tNode.index);
  const node = unwrapRNode(lView[tNode.index]);
  return node;
}
/**
 * Retrieve an `RNode` or `null` for a given `TNode` and `LView`.
 *
 * Some `TNode`s don't have associated `RNode`s. For example `Projection`
 *
 * @param tNode
 * @param lView
 */
function getNativeByTNodeOrNull(tNode, lView) {
  const index = tNode === null ? -1 : tNode.index;
  if (index !== -1) {
    ngDevMode && assertTNodeForLView(tNode, lView);
    const node = unwrapRNode(lView[index]);
    return node;
  }
  return null;
}
// fixme(misko): The return Type should be `TNode|null`
function getTNode(tView, index) {
  ngDevMode && assertGreaterThan(index, -1, 'wrong index for TNode');
  ngDevMode && assertLessThan(index, tView.data.length, 'wrong index for TNode');
  const tNode = tView.data[index];
  ngDevMode && tNode !== null && assertTNode(tNode);
  return tNode;
}
/** Retrieves a value from any `LView` or `TData`. */
function load(view, index) {
  ngDevMode && assertIndexInRange(view, index);
  return view[index];
}
/** Store a value in the `data` at a given `index`. */
function store(tView, lView, index, value) {
  // We don't store any static data for local variables, so the first time
  // we see the template, we should store as null to avoid a sparse array
  if (index >= tView.data.length) {
    tView.data[index] = null;
    tView.blueprint[index] = null;
  }
  lView[index] = value;
}
function getComponentLViewByIndex(nodeIndex, hostView) {
  // Could be an LView or an LContainer. If LContainer, unwrap to find LView.
  ngDevMode && assertIndexInRange(hostView, nodeIndex);
  const slotValue = hostView[nodeIndex];
  const lView = isLView(slotValue) ? slotValue : slotValue[HOST];
  return lView;
}
/** Checks whether a given view is in creation mode */
function isCreationMode(view) {
  return (view[FLAGS] & 4 /* LViewFlags.CreationMode */) === 4 /* LViewFlags.CreationMode */;
}
/**
 * Returns a boolean for whether the view is attached to the change detection tree.
 *
 * Note: This determines whether a view should be checked, not whether it's inserted
 * into a container. For that, you'll want `viewAttachedToContainer` below.
 */
function viewAttachedToChangeDetector(view) {
  return (view[FLAGS] & 128 /* LViewFlags.Attached */) === 128 /* LViewFlags.Attached */;
}
/** Returns a boolean for whether the view is attached to a container. */
function viewAttachedToContainer(view) {
  return isLContainer(view[PARENT]);
}
function getConstant(consts, index) {
  if (index === null || index === undefined) return null;
  ngDevMode && assertIndexInRange(consts, index);
  return consts[index];
}
/**
 * Resets the pre-order hook flags of the view.
 * @param lView the LView on which the flags are reset
 */
function resetPreOrderHookFlags(lView) {
  lView[PREORDER_HOOK_FLAGS] = 0;
}
/**
 * Adds the `RefreshView` flag from the lView and updates HAS_CHILD_VIEWS_TO_REFRESH flag of
 * parents.
 */
function markViewForRefresh(lView) {
  if (lView[FLAGS] & 1024 /* LViewFlags.RefreshView */) {
    return;
  }
  lView[FLAGS] |= 1024 /* LViewFlags.RefreshView */;
  if (viewAttachedToChangeDetector(lView)) {
    markAncestorsForTraversal(lView);
  }
}
/**
 * Walks up the LView hierarchy.
 * @param nestingLevel Number of times to walk up in hierarchy.
 * @param currentView View from which to start the lookup.
 */
function walkUpViews(nestingLevel, currentView) {
  while (nestingLevel > 0) {
    ngDevMode && assertDefined(currentView[DECLARATION_VIEW], 'Declaration view should be defined if nesting level is greater than 0.');
    currentView = currentView[DECLARATION_VIEW];
    nestingLevel--;
  }
  return currentView;
}
function requiresRefreshOrTraversal(lView) {
  return !!(lView[FLAGS] & (1024 /* LViewFlags.RefreshView */ | 8192 /* LViewFlags.HasChildViewsToRefresh */) || lView[REACTIVE_TEMPLATE_CONSUMER]?.dirty);
}
/**
 * Updates the `HasChildViewsToRefresh` flag on the parents of the `LView` as well as the
 * parents above.
 */
function updateAncestorTraversalFlagsOnAttach(lView) {
  lView[ENVIRONMENT].changeDetectionScheduler?.notify(8 /* NotificationSource.ViewAttached */);
  if (lView[FLAGS] & 64 /* LViewFlags.Dirty */) {
    lView[FLAGS] |= 1024 /* LViewFlags.RefreshView */;
  }
  if (requiresRefreshOrTraversal(lView)) {
    markAncestorsForTraversal(lView);
  }
}
/**
 * Ensures views above the given `lView` are traversed during change detection even when they are
 * not dirty.
 *
 * This is done by setting the `HAS_CHILD_VIEWS_TO_REFRESH` flag up to the root, stopping when the
 * flag is already `true` or the `lView` is detached.
 */
function markAncestorsForTraversal(lView) {
  lView[ENVIRONMENT].changeDetectionScheduler?.notify(0 /* NotificationSource.MarkAncestorsForTraversal */);
  let parent = getLViewParent(lView);
  while (parent !== null) {
    // We stop adding markers to the ancestors once we reach one that already has the marker. This
    // is to avoid needlessly traversing all the way to the root when the marker already exists.
    if (parent[FLAGS] & 8192 /* LViewFlags.HasChildViewsToRefresh */) {
      break;
    }
    parent[FLAGS] |= 8192 /* LViewFlags.HasChildViewsToRefresh */;
    if (!viewAttachedToChangeDetector(parent)) {
      break;
    }
    parent = getLViewParent(parent);
  }
}
/**
 * Stores a LView-specific destroy callback.
 */
function storeLViewOnDestroy(lView, onDestroyCallback) {
  if (isDestroyed(lView)) {
    throw new RuntimeError(911 /* RuntimeErrorCode.VIEW_ALREADY_DESTROYED */, ngDevMode && 'View has already been destroyed.');
  }
  if (lView[ON_DESTROY_HOOKS] === null) {
    lView[ON_DESTROY_HOOKS] = [];
  }
  lView[ON_DESTROY_HOOKS].push(onDestroyCallback);
}
/**
 * Removes previously registered LView-specific destroy callback.
 */
function removeLViewOnDestroy(lView, onDestroyCallback) {
  if (lView[ON_DESTROY_HOOKS] === null) return;
  const destroyCBIdx = lView[ON_DESTROY_HOOKS].indexOf(onDestroyCallback);
  if (destroyCBIdx !== -1) {
    lView[ON_DESTROY_HOOKS].splice(destroyCBIdx, 1);
  }
}
/**
 * Gets the parent LView of the passed LView, if the PARENT is an LContainer, will get the parent of
 * that LContainer, which is an LView
 * @param lView the lView whose parent to get
 */
function getLViewParent(lView) {
  ngDevMode && assertLView(lView);
  const parent = lView[PARENT];
  return isLContainer(parent) ? parent[PARENT] : parent;
}
function getOrCreateLViewCleanup(view) {
  // top level variables should not be exported for performance reasons (PERF_NOTES.md)
  return view[CLEANUP] ??= [];
}
function getOrCreateTViewCleanup(tView) {
  return tView.cleanup ??= [];
}
/**
 * Saves context for this cleanup function in LView.cleanupInstances.
 *
 * On the first template pass, saves in TView:
 * - Cleanup function
 * - Index of context we just saved in LView.cleanupInstances
 */
function storeCleanupWithContext(tView, lView, context, cleanupFn) {
  const lCleanup = getOrCreateLViewCleanup(lView);
  // Historically the `storeCleanupWithContext` was used to register both framework-level and
  // user-defined cleanup callbacks, but over time those two types of cleanups were separated.
  // This dev mode checks assures that user-level cleanup callbacks are _not_ stored in data
  // structures reserved for framework-specific hooks.
  ngDevMode && assertDefined(context, 'Cleanup context is mandatory when registering framework-level destroy hooks');
  lCleanup.push(context);
  if (tView.firstCreatePass) {
    getOrCreateTViewCleanup(tView).push(cleanupFn, lCleanup.length - 1);
  } else {
    // Make sure that no new framework-level cleanup functions are registered after the first
    // template pass is done (and TView data structures are meant to fully constructed).
    if (ngDevMode) {
      Object.freeze(getOrCreateTViewCleanup(tView));
    }
  }
}
const instructionState = {
  lFrame: /*#__PURE__*/createLFrame(null),
  bindingsEnabled: true,
  skipHydrationRootTNode: null
};
var CheckNoChangesMode = /*#__PURE__*/function (CheckNoChangesMode) {
  CheckNoChangesMode[CheckNoChangesMode["Off"] = 0] = "Off";
  CheckNoChangesMode[CheckNoChangesMode["Exhaustive"] = 1] = "Exhaustive";
  CheckNoChangesMode[CheckNoChangesMode["OnlyDirtyViews"] = 2] = "OnlyDirtyViews";
  return CheckNoChangesMode;
}(CheckNoChangesMode || {});
/**
 * In this mode, any changes in bindings will throw an ExpressionChangedAfterChecked error.
 *
 * Necessary to support ChangeDetectorRef.checkNoChanges().
 *
 * The `checkNoChanges` function is invoked only in ngDevMode=true and verifies that no unintended
 * changes exist in the change detector or its children.
 */
let _checkNoChangesMode = 0; /* CheckNoChangesMode.Off */
/**
 * Flag used to indicate that we are in the middle running change detection on a view
 *
 * @see detectChangesInViewWhileDirty
 */
let _isRefreshingViews = false;
function getElementDepthCount() {
  return instructionState.lFrame.elementDepthCount;
}
function increaseElementDepthCount() {
  instructionState.lFrame.elementDepthCount++;
}
function decreaseElementDepthCount() {
  instructionState.lFrame.elementDepthCount--;
}
function getBindingsEnabled() {
  return instructionState.bindingsEnabled;
}
/**
 * Returns true if currently inside a skip hydration block.
 * @returns boolean
 */
function isInSkipHydrationBlock() {
  return instructionState.skipHydrationRootTNode !== null;
}
/**
 * Returns true if this is the root TNode of the skip hydration block.
 * @param tNode the current TNode
 * @returns boolean
 */
function isSkipHydrationRootTNode(tNode) {
  return instructionState.skipHydrationRootTNode === tNode;
}
/**
 * Enables directive matching on elements.
 *
 *  * Example:
 * ```html
 * <my-comp my-directive>
 *   Should match component / directive.
 * </my-comp>
 * <div ngNonBindable>
 *   <!-- ɵɵdisableBindings() -->
 *   <my-comp my-directive>
 *     Should not match component / directive because we are in ngNonBindable.
 *   </my-comp>
 *   <!-- ɵɵenableBindings() -->
 * </div>
 * ```
 *
 * @codeGenApi
 */
function ɵɵenableBindings() {
  instructionState.bindingsEnabled = true;
}
/**
 * Sets a flag to specify that the TNode is in a skip hydration block.
 * @param tNode the current TNode
 */
function enterSkipHydrationBlock(tNode) {
  instructionState.skipHydrationRootTNode = tNode;
}
/**
 * Disables directive matching on element.
 *
 *  * Example:
 * ```html
 * <my-comp my-directive>
 *   Should match component / directive.
 * </my-comp>
 * <div ngNonBindable>
 *   <!-- ɵɵdisableBindings() -->
 *   <my-comp my-directive>
 *     Should not match component / directive because we are in ngNonBindable.
 *   </my-comp>
 *   <!-- ɵɵenableBindings() -->
 * </div>
 * ```
 *
 * @codeGenApi
 */
function ɵɵdisableBindings() {
  instructionState.bindingsEnabled = false;
}
/**
 * Clears the root skip hydration node when leaving a skip hydration block.
 */
function leaveSkipHydrationBlock() {
  instructionState.skipHydrationRootTNode = null;
}
/**
 * Return the current `LView`.
 */
function getLView() {
  return instructionState.lFrame.lView;
}
/**
 * Return the current `TView`.
 */
function getTView() {
  return instructionState.lFrame.tView;
}
/**
 * Restores `contextViewData` to the given OpaqueViewState instance.
 *
 * Used in conjunction with the getCurrentView() instruction to save a snapshot
 * of the current view and restore it when listeners are invoked. This allows
 * walking the declaration view tree in listeners to get vars from parent views.
 *
 * @param viewToRestore The OpaqueViewState instance to restore.
 * @returns Context of the restored OpaqueViewState instance.
 *
 * @codeGenApi
 */
function ɵɵrestoreView(viewToRestore) {
  instructionState.lFrame.contextLView = viewToRestore;
  return viewToRestore[CONTEXT];
}
/**
 * Clears the view set in `ɵɵrestoreView` from memory. Returns the passed in
 * value so that it can be used as a return value of an instruction.
 *
 * @codeGenApi
 */
function ɵɵresetView(value) {
  instructionState.lFrame.contextLView = null;
  return value;
}
function getCurrentTNode() {
  let currentTNode = getCurrentTNodePlaceholderOk();
  while (currentTNode !== null && currentTNode.type === 64 /* TNodeType.Placeholder */) {
    currentTNode = currentTNode.parent;
  }
  return currentTNode;
}
function getCurrentTNodePlaceholderOk() {
  return instructionState.lFrame.currentTNode;
}
function getCurrentParentTNode() {
  const lFrame = instructionState.lFrame;
  const currentTNode = lFrame.currentTNode;
  return lFrame.isParent ? currentTNode : currentTNode.parent;
}
function setCurrentTNode(tNode, isParent) {
  ngDevMode && tNode && assertTNodeForTView(tNode, instructionState.lFrame.tView);
  const lFrame = instructionState.lFrame;
  lFrame.currentTNode = tNode;
  lFrame.isParent = isParent;
}
function isCurrentTNodeParent() {
  return instructionState.lFrame.isParent;
}
function setCurrentTNodeAsNotParent() {
  instructionState.lFrame.isParent = false;
}
function getContextLView() {
  const contextLView = instructionState.lFrame.contextLView;
  ngDevMode && assertDefined(contextLView, 'contextLView must be defined.');
  return contextLView;
}
function isInCheckNoChangesMode() {
  !ngDevMode && throwError('Must never be called in production mode');
  return _checkNoChangesMode !== CheckNoChangesMode.Off;
}
function isExhaustiveCheckNoChanges() {
  !ngDevMode && throwError('Must never be called in production mode');
  return _checkNoChangesMode === CheckNoChangesMode.Exhaustive;
}
function setIsInCheckNoChangesMode(mode) {
  !ngDevMode && throwError('Must never be called in production mode');
  _checkNoChangesMode = mode;
}
function isRefreshingViews() {
  return _isRefreshingViews;
}
function setIsRefreshingViews(mode) {
  const prev = _isRefreshingViews;
  _isRefreshingViews = mode;
  return prev;
}
// top level variables should not be exported for performance reasons (PERF_NOTES.md)
function getBindingRoot() {
  const lFrame = instructionState.lFrame;
  let index = lFrame.bindingRootIndex;
  if (index === -1) {
    index = lFrame.bindingRootIndex = lFrame.tView.bindingStartIndex;
  }
  return index;
}
function getBindingIndex() {
  return instructionState.lFrame.bindingIndex;
}
function setBindingIndex(value) {
  return instructionState.lFrame.bindingIndex = value;
}
function nextBindingIndex() {
  return instructionState.lFrame.bindingIndex++;
}
function incrementBindingIndex(count) {
  const lFrame = instructionState.lFrame;
  const index = lFrame.bindingIndex;
  lFrame.bindingIndex = lFrame.bindingIndex + count;
  return index;
}
function isInI18nBlock() {
  return instructionState.lFrame.inI18n;
}
function setInI18nBlock(isInI18nBlock) {
  instructionState.lFrame.inI18n = isInI18nBlock;
}
/**
 * Set a new binding root index so that host template functions can execute.
 *
 * Bindings inside the host template are 0 index. But because we don't know ahead of time
 * how many host bindings we have we can't pre-compute them. For this reason they are all
 * 0 index and we just shift the root so that they match next available location in the LView.
 *
 * @param bindingRootIndex Root index for `hostBindings`
 * @param currentDirectiveIndex `TData[currentDirectiveIndex]` will point to the current directive
 *        whose `hostBindings` are being processed.
 */
function setBindingRootForHostBindings(bindingRootIndex, currentDirectiveIndex) {
  const lFrame = instructionState.lFrame;
  lFrame.bindingIndex = lFrame.bindingRootIndex = bindingRootIndex;
  setCurrentDirectiveIndex(currentDirectiveIndex);
}
/**
 * When host binding is executing this points to the directive index.
 * `TView.data[getCurrentDirectiveIndex()]` is `DirectiveDef`
 * `LView[getCurrentDirectiveIndex()]` is directive instance.
 */
function getCurrentDirectiveIndex() {
  return instructionState.lFrame.currentDirectiveIndex;
}
/**
 * Sets an index of a directive whose `hostBindings` are being processed.
 *
 * @param currentDirectiveIndex `TData` index where current directive instance can be found.
 */
function setCurrentDirectiveIndex(currentDirectiveIndex) {
  instructionState.lFrame.currentDirectiveIndex = currentDirectiveIndex;
}
/**
 * Retrieve the current `DirectiveDef` which is active when `hostBindings` instruction is being
 * executed.
 *
 * @param tData Current `TData` where the `DirectiveDef` will be looked up at.
 */
function getCurrentDirectiveDef(tData) {
  const currentDirectiveIndex = instructionState.lFrame.currentDirectiveIndex;
  return currentDirectiveIndex === -1 ? null : tData[currentDirectiveIndex];
}
function getCurrentQueryIndex() {
  return instructionState.lFrame.currentQueryIndex;
}
function setCurrentQueryIndex(value) {
  instructionState.lFrame.currentQueryIndex = value;
}
/**
 * Returns a `TNode` of the location where the current `LView` is declared at.
 *
 * @param lView an `LView` that we want to find parent `TNode` for.
 */
function getDeclarationTNode(lView) {
  const tView = lView[TVIEW];
  // Return the declaration parent for embedded views
  if (tView.type === 2 /* TViewType.Embedded */) {
    ngDevMode && assertDefined(tView.declTNode, 'Embedded TNodes should have declaration parents.');
    return tView.declTNode;
  }
  // Components don't have `TView.declTNode` because each instance of component could be
  // inserted in different location, hence `TView.declTNode` is meaningless.
  // Falling back to `T_HOST` in case we cross component boundary.
  if (tView.type === 1 /* TViewType.Component */) {
    return lView[T_HOST];
  }
  // Remaining TNode type is `TViewType.Root` which doesn't have a parent TNode.
  return null;
}
/**
 * This is a light weight version of the `enterView` which is needed by the DI system.
 *
 * @param lView `LView` location of the DI context.
 * @param tNode `TNode` for DI context
 * @param flags DI context flags. if `SkipSelf` flag is set than we walk up the declaration
 *     tree from `tNode`  until we find parent declared `TElementNode`.
 * @returns `true` if we have successfully entered DI associated with `tNode` (or with declared
 *     `TNode` if `flags` has  `SkipSelf`). Failing to enter DI implies that no associated
 *     `NodeInjector` can be found and we should instead use `ModuleInjector`.
 *     - If `true` than this call must be fallowed by `leaveDI`
 *     - If `false` than this call failed and we should NOT call `leaveDI`
 */
function enterDI(lView, tNode, flags) {
  ngDevMode && assertLViewOrUndefined(lView);
  if (flags & 4 /* InternalInjectFlags.SkipSelf */) {
    ngDevMode && assertTNodeForTView(tNode, lView[TVIEW]);
    let parentTNode = tNode;
    let parentLView = lView;
    while (true) {
      ngDevMode && assertDefined(parentTNode, 'Parent TNode should be defined');
      parentTNode = parentTNode.parent;
      if (parentTNode === null && !(flags & 1 /* InternalInjectFlags.Host */)) {
        parentTNode = getDeclarationTNode(parentLView);
        if (parentTNode === null) break;
        // In this case, a parent exists and is definitely an element. So it will definitely
        // have an existing lView as the declaration view, which is why we can assume it's defined.
        ngDevMode && assertDefined(parentLView, 'Parent LView should be defined');
        parentLView = parentLView[DECLARATION_VIEW];
        // In Ivy there are Comment nodes that correspond to ngIf and NgFor embedded directives
        // We want to skip those and look only at Elements and ElementContainers to ensure
        // we're looking at true parent nodes, and not content or other types.
        if (parentTNode.type & (2 /* TNodeType.Element */ | 8 /* TNodeType.ElementContainer */)) {
          break;
        }
      } else {
        break;
      }
    }
    if (parentTNode === null) {
      // If we failed to find a parent TNode this means that we should use module injector.
      return false;
    } else {
      tNode = parentTNode;
      lView = parentLView;
    }
  }
  ngDevMode && assertTNodeForLView(tNode, lView);
  const lFrame = instructionState.lFrame = allocLFrame();
  lFrame.currentTNode = tNode;
  lFrame.lView = lView;
  return true;
}
/**
 * Swap the current lView with a new lView.
 *
 * For performance reasons we store the lView in the top level of the module.
 * This way we minimize the number of properties to read. Whenever a new view
 * is entered we have to store the lView for later, and when the view is
 * exited the state has to be restored
 *
 * @param newView New lView to become active
 * @returns the previously active lView;
 */
function enterView(newView) {
  ngDevMode && assertNotEqual(newView[0], newView[1], '????');
  ngDevMode && assertLViewOrUndefined(newView);
  const newLFrame = allocLFrame();
  if (ngDevMode) {
    assertEqual(newLFrame.isParent, true, 'Expected clean LFrame');
    assertEqual(newLFrame.lView, null, 'Expected clean LFrame');
    assertEqual(newLFrame.tView, null, 'Expected clean LFrame');
    assertEqual(newLFrame.selectedIndex, -1, 'Expected clean LFrame');
    assertEqual(newLFrame.elementDepthCount, 0, 'Expected clean LFrame');
    assertEqual(newLFrame.currentDirectiveIndex, -1, 'Expected clean LFrame');
    assertEqual(newLFrame.currentNamespace, null, 'Expected clean LFrame');
    assertEqual(newLFrame.bindingRootIndex, -1, 'Expected clean LFrame');
    assertEqual(newLFrame.currentQueryIndex, 0, 'Expected clean LFrame');
  }
  const tView = newView[TVIEW];
  instructionState.lFrame = newLFrame;
  ngDevMode && tView.firstChild && assertTNodeForTView(tView.firstChild, tView);
  newLFrame.currentTNode = tView.firstChild;
  newLFrame.lView = newView;
  newLFrame.tView = tView;
  newLFrame.contextLView = newView;
  newLFrame.bindingIndex = tView.bindingStartIndex;
  newLFrame.inI18n = false;
}
/**
 * Allocates next free LFrame. This function tries to reuse the `LFrame`s to lower memory pressure.
 */
function allocLFrame() {
  const currentLFrame = instructionState.lFrame;
  const childLFrame = currentLFrame === null ? null : currentLFrame.child;
  const newLFrame = childLFrame === null ? createLFrame(currentLFrame) : childLFrame;
  return newLFrame;
}
function createLFrame(parent) {
  const lFrame = {
    currentTNode: null,
    isParent: true,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: parent,
    child: null,
    inI18n: false
  };
  parent !== null && (parent.child = lFrame); // link the new LFrame for reuse.
  return lFrame;
}
/**
 * A lightweight version of leave which is used with DI.
 *
 * This function only resets `currentTNode` and `LView` as those are the only properties
 * used with DI (`enterDI()`).
 *
 * NOTE: This function is reexported as `leaveDI`. However `leaveDI` has return type of `void` where
 * as `leaveViewLight` has `LFrame`. This is so that `leaveViewLight` can be used in `leaveView`.
 */
function leaveViewLight() {
  const oldLFrame = instructionState.lFrame;
  instructionState.lFrame = oldLFrame.parent;
  oldLFrame.currentTNode = null;
  oldLFrame.lView = null;
  return oldLFrame;
}
/**
 * This is a lightweight version of the `leaveView` which is needed by the DI system.
 *
 * NOTE: this function is an alias so that we can change the type of the function to have `void`
 * return type.
 */
const leaveDI = leaveViewLight;
/**
 * Leave the current `LView`
 *
 * This pops the `LFrame` with the associated `LView` from the stack.
 *
 * IMPORTANT: We must zero out the `LFrame` values here otherwise they will be retained. This is
 * because for performance reasons we don't release `LFrame` but rather keep it for next use.
 */
function leaveView() {
  const oldLFrame = leaveViewLight();
  oldLFrame.isParent = true;
  oldLFrame.tView = null;
  oldLFrame.selectedIndex = -1;
  oldLFrame.contextLView = null;
  oldLFrame.elementDepthCount = 0;
  oldLFrame.currentDirectiveIndex = -1;
  oldLFrame.currentNamespace = null;
  oldLFrame.bindingRootIndex = -1;
  oldLFrame.bindingIndex = -1;
  oldLFrame.currentQueryIndex = 0;
}
function nextContextImpl(level) {
  const contextLView = instructionState.lFrame.contextLView = walkUpViews(level, instructionState.lFrame.contextLView);
  return contextLView[CONTEXT];
}
/**
 * Gets the currently selected element index.
 *
 * Used with {@link property} instruction (and more in the future) to identify the index in the
 * current `LView` to act on.
 */
function getSelectedIndex() {
  return instructionState.lFrame.selectedIndex;
}
/**
 * Sets the most recent index passed to {@link select}
 *
 * Used with {@link property} instruction (and more in the future) to identify the index in the
 * current `LView` to act on.
 *
 * (Note that if an "exit function" was set earlier (via `setElementExitFn()`) then that will be
 * run if and when the provided `index` value is different from the current selected index value.)
 */
function setSelectedIndex(index) {
  ngDevMode && index !== -1 && assertGreaterThanOrEqual(index, HEADER_OFFSET, 'Index must be past HEADER_OFFSET (or -1).');
  ngDevMode && assertLessThan(index, instructionState.lFrame.lView.length, "Can't set index passed end of LView");
  instructionState.lFrame.selectedIndex = index;
}
/**
 * Gets the `tNode` that represents currently selected element.
 */
function getSelectedTNode() {
  const lFrame = instructionState.lFrame;
  return getTNode(lFrame.tView, lFrame.selectedIndex);
}
/**
 * Sets the namespace used to create elements to `'http://www.w3.org/2000/svg'` in global state.
 *
 * @codeGenApi
 */
function ɵɵnamespaceSVG() {
  instructionState.lFrame.currentNamespace = SVG_NAMESPACE;
}
/**
 * Sets the namespace used to create elements to `'http://www.w3.org/1998/MathML/'` in global state.
 *
 * @codeGenApi
 */
function ɵɵnamespaceMathML() {
  instructionState.lFrame.currentNamespace = MATH_ML_NAMESPACE;
}
/**
 * Sets the namespace used to create elements to `null`, which forces element creation to use
 * `createElement` rather than `createElementNS`.
 *
 * @codeGenApi
 */
function ɵɵnamespaceHTML() {
  namespaceHTMLInternal();
}
/**
 * Sets the namespace used to create elements to `null`, which forces element creation to use
 * `createElement` rather than `createElementNS`.
 */
function namespaceHTMLInternal() {
  instructionState.lFrame.currentNamespace = null;
}
function getNamespace() {
  return instructionState.lFrame.currentNamespace;
}
let _wasLastNodeCreated = true;
/**
 * Retrieves a global flag that indicates whether the most recent DOM node
 * was created or hydrated.
 */
function wasLastNodeCreated() {
  return _wasLastNodeCreated;
}
/**
 * Sets a global flag to indicate whether the most recent DOM node
 * was created or hydrated.
 */
function lastNodeWasCreated(flag) {
  _wasLastNodeCreated = flag;
}

/**
 * Create a new `Injector` which is configured using a `defType` of `InjectorType<any>`s.
 */
function createInjector(defType, parent = null, additionalProviders = null, name) {
  const injector = createInjectorWithoutInjectorInstances(defType, parent, additionalProviders, name);
  injector.resolveInjectorInitializers();
  return injector;
}
/**
 * Creates a new injector without eagerly resolving its injector types. Can be used in places
 * where resolving the injector types immediately can lead to an infinite loop. The injector types
 * should be resolved at a later point by calling `_resolveInjectorDefTypes`.
 */
function createInjectorWithoutInjectorInstances(defType, parent = null, additionalProviders = null, name, scopes = new Set()) {
  const providers = [additionalProviders || EMPTY_ARRAY, importProvidersFrom(defType)];
  name = name || (typeof defType === 'object' ? undefined : stringify(defType));
  return new R3Injector(providers, parent || getNullInjector(), name || null, scopes);
}

/**
 * Concrete injectors implement this interface. Injectors are configured
 * with [providers](guide/di/dependency-injection-providers) that associate
 * dependencies of various types with [injection tokens](guide/di/dependency-injection-providers).
 *
 * @see [DI Providers](guide/di/dependency-injection-providers).
 * @see {@link StaticProvider}
 *
 * @usageNotes
 *
 *  The following example creates a service injector instance.
 *
 * {@example core/di/ts/provider_spec.ts region='ConstructorProvider'}
 *
 * ### Usage example
 *
 * {@example core/di/ts/injector_spec.ts region='Injector'}
 *
 * `Injector` returns itself when given `Injector` as a token:
 *
 * {@example core/di/ts/injector_spec.ts region='injectInjector'}
 *
 * @publicApi
 */
class Injector {
  static THROW_IF_NOT_FOUND = THROW_IF_NOT_FOUND;
  static NULL = /*#__PURE__*/new NullInjector();
  static create(options, parent) {
    if (Array.isArray(options)) {
      return createInjector({
        name: ''
      }, parent, options, '');
    } else {
      const name = options.name ?? '';
      return createInjector({
        name
      }, options.parent, options.providers, name);
    }
  }
  /** @nocollapse */
  static ɵprov = /** @pureOrBreakMyCode */ /* @__PURE__ */ɵɵdefineInjectable({
    token: Injector,
    providedIn: 'any',
    factory: () => ɵɵinject(INJECTOR$1)
  });
  /**
   * @internal
   * @nocollapse
   */
  static __NG_ELEMENT_ID__ = -1 /* InjectorMarkers.Injector */;
}

/**
 * A DI Token representing the main rendering context.
 * In a browser and SSR this is the DOM Document.
 * When using SSR, that document is created by [Domino](https://github.com/angular/domino).
 *
 * @publicApi
 */
const DOCUMENT = /*#__PURE__*/new InjectionToken(ngDevMode ? 'DocumentToken' : '');

/**
 * `DestroyRef` lets you set callbacks to run for any cleanup or destruction behavior.
 * The scope of this destruction depends on where `DestroyRef` is injected. If `DestroyRef`
 * is injected in a component or directive, the callbacks run when that component or
 * directive is destroyed. Otherwise the callbacks run when a corresponding injector is destroyed.
 *
 * @publicApi
 */
let DestroyRef = /*#__PURE__*/(() => {
  class DestroyRef {
    /**
     * @internal
     * @nocollapse
     */
    static __NG_ELEMENT_ID__ = injectDestroyRef;
    /**
     * @internal
     * @nocollapse
     */
    static __NG_ENV_ID__ = injector => injector;
  }
  return DestroyRef;
})();
class NodeInjectorDestroyRef extends DestroyRef {
  _lView;
  constructor(_lView) {
    super();
    this._lView = _lView;
  }
  get destroyed() {
    return isDestroyed(this._lView);
  }
  onDestroy(callback) {
    const lView = this._lView;
    storeLViewOnDestroy(lView, callback);
    return () => removeLViewOnDestroy(lView, callback);
  }
}
function injectDestroyRef() {
  return new NodeInjectorDestroyRef(getLView());
}

/**
 * Provides a hook for centralized exception handling.
 *
 * The default implementation of `ErrorHandler` prints error messages to the `console`. To
 * intercept error handling, write a custom exception handler that replaces this default as
 * appropriate for your app.
 *
 * @usageNotes
 * ### Example
 *
 * ```ts
 * class MyErrorHandler implements ErrorHandler {
 *   handleError(error) {
 *     // do something with the exception
 *   }
 * }
 *
 * // Provide in standalone apps
 * bootstrapApplication(AppComponent, {
 *   providers: [{provide: ErrorHandler, useClass: MyErrorHandler}]
 * })
 *
 * // Provide in module-based apps
 * @NgModule({
 *   providers: [{provide: ErrorHandler, useClass: MyErrorHandler}]
 * })
 * class MyModule {}
 * ```
 *
 * @publicApi
 */
class ErrorHandler {
  /**
   * @internal
   */
  _console = console;
  handleError(error) {
    this._console.error('ERROR', error);
  }
}
/**
 * `InjectionToken` used to configure how to call the `ErrorHandler`.
 */
const INTERNAL_APPLICATION_ERROR_HANDLER = /*#__PURE__*/new InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'internal error handler' : '', {
  providedIn: 'root',
  factory: () => {
    // The user's error handler may depend on things that create a circular dependency
    // so we inject it lazily.
    const injector = inject(EnvironmentInjector);
    let userErrorHandler;
    return e => {
      if (injector.destroyed && !userErrorHandler) {
        setTimeout(() => {
          throw e;
        });
      } else {
        userErrorHandler ??= injector.get(ErrorHandler);
        userErrorHandler.handleError(e);
      }
    };
  }
});
const errorHandlerEnvironmentInitializer = {
  provide: ENVIRONMENT_INITIALIZER,
  useValue: () => void inject(ErrorHandler),
  multi: true
};
const globalErrorListeners = /*#__PURE__*/new InjectionToken(ngDevMode ? 'GlobalErrorListeners' : '', {
  providedIn: 'root',
  factory: () => {
    if (typeof ngServerMode !== 'undefined' && ngServerMode) {
      return;
    }
    const window = inject(DOCUMENT).defaultView;
    if (!window) {
      return;
    }
    const errorHandler = inject(INTERNAL_APPLICATION_ERROR_HANDLER);
    const rejectionListener = e => {
      errorHandler(e.reason);
      e.preventDefault();
    };
    const errorListener = e => {
      if (e.error) {
        errorHandler(e.error);
      } else {
        errorHandler(new Error(ngDevMode ? `An ErrorEvent with no error occurred. See Error.cause for details: ${e.message}` : e.message, {
          cause: e
        }));
      }
      e.preventDefault();
    };
    const setupEventListeners = () => {
      window.addEventListener('unhandledrejection', rejectionListener);
      window.addEventListener('error', errorListener);
    };
    // Angular doesn't have to run change detection whenever any asynchronous tasks are invoked in
    // the scope of this functionality.
    if (typeof Zone !== 'undefined') {
      Zone.root.run(setupEventListeners);
    } else {
      setupEventListeners();
    }
    inject(DestroyRef).onDestroy(() => {
      window.removeEventListener('error', errorListener);
      window.removeEventListener('unhandledrejection', rejectionListener);
    });
  }
});
/**
 * Provides an environment initializer which forwards unhandled errors to the ErrorHandler.
 *
 * The listeners added are for the window's 'unhandledrejection' and 'error' events.
 *
 * @publicApi
 */
function provideBrowserGlobalErrorListeners() {
  return makeEnvironmentProviders([provideEnvironmentInitializer(() => void inject(globalErrorListeners))]);
}

/**
 * Checks if the given `value` is a reactive `Signal`.
 *
 * @publicApi 17.0
 */
function isSignal(value) {
  return typeof value === 'function' && value[_signal_mjs__WEBPACK_IMPORTED_MODULE_3__.SIGNAL] !== undefined;
}

/**
 * Utility function used during template type checking to extract the value from a `WritableSignal`.
 * @codeGenApi
 */
function ɵunwrapWritableSignal(value) {
  // Note: the function uses `WRITABLE_SIGNAL` as a brand instead of `WritableSignal<T>`,
  // because the latter incorrectly unwraps non-signal getter functions.
  return null;
}
/**
 * Create a `Signal` that can be set or updated directly.
 */
function signal(initialValue, options) {
  const [get, set, update] = (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_3__.createSignal)(initialValue, options?.equal);
  const signalFn = get;
  const node = signalFn[_signal_mjs__WEBPACK_IMPORTED_MODULE_3__.SIGNAL];
  signalFn.set = set;
  signalFn.update = update;
  signalFn.asReadonly = signalAsReadonlyFn.bind(signalFn);
  if (ngDevMode) {
    signalFn.toString = () => `[Signal: ${signalFn()}]`;
    node.debugName = options?.debugName;
  }
  return signalFn;
}
function signalAsReadonlyFn() {
  const node = this[_signal_mjs__WEBPACK_IMPORTED_MODULE_3__.SIGNAL];
  if (node.readonlyFn === undefined) {
    const readonlyFn = () => this();
    readonlyFn[_signal_mjs__WEBPACK_IMPORTED_MODULE_3__.SIGNAL] = node;
    node.readonlyFn = readonlyFn;
  }
  return node.readonlyFn;
}
/**
 * Checks if the given `value` is a writeable signal.
 */
function isWritableSignal(value) {
  return isSignal(value) && typeof value.set === 'function';
}

/**
 * Injectable that is notified when an `LView` is made aware of changes to application state.
 */
class ChangeDetectionScheduler {}
/** Token used to indicate if zoneless was enabled via provideZonelessChangeDetection(). */
const ZONELESS_ENABLED = /*#__PURE__*/new InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'Zoneless enabled' : '', {
  providedIn: 'root',
  factory: () => false
});
/** Token used to indicate `provideZonelessChangeDetection` was used. */
const PROVIDED_ZONELESS = /*#__PURE__*/new InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'Zoneless provided' : '', {
  providedIn: 'root',
  factory: () => false
});
const ZONELESS_SCHEDULER_DISABLED = /*#__PURE__*/new InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'scheduler disabled' : '');
// TODO(atscott): Remove in v19. Scheduler should be done with runOutsideAngular.
const SCHEDULE_IN_ROOT_ZONE = /*#__PURE__*/new InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'run changes outside zone in root' : '');

/**
 * Asserts that the current stack frame is not within a reactive context. Useful
 * to disallow certain code from running inside a reactive context (see {@link /api/core/rxjs-interop/toSignal toSignal})
 *
 * @param debugFn a reference to the function making the assertion (used for the error message).
 *
 * @publicApi
 */
function assertNotInReactiveContext(debugFn, extraContext) {
  // Taking a `Function` instead of a string name here prevents the un-minified name of the function
  // from being retained in the bundle regardless of minification.
  if ((0,_signal_mjs__WEBPACK_IMPORTED_MODULE_3__.getActiveConsumer)() !== null) {
    throw new RuntimeError(-602 /* RuntimeErrorCode.ASSERTION_NOT_INSIDE_REACTIVE_CONTEXT */, ngDevMode && `${debugFn.name}() cannot be called from within a reactive context.${extraContext ? ` ${extraContext}` : ''}`);
  }
}
let ViewContext = /*#__PURE__*/(() => {
  class ViewContext {
    view;
    node;
    constructor(view, node) {
      this.view = view;
      this.node = node;
    }
    /**
     * @internal
     * @nocollapse
     */
    static __NG_ELEMENT_ID__ = injectViewContext;
  }
  return ViewContext;
})();
function injectViewContext() {
  return new ViewContext(getLView(), getCurrentTNode());
}

/**
 * Internal implementation of the pending tasks service.
 */
let PendingTasksInternal = /*#__PURE__*/(() => {
  class PendingTasksInternal {
    taskId = 0;
    pendingTasks = new Set();
    destroyed = false;
    pendingTask = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    get hasPendingTasks() {
      // Accessing the value of a closed `BehaviorSubject` throws an error.
      return this.destroyed ? false : this.pendingTask.value;
    }
    /**
     * In case the service is about to be destroyed, return a self-completing observable.
     * Otherwise, return the observable that emits the current state of pending tasks.
     */
    get hasPendingTasksObservable() {
      if (this.destroyed) {
        // Manually creating the observable pulls less symbols from RxJS than `of(false)`.
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
          subscriber.next(false);
          subscriber.complete();
        });
      }
      return this.pendingTask;
    }
    add() {
      // Emitting a value to a closed subject throws an error.
      if (!this.hasPendingTasks && !this.destroyed) {
        this.pendingTask.next(true);
      }
      const taskId = this.taskId++;
      this.pendingTasks.add(taskId);
      return taskId;
    }
    has(taskId) {
      return this.pendingTasks.has(taskId);
    }
    remove(taskId) {
      this.pendingTasks.delete(taskId);
      if (this.pendingTasks.size === 0 && this.hasPendingTasks) {
        this.pendingTask.next(false);
      }
    }
    ngOnDestroy() {
      this.pendingTasks.clear();
      if (this.hasPendingTasks) {
        this.pendingTask.next(false);
      }
      // We call `unsubscribe()` to release observers, as users may forget to
      // unsubscribe manually when subscribing to `isStable`. We do not call
      // `complete()` because it is unsafe; if someone subscribes using the `first`
      // operator and the observable completes before emitting a value,
      // RxJS will throw an error.
      this.destroyed = true;
      this.pendingTask.unsubscribe();
    }
    /** @nocollapse */
    static ɵprov = /** @pureOrBreakMyCode */ /* @__PURE__ */ɵɵdefineInjectable({
      token: PendingTasksInternal,
      providedIn: 'root',
      factory: () => new PendingTasksInternal()
    });
  }
  return PendingTasksInternal;
})();
/**
 * Service that keeps track of pending tasks contributing to the stableness of Angular
 * application. While several existing Angular services (ex.: `HttpClient`) will internally manage
 * tasks influencing stability, this API gives control over stability to library and application
 * developers for specific cases not covered by Angular internals.
 *
 * The concept of stability comes into play in several important scenarios:
 * - SSR process needs to wait for the application stability before serializing and sending rendered
 * HTML;
 * - tests might want to delay assertions until the application becomes stable;
 *
 * @usageNotes
 * ```ts
 * const pendingTasks = inject(PendingTasks);
 * const taskCleanup = pendingTasks.add();
 * // do work that should block application's stability and then:
 * taskCleanup();
 * ```
 *
 * @publicApi 20.0
 */
let PendingTasks = /*#__PURE__*/(() => {
  class PendingTasks {
    internalPendingTasks = inject(PendingTasksInternal);
    scheduler = inject(ChangeDetectionScheduler);
    errorHandler = inject(INTERNAL_APPLICATION_ERROR_HANDLER);
    /**
     * Adds a new task that should block application's stability.
     * @returns A cleanup function that removes a task when called.
     */
    add() {
      const taskId = this.internalPendingTasks.add();
      return () => {
        if (!this.internalPendingTasks.has(taskId)) {
          // This pending task has already been cleared.
          return;
        }
        // Notifying the scheduler will hold application stability open until the next tick.
        this.scheduler.notify(11 /* NotificationSource.PendingTaskRemoved */);
        this.internalPendingTasks.remove(taskId);
      };
    }
    /**
     * Runs an asynchronous function and blocks the application's stability until the function completes.
     *
     * ```ts
     * pendingTasks.run(async () => {
     *   const userData = await fetch('/api/user');
     *   this.userData.set(userData);
     * });
     * ```
     *
     * @param fn The asynchronous function to execute
     * @developerPreview 19.0
     */
    run(fn) {
      const removeTask = this.add();
      fn().catch(this.errorHandler).finally(removeTask);
    }
    /** @nocollapse */
    static ɵprov = /** @pureOrBreakMyCode */ /* @__PURE__ */ɵɵdefineInjectable({
      token: PendingTasks,
      providedIn: 'root',
      factory: () => new PendingTasks()
    });
  }
  return PendingTasks;
})();
function noop(...args) {
  // Do nothing.
}

/**
 * A scheduler which manages the execution of effects.
 */
let EffectScheduler = /*#__PURE__*/(() => {
  class EffectScheduler {
    /** @nocollapse */
    static ɵprov = /** @pureOrBreakMyCode */ /* @__PURE__ */ɵɵdefineInjectable({
      token: EffectScheduler,
      providedIn: 'root',
      factory: () => new ZoneAwareEffectScheduler()
    });
  }
  return EffectScheduler;
})();
/**
 * A wrapper around `ZoneAwareQueueingScheduler` that schedules flushing via the microtask queue
 * when.
 */
class ZoneAwareEffectScheduler {
  dirtyEffectCount = 0;
  queues = /*#__PURE__*/new Map();
  add(handle) {
    this.enqueue(handle);
    this.schedule(handle);
  }
  schedule(handle) {
    if (!handle.dirty) {
      return;
    }
    this.dirtyEffectCount++;
  }
  remove(handle) {
    const zone = handle.zone;
    const queue = this.queues.get(zone);
    if (!queue.has(handle)) {
      return;
    }
    queue.delete(handle);
    if (handle.dirty) {
      this.dirtyEffectCount--;
    }
  }
  enqueue(handle) {
    const zone = handle.zone;
    if (!this.queues.has(zone)) {
      this.queues.set(zone, new Set());
    }
    const queue = this.queues.get(zone);
    if (queue.has(handle)) {
      return;
    }
    queue.add(handle);
  }
  /**
   * Run all scheduled effects.
   *
   * Execution order of effects within the same zone is guaranteed to be FIFO, but there is no
   * ordering guarantee between effects scheduled in different zones.
   */
  flush() {
    while (this.dirtyEffectCount > 0) {
      let ranOneEffect = false;
      for (const [zone, queue] of this.queues) {
        // `zone` here must be defined.
        if (zone === null) {
          ranOneEffect ||= this.flushQueue(queue);
        } else {
          ranOneEffect ||= zone.run(() => this.flushQueue(queue));
        }
      }
      // Safeguard against infinite looping if somehow our dirty effect count gets out of sync with
      // the dirty flag across all the effects.
      if (!ranOneEffect) {
        this.dirtyEffectCount = 0;
      }
    }
  }
  flushQueue(queue) {
    let ranOneEffect = false;
    for (const handle of queue) {
      if (!handle.dirty) {
        continue;
      }
      this.dirtyEffectCount--;
      ranOneEffect = true;
      // TODO: what happens if this throws an error?
      handle.run();
    }
    return ranOneEffect;
  }
}


/***/ }),

/***/ 38677:
/*!********************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/signal.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPUTING: () => (/* binding */ COMPUTING),
/* harmony export */   ERRORED: () => (/* binding */ ERRORED),
/* harmony export */   REACTIVE_NODE: () => (/* binding */ REACTIVE_NODE),
/* harmony export */   SIGNAL: () => (/* binding */ SIGNAL),
/* harmony export */   SIGNAL_NODE: () => (/* binding */ SIGNAL_NODE),
/* harmony export */   UNSET: () => (/* binding */ UNSET),
/* harmony export */   consumerAfterComputation: () => (/* binding */ consumerAfterComputation),
/* harmony export */   consumerBeforeComputation: () => (/* binding */ consumerBeforeComputation),
/* harmony export */   consumerDestroy: () => (/* binding */ consumerDestroy),
/* harmony export */   consumerMarkDirty: () => (/* binding */ consumerMarkDirty),
/* harmony export */   consumerPollProducersForChange: () => (/* binding */ consumerPollProducersForChange),
/* harmony export */   createComputed: () => (/* binding */ createComputed),
/* harmony export */   createSignal: () => (/* binding */ createSignal),
/* harmony export */   defaultEquals: () => (/* binding */ defaultEquals),
/* harmony export */   getActiveConsumer: () => (/* binding */ getActiveConsumer),
/* harmony export */   isInNotificationPhase: () => (/* binding */ isInNotificationPhase),
/* harmony export */   isReactive: () => (/* binding */ isReactive),
/* harmony export */   producerAccessed: () => (/* binding */ producerAccessed),
/* harmony export */   producerIncrementEpoch: () => (/* binding */ producerIncrementEpoch),
/* harmony export */   producerMarkClean: () => (/* binding */ producerMarkClean),
/* harmony export */   producerNotifyConsumers: () => (/* binding */ producerNotifyConsumers),
/* harmony export */   producerUpdateValueVersion: () => (/* binding */ producerUpdateValueVersion),
/* harmony export */   producerUpdatesAllowed: () => (/* binding */ producerUpdatesAllowed),
/* harmony export */   runPostProducerCreatedFn: () => (/* binding */ runPostProducerCreatedFn),
/* harmony export */   runPostSignalSetFn: () => (/* binding */ runPostSignalSetFn),
/* harmony export */   setActiveConsumer: () => (/* binding */ setActiveConsumer),
/* harmony export */   setPostProducerCreatedFn: () => (/* binding */ setPostProducerCreatedFn),
/* harmony export */   setPostSignalSetFn: () => (/* binding */ setPostSignalSetFn),
/* harmony export */   setThrowInvalidWriteToSignalError: () => (/* binding */ setThrowInvalidWriteToSignalError),
/* harmony export */   signalGetFn: () => (/* binding */ signalGetFn),
/* harmony export */   signalSetFn: () => (/* binding */ signalSetFn),
/* harmony export */   signalUpdateFn: () => (/* binding */ signalUpdateFn)
/* harmony export */ });
/**
 * @license Angular v20.1.0
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */

/**
 * The default equality function used for `signal` and `computed`, which uses referential equality.
 */
function defaultEquals(a, b) {
  return Object.is(a, b);
}

/**
 * The currently active consumer `ReactiveNode`, if running code in a reactive context.
 *
 * Change this via `setActiveConsumer`.
 */
let activeConsumer = null;
let inNotificationPhase = false;
/**
 * Global epoch counter. Incremented whenever a source signal is set.
 */
let epoch = 1;
/**
 * If set, called after a producer `ReactiveNode` is created.
 */
let postProducerCreatedFn = null;
/**
 * Symbol used to tell `Signal`s apart from other functions.
 *
 * This can be used to auto-unwrap signals in various cases, or to auto-wrap non-signal values.
 */
const SIGNAL = /* @__PURE__ */Symbol('SIGNAL');
function setActiveConsumer(consumer) {
  const prev = activeConsumer;
  activeConsumer = consumer;
  return prev;
}
function getActiveConsumer() {
  return activeConsumer;
}
function isInNotificationPhase() {
  return inNotificationPhase;
}
function isReactive(value) {
  return value[SIGNAL] !== undefined;
}
const REACTIVE_NODE = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: false,
  producerNode: undefined,
  producerLastReadVersion: undefined,
  producerIndexOfThis: undefined,
  nextProducerIndex: 0,
  liveConsumerNode: undefined,
  liveConsumerIndexOfThis: undefined,
  consumerAllowSignalWrites: false,
  consumerIsAlwaysLive: false,
  kind: 'unknown',
  producerMustRecompute: () => false,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {}
};
/**
 * Called by implementations when a producer's signal is read.
 */
function producerAccessed(node) {
  if (inNotificationPhase) {
    throw new Error(typeof ngDevMode !== 'undefined' && ngDevMode ? `Assertion error: signal read during notification phase` : '');
  }
  if (activeConsumer === null) {
    // Accessed outside of a reactive context, so nothing to record.
    return;
  }
  activeConsumer.consumerOnSignalRead(node);
  // This producer is the `idx`th dependency of `activeConsumer`.
  const idx = activeConsumer.nextProducerIndex++;
  assertConsumerNode(activeConsumer);
  if (idx < activeConsumer.producerNode.length && activeConsumer.producerNode[idx] !== node) {
    // There's been a change in producers since the last execution of `activeConsumer`.
    // `activeConsumer.producerNode[idx]` holds a stale dependency which will be be removed and
    // replaced with `this`.
    //
    // If `activeConsumer` isn't live, then this is a no-op, since we can replace the producer in
    // `activeConsumer.producerNode` directly. However, if `activeConsumer` is live, then we need
    // to remove it from the stale producer's `liveConsumer`s.
    if (consumerIsLive(activeConsumer)) {
      const staleProducer = activeConsumer.producerNode[idx];
      producerRemoveLiveConsumerAtIndex(staleProducer, activeConsumer.producerIndexOfThis[idx]);
      // At this point, the only record of `staleProducer` is the reference at
      // `activeConsumer.producerNode[idx]` which will be overwritten below.
    }
  }
  if (activeConsumer.producerNode[idx] !== node) {
    // We're a new dependency of the consumer (at `idx`).
    activeConsumer.producerNode[idx] = node;
    // If the active consumer is live, then add it as a live consumer. If not, then use 0 as a
    // placeholder value.
    activeConsumer.producerIndexOfThis[idx] = consumerIsLive(activeConsumer) ? producerAddLiveConsumer(node, activeConsumer, idx) : 0;
  }
  activeConsumer.producerLastReadVersion[idx] = node.version;
}
/**
 * Increment the global epoch counter.
 *
 * Called by source producers (that is, not computeds) whenever their values change.
 */
function producerIncrementEpoch() {
  epoch++;
}
/**
 * Ensure this producer's `version` is up-to-date.
 */
function producerUpdateValueVersion(node) {
  if (consumerIsLive(node) && !node.dirty) {
    // A live consumer will be marked dirty by producers, so a clean state means that its version
    // is guaranteed to be up-to-date.
    return;
  }
  if (!node.dirty && node.lastCleanEpoch === epoch) {
    // Even non-live consumers can skip polling if they previously found themselves to be clean at
    // the current epoch, since their dependencies could not possibly have changed (such a change
    // would've increased the epoch).
    return;
  }
  if (!node.producerMustRecompute(node) && !consumerPollProducersForChange(node)) {
    // None of our producers report a change since the last time they were read, so no
    // recomputation of our value is necessary, and we can consider ourselves clean.
    producerMarkClean(node);
    return;
  }
  node.producerRecomputeValue(node);
  // After recomputing the value, we're no longer dirty.
  producerMarkClean(node);
}
/**
 * Propagate a dirty notification to live consumers of this producer.
 */
function producerNotifyConsumers(node) {
  if (node.liveConsumerNode === undefined) {
    return;
  }
  // Prevent signal reads when we're updating the graph
  const prev = inNotificationPhase;
  inNotificationPhase = true;
  try {
    for (const consumer of node.liveConsumerNode) {
      if (!consumer.dirty) {
        consumerMarkDirty(consumer);
      }
    }
  } finally {
    inNotificationPhase = prev;
  }
}
/**
 * Whether this `ReactiveNode` in its producer capacity is currently allowed to initiate updates,
 * based on the current consumer context.
 */
function producerUpdatesAllowed() {
  return activeConsumer?.consumerAllowSignalWrites !== false;
}
function consumerMarkDirty(node) {
  node.dirty = true;
  producerNotifyConsumers(node);
  node.consumerMarkedDirty?.(node);
}
function producerMarkClean(node) {
  node.dirty = false;
  node.lastCleanEpoch = epoch;
}
/**
 * Prepare this consumer to run a computation in its reactive context.
 *
 * Must be called by subclasses which represent reactive computations, before those computations
 * begin.
 */
function consumerBeforeComputation(node) {
  node && (node.nextProducerIndex = 0);
  return setActiveConsumer(node);
}
/**
 * Finalize this consumer's state after a reactive computation has run.
 *
 * Must be called by subclasses which represent reactive computations, after those computations
 * have finished.
 */
function consumerAfterComputation(node, prevConsumer) {
  setActiveConsumer(prevConsumer);
  if (!node || node.producerNode === undefined || node.producerIndexOfThis === undefined || node.producerLastReadVersion === undefined) {
    return;
  }
  if (consumerIsLive(node)) {
    // For live consumers, we need to remove the producer -> consumer edge for any stale producers
    // which weren't dependencies after the recomputation.
    for (let i = node.nextProducerIndex; i < node.producerNode.length; i++) {
      producerRemoveLiveConsumerAtIndex(node.producerNode[i], node.producerIndexOfThis[i]);
    }
  }
  // Truncate the producer tracking arrays.
  // Perf note: this is essentially truncating the length to `node.nextProducerIndex`, but
  // benchmarking has shown that individual pop operations are faster.
  while (node.producerNode.length > node.nextProducerIndex) {
    node.producerNode.pop();
    node.producerLastReadVersion.pop();
    node.producerIndexOfThis.pop();
  }
}
/**
 * Determine whether this consumer has any dependencies which have changed since the last time
 * they were read.
 */
function consumerPollProducersForChange(node) {
  assertConsumerNode(node);
  // Poll producers for change.
  for (let i = 0; i < node.producerNode.length; i++) {
    const producer = node.producerNode[i];
    const seenVersion = node.producerLastReadVersion[i];
    // First check the versions. A mismatch means that the producer's value is known to have
    // changed since the last time we read it.
    if (seenVersion !== producer.version) {
      return true;
    }
    // The producer's version is the same as the last time we read it, but it might itself be
    // stale. Force the producer to recompute its version (calculating a new value if necessary).
    producerUpdateValueVersion(producer);
    // Now when we do this check, `producer.version` is guaranteed to be up to date, so if the
    // versions still match then it has not changed since the last time we read it.
    if (seenVersion !== producer.version) {
      return true;
    }
  }
  return false;
}
/**
 * Disconnect this consumer from the graph.
 */
function consumerDestroy(node) {
  assertConsumerNode(node);
  if (consumerIsLive(node)) {
    // Drop all connections from the graph to this node.
    for (let i = 0; i < node.producerNode.length; i++) {
      producerRemoveLiveConsumerAtIndex(node.producerNode[i], node.producerIndexOfThis[i]);
    }
  }
  // Truncate all the arrays to drop all connection from this node to the graph.
  node.producerNode.length = node.producerLastReadVersion.length = node.producerIndexOfThis.length = 0;
  if (node.liveConsumerNode) {
    node.liveConsumerNode.length = node.liveConsumerIndexOfThis.length = 0;
  }
}
/**
 * Add `consumer` as a live consumer of this node.
 *
 * Note that this operation is potentially transitive. If this node becomes live, then it becomes
 * a live consumer of all of its current producers.
 */
function producerAddLiveConsumer(node, consumer, indexOfThis) {
  assertProducerNode(node);
  if (node.liveConsumerNode.length === 0 && isConsumerNode(node)) {
    // When going from 0 to 1 live consumers, we become a live consumer to our producers.
    for (let i = 0; i < node.producerNode.length; i++) {
      node.producerIndexOfThis[i] = producerAddLiveConsumer(node.producerNode[i], node, i);
    }
  }
  node.liveConsumerIndexOfThis.push(indexOfThis);
  return node.liveConsumerNode.push(consumer) - 1;
}
/**
 * Remove the live consumer at `idx`.
 */
function producerRemoveLiveConsumerAtIndex(node, idx) {
  assertProducerNode(node);
  if (typeof ngDevMode !== 'undefined' && ngDevMode && idx >= node.liveConsumerNode.length) {
    throw new Error(`Assertion error: active consumer index ${idx} is out of bounds of ${node.liveConsumerNode.length} consumers)`);
  }
  if (node.liveConsumerNode.length === 1 && isConsumerNode(node)) {
    // When removing the last live consumer, we will no longer be live. We need to remove
    // ourselves from our producers' tracking (which may cause consumer-producers to lose
    // liveness as well).
    for (let i = 0; i < node.producerNode.length; i++) {
      producerRemoveLiveConsumerAtIndex(node.producerNode[i], node.producerIndexOfThis[i]);
    }
  }
  // Move the last value of `liveConsumers` into `idx`. Note that if there's only a single
  // live consumer, this is a no-op.
  const lastIdx = node.liveConsumerNode.length - 1;
  node.liveConsumerNode[idx] = node.liveConsumerNode[lastIdx];
  node.liveConsumerIndexOfThis[idx] = node.liveConsumerIndexOfThis[lastIdx];
  // Truncate the array.
  node.liveConsumerNode.length--;
  node.liveConsumerIndexOfThis.length--;
  // If the index is still valid, then we need to fix the index pointer from the producer to this
  // consumer, and update it from `lastIdx` to `idx` (accounting for the move above).
  if (idx < node.liveConsumerNode.length) {
    const idxProducer = node.liveConsumerIndexOfThis[idx];
    const consumer = node.liveConsumerNode[idx];
    assertConsumerNode(consumer);
    consumer.producerIndexOfThis[idxProducer] = idx;
  }
}
function consumerIsLive(node) {
  return node.consumerIsAlwaysLive || (node?.liveConsumerNode?.length ?? 0) > 0;
}
function assertConsumerNode(node) {
  node.producerNode ??= [];
  node.producerIndexOfThis ??= [];
  node.producerLastReadVersion ??= [];
}
function assertProducerNode(node) {
  node.liveConsumerNode ??= [];
  node.liveConsumerIndexOfThis ??= [];
}
function isConsumerNode(node) {
  return node.producerNode !== undefined;
}
function runPostProducerCreatedFn(node) {
  postProducerCreatedFn?.(node);
}
function setPostProducerCreatedFn(fn) {
  const prev = postProducerCreatedFn;
  postProducerCreatedFn = fn;
  return prev;
}

/**
 * Create a computed signal which derives a reactive value from an expression.
 */
function createComputed(computation, equal) {
  const node = Object.create(COMPUTED_NODE);
  node.computation = computation;
  if (equal !== undefined) {
    node.equal = equal;
  }
  const computed = () => {
    // Check if the value needs updating before returning it.
    producerUpdateValueVersion(node);
    // Record that someone looked at this signal.
    producerAccessed(node);
    if (node.value === ERRORED) {
      throw node.error;
    }
    return node.value;
  };
  computed[SIGNAL] = node;
  if (typeof ngDevMode !== 'undefined' && ngDevMode) {
    const debugName = node.debugName ? ' (' + node.debugName + ')' : '';
    computed.toString = () => `[Computed${debugName}: ${node.value}]`;
  }
  runPostProducerCreatedFn(node);
  return computed;
}
/**
 * A dedicated symbol used before a computed value has been calculated for the first time.
 * Explicitly typed as `any` so we can use it as signal's value.
 */
const UNSET = /* @__PURE__ */Symbol('UNSET');
/**
 * A dedicated symbol used in place of a computed signal value to indicate that a given computation
 * is in progress. Used to detect cycles in computation chains.
 * Explicitly typed as `any` so we can use it as signal's value.
 */
const COMPUTING = /* @__PURE__ */Symbol('COMPUTING');
/**
 * A dedicated symbol used in place of a computed signal value to indicate that a given computation
 * failed. The thrown error is cached until the computation gets dirty again.
 * Explicitly typed as `any` so we can use it as signal's value.
 */
const ERRORED = /* @__PURE__ */Symbol('ERRORED');
// Note: Using an IIFE here to ensure that the spread assignment is not considered
// a side-effect, ending up preserving `COMPUTED_NODE` and `REACTIVE_NODE`.
// TODO: remove when https://github.com/evanw/esbuild/issues/3392 is resolved.
const COMPUTED_NODE = /* @__PURE__ */(() => {
  return {
    ...REACTIVE_NODE,
    value: UNSET,
    dirty: true,
    error: null,
    equal: defaultEquals,
    kind: 'computed',
    producerMustRecompute(node) {
      // Force a recomputation if there's no current value, or if the current value is in the
      // process of being calculated (which should throw an error).
      return node.value === UNSET || node.value === COMPUTING;
    },
    producerRecomputeValue(node) {
      if (node.value === COMPUTING) {
        // Our computation somehow led to a cyclic read of itself.
        throw new Error(typeof ngDevMode !== 'undefined' && ngDevMode ? 'Detected cycle in computations.' : '');
      }
      const oldValue = node.value;
      node.value = COMPUTING;
      const prevConsumer = consumerBeforeComputation(node);
      let newValue;
      let wasEqual = false;
      try {
        newValue = node.computation();
        // We want to mark this node as errored if calling `equal` throws; however, we don't want
        // to track any reactive reads inside `equal`.
        setActiveConsumer(null);
        wasEqual = oldValue !== UNSET && oldValue !== ERRORED && newValue !== ERRORED && node.equal(oldValue, newValue);
      } catch (err) {
        newValue = ERRORED;
        node.error = err;
      } finally {
        consumerAfterComputation(node, prevConsumer);
      }
      if (wasEqual) {
        // No change to `valueVersion` - old and new values are
        // semantically equivalent.
        node.value = oldValue;
        return;
      }
      node.value = newValue;
      node.version++;
    }
  };
})();
function defaultThrowError() {
  throw new Error();
}
let throwInvalidWriteToSignalErrorFn = defaultThrowError;
function throwInvalidWriteToSignalError(node) {
  throwInvalidWriteToSignalErrorFn(node);
}
function setThrowInvalidWriteToSignalError(fn) {
  throwInvalidWriteToSignalErrorFn = fn;
}

/**
 * If set, called after `WritableSignal`s are updated.
 *
 * This hook can be used to achieve various effects, such as running effects synchronously as part
 * of setting a signal.
 */
let postSignalSetFn = null;
/**
 * Creates a `Signal` getter, setter, and updater function.
 */
function createSignal(initialValue, equal) {
  const node = Object.create(SIGNAL_NODE);
  node.value = initialValue;
  if (equal !== undefined) {
    node.equal = equal;
  }
  const getter = () => signalGetFn(node);
  getter[SIGNAL] = node;
  if (typeof ngDevMode !== 'undefined' && ngDevMode) {
    const debugName = node.debugName ? ' (' + node.debugName + ')' : '';
    getter.toString = () => `[Signal${debugName}: ${node.value}]`;
  }
  runPostProducerCreatedFn(node);
  const set = newValue => signalSetFn(node, newValue);
  const update = updateFn => signalUpdateFn(node, updateFn);
  return [getter, set, update];
}
function setPostSignalSetFn(fn) {
  const prev = postSignalSetFn;
  postSignalSetFn = fn;
  return prev;
}
function signalGetFn(node) {
  producerAccessed(node);
  return node.value;
}
function signalSetFn(node, newValue) {
  if (!producerUpdatesAllowed()) {
    throwInvalidWriteToSignalError(node);
  }
  if (!node.equal(node.value, newValue)) {
    node.value = newValue;
    signalValueChanged(node);
  }
}
function signalUpdateFn(node, updater) {
  if (!producerUpdatesAllowed()) {
    throwInvalidWriteToSignalError(node);
  }
  signalSetFn(node, updater(node.value));
}
function runPostSignalSetFn(node) {
  postSignalSetFn?.(node);
}
// Note: Using an IIFE here to ensure that the spread assignment is not considered
// a side-effect, ending up preserving `COMPUTED_NODE` and `REACTIVE_NODE`.
// TODO: remove when https://github.com/evanw/esbuild/issues/3392 is resolved.
const SIGNAL_NODE = /* @__PURE__ */(() => {
  return {
    ...REACTIVE_NODE,
    equal: defaultEquals,
    value: undefined,
    kind: 'signal'
  };
})();
function signalValueChanged(node) {
  node.version++;
  producerIncrementEpoch();
  producerNotifyConsumers(node);
  postSignalSetFn?.(node);
}


/***/ }),

/***/ 49074:
/*!**************************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/rxjs-interop.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   outputFromObservable: () => (/* binding */ outputFromObservable),
/* harmony export */   outputToObservable: () => (/* binding */ outputToObservable),
/* harmony export */   pendingUntilEvent: () => (/* binding */ pendingUntilEvent),
/* harmony export */   rxResource: () => (/* binding */ rxResource),
/* harmony export */   takeUntilDestroyed: () => (/* binding */ takeUntilDestroyed),
/* harmony export */   toObservable: () => (/* binding */ toObservable),
/* harmony export */   toSignal: () => (/* binding */ toSignal)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root_effect_scheduler.mjs */ 34205);
/* harmony import */ var _resource_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource.mjs */ 53705);
/* harmony import */ var _angular_core_primitives_di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/primitives/di */ 64278);
/* harmony import */ var _angular_core_primitives_signals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/primitives/signals */ 21712);
/**
 * @license Angular v20.1.0
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */











/**
 * Operator which completes the Observable when the calling context (component, directive, service,
 * etc) is destroyed.
 *
 * @param destroyRef optionally, the `DestroyRef` representing the current context. This can be
 *     passed explicitly to use `takeUntilDestroyed` outside of an [injection
 * context](guide/di/dependency-injection-context). Otherwise, the current `DestroyRef` is injected.
 *
 * @publicApi 19.0
 */
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.assertInInjectionContext)(takeUntilDestroyed);
    destroyRef = (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.inject)(_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.DestroyRef);
  }
  const destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return source => {
    return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(destroyed$));
  };
}

/**
 * Implementation of `OutputRef` that emits values from
 * an RxJS observable source.
 *
 * @internal
 */
class OutputFromObservableRef {
  source;
  destroyed = false;
  destroyRef = /*#__PURE__*/(0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.inject)(_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.DestroyRef);
  constructor(source) {
    this.source = source;
    this.destroyRef.onDestroy(() => {
      this.destroyed = true;
    });
  }
  subscribe(callbackFn) {
    if (this.destroyed) {
      throw new _root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.RuntimeError(953 /* ɵRuntimeErrorCode.OUTPUT_REF_DESTROYED */, ngDevMode && 'Unexpected subscription to destroyed `OutputRef`. ' + 'The owning directive/component is destroyed.');
    }
    // Stop yielding more values when the directive/component is already destroyed.
    const subscription = this.source.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: value => callbackFn(value)
    });
    return {
      unsubscribe: () => subscription.unsubscribe()
    };
  }
}
/**
 * Declares an Angular output that is using an RxJS observable as a source
 * for events dispatched to parent subscribers.
 *
 * The behavior for an observable as source is defined as followed:
 *    1. New values are forwarded to the Angular output (next notifications).
 *    2. Errors notifications are not handled by Angular. You need to handle these manually.
 *       For example by using `catchError`.
 *    3. Completion notifications stop the output from emitting new values.
 *
 * @usageNotes
 * Initialize an output in your directive by declaring a
 * class field and initializing it with the `outputFromObservable()` function.
 *
 * ```ts
 * @Directive({..})
 * export class MyDir {
 *   nameChange$ = <some-observable>;
 *   nameChange = outputFromObservable(this.nameChange$);
 * }
 * ```
 *
 * @publicApi 19.0
 */
function outputFromObservable(observable, opts) {
  ngDevMode && (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.assertInInjectionContext)(outputFromObservable);
  return new OutputFromObservableRef(observable);
}

/**
 * Converts an Angular output declared via `output()` or `outputFromObservable()`
 * to an observable.
 *
 * You can subscribe to the output via `Observable.subscribe` then.
 *
 * @publicApi 19.0
 */
function outputToObservable(ref) {
  const destroyRef = (0,_resource_mjs__WEBPACK_IMPORTED_MODULE_5__.getOutputDestroyRef)(ref);
  return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
    // Complete the observable upon directive/component destroy.
    // Note: May be `undefined` if an `EventEmitter` is declared outside
    // of an injection context.
    const unregisterOnDestroy = destroyRef?.onDestroy(() => observer.complete());
    const subscription = ref.subscribe(v => observer.next(v));
    return () => {
      subscription.unsubscribe();
      unregisterOnDestroy?.();
    };
  });
}

/**
 * Exposes the value of an Angular `Signal` as an RxJS `Observable`.
 *
 * The signal's value will be propagated into the `Observable`'s subscribers using an `effect`.
 *
 * `toObservable` must be called in an injection context unless an injector is provided via options.
 *
 * @publicApi 20.0
 */
function toObservable(source, options) {
  if (ngDevMode && !options?.injector) {
    (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.assertInInjectionContext)(toObservable);
  }
  const injector = options?.injector ?? (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.inject)(_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.Injector);
  const subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(1);
  const watcher = (0,_resource_mjs__WEBPACK_IMPORTED_MODULE_5__.effect)(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      (0,_resource_mjs__WEBPACK_IMPORTED_MODULE_5__.untracked)(() => subject.error(err));
      return;
    }
    (0,_resource_mjs__WEBPACK_IMPORTED_MODULE_5__.untracked)(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}

/**
 * Get the current value of an `Observable` as a reactive `Signal`.
 *
 * `toSignal` returns a `Signal` which provides synchronous reactive access to values produced
 * by the given `Observable`, by subscribing to that `Observable`. The returned `Signal` will always
 * have the most recent value emitted by the subscription, and will throw an error if the
 * `Observable` errors.
 *
 * With `requireSync` set to `true`, `toSignal` will assert that the `Observable` produces a value
 * immediately upon subscription. No `initialValue` is needed in this case, and the returned signal
 * does not include an `undefined` type.
 *
 * By default, the subscription will be automatically cleaned up when the current [injection
 * context](guide/di/dependency-injection-context) is destroyed. For example, when `toSignal` is
 * called during the construction of a component, the subscription will be cleaned up when the
 * component is destroyed. If an injection context is not available, an explicit `Injector` can be
 * passed instead.
 *
 * If the subscription should persist until the `Observable` itself completes, the `manualCleanup`
 * option can be specified instead, which disables the automatic subscription teardown. No injection
 * context is needed in this configuration as well.
 */
function toSignal(source, options) {
  typeof ngDevMode !== 'undefined' && ngDevMode && (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.assertNotInReactiveContext)(toSignal, 'Invoking `toSignal` causes new subscriptions every time. ' + 'Consider moving `toSignal` outside of the reactive context and read the signal value where needed.');
  const requiresCleanup = !options?.manualCleanup;
  if (ngDevMode && requiresCleanup && !options?.injector) {
    (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.assertInInjectionContext)(toSignal);
  }
  const cleanupRef = requiresCleanup ? options?.injector?.get(_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.DestroyRef) ?? (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.inject)(_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  // Note: T is the Observable value type, and U is the initial value type. They don't have to be
  // the same - the returned signal gives values of type `T`.
  let state;
  if (options?.requireSync) {
    // Initially the signal is in a `NoValue` state.
    state = (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.signal)({
      kind: 0 /* StateKind.NoValue */
    }, {
      equal
    });
  } else {
    // If an initial value was passed, use it. Otherwise, use `undefined` as the initial value.
    state = (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.signal)({
      kind: 1 /* StateKind.Value */,
      value: options?.initialValue
    }, {
      equal
    });
  }
  let destroyUnregisterFn;
  // Note: This code cannot run inside a reactive context (see assertion above). If we'd support
  // this, we would subscribe to the observable outside of the current reactive context, avoiding
  // that side-effect signal reads/writes are attribute to the current consumer. The current
  // consumer only needs to be notified when the `state` signal changes through the observable
  // subscription. Additional context (related to async pipe):
  // https://github.com/angular/angular/pull/50522.
  const sub = source.subscribe({
    next: value => state.set({
      kind: 1 /* StateKind.Value */,
      value
    }),
    error: error => {
      state.set({
        kind: 2 /* StateKind.Error */,
        error
      });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });
  if (options?.requireSync && state().kind === 0 /* StateKind.NoValue */) {
    throw new _root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.RuntimeError(601 /* ɵRuntimeErrorCode.REQUIRE_SYNC_WITHOUT_SYNC_EMIT */, (typeof ngDevMode === 'undefined' || ngDevMode) && '`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.');
  }
  // Unsubscribe when the current context is destroyed, if requested.
  destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  // The actual returned signal is a `computed` of the `State` signal, which maps the various states
  // to either values or errors.
  return (0,_resource_mjs__WEBPACK_IMPORTED_MODULE_5__.computed)(() => {
    const current = state();
    switch (current.kind) {
      case 1 /* StateKind.Value */:
        return current.value;
      case 2 /* StateKind.Error */:
        throw current.error;
      case 0 /* StateKind.NoValue */:
        // This shouldn't really happen because the error is thrown on creation.
        throw new _root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.RuntimeError(601 /* ɵRuntimeErrorCode.REQUIRE_SYNC_WITHOUT_SYNC_EMIT */, (typeof ngDevMode === 'undefined' || ngDevMode) && '`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.');
    }
  }, {
    equal: options?.equal
  });
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 /* StateKind.Value */ && b.kind === 1 /* StateKind.Value */ && userEquality(a.value, b.value);
}

/**
 * Operator which makes the application unstable until the observable emits, completes, errors, or is unsubscribed.
 *
 * Use this operator in observables whose subscriptions are important for rendering and should be included in SSR serialization.
 *
 * @param injector The `Injector` to use during creation. If this is not provided, the current injection context will be used instead (via `inject`).
 *
 * @developerPreview 20.0
 */
function pendingUntilEvent(injector) {
  if (injector === undefined) {
    ngDevMode && (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.assertInInjectionContext)(pendingUntilEvent);
    injector = (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.inject)(_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.Injector);
  }
  const taskService = injector.get(_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.PendingTasks);
  return sourceObservable => {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(originalSubscriber => {
      // create a new task on subscription
      const removeTask = taskService.add();
      let cleanedUp = false;
      function cleanupTask() {
        if (cleanedUp) {
          return;
        }
        removeTask();
        cleanedUp = true;
      }
      const innerSubscription = sourceObservable.subscribe({
        next: v => {
          originalSubscriber.next(v);
          cleanupTask();
        },
        complete: () => {
          originalSubscriber.complete();
          cleanupTask();
        },
        error: e => {
          originalSubscriber.error(e);
          cleanupTask();
        }
      });
      innerSubscription.add(() => {
        originalSubscriber.unsubscribe();
        cleanupTask();
      });
      return innerSubscription;
    });
  };
}
function rxResource(opts) {
  if (ngDevMode && !opts?.injector) {
    (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.assertInInjectionContext)(rxResource);
  }
  return (0,_resource_mjs__WEBPACK_IMPORTED_MODULE_5__.resource)({
    ...opts,
    loader: undefined,
    stream: params => {
      let sub;
      // Track the abort listener so it can be removed if the Observable completes (as a memory
      // optimization).
      const onAbort = () => sub.unsubscribe();
      params.abortSignal.addEventListener('abort', onAbort);
      // Start off stream as undefined.
      const stream = (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.signal)({
        value: undefined
      });
      let resolve;
      const promise = new Promise(r => resolve = r);
      function send(value) {
        stream.set(value);
        resolve?.(stream);
        resolve = undefined;
      }
      // TODO(alxhub): remove after g3 updated to rename loader -> stream
      const streamFn = opts.stream ?? opts.loader;
      if (streamFn === undefined) {
        throw new _root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.RuntimeError(990 /* ɵRuntimeErrorCode.MUST_PROVIDE_STREAM_OPTION */, ngDevMode && `Must provide \`stream\` option.`);
      }
      sub = streamFn(params).subscribe({
        next: value => send({
          value
        }),
        error: error => {
          send({
            error: (0,_resource_mjs__WEBPACK_IMPORTED_MODULE_5__.encapsulateResourceError)(error)
          });
          params.abortSignal.removeEventListener('abort', onAbort);
        },
        complete: () => {
          if (resolve) {
            send({
              error: new _root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_4__.RuntimeError(991 /* ɵRuntimeErrorCode.RESOURCE_COMPLETED_BEFORE_PRODUCING_VALUE */, ngDevMode && 'Resource completed before producing a value')
            });
          }
          params.abortSignal.removeEventListener('abort', onAbort);
        }
      });
      return promise;
    }
  });
}


/***/ }),

/***/ 53705:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/resource.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutputEmitterRef: () => (/* binding */ OutputEmitterRef),
/* harmony export */   ResourceImpl: () => (/* binding */ ResourceImpl),
/* harmony export */   computed: () => (/* binding */ computed),
/* harmony export */   effect: () => (/* binding */ effect),
/* harmony export */   encapsulateResourceError: () => (/* binding */ encapsulateResourceError),
/* harmony export */   getOutputDestroyRef: () => (/* binding */ getOutputDestroyRef),
/* harmony export */   linkedSignal: () => (/* binding */ linkedSignal),
/* harmony export */   resource: () => (/* binding */ resource),
/* harmony export */   untracked: () => (/* binding */ untracked)
/* harmony export */ });
/* harmony import */ var _Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root_effect_scheduler.mjs */ 34205);
/* harmony import */ var _signal_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signal.mjs */ 38677);
/* harmony import */ var _untracked_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./untracked.mjs */ 77542);

/**
 * @license Angular v20.1.0
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */





/**
 * An `OutputEmitterRef` is created by the `output()` function and can be
 * used to emit values to consumers of your directive or component.
 *
 * Consumers of your directive/component can bind to the output and
 * subscribe to changes via the bound event syntax. For example:
 *
 * ```html
 * <my-comp (valueChange)="processNewValue($event)" />
 * ```
 *
 * @publicAPI
 */
class OutputEmitterRef {
  destroyed = false;
  listeners = null;
  errorHandler = /*#__PURE__*/(0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.inject)(_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.ErrorHandler, {
    optional: true
  });
  /** @internal */
  destroyRef = /*#__PURE__*/(0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.inject)(_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
  constructor() {
    // Clean-up all listeners and mark as destroyed upon destroy.
    this.destroyRef.onDestroy(() => {
      this.destroyed = true;
      this.listeners = null;
    });
  }
  subscribe(callback) {
    if (this.destroyed) {
      throw new _root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.RuntimeError(953 /* RuntimeErrorCode.OUTPUT_REF_DESTROYED */, ngDevMode && 'Unexpected subscription to destroyed `OutputRef`. ' + 'The owning directive/component is destroyed.');
    }
    (this.listeners ??= []).push(callback);
    return {
      unsubscribe: () => {
        const idx = this.listeners?.indexOf(callback);
        if (idx !== undefined && idx !== -1) {
          this.listeners?.splice(idx, 1);
        }
      }
    };
  }
  /** Emits a new value to the output. */
  emit(value) {
    if (this.destroyed) {
      console.warn((0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.formatRuntimeError)(953 /* RuntimeErrorCode.OUTPUT_REF_DESTROYED */, ngDevMode && 'Unexpected emit for destroyed `OutputRef`. ' + 'The owning directive/component is destroyed.'));
      return;
    }
    if (this.listeners === null) {
      return;
    }
    const previousConsumer = (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_2__.setActiveConsumer)(null);
    try {
      for (const listenerFn of this.listeners) {
        try {
          listenerFn(value);
        } catch (err) {
          this.errorHandler?.handleError(err);
        }
      }
    } finally {
      (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_2__.setActiveConsumer)(previousConsumer);
    }
  }
}
/** Gets the owning `DestroyRef` for the given output. */
function getOutputDestroyRef(ref) {
  return ref.destroyRef;
}

/**
 * Execute an arbitrary function in a non-reactive (non-tracking) context. The executed function
 * can, optionally, return a value.
 */
function untracked(nonReactiveReadsFn) {
  return (0,_untracked_mjs__WEBPACK_IMPORTED_MODULE_3__.untracked)(nonReactiveReadsFn);
}

/**
 * Create a computed `Signal` which derives a reactive value from an expression.
 */
function computed(computation, options) {
  const getter = (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_2__.createComputed)(computation, options?.equal);
  if (ngDevMode) {
    getter.toString = () => `[Computed: ${getter()}]`;
    getter[_signal_mjs__WEBPACK_IMPORTED_MODULE_2__.SIGNAL].debugName = options?.debugName;
  }
  return getter;
}
class EffectRefImpl {
  [_signal_mjs__WEBPACK_IMPORTED_MODULE_2__.SIGNAL];
  constructor(node) {
    this[_signal_mjs__WEBPACK_IMPORTED_MODULE_2__.SIGNAL] = node;
  }
  destroy() {
    this[_signal_mjs__WEBPACK_IMPORTED_MODULE_2__.SIGNAL].destroy();
  }
}
/**
 * Registers an "effect" that will be scheduled & executed whenever the signals that it reads
 * changes.
 *
 * Angular has two different kinds of effect: component effects and root effects. Component effects
 * are created when `effect()` is called from a component, directive, or within a service of a
 * component/directive. Root effects are created when `effect()` is called from outside the
 * component tree, such as in a root service.
 *
 * The two effect types differ in their timing. Component effects run as a component lifecycle
 * event during Angular's synchronization (change detection) process, and can safely read input
 * signals or create/destroy views that depend on component state. Root effects run as microtasks
 * and have no connection to the component tree or change detection.
 *
 * `effect()` must be run in injection context, unless the `injector` option is manually specified.
 *
 * @publicApi 20.0
 */
function effect(effectFn, options) {
  ngDevMode && (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.assertNotInReactiveContext)(effect, 'Call `effect` outside of a reactive context. For example, schedule the ' + 'effect inside the component constructor.');
  if (ngDevMode && !options?.injector) {
    (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.assertInInjectionContext)(effect);
  }
  if (ngDevMode && options?.allowSignalWrites !== undefined) {
    console.warn(`The 'allowSignalWrites' flag is deprecated and no longer impacts effect() (writes are always allowed)`);
  }
  const injector = options?.injector ?? (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.inject)(_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.Injector);
  let destroyRef = options?.manualCleanup !== true ? injector.get(_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.DestroyRef) : null;
  let node;
  const viewContext = injector.get(_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.ViewContext, null, {
    optional: true
  });
  const notifier = injector.get(_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionScheduler);
  if (viewContext !== null) {
    // This effect was created in the context of a view, and will be associated with the view.
    node = createViewEffect(viewContext.view, notifier, effectFn);
    if (destroyRef instanceof _root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.NodeInjectorDestroyRef && destroyRef._lView === viewContext.view) {
      // The effect is being created in the same view as the `DestroyRef` references, so it will be
      // automatically destroyed without the need for an explicit `DestroyRef` registration.
      destroyRef = null;
    }
  } else {
    // This effect was created outside the context of a view, and will be scheduled independently.
    node = createRootEffect(effectFn, injector.get(_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.EffectScheduler), notifier);
  }
  node.injector = injector;
  if (destroyRef !== null) {
    // If we need to register for cleanup, do that here.
    node.onDestroyFn = destroyRef.onDestroy(() => node.destroy());
  }
  const effectRef = new EffectRefImpl(node);
  if (ngDevMode) {
    node.debugName = options?.debugName ?? '';
    const prevInjectorProfilerContext = (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.setInjectorProfilerContext)({
      injector,
      token: null
    });
    try {
      (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.emitEffectCreatedEvent)(effectRef);
    } finally {
      (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.setInjectorProfilerContext)(prevInjectorProfilerContext);
    }
  }
  return effectRef;
}
const BASE_EFFECT_NODE = /* @__PURE__ */(() => ({
  ..._signal_mjs__WEBPACK_IMPORTED_MODULE_2__.REACTIVE_NODE,
  consumerIsAlwaysLive: true,
  consumerAllowSignalWrites: true,
  dirty: true,
  hasRun: false,
  cleanupFns: undefined,
  zone: null,
  kind: 'effect',
  onDestroyFn: _root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.noop,
  run() {
    this.dirty = false;
    if (ngDevMode && (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_2__.isInNotificationPhase)()) {
      throw new Error(`Schedulers cannot synchronously execute watches while scheduling.`);
    }
    if (this.hasRun && !(0,_signal_mjs__WEBPACK_IMPORTED_MODULE_2__.consumerPollProducersForChange)(this)) {
      return;
    }
    this.hasRun = true;
    const registerCleanupFn = cleanupFn => (this.cleanupFns ??= []).push(cleanupFn);
    const prevNode = (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_2__.consumerBeforeComputation)(this);
    // We clear `setIsRefreshingViews` so that `markForCheck()` within the body of an effect will
    // cause CD to reach the component in question.
    const prevRefreshingViews = (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.setIsRefreshingViews)(false);
    try {
      this.maybeCleanup();
      this.fn(registerCleanupFn);
    } finally {
      (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.setIsRefreshingViews)(prevRefreshingViews);
      (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_2__.consumerAfterComputation)(this, prevNode);
    }
  },
  maybeCleanup() {
    if (!this.cleanupFns?.length) {
      return;
    }
    const prevConsumer = (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_2__.setActiveConsumer)(null);
    try {
      // Attempt to run the cleanup functions. Regardless of failure or success, we consider
      // cleanup "completed" and clear the list for the next run of the effect. Note that an error
      // from the cleanup function will still crash the current run of the effect.
      while (this.cleanupFns.length) {
        this.cleanupFns.pop()();
      }
    } finally {
      this.cleanupFns = [];
      (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_2__.setActiveConsumer)(prevConsumer);
    }
  }
}))();
const ROOT_EFFECT_NODE = /* @__PURE__ */(() => ({
  ...BASE_EFFECT_NODE,
  consumerMarkedDirty() {
    this.scheduler.schedule(this);
    this.notifier.notify(12 /* NotificationSource.RootEffect */);
  },
  destroy() {
    (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_2__.consumerDestroy)(this);
    this.onDestroyFn();
    this.maybeCleanup();
    this.scheduler.remove(this);
  }
}))();
const VIEW_EFFECT_NODE = /* @__PURE__ */(() => ({
  ...BASE_EFFECT_NODE,
  consumerMarkedDirty() {
    this.view[_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.FLAGS] |= 8192 /* LViewFlags.HasChildViewsToRefresh */;
    (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.markAncestorsForTraversal)(this.view);
    this.notifier.notify(13 /* NotificationSource.ViewEffect */);
  },
  destroy() {
    (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_2__.consumerDestroy)(this);
    this.onDestroyFn();
    this.maybeCleanup();
    this.view[_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.EFFECTS]?.delete(this);
  }
}))();
function createViewEffect(view, notifier, fn) {
  const node = Object.create(VIEW_EFFECT_NODE);
  node.view = view;
  node.zone = typeof Zone !== 'undefined' ? Zone.current : null;
  node.notifier = notifier;
  node.fn = fn;
  view[_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.EFFECTS] ??= new Set();
  view[_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.EFFECTS].add(node);
  node.consumerMarkedDirty(node);
  return node;
}
function createRootEffect(fn, scheduler, notifier) {
  const node = Object.create(ROOT_EFFECT_NODE);
  node.fn = fn;
  node.scheduler = scheduler;
  node.notifier = notifier;
  node.zone = typeof Zone !== 'undefined' ? Zone.current : null;
  node.scheduler.add(node);
  node.notifier.notify(12 /* NotificationSource.RootEffect */);
  return node;
}
const identityFn = v => v;
function linkedSignal(optionsOrComputation, options) {
  if (typeof optionsOrComputation === 'function') {
    const getter = (0,_untracked_mjs__WEBPACK_IMPORTED_MODULE_3__.createLinkedSignal)(optionsOrComputation, identityFn, options?.equal);
    return upgradeLinkedSignalGetter(getter);
  } else {
    const getter = (0,_untracked_mjs__WEBPACK_IMPORTED_MODULE_3__.createLinkedSignal)(optionsOrComputation.source, optionsOrComputation.computation, optionsOrComputation.equal);
    return upgradeLinkedSignalGetter(getter);
  }
}
function upgradeLinkedSignalGetter(getter) {
  if (ngDevMode) {
    getter.toString = () => `[LinkedSignal: ${getter()}]`;
  }
  const node = getter[_signal_mjs__WEBPACK_IMPORTED_MODULE_2__.SIGNAL];
  const upgradedGetter = getter;
  upgradedGetter.set = newValue => (0,_untracked_mjs__WEBPACK_IMPORTED_MODULE_3__.linkedSignalSetFn)(node, newValue);
  upgradedGetter.update = updateFn => (0,_untracked_mjs__WEBPACK_IMPORTED_MODULE_3__.linkedSignalUpdateFn)(node, updateFn);
  upgradedGetter.asReadonly = _root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.signalAsReadonlyFn.bind(getter);
  return upgradedGetter;
}

/**
 * Whether a `Resource.value()` should throw an error when the resource is in the error state.
 *
 * This internal flag is being used to gradually roll out this behavior.
 */
const RESOURCE_VALUE_THROWS_ERRORS_DEFAULT = true;
function resource(options) {
  if (ngDevMode && !options?.injector) {
    (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.assertInInjectionContext)(resource);
  }
  const oldNameForParams = options.request;
  const params = options.params ?? oldNameForParams ?? (() => null);
  return new ResourceImpl(params, getLoader(options), options.defaultValue, options.equal ? wrapEqualityFn(options.equal) : undefined, options.injector ?? (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.inject)(_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.Injector), RESOURCE_VALUE_THROWS_ERRORS_DEFAULT);
}
/**
 * Base class which implements `.value` as a `WritableSignal` by delegating `.set` and `.update`.
 */
class BaseWritableResource {
  value;
  constructor(value) {
    this.value = value;
    this.value.set = this.set.bind(this);
    this.value.update = this.update.bind(this);
    this.value.asReadonly = _root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.signalAsReadonlyFn;
  }
  isError = /*#__PURE__*/computed(() => this.status() === 'error');
  update(updateFn) {
    this.set(updateFn(untracked(this.value)));
  }
  isLoading = /*#__PURE__*/computed(() => this.status() === 'loading' || this.status() === 'reloading');
  hasValue() {
    // Note: we specifically read `isError()` instead of `status()` here to avoid triggering
    // reactive consumers which read `hasValue()`. This way, if `hasValue()` is used inside of an
    // effect, it doesn't cause the effect to rerun on every status change.
    if (this.isError()) {
      return false;
    }
    return this.value() !== undefined;
  }
  asReadonly() {
    return this;
  }
}
/**
 * Implementation for `resource()` which uses a `linkedSignal` to manage the resource's state.
 */
class ResourceImpl extends BaseWritableResource {
  loaderFn;
  equal;
  pendingTasks;
  /**
   * The current state of the resource. Status, value, and error are derived from this.
   */
  state;
  /**
   * Combines the current request with a reload counter which allows the resource to be reloaded on
   * imperative command.
   */
  extRequest;
  effectRef;
  pendingController;
  resolvePendingTask = undefined;
  destroyed = false;
  unregisterOnDestroy;
  constructor(request, loaderFn, defaultValue, equal, injector, throwErrorsFromValue = RESOURCE_VALUE_THROWS_ERRORS_DEFAULT) {
    super(
    // Feed a computed signal for the value to `BaseWritableResource`, which will upgrade it to a
    // `WritableSignal` that delegates to `ResourceImpl.set`.
    computed(() => {
      const streamValue = this.state().stream?.();
      if (!streamValue) {
        return defaultValue;
      }
      // Prevents `hasValue()` from throwing an error when a reload happened in the error state
      if (this.state().status === 'loading' && this.error()) {
        return defaultValue;
      }
      if (!isResolved(streamValue)) {
        if (throwErrorsFromValue) {
          throw new ResourceValueError(this.error());
        } else {
          return defaultValue;
        }
      }
      return streamValue.value;
    }, {
      equal
    }));
    this.loaderFn = loaderFn;
    this.equal = equal;
    // Extend `request()` to include a writable reload signal.
    this.extRequest = linkedSignal({
      source: request,
      computation: request => ({
        request,
        reload: 0
      })
    });
    // The main resource state is managed in a `linkedSignal`, which allows the resource to change
    // state instantaneously when the request signal changes.
    this.state = linkedSignal({
      // Whenever the request changes,
      source: this.extRequest,
      // Compute the state of the resource given a change in status.
      computation: (extRequest, previous) => {
        const status = extRequest.request === undefined ? 'idle' : 'loading';
        if (!previous) {
          return {
            extRequest,
            status,
            previousStatus: 'idle',
            stream: undefined
          };
        } else {
          return {
            extRequest,
            status,
            previousStatus: projectStatusOfState(previous.value),
            // If the request hasn't changed, keep the previous stream.
            stream: previous.value.extRequest.request === extRequest.request ? previous.value.stream : undefined
          };
        }
      }
    });
    this.effectRef = effect(this.loadEffect.bind(this), {
      injector,
      manualCleanup: true
    });
    this.pendingTasks = injector.get(_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.PendingTasks);
    // Cancel any pending request when the resource itself is destroyed.
    this.unregisterOnDestroy = injector.get(_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.DestroyRef).onDestroy(() => this.destroy());
  }
  status = /*#__PURE__*/computed(() => projectStatusOfState(this.state()));
  error = /*#__PURE__*/computed(() => {
    const stream = this.state().stream?.();
    return stream && !isResolved(stream) ? stream.error : undefined;
  });
  /**
   * Called either directly via `WritableResource.set` or via `.value.set()`.
   */
  set(value) {
    if (this.destroyed) {
      return;
    }
    const error = untracked(this.error);
    const state = untracked(this.state);
    if (!error) {
      const current = untracked(this.value);
      if (state.status === 'local' && (this.equal ? this.equal(current, value) : current === value)) {
        return;
      }
    }
    // Enter Local state with the user-defined value.
    this.state.set({
      extRequest: state.extRequest,
      status: 'local',
      previousStatus: 'local',
      stream: (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.signal)({
        value
      })
    });
    // We're departing from whatever state the resource was in previously, so cancel any in-progress
    // loading operations.
    this.abortInProgressLoad();
  }
  reload() {
    // We don't want to restart in-progress loads.
    const {
      status
    } = untracked(this.state);
    if (status === 'idle' || status === 'loading') {
      return false;
    }
    // Increment the request reload to trigger the `state` linked signal to switch us to `Reload`
    this.extRequest.update(({
      request,
      reload
    }) => ({
      request,
      reload: reload + 1
    }));
    return true;
  }
  destroy() {
    this.destroyed = true;
    this.unregisterOnDestroy();
    this.effectRef.destroy();
    this.abortInProgressLoad();
    // Destroyed resources enter Idle state.
    this.state.set({
      extRequest: {
        request: undefined,
        reload: 0
      },
      status: 'idle',
      previousStatus: 'idle',
      stream: undefined
    });
  }
  loadEffect() {
    var _this = this;
    return (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const extRequest = _this.extRequest();
      // Capture the previous status before any state transitions. Note that this is `untracked` since
      // we do not want the effect to depend on the state of the resource, only on the request.
      const {
        status: currentStatus,
        previousStatus
      } = untracked(_this.state);
      if (extRequest.request === undefined) {
        // Nothing to load (and we should already be in a non-loading state).
        return;
      } else if (currentStatus !== 'loading') {
        // We're not in a loading or reloading state, so this loading request is stale.
        return;
      }
      // Cancel any previous loading attempts.
      _this.abortInProgressLoad();
      // Capturing _this_ load's pending task in a local variable is important here. We may attempt to
      // resolve it twice:
      //
      //  1. when the loading function promise resolves/rejects
      //  2. when cancelling the loading operation
      //
      // After the loading operation is cancelled, `this.resolvePendingTask` no longer represents this
      // particular task, but this `await` may eventually resolve/reject. Thus, when we cancel in
      // response to (1) below, we need to cancel the locally saved task.
      let resolvePendingTask = _this.resolvePendingTask = _this.pendingTasks.add();
      const {
        signal: abortSignal
      } = _this.pendingController = new AbortController();
      try {
        // The actual loading is run through `untracked` - only the request side of `resource` is
        // reactive. This avoids any confusion with signals tracking or not tracking depending on
        // which side of the `await` they are.
        const stream = yield untracked(() => {
          return _this.loaderFn({
            params: extRequest.request,
            // TODO(alxhub): cleanup after g3 removal of `request` alias.
            request: extRequest.request,
            abortSignal,
            previous: {
              status: previousStatus
            }
          });
        });
        // If this request has been aborted, or the current request no longer
        // matches this load, then we should ignore this resolution.
        if (abortSignal.aborted || untracked(_this.extRequest) !== extRequest) {
          return;
        }
        _this.state.set({
          extRequest,
          status: 'resolved',
          previousStatus: 'resolved',
          stream
        });
      } catch (err) {
        if (abortSignal.aborted || untracked(_this.extRequest) !== extRequest) {
          return;
        }
        _this.state.set({
          extRequest,
          status: 'resolved',
          previousStatus: 'error',
          stream: (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.signal)({
            error: encapsulateResourceError(err)
          })
        });
      } finally {
        // Resolve the pending task now that the resource has a value.
        resolvePendingTask?.();
        resolvePendingTask = undefined;
      }
    })();
  }
  abortInProgressLoad() {
    untracked(() => this.pendingController?.abort());
    this.pendingController = undefined;
    // Once the load is aborted, we no longer want to block stability on its resolution.
    this.resolvePendingTask?.();
    this.resolvePendingTask = undefined;
  }
}
/**
 * Wraps an equality function to handle either value being `undefined`.
 */
function wrapEqualityFn(equal) {
  return (a, b) => a === undefined || b === undefined ? a === b : equal(a, b);
}
function getLoader(options) {
  if (isStreamingResourceOptions(options)) {
    return options.stream;
  }
  return /*#__PURE__*/function () {
    var _ref = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
      try {
        return (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.signal)({
          value: yield options.loader(params)
        });
      } catch (err) {
        return (0,_root_effect_scheduler_mjs__WEBPACK_IMPORTED_MODULE_1__.signal)({
          error: encapsulateResourceError(err)
        });
      }
    });
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}
function isStreamingResourceOptions(options) {
  return !!options.stream;
}
/**
 * Project from a state with `ResourceInternalStatus` to the user-facing `ResourceStatus`
 */
function projectStatusOfState(state) {
  switch (state.status) {
    case 'loading':
      return state.extRequest.reload === 0 ? 'loading' : 'reloading';
    case 'resolved':
      return isResolved(state.stream()) ? 'resolved' : 'error';
    default:
      return state.status;
  }
}
function isResolved(state) {
  return state.error === undefined;
}
function encapsulateResourceError(error) {
  if (error instanceof Error) {
    return error;
  }
  return new ResourceWrappedError(error);
}
class ResourceValueError extends Error {
  constructor(error) {
    super(ngDevMode ? `Resource is currently in an error state (see Error.cause for details): ${error.message}` : error.message, {
      cause: error
    });
  }
}
class ResourceWrappedError extends Error {
  constructor(error) {
    super(ngDevMode ? `Resource returned an error that's not an Error instance: ${String(error)}. Check this error's .cause for the actual error.` : String(error), {
      cause: error
    });
  }
}


/***/ }),

/***/ 57773:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/not_found.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NOT_FOUND: () => (/* binding */ NOT_FOUND),
/* harmony export */   NotFoundError: () => (/* binding */ NotFoundError),
/* harmony export */   getCurrentInjector: () => (/* binding */ getCurrentInjector),
/* harmony export */   inject: () => (/* binding */ inject),
/* harmony export */   isNotFound: () => (/* binding */ isNotFound),
/* harmony export */   setCurrentInjector: () => (/* binding */ setCurrentInjector)
/* harmony export */ });
/**
 * @license Angular v20.1.0
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */

/**
 * Current injector value used by `inject`.
 * - `undefined`: it is an error to call `inject`
 * - `null`: `inject` can be called but there is no injector (limp-mode).
 * - Injector instance: Use the injector for resolution.
 */
let _currentInjector = undefined;
function getCurrentInjector() {
  return _currentInjector;
}
function setCurrentInjector(injector) {
  const former = _currentInjector;
  _currentInjector = injector;
  return former;
}
function inject(token, options) {
  const currentInjector = getCurrentInjector();
  if (!currentInjector) {
    throw new Error('Current injector is not set.');
  }
  if (!token.ɵprov) {
    throw new Error('Token is not an injectable');
  }
  return currentInjector.retrieve(token, options);
}

/**
 * Value returned if the key-value pair couldn't be found in the context
 * hierarchy.
 */
const NOT_FOUND = /*#__PURE__*/Symbol('NotFound');
/**
 * Error thrown when the key-value pair couldn't be found in the context
 * hierarchy. Context can be attached below.
 */
class NotFoundError extends Error {
  name = 'ɵNotFound';
  constructor(message) {
    super(message);
  }
}
/**
 * Type guard for checking if an unknown value is a NotFound.
 */
function isNotFound(e) {
  return e === NOT_FOUND || e?.name === 'ɵNotFound';
}


/***/ }),

/***/ 77542:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/untracked.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLinkedSignal: () => (/* binding */ createLinkedSignal),
/* harmony export */   linkedSignalSetFn: () => (/* binding */ linkedSignalSetFn),
/* harmony export */   linkedSignalUpdateFn: () => (/* binding */ linkedSignalUpdateFn),
/* harmony export */   untracked: () => (/* binding */ untracked)
/* harmony export */ });
/* harmony import */ var _signal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signal.mjs */ 38677);
/**
 * @license Angular v20.1.0
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */


function createLinkedSignal(sourceFn, computationFn, equalityFn) {
  const node = Object.create(LINKED_SIGNAL_NODE);
  node.source = sourceFn;
  node.computation = computationFn;
  if (equalityFn != undefined) {
    node.equal = equalityFn;
  }
  const linkedSignalGetter = () => {
    // Check if the value needs updating before returning it.
    (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.producerUpdateValueVersion)(node);
    // Record that someone looked at this signal.
    (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.producerAccessed)(node);
    if (node.value === _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORED) {
      throw node.error;
    }
    return node.value;
  };
  const getter = linkedSignalGetter;
  getter[_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.SIGNAL] = node;
  if (typeof ngDevMode !== 'undefined' && ngDevMode) {
    const debugName = node.debugName ? ' (' + node.debugName + ')' : '';
    getter.toString = () => `[LinkedSignal${debugName}: ${node.value}]`;
  }
  (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.runPostProducerCreatedFn)(node);
  return getter;
}
function linkedSignalSetFn(node, newValue) {
  (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.producerUpdateValueVersion)(node);
  (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.signalSetFn)(node, newValue);
  (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.producerMarkClean)(node);
}
function linkedSignalUpdateFn(node, updater) {
  (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.producerUpdateValueVersion)(node);
  (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.signalUpdateFn)(node, updater);
  (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.producerMarkClean)(node);
}
// Note: Using an IIFE here to ensure that the spread assignment is not considered
// a side-effect, ending up preserving `LINKED_SIGNAL_NODE` and `REACTIVE_NODE`.
// TODO: remove when https://github.com/evanw/esbuild/issues/3392 is resolved.
const LINKED_SIGNAL_NODE = /* @__PURE__ */(() => {
  return {
    ..._signal_mjs__WEBPACK_IMPORTED_MODULE_0__.REACTIVE_NODE,
    value: _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.UNSET,
    dirty: true,
    error: null,
    equal: _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.defaultEquals,
    kind: 'linkedSignal',
    producerMustRecompute(node) {
      // Force a recomputation if there's no current value, or if the current value is in the
      // process of being calculated (which should throw an error).
      return node.value === _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.UNSET || node.value === _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.COMPUTING;
    },
    producerRecomputeValue(node) {
      if (node.value === _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.COMPUTING) {
        // Our computation somehow led to a cyclic read of itself.
        throw new Error(typeof ngDevMode !== 'undefined' && ngDevMode ? 'Detected cycle in computations.' : '');
      }
      const oldValue = node.value;
      node.value = _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.COMPUTING;
      const prevConsumer = (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerBeforeComputation)(node);
      let newValue;
      try {
        const newSourceValue = node.source();
        const prev = oldValue === _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.UNSET || oldValue === _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORED ? undefined : {
          source: node.sourceValue,
          value: oldValue
        };
        newValue = node.computation(newSourceValue, prev);
        node.sourceValue = newSourceValue;
      } catch (err) {
        newValue = _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORED;
        node.error = err;
      } finally {
        (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerAfterComputation)(node, prevConsumer);
      }
      if (oldValue !== _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.UNSET && newValue !== _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORED && node.equal(oldValue, newValue)) {
        // No change to `valueVersion` - old and new values are
        // semantically equivalent.
        node.value = oldValue;
        return;
      }
      node.value = newValue;
      node.version++;
    }
  };
})();

/**
 * Execute an arbitrary function in a non-reactive (non-tracking) context. The executed function
 * can, optionally, return a value.
 */
function untracked(nonReactiveReadsFn) {
  const prevConsumer = (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.setActiveConsumer)(null);
  // We are not trying to catch any particular errors here, just making sure that the consumers
  // stack is restored in case of errors.
  try {
    return nonReactiveReadsFn();
  } finally {
    (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.setActiveConsumer)(prevConsumer);
  }
}


/***/ }),

/***/ 89204:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ })

}])
//# sourceMappingURL=6693.js.map