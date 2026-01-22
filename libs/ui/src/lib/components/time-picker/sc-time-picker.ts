import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Directive,
  inject,
  InjectionToken,
  input,
  model,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

export type TimeFormat = '12h' | '24h';
export type TimePeriod = 'AM' | 'PM';

export interface TimeValue {
  hours: number;
  minutes: number;
  seconds?: number;
  period?: TimePeriod;
}

// Token for time picker context
export const SC_TIME_PICKER = new InjectionToken<ScTimePicker>(
  'SC_TIME_PICKER',
);

// ============================================================================
// TimePicker
// ============================================================================
@Directive({
  selector: '[sc-time-picker]',
  providers: [{ provide: SC_TIME_PICKER, useExisting: ScTimePicker }],
  host: {
    'data-slot': 'time-picker',
    '[class]': 'class()',
  },
})
export class ScTimePicker {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly format = input<TimeFormat>('12h');
  readonly showSeconds = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly value = model<TimeValue | null>(null);

  protected readonly class = computed(() =>
    cn('inline-flex items-center gap-1', this.classInput()),
  );

  setHours(hours: number): void {
    const current = this.value() || { hours: 0, minutes: 0 };
    this.value.set({ ...current, hours });
  }

  setMinutes(minutes: number): void {
    const current = this.value() || { hours: 0, minutes: 0 };
    this.value.set({ ...current, minutes });
  }

  setSeconds(seconds: number): void {
    const current = this.value() || { hours: 0, minutes: 0 };
    this.value.set({ ...current, seconds });
  }

  setPeriod(period: TimePeriod): void {
    const current = this.value() || { hours: 0, minutes: 0 };
    this.value.set({ ...current, period });
  }

  getFormattedTime(): string {
    const val = this.value();
    if (!val) return '';

    const hours = this.format() === '12h' ? val.hours % 12 || 12 : val.hours;
    const hoursStr = hours.toString().padStart(2, '0');
    const minutesStr = val.minutes.toString().padStart(2, '0');

    let time = `${hoursStr}:${minutesStr}`;

    if (this.showSeconds() && val.seconds !== undefined) {
      time += `:${val.seconds.toString().padStart(2, '0')}`;
    }

    if (this.format() === '12h' && val.period) {
      time += ` ${val.period}`;
    }

    return time;
  }
}

// ============================================================================
// TimePickerInput
// ============================================================================
@Component({
  selector: 'input[sc-time-picker-input]',
  template: ``,
  host: {
    'data-slot': 'time-picker-input',
    type: 'text',
    inputmode: 'numeric',
    '[class]': 'class()',
    '[value]': 'displayValue()',
    '[disabled]': 'timePicker.disabled()',
    '[attr.min]': 'min()',
    '[attr.max]': 'max()',
    '[attr.aria-label]': 'label()',
    '(input)': 'onInput($event)',
    '(blur)': 'onBlur()',
    '(keydown)': 'onKeydown($event)',
    '(focus)': 'onFocus($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimePickerInput {
  readonly timePicker = inject(SC_TIME_PICKER);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly type = input.required<'hours' | 'minutes' | 'seconds'>();
  readonly label = input<string>('');

  readonly focused = signal(false);

  protected readonly class = computed(() =>
    cn(
      'w-10 rounded-md border border-input bg-background px-2 py-1.5 text-center text-sm tabular-nums',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      this.classInput(),
    ),
  );

  protected readonly min = computed(() => {
    return 0;
  });

  protected readonly max = computed(() => {
    const type = this.type();
    if (type === 'hours') {
      return this.timePicker.format() === '12h' ? 12 : 23;
    }
    return 59;
  });

  protected readonly displayValue = computed(() => {
    const val = this.timePicker.value();
    if (!val) return '00';

    const type = this.type();
    let num: number;

    if (type === 'hours') {
      num =
        this.timePicker.format() === '12h' ? val.hours % 12 || 12 : val.hours;
    } else if (type === 'minutes') {
      num = val.minutes;
    } else {
      num = val.seconds ?? 0;
    }

    return num.toString().padStart(2, '0');
  });

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '');
    const num = parseInt(value, 10);

    if (!isNaN(num)) {
      this.updateValue(Math.min(num, this.max()));
    }
  }

  onBlur(): void {
    this.focused.set(false);
    // Ensure value is within bounds
    const val = this.timePicker.value();
    if (val) {
      const type = this.type();
      if (type === 'hours') {
        const max = this.timePicker.format() === '12h' ? 12 : 23;
        const min = this.timePicker.format() === '12h' ? 1 : 0;
        const clamped = Math.max(min, Math.min(val.hours, max));
        if (clamped !== val.hours) {
          this.timePicker.setHours(clamped);
        }
      }
    }
  }

  onFocus(event: FocusEvent): void {
    this.focused.set(true);
    (event.target as HTMLInputElement).select();
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.increment();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.decrement();
    }
  }

  private increment(): void {
    const val = this.timePicker.value() || { hours: 0, minutes: 0 };
    const type = this.type();
    const max = this.max();

    if (type === 'hours') {
      const min = this.timePicker.format() === '12h' ? 1 : 0;
      const newVal = val.hours >= max ? min : val.hours + 1;
      this.timePicker.setHours(newVal);
    } else if (type === 'minutes') {
      const newVal = val.minutes >= max ? 0 : val.minutes + 1;
      this.timePicker.setMinutes(newVal);
    } else {
      const newVal = (val.seconds ?? 0) >= max ? 0 : (val.seconds ?? 0) + 1;
      this.timePicker.setSeconds(newVal);
    }
  }

  private decrement(): void {
    const val = this.timePicker.value() || { hours: 0, minutes: 0 };
    const type = this.type();
    const max = this.max();

    if (type === 'hours') {
      const min = this.timePicker.format() === '12h' ? 1 : 0;
      const newVal = val.hours <= min ? max : val.hours - 1;
      this.timePicker.setHours(newVal);
    } else if (type === 'minutes') {
      const newVal = val.minutes <= 0 ? max : val.minutes - 1;
      this.timePicker.setMinutes(newVal);
    } else {
      const newVal = (val.seconds ?? 0) <= 0 ? max : (val.seconds ?? 0) - 1;
      this.timePicker.setSeconds(newVal);
    }
  }

  private updateValue(num: number): void {
    const type = this.type();
    if (type === 'hours') {
      this.timePicker.setHours(num);
    } else if (type === 'minutes') {
      this.timePicker.setMinutes(num);
    } else {
      this.timePicker.setSeconds(num);
    }
  }
}

// ============================================================================
// TimePickerSeparator
// ============================================================================
@Directive({
  selector: '[sc-time-picker-separator]',
  host: {
    'data-slot': 'time-picker-separator',
    '[class]': 'class()',
  },
})
export class ScTimePickerSeparator {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('text-lg font-medium text-muted-foreground', this.classInput()),
  );
}

// ============================================================================
// TimePickerPeriod
// ============================================================================
@Component({
  selector: '[sc-time-picker-period]',
  template: `
    <button
      type="button"
      class="rounded-md px-2 py-1.5 text-sm font-medium transition-colors"
      [class.bg-primary]="isAM()"
      [class.text-primary-foreground]="isAM()"
      [class.text-muted-foreground]="!isAM()"
      [class.hover:bg-accent]="!isAM()"
      [disabled]="timePicker.disabled()"
      (click)="selectAM()"
    >
      AM
    </button>
    <button
      type="button"
      class="rounded-md px-2 py-1.5 text-sm font-medium transition-colors"
      [class.bg-primary]="isPM()"
      [class.text-primary-foreground]="isPM()"
      [class.text-muted-foreground]="!isPM()"
      [class.hover:bg-accent]="!isPM()"
      [disabled]="timePicker.disabled()"
      (click)="selectPM()"
    >
      PM
    </button>
  `,
  host: {
    'data-slot': 'time-picker-period',
    '[class]': 'class()',
    role: 'group',
    '[attr.aria-label]': '"Select AM or PM"',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimePickerPeriod {
  readonly timePicker = inject(SC_TIME_PICKER);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'ml-2 inline-flex rounded-md border border-input bg-background p-0.5',
      this.classInput(),
    ),
  );

  protected readonly isAM = computed(() => {
    const val = this.timePicker.value();
    return val?.period === 'AM' || (!val?.period && (val?.hours ?? 0) < 12);
  });

  protected readonly isPM = computed(() => {
    const val = this.timePicker.value();
    return val?.period === 'PM' || (!val?.period && (val?.hours ?? 0) >= 12);
  });

  selectAM(): void {
    this.timePicker.setPeriod('AM');
    const val = this.timePicker.value();
    if (val && val.hours >= 12) {
      this.timePicker.setHours(val.hours - 12);
    }
  }

  selectPM(): void {
    this.timePicker.setPeriod('PM');
    const val = this.timePicker.value();
    if (val && val.hours < 12) {
      this.timePicker.setHours(val.hours + 12);
    }
  }
}

// ============================================================================
// TimePickerClock (visual clock selector)
// ============================================================================
@Component({
  selector: '[sc-time-picker-clock]',
  template: `
    <div class="relative">
      <svg viewBox="0 0 200 200" class="size-48">
        <!-- Clock face -->
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="none"
          stroke="currentColor"
          class="text-border"
          stroke-width="2"
        />

        <!-- Hour markers -->
        @for (marker of markers(); track marker.value) {
          <g
            class="cursor-pointer"
            (click)="selectValue(marker.value)"
            (mouseenter)="hoveredValue.set(marker.value)"
            (mouseleave)="hoveredValue.set(null)"
          >
            <circle
              [attr.cx]="marker.x"
              [attr.cy]="marker.y"
              r="14"
              [class.fill-primary]="isSelected(marker.value)"
              [class.text-primary-foreground]="isSelected(marker.value)"
              [class.fill-accent]="
                hoveredValue() === marker.value && !isSelected(marker.value)
              "
              [class.fill-transparent]="
                hoveredValue() !== marker.value && !isSelected(marker.value)
              "
              class="transition-colors"
            />
            <text
              [attr.x]="marker.x"
              [attr.y]="marker.y"
              text-anchor="middle"
              dominant-baseline="central"
              class="text-sm select-none"
              [class.fill-primary-foreground]="isSelected(marker.value)"
              [class.fill-foreground]="!isSelected(marker.value)"
            >
              {{ marker.label }}
            </text>
          </g>
        }

        <!-- Clock hand -->
        @if (selectedAngle() !== null) {
          <line
            x1="100"
            y1="100"
            [attr.x2]="handX()"
            [attr.y2]="handY()"
            stroke="currentColor"
            class="text-primary"
            stroke-width="2"
          />
          <circle
            cx="100"
            cy="100"
            r="4"
            fill="currentColor"
            class="text-primary"
          />
        }
      </svg>
    </div>
  `,
  host: {
    'data-slot': 'time-picker-clock',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimePickerClock {
  readonly timePicker = inject(SC_TIME_PICKER);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly mode = input<'hours' | 'minutes'>('hours');

  readonly hoveredValue = signal<number | null>(null);

  protected readonly class = computed(() =>
    cn('inline-block', this.classInput()),
  );

  protected readonly markers = computed(() => {
    const isHours = this.mode() === 'hours';
    const count = isHours ? 12 : 12; // Show 12 markers for both
    const step = isHours ? 1 : 5;
    const radius = 70;

    const markers: { value: number; label: string; x: number; y: number }[] =
      [];

    for (let i = 0; i < count; i++) {
      const value = isHours ? (i === 0 ? 12 : i) : i * step;
      const angle = (i * 30 - 90) * (Math.PI / 180);
      const x = 100 + radius * Math.cos(angle);
      const y = 100 + radius * Math.sin(angle);

      markers.push({
        value: isHours ? (i === 0 ? 12 : i) : i * step,
        label: value.toString().padStart(2, '0'),
        x,
        y,
      });
    }

    return markers;
  });

  protected readonly selectedAngle = computed(() => {
    const val = this.timePicker.value();
    if (!val) return null;

    const isHours = this.mode() === 'hours';
    if (isHours) {
      const hours =
        this.timePicker.format() === '12h'
          ? val.hours % 12 || 12
          : val.hours % 12;
      return (hours * 30 - 90) * (Math.PI / 180);
    } else {
      return (val.minutes * 6 - 90) * (Math.PI / 180);
    }
  });

  protected readonly handX = computed(() => {
    const angle = this.selectedAngle();
    if (angle === null) return 100;
    return 100 + 55 * Math.cos(angle);
  });

  protected readonly handY = computed(() => {
    const angle = this.selectedAngle();
    if (angle === null) return 100;
    return 100 + 55 * Math.sin(angle);
  });

  isSelected(value: number): boolean {
    const val = this.timePicker.value();
    if (!val) return false;

    const isHours = this.mode() === 'hours';
    if (isHours) {
      const hours =
        this.timePicker.format() === '12h'
          ? val.hours % 12 || 12
          : val.hours % 12;
      return hours === value || (value === 12 && hours === 0);
    } else {
      return val.minutes === value;
    }
  }

  selectValue(value: number): void {
    if (this.mode() === 'hours') {
      const val = this.timePicker.value();
      let hours = value;
      if (this.timePicker.format() === '12h') {
        if (val?.period === 'PM' && value !== 12) {
          hours = value + 12;
        } else if (val?.period === 'AM' && value === 12) {
          hours = 0;
        }
      }
      this.timePicker.setHours(hours);
    } else {
      this.timePicker.setMinutes(value);
    }
  }
}
