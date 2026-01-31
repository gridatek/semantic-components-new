import {
  Component,
  ChangeDetectionStrategy,
  computed,
  input,
  model,
  output,
  inject,
  signal,
  afterNextRender,
  DestroyRef,
  ElementRef,
} from '@angular/core';
import { cn } from '../../utils';
import { SC_EDITOR, ScEditor } from './editor';

@Component({
  selector: 'div[sc-editor-content]',
  template: ``, // Empty - host element is the content div
  host: {
    'data-slot': 'editor-content',
    contenteditable: 'true',
    '[class]': 'class()',
    '[style.min-height]': 'minHeight()',
    '[style.max-height]': 'maxHeight()',
    '[attr.placeholder]': 'placeholder()',
    '[attr.aria-label]': 'ariaLabel()',
    '(input)': 'onInput($event)',
    '(keydown)': 'onKeydown($event)',
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()',
    '(mouseup)': 'editor.updateToolbarState()',
    '(keyup)': 'editor.updateToolbarState()',
  },
  styles: `
    :host {
      display: block;
      outline: none;
      overflow-y: auto;
    }

    :host:empty:before {
      content: attr(placeholder);
      color: hsl(var(--muted-foreground));
      pointer-events: none;
    }

    :host blockquote {
      border-left: 4px solid hsl(var(--border));
      padding-left: 1rem;
      margin-left: 0;
      font-style: italic;
      color: hsl(var(--muted-foreground));
    }

    :host code {
      background: hsl(var(--muted));
      padding: 0.125rem 0.375rem;
      border-radius: 0.25rem;
      font-family:
        ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
      font-size: 0.875em;
    }

    :host pre {
      background: hsl(var(--muted));
      padding: 1rem;
      border-radius: 0.5rem;
      overflow-x: auto;
      font-family:
        ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
      font-size: 0.875em;
    }

    :host a {
      color: hsl(var(--primary));
      text-decoration: underline;
    }

    :host hr {
      border: none;
      border-top: 1px solid hsl(var(--border));
      margin: 1rem 0;
    }

    :host h1 {
      font-size: 2rem;
      font-weight: 700;
      margin: 1rem 0 0.5rem;
    }
    :host h2 {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 1rem 0 0.5rem;
    }
    :host h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0.75rem 0 0.5rem;
    }
    :host h4 {
      font-size: 1.125rem;
      font-weight: 600;
      margin: 0.75rem 0 0.5rem;
    }

    :host ul,
    :host ol {
      padding-left: 1.5rem;
      margin: 0.5rem 0;
    }

    :host li {
      margin: 0.25rem 0;
    }

    :host p {
      margin: 0.5rem 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScEditorContent {
  readonly editor = inject(SC_EDITOR);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  readonly value = model<string>('');
  readonly placeholder = input<string>('Start typing...');
  readonly minHeight = input<string>('150px');
  readonly maxHeight = input<string>('400px');
  readonly ariaLabel = input<string>('Rich text editor');
  readonly classInput = input<string>('', { alias: 'class' });

  readonly focus = output<void>();
  readonly blur = output<void>();

  private readonly isFocused = signal(false);
  private isInitialized = false;

  protected readonly class = computed(() =>
    cn(
      'p-4 prose prose-sm max-w-none dark:prose-invert',
      this.editor.disabled() && 'pointer-events-none opacity-50',
      this.editor.readonly() && 'cursor-default',
      this.classInput(),
    ),
  );

  constructor() {
    afterNextRender(() => {
      const element = this.elementRef.nativeElement;

      // Register this element with the editor
      this.editor.contentElement.set(element);

      // Set initial content
      if (this.value()) {
        element.innerHTML = this.value();
      }

      // Make non-editable if disabled/readonly
      if (this.editor.disabled() || this.editor.readonly()) {
        element.contentEditable = 'false';
      }

      this.isInitialized = true;
    });
  }

  protected onInput(event: Event): void {
    this.updateValue();
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (this.editor.disabled() || this.editor.readonly()) {
      event.preventDefault();
      return;
    }

    // Handle keyboard shortcuts
    if (event.ctrlKey || event.metaKey) {
      switch (event.key.toLowerCase()) {
        case 'b':
          event.preventDefault();
          this.editor.execCommand('bold');
          break;
        case 'i':
          event.preventDefault();
          this.editor.execCommand('italic');
          break;
        case 'u':
          event.preventDefault();
          this.editor.execCommand('underline');
          break;
        case 'z':
          if (event.shiftKey) {
            event.preventDefault();
            this.editor.execCommand('redo');
          } else {
            event.preventDefault();
            this.editor.execCommand('undo');
          }
          break;
        case 'y':
          event.preventDefault();
          this.editor.execCommand('redo');
          break;
      }
    }
  }

  protected onFocus(): void {
    this.isFocused.set(true);
    this.focus.emit();
    this.editor.updateToolbarState();
  }

  protected onBlur(): void {
    this.isFocused.set(false);
    this.blur.emit();
    this.updateValue();
  }

  private updateValue(): void {
    if (!this.isInitialized) return;

    const element = this.elementRef.nativeElement;
    const html = element.innerHTML;
    // Clean up empty content
    const cleaned = html === '<br>' || html === '<div><br></div>' ? '' : html;

    if (cleaned !== this.value()) {
      this.value.set(cleaned);
    }
  }
}
