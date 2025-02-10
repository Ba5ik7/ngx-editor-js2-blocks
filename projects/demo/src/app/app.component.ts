import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { NgxEditorJs2Component, NgxEditorJsBlock } from '@tmdjr/ngx-editor-js2';
import { BehaviorSubject, lastValueFrom, Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

export const TEST_DATA: NgxEditorJsBlock[] = [
  {
    blockId: 'iovlbzgosf',
    sortIndex: 0,
    componentInstanceName: 'HeaderBlockComponent',
    dataClean: 'Prerequisites',
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
    sortIndex: 5,
    componentInstanceName: 'ParagraphBlockComponent',
    dataClean:
      'Evaluation of a template expression should have no visible side effects. Use the syntax for template expressions to help avoid side effects. In general, the correct syntax prevents you from assigning a value to anything in a property binding expression. The syntax also prevents you from using increment and decrement operators.',
    savedAction: 'meduim',
  },
  {
    blockId: 'iovlbzgosuu',
    sortIndex: 4,
    componentInstanceName: 'HeaderBlockComponent',
    dataClean: 'Woah! This is cool..',
    savedAction: 'h3',
  },
  {
    blockId: 'bu23hwyltsww',
    sortIndex: 3,
    componentInstanceName: 'ParagraphBlockComponent',
    dataClean:
      'Material Design uses color to create accessible, personal color schemes that communicate your products hierarchy, state, and brand. See Material Designs Color System page to learn more about its use and purpose.',
    savedAction: 'small',
  },
  {
    blockId: 'n177d7',
    sortIndex: 2,
    componentInstanceName: 'NgxEditorJs2BlockquotesComponent',
    dataClean:
      '"Design is not just what it looks like and feels like. Design is how it works."',
    savedAction: 'display-large',
  },
];

@Component({
  selector: 'app-root',
  imports: [
    NgxEditorJs2Component,
    MatCard,
    MatCardContent,
    MatButton,
    AsyncPipe,
  ],
  template: `
    <div class="container">
      <mat-card class="ngx-editor-js2">
        <mat-card-content>
          <ngx-editor-js2
            [blocks]="blocks"
            [requestBlocks]="requestBlocks$ | async"
            (blocksRequested)="handleBlocks($event)"
          ></ngx-editor-js2>
          <button mat-button (click)="requestTheCurrentBlocks()">
            Get Blocks
          </button>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        justify-content: center;
        margin-top: 50px;
      }

      .ngx-editor-js2 {
        max-width: 768px;
      }
    `,
  ],
})
export class AppComponent {
  // TODO: ADRIAN
  blocks = TEST_DATA; // this could be an empty array to start with

  // TODO: ADRIAN
  // When this value changes, the handleBock will be invoked
  requestBlocks = new BehaviorSubject<{}>({});
  requestBlocks$ = this.requestBlocks.asObservable();
  handleBlocks(blocks$: Observable<NgxEditorJsBlock[]>) {
    void lastValueFrom(blocks$.pipe(tap(console.table)));
  }

  requestTheCurrentBlocks() {
    this.requestBlocks.next({});
  }
}
