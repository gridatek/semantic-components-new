import { Directive, model } from '@angular/core';

@Directive({
  selector: '[sc-dropdown-menu-radio-group]',
  host: {
    'data-slot': 'dropdown-menu-radio-group',
    role: 'group',
  },
})
export class ScDropdownMenuRadioGroup {
  readonly value = model<string>('');
}
