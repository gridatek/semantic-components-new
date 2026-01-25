import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScRating, ScRatingStars } from '@semantic-components/ui';

@Component({
  selector: 'app-review-rating-demo',
  imports: [ScRating, ScRatingStars],
  template: `
    <div class="max-w-sm rounded-lg border p-4">
      <div class="flex items-start gap-4">
        <div class="size-10 rounded-full bg-muted"></div>
        <div class="flex-1 space-y-1">
          <div class="flex items-center justify-between">
            <span class="font-medium">John Doe</span>
            <span class="text-xs text-muted-foreground">2 days ago</span>
          </div>
          <div sc-rating [value]="4" [readonly]="true">
            <div sc-rating-stars size="sm"></div>
          </div>
          <p class="text-sm text-muted-foreground">
            Great product! Really happy with my purchase. Would definitely
            recommend to others.
          </p>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewRatingDemo {}
