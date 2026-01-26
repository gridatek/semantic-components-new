import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { TriggerEmojiPickerDemo } from './trigger-emoji-picker-demo';

@Component({
  selector: 'app-trigger-emoji-picker-demo-container',
  imports: [DemoContainer, TriggerEmojiPickerDemo],
  template: `
    <app-demo-container
      title="Trigger Button"
      demoUrl="/demos/emoji-picker/trigger-emoji-picker-demo"
      [code]="code"
    >
      <app-trigger-emoji-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TriggerEmojiPickerDemoContainer {
  readonly code = `import { Component } from '@angular/core';
import { ScEmojiPickerTrigger } from '@semantic-components/ui';

@Component({
  selector: 'app-trigger-emoji-picker-demo',
  imports: [ScEmojiPickerTrigger],
  template: \`
    <p class="text-sm text-muted-foreground mb-2">
      Use with a popover for dropdown behavior:
    </p>
    <div class="flex items-center gap-2">
      <button sc-emoji-picker-trigger></button>
      <span class="text-sm text-muted-foreground">
        ← Click to open (requires popover)
      </span>
    </div>
  \`,
})
export class TriggerEmojiPickerDemo {}`;
}
