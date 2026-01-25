import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScMultiSelect, MultiSelectOption } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-options-multi-select-demo',
  imports: [ScMultiSelect],
  template: `
    <div class="max-w-sm">
      <sc-multi-select
        [options]="options"
        placeholder="Select frameworks..."
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledOptionsMultiSelectDemo {
  readonly options: MultiSelectOption[] = [
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue' },
    { value: 'svelte', label: 'Svelte', disabled: true },
    { value: 'solid', label: 'Solid', disabled: true },
    { value: 'next', label: 'Next.js' },
  ];
}
