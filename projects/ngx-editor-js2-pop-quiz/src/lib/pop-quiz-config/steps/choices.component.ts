import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatStepperNext, MatStepperPrevious } from '@angular/material/stepper';

@Component({
  selector: 'pop-quiz-choices',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatStepperNext,
    MatStepperPrevious,
    MatButton,
    MatIcon,
  ],
  template: `
    <form [formGroup]="choicesFormGroup()">
      <h3>
        Create the Possible Answers <span>(Create at least 2 choices)</span>
      </h3>
      <ng-container formArrayName="choices">
        @for (option of choices.controls; track $index) {
        <ng-container [formGroupName]="$index">
          <div class="radio-option-container">
            <mat-form-field>
              <mat-label>Option {{ $index + 1 }}</mat-label>
              <textarea matInput formControlName="value"></textarea>
            </mat-form-field>
            <a mat-icon-button (click)="removeRatioOption($index)">
              <mat-icon class="delete">delete</mat-icon>
            </a>
          </div>
        </ng-container>
        }
        <div class="answers-action-group">
          <button mat-button type="button" (click)="addRatioOption()">
            <mat-icon>add</mat-icon>Add a Choice
          </button>
        </div>
      </ng-container>
      <div class="action-group">
        <button mat-flat-button matStepperNext>Next</button>
        <button mat-flat-button matStepperPrevious>Back</button>
      </div>
    </form>
  `,
  styles: [
    `
      :host {
        form {
          display: flex;
          flex-direction: column;
          .radio-option-container {
            display: flex;
            align-items: center;
            gap: 1rem;
            mat-form-field {
              width: 100%;
            }
            .delete {
              color: var(--mat-sys-error);
            }
          }
          .answers-action-group {
            margin-bottom: 1.7rem;
          }
          .action-group {
            display: flex;
            justify-content: space-between;
          }
          h3 {
            font: var(--mat-sys-headline-small);
            font-weight: 100;
            span {
              font: var(--mat-sys-body-small);
            }
          }
        }
      }
    `,
  ],
})
export class ChoicesComponent {
  formBuilder = inject(FormBuilder);
  choicesFormGroup = input.required<FormGroup>();

  get choices(): FormArray {
    return this.choicesFormGroup().get('choices') as FormArray;
  }

  addRatioOption() {
    this.choices.push(
      this.formBuilder.group({
        value: ['', [Validators.required]],
      })
    );
  }

  removeRatioOption(index: number) {
    this.choices.removeAt(index);
  }
}
