(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[8824],{

/***/ 8963
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/common/fesm2022/_platform_location-chunk.mjs ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserPlatformLocation: () => (/* binding */ BrowserPlatformLocation),
/* harmony export */   DomAdapter: () => (/* binding */ DomAdapter),
/* harmony export */   LOCATION_INITIALIZED: () => (/* binding */ LOCATION_INITIALIZED),
/* harmony export */   PlatformLocation: () => (/* binding */ PlatformLocation),
/* harmony export */   getDOM: () => (/* binding */ getDOM),
/* harmony export */   setRootDomAdapter: () => (/* binding */ setRootDomAdapter)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/**
 * @license Angular v21.1.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */



let _DOM = null;
function getDOM() {
  return _DOM;
}
function setRootDomAdapter(adapter) {
  _DOM ??= adapter;
}
class DomAdapter {}
let PlatformLocation = /*#__PURE__*/(() => {
  class PlatformLocation {
    historyGo(relativePosition) {
      throw new Error(ngDevMode ? 'Not implemented' : '');
    }
    static ɵfac = function PlatformLocation_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PlatformLocation)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PlatformLocation,
      factory: () => (() => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(BrowserPlatformLocation))(),
      providedIn: 'platform'
    });
  }
  return PlatformLocation;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const LOCATION_INITIALIZED = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'Location Initialized' : '');
let BrowserPlatformLocation = /*#__PURE__*/(() => {
  class BrowserPlatformLocation extends PlatformLocation {
    _location;
    _history;
    _doc = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    constructor() {
      super();
      this._location = window.location;
      this._history = window.history;
    }
    getBaseHrefFromDOM() {
      return getDOM().getBaseHref(this._doc);
    }
    onPopState(fn) {
      const window = getDOM().getGlobalEventTarget(this._doc, 'window');
      window.addEventListener('popstate', fn, false);
      return () => window.removeEventListener('popstate', fn);
    }
    onHashChange(fn) {
      const window = getDOM().getGlobalEventTarget(this._doc, 'window');
      window.addEventListener('hashchange', fn, false);
      return () => window.removeEventListener('hashchange', fn);
    }
    get href() {
      return this._location.href;
    }
    get protocol() {
      return this._location.protocol;
    }
    get hostname() {
      return this._location.hostname;
    }
    get port() {
      return this._location.port;
    }
    get pathname() {
      return this._location.pathname;
    }
    get search() {
      return this._location.search;
    }
    get hash() {
      return this._location.hash;
    }
    set pathname(newPath) {
      this._location.pathname = newPath;
    }
    pushState(state, title, url) {
      this._history.pushState(state, title, url);
    }
    replaceState(state, title, url) {
      this._history.replaceState(state, title, url);
    }
    forward() {
      this._history.forward();
    }
    back() {
      this._history.back();
    }
    historyGo(relativePosition = 0) {
      this._history.go(relativePosition);
    }
    getState() {
      return this._history.state;
    }
    static ɵfac = function BrowserPlatformLocation_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BrowserPlatformLocation)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BrowserPlatformLocation,
      factory: () => (() => new BrowserPlatformLocation())(),
      providedIn: 'platform'
    });
  }
  return BrowserPlatformLocation;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 46443
/*!********************************************************!*\
  !*** ./node_modules/@angular/common/fesm2022/http.mjs ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FetchBackend: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.FetchBackend),
/* harmony export */   HTTP_INTERCEPTORS: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HTTP_INTERCEPTORS),
/* harmony export */   HTTP_TRANSFER_CACHE_ORIGIN_MAP: () => (/* binding */ HTTP_TRANSFER_CACHE_ORIGIN_MAP),
/* harmony export */   HttpBackend: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpBackend),
/* harmony export */   HttpClient: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpClient),
/* harmony export */   HttpClientJsonpModule: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpClientJsonpModule),
/* harmony export */   HttpClientModule: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpClientModule),
/* harmony export */   HttpClientXsrfModule: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpClientXsrfModule),
/* harmony export */   HttpContext: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpContext),
/* harmony export */   HttpContextToken: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpContextToken),
/* harmony export */   HttpErrorResponse: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpErrorResponse),
/* harmony export */   HttpEventType: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpEventType),
/* harmony export */   HttpFeatureKind: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpFeatureKind),
/* harmony export */   HttpHandler: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpHandler),
/* harmony export */   HttpHeaderResponse: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpHeaderResponse),
/* harmony export */   HttpHeaders: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders),
/* harmony export */   HttpParams: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpParams),
/* harmony export */   HttpRequest: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpRequest),
/* harmony export */   HttpResponse: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpResponse),
/* harmony export */   HttpResponseBase: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpResponseBase),
/* harmony export */   HttpStatusCode: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpStatusCode),
/* harmony export */   HttpUrlEncodingCodec: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpUrlEncodingCodec),
/* harmony export */   HttpXhrBackend: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpXhrBackend),
/* harmony export */   HttpXsrfTokenExtractor: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpXsrfTokenExtractor),
/* harmony export */   JsonpClientBackend: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.JsonpClientBackend),
/* harmony export */   JsonpInterceptor: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.JsonpInterceptor),
/* harmony export */   httpResource: () => (/* binding */ httpResource),
/* harmony export */   provideHttpClient: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.provideHttpClient),
/* harmony export */   withFetch: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.withFetch),
/* harmony export */   withInterceptors: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.withInterceptors),
/* harmony export */   withInterceptorsFromDi: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.withInterceptorsFromDi),
/* harmony export */   withJsonpSupport: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.withJsonpSupport),
/* harmony export */   withNoXsrfProtection: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.withNoXsrfProtection),
/* harmony export */   withRequestsMadeViaParent: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.withRequestsMadeViaParent),
/* harmony export */   withXsrfConfiguration: () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.withXsrfConfiguration),
/* harmony export */   "ɵHTTP_ROOT_INTERCEPTOR_FNS": () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HTTP_ROOT_INTERCEPTOR_FNS),
/* harmony export */   "ɵHttpInterceptingHandler": () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpInterceptorHandler),
/* harmony export */   "ɵREQUESTS_CONTRIBUTE_TO_STABILITY": () => (/* reexport safe */ _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.REQUESTS_CONTRIBUTE_TO_STABILITY),
/* harmony export */   "ɵwithHttpTransferCache": () => (/* binding */ withHttpTransferCache)
/* harmony export */ });
/* harmony import */ var _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_module-chunk.mjs */ 50698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 32778);
/**
 * @license Angular v21.1.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */








const httpResource = /*#__PURE__*/(() => {
  const jsonFn = makeHttpResourceFn('json');
  jsonFn.arrayBuffer = makeHttpResourceFn('arraybuffer');
  jsonFn.blob = makeHttpResourceFn('blob');
  jsonFn.text = makeHttpResourceFn('text');
  return jsonFn;
})();
function makeHttpResourceFn(responseType) {
  return function httpResource(request, options) {
    if (ngDevMode && !options?.injector) {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.assertInInjectionContext)(httpResource);
    }
    const injector = options?.injector ?? (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector);
    return new HttpResourceImpl(injector, () => normalizeRequest(request, responseType), options?.defaultValue, options?.debugName, options?.parse, options?.equal);
  };
}
function normalizeRequest(request, responseType) {
  let unwrappedRequest = typeof request === 'function' ? request() : request;
  if (unwrappedRequest === undefined) {
    return undefined;
  } else if (typeof unwrappedRequest === 'string') {
    unwrappedRequest = {
      url: unwrappedRequest
    };
  }
  const headers = unwrappedRequest.headers instanceof _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders ? unwrappedRequest.headers : new _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders(unwrappedRequest.headers);
  const params = unwrappedRequest.params instanceof _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpParams ? unwrappedRequest.params : new _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
    fromObject: unwrappedRequest.params
  });
  return new _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpRequest(unwrappedRequest.method ?? 'GET', unwrappedRequest.url, unwrappedRequest.body ?? null, {
    headers,
    params,
    reportProgress: unwrappedRequest.reportProgress,
    withCredentials: unwrappedRequest.withCredentials,
    keepalive: unwrappedRequest.keepalive,
    cache: unwrappedRequest.cache,
    priority: unwrappedRequest.priority,
    mode: unwrappedRequest.mode,
    redirect: unwrappedRequest.redirect,
    responseType,
    context: unwrappedRequest.context,
    transferCache: unwrappedRequest.transferCache,
    credentials: unwrappedRequest.credentials,
    referrer: unwrappedRequest.referrer,
    referrerPolicy: unwrappedRequest.referrerPolicy,
    integrity: unwrappedRequest.integrity,
    timeout: unwrappedRequest.timeout
  });
}
class HttpResourceImpl extends _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵResourceImpl"] {
  client;
  _headers = /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.linkedSignal)({
    ...(ngDevMode ? {
      debugName: "_headers"
    } : {}),
    source: this.extRequest,
    computation: () => undefined
  });
  _progress = /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.linkedSignal)({
    ...(ngDevMode ? {
      debugName: "_progress"
    } : {}),
    source: this.extRequest,
    computation: () => undefined
  });
  _statusCode = /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.linkedSignal)({
    ...(ngDevMode ? {
      debugName: "_statusCode"
    } : {}),
    source: this.extRequest,
    computation: () => undefined
  });
  headers = /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.status() === 'resolved' || this.status() === 'error' ? this._headers() : undefined, ...(ngDevMode ? [{
    debugName: "headers"
  }] : []));
  progress = /*#__PURE__*/this._progress.asReadonly();
  statusCode = /*#__PURE__*/this._statusCode.asReadonly();
  constructor(injector, request, defaultValue, debugName, parse, equal) {
    super(request, ({
      params: request,
      abortSignal
    }) => {
      let sub;
      const onAbort = () => sub.unsubscribe();
      abortSignal.addEventListener('abort', onAbort);
      const stream = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)({
        value: undefined
      }, ...(ngDevMode ? [{
        debugName: "stream"
      }] : []));
      let resolve;
      const promise = new Promise(r => resolve = r);
      const send = value => {
        stream.set(value);
        resolve?.(stream);
        resolve = undefined;
      };
      sub = this.client.request(request).subscribe({
        next: event => {
          switch (event.type) {
            case _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpEventType.Response:
              this._headers.set(event.headers);
              this._statusCode.set(event.status);
              try {
                send({
                  value: parse ? parse(event.body) : event.body
                });
              } catch (error) {
                send({
                  error: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵencapsulateResourceError"])(error)
                });
              }
              break;
            case _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpEventType.DownloadProgress:
              this._progress.set(event);
              break;
          }
        },
        error: error => {
          if (error instanceof _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpErrorResponse) {
            this._headers.set(error.headers);
            this._statusCode.set(error.status);
          }
          send({
            error
          });
          abortSignal.removeEventListener('abort', onAbort);
        },
        complete: () => {
          if (resolve) {
            send({
              error: new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](991, ngDevMode && 'Resource completed before producing a value')
            });
          }
          abortSignal.removeEventListener('abort', onAbort);
        }
      });
      return promise;
    }, defaultValue, equal, debugName, injector);
    this.client = injector.get(_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpClient);
  }
  set(value) {
    super.set(value);
    this._headers.set(undefined);
    this._progress.set(undefined);
    this._statusCode.set(undefined);
  }
}
const HTTP_TRANSFER_CACHE_ORIGIN_MAP = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'HTTP_TRANSFER_CACHE_ORIGIN_MAP' : '');
const BODY = 'b';
const HEADERS = 'h';
const STATUS = 's';
const STATUS_TEXT = 'st';
const REQ_URL = 'u';
const RESPONSE_TYPE = 'rt';
const CACHE_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'HTTP_TRANSFER_STATE_CACHE_OPTIONS' : '');
const ALLOWED_METHODS = ['GET', 'HEAD'];
function transferCacheInterceptorFn(req, next) {
  const {
    isCacheActive,
    ...globalOptions
  } = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CACHE_OPTIONS);
  const {
    transferCache: requestOptions,
    method: requestMethod
  } = req;
  if (!isCacheActive || requestOptions === false || requestMethod === 'POST' && !globalOptions.includePostRequests && !requestOptions || requestMethod !== 'POST' && !ALLOWED_METHODS.includes(requestMethod) || !globalOptions.includeRequestsWithAuthHeaders && hasAuthHeaders(req) || globalOptions.filter?.(req) === false) {
    return next(req);
  }
  const transferState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.TransferState);
  const originMap = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(HTTP_TRANSFER_CACHE_ORIGIN_MAP, {
    optional: true
  });
  if (typeof ngServerMode !== 'undefined' && !ngServerMode && originMap) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](2803, ngDevMode && 'Angular detected that the `HTTP_TRANSFER_CACHE_ORIGIN_MAP` token is configured and ' + 'present in the client side code. Please ensure that this token is only provided in the ' + 'server code of the application.');
  }
  const requestUrl = typeof ngServerMode !== 'undefined' && ngServerMode && originMap ? mapRequestOriginUrl(req.url, originMap) : req.url;
  const storeKey = makeCacheKey(req, requestUrl);
  const response = transferState.get(storeKey, null);
  let headersToInclude = globalOptions.includeHeaders;
  if (typeof requestOptions === 'object' && requestOptions.includeHeaders) {
    headersToInclude = requestOptions.includeHeaders;
  }
  if (response) {
    const {
      [BODY]: undecodedBody,
      [RESPONSE_TYPE]: responseType,
      [HEADERS]: httpHeaders,
      [STATUS]: status,
      [STATUS_TEXT]: statusText,
      [REQ_URL]: url
    } = response;
    let body = undecodedBody;
    switch (responseType) {
      case 'arraybuffer':
        body = new TextEncoder().encode(undecodedBody).buffer;
        break;
      case 'blob':
        body = new Blob([undecodedBody]);
        break;
    }
    let headers = new _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders(httpHeaders);
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      headers = appendMissingHeadersDetection(req.url, headers, headersToInclude ?? []);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(new _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpResponse({
      body,
      headers,
      status,
      statusText,
      url
    }));
  }
  const event$ = next(req);
  if (typeof ngServerMode !== 'undefined' && ngServerMode) {
    return event$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(event => {
      if (event instanceof _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HttpResponse) {
        transferState.set(storeKey, {
          [BODY]: event.body,
          [HEADERS]: getFilteredHeaders(event.headers, headersToInclude),
          [STATUS]: event.status,
          [STATUS_TEXT]: event.statusText,
          [REQ_URL]: requestUrl,
          [RESPONSE_TYPE]: req.responseType
        });
      }
    }));
  }
  return event$;
}
function hasAuthHeaders(req) {
  return req.headers.has('authorization') || req.headers.has('proxy-authorization');
}
function getFilteredHeaders(headers, includeHeaders) {
  if (!includeHeaders) {
    return {};
  }
  const headersMap = {};
  for (const key of includeHeaders) {
    const values = headers.getAll(key);
    if (values !== null) {
      headersMap[key] = values;
    }
  }
  return headersMap;
}
function sortAndConcatParams(params) {
  return [...params.keys()].sort().map(k => `${k}=${params.getAll(k)}`).join('&');
}
function makeCacheKey(request, mappedRequestUrl) {
  const {
    params,
    method,
    responseType
  } = request;
  const encodedParams = sortAndConcatParams(params);
  let serializedBody = request.serializeBody();
  if (serializedBody instanceof URLSearchParams) {
    serializedBody = sortAndConcatParams(serializedBody);
  } else if (typeof serializedBody !== 'string') {
    serializedBody = '';
  }
  const key = [method, responseType, mappedRequestUrl, serializedBody, encodedParams].join('|');
  const hash = generateHash(key);
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.makeStateKey)(hash);
}
function generateHash(value) {
  let hash = 0;
  for (const char of value) {
    hash = Math.imul(31, hash) + char.charCodeAt(0) << 0;
  }
  hash += 2147483647 + 1;
  return hash.toString();
}
function withHttpTransferCache(cacheOptions) {
  return [{
    provide: CACHE_OPTIONS,
    useFactory: () => {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵperformanceMarkFeature"])('NgHttpTransferCache');
      return {
        isCacheActive: true,
        ...cacheOptions
      };
    }
  }, {
    provide: _module_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.HTTP_ROOT_INTERCEPTOR_FNS,
    useValue: transferCacheInterceptorFn,
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_BOOTSTRAP_LISTENER,
    multi: true,
    useFactory: () => {
      const appRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef);
      const cacheState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CACHE_OPTIONS);
      return () => {
        appRef.whenStable().then(() => {
          cacheState.isCacheActive = false;
        });
      };
    }
  }];
}
function appendMissingHeadersDetection(url, headers, headersToInclude) {
  const warningProduced = new Set();
  return new Proxy(headers, {
    get(target, prop) {
      const value = Reflect.get(target, prop);
      const methods = new Set(['get', 'has', 'getAll']);
      if (typeof value !== 'function' || !methods.has(prop)) {
        return value;
      }
      return headerName => {
        const key = (prop + ':' + headerName).toLowerCase();
        if (!headersToInclude.includes(headerName) && !warningProduced.has(key)) {
          warningProduced.add(key);
          const truncatedUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵtruncateMiddle"])(url);
          console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵformatRuntimeError"])(-2802, `Angular detected that the \`${headerName}\` header is accessed, but the value of the header ` + `was not transferred from the server to the client by the HttpTransferCache. ` + `To include the value of the \`${headerName}\` header for the \`${truncatedUrl}\` request, ` + `use the \`includeHeaders\` list. The \`includeHeaders\` can be defined either ` + `on a request level by adding the \`transferCache\` parameter, or on an application ` + `level by adding the \`httpCacheTransfer.includeHeaders\` argument to the ` + `\`provideClientHydration()\` call. `));
        }
        return value.apply(target, [headerName]);
      };
    }
  });
}
function mapRequestOriginUrl(url, originMap) {
  const origin = new URL(url, 'resolve://').origin;
  const mappedOrigin = originMap[origin];
  if (!mappedOrigin) {
    return url;
  }
  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    verifyMappedOrigin(mappedOrigin);
  }
  return url.replace(origin, mappedOrigin);
}
function verifyMappedOrigin(url) {
  if (new URL(url, 'resolve://').pathname !== '/') {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](2804, 'Angular detected a URL with a path segment in the value provided for the ' + `\`HTTP_TRANSFER_CACHE_ORIGIN_MAP\` token: ${url}. The map should only contain origins ` + 'without any other segments.');
  }
}


/***/ },

/***/ 50698
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/common/fesm2022/_module-chunk.mjs ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FetchBackend: () => (/* binding */ FetchBackend),
/* harmony export */   HTTP_INTERCEPTORS: () => (/* binding */ HTTP_INTERCEPTORS),
/* harmony export */   HTTP_ROOT_INTERCEPTOR_FNS: () => (/* binding */ HTTP_ROOT_INTERCEPTOR_FNS),
/* harmony export */   HttpBackend: () => (/* binding */ HttpBackend),
/* harmony export */   HttpClient: () => (/* binding */ HttpClient),
/* harmony export */   HttpClientJsonpModule: () => (/* binding */ HttpClientJsonpModule),
/* harmony export */   HttpClientModule: () => (/* binding */ HttpClientModule),
/* harmony export */   HttpClientXsrfModule: () => (/* binding */ HttpClientXsrfModule),
/* harmony export */   HttpContext: () => (/* binding */ HttpContext),
/* harmony export */   HttpContextToken: () => (/* binding */ HttpContextToken),
/* harmony export */   HttpErrorResponse: () => (/* binding */ HttpErrorResponse),
/* harmony export */   HttpEventType: () => (/* binding */ HttpEventType),
/* harmony export */   HttpFeatureKind: () => (/* binding */ HttpFeatureKind),
/* harmony export */   HttpHandler: () => (/* binding */ HttpHandler),
/* harmony export */   HttpHeaderResponse: () => (/* binding */ HttpHeaderResponse),
/* harmony export */   HttpHeaders: () => (/* binding */ HttpHeaders),
/* harmony export */   HttpInterceptorHandler: () => (/* binding */ HttpInterceptorHandler),
/* harmony export */   HttpParams: () => (/* binding */ HttpParams),
/* harmony export */   HttpRequest: () => (/* binding */ HttpRequest),
/* harmony export */   HttpResponse: () => (/* binding */ HttpResponse),
/* harmony export */   HttpResponseBase: () => (/* binding */ HttpResponseBase),
/* harmony export */   HttpStatusCode: () => (/* binding */ HttpStatusCode),
/* harmony export */   HttpUrlEncodingCodec: () => (/* binding */ HttpUrlEncodingCodec),
/* harmony export */   HttpXhrBackend: () => (/* binding */ HttpXhrBackend),
/* harmony export */   HttpXsrfTokenExtractor: () => (/* binding */ HttpXsrfTokenExtractor),
/* harmony export */   JsonpClientBackend: () => (/* binding */ JsonpClientBackend),
/* harmony export */   JsonpInterceptor: () => (/* binding */ JsonpInterceptor),
/* harmony export */   REQUESTS_CONTRIBUTE_TO_STABILITY: () => (/* binding */ REQUESTS_CONTRIBUTE_TO_STABILITY),
/* harmony export */   provideHttpClient: () => (/* binding */ provideHttpClient),
/* harmony export */   withFetch: () => (/* binding */ withFetch),
/* harmony export */   withInterceptors: () => (/* binding */ withInterceptors),
/* harmony export */   withInterceptorsFromDi: () => (/* binding */ withInterceptorsFromDi),
/* harmony export */   withJsonpSupport: () => (/* binding */ withJsonpSupport),
/* harmony export */   withNoXsrfProtection: () => (/* binding */ withNoXsrfProtection),
/* harmony export */   withRequestsMadeViaParent: () => (/* binding */ withRequestsMadeViaParent),
/* harmony export */   withXsrfConfiguration: () => (/* binding */ withXsrfConfiguration)
/* harmony export */ });
/* harmony import */ var _Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _xhr_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_xhr-chunk.mjs */ 97516);
/* harmony import */ var _platform_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_platform_location-chunk.mjs */ 8963);

/**
 * @license Angular v21.1.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */







class HttpHeaders {
  headers;
  normalizedNames = /*#__PURE__*/new Map();
  lazyInit;
  lazyUpdate = null;
  constructor(headers) {
    if (!headers) {
      this.headers = new Map();
    } else if (typeof headers === 'string') {
      this.lazyInit = () => {
        this.headers = new Map();
        headers.split('\n').forEach(line => {
          const index = line.indexOf(':');
          if (index > 0) {
            const name = line.slice(0, index);
            const value = line.slice(index + 1).trim();
            this.addHeaderEntry(name, value);
          }
        });
      };
    } else if (typeof Headers !== 'undefined' && headers instanceof Headers) {
      this.headers = new Map();
      headers.forEach((value, name) => {
        this.addHeaderEntry(name, value);
      });
    } else {
      this.lazyInit = () => {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          assertValidHeaders(headers);
        }
        this.headers = new Map();
        Object.entries(headers).forEach(([name, values]) => {
          this.setHeaderEntries(name, values);
        });
      };
    }
  }
  has(name) {
    this.init();
    return this.headers.has(name.toLowerCase());
  }
  get(name) {
    this.init();
    const values = this.headers.get(name.toLowerCase());
    return values && values.length > 0 ? values[0] : null;
  }
  keys() {
    this.init();
    return Array.from(this.normalizedNames.values());
  }
  getAll(name) {
    this.init();
    return this.headers.get(name.toLowerCase()) || null;
  }
  append(name, value) {
    return this.clone({
      name,
      value,
      op: 'a'
    });
  }
  set(name, value) {
    return this.clone({
      name,
      value,
      op: 's'
    });
  }
  delete(name, value) {
    return this.clone({
      name,
      value,
      op: 'd'
    });
  }
  maybeSetNormalizedName(name, lcName) {
    if (!this.normalizedNames.has(lcName)) {
      this.normalizedNames.set(lcName, name);
    }
  }
  init() {
    if (!!this.lazyInit) {
      if (this.lazyInit instanceof HttpHeaders) {
        this.copyFrom(this.lazyInit);
      } else {
        this.lazyInit();
      }
      this.lazyInit = null;
      if (!!this.lazyUpdate) {
        this.lazyUpdate.forEach(update => this.applyUpdate(update));
        this.lazyUpdate = null;
      }
    }
  }
  copyFrom(other) {
    other.init();
    Array.from(other.headers.keys()).forEach(key => {
      this.headers.set(key, other.headers.get(key));
      this.normalizedNames.set(key, other.normalizedNames.get(key));
    });
  }
  clone(update) {
    const clone = new HttpHeaders();
    clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof HttpHeaders ? this.lazyInit : this;
    clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
    return clone;
  }
  applyUpdate(update) {
    const key = update.name.toLowerCase();
    switch (update.op) {
      case 'a':
      case 's':
        let value = update.value;
        if (typeof value === 'string') {
          value = [value];
        }
        if (value.length === 0) {
          return;
        }
        this.maybeSetNormalizedName(update.name, key);
        const base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
        base.push(...value);
        this.headers.set(key, base);
        break;
      case 'd':
        const toDelete = update.value;
        if (!toDelete) {
          this.headers.delete(key);
          this.normalizedNames.delete(key);
        } else {
          let existing = this.headers.get(key);
          if (!existing) {
            return;
          }
          existing = existing.filter(value => toDelete.indexOf(value) === -1);
          if (existing.length === 0) {
            this.headers.delete(key);
            this.normalizedNames.delete(key);
          } else {
            this.headers.set(key, existing);
          }
        }
        break;
    }
  }
  addHeaderEntry(name, value) {
    const key = name.toLowerCase();
    this.maybeSetNormalizedName(name, key);
    if (this.headers.has(key)) {
      this.headers.get(key).push(value);
    } else {
      this.headers.set(key, [value]);
    }
  }
  setHeaderEntries(name, values) {
    const headerValues = (Array.isArray(values) ? values : [values]).map(value => value.toString());
    const key = name.toLowerCase();
    this.headers.set(key, headerValues);
    this.maybeSetNormalizedName(name, key);
  }
  forEach(fn) {
    this.init();
    Array.from(this.normalizedNames.keys()).forEach(key => fn(this.normalizedNames.get(key), this.headers.get(key)));
  }
}
function assertValidHeaders(headers) {
  for (const [key, value] of Object.entries(headers)) {
    if (!(typeof value === 'string' || typeof value === 'number') && !Array.isArray(value)) {
      throw new Error(`Unexpected value of the \`${key}\` header provided. ` + `Expecting either a string, a number or an array, but got: \`${value}\`.`);
    }
  }
}
class HttpContextToken {
  defaultValue;
  constructor(defaultValue) {
    this.defaultValue = defaultValue;
  }
}
class HttpContext {
  map = /*#__PURE__*/new Map();
  set(token, value) {
    this.map.set(token, value);
    return this;
  }
  get(token) {
    if (!this.map.has(token)) {
      this.map.set(token, token.defaultValue());
    }
    return this.map.get(token);
  }
  delete(token) {
    this.map.delete(token);
    return this;
  }
  has(token) {
    return this.map.has(token);
  }
  keys() {
    return this.map.keys();
  }
}
class HttpUrlEncodingCodec {
  encodeKey(key) {
    return standardEncoding(key);
  }
  encodeValue(value) {
    return standardEncoding(value);
  }
  decodeKey(key) {
    return decodeURIComponent(key);
  }
  decodeValue(value) {
    return decodeURIComponent(value);
  }
}
function paramParser(rawParams, codec) {
  const map = new Map();
  if (rawParams.length > 0) {
    const params = rawParams.replace(/^\?/, '').split('&');
    params.forEach(param => {
      const eqIdx = param.indexOf('=');
      const [key, val] = eqIdx == -1 ? [codec.decodeKey(param), ''] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
      const list = map.get(key) || [];
      list.push(val);
      map.set(key, list);
    });
  }
  return map;
}
const STANDARD_ENCODING_REGEX = /%(\d[a-f0-9])/gi;
const STANDARD_ENCODING_REPLACEMENTS = {
  '40': '@',
  '3A': ':',
  '24': '$',
  '2C': ',',
  '3B': ';',
  '3D': '=',
  '3F': '?',
  '2F': '/'
};
function standardEncoding(v) {
  return encodeURIComponent(v).replace(STANDARD_ENCODING_REGEX, (s, t) => STANDARD_ENCODING_REPLACEMENTS[t] ?? s);
}
function valueToString(value) {
  return `${value}`;
}
class HttpParams {
  map;
  encoder;
  updates = null;
  cloneFrom = null;
  constructor(options = {}) {
    this.encoder = options.encoder || new HttpUrlEncodingCodec();
    if (options.fromString) {
      if (options.fromObject) {
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](2805, ngDevMode && 'Cannot specify both fromString and fromObject.');
      }
      this.map = paramParser(options.fromString, this.encoder);
    } else if (!!options.fromObject) {
      this.map = new Map();
      Object.keys(options.fromObject).forEach(key => {
        const value = options.fromObject[key];
        const values = Array.isArray(value) ? value.map(valueToString) : [valueToString(value)];
        this.map.set(key, values);
      });
    } else {
      this.map = null;
    }
  }
  has(param) {
    this.init();
    return this.map.has(param);
  }
  get(param) {
    this.init();
    const res = this.map.get(param);
    return !!res ? res[0] : null;
  }
  getAll(param) {
    this.init();
    return this.map.get(param) || null;
  }
  keys() {
    this.init();
    return Array.from(this.map.keys());
  }
  append(param, value) {
    return this.clone({
      param,
      value,
      op: 'a'
    });
  }
  appendAll(params) {
    const updates = [];
    Object.keys(params).forEach(param => {
      const value = params[param];
      if (Array.isArray(value)) {
        value.forEach(_value => {
          updates.push({
            param,
            value: _value,
            op: 'a'
          });
        });
      } else {
        updates.push({
          param,
          value: value,
          op: 'a'
        });
      }
    });
    return this.clone(updates);
  }
  set(param, value) {
    return this.clone({
      param,
      value,
      op: 's'
    });
  }
  delete(param, value) {
    return this.clone({
      param,
      value,
      op: 'd'
    });
  }
  toString() {
    this.init();
    return this.keys().map(key => {
      const eKey = this.encoder.encodeKey(key);
      return this.map.get(key).map(value => eKey + '=' + this.encoder.encodeValue(value)).join('&');
    }).filter(param => param !== '').join('&');
  }
  clone(update) {
    const clone = new HttpParams({
      encoder: this.encoder
    });
    clone.cloneFrom = this.cloneFrom || this;
    clone.updates = (this.updates || []).concat(update);
    return clone;
  }
  init() {
    if (this.map === null) {
      this.map = new Map();
    }
    if (this.cloneFrom !== null) {
      this.cloneFrom.init();
      this.cloneFrom.keys().forEach(key => this.map.set(key, this.cloneFrom.map.get(key)));
      this.updates.forEach(update => {
        switch (update.op) {
          case 'a':
          case 's':
            const base = (update.op === 'a' ? this.map.get(update.param) : undefined) || [];
            base.push(valueToString(update.value));
            this.map.set(update.param, base);
            break;
          case 'd':
            if (update.value !== undefined) {
              let base = this.map.get(update.param) || [];
              const idx = base.indexOf(valueToString(update.value));
              if (idx !== -1) {
                base.splice(idx, 1);
              }
              if (base.length > 0) {
                this.map.set(update.param, base);
              } else {
                this.map.delete(update.param);
              }
            } else {
              this.map.delete(update.param);
              break;
            }
        }
      });
      this.cloneFrom = this.updates = null;
    }
  }
}
function mightHaveBody(method) {
  switch (method) {
    case 'DELETE':
    case 'GET':
    case 'HEAD':
    case 'OPTIONS':
    case 'JSONP':
      return false;
    default:
      return true;
  }
}
function isArrayBuffer(value) {
  return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
function isBlob(value) {
  return typeof Blob !== 'undefined' && value instanceof Blob;
}
function isFormData(value) {
  return typeof FormData !== 'undefined' && value instanceof FormData;
}
function isUrlSearchParams(value) {
  return typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams;
}
const CONTENT_TYPE_HEADER = 'Content-Type';
const ACCEPT_HEADER = 'Accept';
const TEXT_CONTENT_TYPE = 'text/plain';
const JSON_CONTENT_TYPE = 'application/json';
const ACCEPT_HEADER_VALUE = `${JSON_CONTENT_TYPE}, ${TEXT_CONTENT_TYPE}, */*`;
class HttpRequest {
  url;
  body = null;
  headers;
  context;
  reportProgress = false;
  withCredentials = false;
  credentials;
  keepalive = false;
  cache;
  priority;
  mode;
  redirect;
  referrer;
  integrity;
  referrerPolicy;
  responseType = 'json';
  method;
  params;
  urlWithParams;
  transferCache;
  timeout;
  constructor(method, url, third, fourth) {
    this.url = url;
    this.method = method.toUpperCase();
    let options;
    if (mightHaveBody(this.method) || !!fourth) {
      this.body = third !== undefined ? third : null;
      options = fourth;
    } else {
      options = third;
    }
    if (options) {
      this.reportProgress = !!options.reportProgress;
      this.withCredentials = !!options.withCredentials;
      this.keepalive = !!options.keepalive;
      if (!!options.responseType) {
        this.responseType = options.responseType;
      }
      if (options.headers) {
        this.headers = options.headers;
      }
      if (options.context) {
        this.context = options.context;
      }
      if (options.params) {
        this.params = options.params;
      }
      if (options.priority) {
        this.priority = options.priority;
      }
      if (options.cache) {
        this.cache = options.cache;
      }
      if (options.credentials) {
        this.credentials = options.credentials;
      }
      if (typeof options.timeout === 'number') {
        if (options.timeout < 1 || !Number.isInteger(options.timeout)) {
          throw new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](2822, ngDevMode ? '`timeout` must be a positive integer value' : '');
        }
        this.timeout = options.timeout;
      }
      if (options.mode) {
        this.mode = options.mode;
      }
      if (options.redirect) {
        this.redirect = options.redirect;
      }
      if (options.integrity) {
        this.integrity = options.integrity;
      }
      if (options.referrer) {
        this.referrer = options.referrer;
      }
      if (options.referrerPolicy) {
        this.referrerPolicy = options.referrerPolicy;
      }
      this.transferCache = options.transferCache;
    }
    this.headers ??= new HttpHeaders();
    this.context ??= new HttpContext();
    if (!this.params) {
      this.params = new HttpParams();
      this.urlWithParams = url;
    } else {
      const params = this.params.toString();
      if (params.length === 0) {
        this.urlWithParams = url;
      } else {
        const qIdx = url.indexOf('?');
        const sep = qIdx === -1 ? '?' : qIdx < url.length - 1 ? '&' : '';
        this.urlWithParams = url + sep + params;
      }
    }
  }
  serializeBody() {
    if (this.body === null) {
      return null;
    }
    if (typeof this.body === 'string' || isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || isUrlSearchParams(this.body)) {
      return this.body;
    }
    if (this.body instanceof HttpParams) {
      return this.body.toString();
    }
    if (typeof this.body === 'object' || typeof this.body === 'boolean' || Array.isArray(this.body)) {
      return JSON.stringify(this.body);
    }
    return this.body.toString();
  }
  detectContentTypeHeader() {
    if (this.body === null) {
      return null;
    }
    if (isFormData(this.body)) {
      return null;
    }
    if (isBlob(this.body)) {
      return this.body.type || null;
    }
    if (isArrayBuffer(this.body)) {
      return null;
    }
    if (typeof this.body === 'string') {
      return TEXT_CONTENT_TYPE;
    }
    if (this.body instanceof HttpParams) {
      return 'application/x-www-form-urlencoded;charset=UTF-8';
    }
    if (typeof this.body === 'object' || typeof this.body === 'number' || typeof this.body === 'boolean') {
      return JSON_CONTENT_TYPE;
    }
    return null;
  }
  clone(update = {}) {
    const method = update.method || this.method;
    const url = update.url || this.url;
    const responseType = update.responseType || this.responseType;
    const keepalive = update.keepalive ?? this.keepalive;
    const priority = update.priority || this.priority;
    const cache = update.cache || this.cache;
    const mode = update.mode || this.mode;
    const redirect = update.redirect || this.redirect;
    const credentials = update.credentials || this.credentials;
    const referrer = update.referrer || this.referrer;
    const integrity = update.integrity || this.integrity;
    const referrerPolicy = update.referrerPolicy || this.referrerPolicy;
    const transferCache = update.transferCache ?? this.transferCache;
    const timeout = update.timeout ?? this.timeout;
    const body = update.body !== undefined ? update.body : this.body;
    const withCredentials = update.withCredentials ?? this.withCredentials;
    const reportProgress = update.reportProgress ?? this.reportProgress;
    let headers = update.headers || this.headers;
    let params = update.params || this.params;
    const context = update.context ?? this.context;
    if (update.setHeaders !== undefined) {
      headers = Object.keys(update.setHeaders).reduce((headers, name) => headers.set(name, update.setHeaders[name]), headers);
    }
    if (update.setParams) {
      params = Object.keys(update.setParams).reduce((params, param) => params.set(param, update.setParams[param]), params);
    }
    return new HttpRequest(method, url, body, {
      params,
      headers,
      context,
      reportProgress,
      responseType,
      withCredentials,
      transferCache,
      keepalive,
      cache,
      priority,
      timeout,
      mode,
      redirect,
      credentials,
      referrer,
      integrity,
      referrerPolicy
    });
  }
}
var HttpEventType = /*#__PURE__*/function (HttpEventType) {
  HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
  HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
  HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
  HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
  HttpEventType[HttpEventType["Response"] = 4] = "Response";
  HttpEventType[HttpEventType["User"] = 5] = "User";
  return HttpEventType;
}(HttpEventType || {});
class HttpResponseBase {
  headers;
  status;
  statusText;
  url;
  ok;
  type;
  redirected;
  responseType;
  constructor(init, defaultStatus = 200, defaultStatusText = 'OK') {
    this.headers = init.headers || new HttpHeaders();
    this.status = init.status !== undefined ? init.status : defaultStatus;
    this.statusText = init.statusText || defaultStatusText;
    this.url = init.url || null;
    this.redirected = init.redirected;
    this.responseType = init.responseType;
    this.ok = this.status >= 200 && this.status < 300;
  }
}
class HttpHeaderResponse extends HttpResponseBase {
  constructor(init = {}) {
    super(init);
  }
  type = HttpEventType.ResponseHeader;
  clone(update = {}) {
    return new HttpHeaderResponse({
      headers: update.headers || this.headers,
      status: update.status !== undefined ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || undefined
    });
  }
}
class HttpResponse extends HttpResponseBase {
  body;
  constructor(init = {}) {
    super(init);
    this.body = init.body !== undefined ? init.body : null;
  }
  type = HttpEventType.Response;
  clone(update = {}) {
    return new HttpResponse({
      body: update.body !== undefined ? update.body : this.body,
      headers: update.headers || this.headers,
      status: update.status !== undefined ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || undefined,
      redirected: update.redirected ?? this.redirected,
      responseType: update.responseType ?? this.responseType
    });
  }
}
class HttpErrorResponse extends HttpResponseBase {
  name = 'HttpErrorResponse';
  message;
  error;
  ok = false;
  constructor(init) {
    super(init, 0, 'Unknown Error');
    if (this.status >= 200 && this.status < 300) {
      this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`;
    } else {
      this.message = `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`;
    }
    this.error = init.error || null;
  }
}
const HTTP_STATUS_CODE_OK = 200;
const HTTP_STATUS_CODE_NO_CONTENT = 204;
var HttpStatusCode = /*#__PURE__*/function (HttpStatusCode) {
  HttpStatusCode[HttpStatusCode["Continue"] = 100] = "Continue";
  HttpStatusCode[HttpStatusCode["SwitchingProtocols"] = 101] = "SwitchingProtocols";
  HttpStatusCode[HttpStatusCode["Processing"] = 102] = "Processing";
  HttpStatusCode[HttpStatusCode["EarlyHints"] = 103] = "EarlyHints";
  HttpStatusCode[HttpStatusCode["Ok"] = 200] = "Ok";
  HttpStatusCode[HttpStatusCode["Created"] = 201] = "Created";
  HttpStatusCode[HttpStatusCode["Accepted"] = 202] = "Accepted";
  HttpStatusCode[HttpStatusCode["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
  HttpStatusCode[HttpStatusCode["NoContent"] = 204] = "NoContent";
  HttpStatusCode[HttpStatusCode["ResetContent"] = 205] = "ResetContent";
  HttpStatusCode[HttpStatusCode["PartialContent"] = 206] = "PartialContent";
  HttpStatusCode[HttpStatusCode["MultiStatus"] = 207] = "MultiStatus";
  HttpStatusCode[HttpStatusCode["AlreadyReported"] = 208] = "AlreadyReported";
  HttpStatusCode[HttpStatusCode["ImUsed"] = 226] = "ImUsed";
  HttpStatusCode[HttpStatusCode["MultipleChoices"] = 300] = "MultipleChoices";
  HttpStatusCode[HttpStatusCode["MovedPermanently"] = 301] = "MovedPermanently";
  HttpStatusCode[HttpStatusCode["Found"] = 302] = "Found";
  HttpStatusCode[HttpStatusCode["SeeOther"] = 303] = "SeeOther";
  HttpStatusCode[HttpStatusCode["NotModified"] = 304] = "NotModified";
  HttpStatusCode[HttpStatusCode["UseProxy"] = 305] = "UseProxy";
  HttpStatusCode[HttpStatusCode["Unused"] = 306] = "Unused";
  HttpStatusCode[HttpStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
  HttpStatusCode[HttpStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
  HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
  HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
  HttpStatusCode[HttpStatusCode["PaymentRequired"] = 402] = "PaymentRequired";
  HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
  HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
  HttpStatusCode[HttpStatusCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
  HttpStatusCode[HttpStatusCode["NotAcceptable"] = 406] = "NotAcceptable";
  HttpStatusCode[HttpStatusCode["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
  HttpStatusCode[HttpStatusCode["RequestTimeout"] = 408] = "RequestTimeout";
  HttpStatusCode[HttpStatusCode["Conflict"] = 409] = "Conflict";
  HttpStatusCode[HttpStatusCode["Gone"] = 410] = "Gone";
  HttpStatusCode[HttpStatusCode["LengthRequired"] = 411] = "LengthRequired";
  HttpStatusCode[HttpStatusCode["PreconditionFailed"] = 412] = "PreconditionFailed";
  HttpStatusCode[HttpStatusCode["PayloadTooLarge"] = 413] = "PayloadTooLarge";
  HttpStatusCode[HttpStatusCode["UriTooLong"] = 414] = "UriTooLong";
  HttpStatusCode[HttpStatusCode["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
  HttpStatusCode[HttpStatusCode["RangeNotSatisfiable"] = 416] = "RangeNotSatisfiable";
  HttpStatusCode[HttpStatusCode["ExpectationFailed"] = 417] = "ExpectationFailed";
  HttpStatusCode[HttpStatusCode["ImATeapot"] = 418] = "ImATeapot";
  HttpStatusCode[HttpStatusCode["MisdirectedRequest"] = 421] = "MisdirectedRequest";
  HttpStatusCode[HttpStatusCode["UnprocessableEntity"] = 422] = "UnprocessableEntity";
  HttpStatusCode[HttpStatusCode["Locked"] = 423] = "Locked";
  HttpStatusCode[HttpStatusCode["FailedDependency"] = 424] = "FailedDependency";
  HttpStatusCode[HttpStatusCode["TooEarly"] = 425] = "TooEarly";
  HttpStatusCode[HttpStatusCode["UpgradeRequired"] = 426] = "UpgradeRequired";
  HttpStatusCode[HttpStatusCode["PreconditionRequired"] = 428] = "PreconditionRequired";
  HttpStatusCode[HttpStatusCode["TooManyRequests"] = 429] = "TooManyRequests";
  HttpStatusCode[HttpStatusCode["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
  HttpStatusCode[HttpStatusCode["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
  HttpStatusCode[HttpStatusCode["InternalServerError"] = 500] = "InternalServerError";
  HttpStatusCode[HttpStatusCode["NotImplemented"] = 501] = "NotImplemented";
  HttpStatusCode[HttpStatusCode["BadGateway"] = 502] = "BadGateway";
  HttpStatusCode[HttpStatusCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
  HttpStatusCode[HttpStatusCode["GatewayTimeout"] = 504] = "GatewayTimeout";
  HttpStatusCode[HttpStatusCode["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
  HttpStatusCode[HttpStatusCode["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
  HttpStatusCode[HttpStatusCode["InsufficientStorage"] = 507] = "InsufficientStorage";
  HttpStatusCode[HttpStatusCode["LoopDetected"] = 508] = "LoopDetected";
  HttpStatusCode[HttpStatusCode["NotExtended"] = 510] = "NotExtended";
  HttpStatusCode[HttpStatusCode["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
  return HttpStatusCode;
}(HttpStatusCode || {});
const XSSI_PREFIX$1 = /^\)\]\}',?\n/;
const FETCH_BACKEND = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'FETCH_BACKEND' : '');
let FetchBackend = /*#__PURE__*/(() => {
  class FetchBackend {
    fetchImpl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(FetchFactory, {
      optional: true
    })?.fetch ?? ((...args) => globalThis.fetch(...args));
    ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
    destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
    handle(request) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(observer => {
        const aborter = new AbortController();
        this.doRequest(request, aborter.signal, observer).then(noop, error => observer.error(new HttpErrorResponse({
          error
        })));
        let timeoutId;
        if (request.timeout) {
          timeoutId = this.ngZone.runOutsideAngular(() => setTimeout(() => {
            if (!aborter.signal.aborted) {
              aborter.abort(new DOMException('signal timed out', 'TimeoutError'));
            }
          }, request.timeout));
        }
        return () => {
          if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
          }
          aborter.abort();
        };
      });
    }
    doRequest(request, signal, observer) {
      var _this = this;
      return (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const init = _this.createRequestInit(request);
        let response;
        try {
          const fetchPromise = _this.ngZone.runOutsideAngular(() => _this.fetchImpl(request.urlWithParams, {
            signal,
            ...init
          }));
          silenceSuperfluousUnhandledPromiseRejection(fetchPromise);
          observer.next({
            type: HttpEventType.Sent
          });
          response = yield fetchPromise;
        } catch (error) {
          observer.error(new HttpErrorResponse({
            error,
            status: error.status ?? 0,
            statusText: error.statusText,
            url: request.urlWithParams,
            headers: error.headers
          }));
          return;
        }
        const headers = new HttpHeaders(response.headers);
        const statusText = response.statusText;
        const url = response.url || request.urlWithParams;
        let status = response.status;
        let body = null;
        if (request.reportProgress) {
          observer.next(new HttpHeaderResponse({
            headers,
            status,
            statusText,
            url
          }));
        }
        if (response.body) {
          const contentLength = response.headers.get('content-length');
          const chunks = [];
          const reader = response.body.getReader();
          let receivedLength = 0;
          let decoder;
          let partialText;
          const reqZone = typeof Zone !== 'undefined' && Zone.current;
          let canceled = false;
          yield _this.ngZone.runOutsideAngular(/*#__PURE__*/(0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            while (true) {
              if (_this.destroyRef.destroyed) {
                yield reader.cancel();
                canceled = true;
                break;
              }
              const {
                done,
                value
              } = yield reader.read();
              if (done) {
                break;
              }
              chunks.push(value);
              receivedLength += value.length;
              if (request.reportProgress) {
                partialText = request.responseType === 'text' ? (partialText ?? '') + (decoder ??= new TextDecoder()).decode(value, {
                  stream: true
                }) : undefined;
                const reportProgress = () => observer.next({
                  type: HttpEventType.DownloadProgress,
                  total: contentLength ? +contentLength : undefined,
                  loaded: receivedLength,
                  partialText
                });
                reqZone ? reqZone.run(reportProgress) : reportProgress();
              }
            }
          }));
          if (canceled) {
            observer.complete();
            return;
          }
          const chunksAll = _this.concatChunks(chunks, receivedLength);
          try {
            const contentType = response.headers.get(CONTENT_TYPE_HEADER) ?? '';
            body = _this.parseBody(request, chunksAll, contentType, status);
          } catch (error) {
            observer.error(new HttpErrorResponse({
              error,
              headers: new HttpHeaders(response.headers),
              status: response.status,
              statusText: response.statusText,
              url: response.url || request.urlWithParams
            }));
            return;
          }
        }
        if (status === 0) {
          status = body ? HTTP_STATUS_CODE_OK : 0;
        }
        const ok = status >= 200 && status < 300;
        const redirected = response.redirected;
        const responseType = response.type;
        if (ok) {
          observer.next(new HttpResponse({
            body,
            headers,
            status,
            statusText,
            url,
            redirected,
            responseType
          }));
          observer.complete();
        } else {
          observer.error(new HttpErrorResponse({
            error: body,
            headers,
            status,
            statusText,
            url,
            redirected,
            responseType
          }));
        }
      })();
    }
    parseBody(request, binContent, contentType, status) {
      switch (request.responseType) {
        case 'json':
          const text = new TextDecoder().decode(binContent).replace(XSSI_PREFIX$1, '');
          if (text === '') {
            return null;
          }
          try {
            return JSON.parse(text);
          } catch (e) {
            if (status < 200 || status >= 300) {
              return text;
            }
            throw e;
          }
        case 'text':
          return new TextDecoder().decode(binContent);
        case 'blob':
          return new Blob([binContent], {
            type: contentType
          });
        case 'arraybuffer':
          return binContent.buffer;
      }
    }
    createRequestInit(req) {
      const headers = {};
      let credentials;
      credentials = req.credentials;
      if (req.withCredentials) {
        (typeof ngDevMode === 'undefined' || ngDevMode) && warningOptionsMessage(req);
        credentials = 'include';
      }
      req.headers.forEach((name, values) => headers[name] = values.join(','));
      if (!req.headers.has(ACCEPT_HEADER)) {
        headers[ACCEPT_HEADER] = ACCEPT_HEADER_VALUE;
      }
      if (!req.headers.has(CONTENT_TYPE_HEADER)) {
        const detectedType = req.detectContentTypeHeader();
        if (detectedType !== null) {
          headers[CONTENT_TYPE_HEADER] = detectedType;
        }
      }
      return {
        body: req.serializeBody(),
        method: req.method,
        headers,
        credentials,
        keepalive: req.keepalive,
        cache: req.cache,
        priority: req.priority,
        mode: req.mode,
        redirect: req.redirect,
        referrer: req.referrer,
        integrity: req.integrity,
        referrerPolicy: req.referrerPolicy
      };
    }
    concatChunks(chunks, totalLength) {
      const chunksAll = new Uint8Array(totalLength);
      let position = 0;
      for (const chunk of chunks) {
        chunksAll.set(chunk, position);
        position += chunk.length;
      }
      return chunksAll;
    }
    static ɵfac = function FetchBackend_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FetchBackend)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FetchBackend,
      factory: FetchBackend.ɵfac
    });
  }
  return FetchBackend;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class FetchFactory {}
function noop() {}
function warningOptionsMessage(req) {
  if (req.credentials && req.withCredentials) {
    console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵformatRuntimeError"])(2819, `Angular detected that a \`HttpClient\` request has both \`withCredentials: true\` and \`credentials: '${req.credentials}'\` options. The \`withCredentials\` option is overriding the explicit \`credentials\` setting to 'include'. Consider removing \`withCredentials\` and using \`credentials: '${req.credentials}'\` directly for clarity.`));
  }
}
function silenceSuperfluousUnhandledPromiseRejection(promise) {
  promise.then(noop, noop);
}
const XSSI_PREFIX = /^\)\]\}',?\n/;
function validateXhrCompatibility(req) {
  const unsupportedOptions = [{
    property: 'keepalive',
    errorCode: 2813
  }, {
    property: 'cache',
    errorCode: 2814
  }, {
    property: 'priority',
    errorCode: 2815
  }, {
    property: 'mode',
    errorCode: 2816
  }, {
    property: 'redirect',
    errorCode: 2817
  }, {
    property: 'credentials',
    errorCode: 2818
  }, {
    property: 'integrity',
    errorCode: 2820
  }, {
    property: 'referrer',
    errorCode: 2821
  }, {
    property: 'referrerPolicy',
    errorCode: 2823
  }];
  for (const {
    property,
    errorCode
  } of unsupportedOptions) {
    if (req[property]) {
      console.warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵformatRuntimeError"])(errorCode, `Angular detected that a \`HttpClient\` request with the \`${property}\` option was sent using XHR, which does not support it. To use the \`${property}\` option, enable Fetch API support by passing \`withFetch()\` as an argument to \`provideHttpClient()\`.`));
    }
  }
}
let HttpXhrBackend = /*#__PURE__*/(() => {
  class HttpXhrBackend {
    xhrFactory;
    tracingService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵTracingService"], {
      optional: true
    });
    constructor(xhrFactory) {
      this.xhrFactory = xhrFactory;
    }
    maybePropagateTrace(fn) {
      return this.tracingService?.propagate ? this.tracingService.propagate(fn) : fn;
    }
    handle(req) {
      if (req.method === 'JSONP') {
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](-2800, (typeof ngDevMode === 'undefined' || ngDevMode) && `Cannot make a JSONP request without JSONP support. To fix the problem, either add the \`withJsonpSupport()\` call (if \`provideHttpClient()\` is used) or import the \`HttpClientJsonpModule\` in the root NgModule.`);
      }
      ngDevMode && validateXhrCompatibility(req);
      const xhrFactory = this.xhrFactory;
      const source = typeof ngServerMode !== 'undefined' && ngServerMode && xhrFactory.ɵloadImpl ? (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(xhrFactory.ɵloadImpl()) : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
      return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(observer => {
          const xhr = xhrFactory.build();
          xhr.open(req.method, req.urlWithParams);
          if (req.withCredentials) {
            xhr.withCredentials = true;
          }
          req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(',')));
          if (!req.headers.has(ACCEPT_HEADER)) {
            xhr.setRequestHeader(ACCEPT_HEADER, ACCEPT_HEADER_VALUE);
          }
          if (!req.headers.has(CONTENT_TYPE_HEADER)) {
            const detectedType = req.detectContentTypeHeader();
            if (detectedType !== null) {
              xhr.setRequestHeader(CONTENT_TYPE_HEADER, detectedType);
            }
          }
          if (req.timeout) {
            xhr.timeout = req.timeout;
          }
          if (req.responseType) {
            const responseType = req.responseType.toLowerCase();
            xhr.responseType = responseType !== 'json' ? responseType : 'text';
          }
          const reqBody = req.serializeBody();
          let headerResponse = null;
          const partialFromXhr = () => {
            if (headerResponse !== null) {
              return headerResponse;
            }
            const statusText = xhr.statusText || 'OK';
            const headers = new HttpHeaders(xhr.getAllResponseHeaders());
            const url = xhr.responseURL || req.url;
            headerResponse = new HttpHeaderResponse({
              headers,
              status: xhr.status,
              statusText,
              url
            });
            return headerResponse;
          };
          const onLoad = this.maybePropagateTrace(() => {
            let {
              headers,
              status,
              statusText,
              url
            } = partialFromXhr();
            let body = null;
            if (status !== HTTP_STATUS_CODE_NO_CONTENT) {
              body = typeof xhr.response === 'undefined' ? xhr.responseText : xhr.response;
            }
            if (status === 0) {
              status = !!body ? HTTP_STATUS_CODE_OK : 0;
            }
            let ok = status >= 200 && status < 300;
            if (req.responseType === 'json' && typeof body === 'string') {
              const originalBody = body;
              body = body.replace(XSSI_PREFIX, '');
              try {
                body = body !== '' ? JSON.parse(body) : null;
              } catch (error) {
                body = originalBody;
                if (ok) {
                  ok = false;
                  body = {
                    error,
                    text: body
                  };
                }
              }
            }
            if (ok) {
              observer.next(new HttpResponse({
                body,
                headers,
                status,
                statusText,
                url: url || undefined
              }));
              observer.complete();
            } else {
              observer.error(new HttpErrorResponse({
                error: body,
                headers,
                status,
                statusText,
                url: url || undefined
              }));
            }
          });
          const onError = this.maybePropagateTrace(error => {
            const {
              url
            } = partialFromXhr();
            const res = new HttpErrorResponse({
              error,
              status: xhr.status || 0,
              statusText: xhr.statusText || 'Unknown Error',
              url: url || undefined
            });
            observer.error(res);
          });
          let onTimeout = onError;
          if (req.timeout) {
            onTimeout = this.maybePropagateTrace(_ => {
              const {
                url
              } = partialFromXhr();
              const res = new HttpErrorResponse({
                error: new DOMException('Request timed out', 'TimeoutError'),
                status: xhr.status || 0,
                statusText: xhr.statusText || 'Request timeout',
                url: url || undefined
              });
              observer.error(res);
            });
          }
          let sentHeaders = false;
          const onDownProgress = this.maybePropagateTrace(event => {
            if (!sentHeaders) {
              observer.next(partialFromXhr());
              sentHeaders = true;
            }
            let progressEvent = {
              type: HttpEventType.DownloadProgress,
              loaded: event.loaded
            };
            if (event.lengthComputable) {
              progressEvent.total = event.total;
            }
            if (req.responseType === 'text' && !!xhr.responseText) {
              progressEvent.partialText = xhr.responseText;
            }
            observer.next(progressEvent);
          });
          const onUpProgress = this.maybePropagateTrace(event => {
            let progress = {
              type: HttpEventType.UploadProgress,
              loaded: event.loaded
            };
            if (event.lengthComputable) {
              progress.total = event.total;
            }
            observer.next(progress);
          });
          xhr.addEventListener('load', onLoad);
          xhr.addEventListener('error', onError);
          xhr.addEventListener('timeout', onTimeout);
          xhr.addEventListener('abort', onError);
          if (req.reportProgress) {
            xhr.addEventListener('progress', onDownProgress);
            if (reqBody !== null && xhr.upload) {
              xhr.upload.addEventListener('progress', onUpProgress);
            }
          }
          xhr.send(reqBody);
          observer.next({
            type: HttpEventType.Sent
          });
          return () => {
            xhr.removeEventListener('error', onError);
            xhr.removeEventListener('abort', onError);
            xhr.removeEventListener('load', onLoad);
            xhr.removeEventListener('timeout', onTimeout);
            if (req.reportProgress) {
              xhr.removeEventListener('progress', onDownProgress);
              if (reqBody !== null && xhr.upload) {
                xhr.upload.removeEventListener('progress', onUpProgress);
              }
            }
            if (xhr.readyState !== xhr.DONE) {
              xhr.abort();
            }
          };
        });
      }));
    }
    static ɵfac = function HttpXhrBackend_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HttpXhrBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_xhr_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.XhrFactory));
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HttpXhrBackend,
      factory: HttpXhrBackend.ɵfac,
      providedIn: 'root'
    });
  }
  return HttpXhrBackend;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function interceptorChainEndFn(req, finalHandlerFn) {
  return finalHandlerFn(req);
}
function adaptLegacyInterceptorToChain(chainTailFn, interceptor) {
  return (initialRequest, finalHandlerFn) => interceptor.intercept(initialRequest, {
    handle: downstreamRequest => chainTailFn(downstreamRequest, finalHandlerFn)
  });
}
function chainedInterceptorFn(chainTailFn, interceptorFn, injector) {
  return (initialRequest, finalHandlerFn) => (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.runInInjectionContext)(injector, () => interceptorFn(initialRequest, downstreamRequest => chainTailFn(downstreamRequest, finalHandlerFn)));
}
const HTTP_INTERCEPTORS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'HTTP_INTERCEPTORS' : '');
const HTTP_INTERCEPTOR_FNS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'HTTP_INTERCEPTOR_FNS' : '', {
  factory: () => []
});
const HTTP_ROOT_INTERCEPTOR_FNS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'HTTP_ROOT_INTERCEPTOR_FNS' : '');
const REQUESTS_CONTRIBUTE_TO_STABILITY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'REQUESTS_CONTRIBUTE_TO_STABILITY' : '', {
  factory: () => true
});
function legacyInterceptorFnFactory() {
  let chain = null;
  return (req, handler) => {
    if (chain === null) {
      const interceptors = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(HTTP_INTERCEPTORS, {
        optional: true
      }) ?? [];
      chain = interceptors.reduceRight(adaptLegacyInterceptorToChain, interceptorChainEndFn);
    }
    const pendingTasks = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.PendingTasks);
    const contributeToStability = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(REQUESTS_CONTRIBUTE_TO_STABILITY);
    if (contributeToStability) {
      const removeTask = pendingTasks.add();
      return chain(req, handler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(removeTask));
    } else {
      return chain(req, handler);
    }
  };
}
let HttpBackend = /*#__PURE__*/(() => {
  class HttpBackend {
    static ɵfac = function HttpBackend_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HttpBackend)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HttpBackend,
      factory: function HttpBackend_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || HttpBackend)();
        } else {
          __ngConditionalFactory__ = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HttpXhrBackend);
        }
        return __ngConditionalFactory__;
      },
      providedIn: 'root'
    });
  }
  return HttpBackend;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let fetchBackendWarningDisplayed = false;
let HttpInterceptorHandler = /*#__PURE__*/(() => {
  class HttpInterceptorHandler {
    backend;
    injector;
    chain = null;
    pendingTasks = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.PendingTasks);
    contributeToStability = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(REQUESTS_CONTRIBUTE_TO_STABILITY);
    constructor(backend, injector) {
      this.backend = backend;
      this.injector = injector;
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !fetchBackendWarningDisplayed) {
        const isTestingBackend = this.backend.isTestingBackend;
        if (typeof ngServerMode !== 'undefined' && ngServerMode && !(this.backend instanceof FetchBackend) && !isTestingBackend) {
          fetchBackendWarningDisplayed = true;
          injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵConsole"]).warn((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵformatRuntimeError"])(2801, 'Angular detected that `HttpClient` is not configured ' + "to use `fetch` APIs. It's strongly recommended to " + 'enable `fetch` for applications that use Server-Side Rendering ' + 'for better performance and compatibility. ' + 'To enable `fetch`, add the `withFetch()` to the `provideHttpClient()` ' + 'call at the root of the application.'));
        }
      }
    }
    handle(initialRequest) {
      if (this.chain === null) {
        const dedupedInterceptorFns = Array.from(new Set([...this.injector.get(HTTP_INTERCEPTOR_FNS), ...this.injector.get(HTTP_ROOT_INTERCEPTOR_FNS, [])]));
        this.chain = dedupedInterceptorFns.reduceRight((nextSequencedFn, interceptorFn) => chainedInterceptorFn(nextSequencedFn, interceptorFn, this.injector), interceptorChainEndFn);
      }
      if (this.contributeToStability) {
        const removeTask = this.pendingTasks.add();
        return this.chain(initialRequest, downstreamRequest => this.backend.handle(downstreamRequest)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(removeTask));
      } else {
        return this.chain(initialRequest, downstreamRequest => this.backend.handle(downstreamRequest));
      }
    }
    static ɵfac = function HttpInterceptorHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HttpInterceptorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.EnvironmentInjector));
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HttpInterceptorHandler,
      factory: HttpInterceptorHandler.ɵfac,
      providedIn: 'root'
    });
  }
  return HttpInterceptorHandler;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let HttpHandler = /*#__PURE__*/(() => {
  class HttpHandler {
    static ɵfac = function HttpHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HttpHandler)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HttpHandler,
      factory: function HttpHandler_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || HttpHandler)();
        } else {
          __ngConditionalFactory__ = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HttpInterceptorHandler);
        }
        return __ngConditionalFactory__;
      },
      providedIn: 'root'
    });
  }
  return HttpHandler;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function addBody(options, body) {
  return {
    body,
    headers: options.headers,
    context: options.context,
    observe: options.observe,
    params: options.params,
    reportProgress: options.reportProgress,
    responseType: options.responseType,
    withCredentials: options.withCredentials,
    credentials: options.credentials,
    transferCache: options.transferCache,
    timeout: options.timeout,
    keepalive: options.keepalive,
    priority: options.priority,
    cache: options.cache,
    mode: options.mode,
    redirect: options.redirect,
    integrity: options.integrity,
    referrer: options.referrer,
    referrerPolicy: options.referrerPolicy
  };
}
let HttpClient = /*#__PURE__*/(() => {
  class HttpClient {
    handler;
    constructor(handler) {
      this.handler = handler;
    }
    request(first, url, options = {}) {
      let req;
      if (first instanceof HttpRequest) {
        req = first;
      } else {
        let headers = undefined;
        if (options.headers instanceof HttpHeaders) {
          headers = options.headers;
        } else {
          headers = new HttpHeaders(options.headers);
        }
        let params = undefined;
        if (!!options.params) {
          if (options.params instanceof HttpParams) {
            params = options.params;
          } else {
            params = new HttpParams({
              fromObject: options.params
            });
          }
        }
        req = new HttpRequest(first, url, options.body !== undefined ? options.body : null, {
          headers,
          context: options.context,
          params,
          reportProgress: options.reportProgress,
          responseType: options.responseType || 'json',
          withCredentials: options.withCredentials,
          transferCache: options.transferCache,
          keepalive: options.keepalive,
          priority: options.priority,
          cache: options.cache,
          mode: options.mode,
          redirect: options.redirect,
          credentials: options.credentials,
          referrer: options.referrer,
          referrerPolicy: options.referrerPolicy,
          integrity: options.integrity,
          timeout: options.timeout
        });
      }
      const events$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(req => this.handler.handle(req)));
      if (first instanceof HttpRequest || options.observe === 'events') {
        return events$;
      }
      const res$ = events$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof HttpResponse));
      switch (options.observe || 'body') {
        case 'body':
          switch (req.responseType) {
            case 'arraybuffer':
              return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
                if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                  throw new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](2806, ngDevMode && 'Response is not an ArrayBuffer.');
                }
                return res.body;
              }));
            case 'blob':
              return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
                if (res.body !== null && !(res.body instanceof Blob)) {
                  throw new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](2807, ngDevMode && 'Response is not a Blob.');
                }
                return res.body;
              }));
            case 'text':
              return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
                if (res.body !== null && typeof res.body !== 'string') {
                  throw new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](2808, ngDevMode && 'Response is not a string.');
                }
                return res.body;
              }));
            case 'json':
            default:
              return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => res.body));
          }
        case 'response':
          return res$;
        default:
          throw new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](2809, ngDevMode && `Unreachable: unhandled observe type ${options.observe}}`);
      }
    }
    delete(url, options = {}) {
      return this.request('DELETE', url, options);
    }
    get(url, options = {}) {
      return this.request('GET', url, options);
    }
    head(url, options = {}) {
      return this.request('HEAD', url, options);
    }
    jsonp(url, callbackParam) {
      return this.request('JSONP', url, {
        params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
        observe: 'body',
        responseType: 'json'
      });
    }
    options(url, options = {}) {
      return this.request('OPTIONS', url, options);
    }
    patch(url, body, options = {}) {
      return this.request('PATCH', url, addBody(options, body));
    }
    post(url, body, options = {}) {
      return this.request('POST', url, addBody(options, body));
    }
    put(url, body, options = {}) {
      return this.request('PUT', url, addBody(options, body));
    }
    static ɵfac = function HttpClient_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HttpClient)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HttpHandler));
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HttpClient,
      factory: HttpClient.ɵfac,
      providedIn: 'root'
    });
  }
  return HttpClient;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let nextRequestId = 0;
let foreignDocument;
const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
const JSONP_ERR_HEADERS_NOT_SUPPORTED = 'JSONP requests do not support headers.';
class JsonpCallbackContext {}
function jsonpCallbackContext() {
  if (typeof window === 'object') {
    return window;
  }
  return {};
}
let JsonpClientBackend = /*#__PURE__*/(() => {
  class JsonpClientBackend {
    callbackMap;
    document;
    resolvedPromise = Promise.resolve();
    constructor(callbackMap, document) {
      this.callbackMap = callbackMap;
      this.document = document;
    }
    nextCallback() {
      return `ng_jsonp_callback_${nextRequestId++}`;
    }
    handle(req) {
      if (req.method !== 'JSONP') {
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](2810, ngDevMode && JSONP_ERR_WRONG_METHOD);
      } else if (req.responseType !== 'json') {
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](2811, ngDevMode && JSONP_ERR_WRONG_RESPONSE_TYPE);
      }
      if (req.headers.keys().length > 0) {
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵRuntimeError"](2812, ngDevMode && JSONP_ERR_HEADERS_NOT_SUPPORTED);
      }
      return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(observer => {
        const callback = this.nextCallback();
        const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
        const node = this.document.createElement('script');
        node.src = url;
        let body = null;
        let finished = false;
        this.callbackMap[callback] = data => {
          delete this.callbackMap[callback];
          body = data;
          finished = true;
        };
        const cleanup = () => {
          node.removeEventListener('load', onLoad);
          node.removeEventListener('error', onError);
          node.remove();
          delete this.callbackMap[callback];
        };
        const onLoad = () => {
          this.resolvedPromise.then(() => {
            cleanup();
            if (!finished) {
              observer.error(new HttpErrorResponse({
                url,
                status: 0,
                statusText: 'JSONP Error',
                error: new Error(JSONP_ERR_NO_CALLBACK)
              }));
              return;
            }
            observer.next(new HttpResponse({
              body,
              status: HTTP_STATUS_CODE_OK,
              statusText: 'OK',
              url
            }));
            observer.complete();
          });
        };
        const onError = error => {
          cleanup();
          observer.error(new HttpErrorResponse({
            error,
            status: 0,
            statusText: 'JSONP Error',
            url
          }));
        };
        node.addEventListener('load', onLoad);
        node.addEventListener('error', onError);
        this.document.body.appendChild(node);
        observer.next({
          type: HttpEventType.Sent
        });
        return () => {
          if (!finished) {
            this.removeListeners(node);
          }
          cleanup();
        };
      });
    }
    removeListeners(script) {
      foreignDocument ??= this.document.implementation.createHTMLDocument();
      foreignDocument.adoptNode(script);
    }
    static ɵfac = function JsonpClientBackend_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || JsonpClientBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](JsonpCallbackContext), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: JsonpClientBackend,
      factory: JsonpClientBackend.ɵfac
    });
  }
  return JsonpClientBackend;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function jsonpInterceptorFn(req, next) {
  if (req.method === 'JSONP') {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(JsonpClientBackend).handle(req);
  }
  return next(req);
}
let JsonpInterceptor = /*#__PURE__*/(() => {
  class JsonpInterceptor {
    injector;
    constructor(injector) {
      this.injector = injector;
    }
    intercept(initialRequest, next) {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.runInInjectionContext)(this.injector, () => jsonpInterceptorFn(initialRequest, downstreamRequest => next.handle(downstreamRequest)));
    }
    static ɵfac = function JsonpInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || JsonpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.EnvironmentInjector));
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: JsonpInterceptor,
      factory: JsonpInterceptor.ɵfac
    });
  }
  return JsonpInterceptor;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const XSRF_ENABLED = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'XSRF_ENABLED' : '', {
  factory: () => true
});
const XSRF_DEFAULT_COOKIE_NAME = 'XSRF-TOKEN';
const XSRF_COOKIE_NAME = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'XSRF_COOKIE_NAME' : '', {
  factory: () => XSRF_DEFAULT_COOKIE_NAME
});
const XSRF_DEFAULT_HEADER_NAME = 'X-XSRF-TOKEN';
const XSRF_HEADER_NAME = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'XSRF_HEADER_NAME' : '', {
  factory: () => XSRF_DEFAULT_HEADER_NAME
});
let HttpXsrfCookieExtractor = /*#__PURE__*/(() => {
  class HttpXsrfCookieExtractor {
    cookieName = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(XSRF_COOKIE_NAME);
    doc = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
    lastCookieString = '';
    lastToken = null;
    parseCount = 0;
    getToken() {
      if (typeof ngServerMode !== 'undefined' && ngServerMode) {
        return null;
      }
      const cookieString = this.doc.cookie || '';
      if (cookieString !== this.lastCookieString) {
        this.parseCount++;
        this.lastToken = (0,_xhr_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.parseCookieValue)(cookieString, this.cookieName);
        this.lastCookieString = cookieString;
      }
      return this.lastToken;
    }
    static ɵfac = function HttpXsrfCookieExtractor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HttpXsrfCookieExtractor)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HttpXsrfCookieExtractor,
      factory: HttpXsrfCookieExtractor.ɵfac,
      providedIn: 'root'
    });
  }
  return HttpXsrfCookieExtractor;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let HttpXsrfTokenExtractor = /*#__PURE__*/(() => {
  class HttpXsrfTokenExtractor {
    static ɵfac = function HttpXsrfTokenExtractor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HttpXsrfTokenExtractor)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HttpXsrfTokenExtractor,
      factory: function HttpXsrfTokenExtractor_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || HttpXsrfTokenExtractor)();
        } else {
          __ngConditionalFactory__ = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HttpXsrfCookieExtractor);
        }
        return __ngConditionalFactory__;
      },
      providedIn: 'root'
    });
  }
  return HttpXsrfTokenExtractor;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function xsrfInterceptorFn(req, next) {
  if (!(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(XSRF_ENABLED) || req.method === 'GET' || req.method === 'HEAD') {
    return next(req);
  }
  try {
    const locationHref = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_platform_location_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.PlatformLocation).href;
    const {
      origin: locationOrigin
    } = new URL(locationHref);
    const {
      origin: requestOrigin
    } = new URL(req.url, locationOrigin);
    if (locationOrigin !== requestOrigin) {
      return next(req);
    }
  } catch {
    return next(req);
  }
  const token = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(HttpXsrfTokenExtractor).getToken();
  const headerName = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(XSRF_HEADER_NAME);
  if (token != null && !req.headers.has(headerName)) {
    req = req.clone({
      headers: req.headers.set(headerName, token)
    });
  }
  return next(req);
}
let HttpXsrfInterceptor = /*#__PURE__*/(() => {
  class HttpXsrfInterceptor {
    injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.EnvironmentInjector);
    intercept(initialRequest, next) {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.runInInjectionContext)(this.injector, () => xsrfInterceptorFn(initialRequest, downstreamRequest => next.handle(downstreamRequest)));
    }
    static ɵfac = function HttpXsrfInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HttpXsrfInterceptor)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HttpXsrfInterceptor,
      factory: HttpXsrfInterceptor.ɵfac
    });
  }
  return HttpXsrfInterceptor;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
var HttpFeatureKind = /*#__PURE__*/function (HttpFeatureKind) {
  HttpFeatureKind[HttpFeatureKind["Interceptors"] = 0] = "Interceptors";
  HttpFeatureKind[HttpFeatureKind["LegacyInterceptors"] = 1] = "LegacyInterceptors";
  HttpFeatureKind[HttpFeatureKind["CustomXsrfConfiguration"] = 2] = "CustomXsrfConfiguration";
  HttpFeatureKind[HttpFeatureKind["NoXsrfProtection"] = 3] = "NoXsrfProtection";
  HttpFeatureKind[HttpFeatureKind["JsonpSupport"] = 4] = "JsonpSupport";
  HttpFeatureKind[HttpFeatureKind["RequestsMadeViaParent"] = 5] = "RequestsMadeViaParent";
  HttpFeatureKind[HttpFeatureKind["Fetch"] = 6] = "Fetch";
  return HttpFeatureKind;
}(HttpFeatureKind || {});
function makeHttpFeature(kind, providers) {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}
function provideHttpClient(...features) {
  if (ngDevMode) {
    const featureKinds = new Set(features.map(f => f.ɵkind));
    if (featureKinds.has(HttpFeatureKind.NoXsrfProtection) && featureKinds.has(HttpFeatureKind.CustomXsrfConfiguration)) {
      throw new Error(ngDevMode ? `Configuration error: found both withXsrfConfiguration() and withNoXsrfProtection() in the same call to provideHttpClient(), which is a contradiction.` : '');
    }
  }
  const providers = [HttpClient, HttpInterceptorHandler, {
    provide: HttpHandler,
    useExisting: HttpInterceptorHandler
  }, {
    provide: HttpBackend,
    useFactory: () => {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(FETCH_BACKEND, {
        optional: true
      }) ?? (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(HttpXhrBackend);
    }
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useValue: xsrfInterceptorFn,
    multi: true
  }];
  for (const feature of features) {
    providers.push(...feature.ɵproviders);
  }
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.makeEnvironmentProviders)(providers);
}
function withInterceptors(interceptorFns) {
  return makeHttpFeature(HttpFeatureKind.Interceptors, interceptorFns.map(interceptorFn => {
    return {
      provide: HTTP_INTERCEPTOR_FNS,
      useValue: interceptorFn,
      multi: true
    };
  }));
}
const LEGACY_INTERCEPTOR_FN = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(typeof ngDevMode !== 'undefined' && ngDevMode ? 'LEGACY_INTERCEPTOR_FN' : '');
function withInterceptorsFromDi() {
  return makeHttpFeature(HttpFeatureKind.LegacyInterceptors, [{
    provide: LEGACY_INTERCEPTOR_FN,
    useFactory: legacyInterceptorFnFactory
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useExisting: LEGACY_INTERCEPTOR_FN,
    multi: true
  }]);
}
function withXsrfConfiguration({
  cookieName,
  headerName
}) {
  const providers = [];
  if (cookieName !== undefined) {
    providers.push({
      provide: XSRF_COOKIE_NAME,
      useValue: cookieName
    });
  }
  if (headerName !== undefined) {
    providers.push({
      provide: XSRF_HEADER_NAME,
      useValue: headerName
    });
  }
  return makeHttpFeature(HttpFeatureKind.CustomXsrfConfiguration, providers);
}
function withNoXsrfProtection() {
  return makeHttpFeature(HttpFeatureKind.NoXsrfProtection, [{
    provide: XSRF_ENABLED,
    useValue: false
  }]);
}
function withJsonpSupport() {
  return makeHttpFeature(HttpFeatureKind.JsonpSupport, [JsonpClientBackend, {
    provide: JsonpCallbackContext,
    useFactory: jsonpCallbackContext
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useValue: jsonpInterceptorFn,
    multi: true
  }]);
}
function withRequestsMadeViaParent() {
  return makeHttpFeature(HttpFeatureKind.RequestsMadeViaParent, [{
    provide: HttpBackend,
    useFactory: () => {
      const handlerFromParent = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(HttpHandler, {
        skipSelf: true,
        optional: true
      });
      if (ngDevMode && handlerFromParent === null) {
        throw new Error('withRequestsMadeViaParent() can only be used when the parent injector also configures HttpClient');
      }
      return handlerFromParent;
    }
  }]);
}
function withFetch() {
  return makeHttpFeature(HttpFeatureKind.Fetch, [FetchBackend, {
    provide: FETCH_BACKEND,
    useExisting: FetchBackend
  }, {
    provide: HttpBackend,
    useExisting: FetchBackend
  }]);
}
let HttpClientXsrfModule = /*#__PURE__*/(() => {
  class HttpClientXsrfModule {
    static disable() {
      return {
        ngModule: HttpClientXsrfModule,
        providers: [withNoXsrfProtection().ɵproviders]
      };
    }
    static withOptions(options = {}) {
      return {
        ngModule: HttpClientXsrfModule,
        providers: withXsrfConfiguration(options).ɵproviders
      };
    }
    static ɵfac = function HttpClientXsrfModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HttpClientXsrfModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: HttpClientXsrfModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      providers: [HttpXsrfInterceptor, {
        provide: HTTP_INTERCEPTORS,
        useExisting: HttpXsrfInterceptor,
        multi: true
      }, {
        provide: HttpXsrfTokenExtractor,
        useClass: HttpXsrfCookieExtractor
      }, withXsrfConfiguration({
        cookieName: XSRF_DEFAULT_COOKIE_NAME,
        headerName: XSRF_DEFAULT_HEADER_NAME
      }).ɵproviders, {
        provide: XSRF_ENABLED,
        useValue: true
      }]
    });
  }
  return HttpClientXsrfModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let HttpClientModule = /*#__PURE__*/(() => {
  class HttpClientModule {
    static ɵfac = function HttpClientModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HttpClientModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: HttpClientModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      providers: [provideHttpClient(withInterceptorsFromDi())]
    });
  }
  return HttpClientModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let HttpClientJsonpModule = /*#__PURE__*/(() => {
  class HttpClientJsonpModule {
    static ɵfac = function HttpClientJsonpModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HttpClientJsonpModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: HttpClientJsonpModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      providers: [withJsonpSupport().ɵproviders]
    });
  }
  return HttpClientJsonpModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ },

/***/ 89204
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ 97516
/*!**************************************************************!*\
  !*** ./node_modules/@angular/common/fesm2022/_xhr-chunk.mjs ***!
  \**************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XhrFactory: () => (/* binding */ XhrFactory),
/* harmony export */   parseCookieValue: () => (/* binding */ parseCookieValue)
/* harmony export */ });
/**
 * @license Angular v21.1.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */

function parseCookieValue(cookieStr, name) {
  name = encodeURIComponent(name);
  for (const cookie of cookieStr.split(';')) {
    const eqIndex = cookie.indexOf('=');
    const [cookieName, cookieValue] = eqIndex == -1 ? [cookie, ''] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)];
    if (cookieName.trim() === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}
class XhrFactory {}


/***/ }

}])
//# sourceMappingURL=8824.js.map