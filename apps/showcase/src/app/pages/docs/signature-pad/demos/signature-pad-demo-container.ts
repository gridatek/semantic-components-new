import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScSignaturePadDemo } from './signature-pad-demo';

@Component({
  selector: 'app-signature-pad-demo-container',
  imports: [DemoContainer, ScSignaturePadDemo],
  template: `
    <app-demo-container title="SignaturePad" [code]="code">
      <sc-signature-pad-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignaturePadDemoContainer {
  readonly code = '';
}
