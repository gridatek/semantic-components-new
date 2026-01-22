import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'a[sc-navigation-menu-link]',
  host: {
    'data-slot': 'navigation-menu-link',
    '[class]': 'class()',
  },
})
export class ScNavigationMenuLink {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly active = input<boolean>(false);

  protected readonly class = computed(() =>
    cn(
      'group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2',
      'text-sm font-medium transition-colors',
      'hover:bg-accent hover:text-accent-foreground',
      'focus:bg-accent focus:text-accent-foreground focus:outline-none',
      this.active() && 'bg-accent/50',
      this.classInput(),
    ),
  );
}
