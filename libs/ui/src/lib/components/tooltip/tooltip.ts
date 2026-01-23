import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScTooltipProvider } from './tooltip-provider';

@Component({
  selector: 'div[sc-tooltip]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'tooltip',
    role: 'tooltip',
    '[class]': 'class()',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTooltip {
  private readonly tooltip = inject(ScTooltipProvider);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'bg-primary text-primary-foreground z-50 rounded-md px-3 py-1.5 text-xs',
      this.tooltip.open()
        ? 'opacity-100 scale-100 transition-[opacity,transform] duration-150 ease-out'
        : 'opacity-0 scale-95 transition-[opacity,transform] duration-150 ease-in',
      this.classInput(),
    ),
  );

  onMouseEnter(): void {
    this.tooltip.show();
  }

  onMouseLeave(): void {
    this.tooltip.hide();
  }
}
