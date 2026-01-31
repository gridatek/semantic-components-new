import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'button[sc-toast-action]',
  host: {
    'data-slot': 'toast-action',
    type: 'button',
    '[class]': 'class()',
  },
})
export class ScToastAction {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3',
      'text-sm font-medium transition-colors',
      'hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring',
      'disabled:pointer-events-none disabled:opacity-50',
      'group-[.destructive]:border-destructive-foreground/40 group-[.destructive]:hover:border-destructive-foreground/30',
      'group-[.destructive]:hover:bg-destructive-foreground/20 group-[.destructive]:hover:text-destructive-foreground',
      'group-[.destructive]:focus:ring-destructive-foreground/50',
      this.classInput(),
    ),
  );
}
