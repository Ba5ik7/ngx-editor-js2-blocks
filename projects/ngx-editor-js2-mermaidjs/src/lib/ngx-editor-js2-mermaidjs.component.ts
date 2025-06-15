import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgClass } from '@angular/common';
import {
  Component,
  inject,
  input,
  NgZone,
  Pipe,
  PipeTransform,
  signal,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  ControlAccessorDirective,
  AutofocusDirective,
  ToolbarFabDirective,
  BlockOptionAction,
} from '@tmdjr/ngx-editor-js2';
import mermaid, { Mermaid } from 'mermaid';
import { MermaidjsConfigComponent } from './mermaidjs-config/mermaidjs-config.component';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml', standalone: true })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  transform(value: string) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

mermaid.parseError = function (err: any, hash: any) {
  console.warn(`Error parsing mermaid diagram: ${err} ${hash}`);
};

@Component({
  selector: 'ngx-editor-js2-mermaidjs',
  host: { class: 'cdk-drag-animating no-toolbar-inline' },
  hostDirectives: [CdkDrag],
  imports: [
    ReactiveFormsModule,
    ControlAccessorDirective,
    AutofocusDirective,
    ToolbarFabDirective,
    MatFabButton,
    MatIcon,
    NgClass,
    MermaidjsConfigComponent,
    SafeHtmlPipe,
  ],
  template: `
    <ng-container [formGroup]="formGroup()">
      <span
        controlAccessor
        toolbarFab
        class="mermaidjs-container-overlay"
        [actionCallback]="actionCallbackBind"
        [autofocus]="autofocus()"
        [blockOptionActions]="blockOptionActions()"
        [formControlName]="formControlName()"
        [componentContextPositionIndex]="sortIndex()"
      ></span>
      @if (!openOverlay()) {
      <div class="mermaidjs-container">
        <div
          #mermaidContainer
          [ngClass]="savedAction()"
          [innerHTML]="mermaidDiagramSVG | safeHtml"
          class="mermaid"
        ></div>
        <button
          mat-fab
          class="mermaidjs-block-button"
          (click)="openEditOverlay()"
        >
          <mat-icon>edit</mat-icon>
        </button>
      </div>
      } @else {
      <mermaidjs-config
        [(value)]="value"
        (updateConfig)="updateMermaidDiagram()"
      >
      </mermaidjs-config>
      }
    </ng-container>
  `,
  styles: `
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

        .mermaid { width: 100%; display: flex; }
        .mermaidjs-container-overlay {
          display: flex;
          height: 100%;
          width: 100%;
          position: absolute;
        }

        .mermaid:hover ~ .mermaid-block-button, .mermaid-block-button:hover,
        .mermaidjs-container-overlay:hover ~ .mermaidjs-container .mermaidjs-block-button,
        .mermaidjs-block-button:hover {
          display: block;
        }
        .mermaidjs-container {
          display: flex;
          .mermaidjs-block {
            min-width: 0;
          }

          .mermaidjs-block-button {
            position: absolute;
            top: 6px;
            left: 6px;
            display: none;
          }
        }
      }
  `,
})
export class NgxEditorJs2MermaidjsComponent {
  ngZone = inject(NgZone);
  mermaid = (mermaid as unknown as any).default as Mermaid;

  sortIndex = input<number>(0);
  componentInstanceName = 'NgxEditorJs2MermaidjsComponent';
  autofocus = input<boolean>(true);
  formGroup = input.required<FormGroup>();
  formControlName = input.required<string>();
  blockOptionActions = input<BlockOptionAction[]>([
    { action: 'flex-start', icon: 'format_align_left' },
    { action: 'center', icon: 'format_align_center' },
    { action: 'flex-end', icon: 'format_align_right' },
    { action: 'stretch', icon: 'format_align_justify' },
  ]);

  savedAction = signal<string>('flex-start');
  actionCallbackBind = this.actionCallback.bind(this);

  mermaidDiagramSVG = '';
  value = `flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]`;

  openOverlay = signal<boolean>(false);

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.mermaid.initialize({ startOnLoad: false });
    });
    const possibleSavedValue = this.formGroup().get(this.formControlName());
    this.value = possibleSavedValue?.value
      ? possibleSavedValue.value
      : this.value;
    this.renderMermaidDiagram(this.value);
  }

  renderMermaidDiagram(mermaidDiagram: string): void {
    const uniqueId = `mermaid-${Date.now()}-${Math.floor(
      Math.random() * 1000
    )}`;
    this.ngZone.runOutsideAngular(() => {
      this.mermaid.render(uniqueId, mermaidDiagram).then(
        (data) => this.ngZone.run(() => (this.mermaidDiagramSVG = data.svg)),
        (error) => console.warn(`Error: ${error}`)
      );
    });
  }

  actionCallback(action: string) {
    this.savedAction.update(() => action);
  }

  openEditOverlay() {
    this.openOverlay.set(true);
  }

  updateMermaidDiagram() {
    this.formGroup().get(this.formControlName())?.setValue(this.value);
    this.openOverlay.set(false);
  }
}
