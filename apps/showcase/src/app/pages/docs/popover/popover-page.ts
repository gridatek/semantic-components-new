import { ChangeDetectionStrategy, Component } from '@angular/core';
import PopoverDemoContainer from './demos/popover-demo-container';

@Component({
  selector: 'app-popover-page',
  imports: [PopoverDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Popover</h1>
        <p class="text-muted-foreground">
          Displays rich content in a portal, triggered by a button.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-popover-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PopoverPage {}
