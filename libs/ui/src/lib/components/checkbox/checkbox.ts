import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
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
      type="checkbox"
      [id]="id()"
      [name]="name()"
      [checked]="checked()"
      [disabled]="disabled()"
      [attr.aria-hidden]="true"
      tabindex="-1"
      class="sr-only"
      (change)="onInputChange($event)"
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
  readonly classInput = input<string>('', { alias: 'class' });
  readonly checked = model<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly indeterminate = input<boolean>(false);
  readonly id = input<string>('');
  readonly name = input<string>('');

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
}
