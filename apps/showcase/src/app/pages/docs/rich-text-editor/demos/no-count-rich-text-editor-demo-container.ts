import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { NoCountRichTextEditorDemo } from './no-count-rich-text-editor-demo';

@Component({
  selector: 'app-no-count-rich-text-editor-demo-container',
  imports: [DemoContainer, NoCountRichTextEditorDemo],
  template: `
    <app-demo-container
      title="Without Word Count"
      [code]="code"
      demoUrl="/demos/rich-text-editor/no-count-rich-text-editor-demo"
    >
      <app-no-count-rich-text-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoCountRichTextEditorDemoContainer {
  readonly code = `<sc-rich-text-editor
  [(value)]="content"
  [showCount]="false"
  [minHeight]="'100px'"
/>`;
}
