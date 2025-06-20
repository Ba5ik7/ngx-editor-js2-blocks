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
  imageConfigForm: FormGroup;
  configFormErrorMessages: { [key: string]: string };
  errorMessages: { [key: string]: string };
};

@Component({
  selector: 'image-config',
  imports: [
    MatInput,
    MatButton,
    MatFormFieldModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  template: `
    <div class="image-block-modal">
      @if (viewModel$ | async; as vm) {
      <form [formGroup]="vm.imageConfigForm">
        <h2 mat-dialog-title>Image Configurations</h2>
        <mat-form-field>
          <mat-label>Title</mat-label>
          <input matInput type="text" formControlName="title" />
          @if (vm.imageConfigForm.get('title')?.errors) {
          <mat-error>{{ vm.configFormErrorMessages['title'] }}</mat-error>
          }
        </mat-form-field>
        <mat-form-field>
          <mat-label>URL</mat-label>
          <input matInput type="text" formControlName="url" />
          @if (vm.imageConfigForm.get('url')?.errors) {
          <mat-error>{{ vm.configFormErrorMessages['url'] }}</mat-error>
          }
        </mat-form-field>
        <div class="action-group">
          <button
            type="button"
            mat-flat-button
            (click)="updateImage(vm.imageConfigForm)"
            [disabled]="vm.imageConfigForm.invalid"
          >
            Update
          </button>
          <button type="button" mat-button (click)="closeConfig()">
            Cancel
          </button>
        </div>
      </form>
      }
    </div>
  `,
  styles: [
    `
      :host {
        border: 1px solid #ccc;
        border-radius: var(
          --mat-card-outlined-container-shape,
          var(--mat-sys-corner-medium)
        );
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
export class ImageConfigComponent {
  formBuilder = inject(FormBuilder);

  value = input<Value>({ url: '', title: '' });
  value$ = toObservable(this.value);

  imageValue = output<Value>();

  viewModel$ = this.value$.pipe(
    map((value) => ({
      imageConfigForm: this.formBuilder.group({
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
    return viewModel.imageConfigForm.statusChanges.pipe(
      tap(() => this.setErrorsMessages(viewModel))
    );
  }

  updateImage(imageConfigForm: FormGroup) {
    this.imageValue.emit(imageConfigForm.value);
  }

  closeConfig() {
    this.imageValue.emit(
      this.value().url ? this.value() : { url: '', title: '' }
    );
  }

  // ! Quick and Drity way to set error messages
  // ! Breaks all my believes in "clean code"
  setErrorsMessages({
    imageConfigForm,
    configFormErrorMessages,
    errorMessages,
  }: ViewModel): void {
    Object.keys(imageConfigForm.controls).forEach((element) => {
      const errors = imageConfigForm.get(element)?.errors;
      if (errors) {
        const error = Object.keys(errors)[0];
        configFormErrorMessages[element] = errorMessages[error];
      }
    });
  }
}
