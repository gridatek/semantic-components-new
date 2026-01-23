import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScFormDemo } from './form-demo';

@Component({
  selector: 'app-form-demo-container',
  imports: [DemoContainer, ScFormDemo],
  template: `
    <app-demo-container title="Form" [code]="code">
      <app-sc-form-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFormDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
  selector: 'app-sc-form-demo',
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
  template: \`
    <div class="space-y-8">
      <!-- Basic Form -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Form</h3>
        <form
          [formGroup]="basicForm"
          (ngSubmit)="onBasicSubmit()"
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
              @if (
                basicForm.get('username')?.invalid &&
                basicForm.get('username')?.touched
              ) {
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
              @if (
                basicForm.get('email')?.invalid &&
                basicForm.get('email')?.touched
              ) {
                <p sc-form-message></p>
              }
            </div>
          </div>

          <button sc-button type="submit">Submit</button>
        </form>
      </div>

      <!-- Profile Form -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Profile Form</h3>
        <form
          [formGroup]="profileForm"
          (ngSubmit)="onProfileSubmit()"
          class="max-w-sm space-y-6"
        >
          <div sc-form-field name="name">
            <div sc-form-item>
              <label sc-form-label>Name</label>
              <input
                sc-form-control
                formControlName="name"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your name"
              />
              <p sc-form-description>
                Your full name as it will appear on your profile.
              </p>
              @if (
                profileForm.get('name')?.invalid &&
                profileForm.get('name')?.touched
              ) {
                <p sc-form-message></p>
              }
            </div>
          </div>

          <div sc-form-field name="bio">
            <div sc-form-item>
              <label sc-form-label>Bio</label>
              <textarea
                sc-form-control
                formControlName="bio"
                class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tell us about yourself"
                rows="3"
              ></textarea>
              <p sc-form-description>
                Brief description for your profile. Maximum 160 characters.
              </p>
              @if (
                profileForm.get('bio')?.invalid &&
                profileForm.get('bio')?.touched
              ) {
                <p sc-form-message></p>
              }
            </div>
          </div>

          <div sc-form-field name="website">
            <div sc-form-item>
              <label sc-form-label>Website</label>
              <input
                sc-form-control
                formControlName="website"
                type="url"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="https://example.com"
              />
              <p sc-form-description>Your personal or company website.</p>
              @if (
                profileForm.get('website')?.invalid &&
                profileForm.get('website')?.touched
              ) {
                <p sc-form-message></p>
              }
            </div>
          </div>

          <button sc-button type="submit">Update profile</button>
        </form>
      </div>

      <!-- All Validation States -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Validation States</h3>
        <form [formGroup]="validationForm" class="max-w-sm space-y-6">
          <div sc-form-field name="required">
            <div sc-form-item>
              <label sc-form-label>Required Field</label>
              <input
                sc-form-control
                formControlName="required"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="This field is required"
              />
              @if (
                validationForm.get('required')?.invalid &&
                validationForm.get('required')?.touched
              ) {
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
                validationForm.get('minLength')?.invalid &&
                validationForm.get('minLength')?.touched
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
              @if (
                validationForm.get('email')?.invalid &&
                validationForm.get('email')?.touched
              ) {
                <p sc-form-message></p>
              }
            </div>
          </div>

          <button sc-button type="button" (click)="touchAllValidation()">
            Validate All
          </button>
        </form>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFormDemo {
  private readonly fb = inject(FormBuilder);

  readonly basicForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });

  readonly profileForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    bio: ['', [Validators.maxLength(160)]],
    website: [''],
  });

  readonly validationForm = this.fb.group({
    required: ['', Validators.required],
    minLength: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
  });

  onBasicSubmit(): void {
    if (this.basicForm.valid) {
      console.log('Basic form submitted:', this.basicForm.value);
    } else {
      this.basicForm.markAllAsTouched();
    }
  }

  onProfileSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Profile form submitted:', this.profileForm.value);
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  touchAllValidation(): void {
    this.validationForm.markAllAsTouched();
  }
}`;
}
