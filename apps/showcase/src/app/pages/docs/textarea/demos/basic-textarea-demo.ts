import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScField, ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-textarea-demo',
  imports: [ScField, ScLabel, ScTextarea],
  template: `
    <div sc-field>
      <label sc-label>Your message</label>
      <textarea sc-textarea placeholder="Type your message here."></textarea>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTextareaDemo {}
