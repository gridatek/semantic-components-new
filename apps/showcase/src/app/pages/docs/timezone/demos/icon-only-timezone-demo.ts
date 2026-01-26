import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTimezoneDisplay } from '@semantic-components/ui';

@Component({
  selector: 'app-icon-only-timezone-demo',
  imports: [ScTimezoneDisplay],
  template: `
    <div class="flex items-center gap-4">
      <button sc-timezone-display [iconOnly]="true" size="icon"></button>
      <span class="text-sm text-muted-foreground">Clock icon only</span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconOnlyTimezoneDemo {}
