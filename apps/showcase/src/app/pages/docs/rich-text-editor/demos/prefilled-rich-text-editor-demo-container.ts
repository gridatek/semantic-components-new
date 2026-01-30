import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { PrefilledRichTextEditorDemo } from './prefilled-rich-text-editor-demo';

@Component({
  selector: 'app-prefilled-rich-text-editor-demo-container',
  imports: [DemoContainer, PrefilledRichTextEditorDemo],
  template: `
    <app-demo-container title="With Initial Content" [code]="code">
      <app-prefilled-rich-text-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrefilledRichTextEditorDemoContainer {
  readonly code = `content = \`
  <h2>Welcome to the Rich Text Editor</h2>
  <p>This is a <strong>full-featured</strong> WYSIWYG editor...</p>
  <ul>
    <li><strong>Bold</strong>, <em>italic</em>, and <u>underline</u> text</li>
    <li>Multiple heading levels</li>
  </ul>
\`;

<sc-rich-text-editor [(value)]="content" />`;
}
