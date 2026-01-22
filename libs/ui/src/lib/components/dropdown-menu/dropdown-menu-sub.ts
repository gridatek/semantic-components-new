import { Directive } from '@angular/core';

@Directive({
  selector: '[sc-dropdown-menu-sub]',
  host: {
    'data-slot': 'dropdown-menu-sub',
  },
})
export class ScDropdownMenuSub {}
