import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ScFormField,
  ScFormItem,
  ScFormLabel,
  ScFormControl,
  ScFormDescription,
  ScFormMessage,
} from '@semantic-components/ui';
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-form-demo',
  imports: [
    ReactiveFormsModule,
    ScFormField,
    ScFormItem,
    ScFormLabel,
    ScFormControl,
    ScFormDescription,
    ScFormMessage,
    ScButton,
  ],
  template: `
    <form
      [formGroup]="form"
      (ngSubmit)="onSubmit()"
      class="max-w-sm space-y-6"
    >
      <div sc-form-field name="username">
        <div sc-form-item>
          <label sc-form-label>Username</label>
          <input
            sc-form-control
            formControlName="username"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Enter username"
          />
          <p sc-form-description>This is your public display name.</p>
          @if (form.get('username')?.invalid && form.get('username')?.touched) {
            <p sc-form-message></p>
          }
        </div>
      </div>

      <div sc-form-field name="email">
        <div sc-form-item>
          <label sc-form-label>Email</label>
          <input
            sc-form-control
            formControlName="email"
            type="email"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Enter email"
          />
          @if (form.get('email')?.invalid && form.get('email')?.touched) {
            <p sc-form-message></p>
          }
        </div>
      </div>

      <button sc-button type="submit">Submit</button>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicFormDemo {
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
