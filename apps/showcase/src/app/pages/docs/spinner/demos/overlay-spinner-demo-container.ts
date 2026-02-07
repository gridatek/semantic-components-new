import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { OverlaySpinnerDemo } from './overlay-spinner-demo';

@Component({
  selector: 'app-overlay-spinner-demo-container',
  imports: [DemoContainer, OverlaySpinnerDemo],
  template: `
    <app-demo-container title="Loading Overlay" [code]="code">
      <app-overlay-spinner-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlaySpinnerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSpinner } from '@semantic-components/ui';

@Component({
  selector: 'app-overlay-spinner-demo',
  imports: [ScSpinner],
  template: \`
    <div class="relative h-32 rounded-lg border bg-muted/50 flex items-center justify-center">
      <div class="text-center">
        <span sc-spinner size="xl" class="text-primary"></span>
        <p class="mt-2 text-sm text-muted-foreground">Loading content...</p>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlaySpinnerDemo {}`;
}
