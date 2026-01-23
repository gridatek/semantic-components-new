import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScMultiSelect, MultiSelectOption } from '@semantic-components/ui';

@Component({
  selector: 'sc-multi-select-demo',
  imports: [ScMultiSelect],
  template: `
    <div class="space-y-8">
      <!-- Basic Multi-Select -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Basic Multi-Select</h3>
        <p class="text-sm text-muted-foreground">
          Select multiple options from a dropdown. Selected items appear as
          chips.
        </p>
        <div class="max-w-sm">
          <sc-multi-select
            [(value)]="basicValue"
            [options]="fruitOptions"
            placeholder="Select fruits..."
          />
        </div>
        <p class="text-sm text-muted-foreground">
          Selected: {{ basicValue().join(', ') || 'None' }}
        </p>
      </section>

      <!-- With Select All -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">With Select All</h3>
        <p class="text-sm text-muted-foreground">
          Enable the "Select All" option to quickly select or deselect all
          items.
        </p>
        <div class="max-w-sm">
          <sc-multi-select
            [(value)]="selectAllValue"
            [options]="colorOptions"
            [showSelectAll]="true"
            placeholder="Select colors..."
          />
        </div>
      </section>

      <!-- Without Chips (Count Display) -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Count Display</h3>
        <p class="text-sm text-muted-foreground">
          Show selected count instead of individual chips for a more compact
          display.
        </p>
        <div class="max-w-sm">
          <sc-multi-select
            [(value)]="countValue"
            [options]="countryOptions"
            [showChips]="false"
            placeholder="Select countries..."
          />
        </div>
      </section>

      <!-- With Disabled Options -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">With Disabled Options</h3>
        <p class="text-sm text-muted-foreground">
          Some options can be disabled to prevent selection.
        </p>
        <div class="max-w-sm">
          <sc-multi-select
            [options]="optionsWithDisabled"
            placeholder="Select frameworks..."
          />
        </div>
      </section>

      <!-- Not Searchable -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Without Search</h3>
        <p class="text-sm text-muted-foreground">
          Disable the search input for simpler lists.
        </p>
        <div class="max-w-sm">
          <sc-multi-select
            [options]="sizeOptions"
            [searchable]="false"
            placeholder="Select sizes..."
          />
        </div>
      </section>

      <!-- Disabled State -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Disabled</h3>
        <p class="text-sm text-muted-foreground">
          Disabled multi-select state.
        </p>
        <div class="max-w-sm">
          <sc-multi-select
            [options]="fruitOptions"
            [disabled]="true"
            placeholder="Select fruits..."
          />
        </div>
      </section>

      <!-- In a Form -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Form Example</h3>
        <p class="text-sm text-muted-foreground">
          Multi-select used in a user preferences form.
        </p>
        <div class="max-w-md rounded-lg border p-4 space-y-4">
          <div class="space-y-2">
            <label class="text-sm font-medium">Name</label>
            <input
              type="text"
              class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              placeholder="Your name"
            />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-medium">Interests</label>
            <sc-multi-select
              [(value)]="interestsValue"
              [options]="interestOptions"
              [showSelectAll]="true"
              placeholder="Select your interests..."
            />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-medium">Preferred Contact Methods</label>
            <sc-multi-select
              [options]="contactOptions"
              [searchable]="false"
              placeholder="How can we reach you?"
            />
          </div>
          <button
            class="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Save Preferences
          </button>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMultiSelectDemo {
  readonly basicValue = signal<string[]>([]);
  readonly selectAllValue = signal<string[]>([]);
  readonly countValue = signal<string[]>([]);
  readonly interestsValue = signal<string[]>([]);

  readonly fruitOptions: MultiSelectOption[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
    { value: 'fig', label: 'Fig' },
    { value: 'grape', label: 'Grape' },
  ];

  readonly colorOptions: MultiSelectOption[] = [
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
    { value: 'indigo', label: 'Indigo' },
    { value: 'violet', label: 'Violet' },
  ];

  readonly countryOptions: MultiSelectOption[] = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'kr', label: 'South Korea' },
    { value: 'br', label: 'Brazil' },
    { value: 'in', label: 'India' },
  ];

  readonly optionsWithDisabled: MultiSelectOption[] = [
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue' },
    { value: 'svelte', label: 'Svelte', disabled: true },
    { value: 'solid', label: 'Solid', disabled: true },
    { value: 'next', label: 'Next.js' },
  ];

  readonly sizeOptions: MultiSelectOption[] = [
    { value: 'xs', label: 'Extra Small' },
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'Extra Large' },
  ];

  readonly interestOptions: MultiSelectOption[] = [
    { value: 'tech', label: 'Technology' },
    { value: 'sports', label: 'Sports' },
    { value: 'music', label: 'Music' },
    { value: 'movies', label: 'Movies' },
    { value: 'travel', label: 'Travel' },
    { value: 'food', label: 'Food & Cooking' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'reading', label: 'Reading' },
  ];

  readonly contactOptions: MultiSelectOption[] = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone' },
    { value: 'sms', label: 'SMS' },
    { value: 'push', label: 'Push Notifications' },
  ];
}
