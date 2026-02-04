import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  model,
  viewChild,
} from '@angular/core';
import type { FormCheckboxControl } from '@angular/forms/signals';
import { cn } from '../../utils';
import { ScInvisibleCheckbox } from './invisible-checkbox';
import { ScVisualCheckbox } from './visual-checkbox';

@Component({
  selector: 'sc-checkbox',
  imports: [ScInvisibleCheckbox, ScVisualCheckbox],
  host: {
    'data-slot': 'checkbox',
    '[class]': 'class()',
    '[attr.data-state]': 'dataState()',
    '[attr.data-disabled]': 'disabled() ? "" : null',
  },
  template: `
    <input
      #inputElement
      type="checkbox"
      sc-invisible-checkbox
      [id]="id()"
      [name]="name()"
      [checked]="checked()"
      [disabled]="disabled()"
      (change)="onInputChange($event)"
    />
    <span sc-visual-checkbox [state]="dataState()"></span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCheckbox implements FormCheckboxControl {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly inputElement =
    viewChild<ElementRef<HTMLInputElement>>('inputElement');

  readonly classInput = input<string>('', { alias: 'class' });
  readonly checked = model<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly indeterminate = input<boolean>(false);
  readonly id = input<string>('');
  readonly name = input<string>('');

  constructor() {
    // Sync indeterminate state to native input
    effect(() => {
      const input = this.inputElement()?.nativeElement;
      if (input) {
        input.indeterminate = this.indeterminate();
      }
    });

    // Transfer id from host element to input for label association
    effect(() => {
      const input = this.inputElement()?.nativeElement;
      if (input) {
        const hostId =
          this.id() || this.elementRef.nativeElement.getAttribute('id');
        if (hostId) {
          input.id = hostId;
          // Remove id from host element to prevent duplicate IDs
          this.elementRef.nativeElement.removeAttribute('id');
        }
      }
    });
  }

  protected readonly dataState = computed(() => {
    if (this.indeterminate()) return 'indeterminate';
    return this.checked() ? 'checked' : 'unchecked';
  });

  protected readonly class = computed(() =>
    cn(
      'relative inline-flex h-4 w-4 shrink-0',
      this.classInput(),
    ),
  );

  protected onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.checked.set(input.checked);
  }
}
