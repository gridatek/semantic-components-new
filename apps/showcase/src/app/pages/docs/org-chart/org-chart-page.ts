import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OrgChartDemoComponent } from './demos/org-chart-demo-container';

@Component({
  selector: 'app-org-chart-page',
  imports: [OrgChartDemoComponent],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">OrgChart</h1>
        <p class="text-muted-foreground">
          A hierarchical organization chart for visualizing company structures.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-org-chart-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrgChartPage {}
