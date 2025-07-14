# NgxEditorJs2 Blockquotes

This package provides a blockquote component for [Ngx-Editor-Js2](https://www.npmjs.com/package/@tmdjr/ngx-editor-js2).
It displays quoted text with configurable sizes so your content can stand out.

## Features

- Styled `<blockquote>` element.
- Toolbar options for **medium**, **display-small**, and **display-large** styles.
- Integrates with the reactive form model used by Ngx-Editor-Js2.

## Usage

Import `NgxEditorJs2BlockquotesComponent` and register it in the `consumerSupportedBlocks` section of `NGX_EDITORJS_OPTIONS`:

```ts
import { NgxEditorJs2BlockquotesComponent } from '@tmdjr/ngx-editor-js2-blockquotes';

{
  provide: NGX_EDITORJS_OPTIONS,
  useValue: {
    consumerSupportedBlocks: [
      {
        name: 'Blockquote',
        component: NgxEditorJs2BlockquotesComponent,
        componentInstanceName: 'NgxEditorJs2BlockquotesComponent'
      }
    ]
  }
}
```

See the [Ngx-Editor-Js2 documentation](https://www.npmjs.com/package/@tmdjr/ngx-editor-js2) for details on configuring the editor.
