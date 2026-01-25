import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  inject,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { cn } from '../../utils';
import { ScNavbar } from './navbar';

@Component({
  selector: 'div[sc-navbar-provider]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'navbar-provider',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNavbarProvider {
  readonly classInput = input<string>('', { alias: 'class' });

  /** Whether the mobile menu is open */
  readonly open = model<boolean>(false);

  protected readonly class = computed(() => cn('', this.classInput()));

  private readonly navbar = contentChild(ScNavbar);
  readonly origin = computed(() => this.navbar()?.overlayOrigin);

  private readonly router = inject(Router);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        filter(() => this.open()),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.open.set(false));
  }
}
