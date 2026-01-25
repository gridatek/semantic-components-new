import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComboboxOption, ScCombobox } from '@semantic-components/ui';

@Component({
  selector: 'app-countries-combobox-demo',
  imports: [ScCombobox],
  template: `
    <sc-combobox
      [(value)]="selectedCountry"
      [options]="countries"
      placeholder="Select country..."
      searchPlaceholder="Search country..."
      emptyText="No country found."
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesComboboxDemo {
  readonly selectedCountry = signal<string>('');

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
}
