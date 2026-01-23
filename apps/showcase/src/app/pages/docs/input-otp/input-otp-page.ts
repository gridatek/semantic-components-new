import { ChangeDetectionStrategy, Component } from '@angular/core';
import InputOtpDemoContainer from './demos/input-otp-demo-container';

@Component({
  selector: 'app-input-otp-page',
  imports: [InputOtpDemoContainer],
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
        <app-input-otp-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOtpPage {}
