import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisabledToggleGroupDemoContainer } from './demos/disabled-toggle-group-demo-container';
import { MultipleToggleGroupDemoContainer } from './demos/multiple-toggle-group-demo-container';
import { OutlineToggleGroupDemoContainer } from './demos/outline-toggle-group-demo-container';
import { SingleToggleGroupDemoContainer } from './demos/single-toggle-group-demo-container';
import { SizesToggleGroupDemoContainer } from './demos/sizes-toggle-group-demo-container';

@Component({
  selector: 'app-toggle-group-page',
  imports: [
    SingleToggleGroupDemoContainer,
    MultipleToggleGroupDemoContainer,
    OutlineToggleGroupDemoContainer,
    SizesToggleGroupDemoContainer,
    DisabledToggleGroupDemoContainer,
  ],
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
        <app-single-toggle-group-demo-container />
        <app-multiple-toggle-group-demo-container />
        <app-outline-toggle-group-demo-container />
        <app-sizes-toggle-group-demo-container />
        <app-disabled-toggle-group-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToggleGroupPage {}
