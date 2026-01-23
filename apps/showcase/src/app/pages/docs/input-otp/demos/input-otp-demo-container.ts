import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScInputOtpDemo } from './input-otp-demo';

@Component({
  selector: 'app-input-otp-demo-container',
  imports: [DemoContainer, ScInputOtpDemo],
  template: `
    <app-demo-container title="InputOtp" [code]="code">
      <app-sc-input-otp-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOtpDemoContainer {
  readonly code = '';
}
