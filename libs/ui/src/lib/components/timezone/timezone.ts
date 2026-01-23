import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { cn } from '../../utils';
import { ScTimezoneService } from './timezone.service';

export type TimezoneVariant = 'default' | 'outline' | 'ghost';
export type TimezoneSize = 'default' | 'sm' | 'lg' | 'icon';

const variantStyles: Record<TimezoneVariant, string> = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  outline:
    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
};

const sizeStyles: Record<TimezoneSize, string> = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'size-10',
};

/**
 * Timezone display button - shows current timezone with a clock icon.
 * Useful for displaying the current timezone selection.
 *
 * @example
 * ```html
 * <button sc-timezone-display></button>
 * <button sc-timezone-display variant="outline" size="sm"></button>
 * ```
 */
@Component({
  selector: 'button[sc-timezone-display]',
  host: {
    'data-slot': 'timezone-display',
    type: 'button',
    '[class]': 'hostClass()',
    '[attr.aria-label]': 'ariaLabel()',
  },
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
    @if (!iconOnly()) {
      <span class="text-sm font-medium">{{ displayText() }}</span>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimezoneDisplay {
  private readonly timezoneService = inject(ScTimezoneService);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly variant = input<TimezoneVariant>('ghost');
  readonly size = input<TimezoneSize>('default');
  readonly iconOnly = input<boolean>(false);
  readonly showOffset = input<boolean>(false);

  protected readonly currentTimezone = this.timezoneService.currentTimezone;

  protected readonly displayText = computed(() => {
    const tz = this.currentTimezone();
    if (this.showOffset()) {
      return `${tz.abbr} (${tz.offset})`;
    }
    return tz.abbr;
  });

  protected readonly hostClass = computed(() =>
    cn(
      'inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium',
      'ring-offset-background transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      '[&_svg]:pointer-events-none [&_svg]:shrink-0',
      variantStyles[this.variant()],
      sizeStyles[this.size()],
      this.classInput(),
    ),
  );

  protected readonly ariaLabel = computed(() => {
    const tz = this.currentTimezone();
    return `Current timezone: ${tz.label} (${tz.offset})`;
  });
}

/**
 * Timezone select dropdown - shows all available timezones.
 * Allows users to select their preferred timezone.
 *
 * @example
 * ```html
 * <sc-timezone-select></sc-timezone-select>
 * <sc-timezone-select [showOffset]="true"></sc-timezone-select>
 * ```
 */
@Component({
  selector: 'sc-timezone-select',
  host: {
    'data-slot': 'timezone-select',
    '[class]': 'hostClass()',
  },
  template: `
    <label for="timezone-select" class="sr-only">Select timezone</label>
    <select
      id="timezone-select"
      [value]="currentTimezoneId()"
      (change)="onTimezoneChange($event)"
      class="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      @for (tz of timezones(); track tz.id) {
        <option [value]="tz.id">
          {{ formatOptionLabel(tz) }}
        </option>
      }
    </select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimezoneSelect {
  private readonly timezoneService = inject(ScTimezoneService);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly showOffset = input<boolean>(true);
  readonly showAbbr = input<boolean>(true);

  protected readonly currentTimezoneId = computed(() =>
    this.timezoneService.timezone(),
  );
  protected readonly timezones = this.timezoneService.timezones;

  protected readonly hostClass = computed(() =>
    cn('inline-block', this.classInput()),
  );

  protected formatOptionLabel(tz: {
    id: string;
    label: string;
    offset: string;
    abbr: string;
  }): string {
    const parts: string[] = [];

    if (this.showOffset()) {
      parts.push(`(GMT${tz.offset})`);
    }

    parts.push(tz.label);

    if (this.showAbbr()) {
      parts.push(`- ${tz.abbr}`);
    }

    return parts.join(' ');
  }

  protected onTimezoneChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.timezoneService.setTimezone(target.value);
  }
}

/**
 * Timezone button with label - shows timezone name with dropdown indicator.
 * Useful for integration with dropdown menus or custom popover selectors.
 *
 * @example
 * ```html
 * <button sc-timezone-button></button>
 * <button sc-timezone-button variant="outline"></button>
 * ```
 */
@Component({
  selector: 'button[sc-timezone-button]',
  host: {
    'data-slot': 'timezone-button',
    type: 'button',
    '[class]': 'hostClass()',
    '[attr.aria-label]': 'ariaLabel()',
  },
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-4"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
    <span class="font-medium">{{ displayLabel() }}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-4"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimezoneButton {
  private readonly timezoneService = inject(ScTimezoneService);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly variant = input<TimezoneVariant>('ghost');
  readonly size = input<TimezoneSize>('default');
  readonly showOffset = input<boolean>(false);

  protected readonly currentTimezone = this.timezoneService.currentTimezone;

  protected readonly displayLabel = computed(() => {
    const tz = this.currentTimezone();
    if (this.showOffset()) {
      return `${tz.label} (${tz.offset})`;
    }
    return tz.label;
  });

  protected readonly hostClass = computed(() =>
    cn(
      'inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium',
      'ring-offset-background transition-colors cursor-pointer',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      '[&_svg]:pointer-events-none [&_svg]:shrink-0',
      variantStyles[this.variant()],
      sizeStyles[this.size()],
      this.classInput(),
    ),
  );

  protected readonly ariaLabel = computed(() => {
    const tz = this.currentTimezone();
    return `Current timezone: ${tz.label} (${tz.offset}). Click to change timezone.`;
  });
}

/**
 * Timezone badge - displays the current timezone as a compact badge.
 * Useful for showing timezone info in headers or status bars.
 *
 * @example
 * ```html
 * <span sc-timezone-badge></span>
 * <span sc-timezone-badge [showLabel]="true"></span>
 * ```
 */
@Component({
  selector: 'span[sc-timezone-badge]',
  host: {
    'data-slot': 'timezone-badge',
    '[class]': 'hostClass()',
  },
  template: `
    @if (showIcon()) {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-3"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    }
    <span>{{ displayText() }}</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimezoneBadge {
  private readonly timezoneService = inject(ScTimezoneService);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly showIcon = input<boolean>(true);
  readonly showLabel = input<boolean>(false);
  readonly showOffset = input<boolean>(false);

  protected readonly currentTimezone = this.timezoneService.currentTimezone;

  protected readonly displayText = computed(() => {
    const tz = this.currentTimezone();

    if (this.showLabel()) {
      if (this.showOffset()) {
        return `${tz.label} (${tz.offset})`;
      }
      return tz.label;
    }

    if (this.showOffset()) {
      return `${tz.abbr} ${tz.offset}`;
    }

    return tz.abbr;
  });

  protected readonly hostClass = computed(() =>
    cn(
      'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold',
      'transition-colors',
      'border-transparent bg-secondary text-secondary-foreground',
      this.classInput(),
    ),
  );
}
