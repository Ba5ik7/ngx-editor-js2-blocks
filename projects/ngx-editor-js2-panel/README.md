# NgxEditorJs2 Panel

This block offers Confluence‑style panels for [Ngx-Editor-Js2](https://www.npmjs.com/package/@tmdjr/ngx-editor-js2).
Use it to highlight content such as notes, tips or warnings.

## Features

- Preset styles: **info**, **note**, **tip** and **warning**.
- Icon displayed to the left of the text.
- Works with the editor's floating toolbar for quick style changes.

## Usage

Include `NgxEditorJs2PanelComponent` in your configuration:

```ts
import { NgxEditorJs2PanelComponent } from '@tmdjr/ngx-editor-js2-panel';

{
  provide: NGX_EDITORJS_OPTIONS,
  useValue: {
    consumerSupportedBlocks: [
      {
        name: 'Panel',
        component: NgxEditorJs2PanelComponent,
        componentInstanceName: 'NgxEditorJs2PanelComponent'
      }
    ]
  }
}
```

More information about configuring Ngx-Editor-Js2 can be found on [npm](https://www.npmjs.com/package/@tmdjr/ngx-editor-js2).
