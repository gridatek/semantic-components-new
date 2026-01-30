import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-theme-field]',
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
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('space-y-2', this.classInput()));
}
