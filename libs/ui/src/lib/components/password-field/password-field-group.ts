import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { SC_FIELD } from '../field/field';

@Component({
  selector: '[sc-password-field-input-group]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'password-field-input-group',
    '[class]': 'class()',
    '[attr.data-disabled]': 'field.disabled() || null',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPasswordFieldInputGroup {
  readonly field = inject(SC_FIELD);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('relative', 'data-[disabled]:opacity-50', this.classInput()),
  );
}
