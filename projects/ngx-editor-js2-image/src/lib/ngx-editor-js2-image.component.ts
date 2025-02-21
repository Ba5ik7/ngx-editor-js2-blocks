import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  AutofocusDirective,
  BlockComponent,
  BlockOptionAction,
  ControlAccessorDirective,
  ToolbarFabDirective,
} from '@tmdjr/ngx-editor-js2';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { ImageConfigComponent } from './image-config/image-config.component';

type Value = { url: string; title: string };

@Component({
  selector: 'ngx-editor-js2-image',
  host: { class: 'cdk-drag-animating no-toolbar-inline' },
  hostDirectives: [CdkDrag],
  imports: [
    ReactiveFormsModule,
    ControlAccessorDirective,
    AutofocusDirective,
    ToolbarFabDirective,
    ImageConfigComponent,
    MatFabButton,
    MatIcon,
    NgClass,
  ],
  template: `
    <ng-container [formGroup]="formGroup()">
      @if (!openOverlay()) {
      <span
        controlAccessor
        toolbarFab
        class="image-container-overlay"
        [actionCallback]="actionCallbackBind"
        [autofocus]="autofocus()"
        [blockOptionActions]="blockOptionActions()"
        [formControlName]="formControlName()"
        [componentContextPositionIndex]="sortIndex()"
      ></span>
      <div class="image-container" [ngClass]="savedAction()">
        <img
          class="image-block"
          [src]="value().url"
          [title]="value().title"
          onerror="this.onerror=null;this.src='https://dummyimage.com/600x400/000/fff'"
        />
        <button
          mat-fab
          class="image-block-button"
          (click)="openEditUrlOverlay()"
        >
          <mat-icon>edit</mat-icon>
        </button>
      </div>
      } @else {
      <image-config
        [value]="value()"
        (imageValue)="updateImage($event)"
      ></image-config>
      }
    </ng-container>
  `,
  styles: [
    `
      :host {
        position: relative;
        display: flex;
        flex-direction: column;
        margin: 1.5rem 0;
        .flex-start {
          justify-content: flex-start;
        }
        .flex-end {
          justify-content: flex-end;
        }
        .center {
          justify-content: center;
        }
        .stretch img {
          width: 100%;
        }
        .image-container-overlay {
          display: flex;
          height: 100%;
          width: 100%;
          position: absolute;
        }
        .image-container-overlay:hover ~ .image-container .image-block-button,
        .image-block-button:hover {
          display: block;
        }

        .image-container {
          display: flex;
          .image-block {
            min-width: 0;
          }

          .image-block-button {
            position: absolute;
            top: 6px;
            left: 6px;
            display: none;
          }
        }
      }
    `,
  ],
})
export class NgxEditorJs2ImageComponent implements BlockComponent {
  sortIndex = input<number>(0);
  componentInstanceName = 'NgxEditorJs2ImageComponent';
  autofocus = input<boolean>(true);
  formGroup = input.required<FormGroup>();
  formControlName = input.required<string>();
  blockOptionActions = input<BlockOptionAction[]>([
    { action: 'flex-start', icon: 'format_align_left' },
    { action: 'center', icon: 'format_align_center' },
    { action: 'flex-end', icon: 'format_align_right' },
    { action: 'stretch', icon: 'format_align_justify' },
  ]);

  value = signal<Value>({ url: '', title: '' });
  savedAction = signal<string>('flex-start');
  actionCallbackBind = this.actionCallback.bind(this);

  openOverlay = signal<boolean>(true);

  ngOnInit() {
    try {
      const possibleSavedValue = this.formGroup().get(this.formControlName());

      this.value.set(
        JSON.parse(possibleSavedValue?.value ? possibleSavedValue.value : '{}')
      );
      this.value()?.url && this.openOverlay.set(false);
    } catch (error) {
      console.warn('Error parseing Image setting value', error);
    }
  }

  actionCallback(action: string) {
    this.savedAction.update(() => action);
  }

  openEditUrlOverlay() {
    this.openOverlay.set(true);
  }

  updateImage(value: Value) {
    this.value.set(value);
    this.formGroup()
      .get(this.formControlName())
      ?.setValue(JSON.stringify(value));
    this.openOverlay.set(false);
  }
}
