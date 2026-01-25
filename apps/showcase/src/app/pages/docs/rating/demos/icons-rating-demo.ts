import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScRating, ScRatingItem } from '@semantic-components/ui';

@Component({
  selector: 'app-icons-rating-demo',
  imports: [ScRating, ScRatingItem],
  template: `
    <div class="flex flex-col gap-2">
      <div sc-rating [(value)]="heartRating">
        @for (i of [1, 2, 3, 4, 5]; track i) {
          <span sc-rating-item [value]="i">
            <svg
              empty
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-6"
            >
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              />
            </svg>
            <svg
              filled
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 text-red-500"
            >
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              />
            </svg>
          </span>
        }
      </div>
      <p class="text-sm text-muted-foreground">Rating: {{ heartRating() }} / 5</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsRatingDemo {
  readonly heartRating = signal(3);
}
