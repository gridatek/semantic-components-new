import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScEmojiPickerDemo } from './emoji-picker-demo';

@Component({
  selector: 'app-emoji-picker-demo-container',
  imports: [DemoContainer, ScEmojiPickerDemo],
  template: `
    <app-demo-container title="EmojiPicker" [code]="code">
      <sc-emoji-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EmojiPickerDemoContainer {
  readonly code = '';
}
