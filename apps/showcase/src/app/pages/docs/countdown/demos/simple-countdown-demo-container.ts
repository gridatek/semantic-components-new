import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SimpleCountdownDemo } from './simple-countdown-demo';

@Component({
  selector: 'app-simple-countdown-demo-container',
  imports: [DemoContainer, SimpleCountdownDemo],
  template: `
    <app-demo-container title="Simple" [code]="code">
      <app-simple-countdown-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleCountdownDemoContainer {
  readonly code = `// See simple-countdown-demo.ts for full source`;
}
