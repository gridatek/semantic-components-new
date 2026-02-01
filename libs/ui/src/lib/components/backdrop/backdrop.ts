import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  output,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-backdrop]',
  template: '',
  host: {
    'data-slot': 'backdrop',
    '[class]': 'class()',
    '[attr.data-state]': 'open() ? "open" : "closed"',
    '(animationend)': 'onAnimationEnd($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScBackdrop {
  private readonly elementRef = inject(ElementRef);

  readonly classInput = input<string>('', { alias: 'class' });

  /**
   * Controls the backdrop animation state
   * When true: Triggers fade-in animation
   * When false: Triggers fade-out animation
   */
  readonly open = input.required<boolean>();

  /**
   * Emits when the close animation completes
   */
  readonly animationComplete = output<void>();

  protected readonly class = computed(() =>
    cn(
      'fixed inset-0 -z-10 bg-black/10 pointer-events-none',
      'supports-backdrop-filter:backdrop-blur-xs',
      'animate-in fade-in-0 duration-300',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:duration-300',
      this.classInput(),
    ),
  );

  protected onAnimationEnd(event: AnimationEvent): void {
    // Only emit when close animation completes
    if (!this.open() && event.target === this.elementRef.nativeElement) {
      this.animationComplete.emit();
    }
  }
}
