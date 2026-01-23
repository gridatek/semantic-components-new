import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScCommandDemo } from './command-demo';

@Component({
  selector: 'app-command-demo-container',
  imports: [DemoContainer, ScCommandDemo],
  template: `
    <app-demo-container title="Command" [code]="code">
      <app-sc-command-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CommandDemoContainer {
  readonly code = '';
}
