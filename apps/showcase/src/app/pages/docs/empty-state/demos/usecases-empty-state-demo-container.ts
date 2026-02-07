import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { UsecasesEmptyStateDemo } from './usecases-empty-state-demo';

@Component({
  selector: 'app-usecases-empty-state-demo-container',
  imports: [DemoContainer, UsecasesEmptyStateDemo],
  template: `
    <app-demo-container title="Common Use Cases" [code]="code">
      <app-usecases-empty-state-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsecasesEmptyStateDemoContainer {
  readonly code = `// Common use cases: notifications, cart
// See source code for full implementation`;
}
