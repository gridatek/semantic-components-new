import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  input,
  model,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { cn } from '../../utils';
import {
  highlightCode,
  detectLanguage,
  CodeEditorLanguage,
} from './syntax-highlighter';

export type { CodeEditorLanguage } from './syntax-highlighter';

export interface CodeEditorTheme {
  background: string;
  foreground: string;
  lineNumbers: string;
  lineNumbersActive: string;
  selection: string;
  cursor: string;
  activeLine: string;
  keyword: string;
  string: string;
  number: string;
  comment: string;
  function: string;
  operator: string;
  punctuation: string;
  property: string;
  tag: string;
  attribute: string;
  selector: string;
  variable: string;
  builtin: string;
}

export const THEMES: Record<string, CodeEditorTheme> = {
  dark: {
    background: 'hsl(var(--muted))',
    foreground: 'hsl(var(--foreground))',
    lineNumbers: 'hsl(var(--muted-foreground))',
    lineNumbersActive: 'hsl(var(--foreground))',
    selection: 'hsl(var(--primary) / 0.3)',
    cursor: 'hsl(var(--primary))',
    activeLine: 'hsl(var(--primary) / 0.1)',
    keyword: '#c586c0',
    string: '#ce9178',
    number: '#b5cea8',
    comment: '#6a9955',
    function: '#dcdcaa',
    operator: '#d4d4d4',
    punctuation: '#d4d4d4',
    property: '#9cdcfe',
    tag: '#569cd6',
    attribute: '#9cdcfe',
    selector: '#d7ba7d',
    variable: '#9cdcfe',
    builtin: '#4ec9b0',
  },
  light: {
    background: 'hsl(var(--muted))',
    foreground: 'hsl(var(--foreground))',
    lineNumbers: 'hsl(var(--muted-foreground))',
    lineNumbersActive: 'hsl(var(--foreground))',
    selection: 'hsl(var(--primary) / 0.2)',
    cursor: 'hsl(var(--primary))',
    activeLine: 'hsl(var(--primary) / 0.05)',
    keyword: '#af00db',
    string: '#a31515',
    number: '#098658',
    comment: '#008000',
    function: '#795e26',
    operator: '#000000',
    punctuation: '#000000',
    property: '#001080',
    tag: '#800000',
    attribute: '#ff0000',
    selector: '#800000',
    variable: '#001080',
    builtin: '#267f99',
  },
};

@Component({
  selector: 'sc-code-editor',
  template: `
    <div
      [class]="containerClass()"
      [style]="containerStyle()"
      (click)="focusTextarea()"
    >
      <!-- Header bar -->
      @if (showHeader()) {
        <div
          class="flex items-center justify-between px-3 py-2 border-b bg-background/50"
        >
          <div class="flex items-center gap-2">
            @if (filename()) {
              <span class="text-sm text-muted-foreground">
                {{ filename() }}
              </span>
            }
            <span
              class="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground"
            >
              {{ language() }}
            </span>
          </div>
          @if (showCopyButton()) {
            <button
              type="button"
              (click)="copyCode($event)"
              class="p-1.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
              [attr.aria-label]="copied() ? 'Copied!' : 'Copy code'"
            >
              @if (copied()) {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="size-4"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              } @else {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="size-4"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path
                    d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                  />
                </svg>
              }
            </button>
          }
        </div>
      }

      <!-- Editor area -->
      <div class="relative flex overflow-auto" [style.max-height]="maxHeight()">
        <!-- Line numbers -->
        @if (showLineNumbers()) {
          <div
            class="flex-shrink-0 select-none text-right pr-3 pl-3 py-3 border-r"
            [style.color]="theme().lineNumbers"
            [style.min-width.ch]="lineNumberWidth()"
            aria-hidden="true"
          >
            @for (line of lines(); track $index) {
              <div
                class="leading-6 text-sm font-mono"
                [style.color]="
                  activeLine() === $index + 1
                    ? theme().lineNumbersActive
                    : theme().lineNumbers
                "
              >
                {{ $index + 1 }}
              </div>
            }
          </div>
        }

        <!-- Code area -->
        <div class="relative flex-1 min-w-0">
          <!-- Highlighted code (display layer) -->
          <pre
            class="absolute inset-0 p-3 m-0 overflow-hidden pointer-events-none"
            [style]="preStyle()"
            aria-hidden="true"
          ><code [innerHTML]="highlightedCode()"></code></pre>

          <!-- Textarea (input layer) -->
          <textarea
            #textarea
            [value]="value()"
            (input)="onInput($event)"
            (keydown)="onKeydown($event)"
            (scroll)="onScroll($event)"
            (focus)="onFocus()"
            (blur)="onBlur()"
            (click)="updateActiveLine($event)"
            (keyup)="updateActiveLine($event)"
            [disabled]="disabled()"
            [readonly]="readonly()"
            [placeholder]="placeholder()"
            [attr.aria-label]="ariaLabel() || 'Code editor'"
            [attr.aria-describedby]="ariaDescribedby()"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            [class]="textareaClass()"
            [style]="textareaStyle()"
          ></textarea>
        </div>
      </div>

      <!-- Footer with stats -->
      @if (showFooter()) {
        <div
          class="flex items-center justify-between px-3 py-1.5 border-t text-xs text-muted-foreground bg-background/50"
        >
          <div class="flex items-center gap-3">
            <span>Ln {{ activeLine() }}, Col {{ activeColumn() }}</span>
          </div>
          <div class="flex items-center gap-3">
            <span>{{ lines().length }} lines</span>
            <span>{{ characterCount() }} chars</span>
          </div>
        </div>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    .token-keyword {
      color: var(--token-keyword);
    }
    .token-string {
      color: var(--token-string);
    }
    .token-number {
      color: var(--token-number);
    }
    .token-comment {
      color: var(--token-comment);
      font-style: italic;
    }
    .token-function {
      color: var(--token-function);
    }
    .token-operator {
      color: var(--token-operator);
    }
    .token-punctuation {
      color: var(--token-punctuation);
    }
    .token-property {
      color: var(--token-property);
    }
    .token-tag {
      color: var(--token-tag);
    }
    .token-attribute {
      color: var(--token-attribute);
    }
    .token-selector {
      color: var(--token-selector);
    }
    .token-variable {
      color: var(--token-variable);
    }
    .token-builtin {
      color: var(--token-builtin);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCodeEditor {
  // Two-way binding for value
  readonly value = model<string>('');

  // Inputs
  readonly language = input<CodeEditorLanguage>('plaintext');
  readonly theme = input<CodeEditorTheme>(THEMES['dark']);
  readonly filename = input<string>('');
  readonly placeholder = input<string>('');
  readonly disabled = input(false);
  readonly readonly = input(false);
  readonly showLineNumbers = input(true);
  readonly showHeader = input(true);
  readonly showFooter = input(true);
  readonly showCopyButton = input(true);
  readonly tabSize = input(2);
  readonly insertSpaces = input(true);
  readonly wordWrap = input(false);
  readonly maxHeight = input<string>('500px');
  readonly minHeight = input<string>('200px');
  readonly autoDetectLanguage = input(false);
  readonly highlightActiveLine = input(true);
  readonly ariaLabel = input<string>('');
  readonly ariaDescribedby = input<string>('');
  readonly class = input<string>('');

  // Outputs
  readonly valueChange = output<string>();
  readonly languageDetected = output<CodeEditorLanguage>();
  readonly cursorChange = output<{ line: number; column: number }>();

  // Internal state
  readonly copied = signal(false);
  readonly activeLine = signal(1);
  readonly activeColumn = signal(1);
  readonly isFocused = signal(false);
  private scrollTop = 0;
  private scrollLeft = 0;

  private readonly textarea =
    viewChild.required<ElementRef<HTMLTextAreaElement>>('textarea');

  protected readonly lines = computed(() => {
    const code = this.value() || '';
    return code.split('\n');
  });

  protected readonly lineNumberWidth = computed(() => {
    return Math.max(2, String(this.lines().length).length + 1);
  });

  protected readonly characterCount = computed(() => {
    return (this.value() || '').length;
  });

  protected readonly highlightedCode = computed(() => {
    const code = this.value() || '';
    let lang = this.language();

    if (this.autoDetectLanguage() && code) {
      const detected = detectLanguage(code, this.filename());
      if (detected !== lang) {
        lang = detected;
      }
    }

    // Ensure the code ends with a newline for proper display
    const codeToHighlight = code.endsWith('\n') ? code : code + '\n';
    return highlightCode(codeToHighlight, lang);
  });

  protected readonly containerClass = computed(() =>
    cn(
      'border rounded-lg overflow-hidden',
      'focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
      this.disabled() && 'opacity-50 cursor-not-allowed',
      this.class(),
    ),
  );

  protected readonly containerStyle = computed(() => {
    const t = this.theme();
    return {
      backgroundColor: t.background,
      color: t.foreground,
      '--token-keyword': t.keyword,
      '--token-string': t.string,
      '--token-number': t.number,
      '--token-comment': t.comment,
      '--token-function': t.function,
      '--token-operator': t.operator,
      '--token-punctuation': t.punctuation,
      '--token-property': t.property,
      '--token-tag': t.tag,
      '--token-attribute': t.attribute,
      '--token-selector': t.selector,
      '--token-variable': t.variable,
      '--token-builtin': t.builtin,
    };
  });

  protected readonly preStyle = computed(() => ({
    fontFamily:
      'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    whiteSpace: this.wordWrap() ? 'pre-wrap' : 'pre',
    wordBreak: this.wordWrap() ? 'break-all' : 'normal',
    minHeight: this.minHeight(),
  }));

  protected readonly textareaClass = computed(() =>
    cn(
      'relative w-full p-3 m-0 resize-none',
      'bg-transparent text-transparent caret-current',
      'outline-none border-none',
      'font-mono text-sm leading-6',
      this.disabled() && 'cursor-not-allowed',
    ),
  );

  protected readonly textareaStyle = computed(() => ({
    caretColor: this.theme().cursor,
    minHeight: this.minHeight(),
    whiteSpace: this.wordWrap() ? 'pre-wrap' : 'pre',
    wordBreak: this.wordWrap() ? 'break-all' : 'normal',
    overflowWrap: this.wordWrap() ? 'break-word' : 'normal',
  }));

  constructor() {
    effect(() => {
      if (this.autoDetectLanguage() && this.value()) {
        const detected = detectLanguage(this.value(), this.filename());
        this.languageDetected.emit(detected);
      }
    });
  }

  focusTextarea(): void {
    if (!this.disabled() && !this.readonly()) {
      this.textarea().nativeElement.focus();
    }
  }

  protected onInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.value.set(target.value);
    this.valueChange.emit(target.value);
    this.updateCursorPosition(target);
  }

  protected onKeydown(event: KeyboardEvent): void {
    const target = event.target as HTMLTextAreaElement;

    // Handle Tab key
    if (event.key === 'Tab') {
      event.preventDefault();
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const value = target.value;

      const indent = this.insertSpaces() ? ' '.repeat(this.tabSize()) : '\t';

      if (event.shiftKey) {
        // Outdent
        const lineStart = value.lastIndexOf('\n', start - 1) + 1;
        const lineContent = value.slice(lineStart, start);
        const indentMatch = lineContent.match(/^(\t| {1,})/);

        if (indentMatch) {
          const removeLength = Math.min(
            indentMatch[1].length,
            this.insertSpaces() ? this.tabSize() : 1,
          );
          const newValue =
            value.slice(0, lineStart) + value.slice(lineStart + removeLength);

          this.value.set(newValue);
          this.valueChange.emit(newValue);

          // Restore cursor position
          setTimeout(() => {
            target.selectionStart = target.selectionEnd = start - removeLength;
          });
        }
      } else {
        // Indent
        const newValue = value.slice(0, start) + indent + value.slice(end);
        this.value.set(newValue);
        this.valueChange.emit(newValue);

        // Move cursor after indent
        setTimeout(() => {
          target.selectionStart = target.selectionEnd = start + indent.length;
        });
      }
    }

    // Handle Enter for auto-indent
    if (event.key === 'Enter' && !event.shiftKey) {
      const start = target.selectionStart;
      const value = target.value;

      // Find the current line's indentation
      const lineStart = value.lastIndexOf('\n', start - 1) + 1;
      const lineContent = value.slice(lineStart, start);
      const indentMatch = lineContent.match(/^(\s*)/);
      const currentIndent = indentMatch ? indentMatch[1] : '';

      // Check if we need extra indent (after { or :)
      const charBefore = value[start - 1];
      const extraIndent =
        charBefore === '{' || charBefore === ':' || charBefore === '['
          ? this.insertSpaces()
            ? ' '.repeat(this.tabSize())
            : '\t'
          : '';

      event.preventDefault();
      const newValue =
        value.slice(0, start) +
        '\n' +
        currentIndent +
        extraIndent +
        value.slice(start);

      this.value.set(newValue);
      this.valueChange.emit(newValue);

      setTimeout(() => {
        const newPos = start + 1 + currentIndent.length + extraIndent.length;
        target.selectionStart = target.selectionEnd = newPos;
        this.updateCursorPosition(target);
      });
    }

    // Handle closing brackets
    if (event.key === '}' || event.key === ']' || event.key === ')') {
      const start = target.selectionStart;
      const value = target.value;
      const lineStart = value.lastIndexOf('\n', start - 1) + 1;
      const beforeCursor = value.slice(lineStart, start);

      // If line is only whitespace, reduce indent
      if (/^\s+$/.test(beforeCursor)) {
        const reduceBy = this.insertSpaces() ? this.tabSize() : 1;
        const newIndent = beforeCursor.slice(
          0,
          Math.max(0, beforeCursor.length - reduceBy),
        );

        event.preventDefault();
        const newValue =
          value.slice(0, lineStart) +
          newIndent +
          event.key +
          value.slice(start);

        this.value.set(newValue);
        this.valueChange.emit(newValue);

        setTimeout(() => {
          target.selectionStart = target.selectionEnd =
            lineStart + newIndent.length + 1;
        });
      }
    }
  }

  protected onScroll(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.scrollTop = target.scrollTop;
    this.scrollLeft = target.scrollLeft;

    // Sync scroll with the pre element
    const pre = target.previousElementSibling as HTMLPreElement;
    if (pre) {
      pre.scrollTop = this.scrollTop;
      pre.scrollLeft = this.scrollLeft;
    }
  }

  protected onFocus(): void {
    this.isFocused.set(true);
  }

  protected onBlur(): void {
    this.isFocused.set(false);
  }

  protected updateActiveLine(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.updateCursorPosition(target);
  }

  private updateCursorPosition(textarea: HTMLTextAreaElement): void {
    const value = textarea.value;
    const pos = textarea.selectionStart;

    // Calculate line and column
    const textBeforeCursor = value.slice(0, pos);
    const lines = textBeforeCursor.split('\n');
    const line = lines.length;
    const column = lines[lines.length - 1].length + 1;

    this.activeLine.set(line);
    this.activeColumn.set(column);
    this.cursorChange.emit({ line, column });
  }

  protected async copyCode(event: Event): Promise<void> {
    event.stopPropagation();

    try {
      await navigator.clipboard.writeText(this.value());
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  }
}
