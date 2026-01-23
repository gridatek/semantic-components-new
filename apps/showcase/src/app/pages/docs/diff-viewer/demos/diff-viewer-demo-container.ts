import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DiffViewerDemoComponent } from './diff-viewer-demo';

@Component({
  selector: 'app-diff-viewer-demo-container',
  imports: [DemoContainer, DiffViewerDemoComponent],
  template: `
    <app-demo-container title="Diff" [code]="code">
      <app-diff-viewer-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiffViewerDemoContainer {
  readonly code = ``;
}
