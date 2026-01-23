import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DockDemoComponent } from './demos/dock-demo-container';

@Component({
  selector: 'app-dock-page',
  imports: [DockDemoComponent],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Dock</h1>
        <p class="text-muted-foreground">A dock component.</p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-dock-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DockPage {}
