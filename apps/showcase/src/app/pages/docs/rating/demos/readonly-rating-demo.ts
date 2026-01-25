import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScRating, ScRatingStars } from '@semantic-components/ui';

@Component({
  selector: 'app-readonly-rating-demo',
  imports: [ScRating, ScRatingStars],
  template: `
    <div class="space-y-3">
      <div class="flex items-center gap-4">
        <div sc-rating [value]="4.5" [readonly]="true" [allowHalf]="true">
          <div sc-rating-stars></div>
        </div>
        <span class="text-sm text-muted-foreground">4.5 stars</span>
      </div>
      <div class="flex items-center gap-4">
        <div sc-rating [value]="3" [readonly]="true">
          <div sc-rating-stars></div>
        </div>
        <span class="text-sm text-muted-foreground">3 stars</span>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadonlyRatingDemo {}
