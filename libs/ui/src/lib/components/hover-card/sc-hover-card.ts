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
import { ScHoverCardTrigger } from './sc-hover-card-trigger';

export type HoverCardSide = 'top' | 'right' | 'bottom' | 'left';
export type HoverCardAlign = 'start' | 'center' | 'end';

@Component({
  selector: 'div[sc-hover-card]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'hover-card',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScHoverCard {
  readonly classInput = input<string>('', { alias: 'class' });

  /** Which side the hover card appears on */
  readonly side = input<HoverCardSide>('bottom');

  /** Alignment along the side */
  readonly align = input<HoverCardAlign>('center');

  /** Delay before showing hover card (ms) */
  readonly openDelay = input<number>(700);

  /** Delay before hiding hover card (ms) */
  readonly closeDelay = input<number>(300);

  /** Whether the hover card is open */
  readonly open = signal<boolean>(false);

  private readonly triggerChild = contentChild(ScHoverCardTrigger);

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

  /** Cancel pending hide timeout on the trigger */
  cancelTriggerHide(): void {
    this.triggerChild()?.cancelHide();
  }
}
