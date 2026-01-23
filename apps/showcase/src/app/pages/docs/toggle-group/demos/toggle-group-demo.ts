import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScToggleGroup, ScToggleGroupItem } from '@semantic-components/ui';

@Component({
  selector: 'app-toggle-group-demo',
  imports: [ScToggleGroup, ScToggleGroupItem],
  template: `
    <div class="space-y-8">
      <!-- Single Selection -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Single Selection</h3>
        <div
          sc-toggle-group
          type="single"
          [(value)]="alignment"
          aria-label="Text alignment"
        >
          <button sc-toggle-group-item value="left" aria-label="Align left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <line x1="21" x2="3" y1="6" y2="6" />
              <line x1="15" x2="3" y1="12" y2="12" />
              <line x1="17" x2="3" y1="18" y2="18" />
            </svg>
          </button>
          <button sc-toggle-group-item value="center" aria-label="Align center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <line x1="21" x2="3" y1="6" y2="6" />
              <line x1="17" x2="7" y1="12" y2="12" />
              <line x1="19" x2="5" y1="18" y2="18" />
            </svg>
          </button>
          <button sc-toggle-group-item value="right" aria-label="Align right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <line x1="21" x2="3" y1="6" y2="6" />
              <line x1="21" x2="9" y1="12" y2="12" />
              <line x1="21" x2="7" y1="18" y2="18" />
            </svg>
          </button>
        </div>
        <p class="text-sm text-muted-foreground">
          Selected: {{ alignment() || 'none' }}
        </p>
      </div>

      <!-- Multiple Selection -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Multiple Selection</h3>
        <div
          sc-toggle-group
          type="multiple"
          [(value)]="formatting"
          aria-label="Text formatting"
        >
          <button sc-toggle-group-item value="bold" aria-label="Toggle bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <path d="M14 12a4 4 0 0 0 0-8H6v8" />
              <path d="M15 20a4 4 0 0 0 0-8H6v8" />
            </svg>
          </button>
          <button
            sc-toggle-group-item
            value="italic"
            aria-label="Toggle italic"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <line x1="19" x2="10" y1="4" y2="4" />
              <line x1="14" x2="5" y1="20" y2="20" />
              <line x1="15" x2="9" y1="4" y2="20" />
            </svg>
          </button>
          <button
            sc-toggle-group-item
            value="underline"
            aria-label="Toggle underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <path d="M6 4v6a6 6 0 0 0 12 0V4" />
              <line x1="4" x2="20" y1="20" y2="20" />
            </svg>
          </button>
        </div>
        <p class="text-sm text-muted-foreground">
          Selected: {{ formattingDisplay() }}
        </p>
      </div>

      <!-- Outline Variant -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Outline Variant</h3>
        <div
          sc-toggle-group
          type="single"
          variant="outline"
          [(value)]="view"
          aria-label="View mode"
        >
          <button sc-toggle-group-item value="list" aria-label="List view">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <line x1="8" x2="21" y1="6" y2="6" />
              <line x1="8" x2="21" y1="12" y2="12" />
              <line x1="8" x2="21" y1="18" y2="18" />
              <line x1="3" x2="3.01" y1="6" y2="6" />
              <line x1="3" x2="3.01" y1="12" y2="12" />
              <line x1="3" x2="3.01" y1="18" y2="18" />
            </svg>
          </button>
          <button sc-toggle-group-item value="grid" aria-label="Grid view">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
          </button>
          <button sc-toggle-group-item value="kanban" aria-label="Kanban view">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <rect width="6" height="14" x="4" y="5" rx="2" />
              <rect width="6" height="10" x="14" y="7" rx="2" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Sizes -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Sizes</h3>
        <div class="flex flex-col gap-4">
          <div
            sc-toggle-group
            type="single"
            size="sm"
            aria-label="Small toggle group"
          >
            <button sc-toggle-group-item value="a" aria-label="Option A">
              A
            </button>
            <button sc-toggle-group-item value="b" aria-label="Option B">
              B
            </button>
            <button sc-toggle-group-item value="c" aria-label="Option C">
              C
            </button>
          </div>
          <div
            sc-toggle-group
            type="single"
            size="default"
            aria-label="Default toggle group"
          >
            <button sc-toggle-group-item value="a" aria-label="Option A">
              A
            </button>
            <button sc-toggle-group-item value="b" aria-label="Option B">
              B
            </button>
            <button sc-toggle-group-item value="c" aria-label="Option C">
              C
            </button>
          </div>
          <div
            sc-toggle-group
            type="single"
            size="lg"
            aria-label="Large toggle group"
          >
            <button sc-toggle-group-item value="a" aria-label="Option A">
              A
            </button>
            <button sc-toggle-group-item value="b" aria-label="Option B">
              B
            </button>
            <button sc-toggle-group-item value="c" aria-label="Option C">
              C
            </button>
          </div>
        </div>
      </div>

      <!-- Disabled -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Disabled</h3>
        <div class="flex flex-col gap-4">
          <div
            sc-toggle-group
            type="single"
            [disabled]="true"
            aria-label="Disabled toggle group"
          >
            <button sc-toggle-group-item value="a" aria-label="Option A">
              A
            </button>
            <button sc-toggle-group-item value="b" aria-label="Option B">
              B
            </button>
            <button sc-toggle-group-item value="c" aria-label="Option C">
              C
            </button>
          </div>
          <div
            sc-toggle-group
            type="single"
            aria-label="Toggle group with disabled item"
          >
            <button sc-toggle-group-item value="a" aria-label="Option A">
              A
            </button>
            <button
              sc-toggle-group-item
              value="b"
              [disabled]="true"
              aria-label="Option B (disabled)"
            >
              B
            </button>
            <button sc-toggle-group-item value="c" aria-label="Option C">
              C
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScToggleGroupDemo {
  readonly alignment = signal<string | null>('center');
  readonly formatting = signal<string[]>(['bold']);
  readonly view = signal<string | null>('list');

  readonly formattingDisplay = () => {
    const val = this.formatting();
    return val.length > 0 ? val.join(', ') : 'none';
  };
}
