import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MinimalCodeEditorDemo } from './minimal-code-editor-demo';

@Component({
  selector: 'app-minimal-code-editor-demo-container',
  imports: [DemoContainer, MinimalCodeEditorDemo],
  template: `
    <app-demo-container
      title="Minimal (No Header/Footer)"
      demoUrl="/demos/code-editor/minimal-code-editor-demo"
      [code]="code"
    >
      <app-minimal-code-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalCodeEditorDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-minimal-code-editor-demo',
  imports: [ScCodeEditor],
  template: \`
    <sc-code-editor
      [(value)]="minimalCode"
      [language]="'javascript'"
      [showHeader]="false"
      [showFooter]="false"
      [maxHeight]="'150px'"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalCodeEditorDemo {
  minimalCode = 'const hello = "world";\\nconsole.log(hello);';
}`;
}
