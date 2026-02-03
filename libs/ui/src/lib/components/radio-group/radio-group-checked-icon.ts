import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'svg[sc-radio-checked-icon]',
  host: {
    'data-slot': 'radio-checked-icon',
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    class: 'size-2.5',
  },
  template: `<svg:circle cx="12" cy="12" r="10" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRadioCheckedIcon {}
