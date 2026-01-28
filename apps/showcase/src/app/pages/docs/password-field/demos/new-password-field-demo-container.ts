import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { NewPasswordFieldDemo } from './new-password-field-demo';

@Component({
  selector: 'app-new-password-field-demo-container',
  imports: [DemoContainer, NewPasswordFieldDemo],
  template: `
    <app-demo-container
      title="New Password"
      demoUrl="/demos/password-field/new-password-field-demo"
      [code]="code"
    >
      <app-new-password-field-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NewPasswordFieldDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScPasswordField,
  ScPasswordFieldGroup,
  ScPasswordFieldInput,
  ScPasswordFieldToggle,
  ScLabel,
} from '@semantic-components/ui';

@Component({
  imports: [
    ScPasswordField,
    ScPasswordFieldGroup,
    ScPasswordFieldInput,
    ScPasswordFieldToggle,
    ScLabel,
  ],
  template: \`
    <div class="space-y-4">
      <div sc-password-field [(value)]="newPassword" class="space-y-2">
        <label sc-label>New Password</label>
        <div sc-password-field-group>
          <input
            sc-password-field-input
            placeholder="Enter new password"
            autocomplete="new-password"
          />
          <button sc-password-field-toggle></button>
        </div>
        <p class="text-sm text-muted-foreground">
          Must be at least 8 characters
        </p>
      </div>

      <div sc-password-field [(value)]="confirmPassword" class="space-y-2">
        <label sc-label>Confirm Password</label>
        <div sc-password-field-group>
          <input
            sc-password-field-input
            placeholder="Confirm new password"
            autocomplete="new-password"
          />
          <button sc-password-field-toggle></button>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPasswordFieldDemo {
  readonly newPassword = signal<string>('');
  readonly confirmPassword = signal<string>('');
}`;
}
