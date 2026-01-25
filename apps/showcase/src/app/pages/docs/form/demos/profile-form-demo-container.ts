import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ProfileFormDemo } from './profile-form-demo';

@Component({
  selector: 'app-profile-form-demo-container',
  imports: [DemoContainer, ProfileFormDemo],
  template: `
    <app-demo-container title="Profile" [code]="code">
      <app-profile-form-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileFormDemoContainer {
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
  selector: 'app-profile-form-demo',
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
    <form
      [formGroup]="form"
      (ngSubmit)="onSubmit()"
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
          @if (form.get('name')?.invalid && form.get('name')?.touched) {
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
          @if (form.get('bio')?.invalid && form.get('bio')?.touched) {
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
          @if (form.get('website')?.invalid && form.get('website')?.touched) {
            <p sc-form-message></p>
          }
        </div>
      </div>

      <button sc-button type="submit">Update profile</button>
    </form>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileFormDemo {
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    bio: ['', [Validators.maxLength(160)]],
    website: [''],
  });

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Profile form submitted:', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}`;
}
