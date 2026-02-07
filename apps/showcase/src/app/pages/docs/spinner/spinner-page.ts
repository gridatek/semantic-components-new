import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DefaultSpinnerDemoContainer } from './demos/default-spinner-demo-container';
import { ColorsSpinnerDemoContainer } from './demos/colors-spinner-demo-container';
import { DotsSpinnerDemoContainer } from './demos/dots-spinner-demo-container';
import { BarsSpinnerDemoContainer } from './demos/bars-spinner-demo-container';
import { RingSpinnerDemoContainer } from './demos/ring-spinner-demo-container';
import { VariantsSpinnerDemoContainer } from './demos/variants-spinner-demo-container';
import { ButtonSpinnerDemoContainer } from './demos/button-spinner-demo-container';
import { OverlaySpinnerDemoContainer } from './demos/overlay-spinner-demo-container';
import { TocHeading } from '../../../components/toc/toc-heading';

@Component({
  selector: 'app-spinner-page',
  imports: [
    DefaultSpinnerDemoContainer,
    ColorsSpinnerDemoContainer,
    DotsSpinnerDemoContainer,
    BarsSpinnerDemoContainer,
    RingSpinnerDemoContainer,
    VariantsSpinnerDemoContainer,
    ButtonSpinnerDemoContainer,
    OverlaySpinnerDemoContainer,
    TocHeading,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Spinner</h1>
        <p class="text-muted-foreground">
          Loading indicators with multiple animation styles and sizes.
        </p>
      </div>

      <section class="space-y-8">
        <h2 toc class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-default-spinner-demo-container />
        <app-colors-spinner-demo-container />
        <app-dots-spinner-demo-container />
        <app-bars-spinner-demo-container />
        <app-ring-spinner-demo-container />
        <app-variants-spinner-demo-container />
        <app-button-spinner-demo-container />
        <app-overlay-spinner-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpinnerPage {}
