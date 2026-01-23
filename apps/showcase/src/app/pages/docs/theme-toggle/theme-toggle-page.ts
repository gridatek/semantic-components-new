import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScThemeToggleDemoContainer } from './demos/theme-toggle-demo-container';

@Component({
  selector: 'app-theme-toggle-page',
  imports: [ScThemeToggleDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">ThemeToggle</h1>
        <p class="text-muted-foreground">
          A component for switching between light and dark themes with system
          preference support.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-theme-toggle-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ThemeTogglePage {}
