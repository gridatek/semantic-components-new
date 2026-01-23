import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { OrgChartDemoComponent } from './org-chart-demo';

@Component({
  selector: 'app-org-chart-demo-container',
  imports: [DemoContainer, OrgChartDemoComponent],
  template: `
    <app-demo-container title="OrgChart" [code]="code">
      <app-org-chart-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrgChartDemoContainer {
  readonly code = '';
}
