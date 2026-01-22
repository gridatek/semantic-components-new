import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScPopoverTrigger } from './sc-popover-trigger';

export type PopoverAlign = 'start' | 'center' | 'end';
export type PopoverSide = 'top' | 'right' | 'bottom' | 'left';

@Component({
  selector: 'div[sc-popover]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'popover',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPopover {
  readonly classInput = input<string>('', { alias: 'class' });

  /** Which side the popover appears on */
  readonly side = input<PopoverSide>('bottom');

  /** Alignment along the side */
  readonly align = input<PopoverAlign>('center');

  /** Whether the popover is open */
  readonly open = model<boolean>(false);

  private readonly triggerChild = contentChild(ScPopoverTrigger);

  readonly origin = computed(() => this.triggerChild()?.overlayOrigin);

  protected readonly class = computed(() =>
    cn('relative inline-block', this.classInput()),
  );
}
