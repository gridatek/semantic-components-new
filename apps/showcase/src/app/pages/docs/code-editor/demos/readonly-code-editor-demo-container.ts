import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ReadonlyCodeEditorDemo } from './readonly-code-editor-demo';

@Component({
  selector: 'app-readonly-code-editor-demo-container',
  imports: [DemoContainer, ReadonlyCodeEditorDemo],
  template: `
    <app-demo-container
      title="Readonly Mode"
      demoUrl="/demos/code-editor/readonly-code-editor-demo"
      [code]="code"
    >
      <app-readonly-code-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadonlyCodeEditorDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-readonly-code-editor-demo',
  imports: [ScCodeEditor],
  template: \`
    <sc-code-editor
      [value]="readonlyCode"
      [language]="'typescript'"
      [readonly]="true"
      [filename]="'readonly.ts'"
      [maxHeight]="'200px'"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadonlyCodeEditorDemo {
  readonlyCode = '// This code is readonly\\nexport const CONFIG = { ... } as const;';
}`;
}
