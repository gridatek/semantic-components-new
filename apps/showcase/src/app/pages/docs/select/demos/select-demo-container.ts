import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScSelectDemo } from './select-demo';

@Component({
  selector: 'app-select-demo-container',
  imports: [DemoContainer, ScSelectDemo],
  template: `
    <app-demo-container title="Select" [code]="code">
      <app-sc-select-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SelectDemoContainer {
  readonly code = '';
}
