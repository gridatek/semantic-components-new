import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSpinner, ScSpinnerDots, ScSpinnerBars, ScSpinnerRing } from '@semantic-components/ui';

@Component({
  selector: 'app-variants-spinner-demo',
  imports: [ScSpinner, ScSpinnerDots, ScSpinnerBars, ScSpinnerRing],
  template: `
    <div class="grid grid-cols-4 gap-4 text-center">
      <div class="space-y-2">
        <span sc-spinner size="lg"></span>
        <p class="text-sm text-muted-foreground">Default</p>
      </div>
      <div class="space-y-2">
        <span sc-spinner-dots size="lg"></span>
        <p class="text-sm text-muted-foreground">Dots</p>
      </div>
      <div class="space-y-2">
        <span sc-spinner-bars size="lg"></span>
        <p class="text-sm text-muted-foreground">Bars</p>
      </div>
      <div class="space-y-2">
        <span sc-spinner-ring size="lg"></span>
        <p class="text-sm text-muted-foreground">Ring</p>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantsSpinnerDemo {}
