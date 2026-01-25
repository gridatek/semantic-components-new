import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SizesThemeToggleDemo } from './sizes-theme-toggle-demo';

@Component({
  selector: 'app-sizes-theme-toggle-demo-container',
  imports: [DemoContainer, SizesThemeToggleDemo],
  template: `
    <app-demo-container
      title="Sizes"
      demoUrl="/demos/theme-toggle/sizes-theme-toggle-demo"
      [code]="code"
    >
      <app-sizes-theme-toggle-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizesThemeToggleDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScThemeToggle } from '@semantic-components/ui';

@Component({
  selector: 'app-sizes-theme-toggle-demo',
  imports: [ScThemeToggle],
  template: \`
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
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizesThemeToggleDemo {}`;
}
