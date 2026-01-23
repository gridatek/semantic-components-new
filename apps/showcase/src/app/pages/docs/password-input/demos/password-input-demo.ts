import { Component, signal } from '@angular/core';
import {
  ScPasswordInput,
  ScPasswordInputStrength,
  ScPasswordInputConfirm,
} from '@semantic-components/ui';

@Component({
  selector: 'app-password-input-demo',
  imports: [ScPasswordInput, ScPasswordInputStrength, ScPasswordInputConfirm],
  template: `
    <div class="space-y-8">
      <!-- Basic Password Input -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Basic Password Input</h3>
        <div class="max-w-sm">
          <sc-password-input
            [(value)]="basicPassword"
            placeholder="Enter your password"
          />
        </div>
        <p class="text-sm text-muted-foreground">
          Value: {{ basicPassword() ? '••••••••' : '(empty)' }}
        </p>
      </section>

      <!-- With Label -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">With Label</h3>
        <div class="max-w-sm space-y-2">
          <label class="text-sm font-medium leading-none">Password</label>
          <sc-password-input placeholder="Enter password" />
          <p class="text-xs text-muted-foreground">
            Must be at least 8 characters.
          </p>
        </div>
      </section>

      <!-- Disabled State -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Disabled State</h3>
        <div class="max-w-sm">
          <sc-password-input
            placeholder="Disabled input"
            [disabled]="true"
            [value]="'secretpassword'"
          />
        </div>
      </section>

      <!-- Show Password by Default -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Visible by Default</h3>
        <div class="max-w-sm">
          <sc-password-input
            placeholder="Password visible by default"
            [showByDefault]="true"
          />
        </div>
      </section>

      <!-- Password with Strength Indicator -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">With Strength Indicator</h3>
        <div class="max-w-sm">
          <sc-password-input-strength
            [(value)]="strengthPassword"
            placeholder="Create a strong password"
          />
        </div>
      </section>

      <!-- Strength Indicator Only (No Requirements) -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Strength Bar Only</h3>
        <div class="max-w-sm">
          <sc-password-input-strength
            placeholder="Type to see strength"
            [showRequirements]="false"
          />
        </div>
      </section>

      <!-- Requirements Only (No Strength Bar) -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Requirements Only</h3>
        <div class="max-w-sm">
          <sc-password-input-strength
            placeholder="Type to see requirements"
            [showStrength]="false"
          />
        </div>
      </section>

      <!-- Password Confirmation -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Password Confirmation</h3>
        <div class="max-w-sm">
          <sc-password-input-confirm
            [(password)]="newPassword"
            [(confirmPassword)]="confirmNewPassword"
            #confirmInput="scPasswordInputConfirm"
          />
          <button
            class="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 disabled:opacity-50"
            [disabled]="!confirmInput.isValid()"
          >
            Create Account
          </button>
        </div>
      </section>

      <!-- Custom Labels -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Custom Labels</h3>
        <div class="max-w-sm">
          <sc-password-input-confirm
            passwordLabel="New Password"
            confirmLabel="Re-enter Password"
            passwordPlaceholder="Enter new password"
            confirmPlaceholder="Type password again"
          />
        </div>
      </section>

      <!-- In Form Context -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Login Form Example</h3>
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
      </section>

      <!-- Registration Form Example -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Registration Form Example</h3>
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
                [(value)]="registrationPassword"
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
      </section>

      <!-- Sizes Comparison -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Different Widths</h3>
        <div class="space-y-2">
          <sc-password-input placeholder="Small width" class="w-48" />
          <sc-password-input placeholder="Medium width" class="w-64" />
          <sc-password-input placeholder="Large width" class="w-96" />
          <sc-password-input placeholder="Full width" class="w-full max-w-md" />
        </div>
      </section>
    </div>
  `,
})
export class ScPasswordInputDemo {
  readonly basicPassword = signal('');
  readonly strengthPassword = signal('');
  readonly newPassword = signal('');
  readonly confirmNewPassword = signal('');
  readonly registrationPassword = signal('');
}
