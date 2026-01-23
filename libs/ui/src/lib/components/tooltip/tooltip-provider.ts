import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  input,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScTooltipTrigger } from './tooltip-trigger';

export type TooltipSide = 'top' | 'right' | 'bottom' | 'left';

@Component({
  selector: 'div[sc-tooltip-provider]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'tooltip-provider',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTooltipProvider {
  readonly classInput = input<string>('', { alias: 'class' });

  /** Which side the tooltip appears on */
  readonly side = input<TooltipSide>('top');

  /** Delay before showing tooltip (ms) */
  readonly delayDuration = input<number>(200);

  /** Whether the tooltip is open */
  readonly open = signal<boolean>(false);

  private readonly triggerChild = contentChild(ScTooltipTrigger);

  readonly origin = computed(() => this.triggerChild()?.overlayOrigin);

  protected readonly class = computed(() =>
    cn('relative inline-block', this.classInput()),
  );

  show(): void {
    this.open.set(true);
  }

  hide(): void {
    this.open.set(false);
  }
}
