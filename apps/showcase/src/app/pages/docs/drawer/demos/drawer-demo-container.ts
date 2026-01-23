import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScDrawerDemo } from './drawer-demo';

@Component({
  selector: 'app-drawer-demo-container',
  imports: [DemoContainer, ScDrawerDemo],
  template: `
    <app-demo-container title="Drawer" [code]="code">
      <app-sc-drawer-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DrawerDemoContainer {
  readonly code = '';
}
