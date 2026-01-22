import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  effect,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { SIGNAL, signalSetFn } from '@angular/core/primitives/signals';
import { cn } from '../../utils';
import { ScMenuTrigger } from './sc-menu-trigger';
import { ScMenuContent } from './sc-menu-content';

@Component({
  selector: 'div[sc-menu]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'menu',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMenu {
  readonly classInput = input<string>('', { alias: 'class' });

  private readonly triggerChild = contentChild(ScMenuTrigger);
  private readonly content = contentChild(ScMenuContent, { descendants: true });

  readonly origin = computed(() => this.triggerChild()?.overlayOrigin);
  readonly trigger = computed(() => this.triggerChild()?.trigger);
  readonly menu = computed(() => this.content()?.menu);

  protected readonly class = computed(() => cn('relative', this.classInput()));

  constructor() {
    // Auto-connect trigger to menu
    effect(() => {
      const trigger = this.triggerChild()?.trigger;
      const menu = this.content()?.menu;
      if (trigger && menu) {
        signalSetFn(trigger.menu[SIGNAL], menu);
      }
    });
  }
}
