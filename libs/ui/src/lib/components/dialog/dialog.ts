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

type ScDialogState = 'open' | 'closed';

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
    '[attr.data-state]': 'state()',
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
      'bg-background relative z-50 grid w-full max-w-lg gap-4 rounded-lg border p-6 shadow-lg',
      'animate-in fade-in-0 zoom-in-95 duration-300',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:duration-300',
      this.classInput(),
    ),
  );

  constructor() {
    // Sync state with provider's open signal
    effect(() => {
      const isOpen = this.dialogProvider.open();
      this.state.set(isOpen ? 'open' : 'closed');
    });
  }

  protected onAnimationEnd(event: AnimationEvent): void {
    // Only trigger cleanup when close animation completes
    if (
      this.state() === 'closed' &&
      event.target === this.elementRef.nativeElement
    ) {
      this.dialogProvider.onDialogAnimationComplete();
    }
  }
}
