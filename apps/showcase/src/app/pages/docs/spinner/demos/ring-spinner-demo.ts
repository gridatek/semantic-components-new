import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ScSpinnerRing } from '@semantic-components/ui';

@Component({
  selector: 'app-ring-spinner-demo',
  imports: [ScSpinnerRing],
  template: `
    <div class="flex items-center gap-6">
      <span sc-spinner-ring size="xs"></span>
      <span sc-spinner-ring size="sm"></span>
      <span sc-spinner-ring></span>
      <span sc-spinner-ring size="lg"></span>
      <span sc-spinner-ring size="xl"></span>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RingSpinnerDemo {}
