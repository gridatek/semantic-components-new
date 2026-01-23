import { ChangeDetectionStrategy, Component } from '@angular/core';
import ScrollAreaDemoContainer from './demos/scroll-area-demo-container';

@Component({
  selector: 'app-scroll-area-page',
  imports: [ScrollAreaDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">ScrollArea</h1>
        <p class="text-muted-foreground">
          Augments native scroll functionality for custom, cross-browser styling
          with a custom scrollbar.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-scroll-area-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ScrollAreaPage {}
