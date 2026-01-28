import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { RequirementsPasswordFieldDemo } from './requirements-password-field-demo';

@Component({
  selector: 'app-requirements-password-field-demo-container',
  imports: [DemoContainer, RequirementsPasswordFieldDemo],
  template: `
    <app-demo-container
      title="With Requirements Checklist"
      demoUrl="/demos/password-field/requirements-password-field-demo"
      [code]="code"
    >
      <app-requirements-password-field-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RequirementsPasswordFieldDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScPasswordField,
  ScPasswordFieldGroup,
  ScPasswordFieldInput,
  ScPasswordFieldToggle,
  ScPasswordFieldRequirements,
  ScLabel,
} from '@semantic-components/ui';

@Component({
  imports: [
    ScPasswordField,
    ScPasswordFieldGroup,
    ScPasswordFieldInput,
    ScPasswordFieldToggle,
    ScPasswordFieldRequirements,
    ScLabel,
  ],
  template: \`
    <div class="space-y-2">
      <label sc-label for="password-requirements">Password</label>
      <div sc-password-field [(value)]="password">
        <div sc-password-field-group>
          <input
            sc-password-field-input
            id="password-requirements"
            placeholder="Enter password"
            autocomplete="new-password"
          />
          <button sc-password-field-toggle></button>
        </div>
        <ul sc-password-field-requirements></ul>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequirementsPasswordFieldDemo {
  readonly password = signal<string>('');
}`;
}
