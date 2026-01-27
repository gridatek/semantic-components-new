import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPasswordInput } from '@semantic-components/ui';

@Component({
  selector: 'app-login-form-password-input-demo',
  imports: [ScPasswordInput],
  template: `
    <div class="max-w-sm rounded-lg border p-4">
      <h4 class="text-base font-semibold mb-4">Sign In</h4>
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
          <sc-password-input
            placeholder="Enter your password"
            autocomplete="current-password"
          />
        </div>
        <button
          class="w-full h-9 rounded-md bg-primary text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
        >
          Sign In
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormPasswordInputDemo {}
