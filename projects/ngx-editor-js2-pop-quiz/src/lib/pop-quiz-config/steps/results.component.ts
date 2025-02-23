import { Component, inject, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious } from '@angular/material/stepper';
import { JsonPipe } from '@angular/common';
import { NgxEditorJs2PopQuizService } from '../../ngx-editor-js2-pop-quiz.service';

@Component({
  selector: 'pop-quiz-results',
  imports: [JsonPipe, ReactiveFormsModule, MatStepperPrevious, MatButton],
  template: `
    <form [formGroup]="resultsFormGroup()">
      <h2>Results</h2>
      <pre><code>{{ resultsFormGroup().getRawValue() | json }}</code></pre>
      <button mat-flat-button (click)="updatePopQuizFormValue()">Save</button>
      <button mat-flat-button matStepperPrevious>Back</button>
    </form>
  `,
})
export class ResultsComponent {
  resultsFormGroup = input.required<FormGroup>();
  popQuizService = inject(NgxEditorJs2PopQuizService);

  updatePopQuizFormValue() {
    this.popQuizService.updatePranetFormGroupValue(
      this.resultsFormGroup().getRawValue()
    );
  }
}
