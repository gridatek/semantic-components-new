import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScToggleGroupDemoContainer } from './demos/toggle-group-demo-container';

@Component({
  selector: 'app-toggle-group-page',
  imports: [ScToggleGroupDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">ToggleGroup</h1>
        <p class="text-muted-foreground">
          A set of two-state buttons that can be toggled on or off.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-toggle-group-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToggleGroupPage {}
