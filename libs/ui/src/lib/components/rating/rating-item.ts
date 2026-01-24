import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { SC_RATING } from './rating';

@Component({
  selector: '[sc-rating-item]',
  template: `
    <span class="relative">
      <!-- Empty state -->
      <ng-content select="[empty]" />

      <!-- Filled state (clipped for partial fill) -->
      @if (fillPercent() > 0) {
        <span
          class="absolute inset-0 overflow-hidden"
          [style.width.%]="fillPercent()"
        >
          <ng-content select="[filled]" />
        </span>
      }
    </span>
  `,
  host: {
    'data-slot': 'rating-item',
    role: 'radio',
    '[class]': 'class()',
    '[attr.aria-checked]': 'isSelected()',
    '[attr.aria-label]': 'value() + " star" + (value() !== 1 ? "s" : "")',
    '[attr.tabindex]': 'rating.disabled() ? -1 : 0',
    '[attr.data-state]': 'state()',
    '[attr.data-disabled]': 'rating.disabled() || null',
    '[attr.data-readonly]': 'rating.readonly() || null',
    '(click)': 'onClick($event)',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(keydown)': 'rating.onKeydown($event, value())',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRatingItem {
  readonly rating = inject(SC_RATING);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = input.required<number>();

  protected readonly class = computed(() =>
    cn(
      'relative cursor-pointer text-muted-foreground transition-colors',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm',
      'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
      'data-[readonly]:cursor-default',
      this.classInput(),
    ),
  );

  protected readonly isSelected = computed(
    () => this.rating.value() >= this.value(),
  );

  protected readonly state = computed(() => {
    const displayValue = this.rating.displayValue();
    const itemValue = this.value();

    if (displayValue >= itemValue) return 'full';
    if (this.rating.allowHalf() && displayValue >= itemValue - 0.5)
      return 'half';
    return 'empty';
  });

  protected readonly fillPercent = computed(() => {
    const displayValue = this.rating.displayValue();
    const itemValue = this.value();

    if (displayValue >= itemValue) return 100;
    if (displayValue >= itemValue - 1) {
      return Math.max(0, (displayValue - (itemValue - 1)) * 100);
    }
    return 0;
  });

  onClick(event: MouseEvent): void {
    if (this.rating.readonly() || this.rating.disabled()) return;

    if (this.rating.allowHalf()) {
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      const x = event.clientX - rect.left;
      const isLeftHalf = x < rect.width / 2;
      this.rating.setValue(isLeftHalf ? this.value() - 0.5 : this.value());
    } else {
      this.rating.setValue(this.value());
    }
  }

  onMouseEnter(): void {
    this.rating.setHoveredValue(this.value());
  }

  onMouseLeave(): void {
    this.rating.setHoveredValue(null);
  }
}
