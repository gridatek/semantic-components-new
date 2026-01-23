import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScEmojiPickerDemoContainer } from './demos/emoji-picker-demo-container';

@Component({
  selector: 'app-emoji-picker-page',
  imports: [ScEmojiPickerDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">EmojiPicker</h1>
        <p class="text-muted-foreground">
          A searchable emoji picker with categories and recently used emojis.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-emoji-picker-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EmojiPickerPage {}
