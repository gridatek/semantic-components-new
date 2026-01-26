import { Component } from '@angular/core';
import { ScEmojiPicker } from '@semantic-components/ui';

@Component({
  selector: 'app-compact-emoji-picker-demo',
  imports: [ScEmojiPicker],
  template: `
    <sc-emoji-picker [columns]="6" class="w-56" />
  `,
})
export class CompactEmojiPickerDemo {}
