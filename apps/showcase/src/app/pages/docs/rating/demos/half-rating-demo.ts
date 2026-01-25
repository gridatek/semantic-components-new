import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScRating, ScRatingStars } from '@semantic-components/ui';

@Component({
  selector: 'app-half-rating-demo',
  imports: [ScRating, ScRatingStars],
  template: `
    <div class="flex flex-col gap-2">
      <div sc-rating [(value)]="halfRating" [allowHalf]="true">
        <div sc-rating-stars size="lg"></div>
      </div>
      <p class="text-sm text-muted-foreground">Rating: {{ halfRating() }} / 5</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HalfRatingDemo {
  readonly halfRating = signal(3.5);
}
