import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

export type AccordionType = 'single' | 'multiple';

@Component({
  selector: 'div[sc-accordion]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'accordion',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAccordion {
  readonly classInput = input<string>('', { alias: 'class' });

  /** Type: 'single' allows one item open, 'multiple' allows many */
  readonly type = input<AccordionType>('single');

  /** Whether accordion can be fully collapsed (only for single type) */
  readonly collapsible = input<boolean>(false);

  /** Currently open item(s) - string for single, string[] for multiple */
  readonly value = model<string | string[]>('');

  protected readonly class = computed(() => cn('', this.classInput()));

  isItemOpen(itemValue: string): boolean {
    const currentValue = this.value();
    if (Array.isArray(currentValue)) {
      return currentValue.includes(itemValue);
    }
    return currentValue === itemValue;
  }

  toggleItem(itemValue: string): void {
    const currentValue = this.value();
    const accordionType = this.type();

    if (accordionType === 'multiple') {
      // Multiple mode: toggle item in array
      const arr = Array.isArray(currentValue)
        ? currentValue
        : currentValue
          ? [currentValue]
          : [];
      if (arr.includes(itemValue)) {
        this.value.set(arr.filter((v) => v !== itemValue));
      } else {
        this.value.set([...arr, itemValue]);
      }
    } else {
      // Single mode: toggle or switch
      if (currentValue === itemValue) {
        // Already open - close only if collapsible
        if (this.collapsible()) {
          this.value.set('');
        }
      } else {
        this.value.set(itemValue);
      }
    }
  }
}
