import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { NosearchMultiSelectDemo } from './nosearch-multi-select-demo';

@Component({
  selector: 'app-nosearch-multi-select-demo-container',
  imports: [DemoContainer, NosearchMultiSelectDemo],
  template: `
    <app-demo-container title="Without Search" [code]="code">
      <app-nosearch-multi-select-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NosearchMultiSelectDemoContainer {
  readonly code = `// Multi-select without search input
// See source code for full implementation`;
}
