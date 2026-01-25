import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SizesEmptyStateDemo } from './sizes-empty-state-demo';

@Component({
  selector: 'app-sizes-empty-state-demo-container',
  imports: [DemoContainer, SizesEmptyStateDemo],
  template: `
    <app-demo-container title="Sizes" [code]="code">
      <app-sizes-empty-state-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizesEmptyStateDemoContainer {
  readonly code = `// Empty state size variants: sm, md, lg
// See source code for full implementation`;
}
