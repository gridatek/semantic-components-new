import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScKbdDemo } from './kbd-demo';

@Component({
  selector: 'app-kbd-demo-container',
  imports: [DemoContainer, ScKbdDemo],
  template: `
    <app-demo-container title="Kbd" [code]="code">
      <app-sc-kbd-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class KbdDemoContainer {
  readonly code = '';
}
