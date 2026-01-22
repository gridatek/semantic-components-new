import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'div[sc-tabs-list]',
  host: {
    'data-slot': 'tabs-list',
    role: 'tablist',
    '[class]': 'class()',
  },
})
export class ScTabsList {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
      this.classInput(),
    ),
  );
}
