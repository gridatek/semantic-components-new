import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScTagInputDemo } from './tag-input-demo';

@Component({
  selector: 'app-tag-input-demo-container',
  imports: [DemoContainer, ScTagInputDemo],
  template: `
    <app-demo-container title="TagInput" [code]="code">
      <app-sc-tag-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TagInputDemoContainer {
  readonly code = '';
}
