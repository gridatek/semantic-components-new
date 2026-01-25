import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { HalfRatingDemo } from './half-rating-demo';

@Component({
  selector: 'app-half-rating-demo-container',
  imports: [DemoContainer, HalfRatingDemo],
  template: `
    <app-demo-container title="Half Stars" [code]="code">
      <app-half-rating-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HalfRatingDemoContainer {
  readonly code = `// See half-rating-demo.ts for full source`;
}
