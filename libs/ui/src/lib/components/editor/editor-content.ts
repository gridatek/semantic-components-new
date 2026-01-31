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
  effect,
} from '@angular/core';
import { cn } from '../../utils';
import { SC_EDITOR, ScEditor } from './editor';

@Component({
  selector: 'div[sc-editor-content]',
  template: ``, // Empty - host element is the content div
  host: {
    'data-slot': 'editor-content',
    '[class]': 'class()',
    '[style.min-height]': 'minHeight()',
    '[style.max-height]': 'maxHeight()',
    '[attr.aria-label]': 'ariaLabel()',
  },
  styles: `
    :host {
      display: block;
      outline: none;
      overflow-y: auto;
    }

    /* Tiptap editor wrapper */
    :host :global(.ProseMirror) {
      outline: none;
      min-height: inherit;
      max-height: inherit;
    }

    /* Placeholder handling */
    :host :global(.ProseMirror p.is-editor-empty:first-child::before) {
      content: attr(data-placeholder);
      float: left;
      color: hsl(var(--muted-foreground));
      pointer-events: none;
      height: 0;
    }

    /* Content styles */
    :host :global(.ProseMirror) blockquote {
      border-left: 4px solid hsl(var(--border));
      padding-left: 1rem;
      margin-left: 0;
      font-style: italic;
      color: hsl(var(--muted-foreground));
    }

    :host :global(.ProseMirror) code {
      background: hsl(var(--muted));
      padding: 0.125rem 0.375rem;
      border-radius: 0.25rem;
      font-family:
        ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
      font-size: 0.875em;
    }

    :host :global(.ProseMirror) pre {
      background: hsl(var(--muted));
      padding: 1rem;
      border-radius: 0.5rem;
      overflow-x: auto;
      font-family:
        ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
      font-size: 0.875em;
    }

    :host :global(.ProseMirror) a {
      color: hsl(var(--primary));
      text-decoration: underline;
    }

    :host :global(.ProseMirror) hr {
      border: none;
      border-top: 1px solid hsl(var(--border));
      margin: 1rem 0;
    }

    :host :global(.ProseMirror) h1 {
      font-size: 2rem;
      font-weight: 700;
      margin: 1rem 0 0.5rem;
    }
    :host :global(.ProseMirror) h2 {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 1rem 0 0.5rem;
    }
    :host :global(.ProseMirror) h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0.75rem 0 0.5rem;
    }
    :host :global(.ProseMirror) h4 {
      font-size: 1.125rem;
      font-weight: 600;
      margin: 0.75rem 0 0.5rem;
    }

    :host :global(.ProseMirror) ul,
    :host :global(.ProseMirror) ol {
      padding-left: 1.5rem;
      margin: 0.5rem 0;
    }

    :host :global(.ProseMirror) li {
      margin: 0.25rem 0;
    }

    :host :global(.ProseMirror) p {
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

      // Initialize Tiptap editor through parent directive
      this.editor.initializeEditor(element, this.value(), this.placeholder());

      // Watch for external value changes
      effect(() => {
        const newValue = this.value();
        const editorInstance = this.editor.editorInstance();
        if (!editorInstance) return;

        const currentValue = editorInstance.getHTML();

        if (newValue !== currentValue) {
          editorInstance.commands.setContent(newValue);
        }
      });

      // Watch for editor content changes
      const editorInstance = this.editor.editorInstance();
      if (editorInstance) {
        editorInstance.on('update', ({ editor }) => {
          const html = editor.getHTML();
          // Clean up empty content
          const cleaned = html === '<p></p>' ? '' : html;

          if (cleaned !== this.value()) {
            this.value.set(cleaned);
          }
        });

        // Handle focus events
        editorInstance.on('focus', () => {
          this.isFocused.set(true);
          this.focus.emit();
        });

        editorInstance.on('blur', () => {
          this.isFocused.set(false);
          this.blur.emit();
        });
      }

      this.isInitialized = true;
    });

    this.destroyRef.onDestroy(() => {
      this.editor.destroyEditor();
    });
  }
}
