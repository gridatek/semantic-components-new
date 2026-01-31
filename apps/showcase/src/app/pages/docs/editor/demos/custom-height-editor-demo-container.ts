import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CustomHeightEditorDemo } from './custom-height-editor-demo';

@Component({
  selector: 'app-custom-height-editor-demo-container',
  imports: [DemoContainer, CustomHeightEditorDemo],
  template: `
    <app-demo-container
      title="Custom Height"
      [code]="code"
      demoUrl="/demos/editor/custom-height-editor-demo"
    >
      <app-custom-height-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomHeightEditorDemoContainer {
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
    minHeight="300px"
    maxHeight="500px"
    placeholder="This editor has a taller minimum height..."
  ></div>

  <div sc-editor-footer>
    <div sc-editor-count></div>
  </div>
</div>`;
}
