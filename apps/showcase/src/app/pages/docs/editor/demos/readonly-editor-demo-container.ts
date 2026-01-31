import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ReadonlyEditorDemo } from './readonly-editor-demo';

@Component({
  selector: 'app-readonly-editor-demo-container',
  imports: [DemoContainer, ReadonlyEditorDemo],
  template: `
    <app-demo-container
      title="Readonly Mode"
      [code]="code"
      demoUrl="/demos/editor/readonly-editor-demo"
    >
      <app-readonly-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadonlyEditorDemoContainer {
  readonly code = `content = signal(\`
  <h3>Readonly Content</h3>
  <p>This content cannot be edited...</p>
\`);

<div sc-editor [readonly]="true" class="border rounded-lg overflow-hidden">
  <!-- No toolbar in readonly mode -->

  <div sc-editor-content [(value)]="content"></div>

  <div sc-editor-footer>
    <div sc-editor-count></div>
  </div>
</div>`;
}
