import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScToggleGroupDemo } from './toggle-group-demo';

@Component({
  selector: 'app-toggle-group-demo-container',
  imports: [DemoContainer, ScToggleGroupDemo],
  template: `
    <app-demo-container title="ToggleGroup" [code]="code">
      <app-sc-toggle-group-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToggleGroupDemoContainer {
  readonly code = '';
}
