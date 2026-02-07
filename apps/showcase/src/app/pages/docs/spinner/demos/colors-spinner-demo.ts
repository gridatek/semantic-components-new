import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ScSpinner } from '@semantic-components/ui';

@Component({
  selector: 'app-colors-spinner-demo',
  imports: [ScSpinner],
  template: `
    <div class="flex items-center gap-6">
      <span sc-spinner class="text-primary"></span>
      <span sc-spinner class="text-blue-500"></span>
      <span sc-spinner class="text-green-500"></span>
      <span sc-spinner class="text-yellow-500"></span>
      <span sc-spinner class="text-red-500"></span>
      <span sc-spinner class="text-purple-500"></span>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsSpinnerDemo {}
