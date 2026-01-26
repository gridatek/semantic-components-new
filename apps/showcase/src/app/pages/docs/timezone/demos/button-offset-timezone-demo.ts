import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTimezoneButton } from '@semantic-components/ui';

@Component({
  selector: 'app-button-offset-timezone-demo',
  imports: [ScTimezoneButton],
  template: `
    <button sc-timezone-button variant="outline" [showOffset]="true"></button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonOffsetTimezoneDemo {}
