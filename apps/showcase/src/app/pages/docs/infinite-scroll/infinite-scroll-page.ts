import { ChangeDetectionStrategy, Component } from '@angular/core';
import InfiniteScrollDemoContainer from './demos/infinite-scroll-demo-container';

@Component({
  selector: 'app-infinite-scroll-page',
  imports: [InfiniteScrollDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">InfiniteScroll</h1>
        <p class="text-muted-foreground">
          Automatically load more content as the user scrolls to the bottom.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-infinite-scroll-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InfiniteScrollPage {}
