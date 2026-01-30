import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScRichTextEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-no-count-rich-text-editor-demo',
  imports: [ScRichTextEditor],
  template: `
    <sc-rich-text-editor
      [(value)]="content"
      [showCount]="false"
      [minHeight]="'100px'"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoCountRichTextEditorDemo {
  content = '';
}
