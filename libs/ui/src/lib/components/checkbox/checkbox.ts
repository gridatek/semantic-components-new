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

@Component({
  selector: 'sc-checkbox',
  host: {
    'data-slot': 'checkbox',
    '[class]': 'class()',
    '[attr.data-state]': 'dataState()',
    '[attr.data-disabled]': 'disabled() ? "" : null',
    '(click)': 'toggle()',
    '(keydown.space)': 'onSpace($event)',
    '[attr.role]': '"checkbox"',
    '[attr.aria-checked]': 'ariaChecked()',
    '[attr.aria-disabled]': 'disabled()',
    '[tabindex]': 'disabled() ? -1 : 0',
  },
  template: `
    <input
      #inputElement
      type="checkbox"
      [name]="name()"
      [checked]="checked()"
      [disabled]="disabled()"
      [attr.aria-hidden]="true"
      tabindex="-1"
      class="sr-only"
      (change)="onInputChange($event)"
      (click)="onInputClick($event)"
    />
    @if (checked() || indeterminate()) {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-4"
      >
        @if (indeterminate()) {
          <line x1="5" x2="19" y1="12" y2="12" />
        } @else {
          <path d="M20 6 9 17l-5-5" />
        }
      </svg>
    }
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
    // Transfer id from host element to hidden input for label association
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

  protected readonly ariaChecked = computed(() => {
    if (this.indeterminate()) return 'mixed';
    return this.checked();
  });

  protected readonly class = computed(() =>
    cn(
      'peer inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-primary ring-offset-background transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
      'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      'data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground',
      this.classInput(),
    ),
  );

  protected toggle(): void {
    if (!this.disabled()) {
      this.checked.update((v) => !v);
    }
  }

  protected onSpace(event: Event): void {
    event.preventDefault();
    this.toggle();
  }

  protected onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.checked.set(input.checked);
  }

  protected onInputClick(event: Event): void {
    // Prevent the click from bubbling to the host element
    // to avoid double-toggling when clicking via label
    event.stopPropagation();
  }
}
