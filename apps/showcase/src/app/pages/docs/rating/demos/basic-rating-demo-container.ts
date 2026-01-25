import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicRatingDemo } from './basic-rating-demo';

@Component({
  selector: 'app-basic-rating-demo-container',
  imports: [DemoContainer, BasicRatingDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-rating-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicRatingDemoContainer {
  readonly code = `// See basic-rating-demo.ts for full source`;
}
