import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MasonryGridDemoComponent } from './masonry-grid-demo';

@Component({
  selector: 'app-masonry-grid-demo-container',
  imports: [DemoContainer, MasonryGridDemoComponent],
  template: `
    <app-demo-container title="Masonry" [code]="code">
      <app-masonry-grid-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MasonryGridDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScMasonryGrid, ScMasonryItem } from '@semantic-components/ui';

interface DemoItem {
  id: number;
  height: number;
  color: string;
  title: string;
}

@Component({
  selector: 'app-masonry-grid-demo',
  imports: [ScMasonryGrid, ScMasonryItem],
  template: \`
    <div class="space-y-8">
      <!-- Basic Demo -->
      <section>
        <h3 class="text-lg font-medium mb-4">Basic Masonry Grid</h3>
        <sc-masonry-grid [columns]="4" [gap]="16">
          @for (item of items(); track item.id) {
            <sc-masonry-item>
              <div
                class="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                [style.background-color]="item.color"
                [style.height.px]="item.height"
              >
                <div class="p-4 text-white">
                  <p class="font-medium">{{ item.title }}</p>
                  <p class="text-sm opacity-75">{{ item.height }}px tall</p>
                </div>
              </div>
            </sc-masonry-item>
          }
        </sc-masonry-grid>
      </section>

      <!-- Image Gallery -->
      <section>
        <h3 class="text-lg font-medium mb-4">Image Gallery</h3>
        <sc-masonry-grid [columns]="3" [gap]="12">
          @for (image of images(); track image.id) {
            <sc-masonry-item>
              <div class="group relative rounded-lg overflow-hidden bg-muted">
                <img
                  [src]="image.url"
                  [alt]="image.title"
                  class="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
                >
                  <div class="p-4 text-white">
                    <p class="font-medium">{{ image.title }}</p>
                    <p class="text-sm opacity-75">{{ image.category }}</p>
                  </div>
                </div>
              </div>
            </sc-masonry-item>
          }
        </sc-masonry-grid>
      </section>

      <!-- Custom Breakpoints -->
      <section>
        <h3 class="text-lg font-medium mb-4">Custom Breakpoints</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Resize the window to see responsive behavior: 1 column on mobile, 2 on
          tablet, 3 on desktop
        </p>
        <sc-masonry-grid
          [columns]="3"
          [gap]="20"
          [breakpoints]="[
            { minWidth: 0, columns: 1 },
            { minWidth: 640, columns: 2 },
            { minWidth: 1024, columns: 3 },
          ]"
        >
          @for (item of items().slice(0, 9); track item.id) {
            <sc-masonry-item>
              <div
                class="rounded-lg border bg-card p-4"
                [style.min-height.px]="item.height"
              >
                <h4 class="font-medium">Card {{ item.id }}</h4>
                <p class="text-sm text-muted-foreground mt-2">
                  This card has a minimum height of {{ item.height }}px. The
                  masonry layout automatically arranges cards in columns.
                </p>
              </div>
            </sc-masonry-item>
          }
        </sc-masonry-grid>
      </section>

      <!-- Cards Layout -->
      <section>
        <h3 class="text-lg font-medium mb-4">Content Cards</h3>
        <sc-masonry-grid [columns]="3" [gap]="16">
          @for (card of cards(); track card.id) {
            <sc-masonry-item>
              <div class="rounded-lg border bg-card overflow-hidden">
                @if (card.image) {
                  <img
                    [src]="card.image"
                    [alt]="card.title"
                    class="w-full h-32 object-cover"
                  />
                }
                <div class="p-4">
                  <h4 class="font-semibold">{{ card.title }}</h4>
                  <p class="text-sm text-muted-foreground mt-2">
                    {{ card.description }}
                  </p>
                  @if (card.tags.length > 0) {
                    <div class="flex flex-wrap gap-1 mt-3">
                      @for (tag of card.tags; track tag) {
                        <span class="px-2 py-0.5 text-xs bg-muted rounded-full">
                          {{ tag }}
                        </span>
                      }
                    </div>
                  }
                </div>
              </div>
            </sc-masonry-item>
          }
        </sc-masonry-grid>
      </section>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MasonryGridDemo {
  readonly colors = [
    '#ef4444',
    '#f97316',
    '#f59e0b',
    '#eab308',
    '#84cc16',
    '#22c55e',
    '#10b981',
    '#14b8a6',
    '#06b6d4',
    '#0ea5e9',
    '#3b82f6',
    '#6366f1',
    '#8b5cf6',
    '#a855f7',
    '#d946ef',
    '#ec4899',
    '#f43f5e',
  ];

  readonly items = signal<DemoItem[]>(
    Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      height: Math.floor(Math.random() * 150) + 100,
      color: this.colors[i % this.colors.length],
      title: \`Item \${i + 1}\`,
    })),
  );

  readonly images = signal([
    {
      id: 1,
      url: 'https://picsum.photos/seed/m1/400/300',
      title: 'Mountain View',
      category: 'Nature',
    },
    {
      id: 2,
      url: 'https://picsum.photos/seed/m2/400/500',
      title: 'City Lights',
      category: 'Urban',
    },
    {
      id: 3,
      url: 'https://picsum.photos/seed/m3/400/350',
      title: 'Ocean Waves',
      category: 'Nature',
    },
    {
      id: 4,
      url: 'https://picsum.photos/seed/m4/400/450',
      title: 'Forest Path',
      category: 'Nature',
    },
    {
      id: 5,
      url: 'https://picsum.photos/seed/m5/400/280',
      title: 'Desert Sunset',
      category: 'Nature',
    },
    {
      id: 6,
      url: 'https://picsum.photos/seed/m6/400/400',
      title: 'Street Art',
      category: 'Urban',
    },
    {
      id: 7,
      url: 'https://picsum.photos/seed/m7/400/320',
      title: 'Lake Reflection',
      category: 'Nature',
    },
    {
      id: 8,
      url: 'https://picsum.photos/seed/m8/400/380',
      title: 'Architecture',
      category: 'Urban',
    },
    {
      id: 9,
      url: 'https://picsum.photos/seed/m9/400/420',
      title: 'Autumn Leaves',
      category: 'Nature',
    },
  ]);

  readonly cards = signal([
    {
      id: 1,
      title: 'Getting Started with Angular',
      description:
        'Learn the basics of Angular framework and build your first application.',
      image: 'https://picsum.photos/seed/c1/400/200',
      tags: ['Angular', 'Tutorial'],
    },
    {
      id: 2,
      title: 'Design Systems',
      description:
        'How to create and maintain a design system for your organization.',
      image: null,
      tags: ['Design', 'UI/UX'],
    },
    {
      id: 3,
      title: 'TypeScript Tips',
      description:
        'Advanced TypeScript patterns and best practices for better code quality and maintainability.',
      image: 'https://picsum.photos/seed/c3/400/150',
      tags: ['TypeScript', 'JavaScript'],
    },
    {
      id: 4,
      title: 'CSS Grid vs Flexbox',
      description:
        'Understanding when to use CSS Grid and when to use Flexbox.',
      image: null,
      tags: ['CSS', 'Layout'],
    },
    {
      id: 5,
      title: 'Performance Optimization',
      description:
        'Tips and tricks for optimizing web application performance.',
      image: 'https://picsum.photos/seed/c5/400/180',
      tags: ['Performance', 'Web'],
    },
    {
      id: 6,
      title: 'Accessibility Best Practices',
      description:
        'Building inclusive web applications that work for everyone.',
      image: null,
      tags: ['A11y', 'Web'],
    },
  ]);
}`;
}
