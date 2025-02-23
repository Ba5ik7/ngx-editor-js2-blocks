import { Component, inject, input, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CdkDrag } from '@angular/cdk/drag-drop';

import {
  AutofocusDirective,
  BlockComponent,
  BlockOptionAction,
  ControlAccessorDirective,
  ToolbarFabDirective,
} from '@tmdjr/ngx-editor-js2';
import { PopQuizConfigComponent } from './pop-quiz-config/pop-quiz-config.component';
import { NgxEditorJs2PopQuizService } from './ngx-editor-js2-pop-quiz.service';

@Component({
  selector: 'ngx-editor-js2-pop-quiz',
  host: { class: 'cdk-drag-animating no-toolbar-inline' },
  hostDirectives: [CdkDrag],
  imports: [
    ReactiveFormsModule,
    ControlAccessorDirective,
    AutofocusDirective,
    ToolbarFabDirective,
    PopQuizConfigComponent,
  ],
  template: `
    <ng-container [formGroup]="formGroup()">
      <span
        controlAccessor
        toolbarFab
        class="pop-quiz-container-overlay"
        [actionCallback]="actionCallbackBind"
        [autofocus]="autofocus()"
        [blockOptionActions]="blockOptionActions()"
        [formControlName]="formControlName()"
        [componentContextPositionIndex]="sortIndex()"
      ></span>
      <pop-quiz-config></pop-quiz-config>
    </ng-container>
  `,
  styles: [
    `
      :host {
        position: relative;
        display: flex;
        flex-direction: column;
        margin: 1.5rem 0;
        .pop-quiz-container-overlay {
          display: flex;
          height: 100%;
          width: 100%;
          position: absolute;
        }
      }
    `,
  ],
})
export class NgxEditorJs2PopQuizComponent implements BlockComponent {
  popQuizService = inject(NgxEditorJs2PopQuizService);
  sortIndex = input<number>(0);
  componentInstanceName = 'NgxEditorJs2PopQuizComponent';
  autofocus = input<boolean>(true);
  formGroup = input.required<FormGroup, FormGroup>(
    {
      transform: (value) => {
        this.popQuizService.parentFormGroup = value;
        return value;
      }
    },
  );
  formControlName = input.required<string, string>({
    transform: (value) => {
      this.popQuizService.parentFormControlName = value;
      return value;
    }
  });
  blockOptionActions = input<BlockOptionAction[]>([
    { action: 'medium', icon: 'density_small' },
    { action: 'display-small', icon: 'density_medium' },
    { action: 'display-large', icon: 'density_large' },
  ]);

  value = this.popQuizService.quizConfigValue$;
  savedAction = signal<string>('display-large');
  actionCallbackBind = this.actionCallback.bind(this);

  ngOnInit() {
    try {
      const possibleSavedValue = this.formGroup().get(this.formControlName());
      this.popQuizService.setQuizConfigValue(
        JSON.parse(possibleSavedValue?.value ? possibleSavedValue.value : '{}')
      );
    } catch (error) {
      console.warn('Error parseing Quiz values', error);
    }
  }

  actionCallback(action: string) {
    this.savedAction.update(() => action);
  }
}
