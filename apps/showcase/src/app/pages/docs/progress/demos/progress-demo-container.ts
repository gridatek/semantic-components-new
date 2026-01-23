import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScProgressDemo } from './progress-demo';

@Component({
  selector: 'app-progress-demo-container',
  imports: [DemoContainer, ScProgressDemo],
  template: `
    <app-demo-container title="Progress" [code]="code">
      <app-sc-progress-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProgressDemoContainer {
  readonly code = '';
}
