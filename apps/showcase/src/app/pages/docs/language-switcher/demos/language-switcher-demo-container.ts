import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScLanguageSwitcherDemo } from './language-switcher-demo';

@Component({
  selector: 'app-language-switcher-demo-container',
  imports: [DemoContainer, ScLanguageSwitcherDemo],
  template: `
    <app-demo-container title="LanguageSwitcher" [code]="code">
      <app-sc-language-switcher-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LanguageSwitcherDemoContainer {
  readonly code = '';
}
