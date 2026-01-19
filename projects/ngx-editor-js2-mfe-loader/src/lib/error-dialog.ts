import { Component, input, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'mfe-loader-error-dialog',
  imports: [MatIcon],
  template: `
    <div class="error-dialog-backdrop" (click)="close.emit()"></div>
    <div class="error-dialog">
      <div class="error-dialog-header">
        <h3>Error Loading MFE</h3>
        <mat-icon class="close-icon" (click)="close.emit()">close</mat-icon>
      </div>
      <p>An error occurred while trying to load the MFE remote module:</p>
      <pre><code>{{ errorMessage() }}</code></pre>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .error-dialog-backdrop {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: rgba(0, 0, 0, 0.7);
      }
      .error-dialog {
        color: var(--mat-sys-on-error-container);
        background: var(--mat-sys-error-container);
        padding: 20px;
        border-radius: 8px;
        max-width: 80%;
        max-hieght: 90%;
      }
      .error-dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .close-icon {
        cursor: pointer;
      }
      pre {
        color: var(--mat-sys-on-background);
        background: var(--mat-sys-background);
        padding: 10px;
        border-radius: 4px;
        max-height: 300px;
        overflow: auto;
      }
    `,
  ],
})
export class ErrorDialog {
  readonly errorMessage = input<string>();
  readonly close = output<void>();
}
