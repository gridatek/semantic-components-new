import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScDialogDemoContainer } from './demos/dialog-demo-container';
import { TocHeading } from '../../../components/toc/toc-heading';

@Component({
  selector: 'app-dialog-page',
  imports: [ScDialogDemoContainer, TocHeading],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Dialog</h1>
        <p class="text-muted-foreground">
          A window overlaid on either the primary window or another dialog
          window, rendering the content underneath inert.
        </p>
      </div>

      <section class="space-y-8">
        <h2 toc class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-dialog-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DialogPage {}
