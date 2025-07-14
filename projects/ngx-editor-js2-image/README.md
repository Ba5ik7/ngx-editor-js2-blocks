# NgxEditorJs2 Image

An image block for [Ngx-Editor-Js2](https://www.npmjs.com/package/@tmdjr/ngx-editor-js2).
Users can add an image, set its title, and choose its alignment via the block's toolbar.

## Features

- Upload or link to an image URL.
- Floating toolbar with alignment options (left, center, right, justify).
- Overlay dialog for editing the image URL and title.

## Usage

Register `NgxEditorJs2ImageComponent` as a supported block:

```ts
import { NgxEditorJs2ImageComponent } from '@tmdjr/ngx-editor-js2-image';

{
  provide: NGX_EDITORJS_OPTIONS,
  useValue: {
    consumerSupportedBlocks: [
      {
        name: 'Image',
        component: NgxEditorJs2ImageComponent,
        componentInstanceName: 'NgxEditorJs2ImageComponent'
      }
    ]
  }
}
```

Refer to [Ngx-Editor-Js2 on npm](https://www.npmjs.com/package/@tmdjr/ngx-editor-js2) for complete setup instructions.
