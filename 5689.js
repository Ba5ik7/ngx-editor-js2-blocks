(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[5689],{

/***/ 5847:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/weak_ref.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setAlternateWeakRefImpl: () => (/* binding */ setAlternateWeakRefImpl)
/* harmony export */ });
/**
 * @license Angular v20.1.0
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */

function setAlternateWeakRefImpl(impl) {
  // TODO: remove this function
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

/***/ 85689:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/primitives/signals.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   REACTIVE_NODE: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.REACTIVE_NODE),
/* harmony export */   SIGNAL: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.SIGNAL),
/* harmony export */   SIGNAL_NODE: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.SIGNAL_NODE),
/* harmony export */   consumerAfterComputation: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerAfterComputation),
/* harmony export */   consumerBeforeComputation: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerBeforeComputation),
/* harmony export */   consumerDestroy: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerDestroy),
/* harmony export */   consumerMarkDirty: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerMarkDirty),
/* harmony export */   consumerPollProducersForChange: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerPollProducersForChange),
/* harmony export */   createComputed: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.createComputed),
/* harmony export */   createLinkedSignal: () => (/* reexport safe */ _untracked_mjs__WEBPACK_IMPORTED_MODULE_1__.createLinkedSignal),
/* harmony export */   createSignal: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.createSignal),
/* harmony export */   createWatch: () => (/* binding */ createWatch),
/* harmony export */   defaultEquals: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.defaultEquals),
/* harmony export */   getActiveConsumer: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.getActiveConsumer),
/* harmony export */   isInNotificationPhase: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.isInNotificationPhase),
/* harmony export */   isReactive: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   linkedSignalSetFn: () => (/* reexport safe */ _untracked_mjs__WEBPACK_IMPORTED_MODULE_1__.linkedSignalSetFn),
/* harmony export */   linkedSignalUpdateFn: () => (/* reexport safe */ _untracked_mjs__WEBPACK_IMPORTED_MODULE_1__.linkedSignalUpdateFn),
/* harmony export */   producerAccessed: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.producerAccessed),
/* harmony export */   producerIncrementEpoch: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.producerIncrementEpoch),
/* harmony export */   producerMarkClean: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.producerMarkClean),
/* harmony export */   producerNotifyConsumers: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.producerNotifyConsumers),
/* harmony export */   producerUpdateValueVersion: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.producerUpdateValueVersion),
/* harmony export */   producerUpdatesAllowed: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.producerUpdatesAllowed),
/* harmony export */   runPostProducerCreatedFn: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.runPostProducerCreatedFn),
/* harmony export */   runPostSignalSetFn: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.runPostSignalSetFn),
/* harmony export */   setActiveConsumer: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.setActiveConsumer),
/* harmony export */   setAlternateWeakRefImpl: () => (/* reexport safe */ _weak_ref_mjs__WEBPACK_IMPORTED_MODULE_2__.setAlternateWeakRefImpl),
/* harmony export */   setPostProducerCreatedFn: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.setPostProducerCreatedFn),
/* harmony export */   setPostSignalSetFn: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.setPostSignalSetFn),
/* harmony export */   setThrowInvalidWriteToSignalError: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.setThrowInvalidWriteToSignalError),
/* harmony export */   signalGetFn: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.signalGetFn),
/* harmony export */   signalSetFn: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.signalSetFn),
/* harmony export */   signalUpdateFn: () => (/* reexport safe */ _signal_mjs__WEBPACK_IMPORTED_MODULE_0__.signalUpdateFn),
/* harmony export */   untracked: () => (/* reexport safe */ _untracked_mjs__WEBPACK_IMPORTED_MODULE_1__.untracked)
/* harmony export */ });
/* harmony import */ var _signal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../signal.mjs */ 38677);
/* harmony import */ var _untracked_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../untracked.mjs */ 77542);
/* harmony import */ var _weak_ref_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weak_ref.mjs */ 5847);
/**
 * @license Angular v20.1.0
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
      (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerDestroy)(node); // disconnect watcher from the reactive graph
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
    if ((0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.isInNotificationPhase)()) {
      throw new Error(typeof ngDevMode !== 'undefined' && ngDevMode ? 'Schedulers cannot synchronously execute watches while scheduling.' : '');
    }
    node.dirty = false;
    if (node.hasRun && !(0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerPollProducersForChange)(node)) {
      return;
    }
    node.hasRun = true;
    const prevConsumer = (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerBeforeComputation)(node);
    try {
      node.cleanupFn();
      node.cleanupFn = NOOP_CLEANUP_FN;
      node.fn(registerOnCleanup);
    } finally {
      (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerAfterComputation)(node, prevConsumer);
    }
  };
  node.ref = {
    notify: () => (0,_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerMarkDirty)(node),
    run,
    cleanup: () => node.cleanupFn(),
    destroy: () => destroyWatchNode(node),
    [_signal_mjs__WEBPACK_IMPORTED_MODULE_0__.SIGNAL]: node
  };
  return node.ref;
}
const NOOP_CLEANUP_FN = () => {};
// Note: Using an IIFE here to ensure that the spread assignment is not considered
// a side-effect, ending up preserving `COMPUTED_NODE` and `REACTIVE_NODE`.
// TODO: remove when https://github.com/evanw/esbuild/issues/3392 is resolved.
const WATCH_NODE = /* @__PURE__ */(() => {
  return {
    ..._signal_mjs__WEBPACK_IMPORTED_MODULE_0__.REACTIVE_NODE,
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
//# sourceMappingURL=5689.js.map