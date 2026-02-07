import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { SpotlightDemoContainer } from './demos/spotlight-demo-container';
import { TocHeading } from '../../../components/toc/toc-heading';

@Component({
  selector: 'app-spotlight-page',
  imports: [SpotlightDemoContainer, TocHeading],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Spotlight</h1>
        <p class="text-muted-foreground">
          Highlight specific UI elements with a spotlight overlay effect.
        </p>
      </div>

      <section class="space-y-8">
        <h2 toc class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-spotlight-demo-container />
      </section>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpotlightPage {}
