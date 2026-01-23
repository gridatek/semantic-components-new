import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScTimePickerDemo } from './time-picker-demo';

@Component({
  selector: 'app-time-picker-demo-container',
  imports: [DemoContainer, ScTimePickerDemo],
  template: `
    <app-demo-container title="Time" [code]="code">
      <app-time-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimePickerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScTimePicker,
  ScTimePickerInput,
  ScTimePickerSeparator,
  ScTimePickerPeriod,
  ScTimePickerClock,
  TimeValue,
} from '@semantic-components/ui';

@Component({
  selector: 'app-time-picker-demo',
  imports: [
    ScTimePicker,
    ScTimePickerInput,
    ScTimePickerSeparator,
    ScTimePickerPeriod,
    ScTimePickerClock,
  ],
  template: \`
    <div class="space-y-8">
      <!-- 12 Hour Format -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">12 Hour Format</h3>
        <div class="flex flex-col gap-4">
          <div sc-time-picker format="12h" [(value)]="time12h">
            <input sc-time-picker-input type="hours" label="Hours" />
            <span sc-time-picker-separator>:</span>
            <input sc-time-picker-input type="minutes" label="Minutes" />
            <div sc-time-picker-period></div>
          </div>
          <p class="text-sm text-muted-foreground">
            Selected: {{ formatTime(time12h()) }}
          </p>
        </div>
      </div>

      <!-- 24 Hour Format -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">24 Hour Format</h3>
        <div class="flex flex-col gap-4">
          <div sc-time-picker format="24h" [(value)]="time24h">
            <input sc-time-picker-input type="hours" label="Hours" />
            <span sc-time-picker-separator>:</span>
            <input sc-time-picker-input type="minutes" label="Minutes" />
          </div>
          <p class="text-sm text-muted-foreground">
            Selected: {{ formatTime24(time24h()) }}
          </p>
        </div>
      </div>

      <!-- With Seconds -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Seconds</h3>
        <div class="flex flex-col gap-4">
          <div
            sc-time-picker
            format="24h"
            [showSeconds]="true"
            [(value)]="timeWithSeconds"
          >
            <input sc-time-picker-input type="hours" label="Hours" />
            <span sc-time-picker-separator>:</span>
            <input sc-time-picker-input type="minutes" label="Minutes" />
            <span sc-time-picker-separator>:</span>
            <input sc-time-picker-input type="seconds" label="Seconds" />
          </div>
          <p class="text-sm text-muted-foreground">
            Selected: {{ formatTimeWithSeconds(timeWithSeconds()) }}
          </p>
        </div>
      </div>

      <!-- Disabled -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Disabled</h3>
        <div
          sc-time-picker
          format="12h"
          [disabled]="true"
          [(value)]="disabledTime"
        >
          <input sc-time-picker-input type="hours" label="Hours" />
          <span sc-time-picker-separator>:</span>
          <input sc-time-picker-input type="minutes" label="Minutes" />
          <div sc-time-picker-period></div>
        </div>
      </div>

      <!-- Clock Interface - Hours -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Clock Interface - Hours</h3>
        <div class="flex items-start gap-8">
          <div sc-time-picker format="12h" [(value)]="clockTime">
            <div sc-time-picker-clock mode="hours"></div>
          </div>
          <div class="space-y-2">
            <p class="text-sm font-medium">Selected Hour</p>
            <p class="text-2xl tabular-nums">
              {{ (clockTime()?.hours ?? 0) % 12 || 12 }}:00
              {{ (clockTime()?.hours ?? 0) >= 12 ? 'PM' : 'AM' }}
            </p>
            <div sc-time-picker format="12h" [(value)]="clockTime">
              <div sc-time-picker-period></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Clock Interface - Minutes -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Clock Interface - Minutes</h3>
        <div class="flex items-start gap-8">
          <div sc-time-picker format="12h" [(value)]="clockMinutesTime">
            <div sc-time-picker-clock mode="minutes"></div>
          </div>
          <div class="space-y-2">
            <p class="text-sm font-medium">Selected Time</p>
            <p class="text-2xl tabular-nums">
              {{
                ((clockMinutesTime()?.hours ?? 0) % 12 || 12)
                  .toString()
                  .padStart(2, '0')
              }}:{{
                (clockMinutesTime()?.minutes ?? 0).toString().padStart(2, '0')
              }}
            </p>
          </div>
        </div>
      </div>

      <!-- Preset Times -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Preset Times</h3>
        <div class="flex flex-wrap gap-2">
          <button
            type="button"
            class="rounded-md border px-3 py-1.5 text-sm hover:bg-accent"
            (click)="setPreset(9, 0, 'AM')"
          >
            9:00 AM
          </button>
          <button
            type="button"
            class="rounded-md border px-3 py-1.5 text-sm hover:bg-accent"
            (click)="setPreset(12, 0, 'PM')"
          >
            12:00 PM
          </button>
          <button
            type="button"
            class="rounded-md border px-3 py-1.5 text-sm hover:bg-accent"
            (click)="setPreset(3, 30, 'PM')"
          >
            3:30 PM
          </button>
          <button
            type="button"
            class="rounded-md border px-3 py-1.5 text-sm hover:bg-accent"
            (click)="setPreset(6, 0, 'PM')"
          >
            6:00 PM
          </button>
        </div>
        <div sc-time-picker format="12h" [(value)]="presetTime">
          <input sc-time-picker-input type="hours" label="Hours" />
          <span sc-time-picker-separator>:</span>
          <input sc-time-picker-input type="minutes" label="Minutes" />
          <div sc-time-picker-period></div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimePickerDemo {
  readonly time12h = signal<TimeValue | null>({
    hours: 9,
    minutes: 30,
    period: 'AM',
  });
  readonly time24h = signal<TimeValue | null>({ hours: 14, minutes: 45 });
  readonly timeWithSeconds = signal<TimeValue | null>({
    hours: 10,
    minutes: 30,
    seconds: 15,
  });
  readonly disabledTime = signal<TimeValue | null>({
    hours: 8,
    minutes: 0,
    period: 'AM',
  });
  readonly clockTime = signal<TimeValue | null>({ hours: 10, minutes: 0 });
  readonly clockMinutesTime = signal<TimeValue | null>({
    hours: 10,
    minutes: 30,
  });
  readonly presetTime = signal<TimeValue | null>(null);

  formatTime(val: TimeValue | null): string {
    if (!val) return 'No time selected';
    const hours = val.hours % 12 || 12;
    const period = val.period || (val.hours >= 12 ? 'PM' : 'AM');
    return \`\${hours.toString().padStart(2, '0')}:\${val.minutes.toString().padStart(2, '0')} \${period}\`;
  }

  formatTime24(val: TimeValue | null): string {
    if (!val) return 'No time selected';
    return \`\${val.hours.toString().padStart(2, '0')}:\${val.minutes.toString().padStart(2, '0')}\`;
  }

  formatTimeWithSeconds(val: TimeValue | null): string {
    if (!val) return 'No time selected';
    return \`\${val.hours.toString().padStart(2, '0')}:\${val.minutes.toString().padStart(2, '0')}:\${(val.seconds ?? 0).toString().padStart(2, '0')}\`;
  }

  setPreset(hours: number, minutes: number, period: 'AM' | 'PM'): void {
    const adjustedHours =
      period === 'PM' && hours !== 12
        ? hours + 12
        : period === 'AM' && hours === 12
          ? 0
          : hours;
    this.presetTime.set({ hours: adjustedHours, minutes, period });
  }
}`;
}
