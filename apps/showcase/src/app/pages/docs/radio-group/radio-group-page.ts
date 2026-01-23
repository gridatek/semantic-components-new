import { ChangeDetectionStrategy, Component } from '@angular/core';
import RadioGroupDemoContainer from './demos/radio-group-demo-container';

@Component({
  selector: 'app-radio-group-page',
  imports: [RadioGroupDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">RadioGroup</h1>
        <p class="text-muted-foreground">
          A set of checkable buttons where only one button can be checked at a
          time.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-radio-group-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RadioGroupPage {}
