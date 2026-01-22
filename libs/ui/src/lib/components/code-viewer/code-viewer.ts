import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { codeToHtml } from 'shiki';
import { cn } from '../../utils';

export type CodeViewerLanguage =
  | 'typescript'
  | 'javascript'
  | 'html'
  | 'css'
  | 'json'
  | 'python'
  | 'bash'
  | 'shell'
  | 'markdown'
  | 'yaml'
  | 'sql'
  | 'go'
  | 'rust'
  | 'java'
  | 'plaintext';

export type CodeViewerTheme = 'github-dark' | 'github-light';

@Component({
  selector: 'sc-code-viewer',
  template: `
    <div [class]="containerClass()">
      @if (showHeader()) {
        <div
          class="flex items-center justify-between border-b border-border px-4 py-2"
        >
          <span class="text-xs font-medium text-muted-foreground">
            {{ filename() || language() }}
          </span>
          @if (showCopyButton()) {
            <button
              type="button"
              (click)="copyCode($event)"
              class="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              [attr.aria-label]="copied() ? 'Copied' : 'Copy code'"
            >
              @if (copied()) {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-3.5"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-3.5"
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
      <div class="overflow-auto" [style.max-height]="maxHeight()">
        @if (highlightedHtml()) {
          <div [class]="contentClass()" [innerHTML]="highlightedHtml()"></div>
        } @else {
          <pre
            class="m-0 p-4 text-sm leading-relaxed font-mono text-foreground"
          ><code>{{ code() }}</code></pre>
        }
      </div>
    </div>
  `,
  styles: `
    sc-code-viewer {
      display: block;
    }

    .sc-code-viewer__content pre.shiki {
      margin: 0;
      padding: 1rem;
      overflow-x: auto;
      font-size: 0.875rem;
      line-height: 1.625;
      background-color: transparent !important;
    }

    .sc-code-viewer__content pre.shiki code {
      font-family:
        ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas,
        'Liberation Mono', monospace;
    }

    .sc-code-viewer__content--line-numbers pre.shiki code {
      counter-reset: line;
    }

    .sc-code-viewer__content--line-numbers pre.shiki code .line {
      display: inline-block;
      width: 100%;
    }

    .sc-code-viewer__content--line-numbers pre.shiki code .line::before {
      counter-increment: line;
      content: counter(line);
      display: inline-block;
      width: 2rem;
      margin-right: 1rem;
      text-align: right;
      color: hsl(var(--muted-foreground) / 0.5);
      user-select: none;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCodeViewer {
  readonly code = input.required<string>();
  readonly language = input<CodeViewerLanguage>('plaintext');
  readonly theme = input<CodeViewerTheme>('github-dark');
  readonly filename = input<string>('');
  readonly showHeader = input(true);
  readonly showCopyButton = input(true);
  readonly showLineNumbers = input(false);
  readonly maxHeight = input<string>('');
  readonly classInput = input<string>('', { alias: 'class' });

  private readonly sanitizer = inject(DomSanitizer);

  protected readonly copied = signal(false);
  protected readonly highlightedHtml = signal<SafeHtml | null>(null);

  protected readonly containerClass = computed(() =>
    cn(
      'overflow-hidden rounded-lg border border-border bg-muted/50',
      this.classInput(),
    ),
  );

  protected readonly contentClass = computed(() =>
    cn(
      'sc-code-viewer__content',
      this.showLineNumbers() && 'sc-code-viewer__content--line-numbers',
    ),
  );

  constructor() {
    effect(() => {
      const code = this.code();
      const lang = this.language();
      const theme = this.theme();

      this.highlight(code, lang, theme);
    });
  }

  private async highlight(
    code: string,
    lang: CodeViewerLanguage,
    theme: CodeViewerTheme,
  ): Promise<void> {
    try {
      const html = await codeToHtml(code, { lang, theme });
      this.highlightedHtml.set(this.sanitizer.bypassSecurityTrustHtml(html));
    } catch {
      this.highlightedHtml.set(null);
    }
  }

  protected async copyCode(event: Event): Promise<void> {
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(this.code());
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // Clipboard API not available
    }
  }
}
