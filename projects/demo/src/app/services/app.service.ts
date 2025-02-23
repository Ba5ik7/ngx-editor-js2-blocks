import { Injectable } from '@angular/core';
import { NgxEditorJsBlock } from '@tmdjr/ngx-editor-js2';
import { BehaviorSubject, lastValueFrom, Observable, tap } from 'rxjs';

export const TEST_DATA: NgxEditorJsBlock[] = [
  {
    blockId: 'iovlbzgosf',
    sortIndex: 0,
    componentInstanceName: 'HeaderBlockComponent',
    savedAction: 'h1',
    dataClean: 'Prerequisites',
  },
  {
    blockId: '9bqhk',
    sortIndex: 1,
    componentInstanceName: 'NgxEditorJs2PopQuizComponent',
    savedAction: 'display-large',
    dataClean:
      '{"question":"Which of the following statements is true about Angular\'s default RouteReuseStrategy?","answer":"It reuses components when the route configuration remains the same.","correctResponse":"That\'s correct! Angular\'s default RouteReuseStrategy reuses components when the route configuration remains the same. This prevents components from being destroyed and recreated when only the fragment or query parameters change.","incorrectResponse":"That\'s incorrect. The correct answer is C. Angular\'s default RouteReuseStrategy reuses components when the route configuration remains the same. This prevents components from being destroyed and recreated when only the fragment or query parameters change.","choices":[{"value":"It only reuses components when the route configuration changes."},{"value":"It only reuses components when the route parameters change."},{"value":"It reuses components when the route configuration remains the same."},{"value":"It never reuses components."}]}',
  },
  // {
  //   blockId: 'n177dsd',
  //   sortIndex: 1,
  //   componentInstanceName: 'NgxEditorJs2ImageComponent',
  //   savedAction: 'stretch',
  //   dataClean:
  //     '{"url":"https://res.cloudinary.com/dowdpiikk/image/upload/w_650,q_auto:best,f_auto/v1709445782/lnyst5aqppuin8wt73ci.webp","title":"test"}',
  // },
  {
    blockId: 'bu23hwyltss',
    sortIndex: 2,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'large',
    dataClean:
      'Evaluation of a template expression should have no visible side effects. Use the syntax for template expressions to help avoid side effects. In general, the correct syntax prevents you from assigning a value to anything in a property binding expression. The syntax also prevents you from using increment and decrement operators.',
  },
  {
    blockId: 'n177d7',
    sortIndex: 3,
    componentInstanceName: 'NgxEditorJs2BlockquotesComponent',
    savedAction: 'display-large',
    dataClean:
      '`Design is not just what it looks like and feels like. Design is how it works.',
  },
  {
    blockId: 'bu23hwyltsww',
    sortIndex: 4,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'small',
    dataClean:
      'Material Design uses color to create accessible, personal color schemes that communicate your products hierarchy, state, and brand. See Material Designs Color System page to learn more about its use and purpose.',
  },
  {
    blockId: 'asdfasdf',
    sortIndex: 5,
    componentInstanceName: 'NgxEditorJs2CodemirrorComponent',
    savedAction: 'text/typescript',
    dataClean:
      "export class SimpleFormGroup {\n  form = new FormGroup({\n    first: new FormControl('Nancy', Validators.minLength(2)),\n    last: new FormControl('Drew'),\n  });\n\n  get first(): any {\n    return this.form.get('first');\n  }\n\n  onSubmit(): void {\n    console.log(this.form.value); // {first: 'Nancy', last: 'Drew'}\n  }\n\n  setValue() {\n    this.form.setValue({first: 'Carson', last: 'Drew'});\n  }\n}",
  },
  {
    blockId: 'l13u3k',
    sortIndex: 6,
    componentInstanceName: 'HeaderBlockComponent',
    savedAction: 'h1',
    dataClean: 'New way of learning...',
  },
  {
    blockId: '8u3uiij5vyj',
    sortIndex: 7,
    componentInstanceName: 'ParagraphBlockComponent',
    savedAction: 'large',
    dataClean:
      '<ul><li><a href="https://www.typescriptlang.org/">TypeScript</a> and HTML5 programming</li><li>Angular app-design fundamentals, as described in <a href="https://angular.io/guide/architecture">Angular Concepts</a><br></li><li>The basics of <a href="https://angular.io/guide/architecture-components#template-syntax">Angular template syntax</a><br></li></ul>',
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

@Injectable({
  providedIn: 'root',
})
export class AppService {
  ngxEditorJsBlocks = new BehaviorSubject<NgxEditorJsBlock[]>(TEST_DATA);
  ngxEditorJsBlocks$ = this.ngxEditorJsBlocks.asObservable();

  requestBlocks = new BehaviorSubject<{}>({});
  requestBlocks$ = this.requestBlocks.asObservable();

  handleBlocks(blocks$: Observable<NgxEditorJsBlock[]>) {
    void lastValueFrom(blocks$.pipe(tap(console.table)));
  }
}
