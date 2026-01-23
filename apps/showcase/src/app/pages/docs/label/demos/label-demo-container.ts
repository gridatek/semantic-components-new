import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScLabelDemo } from './label-demo';

@Component({
  selector: 'app-label-demo-container',
  imports: [DemoContainer, ScLabelDemo],
  template: `
    <app-demo-container title="Label" [code]="code">
      <app-sc-label-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LabelDemoContainer {
  readonly code = '';
}
