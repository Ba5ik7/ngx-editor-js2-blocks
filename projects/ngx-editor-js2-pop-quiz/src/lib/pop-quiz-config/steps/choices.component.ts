import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';

import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatStepperNext, MatStepperPrevious } from '@angular/material/stepper';
import { BehaviorSubject, map } from 'rxjs';
import { NgxEditorJs2PopQuizService } from '../../ngx-editor-js2-pop-quiz.service';

@Component({
  selector: 'pop-quiz-choices',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatStepperNext,
    MatStepperPrevious,
    MatButtonModule,
    MatIcon,
    MatDivider,
    NgClass,
  ],
  template: `
    <form [formGroup]="choicesFormGroup()">
      <h3>
        Create the Possible Answers
        <span
          [ngClass]="{
            error: this.choicesFormGroup()
              .get('choices')
              ?.hasError('notEnoughOptions')
          }"
          >(Create at least 2 choices)</span
        >
      </h3>
      <ng-container formArrayName="choices">
        @for (option of (viewModel$ | async)!.controls; track option) {
        <ng-container [formGroupName]="$index">
          <div class="choices-radio-option-container">
            <mat-form-field>
              <mat-label>Option {{ $index + 1 }}</mat-label>
              <textarea matInput formControlName="value"></textarea>
              @if((this.choicesFormGroup().get('choices'))?.get($index.toString()))
              {
              <mat-error> Question is required </mat-error>
              }
            </mat-form-field>
            <button mat-icon-button (click)="removeRatioOption($index)">
              <mat-icon class="delete">delete</mat-icon>
            </button>
          </div>
        </ng-container>
        }
        <div class="choices-action-group">
          <button mat-button type="button" (click)="addRatioOption()">
            <mat-icon>add</mat-icon>Add a Choice
          </button>
        </div>
      </ng-container>
      <mat-divider></mat-divider>
      <div class="action-group">
        <button mat-flat-button matStepperPrevious>Previous</button>
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
          .error {
            color: var(--mat-sys-error);
          }
          .choices-radio-option-container {
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
          .choices-action-group {
            margin-bottom: 1.7rem;
          }
          .action-group {
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
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
  popQuizService = inject(NgxEditorJs2PopQuizService);
  choicesFormGroup = input.required<FormGroup, FormGroup>({
    transform: (value) => {
      this.choicesFormGroupSub.next(value);
      return value;
    },
  });

  choicesFormGroupSub = new BehaviorSubject<FormGroup>(
    this.formBuilder.group({
      choices: this.formBuilder.array([]),
    })
  );
  choicesFormGroup$ = this.choicesFormGroupSub.asObservable();

  viewModel$ = this.choicesFormGroup$.pipe(
    map((formGroup) => formGroup.get('choices') as FormArray)
  );

  addRatioOption() {
    const choices = this.choicesFormGroup().get('choices') as FormArray;
    choices.push(
      this.formBuilder.group({
        value: ['', [Validators.required]],
      })
    );
    this.choicesFormGroupSub.next(this.choicesFormGroup());
  }

  removeRatioOption(index: number) {
    const choices = this.choicesFormGroup().get('choices') as FormArray;
    choices.removeAt(index);
    this.choicesFormGroupSub.next(this.choicesFormGroup());

    // ! better way to do this invalidation on the prefill answer
    // ! Buggy
    this.popQuizService.quizConfigForm.value.controls.answerGroup
      .get('answer')
      ?.setValue('');
  }
}
