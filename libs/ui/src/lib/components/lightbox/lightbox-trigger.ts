import { Directive, HostListener, inject, input } from '@angular/core';
import { ScLightbox } from './lightbox';

@Directive({
  selector: '[sc-lightbox-trigger]',
  host: {
    'data-slot': 'lightbox-trigger',
    '[style.cursor]': '"pointer"',
  },
})
export class ScLightboxTrigger {
  private readonly lightbox = inject(ScLightbox);
  readonly index = input<number>(0);

  @HostListener('click')
  onClick(): void {
    this.lightbox.open(this.index());
  }
}
