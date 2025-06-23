import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';

import {
  AnswerGroup,
  ChoicesOptionsGroup,
  NgxEditorJs2PopQuizService,
  QuestionGroup,
  ResponsesGroup,
} from '../ngx-editor-js2-pop-quiz.service';
import { QuestionComponent } from './steps/question.component';
import { ResponsesComponent } from './steps/responses.component';
import { ChoicesComponent } from './steps/choices.component';
import { AnswerComponent } from './steps/answer.component';
import { ResultsComponent } from './steps/results.component';
import { combineLatest, map, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'pop-quiz-config',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    MatStepperModule,
    QuestionComponent,
    ResponsesComponent,
    ChoicesComponent,
    AnswerComponent,
    ResultsComponent,
  ],
  template: `
    @if (viewModel$ | async; as vm) {
    <mat-stepper class="mat-stepper" linear [selectedIndex]="vm.selectedIndex">
      <mat-step [stepControl]="vm.questionGroup" [completed]="vm.completed">
        <ng-template matStepLabel>Question?</ng-template>
        <pop-quiz-question
          [questionFormGroup]="vm.questionGroup"
        ></pop-quiz-question>
      </mat-step>
      <mat-step
        [stepControl]="vm.choicesOptionsGroup"
        [completed]="vm.completed"
      >
        <ng-template matStepLabel>Choices</ng-template>
        <pop-quiz-choices
          [choicesFormGroup]="vm.choicesOptionsGroup"
        ></pop-quiz-choices>
      </mat-step>
      <mat-step [stepControl]="vm.answerGroup" [completed]="vm.completed">
        <ng-template matStepLabel>Answer</ng-template>
        <pop-quiz-answer [answerFormGroup]="vm.answerGroup"></pop-quiz-answer>
      </mat-step>
      <mat-step [stepControl]="vm.responsesGroup" [completed]="vm.completed">
        <ng-template matStepLabel>Responses</ng-template>
        <pop-quiz-responses
          [responsesFormGroup]="vm.responsesGroup"
        ></pop-quiz-responses>
      </mat-step>
      <mat-step [stepControl]="vm.quizConfigForm" [completed]="vm.completed">
        <ng-template matStepLabel>Results</ng-template>
        <pop-quiz-results
          [resultsFormGroup]="vm.quizConfigForm"
        ></pop-quiz-results>
      </mat-step>
    </mat-stepper>
    }
  `,
  styles: [
    `
      :host {
        border: 1px solid #ccc;
        border-radius: var(
          --mat-card-outlined-container-shape,
          var(--mat-sys-corner-medium)
        );
        pop-quiz-question {
          padding-top: 1rem;
        }
        mat-stepper.mat-stepper-vertical,
        mat-stepper.mat-stepper-horizontal {
          background: none;
        }
      }
    `,
  ],
})
export class PopQuizConfigComponent {
  popQuizService = inject(NgxEditorJs2PopQuizService);

  viewModel$ = combineLatest({
    form: this.popQuizService.quizConfigForm$,
    value: this.popQuizService.quizConfigValue$,
  }).pipe(
    map(({ value }) => ({
      form: this.popQuizService.initializeQuizConfigForm(value),
      value,
    })),
    map(({ form, value }) => ({
      questionGroup: form.get('questionGroup') as QuestionGroup,
      choicesOptionsGroup: form.get(
        'choicesOptionsGroup'
      ) as ChoicesOptionsGroup,
      answerGroup: form.get('answerGroup') as AnswerGroup,
      responsesGroup: form.get('responsesGroup') as ResponsesGroup,
      quizConfigForm: form,
      selectedIndex: value.question ? 4 : 0,
      completed: value.question ? true : false,
    }))
  );
}
