import { Injectable } from '@angular/core';
import { NgxEditorJsBlock } from '@tmdjr/ngx-editor-js2';
import { BehaviorSubject, lastValueFrom, Observable, tap } from 'rxjs';

export const TEST_DATA: NgxEditorJsBlock[] = [
  {
    blockId: 'iovlbzgosf',
    sortIndex: 0,
    componentInstanceName: 'HeaderBlockComponent',
    savedAction: 'h1',
    dataClean: '🚀 Ready to Explore?',
  },
  {
    blockId: '6ldk3i',
    sortIndex: 1,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'large',
    dataClean:
      'This demo showcases the core concept of Ngx-EditorJs2 — a flexible, block-based content editor built with Angular. Each section of content is a self-contained block that can be rearranged via drag and drop, making it easy to structure and reorganize complex content visually.<div><br></div><div>Blocks aren’t just static — they can be configured through block-specific settings. For example, the Header block allows you to choose between multiple heading levels (H1–H6), and the Image block supports captions and alignment settings.</div><div><br></div><div>In addition, when selecting text within blocks that support inline formatting, a contextual inline toolbar appears. This toolbar enables quick formatting actions such as <b>bold</b>, <i>italic</i>, and text alignment (left, center, right) — allowing for a more expressive and intuitive editing experience.</div><div><br></div><div>Use this page to explore how each block behaves, how they can be customized, and how the editor adapts to your content needs in a modular and scalable way.</div>',
  },
  {
    blockId: 'pkm1k',
    sortIndex: 2,
    componentInstanceName: 'HeaderBlockComponent',
    savedAction: 'h3',
    dataClean: '✍️ Paragraph + Header',
  },
  {
    blockId: 'wpg67v',
    sortIndex: 3,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'large',
    dataClean:
      'The bread and butter of any editor. Use paragraphs for flowing content, and headers to create structure and hierarchy. <b>Clear</b>. <i>Clean</i>. <u>Essential</u>.',
  },
  {
    blockId: '8u3uiij5vyj',
    sortIndex: 4,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'large',
    dataClean:
      '<ul><li><a href="https://www.typescriptlang.org/">TypeScript</a> and HTML5 programming</li><li>Angular app-design fundamentals, as described in <a href="https://angular.io/guide/architecture">Angular Concepts</a><br></li><li>The basics of <a href="https://angular.io/guide/architecture-components#template-syntax">Angular template syntax</a><br></li></ul>',
  },
  {
    blockId: '2rdtwb',
    sortIndex: 5,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'medium',
    dataClean: '',
  },
  {
    blockId: '8w37us',
    sortIndex: 6,
    componentInstanceName: 'HeaderBlockComponent',
    savedAction: 'h3',
    dataClean: '💡 Quote',
  },
  {
    blockId: '31tbry',
    sortIndex: 7,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'large',
    dataClean:
      'Craft your favorite inspiration, callouts, or even markdown-style blockquotes using the Quote block.',
  },
  {
    blockId: 'n177d7',
    sortIndex: 8,
    componentInstanceName: 'NgxEditorJs2BlockquotesComponent',
    savedAction: 'display-large',
    dataClean:
      '“A quote block is like a spotlight — simple, elegant, and perfect for making a point.”',
  },
  {
    blockId: '7idv',
    sortIndex: 9,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'medium',
    dataClean: '',
  },
  {
    blockId: '9f1gqx',
    sortIndex: 10,
    componentInstanceName: 'HeaderBlockComponent',
    savedAction: 'h3',
    dataClean: '⚠️ Panels',
  },
  {
    blockId: '7g0me4',
    sortIndex: 11,
    componentInstanceName: 'NgxEditorJs2PanelComponent',
    savedAction: 'info',
    dataClean:
      'Panels are content blocks that help you organize and emphasize sections of your page.<div><ul><li><b>Improved Readability</b> – Panels break up long content, making it easier for readers to follow.</li><li><b>Enhanced Organization</b> – Panels provide logical structure, helping users find information faster.</li><li><b>Visual Appeal</b> – With color and layout options, panels draw attention to key areas on the page.</li></ul></div><div></div><div>Few panel types out of the box:</div><div><ul><li><b>Info Panel</b> – Ideal for general information.</li><li><b>Note Panel</b> – Perfect for emphasizing notes or key points.</li><li><b>Tip Panel</b> – Great for highlighting helpful tips or insights.</li><li><b>Warning Panel </b>– Used to draw attention to warnings or essential notices.</li></ul></div>',
  },
  {
    blockId: 'dq5uat',
    sortIndex: 12,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'medium',
    dataClean: '',
  },
  {
    blockId: 'mq9i9m',
    sortIndex: 13,
    componentInstanceName: 'HeaderBlockComponent',
    savedAction: 'h3',
    dataClean: '📷 Image Block',
  },
  {
    blockId: '4xkw3s',
    sortIndex: 14,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'large',
    dataClean:
      'A picture says a thousand words. The Image block supports captions and even alignment options to make your visuals shine.',
  },
  {
    blockId: 'n177dsd',
    sortIndex: 15,
    componentInstanceName: 'NgxEditorJs2ImageComponent',
    savedAction: 'stretch',
    dataClean:
      '{"url":"https://res.cloudinary.com/dowdpiikk/image/upload/w_650,q_auto:best,f_auto/v1709445782/lnyst5aqppuin8wt73ci.webp","title":"test"}',
  },
  {
    blockId: 'gt9e9s',
    sortIndex: 16,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'medium',
    dataClean: '',
  },
  {
    blockId: 'b3t74',
    sortIndex: 17,
    componentInstanceName: 'HeaderBlockComponent',
    savedAction: 'h3',
    dataClean: '🎨 CodeMirror Block',
  },
  {
    blockId: '9qls1d',
    sortIndex: 18,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'large',
    dataClean:
      'Embed rich, theme-able code editors right inside your documents. Great for live code samples or collaborative coding.',
  },
  {
    blockId: 'asdfasdf',
    sortIndex: 19,
    componentInstanceName: 'NgxEditorJs2CodemirrorComponent',
    savedAction: 'text/typescript',
    dataClean:
      "export class SimpleFormGroup {\n  form = new FormGroup({\n    first: new FormControl('Nancy', Validators.minLength(2)),\n    last: new FormControl('Drew'),\n  });\n\n  get first(): any {\n    return this.form.get('first');\n  }\n\n  onSubmit(): void {\n    console.log(this.form.value); // {first: 'Nancy', last: 'Drew'}\n  }\n\n  setValue() {\n    this.form.setValue({first: 'Carson', last: 'Drew'});\n  }\n}",
  },
  {
    blockId: 'hduds',
    sortIndex: 20,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'medium',
    dataClean: '',
  },
  {
    blockId: '8npajb',
    sortIndex: 21,
    componentInstanceName: 'HeaderBlockComponent',
    savedAction: 'h3',
    dataClean: '🔥 Mermaid.js Block',
  },
  {
    blockId: 'su45ai',
    sortIndex: 22,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'large',
    dataClean:
      'Need to include a flowchart, sequence diagram, or Gantt chart? The Mermaid.js block brings technical diagrams to life using simple syntax.',
  },
  {
    blockId: 'uapf2',
    sortIndex: 23,
    componentInstanceName: 'NgxEditorJs2MermaidjsComponent',
    savedAction: 'center',
    dataClean:
      'flowchart TD\n    A[Christmas] -->|Get money| B(Go shopping)\n    B --> C{Let me think}\n    C -->|One| D[Laptop]\n    C -->|Two| E[Hello World iPhone]\n    C -->|Three| F[fa:fa-car Car]',
  },
  {
    blockId: 'y3r4xs',
    sortIndex: 24,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'medium',
    dataClean: '<div><br></div>',
  },
  {
    blockId: 'q5m0u',
    sortIndex: 25,
    componentInstanceName: 'HeaderBlockComponent',
    savedAction: 'h3',
    dataClean: '🧠 Pop Quiz Block',
  },
  {
    blockId: 'ubo23s',
    sortIndex: 26,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'large',
    dataClean:
      'Test your knowledge or embed interactive quiz questions inline with your content. Great for workshops, tutorials, or even just friendly challenges.',
  },
  {
    blockId: '9bqhk',
    sortIndex: 27,
    componentInstanceName: 'NgxEditorJs2PopQuizComponent',
    savedAction: 'display-large',
    dataClean:
      '{"question":"Which of the following statements is true about Angular\'s default RouteReuseStrategy?","answer":"It reuses components when the route configuration remains the same.","correctResponse":"That\'s correct! Angular\'s default RouteReuseStrategy reuses components when the route configuration remains the same. This prevents components from being destroyed and recreated when only the fragment or query parameters change.","incorrectResponse":"That\'s incorrect. The correct answer is C. Angular\'s default RouteReuseStrategy reuses components when the route configuration remains the same. This prevents components from being destroyed and recreated when only the fragment or query parameters change.","choices":[{"value":"It only reuses components when the route configuration changes."},{"value":"It only reuses components when the route parameters change."},{"value":"It reuses components when the route configuration remains the same."},{"value":"It never reuses components."}]}',
  },
];

export const TEST_DATA_TWO: NgxEditorJsBlock[] = [
  {
    blockId: 'iovlbzgosf',
    sortIndex: 0,
    componentInstanceName: 'HeaderBlockComponent',
    dataClean: 'Different Prerequisites',
    savedAction: 'h1',
  },
  {
    blockId: 'bu23hwyltwl',
    sortIndex: 1,
    componentInstanceName: 'ParagraphBlockComponent',
    dataClean:
      'Skips the very first call to startViewTransition. This can be useful for disabling the animation during the applications initial loading phase.',
    savedAction: 'meduim',
  },
  {
    blockId: 'bu23hwyltss',
    sortIndex: 2,
    componentInstanceName: 'ParagraphBlockComponent',
    dataClean: 'SOmeehting Different then the last one',
    savedAction: 'meduim',
  },
  {
    blockId: 'iovlbzgosuu',
    sortIndex: 3,
    componentInstanceName: 'HeaderBlockComponent',
    dataClean: 'Woah! This is cool..',
    savedAction: 'h3',
  },
  {
    blockId: 'bu23hwyltsww',
    sortIndex: 2,
    componentInstanceName: 'ParagraphBlockComponent',
    dataClean:
      'Material Design uses color to create accessible, personal color schemes that communicate your products hierarchy, state, and brand. See Material Designs Color System page to learn more about its use and purpose.',
    savedAction: 'small',
  },
];

export const BROKEN_TEST_DATA: NgxEditorJsBlock[] = [
  {
    blockId: 'yo9uq7',
    sortIndex: 0,
    componentInstanceName: 'NgxEditorJs2MfeLoaderComponent',
    savedAction: 'display-large',
    dataClean:
      '{"url":"https://beta.ngx-workshop.io/remotes/seed-mfe-remote/remoteEntry.js","remoteName":"Testing","exposedModule":"Component"}',
  },
  {
    blockId: 'eftkta822ke',
    sortIndex: 1,
    componentInstanceName: 'HeaderBlockComponent',
    savedAction: 'h1',
    dataClean:
      'Embracing Idiomatic Reactive Data Streams with Angular and RxJS',
  },
  {
    blockId: 'm97wlx',
    sortIndex: 2,
    componentInstanceName: 'NgxEditorJs2ImageComponent',
    savedAction: 'stretch',
    dataClean:
      '{"url":"https://ngx-workshop.io/assets/img/5ea0ec6b-1997-4e13-b02f-17fad313ab1a.png","title":"Idiomati"}',
  },
  {
    blockId: '6w9r48',
    sortIndex: 3,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'large',
    dataClean:
      '<b>Objective:</b> This workshop is an invitation to explore the reactive programming paradigm within the Angular framework, offering both foundational knowledge and advanced techniques.',
  },
  {
    blockId: 'oecj9',
    sortIndex: 4,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'small',
    dataClean:
      '<div><span style="font-size: 16px;">Reference Material:</span></div><div><ul><li><a href="https://github.com/Ba5ik7/workshop-reactive-data-streams/tree/1-lab-complete">Workshop Lab Repo</a></li></ul></div>',
  },
  {
    blockId: 'cnvf9',
    sortIndex: 5,
    componentInstanceName: 'NgxEditorJs2BlockquotesComponent',
    savedAction: 'medium',
    dataClean: '<i>After cloning the repo checkout the branch 1-lab-start.</i>',
  },
  {
    blockId: 'lcl3c7',
    sortIndex: 6,
    componentInstanceName: 'HeaderBlockComponent',
    savedAction: 'h2',
    dataClean: 'Introduction to Angular and Reactive Programming with RxJS',
  },
  {
    blockId: '6uh5qa',
    sortIndex: 7,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'medium',
    dataClean:
      'Welcome to a comprehensive workshop designed to introduce and deepen your understanding of <i>idiomatic</i> reactive data streams utilizing Angular and RxJS. Angular, a platform and framework for building single-page client applications, incorporates a reactive programming style that is both robust and scalable. Coupled with RxJS, a library for asynchronous programming and stream manipulation, Angular provides a powerful suite of tools for modern web development.',
  },
  {
    blockId: 'zr3abg',
    sortIndex: 8,
    componentInstanceName: 'HeaderBlockComponent',
    savedAction: 'h3',
    dataClean: "RxJS: The Backbone of Angular's Reactivity",
  },
  {
    blockId: '6khq6q',
    sortIndex: 9,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'medium',
    dataClean:
      "RxJS plays a pivotal role in Angular's ecosystem by offering a comprehensive set of operators and functions to manage asynchronous events and data streams. The library's capabilities allow developers to elegantly handle complex data flows, orchestrate asynchronous operations, and implement sophisticated event handling mechanisms, all within a reactive paradigm.",
  },
  {
    blockId: '0krpie',
    sortIndex: 10,
    componentInstanceName: 'HeaderBlockComponent',
    savedAction: 'h3',
    dataClean: 'The Foundation of Angular: MVVM Architecture',
  },
  {
    blockId: 'rzvpn8',
    sortIndex: 11,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'medium',
    dataClean:
      "Angular's architectural approach, inspired by the Model-View-ViewModel (MVVM) pattern, facilitates a clear separation of concerns within applications. This architecture not only promotes maintainability but also enhances the scalability of applications by dividing the application logic, user interface, and data model. Angular's commitment to reactivity ensures that your applications remain responsive and performant, adapting seamlessly to user interactions and data changes.",
  },
  {
    blockId: 'vclw7i',
    sortIndex: 12,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'medium',
    dataClean: '',
  },
  {
    blockId: 'snk3z',
    sortIndex: 13,
    componentInstanceName: 'HeaderBlockComponent',
    savedAction: 'h2',
    dataClean: 'Getting Started: Initial Exploration',
  },
  {
    blockId: 'ni74d',
    sortIndex: 14,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'medium',
    dataClean:
      "In the initial phase of our workshop, specifically within the 1-lab-start branch, we introduce a foundational example through the AppComponent. This component serves as the initial touchpoint, demonstrating Angular's reactive capabilities in a simplified context.",
  },
  {
    blockId: 'k755z',
    sortIndex: 15,
    componentInstanceName: 'HeaderBlockComponent',
    savedAction: 'h3',
    dataClean: 'Delving into Reactive Programming Principles',
  },
  {
    blockId: '6uw92',
    sortIndex: 16,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'medium',
    dataClean:
      "The journey begins with understanding the basics of Angular's template syntax and its integration with reactive programming concepts. The simple data binding showcased here paves the way for more complex reactive interactions, which will be explored as we progress through the workshop.",
  },
  {
    blockId: '8h0zlp',
    sortIndex: 17,
    componentInstanceName: 'HeaderBlockComponent',
    savedAction: 'h3',
    dataClean: 'Key Insights and Best Practices',
  },
  {
    blockId: 'ybkivt',
    sortIndex: 18,
    componentInstanceName: 'NgxEditorJs2BlockquotesComponent',
    savedAction: 'display-small',
    dataClean:
      "<div><ul><li><b>Leveraging MVVM: </b>Angular's adoption of the MVVM pattern is critical for structuring applications that are both manageable and scalable. Embracing this pattern will facilitate better state management and UI/data separation.<br><br></li><li><b>Mastering RxJS:</b> Familiarity with RxJS operators is essential for effective reactive programming. Operators such as map, filter, and combineLatest are fundamental tools for data stream manipulation.<br><br></li><li><b>Utilizing Async Pipe:</b> The async pipe is a cornerstone of Angular's reactivity, simplifying subscription management and preventing memory leaks by automatically subscribing to and unsubscribing from Observables</li></ul></div>",
  },
  {
    blockId: 'q7gpmo',
    sortIndex: 19,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'medium',
    dataClean:
      'We look forward to guiding you through this journey into idiomatic reactive programming with Angular and RxJS.',
  },
  {
    blockId: 'a8ii49',
    sortIndex: 20,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'medium',
    dataClean:
      'This workshop is designed to equip you with the knowledge and skills necessary to harness the full potential of Angular and RxJS in building reactive applications. As we move forward, each lab will build upon the last, incrementally increasing in complexity and introducing more advanced concepts and techniques.',
  },
];
@Injectable({
  providedIn: 'root',
})
export class AppService {
  ngxEditorJsBlocks = new BehaviorSubject<NgxEditorJsBlock[]>(BROKEN_TEST_DATA);
  ngxEditorJsBlocks$ = this.ngxEditorJsBlocks.asObservable();

  requestBlocks = new BehaviorSubject<{}>({});
  requestBlocks$ = this.requestBlocks.asObservable();

  handleBlocks(blocks$: Observable<NgxEditorJsBlock[]>) {
    void lastValueFrom(blocks$.pipe(tap(() => console.log('Tesing'))));
  }
}
