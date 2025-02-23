import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatStepperNext, MatStepperPrevious } from '@angular/material/stepper';

@Component({
  selector: 'pop-quiz-responses',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatStepperNext,
    MatStepperPrevious,
    MatButton,
  ],
  template: `
    <form [formGroup]="responsesFormGroup()">
      <h3>Create a Response when the User is Correct</h3>
      <mat-form-field>
        <mat-label>Create a Response when the User is Correct</mat-label>
        <textarea matInput [formControlName]="'correctResponse'"></textarea>
      </mat-form-field>
      <h3>Create a Response when the User is Incorrect</h3>
      <mat-form-field>
        <mat-label>Create a Response when the User is Incorrect</mat-label>
        <textarea matInput [formControlName]="'incorrectResponse'"></textarea>
      </mat-form-field>
      <div class="action-group">
        <button mat-flat-button matStepperNext>Next</button>
        <button mat-flat-button matStepperPrevious>Previous</button>
      </div>
    </form>
  `,
  styles: [
    `
      :host {
        form {
          display: flex;
          flex-direction: column;
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
export class ResponsesComponent {
  responsesFormGroup = input.required<FormGroup>();
}
