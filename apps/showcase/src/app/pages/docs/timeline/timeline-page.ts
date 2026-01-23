import { ChangeDetectionStrategy, Component } from '@angular/core';
import TimelineDemoContainer from './demos/timeline-demo-container';

@Component({
  selector: 'app-timeline-page',
  imports: [TimelineDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Timeline</h1>
        <p class="text-muted-foreground">
          Display a sequence of events or activities in chronological order.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-timeline-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TimelinePage {}
