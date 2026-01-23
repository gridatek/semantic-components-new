import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScMenuDemo } from './menu-demo';

@Component({
  selector: 'app-menu-demo-container',
  imports: [DemoContainer, ScMenuDemo],
  template: `
    <app-demo-container title="Menu" [code]="code">
      <app-sc-menu-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MenuDemoContainer {
  readonly code = '';
}
