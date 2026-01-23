import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTabsDemoContainer } from './demos/tabs-demo-container';

@Component({
  selector: 'app-tabs-page',
  imports: [ScTabsDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Tabs</h1>
        <p class="text-muted-foreground">
          A set of layered sections of content, known as tab panels, displayed
          one at a time.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-tabs-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TabsPage {}
