import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScDrawerDemoContainer } from './demos/drawer-demo-container';

@Component({
  selector: 'app-drawer-page',
  imports: [ScDrawerDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Drawer</h1>
        <p class="text-muted-foreground">
          A mobile-friendly slide-in panel that can be opened from any edge of
          the screen. Ideal for navigation menus, forms, and quick actions on
          touch devices.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-drawer-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DrawerPage {}
