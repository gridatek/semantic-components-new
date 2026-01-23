import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScDropdownMenuDemo } from './dropdown-menu-demo';

@Component({
  selector: 'app-dropdown-menu-demo-container',
  imports: [DemoContainer, ScDropdownMenuDemo],
  template: `
    <app-demo-container title="DropdownMenu" [code]="code">
      <app-sc-dropdown-menu-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DropdownMenuDemoContainer {
  readonly code = '';
}
