import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { IconsRatingDemo } from './icons-rating-demo';

@Component({
  selector: 'app-icons-rating-demo-container',
  imports: [DemoContainer, IconsRatingDemo],
  template: `
    <app-demo-container title="Custom Icons" [code]="code">
      <app-icons-rating-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsRatingDemoContainer {
  readonly code = `// See icons-rating-demo.ts for full source`;
}
