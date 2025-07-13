import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import {
  AutofocusDirective,
  BlockComponent,
  BlockOptionAction,
  ControlAccessorDirective,
  ToolbarFabDirective,
} from '@tmdjr/ngx-editor-js2';

@Component({
  selector: 'ngx-editor-js2-panel',
  host: { class: 'cdk-drag-animating' },
  hostDirectives: [CdkDrag],
  imports: [
    ReactiveFormsModule,
    ControlAccessorDirective,
    AutofocusDirective,
    ToolbarFabDirective,
    MatIcon,
    NgClass,
  ],
  template: `
    <ng-container [formGroup]="formGroup()">
      <div
        class="panel"
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
      >
        <mat-icon class="panel-icon">{{ panelIcons[savedAction()] }}</mat-icon>
        <div class="panel-content">
          <ng-content></ng-content>
        </div>
      </div>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
        position: relative;
        .panel {
          display: flex;
          padding: 10px;
          margin: 1rem 0;
          border-left: 5px solid currentColor;
          border-radius: 4px;
        }
        .panel-icon {
          margin-right: 8px;
        }
        .info {
          background: #e8f0fe;
          color: #1a73e8;
        }
        .note {
          background: #ece7f6;
          color: #673ab7;
        }
        .tip {
          background: #e6f4ea;
          color: #107c41;
        }
        .warning {
          background: #fff4e5;
          color: #f57c00;
        }
      }
    `,
  ],
})
export class NgxEditorJs2PanelComponent implements BlockComponent {
  sortIndex = input<number>(0);
  componentInstanceName = 'NgxEditorJs2PanelComponent';
  autofocus = input<boolean>(true);
  formGroup = input.required<FormGroup>();
  formControlName = input.required<string>();
  blockOptionActions = input<BlockOptionAction[]>([
    { action: 'info', icon: 'info' },
    { action: 'note', icon: 'description' },
    { action: 'tip', icon: 'lightbulb' },
    { action: 'warning', icon: 'warning' },
  ]);

  savedAction = signal<string>('info');
  actionCallbackBind = this.actionCallback.bind(this);

  panelIcons: Record<string, string> = {
    info: 'info',
    note: 'description',
    tip: 'lightbulb',
    warning: 'warning',
  };

  actionCallback(action: string) {
    this.savedAction.update(() => action);
  }
}
