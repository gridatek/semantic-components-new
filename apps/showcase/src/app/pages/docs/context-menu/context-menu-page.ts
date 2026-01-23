import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScContextMenuDemoContainer } from './demos/context-menu-demo-container';

@Component({
  selector: 'app-context-menu-page',
  imports: [ScContextMenuDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">ContextMenu</h1>
        <p class="text-muted-foreground">
          Displays a menu at the pointer position when triggered by a
          right-click.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-context-menu-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContextMenuPage {}
