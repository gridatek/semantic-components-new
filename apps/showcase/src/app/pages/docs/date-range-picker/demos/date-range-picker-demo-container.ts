import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScDateRangePickerDemo } from './date-range-picker-demo';

@Component({
  selector: 'app-date-range-picker-demo-container',
  imports: [DemoContainer, ScDateRangePickerDemo],
  template: `
    <app-demo-container title="Date" [code]="code">
      <sc-date-range-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDateRangePickerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScDateRangePicker,
  DateRange,
  DateRangePreset,
  createDateRangePresets,
} from '@semantic-components/ui';

@Component({
  selector: 'sc-date-range-picker-demo',
  imports: [ScDateRangePicker],
  template: \`
    <div class="space-y-8">
      <!-- Basic Date Range Picker -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Basic Date Range Picker</h3>
        <p class="text-sm text-muted-foreground">
          Click to open the calendar and select a date range.
        </p>
        <div>
          <sc-date-range-picker
            [(value)]="basicRange"
            placeholder="Select date range"
            (apply)="onRangeApply($event)"
          />
        </div>
        <p class="text-sm text-muted-foreground">
          @if (basicRange().from && basicRange().to) {
            Selected: {{ basicRange().from?.toLocaleDateString() }} -
            {{ basicRange().to?.toLocaleDateString() }}
          } @else {
            No range selected
          }
        </p>
      </section>

      <!-- With Presets -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">With Presets</h3>
        <p class="text-sm text-muted-foreground">
          Quick selection presets for common date ranges.
        </p>
        <div>
          <sc-date-range-picker
            [(value)]="presetRange"
            [presets]="presets"
            placeholder="Select date range"
          />
        </div>
      </section>

      <!-- With Min/Max Dates -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">With Min/Max Dates</h3>
        <p class="text-sm text-muted-foreground">
          Restrict selection to dates within the last 30 days.
        </p>
        <div>
          <sc-date-range-picker
            [minDate]="minDate"
            [maxDate]="maxDate"
            placeholder="Select within last 30 days"
          />
        </div>
      </section>

      <!-- Different Date Formats -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Date Formats</h3>
        <p class="text-sm text-muted-foreground">
          Different display formats for the selected dates.
        </p>
        <div class="flex flex-col gap-3">
          <div>
            <span class="text-sm text-muted-foreground mr-2">Short:</span>
            <sc-date-range-picker
              dateFormat="short"
              placeholder="Short format"
            />
          </div>
          <div>
            <span class="text-sm text-muted-foreground mr-2">Long:</span>
            <sc-date-range-picker dateFormat="long" placeholder="Long format" />
          </div>
          <div>
            <span class="text-sm text-muted-foreground mr-2">ISO:</span>
            <sc-date-range-picker dateFormat="iso" placeholder="ISO format" />
          </div>
        </div>
      </section>

      <!-- Without Clear Button -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Without Clear Button</h3>
        <p class="text-sm text-muted-foreground">
          Hide the clear button from the trigger.
        </p>
        <div>
          <sc-date-range-picker
            [showClear]="false"
            placeholder="No clear button"
          />
        </div>
      </section>

      <!-- Disabled State -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Disabled</h3>
        <p class="text-sm text-muted-foreground">Disabled date range picker.</p>
        <div>
          <sc-date-range-picker [disabled]="true" placeholder="Disabled" />
        </div>
      </section>

      <!-- In a Form -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Analytics Filter Example</h3>
        <p class="text-sm text-muted-foreground">
          Date range picker used in an analytics filter form.
        </p>
        <div class="max-w-2xl rounded-lg border p-4 space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="font-medium">Analytics Dashboard</h4>
            <sc-date-range-picker
              [(value)]="analyticsRange"
              [presets]="presets"
              placeholder="Select period"
            />
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div class="rounded-lg bg-muted p-4">
              <div class="text-2xl font-bold">12,345</div>
              <div class="text-sm text-muted-foreground">Page Views</div>
            </div>
            <div class="rounded-lg bg-muted p-4">
              <div class="text-2xl font-bold">1,234</div>
              <div class="text-sm text-muted-foreground">Unique Visitors</div>
            </div>
            <div class="rounded-lg bg-muted p-4">
              <div class="text-2xl font-bold">5.2%</div>
              <div class="text-sm text-muted-foreground">Conversion Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDateRangePickerDemo {
  readonly basicRange = signal<DateRange>({ from: undefined, to: undefined });
  readonly presetRange = signal<DateRange>({ from: undefined, to: undefined });
  readonly analyticsRange = signal<DateRange>({
    from: undefined,
    to: undefined,
  });

  readonly presets: DateRangePreset[] = createDateRangePresets();

  readonly minDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  readonly maxDate = new Date();

  onRangeApply(range: DateRange): void {
    console.log('Range applied:', range);
  }
}`;
}
