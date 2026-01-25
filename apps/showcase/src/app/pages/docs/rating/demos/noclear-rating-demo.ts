import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScRating, ScRatingStars } from '@semantic-components/ui';

@Component({
  selector: 'app-noclear-rating-demo',
  imports: [ScRating, ScRatingStars],
  template: `
    <div class="flex flex-col gap-2">
      <div sc-rating [(value)]="noClearRating" [allowClear]="false">
        <div sc-rating-stars></div>
      </div>
      <p class="text-sm text-muted-foreground">
        Click same star to verify it doesn't clear
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoclearRatingDemo {
  readonly noClearRating = signal(3);
}
