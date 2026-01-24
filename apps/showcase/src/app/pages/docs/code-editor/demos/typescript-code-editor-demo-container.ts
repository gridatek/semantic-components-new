import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { TypescriptCodeEditorDemo } from './typescript-code-editor-demo';

@Component({
  selector: 'app-typescript-code-editor-demo-container',
  imports: [DemoContainer, TypescriptCodeEditorDemo],
  template: `
    <app-demo-container
      title="TypeScript"
      demoUrl="/demos/code-editor/typescript-code-editor-demo"
      [code]="code"
    >
      <app-typescript-code-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypescriptCodeEditorDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-typescript-code-editor-demo',
  imports: [ScCodeEditor],
  template: \`
    <sc-code-editor
      [(value)]="typescriptCode"
      [language]="'typescript'"
      [filename]="'component.ts'"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypescriptCodeEditorDemo {
  typescriptCode = '// TypeScript Example\\ninterface User { ... }';
}`;
}
