import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Inject,
  InjectionToken,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

export interface ScTooltipData {
  content: string;
  tooltipClass: string;
  tooltipId: string;
}

export const SC_TOOLTIP_DATA = new InjectionToken<ScTooltipData>('SC_TOOLTIP_DATA');

@Component({
  selector: 'sc-tooltip-overlay',
  template: `{{ data.content }}`,
  host: {
    'data-slot': 'tooltip-overlay',
    role: 'tooltip',
    '[id]': 'data.tooltipId',
    '[class]': 'hostClass()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTooltipOverlay {
  readonly visible = signal(false);

  protected readonly hostClass = computed(() =>
    cn(
      'bg-primary text-primary-foreground z-50 rounded-md px-3 py-1.5 text-xs max-w-xs',
      'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
      this.data.tooltipClass
    )
  );

  constructor(@Inject(SC_TOOLTIP_DATA) public data: ScTooltipData) {}
}
