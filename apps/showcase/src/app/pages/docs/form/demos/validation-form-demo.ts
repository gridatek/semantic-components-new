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
  selector: 'app-validation-form-demo',
  imports: [FormField, ScButton],
  template: `
    <form class="max-w-sm space-y-6">
      <div class="space-y-2">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          [class.text-destructive]="
            validationForm.required().invalid() &&
            validationForm.required().touched()
          "
        >
          Required Field
        </label>
        <input
          [formField]="validationForm.required"
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          [class.border-destructive]="
            validationForm.required().invalid() &&
            validationForm.required().touched()
          "
          placeholder="This field is required"
        />
        @if (
          validationForm.required().invalid() &&
          validationForm.required().touched()
        ) {
          <p class="text-sm font-medium text-destructive" role="alert">
            This field is required
          </p>
        }
      </div>

      <div class="space-y-2">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          [class.text-destructive]="
            validationForm.minLength().invalid() &&
            validationForm.minLength().touched()
          "
        >
          Minimum Length
        </label>
        <input
          [formField]="validationForm.minLength"
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          [class.border-destructive]="
            validationForm.minLength().invalid() &&
            validationForm.minLength().touched()
          "
          placeholder="Minimum 5 characters"
        />
        @if (
          validationForm.minLength().invalid() &&
          validationForm.minLength().touched()
        ) {
          <p class="text-sm font-medium text-destructive" role="alert">
            @if (hasError(validationForm.minLength, 'required')) {
              This field is required
            } @else if (hasError(validationForm.minLength, 'minLength')) {
              Minimum length is 5 characters
            }
          </p>
        }
      </div>

      <div class="space-y-2">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          [class.text-destructive]="
            validationForm.email().invalid() && validationForm.email().touched()
          "
        >
          Email Validation
        </label>
        <input
          [formField]="validationForm.email"
          type="email"
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          [class.border-destructive]="
            validationForm.email().invalid() && validationForm.email().touched()
          "
          placeholder="Must be valid email"
        />
        @if (
          validationForm.email().invalid() && validationForm.email().touched()
        ) {
          <p class="text-sm font-medium text-destructive" role="alert">
            @if (hasError(validationForm.email, 'required')) {
              This field is required
            } @else if (hasError(validationForm.email, 'email')) {
              Please enter a valid email
            }
          </p>
        }
      </div>

      <button sc-button type="button" (click)="validateAll()">
        Validate All
      </button>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidationFormDemo {
  private readonly formModel = signal({
    required: '',
    minLength: '',
    email: '',
  });

  readonly validationForm = form(this.formModel, (path) => {
    required(path.required);
    required(path.minLength);
    minLength(path.minLength, 5);
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

  async validateAll(): Promise<void> {
    // submit() marks all fields as touched before calling the callback
    await submit(this.validationForm, async () => {
      // This will only be called if the form is valid
      console.log('Form is valid:', this.formModel());
      return null;
    });
  }
}
