import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'sc-opt-field-slot-input',
  host: {
    'data-slot': 'opt-field-slot-input',
  },
  template: `
    <input
      #inputEl
      type="text"
      inputmode="numeric"
      autocomplete="one-time-code"
      maxlength="1"
      [value]="value()"
      [disabled]="disabled()"
      [class]="class()"
      (input)="onInput($event)"
      (keydown)="onKeydown($event)"
      (focus)="focused.emit(true)"
      (blur)="focused.emit(false)"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScOptFieldSlotInput {
  private readonly inputEl = viewChild<ElementRef<HTMLInputElement>>('inputEl');

  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = input<string>('');
  readonly disabled = input<boolean>(false);

  readonly inputChange = output<string>();
  readonly keydown = output<KeyboardEvent>();
  readonly focused = output<boolean>();

  protected readonly class = computed(() =>
    cn(
      'absolute inset-0 size-full bg-transparent text-center text-sm outline-none caret-transparent selection:bg-transparent disabled:cursor-not-allowed',
      this.classInput(),
    ),
  );

  focus(): void {
    const input = this.inputEl();
    if (input) {
      input.nativeElement.focus();
    }
  }

  protected onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (value.length > 0) {
      const char = value.slice(-1);
      input.value = char;
      this.inputChange.emit(char);
    }
  }

  protected onKeydown(event: KeyboardEvent): void {
    this.keydown.emit(event);
  }
}
