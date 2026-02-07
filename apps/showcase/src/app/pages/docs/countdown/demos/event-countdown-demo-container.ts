import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { EventCountdownDemo } from './event-countdown-demo';

@Component({
  selector: 'app-event-countdown-demo-container',
  imports: [DemoContainer, EventCountdownDemo],
  template: `
    <app-demo-container title="Event" [code]="code">
      <app-event-countdown-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCountdownDemoContainer {
  readonly code = `// See event-countdown-demo.ts for full source`;
}
