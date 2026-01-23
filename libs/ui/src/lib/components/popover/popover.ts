import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScPopoverProvider } from './popover-provider';

@Component({
  selector: 'div[sc-popover]',
  template: `
    <ng-content />
  `,
  host: {
    role: 'dialog',
    tabindex: '-1',
    'data-slot': 'popover',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPopover {
  readonly popover = inject(ScPopoverProvider);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'bg-popover text-popover-foreground z-50 w-72 rounded-md border p-4 shadow-md outline-none',
      this.popover.open()
        ? 'opacity-100 scale-100 transition-[opacity,transform] duration-150 ease-out'
        : 'opacity-0 scale-95 transition-[opacity,transform] duration-150 ease-in',
      this.classInput(),
    ),
  );
}
