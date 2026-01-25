import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ColorsRatingDemo } from './colors-rating-demo';

@Component({
  selector: 'app-colors-rating-demo-container',
  imports: [DemoContainer, ColorsRatingDemo],
  template: `
    <app-demo-container title="Colors" [code]="code">
      <app-colors-rating-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsRatingDemoContainer {
  readonly code = `// See colors-rating-demo.ts for full source`;
}
