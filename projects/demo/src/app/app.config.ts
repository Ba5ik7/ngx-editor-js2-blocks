import {
  ApplicationConfig,
  // provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NGX_EDITORJS_OPTIONS } from '@tmdjr/ngx-editor-js2';
// Imports are for debugging purposes only
// Use @tmdjr/**
import { NgxEditorJs2BlockquotesComponent } from 'ngx-editor-js2-blockquotes';
import { NgxEditorJs2CodemirrorComponent } from 'ngx-editor-js2-codemirror';
import { NgxEditorJs2ImageComponent } from 'ngx-editor-js2-image';
import { NgxEditorJs2MfeLoaderComponent } from 'ngx-editor-js2-mfe-loader';
import { NgxEditorJs2PopQuizComponent } from 'ngx-editor-js2-pop-quiz';
import { NgxEditorJs2MermaidjsComponent } from 'ngx-editor-js2-mermaidjs';
import { NgxEditorJs2PanelComponent } from 'ngx-editor-js2-panel';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    {
      provide: NGX_EDITORJS_OPTIONS,
      useValue: {
        consumerSupportedBlocks: [
          {
            name: 'MermaidJs',
            component: NgxEditorJs2MermaidjsComponent,
            componentInstanceName: 'NgxEditorJs2MermaidjsComponent',
          },
          {
            name: 'Panel',
            component: NgxEditorJs2PanelComponent,
            componentInstanceName: 'NgxEditorJs2PanelComponent',
          },
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
          {
            name: 'Codemirror',
            component: NgxEditorJs2CodemirrorComponent,
            componentInstanceName: 'NgxEditorJs2CodemirrorComponent',
          },
          {
            name: 'Pop Quiz',
            component: NgxEditorJs2PopQuizComponent,
            componentInstanceName: 'NgxEditorJs2PopQuizComponent',
          },
          {
            name: 'MFE Loader',
            component: NgxEditorJs2MfeLoaderComponent,
            componentInstanceName: 'NgxEditorJs2MfeLoaderComponent',
          },
        ],
      },
    },
  ],
};
