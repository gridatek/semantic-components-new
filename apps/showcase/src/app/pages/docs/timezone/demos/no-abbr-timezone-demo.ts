import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTimezoneSelect } from '@semantic-components/ui';

@Component({
  selector: 'app-no-abbr-timezone-demo',
  imports: [ScTimezoneSelect],
  template: `
    <div class="max-w-xs">
      <sc-timezone-select [showAbbr]="false"></sc-timezone-select>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoAbbrTimezoneDemo {}
