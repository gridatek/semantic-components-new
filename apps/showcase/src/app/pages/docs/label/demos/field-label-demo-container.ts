import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FieldLabelDemo } from './field-label-demo';

@Component({
  selector: 'app-field-label-demo-container',
  imports: [DemoContainer, FieldLabelDemo],
  template: `
    <app-demo-container title="With Field Context" [code]="code">
      <app-field-label-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldLabelDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScField,
  ScInput,
  ScLabel,
  ScFieldDescription,
} from '@semantic-components/ui';

@Component({
  selector: 'app-field-label-demo',
  imports: [ScField, ScInput, ScLabel, ScFieldDescription],
  template: \\\`
    <div sc-field class="w-full max-w-sm">
      <label sc-label>Email</label>
      <input sc-input type="email" placeholder="Enter your email" />
      <p sc-field-description>
        The label automatically links to the input via the field context.
      </p>
    </div>
  \\\`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldLabelDemo {}`;
}
