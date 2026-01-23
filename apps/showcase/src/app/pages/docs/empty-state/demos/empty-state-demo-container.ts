import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { EmptyStateDemoComponent } from './empty-state-demo';

@Component({
  selector: 'app-empty-state-demo-container',
  imports: [DemoContainer, EmptyStateDemoComponent],
  template: `
    <app-demo-container title="EmptyState" [code]="code">
      <sc-empty-state-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EmptyStateDemoContainer {
  readonly code = '';
}
