import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScThemeSelect } from '@semantic-components/ui';

@Component({
  selector: 'app-settings-panel-theme-toggle-demo',
  imports: [ScThemeSelect],
  template: `
    <div class="w-[400px] rounded-lg border p-4">
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="space-y-0.5">
            <label class="text-sm font-medium">Theme</label>
            <p class="text-sm text-muted-foreground">
              Select your preferred theme
            </p>
          </div>
          <sc-theme-select class="w-32"></sc-theme-select>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPanelThemeToggleDemo {}
