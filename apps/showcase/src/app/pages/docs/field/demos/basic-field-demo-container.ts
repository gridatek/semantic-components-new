import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicFieldDemo } from './basic-field-demo';

@Component({
  selector: 'app-basic-field-demo-container',
  imports: [DemoContainer, BasicFieldDemo],
  template: `
    <app-demo-container
      title="Basic"
      [code]="code"
      demoUrl="/demos/field/basic-field-demo"
    >
      <app-basic-field-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicFieldDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScField,
  ScLabel,
  ScFieldDescription,
} from '@semantic-components/ui';

@Component({
  selector: 'app-basic-field-demo',
  imports: [ScField, ScLabel, ScFieldDescription],
  template: \`
    <div sc-field>
      <label sc-label for="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
      />
      <p sc-field-description>We'll never share your email with anyone else.</p>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicFieldDemo {}`;
}
