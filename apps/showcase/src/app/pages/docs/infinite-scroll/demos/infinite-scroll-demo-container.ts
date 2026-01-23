import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScInfiniteScrollDemo } from './infinite-scroll-demo';

@Component({
  selector: 'app-infinite-scroll-demo-container',
  imports: [DemoContainer, ScInfiniteScrollDemo],
  template: `
    <app-demo-container title="InfiniteScroll" [code]="code">
      <sc-infinite-scroll-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InfiniteScrollDemoContainer {
  readonly code = '';
}
