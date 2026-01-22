import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { cn } from '../../utils';

@Component({
  selector: 'sc-stacked-layout',
  imports: [RouterOutlet],
  template: `
    <div class="min-h-screen flex flex-col">
      <ng-content select="[scNavbar]" />

      <main class="flex-1">
        <router-outlet />
      </main>

      <ng-content select="[scFooter]" />
    </div>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScStackedLayout {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block', this.classInput()));
}
