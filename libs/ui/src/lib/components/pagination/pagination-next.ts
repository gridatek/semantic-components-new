import {
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
  },
  template: `
    <span>Next</span>
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationNext {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'hover:bg-accent hover:text-accent-foreground',
      'gap-1 pr-2.5 h-10 px-4 py-2',
      this.classInput(),
    ),
  );
}
