import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { StatusTimelineDemo } from './status-timeline-demo';

@Component({
  selector: 'app-status-timeline-demo-container',
  imports: [DemoContainer, StatusTimelineDemo],
  template: `
    <app-demo-container title="Status Variants" [code]="code">
      <app-status-timeline-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusTimelineDemoContainer {
  readonly code = `// See status-timeline-demo.ts for full source
// Demonstrates success, warning, error, and outline dot variants`;
}
