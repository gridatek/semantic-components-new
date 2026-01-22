import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { cn } from '../../utils';

@Component({
  selector: '[sc-dropdown-menu-sub-trigger]',
  hostDirectives: [CdkMenuItem, CdkMenuTrigger],
  template: `
    <ng-content />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="ml-auto size-4"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  `,
  host: {
    'data-slot': 'dropdown-menu-sub-trigger',
    '[class]': 'class()',
    '[attr.data-inset]': 'inset() || null',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDropdownMenuSubTrigger {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly inset = input<boolean>(false);

  protected readonly class = computed(() =>
    cn(
      'flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none',
      'focus:bg-accent data-[state=open]:bg-accent',
      '[&>svg]:size-4 [&>svg]:shrink-0',
      this.inset() && 'pl-8',
      this.classInput(),
    ),
  );
}
