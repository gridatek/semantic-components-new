import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScMultiSelect, MultiSelectOption } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-multi-select-demo',
  imports: [ScMultiSelect],
  template: `
    <div class="space-y-3">
      <div class="max-w-sm">
        <sc-multi-select
          [(value)]="value"
          [options]="options"
          placeholder="Select fruits..."
        />
      </div>
      <p class="text-sm text-muted-foreground">
        Selected: {{ value().join(', ') || 'None' }}
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicMultiSelectDemo {
  readonly value = signal<string[]>([]);

  readonly options: MultiSelectOption[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
    { value: 'fig', label: 'Fig' },
    { value: 'grape', label: 'Grape' },
  ];
}
