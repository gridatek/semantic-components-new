import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScPopoverDemo } from './popover-demo';

@Component({
  selector: 'app-popover-demo-container',
  imports: [DemoContainer, ScPopoverDemo],
  template: `
    <app-demo-container title="Popover" [code]="code">
      <app-sc-popover-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PopoverDemoContainer {
  readonly code = '';
}
