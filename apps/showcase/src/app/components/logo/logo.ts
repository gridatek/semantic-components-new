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
      d="M9.5 8C9 7.4 8.2 7 7 7C5.5 7 4.5 8 4.5 9.5C4.5 11 6 11.5 7.5 12C9 12.5 10.5 13 10.5 14.5C10.5 16 9 17 7.5 17C6.3 17 5.5 16.6 5 16"
    />
    <svg:path
      d="M19 8C18.4 7.3 17.5 7 16.5 7C14.6 7 13.5 8.5 13.5 12C13.5 15.5 14.6 17 16.5 17C17.5 17 18.4 16.7 19 16"
    />
  `,
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: '24',
    height: '24',
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
