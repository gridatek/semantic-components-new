import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCountdown } from '@semantic-components/ui';

@Component({
  selector: 'app-labels-countdown-demo',
  imports: [ScCountdown],
  template: `
    <div class="p-6 rounded-lg border inline-block">
      <sc-countdown
        [targetDate]="futureDate"
        daysLabel="D"
        hoursLabel="H"
        minutesLabel="M"
        secondsLabel="S"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelsCountdownDemo {
  readonly futureDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
}
