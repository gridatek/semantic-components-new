import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EmptyStateDemoComponent } from './demos/empty-state-demo-container';

@Component({
  selector: 'app-empty-state-page',
  imports: [EmptyStateDemoComponent],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">EmptyState</h1>
        <p class="text-muted-foreground">A empty state component.</p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-empty-state-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EmptyStatePage {}
