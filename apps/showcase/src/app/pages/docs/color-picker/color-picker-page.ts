import { ChangeDetectionStrategy, Component } from '@angular/core';
import ColorPickerDemoContainer from './demos/color-picker-demo-container';

@Component({
  selector: 'app-color-picker-page',
  imports: [ColorPickerDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">ColorPicker</h1>
        <p class="text-muted-foreground">
          A component for selecting colors with various formats.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-color-picker-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ColorPickerPage {}
