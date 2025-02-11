import { Component, input, signal } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import {
  AutofocusDirective,
  BlockComponent,
  BlockOptionAction,
  ControlAccessorDirective,
  ToolbarFabDirective,
} from '@tmdjr/ngx-editor-js2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-editor-js2-codemirror',
  host: { class: 'cdk-drag-animating' },
  hostDirectives: [CdkDrag],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlAccessorDirective,
    AutofocusDirective,
    ToolbarFabDirective,
    CodemirrorModule,
  ],
  template: `
    <ng-container [formGroup]="formGroup()">
      <span
        controlAccessor
        [autofocus]="autofocus()"
      ></span>
      <ngx-codemirror
        toolbarFab
        [actionCallback]="actionCallbackBind"
        [blockOptionActions]="blockOptionActions()"
        [formControlName]="formControlName()"
        [componentContextPositionIndex]="sortIndex()"
        [options]="codeMirrorOptions()"
      ></ngx-codemirror>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
        position: relative;
        .codemirror-container-overlay {
          display: flex;
          height: 100%;
          width: 100%;
          position: absolute;
        }
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
  });

  savedAction = signal<string>('display-large');
  actionCallbackBind = this.actionCallback.bind(this);

  actionCallback(action: string) {
    this.codeMirrorOptions.update((prev) => ({ ...prev, mode: action }));
    this.savedAction.update(() => action);
  }
}
