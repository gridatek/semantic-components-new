import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-collapsible-content]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'collapsible-content',
    '[class]': 'class()',
    'animate.enter': 'animate-accordion-down',
    'animate.leave': 'animate-accordion-up',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCollapsibleContent {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('pt-0 pb-2.5', this.classInput()),
  );
}
