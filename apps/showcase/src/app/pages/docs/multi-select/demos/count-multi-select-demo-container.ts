import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CountMultiSelectDemo } from './count-multi-select-demo';

@Component({
  selector: 'app-count-multi-select-demo-container',
  imports: [DemoContainer, CountMultiSelectDemo],
  template: `
    <app-demo-container title="Count Display" [code]="code">
      <app-count-multi-select-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountMultiSelectDemoContainer {
  readonly code = `// Multi-select showing count instead of chips
// See source code for full implementation`;
}
