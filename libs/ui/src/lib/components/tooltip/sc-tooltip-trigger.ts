import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScTooltip } from './sc-tooltip';

@Directive({
  selector: '[sc-tooltip-trigger]',
  hostDirectives: [CdkOverlayOrigin],
  host: {
    'data-slot': 'tooltip-trigger',
    '[class]': 'class()',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()',
  },
})
export class ScTooltipTrigger {
  readonly tooltip = inject(ScTooltip);
  readonly overlayOrigin = inject(CdkOverlayOrigin);
  readonly classInput = input<string>('', { alias: 'class' });

  private showTimeout: ReturnType<typeof setTimeout> | null = null;

  protected readonly class = computed(() => cn('', this.classInput()));

  onMouseEnter(): void {
    this.scheduleShow();
  }

  onMouseLeave(): void {
    this.cancelShow();
    this.tooltip.hide();
  }

  onFocus(): void {
    this.scheduleShow();
  }

  onBlur(): void {
    this.cancelShow();
    this.tooltip.hide();
  }

  private scheduleShow(): void {
    this.cancelShow();
    this.showTimeout = setTimeout(() => {
      this.tooltip.show();
    }, this.tooltip.delayDuration());
  }

  private cancelShow(): void {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }
}
