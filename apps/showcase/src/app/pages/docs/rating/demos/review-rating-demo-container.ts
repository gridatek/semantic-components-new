import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ReviewRatingDemo } from './review-rating-demo';

@Component({
  selector: 'app-review-rating-demo-container',
  imports: [DemoContainer, ReviewRatingDemo],
  template: `
    <app-demo-container title="Review Card" [code]="code">
      <app-review-rating-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewRatingDemoContainer {
  readonly code = `// See review-rating-demo.ts for full source`;
}
