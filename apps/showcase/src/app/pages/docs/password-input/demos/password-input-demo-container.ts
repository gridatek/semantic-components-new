import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScPasswordInputDemo } from './password-input-demo';

@Component({
  selector: 'app-password-input-demo-container',
  imports: [DemoContainer, ScPasswordInputDemo],
  template: `
    <app-demo-container title="PasswordInput" [code]="code">
      <sc-password-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PasswordInputDemoContainer {
  readonly code = '';
}
