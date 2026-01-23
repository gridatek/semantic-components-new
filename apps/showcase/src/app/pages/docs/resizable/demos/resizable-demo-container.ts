import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScResizableDemo } from './resizable-demo';

@Component({
  selector: 'app-resizable-demo-container',
  imports: [DemoContainer, ScResizableDemo],
  template: `
    <app-demo-container title="Resizable" [code]="code">
      <app-sc-resizable-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ResizableDemoContainer {
  readonly code = '';
}
