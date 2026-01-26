import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'a[sc-pagination-next], button[sc-pagination-next]',
  host: {
    'data-slot': 'pagination-next',
    '[class]': 'class()',
    '[attr.aria-label]': '"Go to next page"',
    '[attr.aria-disabled]': 'disabled() || null',
  },
  template: `
    <ng-content />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationNext {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly disabled = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });

  protected readonly class = computed(() =>
    cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'hover:bg-accent hover:text-accent-foreground',
      'aria-disabled:pointer-events-none aria-disabled:opacity-50',
      'gap-1 pr-2.5 h-10 px-4 py-2',
      this.classInput(),
    ),
  );
}
