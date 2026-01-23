import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScImageCropperDemo } from './image-cropper-demo';

@Component({
  selector: 'app-image-cropper-demo-container',
  imports: [DemoContainer, ScImageCropperDemo],
  template: `
    <app-demo-container title="ImageCropper" [code]="code">
      <app-sc-image-cropper-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ImageCropperDemoContainer {
  readonly code = '';
}
