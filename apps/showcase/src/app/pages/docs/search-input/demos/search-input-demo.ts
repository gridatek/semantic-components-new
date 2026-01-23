import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScSearchInput } from '@semantic-components/ui';
import type { SearchSuggestion } from '@semantic-components/ui';

@Component({
  selector: 'sc-search-input-demo',
  imports: [ScSearchInput],
  template: `
    <div class="flex flex-col gap-8">
      <!-- Basic Search -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Basic Search</h3>
        <sc-search-input
          [suggestions]="suggestions"
          (search)="onSearch($event)"
          (suggestionSelect)="onSelect($event)"
          class="max-w-md"
        />
      </div>

      <!-- With Loading -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">With Loading State</h3>
        <sc-search-input
          [suggestions]="asyncSuggestions()"
          [loading]="isLoading()"
          (search)="onAsyncSearch($event)"
          (suggestionSelect)="onSelect($event)"
          class="max-w-md"
        />
      </div>

      <!-- With Categories -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">With Categories</h3>
        <sc-search-input
          [suggestions]="categorizedSuggestions"
          placeholder="Search products..."
          (suggestionSelect)="onSelect($event)"
          class="max-w-md"
        />
      </div>

      <!-- Selected Item -->
      @if (selectedItem()) {
        <div class="rounded-lg border bg-card p-4 max-w-md">
          <p class="text-sm">
            Selected:
            <span class="font-medium">{{ selectedItem()?.label }}</span>
          </p>
          @if (selectedItem()?.description) {
            <p class="text-xs text-muted-foreground">
              {{ selectedItem()?.description }}
            </p>
          }
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputDemoComponent {
  readonly selectedItem = signal<SearchSuggestion | null>(null);
  readonly isLoading = signal(false);
  readonly asyncSuggestions = signal<SearchSuggestion[]>([]);

  readonly suggestions: SearchSuggestion[] = [
    { id: '1', label: 'Apple', description: 'A red fruit' },
    { id: '2', label: 'Banana', description: 'A yellow fruit' },
    { id: '3', label: 'Cherry', description: 'A small red fruit' },
    { id: '4', label: 'Date', description: 'A sweet dried fruit' },
    { id: '5', label: 'Elderberry', description: 'A dark purple berry' },
  ];

  readonly categorizedSuggestions: SearchSuggestion[] = [
    {
      id: '1',
      label: 'MacBook Pro',
      description: 'Laptop',
      category: 'Electronics',
    },
    {
      id: '2',
      label: 'iPhone 15',
      description: 'Smartphone',
      category: 'Electronics',
    },
    {
      id: '3',
      label: 'AirPods Pro',
      description: 'Earbuds',
      category: 'Electronics',
    },
    {
      id: '4',
      label: 'Nike Air Max',
      description: 'Running shoes',
      category: 'Footwear',
    },
    {
      id: '5',
      label: 'Adidas Ultraboost',
      description: 'Running shoes',
      category: 'Footwear',
    },
    {
      id: '6',
      label: "Levi's 501",
      description: 'Jeans',
      category: 'Clothing',
    },
  ];

  onSearch(query: string): void {
    console.log('Search:', query);
  }

  onAsyncSearch(query: string): void {
    this.isLoading.set(true);
    this.asyncSuggestions.set([]);

    // Simulate API call
    setTimeout(() => {
      this.asyncSuggestions.set(
        this.suggestions.filter((s) =>
          s.label.toLowerCase().includes(query.toLowerCase()),
        ),
      );
      this.isLoading.set(false);
    }, 500);
  }

  onSelect(suggestion: SearchSuggestion): void {
    this.selectedItem.set(suggestion);
  }
}
