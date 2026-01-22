import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { cn } from '../../utils';
import { ScSidebarState } from './sidebar-state';

@Component({
  selector: 'button[sc-sidebar-trigger]',
  template: `
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
      class="size-4"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
    </svg>
    <span class="sr-only">Toggle Sidebar</span>
  `,
  host: {
    'data-slot': 'sidebar-trigger',
    type: 'button',
    '[class]': 'class()',
    '(click)': 'state.toggle()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarTrigger {
  readonly state = inject(ScSidebarState);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'inline-flex size-8 items-center justify-center rounded-md',
      'hover:bg-accent hover:text-accent-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
      this.classInput(),
    ),
  );
}
