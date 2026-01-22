import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { SC_FORM_FIELD } from './form-field';

@Component({
  selector: 'label[sc-form-label]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'form-label',
    '[class]': 'class()',
    '[attr.data-error]': 'formField?.showError || null',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFormLabel {
  readonly formField = inject(SC_FORM_FIELD, { optional: true });

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'text-sm font-medium leading-none',
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      'data-[error=true]:text-destructive',
      this.classInput(),
    ),
  );
}
