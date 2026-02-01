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

  /**
   * Tracks how many animations have completed during close sequence
   * Target: 2 (dialog + backdrop)
   */
  private readonly animationsCompleted = signal<number>(0);

  protected readonly class = computed(() => cn('relative', this.classInput()));

  constructor() {
    // Synchronize overlay state with logical state for opening
    effect(() => {
      if (this.open()) {
        // Opening: Mount DOM immediately so animation can start
        this.overlayOpen.set(true);
        // Reset counter when opening for next close cycle
        this.animationsCompleted.set(0);
      }
      // Note: When closing (open = false), overlayOpen stays true
      // until both animations complete (handled by animation completion methods)
    });

    // Close overlay when both animations complete
    effect(() => {
      const completed = this.animationsCompleted();
      if (completed === 2 && !this.open()) {
        this.overlayOpen.set(false);
        // Reset for next cycle
        this.animationsCompleted.set(0);
      }
    });
  }

  /**
   * Called by dialog when its close animation completes
   */
  onDialogAnimationComplete(): void {
    if (!this.open()) {
      this.animationsCompleted.update((n) => n + 1);
    }
  }

  /**
   * Called by portal when backdrop close animation completes
   */
  onBackdropAnimationComplete(): void {
    if (!this.open()) {
      this.animationsCompleted.update((n) => n + 1);
    }
  }
}
