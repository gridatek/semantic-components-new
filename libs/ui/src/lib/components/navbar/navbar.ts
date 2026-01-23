import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'nav[sc-navbar]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'navbar',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNavbar {
  readonly classInput = input<string>('', { alias: 'class' });

  /** Whether the mobile menu is open */
  readonly mobileMenuOpen = model<boolean>(false);

  protected readonly class = computed(() =>
    cn(
      'flex items-center justify-between',
      'w-full px-4 py-3 md:px-6',
      'bg-background border-b border-border',
      this.classInput(),
    ),
  );
}
