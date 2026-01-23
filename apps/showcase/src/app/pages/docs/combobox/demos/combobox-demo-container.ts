import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScComboboxDemo } from './combobox-demo';

@Component({
  selector: 'app-combobox-demo-container',
  imports: [DemoContainer, ScComboboxDemo],
  template: `
    <app-demo-container title="Combobox" [code]="code">
      <app-sc-combobox-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScComboboxDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComboboxOption, ScCombobox } from '@semantic-components/ui';

@Component({
  selector: 'app-sc-combobox-demo',
  imports: [ScCombobox],
  template: \`
    <div class="space-y-8">
      <!-- Default -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Default</h3>
        <sc-combobox
          [(value)]="selectedFramework"
          [options]="frameworks"
          placeholder="Select framework..."
          searchPlaceholder="Search framework..."
        />
        @if (selectedFramework()) {
          <p class="text-sm text-muted-foreground">
            Selected: {{ selectedFramework() }}
          </p>
        }
      </div>

      <!-- With Disabled Options -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Disabled Options</h3>
        <sc-combobox
          [(value)]="selectedStatus"
          [options]="statuses"
          placeholder="Select status..."
          searchPlaceholder="Search status..."
        />
      </div>

      <!-- Multiple Selection -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Multiple Selection</h3>
        <sc-combobox
          [multiple]="true"
          [(values)]="selectedLanguages"
          [options]="languages"
          placeholder="Select languages..."
          searchPlaceholder="Search language..."
        />
        @if (selectedLanguages().length > 0) {
          <p class="text-sm text-muted-foreground">
            Selected: {{ selectedLanguages().join(', ') }}
          </p>
        }
      </div>

      <!-- Countries -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Countries</h3>
        <sc-combobox
          [(value)]="selectedCountry"
          [options]="countries"
          placeholder="Select country..."
          searchPlaceholder="Search country..."
          emptyText="No country found."
        />
      </div>

      <!-- Form Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Form Example</h3>
        <div class="grid gap-4 max-w-sm">
          <div class="space-y-2">
            <label class="text-sm font-medium">Timezone</label>
            <sc-combobox
              [(value)]="selectedTimezone"
              [options]="timezones"
              placeholder="Select timezone..."
              searchPlaceholder="Search timezone..."
            />
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScComboboxDemo {
  readonly selectedFramework = signal<string>('');
  readonly selectedStatus = signal<string>('');
  readonly selectedLanguages = signal<string[]>([]);
  readonly selectedCountry = signal<string>('');
  readonly selectedTimezone = signal<string>('');

  readonly frameworks: ComboboxOption[] = [
    { value: 'next', label: 'Next.js' },
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
    { value: 'angular', label: 'Angular' },
  ];

  readonly statuses: ComboboxOption[] = [
    { value: 'backlog', label: 'Backlog' },
    { value: 'todo', label: 'Todo' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'done', label: 'Done' },
    { value: 'cancelled', label: 'Cancelled', disabled: true },
  ];

  readonly languages: ComboboxOption[] = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'es', label: 'Spanish' },
    { value: 'pt', label: 'Portuguese' },
    { value: 'ja', label: 'Japanese' },
    { value: 'zh', label: 'Chinese' },
  ];

  readonly countries: ComboboxOption[] = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'br', label: 'Brazil' },
    { value: 'in', label: 'India' },
    { value: 'mx', label: 'Mexico' },
  ];

  readonly timezones: ComboboxOption[] = [
    { value: 'utc', label: 'UTC' },
    { value: 'est', label: 'Eastern Time (ET)' },
    { value: 'cst', label: 'Central Time (CT)' },
    { value: 'mst', label: 'Mountain Time (MT)' },
    { value: 'pst', label: 'Pacific Time (PT)' },
    { value: 'gmt', label: 'Greenwich Mean Time (GMT)' },
    { value: 'cet', label: 'Central European Time (CET)' },
    { value: 'jst', label: 'Japan Standard Time (JST)' },
  ];
}`;
}
