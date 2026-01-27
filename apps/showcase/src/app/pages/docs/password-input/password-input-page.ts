import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicPasswordInputDemoContainer } from './demos/basic-password-input-demo-container';
import { LabelPasswordInputDemoContainer } from './demos/label-password-input-demo-container';
import { DisabledPasswordInputDemoContainer } from './demos/disabled-password-input-demo-container';
import { VisiblePasswordInputDemoContainer } from './demos/visible-password-input-demo-container';
import { StrengthPasswordInputDemoContainer } from './demos/strength-password-input-demo-container';
import { StrengthBarPasswordInputDemoContainer } from './demos/strength-bar-password-input-demo-container';
import { RequirementsPasswordInputDemoContainer } from './demos/requirements-password-input-demo-container';
import { ConfirmPasswordInputDemoContainer } from './demos/confirm-password-input-demo-container';
import { CustomLabelsPasswordInputDemoContainer } from './demos/custom-labels-password-input-demo-container';
import { LoginFormPasswordInputDemoContainer } from './demos/login-form-password-input-demo-container';
import { RegistrationFormPasswordInputDemoContainer } from './demos/registration-form-password-input-demo-container';
import { WidthsPasswordInputDemoContainer } from './demos/widths-password-input-demo-container';

@Component({
  selector: 'app-password-input-page',
  imports: [
    BasicPasswordInputDemoContainer,
    LabelPasswordInputDemoContainer,
    DisabledPasswordInputDemoContainer,
    VisiblePasswordInputDemoContainer,
    StrengthPasswordInputDemoContainer,
    StrengthBarPasswordInputDemoContainer,
    RequirementsPasswordInputDemoContainer,
    ConfirmPasswordInputDemoContainer,
    CustomLabelsPasswordInputDemoContainer,
    LoginFormPasswordInputDemoContainer,
    RegistrationFormPasswordInputDemoContainer,
    WidthsPasswordInputDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">PasswordInput</h1>
        <p class="text-muted-foreground">
          Password input with show/hide toggle, strength indicator, and
          confirmation support.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-password-input-demo-container />
        <app-label-password-input-demo-container />
        <app-disabled-password-input-demo-container />
        <app-visible-password-input-demo-container />
        <app-strength-password-input-demo-container />
        <app-strength-bar-password-input-demo-container />
        <app-requirements-password-input-demo-container />
        <app-confirm-password-input-demo-container />
        <app-custom-labels-password-input-demo-container />
        <app-login-form-password-input-demo-container />
        <app-registration-form-password-input-demo-container />
        <app-widths-password-input-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PasswordInputPage {}
