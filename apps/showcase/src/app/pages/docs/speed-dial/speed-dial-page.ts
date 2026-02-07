import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpeedDialDemoContainer } from './demos/speed-dial-demo-container';
import { TocHeading } from '../../../components/toc/toc-heading';

@Component({
  selector: 'app-speed-dial-page',
  imports: [SpeedDialDemoContainer, TocHeading],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">SpeedDial</h1>
        <p class="text-muted-foreground">
          A floating action button that expands to reveal a set of related
          actions.
        </p>
      </div>

      <section class="space-y-8">
        <h2 toc class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-speed-dial-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpeedDialPage {}
