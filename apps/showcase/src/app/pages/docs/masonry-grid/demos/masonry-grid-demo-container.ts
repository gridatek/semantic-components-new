import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MasonryGridDemoComponent } from './masonry-grid-demo';

@Component({
  selector: 'app-masonry-grid-demo-container',
  imports: [DemoContainer, MasonryGridDemoComponent],
  template: `
    <app-demo-container title="MasonryGrid" [code]="code">
      <app-masonry-grid-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MasonryGridDemoContainer {
  readonly code = '';
}
