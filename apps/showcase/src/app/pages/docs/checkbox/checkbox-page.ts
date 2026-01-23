import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCheckboxDemoContainer } from './demos/checkbox-demo-container';

@Component({
  selector: 'app-checkbox-page',
  imports: [ScCheckboxDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Checkbox</h1>
        <p class="text-muted-foreground">
          A control that allows the user to toggle between checked and not
          checked.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-checkbox-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckboxPage {}
