import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatStepperNext } from '@angular/material/stepper';

@Component({
  selector: 'pop-quiz-question',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatStepperNext,
    MatButton,
  ],
  template: `
    <form [formGroup]="questionFormGroup()">
      <h3>Create the Question to ask the User</h3>
      <mat-form-field>
        <mat-label>Create a Question to ask.</mat-label>
        <textarea matInput [formControlName]="'question'"></textarea>
      </mat-form-field>
      <div class="action-group">
        <button mat-flat-button matStepperNext>Next</button>
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
export class QuestionComponent {
  questionFormGroup = input.required<FormGroup>();

  // ngOnInit() {
  //   this.questionFormGroup().get('question')!.valueChanges.subscribe((value) => {
  //     console.log(value);
  //   });
  // }
}
