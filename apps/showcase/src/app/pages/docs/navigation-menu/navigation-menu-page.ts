import { ChangeDetectionStrategy, Component } from '@angular/core';
import NavigationMenuDemoContainer from './demos/navigation-menu-demo-container';

@Component({
  selector: 'app-navigation-menu-page',
  imports: [NavigationMenuDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">NavigationMenu</h1>
        <p class="text-muted-foreground">
          A collection of links for navigating websites with hover-activated
          dropdowns.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-navigation-menu-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NavigationMenuPage {}
