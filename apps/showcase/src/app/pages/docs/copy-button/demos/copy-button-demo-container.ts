import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScCopyButtonDemo } from './copy-button-demo';

@Component({
  selector: 'app-copy-button-demo-container',
  imports: [DemoContainer, ScCopyButtonDemo],
  template: `
    <app-demo-container title="CopyButton" [code]="code">
      <app-sc-copy-button-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CopyButtonDemoContainer {
  readonly code = '';
}
