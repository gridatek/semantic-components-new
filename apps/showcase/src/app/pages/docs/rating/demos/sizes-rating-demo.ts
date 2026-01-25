import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScRating, ScRatingStars } from '@semantic-components/ui';

@Component({
  selector: 'app-sizes-rating-demo',
  imports: [ScRating, ScRatingStars],
  template: `
    <div class="space-y-3">
      <div class="flex items-center gap-4">
        <span class="w-20 text-sm text-muted-foreground">Small</span>
        <div sc-rating [(value)]="sizeSmall">
          <div sc-rating-stars size="sm"></div>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <span class="w-20 text-sm text-muted-foreground">Default</span>
        <div sc-rating [(value)]="sizeDefault">
          <div sc-rating-stars size="default"></div>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <span class="w-20 text-sm text-muted-foreground">Large</span>
        <div sc-rating [(value)]="sizeLarge">
          <div sc-rating-stars size="lg"></div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizesRatingDemo {
  readonly sizeSmall = signal(4);
  readonly sizeDefault = signal(4);
  readonly sizeLarge = signal(4);
}
