import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ThemeSelectDemo } from './theme-select-demo';

@Component({
  selector: 'app-theme-select-demo-container',
  imports: [DemoContainer, ThemeSelectDemo],
  template: `
    <app-demo-container
      title="Theme Select"
      demoUrl="/demos/theme-toggle/theme-select-demo"
      [code]="code"
    >
      <app-theme-select-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSelectDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScThemeSelect } from '@semantic-components/ui';

@Component({
  selector: 'app-theme-select-demo',
  imports: [ScThemeSelect],
  template: \`
    <div class="space-y-4">
      <div class="max-w-xs">
        <sc-theme-select></sc-theme-select>
      </div>
      <p class="text-sm text-muted-foreground">
        Select includes system preference option
      </p>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSelectDemo {}`;
}
