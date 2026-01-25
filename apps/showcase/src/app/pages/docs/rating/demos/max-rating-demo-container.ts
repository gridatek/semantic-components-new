import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MaxRatingDemo } from './max-rating-demo';

@Component({
  selector: 'app-max-rating-demo-container',
  imports: [DemoContainer, MaxRatingDemo],
  template: `
    <app-demo-container title="Custom Max" [code]="code">
      <app-max-rating-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaxRatingDemoContainer {
  readonly code = `// See max-rating-demo.ts for full source`;
}
