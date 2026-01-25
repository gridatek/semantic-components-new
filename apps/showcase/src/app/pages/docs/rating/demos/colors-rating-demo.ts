import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScRating, ScRatingStars } from '@semantic-components/ui';

@Component({
  selector: 'app-colors-rating-demo',
  imports: [ScRating, ScRatingStars],
  template: `
    <div class="space-y-3">
      <div class="flex items-center gap-4">
        <span class="w-20 text-sm text-muted-foreground">Yellow</span>
        <div sc-rating [(value)]="colorYellow">
          <div sc-rating-stars color="text-yellow-400"></div>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <span class="w-20 text-sm text-muted-foreground">Red</span>
        <div sc-rating [(value)]="colorRed">
          <div sc-rating-stars color="text-red-500"></div>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <span class="w-20 text-sm text-muted-foreground">Blue</span>
        <div sc-rating [(value)]="colorBlue">
          <div sc-rating-stars color="text-blue-500"></div>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <span class="w-20 text-sm text-muted-foreground">Green</span>
        <div sc-rating [(value)]="colorGreen">
          <div sc-rating-stars color="text-green-500"></div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsRatingDemo {
  readonly colorYellow = signal(4);
  readonly colorRed = signal(4);
  readonly colorBlue = signal(4);
  readonly colorGreen = signal(4);
}
