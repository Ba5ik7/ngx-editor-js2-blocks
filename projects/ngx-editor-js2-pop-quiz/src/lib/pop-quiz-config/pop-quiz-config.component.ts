import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Subject, takeUntil } from 'rxjs';
import { AbstractControl } from '@angular/forms';

type RatioOption = { value: string };
export type QuizConfig = {
  question: string;
  correctAnswer: string;
  correctAnswerResponse: string;
  incorrectAnswerResponse: string;
  ratioOptions: RatioOption[];
};

function validateRatioOptions(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const optionsArray = control as FormArray;
    if (optionsArray.controls.length < 2) {
      return { notEnoughOptions: true };
    }
    return null;
  };
}

@Component({
  selector: 'pop-quiz-config',
  template: `
    <div class="quiz-block-modal">
      <form [formGroup]="quizConfigForm">
        <h2>Quiz Configuration</h2>

        <h3>Create a Question.</h3>
        <mat-form-field>
          <mat-label>Question</mat-label>
          <textarea matInput formControlName="question"></textarea>
          <mat-error *ngIf="quizConfigForm.get('question')?.errors">{{
            quizConfigFormErrorMessages['question']
          }}</mat-error>
        </mat-form-field>

        <ng-container *ngIf="quizConfigForm.get('question')?.valid">
          <h3>
            Create the possible answers <span>(Create at least 2 options)</span>
          </h3>
          <div formArrayName="ratioOptions">
            <div
              *ngFor="let option of ratioOptions.controls; let i = index"
              [formGroupName]="i"
            >
              <div class="radio-option-container">
                <mat-form-field>
                  <mat-label>Option {{ i + 1 }}</mat-label>
                  <textarea matInput formControlName="value"></textarea>
                </mat-form-field>
                <a mat-icon-button (click)="removeRatioOption(i)">
                  <mat-icon class="delete-option">delete</mat-icon>
                </a>
              </div>
            </div>
            <div class="answers-action-group">
              <button mat-button type="button" (click)="addRatioOption()">
                <mat-icon>add</mat-icon>
                Add Answer
              </button>
            </div>
          </div>
        </ng-container>

        <ng-container
          *ngIf="
            quizConfigForm.get('question')?.valid &&
            quizConfigForm.get('ratioOptions')?.valid
          "
        >
          <h3>Select the correct answer</h3>
          <mat-form-field>
            <mat-label>Answer</mat-label>
            <mat-select formControlName="correctAnswer">
              <mat-option
                *ngFor="let option of ratioOptions.controls; let i = index"
                [value]="option.get('value')?.value"
              >
                {{ option.get('value')?.value }}
              </mat-option>
            </mat-select>
            <mat-error *ngIf="quizConfigForm.get('correctAnswer')?.errors">{{
              quizConfigFormErrorMessages['correctAnswer']
            }}</mat-error>
          </mat-form-field>
        </ng-container>

        <ng-container
          *ngIf="
            quizConfigForm.get('question')?.valid &&
            quizConfigForm.get('ratioOptions')?.valid &&
            quizConfigForm.get('correctAnswer')?.valid
          "
        >
          <h3>Correct answer response.</h3>
          <mat-form-field>
            <mat-label>Response</mat-label>
            <textarea
              matInput
              formControlName="correctAnswerResponse"
            ></textarea>
            <mat-error
              *ngIf="quizConfigForm.get('correctAnswerResponse')?.errors"
              >{{
                quizConfigFormErrorMessages['correctAnswerResponse']
              }}</mat-error
            >
          </mat-form-field>
        </ng-container>

        <ng-container
          *ngIf="
            quizConfigForm.get('question')?.valid &&
            quizConfigForm.get('ratioOptions')?.valid &&
            quizConfigForm.get('correctAnswer')?.valid
          "
        >
          <h3>Incorrect answer response.</h3>
          <mat-form-field>
            <mat-label>Response</mat-label>
            <textarea
              matInput
              formControlName="incorrectAnswerResponse"
            ></textarea>
            <mat-error
              *ngIf="quizConfigForm.get('incorrectAnswerResponse')?.errors"
              >{{
                quizConfigFormErrorMessages['incorrectAnswerResponse']
              }}</mat-error
            >
          </mat-form-field>
        </ng-container>

        <div class="action-group">
          <button
            mat-raised-button
            type="button"
            (click)="updateQuiz()"
            [disabled]="quizConfigForm.invalid"
          >
            Save
          </button>
          <button mat-raised-button type="button" (click)="closeConfig()">
            Cancel
          </button>
        </div>
      </form>
    </div>
  `,
  styles: [
    `
      :host {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 20px;
      }
      :host form {
        display: flex;
        flex-direction: column;
      }
      :host form .action-group {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
      }
      .answers-action-group {
        padding-bottom: 20px;
      }
      .radio-option-container {
        display: flex;
        gap: 10px;
      }
      .radio-option-container mat-form-field {
        flex: 1;
      }
      .delete-option {
        color: var(--mat-sys-error);
      }
      h2 {
        font: var(--mat-sys-headline-medium);
        margin-bottom: 0px;
      }
      h3 {
        font: var(--mat-sys-headline-small);
        font-weight: 100;
      }
    `,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class PopQuizConfigComponent implements OnInit {
  // constructor(private formBuilder: FormBuilder) {}
  formBuilder = inject(FormBuilder);
  destory: Subject<boolean> = new Subject();
  @Input() value!: QuizConfig;
  @Output() quizValue = new EventEmitter<QuizConfig>();

  errorMessages: { [key: string]: string } = { required: 'Required' };
  quizConfigFormErrorMessages: { [key: string]: string } = {
    question: 'Required',
    correctAnswer: '',
  };

  quizConfigForm!: FormGroup;

  get ratioOptions(): FormArray {
    return this.quizConfigForm.get('ratioOptions') as FormArray;
  }

  ngOnInit(): void {
    this.quizConfigForm = this.formBuilder.group({
      question: [this.value.question ?? '', [Validators.required]],
      correctAnswer: [this.value.correctAnswer ?? undefined, [Validators.required]],
      correctAnswerResponse: [this.value.correctAnswerResponse ?? '', [Validators.required]],
      incorrectAnswerResponse: [this.value.incorrectAnswerResponse ?? '', [Validators.required]],
      ratioOptions: this.formBuilder.array((this.value.ratioOptions ?? [])
                    .map(option => this.formBuilder.group({ value: [option.value, Validators.required] })), validateRatioOptions())

    });
    this.quizConfigForm.statusChanges
      .pipe(takeUntil(this.destory))
      .subscribe(() =>
        this.setErrorsMessages(
          this.quizConfigForm,
          this.quizConfigFormErrorMessages
        )
      );
  }

  ngOnDestroy(): void {
    this.destory.next(true);
  }

  updateQuiz() {
    this.quizValue.emit(this.quizConfigForm.value);
  }

  closeConfig() {
    this.quizValue.emit(this.value);
  }

  addRatioOption(): void {
    const option = this.formBuilder.group({
      value: ['', [Validators.required]],
    });
    this.ratioOptions.push(option);
  }

  removeRatioOption(index: number): void {
    this.quizConfigForm.get('correctAnswer')?.setValue(undefined);
    this.ratioOptions.removeAt(index);
  }

  setErrorsMessages(
    formGroup: FormGroup,
    formControlMessages: { [key: string]: string }
  ): void {
    Object.keys(formGroup.controls).forEach((element) => {
      const errors = formGroup.get(element)?.errors;
      if (errors) {
        const error = Object.keys(errors)[0];
        formControlMessages[element] = this.errorMessages[error];
      }
    });
  }
}
