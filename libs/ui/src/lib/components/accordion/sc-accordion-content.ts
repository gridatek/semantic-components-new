import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScAccordionItem } from './sc-accordion-item';

@Component({
  selector: 'div[sc-accordion-content]',
  template: `
    @if (item.isOpen()) {
      <div [class]="innerClass()">
        <ng-content />
      </div>
    }
  `,
  host: {
    'data-slot': 'accordion-content',
    role: 'region',
    '[attr.data-state]': 'item.isOpen() ? "open" : "closed"',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAccordionContent {
  readonly item = inject(ScAccordionItem);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'overflow-hidden text-sm',
      this.item.isOpen() ? 'animate-accordion-down' : 'animate-accordion-up',
      this.classInput(),
    ),
  );

  protected readonly innerClass = computed(() => cn('pb-4 pt-0'));
}
