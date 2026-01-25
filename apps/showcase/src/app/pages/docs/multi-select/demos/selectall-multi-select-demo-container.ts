import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SelectallMultiSelectDemo } from './selectall-multi-select-demo';

@Component({
  selector: 'app-selectall-multi-select-demo-container',
  imports: [DemoContainer, SelectallMultiSelectDemo],
  template: `
    <app-demo-container title="Select All" [code]="code">
      <app-selectall-multi-select-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectallMultiSelectDemoContainer {
  readonly code = `// Multi-select with select all option
// See source code for full implementation`;
}
