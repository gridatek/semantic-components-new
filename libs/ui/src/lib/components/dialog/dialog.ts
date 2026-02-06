import { _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScDialogProvider } from './dialog-provider';

type ScDialogState = 'open' | 'closed' | 'hidden';

@Component({
  selector: 'div[sc-dialog]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'dialog',
    role: 'dialog',
    'aria-modal': 'true',
    '[attr.aria-labelledby]': 'titleId',
    '[attr.aria-describedby]': 'descriptionId',
    '[attr.data-open]': 'state() === "open" ? "" : null',
    '[attr.data-closed]': 'state() === "closed" ? "" : null',
    '[attr.data-hidden]': 'state() === "hidden" ? "" : null',
    '[class]': 'class()',
    '[tabindex]': '-1',
    '(animationend)': 'onAnimationEnd($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDialog {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly dialogProvider = inject(ScDialogProvider);
  readonly classInput = input<string>('', { alias: 'class' });
  readonly state = signal<ScDialogState>('closed');

  readonly dialogId = inject(_IdGenerator).getId('sc-dialog-');

  readonly titleId = `${this.dialogId}-title`;
  readonly descriptionId = `${this.dialogId}-description`;

  protected readonly class = computed(() =>
    cn(
      'data-hidden:hidden',
      'bg-background data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 ring-foreground/10 grid max-w-[calc(100%-2rem)] gap-4 rounded-xl p-4 text-sm ring-1 duration-100 sm:max-w-sm fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none',
      this.classInput(),
    ),
  );

  constructor() {
    console.log('Dialog initialized with ID:', this.dialogId);

    // Sync state with provider's open signal
    effect(() => {
      const isOpen = this.dialogProvider.open();
      if (this.state() !== 'hidden') {
        this.state.set(isOpen ? 'open' : 'closed');
      }
    });
  }

  protected onAnimationEnd(event: AnimationEvent): void {
    // Only trigger cleanup when close animation completes
    if (
      this.state() === 'closed' &&
      event.target === this.elementRef.nativeElement
    ) {
      this.state.set('hidden');
      this.dialogProvider.onDialogAnimationComplete();
    }
  }
}
