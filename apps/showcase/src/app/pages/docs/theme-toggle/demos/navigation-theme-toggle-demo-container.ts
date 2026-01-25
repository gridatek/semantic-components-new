import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { NavigationThemeToggleDemo } from './navigation-theme-toggle-demo';

@Component({
  selector: 'app-navigation-theme-toggle-demo-container',
  imports: [DemoContainer, NavigationThemeToggleDemo],
  template: `
    <app-demo-container
      title="In Navigation Context"
      demoUrl="/demos/theme-toggle/navigation-theme-toggle-demo"
      [code]="code"
    >
      <app-navigation-theme-toggle-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationThemeToggleDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScThemeToggle } from '@semantic-components/ui';

@Component({
  selector: 'app-navigation-theme-toggle-demo',
  imports: [ScThemeToggle],
  template: \`
    <div class="flex items-center justify-between rounded-lg border p-4">
      <div class="space-y-0.5">
        <span class="text-base font-medium">Appearance</span>
        <p class="text-sm text-muted-foreground">
          Customize how the app looks on your device
        </p>
      </div>
      <button sc-theme-toggle variant="outline"></button>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationThemeToggleDemo {}`;
}
