import { Directive, computed, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'div[scx-sidebar-footer]',
  host: {
    'data-slot': 'sidebar-footer',
    '[class]': 'class()',
  },
})
export class ScxSidebarFooter {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex flex-col gap-2 p-2', this.classInput()),
  );
}
