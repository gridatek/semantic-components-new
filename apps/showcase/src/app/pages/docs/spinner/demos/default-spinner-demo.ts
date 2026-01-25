import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSpinner } from '@semantic-components/ui';

@Component({
  selector: 'app-default-spinner-demo',
  imports: [ScSpinner],
  template: `
    <div class="flex items-center gap-6">
      <span sc-spinner size="xs"></span>
      <span sc-spinner size="sm"></span>
      <span sc-spinner></span>
      <span sc-spinner size="lg"></span>
      <span sc-spinner size="xl"></span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultSpinnerDemo {}
