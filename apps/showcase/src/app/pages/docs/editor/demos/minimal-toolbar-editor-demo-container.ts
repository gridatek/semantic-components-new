import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MinimalToolbarEditorDemo } from './minimal-toolbar-editor-demo';

@Component({
  selector: 'app-minimal-toolbar-editor-demo-container',
  imports: [DemoContainer, MinimalToolbarEditorDemo],
  template: `
    <app-demo-container
      title="Minimal Toolbar"
      [code]="code"
      demoUrl="/demos/editor/minimal-toolbar-editor-demo"
    >
      <app-minimal-toolbar-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalToolbarEditorDemoContainer {
  readonly code = `<div sc-editor class="border rounded-lg overflow-hidden">
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

  <div
    sc-editor-content
    [(value)]="content"
    placeholder="Simple text formatting only..."
  ></div>

  <div sc-editor-footer>
    <div sc-editor-count>
    <span sc-editor-word-count></span>
    <span sc-editor-char-count></span>
  </div>
  </div>
</div>`;
}
