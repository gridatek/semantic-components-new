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

export type ScCodeViewerLanguage =
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
  selector: 'div[sc-code-viewer-content]',
  template: `
    @if (highlightedHtml()) {
      <div [class]="contentClass()" [innerHTML]="highlightedHtml()"></div>
    } @else {
      <pre
        class="m-0 p-4 text-sm leading-relaxed font-mono text-foreground"
      ><code>{{ code() }}</code></pre>
    }
  `,
  styles: `
    .sc-code-viewer-content pre.shiki {
      margin: 0;
      padding: 1rem;
      overflow-x: auto;
      font-size: 0.875rem;
      line-height: 1.625;
    }

    .sc-code-viewer-content pre.shiki,
    .sc-code-viewer-content pre.shiki span {
      color: var(--shiki-light);
      background-color: var(--shiki-light-bg);
    }

    .dark .sc-code-viewer-content pre.shiki,
    .dark .sc-code-viewer-content pre.shiki span {
      color: var(--shiki-dark);
      background-color: var(--shiki-dark-bg);
    }

    .sc-code-viewer-content pre.shiki code {
      font-family:
        ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas,
        'Liberation Mono', monospace;
    }

    .sc-code-viewer-content--line-numbers pre.shiki code {
      counter-reset: line;
    }

    .sc-code-viewer-content--line-numbers pre.shiki code .line {
      display: inline-block;
      width: 100%;
    }

    .sc-code-viewer-content--line-numbers pre.shiki code .line::before {
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
  host: {
    'data-slot': 'code-viewer-content',
    '[class]': 'wrapperClass()',
    '[style.max-height]': 'maxHeight()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCodeViewerContent {
  readonly code = input.required<string>();
  readonly language = input<ScCodeViewerLanguage>('plaintext');
  readonly showLineNumbers = input(false);
  readonly maxHeight = input<string>('');
  readonly classInput = input<string>('', { alias: 'class' });

  private readonly sanitizer = inject(DomSanitizer);

  protected readonly highlightedHtml = signal<SafeHtml | null>(null);

  protected readonly wrapperClass = computed(() =>
    cn('overflow-auto', this.classInput()),
  );

  protected readonly contentClass = computed(() =>
    cn(
      'sc-code-viewer-content',
      this.showLineNumbers() && 'sc-code-viewer-content--line-numbers',
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
    lang: ScCodeViewerLanguage,
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
