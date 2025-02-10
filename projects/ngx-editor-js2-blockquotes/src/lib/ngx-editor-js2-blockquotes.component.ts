import { Component, input, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';

import {
  AutofocusDirective,
  BlockComponent,
  BlockOptionAction,
  ControlAccessorDirective,
  ToolbarFabDirective,
} from '@tmdjr/ngx-editor-js2';

@Component({
  selector: 'ngx-editor-js2-blockquotes',
  host: { class: 'cdk-drag-animating' },
  hostDirectives: [CdkDrag],
  imports: [
    ReactiveFormsModule,
    ControlAccessorDirective,
    AutofocusDirective,
    ToolbarFabDirective,
    NgClass,
  ],
  template: `
    <ng-container [formGroup]="formGroup()">
      <blockquote
        controlAccessor
        contentEditable
        toolbarFab
        [ngClass]="savedAction()"
        [defaultValue]="formGroup().get(formControlName())?.value"
        [actionCallback]="actionCallbackBind"
        [autofocus]="autofocus()"
        [blockOptionActions]="blockOptionActions()"
        [formControlName]="formControlName()"
        [componentContextPositionIndex]="sortIndex()"
      ></blockquote>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
        position: relative;
        .medium {
          font: var(--mat-sys-body-medium);
          font-weight: 100;
        }
        .display-small {
          font: var(--mat-sys-display-small);
          font-weight: 100;
        }
        .display-large {
          font: var(--mat-sys-display-large);
          font-weight: 100;
        }

        blockquote {
          margin: 20px 0px;
          padding: 5px 0px 5px 20px;
          border-left: 5px solid var(--mat-sys-primary);
        }
      }
    `,
  ],
})
export class NgxEditorJs2BlockquotesComponent implements BlockComponent {
  sortIndex = input<number>(0);
  componentInstanceName = 'NgxEditorJs2BlockquotesComponent';
  autofocus = input<boolean>(true);
  formGroup = input.required<FormGroup>();
  formControlName = input.required<string>();
  blockOptionActions = input<BlockOptionAction[]>([
    { action: 'medium', icon: 'density_small' },
    { action: 'display-small', icon: 'density_medium' },
    { action: 'display-large', icon: 'density_large' },
  ]);

  savedAction = signal<string>('display-large');
  actionCallbackBind = this.actionCallback.bind(this);

  actionCallback(action: string) {
    this.savedAction.update(() => action);
  }
}
