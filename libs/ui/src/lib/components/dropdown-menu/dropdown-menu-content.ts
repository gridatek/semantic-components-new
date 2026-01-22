import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { CdkMenu } from '@angular/cdk/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { cn } from '../../utils';

@Component({
  selector: '[sc-dropdown-menu-content]',
  hostDirectives: [CdkMenu],
  imports: [OverlayModule],
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'dropdown-menu-content',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDropdownMenuContent {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      this.classInput(),
    ),
  );
}
