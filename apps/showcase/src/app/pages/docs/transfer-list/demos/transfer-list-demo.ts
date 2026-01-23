import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScTransferList } from '@semantic-components/ui';
import type { TransferListItem } from '@semantic-components/ui';

@Component({
  selector: 'sc-transfer-list-demo',
  imports: [ScTransferList],
  template: `
    <div class="flex flex-col gap-8">
      <!-- Basic Transfer List -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Basic Transfer List</h3>
        <sc-transfer-list
          [(sourceItems)]="sourceItems"
          [(targetItems)]="targetItems"
          sourceTitle="Available"
          targetTitle="Selected"
          (change)="onChange($event)"
        />
      </div>

      <!-- Without Search -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Without Search</h3>
        <sc-transfer-list
          [(sourceItems)]="simpleSource"
          [(targetItems)]="simpleTarget"
          [searchable]="false"
          sourceTitle="Options"
          targetTitle="Chosen"
        />
      </div>

      <!-- Current State -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Current State</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="rounded-lg border bg-card p-4">
            <p class="text-sm font-medium mb-2">
              Source ({{ sourceItems().length }})
            </p>
            <ul class="text-xs text-muted-foreground space-y-1">
              @for (item of sourceItems(); track item.id) {
                <li>{{ item.label }}</li>
              }
            </ul>
          </div>
          <div class="rounded-lg border bg-card p-4">
            <p class="text-sm font-medium mb-2">
              Target ({{ targetItems().length }})
            </p>
            <ul class="text-xs text-muted-foreground space-y-1">
              @for (item of targetItems(); track item.id) {
                <li>{{ item.label }}</li>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransferListDemoComponent {
  readonly sourceItems = signal<TransferListItem[]>([
    { id: '1', label: 'JavaScript', description: 'Programming language' },
    { id: '2', label: 'TypeScript', description: 'Typed JavaScript' },
    { id: '3', label: 'Python', description: 'General purpose language' },
    { id: '4', label: 'Rust', description: 'Systems programming' },
    { id: '5', label: 'Go', description: 'Google language' },
    { id: '6', label: 'Java', description: 'Enterprise language' },
    { id: '7', label: 'C#', description: 'Microsoft language' },
    { id: '8', label: 'Ruby', description: 'Dynamic language' },
  ]);

  readonly targetItems = signal<TransferListItem[]>([
    { id: '9', label: 'Angular', description: 'Web framework' },
    { id: '10', label: 'React', description: 'UI library' },
  ]);

  readonly simpleSource = signal<TransferListItem[]>([
    { id: '1', label: 'Option A' },
    { id: '2', label: 'Option B' },
    { id: '3', label: 'Option C' },
    { id: '4', label: 'Option D', disabled: true },
  ]);

  readonly simpleTarget = signal<TransferListItem[]>([
    { id: '5', label: 'Option E' },
  ]);

  onChange(state: {
    source: TransferListItem[];
    target: TransferListItem[];
  }): void {
    console.log('Transfer list changed:', state);
  }
}
