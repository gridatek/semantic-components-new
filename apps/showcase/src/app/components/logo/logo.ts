import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'svg[app-logo]',
  template: `
    <svg:rect x="2" y="2" width="20" height="20" rx="4" />
    <svg:path
      d="M10.5 8C10 7.4 9.2 7 8 7C6.5 7 5.5 8 5.5 9.5C5.5 11 7 11.5 8.5 12C10 12.5 11.5 13 11.5 14.5C11.5 16 10 17 8.5 17C7.3 17 6.5 16.6 6 16"
    />
    <svg:path
      d="M18 8C17.4 7.3 16.5 7 15.5 7C13.6 7 12.5 8.5 12.5 12C12.5 15.5 13.6 17 15.5 17C16.5 17 17.4 16.7 18 16"
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
