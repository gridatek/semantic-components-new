import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { cn } from '../../utils';
import { ScInputOtp } from './input-otp';

@Component({
  selector: 'sc-input-otp-slot',
  host: {
    'data-slot': 'input-otp-slot',
    '[class]': 'class()',
    '[attr.data-active]': 'isActive() ? "" : null',
    '[attr.data-filled]': 'isFilled() ? "" : null',
  },
  template: `
    <input
      #inputEl
      type="text"
      inputmode="numeric"
      autocomplete="one-time-code"
      maxlength="1"
      [value]="char()"
      [disabled]="otp.disabled()"
      class="absolute inset-0 size-full bg-transparent text-center text-sm outline-none caret-transparent selection:bg-transparent disabled:cursor-not-allowed"
      (input)="onInput($event)"
      (keydown)="onKeydown($event)"
      (focus)="onFocus()"
      (blur)="onBlur()"
    />
    @if (isActive() && !isFilled()) {
      <div
        class="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div class="h-4 w-px animate-caret-blink bg-foreground"></div>
      </div>
    }
    <span class="pointer-events-none">{{ char() }}</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInputOtpSlot {
  readonly otp = inject(ScInputOtp);
  private readonly inputEl = viewChild<ElementRef<HTMLInputElement>>('inputEl');

  readonly classInput = input<string>('', { alias: 'class' });

  private readonly index = signal<number>(0);
  private readonly focused = signal<boolean>(false);

  readonly char = computed(() => this.otp.getChar(this.index()));
  readonly isActive = computed(() => this.focused() && !this.otp.disabled());
  readonly isFilled = computed(() => this.char() !== '');

  protected readonly class = computed(() =>
    cn(
      'relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
      this.isActive() && 'z-10 ring-2 ring-ring ring-offset-background',
      this.classInput(),
    ),
  );

  setIndex(idx: number): void {
    this.index.set(idx);
  }

  focus(): void {
    const input = this.inputEl();
    if (input) {
      input.nativeElement.focus();
    }
  }

  protected onFocus(): void {
    this.focused.set(true);
  }

  protected onBlur(): void {
    this.focused.set(false);
  }

  protected onInput(event: Event): void {
    if (this.otp.disabled()) return;

    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (value.length > 0) {
      // Take only the last character if multiple were entered
      const char = value.slice(-1);
      this.otp.setChar(this.index(), char);
      input.value = char;

      // Move to next slot
      this.otp.focusSlot(this.index() + 1);
    }
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (this.otp.disabled()) return;

    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace') {
      if (input.value === '' || this.char() === '') {
        // Move to previous slot and clear it
        const prevIndex = this.index() - 1;
        if (prevIndex >= 0) {
          this.otp.setChar(prevIndex, '');
          this.otp.focusSlot(prevIndex);
        }
      } else {
        // Clear current slot
        this.otp.setChar(this.index(), '');
        input.value = '';
      }
      event.preventDefault();
    } else if (event.key === 'ArrowLeft') {
      this.otp.focusSlot(this.index() - 1);
      event.preventDefault();
    } else if (event.key === 'ArrowRight') {
      this.otp.focusSlot(this.index() + 1);
      event.preventDefault();
    }
  }
}
