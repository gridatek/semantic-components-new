import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScRichTextEditor, ToolbarConfig } from '@semantic-components/ui';

@Component({
  selector: 'app-minimal-toolbar-rich-text-editor-demo',
  imports: [ScRichTextEditor],
  template: `
    <sc-rich-text-editor
      [(value)]="content"
      [toolbar]="toolbar"
      [placeholder]="'Simple text formatting only...'"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalToolbarRichTextEditorDemo {
  content = '';

  toolbar: ToolbarConfig = {
    bold: true,
    italic: true,
    underline: true,
    link: true,
    undo: true,
    redo: true,
  };
}
