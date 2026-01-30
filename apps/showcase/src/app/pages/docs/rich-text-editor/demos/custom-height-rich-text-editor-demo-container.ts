import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CustomHeightRichTextEditorDemo } from './custom-height-rich-text-editor-demo';

@Component({
  selector: 'app-custom-height-rich-text-editor-demo-container',
  imports: [DemoContainer, CustomHeightRichTextEditorDemo],
  template: `
    <app-demo-container
      title="Custom Height"
      [code]="code"
      demoUrl="/demos/rich-text-editor/custom-height-rich-text-editor-demo"
    >
      <app-custom-height-rich-text-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomHeightRichTextEditorDemoContainer {
  readonly code = `<sc-rich-text-editor
  [(value)]="content"
  [minHeight]="'300px'"
  [maxHeight]="'500px'"
  [placeholder]="'This editor has a taller minimum height...'"
/>`;
}
