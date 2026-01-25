import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCountdown } from '@semantic-components/ui';

@Component({
  selector: 'app-separator-countdown-demo',
  imports: [ScCountdown],
  template: `
    <div class="p-6 rounded-lg border inline-block">
      <sc-countdown [targetDate]="futureDate" [showSeparator]="false" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeparatorCountdownDemo {
  readonly futureDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
}
