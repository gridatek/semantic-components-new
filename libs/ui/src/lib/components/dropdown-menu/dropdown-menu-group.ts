import { Directive } from '@angular/core';

@Directive({
  selector: '[sc-dropdown-menu-group]',
  host: {
    'data-slot': 'dropdown-menu-group',
    role: 'group',
  },
})
export class ScDropdownMenuGroup {}
