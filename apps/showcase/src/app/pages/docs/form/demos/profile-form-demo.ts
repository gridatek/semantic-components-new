import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  FormField,
  form,
  required,
  minLength,
  maxLength,
  submit,
} from '@angular/forms/signals';
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-profile-form-demo',
  imports: [FormField, ScButton],
  template: `
    <form (ngSubmit)="onSubmit()" class="max-w-sm space-y-6">
      <div class="space-y-2">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          [class.text-destructive]="
            profileForm.name().invalid() && profileForm.name().touched()
          "
        >
          Name
        </label>
        <input
          [formField]="profileForm.name"
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          [class.border-destructive]="
            profileForm.name().invalid() && profileForm.name().touched()
          "
          placeholder="Your name"
        />
        <p class="text-sm text-muted-foreground">
          Your full name as it will appear on your profile.
        </p>
        @if (profileForm.name().invalid() && profileForm.name().touched()) {
          <p class="text-sm font-medium text-destructive" role="alert">
            @if (hasError(profileForm.name, 'required')) {
              This field is required
            } @else if (hasError(profileForm.name, 'minLength')) {
              Minimum length is 2 characters
            }
          </p>
        }
      </div>

      <div class="space-y-2">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          [class.text-destructive]="
            profileForm.bio().invalid() && profileForm.bio().touched()
          "
        >
          Bio
        </label>
        <textarea
          [formField]="profileForm.bio"
          class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          [class.border-destructive]="
            profileForm.bio().invalid() && profileForm.bio().touched()
          "
          placeholder="Tell us about yourself"
          rows="3"
        ></textarea>
        <p class="text-sm text-muted-foreground">
          Brief description for your profile. Maximum 160 characters.
        </p>
        @if (profileForm.bio().invalid() && profileForm.bio().touched()) {
          <p class="text-sm font-medium text-destructive" role="alert">
            @if (hasError(profileForm.bio, 'maxLength')) {
              Maximum length is 160 characters
            }
          </p>
        }
      </div>

      <div class="space-y-2">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Website
        </label>
        <input
          [formField]="profileForm.website"
          type="url"
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="https://example.com"
        />
        <p class="text-sm text-muted-foreground">
          Your personal or company website.
        </p>
      </div>

      <button sc-button type="submit">Update profile</button>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileFormDemo {
  private readonly formModel = signal({
    name: '',
    bio: '',
    website: '',
  });

  readonly profileForm = form(this.formModel, (path) => {
    required(path.name);
    minLength(path.name, 2);
    maxLength(path.bio, 160);
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
    await submit(this.profileForm, async () => {
      console.log('Profile form submitted:', this.formModel());
      return null;
    });
  }
}
