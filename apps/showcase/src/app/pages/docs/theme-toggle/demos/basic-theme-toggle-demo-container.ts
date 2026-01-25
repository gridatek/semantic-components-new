import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicThemeToggleDemo } from './basic-theme-toggle-demo';

@Component({
  selector: 'app-basic-theme-toggle-demo-container',
  imports: [DemoContainer, BasicThemeToggleDemo],
  template: `
    <app-demo-container
      title="Basic"
      demoUrl="/demos/theme-toggle/basic-theme-toggle-demo"
      [code]="code"
    >
      <app-basic-theme-toggle-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicThemeToggleDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScThemeService, ScThemeToggle } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-theme-toggle-demo',
  imports: [ScThemeToggle],
  template: \`
    <div class="flex items-center gap-4">
      <button sc-theme-toggle></button>
      <span class="text-sm text-muted-foreground">
        Current: {{ themeService.resolvedTheme() }}
      </span>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicThemeToggleDemo {
  protected readonly themeService = inject(ScThemeService);
}`;
}
