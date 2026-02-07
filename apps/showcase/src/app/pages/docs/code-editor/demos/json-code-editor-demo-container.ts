import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { JsonCodeEditorDemo } from './json-code-editor-demo';

@Component({
  selector: 'app-json-code-editor-demo-container',
  imports: [DemoContainer, JsonCodeEditorDemo],
  template: `
    <app-demo-container
      title="JSON"
      demoUrl="/demos/code-editor/json-code-editor-demo"
      [code]="code"
    >
      <app-json-code-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonCodeEditorDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-json-code-editor-demo',
  imports: [ScCodeEditor],
  template: \`
    <sc-code-editor
      [(value)]="jsonCode"
      [language]="'json'"
      [filename]="'config.json'"
      [maxHeight]="'250px'"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonCodeEditorDemo {
  jsonCode = '{ "name": "my-project", "version": "1.0.0" }';
}`;
}
