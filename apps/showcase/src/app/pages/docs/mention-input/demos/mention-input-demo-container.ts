import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScMentionInputDemo } from './mention-input-demo';

@Component({
  selector: 'app-mention-input-demo-container',
  imports: [DemoContainer, ScMentionInputDemo],
  template: `
    <app-demo-container title="MentionInput" [code]="code">
      <sc-mention-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MentionInputDemoContainer {
  readonly code = '';
}
