import { Directive, computed, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScSidebarState } from './sidebar-state.service';

@Directive({
  selector: 'button[sc-sidebar-trigger]',
  host: {
    'data-slot': 'sidebar-trigger',
    '[class]': 'class()',
    '(click)': 'onClick($event)',
  },
})
export class ScSidebarTrigger {
  readonly state = inject(ScSidebarState);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('', this.classInput()));

  protected onClick(event: MouseEvent): void {
    event.preventDefault();
    if (this.state.isMobile()) {
      this.state.toggleMobile();
    } else {
      this.state.toggle();
    }
  }
}
