import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ButtonFileUploadDemo } from './button-file-upload-demo';

@Component({
  selector: 'app-button-file-upload-demo-container',
  imports: [DemoContainer, ButtonFileUploadDemo],
  template: `
    <app-demo-container title="Button Trigger" [code]="code">
      <app-button-file-upload-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonFileUploadDemoContainer {
  readonly code = `// File upload triggered by a button click
// See source code for full implementation`;
}
