import { AsyncPipe } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { map, mergeMap, of, startWith, tap, withLatestFrom } from 'rxjs';

type Value = { url: string; title: string };
type ViewModel = {
  mfeLoaderConfigForm: FormGroup;
  configFormErrorMessages: { [key: string]: string };
  errorMessages: { [key: string]: string };
};

@Component({
  selector: 'mfe-loader-config',
  imports: [
    MatInput,
    MatButton,
    MatFormFieldModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  template: `
      @if (viewModel$ | async; as vm) {
      <form [formGroup]="vm.mfeLoaderConfigForm">
        <h2 mat-dialog-title>MFE Remote Configurations</h2>
        <mat-form-field>
          <mat-label>MFE Title</mat-label>
          <input matInput type="text" formControlName="title" />
          @if (vm.mfeLoaderConfigForm.get('title')?.errors) {
          <mat-error>{{ vm.configFormErrorMessages['title'] }}</mat-error>
          }
        </mat-form-field>
        <mat-form-field>
          <mat-label>Remote URL</mat-label>
          <input matInput type="text" formControlName="url" />
          @if (vm.mfeLoaderConfigForm.get('url')?.errors) {
          <mat-error>{{ vm.configFormErrorMessages['url'] }}</mat-error>
          }
        </mat-form-field>
        <div class="action-group">
          <button
            type="button"
            mat-raised-button
            (click)="updateMfeURL(vm.mfeLoaderConfigForm)"
            [disabled]="vm.mfeLoaderConfigForm.invalid"
          >
            Save
          </button>
          <button type="button" mat-raised-button (click)="closeConfig()">
            Cancel
          </button>
        </div>
      </form>
      }
  `,
  styles: [
    `
      :host {
        border: 0.5px solid #ccc;
        border-radius: 4px;
        padding: 20px;
        form {
          display: flex;
          flex-direction: column;
          .action-group {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
          }
        }
      }
    `,
  ],
})
export class MfeLoaderConfigComponent {
  formBuilder = inject(FormBuilder);

  value = input<Value>({ url: '', title: '' });
  value$ = toObservable(this.value);

  mfeValue = output<Value>();

  viewModel$ = this.value$.pipe(
    map((value) => ({
      mfeLoaderConfigForm: this.formBuilder.group({
        url: [value.url, [Validators.required]],
        title: [value.title, [Validators.required]],
      }),
      errorMessages: {
        required: 'Required',
      },
      configFormErrorMessages: {
        url: '',
        title: '',
      },
    })),
    mergeMap((viewModel: ViewModel) =>
      this.watchStatusChanges(viewModel).pipe(
        startWith(null),
        withLatestFrom(of(viewModel)),
        map(([_status, vm]) => vm)
      )
    )
  );

  watchStatusChanges(viewModel: ViewModel) {
    return viewModel.mfeLoaderConfigForm.statusChanges.pipe(
      tap(() => this.setErrorsMessages(viewModel))
    );
  }

  updateMfeURL(mfeLoaderConfigForm: FormGroup) {
    this.mfeValue.emit(mfeLoaderConfigForm.value);
  }

  closeConfig() {
    this.mfeValue.emit(
      this.value().url ? this.value() : { url: '', title: '' }
    );
  }

  // ! Quick and Drity way to set error messages
  // ! Breaks all my believes in "clean code"
  setErrorsMessages({
    mfeLoaderConfigForm,
    configFormErrorMessages,
    errorMessages,
  }: ViewModel): void {
    Object.keys(mfeLoaderConfigForm.controls).forEach((element) => {
      const errors = mfeLoaderConfigForm.get(element)?.errors;
      if (errors) {
        const error = Object.keys(errors)[0];
        configFormErrorMessages[element] = errorMessages[error];
      }
    });
  }
}
