import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicInputOtpDemoContainer } from './demos/basic-input-otp-demo-container';
import { SeparatorInputOtpDemoContainer } from './demos/separator-input-otp-demo-container';
import { PinInputOtpDemoContainer } from './demos/pin-input-otp-demo-container';
import { DotSeparatorInputOtpDemoContainer } from './demos/dot-separator-input-otp-demo-container';
import { DisabledInputOtpDemoContainer } from './demos/disabled-input-otp-demo-container';
import { VerificationInputOtpDemoContainer } from './demos/verification-input-otp-demo-container';

@Component({
  selector: 'app-input-otp-page',
  imports: [
    BasicInputOtpDemoContainer,
    SeparatorInputOtpDemoContainer,
    PinInputOtpDemoContainer,
    DotSeparatorInputOtpDemoContainer,
    DisabledInputOtpDemoContainer,
    VerificationInputOtpDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">InputOtp</h1>
        <p class="text-muted-foreground">
          Accessible one-time password component with copy paste functionality.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-input-otp-demo-container />
        <app-separator-input-otp-demo-container />
        <app-pin-input-otp-demo-container />
        <app-dot-separator-input-otp-demo-container />
        <app-disabled-input-otp-demo-container />
        <app-verification-input-otp-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOtpPage {}
