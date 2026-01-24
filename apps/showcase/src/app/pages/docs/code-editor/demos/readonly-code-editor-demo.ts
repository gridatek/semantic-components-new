import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-readonly-code-editor-demo',
  imports: [ScCodeEditor],
  template: `
    <sc-code-editor
      [value]="readonlyCode"
      [language]="'typescript'"
      [readonly]="true"
      [filename]="'readonly.ts'"
      [maxHeight]="'200px'"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadonlyCodeEditorDemo {
  readonlyCode = `// This code is readonly
export const CONFIG = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3,
} as const;`;
}
