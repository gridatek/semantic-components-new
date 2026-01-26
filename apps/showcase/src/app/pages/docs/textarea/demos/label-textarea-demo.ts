import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-label-textarea-demo',
  imports: [ScTextarea, ScLabel],
  template: `
    <div class="grid w-full gap-1.5">
      <label sc-label for="message">Your message</label>
      <textarea
        sc-textarea
        id="message"
        placeholder="Type your message here."
      ></textarea>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelTextareaDemo {}
