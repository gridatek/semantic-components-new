import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicRatingDemoContainer } from './demos/basic-rating-demo-container';
import { SizesRatingDemoContainer } from './demos/sizes-rating-demo-container';
import { ColorsRatingDemoContainer } from './demos/colors-rating-demo-container';
import { HalfRatingDemoContainer } from './demos/half-rating-demo-container';
import { MaxRatingDemoContainer } from './demos/max-rating-demo-container';
import { ReadonlyRatingDemoContainer } from './demos/readonly-rating-demo-container';
import { DisabledRatingDemoContainer } from './demos/disabled-rating-demo-container';
import { NoclearRatingDemoContainer } from './demos/noclear-rating-demo-container';
import { IconsRatingDemoContainer } from './demos/icons-rating-demo-container';
import { ReviewRatingDemoContainer } from './demos/review-rating-demo-container';
import { TocHeading } from '../../../components/toc/toc-heading';

@Component({
  selector: 'app-rating-page',
  imports: [
    BasicRatingDemoContainer,
    SizesRatingDemoContainer,
    ColorsRatingDemoContainer,
    HalfRatingDemoContainer,
    MaxRatingDemoContainer,
    ReadonlyRatingDemoContainer,
    DisabledRatingDemoContainer,
    NoclearRatingDemoContainer,
    IconsRatingDemoContainer,
    ReviewRatingDemoContainer,
    TocHeading,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Rating</h1>
        <p class="text-muted-foreground">
          A star rating component for user feedback and reviews.
        </p>
      </div>

      <section class="space-y-8">
        <h2 toc class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-rating-demo-container />
        <app-sizes-rating-demo-container />
        <app-colors-rating-demo-container />
        <app-half-rating-demo-container />
        <app-max-rating-demo-container />
        <app-readonly-rating-demo-container />
        <app-disabled-rating-demo-container />
        <app-noclear-rating-demo-container />
        <app-icons-rating-demo-container />
        <app-review-rating-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RatingPage {}
