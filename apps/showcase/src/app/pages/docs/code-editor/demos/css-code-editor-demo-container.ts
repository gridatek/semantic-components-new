import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CssCodeEditorDemo } from './css-code-editor-demo';

@Component({
  selector: 'app-css-code-editor-demo-container',
  imports: [DemoContainer, CssCodeEditorDemo],
  template: `
    <app-demo-container
      title="CSS"
      demoUrl="/demos/code-editor/css-code-editor-demo"
      [code]="code"
    >
      <app-css-code-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CssCodeEditorDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-css-code-editor-demo',
  imports: [ScCodeEditor],
  template: \`
    <sc-code-editor
      [(value)]="cssCode"
      [language]="'css'"
      [filename]="'styles.css'"
      [maxHeight]="'250px'"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CssCodeEditorDemo {
  cssCode = '/* CSS Example */\\n:root { --primary-color: #3498db; }';
}`;
}
