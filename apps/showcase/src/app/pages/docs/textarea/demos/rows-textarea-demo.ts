import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-rows-textarea-demo',
  imports: [ScTextarea, ScLabel],
  template: `
    <div class="grid w-full gap-4">
      <div class="grid gap-1.5">
        <label sc-label for="small">Small (2 rows)</label>
        <textarea
          sc-textarea
          id="small"
          rows="2"
          placeholder="Small textarea"
        ></textarea>
      </div>
      <div class="grid gap-1.5">
        <label sc-label for="large">Large (6 rows)</label>
        <textarea
          sc-textarea
          id="large"
          rows="6"
          placeholder="Large textarea"
        ></textarea>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowsTextareaDemo {}
