import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DisabledPasswordFieldDemo } from './disabled-password-field-demo';

@Component({
  selector: 'app-disabled-password-field-demo-container',
  imports: [DemoContainer, DisabledPasswordFieldDemo],
  template: `
    <app-demo-container
      title="Disabled"
      demoUrl="/demos/password-field/disabled-password-field-demo"
      [code]="code"
    >
      <app-disabled-password-field-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DisabledPasswordFieldDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
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
    <div class="space-y-2">
      <label sc-label>Password (Disabled)</label>
      <div sc-password-field [value]="'********'" [disabled]="true">
        <div sc-password-field-group>
          <input sc-password-field-input />
          <button sc-password-field-toggle></button>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledPasswordFieldDemo {}`;
}
