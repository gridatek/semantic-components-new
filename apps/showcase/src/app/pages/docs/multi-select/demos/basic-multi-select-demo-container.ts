import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicMultiSelectDemo } from './basic-multi-select-demo';

@Component({
  selector: 'app-basic-multi-select-demo-container',
  imports: [DemoContainer, BasicMultiSelectDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-multi-select-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicMultiSelectDemoContainer {
  readonly code = `// Basic multi-select with chips display
// See source code for full implementation`;
}
