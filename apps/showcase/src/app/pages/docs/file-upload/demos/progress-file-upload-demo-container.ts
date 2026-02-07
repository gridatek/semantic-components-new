import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ProgressFileUploadDemo } from './progress-file-upload-demo';

@Component({
  selector: 'app-progress-file-upload-demo-container',
  imports: [DemoContainer, ProgressFileUploadDemo],
  template: `
    <app-demo-container title="With Progress" [code]="code">
      <app-progress-file-upload-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressFileUploadDemoContainer {
  readonly code = `// File upload with simulated progress indicator
// See source code for full implementation`;
}
