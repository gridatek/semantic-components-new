import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScProgressDemoContainer } from './demos/progress-demo-container';

@Component({
  selector: 'app-progress-page',
  imports: [ScProgressDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Progress</h1>
        <p class="text-muted-foreground">
          Displays an indicator showing the completion progress of a task,
          typically displayed as a progress bar.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-progress-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProgressPage {}
