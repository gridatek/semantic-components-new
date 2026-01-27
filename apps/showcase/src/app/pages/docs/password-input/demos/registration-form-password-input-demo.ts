import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScPasswordInputStrength } from '@semantic-components/ui';

@Component({
  selector: 'app-registration-form-password-input-demo',
  imports: [ScPasswordInputStrength],
  template: `
    <div class="max-w-sm rounded-lg border p-4">
      <h4 class="text-base font-semibold mb-4">Create Account</h4>
      <div class="space-y-4">
        <div class="space-y-2">
          <label class="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="name@example.com"
            class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium">Password</label>
          <sc-password-input-strength
            [(value)]="password"
            placeholder="Create a password"
            autocomplete="new-password"
          />
        </div>
        <button
          class="w-full h-9 rounded-md bg-primary text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
        >
          Create Account
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormPasswordInputDemo {
  readonly password = signal('');
}
