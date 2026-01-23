import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScThemeToggleDemo } from './theme-toggle-demo';

@Component({
  selector: 'app-theme-toggle-demo-container',
  imports: [DemoContainer, ScThemeToggleDemo],
  template: `
    <app-demo-container title="ThemeToggle" [code]="code">
      <app-sc-theme-toggle-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ThemeToggleDemoContainer {
  readonly code = '';
}
