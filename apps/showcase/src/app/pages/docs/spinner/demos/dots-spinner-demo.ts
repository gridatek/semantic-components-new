import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSpinnerDots } from '@semantic-components/ui';

@Component({
  selector: 'app-dots-spinner-demo',
  imports: [ScSpinnerDots],
  template: `
    <div class="flex items-center gap-6">
      <span sc-spinner-dots size="xs"></span>
      <span sc-spinner-dots size="sm"></span>
      <span sc-spinner-dots></span>
      <span sc-spinner-dots size="lg"></span>
      <span sc-spinner-dots size="xl"></span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DotsSpinnerDemo {}
