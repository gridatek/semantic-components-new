import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'svg[sc-radio-checked-icon]',
  host: {
    'data-slot': 'radio-checked-icon',
    '[class]': 'class()',
  },
})
export class ScRadioCheckedIcon {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('size-2.5 fill-current', this.classInput()),
  );
}
