
import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatStepperNext, MatStepperPrevious } from '@angular/material/stepper';

@Component({
  selector: 'pop-quiz-answer',
  imports: [ReactiveFormsModule, MatStepperNext, MatStepperPrevious, MatButton],
  template: `
    <form [formGroup]="answerFormGroup()">
      <h2>Answer</h2>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-button matStepperNext>Next</button>
    </form>
  `,
})
export class AnswerComponent {
  answerFormGroup = input.required<FormGroup>();
}
