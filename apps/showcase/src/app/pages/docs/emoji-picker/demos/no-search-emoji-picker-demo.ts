import { Component } from '@angular/core';
import { ScEmojiPicker } from '@semantic-components/ui';

@Component({
  selector: 'app-no-search-emoji-picker-demo',
  imports: [ScEmojiPicker],
  template: `
    <sc-emoji-picker [showSearch]="false" />
  `,
})
export class NoSearchEmojiPickerDemo {}
