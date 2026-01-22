import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScNavigationMenuItem } from './sc-navigation-menu-item';

@Component({
  selector: 'button[sc-navigation-menu-trigger]',
  hostDirectives: [CdkOverlayOrigin],
  template: `
    <ng-content />
    <svg
      class="relative top-px ml-1 size-3 transition-transform duration-200"
      [class.rotate-180]="menuItem.open()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  `,
  host: {
    'data-slot': 'navigation-menu-trigger',
    type: 'button',
    '[class]': 'class()',
    '[attr.aria-expanded]': 'menuItem.open()',
    '[attr.data-state]': 'menuItem.open() ? "open" : "closed"',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNavigationMenuTrigger {
  readonly menuItem = inject(ScNavigationMenuItem);
  readonly overlayOrigin = inject(CdkOverlayOrigin);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2',
      'text-sm font-medium transition-colors',
      'hover:bg-accent hover:text-accent-foreground',
      'focus:bg-accent focus:text-accent-foreground focus:outline-none',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[state=open]:bg-accent/50',
      this.classInput(),
    ),
  );
}
