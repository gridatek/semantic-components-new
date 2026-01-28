import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FullPasswordFieldDemo } from './full-password-field-demo';

@Component({
  selector: 'app-full-password-field-demo-container',
  imports: [DemoContainer, FullPasswordFieldDemo],
  template: `
    <app-demo-container
      title="With Strength and Requirements"
      demoUrl="/demos/password-field/full-password-field-demo"
      [code]="code"
    >
      <app-full-password-field-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FullPasswordFieldDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScPasswordField,
  ScPasswordFieldGroup,
  ScPasswordFieldInput,
  ScPasswordFieldToggle,
  ScPasswordFieldStrength,
  ScPasswordFieldRequirements,
  ScLabel,
} from '@semantic-components/ui';

@Component({
  imports: [
    ScPasswordField,
    ScPasswordFieldGroup,
    ScPasswordFieldInput,
    ScPasswordFieldToggle,
    ScPasswordFieldStrength,
    ScPasswordFieldRequirements,
    ScLabel,
  ],
  template: \`
    <div class="space-y-2">
      <label sc-label for="password-full">Create Password</label>
      <div sc-password-field [(value)]="password">
        <div sc-password-field-group>
          <input
            sc-password-field-input
            id="password-full"
            placeholder="Enter a strong password"
            autocomplete="new-password"
          />
          <button sc-password-field-toggle></button>
        </div>
        <div sc-password-field-strength></div>
        <ul sc-password-field-requirements></ul>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullPasswordFieldDemo {
  readonly password = signal<string>('');
}`;
}
