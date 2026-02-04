import {
  computed,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  model,
  signal,
} from '@angular/core';
import type { FormCheckboxControl } from '@angular/forms/signals';
import { cn } from '../../utils';

export const SC_CHECKBOX = 'SC_CHECKBOX';

@Directive({
  selector: 'input[type="checkbox"][sc-checkbox]',
  host: {
    'data-slot': 'checkbox',
    '[class]': 'class()',
    '[checked]': 'checked()',
    '(change)': 'onInputChange($event)',
  },
  exportAs: SC_CHECKBOX,
})
export class ScCheckbox implements FormCheckboxControl {
  private readonly elementRef = inject(ElementRef<HTMLInputElement>);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly indeterminate = input<boolean>(false);
  readonly checked = model<boolean>(false);

  // Expose disabled state as a signal
  readonly disabledSignal = signal(false);

  constructor() {
    // Sync indeterminate input to native property
    effect(() => {
      this.elementRef.nativeElement.indeterminate = this.indeterminate();
    });

    // Track disabled state
    effect(() => {
      this.disabledSignal.set(this.elementRef.nativeElement.disabled);
    });
  }

  protected onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.checked.set(input.checked);
    this.disabledSignal.set(input.disabled);
  }

  protected readonly class = computed(() =>
    cn(
      'peer absolute inset-0 size-full cursor-pointer opacity-0',
      'disabled:cursor-not-allowed',
      this.classInput(),
    ),
  );
}
