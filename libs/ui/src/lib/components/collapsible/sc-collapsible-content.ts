import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScCollapsible } from './sc-collapsible';

@Component({
  selector: 'div[sc-collapsible-content]',
  template: `
    @if (collapsible.open()) {
      <ng-content />
    }
  `,
  host: {
    'data-slot': 'collapsible-content',
    '[attr.data-state]': 'collapsible.open() ? "open" : "closed"',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCollapsibleContent {
  readonly collapsible = inject(ScCollapsible);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'overflow-hidden transition-all duration-200',
      this.collapsible.open()
        ? 'opacity-100 animate-in fade-in-0'
        : 'opacity-0 animate-out fade-out-0',
      this.classInput(),
    ),
  );
}
