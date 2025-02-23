import { Component, input } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatStepperNext, MatStepperPrevious } from '@angular/material/stepper';

@Component({
  selector: 'pop-quiz-responses',
  imports: [ReactiveFormsModule, MatStepperNext, MatStepperPrevious, MatButton],
  template: `
    <form [formGroup]="responsesFormGroup()">
      <h2>Responses</h2>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-button matStepperNext>Next</button>
    </form>
  `,
})
export class ResponsesComponent {
  responsesFormGroup = input.required<FormGroup>();
}
