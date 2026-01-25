import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicToggleDemoContainer } from './demos/basic-toggle-demo-container';
import { DisabledToggleDemoContainer } from './demos/disabled-toggle-demo-container';
import { OutlineToggleDemoContainer } from './demos/outline-toggle-demo-container';
import { SizesToggleDemoContainer } from './demos/sizes-toggle-demo-container';
import { ToolbarToggleDemoContainer } from './demos/toolbar-toggle-demo-container';
import { WithTextToggleDemoContainer } from './demos/with-text-toggle-demo-container';

@Component({
  selector: 'app-toggle-page',
  imports: [
    BasicToggleDemoContainer,
    OutlineToggleDemoContainer,
    WithTextToggleDemoContainer,
    SizesToggleDemoContainer,
    DisabledToggleDemoContainer,
    ToolbarToggleDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Toggle</h1>
        <p class="text-muted-foreground">
          A two-state button that can be either on or off.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-toggle-demo-container />
        <app-outline-toggle-demo-container />
        <app-with-text-toggle-demo-container />
        <app-sizes-toggle-demo-container />
        <app-disabled-toggle-demo-container />
        <app-toolbar-toggle-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TogglePage {}
