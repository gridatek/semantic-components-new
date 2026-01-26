import { Component } from '@angular/core';
import { ScEmojiPicker } from '@semantic-components/ui';

@Component({
  selector: 'app-no-categories-emoji-picker-demo',
  imports: [ScEmojiPicker],
  template: `
    <sc-emoji-picker [showCategories]="false" class="h-72" />
  `,
})
export class NoCategoriesEmojiPickerDemo {}
