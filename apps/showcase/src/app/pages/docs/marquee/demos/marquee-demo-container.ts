import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScMarqueeDemo } from './marquee-demo';

@Component({
  selector: 'app-marquee-demo-container',
  imports: [DemoContainer, ScMarqueeDemo],
  template: `
    <app-demo-container title="Marquee" [code]="code">
      <sc-marquee-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MarqueeDemoContainer {
  readonly code = '';
}
