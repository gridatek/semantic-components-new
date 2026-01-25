import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScThemeSelect } from '@semantic-components/ui';

@Component({
  selector: 'app-theme-select-demo',
  imports: [ScThemeSelect],
  template: `
    <div class="space-y-4">
      <div class="max-w-xs">
        <sc-theme-select></sc-theme-select>
      </div>
      <p class="text-sm text-muted-foreground">
        Select includes system preference option
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSelectDemo {}
