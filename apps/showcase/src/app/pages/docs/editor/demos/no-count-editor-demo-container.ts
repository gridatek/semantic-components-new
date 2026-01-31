import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { NoCountEditorDemo } from './no-count-editor-demo';

@Component({
  selector: 'app-no-count-editor-demo-container',
  imports: [DemoContainer, NoCountEditorDemo],
  template: `
    <app-demo-container
      title="Without Word Count"
      [code]="code"
      demoUrl="/demos/editor/no-count-editor-demo"
    >
      <app-no-count-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoCountEditorDemoContainer {
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
    minHeight="100px"
  ></div>

  <!-- No footer/count component -->
</div>`;
}
