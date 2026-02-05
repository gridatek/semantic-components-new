import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScField, ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-rows-textarea-demo',
  imports: [ScField, ScLabel, ScTextarea],
  template: `
    <div class="grid w-full gap-4">
      <div sc-field>
        <label sc-label>Small (2 rows)</label>
        <textarea sc-textarea rows="2" placeholder="Small textarea"></textarea>
      </div>
      <div sc-field>
        <label sc-label>Large (6 rows)</label>
        <textarea sc-textarea rows="6" placeholder="Large textarea"></textarea>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowsTextareaDemo {}
