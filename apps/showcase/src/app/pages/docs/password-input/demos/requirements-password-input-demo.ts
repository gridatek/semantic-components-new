import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPasswordInputStrength } from '@semantic-components/ui';

@Component({
  selector: 'app-requirements-password-input-demo',
  imports: [ScPasswordInputStrength],
  template: `
    <div class="max-w-sm">
      <sc-password-input-strength
        placeholder="Type to see requirements"
        [showStrength]="false"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequirementsPasswordInputDemo {}
