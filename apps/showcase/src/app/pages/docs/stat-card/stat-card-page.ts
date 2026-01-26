import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicStatCardDemoContainer } from './demos/basic-stat-card-demo-container';
import { SizesStatCardDemoContainer } from './demos/sizes-stat-card-demo-container';
import { VariantsStatCardDemoContainer } from './demos/variants-stat-card-demo-container';
import { DescriptionStatCardDemoContainer } from './demos/description-stat-card-demo-container';

@Component({
  selector: 'app-stat-card-page',
  imports: [
    BasicStatCardDemoContainer,
    SizesStatCardDemoContainer,
    VariantsStatCardDemoContainer,
    DescriptionStatCardDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">StatCard</h1>
        <p class="text-muted-foreground">A stat card component.</p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-stat-card-demo-container />
        <app-sizes-stat-card-demo-container />
        <app-variants-stat-card-demo-container />
        <app-description-stat-card-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StatCardPage {}
