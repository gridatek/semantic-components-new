import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import {
  ScCommand,
  ScCommandEmpty,
  ScCommandInput,
  ScCommandItem,
  ScCommandList,
} from '../command';
import {
  PopoverAlign,
  PopoverSide,
  ScPopover,
  ScPopoverContent,
  ScPopoverTrigger,
} from '../popover';

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'sc-combobox',
  imports: [
    ScPopover,
    ScPopoverTrigger,
    ScPopoverContent,
    ScCommand,
    ScCommandInput,
    ScCommandList,
    ScCommandItem,
    ScCommandEmpty,
  ],
  template: `
    <div sc-popover [(open)]="open" [side]="side()" [align]="align()">
      <button
        sc-popover-trigger
        type="button"
        role="combobox"
        [class]="triggerClass()"
      >
        <span class="truncate">{{ displayText() }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="ml-2 size-4 shrink-0 opacity-50"
        >
          <path d="m7 15 5 5 5-5" />
          <path d="m7 9 5-5 5 5" />
        </svg>
      </button>
      <div sc-popover-content class="w-[--trigger-width] p-0">
        <div sc-command [(value)]="searchValue">
          <div sc-command-input [placeholder]="searchPlaceholder()"></div>
          <div sc-command-list>
            <div sc-command-empty>{{ emptyText() }}</div>
            @for (option of options(); track option.value) {
              <div
                sc-command-item
                [value]="option.label"
                [disabled]="option.disabled ?? false"
                [selected]="isSelected(option.value)"
                (select)="selectOption(option)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-4"
                  [class.opacity-0]="!isSelected(option.value)"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {{ option.label }}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  host: {
    'data-slot': 'combobox',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCombobox {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly options = input<ComboboxOption[]>([]);
  readonly placeholder = input<string>('Select option...');
  readonly searchPlaceholder = input<string>('Search...');
  readonly emptyText = input<string>('No results found.');
  readonly multiple = input<boolean>(false);
  readonly side = input<PopoverSide>('bottom');
  readonly align = input<PopoverAlign>('start');

  // For single selection
  readonly value = model<string>('');
  // For multiple selection
  readonly values = model<string[]>([]);

  readonly open = model<boolean>(false);
  readonly searchValue = signal<string>('');

  protected readonly class = computed(() => cn('', this.classInput()));

  protected readonly triggerClass = computed(() =>
    cn(
      'flex h-10 w-[200px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm',
      'ring-offset-background placeholder:text-muted-foreground',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ),
  );

  protected readonly displayText = computed(() => {
    if (this.multiple()) {
      const selectedValues = this.values();
      if (selectedValues.length === 0) return this.placeholder();
      if (selectedValues.length === 1) {
        const option = this.options().find(
          (o) => o.value === selectedValues[0],
        );
        return option?.label ?? this.placeholder();
      }
      return `${selectedValues.length} selected`;
    } else {
      const selectedValue = this.value();
      if (!selectedValue) return this.placeholder();
      const option = this.options().find((o) => o.value === selectedValue);
      return option?.label ?? this.placeholder();
    }
  });

  protected isSelected(optionValue: string): boolean {
    if (this.multiple()) {
      return this.values().includes(optionValue);
    }
    return this.value() === optionValue;
  }

  protected selectOption(option: ComboboxOption): void {
    if (option.disabled) return;

    if (this.multiple()) {
      const current = this.values();
      if (current.includes(option.value)) {
        this.values.set(current.filter((v) => v !== option.value));
      } else {
        this.values.set([...current, option.value]);
      }
    } else {
      this.value.set(option.value);
      this.open.set(false);
      this.searchValue.set('');
    }
  }
}
