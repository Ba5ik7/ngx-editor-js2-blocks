import { Component, effect, model, output, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@Component({
  selector: 'mermaidjs-config',
  imports: [
    MatButton,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    CodemirrorModule,
  ],
  template: `
    <div class="mermaidjs-block-modal">
      <h2 mat-dialog-title>MermaidJs Configurations</h2>
      <ngx-codemirror [(ngModel)]="value" [options]="codeMirrorOptions()">
      </ngx-codemirror>
      <div class="action-group">
        <button type="button" mat-flat-button (click)="closeConfig()">
          Update
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        position: relative;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: var(
          --mat-card-outlined-container-shape,
          var(--mat-sys-corner-medium)
        );

        .action-group {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
      }

      :host ::ng-deep .CodeMirror {
        font-family: Cascadia Code, Fira Code, Menlo, Monaco, 'Courier New',
          monospace;
        font-size: 16px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0.5px;
        height: 100%;
      }
    `,
  ],
})
export class MermaidjsConfigComponent {
  updateConfig = output<void>();
  value = model<string>();
  codeMirrorOptions = signal({
    lineNumbers: true,
    theme: 'material-palenight',
    mode: 'text/typescript',
    extraKeys: { 'Ctrl-Space': 'autocomplete' },
    styleActiveLine: true, // Highlight active line
    matchBrackets: true,
    indentUnit: 2,
    tabSize: 2,
    cursorScrollMargin: 5,
  });

  closeConfig() {
    this.updateConfig.emit();
  }
}
