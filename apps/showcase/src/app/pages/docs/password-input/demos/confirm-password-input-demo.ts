import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScPasswordInputConfirm } from '@semantic-components/ui';

@Component({
  selector: 'app-confirm-password-input-demo',
  imports: [ScPasswordInputConfirm],
  template: `
    <div class="max-w-sm">
      <sc-password-input-confirm
        [(password)]="password"
        [(confirmPassword)]="confirmPassword"
        #confirmInput="scPasswordInputConfirm"
      />
      <button
        class="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 disabled:opacity-50"
        [disabled]="!confirmInput.isValid()"
      >
        Create Account
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmPasswordInputDemo {
  readonly password = signal('');
  readonly confirmPassword = signal('');
}
