import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicCodeEditorDemo } from './basic-code-editor-demo';

@Component({
  selector: 'app-basic-code-editor-demo-container',
  imports: [DemoContainer, BasicCodeEditorDemo],
  template: `
    <app-demo-container
      title="Basic Editor"
      demoUrl="/demos/code-editor/basic-code-editor-demo"
      [code]="code"
    >
      <app-basic-code-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicCodeEditorDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-code-editor-demo',
  imports: [ScCodeEditor],
  template: \`
    <sc-code-editor
      [(value)]="javascriptCode"
      [language]="'javascript'"
      [filename]="'example.js'"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicCodeEditorDemo {
  javascriptCode = '// JavaScript Example\\nfunction greet(name) { ... }';
}`;
}
