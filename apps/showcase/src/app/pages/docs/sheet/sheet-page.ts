import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSheetDemoContainer } from './demos/sheet-demo-container';

@Component({
  selector: 'app-sheet-page',
  imports: [ScSheetDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Sheet</h1>
        <p class="text-muted-foreground">
          Extends the Dialog component to display content that complements the
          main content of the screen. Slides in from the edge of the screen.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-sheet-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SheetPage {}
