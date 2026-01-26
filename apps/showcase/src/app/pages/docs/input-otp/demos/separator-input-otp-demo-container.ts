import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SeparatorInputOtpDemo } from './separator-input-otp-demo';

@Component({
  selector: 'app-separator-input-otp-demo-container',
  imports: [DemoContainer, SeparatorInputOtpDemo],
  template: `
    <app-demo-container
      title="With Separator"
      demoUrl="/demos/input-otp/separator-input-otp-demo"
      [code]="code"
    >
      <app-separator-input-otp-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeparatorInputOtpDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScInputOtp,
  ScInputOtpGroup,
  ScInputOtpSeparator,
  ScInputOtpSlot,
} from '@semantic-components/ui';

@Component({
  selector: 'app-separator-input-otp-demo',
  imports: [ScInputOtp, ScInputOtpGroup, ScInputOtpSeparator, ScInputOtpSlot],
  template: \`
    <div sc-input-otp [maxLength]="6" [(value)]="otp">
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
    <p class="text-sm text-muted-foreground mt-4">
      Value: {{ otp() || 'empty' }}
    </p>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeparatorInputOtpDemo {
  readonly otp = signal('');
}`;
}
