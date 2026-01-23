import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TourGuideDemoComponent } from './demos/tour-guide-demo-container';

@Component({
  selector: 'app-tour-guide-page',
  imports: [TourGuideDemoComponent],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">TourGuide</h1>
        <p class="text-muted-foreground">
          Step-by-step UI tour component for onboarding users and highlighting
          features.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-tour-guide-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TourGuidePage {}
