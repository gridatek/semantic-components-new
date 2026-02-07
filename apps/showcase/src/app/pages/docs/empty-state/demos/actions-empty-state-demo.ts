import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ScEmptyState } from '@semantic-components/ui';
import type { EmptyStateAction } from '@semantic-components/ui';

@Component({
  selector: 'app-actions-empty-state-demo',
  imports: [ScEmptyState],
  template: `
    <div class="rounded-lg border">
      <sc-empty-state
        title="No projects yet"
        description="Get started by creating your first project."
        [icon]="folderIcon"
        [actions]="actions"
        (actionClick)="onAction($event)"
      />
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsEmptyStateDemo {
  readonly folderIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M12 10v6"/><path d="m9 13 3-3 3 3"/></svg>`;

  readonly actions: EmptyStateAction[] = [
    { label: 'Create Project', variant: 'default' },
    { label: 'Import', variant: 'outline' },
  ];

  onAction(action: EmptyStateAction): void {
    console.log('Action clicked:', action.label);
  }
}
