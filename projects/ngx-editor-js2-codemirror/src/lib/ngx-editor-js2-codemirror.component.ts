import { Component, input, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import {
  AutofocusDirective,
  BlockComponent,
  BlockOptionAction,
  ControlAccessorDirective,
  ToolbarFabDirective,
} from '@tmdjr/ngx-editor-js2';


@Component({
  selector: 'ngx-editor-js2-codemirror',
  host: { class: 'cdk-drag-animating no-toolbar-inline' },
  hostDirectives: [CdkDrag],
  imports: [
    ReactiveFormsModule,
    ControlAccessorDirective,
    AutofocusDirective,
    ToolbarFabDirective,
    CodemirrorModule
],
  template: `
  @if( waitForAnimation() ) {
    <ng-container [formGroup]="formGroup()">
      <span controlAccessor [autofocus]="autofocus()"></span>
      <ngx-codemirror
        class="fade-in"
        toolbarFab
        [actionCallback]="actionCallbackBind"
        [blockOptionActions]="blockOptionActions()"
        [formControlName]="formControlName()"
        [componentContextPositionIndex]="sortIndex()"
        [options]="codeMirrorOptions()"
      ></ngx-codemirror>
    </ng-container>
  }
  `,
  styles: [
    `
      :host {
        display: block;
        position: relative;
        margin: 1.5rem 0;
        .codemirror-container-overlay {
          display: flex;
          height: 100%;
          width: 100%;
          position: absolute;
        }
      }

      :host ::ng-deep .CodeMirror {
        font-family: Cascadia Code, Fira Code, Menlo, Monaco, 'Courier New',
          monospace;
        font-size: 16px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0.5px;
        height: 100%;
      }
    `,
  ],
})
export class NgxEditorJs2CodemirrorComponent implements BlockComponent {
  sortIndex = input<number>(0);
  componentInstanceName = 'NgxEditorJs2CodemirrorComponent';
  autofocus = input<boolean>(true);
  formGroup = input.required<FormGroup>();
  formControlName = input.required<string>();
  blockOptionActions = input<BlockOptionAction[]>([
    { action: 'text/typescript', icon: 'javascript' },
    { action: 'css', icon: 'css' },
    { action: 'xml', icon: 'html' },
  ]);

  codeMirrorOptions = signal({
    lineNumbers: true,
    theme: 'material-palenight',
    mode: 'text/typescript',
    extraKeys: { 'Ctrl-Space': 'autocomplete' },
    styleActiveLine: true, // Highlight active line
    matchBrackets: true,
    indentUnit: 2,
    tabSize: 2,
    cursorScrollMargin: 5,
  });

  savedAction = signal<string>('display-large');
  actionCallbackBind = this.actionCallback.bind(this);

  actionCallback(action: string) {
    this.codeMirrorOptions.update((prev) => ({ ...prev, mode: action }));
    this.savedAction.update(() => action);
  }

  // ! Hotfix for perspective: 2500px;
  // Need create a delay to wait for the animation to finish before showing the component
  waitForAnimation = signal<boolean>(false);
  constructor() {
    setTimeout(() => {
      this.waitForAnimation.update(() => true);
    }, 500);
  }
}
