import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DisabledInputOtpDemo } from './disabled-input-otp-demo';

@Component({
  selector: 'app-disabled-input-otp-demo-container',
  imports: [DemoContainer, DisabledInputOtpDemo],
  template: `
    <app-demo-container
      title="Disabled"
      demoUrl="/demos/input-otp/disabled-input-otp-demo"
      [code]="code"
    >
      <app-disabled-input-otp-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledInputOtpDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScInputOtp,
  ScInputOtpGroup,
  ScInputOtpSlot,
} from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-input-otp-demo',
  imports: [ScInputOtp, ScInputOtpGroup, ScInputOtpSlot],
  template: \`
    <div sc-input-otp [maxLength]="6" [disabled]="true" value="123456">
      <div sc-input-otp-group>
        <sc-input-otp-slot />
        <sc-input-otp-slot />
        <sc-input-otp-slot />
        <sc-input-otp-slot />
        <sc-input-otp-slot />
        <sc-input-otp-slot />
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledInputOtpDemo {}`;
}
