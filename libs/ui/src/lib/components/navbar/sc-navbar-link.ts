import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'a[sc-navbar-link], button[sc-navbar-link]',
  host: {
    'data-slot': 'navbar-link',
    '[class]': 'class()',
  },
})
export class ScNavbarLink {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly active = input<boolean>(false);

  protected readonly class = computed(() =>
    cn(
      'inline-flex items-center justify-center',
      'px-3 py-2 rounded-md',
      'text-sm font-medium',
      'transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      this.active()
        ? 'bg-accent text-accent-foreground'
        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
      this.classInput(),
    ),
  );
}
