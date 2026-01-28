import { AccordionContent, AccordionPanel } from '@angular/aria/accordion';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-collapsible-panel]',
  imports: [AccordionContent],
  hostDirectives: [
    {
      directive: AccordionPanel,
      inputs: ['panelId'],
    },
  ],
  template: `
    <ng-template ngAccordionContent>
      <div [class]="innerClass()">
        <ng-content />
      </div>
    </ng-template>
  `,
  host: {
    'data-slot': 'collapsible-panel',
    '[attr.data-state]': 'panel.visible() ? "open" : "closed"',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCollapsiblePanel {
  protected readonly panel = inject(AccordionPanel);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'overflow-hidden text-sm',
      this.panel.visible()
        ? 'opacity-100 animate-in fade-in-0'
        : 'opacity-0 animate-out fade-out-0',
      this.classInput(),
    ),
  );

  protected readonly innerClass = computed(() => cn(''));
}
