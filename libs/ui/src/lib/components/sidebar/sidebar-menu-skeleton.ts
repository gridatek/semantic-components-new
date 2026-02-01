import { Directive, computed, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'div[sc-sidebar-menu-skeleton]',
  host: {
    'data-slot': 'sidebar-menu-skeleton',
    '[class]': 'class()',
  },
})
export class ScSidebarMenuSkeleton {
  readonly classInput = input<string>('', { alias: 'class' });

  readonly showIcon = input<boolean>(false);

  protected readonly class = computed(() =>
    cn('rounded-md h-8 flex gap-2 px-2 items-center', this.classInput()),
  );
}
