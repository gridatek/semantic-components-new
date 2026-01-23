import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { VirtualListDemo } from './virtual-list-demo';

@Component({
  selector: 'app-virtual-list-demo-container',
  imports: [DemoContainer, VirtualListDemo],
  template: `
    <app-demo-container title="Virtual" [code]="code">
      <app-virtual-list-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualListDemoComponent {
  readonly code = `import {
  ChangeDetectionStrategy,
  Component,
  signal,
  viewChild,
} from '@angular/core';
import { ScVirtualList, type VirtualListRange } from '@semantic-components/ui';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-virtual-list-demo',
  imports: [ScVirtualList],
  template: \`
    <div class="space-y-8">
      <!-- Basic Demo -->
      <section>
        <h3 class="text-lg font-medium mb-4">Basic Virtual List</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Rendering {{ items().length.toLocaleString() }} items with
          virtualization. Only visible items are rendered in the DOM.
        </p>
        <div class="border rounded-lg overflow-hidden">
          <sc-virtual-list
            [items]="items()"
            [itemHeight]="48"
            height="300px"
            (rangeChange)="onRangeChange($event)"
          >
            <ng-template let-item let-index="index">
              <div
                class="flex items-center px-4 h-full border-b hover:bg-muted/50 transition-colors"
              >
                <span class="w-16 text-muted-foreground text-sm">
                  {{ index + 1 }}
                </span>
                <span class="flex-1">{{ item }}</span>
              </div>
            </ng-template>
          </sc-virtual-list>
        </div>
        <p class="mt-2 text-sm text-muted-foreground">
          Visible range: {{ visibleRange().start }} - {{ visibleRange().end }}
        </p>
      </section>

      <!-- With Complex Items -->
      <section>
        <h3 class="text-lg font-medium mb-4">Complex Items</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Virtual list with more complex item templates.
        </p>
        <div class="border rounded-lg overflow-hidden">
          <sc-virtual-list
            [items]="users()"
            [itemHeight]="72"
            height="360px"
            [trackByFn]="trackById"
          >
            <ng-template let-user let-index="index">
              <div
                class="flex items-center gap-4 px-4 h-full border-b hover:bg-muted/50 transition-colors"
              >
                <div
                  class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-sm font-medium text-primary">
                    {{ getInitials(user.name) }}
                  </span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-medium truncate">{{ user.name }}</p>
                  <p class="text-sm text-muted-foreground truncate">
                    {{ user.email }}
                  </p>
                </div>
                <span class="px-2 py-1 text-xs rounded-full bg-muted">
                  {{ user.role }}
                </span>
              </div>
            </ng-template>
          </sc-virtual-list>
        </div>
      </section>

      <!-- With Scroll Controls -->
      <section>
        <h3 class="text-lg font-medium mb-4">With Scroll Controls</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Programmatic scrolling to specific items.
        </p>
        <div class="flex gap-2 mb-4">
          <button
            class="px-3 py-1.5 text-sm border rounded-md hover:bg-muted transition-colors"
            (click)="scrollToTop()"
          >
            Scroll to Top
          </button>
          <button
            class="px-3 py-1.5 text-sm border rounded-md hover:bg-muted transition-colors"
            (click)="scrollToMiddle()"
          >
            Scroll to Middle
          </button>
          <button
            class="px-3 py-1.5 text-sm border rounded-md hover:bg-muted transition-colors"
            (click)="scrollToBottom()"
          >
            Scroll to Bottom
          </button>
          <input
            type="number"
            placeholder="Index"
            class="w-24 px-3 py-1.5 text-sm border rounded-md"
            #indexInput
          />
          <button
            class="px-3 py-1.5 text-sm border rounded-md hover:bg-muted transition-colors"
            (click)="scrollToIndex(indexInput.value)"
          >
            Go
          </button>
        </div>
        <div class="border rounded-lg overflow-hidden">
          <sc-virtual-list
            #controlledList
            [items]="items()"
            [itemHeight]="40"
            height="250px"
          >
            <ng-template let-item let-index="index">
              <div
                class="flex items-center px-4 h-full border-b hover:bg-muted/50 transition-colors"
              >
                <span class="w-20 text-muted-foreground text-sm font-mono">
                  #{{ (index + 1).toString().padStart(5, '0') }}
                </span>
                <span class="flex-1">{{ item }}</span>
              </div>
            </ng-template>
          </sc-virtual-list>
        </div>
      </section>

      <!-- Custom Height -->
      <section>
        <h3 class="text-lg font-medium mb-4">Custom Container Height</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Adjust the container height as needed.
        </p>
        <div class="border rounded-lg overflow-hidden">
          <sc-virtual-list
            [items]="items().slice(0, 500)"
            [itemHeight]="36"
            height="200px"
          >
            <ng-template let-item let-index="index">
              <div
                class="flex items-center px-4 h-full border-b text-sm hover:bg-muted/50 transition-colors"
              >
                <span class="w-12 text-muted-foreground">{{ index + 1 }}</span>
                <span class="flex-1">{{ item }}</span>
              </div>
            </ng-template>
          </sc-virtual-list>
        </div>
      </section>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualListDemoComponent {
  readonly controlledList = viewChild<ScVirtualList<string>>('controlledList');

  readonly visibleRange = signal<VirtualListRange>({ start: 0, end: 0 });

  readonly items = signal<string[]>(
    Array.from(
      { length: 10000 },
      (_, i) => \`Item \${i + 1} - Lorem ipsum dolor sit amet\`,
    ),
  );

  readonly users = signal<User[]>(
    Array.from({ length: 5000 }, (_, i) => ({
      id: i + 1,
      name: \`User \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: ['Admin', 'Editor', 'Viewer', 'Guest'][i % 4],
    })),
  );

  readonly trackById = (index: number, item: User) => item.id;

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  onRangeChange(range: VirtualListRange): void {
    this.visibleRange.set(range);
  }

  scrollToTop(): void {
    this.controlledList()?.scrollToTop('smooth');
  }

  scrollToMiddle(): void {
    const middleIndex = Math.floor(this.items().length / 2);
    this.controlledList()?.scrollToIndex(middleIndex, 'smooth');
  }

  scrollToBottom(): void {
    this.controlledList()?.scrollToBottom('smooth');
  }

  scrollToIndex(value: string): void {
    const index = parseInt(value, 10);
    if (!isNaN(index) && index >= 0) {
      this.controlledList()?.scrollToIndex(index, 'smooth');
    }
  }
}`;
}
