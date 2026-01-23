import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScTooltipDemo } from './tooltip-demo';

@Component({
  selector: 'app-tooltip-demo-container',
  imports: [DemoContainer, ScTooltipDemo],
  template: `
    <app-demo-container title="Tooltip" [code]="code">
      <app-sc-tooltip-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TooltipDemoContainer {
  readonly code = '';
}
