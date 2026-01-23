import { ChangeDetectionStrategy, Component } from '@angular/core';
import TimezoneDemoContainer from './demos/timezone-demo-container';

@Component({
  selector: 'app-timezone-page',
  imports: [TimezoneDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Timezone</h1>
        <p class="text-muted-foreground">
          A component for selecting and displaying timezones. Supports
          persisting user preferences and formatting dates/times in the selected
          timezone.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-timezone-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TimezonePage {}
