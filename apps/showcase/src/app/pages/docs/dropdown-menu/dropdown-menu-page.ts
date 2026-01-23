import { ChangeDetectionStrategy, Component } from '@angular/core';
import DropdownMenuDemoContainer from './demos/dropdown-menu-demo-container';

@Component({
  selector: 'app-dropdown-menu-page',
  imports: [DropdownMenuDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">DropdownMenu</h1>
        <p class="text-muted-foreground">
          Displays a menu to the user — such as a set of actions or functions —
          triggered by a button.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-dropdown-menu-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DropdownMenuPage {}
