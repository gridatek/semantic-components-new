import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  model,
  signal,
  viewChild,
} from '@angular/core';
import { cn } from '../../utils';

@Directive({
  selector: 'div[sc-input-otp]',
  host: {
    'data-slot': 'input-otp',
    '[class]': 'class()',
    '(paste)': 'onPaste($event)',
  },
})
export class ScInputOtp {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly maxLength = input<number>(6);
  readonly value = model<string>('');
  readonly disabled = input<boolean>(false);

  private readonly slots = contentChildren(ScInputOtpSlot, {
    descendants: true,
  });

  protected readonly class = computed(() =>
    cn('flex items-center gap-2 has-[:disabled]:opacity-50', this.classInput()),
  );

  readonly chars = computed(() => {
    const val = this.value();
    const max = this.maxLength();
    const result: string[] = [];
    for (let i = 0; i < max; i++) {
      result.push(val[i] || '');
    }
    return result;
  });

  constructor() {
    effect(() => {
      const allSlots = this.slots();
      allSlots.forEach((slot, index) => {
        slot.setIndex(index);
      });
    });
  }

  getChar(index: number): string {
    return this.chars()[index] || '';
  }

  setChar(index: number, char: string): void {
    const current = this.value();
    const chars = current.split('');

    // Pad with empty strings if needed
    while (chars.length < index) {
      chars.push('');
    }

    chars[index] = char;

    // Join and trim trailing empty chars
    let newValue = chars.join('');
    // Keep only up to maxLength
    newValue = newValue.slice(0, this.maxLength());

    this.value.set(newValue);
  }

  focusSlot(index: number): void {
    const allSlots = this.slots();
    if (index >= 0 && index < allSlots.length) {
      allSlots[index].focus();
    }
  }

  protected onPaste(event: ClipboardEvent): void {
    if (this.disabled()) return;

    event.preventDefault();
    const pastedData = event.clipboardData?.getData('text') || '';
    const cleanData = pastedData.replace(/\s/g, '').slice(0, this.maxLength());

    if (cleanData) {
      this.value.set(cleanData);
      // Focus the slot after the last pasted character or the last slot
      const focusIndex = Math.min(cleanData.length, this.maxLength() - 1);
      this.focusSlot(focusIndex);
    }
  }
}

@Directive({
  selector: '[sc-input-otp-group]',
  host: {
    'data-slot': 'input-otp-group',
    '[class]': 'class()',
  },
})
export class ScInputOtpGroup {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex items-center', this.classInput()),
  );
}

@Component({
  selector: 'sc-input-otp-slot',
  host: {
    'data-slot': 'input-otp-slot',
    '[class]': 'hostClass()',
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

  protected readonly hostClass = computed(() =>
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

@Directive({
  selector: '[sc-input-otp-separator]',
  host: {
    'data-slot': 'input-otp-separator',
    role: 'separator',
    '[class]': 'class()',
  },
})
export class ScInputOtpSeparator {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex items-center', this.classInput()),
  );
}
