import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ActivityTimelineDemo } from './activity-timeline-demo';

@Component({
  selector: 'app-activity-timeline-demo-container',
  imports: [DemoContainer, ActivityTimelineDemo],
  template: `
    <app-demo-container title="Activity Feed" [code]="code">
      <app-activity-timeline-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityTimelineDemoContainer {
  readonly code = `// See activity-timeline-demo.ts for full source
// Activity feed with user actions and timestamps`;
}
