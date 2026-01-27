import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScPasswordInputStrength } from '@semantic-components/ui';

@Component({
  selector: 'app-strength-password-input-demo',
  imports: [ScPasswordInputStrength],
  template: `
    <div class="max-w-sm">
      <sc-password-input-strength
        [(value)]="password"
        placeholder="Create a strong password"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrengthPasswordInputDemo {
  readonly password = signal('');
}
