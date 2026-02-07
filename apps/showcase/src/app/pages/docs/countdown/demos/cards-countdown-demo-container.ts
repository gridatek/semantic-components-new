import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CardsCountdownDemo } from './cards-countdown-demo';

@Component({
  selector: 'app-cards-countdown-demo-container',
  imports: [DemoContainer, CardsCountdownDemo],
  template: `
    <app-demo-container title="Cards" [code]="code">
      <app-cards-countdown-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsCountdownDemoContainer {
  readonly code = `// See cards-countdown-demo.ts for full source`;
}
