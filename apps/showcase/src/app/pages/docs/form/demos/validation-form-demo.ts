import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ScFormField,
  ScFormItem,
  ScFormLabel,
  ScFormControl,
  ScFormMessage,
} from '@semantic-components/ui';
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-validation-form-demo',
  imports: [
    ReactiveFormsModule,
    ScFormField,
    ScFormItem,
    ScFormLabel,
    ScFormControl,
    ScFormMessage,
    ScButton,
  ],
  template: `
    <form [formGroup]="form" class="max-w-sm space-y-6">
      <div sc-form-field name="required">
        <div sc-form-item>
          <label sc-form-label>Required Field</label>
          <input
            sc-form-control
            formControlName="required"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="This field is required"
          />
          @if (form.get('required')?.invalid && form.get('required')?.touched) {
            <p sc-form-message></p>
          }
        </div>
      </div>

      <div sc-form-field name="minLength">
        <div sc-form-item>
          <label sc-form-label>Minimum Length</label>
          <input
            sc-form-control
            formControlName="minLength"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Minimum 5 characters"
          />
          @if (
            form.get('minLength')?.invalid && form.get('minLength')?.touched
          ) {
            <p sc-form-message></p>
          }
        </div>
      </div>

      <div sc-form-field name="email">
        <div sc-form-item>
          <label sc-form-label>Email Validation</label>
          <input
            sc-form-control
            formControlName="email"
            type="email"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Must be valid email"
          />
          @if (form.get('email')?.invalid && form.get('email')?.touched) {
            <p sc-form-message></p>
          }
        </div>
      </div>

      <button sc-button type="button" (click)="validateAll()">
        Validate All
      </button>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidationFormDemo {
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.group({
    required: ['', Validators.required],
    minLength: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
  });

  validateAll(): void {
    this.form.markAllAsTouched();
  }
}
