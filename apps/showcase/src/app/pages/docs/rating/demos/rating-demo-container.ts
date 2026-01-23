import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScRatingDemo } from './rating-demo';

@Component({
  selector: 'app-rating-demo-container',
  imports: [DemoContainer, ScRatingDemo],
  template: `
    <app-demo-container title="Rating" [code]="code">
      <app-rating-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRatingDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScRating, ScRatingItem, ScRatingStars } from '@semantic-components/ui';

@Component({
  selector: 'app-rating-demo',
  imports: [ScRating, ScRatingItem, ScRatingStars],
  template: \`
    <div class="space-y-8">
      <!-- Basic Rating -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Rating</h3>
        <div class="flex flex-col gap-2">
          <div sc-rating [(value)]="basicRating">
            <div sc-rating-stars></div>
          </div>
          <p class="text-sm text-muted-foreground">
            Rating: {{ basicRating() }} / 5
          </p>
        </div>
      </div>

      <!-- Different Sizes -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Sizes</h3>
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
      </div>

      <!-- Custom Colors -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Custom Colors</h3>
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
      </div>

      <!-- Half Stars -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Half Stars</h3>
        <div class="flex flex-col gap-2">
          <div sc-rating [(value)]="halfRating" [allowHalf]="true">
            <div sc-rating-stars size="lg"></div>
          </div>
          <p class="text-sm text-muted-foreground">
            Rating: {{ halfRating() }} / 5
          </p>
        </div>
      </div>

      <!-- Custom Max -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Custom Max (10 stars)</h3>
        <div class="flex flex-col gap-2">
          <div sc-rating [max]="10" [(value)]="maxRating">
            <div sc-rating-stars size="sm"></div>
          </div>
          <p class="text-sm text-muted-foreground">
            Rating: {{ maxRating() }} / 10
          </p>
        </div>
      </div>

      <!-- Readonly -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Readonly</h3>
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
      </div>

      <!-- Disabled -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Disabled</h3>
        <div sc-rating [value]="3" [disabled]="true">
          <div sc-rating-stars></div>
        </div>
      </div>

      <!-- No Clear -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">No Clear (cannot set to 0)</h3>
        <div class="flex flex-col gap-2">
          <div sc-rating [(value)]="noClearRating" [allowClear]="false">
            <div sc-rating-stars></div>
          </div>
          <p class="text-sm text-muted-foreground">
            Click same star to verify it doesn't clear
          </p>
        </div>
      </div>

      <!-- Custom Icons -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Custom Icons (Hearts)</h3>
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
          <p class="text-sm text-muted-foreground">
            Rating: {{ heartRating() }} / 5
          </p>
        </div>
      </div>

      <!-- Review Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Review Card Example</h3>
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
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRatingDemo {
  readonly basicRating = signal(3);
  readonly sizeSmall = signal(4);
  readonly sizeDefault = signal(4);
  readonly sizeLarge = signal(4);
  readonly colorYellow = signal(4);
  readonly colorRed = signal(4);
  readonly colorBlue = signal(4);
  readonly colorGreen = signal(4);
  readonly halfRating = signal(3.5);
  readonly maxRating = signal(7);
  readonly noClearRating = signal(3);
  readonly heartRating = signal(3);
}`;
}
