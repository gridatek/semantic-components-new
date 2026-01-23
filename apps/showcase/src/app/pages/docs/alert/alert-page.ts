import { ChangeDetectionStrategy, Component } from '@angular/core';
import AlertDemoContainer from './demos/alert-demo-container';

@Component({
  selector: 'app-alert-page',
  imports: [AlertDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Alert</h1>
        <p class="text-muted-foreground">
          Displays a callout for important information.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-alert-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AlertPage {}
