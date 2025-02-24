import { AsyncPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatStepperNext, MatStepperPrevious } from '@angular/material/stepper';
import { NgxEditorJs2PopQuizService } from '../../ngx-editor-js2-pop-quiz.service';
import { map } from 'rxjs';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'pop-quiz-answer',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    MatStepperNext,
    MatStepperPrevious,
    MatButton,
    MatFormFieldModule,
    MatOption,
    MatLabel,
    MatSelect,
  ],
  template: `
    @if (choices$ | async; as choices) {
    <form [formGroup]="answerFormGroup()">
      <h3>Select the Correct Answer</h3>
      <mat-form-field>
        <mat-label>Answer</mat-label>
        <mat-select formControlName="answer" required>
          @for (choice of choices.controls; track $index) {
          <mat-option [value]="choice.get('value')?.value">
            {{ choice.get('value')?.value }}
          </mat-option>
          }
        </mat-select>
        @if (answerFormGroup().get('answer')?.hasError('required')) {
        <mat-error>Please choose an answer</mat-error>
        }
      </mat-form-field>
      <div class="action-group">
        <button mat-flat-button matStepperPrevious>Previous</button>
        <button mat-flat-button matStepperNext>Next</button>
      </div>
    </form>
    }
  `,
  styles: [
    `
      :host {
        form {
          display: flex;
          flex-direction: column;
          mat-form-field {
            margin-bottom: 1.5rem;
          }
          .action-group {
            display: flex;
            justify-content: space-between;
          }
          h3 {
            font: var(--mat-sys-headline-small);
            font-weight: 100;
          }
        }
      }
    `,
  ],
})
export class AnswerComponent {
  answerFormGroup = input.required<FormGroup>();
  choices$ = inject(NgxEditorJs2PopQuizService).quizConfigForm$.pipe(
    map((form) => form.controls.choicesOptionsGroup.controls.choices)
  );

  ngOnInit() {
    this.answerFormGroup().get('answer')?.markAsTouched();
  }
}
