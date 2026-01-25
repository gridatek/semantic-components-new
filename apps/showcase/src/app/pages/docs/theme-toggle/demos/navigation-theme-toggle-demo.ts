import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScThemeToggle } from '@semantic-components/ui';

@Component({
  selector: 'app-navigation-theme-toggle-demo',
  imports: [ScThemeToggle],
  template: `
    <div class="flex items-center justify-between rounded-lg border p-4">
      <div class="space-y-0.5">
        <span class="text-base font-medium">Appearance</span>
        <p class="text-sm text-muted-foreground">
          Customize how the app looks on your device
        </p>
      </div>
      <button sc-theme-toggle variant="outline"></button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationThemeToggleDemo {}
