import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FullFeaturedEditorDemo } from './full-featured-editor-demo';

@Component({
  selector: 'app-full-featured-editor-demo-container',
  imports: [DemoContainer, FullFeaturedEditorDemo],
  template: `
    <app-demo-container
      title="Full Featured Editor"
      [code]="code"
      demoUrl="/demos/editor/full-featured-editor-demo"
    >
      <app-full-featured-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullFeaturedEditorDemoContainer {
  readonly code = `<div sc-editor class="border rounded-lg overflow-hidden">
  <div sc-editor-toolbar>
    <div sc-editor-toolbar-group>
      <button sc-editor-undo>
        <svg si-undo-icon class="size-4"></svg>
      </button>
      <button sc-editor-redo>
        <svg si-redo-icon class="size-4"></svg>
      </button>
    </div>

    <div sc-editor-separator></div>

    <div sc-editor-toolbar-group>
      <select sc-editor-heading-select>
        <option value="">Paragraph</option>
        <option value="h1">Heading 1</option>
        <option value="h2">Heading 2</option>
      </select>
    </div>

    <div sc-editor-separator></div>

    <div sc-editor-toolbar-group>
      <button sc-editor-bold>
        <svg si-bold-icon class="size-4"></svg>
      </button>
      <button sc-editor-italic>
        <svg si-italic-icon class="size-4"></svg>
      </button>
      <!-- More buttons... -->
    </div>
  </div>

  <div
    sc-editor-content
    [(value)]="content"
    minHeight="250px"
  ></div>

  <div sc-editor-footer>
    <div sc-editor-count>
    <span sc-editor-word-count></span>
    <span sc-editor-char-count></span>
  </div>
  </div>
</div>`;
}
