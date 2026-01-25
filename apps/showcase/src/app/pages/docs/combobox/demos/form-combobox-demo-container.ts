import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FormComboboxDemo } from './form-combobox-demo';

@Component({
  selector: 'app-form-combobox-demo-container',
  imports: [DemoContainer, FormComboboxDemo],
  template: `
    <app-demo-container title="Form" [code]="code">
      <app-form-combobox-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComboboxDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComboboxOption, ScCombobox } from '@semantic-components/ui';

@Component({
  selector: 'app-form-combobox-demo',
  imports: [ScCombobox],
  template: \`
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
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComboboxDemo {
  readonly selectedTimezone = signal<string>('');

  readonly timezones: ComboboxOption[] = [
    { value: 'utc', label: 'UTC' },
    { value: 'est', label: 'Eastern Time (ET)' },
    { value: 'cst', label: 'Central Time (CT)' },
    // ... more timezones
  ];
}`;
}
