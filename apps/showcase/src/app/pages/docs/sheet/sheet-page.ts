import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RightSheetDemoContainer } from './demos/right-sheet-demo-container';
import { LeftSheetDemoContainer } from './demos/left-sheet-demo-container';
import { TopSheetDemoContainer } from './demos/top-sheet-demo-container';
import { BottomSheetDemoContainer } from './demos/bottom-sheet-demo-container';

@Component({
  selector: 'app-sheet-page',
  imports: [
    RightSheetDemoContainer,
    LeftSheetDemoContainer,
    TopSheetDemoContainer,
    BottomSheetDemoContainer,
  ],
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
        <app-right-sheet-demo-container />
        <app-left-sheet-demo-container />
        <app-top-sheet-demo-container />
        <app-bottom-sheet-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SheetPage {}
