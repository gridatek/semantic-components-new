import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComboboxOption, ScCombobox } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-combobox-demo',
  imports: [ScCombobox],
  template: `
    <sc-combobox
      [(value)]="selectedStatus"
      [options]="statuses"
      placeholder="Select status..."
      searchPlaceholder="Search status..."
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledComboboxDemo {
  readonly selectedStatus = signal<string>('');

  readonly statuses: ComboboxOption[] = [
    { value: 'backlog', label: 'Backlog' },
    { value: 'todo', label: 'Todo' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'done', label: 'Done' },
    { value: 'cancelled', label: 'Cancelled', disabled: true },
  ];
}
