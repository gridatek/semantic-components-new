import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { NodaysCountdownDemo } from './nodays-countdown-demo';

@Component({
  selector: 'app-nodays-countdown-demo-container',
  imports: [DemoContainer, NodaysCountdownDemo],
  template: `
    <app-demo-container title="Without Days" [code]="code">
      <app-nodays-countdown-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodaysCountdownDemoContainer {
  readonly code = `// See nodays-countdown-demo.ts for full source`;
}
