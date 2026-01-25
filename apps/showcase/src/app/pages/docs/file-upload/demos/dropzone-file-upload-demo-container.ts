import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DropzoneFileUploadDemo } from './dropzone-file-upload-demo';

@Component({
  selector: 'app-dropzone-file-upload-demo-container',
  imports: [DemoContainer, DropzoneFileUploadDemo],
  template: `
    <app-demo-container title="Dropzone" [code]="code">
      <app-dropzone-file-upload-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropzoneFileUploadDemoContainer {
  readonly code = `// Basic file upload with drag and drop dropzone
// See source code for full implementation`;
}
