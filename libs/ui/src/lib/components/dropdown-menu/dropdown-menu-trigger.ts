import { computed, Directive, inject, input } from '@angular/core';
import { CdkMenuTrigger } from '@angular/cdk/menu';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { cn } from '../../utils';

@Directive({
  selector: '[sc-dropdown-menu-trigger]',
  hostDirectives: [CdkMenuTrigger, CdkOverlayOrigin],
  host: {
    'data-slot': 'dropdown-menu-trigger',
    '[class]': 'class()',
  },
})
export class ScDropdownMenuTrigger {
  readonly trigger = inject(CdkMenuTrigger);
  readonly overlayOrigin = inject(CdkOverlayOrigin);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('outline-none', this.classInput()),
  );
}
