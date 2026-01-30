import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScRichTextEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-custom-height-rich-text-editor-demo',
  imports: [ScRichTextEditor],
  template: `
    <sc-rich-text-editor
      [(value)]="content"
      [minHeight]="'300px'"
      [maxHeight]="'500px'"
      [placeholder]="'This editor has a taller minimum height...'"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomHeightRichTextEditorDemo {
  content = '';
}
