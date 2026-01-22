import { Directive } from '@angular/core';

@Directive({
  selector: '[sc-dropdown-menu]',
  host: {
    'data-slot': 'dropdown-menu',
  },
})
export class ScDropdownMenu {}
