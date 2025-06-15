(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[6693],{

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
/* harmony export */   toSignal: () => (/* binding */ toSignal),
/* harmony export */   "ɵtoObservableMicrotask": () => (/* binding */ toObservableMicrotask)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32778);
/**
 * @license Angular v19.1.5
 * (c) 2010-2024 Google LLC. https://angular.io/
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
 * @publicApi
 */
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertInInjectionContext)(takeUntilDestroyed);
    destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef);
  }
  const destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return source => {
    return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(destroyed$));
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
  destroyRef = /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef);
  constructor(source) {
    this.source = source;
    this.destroyRef.onDestroy(() => {
      this.destroyed = true;
    });
  }
  subscribe(callbackFn) {
    if (this.destroyed) {
      throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](953 /* ɵRuntimeErrorCode.OUTPUT_REF_DESTROYED */, ngDevMode && 'Unexpected subscription to destroyed `OutputRef`. ' + 'The owning directive/component is destroyed.');
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
 * @publicApi
 */
function outputFromObservable(observable, opts) {
  ngDevMode && (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertInInjectionContext)(outputFromObservable);
  return new OutputFromObservableRef(observable);
}

/**
 * Converts an Angular output declared via `output()` or `outputFromObservable()`
 * to an observable.
 *
 * You can subscribe to the output via `Observable.subscribe` then.
 *
 * @publicApi
 */
function outputToObservable(ref) {
  const destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵgetOutputDestroyRef"])(ref);
  return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
    // Complete the observable upon directive/component destroy.
    // Note: May be `undefined` if an `EventEmitter` is declared outside
    // of an injection context.
    destroyRef?.onDestroy(() => observer.complete());
    const subscription = ref.subscribe(v => observer.next(v));
    return () => subscription.unsubscribe();
  });
}

/**
 * Exposes the value of an Angular `Signal` as an RxJS `Observable`.
 *
 * The signal's value will be propagated into the `Observable`'s subscribers using an `effect`.
 *
 * `toObservable` must be called in an injection context unless an injector is provided via options.
 *
 * @developerPreview
 */
function toObservable(source, options) {
  !options?.injector && (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertInInjectionContext)(toObservable);
  const injector = options?.injector ?? (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
  const subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
  const watcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => subject.error(err));
      return;
    }
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}
function toObservableMicrotask(source, options) {
  !options?.injector && (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertInInjectionContext)(toObservable);
  const injector = options?.injector ?? (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
  const subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
  const watcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmicrotaskEffect"])(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => subject.error(err));
      return;
    }
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef).onDestroy(() => {
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
 *
 * @developerPreview
 */
function toSignal(source, options) {
  ngDevMode && (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertNotInReactiveContext)(toSignal, 'Invoking `toSignal` causes new subscriptions every time. ' + 'Consider moving `toSignal` outside of the reactive context and read the signal value where needed.');
  const requiresCleanup = !options?.manualCleanup;
  requiresCleanup && !options?.injector && (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertInInjectionContext)(toSignal);
  const cleanupRef = requiresCleanup ? options?.injector?.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef) ?? (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  // Note: T is the Observable value type, and U is the initial value type. They don't have to be
  // the same - the returned signal gives values of type `T`.
  let state;
  if (options?.requireSync) {
    // Initially the signal is in a `NoValue` state.
    state = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
      kind: 0 /* StateKind.NoValue */
    }, {
      equal
    });
  } else {
    // If an initial value was passed, use it. Otherwise, use `undefined` as the initial value.
    state = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
      kind: 1 /* StateKind.Value */,
      value: options?.initialValue
    }, {
      equal
    });
  }
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
      if (options?.rejectErrors) {
        // Kick the error back to RxJS. It will be caught and rethrown in a macrotask, which causes
        // the error to end up as an uncaught exception.
        throw error;
      }
      state.set({
        kind: 2 /* StateKind.Error */,
        error
      });
    }
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });
  if (options?.requireSync && state().kind === 0 /* StateKind.NoValue */) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](601 /* ɵRuntimeErrorCode.REQUIRE_SYNC_WITHOUT_SYNC_EMIT */, (typeof ngDevMode === 'undefined' || ngDevMode) && '`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.');
  }
  // Unsubscribe when the current context is destroyed, if requested.
  cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  // The actual returned signal is a `computed` of the `State` signal, which maps the various states
  // to either values or errors.
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const current = state();
    switch (current.kind) {
      case 1 /* StateKind.Value */:
        return current.value;
      case 2 /* StateKind.Error */:
        throw current.error;
      case 0 /* StateKind.NoValue */:
        // This shouldn't really happen because the error is thrown on creation.
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](601 /* ɵRuntimeErrorCode.REQUIRE_SYNC_WITHOUT_SYNC_EMIT */, (typeof ngDevMode === 'undefined' || ngDevMode) && '`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.');
    }
  }, {
    equal: options?.equal
  });
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 /* StateKind.Value */ && b.kind === 1 /* StateKind.Value */ && userEquality(a.value, b.value);
}

/**
 * Operator which makes the application unstable until the observable emits, complets, errors, or is unsubscribed.
 *
 * Use this operator in observables whose subscriptions are important for rendering and should be included in SSR serialization.
 *
 * @param injector The `Injector` to use during creation. If this is not provided, the current injection context will be used instead (via `inject`).
 *
 * @experimental
 */
function pendingUntilEvent(injector) {
  if (injector === undefined) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertInInjectionContext)(pendingUntilEvent);
    injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
  }
  const taskService = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.PendingTasks);
  return sourceObservable => {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(originalSubscriber => {
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

/**
 * Like `resource` but uses an RxJS based `loader` which maps the request to an `Observable` of the
 * resource's value. Like `firstValueFrom`, only the first emission of the Observable is considered.
 *
 * @experimental
 */
function rxResource(opts) {
  opts?.injector || (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.assertInInjectionContext)(rxResource);
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.resource)({
    ...opts,
    loader: params => {
      const cancelled = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      params.abortSignal.addEventListener('abort', () => cancelled.next());
      // Note: this is identical to `firstValueFrom` which we can't use,
      // because at the time of writing, `core` still supports rxjs 6.x.
      return new Promise((resolve, reject) => {
        opts.loader(params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(cancelled)).subscribe({
          next: resolve,
          error: reject,
          complete: () => reject(new Error('Resource completed before producing a value'))
        });
      });
    }
  });
}

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=6693.js.map