import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, input, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  BlockComponent,
  BlockOptionAction,
  ToolbarFabDirective,
} from '@tmdjr/ngx-editor-js2';
import {
  CodemirrorEditorComponent,
  CodeMirrorLanguage,
} from './codemirror-editor.component';

@Component({
  selector: 'ngx-editor-js2-codemirror',
  host: { class: 'cdk-drag-animating no-toolbar-inline' },
  hostDirectives: [CdkDrag],
  imports: [
    ReactiveFormsModule,
    ToolbarFabDirective,
    CodemirrorEditorComponent,
  ],
  template: `
    @if( waitForAnimation() ) {
    <ng-container [formGroup]="formGroup()">
      <ngx-codemirror-editor
        class="fade-in"
        toolbarFab
        [actionCallback]="actionCallbackBind"
        [blockOptionActions]="blockOptionActions()"
        [language]="savedAction()"
        [formControlName]="formControlName()"
        [componentContextPositionIndex]="sortIndex()"
      ></ngx-codemirror-editor>
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
    { action: 'typescript', devIcon: 'devicon-typescript-plain' },
    { action: 'javascript', devIcon: 'devicon-javascript-plain' },
    { action: 'html', devIcon: 'devicon-html5-plain' },
    { action: 'json', devIcon: 'devicon-json-plain' },
    { action: 'markdown', devIcon: 'devicon-markdown-original' },
    { action: 'css', devIcon: 'devicon-css3-plain' },
  ]);

  savedAction = signal<CodeMirrorLanguage>('typescript');
  actionCallbackBind = this.actionCallback.bind(this);

  actionCallback(action: string, updateFormValue = true) {
    this.savedAction.set(action as CodeMirrorLanguage);
    updateFormValue && this.formGroup().updateValueAndValidity();
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
