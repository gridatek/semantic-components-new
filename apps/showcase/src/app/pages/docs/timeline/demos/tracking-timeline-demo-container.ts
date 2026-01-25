import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { TrackingTimelineDemo } from './tracking-timeline-demo';

@Component({
  selector: 'app-tracking-timeline-demo-container',
  imports: [DemoContainer, TrackingTimelineDemo],
  template: `
    <app-demo-container title="Order Tracking" [code]="code">
      <app-tracking-timeline-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrackingTimelineDemoContainer {
  readonly code = `// See tracking-timeline-demo.ts for full source
// Order tracking timeline with status indicators`;
}
