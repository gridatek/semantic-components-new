import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScField, ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-textarea-demo',
  imports: [ScField, ScLabel, ScTextarea],
  template: `
    <div sc-field [disabled]="true">
      <label sc-label>Disabled</label>
      <textarea sc-textarea placeholder="Disabled textarea" disabled></textarea>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledTextareaDemo {}
