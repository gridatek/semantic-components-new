import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScRichTextEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-rich-text-editor-demo',
  imports: [ScRichTextEditor],
  template: `
    <sc-rich-text-editor
      [(value)]="content"
      [placeholder]="'Start writing your content...'"
    />
    <div class="mt-4">
      <h4 class="text-sm font-medium mb-2">HTML Output:</h4>
      <pre class="p-3 bg-muted rounded-lg text-xs overflow-x-auto max-h-32">{{
        content
      }}</pre>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicRichTextEditorDemo {
  content = '';
}
