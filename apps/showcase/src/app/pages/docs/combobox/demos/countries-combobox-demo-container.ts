import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CountriesComboboxDemo } from './countries-combobox-demo';

@Component({
  selector: 'app-countries-combobox-demo-container',
  imports: [DemoContainer, CountriesComboboxDemo],
  template: `
    <app-demo-container title="Countries" [code]="code">
      <app-countries-combobox-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesComboboxDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComboboxOption, ScCombobox } from '@semantic-components/ui';

@Component({
  selector: 'app-countries-combobox-demo',
  imports: [ScCombobox],
  template: \`
    <sc-combobox
      [(value)]="selectedCountry"
      [options]="countries"
      placeholder="Select country..."
      searchPlaceholder="Search country..."
      emptyText="No country found."
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesComboboxDemo {
  readonly selectedCountry = signal<string>('');

  readonly countries: ComboboxOption[] = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    // ... more countries
  ];
}`;
}
