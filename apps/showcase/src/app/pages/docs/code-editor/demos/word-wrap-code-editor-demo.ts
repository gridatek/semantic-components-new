import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-word-wrap-code-editor-demo',
  imports: [ScCodeEditor],
  template: `
    <sc-code-editor
      [(value)]="longLineCode"
      [language]="'markdown'"
      [filename]="'README.md'"
      [wordWrap]="true"
      [maxHeight]="'200px'"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordWrapCodeEditorDemo {
  longLineCode = `# Long Line Example

This is a very long line that demonstrates word wrapping in the code editor. When word wrap is enabled, long lines like this one will automatically wrap to the next line instead of requiring horizontal scrolling.

## Features
- Syntax highlighting
- Line numbers
- Word wrap support`;
}
