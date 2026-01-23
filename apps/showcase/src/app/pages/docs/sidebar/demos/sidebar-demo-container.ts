import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScSidebarDemo } from './sidebar-demo';

@Component({
  selector: 'app-sidebar-demo-container',
  imports: [DemoContainer, ScSidebarDemo],
  template: `
    <app-demo-container title="Sidebar" [code]="code">
      <app-sc-sidebar-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SidebarDemoContainer {
  readonly code = '';
}
