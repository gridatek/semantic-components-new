import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScInputOtp,
  ScInputOtpGroup,
  ScInputOtpSlot,
} from '@semantic-components/ui';

@Component({
  selector: 'app-pin-input-otp-demo',
  imports: [ScInputOtp, ScInputOtpGroup, ScInputOtpSlot],
  template: `
    <div sc-input-otp [maxLength]="4" [(value)]="otp">
      <div sc-input-otp-group>
        <sc-input-otp-slot />
        <sc-input-otp-slot />
        <sc-input-otp-slot />
        <sc-input-otp-slot />
      </div>
    </div>
    <p class="text-sm text-muted-foreground mt-4">
      Value: {{ otp() || 'empty' }}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PinInputOtpDemo {
  readonly otp = signal('');
}
