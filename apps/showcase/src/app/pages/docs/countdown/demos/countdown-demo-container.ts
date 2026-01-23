import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScCountdownDemo } from './countdown-demo';

@Component({
  selector: 'app-countdown-demo-container',
  imports: [DemoContainer, ScCountdownDemo],
  template: `
    <app-demo-container title="Countdown" [code]="code">
      <sc-countdown-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CountdownDemoContainer {
  readonly code = '';
}
