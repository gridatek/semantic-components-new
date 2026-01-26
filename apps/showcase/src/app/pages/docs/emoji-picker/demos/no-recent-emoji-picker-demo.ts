import { Component } from '@angular/core';
import { ScEmojiPicker } from '@semantic-components/ui';

@Component({
  selector: 'app-no-recent-emoji-picker-demo',
  imports: [ScEmojiPicker],
  template: `
    <sc-emoji-picker [showRecent]="false" />
  `,
})
export class NoRecentEmojiPickerDemo {}
