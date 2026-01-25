import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScDatePicker } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-date-picker-demo',
  imports: [ScDatePicker],
  template: `
    <sc-date-picker [(selected)]="selectedDate" />
    @if (selectedDate()) {
      <p class="text-sm text-muted-foreground mt-4">
        Selected: {{ selectedDate()?.toLocaleDateString() }}
      </p>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicDatePickerDemo {
  readonly selectedDate = signal<Date | undefined>(undefined);
}
