import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScInput } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-input-demo',
  imports: [ScInput],
  template: `<input sc-input type="text" placeholder="Enter text..." />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInputDemo {}
