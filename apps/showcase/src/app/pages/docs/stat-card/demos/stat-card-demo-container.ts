import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { StatCardDemoComponent } from './stat-card-demo';

@Component({
  selector: 'app-stat-card-demo-container',
  imports: [DemoContainer, StatCardDemoComponent],
  template: `
    <app-demo-container title="StatCard" [code]="code">
      <sc-stat-card-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StatCardDemoContainer {
  readonly code = '';
}
