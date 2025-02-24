import { Component, inject, input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperPrevious } from '@angular/material/stepper';
import { MatDivider } from '@angular/material/divider';
import { NgxEditorJs2PopQuizService } from '../../ngx-editor-js2-pop-quiz.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'pop-quiz-results',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    MatStepperPrevious,
    MatButton,
    MatRadioModule,
    MatDivider,
  ],
  template: `
    <form [formGroup]="resultsFormGroup()">
      <h3>Preview of the Pop-Quiz</h3>
      <mat-divider></mat-divider>
      @if(viewModel$ | async; as formPreview) {
      <div class="preview-container">
        <div class="preview">
          <h1>Quiz</h1>
          <p>{{ formPreview.question }}</p>
          <mat-radio-group [value]="formPreview.answer">
            @for(option of formPreview.choices; track $index) {
            <mat-radio-button [value]="option.value">{{
              option.value
            }}</mat-radio-button>
            }
          </mat-radio-group>
        </div>
        <div class="preview-action-group">
          <button mat-button type="button">Submit</button>
        </div>
      </div>
      }
      <mat-divider></mat-divider>
      <div class="action-group">
        <button mat-flat-button matStepperPrevious>Back</button>
        <button mat-flat-button (click)="emitNewFormValue()">Save</button>
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
            margin-top: 1rem;
          }
          h3 {
            font: var(--mat-sys-headline-small);
            font-weight: 100;
          }

          .preview-container {
            display: flex;
            gap: 1.5rem;
            flex-direction: column;
            align-items: flex-end;
           margin-bottom: 1.5rem;
          }
        }
      }
    `,
  ],
})
export class ResultsComponent {
  popQuizService = inject(NgxEditorJs2PopQuizService);
  resultsFormGroup = input.required<FormGroup>();
  resultsFormGroup$ = toObservable(this.resultsFormGroup);

  viewModel$ = this.resultsFormGroup$.pipe(
    map((formGroup) =>
      this.popQuizService.marshalFormGroupIntoFormValue(formGroup.getRawValue())
    )
  );

  emitNewFormValue() {
    this.popQuizService.updateParentFormGroupValue(
      this.resultsFormGroup().getRawValue()
    );
  }
}
