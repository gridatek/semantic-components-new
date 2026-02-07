import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { WordWrapCodeEditorDemo } from './word-wrap-code-editor-demo';

@Component({
  selector: 'app-word-wrap-code-editor-demo-container',
  imports: [DemoContainer, WordWrapCodeEditorDemo],
  template: `
    <app-demo-container
      title="Word Wrap Enabled"
      demoUrl="/demos/code-editor/word-wrap-code-editor-demo"
      [code]="code"
    >
      <app-word-wrap-code-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordWrapCodeEditorDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-word-wrap-code-editor-demo',
  imports: [ScCodeEditor],
  template: \`
    <sc-code-editor
      [(value)]="longLineCode"
      [language]="'markdown'"
      [filename]="'README.md'"
      [wordWrap]="true"
      [maxHeight]="'200px'"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordWrapCodeEditorDemo {
  longLineCode = '# Long Line Example\\n\\nThis is a very long line...';
}`;
}
