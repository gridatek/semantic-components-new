import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicCountdownDemo } from './basic-countdown-demo';

@Component({
  selector: 'app-basic-countdown-demo-container',
  imports: [DemoContainer, BasicCountdownDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-countdown-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicCountdownDemoContainer {
  readonly code = `// See basic-countdown-demo.ts for full source`;
}
