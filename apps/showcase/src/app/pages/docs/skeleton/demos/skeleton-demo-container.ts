import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScSkeletonDemo } from './skeleton-demo';

@Component({
  selector: 'app-skeleton-demo-container',
  imports: [DemoContainer, ScSkeletonDemo],
  template: `
    <app-demo-container title="Skeleton" [code]="code">
      <app-sc-skeleton-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SkeletonDemoContainer {
  readonly code = '';
}
