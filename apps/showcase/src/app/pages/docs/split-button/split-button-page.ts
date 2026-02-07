import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { SplitButtonDemoContainer } from './demos/split-button-demo-container';
import { TocHeading } from '../../../components/toc/toc-heading';

@Component({
  selector: 'app-split-button-page',
  imports: [SplitButtonDemoContainer, TocHeading],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">SplitButton</h1>
        <p class="text-muted-foreground">
          A button with a main action and a dropdown for additional related
          actions.
        </p>
      </div>

      <section class="space-y-8">
        <h2 toc class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-split-button-demo-container />
      </section>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SplitButtonPage {}
