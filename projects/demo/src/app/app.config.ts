import {
  ApplicationConfig,
  // provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NGX_EDITORJS_OPTIONS } from '@tmdjr/ngx-editor-js2';
import { NgxEditorJs2BlockquotesComponent } from 'ngx-editor-js2-blockquotes';
import { NgxEditorJs2ImageComponent } from 'ngx-editor-js2-image';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    // provideExperimentalZonelessChangeDetection(),
    {
      provide: NGX_EDITORJS_OPTIONS,
      useValue: {
        consumerSupportedBlocks: [
          {
            name: 'Image',
            component: NgxEditorJs2ImageComponent,
            componentInstanceName: 'NgxEditorJs2ImageComponent',
          },
          {
            name: 'Blockquote',
            component: NgxEditorJs2BlockquotesComponent,
            componentInstanceName: 'NgxEditorJs2BlockquotesComponent',
          },
        ],
      },
    },
  ],
};
