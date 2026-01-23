import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SpeedDialDemoComponent } from './speed-dial-demo';

@Component({
  selector: 'app-speed-dial-demo-container',
  imports: [DemoContainer, SpeedDialDemoComponent],
  template: `
    <app-demo-container title="SpeedDial" [code]="code">
      <app-speed-dial-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpeedDialDemoContainer {
  readonly code = '';
}
