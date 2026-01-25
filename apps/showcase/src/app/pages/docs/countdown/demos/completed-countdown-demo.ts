import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCountdown } from '@semantic-components/ui';

@Component({
  selector: 'app-completed-countdown-demo',
  imports: [ScCountdown],
  template: `
    <div class="p-6 rounded-lg border inline-block">
      <sc-countdown [targetDate]="pastDate" variant="cards" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompletedCountdownDemo {
  readonly pastDate = new Date(Date.now() - 1000);
}
