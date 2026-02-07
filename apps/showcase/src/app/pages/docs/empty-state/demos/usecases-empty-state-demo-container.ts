import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { UsecasesEmptyStateDemo } from './usecases-empty-state-demo';

@Component({
  selector: 'app-usecases-empty-state-demo-container',
  imports: [DemoContainer, UsecasesEmptyStateDemo],
  template: `
    <app-demo-container title="Common Use Cases" [code]="code">
      <app-usecases-empty-state-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsecasesEmptyStateDemoContainer {
  readonly code = `import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ScEmptyState } from '@semantic-components/ui';
import type { EmptyStateAction } from '@semantic-components/ui';

@Component({
  selector: 'app-usecases-empty-state-demo',
  imports: [ScEmptyState],
  template: \`
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="rounded-lg border">
        <sc-empty-state
          title="No notifications"
          description="You're all caught up! Check back later for new updates."
          [icon]="bellIcon"
        />
      </div>
      <div class="rounded-lg border">
        <sc-empty-state
          title="Your cart is empty"
          description="Looks like you haven't added anything to your cart yet."
          [icon]="cartIcon"
          [actions]="shopActions"
        />
      </div>
    </div>
  \`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsecasesEmptyStateDemo {
  readonly bellIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>\`;
  readonly cartIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>\`;

  readonly shopActions: EmptyStateAction[] = [
    { label: 'Start Shopping', variant: 'default' },
  ];
}`;
}
