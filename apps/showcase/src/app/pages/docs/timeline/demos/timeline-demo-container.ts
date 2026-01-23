import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScTimelineDemo } from './timeline-demo';

@Component({
  selector: 'app-timeline-demo-container',
  imports: [DemoContainer, ScTimelineDemo],
  template: `
    <app-demo-container title="Timeline" [code]="code">
      <sc-timeline-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TimelineDemoContainer {
  readonly code = '';
}
