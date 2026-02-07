import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SeparatorCountdownDemo } from './separator-countdown-demo';

@Component({
  selector: 'app-separator-countdown-demo-container',
  imports: [DemoContainer, SeparatorCountdownDemo],
  template: `
    <app-demo-container title="Without Separator" [code]="code">
      <app-separator-countdown-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeparatorCountdownDemoContainer {
  readonly code = `// See separator-countdown-demo.ts for full source`;
}
