import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScScrollAreaDemo } from './scroll-area-demo';

@Component({
  selector: 'app-scroll-area-demo-container',
  imports: [DemoContainer, ScScrollAreaDemo],
  template: `
    <app-demo-container title="ScrollArea" [code]="code">
      <app-sc-scroll-area-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ScrollAreaDemoContainer {
  readonly code = '';
}
