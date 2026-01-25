import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FormMultiSelectDemo } from './form-multi-select-demo';

@Component({
  selector: 'app-form-multi-select-demo-container',
  imports: [DemoContainer, FormMultiSelectDemo],
  template: `
    <app-demo-container title="Form" [code]="code">
      <app-form-multi-select-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormMultiSelectDemoContainer {
  readonly code = `// Multi-select in a form context
// See source code for full implementation`;
}
