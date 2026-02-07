import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CompactColorPickerDemo } from './compact-color-picker-demo';

@Component({
  selector: 'app-compact-color-picker-demo-container',
  imports: [DemoContainer, CompactColorPickerDemo],
  template: `
    <app-demo-container title="Compact" [code]="code">
      <app-compact-color-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompactColorPickerDemoContainer {
  readonly code = `// Compact color picker layout`;
}
