import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSpinner, ScSpinnerDots, ScSpinnerRing } from '@semantic-components/ui';

@Component({
  selector: 'app-button-spinner-demo',
  imports: [ScSpinner, ScSpinnerDots, ScSpinnerRing],
  template: `
    <div class="flex items-center gap-4">
      <button
        class="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        disabled
      >
        <span sc-spinner size="sm" class="text-primary-foreground"></span>
        Loading...
      </button>
      <button
        class="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium"
        disabled
      >
        <span sc-spinner-ring size="sm"></span>
        Processing
      </button>
      <button
        class="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
        disabled
      >
        <span sc-spinner-dots size="sm"></span>
        Saving
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonSpinnerDemo {}
