import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

// ============================================================================
// Spinner
// ============================================================================
@Component({
  selector: '[sc-spinner]',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      [class]="svgClass()"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    @if (hasContent) {
      <span [class]="textClass()">
        <ng-content />
      </span>
    }
  `,
  host: {
    'data-slot': 'spinner',
    role: 'status',
    '[class]': 'class()',
    '[attr.aria-label]': 'label()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSpinner {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly size = input<'xs' | 'sm' | 'default' | 'lg' | 'xl'>('default');
  readonly label = input<string>('Loading');

  // Check if content is projected
  hasContent = false;

  protected readonly class = computed(() =>
    cn('inline-flex items-center gap-2', this.classInput()),
  );

  protected readonly svgClass = computed(() =>
    cn(
      'animate-spin',
      this.size() === 'xs' && 'size-3',
      this.size() === 'sm' && 'size-4',
      this.size() === 'default' && 'size-5',
      this.size() === 'lg' && 'size-6',
      this.size() === 'xl' && 'size-8',
    ),
  );

  protected readonly textClass = computed(() =>
    cn(
      this.size() === 'xs' && 'text-xs',
      this.size() === 'sm' && 'text-sm',
      this.size() === 'default' && 'text-sm',
      this.size() === 'lg' && 'text-base',
      this.size() === 'xl' && 'text-lg',
    ),
  );
}

// ============================================================================
// SpinnerDots (alternative dots style)
// ============================================================================
@Component({
  selector: '[sc-spinner-dots]',
  template: `
    <span class="flex items-center gap-1">
      <span [class]="dotClass()" style="animation-delay: 0ms"></span>
      <span [class]="dotClass()" style="animation-delay: 150ms"></span>
      <span [class]="dotClass()" style="animation-delay: 300ms"></span>
    </span>
    @if (hasContent) {
      <span [class]="textClass()">
        <ng-content />
      </span>
    }
  `,
  styles: `
    @keyframes bounce-dot {
      0%,
      80%,
      100% {
        transform: scale(0);
        opacity: 0.5;
      }
      40% {
        transform: scale(1);
        opacity: 1;
      }
    }
    [data-slot='spinner-dots'] span span {
      animation: bounce-dot 1.4s infinite ease-in-out both;
    }
  `,
  host: {
    'data-slot': 'spinner-dots',
    role: 'status',
    '[class]': 'class()',
    '[attr.aria-label]': 'label()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSpinnerDots {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly size = input<'xs' | 'sm' | 'default' | 'lg' | 'xl'>('default');
  readonly label = input<string>('Loading');

  hasContent = false;

  protected readonly class = computed(() =>
    cn('inline-flex items-center gap-2', this.classInput()),
  );

  protected readonly dotClass = computed(() =>
    cn(
      'rounded-full bg-current',
      this.size() === 'xs' && 'size-1',
      this.size() === 'sm' && 'size-1.5',
      this.size() === 'default' && 'size-2',
      this.size() === 'lg' && 'size-2.5',
      this.size() === 'xl' && 'size-3',
    ),
  );

  protected readonly textClass = computed(() =>
    cn(
      this.size() === 'xs' && 'text-xs',
      this.size() === 'sm' && 'text-sm',
      this.size() === 'default' && 'text-sm',
      this.size() === 'lg' && 'text-base',
      this.size() === 'xl' && 'text-lg',
    ),
  );
}

// ============================================================================
// SpinnerBars (bars style)
// ============================================================================
@Component({
  selector: '[sc-spinner-bars]',
  template: `
    <span class="flex items-end gap-0.5" [class]="barsContainerClass()">
      <span [class]="barClass()" style="animation-delay: 0ms"></span>
      <span [class]="barClass()" style="animation-delay: 100ms"></span>
      <span [class]="barClass()" style="animation-delay: 200ms"></span>
      <span [class]="barClass()" style="animation-delay: 300ms"></span>
    </span>
    @if (hasContent) {
      <span [class]="textClass()">
        <ng-content />
      </span>
    }
  `,
  styles: `
    @keyframes stretch-bar {
      0%,
      40%,
      100% {
        transform: scaleY(0.4);
      }
      20% {
        transform: scaleY(1);
      }
    }
    [data-slot='spinner-bars'] span span {
      animation: stretch-bar 1.2s infinite ease-in-out;
    }
  `,
  host: {
    'data-slot': 'spinner-bars',
    role: 'status',
    '[class]': 'class()',
    '[attr.aria-label]': 'label()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSpinnerBars {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly size = input<'xs' | 'sm' | 'default' | 'lg' | 'xl'>('default');
  readonly label = input<string>('Loading');

  hasContent = false;

  protected readonly class = computed(() =>
    cn('inline-flex items-center gap-2', this.classInput()),
  );

  protected readonly barsContainerClass = computed(() =>
    cn(
      this.size() === 'xs' && 'h-3',
      this.size() === 'sm' && 'h-4',
      this.size() === 'default' && 'h-5',
      this.size() === 'lg' && 'h-6',
      this.size() === 'xl' && 'h-8',
    ),
  );

  protected readonly barClass = computed(() =>
    cn(
      'bg-current rounded-sm',
      this.size() === 'xs' && 'w-0.5 h-full',
      this.size() === 'sm' && 'w-0.5 h-full',
      this.size() === 'default' && 'w-1 h-full',
      this.size() === 'lg' && 'w-1 h-full',
      this.size() === 'xl' && 'w-1.5 h-full',
    ),
  );

  protected readonly textClass = computed(() =>
    cn(
      this.size() === 'xs' && 'text-xs',
      this.size() === 'sm' && 'text-sm',
      this.size() === 'default' && 'text-sm',
      this.size() === 'lg' && 'text-base',
      this.size() === 'xl' && 'text-lg',
    ),
  );
}

// ============================================================================
// SpinnerRing (simple ring style)
// ============================================================================
@Component({
  selector: '[sc-spinner-ring]',
  template: `
    <span [class]="ringClass()"></span>
    @if (hasContent) {
      <span [class]="textClass()">
        <ng-content />
      </span>
    }
  `,
  host: {
    'data-slot': 'spinner-ring',
    role: 'status',
    '[class]': 'class()',
    '[attr.aria-label]': 'label()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSpinnerRing {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly size = input<'xs' | 'sm' | 'default' | 'lg' | 'xl'>('default');
  readonly label = input<string>('Loading');

  hasContent = false;

  protected readonly class = computed(() =>
    cn('inline-flex items-center gap-2', this.classInput()),
  );

  protected readonly ringClass = computed(() =>
    cn(
      'animate-spin rounded-full border-2 border-current border-t-transparent',
      this.size() === 'xs' && 'size-3',
      this.size() === 'sm' && 'size-4',
      this.size() === 'default' && 'size-5',
      this.size() === 'lg' && 'size-6',
      this.size() === 'xl' && 'size-8',
    ),
  );

  protected readonly textClass = computed(() =>
    cn(
      this.size() === 'xs' && 'text-xs',
      this.size() === 'sm' && 'text-sm',
      this.size() === 'default' && 'text-sm',
      this.size() === 'lg' && 'text-base',
      this.size() === 'xl' && 'text-lg',
    ),
  );
}
