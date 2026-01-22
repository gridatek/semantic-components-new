import { computed, Directive, input } from '@angular/core';
import { CdkMenuItem } from '@angular/cdk/menu';
import { cn } from '../../utils';

@Directive({
  selector: '[sc-dropdown-menu-item]',
  hostDirectives: [CdkMenuItem],
  host: {
    'data-slot': 'dropdown-menu-item',
    '[class]': 'class()',
    '[attr.data-inset]': 'inset() || null',
  },
})
export class ScDropdownMenuItem {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly inset = input<boolean>(false);

  protected readonly class = computed(() =>
    cn(
      'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none',
      'transition-colors focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      '[&>svg]:size-4 [&>svg]:shrink-0',
      this.inset() && 'pl-8',
      this.classInput(),
    ),
  );
}
