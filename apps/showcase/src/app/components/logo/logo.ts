import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'svg[app-logo]',
  template: `
    <svg:rect x="3" y="3" width="18" height="18" rx="4" />
    <svg:path
      d="M14 8C13.5 7.4 12.7 7 11.5 7C10 7 9 8 9 9.5C9 11 10.5 11.5 12 12C13.5 12.5 15 13 15 14.5C15 16 13.5 17 12 17C10.8 17 10 16.6 9.5 16"
    />
  `,
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'aria-hidden': 'true',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Logo {}
