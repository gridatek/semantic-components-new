import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SingleFileUploadDemo } from './single-file-upload-demo';

@Component({
  selector: 'app-single-file-upload-demo-container',
  imports: [DemoContainer, SingleFileUploadDemo],
  template: `
    <app-demo-container title="Single File" [code]="code">
      <app-single-file-upload-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleFileUploadDemoContainer {
  readonly code = `// Single file upload (replaces previous file)
// See source code for full implementation`;
}
