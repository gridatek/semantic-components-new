import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'ul[sc-sidebar-menu]',
  host: {
    'data-slot': 'sidebar-menu',
    '[class]': 'class()',
  },
})
export class ScSidebarMenu {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex w-full min-w-0 flex-col gap-1', this.classInput()),
  );
}
