import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DotSeparatorInputOtpDemo } from './dot-separator-input-otp-demo';

@Component({
  selector: 'app-dot-separator-input-otp-demo-container',
  imports: [DemoContainer, DotSeparatorInputOtpDemo],
  template: `
    <app-demo-container
      title="With Dot Separator"
      demoUrl="/demos/input-otp/dot-separator-input-otp-demo"
      [code]="code"
    >
      <app-dot-separator-input-otp-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DotSeparatorInputOtpDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScInputOtp,
  ScInputOtpGroup,
  ScInputOtpSeparator,
  ScInputOtpSlot,
} from '@semantic-components/ui';

@Component({
  selector: 'app-dot-separator-input-otp-demo',
  imports: [ScInputOtp, ScInputOtpGroup, ScInputOtpSeparator, ScInputOtpSlot],
  template: \`
    <div sc-input-otp [maxLength]="6" [(value)]="otp">
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
    <p class="text-sm text-muted-foreground mt-4">
      Value: {{ otp() || 'empty' }}
    </p>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DotSeparatorInputOtpDemo {
  readonly otp = signal('');
}`;
}
