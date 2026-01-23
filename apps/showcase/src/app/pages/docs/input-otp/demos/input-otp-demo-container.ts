import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScInputOtpDemo } from './input-otp-demo';

@Component({
  selector: 'app-input-otp-demo-container',
  imports: [DemoContainer, ScInputOtpDemo],
  template: `
    <app-demo-container title="Input" [code]="code">
      <app-sc-input-otp-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInputOtpDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScInputOtp,
  ScInputOtpGroup,
  ScInputOtpSeparator,
  ScInputOtpSlot,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-input-otp-demo',
  imports: [ScInputOtp, ScInputOtpGroup, ScInputOtpSeparator, ScInputOtpSlot],
  template: \`
    <div class="space-y-8">
      <!-- Basic 6-digit OTP -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic OTP Input</h3>
        <div sc-input-otp [maxLength]="6" [(value)]="basicOtp">
          <div sc-input-otp-group>
            <sc-input-otp-slot />
            <sc-input-otp-slot />
            <sc-input-otp-slot />
            <sc-input-otp-slot />
            <sc-input-otp-slot />
            <sc-input-otp-slot />
          </div>
        </div>
        <p class="text-sm text-muted-foreground">
          Value: {{ basicOtp() || 'empty' }}
        </p>
      </div>

      <!-- With Separator -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Separator</h3>
        <div sc-input-otp [maxLength]="6" [(value)]="separatorOtp">
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
        <p class="text-sm text-muted-foreground">
          Value: {{ separatorOtp() || 'empty' }}
        </p>
      </div>

      <!-- 4-digit PIN -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">4-digit PIN</h3>
        <div sc-input-otp [maxLength]="4" [(value)]="pinOtp">
          <div sc-input-otp-group>
            <sc-input-otp-slot />
            <sc-input-otp-slot />
            <sc-input-otp-slot />
            <sc-input-otp-slot />
          </div>
        </div>
        <p class="text-sm text-muted-foreground">
          Value: {{ pinOtp() || 'empty' }}
        </p>
      </div>

      <!-- With Pattern (dots separator) -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Dot Separator</h3>
        <div sc-input-otp [maxLength]="6" [(value)]="dotOtp">
          <div sc-input-otp-group>
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
              <circle cx="12" cy="12" r="1" />
            </svg>
          </div>
          <div sc-input-otp-group>
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
              <circle cx="12" cy="12" r="1" />
            </svg>
          </div>
          <div sc-input-otp-group>
            <sc-input-otp-slot />
            <sc-input-otp-slot />
          </div>
        </div>
        <p class="text-sm text-muted-foreground">
          Value: {{ dotOtp() || 'empty' }}
        </p>
      </div>

      <!-- Disabled -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Disabled</h3>
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
      </div>

      <!-- Verification Form Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Verification Form</h3>
        <div class="rounded-lg border p-6 max-w-sm">
          <div class="space-y-4">
            <div class="space-y-2 text-center">
              <h4 class="font-semibold">Enter verification code</h4>
              <p class="text-sm text-muted-foreground">
                We sent a code to your email address
              </p>
            </div>
            <div class="flex justify-center">
              <div sc-input-otp [maxLength]="6" [(value)]="verificationCode">
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
              @if (verificationCode().length === 6) {
                Code entered: {{ verificationCode() }}
              } @else {
                Enter all 6 digits
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInputOtpDemo {
  readonly basicOtp = signal('');
  readonly separatorOtp = signal('');
  readonly pinOtp = signal('');
  readonly dotOtp = signal('');
  readonly verificationCode = signal('');
}`;
}
