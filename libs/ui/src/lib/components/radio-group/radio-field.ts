import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-radio-field], label[sc-radio-field]',
  imports: [],
  host: {
    'data-slot': 'radio-field',
    '[class]': 'class()',
  },
  template: `
    <ng-content />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRadioField {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('relative inline-flex items-start gap-2', this.classInput()),
  );
}
