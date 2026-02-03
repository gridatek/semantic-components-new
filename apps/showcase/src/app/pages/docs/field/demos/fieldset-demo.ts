import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScFieldSet,
  ScFieldLegend,
  ScFieldGroup,
  ScField,
  ScLabel,
  ScFieldDescription,
} from '@semantic-components/ui';

@Component({
  selector: 'app-fieldset-demo',
  imports: [
    ScFieldSet,
    ScFieldLegend,
    ScFieldGroup,
    ScField,
    ScLabel,
    ScFieldDescription,
  ],
  template: `
    <fieldset sc-field-set>
      <legend sc-field-legend>Personal Information</legend>
      <p sc-field-description>Please provide your personal details below.</p>

      <div sc-field-group>
        <div sc-field>
          <label sc-label for="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="John"
          />
        </div>

        <div sc-field>
          <label sc-label for="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Doe"
          />
        </div>

        <div sc-field>
          <label sc-label for="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="john.doe@example.com"
          />
        </div>
      </div>
    </fieldset>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldsetDemo {}
