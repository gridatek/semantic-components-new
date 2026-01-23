import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScRatingDemo } from './rating-demo';

@Component({
  selector: 'app-rating-demo-container',
  imports: [DemoContainer, ScRatingDemo],
  template: `
    <app-demo-container title="Rating" [code]="code">
      <app-sc-rating-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RatingDemoContainer {
  readonly code = '';
}
