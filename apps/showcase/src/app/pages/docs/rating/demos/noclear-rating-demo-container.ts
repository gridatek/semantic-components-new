import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { NoclearRatingDemo } from './noclear-rating-demo';

@Component({
  selector: 'app-noclear-rating-demo-container',
  imports: [DemoContainer, NoclearRatingDemo],
  template: `
    <app-demo-container title="No Clear" [code]="code">
      <app-noclear-rating-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoclearRatingDemoContainer {
  readonly code = `// See noclear-rating-demo.ts for full source`;
}
