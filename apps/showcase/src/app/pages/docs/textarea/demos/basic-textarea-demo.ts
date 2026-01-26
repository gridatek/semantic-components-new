import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-textarea-demo',
  imports: [ScTextarea],
  template: `
    <textarea sc-textarea placeholder="Type your message here."></textarea>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTextareaDemo {}
