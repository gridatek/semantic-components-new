import { ChangeDetectionStrategy, Component } from '@angular/core';
import ResizableDemoContainer from './demos/resizable-demo-container';

@Component({
  selector: 'app-resizable-page',
  imports: [ResizableDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Resizable</h1>
        <p class="text-muted-foreground">
          Accessible resizable panel groups and layouts with keyboard support.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-resizable-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ResizablePage {}
