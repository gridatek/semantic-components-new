import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScTimePicker,
  ScTimePickerInput,
  ScTimePickerSeparator,
  TimeValue,
} from '@semantic-components/ui';

@Component({
  selector: 'app-seconds-time-picker-demo',
  imports: [ScTimePicker, ScTimePickerInput, ScTimePickerSeparator],
  template: `
    <div class="flex flex-col gap-4">
      <div
        sc-time-picker
        format="24h"
        [showSeconds]="true"
        [(value)]="time"
      >
        <input sc-time-picker-input type="hours" label="Hours" />
        <span sc-time-picker-separator>:</span>
        <input sc-time-picker-input type="minutes" label="Minutes" />
        <span sc-time-picker-separator>:</span>
        <input sc-time-picker-input type="seconds" label="Seconds" />
      </div>
      <p class="text-sm text-muted-foreground">
        Selected: {{ formatTime(time()) }}
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondsTimePickerDemo {
  readonly time = signal<TimeValue | null>({
    hours: 10,
    minutes: 30,
    seconds: 15,
  });

  formatTime(val: TimeValue | null): string {
    if (!val) return 'No time selected';
    return `${val.hours.toString().padStart(2, '0')}:${val.minutes.toString().padStart(2, '0')}:${(val.seconds ?? 0).toString().padStart(2, '0')}`;
  }
}
