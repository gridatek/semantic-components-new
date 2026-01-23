import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CodeEditorDemoComponent } from './code-editor-demo';

@Component({
  selector: 'app-code-editor-demo-container',
  imports: [DemoContainer, CodeEditorDemoComponent],
  template: `
    <app-demo-container title="CodeEditor" [code]="code">
      <app-code-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CodeEditorDemoContainer {
  readonly code = '';
}
