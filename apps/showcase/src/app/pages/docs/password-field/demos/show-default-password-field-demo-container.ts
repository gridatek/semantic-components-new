import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ShowDefaultPasswordFieldDemo } from './show-default-password-field-demo';

@Component({
  selector: 'app-show-default-password-field-demo-container',
  imports: [DemoContainer, ShowDefaultPasswordFieldDemo],
  template: `
    <app-demo-container
      title="Show by Default"
      demoUrl="/demos/password-field/show-default-password-field-demo"
      [code]="code"
    >
      <app-show-default-password-field-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ShowDefaultPasswordFieldDemoContainer {
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
    <div sc-password-field [(value)]="apiKey" [showByDefault]="true" class="space-y-2">
      <label sc-label>API Key</label>
      <div sc-password-field-group>
        <input sc-password-field-input placeholder="sk-..." />
        <button sc-password-field-toggle></button>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDefaultPasswordFieldDemo {
  readonly apiKey = signal<string>('sk-1234567890abcdef');
}`;
}
