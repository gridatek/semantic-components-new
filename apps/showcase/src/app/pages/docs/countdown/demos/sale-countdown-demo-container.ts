import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SaleCountdownDemo } from './sale-countdown-demo';

@Component({
  selector: 'app-sale-countdown-demo-container',
  imports: [DemoContainer, SaleCountdownDemo],
  template: `
    <app-demo-container title="Sale Timer" [code]="code">
      <app-sale-countdown-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaleCountdownDemoContainer {
  readonly code = `// See sale-countdown-demo.ts for full source`;
}
