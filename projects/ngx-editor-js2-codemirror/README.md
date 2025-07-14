# NgxEditorJs2 Codemirror

This block embeds a [CodeMirror](https://codemirror.net/) editor inside [Ngx-Editor-Js2](https://www.npmjs.com/package/@tmdjr/ngx-editor-js2).
Use it to display and edit code snippets with syntax highlighting.

## Features

- CodeMirror integration with customizable language modes.
- Toolbar actions to switch between common languages.
- Works seamlessly with the reactive form approach of Ngx-Editor-Js2.

## Usage

Add `NgxEditorJs2CodemirrorComponent` to the `consumerSupportedBlocks` array:

```ts
import { NgxEditorJs2CodemirrorComponent } from '@tmdjr/ngx-editor-js2-codemirror';

{
  provide: NGX_EDITORJS_OPTIONS,
  useValue: {
    consumerSupportedBlocks: [
      {
        name: 'Code',
        component: NgxEditorJs2CodemirrorComponent,
        componentInstanceName: 'NgxEditorJs2CodemirrorComponent'
      }
    ]
  }
}
```

Visit the [Ngx-Editor-Js2](https://www.npmjs.com/package/@tmdjr/ngx-editor-js2) page for full configuration instructions.
