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
import { ScCopyButton } from '../copy-button';

export type CodeViewerLanguage =
  | 'angular-ts'
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

@Component({
  selector: 'sc-code-viewer',
  imports: [ScCopyButton],
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
            <button sc-copy-button [value]="code()"></button>
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
    }

    .sc-code-viewer__content pre.shiki,
    .sc-code-viewer__content pre.shiki span {
      color: var(--shiki-light);
      background-color: var(--shiki-light-bg);
    }

    .dark .sc-code-viewer__content pre.shiki,
    .dark .sc-code-viewer__content pre.shiki span {
      color: var(--shiki-dark);
      background-color: var(--shiki-dark-bg);
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
  readonly filename = input<string>('');
  readonly showHeader = input(true);
  readonly showCopyButton = input(true);
  readonly showLineNumbers = input(false);
  readonly maxHeight = input<string>('');
  readonly classInput = input<string>('', { alias: 'class' });

  private readonly sanitizer = inject(DomSanitizer);

  protected readonly highlightedHtml = signal<SafeHtml | null>(null);

  protected readonly containerClass = computed(() =>
    cn('overflow-hidden rounded-lg border border-border', this.classInput()),
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

      this.highlight(code, lang);
    });
  }

  private async highlight(
    code: string,
    lang: CodeViewerLanguage,
  ): Promise<void> {
    try {
      const html = await codeToHtml(code, {
        lang,
        themes: {
          light: 'github-light',
          dark: 'github-dark',
        },
        defaultColor: false,
      });
      this.highlightedHtml.set(this.sanitizer.bypassSecurityTrustHtml(html));
    } catch {
      this.highlightedHtml.set(null);
    }
  }
}
