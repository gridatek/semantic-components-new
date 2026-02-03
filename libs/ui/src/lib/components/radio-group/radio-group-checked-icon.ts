import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiCircleIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'sc-radio-checked-icon',
  imports: [SiCircleIcon],
  host: {
    'data-slot': 'radio-checked-icon',
  },
  template: `<svg si-circle-icon class="size-2.5 fill-current"></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRadioCheckedIcon {}
