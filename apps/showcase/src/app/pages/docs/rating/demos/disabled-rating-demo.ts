import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScRating, ScRatingStars } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-rating-demo',
  imports: [ScRating, ScRatingStars],
  template: `
    <div sc-rating [value]="3" [disabled]="true">
      <div sc-rating-stars></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledRatingDemo {}
