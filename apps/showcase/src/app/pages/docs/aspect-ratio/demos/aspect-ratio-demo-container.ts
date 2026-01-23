import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScAspectRatioDemo } from './aspect-ratio-demo';

@Component({
  selector: 'app-aspect-ratio-demo-container',
  imports: [DemoContainer, ScAspectRatioDemo],
  template: `
    <app-demo-container title="AspectRatio" [code]="code">
      <app-sc-aspect-ratio-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AspectRatioDemoContainer {
  readonly code = '';
}
