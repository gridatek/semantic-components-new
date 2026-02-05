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
  selector: 'div[sc-theme-field]',
  providers: [{ provide: SC_FIELD_ID, useExisting: ScThemeField }],
  host: {
    'data-slot': 'theme-field',
    '[class]': 'class()',
  },
  template: `
    <ng-content />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScThemeField {
  readonly id = input(inject(_IdGenerator).getId('sc-theme-field-'));
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('space-y-2', this.classInput()));
}
