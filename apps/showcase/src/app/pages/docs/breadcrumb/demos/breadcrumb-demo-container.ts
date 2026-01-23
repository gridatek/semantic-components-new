import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScBreadcrumbDemo } from './breadcrumb-demo';

@Component({
  selector: 'app-breadcrumb-demo-container',
  imports: [DemoContainer, ScBreadcrumbDemo],
  template: `
    <app-demo-container title="Breadcrumb" [code]="code">
      <app-sc-breadcrumb-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BreadcrumbDemoContainer {
  readonly code = '';
}
