import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScImageCompareDemo } from './image-compare-demo';

@Component({
  selector: 'app-image-compare-demo-container',
  imports: [DemoContainer, ScImageCompareDemo],
  template: `
    <app-demo-container title="ImageCompare" [code]="code">
      <sc-image-compare-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ImageCompareDemoContainer {
  readonly code = '';
}
