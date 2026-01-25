import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SizesRatingDemo } from './sizes-rating-demo';

@Component({
  selector: 'app-sizes-rating-demo-container',
  imports: [DemoContainer, SizesRatingDemo],
  template: `
    <app-demo-container title="Sizes" [code]="code">
      <app-sizes-rating-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizesRatingDemoContainer {
  readonly code = `// See sizes-rating-demo.ts for full source`;
}
