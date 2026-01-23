import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScHoverCardDemo } from './hover-card-demo';

@Component({
  selector: 'app-hover-card-demo-container',
  imports: [DemoContainer, ScHoverCardDemo],
  template: `
    <app-demo-container title="HoverCard" [code]="code">
      <app-sc-hover-card-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HoverCardDemoContainer {
  readonly code = '';
}
