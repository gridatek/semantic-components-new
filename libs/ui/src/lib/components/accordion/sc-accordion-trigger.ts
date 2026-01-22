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
  selector: 'button[sc-accordion-trigger]',
  template: `
    <ng-content />
    <svg
      class="size-4 shrink-0 text-muted-foreground transition-transform duration-200"
      [class.rotate-180]="item.isOpen()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  `,
  host: {
    'data-slot': 'accordion-trigger',
    type: 'button',
    '[attr.aria-expanded]': 'item.isOpen()',
    '[attr.data-state]': 'item.isOpen() ? "open" : "closed"',
    '[attr.data-disabled]': 'item.disabled() || null',
    '[disabled]': 'item.disabled() || null',
    '[class]': 'class()',
    '(click)': 'item.toggle()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAccordionTrigger {
  readonly item = inject(ScAccordionItem);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all',
      'hover:underline',
      '[&[data-state=open]>svg]:rotate-180',
      'disabled:pointer-events-none disabled:opacity-50',
      this.classInput(),
    ),
  );
}
