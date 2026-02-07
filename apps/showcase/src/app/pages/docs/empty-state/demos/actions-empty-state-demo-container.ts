import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ActionsEmptyStateDemo } from './actions-empty-state-demo';

@Component({
  selector: 'app-actions-empty-state-demo-container',
  imports: [DemoContainer, ActionsEmptyStateDemo],
  template: `
    <app-demo-container title="With Actions" [code]="code">
      <app-actions-empty-state-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsEmptyStateDemoContainer {
  readonly code = `// Empty state with action buttons
// See source code for full implementation`;
}
