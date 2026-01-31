import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScTooltip } from '../tooltip.directive';

@Component({
  selector: 'app-disabled-tooltip-new-demo',
  imports: [ScTooltip],
  template: `
    <div class="flex flex-wrap items-center gap-4">
      <button
        scTooltip="This tooltip can be toggled"
        [tooltipDisabled]="isDisabled()"
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Hover me
      </button>
      <button
        (click)="toggleDisabled()"
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {{ isDisabled() ? 'Enable' : 'Disable' }} tooltip
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledTooltipNewDemo {
  readonly isDisabled = signal(false);

  toggleDisabled(): void {
    this.isDisabled.update((v) => !v);
  }
}
