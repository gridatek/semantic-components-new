import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  input,
  model,
  output,
  signal,
  viewChild,
  AfterViewInit,
  DestroyRef,
  inject,
} from '@angular/core';
import { cn } from '../../utils';

export type TextAlignment = 'left' | 'center' | 'right' | 'justify';
export type HeadingLevel = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface ToolbarConfig {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  headings?: boolean;
  alignment?: boolean;
  lists?: boolean;
  link?: boolean;
  image?: boolean;
  blockquote?: boolean;
  code?: boolean;
  horizontalRule?: boolean;
  undo?: boolean;
  redo?: boolean;
  clearFormatting?: boolean;
}

const DEFAULT_TOOLBAR: ToolbarConfig = {
  bold: true,
  italic: true,
  underline: true,
  strikethrough: true,
  headings: true,
  alignment: true,
  lists: true,
  link: true,
  blockquote: true,
  code: true,
  horizontalRule: true,
  undo: true,
  redo: true,
  clearFormatting: true,
};

@Component({
  selector: 'sc-rich-text-editor',
  template: `
    <div [class]="containerClass()">
      <!-- Toolbar -->
      @if (showToolbar()) {
        <div
          class="flex flex-wrap items-center gap-1 p-2 border-b bg-muted/30"
          role="toolbar"
          aria-label="Text formatting"
        >
          <!-- Undo/Redo -->
          @if (toolbar().undo) {
            <button
              type="button"
              (click)="execCommand('undo')"
              class="p-1.5 rounded hover:bg-accent disabled:opacity-50"
              title="Undo (Ctrl+Z)"
              [disabled]="disabled()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <path d="M3 7v6h6" />
                <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
              </svg>
            </button>
          }
          @if (toolbar().redo) {
            <button
              type="button"
              (click)="execCommand('redo')"
              class="p-1.5 rounded hover:bg-accent disabled:opacity-50"
              title="Redo (Ctrl+Y)"
              [disabled]="disabled()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <path d="M21 7v6h-6" />
                <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
              </svg>
            </button>
          }

          @if (
            (toolbar().undo || toolbar().redo) &&
            (toolbar().bold || toolbar().italic)
          ) {
            <div class="w-px h-6 bg-border mx-1"></div>
          }

          <!-- Text Formatting -->
          @if (toolbar().bold) {
            <button
              type="button"
              (click)="execCommand('bold')"
              [class]="toolbarButtonClass(isBold())"
              title="Bold (Ctrl+B)"
              [disabled]="disabled()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
              </svg>
            </button>
          }
          @if (toolbar().italic) {
            <button
              type="button"
              (click)="execCommand('italic')"
              [class]="toolbarButtonClass(isItalic())"
              title="Italic (Ctrl+I)"
              [disabled]="disabled()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <line x1="19" x2="10" y1="4" y2="4" />
                <line x1="14" x2="5" y1="20" y2="20" />
                <line x1="15" x2="9" y1="4" y2="20" />
              </svg>
            </button>
          }
          @if (toolbar().underline) {
            <button
              type="button"
              (click)="execCommand('underline')"
              [class]="toolbarButtonClass(isUnderline())"
              title="Underline (Ctrl+U)"
              [disabled]="disabled()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <path d="M6 4v6a6 6 0 0 0 12 0V4" />
                <line x1="4" x2="20" y1="20" y2="20" />
              </svg>
            </button>
          }
          @if (toolbar().strikethrough) {
            <button
              type="button"
              (click)="execCommand('strikethrough')"
              [class]="toolbarButtonClass(isStrikethrough())"
              title="Strikethrough"
              [disabled]="disabled()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <path d="M16 4H9a3 3 0 0 0-2.83 4" />
                <path d="M14 12a4 4 0 0 1 0 8H6" />
                <line x1="4" x2="20" y1="12" y2="12" />
              </svg>
            </button>
          }

          @if ((toolbar().bold || toolbar().italic) && toolbar().headings) {
            <div class="w-px h-6 bg-border mx-1"></div>
          }

          <!-- Headings -->
          @if (toolbar().headings) {
            <div class="relative">
              <select
                (change)="onHeadingChange($event)"
                class="appearance-none pl-2 pr-6 py-1 text-sm rounded border-0 bg-transparent hover:bg-accent cursor-pointer"
                [disabled]="disabled()"
              >
                <option value="p">Paragraph</option>
                <option value="h1">Heading 1</option>
                <option value="h2">Heading 2</option>
                <option value="h3">Heading 3</option>
                <option value="h4">Heading 4</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-3 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          }

          @if (toolbar().headings && toolbar().alignment) {
            <div class="w-px h-6 bg-border mx-1"></div>
          }

          <!-- Alignment -->
          @if (toolbar().alignment) {
            <button
              type="button"
              (click)="execCommand('justifyLeft')"
              [class]="toolbarButtonClass(alignment() === 'left')"
              title="Align left"
              [disabled]="disabled()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <line x1="21" x2="3" y1="6" y2="6" />
                <line x1="15" x2="3" y1="12" y2="12" />
                <line x1="17" x2="3" y1="18" y2="18" />
              </svg>
            </button>
            <button
              type="button"
              (click)="execCommand('justifyCenter')"
              [class]="toolbarButtonClass(alignment() === 'center')"
              title="Align center"
              [disabled]="disabled()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <line x1="21" x2="3" y1="6" y2="6" />
                <line x1="17" x2="7" y1="12" y2="12" />
                <line x1="19" x2="5" y1="18" y2="18" />
              </svg>
            </button>
            <button
              type="button"
              (click)="execCommand('justifyRight')"
              [class]="toolbarButtonClass(alignment() === 'right')"
              title="Align right"
              [disabled]="disabled()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <line x1="21" x2="3" y1="6" y2="6" />
                <line x1="21" x2="9" y1="12" y2="12" />
                <line x1="21" x2="7" y1="18" y2="18" />
              </svg>
            </button>
            <button
              type="button"
              (click)="execCommand('justifyFull')"
              [class]="toolbarButtonClass(alignment() === 'justify')"
              title="Justify"
              [disabled]="disabled()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <line x1="21" x2="3" y1="6" y2="6" />
                <line x1="21" x2="3" y1="12" y2="12" />
                <line x1="21" x2="3" y1="18" y2="18" />
              </svg>
            </button>
          }

          @if (toolbar().alignment && toolbar().lists) {
            <div class="w-px h-6 bg-border mx-1"></div>
          }

          <!-- Lists -->
          @if (toolbar().lists) {
            <button
              type="button"
              (click)="execCommand('insertUnorderedList')"
              [class]="toolbarButtonClass(isUnorderedList())"
              title="Bullet list"
              [disabled]="disabled()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <line x1="8" x2="21" y1="6" y2="6" />
                <line x1="8" x2="21" y1="12" y2="12" />
                <line x1="8" x2="21" y1="18" y2="18" />
                <line x1="3" x2="3.01" y1="6" y2="6" />
                <line x1="3" x2="3.01" y1="12" y2="12" />
                <line x1="3" x2="3.01" y1="18" y2="18" />
              </svg>
            </button>
            <button
              type="button"
              (click)="execCommand('insertOrderedList')"
              [class]="toolbarButtonClass(isOrderedList())"
              title="Numbered list"
              [disabled]="disabled()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <line x1="10" x2="21" y1="6" y2="6" />
                <line x1="10" x2="21" y1="12" y2="12" />
                <line x1="10" x2="21" y1="18" y2="18" />
                <path d="M4 6h1v4" />
                <path d="M4 10h2" />
                <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
              </svg>
            </button>
          }

          @if (toolbar().lists && (toolbar().link || toolbar().blockquote)) {
            <div class="w-px h-6 bg-border mx-1"></div>
          }

          <!-- Link -->
          @if (toolbar().link) {
            <button
              type="button"
              (click)="insertLink()"
              class="p-1.5 rounded hover:bg-accent disabled:opacity-50"
              title="Insert link (Ctrl+K)"
              [disabled]="disabled()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <path
                  d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                />
                <path
                  d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                />
              </svg>
            </button>
          }

          <!-- Blockquote -->
          @if (toolbar().blockquote) {
            <button
              type="button"
              (click)="execCommand('formatBlock', 'blockquote')"
              [class]="toolbarButtonClass(isBlockquote())"
              title="Blockquote"
              [disabled]="disabled()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <path
                  d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"
                />
                <path
                  d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3z"
                />
              </svg>
            </button>
          }

          <!-- Code -->
          @if (toolbar().code) {
            <button
              type="button"
              (click)="insertCode()"
              class="p-1.5 rounded hover:bg-accent disabled:opacity-50"
              title="Inline code"
              [disabled]="disabled()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </button>
          }

          <!-- Horizontal Rule -->
          @if (toolbar().horizontalRule) {
            <button
              type="button"
              (click)="execCommand('insertHorizontalRule')"
              class="p-1.5 rounded hover:bg-accent disabled:opacity-50"
              title="Horizontal line"
              [disabled]="disabled()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <line x1="3" x2="21" y1="12" y2="12" />
              </svg>
            </button>
          }

          @if (
            (toolbar().code || toolbar().horizontalRule) &&
            toolbar().clearFormatting
          ) {
            <div class="w-px h-6 bg-border mx-1"></div>
          }

          <!-- Clear Formatting -->
          @if (toolbar().clearFormatting) {
            <button
              type="button"
              (click)="execCommand('removeFormat')"
              class="p-1.5 rounded hover:bg-accent disabled:opacity-50"
              title="Clear formatting"
              [disabled]="disabled()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <path d="M4 7V4h16v3" />
                <path d="M9 20h6" />
                <path d="M12 4v16" />
                <path d="m2 2 20 20" stroke="currentColor" stroke-width="2" />
              </svg>
            </button>
          }
        </div>
      }

      <!-- Editor Content -->
      <div
        #editor
        [class]="editorClass()"
        [style.min-height]="minHeight()"
        [style.max-height]="maxHeight()"
        contenteditable="true"
        [attr.placeholder]="placeholder()"
        [attr.aria-label]="ariaLabel() || 'Rich text editor'"
        [attr.aria-describedby]="ariaDescribedby()"
        (input)="onInput($event)"
        (keydown)="onKeydown($event)"
        (focus)="onFocus()"
        (blur)="onBlur()"
        (mouseup)="updateToolbarState()"
        (keyup)="updateToolbarState()"
      ></div>

      <!-- Character/Word count -->
      @if (showCount()) {
        <div
          class="flex items-center justify-end gap-4 px-3 py-1.5 border-t text-xs text-muted-foreground bg-muted/30"
        >
          <span>{{ wordCount() }} words</span>
          <span>{{ charCount() }} characters</span>
        </div>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    [contenteditable]:empty:before {
      content: attr(placeholder);
      color: hsl(var(--muted-foreground));
      pointer-events: none;
    }

    [contenteditable] {
      outline: none;
    }

    [contenteditable] blockquote {
      border-left: 4px solid hsl(var(--border));
      padding-left: 1rem;
      margin-left: 0;
      font-style: italic;
      color: hsl(var(--muted-foreground));
    }

    [contenteditable] code {
      background: hsl(var(--muted));
      padding: 0.125rem 0.375rem;
      border-radius: 0.25rem;
      font-family:
        ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
      font-size: 0.875em;
    }

    [contenteditable] pre {
      background: hsl(var(--muted));
      padding: 1rem;
      border-radius: 0.5rem;
      overflow-x: auto;
      font-family:
        ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
      font-size: 0.875em;
    }

    [contenteditable] a {
      color: hsl(var(--primary));
      text-decoration: underline;
    }

    [contenteditable] hr {
      border: none;
      border-top: 1px solid hsl(var(--border));
      margin: 1rem 0;
    }

    [contenteditable] h1 {
      font-size: 2rem;
      font-weight: 700;
      margin: 1rem 0 0.5rem;
    }
    [contenteditable] h2 {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 1rem 0 0.5rem;
    }
    [contenteditable] h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0.75rem 0 0.5rem;
    }
    [contenteditable] h4 {
      font-size: 1.125rem;
      font-weight: 600;
      margin: 0.75rem 0 0.5rem;
    }

    [contenteditable] ul,
    [contenteditable] ol {
      padding-left: 1.5rem;
      margin: 0.5rem 0;
    }

    [contenteditable] li {
      margin: 0.25rem 0;
    }

    [contenteditable] p {
      margin: 0.5rem 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRichTextEditor implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);

  // Two-way binding for HTML content
  readonly value = model<string>('');

  // Inputs
  readonly placeholder = input<string>('Start typing...');
  readonly disabled = input(false);
  readonly readonly = input(false);
  readonly showToolbar = input(true);
  readonly showCount = input(true);
  readonly toolbar = input<ToolbarConfig>(DEFAULT_TOOLBAR);
  readonly minHeight = input<string>('150px');
  readonly maxHeight = input<string>('400px');
  readonly ariaLabel = input<string>('');
  readonly ariaDescribedby = input<string>('');
  readonly class = input<string>('');

  // Outputs
  readonly valueChange = output<string>();
  readonly focus = output<void>();
  readonly blur = output<void>();
  readonly selectionChange = output<Selection | null>();

  // Internal state
  readonly isFocused = signal(false);
  readonly isBold = signal(false);
  readonly isItalic = signal(false);
  readonly isUnderline = signal(false);
  readonly isStrikethrough = signal(false);
  readonly isOrderedList = signal(false);
  readonly isUnorderedList = signal(false);
  readonly isBlockquote = signal(false);
  readonly alignment = signal<TextAlignment>('left');
  readonly currentHeading = signal<HeadingLevel>('p');

  private readonly editor =
    viewChild.required<ElementRef<HTMLDivElement>>('editor');
  private isInitialized = false;

  protected readonly charCount = computed(() => {
    const text = this.getPlainText();
    return text.length;
  });

  protected readonly wordCount = computed(() => {
    const text = this.getPlainText().trim();
    if (!text) return 0;
    return text.split(/\s+/).filter(Boolean).length;
  });

  protected readonly containerClass = computed(() =>
    cn(
      'border rounded-lg overflow-hidden bg-background',
      'focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
      this.disabled() && 'opacity-50 cursor-not-allowed',
      this.class(),
    ),
  );

  protected readonly editorClass = computed(() =>
    cn(
      'p-4 overflow-y-auto',
      'prose prose-sm max-w-none dark:prose-invert',
      this.disabled() && 'pointer-events-none',
      this.readonly() && 'cursor-default',
    ),
  );

  ngAfterViewInit(): void {
    const editorEl = this.editor().nativeElement;

    // Set initial content
    if (this.value()) {
      editorEl.innerHTML = this.value();
    }

    // Make non-editable if disabled/readonly
    if (this.disabled() || this.readonly()) {
      editorEl.contentEditable = 'false';
    }

    this.isInitialized = true;
  }

  protected toolbarButtonClass(active: boolean): string {
    return cn(
      'p-1.5 rounded hover:bg-accent disabled:opacity-50',
      active && 'bg-accent text-accent-foreground',
    );
  }

  execCommand(command: string, value?: string): void {
    if (this.disabled() || this.readonly()) return;

    this.editor().nativeElement.focus();
    document.execCommand(command, false, value);
    this.updateValue();
    this.updateToolbarState();
  }

  protected onHeadingChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const value = target.value as HeadingLevel;

    if (value === 'p') {
      this.execCommand('formatBlock', 'p');
    } else {
      this.execCommand('formatBlock', value);
    }

    this.currentHeading.set(value);
  }

  insertLink(): void {
    if (this.disabled() || this.readonly()) return;

    const selection = window.getSelection();
    const selectedText = selection?.toString() || '';

    const url = prompt('Enter URL:', 'https://');
    if (url) {
      if (selectedText) {
        this.execCommand('createLink', url);
      } else {
        const linkText = prompt('Enter link text:', 'Link');
        if (linkText) {
          const link = `<a href="${url}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
          this.execCommand('insertHTML', link);
        }
      }
    }
  }

  insertCode(): void {
    if (this.disabled() || this.readonly()) return;

    const selection = window.getSelection();
    const selectedText = selection?.toString() || '';

    if (selectedText) {
      const code = `<code>${selectedText}</code>`;
      this.execCommand('insertHTML', code);
    } else {
      this.execCommand('insertHTML', '<code>&nbsp;</code>');
    }
  }

  protected onInput(event: Event): void {
    this.updateValue();
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (this.disabled() || this.readonly()) {
      event.preventDefault();
      return;
    }

    // Handle keyboard shortcuts
    if (event.ctrlKey || event.metaKey) {
      switch (event.key.toLowerCase()) {
        case 'b':
          event.preventDefault();
          this.execCommand('bold');
          break;
        case 'i':
          event.preventDefault();
          this.execCommand('italic');
          break;
        case 'u':
          event.preventDefault();
          this.execCommand('underline');
          break;
        case 'k':
          event.preventDefault();
          this.insertLink();
          break;
      }
    }
  }

  protected onFocus(): void {
    this.isFocused.set(true);
    this.focus.emit();
  }

  protected onBlur(): void {
    this.isFocused.set(false);
    this.blur.emit();
    this.updateValue();
  }

  updateToolbarState(): void {
    this.isBold.set(document.queryCommandState('bold'));
    this.isItalic.set(document.queryCommandState('italic'));
    this.isUnderline.set(document.queryCommandState('underline'));
    this.isStrikethrough.set(document.queryCommandState('strikethrough'));
    this.isOrderedList.set(document.queryCommandState('insertOrderedList'));
    this.isUnorderedList.set(document.queryCommandState('insertUnorderedList'));

    // Check alignment
    if (document.queryCommandState('justifyLeft')) {
      this.alignment.set('left');
    } else if (document.queryCommandState('justifyCenter')) {
      this.alignment.set('center');
    } else if (document.queryCommandState('justifyRight')) {
      this.alignment.set('right');
    } else if (document.queryCommandState('justifyFull')) {
      this.alignment.set('justify');
    }

    // Check blockquote
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const container = range.commonAncestorContainer;
      const element =
        container.nodeType === Node.TEXT_NODE
          ? container.parentElement
          : (container as Element);

      this.isBlockquote.set(!!element?.closest('blockquote'));

      // Check heading
      const heading = element?.closest('h1, h2, h3, h4, h5, h6, p');
      if (heading) {
        this.currentHeading.set(heading.tagName.toLowerCase() as HeadingLevel);
      }

      this.selectionChange.emit(selection);
    }
  }

  private updateValue(): void {
    if (!this.isInitialized) return;

    const html = this.editor().nativeElement.innerHTML;
    // Clean up empty content
    const cleaned = html === '<br>' || html === '<div><br></div>' ? '' : html;

    if (cleaned !== this.value()) {
      this.value.set(cleaned);
      this.valueChange.emit(cleaned);
    }
  }

  private getPlainText(): string {
    return this.editor()?.nativeElement?.textContent || '';
  }

  // Public methods
  setContent(html: string): void {
    this.editor().nativeElement.innerHTML = html;
    this.value.set(html);
  }

  getContent(): string {
    return this.editor().nativeElement.innerHTML;
  }

  clear(): void {
    this.editor().nativeElement.innerHTML = '';
    this.value.set('');
    this.valueChange.emit('');
  }

  focusEditor(): void {
    this.editor().nativeElement.focus();
  }
}
