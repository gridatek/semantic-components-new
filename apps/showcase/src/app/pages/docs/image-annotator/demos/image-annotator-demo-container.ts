import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ImageAnnotatorDemoComponent } from './image-annotator-demo';

@Component({
  selector: 'app-image-annotator-demo-container',
  imports: [DemoContainer, ImageAnnotatorDemoComponent],
  template: `
    <app-demo-container title="ImageAnnotator" [code]="code">
      <app-image-annotator-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ImageAnnotatorDemoContainer {
  readonly code = '';
}
