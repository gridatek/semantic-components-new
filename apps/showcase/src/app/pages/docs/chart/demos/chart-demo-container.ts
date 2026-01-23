import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScChartDemo } from './chart-demo';

@Component({
  selector: 'app-chart-demo-container',
  imports: [DemoContainer, ScChartDemo],
  template: `
    <app-demo-container title="Chart" [code]="code">
      <app-sc-chart-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChartDemoContainer {
  readonly code = '';
}
