import { AccordionContent, AccordionPanel } from '@angular/aria/accordion';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-accordion-panel]',
  imports: [AccordionContent],
  hostDirectives: [
    {
      directive: AccordionPanel,
      inputs: ['panelId'],
    },
  ],
  template: `
    <ng-template ngAccordionContent>
      <ng-content />
    </ng-template>
  `,
  host: {
    'data-slot': 'accordion-panel',
    '[attr.data-state]': 'panel.visible() ? "open" : "closed"',
    '[class]': 'class()',
    'animate.enter': 'animate-accordion-down',
    'animate.leave': 'animate-accordion-up',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAccordionPanel {
  protected readonly panel = inject(AccordionPanel);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('text-sm overflow-hidden', this.classInput()),
  );

  constructor() {
    afterNextRender(() => {
      effect(() => {
        this.panel.visible();
        const height = this.elementRef.nativeElement.scrollHeight;
        this.elementRef.nativeElement.style.setProperty(
          '--radix-accordion-content-height',
          `${height}px`,
        );
      });
    });
  }
}
