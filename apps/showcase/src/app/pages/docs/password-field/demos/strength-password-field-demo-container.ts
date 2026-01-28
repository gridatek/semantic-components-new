import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { StrengthPasswordFieldDemo } from './strength-password-field-demo';

@Component({
  selector: 'app-strength-password-field-demo-container',
  imports: [DemoContainer, StrengthPasswordFieldDemo],
  template: `
    <app-demo-container
      title="With Strength Indicator"
      demoUrl="/demos/password-field/strength-password-field-demo"
      [code]="code"
    >
      <app-strength-password-field-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StrengthPasswordFieldDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScPasswordField,
  ScPasswordFieldGroup,
  ScPasswordFieldInput,
  ScPasswordFieldToggle,
  ScPasswordFieldStrength,
  ScLabel,
} from '@semantic-components/ui';

@Component({
  imports: [
    ScPasswordField,
    ScPasswordFieldGroup,
    ScPasswordFieldInput,
    ScPasswordFieldToggle,
    ScPasswordFieldStrength,
    ScLabel,
  ],
  template: \`
    <div class="space-y-2">
      <label sc-label for="password-strength">Password</label>
      <div sc-password-field [(value)]="password">
        <div sc-password-field-group>
          <input
            sc-password-field-input
            id="password-strength"
            placeholder="Enter password"
            autocomplete="new-password"
          />
          <button sc-password-field-toggle></button>
        </div>
        <div sc-password-field-strength></div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrengthPasswordFieldDemo {
  readonly password = signal<string>('');
}`;
}
