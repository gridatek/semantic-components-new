import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DisabledMultiSelectDemo } from './disabled-multi-select-demo';

@Component({
  selector: 'app-disabled-multi-select-demo-container',
  imports: [DemoContainer, DisabledMultiSelectDemo],
  template: `
    <app-demo-container title="Disabled" [code]="code">
      <app-disabled-multi-select-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledMultiSelectDemoContainer {
  readonly code = `// Disabled multi-select state
// See source code for full implementation`;
}
