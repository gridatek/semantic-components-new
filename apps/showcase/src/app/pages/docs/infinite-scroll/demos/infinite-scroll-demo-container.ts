import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScInfiniteScrollDemo } from './infinite-scroll-demo';

@Component({
  selector: 'app-infinite-scroll-demo-container',
  imports: [DemoContainer, ScInfiniteScrollDemo],
  template: `
    <app-demo-container title="Infinite" [code]="code">
      <app-infinite-scroll-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInfiniteScrollDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScInfiniteScroll,
  ScInfiniteScrollLoader,
} from '@semantic-components/ui';

interface Item {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-infinite-scroll-demo',
  imports: [ScInfiniteScroll, ScInfiniteScrollLoader],
  template: \`
    <div class="space-y-8">
      <!-- Basic Infinite Scroll -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Basic Infinite Scroll</h3>
        <p class="text-sm text-muted-foreground">
          Scroll down to automatically load more items.
        </p>
        <sc-infinite-scroll
          class="h-[400px] border rounded-lg"
          [loading]="basicLoading()"
          [hasReachedEnd]="basicReachedEnd()"
          (loadMore)="loadMoreBasic()"
        >
          <div class="p-4 space-y-2">
            @for (item of basicItems(); track item.id) {
              <div class="p-4 border rounded-lg">
                <h4 class="font-medium">{{ item.title }}</h4>
                <p class="text-sm text-muted-foreground">
                  {{ item.description }}
                </p>
              </div>
            }
          </div>
        </sc-infinite-scroll>
        <p class="text-sm text-muted-foreground">
          Loaded {{ basicItems().length }} items
        </p>
      </section>

      <!-- Custom Loader -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Custom Loader</h3>
        <p class="text-sm text-muted-foreground">
          Use a custom loading indicator.
        </p>
        <sc-infinite-scroll
          class="h-[300px] border rounded-lg"
          [loading]="customLoading()"
          [hasReachedEnd]="customReachedEnd()"
          (loadMore)="loadMoreCustom()"
        >
          <div class="p-4 space-y-2">
            @for (item of customItems(); track item.id) {
              <div class="p-3 border rounded">
                {{ item.title }}
              </div>
            }
          </div>

          <div
            sc-infinite-scroll-loader
            class="flex items-center justify-center py-4 gap-2"
          >
            <div
              class="size-2 bg-primary rounded-full animate-bounce"
              style="animation-delay: 0ms"
            ></div>
            <div
              class="size-2 bg-primary rounded-full animate-bounce"
              style="animation-delay: 150ms"
            ></div>
            <div
              class="size-2 bg-primary rounded-full animate-bounce"
              style="animation-delay: 300ms"
            ></div>
          </div>
        </sc-infinite-scroll>
      </section>

      <!-- Custom End Message -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Custom End Message</h3>
        <p class="text-sm text-muted-foreground">
          Customize the message shown when all items are loaded.
        </p>
        <sc-infinite-scroll
          class="h-[300px] border rounded-lg"
          [loading]="endLoading()"
          [hasReachedEnd]="endReachedEnd()"
          endMessage="You've reached the end! 🎉"
          (loadMore)="loadMoreEnd()"
        >
          <div class="p-4 space-y-2">
            @for (item of endItems(); track item.id) {
              <div class="p-3 border rounded">
                {{ item.title }}
              </div>
            }
          </div>
        </sc-infinite-scroll>
      </section>

      <!-- With Threshold -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Custom Threshold</h3>
        <p class="text-sm text-muted-foreground">
          Load more items when within 200px of the bottom (loads earlier).
        </p>
        <sc-infinite-scroll
          class="h-[300px] border rounded-lg"
          [loading]="thresholdLoading()"
          [hasReachedEnd]="thresholdReachedEnd()"
          [threshold]="200"
          (loadMore)="loadMoreThreshold()"
        >
          <div class="p-4 space-y-2">
            @for (item of thresholdItems(); track item.id) {
              <div class="p-3 border rounded">
                {{ item.title }}
              </div>
            }
          </div>
        </sc-infinite-scroll>
      </section>

      <!-- Card Grid -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Card Grid Layout</h3>
        <p class="text-sm text-muted-foreground">
          Infinite scroll with a grid of cards.
        </p>
        <sc-infinite-scroll
          class="h-[400px] border rounded-lg"
          [loading]="gridLoading()"
          [hasReachedEnd]="gridReachedEnd()"
          (loadMore)="loadMoreGrid()"
        >
          <div class="p-4 grid grid-cols-2 gap-4">
            @for (item of gridItems(); track item.id) {
              <div class="p-4 border rounded-lg bg-muted/50">
                <div class="aspect-video bg-muted rounded mb-2"></div>
                <h4 class="font-medium text-sm">{{ item.title }}</h4>
                <p class="text-xs text-muted-foreground">
                  {{ item.description }}
                </p>
              </div>
            }
          </div>
        </sc-infinite-scroll>
      </section>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInfiniteScrollDemo {
  // Basic
  readonly basicItems = signal<Item[]>(this.generateItems(0, 10));
  readonly basicLoading = signal(false);
  readonly basicReachedEnd = signal(false);

  // Custom loader
  readonly customItems = signal<Item[]>(this.generateItems(0, 8));
  readonly customLoading = signal(false);
  readonly customReachedEnd = signal(false);

  // End message
  readonly endItems = signal<Item[]>(this.generateItems(0, 5));
  readonly endLoading = signal(false);
  readonly endReachedEnd = signal(false);

  // Threshold
  readonly thresholdItems = signal<Item[]>(this.generateItems(0, 10));
  readonly thresholdLoading = signal(false);
  readonly thresholdReachedEnd = signal(false);

  // Grid
  readonly gridItems = signal<Item[]>(this.generateItems(0, 8));
  readonly gridLoading = signal(false);
  readonly gridReachedEnd = signal(false);

  private generateItems(start: number, count: number): Item[] {
    return Array.from({ length: count }, (_, i) => ({
      id: start + i + 1,
      title: \`Item \${start + i + 1}\`,
      description: \`This is the description for item \${start + i + 1}\`,
    }));
  }

  loadMoreBasic(): void {
    if (this.basicLoading() || this.basicReachedEnd()) return;
    this.basicLoading.set(true);

    setTimeout(() => {
      const currentLength = this.basicItems().length;
      if (currentLength >= 50) {
        this.basicReachedEnd.set(true);
      } else {
        this.basicItems.update((items) => [
          ...items,
          ...this.generateItems(currentLength, 10),
        ]);
      }
      this.basicLoading.set(false);
    }, 1000);
  }

  loadMoreCustom(): void {
    if (this.customLoading() || this.customReachedEnd()) return;
    this.customLoading.set(true);

    setTimeout(() => {
      const currentLength = this.customItems().length;
      if (currentLength >= 30) {
        this.customReachedEnd.set(true);
      } else {
        this.customItems.update((items) => [
          ...items,
          ...this.generateItems(currentLength, 8),
        ]);
      }
      this.customLoading.set(false);
    }, 1500);
  }

  loadMoreEnd(): void {
    if (this.endLoading() || this.endReachedEnd()) return;
    this.endLoading.set(true);

    setTimeout(() => {
      const currentLength = this.endItems().length;
      if (currentLength >= 15) {
        this.endReachedEnd.set(true);
      } else {
        this.endItems.update((items) => [
          ...items,
          ...this.generateItems(currentLength, 5),
        ]);
      }
      this.endLoading.set(false);
    }, 800);
  }

  loadMoreThreshold(): void {
    if (this.thresholdLoading() || this.thresholdReachedEnd()) return;
    this.thresholdLoading.set(true);

    setTimeout(() => {
      const currentLength = this.thresholdItems().length;
      if (currentLength >= 40) {
        this.thresholdReachedEnd.set(true);
      } else {
        this.thresholdItems.update((items) => [
          ...items,
          ...this.generateItems(currentLength, 10),
        ]);
      }
      this.thresholdLoading.set(false);
    }, 500);
  }

  loadMoreGrid(): void {
    if (this.gridLoading() || this.gridReachedEnd()) return;
    this.gridLoading.set(true);

    setTimeout(() => {
      const currentLength = this.gridItems().length;
      if (currentLength >= 24) {
        this.gridReachedEnd.set(true);
      } else {
        this.gridItems.update((items) => [
          ...items,
          ...this.generateItems(currentLength, 4),
        ]);
      }
      this.gridLoading.set(false);
    }, 1000);
  }
}`;
}
