import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScDatePickerDemo } from './date-picker-demo';

@Component({
  selector: 'app-date-picker-demo-container',
  imports: [DemoContainer, ScDatePickerDemo],
  template: `
    <app-demo-container title="Date" [code]="code">
      <app-date-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDatePickerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DateRange } from '@semantic-components/ui';
import { ScDatePicker } from '@semantic-components/ui';

@Component({
  selector: 'app-date-picker-demo',
  imports: [ScDatePicker],
  template: \`
    <div class="space-y-8">
      <!-- Default -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Default</h3>
        <sc-date-picker [(selected)]="selectedDate" />
        @if (selectedDate()) {
          <p class="text-sm text-muted-foreground">
            Selected: {{ selectedDate()?.toLocaleDateString() }}
          </p>
        }
      </div>

      <!-- With Placeholder -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Custom Placeholder</h3>
        <sc-date-picker
          [(selected)]="selectedDate2"
          placeholder="Select your birthday"
        />
      </div>

      <!-- Date Range Picker -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Date Range</h3>
        <sc-date-picker
          mode="range"
          [(selectedRange)]="selectedRange"
          placeholder="Pick a date range"
        />
        @if (selectedRange().from) {
          <p class="text-sm text-muted-foreground">
            @if (selectedRange().to) {
              {{ selectedRange().from?.toLocaleDateString() }} -
              {{ selectedRange().to?.toLocaleDateString() }}
            } @else {
              {{ selectedRange().from?.toLocaleDateString() }} - ...
            }
          </p>
        }
      </div>

      <!-- Multiple Dates -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Multiple Dates</h3>
        <sc-date-picker
          mode="multiple"
          [(selectedDates)]="selectedDates"
          placeholder="Select dates"
        />
        @if (selectedDates().length > 0) {
          <p class="text-sm text-muted-foreground">
            {{ selectedDates().length }} date(s) selected
          </p>
        }
      </div>

      <!-- With Constraints -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Date Constraints</h3>
        <p class="text-xs text-muted-foreground">
          Only dates within the next 30 days
        </p>
        <sc-date-picker
          [(selected)]="selectedConstrained"
          [minDate]="minDate"
          [maxDate]="maxDate"
          placeholder="Pick a date (next 30 days)"
        />
      </div>

      <!-- Form Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Form Example</h3>
        <div class="grid gap-4 max-w-sm">
          <div class="space-y-2">
            <label class="text-sm font-medium">Date of Birth</label>
            <sc-date-picker
              [(selected)]="dob"
              placeholder="Select date of birth"
              [maxDate]="today"
            />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-medium">Appointment Date</label>
            <sc-date-picker
              [(selected)]="appointment"
              placeholder="Select appointment"
              [minDate]="today"
            />
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDatePickerDemo {
  readonly selectedDate = signal<Date | undefined>(undefined);
  readonly selectedDate2 = signal<Date | undefined>(undefined);
  readonly selectedRange = signal<DateRange>({
    from: undefined,
    to: undefined,
  });
  readonly selectedDates = signal<Date[]>([]);
  readonly selectedConstrained = signal<Date | undefined>(undefined);
  readonly dob = signal<Date | undefined>(undefined);
  readonly appointment = signal<Date | undefined>(undefined);

  readonly today = new Date();
  readonly minDate = new Date();
  readonly maxDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
}`;
}
