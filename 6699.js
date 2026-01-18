(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[6699],{

/***/ 6550
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/_weak_ref-chunk.mjs ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setAlternateWeakRefImpl: () => (/* binding */ setAlternateWeakRefImpl)
/* harmony export */ });
/**
 * @license Angular v21.1.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */

function setAlternateWeakRefImpl(impl) {}


/***/ },

/***/ 29843
/*!***************************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/_effect-chunk.mjs ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_EFFECT_NODE: () => (/* binding */ BASE_EFFECT_NODE),
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
/* harmony export */   finalizeConsumerAfterComputation: () => (/* binding */ finalizeConsumerAfterComputation),
/* harmony export */   getActiveConsumer: () => (/* binding */ getActiveConsumer),
/* harmony export */   isInNotificationPhase: () => (/* binding */ isInNotificationPhase),
/* harmony export */   isReactive: () => (/* binding */ isReactive),
/* harmony export */   producerAccessed: () => (/* binding */ producerAccessed),
/* harmony export */   producerIncrementEpoch: () => (/* binding */ producerIncrementEpoch),
/* harmony export */   producerMarkClean: () => (/* binding */ producerMarkClean),
/* harmony export */   producerNotifyConsumers: () => (/* binding */ producerNotifyConsumers),
/* harmony export */   producerUpdateValueVersion: () => (/* binding */ producerUpdateValueVersion),
/* harmony export */   producerUpdatesAllowed: () => (/* binding */ producerUpdatesAllowed),
/* harmony export */   resetConsumerBeforeComputation: () => (/* binding */ resetConsumerBeforeComputation),
/* harmony export */   runEffect: () => (/* binding */ runEffect),
/* harmony export */   runPostProducerCreatedFn: () => (/* binding */ runPostProducerCreatedFn),
/* harmony export */   runPostSignalSetFn: () => (/* binding */ runPostSignalSetFn),
/* harmony export */   setActiveConsumer: () => (/* binding */ setActiveConsumer),
/* harmony export */   setPostProducerCreatedFn: () => (/* binding */ setPostProducerCreatedFn),
/* harmony export */   setPostSignalSetFn: () => (/* binding */ setPostSignalSetFn),
/* harmony export */   setThrowInvalidWriteToSignalError: () => (/* binding */ setThrowInvalidWriteToSignalError),
/* harmony export */   signalGetFn: () => (/* binding */ signalGetFn),
/* harmony export */   signalSetFn: () => (/* binding */ signalSetFn),
/* harmony export */   signalUpdateFn: () => (/* binding */ signalUpdateFn),
/* harmony export */   untracked: () => (/* binding */ untracked)
/* harmony export */ });
/**
 * @license Angular v21.1.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */

let activeConsumer = null;
let inNotificationPhase = false;
let epoch = 1;
let postProducerCreatedFn = null;
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
  producers: undefined,
  producersTail: undefined,
  consumers: undefined,
  consumersTail: undefined,
  recomputing: false,
  consumerAllowSignalWrites: false,
  consumerIsAlwaysLive: false,
  kind: 'unknown',
  producerMustRecompute: () => false,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {}
};
function producerAccessed(node) {
  if (inNotificationPhase) {
    throw new Error(typeof ngDevMode !== 'undefined' && ngDevMode ? `Assertion error: signal read during notification phase` : '');
  }
  if (activeConsumer === null) {
    return;
  }
  activeConsumer.consumerOnSignalRead(node);
  const prevProducerLink = activeConsumer.producersTail;
  if (prevProducerLink !== undefined && prevProducerLink.producer === node) {
    return;
  }
  let nextProducerLink = undefined;
  const isRecomputing = activeConsumer.recomputing;
  if (isRecomputing) {
    nextProducerLink = prevProducerLink !== undefined ? prevProducerLink.nextProducer : activeConsumer.producers;
    if (nextProducerLink !== undefined && nextProducerLink.producer === node) {
      activeConsumer.producersTail = nextProducerLink;
      nextProducerLink.lastReadVersion = node.version;
      return;
    }
  }
  const prevConsumerLink = node.consumersTail;
  if (prevConsumerLink !== undefined && prevConsumerLink.consumer === activeConsumer && (!isRecomputing || isValidLink(prevConsumerLink, activeConsumer))) {
    return;
  }
  const isLive = consumerIsLive(activeConsumer);
  const newLink = {
    producer: node,
    consumer: activeConsumer,
    nextProducer: nextProducerLink,
    prevConsumer: prevConsumerLink,
    lastReadVersion: node.version,
    nextConsumer: undefined
  };
  activeConsumer.producersTail = newLink;
  if (prevProducerLink !== undefined) {
    prevProducerLink.nextProducer = newLink;
  } else {
    activeConsumer.producers = newLink;
  }
  if (isLive) {
    producerAddLiveConsumer(node, newLink);
  }
}
function producerIncrementEpoch() {
  epoch++;
}
function producerUpdateValueVersion(node) {
  if (consumerIsLive(node) && !node.dirty) {
    return;
  }
  if (!node.dirty && node.lastCleanEpoch === epoch) {
    return;
  }
  if (!node.producerMustRecompute(node) && !consumerPollProducersForChange(node)) {
    producerMarkClean(node);
    return;
  }
  node.producerRecomputeValue(node);
  producerMarkClean(node);
}
function producerNotifyConsumers(node) {
  if (node.consumers === undefined) {
    return;
  }
  const prev = inNotificationPhase;
  inNotificationPhase = true;
  try {
    for (let link = node.consumers; link !== undefined; link = link.nextConsumer) {
      const consumer = link.consumer;
      if (!consumer.dirty) {
        consumerMarkDirty(consumer);
      }
    }
  } finally {
    inNotificationPhase = prev;
  }
}
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
function consumerBeforeComputation(node) {
  if (node) resetConsumerBeforeComputation(node);
  return setActiveConsumer(node);
}
function resetConsumerBeforeComputation(node) {
  node.producersTail = undefined;
  node.recomputing = true;
}
function consumerAfterComputation(node, prevConsumer) {
  setActiveConsumer(prevConsumer);
  if (node) finalizeConsumerAfterComputation(node);
}
function finalizeConsumerAfterComputation(node) {
  node.recomputing = false;
  const producersTail = node.producersTail;
  let toRemove = producersTail !== undefined ? producersTail.nextProducer : node.producers;
  if (toRemove !== undefined) {
    if (consumerIsLive(node)) {
      do {
        toRemove = producerRemoveLiveConsumerLink(toRemove);
      } while (toRemove !== undefined);
    }
    if (producersTail !== undefined) {
      producersTail.nextProducer = undefined;
    } else {
      node.producers = undefined;
    }
  }
}
function consumerPollProducersForChange(node) {
  for (let link = node.producers; link !== undefined; link = link.nextProducer) {
    const producer = link.producer;
    const seenVersion = link.lastReadVersion;
    if (seenVersion !== producer.version) {
      return true;
    }
    producerUpdateValueVersion(producer);
    if (seenVersion !== producer.version) {
      return true;
    }
  }
  return false;
}
function consumerDestroy(node) {
  if (consumerIsLive(node)) {
    let link = node.producers;
    while (link !== undefined) {
      link = producerRemoveLiveConsumerLink(link);
    }
  }
  node.producers = undefined;
  node.producersTail = undefined;
  node.consumers = undefined;
  node.consumersTail = undefined;
}
function producerAddLiveConsumer(node, link) {
  const consumersTail = node.consumersTail;
  const wasLive = consumerIsLive(node);
  if (consumersTail !== undefined) {
    link.nextConsumer = consumersTail.nextConsumer;
    consumersTail.nextConsumer = link;
  } else {
    link.nextConsumer = undefined;
    node.consumers = link;
  }
  link.prevConsumer = consumersTail;
  node.consumersTail = link;
  if (!wasLive) {
    for (let link = node.producers; link !== undefined; link = link.nextProducer) {
      producerAddLiveConsumer(link.producer, link);
    }
  }
}
function producerRemoveLiveConsumerLink(link) {
  const producer = link.producer;
  const nextProducer = link.nextProducer;
  const nextConsumer = link.nextConsumer;
  const prevConsumer = link.prevConsumer;
  link.nextConsumer = undefined;
  link.prevConsumer = undefined;
  if (nextConsumer !== undefined) {
    nextConsumer.prevConsumer = prevConsumer;
  } else {
    producer.consumersTail = prevConsumer;
  }
  if (prevConsumer !== undefined) {
    prevConsumer.nextConsumer = nextConsumer;
  } else {
    producer.consumers = nextConsumer;
    if (!consumerIsLive(producer)) {
      let producerLink = producer.producers;
      while (producerLink !== undefined) {
        producerLink = producerRemoveLiveConsumerLink(producerLink);
      }
    }
  }
  return nextProducer;
}
function consumerIsLive(node) {
  return node.consumerIsAlwaysLive || node.consumers !== undefined;
}
function runPostProducerCreatedFn(node) {
  postProducerCreatedFn?.(node);
}
function setPostProducerCreatedFn(fn) {
  const prev = postProducerCreatedFn;
  postProducerCreatedFn = fn;
  return prev;
}
function isValidLink(checkLink, consumer) {
  const producersTail = consumer.producersTail;
  if (producersTail !== undefined) {
    let link = consumer.producers;
    do {
      if (link === checkLink) {
        return true;
      }
      if (link === producersTail) {
        break;
      }
      link = link.nextProducer;
    } while (link !== undefined);
  }
  return false;
}
function defaultEquals(a, b) {
  return Object.is(a, b);
}
function createComputed(computation, equal) {
  const node = Object.create(COMPUTED_NODE);
  node.computation = computation;
  if (equal !== undefined) {
    node.equal = equal;
  }
  const computed = () => {
    producerUpdateValueVersion(node);
    producerAccessed(node);
    if (node.value === ERRORED) {
      throw node.error;
    }
    return node.value;
  };
  computed[SIGNAL] = node;
  if (typeof ngDevMode !== 'undefined' && ngDevMode) {
    const debugName = node.debugName ? ' (' + node.debugName + ')' : '';
    computed.toString = () => `[Computed${debugName}: ${String(node.value)}]`;
  }
  runPostProducerCreatedFn(node);
  return computed;
}
const UNSET = /* @__PURE__ */Symbol('UNSET');
const COMPUTING = /* @__PURE__ */Symbol('COMPUTING');
const ERRORED = /* @__PURE__ */Symbol('ERRORED');
const COMPUTED_NODE = /* @__PURE__ */(() => {
  return {
    ...REACTIVE_NODE,
    value: UNSET,
    dirty: true,
    error: null,
    equal: defaultEquals,
    kind: 'computed',
    producerMustRecompute(node) {
      return node.value === UNSET || node.value === COMPUTING;
    },
    producerRecomputeValue(node) {
      if (node.value === COMPUTING) {
        throw new Error(typeof ngDevMode !== 'undefined' && ngDevMode ? 'Detected cycle in computations.' : '');
      }
      const oldValue = node.value;
      node.value = COMPUTING;
      const prevConsumer = consumerBeforeComputation(node);
      let newValue;
      let wasEqual = false;
      try {
        newValue = node.computation();
        setActiveConsumer(null);
        wasEqual = oldValue !== UNSET && oldValue !== ERRORED && newValue !== ERRORED && node.equal(oldValue, newValue);
      } catch (err) {
        newValue = ERRORED;
        node.error = err;
      } finally {
        consumerAfterComputation(node, prevConsumer);
      }
      if (wasEqual) {
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
let postSignalSetFn = null;
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
    getter.toString = () => `[Signal${debugName}: ${String(node.value)}]`;
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
function untracked(nonReactiveReadsFn) {
  const prevConsumer = setActiveConsumer(null);
  try {
    return nonReactiveReadsFn();
  } finally {
    setActiveConsumer(prevConsumer);
  }
}
const BASE_EFFECT_NODE = /* @__PURE__ */(() => ({
  ...REACTIVE_NODE,
  consumerIsAlwaysLive: true,
  consumerAllowSignalWrites: true,
  dirty: true,
  kind: 'effect'
}))();
function runEffect(node) {
  node.dirty = false;
  if (node.version > 0 && !consumerPollProducersForChange(node)) {
    return;
  }
  node.version++;
  const prevNode = consumerBeforeComputation(node);
  try {
    node.cleanup();
    node.fn();
  } finally {
    consumerAfterComputation(node, prevNode);
  }
}


/***/ },

/***/ 36699
/*!********************************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/primitives-signals.mjs ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_EFFECT_NODE: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.BASE_EFFECT_NODE),
/* harmony export */   REACTIVE_NODE: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.REACTIVE_NODE),
/* harmony export */   SIGNAL: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SIGNAL),
/* harmony export */   SIGNAL_NODE: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SIGNAL_NODE),
/* harmony export */   consumerAfterComputation: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerAfterComputation),
/* harmony export */   consumerBeforeComputation: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerBeforeComputation),
/* harmony export */   consumerDestroy: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerDestroy),
/* harmony export */   consumerMarkDirty: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerMarkDirty),
/* harmony export */   consumerPollProducersForChange: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerPollProducersForChange),
/* harmony export */   createComputed: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.createComputed),
/* harmony export */   createLinkedSignal: () => (/* reexport safe */ _linked_signal_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.createLinkedSignal),
/* harmony export */   createSignal: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.createSignal),
/* harmony export */   createWatch: () => (/* binding */ createWatch),
/* harmony export */   defaultEquals: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.defaultEquals),
/* harmony export */   finalizeConsumerAfterComputation: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.finalizeConsumerAfterComputation),
/* harmony export */   getActiveConsumer: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.getActiveConsumer),
/* harmony export */   installDevToolsSignalFormatter: () => (/* binding */ installDevToolsSignalFormatter),
/* harmony export */   isInNotificationPhase: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.isInNotificationPhase),
/* harmony export */   isReactive: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   linkedSignalSetFn: () => (/* reexport safe */ _linked_signal_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.linkedSignalSetFn),
/* harmony export */   linkedSignalUpdateFn: () => (/* reexport safe */ _linked_signal_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.linkedSignalUpdateFn),
/* harmony export */   producerAccessed: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.producerAccessed),
/* harmony export */   producerIncrementEpoch: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.producerIncrementEpoch),
/* harmony export */   producerMarkClean: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.producerMarkClean),
/* harmony export */   producerNotifyConsumers: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.producerNotifyConsumers),
/* harmony export */   producerUpdateValueVersion: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.producerUpdateValueVersion),
/* harmony export */   producerUpdatesAllowed: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.producerUpdatesAllowed),
/* harmony export */   resetConsumerBeforeComputation: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.resetConsumerBeforeComputation),
/* harmony export */   runEffect: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.runEffect),
/* harmony export */   runPostProducerCreatedFn: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.runPostProducerCreatedFn),
/* harmony export */   runPostSignalSetFn: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.runPostSignalSetFn),
/* harmony export */   setActiveConsumer: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.setActiveConsumer),
/* harmony export */   setAlternateWeakRefImpl: () => (/* reexport safe */ _weak_ref_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.setAlternateWeakRefImpl),
/* harmony export */   setPostProducerCreatedFn: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.setPostProducerCreatedFn),
/* harmony export */   setPostSignalSetFn: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.setPostSignalSetFn),
/* harmony export */   setThrowInvalidWriteToSignalError: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.setThrowInvalidWriteToSignalError),
/* harmony export */   signalGetFn: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.signalGetFn),
/* harmony export */   signalSetFn: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.signalSetFn),
/* harmony export */   signalUpdateFn: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.signalUpdateFn),
/* harmony export */   untracked: () => (/* reexport safe */ _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.untracked)
/* harmony export */ });
/* harmony import */ var _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_effect-chunk.mjs */ 29843);
/* harmony import */ var _linked_signal_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_linked_signal-chunk.mjs */ 68262);
/* harmony import */ var _weak_ref_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_weak_ref-chunk.mjs */ 6550);
/**
 * @license Angular v21.1.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */





const formatter = {
  header: (sig, config) => {
    if (!isSignal(sig) || config?.ngSkipFormatting) return null;
    let value;
    try {
      value = sig();
    } catch (e) {
      return ['span', `Signal(⚠️ Error)${e.message ? `: ${e.message}` : ''}`];
    }
    const kind = 'computation' in sig[_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SIGNAL] ? 'Computed' : 'Signal';
    const isPrimitive = value === null || !Array.isArray(value) && typeof value !== 'object';
    return ['span', {}, ['span', {}, `${kind}(`], (() => {
      if (isSignal(value)) {
        return formatter.header(value, config);
      } else if (isPrimitive && value !== undefined && typeof value !== 'function') {
        return ['object', {
          object: value
        }];
      } else {
        return prettifyPreview(value);
      }
    })(), ['span', {}, `)`]];
  },
  hasBody: (sig, config) => {
    if (!isSignal(sig)) return false;
    try {
      sig();
    } catch {
      return false;
    }
    return !config?.ngSkipFormatting;
  },
  body: (sig, config) => {
    const color = 'var(--sys-color-primary)';
    return ['div', {
      style: `background: #FFFFFF10; padding-left: 4px; padding-top: 2px; padding-bottom: 2px;`
    }, ['div', {
      style: `color: ${color}`
    }, 'Signal value: '], ['div', {
      style: `padding-left: .5rem;`
    }, ['object', {
      object: sig(),
      config
    }]], ['div', {
      style: `color: ${color}`
    }, 'Signal function: '], ['div', {
      style: `padding-left: .5rem;`
    }, ['object', {
      object: sig,
      config: {
        ...config,
        ngSkipFormatting: true
      }
    }]]];
  }
};
function prettifyPreview(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return `Array(${value.length})`;
  if (value instanceof Element) return `<${value.tagName.toLowerCase()}>`;
  if (value instanceof URL) return `URL`;
  switch (typeof value) {
    case 'undefined':
      {
        return 'undefined';
      }
    case 'function':
      {
        if ('prototype' in value) {
          return 'class';
        } else {
          return '() => {…}';
        }
      }
    case 'object':
      {
        if (value.constructor.name === 'Object') {
          return '{…}';
        } else {
          return `${value.constructor.name} {}`;
        }
      }
    default:
      {
        return ['object', {
          object: value,
          config: {
            ngSkipFormatting: true
          }
        }];
      }
  }
}
function isSignal(value) {
  return value[_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SIGNAL] !== undefined;
}
function installDevToolsSignalFormatter() {
  globalThis.devtoolsFormatters ??= [];
  if (!globalThis.devtoolsFormatters.some(f => f === formatter)) {
    globalThis.devtoolsFormatters.push(formatter);
  }
}
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
      (0,_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerDestroy)(node);
      node.cleanupFn();
      node.fn = null;
      node.schedule = null;
      node.cleanupFn = NOOP_CLEANUP_FN;
    }
  }
  const run = () => {
    if (node.fn === null) {
      return;
    }
    if ((0,_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.isInNotificationPhase)()) {
      throw new Error(typeof ngDevMode !== 'undefined' && ngDevMode ? 'Schedulers cannot synchronously execute watches while scheduling.' : '');
    }
    node.dirty = false;
    if (node.version > 0 && !(0,_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerPollProducersForChange)(node)) {
      return;
    }
    node.version++;
    const prevConsumer = (0,_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerBeforeComputation)(node);
    try {
      node.cleanupFn();
      node.cleanupFn = NOOP_CLEANUP_FN;
      node.fn(registerOnCleanup);
    } finally {
      (0,_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerAfterComputation)(node, prevConsumer);
    }
  };
  node.ref = {
    notify: () => (0,_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerMarkDirty)(node),
    run,
    cleanup: () => node.cleanupFn(),
    destroy: () => destroyWatchNode(node),
    [_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SIGNAL]: node
  };
  return node.ref;
}
const NOOP_CLEANUP_FN = () => {};
const WATCH_NODE = /* @__PURE__ */(() => {
  return {
    ..._effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.REACTIVE_NODE,
    consumerIsAlwaysLive: true,
    consumerAllowSignalWrites: false,
    consumerMarkedDirty: node => {
      if (node.schedule !== null) {
        node.schedule(node.ref);
      }
    },
    cleanupFn: NOOP_CLEANUP_FN
  };
})();
if (typeof ngDevMode === 'undefined' || ngDevMode) {
  /*#__PURE__*/installDevToolsSignalFormatter();
}


/***/ },

/***/ 68262
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/core/fesm2022/_linked_signal-chunk.mjs ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLinkedSignal: () => (/* binding */ createLinkedSignal),
/* harmony export */   linkedSignalSetFn: () => (/* binding */ linkedSignalSetFn),
/* harmony export */   linkedSignalUpdateFn: () => (/* binding */ linkedSignalUpdateFn)
/* harmony export */ });
/* harmony import */ var _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_effect-chunk.mjs */ 29843);
/**
 * @license Angular v21.1.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
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
    (0,_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.producerUpdateValueVersion)(node);
    (0,_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.producerAccessed)(node);
    if (node.value === _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORED) {
      throw node.error;
    }
    return node.value;
  };
  const getter = linkedSignalGetter;
  getter[_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.SIGNAL] = node;
  if (typeof ngDevMode !== 'undefined' && ngDevMode) {
    const debugName = node.debugName ? ' (' + node.debugName + ')' : '';
    getter.toString = () => `[LinkedSignal${debugName}: ${String(node.value)}]`;
  }
  (0,_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.runPostProducerCreatedFn)(node);
  return getter;
}
function linkedSignalSetFn(node, newValue) {
  (0,_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.producerUpdateValueVersion)(node);
  (0,_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.signalSetFn)(node, newValue);
  (0,_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.producerMarkClean)(node);
}
function linkedSignalUpdateFn(node, updater) {
  (0,_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.producerUpdateValueVersion)(node);
  (0,_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.signalUpdateFn)(node, updater);
  (0,_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.producerMarkClean)(node);
}
const LINKED_SIGNAL_NODE = /* @__PURE__ */(() => {
  return {
    ..._effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.REACTIVE_NODE,
    value: _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.UNSET,
    dirty: true,
    error: null,
    equal: _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.defaultEquals,
    kind: 'linkedSignal',
    producerMustRecompute(node) {
      return node.value === _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.UNSET || node.value === _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.COMPUTING;
    },
    producerRecomputeValue(node) {
      if (node.value === _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.COMPUTING) {
        throw new Error(typeof ngDevMode !== 'undefined' && ngDevMode ? 'Detected cycle in computations.' : '');
      }
      const oldValue = node.value;
      node.value = _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.COMPUTING;
      const prevConsumer = (0,_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerBeforeComputation)(node);
      let newValue;
      try {
        const newSourceValue = node.source();
        const prev = oldValue === _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.UNSET || oldValue === _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORED ? undefined : {
          source: node.sourceValue,
          value: oldValue
        };
        newValue = node.computation(newSourceValue, prev);
        node.sourceValue = newSourceValue;
      } catch (err) {
        newValue = _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORED;
        node.error = err;
      } finally {
        (0,_effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.consumerAfterComputation)(node, prevConsumer);
      }
      if (oldValue !== _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.UNSET && newValue !== _effect_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.ERRORED && node.equal(oldValue, newValue)) {
        node.value = oldValue;
        return;
      }
      node.value = newValue;
      node.version++;
    }
  };
})();


/***/ }

}])
//# sourceMappingURL=6699.js.map