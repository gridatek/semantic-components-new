import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScThemeToggle } from '@semantic-components/ui';

@Component({
  selector: 'app-variants-theme-toggle-demo',
  imports: [ScThemeToggle],
  template: `
    <div class="flex items-center gap-4">
      <div class="flex flex-col items-center gap-2">
        <button sc-theme-toggle variant="default"></button>
        <span class="text-xs text-muted-foreground">Default</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <button sc-theme-toggle variant="outline"></button>
        <span class="text-xs text-muted-foreground">Outline</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <button sc-theme-toggle variant="ghost"></button>
        <span class="text-xs text-muted-foreground">Ghost</span>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantsThemeToggleDemo {}
