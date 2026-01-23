import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CodeEditorDemo } from './code-editor-demo';

@Component({
  selector: 'app-code-editor-demo-container',
  imports: [DemoContainer, CodeEditorDemo],
  template: `
    <app-demo-container title="Code" [code]="code">
      <app-code-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeEditorDemoContainer {
  readonly code = ``;
}
