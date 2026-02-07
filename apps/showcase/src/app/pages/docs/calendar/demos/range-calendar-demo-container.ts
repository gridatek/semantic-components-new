import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { RangeCalendarDemo } from './range-calendar-demo';

@Component({
  selector: 'app-range-calendar-demo-container',
  imports: [DemoContainer, RangeCalendarDemo],
  template: `
    <app-demo-container
      title="Date Range Selection"
      demoUrl="/demos/calendar/range-calendar-demo"
      [code]="code"
    >
      <app-range-calendar-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RangeCalendarDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DateRange, ScCalendar } from '@semantic-components/ui';

@Component({
  selector: 'app-range-calendar-demo',
  imports: [ScCalendar],
  template: \`
    <div class="rounded-md border">
      <sc-calendar mode="range" [(selectedRange)]="selectedRange" />
    </div>
    @if (selectedRange().from) {
      <p class="text-sm text-muted-foreground mt-4">
        Range: {{ formatRange() }}
      </p>
    }
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RangeCalendarDemo {
  readonly selectedRange = signal<DateRange>({
    from: undefined,
    to: undefined,
  });

  formatRange(): string {
    const range = this.selectedRange();
    if (range.from && range.to) {
      return \\\`\\\${range.from.toLocaleDateString()} - \\\${range.to.toLocaleDateString()}\\\`;
    }
    if (range.from) {
      return \\\`\\\${range.from.toLocaleDateString()} - ...\\\`;
    }
    return '';
  }
}`;
}
