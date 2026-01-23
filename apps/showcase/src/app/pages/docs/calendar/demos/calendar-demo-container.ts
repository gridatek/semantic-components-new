import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScCalendarDemo } from './calendar-demo';

@Component({
  selector: 'app-calendar-demo-container',
  imports: [DemoContainer, ScCalendarDemo],
  template: `
    <app-demo-container title="Calendar" [code]="code">
      <app-sc-calendar-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalendarDemoContainer {
  readonly code = '';
}
