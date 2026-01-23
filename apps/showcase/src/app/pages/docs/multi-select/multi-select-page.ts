import { ChangeDetectionStrategy, Component } from '@angular/core';
import MultiSelectDemoContainer from './demos/multi-select-demo-container';

@Component({
  selector: 'app-multi-select-page',
  imports: [MultiSelectDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">MultiSelect</h1>
        <p class="text-muted-foreground">
          Select multiple options from a dropdown with chips, search, and
          select-all functionality.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-multi-select-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MultiSelectPage {}
