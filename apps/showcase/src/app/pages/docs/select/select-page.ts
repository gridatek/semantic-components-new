import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSelectDemoContainer } from './demos/select-demo-container';

@Component({
  selector: 'app-select-page',
  imports: [ScSelectDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Select</h1>
        <p class="text-muted-foreground">
          Displays a list of options for the user to pick from—triggered by a
          button.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-select-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SelectPage {}
