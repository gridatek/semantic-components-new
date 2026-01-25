import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScThemeService, ScThemeToggle } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-theme-toggle-demo',
  imports: [ScThemeToggle],
  template: `
    <div class="flex items-center gap-4">
      <button sc-theme-toggle></button>
      <span class="text-sm text-muted-foreground">
        Current: {{ themeService.resolvedTheme() }}
      </span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicThemeToggleDemo {
  protected readonly themeService = inject(ScThemeService);
}
