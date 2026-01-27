import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPasswordInput } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-password-input-demo',
  imports: [ScPasswordInput],
  template: `
    <div class="max-w-sm">
      <sc-password-input
        placeholder="Disabled input"
        [disabled]="true"
        [value]="'secretpassword'"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledPasswordInputDemo {}
