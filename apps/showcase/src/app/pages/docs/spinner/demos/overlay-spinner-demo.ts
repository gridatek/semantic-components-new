import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSpinner } from '@semantic-components/ui';

@Component({
  selector: 'app-overlay-spinner-demo',
  imports: [ScSpinner],
  template: `
    <div
      class="relative h-32 rounded-lg border bg-muted/50 flex items-center justify-center"
    >
      <div class="text-center">
        <span sc-spinner size="xl" class="text-primary"></span>
        <p class="mt-2 text-sm text-muted-foreground">Loading content...</p>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlaySpinnerDemo {}
