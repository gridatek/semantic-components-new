import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { CdkMenuItem } from '@angular/cdk/menu';
import { cn } from '../../utils';

@Component({
  selector: '[sc-dropdown-menu-checkbox-item]',
  hostDirectives: [CdkMenuItem],
  template: `
    <span class="absolute left-2 flex size-3.5 items-center justify-center">
      @if (checked()) {
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
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      }
    </span>
    <ng-content />
  `,
  host: {
    'data-slot': 'dropdown-menu-checkbox-item',
    role: 'menuitemcheckbox',
    '[class]': 'class()',
    '[attr.aria-checked]': 'checked()',
    '(click)': 'toggle()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDropdownMenuCheckboxItem {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly checked = model<boolean>(false);

  protected readonly class = computed(() =>
    cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
      'transition-colors focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      this.classInput(),
    ),
  );

  toggle(): void {
    this.checked.update((v) => !v);
  }
}
