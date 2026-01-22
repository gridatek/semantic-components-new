import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScSidebarState } from './sidebar-state';

@Component({
  selector: 'div[sc-sidebar-provider]',
  template: `
    <ng-content />
  `,
  providers: [ScSidebarState],
  host: {
    'data-slot': 'sidebar-provider',
    '[class]': 'class()',
    '[style.--sidebar-width]': '"16rem"',
    '[style.--sidebar-width-icon]': '"3rem"',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarProvider {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar',
      this.classInput(),
    ),
  );
}
