(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[370],{

/***/ 23775
/*!**************************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_dispose-view-repeater-strategy-chunk.mjs ***!
  \**************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _DisposeViewRepeaterStrategy: () => (/* binding */ _DisposeViewRepeaterStrategy)
/* harmony export */ });
/* harmony import */ var _recycle_view_repeater_strategy_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_recycle-view-repeater-strategy-chunk.mjs */ 24439);

class _DisposeViewRepeaterStrategy {
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const insertContext = itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = viewContainerRef.createEmbeddedView(insertContext.templateRef, insertContext.context, insertContext.index);
        operation = _recycle_view_repeater_strategy_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__._ViewRepeaterOperation.INSERTED;
      } else if (currentIndex == null) {
        viewContainerRef.remove(adjustedPreviousIndex);
        operation = _recycle_view_repeater_strategy_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__._ViewRepeaterOperation.REMOVED;
      } else {
        view = viewContainerRef.get(adjustedPreviousIndex);
        viewContainerRef.move(view, currentIndex);
        operation = _recycle_view_repeater_strategy_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__._ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {}
}


/***/ },

/***/ 24439
/*!**************************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_recycle-view-repeater-strategy-chunk.mjs ***!
  \**************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayDataSource: () => (/* binding */ ArrayDataSource),
/* harmony export */   _RecycleViewRepeaterStrategy: () => (/* binding */ _RecycleViewRepeaterStrategy),
/* harmony export */   _ViewRepeaterOperation: () => (/* binding */ _ViewRepeaterOperation)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _data_source_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_data-source-chunk.mjs */ 33597);


class ArrayDataSource extends _data_source_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.DataSource {
  _data;
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.isObservable)(this._data) ? this._data : (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this._data);
  }
  disconnect() {}
}
var _ViewRepeaterOperation = /*#__PURE__*/function (_ViewRepeaterOperation) {
  _ViewRepeaterOperation[_ViewRepeaterOperation["REPLACED"] = 0] = "REPLACED";
  _ViewRepeaterOperation[_ViewRepeaterOperation["INSERTED"] = 1] = "INSERTED";
  _ViewRepeaterOperation[_ViewRepeaterOperation["MOVED"] = 2] = "MOVED";
  _ViewRepeaterOperation[_ViewRepeaterOperation["REMOVED"] = 3] = "REMOVED";
  return _ViewRepeaterOperation;
}(_ViewRepeaterOperation || {});
class _RecycleViewRepeaterStrategy {
  viewCacheSize = 20;
  _viewCache = [];
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return undefined;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
}


/***/ },

/***/ 33597
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_data-source-chunk.mjs ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSource: () => (/* binding */ DataSource),
/* harmony export */   isDataSource: () => (/* binding */ isDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44866);

class DataSource {}
function isDataSource(value) {
  return value && typeof value.connect === 'function' && !(value instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.ConnectableObservable);
}


/***/ },

/***/ 37989
/*!************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/collections.mjs ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayDataSource: () => (/* reexport safe */ _recycle_view_repeater_strategy_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__.ArrayDataSource),
/* harmony export */   DataSource: () => (/* reexport safe */ _data_source_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.DataSource),
/* harmony export */   SelectionModel: () => (/* reexport safe */ _selection_model_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.SelectionModel),
/* harmony export */   UniqueSelectionDispatcher: () => (/* reexport safe */ _unique_selection_dispatcher_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.UniqueSelectionDispatcher),
/* harmony export */   _DisposeViewRepeaterStrategy: () => (/* reexport safe */ _dispose_view_repeater_strategy_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__._DisposeViewRepeaterStrategy),
/* harmony export */   _RecycleViewRepeaterStrategy: () => (/* reexport safe */ _recycle_view_repeater_strategy_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__._RecycleViewRepeaterStrategy),
/* harmony export */   _ViewRepeaterOperation: () => (/* reexport safe */ _recycle_view_repeater_strategy_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__._ViewRepeaterOperation),
/* harmony export */   getMultipleValuesInSingleSelectionError: () => (/* reexport safe */ _selection_model_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.getMultipleValuesInSingleSelectionError),
/* harmony export */   isDataSource: () => (/* reexport safe */ _data_source_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.isDataSource)
/* harmony export */ });
/* harmony import */ var _unique_selection_dispatcher_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_unique-selection-dispatcher-chunk.mjs */ 57697);
/* harmony import */ var _recycle_view_repeater_strategy_chunk_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_recycle-view-repeater-strategy-chunk.mjs */ 24439);
/* harmony import */ var _data_source_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_data-source-chunk.mjs */ 33597);
/* harmony import */ var _dispose_view_repeater_strategy_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_dispose-view-repeater-strategy-chunk.mjs */ 23775);
/* harmony import */ var _selection_model_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_selection-model-chunk.mjs */ 48405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 44866);








/***/ },

/***/ 48405
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_selection-model-chunk.mjs ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectionModel: () => (/* binding */ SelectionModel),
/* harmony export */   getMultipleValuesInSingleSelectionError: () => (/* binding */ getMultipleValuesInSingleSelectionError)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44866);

class SelectionModel {
  _multiple;
  _emitChanges;
  compareWith;
  _selection = /*#__PURE__*/new Set();
  _deselectedToEmit = [];
  _selectedToEmit = [];
  _selected = null;
  get selected() {
    if (!this._selected) {
      this._selected = Array.from(this._selection.values());
    }
    return this._selected;
  }
  changed = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  constructor(_multiple = false, initiallySelectedValues, _emitChanges = true, compareWith) {
    this._multiple = _multiple;
    this._emitChanges = _emitChanges;
    this.compareWith = compareWith;
    if (initiallySelectedValues && initiallySelectedValues.length) {
      if (_multiple) {
        initiallySelectedValues.forEach(value => this._markSelected(value));
      } else {
        this._markSelected(initiallySelectedValues[0]);
      }
      this._selectedToEmit.length = 0;
    }
  }
  select(...values) {
    this._verifyValueAssignment(values);
    values.forEach(value => this._markSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  deselect(...values) {
    this._verifyValueAssignment(values);
    values.forEach(value => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  setSelection(...values) {
    this._verifyValueAssignment(values);
    const oldValues = this.selected;
    const newSelectedSet = new Set(values.map(value => this._getConcreteValue(value)));
    values.forEach(value => this._markSelected(value));
    oldValues.filter(value => !newSelectedSet.has(this._getConcreteValue(value, newSelectedSet))).forEach(value => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  toggle(value) {
    return this.isSelected(value) ? this.deselect(value) : this.select(value);
  }
  clear(flushEvent = true) {
    this._unmarkAll();
    const changed = this._hasQueuedChanges();
    if (flushEvent) {
      this._emitChangeEvent();
    }
    return changed;
  }
  isSelected(value) {
    return this._selection.has(this._getConcreteValue(value));
  }
  isEmpty() {
    return this._selection.size === 0;
  }
  hasValue() {
    return !this.isEmpty();
  }
  sort(predicate) {
    if (this._multiple && this.selected) {
      this._selected.sort(predicate);
    }
  }
  isMultipleSelection() {
    return this._multiple;
  }
  _emitChangeEvent() {
    this._selected = null;
    if (this._selectedToEmit.length || this._deselectedToEmit.length) {
      this.changed.next({
        source: this,
        added: this._selectedToEmit,
        removed: this._deselectedToEmit
      });
      this._deselectedToEmit = [];
      this._selectedToEmit = [];
    }
  }
  _markSelected(value) {
    value = this._getConcreteValue(value);
    if (!this.isSelected(value)) {
      if (!this._multiple) {
        this._unmarkAll();
      }
      if (!this.isSelected(value)) {
        this._selection.add(value);
      }
      if (this._emitChanges) {
        this._selectedToEmit.push(value);
      }
    }
  }
  _unmarkSelected(value) {
    value = this._getConcreteValue(value);
    if (this.isSelected(value)) {
      this._selection.delete(value);
      if (this._emitChanges) {
        this._deselectedToEmit.push(value);
      }
    }
  }
  _unmarkAll() {
    if (!this.isEmpty()) {
      this._selection.forEach(value => this._unmarkSelected(value));
    }
  }
  _verifyValueAssignment(values) {
    if (values.length > 1 && !this._multiple && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMultipleValuesInSingleSelectionError();
    }
  }
  _hasQueuedChanges() {
    return !!(this._deselectedToEmit.length || this._selectedToEmit.length);
  }
  _getConcreteValue(inputValue, selection) {
    if (!this.compareWith) {
      return inputValue;
    } else {
      selection = selection ?? this._selection;
      for (let selectedValue of selection) {
        if (this.compareWith(inputValue, selectedValue)) {
          return selectedValue;
        }
      }
      return inputValue;
    }
  }
}
function getMultipleValuesInSingleSelectionError() {
  return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}


/***/ },

/***/ 57697
/*!***********************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_unique-selection-dispatcher-chunk.mjs ***!
  \***********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UniqueSelectionDispatcher: () => (/* binding */ UniqueSelectionDispatcher)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);


let UniqueSelectionDispatcher = /*#__PURE__*/(() => {
  class UniqueSelectionDispatcher {
    _listeners = [];
    notify(id, name) {
      for (let listener of this._listeners) {
        listener(id, name);
      }
    }
    listen(listener) {
      this._listeners.push(listener);
      return () => {
        this._listeners = this._listeners.filter(registered => {
          return listener !== registered;
        });
      };
    }
    ngOnDestroy() {
      this._listeners = [];
    }
    static ɵfac = function UniqueSelectionDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UniqueSelectionDispatcher)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UniqueSelectionDispatcher,
      factory: UniqueSelectionDispatcher.ɵfac,
      providedIn: 'root'
    });
  }
  return UniqueSelectionDispatcher;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }

}])
//# sourceMappingURL=370.js.map