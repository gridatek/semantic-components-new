import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  output,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScPasswordInput } from './password-input';

@Component({
  selector: 'sc-password-input-confirm',
  exportAs: 'scPasswordInputConfirm',
  template: `
    <div [class]="containerClass()">
      <div class="space-y-2">
        <label [class]="labelClass()">{{ passwordLabel() }}</label>
        <sc-password-input
          [(value)]="password"
          [placeholder]="passwordPlaceholder()"
          [disabled]="disabled()"
          autocomplete="new-password"
          class="w-full"
        />
      </div>

      <div class="space-y-2">
        <label [class]="labelClass()">{{ confirmLabel() }}</label>
        <sc-password-input
          [(value)]="confirmPassword"
          [placeholder]="confirmPlaceholder()"
          [disabled]="disabled()"
          autocomplete="new-password"
          class="w-full"
        />
      </div>

      @if (confirmPassword() && !matches()) {
        <p class="text-xs text-destructive flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="size-3"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
          </svg>
          Passwords do not match
        </p>
      }

      @if (confirmPassword() && matches()) {
        <p class="text-xs text-green-600 flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="size-3"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Passwords match
        </p>
      }
    </div>
  `,
  host: {
    'data-slot': 'password-input-confirm',
  },
  imports: [ScPasswordInput],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPasswordInputConfirm {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly disabled = input<boolean>(false);
  readonly passwordLabel = input<string>('Password');
  readonly confirmLabel = input<string>('Confirm Password');
  readonly passwordPlaceholder = input<string>('Enter password');
  readonly confirmPlaceholder = input<string>('Confirm password');

  readonly password = model<string>('');
  readonly confirmPassword = model<string>('');

  readonly matchChange = output<boolean>();

  protected readonly matches = computed(() => {
    const pwd = this.password();
    const confirm = this.confirmPassword();
    return pwd.length > 0 && pwd === confirm;
  });

  protected readonly containerClass = computed(() =>
    cn('space-y-4', this.classInput()),
  );

  protected readonly labelClass = computed(() =>
    cn('text-sm font-medium leading-none'),
  );

  isValid(): boolean {
    return this.matches();
  }
}
