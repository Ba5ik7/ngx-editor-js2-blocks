(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[8070],{

/***/ 38482:
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/weak_ref-BaIq-pgY.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setAlternateWeakRefImpl: () => (/* binding */ setAlternateWeakRefImpl)
/* harmony export */ });
/**
 * @license Angular v20.0.4
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */

function setAlternateWeakRefImpl(impl) {
  // TODO: remove this function
}


/***/ }),

/***/ 85689:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/primitives/signals.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   REACTIVE_NODE: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.REACTIVE_NODE),
/* harmony export */   SIGNAL: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.SIGNAL),
/* harmony export */   SIGNAL_NODE: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.SIGNAL_NODE),
/* harmony export */   consumerAfterComputation: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerAfterComputation),
/* harmony export */   consumerBeforeComputation: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerBeforeComputation),
/* harmony export */   consumerDestroy: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerDestroy),
/* harmony export */   consumerMarkDirty: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerMarkDirty),
/* harmony export */   consumerPollProducersForChange: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerPollProducersForChange),
/* harmony export */   createComputed: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.createComputed),
/* harmony export */   createLinkedSignal: () => (/* reexport safe */ _untracked_DmD_2MlC_mjs__WEBPACK_IMPORTED_MODULE_1__.createLinkedSignal),
/* harmony export */   createSignal: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.createSignal),
/* harmony export */   createWatch: () => (/* binding */ createWatch),
/* harmony export */   defaultEquals: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.defaultEquals),
/* harmony export */   getActiveConsumer: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.getActiveConsumer),
/* harmony export */   isInNotificationPhase: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.isInNotificationPhase),
/* harmony export */   isReactive: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   linkedSignalSetFn: () => (/* reexport safe */ _untracked_DmD_2MlC_mjs__WEBPACK_IMPORTED_MODULE_1__.linkedSignalSetFn),
/* harmony export */   linkedSignalUpdateFn: () => (/* reexport safe */ _untracked_DmD_2MlC_mjs__WEBPACK_IMPORTED_MODULE_1__.linkedSignalUpdateFn),
/* harmony export */   producerAccessed: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.producerAccessed),
/* harmony export */   producerIncrementEpoch: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.producerIncrementEpoch),
/* harmony export */   producerMarkClean: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.producerMarkClean),
/* harmony export */   producerNotifyConsumers: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.producerNotifyConsumers),
/* harmony export */   producerUpdateValueVersion: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.producerUpdateValueVersion),
/* harmony export */   producerUpdatesAllowed: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.producerUpdatesAllowed),
/* harmony export */   runPostProducerCreatedFn: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.runPostProducerCreatedFn),
/* harmony export */   runPostSignalSetFn: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.runPostSignalSetFn),
/* harmony export */   setActiveConsumer: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.setActiveConsumer),
/* harmony export */   setAlternateWeakRefImpl: () => (/* reexport safe */ _weak_ref_BaIq_pgY_mjs__WEBPACK_IMPORTED_MODULE_2__.setAlternateWeakRefImpl),
/* harmony export */   setPostProducerCreatedFn: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.setPostProducerCreatedFn),
/* harmony export */   setPostSignalSetFn: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.setPostSignalSetFn),
/* harmony export */   setThrowInvalidWriteToSignalError: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.setThrowInvalidWriteToSignalError),
/* harmony export */   signalGetFn: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.signalGetFn),
/* harmony export */   signalSetFn: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.signalSetFn),
/* harmony export */   signalUpdateFn: () => (/* reexport safe */ _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.signalUpdateFn),
/* harmony export */   untracked: () => (/* reexport safe */ _untracked_DmD_2MlC_mjs__WEBPACK_IMPORTED_MODULE_1__.untracked)
/* harmony export */ });
/* harmony import */ var _signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../signal-nCiHhWf6.mjs */ 89595);
/* harmony import */ var _untracked_DmD_2MlC_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../untracked-DmD_2MlC.mjs */ 20913);
/* harmony import */ var _weak_ref_BaIq_pgY_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weak_ref-BaIq-pgY.mjs */ 38482);
/**
 * @license Angular v20.0.4
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */





function createWatch(fn, schedule, allowSignalWrites) {
  const node = Object.create(WATCH_NODE);
  if (allowSignalWrites) {
    node.consumerAllowSignalWrites = true;
  }
  node.fn = fn;
  node.schedule = schedule;
  const registerOnCleanup = cleanupFn => {
    node.cleanupFn = cleanupFn;
  };
  function isWatchNodeDestroyed(node) {
    return node.fn === null && node.schedule === null;
  }
  function destroyWatchNode(node) {
    if (!isWatchNodeDestroyed(node)) {
      (0,_signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerDestroy)(node); // disconnect watcher from the reactive graph
      node.cleanupFn();
      // nullify references to the integration functions to mark node as destroyed
      node.fn = null;
      node.schedule = null;
      node.cleanupFn = NOOP_CLEANUP_FN;
    }
  }
  const run = () => {
    if (node.fn === null) {
      // trying to run a destroyed watch is noop
      return;
    }
    if ((0,_signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.isInNotificationPhase)()) {
      throw new Error(typeof ngDevMode !== 'undefined' && ngDevMode ? 'Schedulers cannot synchronously execute watches while scheduling.' : '');
    }
    node.dirty = false;
    if (node.hasRun && !(0,_signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerPollProducersForChange)(node)) {
      return;
    }
    node.hasRun = true;
    const prevConsumer = (0,_signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerBeforeComputation)(node);
    try {
      node.cleanupFn();
      node.cleanupFn = NOOP_CLEANUP_FN;
      node.fn(registerOnCleanup);
    } finally {
      (0,_signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerAfterComputation)(node, prevConsumer);
    }
  };
  node.ref = {
    notify: () => (0,_signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerMarkDirty)(node),
    run,
    cleanup: () => node.cleanupFn(),
    destroy: () => destroyWatchNode(node),
    [_signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.SIGNAL]: node
  };
  return node.ref;
}
const NOOP_CLEANUP_FN = () => {};
// Note: Using an IIFE here to ensure that the spread assignment is not considered
// a side-effect, ending up preserving `COMPUTED_NODE` and `REACTIVE_NODE`.
// TODO: remove when https://github.com/evanw/esbuild/issues/3392 is resolved.
const WATCH_NODE = /* @__PURE__ */(() => {
  return {
    ..._signal_nCiHhWf6_mjs__WEBPACK_IMPORTED_MODULE_0__.REACTIVE_NODE,
    consumerIsAlwaysLive: true,
    consumerAllowSignalWrites: false,
    consumerMarkedDirty: node => {
      if (node.schedule !== null) {
        node.schedule(node.ref);
      }
    },
    hasRun: false,
    cleanupFn: NOOP_CLEANUP_FN
  };
})();


/***/ })

}])
//# sourceMappingURL=8070.js.map