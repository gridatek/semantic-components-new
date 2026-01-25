import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SwatchesColorPickerDemo } from './swatches-color-picker-demo';

@Component({
  selector: 'app-swatches-color-picker-demo-container',
  imports: [DemoContainer, SwatchesColorPickerDemo],
  template: `
    <app-demo-container title="With Swatches" [code]="code">
      <app-swatches-color-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwatchesColorPickerDemoContainer {
  readonly code = `// Color picker with preset color swatches`;
}
