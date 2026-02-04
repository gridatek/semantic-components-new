import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'svg[sc-checkbox-icon]',
  host: {
    'data-slot': 'checkbox-icon',
    '[class]': 'class()',
  },
})
export class ScCheckboxIcon {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('size-4', this.classInput()),
  );
}
