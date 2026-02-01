import { Directive, computed, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'div[scx-sidebar-separator]',
  host: {
    'data-slot': 'sidebar-separator',
    '[class]': 'class()',
  },
})
export class ScxSidebarSeparator {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'mx-2 w-auto bg-sidebar-border',
      'group-data-[collapsible=icon]:mx-2',
      this.classInput(),
    ),
  );
}
