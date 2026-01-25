import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSpinnerBars } from '@semantic-components/ui';

@Component({
  selector: 'app-bars-spinner-demo',
  imports: [ScSpinnerBars],
  template: `
    <div class="flex items-center gap-6">
      <span sc-spinner-bars size="xs"></span>
      <span sc-spinner-bars size="sm"></span>
      <span sc-spinner-bars></span>
      <span sc-spinner-bars size="lg"></span>
      <span sc-spinner-bars size="xl"></span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarsSpinnerDemo {}
