import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { PrefilledEditorDemo } from './prefilled-editor-demo';

@Component({
  selector: 'app-prefilled-editor-demo-container',
  imports: [DemoContainer, PrefilledEditorDemo],
  template: `
    <app-demo-container
      title="With Initial Content"
      [code]="code"
      demoUrl="/demos/editor/prefilled-editor-demo"
    >
      <app-prefilled-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrefilledEditorDemoContainer {
  readonly code = `content = signal(\`
  <h2>Welcome to the Rich Text Editor</h2>
  <p>This is a <strong>full-featured</strong> WYSIWYG editor...</p>
  <ul>
    <li><strong>Bold</strong>, <em>italic</em>, and <u>underline</u> text</li>
    <li>Multiple heading levels</li>
  </ul>
\`);

<div sc-editor class="border rounded-lg overflow-hidden">
  <div sc-editor-toolbar>
    <div sc-editor-toolbar-group>
      <button sc-editor-bold>
        <svg si-bold-icon class="size-4"></svg>
      </button>
      <button sc-editor-italic>
        <svg si-italic-icon class="size-4"></svg>
      </button>
    </div>
  </div>

  <div sc-editor-content [(value)]="content"></div>

  <div sc-editor-footer>
    <div sc-editor-count></div>
  </div>
</div>`;
}
