import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MinMaxCalendarDemo } from './min-max-calendar-demo';

@Component({
  selector: 'app-min-max-calendar-demo-container',
  imports: [DemoContainer, MinMaxCalendarDemo],
  template: `
    <app-demo-container
      title="With Min/Max Date"
      description="Only dates within the next 30 days can be selected."
      demoUrl="/demos/calendar/min-max-calendar-demo"
      [code]="code"
    >
      <app-min-max-calendar-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinMaxCalendarDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-min-max-calendar-demo',
  imports: [ScCalendar],
  template: \`
    <div class="rounded-md border">
      <sc-calendar
        [(selected)]="selectedDate"
        [minDate]="minDate"
        [maxDate]="maxDate"
      />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinMaxCalendarDemo {
  readonly selectedDate = signal<Date | undefined>(undefined);
  readonly minDate = new Date();
  readonly maxDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
}`;
}
