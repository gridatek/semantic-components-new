import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ReadonlyRichTextEditorDemo } from './readonly-rich-text-editor-demo';

@Component({
  selector: 'app-readonly-rich-text-editor-demo-container',
  imports: [DemoContainer, ReadonlyRichTextEditorDemo],
  template: `
    <app-demo-container
      title="Readonly Mode"
      [code]="code"
      demoUrl="/demos/rich-text-editor/readonly-rich-text-editor-demo"
    >
      <app-readonly-rich-text-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadonlyRichTextEditorDemoContainer {
  readonly code = `<sc-rich-text-editor
  [value]="content"
  [readonly]="true"
  [showToolbar]="false"
/>`;
}
