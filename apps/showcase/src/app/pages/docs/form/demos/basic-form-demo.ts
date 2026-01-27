import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  FormField,
  form,
  required,
  email,
  minLength,
  submit,
} from '@angular/forms/signals';
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-form-demo',
  imports: [FormField, ScButton],
  template: `
    <form (ngSubmit)="onSubmit()" class="max-w-sm space-y-6">
      <div class="space-y-2">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          [class.text-destructive]="
            loginForm.username().invalid() && loginForm.username().touched()
          "
        >
          Username
        </label>
        <input
          [formField]="loginForm.username"
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          [class.border-destructive]="
            loginForm.username().invalid() && loginForm.username().touched()
          "
          placeholder="Enter username"
        />
        <p class="text-sm text-muted-foreground">
          This is your public display name.
        </p>
        @if (loginForm.username().invalid() && loginForm.username().touched()) {
          <p class="text-sm font-medium text-destructive" role="alert">
            @if (hasError(loginForm.username, 'required')) {
              This field is required
            } @else if (hasError(loginForm.username, 'minLength')) {
              Minimum length is 3 characters
            }
          </p>
        }
      </div>

      <div class="space-y-2">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          [class.text-destructive]="
            loginForm.email().invalid() && loginForm.email().touched()
          "
        >
          Email
        </label>
        <input
          [formField]="loginForm.email"
          type="email"
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          [class.border-destructive]="
            loginForm.email().invalid() && loginForm.email().touched()
          "
          placeholder="Enter email"
        />
        @if (loginForm.email().invalid() && loginForm.email().touched()) {
          <p class="text-sm font-medium text-destructive" role="alert">
            @if (hasError(loginForm.email, 'required')) {
              This field is required
            } @else if (hasError(loginForm.email, 'email')) {
              Please enter a valid email
            }
          </p>
        }
      </div>

      <button sc-button type="submit">Submit</button>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicFormDemo {
  private readonly formModel = signal({
    username: '',
    email: '',
  });

  readonly loginForm = form(this.formModel, (path) => {
    required(path.username);
    minLength(path.username, 3);
    required(path.email);
    email(path.email);
  });

  hasError(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    field: any,
    errorKey: string,
  ): boolean {
    const errors = field().errors();
    if (!errors || !Array.isArray(errors)) return false;
    return errors.some(
      (e: { rule?: string; name?: string }) =>
        e.rule === errorKey || e.name === errorKey,
    );
  }

  async onSubmit(): Promise<void> {
    await submit(this.loginForm, async () => {
      console.log('Form submitted:', this.formModel());
      return null;
    });
  }
}
