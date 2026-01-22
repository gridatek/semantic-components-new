import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScHoverCard } from './sc-hover-card';

@Directive({
  selector: '[sc-hover-card-trigger]',
  hostDirectives: [CdkOverlayOrigin],
  host: {
    'data-slot': 'hover-card-trigger',
    '[class]': 'class()',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()',
  },
})
export class ScHoverCardTrigger {
  readonly hoverCard = inject(ScHoverCard);
  readonly overlayOrigin = inject(CdkOverlayOrigin);
  readonly classInput = input<string>('', { alias: 'class' });

  private showTimeout: ReturnType<typeof setTimeout> | null = null;
  private hideTimeout: ReturnType<typeof setTimeout> | null = null;

  protected readonly class = computed(() => cn('', this.classInput()));

  onMouseEnter(): void {
    this.cancelHide();
    this.scheduleShow();
  }

  onMouseLeave(): void {
    this.cancelShow();
    this.scheduleHide();
  }

  onFocus(): void {
    this.cancelHide();
    this.scheduleShow();
  }

  onBlur(): void {
    this.cancelShow();
    this.scheduleHide();
  }

  private scheduleShow(): void {
    this.cancelShow();
    this.showTimeout = setTimeout(() => {
      this.hoverCard.show();
    }, this.hoverCard.openDelay());
  }

  private cancelShow(): void {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }

  private scheduleHide(): void {
    this.cancelHide();
    this.hideTimeout = setTimeout(() => {
      this.hoverCard.hide();
    }, this.hoverCard.closeDelay());
  }

  cancelHide(): void {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
}
