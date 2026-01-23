import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DockDemoComponent } from './dock-demo';

@Component({
  selector: 'app-dock-demo-container',
  imports: [DemoContainer, DockDemoComponent],
  template: `
    <app-demo-container title="Dock" [code]="code">
      <sc-dock-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DockDemoContainer {
  readonly code = '';
}
