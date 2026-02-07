import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicEmptyStateDemo } from './basic-empty-state-demo';

@Component({
  selector: 'app-basic-empty-state-demo-container',
  imports: [DemoContainer, BasicEmptyStateDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-empty-state-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicEmptyStateDemoContainer {
  readonly code = `// Basic empty state with title, description and icon
// See source code for full implementation`;
}
