import { ChangeDetectionStrategy, Component } from '@angular/core';
import MenuDemoContainer from './demos/menu-demo-container';

@Component({
  selector: 'app-menu-page',
  imports: [MenuDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Menu</h1>
        <p class="text-muted-foreground">
          Displays a menu to the user — such as a set of actions or functions —
          triggered by a button.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-menu-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MenuPage {}
