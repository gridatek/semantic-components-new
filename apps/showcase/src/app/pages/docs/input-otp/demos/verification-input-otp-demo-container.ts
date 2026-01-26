import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { VerificationInputOtpDemo } from './verification-input-otp-demo';

@Component({
  selector: 'app-verification-input-otp-demo-container',
  imports: [DemoContainer, VerificationInputOtpDemo],
  template: `
    <app-demo-container
      title="Verification Form"
      demoUrl="/demos/input-otp/verification-input-otp-demo"
      [code]="code"
    >
      <app-verification-input-otp-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerificationInputOtpDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScInputOtp,
  ScInputOtpGroup,
  ScInputOtpSeparator,
  ScInputOtpSlot,
} from '@semantic-components/ui';

@Component({
  selector: 'app-verification-input-otp-demo',
  imports: [ScInputOtp, ScInputOtpGroup, ScInputOtpSeparator, ScInputOtpSlot],
  template: \`
    <div class="rounded-lg border p-6 max-w-sm">
      <div class="space-y-4">
        <div class="space-y-2 text-center">
          <h4 class="font-semibold">Enter verification code</h4>
          <p class="text-sm text-muted-foreground">
            We sent a code to your email address
          </p>
        </div>
        <div class="flex justify-center">
          <div sc-input-otp [maxLength]="6" [(value)]="code">
            <div sc-input-otp-group>
              <sc-input-otp-slot />
              <sc-input-otp-slot />
              <sc-input-otp-slot />
            </div>
            <div sc-input-otp-separator>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-4"
              >
                <line x1="5" x2="19" y1="12" y2="12" />
              </svg>
            </div>
            <div sc-input-otp-group>
              <sc-input-otp-slot />
              <sc-input-otp-slot />
              <sc-input-otp-slot />
            </div>
          </div>
        </div>
        <p class="text-center text-sm text-muted-foreground">
          @if (code().length === 6) {
            Code entered: {{ code() }}
          } @else {
            Enter all 6 digits
          }
        </p>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerificationInputOtpDemo {
  readonly code = signal('');
}`;
}
