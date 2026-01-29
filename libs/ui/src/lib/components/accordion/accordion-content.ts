import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-accordion-content]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'accordion-content',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAccordionContent {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('pb-4 pt-0', this.classInput()));
}
