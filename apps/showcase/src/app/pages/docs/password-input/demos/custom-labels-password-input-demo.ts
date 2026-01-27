import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPasswordInputConfirm } from '@semantic-components/ui';

@Component({
  selector: 'app-custom-labels-password-input-demo',
  imports: [ScPasswordInputConfirm],
  template: `
    <div class="max-w-sm">
      <sc-password-input-confirm
        passwordLabel="New Password"
        confirmLabel="Re-enter Password"
        passwordPlaceholder="Enter new password"
        confirmPlaceholder="Type password again"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomLabelsPasswordInputDemo {}
