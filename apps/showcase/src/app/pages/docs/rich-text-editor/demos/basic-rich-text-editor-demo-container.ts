import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicRichTextEditorDemo } from './basic-rich-text-editor-demo';

@Component({
  selector: 'app-basic-rich-text-editor-demo-container',
  imports: [DemoContainer, BasicRichTextEditorDemo],
  template: `
    <app-demo-container
      title="Basic Editor"
      [code]="code"
      demoUrl="/demos/rich-text-editor/basic-rich-text-editor-demo"
    >
      <app-basic-rich-text-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicRichTextEditorDemoContainer {
  readonly code = `<sc-rich-text-editor
  [(value)]="content"
  [placeholder]="'Start writing your content...'"
/>`;
}
