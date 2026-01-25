import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { VariantsSpinnerDemo } from './variants-spinner-demo';

@Component({
  selector: 'app-variants-spinner-demo-container',
  imports: [DemoContainer, VariantsSpinnerDemo],
  template: `
    <app-demo-container title="All Variants" [code]="code">
      <app-variants-spinner-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantsSpinnerDemoContainer {
  readonly code = `// See variants-spinner-demo.ts for full source
// Comparison grid of all spinner variants`;
}
