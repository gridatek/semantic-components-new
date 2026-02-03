import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SeparatorFieldDemo } from './separator-field-demo';

@Component({
  selector: 'app-separator-field-demo-container',
  imports: [DemoContainer, SeparatorFieldDemo],
  template: `
    <app-demo-container
      title="Field Separator"
      [code]="code"
      demoUrl="/demos/field/separator-field-demo"
    >
      <app-separator-field-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeparatorFieldDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScField,
  ScLabel,
  ScFieldGroup,
  ScFieldSeparator,
  ScSeparator,
} from '@semantic-components/ui';

@Component({
  selector: 'app-separator-field-demo',
  imports: [
    ScField,
    ScLabel,
    ScFieldGroup,
    ScFieldSeparator,
    ScSeparator,
  ],
  template: \`
    <div sc-field-group>
      <div sc-field>
        <label sc-label for="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
      </div>

      <div sc-field-separator>
        <div sc-separator class="absolute inset-0 top-1/2"></div>
        <span
          class="text-muted-foreground px-2 bg-background relative mx-auto block w-fit"
        >
          or
        </span>
      </div>

      <div sc-field>
        <label sc-label for="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          placeholder="Enter your phone"
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeparatorFieldDemo {}`;
}
