
import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious } from '@angular/material/stepper';

@Component({
  selector: 'pop-quiz-results',
  imports: [ReactiveFormsModule, MatStepperPrevious, MatButton],
  template: `
    <form [formGroup]="resultsFormGroup()">
      <h2>Results</h2>
      <button mat-button matStepperPrevious>Back</button>
    </form>
  `,
})
export class ResultsComponent {
  resultsFormGroup = input.required<FormGroup>();
}
