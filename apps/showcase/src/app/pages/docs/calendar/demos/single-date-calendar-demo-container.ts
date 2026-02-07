import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SingleDateCalendarDemo } from './single-date-calendar-demo';

@Component({
  selector: 'app-single-date-calendar-demo-container',
  imports: [DemoContainer, SingleDateCalendarDemo],
  template: `
    <app-demo-container
      title="Single Date Selection"
      demoUrl="/demos/calendar/single-date-calendar-demo"
      [code]="code"
    >
      <app-single-date-calendar-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleDateCalendarDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-single-date-calendar-demo',
  imports: [ScCalendar],
  template: \`
    <div class="rounded-md border">
      <sc-calendar [(selected)]="selectedDate" />
    </div>
    @if (selectedDate()) {
      <p class="text-sm text-muted-foreground mt-4">
        Selected: {{ selectedDate()?.toLocaleDateString() }}
      </p>
    }
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleDateCalendarDemo {
  readonly selectedDate = signal<Date | undefined>(undefined);
}`;
}
