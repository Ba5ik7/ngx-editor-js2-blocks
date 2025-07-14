# NgxEditorJs2 MFE Loader

Load remote modules inside [Ngx-Editor-Js2](https://www.npmjs.com/package/@tmdjr/ngx-editor-js2) using Angular Module Federation.
Specify the remote entry, module name and exposed component through an overlay form.

## Features

- Dynamically load micro‑frontend widgets.
- Overlay dialog to configure the remote URL, name and exposed module key.
- Supports display size options from the toolbar.

## Usage

Register `NgxEditorJs2MfeLoaderComponent` in `NGX_EDITORJS_OPTIONS`:

```ts
import { NgxEditorJs2MfeLoaderComponent } from '@tmdjr/ngx-editor-js2-mfe-loader';

{
  provide: NGX_EDITORJS_OPTIONS,
  useValue: {
    consumerSupportedBlocks: [
      {
        name: 'MFE Loader',
        component: NgxEditorJs2MfeLoaderComponent,
        componentInstanceName: 'NgxEditorJs2MfeLoaderComponent'
      }
    ]
  }
}
```

See [Ngx-Editor-Js2 on npm](https://www.npmjs.com/package/@tmdjr/ngx-editor-js2) for complete instructions.
