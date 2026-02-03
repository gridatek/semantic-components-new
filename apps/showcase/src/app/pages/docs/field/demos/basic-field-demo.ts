import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScField, ScLabel, ScFieldDescription } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-field-demo',
  imports: [ScField, ScLabel, ScFieldDescription],
  template: `
    <div sc-field>
      <label sc-label for="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
      />
      <p sc-field-description>We'll never share your email with anyone else.</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicFieldDemo {}
