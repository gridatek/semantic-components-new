import {
  computed,
  contentChildren,
  Directive,
  effect,
  input,
  model,
} from '@angular/core';
import { cn } from '../../utils';
import { ScRadioGroupItem } from './radio-group-item';

@Directive({
  selector: 'div[sc-radio-group]',
  host: {
    'data-slot': 'radio-group',
    role: 'radiogroup',
    '[class]': 'class()',
    '[attr.aria-disabled]': 'disabled() || null',
    '[attr.aria-label]': 'label() || null',
    '[attr.aria-labelledby]': 'ariaLabelledby() || null',
    '(keydown)': 'onKeydown($event)',
  },
})
export class ScRadioGroup {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly name = input<string>('');
  readonly value = model<string | null>(null);
  readonly disabled = input<boolean>(false);
  readonly label = input<string>('');
  readonly ariaLabelledby = input<string>('');

  private readonly items = contentChildren(ScRadioGroupItem, {
    descendants: true,
  });

  protected readonly class = computed(() =>
    cn('grid gap-2', this.classInput()),
  );

  constructor() {
    // Items are automatically indexed by contentChildren
  }

  isSelected(itemValue: string): boolean {
    return this.value() === itemValue;
  }

  select(itemValue: string): void {
    if (!this.disabled()) {
      this.value.set(itemValue);
    }
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (this.disabled()) return;

    const allItems = this.items();
    const enabledItems = allItems.filter((item) => !item.isDisabled());
    if (enabledItems.length === 0) return;

    const currentIndex = enabledItems.findIndex(
      (item) => item.value() === this.value(),
    );

    let nextIndex = -1;

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      nextIndex =
        currentIndex === -1 ? 0 : (currentIndex + 1) % enabledItems.length;
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      nextIndex =
        currentIndex === -1
          ? enabledItems.length - 1
          : (currentIndex - 1 + enabledItems.length) % enabledItems.length;
    }

    if (nextIndex !== -1) {
      const nextItem = enabledItems[nextIndex];
      this.value.set(nextItem.value());
    }
  }
}
