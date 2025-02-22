import { Component, input, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { MatRadioModule } from '@angular/material/radio';

import {
  AutofocusDirective,
  BlockComponent,
  BlockOptionAction,
  ControlAccessorDirective,
  ToolbarFabDirective,
} from '@tmdjr/ngx-editor-js2';
import { PopQuizConfigComponent } from './pop-quiz-config/pop-quiz-config.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface QuizConfig {
  question: string;
  correctAnswer: string;
  ratioOptions: { value: string }[];
  correctAnswerResponse: string;
  incorrectAnswerResponse: string;
}

@Component({
  selector: 'ngx-editor-js2-pop-quiz',
  host: { class: 'cdk-drag-animating no-toolbar-inline' },
  hostDirectives: [CdkDrag],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlAccessorDirective,
    AutofocusDirective,
    ToolbarFabDirective,
    PopQuizConfigComponent,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
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
      @if (openOverlay()) {
      <pop-quiz-config
        [value]="value()"
        (quizValue)="updateQuiz($event)"
      ></pop-quiz-config>
      } @else {
      <div class="quiz-conatiner">
        <h1>🔥 Pop Quiz</h1>
        <p #paragraph>{{ value().question }}</p>
        <mat-radio-group
          class="answer-ratio-group"
          [value]="value().correctAnswer"
        >
        @for (option of value().ratioOptions; track $index) {
          <mat-radio-button
            [value]="option.value"
            >{{ option.value }}</mat-radio-button
          >
        }
        </mat-radio-group>
        <div class="action-group">
          <button
            mat-flat-button
            color="primary"
            type="button"
            (click)="openEditQuizOverlay()"
          >
            Edit
          </button>
        </div>
      </div>
      }
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
        .quiz-conatiner {
          border: 0.5px solid #ccc;
          border-radius: 4px;
          padding: 20px;
        }
        .answer-ratio-group {
          display: flex;
          flex-direction: column;
        }
        .action-group {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }
        p {
          font: var(--mat-sys-headline-small);
        }
      }
    `,
  ],
})
export class NgxEditorJs2PopQuizComponent implements BlockComponent {
  sortIndex = input<number>(0);
  componentInstanceName = 'NgxEditorJs2PopQuizComponent';
  autofocus = input<boolean>(true);
  formGroup = input.required<FormGroup>();
  formControlName = input.required<string>();
  blockOptionActions = input<BlockOptionAction[]>([
    { action: 'medium', icon: 'density_small' },
    { action: 'display-small', icon: 'density_medium' },
    { action: 'display-large', icon: 'density_large' },
  ]);

  value = signal<QuizConfig>({
    question: '',
    correctAnswer: '',
    ratioOptions: [],
    correctAnswerResponse: '',
    incorrectAnswerResponse: '',
  });
  savedAction = signal<string>('display-large');
  actionCallbackBind = this.actionCallback.bind(this);

  openOverlay = signal<boolean>(true);

  ngOnInit() {
    try {
      const possibleSavedValue = this.formGroup().get(this.formControlName());

      this.value.set(
        JSON.parse(possibleSavedValue?.value ? possibleSavedValue.value : '{}')
      );
      this.value()?.question && this.openOverlay.set(false);
    } catch (error) {
      console.warn('Error parseing Quiz values', error);
    }
  }

  actionCallback(action: string) {
    this.savedAction.update(() => action);
  }

  openEditQuizOverlay() {
    this.openOverlay.set(true);
  }

  updateQuiz(value: QuizConfig) {
    this.value.set(value);
    this.formGroup()
      .get(this.formControlName())
      ?.setValue(JSON.stringify(value));
    this.openOverlay.set(false);
  }
}
