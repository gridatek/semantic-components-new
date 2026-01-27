import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { StrengthPasswordInputDemo } from './strength-password-input-demo';

@Component({
  selector: 'app-strength-password-input-demo-container',
  imports: [DemoContainer, StrengthPasswordInputDemo],
  template: `
    <app-demo-container title="With Strength Indicator" [code]="code">
      <app-strength-password-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrengthPasswordInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScPasswordInputStrength } from '@semantic-components/ui';

@Component({
  selector: 'app-strength-password-input-demo',
  imports: [ScPasswordInputStrength],
  template: \`
    <div class="max-w-sm">
      <sc-password-input-strength
        [(value)]="password"
        placeholder="Create a strong password"
      />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrengthPasswordInputDemo {
  readonly password = signal('');
}`;
}
