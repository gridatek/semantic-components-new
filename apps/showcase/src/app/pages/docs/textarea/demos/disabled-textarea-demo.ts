import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-textarea-demo',
  imports: [ScTextarea],
  template: `
    <textarea
      sc-textarea
      placeholder="Disabled textarea"
      disabled
    ></textarea>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledTextareaDemo {}
