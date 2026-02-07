import { Directive } from '@angular/core';

@Directive({
  selector: '[toc]',
  host: {
    'data-toc': '',
  },
})
export class TocHeading {}
