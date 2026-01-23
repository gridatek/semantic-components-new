import { ChangeDetectionStrategy, Component } from '@angular/core';
import ComboboxDemoContainer from './demos/combobox-demo-container';

@Component({
  selector: 'app-combobox-page',
  imports: [ComboboxDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Combobox</h1>
        <p class="text-muted-foreground">
          Autocomplete input and command palette with a list of suggestions.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-combobox-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ComboboxPage {}
