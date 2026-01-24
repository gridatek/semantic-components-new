import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-json-code-editor-demo',
  imports: [ScCodeEditor],
  template: `
    <sc-code-editor
      [(value)]="jsonCode"
      [language]="'json'"
      [filename]="'config.json'"
      [maxHeight]="'250px'"
    />
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
