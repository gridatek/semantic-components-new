import { Directive } from '@angular/core';

@Directive({
  selector: 'svg[sc-radio-checked-icon]',
  host: {
    'data-slot': 'radio-checked-icon',
    class: 'size-2.5 fill-current',
  },
})
export class ScRadioCheckedIcon {}
