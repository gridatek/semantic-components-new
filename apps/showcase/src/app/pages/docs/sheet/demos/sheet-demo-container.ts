import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScSheetDemo } from './sheet-demo';

@Component({
  selector: 'app-sheet-demo-container',
  imports: [DemoContainer, ScSheetDemo],
  template: `
    <app-demo-container title="Sheet" [code]="code">
      <app-sc-sheet-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SheetDemoContainer {
  readonly code = '';
}
