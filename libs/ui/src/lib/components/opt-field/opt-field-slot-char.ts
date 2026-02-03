import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'sc-opt-field-slot-char',
  host: {
    'data-slot': 'opt-field-slot-char',
    '[class]': 'class()',
  },
  template: `{{ char() }}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScOptFieldSlotChar {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly char = input<string>('');

  protected readonly class = computed(() =>
    cn('pointer-events-none', this.classInput()),
  );
}
