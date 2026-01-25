import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScRating, ScRatingStars } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-rating-demo',
  imports: [ScRating, ScRatingStars],
  template: `
    <div class="flex flex-col gap-2">
      <div sc-rating [(value)]="basicRating">
        <div sc-rating-stars></div>
      </div>
      <p class="text-sm text-muted-foreground">Rating: {{ basicRating() }} / 5</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicRatingDemo {
  readonly basicRating = signal(3);
}
