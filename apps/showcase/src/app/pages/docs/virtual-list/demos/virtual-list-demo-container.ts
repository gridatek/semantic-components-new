import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { VirtualListDemoComponent } from './virtual-list-demo';

@Component({
  selector: 'app-virtual-list-demo-container',
  imports: [DemoContainer, VirtualListDemoComponent],
  template: `
    <app-demo-container title="VirtualList" [code]="code">
      <app-virtual-list-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VirtualListDemoContainer {
  readonly code = '';
}
