import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScField, ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-horizontal-field-demo',
  imports: [ScField, ScLabel],
  template: `
    <div sc-field [orientation]="'horizontal'">
      <label sc-label for="username">Username</label>
      <input
        id="username"
        type="text"
        placeholder="Enter username"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalFieldDemo {}
