import { loadRemoteModule } from '@angular-architects/module-federation';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgClass } from '@angular/common';
import {
  Component,
  input,
  signal,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  AutofocusDirective,
  BlockOptionAction,
  ControlAccessorDirective,
  ToolbarFabDirective,
} from '@tmdjr/ngx-editor-js2';
import { ErrorDialog } from './error-dialog';
import { MfeLoaderConfigComponent } from './mfe-loader-config/mfe-loader-config.component';

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
    ErrorDialog,
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
      <ng-container #mfeHost></ng-container>
    </ng-container>
    @if (errorLoadingMfe()) {
    <mfe-loader-error-dialog
      [errorMessage]="errorLoadingMfeMessage()"
      (close)="closeErrorDialog()"
    ></mfe-loader-error-dialog>
    }
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

        mfe-loader-error-dialog {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 10;
        }
      }
  `,
})
export class NgxEditorJs2MfeLoaderComponent {
  @ViewChild('mfeHost', { read: ViewContainerRef, static: true })
  private mfeHost!: ViewContainerRef;

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

  errorLoadingMfe = signal<boolean>(false);
  errorLoadingMfeMessage = signal<string>('');

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
    this.updateMfeRemote(this.value());
  }

  actionCallback(action: string) {
    this.savedAction.update(() => action);
  }

  openEditUrlOverlay() {
    this.openOverlay.set(true);
  }

  async updateMfeRemote(value: Value) {
    try {
      const remoteComponent = await loadRemoteModule({
        type: 'module',
        remoteEntry: value.url,
        exposedModule: './' + value.exposedModule,
      });

      this.mfeHost.clear();
      this.mfeHost.createComponent(remoteComponent[value.remoteName]);
    } catch (error) {
      console.error('[MFE LOAD ERROR]', error);
      this.openOverlay.set(true);
      this.errorLoadingMfeMessage.set(
        (error as Error).message || 'Unknown error loading MFE'
      );
      this.errorLoadingMfe.set(true);
      return;
    }

    this.value.set(value);
    this.formGroup()
      .get(this.formControlName())
      ?.setValue(JSON.stringify(value));
    this.openOverlay.set(false);
  }

  closeErrorDialog() {
    this.errorLoadingMfe.set(false);
    this.errorLoadingMfeMessage.set('');
  }
}
