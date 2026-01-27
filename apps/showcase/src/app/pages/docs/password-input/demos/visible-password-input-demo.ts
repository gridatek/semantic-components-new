import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScPasswordInput } from '@semantic-components/ui';

@Component({
  selector: 'app-visible-password-input-demo',
  imports: [ScPasswordInput],
  template: `
    <div class="max-w-sm">
      <sc-password-input
        placeholder="Password visible by default"
        [showByDefault]="true"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisiblePasswordInputDemo {}
