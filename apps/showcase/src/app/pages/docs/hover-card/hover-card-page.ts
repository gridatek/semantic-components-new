import { ChangeDetectionStrategy, Component } from '@angular/core';
import HoverCardDemoContainer from './demos/hover-card-demo-container';

@Component({
  selector: 'app-hover-card-page',
  imports: [HoverCardDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">HoverCard</h1>
        <p class="text-muted-foreground">
          For sighted users to preview content available behind a link.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-hover-card-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HoverCardPage {}
