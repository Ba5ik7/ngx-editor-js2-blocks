# NgxEditorJs2 Pop Quiz

Create interactive quiz questions in [Ngx-Editor-Js2](https://www.npmjs.com/package/@tmdjr/ngx-editor-js2).
A configuration overlay lets you define questions, answers and feedback messages.

## Features

- Configure multiple choice questions with correct answers.
- Stored configuration is managed via a helper service.
- Toolbar size options to control the quiz display style.

## Usage

Include `NgxEditorJs2PopQuizComponent` when setting up your editor:

```ts
import { NgxEditorJs2PopQuizComponent } from '@tmdjr/ngx-editor-js2-pop-quiz';

{
  provide: NGX_EDITORJS_OPTIONS,
  useValue: {
    consumerSupportedBlocks: [
      {
        name: 'Pop Quiz',
        component: NgxEditorJs2PopQuizComponent,
        componentInstanceName: 'NgxEditorJs2PopQuizComponent'
      }
    ]
  }
}
```

See the [Ngx-Editor-Js2 package](https://www.npmjs.com/package/@tmdjr/ngx-editor-js2) for setup information.
