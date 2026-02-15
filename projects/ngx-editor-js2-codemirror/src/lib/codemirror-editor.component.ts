import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { markdown } from '@codemirror/lang-markdown';
import { bracketMatching } from '@codemirror/language';
import { searchKeymap } from '@codemirror/search';
import { Compartment, EditorSelection, Extension } from '@codemirror/state';
import { EditorView, ViewUpdate, keymap, lineNumbers } from '@codemirror/view';
import { synthwave84 } from '@fsegurai/codemirror-theme-synthwave-84';
import { basicSetup } from 'codemirror';

export type CodeMirrorLanguage =
  | 'typescript'
  | 'javascript'
  | 'json'
  | 'markdown'
  | 'css'
  | 'html';

@Component({
  selector: 'ngx-codemirror-editor',
  template: `
    <div
      #editorHost
      class="editor-host"
      [style.height.px]="heightPx"
      [class.read-only]="readOnly"
    ></div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .editor-host {
        border: 1px solid #d6dbe3;
        border-radius: 8px;
        overflow: hidden;
        background: var(--mat-sys-surface, #000);
      }

      .editor-host.read-only {
        opacity: 0.9;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CodemirrorEditorComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodemirrorEditorComponent
  implements ControlValueAccessor, AfterViewInit, OnChanges, OnDestroy
{
  @Input() value = '';
  @Output() readonly valueChange = new EventEmitter<string>();
  @Input() language: CodeMirrorLanguage = 'markdown';
  @Input() readOnly = false;
  @Input() heightPx = '';

  @ViewChild('editorHost', { static: true })
  private readonly editorHost!: ElementRef<HTMLDivElement>;

  private editorView?: EditorView;
  private readonly languageCompartment = new Compartment();
  private readonly readOnlyCompartment = new Compartment();
  private readonly themeCompartment = new Compartment();
  private mediaQuery?: MediaQueryList;
  private readonly onThemeChanged = () => {
    if (!this.editorView) return;
    this.editorView.dispatch({
      effects: this.themeCompartment.reconfigure(this.getThemeExtension()),
    });
  };
  private isWritingFromControl = false;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  ngAfterViewInit(): void {
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const extensions: Extension[] = [
      basicSetup,
      lineNumbers(),
      bracketMatching(),
      keymap.of([...defaultKeymap, ...historyKeymap, ...searchKeymap]),
      history(),
      this.languageCompartment.of(this.getLanguageExtension()),
      this.readOnlyCompartment.of(EditorView.editable.of(!this.readOnly)),
      this.themeCompartment.of(this.getThemeExtension()),
      EditorView.updateListener.of((update: ViewUpdate) => {
        if (!update.docChanged) return;
        const nextValue = update.state.doc.toString();
        this.value = nextValue;
        if (!this.isWritingFromControl) {
          this.onChange(nextValue);
          this.valueChange.emit(nextValue);
        }
      }),
      EditorView.domEventHandlers({
        blur: () => {
          this.onTouched();
        },
      }),
    ];

    this.editorView = new EditorView({
      doc: this.value ?? '',
      extensions,
      parent: this.editorHost.nativeElement,
    });

    this.mediaQuery.addEventListener('change', this.onThemeChanged);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.editorView) return;

    if (
      changes['value'] &&
      typeof this.value === 'string' &&
      this.value !== this.editorView.state.doc.toString()
    ) {
      this.replaceDocument(this.value);
    }

    if (changes['language']) {
      this.editorView.dispatch({
        effects: this.languageCompartment.reconfigure(
          this.getLanguageExtension()
        ),
      });
    }

    if (changes['readOnly']) {
      this.editorView.dispatch({
        effects: this.readOnlyCompartment.reconfigure(
          EditorView.editable.of(!this.readOnly)
        ),
      });
    }
  }

  ngOnDestroy(): void {
    this.mediaQuery?.removeEventListener('change', this.onThemeChanged);
    this.editorView?.destroy();
  }

  writeValue(value: string | null): void {
    const next = value ?? '';
    this.value = next;
    if (!this.editorView) return;
    this.replaceDocument(next);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.readOnly = isDisabled;
    if (!this.editorView) return;
    this.editorView.dispatch({
      effects: this.readOnlyCompartment.reconfigure(
        EditorView.editable.of(!this.readOnly)
      ),
    });
  }

  private replaceDocument(nextValue: string): void {
    if (!this.editorView) return;
    this.isWritingFromControl = true;
    this.editorView.dispatch({
      changes: {
        from: 0,
        to: this.editorView.state.doc.length,
        insert: nextValue,
      },
      selection: EditorSelection.cursor(nextValue.length),
    });
    this.isWritingFromControl = false;
  }

  private getLanguageExtension(): Extension {
    switch (this.language) {
      case 'typescript':
        return javascript({ typescript: true });
      case 'javascript':
        return javascript({ typescript: false });
      case 'json':
        return json();
      case 'markdown':
        return markdown();
      case 'html':
        return html();
      case 'css':
        return css();
      default:
        return javascript({ typescript: true });
    }
  }

  private getThemeExtension(): Extension {
    // apply synthwave always, or only in dark mode if you prefer
    return synthwave84;
    // or: return this.mediaQuery?.matches ? synthwave84 : [];
  }
}
