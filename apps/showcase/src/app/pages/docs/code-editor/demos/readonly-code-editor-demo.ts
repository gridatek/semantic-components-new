import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScCodeEditor,
  ScCodeEditorContent,
  ScCodeEditorHeader,
  ScCodeEditorLabel,
  ScCodeEditorCopyButton,
} from '@semantic-components/ui';

@Component({
  selector: 'app-readonly-code-editor-demo',
  imports: [
    ScCodeEditor,
    ScCodeEditorHeader,
    ScCodeEditorLabel,
    ScCodeEditorContent,
    ScCodeEditorCopyButton,
  ],
  template: `
    <div sc-code-editor>
      <div sc-code-editor-header>
        <div class="flex items-center gap-2">
          <span class="text-sm text-muted-foreground">readonly.ts</span>
          <span sc-code-editor-label>typescript</span>
        </div>
        <button sc-code-editor-copy-button [code]="readonlyCode"></button>
      </div>
      <div
        sc-code-editor-content
        [value]="readonlyCode"
        language="typescript"
        [readonly]="true"
        filename="readonly.ts"
        maxHeight="200px"
      ></div>
    </div>
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
