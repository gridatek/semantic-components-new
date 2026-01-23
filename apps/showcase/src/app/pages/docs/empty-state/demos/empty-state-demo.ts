import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScEmptyState } from '@semantic-components/ui';
import type { EmptyStateAction } from '@semantic-components/ui';

@Component({
  selector: 'sc-empty-state-demo',
  imports: [ScEmptyState],
  template: `
    <div class="flex flex-col gap-8">
      <!-- Basic Empty State -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Basic Empty State</h3>
        <div class="rounded-lg border">
          <sc-empty-state
            title="No results found"
            description="Try adjusting your search or filter to find what you're looking for."
            [icon]="searchIcon"
          />
        </div>
      </div>

      <!-- With Actions -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">With Actions</h3>
        <div class="rounded-lg border">
          <sc-empty-state
            title="No projects yet"
            description="Get started by creating your first project."
            [icon]="folderIcon"
            [actions]="projectActions"
            (actionClick)="onAction($event)"
          />
        </div>
      </div>

      <!-- Size Variants -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Size Variants</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="rounded-lg border">
            <sc-empty-state
              title="Small"
              description="Compact empty state"
              [icon]="boxIcon"
              size="sm"
            />
          </div>
          <div class="rounded-lg border">
            <sc-empty-state
              title="Medium"
              description="Default size empty state"
              [icon]="boxIcon"
              size="md"
            />
          </div>
          <div class="rounded-lg border">
            <sc-empty-state
              title="Large"
              description="Larger empty state for prominent display"
              [icon]="boxIcon"
              size="lg"
            />
          </div>
        </div>
      </div>

      <!-- No Data States -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Common Use Cases</h3>
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
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateDemoComponent {
  readonly searchIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;
  readonly folderIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M12 10v6"/><path d="m9 13 3-3 3 3"/></svg>`;
  readonly boxIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`;
  readonly bellIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`;
  readonly cartIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`;

  readonly projectActions: EmptyStateAction[] = [
    { label: 'Create Project', variant: 'default' },
    { label: 'Import', variant: 'outline' },
  ];

  readonly shopActions: EmptyStateAction[] = [
    { label: 'Start Shopping', variant: 'default' },
  ];

  onAction(action: EmptyStateAction): void {
    console.log('Action clicked:', action.label);
  }
}
