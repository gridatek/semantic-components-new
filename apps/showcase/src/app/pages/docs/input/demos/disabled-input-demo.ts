import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScInput } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-input-demo',
  imports: [ScInput],
  template: `<input sc-input type="text" placeholder="Disabled input" disabled />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledInputDemo {}
