import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScFileUploadDemo } from './file-upload-demo';

@Component({
  selector: 'app-file-upload-demo-container',
  imports: [DemoContainer, ScFileUploadDemo],
  template: `
    <app-demo-container title="FileUpload" [code]="code">
      <app-sc-file-upload-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FileUploadDemoContainer {
  readonly code = '';
}
