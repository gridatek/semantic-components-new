import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScContextMenuDemo } from './context-menu-demo';

@Component({
  selector: 'app-context-menu-demo-container',
  imports: [DemoContainer, ScContextMenuDemo],
  template: `
    <app-demo-container title="ContextMenu" [code]="code">
      <app-sc-context-menu-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContextMenuDemoContainer {
  readonly code = '';
}
