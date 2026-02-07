import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { PythonCodeEditorDemo } from './python-code-editor-demo';

@Component({
  selector: 'app-python-code-editor-demo-container',
  imports: [DemoContainer, PythonCodeEditorDemo],
  template: `
    <app-demo-container
      title="Python"
      demoUrl="/demos/code-editor/python-code-editor-demo"
      [code]="code"
    >
      <app-python-code-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PythonCodeEditorDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-python-code-editor-demo',
  imports: [ScCodeEditor],
  template: \`
    <sc-code-editor
      [(value)]="pythonCode"
      [language]="'python'"
      [filename]="'script.py'"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PythonCodeEditorDemo {
  pythonCode = '# Python Example\\nclass DataProcessor: ...';
}`;
}
