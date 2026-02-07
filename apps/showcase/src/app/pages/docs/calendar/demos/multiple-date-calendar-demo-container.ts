import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MultipleDateCalendarDemo } from './multiple-date-calendar-demo';

@Component({
  selector: 'app-multiple-date-calendar-demo-container',
  imports: [DemoContainer, MultipleDateCalendarDemo],
  template: `
    <app-demo-container
      title="Multiple Date Selection"
      demoUrl="/demos/calendar/multiple-date-calendar-demo"
      [code]="code"
    >
      <app-multiple-date-calendar-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleDateCalendarDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-multiple-date-calendar-demo',
  imports: [ScCalendar],
  template: \`
    <div class="rounded-md border">
      <sc-calendar mode="multiple" [(selectedDates)]="selectedDates" />
    </div>
    @if (selectedDates().length > 0) {
      <p class="text-sm text-muted-foreground mt-4">
        Selected: {{ formatMultipleDates() }}
      </p>
    }
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleDateCalendarDemo {
  readonly selectedDates = signal<Date[]>([]);

  formatMultipleDates(): string {
    return this.selectedDates()
      .map((d) => d.toLocaleDateString())
      .join(', ');
  }
}`;
}
