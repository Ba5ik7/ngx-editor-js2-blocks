(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[1459],{

/***/ 90935
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_icon-registry-chunk.mjs ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatIconRegistry: () => (/* binding */ MatIconRegistry),
/* harmony export */   getMatIconFailedToSanitizeLiteralError: () => (/* binding */ getMatIconFailedToSanitizeLiteralError),
/* harmony export */   getMatIconFailedToSanitizeUrlError: () => (/* binding */ getMatIconFailedToSanitizeUrlError),
/* harmony export */   getMatIconNameNotFoundError: () => (/* binding */ getMatIconNameNotFoundError),
/* harmony export */   getMatIconNoHttpProviderError: () => (/* binding */ getMatIconNoHttpProviderError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/private */ 74418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 54380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 2649);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32778);







function getMatIconNameNotFoundError(iconName) {
  return Error(`Unable to find icon with the name "${iconName}"`);
}
function getMatIconNoHttpProviderError() {
  return Error('Could not find HttpClient for use with Angular Material icons. ' + 'Please add provideHttpClient() to your providers.');
}
function getMatIconFailedToSanitizeUrlError(url) {
  return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL ` + `via Angular's DomSanitizer. Attempted URL was "${url}".`);
}
function getMatIconFailedToSanitizeLiteralError(literal) {
  return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by ` + `Angular's DomSanitizer. Attempted literal was "${literal}".`);
}
class SvgIconConfig {
  url;
  svgText;
  options;
  svgElement = null;
  constructor(url, svgText, options) {
    this.url = url;
    this.svgText = svgText;
    this.options = options;
  }
}
let MatIconRegistry = /*#__PURE__*/(() => {
  class MatIconRegistry {
    _httpClient;
    _sanitizer;
    _errorHandler;
    _document;
    _svgIconConfigs = new Map();
    _iconSetConfigs = new Map();
    _cachedIconsByUrl = new Map();
    _inProgressUrlFetches = new Map();
    _fontCssClassesByAlias = new Map();
    _resolvers = [];
    _defaultFontSetClass = ['material-icons', 'mat-ligature-font'];
    constructor(_httpClient, _sanitizer, document, _errorHandler) {
      this._httpClient = _httpClient;
      this._sanitizer = _sanitizer;
      this._errorHandler = _errorHandler;
      this._document = document;
    }
    addSvgIcon(iconName, url, options) {
      return this.addSvgIconInNamespace('', iconName, url, options);
    }
    addSvgIconLiteral(iconName, literal, options) {
      return this.addSvgIconLiteralInNamespace('', iconName, literal, options);
    }
    addSvgIconInNamespace(namespace, iconName, url, options) {
      return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
    }
    addSvgIconResolver(resolver) {
      this._resolvers.push(resolver);
      return this;
    }
    addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
      const cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__.SecurityContext.HTML, literal);
      if (!cleanLiteral) {
        throw getMatIconFailedToSanitizeLiteralError(literal);
      }
      const trustedLiteral = (0,_angular_cdk_private__WEBPACK_IMPORTED_MODULE_0__.trustedHTMLFromString)(cleanLiteral);
      return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig('', trustedLiteral, options));
    }
    addSvgIconSet(url, options) {
      return this.addSvgIconSetInNamespace('', url, options);
    }
    addSvgIconSetLiteral(literal, options) {
      return this.addSvgIconSetLiteralInNamespace('', literal, options);
    }
    addSvgIconSetInNamespace(namespace, url, options) {
      return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
    }
    addSvgIconSetLiteralInNamespace(namespace, literal, options) {
      const cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__.SecurityContext.HTML, literal);
      if (!cleanLiteral) {
        throw getMatIconFailedToSanitizeLiteralError(literal);
      }
      const trustedLiteral = (0,_angular_cdk_private__WEBPACK_IMPORTED_MODULE_0__.trustedHTMLFromString)(cleanLiteral);
      return this._addSvgIconSetConfig(namespace, new SvgIconConfig('', trustedLiteral, options));
    }
    registerFontClassAlias(alias, classNames = alias) {
      this._fontCssClassesByAlias.set(alias, classNames);
      return this;
    }
    classNameForFontAlias(alias) {
      return this._fontCssClassesByAlias.get(alias) || alias;
    }
    setDefaultFontSetClass(...classNames) {
      this._defaultFontSetClass = classNames;
      return this;
    }
    getDefaultFontSetClass() {
      return this._defaultFontSetClass;
    }
    getSvgIconFromUrl(safeUrl) {
      const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__.SecurityContext.RESOURCE_URL, safeUrl);
      if (!url) {
        throw getMatIconFailedToSanitizeUrlError(safeUrl);
      }
      const cachedIcon = this._cachedIconsByUrl.get(url);
      if (cachedIcon) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(cloneSvg(cachedIcon));
      }
      return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(svg => this._cachedIconsByUrl.set(url, svg)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(svg => cloneSvg(svg)));
    }
    getNamedSvgIcon(name, namespace = '') {
      const key = iconKey(namespace, name);
      let config = this._svgIconConfigs.get(key);
      if (config) {
        return this._getSvgFromConfig(config);
      }
      config = this._getIconConfigFromResolvers(namespace, name);
      if (config) {
        this._svgIconConfigs.set(key, config);
        return this._getSvgFromConfig(config);
      }
      const iconSetConfigs = this._iconSetConfigs.get(namespace);
      if (iconSetConfigs) {
        return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(getMatIconNameNotFoundError(key));
    }
    ngOnDestroy() {
      this._resolvers = [];
      this._svgIconConfigs.clear();
      this._iconSetConfigs.clear();
      this._cachedIconsByUrl.clear();
    }
    _getSvgFromConfig(config) {
      if (config.svgText) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(cloneSvg(this._svgElementFromConfig(config)));
      } else {
        return this._loadSvgIconFromConfig(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(svg => cloneSvg(svg)));
      }
    }
    _getSvgFromIconSetConfigs(name, iconSetConfigs) {
      const namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
      if (namedIcon) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(namedIcon);
      }
      const iconSetFetchRequests = iconSetConfigs.filter(iconSetConfig => !iconSetConfig.svgText).map(iconSetConfig => {
        return this._loadSvgIconSetFromConfig(iconSetConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
          const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__.SecurityContext.RESOURCE_URL, iconSetConfig.url);
          const errorMessage = `Loading icon set URL: ${url} failed: ${err.message}`;
          this._errorHandler.handleError(new Error(errorMessage));
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
        }));
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)(iconSetFetchRequests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
        const foundIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
        if (!foundIcon) {
          throw getMatIconNameNotFoundError(name);
        }
        return foundIcon;
      }));
    }
    _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
      for (let i = iconSetConfigs.length - 1; i >= 0; i--) {
        const config = iconSetConfigs[i];
        if (config.svgText && config.svgText.toString().indexOf(iconName) > -1) {
          const svg = this._svgElementFromConfig(config);
          const foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);
          if (foundIcon) {
            return foundIcon;
          }
        }
      }
      return null;
    }
    _loadSvgIconFromConfig(config) {
      return this._fetchIcon(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(svgText => config.svgText = svgText), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => this._svgElementFromConfig(config)));
    }
    _loadSvgIconSetFromConfig(config) {
      if (config.svgText) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
      }
      return this._fetchIcon(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(svgText => config.svgText = svgText));
    }
    _extractSvgIconFromSet(iconSet, iconName, options) {
      const iconSource = iconSet.querySelector(`[id="${iconName}"]`);
      if (!iconSource) {
        return null;
      }
      const iconElement = iconSource.cloneNode(true);
      iconElement.removeAttribute('id');
      if (iconElement.nodeName.toLowerCase() === 'svg') {
        return this._setSvgAttributes(iconElement, options);
      }
      if (iconElement.nodeName.toLowerCase() === 'symbol') {
        return this._setSvgAttributes(this._toSvgElement(iconElement), options);
      }
      const svg = this._svgElementFromString((0,_angular_cdk_private__WEBPACK_IMPORTED_MODULE_0__.trustedHTMLFromString)('<svg></svg>'));
      svg.appendChild(iconElement);
      return this._setSvgAttributes(svg, options);
    }
    _svgElementFromString(str) {
      const div = this._document.createElement('DIV');
      div.innerHTML = str;
      const svg = div.querySelector('svg');
      if (!svg) {
        throw Error('<svg> tag not found');
      }
      return svg;
    }
    _toSvgElement(element) {
      const svg = this._svgElementFromString((0,_angular_cdk_private__WEBPACK_IMPORTED_MODULE_0__.trustedHTMLFromString)('<svg></svg>'));
      const attributes = element.attributes;
      for (let i = 0; i < attributes.length; i++) {
        const {
          name,
          value
        } = attributes[i];
        if (name !== 'id') {
          svg.setAttribute(name, value);
        }
      }
      for (let i = 0; i < element.childNodes.length; i++) {
        if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
          svg.appendChild(element.childNodes[i].cloneNode(true));
        }
      }
      return svg;
    }
    _setSvgAttributes(svg, options) {
      svg.setAttribute('fit', '');
      svg.setAttribute('height', '100%');
      svg.setAttribute('width', '100%');
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      svg.setAttribute('focusable', 'false');
      if (options && options.viewBox) {
        svg.setAttribute('viewBox', options.viewBox);
      }
      return svg;
    }
    _fetchIcon(iconConfig) {
      const {
        url: safeUrl,
        options
      } = iconConfig;
      const withCredentials = options?.withCredentials ?? false;
      if (!this._httpClient) {
        throw getMatIconNoHttpProviderError();
      }
      if (safeUrl == null) {
        throw Error(`Cannot fetch icon from URL "${safeUrl}".`);
      }
      const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__.SecurityContext.RESOURCE_URL, safeUrl);
      if (!url) {
        throw getMatIconFailedToSanitizeUrlError(safeUrl);
      }
      const inProgressFetch = this._inProgressUrlFetches.get(url);
      if (inProgressFetch) {
        return inProgressFetch;
      }
      const req = this._httpClient.get(url, {
        responseType: 'text',
        withCredentials
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(svg => {
        return (0,_angular_cdk_private__WEBPACK_IMPORTED_MODULE_0__.trustedHTMLFromString)(svg);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => this._inProgressUrlFetches.delete(url)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.share)());
      this._inProgressUrlFetches.set(url, req);
      return req;
    }
    _addSvgIconConfig(namespace, iconName, config) {
      this._svgIconConfigs.set(iconKey(namespace, iconName), config);
      return this;
    }
    _addSvgIconSetConfig(namespace, config) {
      const configNamespace = this._iconSetConfigs.get(namespace);
      if (configNamespace) {
        configNamespace.push(config);
      } else {
        this._iconSetConfigs.set(namespace, [config]);
      }
      return this;
    }
    _svgElementFromConfig(config) {
      if (!config.svgElement) {
        const svg = this._svgElementFromString(config.svgText);
        this._setSvgAttributes(svg, config.options);
        config.svgElement = svg;
      }
      return config.svgElement;
    }
    _getIconConfigFromResolvers(namespace, name) {
      for (let i = 0; i < this._resolvers.length; i++) {
        const result = this._resolvers[i](name, namespace);
        if (result) {
          return isSafeUrlWithOptions(result) ? new SvgIconConfig(result.url, null, result.options) : new SvgIconConfig(result, null);
        }
      }
      return undefined;
    }
    static ɵfac = function MatIconRegistry_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatIconRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ErrorHandler));
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: MatIconRegistry,
      factory: MatIconRegistry.ɵfac,
      providedIn: 'root'
    });
  }
  return MatIconRegistry;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function cloneSvg(svg) {
  return svg.cloneNode(true);
}
function iconKey(namespace, name) {
  return namespace + ':' + name;
}
function isSafeUrlWithOptions(value) {
  return !!(value.url && value.options);
}


/***/ },

/***/ 93840
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/icon.mjs ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_ICON_DEFAULT_OPTIONS: () => (/* binding */ MAT_ICON_DEFAULT_OPTIONS),
/* harmony export */   MAT_ICON_LOCATION: () => (/* binding */ MAT_ICON_LOCATION),
/* harmony export */   MatIcon: () => (/* binding */ MatIcon),
/* harmony export */   MatIconModule: () => (/* binding */ MatIconModule),
/* harmony export */   MatIconRegistry: () => (/* reexport safe */ _icon_registry_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.MatIconRegistry),
/* harmony export */   getMatIconFailedToSanitizeLiteralError: () => (/* reexport safe */ _icon_registry_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.getMatIconFailedToSanitizeLiteralError),
/* harmony export */   getMatIconFailedToSanitizeUrlError: () => (/* reexport safe */ _icon_registry_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.getMatIconFailedToSanitizeUrlError),
/* harmony export */   getMatIconNameNotFoundError: () => (/* reexport safe */ _icon_registry_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.getMatIconNameNotFoundError),
/* harmony export */   getMatIconNoHttpProviderError: () => (/* reexport safe */ _icon_registry_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.getMatIconNoHttpProviderError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ 13266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var _icon_registry_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_icon-registry-chunk.mjs */ 90935);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/private */ 74418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54380);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 2649);






const _c0 = ["*"];




const MAT_ICON_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MAT_ICON_DEFAULT_OPTIONS');
const MAT_ICON_LOCATION = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('mat-icon-location', {
  providedIn: 'root',
  factory: () => {
    const _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
    const _location = _document ? _document.location : null;
    return {
      getPathname: () => _location ? _location.pathname + _location.search : ''
    };
  }
});
const funcIriAttributes = ['clip-path', 'color-profile', 'src', 'cursor', 'fill', 'filter', 'marker', 'marker-start', 'marker-mid', 'marker-end', 'mask', 'stroke'];
const funcIriAttributeSelector = /*#__PURE__*/ /*#__PURE__*/funcIriAttributes.map(attr => `[${attr}]`).join(', ');
const funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
let MatIcon = /*#__PURE__*/(() => {
  class MatIcon {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    _iconRegistry = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_icon_registry_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__.MatIconRegistry);
    _location = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MAT_ICON_LOCATION);
    _errorHandler = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ErrorHandler);
    _defaultColor;
    get color() {
      return this._color || this._defaultColor;
    }
    set color(value) {
      this._color = value;
    }
    _color;
    inline = false;
    get svgIcon() {
      return this._svgIcon;
    }
    set svgIcon(value) {
      if (value !== this._svgIcon) {
        if (value) {
          this._updateSvgIcon(value);
        } else if (this._svgIcon) {
          this._clearSvgElement();
        }
        this._svgIcon = value;
      }
    }
    _svgIcon;
    get fontSet() {
      return this._fontSet;
    }
    set fontSet(value) {
      const newValue = this._cleanupFontValue(value);
      if (newValue !== this._fontSet) {
        this._fontSet = newValue;
        this._updateFontIconClasses();
      }
    }
    _fontSet;
    get fontIcon() {
      return this._fontIcon;
    }
    set fontIcon(value) {
      const newValue = this._cleanupFontValue(value);
      if (newValue !== this._fontIcon) {
        this._fontIcon = newValue;
        this._updateFontIconClasses();
      }
    }
    _fontIcon;
    _previousFontSetClass = [];
    _previousFontIconClass;
    _svgName = null;
    _svgNamespace = null;
    _previousPath;
    _elementsWithExternalReferences;
    _currentIconFetch = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    constructor() {
      const ariaHidden = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(new _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostAttributeToken('aria-hidden'), {
        optional: true
      });
      const defaults = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MAT_ICON_DEFAULT_OPTIONS, {
        optional: true
      });
      if (defaults) {
        if (defaults.color) {
          this.color = this._defaultColor = defaults.color;
        }
        if (defaults.fontSet) {
          this.fontSet = defaults.fontSet;
        }
      }
      if (!ariaHidden) {
        this._elementRef.nativeElement.setAttribute('aria-hidden', 'true');
      }
    }
    _splitIconName(iconName) {
      if (!iconName) {
        return ['', ''];
      }
      const parts = iconName.split(':');
      switch (parts.length) {
        case 1:
          return ['', parts[0]];
        case 2:
          return parts;
        default:
          throw Error(`Invalid icon name: "${iconName}"`);
      }
    }
    ngOnInit() {
      this._updateFontIconClasses();
    }
    ngAfterViewChecked() {
      const cachedElements = this._elementsWithExternalReferences;
      if (cachedElements && cachedElements.size) {
        const newPath = this._location.getPathname();
        if (newPath !== this._previousPath) {
          this._previousPath = newPath;
          this._prependPathToReferences(newPath);
        }
      }
    }
    ngOnDestroy() {
      this._currentIconFetch.unsubscribe();
      if (this._elementsWithExternalReferences) {
        this._elementsWithExternalReferences.clear();
      }
    }
    _usingFontIcon() {
      return !this.svgIcon;
    }
    _setSvgElement(svg) {
      this._clearSvgElement();
      const path = this._location.getPathname();
      this._previousPath = path;
      this._cacheChildrenWithExternalReferences(svg);
      this._prependPathToReferences(path);
      this._elementRef.nativeElement.appendChild(svg);
    }
    _clearSvgElement() {
      const layoutElement = this._elementRef.nativeElement;
      let childCount = layoutElement.childNodes.length;
      if (this._elementsWithExternalReferences) {
        this._elementsWithExternalReferences.clear();
      }
      while (childCount--) {
        const child = layoutElement.childNodes[childCount];
        if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
          child.remove();
        }
      }
    }
    _updateFontIconClasses() {
      if (!this._usingFontIcon()) {
        return;
      }
      const elem = this._elementRef.nativeElement;
      const fontSetClasses = (this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/) : this._iconRegistry.getDefaultFontSetClass()).filter(className => className.length > 0);
      this._previousFontSetClass.forEach(className => elem.classList.remove(className));
      fontSetClasses.forEach(className => elem.classList.add(className));
      this._previousFontSetClass = fontSetClasses;
      if (this.fontIcon !== this._previousFontIconClass && !fontSetClasses.includes('mat-ligature-font')) {
        if (this._previousFontIconClass) {
          elem.classList.remove(this._previousFontIconClass);
        }
        if (this.fontIcon) {
          elem.classList.add(this.fontIcon);
        }
        this._previousFontIconClass = this.fontIcon;
      }
    }
    _cleanupFontValue(value) {
      return typeof value === 'string' ? value.trim().split(' ')[0] : value;
    }
    _prependPathToReferences(path) {
      const elements = this._elementsWithExternalReferences;
      if (elements) {
        elements.forEach((attrs, element) => {
          attrs.forEach(attr => {
            element.setAttribute(attr.name, `url('${path}#${attr.value}')`);
          });
        });
      }
    }
    _cacheChildrenWithExternalReferences(element) {
      const elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
      const elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map();
      for (let i = 0; i < elementsWithFuncIri.length; i++) {
        funcIriAttributes.forEach(attr => {
          const elementWithReference = elementsWithFuncIri[i];
          const value = elementWithReference.getAttribute(attr);
          const match = value ? value.match(funcIriPattern) : null;
          if (match) {
            let attributes = elements.get(elementWithReference);
            if (!attributes) {
              attributes = [];
              elements.set(elementWithReference, attributes);
            }
            attributes.push({
              name: attr,
              value: match[1]
            });
          }
        });
      }
    }
    _updateSvgIcon(rawName) {
      this._svgNamespace = null;
      this._svgName = null;
      this._currentIconFetch.unsubscribe();
      if (rawName) {
        const [namespace, iconName] = this._splitIconName(rawName);
        if (namespace) {
          this._svgNamespace = namespace;
        }
        if (iconName) {
          this._svgName = iconName;
        }
        this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(svg => this._setSvgElement(svg), err => {
          const errorMessage = `Error retrieving icon ${namespace}:${iconName}! ${err.message}`;
          this._errorHandler.handleError(new Error(errorMessage));
        });
      }
    }
    static ɵfac = function MatIcon_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatIcon)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatIcon,
      selectors: [["mat-icon"]],
      hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
      hostVars: 10,
      hostBindings: function MatIcon_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-mat-icon-type", ctx._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", ctx._svgName || ctx.fontIcon)("data-mat-icon-namespace", ctx._svgNamespace || ctx.fontSet)("fontIcon", ctx._usingFontIcon() ? ctx.fontIcon : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.color ? "mat-" + ctx.color : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
        }
      },
      inputs: {
        color: "color",
        inline: [2, "inline", "inline", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute],
        svgIcon: "svgIcon",
        fontSet: "fontSet",
        fontIcon: "fontIcon"
      },
      exportAs: ["matIcon"],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      styles: ["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatIcon;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatIconModule = /*#__PURE__*/(() => {
  class MatIconModule {
    static ɵfac = function MatIconModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatIconModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatIconModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__.BidiModule]
    });
  }
  return MatIconModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }

}])
//# sourceMappingURL=1459.js.map