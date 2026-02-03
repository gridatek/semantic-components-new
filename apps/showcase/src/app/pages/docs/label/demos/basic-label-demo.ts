import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScField, ScInput, ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-label-demo',
  imports: [ScField, ScInput, ScLabel],
  template: `
    <div sc-field class="w-full max-w-sm">
      <label sc-label>Email</label>
      <input sc-input type="email" placeholder="Enter your email" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicLabelDemo {}
