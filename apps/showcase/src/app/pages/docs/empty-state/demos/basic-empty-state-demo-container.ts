import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicEmptyStateDemo } from './basic-empty-state-demo';

@Component({
  selector: 'app-basic-empty-state-demo-container',
  imports: [DemoContainer, BasicEmptyStateDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-empty-state-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicEmptyStateDemoContainer {
  readonly code = `import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ScEmptyState } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-empty-state-demo',
  imports: [ScEmptyState],
  template: \`
    <div class="rounded-lg border">
      <sc-empty-state
        title="No results found"
        description="Try adjusting your search or filter to find what you're looking for."
        [icon]="searchIcon"
      />
    </div>
  \`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicEmptyStateDemo {
  readonly searchIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>\`;
}`;
}
