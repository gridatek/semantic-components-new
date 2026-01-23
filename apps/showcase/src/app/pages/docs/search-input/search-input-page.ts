import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchInputDemoComponent } from './demos/search-input-demo-container';

@Component({
  selector: 'app-search-input-page',
  imports: [SearchInputDemoComponent],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">SearchInput</h1>
        <p class="text-muted-foreground">A search input component.</p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-search-input-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchInputPage {}
