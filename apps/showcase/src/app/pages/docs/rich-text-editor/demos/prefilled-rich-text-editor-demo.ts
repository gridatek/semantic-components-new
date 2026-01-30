import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScRichTextEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-prefilled-rich-text-editor-demo',
  imports: [ScRichTextEditor],
  template: `
    <sc-rich-text-editor [(value)]="content" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrefilledRichTextEditorDemo {
  content = `
    <h2>Welcome to the Rich Text Editor</h2>
    <p>This is a <strong>full-featured</strong> WYSIWYG editor with support for:</p>
    <ul>
      <li><strong>Bold</strong>, <em>italic</em>, and <u>underline</u> text</li>
      <li>Multiple heading levels</li>
      <li>Ordered and unordered lists</li>
      <li><a href="https://example.com">Hyperlinks</a></li>
      <li>And much more!</li>
    </ul>
    <blockquote>
      This is a blockquote for highlighting important information.
    </blockquote>
    <p>You can also add <code>inline code</code> snippets.</p>
  `;
}
