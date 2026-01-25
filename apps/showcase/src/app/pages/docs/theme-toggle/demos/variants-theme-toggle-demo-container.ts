import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { VariantsThemeToggleDemo } from './variants-theme-toggle-demo';

@Component({
  selector: 'app-variants-theme-toggle-demo-container',
  imports: [DemoContainer, VariantsThemeToggleDemo],
  template: `
    <app-demo-container
      title="Variants"
      demoUrl="/demos/theme-toggle/variants-theme-toggle-demo"
      [code]="code"
    >
      <app-variants-theme-toggle-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantsThemeToggleDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScThemeToggle } from '@semantic-components/ui';

@Component({
  selector: 'app-variants-theme-toggle-demo',
  imports: [ScThemeToggle],
  template: \`
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
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantsThemeToggleDemo {}`;
}
