import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { CdkMenuItem } from '@angular/cdk/menu';
import { cn } from '../../utils';
import { ScDropdownMenuRadioGroup } from './dropdown-menu-radio-group';

@Component({
  selector: '[sc-dropdown-menu-radio-item]',
  hostDirectives: [CdkMenuItem],
  template: `
    <span class="absolute left-2 flex size-3.5 items-center justify-center">
      @if (isSelected()) {
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
          class="size-2 fill-current"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      }
    </span>
    <ng-content />
  `,
  host: {
    'data-slot': 'dropdown-menu-radio-item',
    role: 'menuitemradio',
    '[class]': 'class()',
    '[attr.aria-checked]': 'isSelected()',
    '(click)': 'select()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDropdownMenuRadioItem {
  private readonly radioGroup = inject(ScDropdownMenuRadioGroup, {
    optional: true,
  });

  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = input.required<string>();

  protected readonly class = computed(() =>
    cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
      'transition-colors focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      this.classInput(),
    ),
  );

  protected readonly isSelected = computed(() => {
    return this.radioGroup?.value() === this.value();
  });

  select(): void {
    this.radioGroup?.value.set(this.value());
  }
}
