import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScBadgeDemo } from './badge-demo';

@Component({
  selector: 'app-badge-demo-container',
  imports: [DemoContainer, ScBadgeDemo],
  template: `
    <app-demo-container title="Badge" [code]="code">
      <app-sc-badge-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BadgeDemoContainer {
  readonly code = '';
}
