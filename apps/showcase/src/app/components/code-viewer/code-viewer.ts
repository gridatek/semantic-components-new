import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Language, ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-code-viewer',
  imports: [ScCodeEditor],
  template: `
    <sc-code-editor
      [value]="code()"
      [language]="language()"
      [readonly]="true"
      [showLineNumbers]="showLineNumbers()"
      [showHeader]="showHeader()"
      [showFooter]="false"
      [maxHeight]="maxHeight()"
    />
  `,
  host: {
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeViewer {
  readonly code = input.required<string>();
  readonly language = input<Language>('typescript');
  readonly showLineNumbers = input(true);
  readonly showHeader = input(true);
  readonly maxHeight = input('400px');
}
