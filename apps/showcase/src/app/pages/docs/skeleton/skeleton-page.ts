import { ChangeDetectionStrategy, Component } from '@angular/core';
import SkeletonDemoContainer from './demos/skeleton-demo-container';

@Component({
  selector: 'app-skeleton-page',
  imports: [SkeletonDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Skeleton</h1>
        <p class="text-muted-foreground">
          Use to show a placeholder while content is loading.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-skeleton-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SkeletonPage {}
