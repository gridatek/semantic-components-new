import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SizesTimelineDemo } from './sizes-timeline-demo';

@Component({
  selector: 'app-sizes-timeline-demo-container',
  imports: [DemoContainer, SizesTimelineDemo],
  template: `
    <app-demo-container title="Dot Sizes" [code]="code">
      <app-sizes-timeline-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizesTimelineDemoContainer {
  readonly code = `// See sizes-timeline-demo.ts for full source
// Demonstrates sm, default, and lg dot sizes`;
}
