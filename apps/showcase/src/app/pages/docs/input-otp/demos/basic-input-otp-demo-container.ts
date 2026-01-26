import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicInputOtpDemo } from './basic-input-otp-demo';

@Component({
  selector: 'app-basic-input-otp-demo-container',
  imports: [DemoContainer, BasicInputOtpDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-input-otp-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInputOtpDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScInputOtp,
  ScInputOtpGroup,
  ScInputOtpSlot,
} from '@semantic-components/ui';

@Component({
  selector: 'app-basic-input-otp-demo',
  imports: [ScInputOtp, ScInputOtpGroup, ScInputOtpSlot],
  template: \`
    <div sc-input-otp [maxLength]="6" [(value)]="otp">
      <div sc-input-otp-group>
        <sc-input-otp-slot />
        <sc-input-otp-slot />
        <sc-input-otp-slot />
        <sc-input-otp-slot />
        <sc-input-otp-slot />
        <sc-input-otp-slot />
      </div>
    </div>
    <p class="text-sm text-muted-foreground mt-4">
      Value: {{ otp() || 'empty' }}
    </p>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInputOtpDemo {
  readonly otp = signal('');
}`;
}
