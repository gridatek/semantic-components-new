import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CheckboxLabelDemo } from './checkbox-label-demo';

@Component({
  selector: 'app-checkbox-label-demo-container',
  imports: [DemoContainer, CheckboxLabelDemo],
  template: `
    <app-demo-container title="With Checkbox" [code]="code">
      <app-checkbox-label-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxLabelDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScLabel,
  ScCheckboxField,
  ScCheckbox,
} from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-label-demo',
  imports: [
    ScLabel,
    ScCheckboxField,
    ScCheckbox,
  ],
  template: \\\`
    <div sc-checkbox-field>
      <input type="checkbox" sc-checkbox id="terms-label" />
      <label sc-label [for]="'terms-label'">Accept terms and conditions</label>
    </div>
  \\\`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxLabelDemo {}`;
}
