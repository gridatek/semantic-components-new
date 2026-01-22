import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  model,
  signal,
} from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'div[sc-radio-group]',
  host: {
    'data-slot': 'radio-group',
    role: 'radiogroup',
    '[class]': 'class()',
    '[attr.aria-disabled]': 'disabled() || null',
    '(keydown)': 'onKeydown($event)',
  },
})
export class ScRadioGroup {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = model<string | null>(null);
  readonly disabled = input<boolean>(false);

  private readonly items = contentChildren(ScRadioGroupItem, {
    descendants: true,
  });

  protected readonly class = computed(() =>
    cn('grid gap-2', this.classInput()),
  );

  constructor() {
    effect(() => {
      const allItems = this.items();
      allItems.forEach((item, index) => {
        item.setIndex(index);
      });
    });
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
      nextItem.focus();
    }
  }

  focusItem(index: number): void {
    const allItems = this.items();
    if (index >= 0 && index < allItems.length) {
      allItems[index].focus();
    }
  }
}

@Component({
  selector: 'sc-radio-group-item',
  host: {
    'data-slot': 'radio-group-item',
    role: 'radio',
    '[class]': 'hostClass()',
    '[attr.aria-checked]': 'isSelected()',
    '[attr.data-state]': 'isSelected() ? "checked" : "unchecked"',
    '[attr.data-disabled]': 'isDisabled() ? "" : null',
    '[attr.aria-disabled]': 'isDisabled() || null',
    '[tabindex]': 'tabIndex()',
    '(click)': 'onClick()',
    '(keydown.space)': 'onSpace($event)',
  },
  template: `
    <span
      class="flex h-4 w-4 items-center justify-center rounded-full border border-primary text-primary ring-offset-background transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      [class.border-primary]="!isDisabled()"
      [class.opacity-50]="isDisabled()"
    >
      @if (isSelected()) {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-2.5"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      }
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRadioGroupItem {
  private readonly group = inject(ScRadioGroup);
  private readonly elementRef = inject(ElementRef);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = input.required<string>();
  readonly disabled = input<boolean>(false);

  private readonly index = signal<number>(0);

  readonly isSelected = computed(() => this.group.isSelected(this.value()));
  readonly isDisabled = computed(
    () => this.disabled() || this.group.disabled(),
  );

  protected readonly tabIndex = computed(() => {
    if (this.isDisabled()) return -1;
    // If this item is selected, it should be focusable
    if (this.isSelected()) return 0;
    // If no item is selected, the first enabled item should be focusable
    if (this.group.value() === null && this.index() === 0) return 0;
    return -1;
  });

  protected readonly hostClass = computed(() =>
    cn(
      'inline-flex cursor-pointer items-center gap-2',
      this.isDisabled() && 'cursor-not-allowed opacity-50',
      this.classInput(),
    ),
  );

  setIndex(idx: number): void {
    this.index.set(idx);
  }

  focus(): void {
    this.elementRef.nativeElement.focus();
  }

  protected onClick(): void {
    if (!this.isDisabled()) {
      this.group.select(this.value());
    }
  }

  protected onSpace(event: Event): void {
    event.preventDefault();
    this.onClick();
  }
}
