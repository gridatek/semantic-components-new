import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSidebarDemoContainer } from './demos/sidebar-demo-container';

@Component({
  selector: 'app-sidebar-page',
  imports: [ScSidebarDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Sidebar</h1>
        <p class="text-muted-foreground">
          A composable, themeable and customizable sidebar component.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-sidebar-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SidebarPage {}
