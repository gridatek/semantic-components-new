import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScChartDemoContainer } from './demos/chart-demo-container';

@Component({
  selector: 'app-chart-page',
  imports: [ScChartDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Chart</h1>
        <p class="text-muted-foreground">
          SVG-based chart components for data visualization.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-chart-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChartPage {}
