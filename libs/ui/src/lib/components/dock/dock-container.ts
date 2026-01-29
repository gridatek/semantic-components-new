import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { SC_DOCK } from './dock';

@Component({
  selector: 'div[sc-dock-container]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'dock-container',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDockContainer {
  readonly dock = inject(SC_DOCK);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(this.dock.dockClass(), this.classInput()),
  );
}
