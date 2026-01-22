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
  selector: 'p[sc-form-description]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'form-description',
    '[class]': 'class()',
    '[id]': 'formField ? formField.name() + "-description" : null',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFormDescription {
  readonly formField = inject(SC_FORM_FIELD, { optional: true });

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('text-sm text-muted-foreground', this.classInput()),
  );
}
