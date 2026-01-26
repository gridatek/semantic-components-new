import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTimezoneDisplay } from '@semantic-components/ui';

@Component({
  selector: 'app-display-timezone-demo',
  imports: [ScTimezoneDisplay],
  template: `
    <div class="flex items-center gap-4">
      <button sc-timezone-display></button>
      <span class="text-sm text-muted-foreground">
        Shows current timezone abbreviation
      </span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayTimezoneDemo {}
