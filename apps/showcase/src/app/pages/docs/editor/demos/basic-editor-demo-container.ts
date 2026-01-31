import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicEditorDemo } from './basic-editor-demo';

@Component({
  selector: 'app-basic-editor-demo-container',
  imports: [DemoContainer, BasicEditorDemo],
  template: `
    <app-demo-container
      title="Basic Editor"
      [code]="code"
      demoUrl="/demos/editor/basic-editor-demo"
    >
      <app-basic-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicEditorDemoContainer {
  readonly code = `<div sc-editor class="border rounded-lg overflow-hidden">
  <div sc-editor-toolbar>
    <div sc-editor-toolbar-group>
      <button sc-editor-bold>
        <svg si-bold-icon class="size-4"></svg>
      </button>
      <button sc-editor-italic>
        <svg si-italic-icon class="size-4"></svg>
      </button>
      <button sc-editor-underline>
        <svg si-underline-icon class="size-4"></svg>
      </button>
    </div>

    <div sc-editor-separator></div>

    <div sc-editor-toolbar-group>
      <button sc-editor-bullet-list>
        <svg si-list-icon class="size-4"></svg>
      </button>
      <button sc-editor-numbered-list>
        <svg si-list-ordered-icon class="size-4"></svg>
      </button>
    </div>
  </div>

  <div
    sc-editor-content
    [(value)]="content"
    placeholder="Start writing your content..."
  ></div>

  <div sc-editor-footer>
    <div sc-editor-count></div>
  </div>
</div>`;
}
