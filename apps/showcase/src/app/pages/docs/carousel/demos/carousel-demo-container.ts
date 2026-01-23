import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScCarouselDemo } from './carousel-demo';

@Component({
  selector: 'app-carousel-demo-container',
  imports: [DemoContainer, ScCarouselDemo],
  template: `
    <app-demo-container title="Carousel" [code]="code">
      <app-sc-carousel-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CarouselDemoContainer {
  readonly code = '';
}
