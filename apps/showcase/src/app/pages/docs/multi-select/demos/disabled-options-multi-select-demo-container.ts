import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DisabledOptionsMultiSelectDemo } from './disabled-options-multi-select-demo';

@Component({
  selector: 'app-disabled-options-multi-select-demo-container',
  imports: [DemoContainer, DisabledOptionsMultiSelectDemo],
  template: `
    <app-demo-container title="Disabled Options" [code]="code">
      <app-disabled-options-multi-select-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledOptionsMultiSelectDemoContainer {
  readonly code = `// Multi-select with some options disabled
// See source code for full implementation`;
}
