import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScMultiSelectDemo } from './multi-select-demo';

@Component({
  selector: 'app-multi-select-demo-container',
  imports: [DemoContainer, ScMultiSelectDemo],
  template: `
    <app-demo-container title="MultiSelect" [code]="code">
      <sc-multi-select-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MultiSelectDemoContainer {
  readonly code = '';
}
