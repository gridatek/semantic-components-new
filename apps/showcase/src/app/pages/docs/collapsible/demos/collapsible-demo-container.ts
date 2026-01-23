import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScCollapsibleDemo } from './collapsible-demo';

@Component({
  selector: 'app-collapsible-demo-container',
  imports: [DemoContainer, ScCollapsibleDemo],
  template: `
    <app-demo-container title="Collapsible" [code]="code">
      <app-sc-collapsible-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CollapsibleDemoContainer {
  readonly code = '';
}
