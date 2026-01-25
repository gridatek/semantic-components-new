import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComboboxOption, ScCombobox } from '@semantic-components/ui';

@Component({
  selector: 'app-form-combobox-demo',
  imports: [ScCombobox],
  template: `
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComboboxDemo {
  readonly selectedTimezone = signal<string>('');

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
}
