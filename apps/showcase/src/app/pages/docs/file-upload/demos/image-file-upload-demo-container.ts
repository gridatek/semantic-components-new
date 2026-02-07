import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ImageFileUploadDemo } from './image-file-upload-demo';

@Component({
  selector: 'app-image-file-upload-demo-container',
  imports: [DemoContainer, ImageFileUploadDemo],
  template: `
    <app-demo-container title="Image Upload" [code]="code">
      <app-image-file-upload-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageFileUploadDemoContainer {
  readonly code = `// Image upload with preview, accepts image/* with 5MB max size
// See source code for full implementation`;
}
