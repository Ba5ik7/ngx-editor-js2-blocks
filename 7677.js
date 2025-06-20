(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[7677],{

/***/ 23879:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@angular-architects/module-federation-runtime/fesm2022/angular-architects-module-federation-runtime.mjs ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getManifest: () => (/* binding */ getManifest),
/* harmony export */   initFederation: () => (/* binding */ initFederation),
/* harmony export */   loadManifest: () => (/* binding */ loadManifest),
/* harmony export */   loadRemoteEntry: () => (/* binding */ loadRemoteEntry),
/* harmony export */   loadRemoteModule: () => (/* binding */ loadRemoteModule),
/* harmony export */   setManifest: () => (/* binding */ setManifest)
/* harmony export */ });
/* harmony import */ var _Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

let config = {};
const containerMap = {};
const remoteMap = {};
let isDefaultScopeInitialized = false;
function lookupExposedModule(_x, _x2) {
  return _lookupExposedModule.apply(this, arguments);
}
function _lookupExposedModule() {
  _lookupExposedModule = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (key, exposedModule) {
    const container = containerMap[key];
    const factory = yield container.get(exposedModule);
    const Module = factory();
    return Module;
  });
  return _lookupExposedModule.apply(this, arguments);
}
function initRemote(_x3, _x4) {
  return _initRemote.apply(this, arguments);
}
function _initRemote() {
  _initRemote = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (container, key) {
    // const container = window[key] as Container;
    // Do we still need to initialize the remote?
    if (remoteMap[key]) {
      return container;
    }
    // Do we still need to initialize the share scope?
    if (!isDefaultScopeInitialized) {
      yield __webpack_require__.I('default');
      isDefaultScopeInitialized = true;
    }
    yield container.init(__webpack_require__.S.default);
    remoteMap[key] = true;
    return container;
  });
  return _initRemote.apply(this, arguments);
}
function loadRemoteEntry(_x5, _x6) {
  return _loadRemoteEntry.apply(this, arguments);
}
function _loadRemoteEntry() {
  _loadRemoteEntry = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (remoteEntryOrOptions, remoteName) {
    if (typeof remoteEntryOrOptions === 'string') {
      const remoteEntry = remoteEntryOrOptions;
      return yield loadRemoteScriptEntry(remoteEntry, remoteName);
    } else if (remoteEntryOrOptions.type === 'script') {
      const options = remoteEntryOrOptions;
      return yield loadRemoteScriptEntry(options.remoteEntry, options.remoteName);
    } else if (remoteEntryOrOptions.type === 'module') {
      const options = remoteEntryOrOptions;
      yield loadRemoteModuleEntry(options.remoteEntry);
    }
  });
  return _loadRemoteEntry.apply(this, arguments);
}
function loadRemoteModuleEntry(_x7) {
  return _loadRemoteModuleEntry.apply(this, arguments);
}
function _loadRemoteModuleEntry() {
  _loadRemoteModuleEntry = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (remoteEntry) {
    if (containerMap[remoteEntry]) {
      return Promise.resolve();
    }
    return yield import(/* webpackIgnore:true */remoteEntry).then(container => {
      initRemote(container, remoteEntry);
      containerMap[remoteEntry] = container;
    });
  });
  return _loadRemoteModuleEntry.apply(this, arguments);
}
function loadRemoteScriptEntry(_x8, _x9) {
  return _loadRemoteScriptEntry.apply(this, arguments);
}
function _loadRemoteScriptEntry() {
  _loadRemoteScriptEntry = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (remoteEntry, remoteName) {
    return new Promise((resolve, reject) => {
      // Is remoteEntry already loaded?
      if (containerMap[remoteName]) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = remoteEntry;
      script.onerror = reject;
      script.onload = () => {
        const container = window[remoteName];
        initRemote(container, remoteName);
        containerMap[remoteName] = container;
        resolve();
      };
      document.body.appendChild(script);
    });
  });
  return _loadRemoteScriptEntry.apply(this, arguments);
}
function loadRemoteModule(_x0, _x1) {
  return _loadRemoteModule.apply(this, arguments);
}
function _loadRemoteModule() {
  _loadRemoteModule = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (optionsOrRemoteName, exposedModule) {
    let loadRemoteEntryOptions;
    let key;
    let remoteEntry;
    let options;
    if (typeof optionsOrRemoteName === 'string') {
      options = {
        type: 'manifest',
        remoteName: optionsOrRemoteName,
        exposedModule: exposedModule
      };
    } else {
      options = optionsOrRemoteName;
    }
    // To support legacy API (< ng 13)
    if (!options.type) {
      const hasManifest = Object.keys(config).length > 0;
      options.type = hasManifest ? 'manifest' : 'script';
    }
    if (options.type === 'manifest') {
      const manifestEntry = config[options.remoteName];
      if (!manifestEntry) {
        throw new Error('Manifest does not contain ' + options.remoteName);
      }
      options = {
        type: manifestEntry.type,
        exposedModule: options.exposedModule,
        remoteEntry: manifestEntry.remoteEntry,
        remoteName: manifestEntry.type === 'script' ? options.remoteName : undefined
      };
      remoteEntry = manifestEntry.remoteEntry;
    } else {
      remoteEntry = options.remoteEntry;
    }
    if (options.type === 'script') {
      loadRemoteEntryOptions = {
        type: 'script',
        remoteEntry: options.remoteEntry,
        remoteName: options.remoteName
      };
      key = options.remoteName;
    } else if (options.type === 'module') {
      loadRemoteEntryOptions = {
        type: 'module',
        remoteEntry: options.remoteEntry
      };
      key = options.remoteEntry;
    }
    if (remoteEntry) {
      yield loadRemoteEntry(loadRemoteEntryOptions);
    }
    return yield lookupExposedModule(key, options.exposedModule);
  });
  return _loadRemoteModule.apply(this, arguments);
}
function setManifest(_x10) {
  return _setManifest.apply(this, arguments);
}
function _setManifest() {
  _setManifest = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (manifest, skipRemoteEntries = false) {
    config = parseConfig(manifest);
    if (!skipRemoteEntries) {
      yield loadRemoteEntries();
    }
  });
  return _setManifest.apply(this, arguments);
}
function getManifest() {
  return config;
}
function initFederation(_x11) {
  return _initFederation.apply(this, arguments);
}
function _initFederation() {
  _initFederation = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (manifest, skipRemoteEntries = false) {
    if (typeof manifest === 'string') {
      return loadManifest(manifest, skipRemoteEntries);
    } else {
      return setManifest(manifest, skipRemoteEntries);
    }
  });
  return _initFederation.apply(this, arguments);
}
function loadManifest(_x12) {
  return _loadManifest.apply(this, arguments);
}
function _loadManifest() {
  _loadManifest = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (configFile, skipRemoteEntries = false) {
    const result = yield fetch(configFile);
    if (!result.ok) {
      throw Error('could not load configFile: ' + configFile);
    }
    config = parseConfig(yield result.json());
    if (!skipRemoteEntries) {
      yield loadRemoteEntries();
    }
  });
  return _loadManifest.apply(this, arguments);
}
function parseConfig(config) {
  const result = {};
  for (const key in config) {
    const value = config[key];
    let entry;
    if (typeof value === 'string') {
      entry = {
        remoteEntry: value,
        type: 'module'
      };
    } else {
      entry = {
        ...value,
        type: value.type || 'module'
      };
    }
    result[key] = entry;
  }
  return result;
}
function loadRemoteEntries() {
  return _loadRemoteEntries.apply(this, arguments);
}
/**
 * Generated bundle index. Do not edit.
 */
function _loadRemoteEntries() {
  _loadRemoteEntries = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    const promises = [];
    for (const key in config) {
      const entry = config[key];
      if (entry.type === 'module') {
        promises.push(loadRemoteEntry({
          type: 'module',
          remoteEntry: entry.remoteEntry
        }));
      } else {
        promises.push(loadRemoteEntry({
          type: 'script',
          remoteEntry: entry.remoteEntry,
          remoteName: key
        }));
      }
    }
    yield Promise.all(promises);
  });
  return _loadRemoteEntries.apply(this, arguments);
}


/***/ }),

/***/ 24398:
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __rewriteRelativeImportExtension: () => (/* binding */ __rewriteRelativeImportExtension),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ }),

/***/ 40623:
/*!******************************************************************************!*\
  !*** ./node_modules/@tmdjr/ngx-editor-js2/fesm2022/tmdjr-ngx-editor-js2.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofocusDirective: () => (/* binding */ AutofocusDirective),
/* harmony export */   CleanPasteDataDirective: () => (/* binding */ CleanPasteDataDirective),
/* harmony export */   ControlAccessorDirective: () => (/* binding */ ControlAccessorDirective),
/* harmony export */   NGX_EDITORJS_OPTIONS: () => (/* binding */ NGX_EDITORJS_OPTIONS),
/* harmony export */   NgxEditorJs2Component: () => (/* binding */ NgxEditorJs2Component),
/* harmony export */   NgxEditorJs2Service: () => (/* binding */ NgxEditorJs2Service),
/* harmony export */   ToolbarFabDirective: () => (/* binding */ ToolbarFabDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 7140);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 49217);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 77947);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ 87351);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 37409);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 85914);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 33316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 76833);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 29757);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ 39633);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/portal */ 35253);


















function ToolbarBlockOptionsComponent_For_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const blockOptionAction_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", blockOptionAction_r2.text, " ");
  }
}
function ToolbarBlockOptionsComponent_For_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const blockOptionAction_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blockOptionAction_r2.icon);
  }
}
function ToolbarBlockOptionsComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarBlockOptionsComponent_For_11_Template_div_click_0_listener() {
      const blockOptionAction_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.handleAction(blockOptionAction_r2.action));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](1, ToolbarBlockOptionsComponent_For_11_Conditional_1_Template, 1, 1)(2, ToolbarBlockOptionsComponent_For_11_Conditional_2_Template, 2, 1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const blockOptionAction_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](blockOptionAction_r2.text ? 1 : 2);
  }
}
function ToolbarBlocksComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ToolbarBlocksComponent_Conditional_5_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarBlocksComponent_Conditional_5_Conditional_2_For_1_Template_mat_list_item_click_0_listener() {
      const block_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.addBlock(block_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", block_r2.name, " ");
  }
}
function ToolbarBlocksComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](0, ToolbarBlocksComponent_Conditional_5_Conditional_2_For_1_Template, 2, 1, "mat-list-item", 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIndex"]);
  }
  if (rf & 2) {
    const filteredBlocks_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](filteredBlocks_r4);
  }
}
function ToolbarBlocksComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](1, ToolbarBlocksComponent_Conditional_5_Conditional_1_Template, 2, 0, "mat-list-item", 4)(2, ToolbarBlocksComponent_Conditional_5_Conditional_2_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.length <= 0 ? 1 : 2);
  }
}
function ToolbarComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "toolbar-blocks", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addBlock", function ToolbarComponent_ng_template_9_Template_toolbar_blocks_addBlock_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.addBlock($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("supportedBlocks", ctx_r2.supportedBlocks());
  }
}
function ToolbarComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "toolbar-block-options", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("handleAction", function ToolbarComponent_ng_template_10_Template_toolbar_block_options_handleAction_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.handleAction($event));
    })("moveBlockPosition", function ToolbarComponent_ng_template_10_Template_toolbar_block_options_moveBlockPosition_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.moveBlockPosition($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockOptionActions", ctx_r2.blockOptionActions());
  }
}
function HeaderBlockComponent_Case_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function HeaderBlockComponent_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_Case_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const sharedHeaderTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", sharedHeaderTemplate_r1);
  }
}
function HeaderBlockComponent_Case_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function HeaderBlockComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_Case_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const sharedHeaderTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", sharedHeaderTemplate_r1);
  }
}
function HeaderBlockComponent_Case_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function HeaderBlockComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_Case_2_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const sharedHeaderTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", sharedHeaderTemplate_r1);
  }
}
function HeaderBlockComponent_Case_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function HeaderBlockComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_Case_3_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const sharedHeaderTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", sharedHeaderTemplate_r1);
  }
}
function HeaderBlockComponent_Case_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function HeaderBlockComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_Case_4_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const sharedHeaderTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", sharedHeaderTemplate_r1);
  }
}
function HeaderBlockComponent_Case_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function HeaderBlockComponent_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBlockComponent_Case_5_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const sharedHeaderTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", sharedHeaderTemplate_r1);
  }
}
function HeaderBlockComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 3);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultValue", (tmp_2_0 = ctx_r1.formGroup().get(ctx_r1.formControlName())) == null ? null : tmp_2_0.value)("actionCallback", ctx_r1.actionCallbackBind)("blockOptionActions", ctx_r1.blockOptionActions())("autofocus", ctx_r1.autofocus())("formControlName", ctx_r1.formControlName())("componentContextPositionIndex", ctx_r1.sortIndex());
  }
}
const _c0 = ["ngxEditor"];
function ToolbarInlineComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarInlineComponent_For_2_Template_div_click_0_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.addInlineTag(item_r2.action));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.icon);
  }
}
function ToolbarInlineComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ToolbarInlineComponent_Conditional_12_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r2.url, $event) || (ctx_r2.url = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarInlineComponent_Conditional_12_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.createLink());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.url);
  }
}
let ControlAccessorDirective = /*#__PURE__*/(() => {
  class ControlAccessorDirective {
    elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    defaultValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    onChange = () => {};
    onTouched = () => {};
    writeValue() {
      this.elementRef.nativeElement.innerHTML = this.defaultValue() || '';
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    onBlur() {
      this.onTouched();
    }
    onInput() {
      this.onChange(this.elementRef.nativeElement.innerHTML);
    }
    static ɵfac = function ControlAccessorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ControlAccessorDirective)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ControlAccessorDirective,
      selectors: [["", "controlAccessor", ""]],
      hostBindings: function ControlAccessorDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ControlAccessorDirective_blur_HostBindingHandler() {
            return ctx.onBlur();
          })("input", function ControlAccessorDirective_input_HostBindingHandler() {
            return ctx.onInput();
          });
        }
      },
      inputs: {
        defaultValue: [1, "defaultValue"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => ControlAccessorDirective),
        multi: true
      }])]
    });
  }
  return ControlAccessorDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let AutofocusDirective = /*#__PURE__*/(() => {
  class AutofocusDirective {
    elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(false);
    ngAfterContentInit() {
      this.autofocus() && this.elementRef.nativeElement.focus?.();
    }
    static ɵfac = function AutofocusDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AutofocusDirective)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AutofocusDirective,
      selectors: [["", "autofocus", ""]],
      inputs: {
        autofocus: [1, "autofocus"]
      }
    });
  }
  return AutofocusDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
var MovePositionActions = /*#__PURE__*/function (MovePositionActions) {
  MovePositionActions["UP"] = "UP";
  MovePositionActions["DOWN"] = "DOWN";
  MovePositionActions["DELETE"] = "DELETE";
  return MovePositionActions;
}(MovePositionActions || {});
let ToolbarBlockOptionsComponent = /*#__PURE__*/(() => {
  class ToolbarBlockOptionsComponent {
    Position = MovePositionActions;
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    handleActionEmitter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)({
      alias: 'handleAction'
    });
    moveBlockPositionEmitter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)({
      alias: 'moveBlockPosition'
    });
    movePosition(action) {
      this.moveBlockPositionEmitter.emit(action);
    }
    handleAction(action) {
      this.handleActionEmitter.emit(action);
    }
    static ɵfac = function ToolbarBlockOptionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolbarBlockOptionsComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarBlockOptionsComponent,
      selectors: [["toolbar-block-options"]],
      inputs: {
        blockOptionActions: [1, "blockOptionActions"]
      },
      outputs: {
        handleActionEmitter: "handleAction",
        moveBlockPositionEmitter: "moveBlockPosition"
      },
      decls: 12,
      vars: 0,
      consts: [[1, "actions-panel", "mat-elevation-z24"], ["matRipple", "", 1, "action-btn", 3, "click"], ["matRipple", "", 1, "action-btn"]],
      template: function ToolbarBlockOptionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarBlockOptionsComponent_Template_div_click_1_listener() {
            return ctx.movePosition(ctx.Position.UP);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_upward");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarBlockOptionsComponent_Template_div_click_4_listener() {
            return ctx.movePosition(ctx.Position.DELETE);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarBlockOptionsComponent_Template_div_click_7_listener() {
            return ctx.movePosition(ctx.Position.DOWN);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "arrow_downward");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](10, ToolbarBlockOptionsComponent_For_11_Template, 3, 1, "div", 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIndex"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.blockOptionActions());
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple],
      styles: ["[_nghost-%COMP%]   .actions-panel[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:1px;width:128px;max-height:128px;border-radius:4px;overflow:auto;background:var(--mat-sys-secondary)}[_nghost-%COMP%]   .actions-panel[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{cursor:pointer;width:42px;height:42px;display:flex;align-items:center;justify-content:center;border-radius:4px;color:var(--mat-sys-on-secondary);background:var(--mat-sys-secondary)}[_nghost-%COMP%]   .actions-panel[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .actions-panel[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:focus{color:var(--mat-sys-secondary);background:var(--mat-sys-on-secondary)}"]
    });
  }
  return ToolbarBlockOptionsComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ToolbarBlocksComponent = /*#__PURE__*/(() => {
  class ToolbarBlocksComponent {
    addBlockEmitter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)({
      alias: 'addBlock'
    });
    supportedBlocks = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)([]);
    supportedBlocks$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__.toObservable)(this.supportedBlocks);
    blockCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl([]);
    filter$ = this.blockCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.startWith)(''));
    filteredBlocks$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([this.supportedBlocks$, this.filter$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(([blocks, filterString]) => {
      if (typeof filterString !== 'string') filterString = '';
      filterString = filterString.replace(/\\/g, '');
      const pattern = filterString?.split('').map(v => `(?=.*${v})`).join('');
      const regex = new RegExp(`${pattern}`, 'gi');
      // return blocks.filter(block => regex.exec(block));
      return blocks.filter(block => block.name.match(regex));
    }));
    addBlock(block) {
      this.addBlockEmitter.emit(block?.component);
    }
    static ɵfac = function ToolbarBlocksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolbarBlocksComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarBlocksComponent,
      selectors: [["toolbar-blocks"]],
      inputs: {
        supportedBlocks: [1, "supportedBlocks"]
      },
      outputs: {
        addBlockEmitter: "addBlock"
      },
      decls: 7,
      vars: 5,
      consts: [[1, "block-list-container", "mat-elevation-z24"], ["appearance", "fill", "color", "accent"], ["matInput", "", 1, "filter-text", 3, "formControl", "autofocus"], [1, "block-list-panel"], ["matRipple", "", "mat-list-item", ""], ["matRipple", "", "mat-list-item", "", 3, "click"]],
      template: function ToolbarBlocksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filter");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](5, ToolbarBlocksComponent_Conditional_5_Template, 3, 1, "mat-list", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.blockCtrl)("autofocus", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.filteredBlocks$)) ? 5 : -1, tmp_2_0);
        }
      },
      dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
      styles: ["[_nghost-%COMP%]   .mat-mdc-list-base[_ngcontent-%COMP%]{padding-top:0;margin-top:-14px}[_nghost-%COMP%]   .block-list-container[_ngcontent-%COMP%]{background:var(--mat-sys-secondary-container);border-radius:4px}[_nghost-%COMP%]   .block-list-panel[_ngcontent-%COMP%]{max-width:280px;max-height:240px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;overflow:auto;color:var(--mat-sys-on-secondary-container)}[_nghost-%COMP%]   mat-list-item[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none}[_nghost-%COMP%]   mat-list-item[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   mat-list-item[_ngcontent-%COMP%]:focus{background:var(--mat-sys-surface-bright)}"]
    });
  }
  return ToolbarBlocksComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ToolbarComponent = /*#__PURE__*/(() => {
  class ToolbarComponent {
    componentContextPositionIndex = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    supportedBlocks = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    actionCallback = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(() => () => {});
    formControlName = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    addBlockCallback = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    moveBlockPositionCallback = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    openBlocks = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
    openBlocksOption = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
    openBlocksList() {
      this.openBlocks.update(prev => !prev);
    }
    openBlockOptionList() {
      this.openBlocksOption.update(prev => !prev);
    }
    moveBlockPosition(action) {
      this.closeLists();
      this.moveBlockPositionCallback()(action, this.componentContextPositionIndex());
    }
    handleAction(action) {
      this.closeLists();
      this.actionCallback()(action);
    }
    addBlock(block) {
      this.closeLists();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(this.addBlockCallback()(block, this.componentContextPositionIndex()));
    }
    closeLists() {
      this.openBlocks.set(false);
      this.openBlocksOption.set(false);
    }
    static ɵfac = function ToolbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolbarComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarComponent,
      selectors: [["toolbar"]],
      inputs: {
        componentContextPositionIndex: [1, "componentContextPositionIndex"],
        supportedBlocks: [1, "supportedBlocks"],
        blockOptionActions: [1, "blockOptionActions"],
        actionCallback: [1, "actionCallback"],
        formControlName: [1, "formControlName"],
        addBlockCallback: [1, "addBlockCallback"],
        moveBlockPositionCallback: [1, "moveBlockPositionCallback"]
      },
      decls: 11,
      vars: 11,
      consts: [["blockListTigger", "cdkOverlayOrigin"], ["blockOptionListTigger", "cdkOverlayOrigin"], [1, "toolbar-buttons-container"], ["cdkOverlayOrigin", "", "matRipple", "", 1, "toolbar-buttons", "mat-elevation-z4", 3, "click"], [1, "material-icons"], ["cdkDragHandle", "", "cdkOverlayOrigin", "", "matRipple", "", 1, "toolbar-buttons", "mat-elevation-z4", 3, "click"], ["cdkConnectedOverlay", "", 3, "overlayOutsideClick", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayBackdropClass"], ["cdkConnectedOverlay", "", 3, "overlayOutsideClick", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayBackdropClass"], [3, "addBlock", "supportedBlocks"], [3, "handleAction", "moveBlockPosition", "blockOptionActions"]],
      template: function ToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.openBlocksList());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_div_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.openBlockOptionList());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "drag_indicator");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ToolbarComponent_ng_template_9_Template, 1, 1, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("overlayOutsideClick", function ToolbarComponent_Template_ng_template_overlayOutsideClick_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.openBlocks.set(false));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ToolbarComponent_ng_template_10_Template, 1, 1, "ng-template", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("overlayOutsideClick", function ToolbarComponent_Template_ng_template_overlayOutsideClick_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.openBlocksOption.set(false));
          });
        }
        if (rf & 2) {
          const blockListTigger_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
          const blockOptionListTigger_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayOrigin", blockListTigger_r5)("cdkConnectedOverlayOpen", ctx.openBlocks())("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayOffsetY", 15)("cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayOrigin", blockOptionListTigger_r6)("cdkConnectedOverlayOpen", ctx.openBlocksOption())("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayOffsetX", -49)("cdkConnectedOverlayOffsetY", 15)("cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop");
        }
      },
      dependencies: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDragHandle, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.CdkConnectedOverlay, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.CdkOverlayOrigin, ToolbarBlockOptionsComponent, ToolbarBlocksComponent],
      styles: ["[_nghost-%COMP%]   .toolbar-buttons-container[_ngcontent-%COMP%]{position:relative;display:flex;gap:10px}[_nghost-%COMP%]   .toolbar-buttons[_ngcontent-%COMP%]{cursor:pointer;width:30px;height:30px;display:flex;justify-content:center;align-items:center;border-radius:4px;margin-bottom:14px;-webkit-user-select:none;user-select:none;color:var(--mat-sys-on-tertiary-container);background:var(--mat-sys-tertiary-container)}[_nghost-%COMP%]   .toolbar-buttons[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .toolbar-buttons[_ngcontent-%COMP%]:focus{background:var(--mat-sys-surface-bright)}@media (min-width: 768px){[_nghost-%COMP%]{position:absolute;margin-left:-80px;top:0}}"]
    });
  }
  return ToolbarComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let BlockMovementService = /*#__PURE__*/(() => {
  class BlockMovementService {
    componentRefMap = new Map();
    clearComponentRefs() {
      this.componentRefMap.clear();
    }
    getNgxEditorJsBlocks() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(Array.from(this.componentRefMap.values()));
    }
    newComponentAttached(componentRef) {
      this.componentRefMap.set(componentRef.instance, componentRef);
    }
    updateComponentIndices(ngxEditor) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.componentRefMap.values()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(componentRef => componentRef.setInput('sortIndex', ngxEditor.indexOf(componentRef.hostView))));
    }
    moveBlockComponentPosition(ngxEditor, action, index) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(Array.from(this.componentRefMap.values())).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(componentRefs => componentRefs.find(componentRef => ngxEditor.indexOf(componentRef.hostView) === index - 1)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(componentRef => !!componentRef), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(componentRef => ({
        componentRef,
        totalComponents: ngxEditor.length - 1,
        currentIndex: ngxEditor.indexOf(componentRef.hostView),
        newIndex: index => action === MovePositionActions.UP ? index - 1 : index + 1
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(({
        componentRef,
        totalComponents,
        currentIndex,
        newIndex
      }) => ({
        componentRef,
        currentIndex,
        newIndex: Math.max(0, Math.min(newIndex(currentIndex), totalComponents))
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(({
        currentIndex,
        newIndex
      }) => currentIndex !== newIndex), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(({
        componentRef,
        newIndex
      }) => {
        ngxEditor.move(componentRef.hostView, newIndex);
        componentRef.setInput('sortIndex', newIndex);
        componentRef.setInput('autofocus', true);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.defaultIfEmpty)(false));
    }
    removeBlockComponent(ngxEditor, index, clear = false) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(Array.from(this.componentRefMap.values())).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(componentRefs => clear || componentRefs.length !== 1), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(componentRefs => componentRefs.find(componentRef => ngxEditor.indexOf(componentRef.hostView) === index - 1)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(componentRef => this.componentRefMap.delete(componentRef?.instance ?? {})), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(successful => successful && ngxEditor.remove(index - 1)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.defaultIfEmpty)(false));
    }
    static ɵfac = function BlockMovementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlockMovementService)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BlockMovementService,
      factory: BlockMovementService.ɵfac,
      providedIn: 'root'
    });
  }
  return BlockMovementService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const createUID = () => Math.random().toString(36).substring(7);
let EditorJsService = /*#__PURE__*/(() => {
  class EditorJsService {
    formBuilder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder);
    blockMovementService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(BlockMovementService);
    componentRefMap = new Map();
    ngxEditor;
    formGroup = this.formBuilder.group({});
    // TODO - Handle this idiomatically
    setNgxEditor(ngxEditor) {
      this.ngxEditor = ngxEditor;
    }
    getBlocks$() {
      return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(this.blockMovementService.getNgxEditorJsBlocks().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(componentRefs => componentRefs.map(({
          instance
        }) => ({
          blockId: instance.formControlName(),
          sortIndex: instance.sortIndex(),
          componentInstanceName: instance.componentInstanceName,
          savedAction: instance.savedAction(),
          dataClean: instance.formGroup().get(instance.formControlName())?.value
        }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(blocks => blocks.sort((a, b) => a.sortIndex - b.sortIndex)))).then(blocks => {
          observer.next(blocks);
          observer.complete();
        });
      });
    }
    createNgxEditorJsBlockWithComponent(blockComponent, componentContextPositionIndex) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
        blockId: createUID(),
        sortIndex: componentContextPositionIndex,
        componentInstanceName: blockComponent.name,
        component: blockComponent,
        // TODO - Force content-type for dataClean? JSON, HTML, etc.
        // TODO - And maybe rename dataClean to just data?
        dataClean: '',
        autofocus: true
      });
    }
    addBlockComponent(ngxEditorJsBlock) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)([this.createFormGroupControl(ngxEditorJsBlock), this.attachComponent(ngxEditorJsBlock), this.blockMovementService.updateComponentIndices(this.ngxEditor)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(() => void 0));
    }
    createFormGroupControl({
      blockId,
      dataClean
    }) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.formBuilder.control(dataClean, [])).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(formControl => this.formGroup.addControl(blockId, formControl)));
    }
    attachComponent({
      component,
      blockId,
      autofocus,
      savedAction,
      sortIndex: index
    }) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(blockId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(controlName => {
        const componentRef = this.ngxEditor.createComponent(component, {
          index
        });
        componentRef.setInput('sortIndex', index);
        componentRef.setInput('formGroup', this.formGroup);
        componentRef.setInput('formControlName', controlName);
        componentRef.setInput('autofocus', autofocus);
        savedAction && componentRef.instance.actionCallback?.(savedAction);
        this.blockMovementService.newComponentAttached(componentRef);
        return componentRef;
      }));
    }
    determineMovePositionAction(action, index, formControlName) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.iif)(() => action === MovePositionActions.DELETE, this.removeBlockComponent(index, formControlName), this.blockMovementService.moveBlockComponentPosition(this.ngxEditor, action, index)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => this.blockMovementService.updateComponentIndices(this.ngxEditor)));
    }
    moveBlockComponentPosition(previousIndex, currentIndex) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.ngxEditor.get(previousIndex)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(viewRef => !!viewRef), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(viewRef => {
        this.ngxEditor.move(viewRef, currentIndex);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => this.blockMovementService.updateComponentIndices(this.ngxEditor)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.defaultIfEmpty)(false));
    }
    removeBlockComponent(index, formControlName, clear = false) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([this.blockMovementService.removeBlockComponent(this.ngxEditor, index, clear), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.formGroup.removeControl(formControlName))]);
    }
    clearBlocks() {
      return this.blockMovementService.getNgxEditorJsBlocks().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(componentRefs => componentRefs.length > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(componentRefs => componentRefs.sort((a, b) => a.instance.sortIndex() - b.instance.sortIndex())), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(componentRefs => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)(Array.from(componentRefs.values()).map(componentRef => this.removeBlockComponent(componentRef.instance.sortIndex() + 1, componentRef.instance.formControlName(), true)))), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => this.blockMovementService.updateComponentIndices(this.ngxEditor)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(() => {
        this.blockMovementService.clearComponentRefs();
        this.ngxEditor.clear();
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.defaultIfEmpty)(false));
    }
    static ɵfac = function EditorJsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditorJsService)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EditorJsService,
      factory: EditorJsService.ɵfac,
      providedIn: 'root'
    });
  }
  return EditorJsService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ToolFabService = /*#__PURE__*/(() => {
  class ToolFabService {
    ngxEditorJs2Service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(NgxEditorJs2Service);
    editorJsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(EditorJsService);
    // I need to explain this in detail so the future me can understand this.
    componentContext = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    toolbarComponentRef$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)({
      componentContext: this.componentContext.asObservable(),
      supportedBlocks: this.ngxEditorJs2Service.supportedBlocks$
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(({
      componentContext
    }) => componentContext !== null), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(({
      componentContext: previous
    }, {
      componentContext: current
    }) => previous.index !== current.index || previous.viewContainerRef !== current.viewContainerRef ? (previous.viewContainerRef.clear(), false) : true), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(({
      componentContext,
      supportedBlocks
    }) => {
      const {
        index,
        viewContainerRef,
        blockOptionActions,
        actionCallback,
        formControlName
      } = componentContext;
      // TODO We will need to create a ToolbarBottomRailComponent to handle the mobile view
      const componentRef = viewContainerRef.createComponent(ToolbarComponent);
      componentRef.setInput('componentContextPositionIndex', index + 1);
      componentRef.setInput('supportedBlocks', supportedBlocks);
      componentRef.setInput('blockOptionActions', blockOptionActions);
      componentRef.setInput('actionCallback', actionCallback);
      componentRef.setInput('formControlName', formControlName);
      componentRef.setInput('addBlockCallback', this.addBlock.bind(this));
      componentRef.setInput('moveBlockPositionCallback', this.movePositionAction.bind(this));
      return componentRef;
    }));
    addBlock(block, index) {
      return this.editorJsService.createNgxEditorJsBlockWithComponent(block, index).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(block => this.editorJsService.addBlockComponent(block)));
    }
    movePositionAction(action, index, formControlName) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(this.editorJsService.determineMovePositionAction(action, index, formControlName));
    }
    static ɵfac = function ToolFabService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolFabService)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ToolFabService,
      factory: ToolFabService.ɵfac,
      providedIn: 'root'
    });
  }
  return ToolFabService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ToolbarFabDirective = /*#__PURE__*/(() => {
  class ToolbarFabDirective {
    toolFabService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ToolFabService);
    viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    actionCallback = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    componentContextPositionIndex = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    formControlName = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    onMouseEnter() {
      this.toolFabService.componentContext.next({
        viewContainerRef: this.viewContainerRef,
        blockOptionActions: this.blockOptionActions() ?? [],
        actionCallback: this.actionCallback(),
        index: this.componentContextPositionIndex(),
        formControlName: this.formControlName()
      });
    }
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
        this.autofocus() && this.onMouseEnter();
      });
    }
    static ɵfac = function ToolbarFabDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolbarFabDirective)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ToolbarFabDirective,
      selectors: [["", "toolbarFab", ""]],
      hostBindings: function ToolbarFabDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ToolbarFabDirective_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          });
        }
      },
      inputs: {
        autofocus: [1, "autofocus"],
        blockOptionActions: [1, "blockOptionActions"],
        actionCallback: [1, "actionCallback"],
        componentContextPositionIndex: [1, "componentContextPositionIndex"],
        formControlName: [1, "formControlName"]
      }
    });
  }
  return ToolbarFabDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CleanPasteDataDirective = /*#__PURE__*/(() => {
  class CleanPasteDataDirective {
    onPaste(event) {
      event.preventDefault();
      const text = event.clipboardData?.getData('text/plain');
      document.execCommand('insertText', false, text);
    }
    static ɵfac = function CleanPasteDataDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CleanPasteDataDirective)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CleanPasteDataDirective,
      selectors: [["", "cleanPasteData", ""]],
      hostBindings: function CleanPasteDataDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function CleanPasteDataDirective_paste_HostBindingHandler($event) {
            return ctx.onPaste($event);
          });
        }
      }
    });
  }
  return CleanPasteDataDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let HeaderBlockComponent = /*#__PURE__*/(() => {
  class HeaderBlockComponent {
    sortIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(0);
    componentInstanceName = 'HeaderBlockComponent';
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(true);
    formGroup = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    formControlName = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)([{
      action: 'h1',
      text: 'H1'
    }, {
      action: 'h2',
      text: 'H2'
    }, {
      action: 'h3',
      text: 'H3'
    }, {
      action: 'h4',
      text: 'H4'
    }, {
      action: 'h5',
      text: 'H5'
    }, {
      action: 'h6',
      text: 'H6'
    }]);
    savedAction = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('h1');
    actionCallbackBind = this.actionCallback.bind(this);
    actionCallback(selectedAction) {
      this.savedAction.set(selectedAction);
    }
    static ɵfac = function HeaderBlockComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HeaderBlockComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderBlockComponent,
      selectors: [["header-block"]],
      hostAttrs: [1, "cdk-drag-animating"],
      inputs: {
        sortIndex: [1, "sortIndex"],
        autofocus: [1, "autofocus"],
        formGroup: [1, "formGroup"],
        formControlName: [1, "formControlName"],
        blockOptionActions: [1, "blockOptionActions"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDrag])],
      decls: 8,
      vars: 2,
      consts: [["sharedHeaderTemplate", ""], [3, "formGroup"], [4, "ngTemplateOutlet"], ["controlAccessor", "", "cleanPasteData", "", "contentEditable", "", "toolbarFab", "", 3, "defaultValue", "actionCallback", "blockOptionActions", "autofocus", "formControlName", "componentContextPositionIndex"]],
      template: function HeaderBlockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](0, HeaderBlockComponent_Case_0_Template, 2, 1, "h1")(1, HeaderBlockComponent_Case_1_Template, 2, 1, "h2")(2, HeaderBlockComponent_Case_2_Template, 2, 1, "h3")(3, HeaderBlockComponent_Case_3_Template, 2, 1, "h4")(4, HeaderBlockComponent_Case_4_Template, 2, 1, "h5")(5, HeaderBlockComponent_Case_5_Template, 2, 1, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderBlockComponent_ng_template_6_Template, 1, 6, "ng-template", 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_1_0 = ctx.savedAction()) === "h1" ? 0 : tmp_1_0 === "h2" ? 1 : tmp_1_0 === "h3" ? 2 : tmp_1_0 === "h4" ? 3 : tmp_1_0 === "h5" ? 4 : tmp_1_0 === "h6" ? 5 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup());
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, ControlAccessorDirective, AutofocusDirective, ToolbarFabDirective, CleanPasteDataDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet],
      styles: ["[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]   :is(h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]){margin:0}[_nghost-%COMP%]   :is(h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%])   span[_ngcontent-%COMP%]{display:block;line-height:inherit}[_nghost-%COMP%]   h1[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font:var(--mat-sys-display-large)}[_nghost-%COMP%]   h2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font:var(--mat-sys-display-medium)}[_nghost-%COMP%]   h3[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font:var(--mat-sys-display-small)}[_nghost-%COMP%]   h4[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font:var(--mat-sys-headline-large)}[_nghost-%COMP%]   h5[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font:var(--mat-sys-headline-medium)}[_nghost-%COMP%]   h6[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font:var(--mat-sys-headline-small)}"]
    });
  }
  return HeaderBlockComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ParagraphBlockComponent = /*#__PURE__*/(() => {
  class ParagraphBlockComponent {
    sortIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(0);
    componentInstanceName = 'ParagraphBlockComponent';
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(true);
    formGroup = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    formControlName = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)([{
      action: 'small',
      icon: 'density_small'
    }, {
      action: 'medium',
      icon: 'density_medium'
    }, {
      action: 'large',
      icon: 'density_large'
    }, {
      action: 'title-small',
      text: 'TS'
    }, {
      action: 'title-medium',
      text: 'TM'
    }, {
      action: 'title-large',
      text: 'TL'
    }]);
    savedAction = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('medium');
    actionCallbackBind = this.actionCallback.bind(this);
    actionCallback(action) {
      this.savedAction.update(() => action);
    }
    static ɵfac = function ParagraphBlockComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ParagraphBlockComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ParagraphBlockComponent,
      selectors: [["paragraph-block"]],
      hostAttrs: [1, "cdk-drag-animating"],
      inputs: {
        sortIndex: [1, "sortIndex"],
        autofocus: [1, "autofocus"],
        formGroup: [1, "formGroup"],
        formControlName: [1, "formControlName"],
        blockOptionActions: [1, "blockOptionActions"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDrag])],
      decls: 2,
      vars: 8,
      consts: [[3, "formGroup"], ["controlAccessor", "", "contentEditable", "", "toolbarFab", "", "cleanPasteData", "", 3, "ngClass", "defaultValue", "actionCallback", "autofocus", "blockOptionActions", "formControlName", "componentContextPositionIndex"]],
      template: function ParagraphBlockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.savedAction())("defaultValue", (tmp_2_0 = ctx.formGroup().get(ctx.formControlName())) == null ? null : tmp_2_0.value)("actionCallback", ctx.actionCallbackBind)("autofocus", ctx.autofocus())("blockOptionActions", ctx.blockOptionActions())("formControlName", ctx.formControlName())("componentContextPositionIndex", ctx.sortIndex());
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, ControlAccessorDirective, AutofocusDirective, ToolbarFabDirective, CleanPasteDataDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass],
      styles: ["[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]   .small[_ngcontent-%COMP%]{font:var(--mat-sys-body-small)}[_nghost-%COMP%]   .medium[_ngcontent-%COMP%]{font:var(--mat-sys-body-medium)}[_nghost-%COMP%]   .large[_ngcontent-%COMP%]{font:var(--mat-sys-body-large)}[_nghost-%COMP%]   .title-small[_ngcontent-%COMP%]{font:var(--mat-sys-title-small)}[_nghost-%COMP%]   .title-medium[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium)}[_nghost-%COMP%]   .title-large[_ngcontent-%COMP%]{font:var(--mat-sys-title-large)}"]
    });
  }
  return ParagraphBlockComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const NGX_EDITORJS_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NGX_EDITORJS_OPTIONS');
let NgxEditorJs2Service = /*#__PURE__*/(() => {
  class NgxEditorJs2Service {
    editorJsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(EditorJsService);
    consumerSupportedBlocks = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(NGX_EDITORJS_OPTIONS, {
      optional: true
    })?.consumerSupportedBlocks ?? []);
    internalSupportedBlocks = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([{
      name: 'Paragraph',
      component: ParagraphBlockComponent,
      componentInstanceName: 'ParagraphBlockComponent'
    }, {
      name: 'Header',
      component: HeaderBlockComponent,
      componentInstanceName: 'HeaderBlockComponent'
    }]);
    supportedBlocks$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([this.internalSupportedBlocks.asObservable(), this.consumerSupportedBlocks.asObservable()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(([internal, consumer]) => [...internal, ...consumer]));
    blocksToLoad = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    loadBlocks$ = this.blocksToLoad.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.delay)(0), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.exhaustMap)(blocks => this.clearBlocksFromEditorJs(blocks)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(([blocks]) => this.determineToloadDefaultBlocks(blocks)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(blocks => this.removeDuplicateBlocksWithSameIds(blocks)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(blocks => this.sortBlocks(blocks)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(blocks => this.combineSupportBlocks(blocks)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(([blocks, supportedBlocks]) => this.createALookupMapForSupportedBlocks(blocks, supportedBlocks)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(({
      blocks,
      supportedBlocksMap
    }) => this.findAndMarshalBlocksComponent(blocks, supportedBlocksMap)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(blocks => this.addBlocksToEditorJs(blocks).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(() => blocks))));
    clearBlocksFromEditorJs(blocks) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)([(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(blocks), this.editorJsService.clearBlocks()]);
    }
    determineToloadDefaultBlocks(blocks) {
      return blocks.length > 0 ? blocks : this.loadDefaultBlocks();
    }
    loadDefaultBlocks() {
      return [{
        blockId: 'tmdjr',
        sortIndex: 0,
        componentInstanceName: 'HeaderBlockComponent',
        dataClean: "Let's get started... 🚀",
        savedAction: 'h1'
      }];
    }
    removeDuplicateBlocksWithSameIds(blocks) {
      return Array.from(new Map(blocks.map(block => [block.blockId, block])).values());
    }
    sortBlocks(blocks) {
      return blocks.sort((a, b) => a.sortIndex - b.sortIndex);
    }
    combineSupportBlocks(blocks) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(blocks), this.supportedBlocks$]);
    }
    createALookupMapForSupportedBlocks(blocks, supportedBlocks) {
      return {
        blocks,
        supportedBlocksMap: new Map(supportedBlocks.map(sb => [sb.componentInstanceName, sb.component]))
      };
    }
    findAndMarshalBlocksComponent(blocks, supportedBlocksMap) {
      return blocks.map(block => ({
        ...block,
        component: supportedBlocksMap.get(block.componentInstanceName) ?? HeaderBlockComponent
      }));
    }
    addBlocksToEditorJs(blocks) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)(blocks.map(block => this.editorJsService.addBlockComponent(block)));
    }
    static ɵfac = function NgxEditorJs2Service_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgxEditorJs2Service)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgxEditorJs2Service,
      factory: NgxEditorJs2Service.ɵfac,
      providedIn: 'root'
    });
  }
  return NgxEditorJs2Service;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let EditorJsComponent = /*#__PURE__*/(() => {
  class EditorJsComponent {
    editorJsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(EditorJsService);
    ngxEditorJs2Service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(NgxEditorJs2Service);
    bootstrapEditorJs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    blocks = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required({
      transform: value => this.ngxEditorJs2Service.blocksToLoad.next(value)
    });
    ngxEditor = _angular_core__WEBPACK_IMPORTED_MODULE_0__.viewChild.required('ngxEditor', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    });
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
        this.editorJsService.setNgxEditor(this.ngxEditor());
      });
    }
    // * DEBUGGING
    // ngOnInit() {
    //   this.editorJsService.formGroup.valueChanges.subscribe((value) => {
    //     console.log('[formGroup.value] : ', value);
    //   });
    //   this.editorJsService.blockComponents$.subscribe((components) => {
    //     console.log('[components] : ', components);
    //   });
    // }
    drop(event) {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(this.editorJsService.moveBlockComponentPosition(event.previousIndex, event.currentIndex)).then(() => {
        // DRAG ANIMATION HOT FIX
        // Wait for Angular to update the DOM, then remove the animation class
        requestAnimationFrame(() => {
          document.querySelectorAll('.cdk-drag-animating').forEach(el => {
            const element = el;
            element.classList.remove('cdk-drag-animating'); // Ensure old class is removed
            void element.offsetWidth; // Force reflow
            element.classList.add('cdk-drag-animating'); // Re-add for next drag
          });
        });
      });
    }
    static ɵfac = function EditorJsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditorJsComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditorJsComponent,
      selectors: [["editor-js"]],
      viewQuery: function EditorJsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuerySignal"](ctx.ngxEditor, _c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryAdvance"]();
        }
      },
      inputs: {
        bootstrapEditorJs: [1, "bootstrapEditorJs"],
        blocks: [1, "blocks"]
      },
      decls: 3,
      vars: 0,
      consts: [["ngxEditor", ""], ["cdkDropList", "", 1, "block-list", 3, "cdkDropListDropped"]],
      template: function EditorJsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function EditorJsComponent_Template_div_cdkDropListDropped_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.drop($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, null, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDropList],
      styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .block-list[_ngcontent-%COMP%]{min-height:60px}"]
    });
  }
  return EditorJsComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ToolbarInlineComponent = /*#__PURE__*/(() => {
  class ToolbarInlineComponent {
    // @Input() selection!: Selection;
    selection = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    closeOverlayEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2);
    url = '';
    showURLInputField = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
    savedRanges = [];
    options = [{
      icon: 'format_bold',
      action: 'bold'
    }, {
      icon: 'format_italic',
      action: 'italic'
    }, {
      icon: 'format_underlined',
      action: 'underline'
    }, {
      icon: 'strikethrough_s',
      action: 'strikethrough'
    }, {
      icon: 'format_list_bulleted',
      action: 'insertUnorderedList'
    }, {
      icon: 'format_list_numbered',
      action: 'insertOrderedList'
    }, {
      icon: 'highlight',
      action: 'highlightColor'
    }, {
      icon: 'format_align_left',
      action: 'justifyLeft'
    }, {
      icon: 'format_align_center',
      action: 'justifyCenter'
    }, {
      icon: 'format_align_right',
      action: 'justifyRight'
    }, {
      icon: 'format_align_justify',
      action: 'justifyFull'
    }];
    addInlineTag(tag) {
      // https://stackoverflow.com/questions/60581285/execcommand-is-now-obsolete-whats-the-alternative
      document.execCommand(tag);
      this.closeOverlayEmitter.emit();
    }
    addClassTag(tag, className) {
      const range = this.selection().getRangeAt(0);
      const element = this.renderer.createElement(tag);
      element.className = className ?? '';
      element.innerHTML = range.toString();
      range.deleteContents();
      range.insertNode(element);
      this.closeOverlayEmitter.emit();
    }
    clearTags() {
      document.execCommand('removeFormat');
      document.execCommand('unlink');
      this.closeOverlayEmitter.emit();
    }
    openUrlInput() {
      this.savedRanges.push(this.selection().getRangeAt(0));
      this.showURLInputField.set(true);
    }
    createLink() {
      this.selection().removeAllRanges();
      this.selection().addRange(this.savedRanges.pop());
      document.execCommand('createLink', false, this.url);
      this.closeOverlayEmitter.emit();
    }
    static ɵfac = function ToolbarInlineComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolbarInlineComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarInlineComponent,
      selectors: [["toolbar-inline"]],
      hostAttrs: [1, "mat-elevation-z24"],
      inputs: {
        selection: [1, "selection"]
      },
      outputs: {
        closeOverlayEmitter: "closeOverlay"
      },
      decls: 13,
      vars: 1,
      consts: [[1, "panel"], [1, "inline-option"], [1, "inline-option", 3, "click"], ["type", "text", "placeholder", "Enter URL", 1, "block-option-input", 3, "ngModelChange", "ngModel"]],
      template: function ToolbarInlineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](1, ToolbarInlineComponent_For_2_Template, 3, 1, "div", 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIndex"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarInlineComponent_Template_div_click_3_listener() {
            return ctx.addClassTag("code", "inline-code");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarInlineComponent_Template_div_click_6_listener() {
            return ctx.openUrlInput();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "insert_link");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarInlineComponent_Template_div_click_9_listener() {
            return ctx.clearTags();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "format_clear");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](12, ToolbarInlineComponent_Conditional_12_Template, 5, 1, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.options);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.showURLInputField() ? 12 : -1);
        }
      },
      dependencies: [_angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
      styles: ["[_nghost-%COMP%]{color:var(--mat-sys-on-secondary);background:var(--mat-sys-secondary);border-radius:8px}[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]{display:flex;width:230px;flex-wrap:wrap;gap:1px}[_nghost-%COMP%]   .inline-option[_ngcontent-%COMP%]{cursor:pointer;width:32px;height:32px;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .block-option-input[_ngcontent-%COMP%]{width:197px;height:32px;border:none;outline:none;color:var(--mat-sys-on-secondary);background-color:transparent;box-sizing:border-box}"]
    });
  }
  return ToolbarInlineComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ToolbarInlineService = /*#__PURE__*/(() => {
  class ToolbarInlineService {
    overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay);
    overlayRef;
    determineToDisplayInlineToolbarBlock(_event) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(window.getSelection()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(selection => selection !== null), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(selection => selection.rangeCount > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(selection => selection.toString().length > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(selection => selection.toString() !== ''), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(() => this.overlayRef?.hasAttached() && this.overlayRef.dispose()),
      // So hacky tired to do this properly
      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(selection => ({
        selection,
        parant: this.getSelectionParent(selection)
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(({
        parant
      }) => this.isSelectionInABlock(parant)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.exhaustMap)(({
        selection
      }) => this.attachInlineToolbar(selection)));
    }
    getSelectionParent(selection) {
      const range = selection.getRangeAt(0);
      return range.commonAncestorContainer.nodeType === Node.ELEMENT_NODE ? range.commonAncestorContainer : range.commonAncestorContainer.parentElement;
    }
    isSelectionInABlock(target) {
      // ! TODO: This is a hacky way to determine if the selection is in a block
      // ! Need to also check if the block wants to display the inline toolbar
      return !!target && (target.closest('.no-toolbar-inline') !== null ? false : target.closest('ngx-editor-js2') !== null ? true : false);
    }
    attachInlineToolbar(selection) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(selection.getRangeAt(0)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(range => range.getBoundingClientRect()), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(selectionRect => this.createOverlay(selectionRect)),
      // So hacky tired to do this properly
      // passing the refs down the pipe adds a bug
      // user selects text with a drag
      // (mousedown → mousemove → wait → mousemove → mouseup)
      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(overlayRef => this.overlayRef = overlayRef), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(overlayRef => {
        const inlineToolbar = overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.ComponentPortal(ToolbarInlineComponent));
        inlineToolbar.setInput('selection', selection);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(overlayRef.backdropClick(), inlineToolbar.instance.closeOverlayEmitter).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(() => overlayRef.dispose()), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(() => selection.removeAllRanges())));
        return true;
      }));
    }
    createOverlay(selectionRect) {
      return this.overlay.create({
        hasBackdrop: true,
        backdropClass: 'cdk-overlay-transparent-backdrop',
        positionStrategy: this.overlay.position().flexibleConnectedTo(selectionRect).withPositions([{
          offsetY: 8,
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        }])
      });
    }
    static ɵfac = function ToolbarInlineService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToolbarInlineService)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ToolbarInlineService,
      factory: ToolbarInlineService.ɵfac,
      providedIn: 'root'
    });
  }
  return ToolbarInlineService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NgxEditorJs2Component = /*#__PURE__*/(() => {
  class NgxEditorJs2Component {
    inlineToolbarSerivce = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ToolbarInlineService);
    editorJsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(EditorJsService);
    ngxEditorJs2Service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(NgxEditorJs2Service);
    blocks = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)([]);
    blocksRequested = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    requestBlocks = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required({
      transform: value => value && this.blocksRequested.emit(this.editorJsService.getBlocks$())
    });
    bootstrapEditorJs$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ToolFabService).toolbarComponentRef$, this.ngxEditorJs2Service.loadBlocks$, (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'selectionchange').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(event => this.inlineToolbarSerivce.determineToDisplayInlineToolbarBlock(event)))]);
    static ɵfac = function NgxEditorJs2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgxEditorJs2Component)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxEditorJs2Component,
      selectors: [["ngx-editor-js2"]],
      inputs: {
        blocks: [1, "blocks"],
        requestBlocks: [1, "requestBlocks"]
      },
      outputs: {
        blocksRequested: "blocksRequested"
      },
      decls: 2,
      vars: 4,
      consts: [[3, "blocks", "bootstrapEditorJs"]],
      template: function NgxEditorJs2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "editor-js", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blocks", ctx.blocks())("bootstrapEditorJs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.bootstrapEditorJs$));
        }
      },
      dependencies: [EditorJsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
      encapsulation: 2
    });
  }
  return NgxEditorJs2Component;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of ngx-editor-js2
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 67081:
/*!*************************************************************************!*\
  !*** ./node_modules/@angular-architects/module-federation/src/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ 24398);
tslib_1.__exportStar(__webpack_require__(/*! @angular-architects/module-federation-runtime */ 23879), exports);

/***/ }),

/***/ 87677:
/*!*************************************************************************************!*\
  !*** ./dist/ngx-editor-js2-mfe-loader/fesm2022/tmdjr-ngx-editor-js2-mfe-loader.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxEditorJs2MfeLoaderComponent: () => (/* binding */ NgxEditorJs2MfeLoaderComponent)
/* harmony export */ });
/* harmony import */ var _Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular-architects/module-federation */ 67081);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 77947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 85914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 27940);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 7140);
/* harmony import */ var _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tmdjr/ngx-editor-js2 */ 40623);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 33316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 33977);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 76833);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 29757);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 37409);

















function MfeLoaderConfigComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](vm_r2.configFormErrorMessages["remoteName"]);
  }
}
function MfeLoaderConfigComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](vm_r2.configFormErrorMessages["url"]);
  }
}
function MfeLoaderConfigComponent_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](vm_r2.configFormErrorMessages["exposedModule"]);
  }
}
function MfeLoaderConfigComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0)(1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "MFE Remote Configurations");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field")(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "MFE Remote Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](7, MfeLoaderConfigComponent_Conditional_0_Conditional_7_Template, 2, 1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field")(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Remote URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](12, MfeLoaderConfigComponent_Conditional_0_Conditional_12_Template, 2, 1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Exposed Module");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](17, MfeLoaderConfigComponent_Conditional_0_Conditional_17_Template, 2, 1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 5)(19, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MfeLoaderConfigComponent_Conditional_0_Template_button_click_19_listener() {
      const vm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.updateMfeURL(vm_r2.mfeLoaderConfigForm));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MfeLoaderConfigComponent_Conditional_0_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.closeConfig());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const vm_r2 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", vm_r2.mfeLoaderConfigForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](((tmp_3_0 = vm_r2.mfeLoaderConfigForm.get("remoteName")) == null ? null : tmp_3_0.errors) ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](((tmp_4_0 = vm_r2.mfeLoaderConfigForm.get("url")) == null ? null : tmp_4_0.errors) ? 12 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](((tmp_5_0 = vm_r2.mfeLoaderConfigForm.get("exposedModule")) == null ? null : tmp_5_0.errors) ? 17 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", vm_r2.mfeLoaderConfigForm.invalid);
  }
}
const _c0 = ["mfeHost"];
function NgxEditorJs2MfeLoaderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NgxEditorJs2MfeLoaderComponent_Conditional_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openEditUrlOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.savedAction());
  }
}
function NgxEditorJs2MfeLoaderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mfe-loader-config", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mfeValue", function NgxEditorJs2MfeLoaderComponent_Conditional_3_Template_mfe_loader_config_mfeValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.updateMfeRemote($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r1.value());
  }
}
let MfeLoaderConfigComponent = /*#__PURE__*/(() => {
  class MfeLoaderConfigComponent {
    formBuilder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder);
    value = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)({
      url: '',
      remoteName: '',
      exposedModule: ''
    });
    value$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.toObservable)(this.value);
    mfeValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.output)();
    viewModel$ = this.value$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(value => ({
      mfeLoaderConfigForm: this.formBuilder.group({
        url: [value.url, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        remoteName: [value.remoteName, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        exposedModule: [value.exposedModule, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
      }),
      errorMessages: {
        required: 'Required'
      },
      configFormErrorMessages: {
        url: '',
        remoteName: '',
        exposedModule: ''
      }
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(viewModel => this.watchStatusChanges(viewModel).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(null), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.withLatestFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(viewModel)), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(([_status, vm]) => vm))));
    watchStatusChanges(viewModel) {
      return viewModel.mfeLoaderConfigForm.statusChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.setErrorsMessages(viewModel)));
    }
    updateMfeURL(mfeLoaderConfigForm) {
      this.mfeValue.emit(mfeLoaderConfigForm.value);
    }
    closeConfig() {
      this.mfeValue.emit(this.value().url ? this.value() : {
        url: '',
        remoteName: '',
        exposedModule: ''
      });
    }
    // ! Quick and Drity way to set error messages
    // ! Breaks all my believes in "clean code"
    setErrorsMessages({
      mfeLoaderConfigForm,
      configFormErrorMessages,
      errorMessages
    }) {
      Object.keys(mfeLoaderConfigForm.controls).forEach(element => {
        const errors = mfeLoaderConfigForm.get(element)?.errors;
        if (errors) {
          const error = Object.keys(errors)[0];
          configFormErrorMessages[element] = errorMessages[error];
        }
      });
    }
    static ɵfac = function MfeLoaderConfigComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MfeLoaderConfigComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MfeLoaderConfigComponent,
      selectors: [["mfe-loader-config"]],
      inputs: {
        value: [1, "value"]
      },
      outputs: {
        mfeValue: "mfeValue"
      },
      decls: 2,
      vars: 3,
      consts: [[3, "formGroup"], ["mat-dialog-title", ""], ["matInput", "", "type", "text", "formControlName", "remoteName"], ["matInput", "", "type", "text", "formControlName", "url"], ["matInput", "", "type", "text", "formControlName", "exposedModule"], [1, "action-group"], ["type", "button", "mat-raised-button", "", 3, "click", "disabled"], ["type", "button", "mat-raised-button", "", 3, "click"]],
      template: function MfeLoaderConfigComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](0, MfeLoaderConfigComponent_Conditional_0_Template, 23, 5, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
        }
      },
      dependencies: [_angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
      styles: ["[_nghost-%COMP%]{border:.5px solid #ccc;border-radius:4px;padding:20px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}"]
    });
  }
  return MfeLoaderConfigComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NgxEditorJs2MfeLoaderComponent = /*#__PURE__*/(() => {
  class NgxEditorJs2MfeLoaderComponent {
    mfeHost;
    sortIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(0);
    componentInstanceName = 'NgxEditorJs2MfeLoaderComponent';
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(true);
    formGroup = _angular_core__WEBPACK_IMPORTED_MODULE_3__.input.required();
    formControlName = _angular_core__WEBPACK_IMPORTED_MODULE_3__.input.required();
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)([{
      action: 'medium',
      icon: 'density_small'
    }, {
      action: 'display-small',
      icon: 'density_medium'
    }, {
      action: 'display-large',
      icon: 'density_large'
    }]);
    value = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)({
      url: '',
      remoteName: '',
      exposedModule: ''
    });
    savedAction = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)('display-large');
    actionCallbackBind = this.actionCallback.bind(this);
    openOverlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)(true);
    ngOnInit() {
      try {
        const possibleSavedValue = this.formGroup().get(this.formControlName());
        this.value.set(JSON.parse(possibleSavedValue?.value ? possibleSavedValue.value : '{}'));
        this.value()?.url && this.openOverlay.set(false);
      } catch (error) {
        console.warn('Error parseing MFE Loader setting value', error);
      }
    }
    ngAfterViewInit() {
      const {
        url,
        remoteName,
        exposedModule
      } = this.value();
      if (!url || !remoteName || !exposedModule) return;
      this.updateMfeRemote(this.value());
    }
    actionCallback(action) {
      this.savedAction.update(() => action);
    }
    openEditUrlOverlay() {
      this.openOverlay.set(true);
    }
    updateMfeRemote(value) {
      var _this = this;
      return (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          const remoteComponent = yield (0,_angular_architects_module_federation__WEBPACK_IMPORTED_MODULE_11__.loadRemoteModule)({
            type: 'module',
            remoteEntry: value.url,
            exposedModule: './' + value.exposedModule
          });
          _this.mfeHost.clear();
          _this.mfeHost.createComponent(remoteComponent[value.remoteName]);
        } catch (error) {
          console.error('[MFE LOAD ERROR]', error);
        }
        _this.value.set(value);
        _this.formGroup().get(_this.formControlName())?.setValue(JSON.stringify(value));
        _this.openOverlay.set(false);
      })();
    }
    static ɵfac = function NgxEditorJs2MfeLoaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgxEditorJs2MfeLoaderComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NgxEditorJs2MfeLoaderComponent,
      selectors: [["ngx-editor-js2-mfe-loader"]],
      viewQuery: function NgxEditorJs2MfeLoaderComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mfeHost = _t.first);
        }
      },
      hostAttrs: [1, "cdk-drag-animating", "no-toolbar-inline"],
      inputs: {
        sortIndex: [1, "sortIndex"],
        autofocus: [1, "autofocus"],
        formGroup: [1, "formGroup"],
        formControlName: [1, "formControlName"],
        blockOptionActions: [1, "blockOptionActions"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDrag])],
      decls: 6,
      vars: 7,
      consts: [["mfeHost", ""], [3, "formGroup"], ["controlAccessor", "", "toolbarFab", "", 1, "mfe-container-overlay", 3, "actionCallback", "autofocus", "blockOptionActions", "formControlName", "componentContextPositionIndex"], [1, "mfe-container", 3, "ngClass"], [3, "value"], ["mat-fab", "", 1, "mfe-block-button", 3, "click"], [3, "mfeValue", "value"]],
      template: function NgxEditorJs2MfeLoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](2, NgxEditorJs2MfeLoaderComponent_Conditional_2_Template, 4, 1, "div", 3)(3, NgxEditorJs2MfeLoaderComponent_Conditional_3_Template, 1, 1, "mfe-loader-config", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](4, null, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formGroup());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("actionCallback", ctx.actionCallbackBind)("autofocus", ctx.autofocus())("blockOptionActions", ctx.blockOptionActions())("formControlName", ctx.formControlName())("componentContextPositionIndex", ctx.sortIndex());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](!ctx.openOverlay() ? 2 : 3);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_12__.ControlAccessorDirective, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_12__.AutofocusDirective, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_12__.ToolbarFabDirective, MfeLoaderConfigComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;margin:1.5rem 0}[_nghost-%COMP%]   .mfe-container-overlay[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;position:absolute}[_nghost-%COMP%]   .mfe-container-overlay[_ngcontent-%COMP%]:hover ~ .mfe-container[_ngcontent-%COMP%]   .mfe-block-button[_ngcontent-%COMP%], [_nghost-%COMP%]   .mfe-block-button[_ngcontent-%COMP%]:hover{display:block}[_nghost-%COMP%]   .mfe-container[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .mfe-container[_ngcontent-%COMP%]   .mfe-block[_ngcontent-%COMP%]{min-width:0}[_nghost-%COMP%]   .mfe-container[_ngcontent-%COMP%]   .mfe-block-button[_ngcontent-%COMP%]{position:absolute;top:6px;left:6px;display:none}"]
    });
  }
  return NgxEditorJs2MfeLoaderComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of ngx-editor-js2-mfe-loader
 */

/**
 * Generated bundle index. Do not edit.
 */



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
//# sourceMappingURL=7677.js.map