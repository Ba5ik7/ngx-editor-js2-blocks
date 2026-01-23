(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[4699],{

/***/ 2727
/*!****************************************************************!*\
  !*** ./projects/demo/src/app/services/theme-picker.service.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemePickerService: () => (/* binding */ ThemePickerService)
/* harmony export */ });
/* harmony import */ var _Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



let ThemePickerService = /*#__PURE__*/(() => {
  class ThemePickerService {
    static THEME_EXAMPLE_ICON = 'assets/img/theme-demo-icon.svg';
    static DEFAULT_THEME = 'cyan-palette';
    static THEME_STRORAGE_KEY = 'theme-picker-current-name';
    static DARK_MODE_STRORAGE_KEY = 'dark-mode';
    static THEMES = [{
      displayName: 'Red Palette',
      name: 'red-palette',
      color: '#ffd9d4'
    }, {
      displayName: 'Green Palette',
      name: 'green-palette',
      color: '#76ff61'
    }, {
      displayName: 'Blue Palette',
      name: 'blue-palette',
      color: '#e0e0fe'
    }, {
      displayName: 'Yellow Palette',
      name: 'yellow-palette',
      color: '#eaea01'
    }, {
      displayName: 'Cyan Palette',
      name: 'cyan-palette',
      color: '#00fbfb'
    }, {
      displayName: 'Magenta Palette',
      name: 'magenta-palette',
      color: '#ffd6f5'
    }, {
      displayName: 'Orange Palette',
      name: 'orange-palette',
      color: '#ffdcc7'
    }, {
      displayName: 'Chartreuse Palette',
      name: 'chartreuse-palette',
      color: '#82ff0d'
    }, {
      displayName: 'Spring-Green Palette',
      name: 'spring-green-palette',
      color: '#62ff93'
    }, {
      displayName: 'Azure Palette',
      name: 'azure-palette',
      color: '#d6e3fe'
    }, {
      color: '#810081',
      displayName: 'Violet Palette',
      name: 'violet-palette'
    }, {
      displayName: 'Rose Palette',
      name: 'rose-palette',
      color: '#ffd8e1'
    }];
    darkMode = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(localStorage.getItem(ThemePickerService.DARK_MODE_STRORAGE_KEY) === 'true', ...(ngDevMode ? [{
      debugName: "darkMode"
    }] : []));
    darkModeResource = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.resource)({
      ...(ngDevMode ? {
        debugName: "darkModeResource"
      } : {}),
      params: () => this.darkMode(),
      loader: (() => function () {
        var _ref = (0,_Users_ba5ik7_Documents_GIT_tmdjr_ngx_editor_js2_blocks_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
          params: darkMode
        }) {
          yield localStorage.setItem(ThemePickerService.DARK_MODE_STRORAGE_KEY, darkMode.toString());
        });
        return function loader(_x) {
          return _ref.apply(this, arguments);
        };
      }())()
    });
    userSelectedTheme = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(localStorage.getItem(ThemePickerService.THEME_STRORAGE_KEY) ?? ThemePickerService.DEFAULT_THEME, ...(ngDevMode ? [{
      debugName: "userSelectedTheme"
    }] : []));
    currentTheme = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.linkedSignal)({
      ...(ngDevMode ? {
        debugName: "currentTheme"
      } : {}),
      source: this.userSelectedTheme,
      computation: (newTheme, previous) => {
        return this.setThemeStyleAndLocalStorage(newTheme) ? newTheme : previous?.value ?? ThemePickerService.DEFAULT_THEME;
      }
    });
    setThemeStyleAndLocalStorage(newTheme) {
      localStorage.setItem(ThemePickerService.THEME_STRORAGE_KEY, newTheme);
      document.body.className = `${newTheme} ${this.darkMode() ? 'dark-mode' : 'light-mode'}`;
      return true;
    }
    static ɵfac = function ThemePickerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ThemePickerService)();
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ThemePickerService,
      factory: ThemePickerService.ɵfac,
      providedIn: 'root'
    });
  }
  return ThemePickerService;
})();

/***/ },

/***/ 4516
/*!*******************************************************!*\
  !*** ./projects/demo/src/app/services/app.service.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppService: () => (/* binding */ AppService),
/* harmony export */   BROKEN_TEST_DATA: () => (/* binding */ BROKEN_TEST_DATA),
/* harmony export */   TEST_DATA: () => (/* binding */ TEST_DATA),
/* harmony export */   TEST_DATA_TWO: () => (/* binding */ TEST_DATA_TWO)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


const TEST_DATA = [{
  blockId: 'iovlbzgosf',
  sortIndex: 0,
  componentInstanceName: 'HeaderBlockComponent',
  savedAction: 'h1',
  dataClean: '🚀 Ready to Explore?'
}, {
  blockId: '6ldk3i',
  sortIndex: 1,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'large',
  dataClean: 'This demo showcases the core concept of Ngx-EditorJs2 — a flexible, block-based content editor built with Angular. Each section of content is a self-contained block that can be rearranged via drag and drop, making it easy to structure and reorganize complex content visually.<div><br></div><div>Blocks aren’t just static — they can be configured through block-specific settings. For example, the Header block allows you to choose between multiple heading levels (H1–H6), and the Image block supports captions and alignment settings.</div><div><br></div><div>In addition, when selecting text within blocks that support inline formatting, a contextual inline toolbar appears. This toolbar enables quick formatting actions such as <b>bold</b>, <i>italic</i>, and text alignment (left, center, right) — allowing for a more expressive and intuitive editing experience.</div><div><br></div><div>Use this page to explore how each block behaves, how they can be customized, and how the editor adapts to your content needs in a modular and scalable way.</div>'
}, {
  blockId: 'pkm1k',
  sortIndex: 2,
  componentInstanceName: 'HeaderBlockComponent',
  savedAction: 'h3',
  dataClean: '✍️ Paragraph + Header'
}, {
  blockId: 'wpg67v',
  sortIndex: 3,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'large',
  dataClean: 'The bread and butter of any editor. Use paragraphs for flowing content, and headers to create structure and hierarchy. <b>Clear</b>. <i>Clean</i>. <u>Essential</u>.'
}, {
  blockId: '8u3uiij5vyj',
  sortIndex: 4,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'large',
  dataClean: '<ul><li><a href="https://www.typescriptlang.org/">TypeScript</a> and HTML5 programming</li><li>Angular app-design fundamentals, as described in <a href="https://angular.io/guide/architecture">Angular Concepts</a><br></li><li>The basics of <a href="https://angular.io/guide/architecture-components#template-syntax">Angular template syntax</a><br></li></ul>'
}, {
  blockId: '2rdtwb',
  sortIndex: 5,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'medium',
  dataClean: ''
}, {
  blockId: '8w37us',
  sortIndex: 6,
  componentInstanceName: 'HeaderBlockComponent',
  savedAction: 'h3',
  dataClean: '💡 Quote'
}, {
  blockId: '31tbry',
  sortIndex: 7,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'large',
  dataClean: 'Craft your favorite inspiration, callouts, or even markdown-style blockquotes using the Quote block.'
}, {
  blockId: 'n177d7',
  sortIndex: 8,
  componentInstanceName: 'NgxEditorJs2BlockquotesComponent',
  savedAction: 'display-large',
  dataClean: '“A quote block is like a spotlight — simple, elegant, and perfect for making a point.”'
}, {
  blockId: '7idv',
  sortIndex: 9,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'medium',
  dataClean: ''
}, {
  blockId: '9f1gqx',
  sortIndex: 10,
  componentInstanceName: 'HeaderBlockComponent',
  savedAction: 'h3',
  dataClean: '⚠️ Panels'
}, {
  blockId: '7g0me4',
  sortIndex: 11,
  componentInstanceName: 'NgxEditorJs2PanelComponent',
  savedAction: 'info',
  dataClean: 'Panels are content blocks that help you organize and emphasize sections of your page.<div><ul><li><b>Improved Readability</b> – Panels break up long content, making it easier for readers to follow.</li><li><b>Enhanced Organization</b> – Panels provide logical structure, helping users find information faster.</li><li><b>Visual Appeal</b> – With color and layout options, panels draw attention to key areas on the page.</li></ul></div><div></div><div>Few panel types out of the box:</div><div><ul><li><b>Info Panel</b> – Ideal for general information.</li><li><b>Note Panel</b> – Perfect for emphasizing notes or key points.</li><li><b>Tip Panel</b> – Great for highlighting helpful tips or insights.</li><li><b>Warning Panel </b>– Used to draw attention to warnings or essential notices.</li></ul></div>'
}, {
  blockId: 'dq5uat',
  sortIndex: 12,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'medium',
  dataClean: ''
}, {
  blockId: 'mq9i9m',
  sortIndex: 13,
  componentInstanceName: 'HeaderBlockComponent',
  savedAction: 'h3',
  dataClean: '📷 Image Block'
}, {
  blockId: '4xkw3s',
  sortIndex: 14,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'large',
  dataClean: 'A picture says a thousand words. The Image block supports captions and even alignment options to make your visuals shine.'
}, {
  blockId: 'n177dsd',
  sortIndex: 15,
  componentInstanceName: 'NgxEditorJs2ImageComponent',
  savedAction: 'stretch',
  dataClean: '{"url":"https://res.cloudinary.com/dowdpiikk/image/upload/w_650,q_auto:best,f_auto/v1709445782/lnyst5aqppuin8wt73ci.webp","title":"test"}'
}, {
  blockId: 'gt9e9s',
  sortIndex: 16,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'medium',
  dataClean: ''
}, {
  blockId: 'b3t74',
  sortIndex: 17,
  componentInstanceName: 'HeaderBlockComponent',
  savedAction: 'h3',
  dataClean: '🎨 CodeMirror Block'
}, {
  blockId: '9qls1d',
  sortIndex: 18,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'large',
  dataClean: 'Embed rich, theme-able code editors right inside your documents. Great for live code samples or collaborative coding.'
}, {
  blockId: 'asdfasdf',
  sortIndex: 19,
  componentInstanceName: 'NgxEditorJs2CodemirrorComponent',
  savedAction: 'text/typescript',
  dataClean: "export class SimpleFormGroup {\n  form = new FormGroup({\n    first: new FormControl('Nancy', Validators.minLength(2)),\n    last: new FormControl('Drew'),\n  });\n\n  get first(): any {\n    return this.form.get('first');\n  }\n\n  onSubmit(): void {\n    console.log(this.form.value); // {first: 'Nancy', last: 'Drew'}\n  }\n\n  setValue() {\n    this.form.setValue({first: 'Carson', last: 'Drew'});\n  }\n}"
}, {
  blockId: 'hduds',
  sortIndex: 20,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'medium',
  dataClean: ''
}, {
  blockId: '8npajb',
  sortIndex: 21,
  componentInstanceName: 'HeaderBlockComponent',
  savedAction: 'h3',
  dataClean: '🔥 Mermaid.js Block'
}, {
  blockId: 'su45ai',
  sortIndex: 22,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'large',
  dataClean: 'Need to include a flowchart, sequence diagram, or Gantt chart? The Mermaid.js block brings technical diagrams to life using simple syntax.'
}, {
  blockId: 'uapf2',
  sortIndex: 23,
  componentInstanceName: 'NgxEditorJs2MermaidjsComponent',
  savedAction: 'center',
  dataClean: 'flowchart TD\n    A[Christmas] -->|Get money| B(Go shopping)\n    B --> C{Let me think}\n    C -->|One| D[Laptop]\n    C -->|Two| E[Hello World iPhone]\n    C -->|Three| F[fa:fa-car Car]'
}, {
  blockId: 'y3r4xs',
  sortIndex: 24,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'medium',
  dataClean: '<div><br></div>'
}, {
  blockId: 'q5m0u',
  sortIndex: 25,
  componentInstanceName: 'HeaderBlockComponent',
  savedAction: 'h3',
  dataClean: '🧠 Pop Quiz Block'
}, {
  blockId: 'ubo23s',
  sortIndex: 26,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'large',
  dataClean: 'Test your knowledge or embed interactive quiz questions inline with your content. Great for workshops, tutorials, or even just friendly challenges.'
}, {
  blockId: '9bqhk',
  sortIndex: 27,
  componentInstanceName: 'NgxEditorJs2PopQuizComponent',
  savedAction: 'display-large',
  dataClean: '{"question":"Which of the following statements is true about Angular\'s default RouteReuseStrategy?","answer":"It reuses components when the route configuration remains the same.","correctResponse":"That\'s correct! Angular\'s default RouteReuseStrategy reuses components when the route configuration remains the same. This prevents components from being destroyed and recreated when only the fragment or query parameters change.","incorrectResponse":"That\'s incorrect. The correct answer is C. Angular\'s default RouteReuseStrategy reuses components when the route configuration remains the same. This prevents components from being destroyed and recreated when only the fragment or query parameters change.","choices":[{"value":"It only reuses components when the route configuration changes."},{"value":"It only reuses components when the route parameters change."},{"value":"It reuses components when the route configuration remains the same."},{"value":"It never reuses components."}]}'
}];
const TEST_DATA_TWO = [{
  blockId: 'iovlbzgosf',
  sortIndex: 0,
  componentInstanceName: 'HeaderBlockComponent',
  dataClean: 'Different Prerequisites',
  savedAction: 'h1'
}, {
  blockId: 'bu23hwyltwl',
  sortIndex: 1,
  componentInstanceName: 'ParagraphBlockComponent',
  dataClean: 'Skips the very first call to startViewTransition. This can be useful for disabling the animation during the applications initial loading phase.',
  savedAction: 'meduim'
}, {
  blockId: 'bu23hwyltss',
  sortIndex: 2,
  componentInstanceName: 'ParagraphBlockComponent',
  dataClean: 'SOmeehting Different then the last one',
  savedAction: 'meduim'
}, {
  blockId: 'iovlbzgosuu',
  sortIndex: 3,
  componentInstanceName: 'HeaderBlockComponent',
  dataClean: 'Woah! This is cool..',
  savedAction: 'h3'
}, {
  blockId: 'bu23hwyltsww',
  sortIndex: 2,
  componentInstanceName: 'ParagraphBlockComponent',
  dataClean: 'Material Design uses color to create accessible, personal color schemes that communicate your products hierarchy, state, and brand. See Material Designs Color System page to learn more about its use and purpose.',
  savedAction: 'small'
}];
const BROKEN_TEST_DATA = [{
  blockId: 'cz7u8p',
  sortIndex: 0,
  componentInstanceName: 'NgxEditorJs2MermaidjsComponent',
  savedAction: 'flex-start',
  dataClean: ''
}, {
  blockId: 'm97wlx',
  sortIndex: 1,
  componentInstanceName: 'NgxEditorJs2ImageComponent',
  savedAction: 'stretch',
  dataClean: '{"url":"https://ngx-workshop.io/assets/img/5ea0ec6b-1997-4e13-b02f-17fad313ab1a.png","title":"Idiomati"}'
}, {
  blockId: 'eftkta822ke',
  sortIndex: 2,
  componentInstanceName: 'HeaderBlockComponent',
  savedAction: 'h1',
  dataClean: 'Embracing Idiomatic Reactive Data Streams with Angular and RxJS'
}, {
  blockId: 'oecj9',
  sortIndex: 3,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'small',
  dataClean: '<div><span style="font-size: 16px;">Reference Material:</span></div><div><ul><li><a href="https://github.com/Ba5ik7/workshop-reactive-data-streams/tree/1-lab-complete">Workshop Lab Repo</a></li></ul></div>'
}, {
  blockId: '6w9r48',
  sortIndex: 4,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'large',
  dataClean: '<b>Objective:</b> This workshop is an invitation to explore the reactive programming paradigm within the Angular framework, offering both foundational knowledge and advanced techniques.'
}, {
  blockId: 'cnvf9',
  sortIndex: 5,
  componentInstanceName: 'NgxEditorJs2BlockquotesComponent',
  savedAction: 'medium',
  dataClean: '<i>After cloning the repo checkout the branch 1-lab-start.</i>'
}, {
  blockId: 'lcl3c7',
  sortIndex: 6,
  componentInstanceName: 'HeaderBlockComponent',
  savedAction: 'h2',
  dataClean: 'Introduction to Angular and Reactive Programming with RxJS'
}, {
  blockId: '6uh5qa',
  sortIndex: 7,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'medium',
  dataClean: 'Welcome to a comprehensive workshop designed to introduce and deepen your understanding of <i>idiomatic</i> reactive data streams utilizing Angular and RxJS. Angular, a platform and framework for building single-page client applications, incorporates a reactive programming style that is both robust and scalable. Coupled with RxJS, a library for asynchronous programming and stream manipulation, Angular provides a powerful suite of tools for modern web development.'
}, {
  blockId: 'zr3abg',
  sortIndex: 8,
  componentInstanceName: 'HeaderBlockComponent',
  savedAction: 'h3',
  dataClean: "RxJS: The Backbone of Angular's Reactivity"
}, {
  blockId: '6khq6q',
  sortIndex: 9,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'medium',
  dataClean: "RxJS plays a pivotal role in Angular's ecosystem by offering a comprehensive set of operators and functions to manage asynchronous events and data streams. The library's capabilities allow developers to elegantly handle complex data flows, orchestrate asynchronous operations, and implement sophisticated event handling mechanisms, all within a reactive paradigm."
}, {
  blockId: '0krpie',
  sortIndex: 10,
  componentInstanceName: 'HeaderBlockComponent',
  savedAction: 'h3',
  dataClean: 'The Foundation of Angular: MVVM Architecture'
}, {
  blockId: 'rzvpn8',
  sortIndex: 11,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'medium',
  dataClean: "Angular's architectural approach, inspired by the Model-View-ViewModel (MVVM) pattern, facilitates a clear separation of concerns within applications. This architecture not only promotes maintainability but also enhances the scalability of applications by dividing the application logic, user interface, and data model. Angular's commitment to reactivity ensures that your applications remain responsive and performant, adapting seamlessly to user interactions and data changes."
}, {
  blockId: 'vclw7i',
  sortIndex: 12,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'medium',
  dataClean: ''
}, {
  blockId: 'snk3z',
  sortIndex: 13,
  componentInstanceName: 'HeaderBlockComponent',
  savedAction: 'h2',
  dataClean: 'Getting Started: Initial Exploration'
}, {
  blockId: 'ni74d',
  sortIndex: 14,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'medium',
  dataClean: "In the initial phase of our workshop, specifically within the 1-lab-start branch, we introduce a foundational example through the AppComponent. This component serves as the initial touchpoint, demonstrating Angular's reactive capabilities in a simplified context."
}, {
  blockId: 'k755z',
  sortIndex: 15,
  componentInstanceName: 'HeaderBlockComponent',
  savedAction: 'h3',
  dataClean: 'Delving into Reactive Programming Principles'
}, {
  blockId: '6uw92',
  sortIndex: 16,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'medium',
  dataClean: "The journey begins with understanding the basics of Angular's template syntax and its integration with reactive programming concepts. The simple data binding showcased here paves the way for more complex reactive interactions, which will be explored as we progress through the workshop."
}, {
  blockId: '8h0zlp',
  sortIndex: 17,
  componentInstanceName: 'HeaderBlockComponent',
  savedAction: 'h3',
  dataClean: 'Key Insights and Best Practices'
}, {
  blockId: 'ybkivt',
  sortIndex: 18,
  componentInstanceName: 'NgxEditorJs2BlockquotesComponent',
  savedAction: 'display-small',
  dataClean: "<div><ul><li><b>Leveraging MVVM: </b>Angular's adoption of the MVVM pattern is critical for structuring applications that are both manageable and scalable. Embracing this pattern will facilitate better state management and UI/data separation.<br><br></li><li><b>Mastering RxJS:</b> Familiarity with RxJS operators is essential for effective reactive programming. Operators such as map, filter, and combineLatest are fundamental tools for data stream manipulation.<br><br></li><li><b>Utilizing Async Pipe:</b> The async pipe is a cornerstone of Angular's reactivity, simplifying subscription management and preventing memory leaks by automatically subscribing to and unsubscribing from Observables</li></ul></div>"
}, {
  blockId: 'q7gpmo',
  sortIndex: 19,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'medium',
  dataClean: 'We look forward to guiding you through this journey into idiomatic reactive programming with Angular and RxJS.'
}, {
  blockId: 'a8ii49',
  sortIndex: 20,
  componentInstanceName: 'ParagraphBlockComponent',
  savedAction: 'medium',
  dataClean: 'This workshop is designed to equip you with the knowledge and skills necessary to harness the full potential of Angular and RxJS in building reactive applications. As we move forward, each lab will build upon the last, incrementally increasing in complexity and introducing more advanced concepts and techniques.'
}];
let AppService = /*#__PURE__*/(() => {
  class AppService {
    ngxEditorJsBlocks = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(BROKEN_TEST_DATA);
    ngxEditorJsBlocks$ = this.ngxEditorJsBlocks.asObservable();
    requestBlocks = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    requestBlocks$ = this.requestBlocks.asObservable();
    handleBlocks(blocks$) {
      void (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.lastValueFrom)(blocks$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(() => console.log('Tesing'))));
    }
    static ɵfac = function AppService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppService)();
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AppService,
      factory: AppService.ɵfac,
      providedIn: 'root'
    });
  }
  return AppService;
})();

/***/ },

/***/ 8277
/*!************************************************************!*\
  !*** ./projects/demo/src/app/components/hero.component.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroComponent: () => (/* binding */ HeroComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 31944);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_material_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/app.service */ 4516);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ 91200);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__);





let HeroComponent = /*#__PURE__*/(() => {
  class HeroComponent {
    appService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService);
    saveValue() {
      this.appService.requestBlocks.next({});
    }
    switch = false;
    loadValue() {
      this.switch = !this.switch;
      this.appService.ngxEditorJsBlocks.next(this.switch ? _services_app_service__WEBPACK_IMPORTED_MODULE_2__.TEST_DATA : _services_app_service__WEBPACK_IMPORTED_MODULE_2__.TEST_DATA_TWO);
    }
    clearValue() {
      this.appService.ngxEditorJsBlocks.next([]);
    }
    static ɵfac = function HeroComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HeroComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroComponent,
      selectors: [["app-hero"]],
      decls: 14,
      vars: 0,
      consts: [[1, "header-background"], [1, "header-section"], [1, "header-headline"], [1, "header-start"], ["mat-stroked-button", "", "matTooltip", "Simulate loading blocks", 3, "click"], ["mat-stroked-button", "", "matTooltip", "Simulate clearing blocks", 3, "click"], ["mat-stroked-button", "", "matTooltip", "Open the console for blocks", 3, "click"]],
      template: function HeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ngx EditorJs2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A Custom Themeable Angular Material 3 Component");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_button_click_8_listener() {
            return ctx.loadValue();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Load ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_button_click_10_listener() {
            return ctx.clearValue();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Clear ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_button_click_12_listener() {
            return ctx.saveValue();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Save ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltip],
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  --mat-button-outlined-label-text-color: var(--mat-sys-on-secondary);\n}\n[_nghost-%COMP%]   .header-background[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  height: 360px;\n  color: var(--mat-sys-on-secondary);\n  background: var(--mat-sys-secondary);\n}\n[_nghost-%COMP%]   .header-background[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" width=\"48\" fill=\"%23FFFFFF\"><path d=\"M14.5 40V13H4V8h26v5H19.5v27Zm18 0V23H26v-5h18v5h-6.5v17Z\"/></svg>');\n  background-repeat: no-repeat;\n  background-size: 400px;\n  background-position: 80% -25px;\n  opacity: 0.2;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n[_nghost-%COMP%]   .header-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  text-align: center;\n}\n[_nghost-%COMP%]   .header-section[_ngcontent-%COMP%]   .header-headline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: bold;\n  line-height: 56px;\n  margin: 15px 5px;\n}\n[_nghost-%COMP%]   .header-section[_ngcontent-%COMP%]   .header-headline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 28px;\n  margin: 15px 0 25px 0;\n}\n[_nghost-%COMP%]   .header-section[_ngcontent-%COMP%]   .header-start[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n[_nghost-%COMP%]   .header-section[_ngcontent-%COMP%]   .header-start[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9jb21wb25lbnRzL2hlcm8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUvdG9rZW5zL190b2tlbi11dGlscy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdNO0VBQ0UsV0FBQTtFQ3dFQSxtRUFBQTtBRHpFUjtBQU9RO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0FBTFY7QUFNVTtFQUNFLFdBQUE7RUFDQSw0TUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFKWjtBQU9RO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUxWO0FBT1k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBTGQ7QUFPWTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFMZDtBQVFVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQU5aO0FBT1k7RUFDRSxhQUFBO0FBTGQiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIEB1c2UgJ0Bhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XG5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIEBpbmNsdWRlIG1hdC5idXR0b24tb3ZlcnJpZGVzKFxuICAgICAgICAgIChcbiAgICAgICAgICAgIG91dGxpbmVkLWxhYmVsLXRleHQtY29sb3I6IHZhcigtLW1hdC1zeXMtb24tc2Vjb25kYXJ5KSxcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIC5oZWFkZXItYmFja2dyb3VuZCB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgaGVpZ2h0OiAzNjBweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbWF0LXN5cy1vbi1zZWNvbmRhcnkpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1hdC1zeXMtc2Vjb25kYXJ5KTtcbiAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjQ4XCIgd2lkdGg9XCI0OFwiIGZpbGw9XCIlMjNGRkZGRkZcIj48cGF0aCBkPVwiTTE0LjUgNDBWMTNINFY4aDI2djVIMTkuNXYyN1ptMTggMFYyM0gyNnYtNWgxOHY1aC02LjV2MTdaXCIvPjwvc3ZnPicpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4MCUgLTI1cHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXItc2VjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAuaGVhZGVyLWhlYWRsaW5lIHtcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTVweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwIDI1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlci1zdGFydCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgIiwiQHVzZSAnLi4vc3R5bGUvc2Fzcy11dGlscyc7XG5AdXNlICdzYXNzOmxpc3QnO1xuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczpzdHJpbmcnO1xuXG4vLyBDcmVhdGVzIGEgQ1NTIHZhcmlhYmxlLCBpbmNsdWRpbmcgdGhlIGZhbGxiYWNrIGlmIHByb3ZpZGVkLlxuQGZ1bmN0aW9uIF9jcmVhdGUtdmFyKCRuYW1lLCAkZmFsbGJhY2s6IG51bGwpIHtcbiAgQGlmICgkZmFsbGJhY2spIHtcbiAgICBAcmV0dXJuIHZhcigkbmFtZSwgJGZhbGxiYWNrKTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiB2YXIoJG5hbWUpO1xuICB9XG59XG5cbi8vIFJldHVybnMgYSBsaXN0IG9mIG92ZXJyaWRlcyBmb3IgdGhlIGdpdmVuIE0zIGdldC10b2tlbnMgbWl4aW4gYW5kIHByZWZpeC4gRWFjaCB0b2tlbiBoYXMgaXRzXG4vLyBwcmVmaXggcmVtb3ZlZCBzaW5jZSB0aGUgb3ZlcnJpZGVzIEFQSSBleHBlY3RzIGl0cyBhYnNlbmNlLiBUaGUgcmV0dXJuZWQgbWFwIGluY2x1ZGVzIFwiYWxsXCIgZm9yXG4vLyBhbGwgb3ZlcnJpZGUgdG9rZW5zLCBhbmQgYWxzbyB0aGUgc3Vic2V0cyB3aXRoIGtleXMgYmFzZSwgY29sb3IsIHR5cG9ncmFwaHksIGFuZCBkZW5zaXR5LlxuQGZ1bmN0aW9uIGdldC1vdmVycmlkZXMoJHRva2VucywgJHByZWZpeCkge1xuICAkYmFzZTogcmVtb3ZlLXRva2VuLXByZWZpeGVzKG1hcC5nZXQoJHRva2VucywgYmFzZSksICRwcmVmaXgpO1xuICAkY29sb3I6IHJlbW92ZS10b2tlbi1wcmVmaXhlcyhtYXAuZ2V0KCR0b2tlbnMsIGNvbG9yKSwgJHByZWZpeCk7XG4gICR0eXBvZ3JhcGh5OiByZW1vdmUtdG9rZW4tcHJlZml4ZXMobWFwLmdldCgkdG9rZW5zLCB0eXBvZ3JhcGh5KSwgJHByZWZpeCk7XG4gICRkZW5zaXR5OiByZW1vdmUtdG9rZW4tcHJlZml4ZXMobWFwLmdldCgkdG9rZW5zLCBkZW5zaXR5KSwgJHByZWZpeCk7XG4gICRhbGw6ICgpO1xuICBAZWFjaCAkbWFwIGluICgkYmFzZSwgJGNvbG9yLCAkdHlwb2dyYXBoeSwgJGRlbnNpdHkpIHtcbiAgICAkYWxsOiBtYXAubWVyZ2UoJGFsbCwgJG1hcCk7XG4gIH1cblxuICBAcmV0dXJuIChcbiAgICBhbGw6ICRhbGwsXG4gICAgYmFzZTogJGJhc2UsXG4gICAgY29sb3I6ICRjb2xvcixcbiAgICB0eXBvZ3JhcGh5OiAkdHlwb2dyYXBoeSxcbiAgICBkZW5zaXR5OiAkZGVuc2l0eSxcbiAgKTtcbn1cblxuLy8gUmVtb3ZlcyBhIHByZWZpeCBmcm9tIGVhY2ggY29tcG9uZW50IHRva2VuIGluIHRoZSBwcm92aWRlZCBtYXAgb2YgcHJlZml4ZWQgdG9rZW5zLlxuQGZ1bmN0aW9uIHJlbW92ZS10b2tlbi1wcmVmaXhlcygkcHJlZml4ZWQtdG9rZW5zOiAoKSwgJHByZWZpeCkge1xuICAkdG9rZW5zOiAoKTtcbiAgQGVhY2ggJHByZWZpeGVkLXRva2VuLCAkdmFsdWUgaW4gJHByZWZpeGVkLXRva2VucyB7XG4gICAgJHRva2VuOiBzdHJpbmcuc2xpY2UoJHByZWZpeGVkLXRva2VuLCBzdHJpbmcubGVuZ3RoKCRwcmVmaXgpICsgMik7XG4gICAgJHRva2VuczogbWFwLnNldCgkdG9rZW5zLCAkdG9rZW4sICR2YWx1ZSk7XG4gIH1cbiAgQHJldHVybiAkdG9rZW5zO1xufVxuXG4vLyBSZXR1cm5zIHRoZSB0b2tlbiBzbG90IHZhbHVlLlxuLy8gQWNjZXB0cyBhbiBvcHRpb25hbCBmYWxsYmFjayBwYXJhbWV0ZXIgdG8gaW5jbHVkZSBpbiB0aGUgQ1NTIHZhcmlhYmxlLlxuLy8gSWYgJGZhbGxiYWNrIGlzIGB0cnVlYCwgdGhlbiB1c2UgdGhlIHRva2VucyBtYXAgdG8gZ2V0IHRoZSBmYWxsYmFjay5cbkBmdW5jdGlvbiBzbG90KCR0b2tlbiwgJGZhbGxiYWNrcywgJGZhbGxiYWNrOiBudWxsKSB7XG4gIC8vIEZhbGxiYWNrcyBhcmUgYSBtYXAgb2YgYmFzZSwgY29sb3IsIHR5cG9ncmFwaHksIGFuZCBkZW5zaXR5IHRva2Vucy4gVG8gc2ltcGxpZnlcbiAgLy8gbG9va3VwLCBmbGF0dGVuIHRoZXNlIHRva2VuIGdyb3VwcyBpbnRvIGEgc2luZ2xlIG1hcC5cbiAgJGZhbGxiYWNrcy1mbGF0dGVuZWQ6ICgpO1xuICBAZWFjaCAkdG9rZW5zIGluIG1hcC52YWx1ZXMoJGZhbGxiYWNrcykge1xuICAgIEBlYWNoICR0b2tlbiwgJHZhbHVlIGluICR0b2tlbnMge1xuICAgICAgJGZhbGxiYWNrcy1mbGF0dGVuZWQ6IG1hcC5zZXQoJGZhbGxiYWNrcy1mbGF0dGVuZWQsICR0b2tlbiwgJHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgQGlmIG5vdCBtYXAuaGFzLWtleSgkZmFsbGJhY2tzLWZsYXR0ZW5lZCwgJHRva2VuKSB7XG4gICAgQGVycm9yICdUb2tlbiAjeyR0b2tlbn0gZG9lcyBub3QgZXhpc3QuIENvbmZpZ3VyZWQgdG9rZW5zIGFyZTonICtcbiAgICAgICAgI3ttYXAua2V5cygkZmFsbGJhY2tzLWZsYXR0ZW5lZCl9O1xuICB9XG5cbiAgJHN5cy1mYWxsYmFjazogbWFwLmdldCgkZmFsbGJhY2tzLWZsYXR0ZW5lZCwgJHRva2VuKTtcbiAgQGlmIChzYXNzLXV0aWxzLmlzLWNzcy12YXItbmFtZSgkc3lzLWZhbGxiYWNrKSkge1xuICAgICRzeXMtZmFsbGJhY2s6IF9jcmVhdGUtdmFyKCRzeXMtZmFsbGJhY2ssICRmYWxsYmFjayk7XG4gIH1cblxuICBAcmV0dXJuIF9jcmVhdGUtdmFyKC0tbWF0LSN7JHRva2VufSwgJHN5cy1mYWxsYmFjayk7XG59XG5cbi8vIE91dHB1dHMgYSBtYXAgb2YgdG9rZW4gdmFsdWVzIGFzIENTUyB2YXJpYWJsZSBkZWZpbml0aW9ucy5cbkBtaXhpbiB2YWx1ZXMoJHRva2Vucykge1xuICBAaW5jbHVkZSBzYXNzLXV0aWxzLmN1cnJlbnQtc2VsZWN0b3Itb3Itcm9vdCgpIHtcbiAgICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJHRva2VucyB7XG4gICAgICBAaWYgJHZhbHVlICE9IG51bGwge1xuICAgICAgICAtLW1hdC0jeyRrZXl9OiAjeyR2YWx1ZX07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vLyBFbWl0cyBuZXcgdG9rZW4gdmFsdWVzIGZvciB0aGUgZ2l2ZW4gdG9rZW4gb3ZlcnJpZGVzLlxuLy8vIFZlcmlmaWVzIHRoYXQgdGhlIG92ZXJyaWRlcyBwYXNzZWQgaW4gYXJlIHZhbGlkIHRva2Vucy5cbi8vLyBOZXcgdG9rZW4gdmFsdWVzIGFyZSBlbWl0dGVkIHVuZGVyIHRoZSBjdXJyZW50IHNlbGVjdG9yIG9yIHJvb3QuXG5AbWl4aW4gYmF0Y2gtY3JlYXRlLXRva2VuLXZhbHVlcygkb3ZlcnJpZGVzOiAoKSwgJG5hbWVzcGFjZS1jb25maWdzKSB7XG4gIEBpbmNsdWRlIHNhc3MtdXRpbHMuY3VycmVudC1zZWxlY3Rvci1vci1yb290KCkge1xuICAgICRwcmVmaXhlZC1uYW1lLWRhdGE6ICgpO1xuICAgICRhbGwtbmFtZXM6ICgpO1xuXG4gICAgQGVhY2ggJGNvbmZpZyBpbiAkbmFtZXNwYWNlLWNvbmZpZ3Mge1xuICAgICAgJG5hbWVzcGFjZTogbWFwLmdldCgkY29uZmlnLCBuYW1lc3BhY2UpO1xuICAgICAgJHByZWZpeDogaWYobWFwLmhhcy1rZXkoJGNvbmZpZywgcHJlZml4KSwgbWFwLmdldCgkY29uZmlnLCBwcmVmaXgpLCAnJyk7XG4gICAgICAkdG9rZW5zOiBtYXAuZ2V0KG1hcC5nZXQoJGNvbmZpZywgdG9rZW5zKSwgYWxsKTtcbiAgICAgIEBlYWNoICRuYW1lLCAkdmFsdWUgaW4gJHRva2VucyB7XG4gICAgICAgICRwcmVmaXhlZC1uYW1lOiAkcHJlZml4ICsgJG5hbWU7XG4gICAgICAgICRhbGwtbmFtZXM6IGxpc3QuYXBwZW5kKCRhbGwtbmFtZXMsICRwcmVmaXhlZC1uYW1lLCAkc2VwYXJhdG9yOiBjb21tYSk7XG4gICAgICAgICRwcmVmaXhlZC1uYW1lLWRhdGE6IG1hcC5zZXQoJHByZWZpeGVkLW5hbWUtZGF0YSwgJHByZWZpeGVkLW5hbWUsICgkbmFtZXNwYWNlLCAkbmFtZSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBlYWNoICRuYW1lLCAkdmFsdWUgaW4gJG92ZXJyaWRlcyB7XG4gICAgICBAaWYgbWFwLmhhcy1rZXkoJHByZWZpeGVkLW5hbWUtZGF0YSwgJG5hbWUpIHtcbiAgICAgICAgJGRhdGE6IG1hcC5nZXQoJHByZWZpeGVkLW5hbWUtZGF0YSwgJG5hbWUpO1xuICAgICAgICAkbmFtZXNwYWNlOiBsaXN0Lm50aCgkZGF0YSwgMSk7XG4gICAgICAgICRuYW1lOiBsaXN0Lm50aCgkZGF0YSwgMik7XG4gICAgICAgICRwcmVmaXhlZC1uYW1lOiAkbmFtZXNwYWNlICsgJy0nICsgJG5hbWU7XG4gICAgICAgIEBpbmNsdWRlIHZhbHVlcygoJHByZWZpeGVkLW5hbWU6ICR2YWx1ZSkpO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciAjeydJbnZhbGlkIHRva2VuIG5hbWUgYCd9I3skbmFtZX0jeydgLiAnfSN7J1ZhbGlkIHRva2VucyBhcmU6ICd9I3skYWxsLW5hbWVzfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return HeroComponent;
})();

/***/ },

/***/ 9014
/*!**************************************************************!*\
  !*** ./projects/demo/src/app/components/footer.component.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

let FooterComponent = /*#__PURE__*/(() => {
  class FooterComponent {
    static ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FooterComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 8,
      vars: 0,
      consts: [[1, "footer"], ["href", "https://github.com/Ba5ik7/ngx-editor-js2-blocks", "target", "_blank", 1, "a"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0 0 10 0z", "fill", "#FFF", "fill-rule", "evenodd"], [1, "flex-grow"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](0, "footer", 0)(1, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](2, "svg", 2)(3, "title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "github-circle-white-transparent");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElement"](5, "path", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElement"](6, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Made with \u2764\uFE0F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]()();
        }
      },
      styles: ["[_nghost-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  color: var(--mat-sys-on-secondary-container);\n  padding: 4px;\n  text-align: right;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 0.1875em;\n  text-decoration: none;\n  color: var(--mat-sys-on-secondary-container);\n  align-items: center;\n  gap: 0.5em;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: var(--mat-sys-on-secondary-container);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDRSxhQUFBO0VBQ0EsNENBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7QUFGVjtBQUdVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQURaO0FBRVk7RUFDRSxXQUFBO0FBQWQ7QUFDYztFQUVFLDJDQUFBO0FBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbWF0LXN5cy1vbi1zZWNvbmRhcnktY29udGFpbmVyKTtcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1tYXQtc3lzLXNlY29uZGFyeS1jb250YWluZXIpO1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuMTg3NWVtO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW1hdC1zeXMtb24tc2Vjb25kYXJ5LWNvbnRhaW5lcik7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiAwLjVlbTtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgICBwYXRoIHtcblxuICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLW1hdC1zeXMtb24tc2Vjb25kYXJ5LWNvbnRhaW5lcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return FooterComponent;
})();

/***/ },

/***/ 14699
/*!************************************************!*\
  !*** ./projects/demo/src/app/app.component.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _components_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/nav-bar.component */ 43886);
/* harmony import */ var _components_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/hero.component */ 8277);
/* harmony import */ var _components_document_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/document.component */ 33968);
/* harmony import */ var _components_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer.component */ 9014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);





let AppComponent = /*#__PURE__*/(() => {
  class AppComponent {
    static ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-nav-bar");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "main");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-hero")(3, "app-document");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-footer");
        }
      },
      dependencies: [_components_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent, _components_hero_component__WEBPACK_IMPORTED_MODULE_1__.HeroComponent, _components_document_component__WEBPACK_IMPORTED_MODULE_2__.DocumentComponent, _components_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3em;\n  margin-top: 56px;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   app-document[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 800px;\n  margin-bottom: 3em;\n}\n[_nghost-%COMP%]   app-nav-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUNRO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBQ1Y7QUFBVTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRVo7QUFDUTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBQ1YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZ2FwOiAzZW07XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICAgICAgICBhcHAtZG9jdW1lbnQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM2VtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcHAtbmF2LWJhciB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return AppComponent;
})();

/***/ },

/***/ 33968
/*!****************************************************************!*\
  !*** ./projects/demo/src/app/components/document.component.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentComponent: () => (/* binding */ DocumentComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 11674);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 16888);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_material_card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tmdjr/ngx-editor-js2 */ 40623);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/app.service */ 4516);






let DocumentComponent = /*#__PURE__*/(() => {
  class DocumentComponent {
    appService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService);
    formChanged(blocks) {
      console.log('DocumentComponent - formChanged', blocks);
    }
    static ɵfac = function DocumentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DocumentComponent,
      selectors: [["app-document"]],
      decls: 5,
      vars: 6,
      consts: [["appearance", "outlined"], [3, "blocksRequested", "formChanged", "blocks", "requestBlocks"]],
      template: function DocumentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-content")(2, "ngx-editor-js2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blocksRequested", function DocumentComponent_Template_ngx_editor_js2_blocksRequested_2_listener($event) {
            return ctx.appService.handleBlocks($event);
          })("formChanged", function DocumentComponent_Template_ngx_editor_js2_formChanged_2_listener($event) {
            return ctx.formChanged($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blocks", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.appService.ngxEditorJsBlocks$))("requestBlocks", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, ctx.appService.requestBlocks$));
        }
      },
      dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _tmdjr_ngx_editor_js2__WEBPACK_IMPORTED_MODULE_3__.NgxEditorJs2Component, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe],
      styles: ["[_nghost-%COMP%] {\n  --mat-card-outlined-outline-width: 0.5px;\n  --mat-card-outlined-container-color: var(--mat-sys-surface-container-low);\n  --mat-card-outlined-outline-color: var(--mat-sys-on-surface);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9jb21wb25lbnRzL2RvY3VtZW50LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3Rva2Vucy9fdG9rZW4tdXRpbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTtFQzBFRSx3Q0FBQTtFQUFBLHlFQUFBO0VBQUEsNERBQUE7QUR4RVIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIEB1c2UgJ0Bhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBpbmNsdWRlIG1hdC5jYXJkLW92ZXJyaWRlcyhcbiAgICAgICAgICAoXG4gICAgICAgICAgICBvdXRsaW5lZC1vdXRsaW5lLXdpZHRoOiAwLjVweCxcbiAgICAgICAgICAgIG91dGxpbmVkLWNvbnRhaW5lci1jb2xvcjogdmFyKC0tbWF0LXN5cy1zdXJmYWNlLWNvbnRhaW5lci1sb3cpLFxuICAgICAgICAgICAgb3V0bGluZWQtb3V0bGluZS1jb2xvcjogdmFyKC0tbWF0LXN5cy1vbi1zdXJmYWNlKSxcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgIiwiQHVzZSAnLi4vc3R5bGUvc2Fzcy11dGlscyc7XG5AdXNlICdzYXNzOmxpc3QnO1xuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczpzdHJpbmcnO1xuXG4vLyBDcmVhdGVzIGEgQ1NTIHZhcmlhYmxlLCBpbmNsdWRpbmcgdGhlIGZhbGxiYWNrIGlmIHByb3ZpZGVkLlxuQGZ1bmN0aW9uIF9jcmVhdGUtdmFyKCRuYW1lLCAkZmFsbGJhY2s6IG51bGwpIHtcbiAgQGlmICgkZmFsbGJhY2spIHtcbiAgICBAcmV0dXJuIHZhcigkbmFtZSwgJGZhbGxiYWNrKTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiB2YXIoJG5hbWUpO1xuICB9XG59XG5cbi8vIFJldHVybnMgYSBsaXN0IG9mIG92ZXJyaWRlcyBmb3IgdGhlIGdpdmVuIE0zIGdldC10b2tlbnMgbWl4aW4gYW5kIHByZWZpeC4gRWFjaCB0b2tlbiBoYXMgaXRzXG4vLyBwcmVmaXggcmVtb3ZlZCBzaW5jZSB0aGUgb3ZlcnJpZGVzIEFQSSBleHBlY3RzIGl0cyBhYnNlbmNlLiBUaGUgcmV0dXJuZWQgbWFwIGluY2x1ZGVzIFwiYWxsXCIgZm9yXG4vLyBhbGwgb3ZlcnJpZGUgdG9rZW5zLCBhbmQgYWxzbyB0aGUgc3Vic2V0cyB3aXRoIGtleXMgYmFzZSwgY29sb3IsIHR5cG9ncmFwaHksIGFuZCBkZW5zaXR5LlxuQGZ1bmN0aW9uIGdldC1vdmVycmlkZXMoJHRva2VucywgJHByZWZpeCkge1xuICAkYmFzZTogcmVtb3ZlLXRva2VuLXByZWZpeGVzKG1hcC5nZXQoJHRva2VucywgYmFzZSksICRwcmVmaXgpO1xuICAkY29sb3I6IHJlbW92ZS10b2tlbi1wcmVmaXhlcyhtYXAuZ2V0KCR0b2tlbnMsIGNvbG9yKSwgJHByZWZpeCk7XG4gICR0eXBvZ3JhcGh5OiByZW1vdmUtdG9rZW4tcHJlZml4ZXMobWFwLmdldCgkdG9rZW5zLCB0eXBvZ3JhcGh5KSwgJHByZWZpeCk7XG4gICRkZW5zaXR5OiByZW1vdmUtdG9rZW4tcHJlZml4ZXMobWFwLmdldCgkdG9rZW5zLCBkZW5zaXR5KSwgJHByZWZpeCk7XG4gICRhbGw6ICgpO1xuICBAZWFjaCAkbWFwIGluICgkYmFzZSwgJGNvbG9yLCAkdHlwb2dyYXBoeSwgJGRlbnNpdHkpIHtcbiAgICAkYWxsOiBtYXAubWVyZ2UoJGFsbCwgJG1hcCk7XG4gIH1cblxuICBAcmV0dXJuIChcbiAgICBhbGw6ICRhbGwsXG4gICAgYmFzZTogJGJhc2UsXG4gICAgY29sb3I6ICRjb2xvcixcbiAgICB0eXBvZ3JhcGh5OiAkdHlwb2dyYXBoeSxcbiAgICBkZW5zaXR5OiAkZGVuc2l0eSxcbiAgKTtcbn1cblxuLy8gUmVtb3ZlcyBhIHByZWZpeCBmcm9tIGVhY2ggY29tcG9uZW50IHRva2VuIGluIHRoZSBwcm92aWRlZCBtYXAgb2YgcHJlZml4ZWQgdG9rZW5zLlxuQGZ1bmN0aW9uIHJlbW92ZS10b2tlbi1wcmVmaXhlcygkcHJlZml4ZWQtdG9rZW5zOiAoKSwgJHByZWZpeCkge1xuICAkdG9rZW5zOiAoKTtcbiAgQGVhY2ggJHByZWZpeGVkLXRva2VuLCAkdmFsdWUgaW4gJHByZWZpeGVkLXRva2VucyB7XG4gICAgJHRva2VuOiBzdHJpbmcuc2xpY2UoJHByZWZpeGVkLXRva2VuLCBzdHJpbmcubGVuZ3RoKCRwcmVmaXgpICsgMik7XG4gICAgJHRva2VuczogbWFwLnNldCgkdG9rZW5zLCAkdG9rZW4sICR2YWx1ZSk7XG4gIH1cbiAgQHJldHVybiAkdG9rZW5zO1xufVxuXG4vLyBSZXR1cm5zIHRoZSB0b2tlbiBzbG90IHZhbHVlLlxuLy8gQWNjZXB0cyBhbiBvcHRpb25hbCBmYWxsYmFjayBwYXJhbWV0ZXIgdG8gaW5jbHVkZSBpbiB0aGUgQ1NTIHZhcmlhYmxlLlxuLy8gSWYgJGZhbGxiYWNrIGlzIGB0cnVlYCwgdGhlbiB1c2UgdGhlIHRva2VucyBtYXAgdG8gZ2V0IHRoZSBmYWxsYmFjay5cbkBmdW5jdGlvbiBzbG90KCR0b2tlbiwgJGZhbGxiYWNrcywgJGZhbGxiYWNrOiBudWxsKSB7XG4gIC8vIEZhbGxiYWNrcyBhcmUgYSBtYXAgb2YgYmFzZSwgY29sb3IsIHR5cG9ncmFwaHksIGFuZCBkZW5zaXR5IHRva2Vucy4gVG8gc2ltcGxpZnlcbiAgLy8gbG9va3VwLCBmbGF0dGVuIHRoZXNlIHRva2VuIGdyb3VwcyBpbnRvIGEgc2luZ2xlIG1hcC5cbiAgJGZhbGxiYWNrcy1mbGF0dGVuZWQ6ICgpO1xuICBAZWFjaCAkdG9rZW5zIGluIG1hcC52YWx1ZXMoJGZhbGxiYWNrcykge1xuICAgIEBlYWNoICR0b2tlbiwgJHZhbHVlIGluICR0b2tlbnMge1xuICAgICAgJGZhbGxiYWNrcy1mbGF0dGVuZWQ6IG1hcC5zZXQoJGZhbGxiYWNrcy1mbGF0dGVuZWQsICR0b2tlbiwgJHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgQGlmIG5vdCBtYXAuaGFzLWtleSgkZmFsbGJhY2tzLWZsYXR0ZW5lZCwgJHRva2VuKSB7XG4gICAgQGVycm9yICdUb2tlbiAjeyR0b2tlbn0gZG9lcyBub3QgZXhpc3QuIENvbmZpZ3VyZWQgdG9rZW5zIGFyZTonICtcbiAgICAgICAgI3ttYXAua2V5cygkZmFsbGJhY2tzLWZsYXR0ZW5lZCl9O1xuICB9XG5cbiAgJHN5cy1mYWxsYmFjazogbWFwLmdldCgkZmFsbGJhY2tzLWZsYXR0ZW5lZCwgJHRva2VuKTtcbiAgQGlmIChzYXNzLXV0aWxzLmlzLWNzcy12YXItbmFtZSgkc3lzLWZhbGxiYWNrKSkge1xuICAgICRzeXMtZmFsbGJhY2s6IF9jcmVhdGUtdmFyKCRzeXMtZmFsbGJhY2ssICRmYWxsYmFjayk7XG4gIH1cblxuICBAcmV0dXJuIF9jcmVhdGUtdmFyKC0tbWF0LSN7JHRva2VufSwgJHN5cy1mYWxsYmFjayk7XG59XG5cbi8vIE91dHB1dHMgYSBtYXAgb2YgdG9rZW4gdmFsdWVzIGFzIENTUyB2YXJpYWJsZSBkZWZpbml0aW9ucy5cbkBtaXhpbiB2YWx1ZXMoJHRva2Vucykge1xuICBAaW5jbHVkZSBzYXNzLXV0aWxzLmN1cnJlbnQtc2VsZWN0b3Itb3Itcm9vdCgpIHtcbiAgICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJHRva2VucyB7XG4gICAgICBAaWYgJHZhbHVlICE9IG51bGwge1xuICAgICAgICAtLW1hdC0jeyRrZXl9OiAjeyR2YWx1ZX07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vLyBFbWl0cyBuZXcgdG9rZW4gdmFsdWVzIGZvciB0aGUgZ2l2ZW4gdG9rZW4gb3ZlcnJpZGVzLlxuLy8vIFZlcmlmaWVzIHRoYXQgdGhlIG92ZXJyaWRlcyBwYXNzZWQgaW4gYXJlIHZhbGlkIHRva2Vucy5cbi8vLyBOZXcgdG9rZW4gdmFsdWVzIGFyZSBlbWl0dGVkIHVuZGVyIHRoZSBjdXJyZW50IHNlbGVjdG9yIG9yIHJvb3QuXG5AbWl4aW4gYmF0Y2gtY3JlYXRlLXRva2VuLXZhbHVlcygkb3ZlcnJpZGVzOiAoKSwgJG5hbWVzcGFjZS1jb25maWdzKSB7XG4gIEBpbmNsdWRlIHNhc3MtdXRpbHMuY3VycmVudC1zZWxlY3Rvci1vci1yb290KCkge1xuICAgICRwcmVmaXhlZC1uYW1lLWRhdGE6ICgpO1xuICAgICRhbGwtbmFtZXM6ICgpO1xuXG4gICAgQGVhY2ggJGNvbmZpZyBpbiAkbmFtZXNwYWNlLWNvbmZpZ3Mge1xuICAgICAgJG5hbWVzcGFjZTogbWFwLmdldCgkY29uZmlnLCBuYW1lc3BhY2UpO1xuICAgICAgJHByZWZpeDogaWYobWFwLmhhcy1rZXkoJGNvbmZpZywgcHJlZml4KSwgbWFwLmdldCgkY29uZmlnLCBwcmVmaXgpLCAnJyk7XG4gICAgICAkdG9rZW5zOiBtYXAuZ2V0KG1hcC5nZXQoJGNvbmZpZywgdG9rZW5zKSwgYWxsKTtcbiAgICAgIEBlYWNoICRuYW1lLCAkdmFsdWUgaW4gJHRva2VucyB7XG4gICAgICAgICRwcmVmaXhlZC1uYW1lOiAkcHJlZml4ICsgJG5hbWU7XG4gICAgICAgICRhbGwtbmFtZXM6IGxpc3QuYXBwZW5kKCRhbGwtbmFtZXMsICRwcmVmaXhlZC1uYW1lLCAkc2VwYXJhdG9yOiBjb21tYSk7XG4gICAgICAgICRwcmVmaXhlZC1uYW1lLWRhdGE6IG1hcC5zZXQoJHByZWZpeGVkLW5hbWUtZGF0YSwgJHByZWZpeGVkLW5hbWUsICgkbmFtZXNwYWNlLCAkbmFtZSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBlYWNoICRuYW1lLCAkdmFsdWUgaW4gJG92ZXJyaWRlcyB7XG4gICAgICBAaWYgbWFwLmhhcy1rZXkoJHByZWZpeGVkLW5hbWUtZGF0YSwgJG5hbWUpIHtcbiAgICAgICAgJGRhdGE6IG1hcC5nZXQoJHByZWZpeGVkLW5hbWUtZGF0YSwgJG5hbWUpO1xuICAgICAgICAkbmFtZXNwYWNlOiBsaXN0Lm50aCgkZGF0YSwgMSk7XG4gICAgICAgICRuYW1lOiBsaXN0Lm50aCgkZGF0YSwgMik7XG4gICAgICAgICRwcmVmaXhlZC1uYW1lOiAkbmFtZXNwYWNlICsgJy0nICsgJG5hbWU7XG4gICAgICAgIEBpbmNsdWRlIHZhbHVlcygoJHByZWZpeGVkLW5hbWU6ICR2YWx1ZSkpO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciAjeydJbnZhbGlkIHRva2VuIG5hbWUgYCd9I3skbmFtZX0jeydgLiAnfSN7J1ZhbGlkIHRva2VucyBhcmU6ICd9I3skYWxsLW5hbWVzfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return DocumentComponent;
})();

/***/ },

/***/ 40623
/*!******************************************************************************!*\
  !*** ./node_modules/@tmdjr/ngx-editor-js2/fesm2022/tmdjr-ngx-editor-js2.mjs ***!
  \******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 14332);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 61488);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 8778);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ 20026);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 81836);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 11674);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 51404);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 66080);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 91638);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ 53092);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/portal */ 5978);


















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
    defaultValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(...(ngDevMode ? [undefined, {
      debugName: "defaultValue"
    }] : []));
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
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(false, ...(ngDevMode ? [{
      debugName: "autofocus"
    }] : []));
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
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(...(ngDevMode ? [undefined, {
      debugName: "blockOptionActions"
    }] : []));
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
      consts: [[1, "actions-panel"], ["matRipple", "", 1, "action-btn", 3, "click"], ["matRipple", "", 1, "action-btn"]],
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
      styles: ["[_nghost-%COMP%]   .actions-panel[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:1px;width:128px;max-height:128px;border-radius:4px;overflow:auto;background:var(--mat-sys-secondary);box-shadow:var(--mat-sys-level5)}[_nghost-%COMP%]   .actions-panel[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{cursor:pointer;width:42px;height:42px;display:flex;align-items:center;justify-content:center;border-radius:4px;color:var(--mat-sys-on-secondary);background:var(--mat-sys-secondary)}[_nghost-%COMP%]   .actions-panel[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .actions-panel[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:focus{color:var(--mat-sys-secondary);background:var(--mat-sys-on-secondary)}"]
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
    supportedBlocks = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)([], ...(ngDevMode ? [{
      debugName: "supportedBlocks"
    }] : []));
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
      consts: [[1, "block-list-container"], ["appearance", "fill", "color", "accent"], ["matInput", "", 1, "filter-text", 3, "formControl", "autofocus"], [1, "block-list-panel"], ["matRipple", "", "mat-list-item", ""], ["matRipple", "", "mat-list-item", "", 3, "click"]],
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
      styles: ["[_nghost-%COMP%]   .mat-mdc-list-base[_ngcontent-%COMP%]{padding-top:0;margin-top:-14px}[_nghost-%COMP%]   .block-list-container[_ngcontent-%COMP%]{border-radius:4px;background:var(--mat-sys-secondary-container);box-shadow:var(--mat-sys-level5)}[_nghost-%COMP%]   .block-list-panel[_ngcontent-%COMP%]{max-width:280px;max-height:240px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;overflow:auto;color:var(--mat-sys-on-secondary-container)}[_nghost-%COMP%]   mat-list-item[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none}[_nghost-%COMP%]   mat-list-item[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   mat-list-item[_ngcontent-%COMP%]:focus{background:var(--mat-sys-surface-bright)}"]
    });
  }
  return ToolbarBlocksComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ToolbarComponent = /*#__PURE__*/(() => {
  class ToolbarComponent {
    componentContextPositionIndex = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "componentContextPositionIndex"
    }] : []));
    supportedBlocks = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "supportedBlocks"
    }] : []));
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(...(ngDevMode ? [undefined, {
      debugName: "blockOptionActions"
    }] : []));
    actionCallback = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(() => () => {}, ...(ngDevMode ? [{
      debugName: "actionCallback"
    }] : []));
    formControlName = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(...(ngDevMode ? [undefined, {
      debugName: "formControlName"
    }] : []));
    addBlockCallback = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "addBlockCallback"
    }] : []));
    moveBlockPositionCallback = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "moveBlockPositionCallback"
    }] : []));
    openBlocks = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "openBlocks"
    }] : []));
    openBlocksOption = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "openBlocksOption"
    }] : []));
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
      consts: [["blockListTigger", "cdkOverlayOrigin"], ["blockOptionListTigger", "cdkOverlayOrigin"], [1, "toolbar-buttons-container"], ["cdkOverlayOrigin", "", "matRipple", "", 1, "toolbar-buttons", 3, "click"], [1, "material-icons"], ["cdkDragHandle", "", "cdkOverlayOrigin", "", "matRipple", "", 1, "toolbar-buttons", 3, "click"], ["cdkConnectedOverlay", "", 3, "overlayOutsideClick", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayBackdropClass"], ["cdkConnectedOverlay", "", 3, "overlayOutsideClick", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayBackdropClass"], [3, "addBlock", "supportedBlocks"], [3, "handleAction", "moveBlockPosition", "blockOptionActions"]],
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
      styles: ["[_nghost-%COMP%]   .toolbar-buttons-container[_ngcontent-%COMP%]{position:relative;display:flex;gap:10px}[_nghost-%COMP%]   .toolbar-buttons[_ngcontent-%COMP%]{cursor:pointer;width:30px;height:30px;display:flex;justify-content:center;align-items:center;border-radius:4px;margin-bottom:14px;-webkit-user-select:none;user-select:none;color:var(--mat-sys-on-tertiary-container);background:var(--mat-sys-tertiary-container);box-shadow:var(--mat-sys-level2)}[_nghost-%COMP%]   .toolbar-buttons[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .toolbar-buttons[_ngcontent-%COMP%]:focus{background:var(--mat-sys-surface-bright)}@media(min-width:768px){[_nghost-%COMP%]{position:absolute;margin-left:-80px;top:0}}"]
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
    addBlockComponent(ngxEditorJsBlock, emitEvent = true) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)([this.createFormGroupControl(ngxEditorJsBlock, emitEvent), this.attachComponent(ngxEditorJsBlock), this.blockMovementService.updateComponentIndices(this.ngxEditor)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(() => void 0));
    }
    createFormGroupControl({
      blockId,
      dataClean
    }, emitEvent = true) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.formBuilder.control(dataClean, [])).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(formControl => this.formGroup.addControl(blockId, formControl, {
        emitEvent
      })));
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
        componentRef.location.nativeElement.classList.add('ngx-editor-js2-block');
        componentRef.setInput('sortIndex', index);
        componentRef.setInput('formGroup', this.formGroup);
        componentRef.setInput('formControlName', controlName);
        componentRef.setInput('autofocus', autofocus);
        savedAction && componentRef.instance.actionCallback?.(savedAction, false);
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
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([this.blockMovementService.removeBlockComponent(this.ngxEditor, index, clear), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.formGroup.removeControl(formControlName, {
        emitEvent: !clear
      }))]);
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
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(...(ngDevMode ? [undefined, {
      debugName: "autofocus"
    }] : []));
    blockOptionActions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(...(ngDevMode ? [undefined, {
      debugName: "blockOptionActions"
    }] : []));
    actionCallback = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "actionCallback"
    }] : []));
    componentContextPositionIndex = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "componentContextPositionIndex"
    }] : []));
    formControlName = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "formControlName"
    }] : []));
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
    sortIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(0, ...(ngDevMode ? [{
      debugName: "sortIndex"
    }] : []));
    componentInstanceName = 'HeaderBlockComponent';
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(true, ...(ngDevMode ? [{
      debugName: "autofocus"
    }] : []));
    formGroup = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "formGroup"
    }] : []));
    formControlName = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "formControlName"
    }] : []));
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
    }], ...(ngDevMode ? [{
      debugName: "blockOptionActions"
    }] : []));
    savedAction = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('h1', ...(ngDevMode ? [{
      debugName: "savedAction"
    }] : []));
    actionCallbackBind = this.actionCallback.bind(this);
    actionCallback(selectedAction, updateFormValue = true) {
      this.savedAction.set(selectedAction);
      updateFormValue && this.formGroup().updateValueAndValidity();
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
    sortIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(0, ...(ngDevMode ? [{
      debugName: "sortIndex"
    }] : []));
    componentInstanceName = 'ParagraphBlockComponent';
    autofocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(true, ...(ngDevMode ? [{
      debugName: "autofocus"
    }] : []));
    formGroup = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "formGroup"
    }] : []));
    formControlName = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "formControlName"
    }] : []));
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
    }], ...(ngDevMode ? [{
      debugName: "blockOptionActions"
    }] : []));
    savedAction = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('medium', ...(ngDevMode ? [{
      debugName: "savedAction"
    }] : []));
    actionCallbackBind = this.actionCallback.bind(this);
    actionCallback(action, updateFormValue = true) {
      this.savedAction.update(() => action);
      updateFormValue && this.formGroup().updateValueAndValidity();
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
const NGX_EDITORJS_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NGX_EDITORJS_OPTIONS');
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
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)(blocks.map(block => this.editorJsService.addBlockComponent(block, false)));
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
    bootstrapEditorJs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(...(ngDevMode ? [undefined, {
      debugName: "bootstrapEditorJs"
    }] : []));
    blocks = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required({
      ...(ngDevMode ? {
        debugName: "blocks"
      } : {}),
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
    drop(event) {
      void (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(this.editorJsService.moveBlockComponentPosition(event.previousIndex, event.currentIndex).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(() => this.editorJsService.formGroup.updateValueAndValidity())));
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
    selection = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "selection"
    }] : []));
    closeOverlayEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2);
    url = '';
    showURLInputField = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "showURLInputField"
    }] : []));
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
      styles: ["[_nghost-%COMP%]{color:var(--mat-sys-on-secondary);background:var(--mat-sys-secondary);box-shadow:var(--mat-sys-level5);border-radius:8px}[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]{display:flex;width:230px;flex-wrap:wrap;gap:1px}[_nghost-%COMP%]   .inline-option[_ngcontent-%COMP%]{cursor:pointer;width:32px;height:32px;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .block-option-input[_ngcontent-%COMP%]{width:197px;height:32px;border:none;outline:none;color:var(--mat-sys-on-secondary);background-color:transparent;box-sizing:border-box}"]
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
    constructor() {
      this.editorJsService.formGroup.valueChanges.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__.takeUntilDestroyed)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(500), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => this.editorJsService.getBlocks$()), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(blocks => this.formChanged.emit(blocks))).subscribe();
    }
    blocks = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)([], ...(ngDevMode ? [{
      debugName: "blocks"
    }] : []));
    // Allows the parent component to request the current blocks
    blocksRequested = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    requestBlocks = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required({
      ...(ngDevMode ? {
        debugName: "requestBlocks"
      } : {}),
      transform: value => value && this.blocksRequested.emit(this.editorJsService.getBlocks$())
    });
    // Tells the parent component when the form has changed
    formChanged = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
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
        blocksRequested: "blocksRequested",
        formChanged: "formChanged"
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



/***/ },

/***/ 43886
/*!***************************************************************!*\
  !*** ./projects/demo/src/app/components/nav-bar.component.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarComponent: () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/icon */ 81836);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_material_icon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 31944);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_material_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-picker.component */ 49619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





let NavBarComponent = /*#__PURE__*/(() => {
  class NavBarComponent {
    static ɵfac = function NavBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavBarComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      decls: 7,
      vars: 0,
      consts: [[1, "docs-navbar-header"], ["mat-button", "", "href", "https://github.com/Ba5ik7/ngx-editor-js2-blocks", "target", "_blank"], [1, "flex-spacer"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1)(2, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "format_size");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Ngx EditorJs 2 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 2)(6, "app-theme-picker");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_0__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _theme_picker_component__WEBPACK_IMPORTED_MODULE_2__.ThemePickerComponent],
      styles: ["[_nghost-%COMP%] {\n  color: var(--mat-sys-on-primary-container);\n  background-color: var(--mat-sys-primary-container);\n  box-shadow: var(--mat-sys-level5);\n}\n[_nghost-%COMP%]   .docs-navbar-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 0.5em 1em;\n}\n[_nghost-%COMP%]   .docs-navbar-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  margin: 0 0.1em 0.1875em 0;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9jb21wb25lbnRzL25hdi1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNNO0VBQ0UsMENBQUE7RUFDQSxrREFBQTtFQUNBLGlDQUFBO0FBQVI7QUFDUTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNWO0FBQVU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FBRVoiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdC1zeXMtb24tcHJpbWFyeS1jb250YWluZXIpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXQtc3lzLXByaW1hcnktY29udGFpbmVyKTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tbWF0LXN5cy1sZXZlbDUpO1xuICAgICAgICAuZG9jcy1uYXZiYXItaGVhZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwLjFlbSAwLjE4NzVlbSAwO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return NavBarComponent;
})();

/***/ },

/***/ 49619
/*!********************************************************************!*\
  !*** ./projects/demo/src/app/components/theme-picker.component.ts ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemePickerComponent: () => (/* binding */ ThemePickerComponent),
/* harmony export */   ThemePickerMenuItemComponent: () => (/* binding */ ThemePickerMenuItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 31944);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_material_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 81836);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ 53904);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 91200);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ 79452);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_theme_picker_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/theme-picker.service */ 2727);








function ThemePickerMenuItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "radio_button_checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ThemePickerMenuItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "radio_button_unchecked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ThemePickerComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-theme-picker-menu-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemePickerComponent_For_9_Template_app_theme_picker_menu_item_click_0_listener() {
      const theme_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.selectTheme(theme_r3.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const theme_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", theme_r3)("isCurrentTheme", theme_r3.name === ctx_r3.currentTheme());
  }
}
// Menu Item
let ThemePickerMenuItemComponent = /*#__PURE__*/(() => {
  class ThemePickerMenuItemComponent {
    theme = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "theme"
    }] : []));
    isCurrentTheme = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "isCurrentTheme"
    }] : []));
    static ɵfac = function ThemePickerMenuItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ThemePickerMenuItemComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ThemePickerMenuItemComponent,
      selectors: [["app-theme-picker-menu-item"]],
      inputs: {
        theme: [1, "theme"],
        isCurrentTheme: [1, "isCurrentTheme"]
      },
      decls: 9,
      vars: 4,
      consts: [["mat-menu-item", ""], [1, "docs-theme-selected-icon"], ["matMenuItemIcon", "", "width", "80", "height", "80", "viewBox", "0 0 80 80", 1, "theme-example-icon"], ["d", "M77.87 0C79.05 0 80 .95 80 2.13v75.74c0 1.17-.95 2.13-2.13 2.13H2.13C.96 80 0 79.04 0 77.87V2.13C0 .95.96 0 2.13 0h75.74z", 1, "theme-example-background"], ["d", "M54 40c3.32 0 6 2.69 6 6 0 1.2 0-1.2 0 0 0 3.31-2.68 6-6 6H26c-3.31 0-6-2.69-6-6 0-1.2 0 1.2 0 0 0-3.31 2.69-6 6-6h28z"], ["d", "M0 0h80v17.24H0V0z"]],
      template: function ThemePickerMenuItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](1, ThemePickerMenuItemComponent_Conditional_1_Template, 2, 0, "mat-icon", 1)(2, ThemePickerMenuItemComponent_Conditional_2_Template, 2, 0, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 3)(7, "path", 4)(8, "path", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_0_0 = ctx.isCurrentTheme()) ? 1 : 2, tmp_0_0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.theme().displayName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.theme().color);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.theme().color);
        }
      },
      dependencies: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
      styles: ["[_nghost-%COMP%]   .theme-example-icon[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 24px;\n  order: 1;\n  width: 24px;\n  height: 24px;\n  border-radius: 4px;\n  border: solid 1px color-mix(in srgb, var(--mat-sys-outline-variant) 50%, transparent);\n}\n[_nghost-%COMP%]   .theme-example-icon[_ngcontent-%COMP%]   .theme-example-background[_ngcontent-%COMP%] {\n  fill: var(--mat-sys-surface-container-lowest);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9jb21wb25lbnRzL3RoZW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFGQUFBO0FBRFY7QUFJVTtFQUNFLDZDQUFBO0FBRloiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgLnRoZW1lLWV4YW1wbGUtaWNvbiB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgICAgICAgIG9yZGVyOiAxO1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHhcbiAgICAgICAgICAgIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1tYXQtc3lzLW91dGxpbmUtdmFyaWFudCkgNTAlLCB0cmFuc3BhcmVudCk7XG5cbiAgICAgICAgICAudGhlbWUtZXhhbXBsZS1iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLW1hdC1zeXMtc3VyZmFjZS1jb250YWluZXItbG93ZXN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return ThemePickerMenuItemComponent;
})();
// Menu
let ThemePickerComponent = /*#__PURE__*/(() => {
  class ThemePickerComponent {
    themePickerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_theme_picker_service__WEBPACK_IMPORTED_MODULE_6__.ThemePickerService);
    themes = _services_theme_picker_service__WEBPACK_IMPORTED_MODULE_6__.ThemePickerService.THEMES;
    currentTheme = this.themePickerService.currentTheme;
    darkMode = this.themePickerService.darkMode;
    selectTheme(theme) {
      this.themePickerService.userSelectedTheme.set(theme);
    }
    toggleDarkMode() {
      this.themePickerService.darkMode.set(!this.darkMode());
    }
    static ɵfac = function ThemePickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ThemePickerComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ThemePickerComponent,
      selectors: [["app-theme-picker"]],
      decls: 10,
      vars: 2,
      consts: [["themeMenu", "matMenu"], ["mat-icon-button", "", "matTooltip", "Select a theme for the documentation", 3, "mat-menu-trigger-for"], ["xPosition", "before"], ["mat-menu-item", ""], [3, "toggleChange", "checked"], [3, "theme", "isCurrentTheme"], [3, "click", "theme", "isCurrentTheme"]],
      template: function ThemePickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1)(1, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "format_color_fill");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", 2, 0)(5, "div", 3)(6, "mat-slide-toggle", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleChange", function ThemePickerComponent_Template_mat_slide_toggle_toggleChange_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.toggleDarkMode());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dark Mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](8, ThemePickerComponent_For_9_Template, 1, 2, "app-theme-picker-menu-item", 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIndex"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const themeMenu_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-menu-trigger-for", themeMenu_r5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.darkMode());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.themes);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__.MatSlideToggle, ThemePickerMenuItemComponent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuItem],
      styles: ["[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  --mat-icon-color: var(--mat-sys-primary);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9jb21wb25lbnRzL3RoZW1lLXBpY2tlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS90b2tlbnMvX3Rva2VuLXV0aWxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1E7RUN5RUEsd0NBQUE7QUQxRVIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIEB1c2UgJ0Bhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgQGluY2x1ZGUgbWF0Lmljb24tb3ZlcnJpZGVzKFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbWF0LXN5cy1wcmltYXJ5KSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgIiwiQHVzZSAnLi4vc3R5bGUvc2Fzcy11dGlscyc7XG5AdXNlICdzYXNzOmxpc3QnO1xuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczpzdHJpbmcnO1xuXG4vLyBDcmVhdGVzIGEgQ1NTIHZhcmlhYmxlLCBpbmNsdWRpbmcgdGhlIGZhbGxiYWNrIGlmIHByb3ZpZGVkLlxuQGZ1bmN0aW9uIF9jcmVhdGUtdmFyKCRuYW1lLCAkZmFsbGJhY2s6IG51bGwpIHtcbiAgQGlmICgkZmFsbGJhY2spIHtcbiAgICBAcmV0dXJuIHZhcigkbmFtZSwgJGZhbGxiYWNrKTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiB2YXIoJG5hbWUpO1xuICB9XG59XG5cbi8vIFJldHVybnMgYSBsaXN0IG9mIG92ZXJyaWRlcyBmb3IgdGhlIGdpdmVuIE0zIGdldC10b2tlbnMgbWl4aW4gYW5kIHByZWZpeC4gRWFjaCB0b2tlbiBoYXMgaXRzXG4vLyBwcmVmaXggcmVtb3ZlZCBzaW5jZSB0aGUgb3ZlcnJpZGVzIEFQSSBleHBlY3RzIGl0cyBhYnNlbmNlLiBUaGUgcmV0dXJuZWQgbWFwIGluY2x1ZGVzIFwiYWxsXCIgZm9yXG4vLyBhbGwgb3ZlcnJpZGUgdG9rZW5zLCBhbmQgYWxzbyB0aGUgc3Vic2V0cyB3aXRoIGtleXMgYmFzZSwgY29sb3IsIHR5cG9ncmFwaHksIGFuZCBkZW5zaXR5LlxuQGZ1bmN0aW9uIGdldC1vdmVycmlkZXMoJHRva2VucywgJHByZWZpeCkge1xuICAkYmFzZTogcmVtb3ZlLXRva2VuLXByZWZpeGVzKG1hcC5nZXQoJHRva2VucywgYmFzZSksICRwcmVmaXgpO1xuICAkY29sb3I6IHJlbW92ZS10b2tlbi1wcmVmaXhlcyhtYXAuZ2V0KCR0b2tlbnMsIGNvbG9yKSwgJHByZWZpeCk7XG4gICR0eXBvZ3JhcGh5OiByZW1vdmUtdG9rZW4tcHJlZml4ZXMobWFwLmdldCgkdG9rZW5zLCB0eXBvZ3JhcGh5KSwgJHByZWZpeCk7XG4gICRkZW5zaXR5OiByZW1vdmUtdG9rZW4tcHJlZml4ZXMobWFwLmdldCgkdG9rZW5zLCBkZW5zaXR5KSwgJHByZWZpeCk7XG4gICRhbGw6ICgpO1xuICBAZWFjaCAkbWFwIGluICgkYmFzZSwgJGNvbG9yLCAkdHlwb2dyYXBoeSwgJGRlbnNpdHkpIHtcbiAgICAkYWxsOiBtYXAubWVyZ2UoJGFsbCwgJG1hcCk7XG4gIH1cblxuICBAcmV0dXJuIChcbiAgICBhbGw6ICRhbGwsXG4gICAgYmFzZTogJGJhc2UsXG4gICAgY29sb3I6ICRjb2xvcixcbiAgICB0eXBvZ3JhcGh5OiAkdHlwb2dyYXBoeSxcbiAgICBkZW5zaXR5OiAkZGVuc2l0eSxcbiAgKTtcbn1cblxuLy8gUmVtb3ZlcyBhIHByZWZpeCBmcm9tIGVhY2ggY29tcG9uZW50IHRva2VuIGluIHRoZSBwcm92aWRlZCBtYXAgb2YgcHJlZml4ZWQgdG9rZW5zLlxuQGZ1bmN0aW9uIHJlbW92ZS10b2tlbi1wcmVmaXhlcygkcHJlZml4ZWQtdG9rZW5zOiAoKSwgJHByZWZpeCkge1xuICAkdG9rZW5zOiAoKTtcbiAgQGVhY2ggJHByZWZpeGVkLXRva2VuLCAkdmFsdWUgaW4gJHByZWZpeGVkLXRva2VucyB7XG4gICAgJHRva2VuOiBzdHJpbmcuc2xpY2UoJHByZWZpeGVkLXRva2VuLCBzdHJpbmcubGVuZ3RoKCRwcmVmaXgpICsgMik7XG4gICAgJHRva2VuczogbWFwLnNldCgkdG9rZW5zLCAkdG9rZW4sICR2YWx1ZSk7XG4gIH1cbiAgQHJldHVybiAkdG9rZW5zO1xufVxuXG4vLyBSZXR1cm5zIHRoZSB0b2tlbiBzbG90IHZhbHVlLlxuLy8gQWNjZXB0cyBhbiBvcHRpb25hbCBmYWxsYmFjayBwYXJhbWV0ZXIgdG8gaW5jbHVkZSBpbiB0aGUgQ1NTIHZhcmlhYmxlLlxuLy8gSWYgJGZhbGxiYWNrIGlzIGB0cnVlYCwgdGhlbiB1c2UgdGhlIHRva2VucyBtYXAgdG8gZ2V0IHRoZSBmYWxsYmFjay5cbkBmdW5jdGlvbiBzbG90KCR0b2tlbiwgJGZhbGxiYWNrcywgJGZhbGxiYWNrOiBudWxsKSB7XG4gIC8vIEZhbGxiYWNrcyBhcmUgYSBtYXAgb2YgYmFzZSwgY29sb3IsIHR5cG9ncmFwaHksIGFuZCBkZW5zaXR5IHRva2Vucy4gVG8gc2ltcGxpZnlcbiAgLy8gbG9va3VwLCBmbGF0dGVuIHRoZXNlIHRva2VuIGdyb3VwcyBpbnRvIGEgc2luZ2xlIG1hcC5cbiAgJGZhbGxiYWNrcy1mbGF0dGVuZWQ6ICgpO1xuICBAZWFjaCAkdG9rZW5zIGluIG1hcC52YWx1ZXMoJGZhbGxiYWNrcykge1xuICAgIEBlYWNoICR0b2tlbiwgJHZhbHVlIGluICR0b2tlbnMge1xuICAgICAgJGZhbGxiYWNrcy1mbGF0dGVuZWQ6IG1hcC5zZXQoJGZhbGxiYWNrcy1mbGF0dGVuZWQsICR0b2tlbiwgJHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgQGlmIG5vdCBtYXAuaGFzLWtleSgkZmFsbGJhY2tzLWZsYXR0ZW5lZCwgJHRva2VuKSB7XG4gICAgQGVycm9yICdUb2tlbiAjeyR0b2tlbn0gZG9lcyBub3QgZXhpc3QuIENvbmZpZ3VyZWQgdG9rZW5zIGFyZTonICtcbiAgICAgICAgI3ttYXAua2V5cygkZmFsbGJhY2tzLWZsYXR0ZW5lZCl9O1xuICB9XG5cbiAgJHN5cy1mYWxsYmFjazogbWFwLmdldCgkZmFsbGJhY2tzLWZsYXR0ZW5lZCwgJHRva2VuKTtcbiAgQGlmIChzYXNzLXV0aWxzLmlzLWNzcy12YXItbmFtZSgkc3lzLWZhbGxiYWNrKSkge1xuICAgICRzeXMtZmFsbGJhY2s6IF9jcmVhdGUtdmFyKCRzeXMtZmFsbGJhY2ssICRmYWxsYmFjayk7XG4gIH1cblxuICBAcmV0dXJuIF9jcmVhdGUtdmFyKC0tbWF0LSN7JHRva2VufSwgJHN5cy1mYWxsYmFjayk7XG59XG5cbi8vIE91dHB1dHMgYSBtYXAgb2YgdG9rZW4gdmFsdWVzIGFzIENTUyB2YXJpYWJsZSBkZWZpbml0aW9ucy5cbkBtaXhpbiB2YWx1ZXMoJHRva2Vucykge1xuICBAaW5jbHVkZSBzYXNzLXV0aWxzLmN1cnJlbnQtc2VsZWN0b3Itb3Itcm9vdCgpIHtcbiAgICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJHRva2VucyB7XG4gICAgICBAaWYgJHZhbHVlICE9IG51bGwge1xuICAgICAgICAtLW1hdC0jeyRrZXl9OiAjeyR2YWx1ZX07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vLyBFbWl0cyBuZXcgdG9rZW4gdmFsdWVzIGZvciB0aGUgZ2l2ZW4gdG9rZW4gb3ZlcnJpZGVzLlxuLy8vIFZlcmlmaWVzIHRoYXQgdGhlIG92ZXJyaWRlcyBwYXNzZWQgaW4gYXJlIHZhbGlkIHRva2Vucy5cbi8vLyBOZXcgdG9rZW4gdmFsdWVzIGFyZSBlbWl0dGVkIHVuZGVyIHRoZSBjdXJyZW50IHNlbGVjdG9yIG9yIHJvb3QuXG5AbWl4aW4gYmF0Y2gtY3JlYXRlLXRva2VuLXZhbHVlcygkb3ZlcnJpZGVzOiAoKSwgJG5hbWVzcGFjZS1jb25maWdzKSB7XG4gIEBpbmNsdWRlIHNhc3MtdXRpbHMuY3VycmVudC1zZWxlY3Rvci1vci1yb290KCkge1xuICAgICRwcmVmaXhlZC1uYW1lLWRhdGE6ICgpO1xuICAgICRhbGwtbmFtZXM6ICgpO1xuXG4gICAgQGVhY2ggJGNvbmZpZyBpbiAkbmFtZXNwYWNlLWNvbmZpZ3Mge1xuICAgICAgJG5hbWVzcGFjZTogbWFwLmdldCgkY29uZmlnLCBuYW1lc3BhY2UpO1xuICAgICAgJHByZWZpeDogaWYobWFwLmhhcy1rZXkoJGNvbmZpZywgcHJlZml4KSwgbWFwLmdldCgkY29uZmlnLCBwcmVmaXgpLCAnJyk7XG4gICAgICAkdG9rZW5zOiBtYXAuZ2V0KG1hcC5nZXQoJGNvbmZpZywgdG9rZW5zKSwgYWxsKTtcbiAgICAgIEBlYWNoICRuYW1lLCAkdmFsdWUgaW4gJHRva2VucyB7XG4gICAgICAgICRwcmVmaXhlZC1uYW1lOiAkcHJlZml4ICsgJG5hbWU7XG4gICAgICAgICRhbGwtbmFtZXM6IGxpc3QuYXBwZW5kKCRhbGwtbmFtZXMsICRwcmVmaXhlZC1uYW1lLCAkc2VwYXJhdG9yOiBjb21tYSk7XG4gICAgICAgICRwcmVmaXhlZC1uYW1lLWRhdGE6IG1hcC5zZXQoJHByZWZpeGVkLW5hbWUtZGF0YSwgJHByZWZpeGVkLW5hbWUsICgkbmFtZXNwYWNlLCAkbmFtZSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBlYWNoICRuYW1lLCAkdmFsdWUgaW4gJG92ZXJyaWRlcyB7XG4gICAgICBAaWYgbWFwLmhhcy1rZXkoJHByZWZpeGVkLW5hbWUtZGF0YSwgJG5hbWUpIHtcbiAgICAgICAgJGRhdGE6IG1hcC5nZXQoJHByZWZpeGVkLW5hbWUtZGF0YSwgJG5hbWUpO1xuICAgICAgICAkbmFtZXNwYWNlOiBsaXN0Lm50aCgkZGF0YSwgMSk7XG4gICAgICAgICRuYW1lOiBsaXN0Lm50aCgkZGF0YSwgMik7XG4gICAgICAgICRwcmVmaXhlZC1uYW1lOiAkbmFtZXNwYWNlICsgJy0nICsgJG5hbWU7XG4gICAgICAgIEBpbmNsdWRlIHZhbHVlcygoJHByZWZpeGVkLW5hbWU6ICR2YWx1ZSkpO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciAjeydJbnZhbGlkIHRva2VuIG5hbWUgYCd9I3skbmFtZX0jeydgLiAnfSN7J1ZhbGlkIHRva2VucyBhcmU6ICd9I3skYWxsLW5hbWVzfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return ThemePickerComponent;
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


/***/ }

}])
//# sourceMappingURL=4699.js.map