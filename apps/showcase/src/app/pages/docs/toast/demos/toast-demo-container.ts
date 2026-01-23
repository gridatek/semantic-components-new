import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScToastDemo } from './toast-demo';

@Component({
  selector: 'app-toast-demo-container',
  imports: [DemoContainer, ScToastDemo],
  template: `
    <app-demo-container title="Toast" [code]="code">
      <app-sc-toast-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToastDemoContainer {
  readonly code = '';
}
