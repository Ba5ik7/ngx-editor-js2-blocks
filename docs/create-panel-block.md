# Creating a Shared Panel Block

This tutorial shows how to create a new shared block for **Ngx‑EditorJs2** that mimics the panel macros available in Atlassian Confluence.

## What Are Panels in Confluence?
In Confluence, panels are content blocks that help you organize and emphasize sections of your page. Typically, a panel includes a title, an icon, and a content area, making it a straightforward yet effective tool.

### Benefits of Using Panels
- **Improved Readability** – Panels break up long content, making it easier for readers to follow.
- **Enhanced Organization** – Panels provide logical structure, helping users find information faster.
- **Visual Appeal** – With color and layout options, panels draw attention to key areas on the page.

Confluence provides a few panel types out of the box:
- **Info Panel** – Ideal for general information.
- **Note Panel** – Perfect for emphasizing notes or key points.
- **Tip Panel** – Great for highlighting helpful tips or insights.
- **Warning Panel** – Used to draw attention to warnings or essential notices.

## 1. Generate a New Library

Run the Angular CLI command to generate a new library named `ngx-editor-js2-panel`:

```bash
ng generate library ngx-editor-js2-panel
```

This creates the folder `projects/ngx-editor-js2-panel` containing scaffolding for the new block.

## 2. Implement the Panel Component

Create a component that implements the `BlockComponent` interface. The example below provides four panel styles—info, note, tip, and warning.

```typescript
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import {
  AutofocusDirective,
  BlockComponent,
  BlockOptionAction,
  ControlAccessorDirective,
  ToolbarFabDirective,
} from '@tmdjr/ngx-editor-js2';

@Component({
  selector: 'ngx-editor-js2-panel',
  host: { class: 'cdk-drag-animating' },
  hostDirectives: [CdkDrag],
  imports: [
    ReactiveFormsModule,
    ControlAccessorDirective,
    AutofocusDirective,
    ToolbarFabDirective,
    MatIcon,
    NgClass,
  ],
  templateUrl: './ngx-editor-js2-panel.component.html',
  styleUrls: ['./ngx-editor-js2-panel.component.scss'],
})
export class NgxEditorJs2PanelComponent implements BlockComponent {
  sortIndex = input<number>(0);
  componentInstanceName = 'NgxEditorJs2PanelComponent';
  autofocus = input<boolean>(true);
  formGroup = input.required<FormGroup>();
  formControlName = input.required<string>();
  blockOptionActions = input<BlockOptionAction[]>([
    { action: 'info', icon: 'info' },
    { action: 'note', icon: 'description' },
    { action: 'tip', icon: 'lightbulb' },
    { action: 'warning', icon: 'warning' },
  ]);

  savedAction = signal<string>('info');
  actionCallbackBind = this.actionCallback.bind(this);

  panelIcons: Record<string, string> = {
    info: 'info',
    note: 'description',
    tip: 'lightbulb',
    warning: 'warning',
  };

  actionCallback(action: string) {
    this.savedAction.update(() => action);
  }
}
```

The component template uses directives from **Ngx‑EditorJs2** to handle editing and toolbar behavior.

## 3. Add Styles

Create `ngx-editor-js2-panel.component.scss` with minimal styling for each panel type:

```scss
:host {
  display: block;
  position: relative;

  .panel {
    display: flex;
    padding: 10px;
    margin: 1rem 0;
    border-left: 5px solid currentColor;
    border-radius: 4px;
  }
  .panel-icon {
    margin-right: 8px;
  }
  .info {
    background: #e8f0fe;
    color: #1a73e8;
  }
  .note {
    background: #ece7f6;
    color: #673ab7;
  }
  .tip {
    background: #e6f4ea;
    color: #107c41;
  }
  .warning {
    background: #fff4e5;
    color: #f57c00;
  }
}
```

## 4. Export the Component

In `projects/ngx-editor-js2-panel/src/public-api.ts`, export the component so it can be imported by other applications:

```typescript
export * from './lib/ngx-editor-js2-panel.component';
```

## 5. Build the Library

Compile the library and copy styles using the provided script:

```bash
npm run build-panel
```

After building, the output is placed in `dist/ngx-editor-js2-panel`. The library can now be referenced by an Ngx‑EditorJs2 consumer application.

## 6. Register the Panel Block

Add the panel component to the `consumerSupportedBlocks` array when configuring **Ngx‑EditorJs2**:

```typescript
import { NgxEditorJs2PanelComponent } from 'ngx-editor-js2-panel';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: NGX_EDITORJS_OPTIONS,
      useValue: {
        consumerSupportedBlocks: [
          {
            name: 'Panel',
            component: NgxEditorJs2PanelComponent,
            componentInstanceName: 'NgxEditorJs2PanelComponent',
          },
          // other blocks...
        ],
      },
    },
  ],
};
```

With these steps complete, you now have a shared panel block that functions similarly to Confluence’s built‑in panels.
