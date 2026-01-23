import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import {
  ScSortableHandle,
  ScSortableItem,
  ScSortableList,
  ScSortableOverlay,
  SortableEvent,
} from '@semantic-components/ui';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface PlaylistItem {
  id: number;
  title: string;
  artist: string;
  duration: string;
}

@Component({
  selector: 'app-sc-sortable-list-demo',
  imports: [
    ScSortableList,
    ScSortableItem,
    ScSortableHandle,
    ScSortableOverlay,
    JsonPipe,
  ],
  template: `
    <div class="space-y-8">
      <!-- Basic Sortable List -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Sortable List</h3>
        <div class="max-w-md space-y-2">
          <div sc-sortable-list [(items)]="basicItems" class="gap-2">
            <div sc-sortable-overlay></div>
            @for (item of basicItems(); track item; let i = $index) {
              <div
                sc-sortable-item
                [index]="i"
                [item]="item"
                class="flex items-center gap-3 rounded-md border bg-background p-3"
              >
                <span class="text-sm">{{ item }}</span>
              </div>
            }
          </div>
          <p class="text-sm text-muted-foreground">
            Drag items to reorder. Use Arrow keys when focused.
          </p>
        </div>
      </div>

      <!-- With Drag Handle -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Drag Handle</h3>
        <div class="max-w-md">
          <div
            sc-sortable-list
            [(items)]="handleItems"
            [handleOnly]="true"
            class="gap-2"
          >
            <div sc-sortable-overlay></div>
            @for (item of handleItems(); track item; let i = $index) {
              <div
                sc-sortable-item
                [index]="i"
                [item]="item"
                class="flex items-center gap-3 rounded-md border bg-background p-3"
              >
                <span sc-sortable-handle class="p-1"></span>
                <span class="text-sm">{{ item }}</span>
              </div>
            }
          </div>
        </div>
      </div>

      <!-- Task List Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Task List</h3>
        <div class="max-w-md">
          <div
            sc-sortable-list
            [(items)]="tasks"
            [handleOnly]="true"
            (sortChange)="onTaskReorder($event)"
            class="gap-1"
          >
            <div sc-sortable-overlay></div>
            @for (task of tasks(); track task.id; let i = $index) {
              <div
                sc-sortable-item
                [index]="i"
                [item]="task"
                class="flex items-center gap-3 rounded-md border bg-background p-3 hover:bg-muted/50"
              >
                <span sc-sortable-handle class="p-1"></span>
                <input
                  type="checkbox"
                  [checked]="task.completed"
                  (change)="toggleTask(task.id)"
                  class="size-4 rounded border-primary"
                />
                <span
                  class="flex-1 text-sm"
                  [class.line-through]="task.completed"
                  [class.text-muted-foreground]="task.completed"
                >
                  {{ task.title }}
                </span>
              </div>
            }
          </div>
        </div>
      </div>

      <!-- Playlist Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Playlist</h3>
        <div class="max-w-lg">
          <div class="rounded-lg border">
            <div class="border-b bg-muted/50 px-4 py-2">
              <h4 class="font-medium">My Playlist</h4>
            </div>
            <div
              sc-sortable-list
              [(items)]="playlist"
              [handleOnly]="true"
              class="divide-y"
            >
              <div sc-sortable-overlay></div>
              @for (song of playlist(); track song.id; let i = $index) {
                <div
                  sc-sortable-item
                  [index]="i"
                  [item]="song"
                  class="flex items-center gap-4 px-4 py-3 hover:bg-muted/50"
                >
                  <span sc-sortable-handle class="p-1"></span>
                  <span class="w-6 text-sm text-muted-foreground">
                    {{ i + 1 }}
                  </span>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium truncate">{{ song.title }}</p>
                    <p class="text-xs text-muted-foreground truncate">
                      {{ song.artist }}
                    </p>
                  </div>
                  <span class="text-sm text-muted-foreground">
                    {{ song.duration }}
                  </span>
                </div>
              }
            </div>
          </div>
        </div>
      </div>

      <!-- Horizontal Sortable -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Horizontal Sortable</h3>
        <div class="max-w-lg">
          <div
            sc-sortable-list
            [(items)]="horizontalItems"
            orientation="horizontal"
            class="gap-3 flex-wrap"
          >
            <div sc-sortable-overlay></div>
            @for (item of horizontalItems(); track item; let i = $index) {
              <div
                sc-sortable-item
                [index]="i"
                [item]="item"
                class="flex items-center justify-center size-16 rounded-md border bg-background text-sm font-medium"
              >
                {{ item }}
              </div>
            }
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Use Left/Right arrow keys to reorder.
          </p>
        </div>
      </div>

      <!-- Cards Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Kanban Cards</h3>
        <div class="max-w-md">
          <div
            sc-sortable-list
            [(items)]="cards"
            [handleOnly]="true"
            class="gap-3"
          >
            <div sc-sortable-overlay></div>
            @for (card of cards(); track card.id; let i = $index) {
              <div
                sc-sortable-item
                [index]="i"
                [item]="card"
                class="rounded-lg border bg-card p-4 shadow-sm"
              >
                <div class="flex items-start gap-3">
                  <span sc-sortable-handle class="mt-1 p-1"></span>
                  <div class="flex-1 space-y-2">
                    <h4 class="font-medium">{{ card.title }}</h4>
                    <p class="text-sm text-muted-foreground">
                      {{ card.description }}
                    </p>
                    <div class="flex items-center gap-2">
                      <span
                        class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium"
                        [class]="getPriorityClass(card.priority)"
                      >
                        {{ card.priority }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      <!-- Disabled State -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Disabled</h3>
        <div class="max-w-md">
          <div
            sc-sortable-list
            [items]="['Item 1', 'Item 2', 'Item 3']"
            [disabled]="true"
            class="gap-2"
          >
            @for (
              item of ['Item 1', 'Item 2', 'Item 3'];
              track item;
              let i = $index
            ) {
              <div
                sc-sortable-item
                [index]="i"
                [item]="item"
                class="flex items-center gap-3 rounded-md border bg-muted/50 p-3 opacity-60"
              >
                <span class="text-sm">{{ item }}</span>
              </div>
            }
          </div>
        </div>
      </div>

      <!-- Current Order Display -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Current Order (Basic)</h3>
        <div class="rounded-md border p-4 bg-muted/50 max-w-md">
          <pre class="text-sm">{{ basicItems() | json }}</pre>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSortableListDemo {
  readonly basicItems = signal([
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
  ]);

  readonly handleItems = signal([
    'Drag me by handle',
    'Reorder with grip',
    'Move up or down',
  ]);

  readonly tasks = signal<Task[]>([
    { id: 1, title: 'Review pull request', completed: false },
    { id: 2, title: 'Update documentation', completed: true },
    { id: 3, title: 'Fix navigation bug', completed: false },
    { id: 4, title: 'Write unit tests', completed: false },
    { id: 5, title: 'Deploy to staging', completed: false },
  ]);

  readonly playlist = signal<PlaylistItem[]>([
    { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', duration: '5:55' },
    {
      id: 2,
      title: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      duration: '8:02',
    },
    { id: 3, title: 'Hotel California', artist: 'Eagles', duration: '6:30' },
    {
      id: 4,
      title: 'Sweet Child O Mine',
      artist: "Guns N' Roses",
      duration: '5:56',
    },
    {
      id: 5,
      title: 'Comfortably Numb',
      artist: 'Pink Floyd',
      duration: '6:24',
    },
  ]);

  readonly horizontalItems = signal(['A', 'B', 'C', 'D', 'E', 'F']);

  readonly cards = signal([
    {
      id: 1,
      title: 'Design System',
      description: 'Create a comprehensive design system for the application',
      priority: 'high',
    },
    {
      id: 2,
      title: 'API Integration',
      description: 'Integrate third-party payment API',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'Documentation',
      description: 'Write developer documentation for components',
      priority: 'low',
    },
  ]);

  toggleTask(id: number): void {
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  onTaskReorder(event: SortableEvent<Task>): void {
    console.log('Task reordered:', event);
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'low':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  }
}
