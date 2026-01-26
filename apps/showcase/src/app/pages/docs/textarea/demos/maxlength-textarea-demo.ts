import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-maxlength-textarea-demo',
  imports: [ScTextarea, ScLabel],
  template: `
    <div class="grid w-full gap-1.5">
      <label sc-label for="limited">Description (max 200 characters)</label>
      <textarea
        sc-textarea
        id="limited"
        maxlength="200"
        placeholder="Enter description..."
      ></textarea>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaxlengthTextareaDemo {}
