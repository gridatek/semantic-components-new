import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScCodeEditor,
  ScCodeEditorContent,
  ScCodeEditorHeader,
  ScCodeEditorLabel,
  ScCodeEditorCopyButton,
} from '@semantic-components/ui';

@Component({
  selector: 'app-json-code-editor-demo',
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
          <span class="text-sm text-muted-foreground">config.json</span>
          <span sc-code-editor-label>json</span>
        </div>
        <button sc-code-editor-copy-button [code]="jsonCode"></button>
      </div>
      <div
        sc-code-editor-content
        [(value)]="jsonCode"
        language="json"
        filename="config.json"
        maxHeight="250px"
      ></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonCodeEditorDemo {
  jsonCode = `{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "build": "webpack --mode production",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.0",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}`;
}
