import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScRating, ScRatingStars } from '@semantic-components/ui';

@Component({
  selector: 'app-max-rating-demo',
  imports: [ScRating, ScRatingStars],
  template: `
    <div class="flex flex-col gap-2">
      <div sc-rating [max]="10" [(value)]="maxRating">
        <div sc-rating-stars size="sm"></div>
      </div>
      <p class="text-sm text-muted-foreground">Rating: {{ maxRating() }} / 10</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaxRatingDemo {
  readonly maxRating = signal(7);
}
