# NgxEditorJs2 MermaidJS

Render [Mermaid](https://mermaid.js.org/) diagrams directly in [Ngx-Editor-Js2](https://www.npmjs.com/package/@tmdjr/ngx-editor-js2).
An overlay editor lets you write Mermaid syntax and preview the resulting diagram.

## Features

- Support for flowcharts, sequence diagrams and more via Mermaid.
- Alignment options from the floating toolbar.
- Edit diagram code in an overlay and update the rendered SVG.

## Usage

Add `NgxEditorJs2MermaidjsComponent` to your editor configuration:

```ts
import { NgxEditorJs2MermaidjsComponent } from '@tmdjr/ngx-editor-js2-mermaidjs';

{
  provide: NGX_EDITORJS_OPTIONS,
  useValue: {
    consumerSupportedBlocks: [
      {
        name: 'Mermaid',
        component: NgxEditorJs2MermaidjsComponent,
        componentInstanceName: 'NgxEditorJs2MermaidjsComponent'
      }
    ]
  }
}
```

Consult the [Ngx-Editor-Js2 documentation](https://www.npmjs.com/package/@tmdjr/ngx-editor-js2) for further configuration details.
