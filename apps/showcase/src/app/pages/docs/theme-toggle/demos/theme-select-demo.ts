import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScThemeField, ScThemeSelect } from '@semantic-components/ui';

@Component({
  selector: 'app-theme-select-demo',
  imports: [ScThemeField, ScThemeSelect],
  template: `
    <div class="space-y-4">
      <div sc-theme-field class="max-w-xs">
        <label for="theme-select" class="text-sm font-medium">Theme</label>
        <select sc-theme-select id="theme-select">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>
      <p class="text-sm text-muted-foreground">
        Select includes system preference option
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSelectDemo {}
