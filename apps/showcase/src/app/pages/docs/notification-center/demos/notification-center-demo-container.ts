import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { NotificationCenterDemoComponent } from './notification-center-demo';

@Component({
  selector: 'app-notification-center-demo-container',
  imports: [DemoContainer, NotificationCenterDemoComponent],
  template: `
    <app-demo-container title="NotificationCenter" [code]="code">
      <app-notification-center-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotificationCenterDemoContainer {
  readonly code = '';
}
