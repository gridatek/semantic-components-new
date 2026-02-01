import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  model,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-alert-dialog-provider]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'alert-dialog-provider',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAlertDialogProvider {
  readonly classInput = input<string>('', { alias: 'class' });

  /**
   * Logical state: Controls animation state (open/closed)
   * - When true: Triggers entry animation
   * - When false: Triggers exit animation
   */
  readonly open = model<boolean>(false);

  /**
   * Physical state: Controls DOM presence
   * - When true: Content exists in DOM (can animate)
   * - When false: Content removed from DOM
   * - Stays true during close animation to allow it to complete
   */
  readonly overlayOpen = signal<boolean>(false);

  protected readonly class = computed(() => cn('relative', this.classInput()));

  constructor() {
    // Synchronize overlay state with logical state for opening
    effect(() => {
      if (this.open()) {
        // Opening: Mount DOM immediately so animation can start
        this.overlayOpen.set(true);
      }
      // Note: When closing (open = false), overlayOpen stays true
      // until animation completes (handled by onAnimationComplete)
    });
  }

  /**
   * Called by alert-dialog when close animation completes
   * This is when we actually remove the content from DOM
   * Waits 300ms to allow backdrop animation to complete
   */
  onAnimationComplete(): void {
    // Only close the overlay if we're not supposed to be open
    if (!this.open()) {
      // Wait 300ms for backdrop fade animation to complete
      setTimeout(() => {
        if (!this.open()) {
          this.overlayOpen.set(false);
        }
      }, 300);
    }
  }
}
