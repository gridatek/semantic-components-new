import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SimpleColorPickerDemo } from './simple-color-picker-demo';

@Component({
  selector: 'app-simple-color-picker-demo-container',
  imports: [DemoContainer, SimpleColorPickerDemo],
  template: `
    <app-demo-container title="Simple Swatches" [code]="code">
      <app-simple-color-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleColorPickerDemoContainer {
  readonly code = `// Simple swatch-only color picker`;
}
