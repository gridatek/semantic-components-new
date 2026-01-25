import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScMultiSelect, MultiSelectOption } from '@semantic-components/ui';

@Component({
  selector: 'app-nosearch-multi-select-demo',
  imports: [ScMultiSelect],
  template: `
    <div class="max-w-sm">
      <sc-multi-select
        [options]="options"
        [searchable]="false"
        placeholder="Select sizes..."
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NosearchMultiSelectDemo {
  readonly options: MultiSelectOption[] = [
    { value: 'xs', label: 'Extra Small' },
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'Extra Large' },
  ];
}
