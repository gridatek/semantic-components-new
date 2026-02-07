import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { LabelsCountdownDemo } from './labels-countdown-demo';

@Component({
  selector: 'app-labels-countdown-demo-container',
  imports: [DemoContainer, LabelsCountdownDemo],
  template: `
    <app-demo-container title="Custom Labels" [code]="code">
      <app-labels-countdown-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelsCountdownDemoContainer {
  readonly code = `// See labels-countdown-demo.ts for full source`;
}
