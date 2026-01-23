import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScTextareaDemo } from './textarea-demo';

@Component({
  selector: 'app-textarea-demo-container',
  imports: [DemoContainer, ScTextareaDemo],
  template: `
    <app-demo-container title="Textarea" [code]="code">
      <app-sc-textarea-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TextareaDemoContainer {
  readonly code = '';
}
