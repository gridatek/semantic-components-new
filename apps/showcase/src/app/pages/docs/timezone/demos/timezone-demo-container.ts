import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScTimezoneDemo } from './timezone-demo';

@Component({
  selector: 'app-timezone-demo-container',
  imports: [DemoContainer, ScTimezoneDemo],
  template: `
    <app-demo-container title="Timezone" [code]="code">
      <app-sc-timezone-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TimezoneDemoContainer {
  readonly code = '';
}
