import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  output,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

type ScBackdropState = 'initial' | 'open' | 'closed';

@Component({
  selector: 'div[sc-backdrop]',
  template: '',
  host: {
    'data-slot': 'backdrop',
    '[class]': 'class()',
    '[attr.data-initial]': 'state() === "initial" ? "" : null',
    '[attr.data-open]': 'state() === "open" ? "" : null',
    '[attr.data-closed]': 'state() === "closed" ? "" : null',
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

  protected readonly state = signal<ScBackdropState>('initial');

  /**
   * Emits when the close animation completes
   */
  readonly animationComplete = output<void>();

  protected readonly class = computed(() =>
    cn(
      'data-initial:opacity-0 pointer-events-none',
      'data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50',
      this.classInput(),
    ),
  );

  constructor() {
    // Sync state with open input
    effect(() => {
      const isOpen = this.open();
      this.state.set(isOpen ? 'open' : 'closed');
    });
  }

  protected onAnimationEnd(event: AnimationEvent): void {
    // Only emit when close animation completes
    if (!this.open() && event.target === this.elementRef.nativeElement) {
      this.state.set('initial');
      this.animationComplete.emit();
    }
  }
}
