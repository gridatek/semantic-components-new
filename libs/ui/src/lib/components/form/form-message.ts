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
  selector: 'p[sc-form-message]',
  template: `
    {{ message() }}
  `,
  host: {
    'data-slot': 'form-message',
    '[class]': 'class()',
    '[id]': 'messageId()',
    role: 'alert',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFormMessage {
  readonly formField = inject(SC_FORM_FIELD, { optional: true });

  readonly classInput = input<string>('', { alias: 'class' });
  readonly customMessage = input<string>('', { alias: 'message' });

  protected readonly messageId = computed(() =>
    this.formField ? `${this.formField.name()}-message` : null,
  );

  protected readonly class = computed(() =>
    cn('text-sm font-medium text-destructive', this.classInput()),
  );

  protected readonly message = computed(() => {
    if (this.customMessage()) return this.customMessage();
    return this.formField?.errorMessage() ?? '';
  });
}
