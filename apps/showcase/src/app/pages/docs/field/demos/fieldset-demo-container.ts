import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FieldsetDemo } from './fieldset-demo';

@Component({
  selector: 'app-fieldset-demo-container',
  imports: [DemoContainer, FieldsetDemo],
  template: `
    <app-demo-container
      title="FieldSet with Legend"
      [code]="code"
      demoUrl="/demos/field/fieldset-demo"
    >
      <app-fieldset-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldsetDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  template: \`
    <fieldset sc-field-set>
      <legend sc-field-legend>Personal Information</legend>
      <p sc-field-description>
        Please provide your personal details below.
      </p>

      <div sc-field-group>
        <div sc-field>
          <label sc-label for="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="John"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
        </div>

        <div sc-field>
          <label sc-label for="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Doe"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
        </div>

        <div sc-field>
          <label sc-label for="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="john.doe@example.com"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
        </div>
      </div>
    </fieldset>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldsetDemo {}`;
}
