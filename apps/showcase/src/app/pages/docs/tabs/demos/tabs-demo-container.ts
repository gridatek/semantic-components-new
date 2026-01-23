import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScTabsDemo } from './tabs-demo';

@Component({
  selector: 'app-tabs-demo-container',
  imports: [DemoContainer, ScTabsDemo],
  template: `
    <app-demo-container title="Tabs" [code]="code">
      <app-sc-tabs-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TabsDemoContainer {
  readonly code = '';
}
