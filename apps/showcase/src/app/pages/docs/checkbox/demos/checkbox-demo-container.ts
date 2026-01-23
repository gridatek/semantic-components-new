import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScCheckboxDemo } from './checkbox-demo';

@Component({
  selector: 'app-checkbox-demo-container',
  imports: [DemoContainer, ScCheckboxDemo],
  template: `
    <app-demo-container title="Checkbox" [code]="code">
      <app-sc-checkbox-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckboxDemoContainer {
  readonly code = '';
}
