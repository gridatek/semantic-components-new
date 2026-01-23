import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCollapsibleDemoContainer } from './demos/collapsible-demo-container';

@Component({
  selector: 'app-collapsible-page',
  imports: [ScCollapsibleDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Collapsible</h1>
        <p class="text-muted-foreground">
          An interactive component which expands/collapses a panel.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-collapsible-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CollapsiblePage {}
