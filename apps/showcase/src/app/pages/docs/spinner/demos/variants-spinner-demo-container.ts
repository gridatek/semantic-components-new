import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { VariantsSpinnerDemo } from './variants-spinner-demo';

@Component({
  selector: 'app-variants-spinner-demo-container',
  imports: [DemoContainer, VariantsSpinnerDemo],
  template: `
    <app-demo-container title="All Variants" [code]="code">
      <app-variants-spinner-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantsSpinnerDemoContainer {
  readonly code = `import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {
  ScSpinner,
  ScSpinnerDots,
  ScSpinnerBars,
  ScSpinnerRing,
} from '@semantic-components/ui';

@Component({
  selector: 'app-variants-spinner-demo',
  imports: [ScSpinner, ScSpinnerDots, ScSpinnerBars, ScSpinnerRing],
  template: \`
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
  \`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantsSpinnerDemo {}`;
}
