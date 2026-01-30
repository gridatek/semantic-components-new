import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MinimalToolbarRichTextEditorDemo } from './minimal-toolbar-rich-text-editor-demo';

@Component({
  selector: 'app-minimal-toolbar-rich-text-editor-demo-container',
  imports: [DemoContainer, MinimalToolbarRichTextEditorDemo],
  template: `
    <app-demo-container
      title="Minimal Toolbar"
      [code]="code"
      demoUrl="/demos/rich-text-editor/minimal-toolbar-rich-text-editor-demo"
    >
      <app-minimal-toolbar-rich-text-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalToolbarRichTextEditorDemoContainer {
  readonly code = `toolbar: ToolbarConfig = {
  bold: true,
  italic: true,
  underline: true,
  link: true,
  undo: true,
  redo: true,
};

<sc-rich-text-editor
  [(value)]="content"
  [toolbar]="toolbar"
  [placeholder]="'Simple text formatting only...'"
/>`;
}
