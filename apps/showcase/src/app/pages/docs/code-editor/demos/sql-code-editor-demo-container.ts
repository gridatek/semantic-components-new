import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SqlCodeEditorDemo } from './sql-code-editor-demo';

@Component({
  selector: 'app-sql-code-editor-demo-container',
  imports: [DemoContainer, SqlCodeEditorDemo],
  template: `
    <app-demo-container
      title="SQL"
      demoUrl="/demos/code-editor/sql-code-editor-demo"
      [code]="code"
    >
      <app-sql-code-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SqlCodeEditorDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-sql-code-editor-demo',
  imports: [ScCodeEditor],
  template: \`
    <sc-code-editor
      [(value)]="sqlCode"
      [language]="'sql'"
      [filename]="'query.sql'"
      [maxHeight]="'200px'"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SqlCodeEditorDemo {
  sqlCode = '-- SQL Example\\nSELECT u.id, u.name FROM users u ...';
}`;
}
