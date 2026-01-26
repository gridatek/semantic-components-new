import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTimezoneButton } from '@semantic-components/ui';

@Component({
  selector: 'app-button-timezone-demo',
  imports: [ScTimezoneButton],
  template: `
    <div class="flex items-center gap-4">
      <button sc-timezone-button variant="outline"></button>
      <span class="text-sm text-muted-foreground">
        Shows current timezone with dropdown icon
      </span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonTimezoneDemo {}
