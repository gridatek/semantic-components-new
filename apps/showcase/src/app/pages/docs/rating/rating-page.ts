import { ChangeDetectionStrategy, Component } from '@angular/core';
import RatingDemoContainer from './demos/rating-demo-container';

@Component({
  selector: 'app-rating-page',
  imports: [RatingDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Rating</h1>
        <p class="text-muted-foreground">
          A star rating component for user feedback and reviews.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-rating-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RatingPage {}
