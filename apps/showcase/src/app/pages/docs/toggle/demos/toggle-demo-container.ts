import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScToggleDemo } from './toggle-demo';

@Component({
  selector: 'app-toggle-demo-container',
  imports: [DemoContainer, ScToggleDemo],
  template: `
    <app-demo-container title="Toggle" [code]="code">
      <app-sc-toggle-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToggleDemoContainer {
  readonly code = '';
}
