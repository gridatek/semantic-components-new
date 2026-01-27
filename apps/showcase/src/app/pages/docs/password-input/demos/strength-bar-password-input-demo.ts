import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPasswordInputStrength } from '@semantic-components/ui';

@Component({
  selector: 'app-strength-bar-password-input-demo',
  imports: [ScPasswordInputStrength],
  template: `
    <div class="max-w-sm">
      <sc-password-input-strength
        placeholder="Type to see strength"
        [showRequirements]="false"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrengthBarPasswordInputDemo {}
