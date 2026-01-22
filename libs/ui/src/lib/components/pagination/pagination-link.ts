import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'a[sc-pagination-link], button[sc-pagination-link]',
  host: {
    'data-slot': 'pagination-link',
    '[class]': 'class()',
    '[attr.aria-current]': 'isActive() ? "page" : null',
  },
})
export class ScPaginationLink {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly isActive = input<boolean>(false);
  readonly size = input<'default' | 'sm' | 'lg' | 'icon'>('icon');

  protected readonly class = computed(() => {
    const sizeClasses = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 px-3',
      lg: 'h-11 px-8',
      icon: 'size-10',
    };

    return cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'hover:bg-accent hover:text-accent-foreground',
      this.isActive() && 'border border-input bg-background',
      sizeClasses[this.size()],
      this.classInput(),
    );
  });
}
