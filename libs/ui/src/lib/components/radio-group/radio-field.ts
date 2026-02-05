import { _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { cn } from '../../utils';
import { SC_FIELD_ID } from '../label/label-id';

@Component({
  selector: 'div[sc-radio-field], label[sc-radio-field]',
  imports: [],
  providers: [{ provide: SC_FIELD_ID, useExisting: ScRadioField }],
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
  readonly id = input(inject(_IdGenerator).getId('sc-radio-field-'));
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('relative inline-flex items-start gap-2', this.classInput()),
  );
}
