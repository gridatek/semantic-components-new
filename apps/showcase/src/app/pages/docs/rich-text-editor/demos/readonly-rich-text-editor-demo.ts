import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScRichTextEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-readonly-rich-text-editor-demo',
  imports: [ScRichTextEditor],
  template: `
    <sc-rich-text-editor
      [value]="content"
      [readonly]="true"
      [showToolbar]="false"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadonlyRichTextEditorDemo {
  content = `
    <h3>Readonly Content</h3>
    <p>This content cannot be edited. The editor is in readonly mode with the toolbar hidden.</p>
    <p>Useful for displaying formatted content that users should only read.</p>
  `;
}
