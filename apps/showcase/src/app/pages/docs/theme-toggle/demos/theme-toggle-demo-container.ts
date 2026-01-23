import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScThemeToggleDemo } from './theme-toggle-demo';

@Component({
  selector: 'app-theme-toggle-demo-container',
  imports: [DemoContainer, ScThemeToggleDemo],
  template: `
    <app-demo-container title="Theme" [code]="code">
      <app-sc-theme-toggle-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScThemeToggleDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ScThemeSelect,
  ScThemeService,
  ScThemeToggle,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-theme-toggle-demo',
  imports: [ScThemeToggle, ScThemeSelect],
  template: \`
    <div class="space-y-8">
      <!-- Basic Toggle -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Toggle</h3>
        <div class="flex items-center gap-4">
          <button sc-theme-toggle></button>
          <span class="text-sm text-muted-foreground">
            Current: {{ themeService.resolvedTheme() }}
          </span>
        </div>
      </div>

      <!-- Variants -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Variants</h3>
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
      </div>

      <!-- Sizes -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Sizes</h3>
        <div class="flex items-center gap-4">
          <div class="flex flex-col items-center gap-2">
            <button sc-theme-toggle variant="outline" size="sm"></button>
            <span class="text-xs text-muted-foreground">Small</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <button sc-theme-toggle variant="outline" size="default"></button>
            <span class="text-xs text-muted-foreground">Default</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <button sc-theme-toggle variant="outline" size="lg"></button>
            <span class="text-xs text-muted-foreground">Large</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <button sc-theme-toggle variant="outline" size="icon"></button>
            <span class="text-xs text-muted-foreground">Icon</span>
          </div>
        </div>
      </div>

      <!-- Theme Select -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Theme Select</h3>
        <div class="max-w-xs">
          <sc-theme-select></sc-theme-select>
        </div>
        <p class="text-sm text-muted-foreground">
          Select includes system preference option
        </p>
      </div>

      <!-- In Context -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">In Navigation Context</h3>
        <div class="flex items-center justify-between rounded-lg border p-4">
          <div class="space-y-0.5">
            <span class="text-base font-medium">Appearance</span>
            <p class="text-sm text-muted-foreground">
              Customize how the app looks on your device
            </p>
          </div>
          <button sc-theme-toggle variant="outline"></button>
        </div>
      </div>

      <!-- Settings Panel -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Settings Panel</h3>
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
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScThemeToggleDemo {
  protected readonly themeService = inject(ScThemeService);
}`;
}
