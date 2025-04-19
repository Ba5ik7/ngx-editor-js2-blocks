import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgClass } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  ControlAccessorDirective,
  AutofocusDirective,
  ToolbarFabDirective,
  BlockOptionAction,
} from '@tmdjr/ngx-editor-js2';
import { MfeLoaderConfigComponent } from './mfe-loader-config/mfe-loader-config.component';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { LOAD_MFE_COMPONENT } from './mfe-loader.tokens';

type Value = {
  url: string; // remoteEntry
  remoteName: string; // remote name
  exposedModule: string; // exposed module key (e.g. './WidgetComponent')
};

@Component({
  selector: 'ngx-editor-js2-mfe-loader',
  host: { class: 'cdk-drag-animating no-toolbar-inline' },
  hostDirectives: [CdkDrag],
  imports: [
    ReactiveFormsModule,
    ControlAccessorDirective,
    AutofocusDirective,
    ToolbarFabDirective,
    MfeLoaderConfigComponent,
    MatFabButton,
    MatIcon,
    NgClass,
  ],
  template: `
    <ng-container [formGroup]="formGroup()">
      <span
        controlAccessor
        toolbarFab
        class="mfe-container-overlay"
        [actionCallback]="actionCallbackBind"
        [autofocus]="autofocus()"
        [blockOptionActions]="blockOptionActions()"
        [formControlName]="formControlName()"
        [componentContextPositionIndex]="sortIndex()"
      ></span>
      @if (!openOverlay()) {
      <div class="mfe-container" [ngClass]="savedAction()">
        <div class="mfe-block"><h1>LOADING...</h1></div>
        <button mat-fab class="mfe-block-button" (click)="openEditUrlOverlay()">
          <mat-icon>edit</mat-icon>
        </button>
      </div>
      } @else {
      <mfe-loader-config
        [value]="value()"
        (mfeValue)="updateMfeRemote($event)"
      ></mfe-loader-config>
      }
    </ng-container>
  `,
  styles: `
      :host {
        position: relative;
        display: flex;
        flex-direction: column;
        margin: 1.5rem 0;
        .mfe-container-overlay {
          display: flex;
          height: 100%;
          width: 100%;
          position: absolute;
        }

        .mfe-container-overlay:hover ~ .mfe-container .mfe-block-button,
        .mfe-block-button:hover {
          display: block;
        }

        .mfe-container {
          display: flex;
          .mfe-block {
            min-width: 0;
          }

          .mfe-block-button {
            position: absolute;
            top: 6px;
            left: 6px;
            display: none;
          }
        }
      }
  `,
})
export class NgxEditorJs2MfeLoaderComponent {
  loadMfeComponent = inject(LOAD_MFE_COMPONENT);

  sortIndex = input<number>(0);
  componentInstanceName = 'NgxEditorJs2MfeLoaderComponent';
  autofocus = input<boolean>(true);
  formGroup = input.required<FormGroup>();
  formControlName = input.required<string>();
  blockOptionActions = input<BlockOptionAction[]>([
    { action: 'medium', icon: 'density_small' },
    { action: 'display-small', icon: 'density_medium' },
    { action: 'display-large', icon: 'density_large' },
  ]);

  value = signal<Value>({ url: '', remoteName: '', exposedModule: '' });
  savedAction = signal<string>('display-large');
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
      console.warn('Error parseing MFE Loader setting value', error);
    }
  }

  ngAfterViewInit() {
    const { url, remoteName, exposedModule } = this.value();
    if (!url || !remoteName || !exposedModule) return;

    this.loadMfeComponent(url, exposedModule)
      .then((component) => {
        console.log('[MFE] Loaded component:', component);
        // TODO: Use ViewContainerRef to dynamically mount this component
      })
      .catch((err) =>
        console.error(`[MFE ${remoteName}] Failed to load remote component`, err)
      );
  }

  actionCallback(action: string) {
    this.savedAction.update(() => action);
  }

  openEditUrlOverlay() {
    this.openOverlay.set(true);
  }

  updateMfeRemote(value: Value) {
    this.value.set(value);
    this.formGroup()
      .get(this.formControlName())
      ?.setValue(JSON.stringify(value));
    this.openOverlay.set(false);
  }
}
